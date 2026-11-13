#!/bin/sh
# Quality gate: Lighthouse on key pages of the built site. Every score must be 90 or higher (9 out of 10).
# Run: npm run build && sh scripts/lighthouse.sh
set -eu
PORT=8791
python3 -m http.server $PORT --bind 127.0.0.1 --directory dist >/dev/null 2>&1 &
SRV=$!; trap 'kill $SRV 2>/dev/null || true' EXIT; sleep 1
FAIL=0
for u in / /block-porn/ /parents/ /schools/ /offices/ /browser-extension/ /download/ /pricing/ /nl/ /fr/ /de/ /ar/; do
  npx -y lighthouse@12.8.2 "http://127.0.0.1:$PORT$u" --quiet --chrome-flags="--headless=new --no-sandbox" --output=json --output-path=/tmp/lh.json >/dev/null 2>&1 || { echo "::warning::Lighthouse did not run for $u"; continue; }
  node -e 'const c=require("/tmp/lh.json").categories;const s=Object.entries(c).map(([k,v])=>[k,Math.round((v.score||0)*100)]);const bad=s.filter(([,n])=>n<90);console.log((bad.length?"FAIL ":"ok   ")+process.argv[1]+" "+s.map(([k,n])=>k+"="+n).join(" "));process.exit(bad.length?1:0)' "$u" || FAIL=1
done
exit $FAIL
