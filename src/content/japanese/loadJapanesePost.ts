// src/content/japanese/loadJapanesePost.ts

const mdFiles = import.meta.glob("./*.md", {
  as: "raw",
  eager: false,
});

/**
 * Loads a markdown file from this folder (src/content/japanese/).
 *
 * @param file e.g. "mountain-village-life.md"
 */
export async function loadJapanesePost(file: string): Promise<string> {
  // Keys in mdFiles look like "./mountain-village-life.md"
  const key = `./${file}`;

  const loader = mdFiles[key];
  if (!loader) {
    // Helpful debug: show what keys exist
    const available = Object.keys(mdFiles)
      .map((k) => k.replace("./", ""))
      .sort()
      .join(", ");

    throw new Error(
      `Markdown file not found: ${key}\nAvailable: ${available || "(none)"}`
    );
  }

  return await loader();
}
