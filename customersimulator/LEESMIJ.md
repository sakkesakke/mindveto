# CustomerSimulator

CustomerSimulator bezoekt één webpagina zoals zeven verschillende klanten dat doen. Daarna schrijft hij een rapport in gewone taal, in het Nederlands of het Engels.

| Klant | Wat wordt getest |
|---|---|
| Laptop | https, titel, Google-beschrijving, hoofdkop, privacy/contact/voorwaarden, kapotte links en afbeeldingen, technische fouten |
| Telefoon (390 px) | schuift de pagina opzij, knoppen groot genoeg om aan te tikken (24 px), te kleine tekst |
| Beperking | automatische WCAG 2.2 AA-scan (axe-core): contrast, alt-teksten, labels enz. |
| Toetsenbord | 40× Tab: zie je de focus, blijf je vastzitten, is er een link "Naar de inhoud" |
| Inzoomen 400 % | past de pagina op 320 px breed (WCAG 1.4.10) |
| Trage verbinding | hoe snel de klant de pagina ziet (LCP), hoe zwaar de pagina is |
| Privacy | cookies en andere bedrijven die laden vóór de klant iets aanklikt |

Het rapport is één HTML-bestand met screenshots erin. Je kunt het mailen of afdrukken als PDF.

## Eenmalig installeren (op je eigen computer)

1. Installeer **Node.js** (de versie met "LTS") via nodejs.org.
2. Open de map `customersimulator` in een terminal.
3. Typ `npm run setup` en druk op **Enter**.

## Een website testen

1. Typ `node simulate.mjs https://website-van-de-klant.nl` en druk op **Enter**.
2. Wacht ongeveer 15 seconden.
3. Het rapport staat in de map `reports`.
4. Wil je het rapport in het Engels? Zet dan `--lang en` achter de opdracht.
5. Open het bestand en kies **Afdrukken → Opslaan als PDF** om een PDF te maken.

Een voorbeeld vind je in `voorbeeld-rapport.html` (de test van mindveto.app zelf).

## Eerlijke grenzen

Deze grenzen staan ook in elk rapport:

- Er wordt maar één pagina getest.
- Er wordt niets gekocht, er wordt niet ingelogd en er worden geen formulieren verstuurd.
- Een automatische scan vindt ongeveer een derde tot de helft van de toegankelijkheidsproblemen.
- Het rapport is geen juridisch advies en geen bewijs dat de site aan de wet voldoet.
