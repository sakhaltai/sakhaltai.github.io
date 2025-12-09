// BirdBingo.tsx

import React, { useEffect, useRef, useState } from "react";

type BirdInfo = {
  songs?: string;
  calls?: string;
  otherSounds?: string;
  sourceUrl?: string; // e.g. Cornell Lab page
};

type BirdSongVariant = {
  id: string;
  label: string; // e.g. "PNW song", "Martha's Vineyard song"
  audio: string; // path to the specific audio file
  note?: string;
};

type Bird = {
  id: string;
  name: string;
  image?: string; // generic image (or male if you want)
  imageMale?: string;
  imageFemale?: string;
  voice: string; // Nic saying the name
  call: string; // main bird call
  info?: BirdInfo;
  variants?: BirdSongVariant[];
};

type SexFilter = "male" | "female";

// 🔀 Flip this to "bottom" if you ever want the slide-up modal again
const modalAnimation: "center" | "bottom" = "center";

// TODO: Nic – keep fleshing this out with all your birds.
const birds: Bird[] = [
  {
    id: "american-coot",
    name: "American Coot",
    imageMale: "/birds/img/american-coot-male.jpg",
    imageFemale: "/birds/img/american-coot-female.jpg",
    image: "/birds/img/american-coot.jpg",
    voice: "/birds/audio/american-coot-voice.mp3",
    call: "/birds/audio/american-coot-call.mp3",
    info: {
      songs:
        "The waterborne American Coot is one good reminder that not everything that floats is a duck. A close look at a coot—that small head, those scrawny legs—reveals a different kind of bird entirely. Their dark bodies and white faces are common sights in nearly any open water across the continent...",
    },
    variants: [
      {
        id: "american-coot-classic-song",
        label: "Classic song",
        audio: "/birds/audio/american-coot-classic-song.mp3",
      },
      {
        id: "american-coot-pnw-dialect",
        label: "PNW dialect",
        audio: "/birds/audio/american-coot-pnw-dialect.mp3",
      },
    ],
  },
  {
    id: "american-crow",
    name: "American Crow",
    imageMale: "/birds/img/american-crow-male.jpg",
    imageFemale: "/birds/img/american-crow-female.jpg",
    image: "/birds/img/american-crow.jpg",
    voice: "/birds/audio/american-crow-voice.mp3",
    call: "/birds/audio/american-crow-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "american-goldfinch",
    name: "American Goldfinch",
    imageMale: "/birds/img/american-goldfinch-male.jpg",
    imageFemale: "/birds/img/american-goldfinch-female.jpg",
    image: "/birds/img/american-goldfinch.jpg",
    voice: "/birds/audio/american-goldfinch-voice.mp3",
    call: "/birds/audio/american-goldfinch-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "american-redstart",
    name: "American Redstart",
    imageMale: "/birds/img/american-redstart-male.jpg",
    imageFemale: "/birds/img/american-redstart-female.jpg",
    image: "/birds/img/american-redstart.jpg",
    voice: "/birds/audio/american-redstart-voice.mp3",
    call: "/birds/audio/american-redstart-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "american-robin",
    name: "American Robin",
    imageMale: "/birds/img/american-robin-male.jpg",
    imageFemale: "/birds/img/american-robin-female.jpg",
    image: "/birds/img/american-robin.jpg",
    voice: "/birds/audio/american-robin-voice.mp3",
    call: "/birds/audio/american-robin-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "bald-eagle",
    name: "Bald Eagle",
    imageMale: "/birds/img/bald-eagle-male.jpg",
    imageFemale: "/birds/img/bald-eagle-female.jpg",
    image: "/birds/img/bald-eagle.jpg",
    voice: "/birds/audio/bald-eagle-voice.mp3",
    call: "/birds/audio/bald-eagle-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "baltimore-oriole",
    name: "Baltimore Oriole",
    imageMale: "/birds/img/baltimore-oriole-male.jpg",
    imageFemale: "/birds/img/baltimore-oriole-female.jpg",
    image: "/birds/img/baltimore-oriole.jpg",
    voice: "/birds/audio/baltimore-oriole-voice.mp3",
    call: "/birds/audio/baltimore-oriole-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "belted-kingfisher",
    name: "Belted Kingfisher",
    imageMale: "/birds/img/belted-kingfisher-male.jpg",
    imageFemale: "/birds/img/belted-kingfisher-female.jpg",
    image: "/birds/img/belted-kingfisher.jpg",
    voice: "/birds/audio/belted-kingfisher-voice.mp3",
    call: "/birds/audio/belted-kingfisher-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "black-capped-chickadee",
    name: "Black-capped Chickadee",
    imageMale: "/birds/img/black-capped-chickadee-male.jpg",
    imageFemale: "/birds/img/black-capped-chickadee-female.jpg",
    image: "/birds/img/black-capped-chickadee.jpg",
    voice: "/birds/audio/black-capped-chickadee-voice.mp3",
    call: "/birds/audio/black-capped-chickadee-main.mp3",
    info: {
      /* Cornell blurb if you want */
    },
    variants: [
      {
        id: "bcc-fee-bee",
        label: "Fee-bee song",
        audio: "/birds/audio/black-capped-chickadee-fee-bee.mp3",
      },
      {
        id: "bcc-gargle",
        label: "Gargle call",
        audio: "/birds/audio/black-capped-chickadee-gargle.mp3",
      },
      {
        id: "bcc-high-see",
        label: "High see alarm",
        audio: "/birds/audio/black-capped-chickadee-high-see.mp3",
      },
    ],
  },
  {
    id: "black-phoebe",
    name: "Black Phoebe",
    imageMale: "/birds/img/black-phoebe-male.jpg",
    imageFemale: "/birds/img/black-phoebe-female.jpg",
    image: "/birds/img/black-phoebe.jpg",
    voice: "/birds/audio/black-phoebe-voice.mp3",
    call: "/birds/audio/black-phoebe-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "blue-jay",
    name: "Blue Jay",
    imageMale: "/birds/img/blue-jay-male.jpg",
    imageFemale: "/birds/img/blue-jay-female.jpg",
    image: "/birds/img/blue-jay.jpg",
    voice: "/birds/audio/blue-jay-voice.mp3",
    call: "/birds/audio/blue-jay-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "brown-pelican",
    name: "Brown Pelican",
    imageMale: "/birds/img/brown-pelican-male.jpg",
    imageFemale: "/birds/img/brown-pelican-female.jpg",
    image: "/birds/img/brown-pelican.jpg",
    voice: "/birds/audio/brown-pelican-voice.mp3",
    call: "/birds/audio/brown-pelican-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "california-quail",
    name: "California Quail",
    imageMale: "/birds/img/california-quail-male.jpg",
    imageFemale: "/birds/img/california-quail-female.jpg",
    image: "/birds/img/california-quail.jpg",
    voice: "/birds/audio/california-quail-voice.mp3",
    call: "/birds/audio/california-quail-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "california-scrub-jay",
    name: "California Scrub-Jay",
    imageMale: "/birds/img/california-scrub-jay-male.jpg",
    imageFemale: "/birds/img/california-scrub-jay-female.jpg",
    image: "/birds/img/california-scrub-jay.jpg",
    voice: "/birds/audio/california-scrub-jay-voice.mp3",
    call: "/birds/audio/california-scrub-jay-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    imageMale: "/birds/img/canada-goose-male.jpg",
    imageFemale: "/birds/img/canada-goose-female.jpg",
    image: "/birds/img/canada-goose.jpg",
    voice: "/birds/audio/canada-goose-voice.mp3",
    call: "/birds/audio/canada-goose-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "carolina-wren",
    name: "Carolina Wren",
    imageMale: "/birds/img/carolina-wren-male.jpg",
    imageFemale: "/birds/img/carolina-wren-female.jpg",
    image: "/birds/img/carolina-wren.jpg",
    voice: "/birds/audio/carolina-wren-voice.mp3",
    call: "/birds/audio/carolina-wren-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "cedar-waxwing",
    name: "Cedar Waxwing",
    imageMale: "/birds/img/cedar-waxwing-male.jpg",
    imageFemale: "/birds/img/cedar-waxwing-female.jpg",
    image: "/birds/img/cedar-waxwing.jpg",
    voice: "/birds/audio/cedar-waxwing-voice.mp3",
    call: "/birds/audio/cedar-waxwing-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "common-loon",
    name: "Common Loon",
    imageMale: "/birds/img/common-loon-male.jpg",
    imageFemale: "/birds/img/common-loon-female.jpg",
    image: "/birds/img/common-loon.jpg",
    voice: "/birds/audio/common-loon-voice.mp3",
    call: "/birds/audio/common-loon-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "dark-eyed-junco",
    name: "Dark-Eyed Junco",
    imageMale: "/birds/img/dark-eyed-junco-male.jpg",
    imageFemale: "/birds/img/dark-eyed-junco-female.jpg",
    image: "/birds/img/dark-eyed-junco.jpg",
    voice: "/birds/audio/dark-eyed-junco-voice.mp3",
    call: "/birds/audio/dark-eyed-junco-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "eastern-bluebird",
    name: "Eastern Bluebird",
    imageMale: "/birds/img/eastern-bluebird-male.jpg",
    imageFemale: "/birds/img/eastern-bluebird-female.jpg",
    image: "/birds/img/eastern-bluebird.jpg",
    voice: "/birds/audio/eastern-bluebird-voice.mp3",
    call: "/birds/audio/eastern-bluebird-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "great-blue-heron",
    name: "Great Blue Heron",
    imageMale: "/birds/img/great-blue-heron-male.jpg",
    imageFemale: "/birds/img/great-blue-heron-female.jpg",
    image: "/birds/img/great-blue-heron.jpg",
    voice: "/birds/audio/great-blue-heron-voice.mp3",
    call: "/birds/audio/great-blue-heron-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "great-horned-owl",
    name: "Great Horned Owl",
    imageMale: "/birds/img/great-horned-owl-male.jpg",
    imageFemale: "/birds/img/great-horned-owl-female.jpg",
    image: "/birds/img/great-horned-owl.jpg",
    voice: "/birds/audio/great-horned-owl-voice.mp3",
    call: "/birds/audio/great-horned-owl-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "house-finch",
    name: "House Finch",
    imageMale: "/birds/img/house-finch-male.jpg",
    imageFemale: "/birds/img/house-finch-female.jpg",
    image: "/birds/img/house-finch.jpg",
    voice: "/birds/audio/house-finch-voice.mp3",
    call: "/birds/audio/house-finch-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "house-sparrow",
    name: "House Sparrow",
    imageMale: "/birds/img/house-sparrow-male.jpg",
    imageFemale: "/birds/img/house-sparrow-female.jpg",
    image: "/birds/img/house-sparrow.jpg",
    voice: "/birds/audio/house-sparrow-voice.mp3",
    call: "/birds/audio/house-sparrow-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "indigo-bunting",
    name: "Indigo Bunting",
    imageMale: "/birds/img/indigo-bunting-male.jpg",
    imageFemale: "/birds/img/indigo-bunting-female.jpg",
    image: "/birds/img/indigo-bunting.jpg",
    voice: "/birds/audio/indigo-bunting-voice.mp3",
    call: "/birds/audio/indigo-bunting-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "killdeer",
    name: "Killdeer",
    imageMale: "/birds/img/killdeer-male.jpg",
    imageFemale: "/birds/img/killdeer-female.jpg",
    image: "/birds/img/killdeer.jpg",
    voice: "/birds/audio/killdeer-voice.mp3",
    call: "/birds/audio/killdeer-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "laughing-gull",
    name: "Laughing Gull",
    imageMale: "/birds/img/laughing-gull-male.jpg",
    imageFemale: "/birds/img/laughing-gull-female.jpg",
    image: "/birds/img/laughing-gull.jpg",
    voice: "/birds/audio/laughing-gull-voice.mp3",
    call: "/birds/audio/laughing-gull-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "mallard",
    name: "Mallard",
    imageMale: "/birds/img/mallard-male.jpg",
    imageFemale: "/birds/img/mallard-female.jpg",
    image: "/birds/img/mallard.jpg",
    voice: "/birds/audio/mallard-voice.mp3",
    call: "/birds/audio/mallard-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "mourning-dove",
    name: "Mourning Dove",
    imageMale: "/birds/img/mourning-dove-male.jpg",
    imageFemale: "/birds/img/mourning-dove-female.jpg",
    image: "/birds/img/mourning-dove.jpg",
    voice: "/birds/audio/mourning-dove-voice.mp3",
    call: "/birds/audio/mourning-dove-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "mute-swan",
    name: "Mute Swan",
    imageMale: "/birds/img/mute-swan-male.jpg",
    imageFemale: "/birds/img/mute-swan-female.jpg",
    image: "/birds/img/mute-swan.jpg",
    voice: "/birds/audio/mute-swan-voice.mp3",
    call: "/birds/audio/mute-swan-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "northern-cardinal",
    name: "Northern Cardinal",
    imageMale: "/birds/img/northern-cardinal-male.jpg",
    imageFemale: "/birds/img/northern-cardinal-female.jpg",
    image: "/birds/img/northern-cardinal.jpg",
    voice: "/birds/audio/northern-cardinal-voice.mp3",
    call: "/birds/audio/northern-cardinal-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "northern-flicker",
    name: "Northern Flicker",
    imageMale: "/birds/img/northern-flicker-male.jpg",
    imageFemale: "/birds/img/northern-flicker-female.jpg",
    image: "/birds/img/northern-flicker.jpg",
    voice: "/birds/audio/northern-flicker-voice.mp3",
    call: "/birds/audio/northern-flicker-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "northern-mockingbird",
    name: "Northern Mockingbird",
    imageMale: "/birds/img/northern-mockingbird-male.jpg",
    imageFemale: "/birds/img/northern-mockingbird-female.jpg",
    image: "/birds/img/northern-mockingbird.jpg",
    voice: "/birds/audio/northern-mockingbird-voice.mp3",
    call: "/birds/audio/northern-mockingbird-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "pileated-woodpecker",
    name: "Pileated Woodpecker",
    imageMale: "/birds/img/pileated-woodpecker-male.jpg",
    imageFemale: "/birds/img/pileated-woodpecker-female.jpg",
    image: "/birds/img/pileated-woodpecker.jpg",
    voice: "/birds/audio/pileated-woodpecker-voice.mp3",
    call: "/birds/audio/pileated-woodpecker-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "red-tailed-hawk",
    name: "Red-Tailed Hawk",
    imageMale: "/birds/img/red-tailed-hawk-male.jpg",
    imageFemale: "/birds/img/red-tailed-hawk-female.jpg",
    image: "/birds/img/red-tailed-hawk.jpg",
    voice: "/birds/audio/red-tailed-hawk-voice.mp3",
    call: "/birds/audio/red-tailed-hawk-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "ring-billed-gull",
    name: "Ring-Billed Gull",
    imageMale: "/birds/img/ring-billed-gull-male.jpg",
    imageFemale: "/birds/img/ring-billed-gull-female.jpg",
    image: "/birds/img/ring-billed-gull.jpg",
    voice: "/birds/audio/ring-billed-gull-voice.mp3",
    call: "/birds/audio/ring-billed-gull-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "rock-pigeon",
    name: "Rock Pigeon",
    imageMale: "/birds/img/rock-pigeon-male.jpg",
    imageFemale: "/birds/img/rock-pigeon-female.jpg",
    image: "/birds/img/rock-pigeon.jpg",
    voice: "/birds/audio/rock-pigeon-voice.mp3",
    call: "/birds/audio/rock-pigeon-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "rose-breasted-grosbeak",
    name: "Rose-breasted Grosbeak",
    imageMale: "/birds/img/rose-breasted-grosbeak-male.jpg",
    imageFemale: "/birds/img/rose-breasted-grosbeak-female.jpg",
    image: "/birds/img/rose-breasted-grosbeak.jpg",
    voice: "/birds/audio/rose-breasted-grosbeak-voice.mp3",
    call: "/birds/audio/rose-breasted-grosbeak-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "ruby-throated-hummingbird",
    name: "Ruby Throated Hummingbird",
    imageMale: "/birds/img/ruby-throated-hummingbird-male.jpg",
    imageFemale: "/birds/img/ruby-throated-hummingbird-female.jpg",
    image: "/birds/img/ruby-throated-hummingbird.jpg",
    voice: "/birds/audio/ruby-throated-hummingbird-voice.mp3",
    call: "/birds/audio/ruby-throated-hummingbird-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "sandhill-crane",
    name: "Sandhill Crane",
    imageMale: "/birds/img/sandhill-crane-male.jpg",
    imageFemale: "/birds/img/sandhill-crane-female.jpg",
    image: "/birds/img/sandhill-crane.jpg",
    voice: "/birds/audio/sandhill-crane-voice.mp3",
    call: "/birds/audio/sandhill-crane-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "scarlet-tanager",
    name: "Scarlet Tanager",
    imageMale: "/birds/img/scarlet-tanager-male.jpg",
    imageFemale: "/birds/img/scarlet-tanager-female.jpg",
    image: "/birds/img/scarlet-tanager.jpg",
    voice: "/birds/audio/scarlet-tanager-voice.mp3",
    call: "/birds/audio/scarlet-tanager-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "spotted-towhee",
    name: "Spotted Towhee",
    imageMale: "/birds/img/spotted-towhee-male.jpg",
    imageFemale: "/birds/img/spotted-towhee-female.jpg",
    image: "/birds/img/spotted-towhee.jpg",
    voice: "/birds/audio/spotted-towhee-voice.mp3",
    call: "/birds/audio/spotted-towhee-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "stellers-jay",
    name: "Steller's Jay",
    imageMale: "/birds/img/stellers-jay-male.jpg",
    imageFemale: "/birds/img/stellers-jay-female.jpg",
    image: "/birds/img/stellers-jay.jpg",
    voice: "/birds/audio/stellers-jay-voice.mp3",
    call: "/birds/audio/stellers-jay-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "swainsons-thrush",
    name: "Swainson's Thrush",
    imageMale: "/birds/img/swainsons-thrush-male.jpg",
    imageFemale: "/birds/img/swainsons-thrush-female.jpg",
    image: "/birds/img/swainsons-thrush.jpg",
    voice: "/birds/audio/swainsons-thrush-voice.mp3",
    call: "/birds/audio/swainsons-thrush-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "tree-swallow",
    name: "Tree Swallow",
    imageMale: "/birds/img/tree-swallow-male.jpg",
    imageFemale: "/birds/img/tree-swallow-female.jpg",
    image: "/birds/img/tree-swallow.jpg",
    voice: "/birds/audio/tree-swallow-voice.mp3",
    call: "/birds/audio/tree-swallow-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "tufted-titmouse",
    name: "Tufted Titmouse",
    imageMale: "/birds/img/tufted-titmouse-male.jpg",
    imageFemale: "/birds/img/tufted-titmouse-female.jpg",
    image: "/birds/img/tufted-titmouse.jpg",
    voice: "/birds/audio/tufted-titmouse-voice.mp3",
    call: "/birds/audio/tufted-titmouse-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "western-meadowlark",
    name: "Western Meadowlark",
    imageMale: "/birds/img/western-meadowlark-male.jpg",
    imageFemale: "/birds/img/western-meadowlark-female.jpg",
    image: "/birds/img/western-meadowlark.jpg",
    voice: "/birds/audio/western-meadowlark-voice.mp3",
    call: "/birds/audio/western-meadowlark-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "western-tanager",
    name: "Western Tanager",
    imageMale: "/birds/img/western-tanager-male.jpg",
    imageFemale: "/birds/img/western-tanager-female.jpg",
    image: "/birds/img/western-tanager.jpg",
    voice: "/birds/audio/western-tanager-voice.mp3",
    call: "/birds/audio/western-tanager-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "white-breasted-nuthatch",
    name: "White-Breasted Nuthatch",
    imageMale: "/birds/img/white-breasted-nuthatch-male.jpg",
    imageFemale: "/birds/img/white-breasted-nuthatch-female.jpg",
    image: "/birds/img/white-breasted-nuthatch.jpg",
    voice: "/birds/audio/white-breasted-nuthatch-voice.mp3",
    call: "/birds/audio/white-breasted-nuthatch-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "white-throated-sparrow",
    name: "White-Throated Sparrow",
    imageMale: "/birds/img/white-throated-sparrow-male.jpg",
    imageFemale: "/birds/img/white-throated-sparrow-female.jpg",
    image: "/birds/img/white-throated-sparrow.jpg",
    voice: "/birds/audio/white-throated-sparrow-voice.mp3",
    call: "/birds/audio/white-throated-sparrow-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "wood-duck",
    name: "Wood Duck",
    imageMale: "/birds/img/wood-duck-male.jpg",
    imageFemale: "/birds/img/wood-duck-female.jpg",
    image: "/birds/img/wood-duck.jpg",
    voice: "/birds/audio/wood-duck-voice.mp3",
    call: "/birds/audio/wood-duck-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "yellow-rumped-warbler",
    name: "Yellow-Rumped Warbler",
    imageMale: "/birds/img/yellow-rumped-warbler-male.jpg",
    imageFemale: "/birds/img/yellow-rumped-warbler-female.jpg",
    image: "/birds/img/yellow-rumped-warbler.jpg",
    voice: "/birds/audio/yellow-rumped-warbler-voice.mp3",
    call: "/birds/audio/yellow-rumped-warbler-call.mp3",
    info: { songs: "" },
    variants: [],
  },
];

// Helper: pick the right image based on sex filter with good fallbacks
function getBirdImage(bird: Bird, sex: SexFilter): string {
  if (sex === "female") {
    return (
      bird.imageFemale ||
      bird.imageMale ||
      bird.image ||
      "/birds/img/placeholder.jpg"
    );
  }
  // sex === "male"
  return (
    bird.imageMale ||
    bird.image ||
    bird.imageFemale ||
    "/birds/img/placeholder.jpg"
  );
}

export default function BirdBingo() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<string[] | null>(null);

  const [nowPlaying, setNowPlaying] = useState("");
  const [selectedBird, setSelectedBird] = useState<Bird | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showNerdMode, setShowNerdMode] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  // which sex’s image we’re showing
  const [sexFilter, setSexFilter] = useState<SexFilter>("male");

  // which bird is currently playing + progress (0–1)
  const [currentBirdId, setCurrentBirdId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);

  // AUDIO SEQUENCING (for voice + call AND variants)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (!queueRef.current || queueRef.current.length === 0) {
        queueRef.current = null;
        setNowPlaying("");
        setIsPlaying(false);
        setCurrentBirdId(null);
        setPlayProgress(0);
        return;
      }

      // remove the one we just finished
      queueRef.current.shift();

      if (!queueRef.current.length) {
        queueRef.current = null;
        setNowPlaying("");
        setIsPlaying(false);
        setCurrentBirdId(null);
        setPlayProgress(0);
        return;
      }

      const nextSrc = queueRef.current[0];
      audio.src = nextSrc;
      audio.play().catch(() => {});
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  // AUDIO PROGRESS → card liquid fill
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!audio.duration || isNaN(audio.duration)) {
        setPlayProgress(0);
      } else {
        setPlayProgress(audio.currentTime / audio.duration);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  // CARD TAP: toggle play/stop for that bird
  const handleCardTap = (bird: Bird) => {
    const audio = audioRef.current;
    if (!audio) return;

    // If this bird is currently playing, stop & reset
    if (currentBirdId === bird.id && isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      queueRef.current = null;
      setIsPlaying(false);
      setCurrentBirdId(null);
      setPlayProgress(0);
      setNowPlaying("");
      return;
    }

    // Otherwise: (re)start this bird from the beginning
    audio.pause();
    audio.currentTime = 0;

    queueRef.current = [bird.voice, bird.call];
    setCurrentBirdId(bird.id);
    setIsPlaying(true);
    setPlayProgress(0);
    setSelectedBird(bird);

    audio.src = queueRef.current[0];
    audio
      .play()
      .then(() =>
        setNowPlaying(`Playing: ${bird.name} – your voice, then bird call`)
      )
      .catch(() => {
        setIsPlaying(false);
        setNowPlaying("");
      });
  };

  // Play a specific variant (single clip)
  const handlePlayVariant = (bird: Bird, variant: BirdSongVariant) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    queueRef.current = [variant.audio];
    setCurrentBirdId(bird.id);
    setIsPlaying(true);
    setPlayProgress(0);
    setSelectedBird(bird);

    audio.src = variant.audio;
    audio
      .play()
      .then(() => setNowPlaying(`Playing: ${bird.name} – ${variant.label}`))
      .catch(() => {
        setIsPlaying(false);
        setNowPlaying("");
      });
  };

  // INFO CLICK (opens modal)
  const handleInfoClick = (e: React.MouseEvent, bird: Bird) => {
    e.stopPropagation(); // don’t trigger the main sound
    if (!bird.info && (!bird.variants || bird.variants.length === 0)) return;
    setSelectedBird(bird);
    setShowModal(true);
  };

  // Close modal with small animation
  const closeModal = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      setShowModal(false);
      setAnimatingOut(false);
      setSelectedBird(null);
    }, 170);
  };

  const shouldShowModal =
    showModal &&
    selectedBird &&
    (selectedBird.info ||
      (selectedBird.variants && selectedBird.variants.length > 0));

  return (
    <>
      <main className="grid gap-6 md:gap-8">
        <section className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 md:p-8 shadow-card">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
            Sibley Backyard Birding Bingo – Sounds
          </h1>
          <p className="text-[var(--muted)] mt-2">
            Tap a bird card to hear Nic say the name, followed by the
            bird&apos;s call. Great for when Jojo draws a card.
          </p>

          <p className="mt-3 text-xs text-[var(--muted)]">
            Tip: phone volume up, and if a sound doesn&apos;t fire on the first
            tap (mobile quirks), just tap again.
          </p>

          <div className="mt-4 text-xs text-center text-[var(--muted)] min-h-[1.25rem]">
            {nowPlaying}
          </div>

          {/* Controls row: sex toggle + grown-up toggle */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[var(--muted)]">
            <div>Tap any card to play or stop its sounds.</div>

            <div className="flex flex-wrap items-center gap-4 justify-end">
              {/* Sex toggle */}
              <div className="inline-flex items-center gap-2">
                <span>View:</span>
                <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-elev)] p-0.5">
                  <button
                    type="button"
                    onClick={() => setSexFilter("male")}
                    className={`px-2.5 py-1 rounded-full text-[0.7rem] font-semibold tracking-wide transition ${
                      sexFilter === "male"
                        ? "bg-white text-black shadow-sm"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setSexFilter("female")}
                    className={`px-2.5 py-1 rounded-full text-[0.7rem] font-semibold tracking-wide transition ${
                      sexFilter === "female"
                        ? "bg-white text-black shadow-sm"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Grown-up info toggle */}
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <span>Grown-up info</span>
                <input
                  type="checkbox"
                  className="accent-lime-500"
                  checked={showNerdMode}
                  onChange={(e) => setShowNerdMode(e.target.checked)}
                />
              </label>
            </div>
          </div>

          {/* Cards grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {birds.map((bird) => {
              const imgSrc = getBirdImage(bird, sexFilter);

              return (
                <div
                  key={bird.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleCardTap(bird)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCardTap(bird);
                    }
                  }}
                  className="group flex flex-col items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:translate-y-[1px] active:scale-[0.97] transition-transform duration-100 ease-out"
                >
                  {/* Outer playing-card shell (yellow border, rounded corners) */}
                  <div className="relative w-full max-w-[220px] mx-auto pt-[138%] rounded-[20px] border-[3px] border-[#F6C94B] bg-white shadow-md transition-shadow duration-100 ease-out active:shadow-sm">
                    {/* Inner panel: absolute for inset; inner wrapper is relative */}
                    <div className="absolute inset-[10px] rounded-[14px] overflow-hidden bg-white">
                      <div className="relative w-full h-full flex flex-col items-center justify-between">
                        {/* Liquid fill overlay when this bird is playing */}
                        {currentBirdId === bird.id && isPlaying && (
                          <div
                            className="absolute inset-x-0 bottom-0 rounded-b-[14px] bg-cyan-200/60 pointer-events-none"
                            style={{ height: `${playProgress * 100}%` }}
                          />
                        )}

                        {/* Info icon (only when nerd mode + info/variants) */}
                        {showNerdMode &&
                          (bird.info ||
                            (bird.variants && bird.variants.length > 0)) && (
                            <button
                              type="button"
                              onClick={(e) => handleInfoClick(e, bird)}
                              className="absolute top-2 right-2 h-6 w-6 rounded-full bg-black/60 text-white text-[0.7rem] font-semibold flex items-center justify-center shadow-md hover:bg-black/80 focus:outline-none focus:ring-1 focus:ring-cyan-300/80 z-20"
                              aria-label={`More info about ${bird.name}`}
                            >
                              i
                            </button>
                          )}

                        {/* Illustration area */}
                        <div className="w-full flex-1 flex items-center justify-center px-3 pt-3 relative z-10">
                          <img
                            src={imgSrc}
                            alt={`${
                              sexFilter === "female" ? "Female" : "Male"
                            } ${bird.name}`}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Label area – Sibley-style all caps with generous tracking */}
                        <div className="pb-4 px-3 text-center relative z-10">
                          <div className="text-[0.7rem] leading-[1.3] tracking-[0.25em] text-black/80 font-medium">
                            {bird.name.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Little helper text under card */}
                  <div className="mt-1 text-[0.65rem] uppercase tracking-wide text-[var(--muted)]">
                    Tap to{" "}
                    {currentBirdId === bird.id && isPlaying ? "stop" : "play"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Shared audio element */}
          <audio ref={audioRef} />
        </section>
      </main>

      {/* MODAL — big Sibley-style card */}
      {shouldShowModal && selectedBird && (
        <div
          className="modal-backdrop fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className={[
              "modal-panel relative w-full max-w-md rounded-[20px] border-[3px] border-[#F6C94B] bg-white shadow-2xl",
              modalAnimation === "center"
                ? animatingOut
                  ? "modal-center-exit modal-center-exit-active"
                  : "modal-center-enter modal-center-enter-active"
                : animatingOut
                ? "modal-bottom-exit modal-bottom-exit-active"
                : "modal-bottom-enter modal-bottom-enter-active",
            ].join(" ")}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-700 text-xl leading-none"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            {/* Inner content area: image + name + info + variants */}
            <div className="p-4 sm:p-5 md:p-6 rounded-[14px] bg-white flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
              {/* Top: image + Sibley name */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                  <img
                    src={getBirdImage(selectedBird, sexFilter)}
                    alt={selectedBird.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center px-3">
                  <div className="text-[0.8rem] sm:text-[0.9rem] leading-[1.4] tracking-[0.25em] text-black/80 font-medium">
                    {selectedBird.name.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="h-px bg-neutral-200 my-1" />

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                {selectedBird.info?.songs && (
                  <div>
                    <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1 text-neutral-900">
                      Songs
                    </div>
                    <p>{selectedBird.info.songs}</p>
                  </div>
                )}

                {selectedBird.info?.calls && (
                  <div>
                    <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1 text-neutral-900">
                      Calls
                    </div>
                    <p>{selectedBird.info.calls}</p>
                  </div>
                )}

                {selectedBird.info?.otherSounds && (
                  <div>
                    <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-1 text-neutral-900">
                      Other sounds
                    </div>
                    <p>{selectedBird.info.otherSounds}</p>
                  </div>
                )}

                {selectedBird.info?.sourceUrl && (
                  <div>
                    <a
                      href={selectedBird.info.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-600 hover:underline inline-flex items-center gap-1 text-xs"
                    >
                      View full details at Cornell Lab ↗
                    </a>
                  </div>
                )}

                {/* Variant audio buttons */}
                {selectedBird.variants && selectedBird.variants.length > 0 && (
                  <div>
                    <div className="uppercase text-xs tracking-[0.18em] font-semibold mb-2 text-neutral-900">
                      Songs / dialects
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedBird.variants.map((variant) => (
                        <button
                          key={variant.id}
                          type="button"
                          onClick={() =>
                            handlePlayVariant(selectedBird, variant)
                          }
                          className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-800 hover:border-cyan-400 hover:bg-cyan-50 active:translate-y-[1px] active:scale-[0.98] transition-transform"
                        >
                          {variant.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
