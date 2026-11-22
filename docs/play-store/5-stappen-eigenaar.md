# 5. Wat alleen jij kunt doen (stap voor stap)

Deel nooit een wachtwoord, code of sleutelbestand in een chat. Claude vult nooit iets in jouw naam in zonder jouw OK,
en klikt nooit zelf op **Submit**, **Send for review** of **Publish**.
Google verandert knopnamen soms. Staat een knop er niet precies zo? Zoek de knop met dezelfde betekenis, of vraag het
in de chat met een schermafdruk (zonder wachtwoorden erop).

## Stap 1. Je vaste uploadsleutel maken (één keer, ±10 minuten)
1. Installeer Java: ga naar **adoptium.net**, klik **Download Temurin**, installeer met de standaardkeuzes.
2. Open **PowerShell** (Windows-toets, typ `PowerShell`, druk Enter).
3. Plak dit en druk Enter:
   `keytool -genkeypair -v -keystore $HOME\mindveto-upload.jks -alias ho -keyalg RSA -keysize 3072 -validity 10000 -dname "CN=Amghar Said, O=Mindveto, C=BE"`
4. Kies een sterk wachtwoord als het gevraagd wordt (twee keer). Zet het in je wachtwoordbeheerder.
5. Zet een reservekopie van `mindveto-upload.jks` (in je gebruikersmap) op een USB-stick. Kwijt = herstelprocedure bij Google.
6. Kopieer het bestand als tekst. Plak in PowerShell en druk Enter:
   `[Convert]::ToBase64String([IO.File]::ReadAllBytes("$HOME\mindveto-upload.jks")) | Set-Clipboard`

## Stap 2. De sleutel in GitHub zetten (geheim, alleen jij)
1. Ga naar **github.com/sakkesakke/geopolcoins** → **Settings** → **Secrets and variables** → **Actions**.
2. Klik **New repository secret** en maak deze vier:
   - `HO_UPLOAD_KEYSTORE_B64` → plak (Ctrl+V) wat je in stap 1.6 kopieerde
   - `HO_UPLOAD_STORE_PASS` → je wachtwoord
   - `HO_UPLOAD_KEY_ALIAS` → `ho`
   - `HO_UPLOAD_KEY_PASS` → hetzelfde wachtwoord
3. Ga naar **Actions** → **Human Override Android app** → **Run workflow** → **Run workflow**.
4. Open de run. In het logboek moet staan: "Signing with the permanent upload key". Zeg in de chat alleen: "sleutel staat erin".

## Stap 3. Google Play-ontwikkelaarsaccount (25 dollar, eenmalig)
1. Ga naar **play.google.com/console** en log in met het Google-account dat je wil gebruiken.
2. Kies **Persoonlijk account** (tenzij je anders beslist, zie README).
3. Vul je gegevens in en betaal. Google controleert je identiteit (identiteitsbewijs). Dat kan enkele dagen duren.
4. Let op: lees op het scherm welke gegevens Google **openbaar** toont (naam, land, adres, e-mail). Gebruik als
   contact-e-mail `hello@mindveto.app`. Twijfel je over je adres? Stop en vraag het eerst in de chat.

## Stap 4. De app aanmaken
1. Klik **Create app**. Vul in wat in `4-store-listing.md` staat (naam, taal, **App**, **Free**). Vink de verklaringen aan.
2. Ga door de formulieren met de antwoorden uit `3-play-console-answers.md`. Claude kan je per scherm helpen.
3. **App signing**: kies **Use Google-generated key**.

## Stap 5. De video voor de VPN-verklaring (als Google erom vraagt)
1. Zet op je telefoon **Schermopname** aan (veeg twee keer naar beneden, tik **Schermopname**).
2. Open Mindveto, tik **I agree**, tik de grote knop. Laat het uitlegscherm over de VPN rustig in beeld en tik **Continue**.
   Tik dan **OK** bij de VPN-vraag van Android.
3. Open Chrome, ga naar `chatgpt.com`: de pagina opent niet.
4. Ga terug naar Mindveto, tik de knop opnieuw (AI toegestaan), herlaad chatgpt.com: de pagina opent.
5. Stop de opname (houd hem kort; de maximale lengte staat in de Play Console). Upload op YouTube als **Niet vermeld** en plak de link in de Play Console.

## Stap 6. Gesloten test
1. Download het `.aab`-bestand: **github.com/sakkesakke/geopolcoins** → **Actions** → **Human Override Android app** →
   laatste groene run → onderaan **Artifacts** → `human-override-google-play-aab`. Pak de zip uit.
2. In de Play Console: **Test and release** → **Closed testing** → **Create track** (of de standaard-track) →
   **Create new release** → upload het `.aab`-bestand.
3. Voeg testers toe met hun Gmail-adres. Neem er een paar meer dan het minimum (wie afhaakt, telt niet).
4. Deel de testlink. Testers klikken **Become a tester** en installeren de app via Google Play.
5. Ze moeten ingeschreven blijven tot de testperiode voorbij is. Daarna: **Apply for production**.
   (Het precieze aantal testers en dagen: zie `6-check-on-the-day.md`.)

## Stap 7. Na goedkeuring
Zeg het in de chat. Claude zet dan de Google Play-knop op mindveto.app in alle 8 talen.
