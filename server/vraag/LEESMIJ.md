# "Vraag het de leerling": server voor api.mindveto.app

Een leerkracht plakt een tekst van een leerling. Een gratis open AI-model op je eigen server maakt dan 5 vragen die alleen de echte schrijver makkelijk kan beantwoorden. Er komt geen oordeel en er staat nergens "AI": de mens beslist na een kort gesprek.

- **Privacy:** de tekst gaat alleen naar jouw server, wordt niet bewaard en niet gelogd. Er is geen ander bedrijf bij betrokken.
- **Gratis:** 5 teksten per maand per code. **Betalend:** 300 per maand. Je past die aantallen aan in `.env`.
- **Lengte:** minstens 300 en hoogstens 6000 tekens per tekst (ongeveer 2 à 3 pagina's).
- **Model:** `qwen2.5:7b` (vrije licentie, Apache 2.0). Wil je later een beter model voor betalende klanten? Dan vul je `MODEL_PAID` in.
- **Los van je andere project:** eigen containers, eigen netwerk, eigen map. Er wordt niets gedeeld.

## Wat je nodig hebt

- Je Oracle-server met **Docker** erop. Typ `docker --version` om dat te controleren.
- Ongeveer **8 GB vrij geheugen** en **10 GB vrije schijfruimte**.

## Snelste manier: de server installeert zichzelf

Plak het hele bestand `cloud-init.yaml` bij het aanmaken van de Oracle-server in het vak **Initialization script** (onder **Show advanced options → Management**). Na 15 à 20 minuten draait alles. In `/root/mindveto-setup.txt` staat dan je eerste testcode.

## Installeren met de hand (één keer)

1. Log in op je server.
2. Haal de code op:
   ```bash
   git clone --depth 1 https://github.com/sakkesakke/mindveto.git && cd mindveto/server/vraag
   ```
3. Maak de instellingen aan:
   ```bash
   cp .env.example .env
   ```
4. Start alles:
   ```bash
   docker compose up -d --build
   ```
5. Download het AI-model (ongeveer 5 GB, dat duurt even):
   ```bash
   docker compose exec ollama ollama pull qwen2.5:7b
   ```
6. Test of het werkt. Je moet `{"ok":true}` zien:
   ```bash
   curl http://127.0.0.1:8787/health
   ```

## Op het internet zetten (api.mindveto.app)

1. **Namecheap:** voeg bij **Advanced DNS** een regel toe:
   - **Type:** `A Record`
   - **Host:** `api`
   - **Value:** het openbare IP-adres van je Oracle-server
2. **Oracle Cloud-firewall:** open in de Oracle-console, bij je netwerk (**Virtual Cloud Network → Security List → Add Ingress Rules**), poort **80** en **443** voor `0.0.0.0/0`.
3. **Firewall op de server zelf.** Op Oracle-servers met Ubuntu staat die standaard dicht:
   ```bash
   sudo iptables -I INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT && sudo netfilter-persistent save
   ```
4. **HTTPS:**
   - **Gebruikt niets anders op je server poort 80 en 443?** Start dan de meegeleverde Caddy, die zelf een gratis certificaat haalt:
     ```bash
     docker compose --profile tls up -d
     ```
   - **Gebruikt "the brain" die poorten al**, met een eigen Caddy of Nginx? Voeg dan in dat programma een regel toe die `api.mindveto.app` doorstuurt naar `127.0.0.1:8787`.

## Codes voor leerkrachten

Een code maken (de code wordt maar één keer getoond, dus schrijf hem meteen op):
```bash
docker compose exec api node admin.mjs new free "Juf Sara, Basisschool X"
```
Een betalende code maken:
```bash
docker compose exec api node admin.mjs new paid "School Y, factuur 2026-014"
```
Bekijk alle codes en hoeveel ze deze maand gebruikt werden:
```bash
docker compose exec api node admin.mjs list
```
Een code van gratis naar betalend zetten:
```bash
docker compose exec api node admin.mjs plan MV-XXXX-XXXX-XXXX paid
```
Een code uitzetten:
```bash
docker compose exec api node admin.mjs off MV-XXXX-XXXX-XXXX
```

De map `data/` bevat alleen een onleesbare versie (hash) van elke code en de teller per maand. Er staan geen teksten en geen namen van leerlingen in.

## Bijwerken

```bash
cd /opt/mindveto && sudo git fetch --depth 1 origin main && sudo git checkout -B main FETCH_HEAD && cd server/vraag && sudo docker compose --profile tls up -d --build
```
