// src/utils/fileUtils.js
import { readFileSync, writeFileSync } from 'fs';

export function readFile(filePath) {
  return readFileSync(filePath, 'utf8');
}

export function writeFile(filePath, data) {
  writeFileSync(filePath, data, 'utf8');
}
