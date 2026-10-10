# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and JavaScript at the repository root, with no build step or dependencies; it opens with a double click and publishes on any static host (GitHub Pages, Netlify, Vercel). Confirmed by the team on 10 Oct 2026.

## Users

- **Primary (this website):** owners of small daily-income businesses in Lima — bodegas, market stalls, menús, clothing stalls — usually Nuevo RUS or without RUC. They keep accounts in a paper notebook with a calculator and memory, sell in cash and Yape, and give credit ("fiado") to neighbours. Typical archetype: Rosa, 42-60, bodega owner (an archetype, not a real customer). They often get help with the phone from a son or nephew ("padrino digital").
- **Secondary:** small trades with RUC that work by order and deposit (shoemaker, tailor, workshop), and people who recommend the app to them (municipal savings banks, market associations, accountants).
- **Job:** "When I close the day, I want to know how much I sold, how much I spent, who owes me and how much I really kept, without adding up the notebook or mixing it with the household money, to decide what to buy tomorrow and be calm about SUNAT."

## Product Purpose

Centavot is a free Android app that replaces the shopkeeper's notebook and calculator: it records sales and expenses in one or two taps, separates household money from business money, tracks credit and orders with partial payments and WhatsApp reminders, warns before the business passes its tax-regime cap, and produces a summary for the accountant in Excel.

The website's job right now is to **recruit shopkeepers for the free pilot** (validation stage, Oct-Dec 2026; target 15-20 active businesses for the Concierge/pilot). Success is a shopkeeper (or their helper) leaving their contact through WhatsApp or the form.

## Positioning

- Against notebook and calculator: it adds up by itself, does not get lost, separates home and business, and knows the tax regime.
- Against Yape/Plin: those only see digital payments; Centavot records everything (cash, credit, expenses).
- Against personal-finance WhatsApp bots: Centavot is built for the business, not the person.
- Against generic shop ledgers: it knows Nuevo RUS and RER caps (sales **and** purchases in RUS).
- It does not replace the accountant; it hands them the data in order.

## Operating Context

- Use happens at the counter, several times a day, often one-handed, between customers; the key moment is closing the day.
- Adoption is in person ("no es con la publicidad, es con el uso"): 3-minute demo at the stall, market visits in 2-3 Lima districts, MYPE fairs, later one municipal savings bank and market associations.
- Shopkeepers trust third parties they know (the caja, the association, the accountant) more than ads.

## Capabilities and Constraints

- The product is an **Android app** (Kotlin Multiplatform, Android only for now). Package `com.app.centavot`. **Not yet on Google Play**; there is no public download link.
- Real features today: quick sale (frequent sales one tap, quick amounts), expenses business vs. personal, "Tu caja" day/week/month, regime cap alerts at 80/90/100 % (Nuevo RUS watches sales and purchases separately; RER annual sales), credit and orders with deposits, partial payments and WhatsApp reminder, reports for the accountant / personal / owed (CSV for Excel), usage history, export and delete all data, privacy notice.
- Works offline; data lives only on the phone; no bank credentials; nothing is sent to SUNAT (Ley 29733 compliance: consent, export, delete).
- Free during validation and adoption. Future paid web tier ("Centavot Pro") and B2B2C with municipal savings banks are **plans, not offers**: do not present prices.
- Regime caps shown in the app are referential (to be confirmed with an accountant).
- Undecided: official contact email (pending DE7); WhatsApp number for the pilot (placeholder until the team provides it).

## Brand Commitments

- Name: **Centavot** (the name "Lucka" was evaluated and discarded on 10 Oct 2026 because it already exists).
- Logo: hand holding a "Un Nuevo Sol" coin, halftone print look, single ink — `img/mano-moneda.webp` (from the team repo Centavot-docs, `Icono/icono.svg`).
- Voice: plain Peruvian Spanish of the shopkeeper ("plata", "fiado", "te quedó", "cuaderno"), warm, never technical; uses "tú".
- Message pillars: "Anota como siempre. Centavot hace las cuentas." · "Sabe cuánto ganaste hoy, no solo cuánto entró." · "No pedimos tu banco. No le mandamos nada a SUNAT. Tus datos son tuyos." · "Te avisamos antes de que tu régimen sea un problema." · "Tu cuaderno, pero que suma solo."
- It is a student project of the Proyecto Startup course, Universidad ESAN; team: Sandro Fabrizio Enrique Avila Agurto, James Frank Mendoza Rios, Meyly Cielo Mendoza Cobeñas.

## Evidence on Hand

- Real app screenshots (demo data "Rosa Quispe", labelled as example): `img/app-*.webp` here, and 25 more in Centavot-docs `capturas-app/`. They predate the 10 Oct UX improvements (Inicio tabs, collapsed details), so they may be slightly behind the current UI.
- One expert interview (Julio Quispe, lecturer, consultant and entrepreneur) with a demo of the app; 13 findings in Centavot-docs `Centavot_Documento_Maestro.md` §4. It is **one** interview with an expert, not customer validation.
- Market data with sources: Nuevo RUS 1.626 M taxpayers + RER 598 K (SUNAT 2025); 70.2 % informal workforce (INEI).
- **Absent — must not be fabricated:** customer testimonials, number of users, ratings, press, partner logos (no caja municipal is signed), Play Store badge or download link, prices.

## Product Principles

1. One sale, one tap: if recording takes longer than writing in the notebook, it loses.
2. The notebook is an ally: whoever keeps it can copy the day's totals at night.
3. Visible privacy: no bank, no SUNAT, data on the phone.
4. Zero surprises: nothing changes by itself; the user confirms and corrects.
5. The tax summary and cap alerts are the reward for daily use, not the hook.

## Accessibility & Inclusion

Audience aged 40-60 with low digital practice and mid/low-end Android phones, often on mobile data: large readable type, plain language, high contrast, works one-handed on a phone, light page weight, no reliance on hover.
