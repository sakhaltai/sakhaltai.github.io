# Quick-Ship React + Tailwind Portfolio

A modern, flexible starter for a motion-design portfolio.
Built with **Vite + React + Tailwind**, deployed to **GitHub Pages** via GitHub Actions.

Designed for:

- Motion designers
- Personal portfolios
- Small interactive tools
- Writing-heavy pages (essays, notes, teaching materials)

---

## ✨ Quick Start

```bash
# 1) Create a new branch (recommended)
git checkout -b next

# 2) Install dependencies
npm install

# 3) Run locally
npm run dev
```

Open:
👉 [http://localhost:5173](http://localhost:5173)

---

## 📄 Main Pages & Routes

| Route         | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `/`           | Main portfolio (hero, featured work, work history, about, contact) |
| `/teaching`   | Teaching-focused page                                              |
| `/bird-bingo` | Interactive Sibley Backyard Birding Bingo                          |
| `/rocky-care` | Rocky the dog’s care sheet                                         |
| `/jp`         | Japanese articles (list + reader)                                  |
| `/jp/:id`     | Direct link to a single Japanese article                           |

---

## 🐦 Bird Bingo (`/bird-bingo`)

**Page:** `src/pages/BirdBingo.tsx`
**Data:** `src/birds-data.ts`
**Assets:** `public/birds/**`

### What it does

- Renders a grid of bird cards
- Tap/click a card to play:

  - Nic saying the bird’s name
  - The bird’s call

- Optional flip card with additional information and variant calls

### Adding or editing birds

1. Open `src/birds-data.ts`
2. Edit the `birds` array:

```ts
{
  id: "american-robin",
  name: "American Robin",
  image: "/birds/img/american-robin.jpg",
  voice: "/birds/audio/american-robin-name.mp3",
  call: "/birds/audio/american-robin-call.mp3",
  info: {
    scientificName: "Turdus migratorius",
    groupName: "Thrushes",
    habitat: "Lawns, gardens, forest edges",
    food: "Insects, worms, berries",
    behavior: "Runs, stops, tilts head to hunt",
    conservation: "Common and widespread",
    sourceUrl: "https://example.com",
  },
  variants: [
    {
      id: "american-robin-dawn-song",
      label: "Dawn song",
      audio: "/birds/audio/american-robin-dawn.mp3",
    },
  ],
}
```

3. Add assets to:

- `public/birds/audio/`
- `public/birds/img/`

---

## 🐶 Rocky Care (`/rocky-care`)

**Page:** `src/pages/RockyCare.tsx`

### What it does

- A detailed care sheet for Rocky
- Feeding, meds, routines, photos
- Designed for sitters / house sitters
- Fully responsive

### Updating content

- Edit text blocks directly in `RockyCare.tsx`
- Update arrays like `photos` / `medImages`
- Add images to `public/rocky/**`

No CMS required.

---

## 📝 Japanese Articles (Markdown-based) (`/jp`)

Japanese articles are written as **Markdown files**, with routing and metadata handled manually for clarity and control.

### File structure

```
src/content/japanese/
├── posts.ts        # metadata + ordering
├── bird-linguistics.md
├── mountain-village-life.md
├── cafe-baby.md
└── ...
```

---

### How it works

- `/jp` shows the article list + reader
- `/jp/:id` opens a specific article
- Clicking a pill updates the URL (shareable links)
- Markdown is rendered with:

  - GitHub-flavored Markdown
  - Code blocks
  - Lists, headings, emphasis

---

### Adding a new Japanese article

#### 1) Create a Markdown file

```
src/content/japanese/my-new-post.md
```

Write normally in Markdown:

```md
---
title: 山の村で暮らすふたり
subtitle: Mountain Village Life
date: 2025-12-21
tags: [生活, ドキュメンタリー]
---

## １．山奥の小さな村に、７人だけ

京都府の丹後半島に、山に囲まれた小さな村があります。

空行で段落が分かれます。
```

> Frontmatter is optional — the app safely strips it if present.

---

#### 2) Register the post in `posts.ts`

```ts
// src/content/japanese/posts.ts

export const japanesePosts = [
  {
    id: "my-new-post",
    file: "my-new-post.md",
    title: "新しい記事のタイトル",
    subtitle: "Optional English subtitle",
    date: "2025-12-21",
    tags: ["タグ1", "タグ2"],
  },
];
```

**Tips**

- Keep `id` and filename the same (`my-new-post`)
- Ordering here controls display order
- You can easily hide drafts by removing them from this list

---

#### 3) Run locally

```bash
npm run dev
```

Visit:

- `/jp`
- `/jp/my-new-post`

---

## 🧱 Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

Deployed to **GitHub Pages** via GitHub Actions.

---

## 💡 Notes & Philosophy

- This repo intentionally avoids a CMS
- Markdown keeps writing fast and natural
- Manual metadata keeps behavior predictable
- Everything is inspectable and hackable

These can be added later:

- RSS feeds
- auto-generated indexes
- drafts / published states
- or MDX components

---
