# Generating Images from Prompts

This project assumes you will use an external AI image generator (such as Midjourney, DALL·E, Stable Diffusion UI, or another tool) to create images from the text prompts.

## 1. Where the prompts live

- Song-specific prompts are stored under `Songs/<song-name>/image-prompts.md`.
- Design-wide prompts for covers and CD label can be added later under `design/` (for example `design/cover-prompts.md`).

## 2. Manual workflow (recommended and simplest)

1. Open the relevant `image-prompts.md` file, for example:  
   - `Songs/Get the future they want/image-prompts.md`
2. Copy one prompt at a time into your preferred AI image generator.
3. Generate multiple variations until you find an image you like.
4. Save the images into folders under `images/`, for example:  
   - `images/get-the-future/scenes/scene-01.png`  
   - `images/get-the-future/scenes/scene-02.png`
5. Repeat for all scenes.

## 3. Semi-automated workflow idea (for advanced use)

If you use an image API that supports HTTP requests (for example OpenAI, Stability AI, or local Stable Diffusion), you can:

- Write a small script (Python, PowerShell, etc.) that:
  - Reads `image-prompts.md`.
  - Extracts lines starting with `Prompt` or bullet points.
  - Sends them to the API and stores returned images into `images/`.

Because you may use different providers and API keys, this repository only documents the workflow and does **not** hard-code any specific external API.

## 4. Suggested folder structure for generated images

- `images/`
  - `get-the-future/`
    - `scene-01.png`
    - `scene-02.png`
  - `accenture-blues/`
  - `bouvet/`
  - `miles/`
  - `sopra-steria/`
  - `variant/`

You can then import these images into your video editor to create clips synced to each song.

## 5. Next steps

- Add `image-prompts.md` for each song (similar to `Get the future they want`).
- Generate images manually or via script.
- Assemble video clips in your preferred editor using the album audio, booklet text and generated stills.
