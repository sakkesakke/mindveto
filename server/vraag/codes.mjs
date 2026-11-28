// Access codes. The file stores only a SHA-256 hash of each code, so a leaked file does not reveal working codes.
import { createHash, randomInt } from 'node:crypto';
import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import path from 'node:path';

const FILE = process.env.CODES_FILE || path.join(process.env.DATA_DIR || './data', 'codes.json');

export const hashCode = (code) => createHash('sha256').update(String(code).trim().toUpperCase()).digest('hex');
export const monthKey = () => new Date().toISOString().slice(0, 7);

export async function loadCodes() {
  try { return JSON.parse(await readFile(FILE, 'utf8')); } catch (e) { if (e.code === 'ENOENT') return {}; throw e; }
}
// Write to a temp file first, then rename: the file is never half-written.
export async function saveCodes(codes) {
  await mkdir(path.dirname(FILE), { recursive: true });
  const tmp = FILE + '.' + process.pid + '.tmp';
  await writeFile(tmp, JSON.stringify(codes, null, 1));
  await rename(tmp, FILE);
}
// Readable codes without letters that look alike (no 0/O, 1/I/L).
export function newCode() {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const part = () => Array.from({ length: 4 }, () => A[randomInt(A.length)]).join('');
  return `MV-${part()}-${part()}-${part()}`;
}
