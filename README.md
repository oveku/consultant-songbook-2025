# The Consulent Songbook 2025
_A concept album and CD project about life inside Norwegian consulting firms._

A creative music and storytelling project about life inside Norwegian consulting companies. This repository contains the full texts, audio tracks, and design materials for a CD/album called **"The Consulent Songbook 2025"**.

The project mixes honesty, humor and warmth to paint lyrical portraits of different consultancies, based on real consultant experiences and publicly available descriptions (e.g. jobbi.no). All song texts are original.

## Contents

### 1. Song texts

Folder: `Songtexts/`

- `Accenture blues.md`
- `Der Folk løfter hverandre (Bekk).md`
- `Get the future they want.md`
- `Hvor hjertene holder hus.md` (Bouvet)
- `Miles i bygget.md`
- `Norges beste – på papiret.md` (Sopra Steria)
- `Åpen bok, åpne hjerter (Variant).md`
- `Beneath the surface (Webstep).md` – _Bonus track_

Each file contains the full lyrics for one song.

### 2. Audio tracks

Folder: `Songs/`

Example files (names may vary slightly):

- `Accenture Blues-Accenture.mp3`
- `Der Folk Løfter Hverandre-Bekk.mp3`
- `Get the future they want - capgemini.mp3`
- `Hvor Hjertene Holder Hus-Bouvet.mp3`
- `Miles i Bygget (Vi Holder Det Varmt).mp3`
- `Norges Beste – På Papiret-Sopra.mp3`
- `Åpen Bok, Åpne Hjerter-variant.mp3`

There is also a subfolder per song (e.g. `Songs/Get the future they want/`) which can contain prompts and assets related to that track.

### 3. Design and booklet

Folder: `design/`

- `booklet.md` – Full CD booklet:
  - Forord / foreword
  - Track list
  - All lyrics
  - Credits, thanks, technical details
- `cover-front.md` – Text content and design brief for the front cover.
- `cover-back.md` – Text content, track list and design brief for the back cover.
- `cd-label.md` – Text content and design brief for printing on the CD.
- `README.md` – How to use these files in tools like Word, Canva, Figma or InDesign.

### 4. Image prompts & video support

Folder: `Songs/Get the future they want/`

- `image-prompts.md` – Ready-to-use prompts for an AI image generator. These prompts describe visual scenes matching the lyrics of **"Get the future de vil" / "Get the future they want"**, to create still images for a music video.

Folder: `images/`

- Empty structure (or user‑filled) for generated images per song, e.g.:
  - `images/get-the-future/scene-01.png`
  - `images/accenture-blues/scene-01.png`

Folder: `tools/`

- `generate-images-from-prompts.md` – Documentation on how to use the prompt files with AI image generators and how to organize resulting images.
- `rename-songtexts-to-md.ps1` – Small helper script used once to convert the original `Songtexts` files to `.md`.

## How to use this repository

### For listening

- Play the `.mp3` files in `Songs/` in your favorite media player.

### For reading & printing

- Open `design/booklet.md` to read all lyrics and credits.
- Import the `design/*.md` files into Word / Google Docs / Canva / InDesign to create print-ready PDFs for the CD booklet, cover and CD label.

### For video creation

1. Open `Songs/Get the future they want/image-prompts.md`.
2. Copy prompts into your preferred AI image generator (e.g. DALL·E, Midjourney, Stable Diffusion).
3. Save generated still images into `images/` following the suggested structure.
4. Combine the song audio + still images in a video editor to create a music video.

The same pattern can be extended to the other songs by adding their own `image-prompts.md` and folders under `Songs/` and `images/`.

## Credits & inspiration

- **Lyrics and concept:** The Consulent Songbook 2025 project (original texts by the project author).
- **Inspiration:** Open, honest company descriptions and employee experiences shared in the Norwegian consulting community, including detailed write‑ups on jobbi.no.

This repository is meant as a creative, non-commercial exploration of consultant life, and as a complete package for a home-made CD/album release with booklet, cover and supporting video material.
