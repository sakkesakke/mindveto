// Manage access codes from the server's command line.
//   node admin.mjs new free  "Juf Sara, Basisschool X"   -> prints a new code (shown only once)
//   node admin.mjs new paid  "School Y, invoice 2026-014"
//   node admin.mjs list                                  -> plan, use this month, note (never the codes)
//   node admin.mjs plan <code> paid|free                  -> change the plan of a code
//   node admin.mjs off <code>                             -> switch a code off
import { loadCodes, saveCodes, hashCode, newCode, monthKey } from './codes.mjs';

const [cmd, a, b] = process.argv.slice(2);
const codes = await loadCodes();

if (cmd === 'new' && (a === 'free' || a === 'paid')) {
  const code = newCode();
  codes[hashCode(code)] = { plan: a, note: (b || '').slice(0, 120), created: new Date().toISOString().slice(0, 10), month: monthKey(), used: 0 };
  await saveCodes(codes);
  console.log(`New ${a} code: ${code}\nGive this code to the teacher. It is not stored in readable form, so write it down now.`);
} else if (cmd === 'list') {
  const rows = Object.values(codes);
  if (!rows.length) console.log('No codes yet.');
  for (const r of rows) console.log(`${r.plan.padEnd(5)} ${r.disabled ? 'OFF ' : 'on  '} ${r.month === monthKey() ? r.used : 0} this month  ${r.created}  ${r.note}`);
} else if ((cmd === 'plan' && (b === 'free' || b === 'paid')) || cmd === 'off') {
  const rec = codes[hashCode(a || '')];
  if (!rec) { console.error('Unknown code.'); process.exit(1); }
  if (cmd === 'plan') rec.plan = b; else rec.disabled = true;
  await saveCodes(codes);
  console.log('Done.');
} else {
  console.log('Use: node admin.mjs new free|paid "note"  |  list  |  plan <code> free|paid  |  off <code>');
  process.exit(cmd ? 1 : 0);
}
