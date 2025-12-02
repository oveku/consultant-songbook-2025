// Node.js script to generate cover, CD label, and video scene images from prompts
// Usage:
//   1) Set environment variable OPENAI_API_KEY
//   2) npm install (in project root if not done)
//   3) node design/generate_design_images.mjs
// Output:
//   PNG files saved to images/cover/, images/cd-label/, and per-song images/

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const DESIGN_ROOT = path.resolve(__dirname);
const IMAGES_ROOT = path.resolve(ROOT, 'images');

const MODEL = process.env.OPENAI_IMAGE_MODEL || 'dall-e-3';
const SIZE = process.env.OPENAI_IMAGE_SIZE || '1024x1024'; 
const QUALITY = process.env.OPENAI_IMAGE_QUALITY || 'standard';
const N_IMAGES = 1; // DALL·E 3 only supports n=1

// Load .env from project root so OPENAI_API_KEY is picked up
dotenv.config({ path: path.join(ROOT, '.env') });

// Hardcoded prompts for covers and CD label based on design/*.md briefs
const DESIGN_PROMPTS = [
  {
    filename: 'cover/front.png',
    prompt: `Modern album cover titled "The Consulent Songbook 2025" with subtitle "Sanger fra norsk konsulentliv". Stylized illustration of consultants around a whiteboard or laptop mixed with musical notes and instruments (guitar, microphone). Clean Scandinavian design with blue, turquoise, and lilac tones with a warm orange accent. Flat vector illustration style, professional and playful, high resolution, suitable for print.`
  },
  {
    filename: 'cover/back.png',
    prompt: `Back cover of a music album, clean minimalist layout with ample negative space for a track list. Subtle abstract background with hints of office buildings and musical elements (staff lines, treble clef). Scandinavian color palette matching the front cover (blue, turquoise, lilac, warm accent). High resolution, print-ready, modern and professional.`
  },
  {
    filename: 'cd-label/label.png',
    prompt: `Minimalist circular CD label design for "The Consulent Songbook" with text "2025 – Sanger fra norsk konsulentliv" around the edges. Simple icons of a city skyline and musical notes in the center ring. Matching the cover colors (blue, turquoise, lilac, warm accent). Vector style, clean, high resolution, print-ready for CD printing.`
  }
];

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set. Create a .env or set the environment variable before running.');
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  console.log(`Generating ${DESIGN_PROMPTS.length} design images with model=${MODEL}, size=${SIZE} ...`);

  for (let i = 0; i < DESIGN_PROMPTS.length; i++) {
    const { filename, prompt } = DESIGN_PROMPTS[i];
    const outPath = path.join(IMAGES_ROOT, filename);
    const outDir = path.dirname(outPath);

    await fs.mkdir(outDir, { recursive: true });

    if (await fileExists(outPath)) {
      console.log(`[skip] ${filename} already exists`);
      continue;
    }

    console.log(`[${i + 1}/${DESIGN_PROMPTS.length}] Generating: ${filename}`);

    try {
      const res = await openai.images.generate({
        model: MODEL,
        prompt: prompt,
        size: SIZE,
        n: N_IMAGES,
        quality: QUALITY,
        response_format: 'b64_json'
      });

      const data = res.data?.[0]?.b64_json;
      if (!data) throw new Error('No image data returned');

      const buf = Buffer.from(data, 'base64');
      await fs.writeFile(outPath, buf);
      console.log(` → saved ${path.relative(ROOT, outPath)}`);
    } catch (err) {
      console.error(` × failed ${filename}:`, err?.message || err);
      await sleep(1500);
    }

    // polite pacing
    await sleep(1200);
  }

  console.log('Done. Images in:', path.relative(ROOT, IMAGES_ROOT));
  console.log('\nNext steps:');
  console.log('- Review generated images in images/cover/ and images/cd-label/');
  console.log('- Use Songs/<song-name>/image-prompts.md for video scene generation');
  console.log('- Import cover/back/label images into Word/Canva/InDesign for final layout');
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

main().catch(err => { console.error(err); process.exit(1); });
