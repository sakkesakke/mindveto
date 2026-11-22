# Mindveto op Google Play: start hier

Stand: 22 november 2026. Deze map bevat alles wat een nieuwe chat nodig heeft om de Mindveto Android-app
in Google Play te zetten. Er staan geen wachtwoorden of sleutels in (en die horen hier ook nooit).

## Zo start je de nieuwe chat
1. Open een nieuwe Claude Code-chat met de repo **sakkesakke/mindveto**.
2. Open het bestand [`START-PROMPT.md`](START-PROMPT.md) en kopieer de tekst in het grijze blok.
3. Plak die tekst als eerste bericht in de nieuwe chat en druk op **Enter**.

## Wat staat waar
| Bestand | Voor wie | Wat |
| --- | --- | --- |
| [`START-PROMPT.md`](START-PROMPT.md) | jij → nieuwe chat | De tekst om te plakken |
| [`1-app-facts.md`](1-app-facts.md) | Claude | Feiten uit de app-code: naam, pakket, rechten, verbindingen, bouwen |
| [`2-fix-before-upload.md`](2-fix-before-upload.md) | Claude + jij | Wat eerst in de code moet veranderen |
| [`3-play-console-answers.md`](3-play-console-answers.md) | Claude + jij | Voorstel-antwoorden voor elk Play Console-formulier |
| [`4-store-listing.md`](4-store-listing.md) | Claude + jij | Winkeltekst (EN/NL/FR), afbeeldingen, categorie |
| [`5-stappen-eigenaar.md`](5-stappen-eigenaar.md) | jij | Wat alleen jij kunt doen, stap voor stap |
| [`6-check-on-the-day.md`](6-check-on-the-day.md) | Claude | Regels van Google die op de dag zelf opnieuw gecontroleerd moeten worden |

## De stand in één oogopslag
- De app heet al **Mindveto**, richt zich op Android 16 (API 36) en GitHub bouwt al een `.aab` voor Google Play.
- De code staat in een **andere repo**: `sakkesakke/geopolcoins`, map `human-override/android/`.
  Deze repo (mindveto) bevat alleen de website en een kopie van de APK.
- Het oude stappenplan van 10 november staat in `sakkesakke/geopolcoins` → `docs/google-play.md`.
  Het gebruikt nog de oude naam "Human Override" en een oude privacylink. Deze map vervangt het.

## 4 beslissingen die alleen jij kunt nemen (vóór de eerste upload)
1. **Pakketnaam.** Nu `xyz.geopolcoins.humanoverride`. Na de eerste upload kan die **nooit meer** veranderen.
   Voorstel: `app.mindveto` (past bij het merk, geen "geopolcoins"). Kost bijna niets: de site zegt nu al "om bij te werken,
   eerst de oude versie verwijderen" (beta), dus bestaande gebruikers moeten toch al opnieuw installeren.
2. **Doneerknop.** De app opent nu `ko-fi.com/geopolcoins`. Voorstel: weghalen in de Play-versie
   (merkregel: geen links naar geopolcoins).
3. **Gratis of betaald bij de start.** De site belooft "Plus" (€14,99/jaar of €1,99/maand, 15 dagen gratis) en
   "250 Founders" vanaf de Play-lancering. De app heeft nog **geen** betaalcode. Volgens je eigen notitie komt vóór verkopen eerst
   een KBO-inschrijving en een zakelijk adres (nu nog leeg in `src/i18n/company.ts`), en Google vraagt dan een betaalprofiel.
   Voorstel: eerst gratis lanceren, betaling later in een aparte stap. Dan past Claude de sitetekst in alle 8 talen aan.
4. **Persoonlijk of organisatie-account.** Persoonlijk: 25 dollar eenmalig, identiteitscontrole, en een gesloten test met
   testers (zie bestand 6). Organisatie: D-U-N-S-nummer nodig. Voorstel: persoonlijk.

Op 12 november zei je: "nog geen betaalde accounts". Een Play-account kost 25 dollar eenmalig. Als je nu live wil, is dat
dus een nieuwe beslissing van jou.
