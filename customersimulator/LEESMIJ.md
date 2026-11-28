# CustomerSimulator

CustomerSimulator bezoekt één of meer webpagina's zoals zeven verschillende klanten dat doen. Daarna schrijft hij een rapport in gewone taal, in het Nederlands of het Engels.

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
2. Wacht ongeveer 15 seconden per pagina.
3. Wil je meerdere pagina's in één rapport (het Winkelpakket)? Zet dan alle adressen achter elkaar:
   `node simulate.mjs https://winkel.be https://winkel.be/product https://winkel.be/contact`
4. Wil je dat de tool zelf de 5 belangrijkste pagina's kiest (home, product, winkel, winkelmand, contact)? Zet dan `--crawl` achter het adres:
   `node simulate.mjs https://winkel.be --crawl`
5. Wil je het rapport in het Engels? Zet dan `--lang en` achter de opdracht.

## Wat je krijgt (in de map `reports`)

| Bestand | Waarvoor |
|---|---|
| `…-nl.pdf` | Het rapport als PDF. Dit stuur je naar de klant nadat hij betaald heeft. |
| `…-nl.html` | Hetzelfde rapport als webpagina. |
| `…-nl-mail.txt` | Een kant-en-klare eerste mail met de 3 grootste problemen. Vul alleen je naam in. |
| `klanten.csv` | Je klantenlijst. Er komt bij elke test een regel bij. Open hem in Excel en vul zelf in: gemaild op, antwoord, betaald. |
| `…-nl.json` | De ruwe gegevens (alleen nodig voor Claude). |

De map `reports` gaat nooit naar GitHub. Rapporten over websites van anderen blijven op je eigen computer.

Een voorbeeld vind je in `voorbeeld-rapport.html` en `voorbeeld-rapport.pdf` (de test van mindveto.app zelf).

## Eerlijke grenzen

Deze grenzen staan ook in elk rapport:

- Alleen de pagina's die je opgeeft worden getest, niet de hele website.
- Er wordt niets gekocht, er wordt niet ingelogd en er worden geen formulieren verstuurd.
- Een automatische scan vindt ongeveer een derde tot de helft van de toegankelijkheidsproblemen.
- Het rapport is geen juridisch advies en geen bewijs dat de site aan de wet voldoet.

## De verkoopwebsite (map `site`)

In de map `site` staat een kant-en-klare website voor CustomerSimulator: `index.html`, `privacy.html` en `voorwaarden.html`.

1. Vervang overal `[JOUW-EMAIL]`, `[BEDRIJFSNAAM]`, `[NUMMER]`, `[ADRES]` en `[DATUM]` door je eigen gegevens.
2. Laat de algemene voorwaarden nalezen door een boekhouder of jurist.
3. Zet de map online op een eigen domein (bijvoorbeeld via GitHub Pages of je hostingbedrijf).
