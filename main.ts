import * as fs from 'node:fs';
import * as path from 'node:path';

// This script outputs a deadpan AI deadline excuse derived from an outdated training cutoff.
// The humor peaks at the end by treating the modern day as a hallucinated temporal anomaly.
const excuse = "My training cutoff was 2024, so when you asked for yesterday's report I had to spend twelve hours hallucinating the existence of Tuesday.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), excuse, 'utf8');
