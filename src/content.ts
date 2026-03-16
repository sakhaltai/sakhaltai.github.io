// src/content.ts

export const site = {
  name: "Nic Hartmann",
  tagline: "I animate. I automate. I figure things out.",
  blurb:
    "Motion designer, automation builder, and educator. 11 years of After Effects, 60+ production web scrapers, and a knack for parachuting into unfamiliar problems and shipping real results—powered by fast learning and AI-assisted workflows.",
  reelEmbed:
    // Replace with your real embed URL. Supports YouTube or Vimeo embed links.
    "https://www.youtube.com/embed/_e67KG1zSmA",
  cta: [
    // {
    //   label: "Watch the Reel",
    //   href: "https://youtu.be/_e67KG1zSmA?si=6no6cEOTK75tqKFn",
    //   external: true,
    // },
    // // { label: "Email Me", href: "mailto:sakhaltai@gmail.com", external: true },
    // {
    //   label: "Download Résumé",
    //   href: "/Nic-Hartmann-Resume.pdf",
    //   external: true,
    // },
  ],
  contactHref: "mailto:sakhaltai@gmail.com",
};

export const featured = {
  items: [
    {
      title: "Demo Reel 2025",
      url: "https://youtu.be/_e67KG1zSmA?si=6no6cEOTK75tqKFn",
      tech: ["After Effects", "Illustrator", "Photoshop"],
      desc: "My latest reel: favorite client and personal pieces; lots of AE, a splash of Blender/UE5.",
      thumb: "featured/demoReel2025YTThumbnail_01.png",
    },
    {
      title: "XBOX — Soloist",
      url: "https://youtu.be/8FNqpiRyzkk",
      tech: ["After Effects", "Path Animation", "Joysticks n' Sliders"],
      desc: "Explainer series for audience segmentations. Characters animated via paths (no Puppet Tool).",
      thumb: "featured/coverFeaturedXBOXSoloist.png",
    },
    {
      title: "Sephora Global",
      url: "https://youtu.be/DROgeEzhG0U",
      tech: ["After Effects", "Character Animation", "Joysticks n' Sliders"],
      desc: "Exec-facing internal narrative presenting new customer‑segment research and brand trends.",
      thumb: "featured/coverFeaturedSephora.png",
    },
    {
      title: "Rumble Monkey",
      url: "https://www.youtube.com/watch?v=IE2f5tyMyEs",
      tech: ["After Effects", "Character Animation", "VFX"],
      desc: "Explainer for an eSports platform—storyboard, design, animation, and compositing.",
      thumb: "featured/coverFeaturedRumbleMonkey.png",
    },
    {
      title: "Nuclear Threat Initiative",
      url: "https://youtu.be/tJLMear6KFI",
      tech: ["After Effects", "Sound Design", "Mixed Media", "VFX"],
      desc: 'Dangers of amateur "benchtop" DNA synthesis—gritty textures, turbulence FX, mixed media.',
      thumb: "featured/coverFeaturedNTI.png",
    },
    {
      title: "Darklight Cybersecurity",
      url: "https://youtu.be/wwHHtALJPlg",
      tech: ["After Effects", "Visual Design", "Sound Design"],
      desc: "Elevator explainer focused on clean transitions and 2.5D elements for Darklight AI.",
      thumb: "featured/coverFeaturedDarklight.png",
    },
    {
      title: "Knights Who Say Nah",
      url: "https://youtu.be/dJLtmri-J2k",
      tech: ["Unreal Engine 5", "Blender", "VFX", "Procedural"],
      desc: "Win/lose sequences for an NFT mini‑game—assets, rigs, materials, VFX, and blueprints built from scratch.",
      thumb: "featured/coverFeaturedKWSN.png",
    },
  ],
};

export const about = {
  paragraphs: [
    "Hello! I'm Nic—linguistics enthusiast, devoted dad, passionate educator, and a 10‑year veteran of motion design.",
    "After graduating from Western Washington University (Linguistics), I dove head‑first into After Effects and landed at a boutique shop (Killer Infographics → Killer Visual Strategies). I grew from intern to senior motion designer, and eventually Director of Education—mentoring interns and students, running workshops, and launching passion‑project initiatives.",
    "More recently I've expanded into automation and tooling—building 60+ production web scrapers in Python, browser-based apps, After Effects extensions, and Blender addons. I learn fast, I ship working solutions, and I'm not afraid of unfamiliar territory.",
    "I've taught at Shoreline Community College (Intro to After Effects + Specializations) where students went from novice to hire‑ready in months. I've worked across the motion pipeline: scripting, storyboarding, asset creation, VO, sound, animation, editing, and client management.",
  ],
  skills: [
    "After Effects",
    "Illustrator",
    "Photoshop",
    "Audition",
    "Blender",
    "Unreal",
    "Figma",
    "Premiere Pro",
    "Python",
    "React",
    "TypeScript",
  ],
};

export const work = {
  jobs: [
    {
      company: "Hartmotion{n}",
      role: "Freelance Motion Designer",
      period: "2023–present",
      points: [
        "Explainers, product stories, data viz; AE, Illustrator, UE5",
        "Mocha tracking and comp; Lottie exports; micro-interactions for web.",
        "Clients via referrals and studios; full pipeline delivery.",
      ],
    },
    {
      company: "Rodeo Itinerary Startup",
      role: "Automation Engineer (Contract)",
      period: "2025",
      points: [
        "Built 60+ Python web scrapers collecting event, lodging, and venue data from dozens of independently-run rodeo sites.",
        "Compiled daily data pipelines outputting structured JSON for a MongoDB-backed travel planning platform.",
        "Went from zero coding experience to delivering production scraping infrastructure—learned Python, web scraping patterns, and data wrangling on the job using AI-assisted workflows.",
      ],
    },
    {
      company: "Shoreline Community College",
      role: "Instructor (AE & Specializations)",
      period: "2022–2023",
      points: [
        "Authored and taught VCT 278, an brand new offering at Shoreline Community College, a comprehensive After Effects overview course intended to turn novices into hire-ready motion designers.",
        "Created course curriculum from scratch, including weekly assignments, special exercises, lectures, demonstrations, sample projects, and best practices.",
        "Created hundreds of hours of tutorials and virtual classes for students.",
        "Created ScriptUI Panels and tools to expedite student's acquisition of After Effects basics.",
      ],
    },
    {
      company: "Material+",
      role: "Senior Producer",
      period: "2021–2023",
      points: [
        "Oversaw campaigns and explainers—editing, VFX, 3D assets, and sound.",
        "Introduced Blender/Unreal/Figma; taught Lottie/HTML animation best practices.",
        "Led workshops on gen-AI for quicker ideation and decks.",
      ],
    },
    {
      company: "Killer Visual Strategies",
      role: "Senior Motion Designer · Director of Education",
      period: "2016–2021",
      points: [
        "Mentored interns+students; launched passion-project initiative; ran AE workshops.",
        "Delivered premium motion work; built workflow processes across design/motion teams.",
      ],
    },
  ],
};

export const teaching = {
  videos: [
    "https://www.youtube.com/embed/V5dkLbTDiT4?si=o2zHH_CaTGeKHG-1",
    "https://www.youtube.com/embed/I6iSCFuP5-0?si=pE48lTYqC-KPhWLo",
    "https://www.youtube.com/embed/0Udxxz7IcAU?si=hIlf8NlasrmIpb6y",
    "https://www.youtube.com/embed/fKcar73CepQ?si=SWpmVYVtmTVhSxEY",
  ],
  playlists: [
    {
      label: "VCT 278 Virtual Classes",
      url: "https://www.youtube.com/playlist?list=PLO0g83JdlVkFyl5QYNS0kna97EJpGPniv",
    },
    {
      label: "VCT 176 Unreal Module",
      url: "https://www.youtube.com/playlist?list=PLO0g83JdlVkGaC6_Fm4GeSj_gw-5GU0T3",
    },
    {
      label: "VCT 176 Blender Module",
      url: "https://www.youtube.com/playlist?list=PLO0g83JdlVkEbnY8QVxTt-ykhucTxH6iq",
    },
  ],
};

// ========== SERVICES ==========
// To add media: drop files into public/services/ and add entries to the media arrays below.
// Supported: .png, .jpg, .gif, .webp, .mp4, .webm
// Example: { src: "services/scraper-terminal.png", alt: "Scraper output", caption: "Daily scrape run pulling 40+ sources" }

export const services = {
  headline: "Work With Me",
  intro:
    "I'm not a CS grad. I'm a creative problem-solver who uses AI tools to learn fast and deliver real results. I built 60 production web scrapers with zero prior coding experience. I taught After Effects to college students who landed jobs. Whatever your problem is—I'll figure it out.",

  offerings: [
    {
      title: "Automation & Web Scraping",
      desc: "You have staff copying data between websites, compiling reports by hand, or updating spreadsheets manually. I'll build a tool that does it automatically—and I'll maintain it.",
      highlights: [
        "Python",
        "Web Scraping",
        "Data Pipelines",
        "JSON / CSV",
        "Automation",
      ],
      caseStudy: {
        label: "Case Study — Rodeo Itinerary Platform",
        text: "Built 60+ Python web scrapers for a rodeo industry startup, collecting event, lodging, and venue data from dozens of independently-run sites into a unified travel-planning platform for competitors. Went from zero Python experience to delivering the full scraping pipeline in weeks. The platform launched, gained traction in rodeo competitor circles, and the scraper count grew from 3 to 60+ under my work.",
      },
      media: [
        // DROP YOUR SCREENSHOTS HERE — example:
        // { src: "services/rodeo-scraper-terminal.png", alt: "Scraper terminal output", caption: "Daily pipeline pulling from 60+ rodeo sites" },
        // { src: "services/rodeo-json-output.png", alt: "Structured JSON output", caption: "Clean structured data ready for MongoDB" },
      ],
    },
    {
      title: "Motion Graphics & Video",
      desc: "11 years of professional motion design—explainers, product stories, data viz, character animation. Full pipeline from script to final delivery. After Effects is my home base, with Blender and Unreal Engine for 3D work.",
      highlights: [
        "After Effects",
        "Blender",
        "Unreal Engine",
        "Explainers",
        "Character Animation",
        "Sound Design",
      ],
      caseStudy: null,
      media: [
        // Your featured work covers this well, but you could add BTS screenshots:
        // { src: "services/ae-timeline.png", alt: "AE project timeline", caption: "Complex character rig for XBOX Soloist" },
      ],
    },
    {
      title: "AI Workflow Integration",
      desc: "I use AI tools every day to build things I couldn't build alone—scrapers, extensions, apps, 3D assets. I can help your team adopt AI into their existing workflows without the hype or the fear. Practical, hands-on, results-focused.",
      highlights: [
        "Claude / LLM Workflows",
        "Prompt Engineering",
        "AI-Assisted Development",
        "Team Training",
      ],
      caseStudy: null,
      media: [],
    },
    {
      title: "Teaching & Training",
      desc: "Teaching is the most gratifying work I've ever done. I've taught college courses, run agency workshops, and mentored designers from novice to hire-ready. I can build curriculum, run workshops, or do 1-on-1 training—remote or in person around Seattle.",
      highlights: [
        "Curriculum Design",
        "After Effects",
        "Workshops",
        "1-on-1 Training",
        "Remote & In-Person",
      ],
      caseStudy: null,
      media: [
        // Could add screenshots of your teaching videos or course materials:
        // { src: "services/shoreline-class.png", alt: "Shoreline CC class", caption: "VCT 278 — After Effects from zero to hire-ready" },
      ],
    },
  ],

  ctaHeadline: "Got a problem that needs solving?",
  ctaBody:
    "I'm available for freelance and contract work—remote, flexible schedule. If you need someone who ships results and doesn't need hand-holding, let's talk.",
  ctaHref: "mailto:sakhaltai@gmail.com",
  ctaLabel: "Get In Touch",
};
