"""Comprobación local: python3 tests/smoke.py (requiere Playwright y Chrome)."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import shutil
import threading
from urllib.parse import parse_qs, urlparse
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = Path('/tmp/centavot-functional')
OUTPUT.mkdir(exist_ok=True)
class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT)))
threading.Thread(target=server.serve_forever, daemon=True).start()
url = f'http://127.0.0.1:{server.server_port}'
try:
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=shutil.which('google-chrome') or shutil.which('chromium'), args=['--no-sandbox'])
        for width in (1440, 768, 390, 320):
            page = browser.new_page(viewport={'width': width, 'height': 900}, reduced_motion='reduce')
            errors = []
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(url, wait_until='networkidle')
            page.evaluate('document.fonts.ready')
            page.locator('img').evaluate_all('(xs)=>xs.forEach(x=>x.loading="eager")')
            page.wait_for_function('Array.from(document.images).every(x=>x.complete && x.naturalWidth>0)')
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
            assert page.locator('h1').count() == 1
            assert page.locator('[data-whatsapp]').first.get_attribute('href').startswith('https://wa.me/51993375345?')
            assert page.locator('[data-whatsapp]').first.bounding_box()['y'] < 900
            assert page.locator('a[href^="#"]').evaluate_all('(xs)=>xs.every(x=>document.getElementById(x.hash.slice(1)))')
            track = page.locator('#presentacion-pista')
            assert track.locator('article').count() == 6
            for slide in range(1, 6):
                page.locator('#presentacion-siguiente').click()
                page.wait_for_function('(n) => Math.abs(document.querySelector("#presentacion-pista").scrollLeft / document.querySelector("#presentacion-pista").clientWidth - n) < .02', arg=slide)
                assert page.locator('#presentacion-estado').inner_text().startswith(f'{slide + 1} de 6')
                assert track.evaluate('(t) => Math.abs(t.clientHeight - t.children[Math.round(t.scrollLeft / t.clientWidth)].offsetHeight) <= 1')
            page.locator('#presentacion-siguiente').click()
            page.wait_for_function('document.querySelector("#presentacion-pista").scrollLeft === 0')
            page.locator('#presentacion-anterior').click()
            page.wait_for_function('document.querySelector("#presentacion-estado").textContent.startsWith("6 de 6")')
            assert track.locator('a').get_attribute('href').startswith('https://docs.google.com/forms/')
            track.focus()
            page.keyboard.press('Home')
            page.wait_for_function('document.querySelector("#presentacion-pista").scrollLeft === 0')
            page.keyboard.press('ArrowRight')
            page.wait_for_function('document.querySelector("#presentacion-estado").textContent.startsWith("2 de 6")')
            page.locator('#presentacion-anterior').click()
            assert page.locator('#presentacion-estado').inner_text().startswith('1 de 6')
            for value in ['3.50', '5.00', '4.20', '9.90', '45.00']:
                page.locator(f'[data-venta="{value}"]').click()
            assert page.locator('#caja-total').inner_text() == 'S/ 67.60'
            assert page.locator('#caja-cuenta').inner_text() == '5'
            for _ in range(10):
                page.locator('[data-venta="3.50"]').click()
            assert page.locator('#caja-total').inner_text() == 'S/ 102.60'
            assert page.locator('#cuaderno-lineas li').count() == 5
            page.locator('#prueba-reiniciar').click()
            assert page.locator('#caja-total').inner_text() == 'S/ 0.00'
            assert page.locator('#cuaderno-lineas li').count() == 0
            page.locator('#formulario button').click()
            assert page.locator('[aria-invalid="true"]').count() == 4
            assert page.locator('.campo__error:visible').count() == 4
            assert page.evaluate('document.activeElement.id') == 'formulario-error'
            page.locator('#formulario-error a').first.click()
            assert page.evaluate('document.activeElement.id') == 'f-nombre'
            page.locator('#f-nombre').fill('Rosa & José')
            page.locator('#f-rubro').select_option(label='Bodega')
            page.locator('#f-distrito').fill('San Juan de Lurigancho')
            page.locator('#f-celular').fill('123')
            page.locator('#formulario button').click()
            assert page.locator('[aria-invalid="true"]').count() == 1
            page.locator('#f-celular').fill('987 654 321')
            page.evaluate('window.open = url => {window.capturedWhatsapp=url;return null}')
            page.locator('#formulario button').click()
            sent = urlparse(page.evaluate('window.capturedWhatsapp'))
            assert sent.netloc == 'wa.me' and sent.path == '/51993375345'
            text = parse_qs(sent.query)['text'][0]
            assert 'Rosa & José' in text and '987654321' in text
            assert page.locator('#formulario-estado a').get_attribute('href') == sent.geturl()
            assert not page.locator('#formulario-error').is_visible()
            assert page.locator('[aria-invalid="true"]').count() == 0
            assert not errors, errors
            page.evaluate('document.querySelector("#formulario").reset(); document.querySelector("#formulario-estado").hidden=true; window.scrollTo(0,0)')
            page.screenshot(path=str(OUTPUT / f'{width}.png'), full_page=True)
            print(json.dumps({'width': width, 'layout': 'OK', 'demo': 'OK', 'validation': 'OK', 'whatsapp_composition': 'OK', 'js_errors': errors}))
            page.close()
        page = browser.new_page(viewport={'width': 390, 'height': 844}, java_script_enabled=False)
        page.goto(url)
        assert page.locator('h1').is_visible() and page.locator('[data-whatsapp]').is_visible()
        assert page.locator('[data-whatsapp]').get_attribute('href').startswith('https://wa.me/')
        assert not page.locator('#formulario').is_visible()
        assert not page.locator('.presentacion__controles').is_visible()
        page.locator('#presentacion-pista').hover()
        page.mouse.wheel(500, 0)
        page.wait_for_function('document.querySelector("#presentacion-pista").scrollLeft > 0')
        page.close()
        browser.close()
finally:
    server.shutdown()
