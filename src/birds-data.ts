// birds-data.ts
// Pure data + types for the Bird Bingo page.

export type BirdInfo = {
  // Top-of-card meta
  scientificName?: string;
  order?: string;
  family?: string;
  groupName?: string; // e.g. "Rails", "Buntings"

  // Icon row
  habitat?: string; // "Lakes and ponds"
  food?: string; // "Plants"
  nesting?: string; // "Floating"
  behavior?: string; // "Surface dive"
  conservation?: string; // "Low concern"

  // Text blocks
  basicDescription?: string;
  songs?: string;
  calls?: string;
  otherSounds?: string;

  // Links
  sourceUrl?: string; // main Cornell species page
  lifeHistoryUrl?: string; // optional life history subpage
};

export type BirdSongVariant = {
  id: string;
  label: string;
  audio: string;
  note?: string;
};

export type Bird = {
  id: string;
  name: string;
  image?: string;
  imageMale?: string;
  imageFemale?: string;
  voice: string;
  call: string;
  info?: BirdInfo;
  variants?: BirdSongVariant[];
};

export const primaryBirds: Bird[] = [
  {
    id: "american-coot",
    name: "American Coot",
    imageMale: "/birds/img/american-coot-male.png",
    imageFemale: "/birds/img/american-coot-female.png",
    image: "",
    voice: "/birds/audio/american-coot-voice.mp3",
    call: "/birds/audio/american-coot-call.mp3",
    info: {
      // Top-of-card meta
      scientificName: "Fulica americana",
      order: "Gruiformes",
      family: "Rallidae",
      groupName: "Rails",

      // Icon row (from the Cornell-style card)
      habitat: "Lakes and ponds",
      food: "Plants",
      nesting: "Floating",
      behavior: "Surface dive",
      conservation: "Low concern",

      // Main blurb (paraphrased from Basic Description)
      basicDescription:
        "Stocky, dark waterbirds that cruise around open ponds and marshes with a stark white bill and forehead shield. They often forage alongside ducks, but a closer look at their slim head and long lobed toes reveals that coots are actually rails, more closely related to Sandhill Cranes and secretive marsh birds than to true ducks.",

      // Optional sound notes – you can tweak or delete if you prefer
      songs:
        "Gives series of short clucks, croaks, and grunts, often strung together into chattering, mechanical-sounding phrases.",
      calls:
        "Loud cackles, honks, and squawks used in contact, aggression, and alarm when squabbling on the water.",
      otherSounds:
        "Splashy, slapping footsteps as they run across the water during takeoff or fights, plus noisy wingbeats over the pond.",

      // Links back to Cornell
      sourceUrl: "https://www.allaboutbirds.org/guide/American_Coot",
      lifeHistoryUrl:
        "https://www.allaboutbirds.org/guide/American_Coot/lifehistory",
    },
    variants: [],
  },
  {
    id: "american-crow",
    name: "American Crow",
    imageMale: "/birds/img/american-crow-male.png",
    imageFemale: "/birds/img/american-crow-female.png",
    image: "",
    voice: "/birds/audio/american-crow-voice.mp3",
    call: "/birds/audio/american-crow-call.mp3",
    info: {
      scientificName: "Corvus brachyrhynchos",
      order: "Passeriformes",
      family: "Corvidae",
      groupName: "Crows and Jays",
      habitat: "Many habitats",
      food: "Almost anything",
      nesting: "Trees",
      behavior: "Ground forager",
      conservation: "Low concern",
      basicDescription:
        "Large, glossy black birds with iridescent purple sheen in sunlight. American Crows are among the most intelligent birds on Earth — they use tools, recognize human faces, hold apparent 'funerals' for dead companions, and pass learned behaviors to their young. Highly adaptable, they thrive from wilderness to city centers.",
      songs:
        "Produces the classic 'caw-caw-caw,' but also rattles, coos, clicks, and melodic warbles. Skilled mimics that can reproduce sounds from other birds and even human speech.",
      calls:
        "Alarm calls are harsh and sharp; a steady 'caw' series used in contact. Calls speed up and intensify when mobbing owls or hawks.",
      sourceUrl: "https://www.allaboutbirds.org/guide/American_Crow",
    },
    variants: [],
  },
  {
    id: "american-goldfinch",
    name: "American Goldfinch",
    imageMale: "/birds/img/american-goldfinch-male.png",
    imageFemale: "/birds/img/american-goldfinch-female.png",
    image: "",
    voice: "/birds/audio/american-goldfinch-voice.mp3",
    call: "/birds/audio/american-goldfinch-call.mp3",
    info: {
      scientificName: "Spinus tristis",
      order: "Passeriformes",
      family: "Fringillidae",
      groupName: "Finches",
      habitat: "Weedy fields, roadsides",
      food: "Seeds (especially thistle)",
      nesting: "Trees and shrubs",
      behavior: "Forages on seedheads",
      conservation: "Low concern",
      basicDescription:
        "A brilliant yellow-and-black finch that is a strict vegetarian — one of the very few birds that eats almost exclusively seeds, including thistle, sunflower, and alder. They time nesting to late summer when thistle down peaks, lining their cup nests with the fluffy fibers. In flight, they bound through the air in a distinctive roller-coaster pattern, constantly calling.",
      songs:
        "Sings a long, canary-like series of musical twitters, trills, and warbles. The melody is lively and constantly varied, often delivered in undulating flight.",
      calls:
        "The flight call is a cheerful musical 'potato-chip' or 'per-chick-o-ree,' given constantly while traveling. A descending 'swee' is used as an alarm.",
      sourceUrl: "https://www.allaboutbirds.org/guide/American_Goldfinch",
    },
    variants: [],
  },
  {
    id: "american-redstart",
    name: "American Redstart",
    imageMale: "/birds/img/american-redstart-male.png",
    imageFemale: "/birds/img/american-redstart-female.png",
    image: "",
    voice: "/birds/audio/american-redstart-voice.mp3",
    call: "/birds/audio/american-redstart-call.mp3",
    info: {
      scientificName: "Setophaga ruticilla",
      order: "Passeriformes",
      family: "Parulidae",
      groupName: "Wood-warblers",
      habitat: "Deciduous forests, edges",
      food: "Insects (caught in air)",
      nesting: "Trees (low cup nest)",
      behavior: "Fans tail to flush prey",
      conservation: "Low concern",
      basicDescription:
        "An energetic, flamboyant warbler that fans its boldly patterned wings and tail to startle insects into flight — then snatches them on the wing. Males are striking black-and-orange; females olive-gray with yellow patches. It behaves almost like a flycatcher, constantly spinning, fanning, and darting after insects it flushes from foliage.",
      songs:
        "Sings a series of 2–8 high, thin notes that may end with an upswing or a downward droop. Males often alternate between two distinct song types. Often described as 'zee-zee-zee-ZEE-tee.'",
      calls:
        "A sharp, strong 'chip,' similar to other warblers. Fairly quiet outside of the breeding season.",
      sourceUrl: "https://www.allaboutbirds.org/guide/American_Redstart",
    },
    variants: [],
  },
  {
    id: "american-robin",
    name: "American Robin",
    imageMale: "/birds/img/american-robin-male.png",
    imageFemale: "/birds/img/american-robin-female.png", // subtly dimorphic – female paler
    image: "",
    voice: "/birds/audio/american-robin-voice.mp3",
    call: "/birds/audio/american-robin-call.mp3",
    info: {
      scientificName: "Turdus migratorius",
      order: "Passeriformes",
      family: "Turdidae",
      groupName: "Thrushes",
      habitat: "Lawns, forests, parks",
      food: "Earthworms, fruits, berries",
      nesting: "Trees and ledges (mud cup)",
      behavior: "Ground forager",
      conservation: "Low concern",
      basicDescription:
        "America's most familiar thrush, with a warm orange-red breast and a cheerful caroling song. Robins hunt earthworms by sight, cocking their head to one side to look at the ground — not to listen, as is often thought. They don't always migrate; large winter flocks roam nomadically, descending on berry-laden trees before dispersing again in spring.",
      songs:
        "Sings a rich, rolling carol of liquid phrases: 'cheerily, cheer-up, cheerio,' often delivered before dawn and well after dusk. One of the most familiar sounds of spring mornings.",
      calls:
        "A sharp 'peek' or rapid 'tut-tut-tut' alarm call. A high, thin 'seep' in flight. Chattering scolding when a predator is near.",
      sourceUrl: "https://www.allaboutbirds.org/guide/American_Robin",
    },
    variants: [],
  },
  {
    id: "bald-eagle",
    name: "Bald Eagle",
    imageMale: "/birds/img/bald-eagle-male.png",
    imageFemale: "/birds/img/bald-eagle-female.png",
    image: "",
    voice: "/birds/audio/bald-eagle-voice.mp3",
    call: "/birds/audio/bald-eagle-call.mp3",
    info: {
      scientificName: "Haliaeetus leucocephalus",
      order: "Accipitriformes",
      family: "Accipitridae",
      groupName: "Hawks and Eagles",
      habitat: "Large open water, forests",
      food: "Fish, waterfowl, carrion",
      nesting: "Tall trees near water",
      behavior: "Soars, plunge-dives",
      conservation: "Low concern",
      basicDescription:
        "The national bird and symbol of the United States, immediately recognizable by the snow-white head and tail of adults. These powerful raptors build the largest nests of any North American bird — pairs return to the same nest year after year, adding material until it can weigh over a ton. Brought back from near-extinction after DDT was banned in 1972.",
      songs:
        "Doesn't sing in the traditional sense. The real call is surprisingly thin and weak for such a massive bird — a series of high-pitched squealing whistles that many people find underwhelming.",
      calls:
        "A series of high, scratchy squeaks and chirps: 'kleek-kik-ik-ik-ik.' This is why filmmakers almost always dub the Bald Eagle's cry with the Red-tailed Hawk's far more dramatic scream.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Bald_Eagle",
    },
    variants: [],
  },
  {
    id: "baltimore-oriole",
    name: "Baltimore Oriole",
    imageMale: "/birds/img/baltimore-oriole-male.png",
    imageFemale: "/birds/img/baltimore-oriole-female.png",
    image: "",
    voice: "/birds/audio/baltimore-oriole-voice.mp3",
    call: "/birds/audio/baltimore-oriole-call.mp3",
    info: {
      scientificName: "Icterus galbula",
      order: "Passeriformes",
      family: "Icteridae",
      groupName: "Blackbirds",
      habitat: "Forest edges, parks, gardens",
      food: "Insects, nectar, fruit",
      nesting: "Hanging woven pouch",
      behavior: "Canopy forager",
      conservation: "Low concern",
      basicDescription:
        "Flame-orange and black males are among the most spectacular songbirds in eastern North America. Their remarkable nests are long, sock-like pouches woven from plant fibers, hair, and string, dangling from the tips of branches. They are attracted to orange halves, nectar feeders, and ripe fruit — and they winter in Central and South America.",
      songs:
        "Sings a series of clear, flute-like whistles — rich, melodic, and loud. Males improvise their own phrases, so no two individuals sound exactly alike.",
      calls:
        "Gives a dry, chattering rattle and a sharp, whistled 'hew-li.' Alarm is a short, pointed 'chek.'",
      sourceUrl: "https://www.allaboutbirds.org/guide/Baltimore_Oriole",
    },
    variants: [],
  },
  {
    id: "belted-kingfisher",
    name: "Belted Kingfisher",
    imageMale: "/birds/img/belted-kingfisher-male.png",
    imageFemale: "/birds/img/belted-kingfisher-female.png",
    image: "",
    voice: "/birds/audio/belted-kingfisher-voice.mp3",
    call: "/birds/audio/belted-kingfisher-call.mp3",
    info: {
      scientificName: "Megaceryle alcyon",
      order: "Coraciiformes",
      family: "Alcedinidae",
      groupName: "Kingfishers",
      habitat: "Streams, rivers, ponds",
      food: "Fish, crayfish",
      nesting: "Earthen burrows (stream banks)",
      behavior: "Hovers and plunge-dives",
      conservation: "Low concern",
      basicDescription:
        "A stocky, large-headed bird with a shaggy crest and massive bill. Unusually among birds, the female is more colorful than the male — she sports a rusty belly band he lacks. Belted Kingfishers excavate long burrows into stream banks for nesting, and they're typically seen alone, rattling loudly as they patrol their stretch of water before plunging headfirst for fish.",
      songs:
        "The rattling call doubles as its territorial song. Delivers a long, loud, mechanical rattle from a perch or on the wing.",
      calls:
        "An unmistakable loud, dry, rattling trill — 'kek-kek-kek-kek-kek' — that carries far over water. Almost always calls in flight as it travels its territory.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Belted_Kingfisher",
    },
    variants: [],
  },
  {
    id: "black-capped-chickadee",
    name: "Black-capped Chickadee",
    imageMale: "/birds/img/black-capped-chickadee-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/black-capped-chickadee-voice.mp3",
    call: "/birds/audio/black-capped-chickadee-call.mp3",
    info: {
      scientificName: "Poecile atricapillus",
      order: "Passeriformes",
      family: "Paridae",
      groupName: "Chickadees and Titmice",
      habitat: "Forests, edges, suburbs",
      food: "Insects, seeds, berries",
      nesting: "Cavities in soft dead wood",
      behavior: "Acrobatic canopy forager",
      conservation: "Low concern",
      basicDescription:
        "A tiny, bold acrobat with a bold black cap and bib, recognized as one of the most charismatic backyard birds in North America. Chickadees have extraordinary spatial memory — they cache thousands of seeds each fall and can recall each hiding spot months later. Every fall their hippocampus actually grows new neurons to help manage all those memories.",
      songs:
        "The whistled 'fee-bee' (or 'hey-sweetie') is one of the clearest, most learnable bird songs — two pure whistles, the second lower. Males begin singing before dawn, and the pitch shifts with temperature.",
      calls:
        "The classic 'chick-a-dee-dee-dee' is a sophisticated alarm signal — the more 'dees' added, the more dangerous the predator. Also gives a high, thin 'seet' alarm and a nasal gargle in aggressive encounters.",
      otherSounds:
        "Soft contact calls within flocks communicate flock status, predator type, and individual identity in a surprisingly complex social language.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Black-capped_Chickadee",
    },
    variants: [],
  },
  {
    id: "black-phoebe",
    name: "Black Phoebe",
    imageMale: "/birds/img/black-phoebe-male.png",
    imageFemale: "/birds/img/black-phoebe-female.png",
    image: "",
    voice: "/birds/audio/black-phoebe-voice.mp3",
    call: "/birds/audio/black-phoebe-call.mp3",
    info: {
      scientificName: "Sayornis nigricans",
      order: "Passeriformes",
      family: "Tyrannidae",
      groupName: "Flycatchers",
      habitat: "Near water — streams, ponds, pools",
      food: "Insects (caught in air)",
      nesting: "Mud cup on ledges near water",
      behavior: "Sallies, pumps tail constantly",
      conservation: "Low concern",
      basicDescription:
        "A small, dapper flycatcher dressed entirely in jet black with a clean white belly — like a tiny bird wearing a tuxedo. Black Phoebes are almost always found near water, perching on low branches to repeatedly dart out and snap up insects in mid-air. They pump their tails up and down almost constantly, a signature behavior shared by all phoebes.",
      songs:
        "Sings a buzzy, rising-and-falling 'pi-tsee, pi-tsee' — two alternating phrases repeated from a favorite perch. Males often return to the same song post day after day.",
      calls:
        "A sharp, emphatic 'chip' or 'tsip,' often delivered simultaneously with the signature tail pump.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Black_Phoebe",
    },
    variants: [],
  },
  {
    id: "blue-jay",
    name: "Blue Jay",
    imageMale: "/birds/img/blue-jay-male.png",
    imageFemale: "/birds/img/blue-jay-female.png",
    image: "",
    voice: "/birds/audio/blue-jay-voice.mp3",
    call: "/birds/audio/blue-jay-call.mp3",
    info: {
      scientificName: "Cyanocitta cristata",
      order: "Passeriformes",
      family: "Corvidae",
      groupName: "Crows and Jays",
      habitat: "Forests, parks, suburbs",
      food: "Acorns, seeds, insects, eggs",
      nesting: "Trees (sturdy cup nest)",
      behavior: "Caches acorns, mimics hawks",
      conservation: "Low concern",
      basicDescription:
        "A large, bold, crested jay with brilliant blue, white, and black plumage. Blue Jays are highly intelligent and play a vital ecological role — they cache thousands of acorns each fall, burying them in soil and leaf litter. The ones they forget germinate, making Blue Jays one of the primary agents spreading oak forests across eastern North America after the last ice age.",
      songs:
        "A skilled mimic that perfectly imitates Red-shouldered and Red-tailed Hawk calls, sending other birds scattering. Also produces a soft, liquid 'queedle-queedle' rarely heard unless you're very close.",
      calls:
        "The familiar harsh 'jay-jay-jay' or 'thief-thief' alarm — loud and unmistakable. Also a bell-like 'tool-ool' and a variety of squeaks, rattles, and whistled notes.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Blue_Jay",
    },
    variants: [],
  },
  {
    id: "brown-pelican",
    name: "Brown Pelican",
    imageMale: "/birds/img/brown-pelican-male.png",
    imageFemale: "/birds/img/brown-pelican-female.png",
    image: "",
    voice: "/birds/audio/brown-pelican-voice.mp3",
    call: "/birds/audio/brown-pelican-call.mp3",
    info: {
      scientificName: "Pelecanus occidentalis",
      order: "Pelecaniformes",
      family: "Pelecanidae",
      groupName: "Pelicans",
      habitat: "Coasts, bays, estuaries",
      food: "Fish",
      nesting: "Ground or low trees (colonies)",
      behavior: "Plunge-dives from height",
      conservation: "Low concern",
      basicDescription:
        "The only pelican that dives headfirst from the air to catch fish — all other pelicans scoop from the surface. Brown Pelicans crash into the water from up to 60 feet high, stunning fish with the impact, then scoop them up in their expandable throat pouch. They were nearly wiped out by DDT in the 1970s and are now a conservation success story.",
      calls:
        "Adults are largely silent away from the nesting colony. Chicks beg loudly; adults give low grunts and hisses at the nest.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Brown_Pelican",
    },
    variants: [],
  },
  {
    id: "bufflehead",
    name: "Bufflehead",
    imageMale: "/birds/img/bufflehead-male.png",
    imageFemale: "/birds/img/bufflehead-female.png",
    image: "",
    voice: "/birds/audio/bufflehead-voice.mp3",
    call: "/birds/audio/bufflehead-call.mp3",
    info: {
      scientificName: "Bucephala albeola",
      order: "Anseriformes",
      family: "Anatidae",
      groupName: "Ducks",
      habitat: "Lakes, ponds, bays",
      food: "Aquatic invertebrates, fish eggs",
      nesting: "Tree cavities (old woodpecker holes)",
      behavior: "Dives underwater",
      conservation: "Low concern",
      basicDescription:
        "North America's smallest diving duck, with males sporting a spectacular iridescent purple-green head and a bold white patch. Buffleheads nest almost exclusively in old Northern Flicker and Pileated Woodpecker holes — a dependency that makes their nesting success directly tied to the health of woodpecker populations. They spend winter on coastal bays and open lakes.",
      calls:
        "Males give a squeaky, guttural growl during displays; females give a hoarse 'churr.' Generally quiet outside the breeding season.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Bufflehead",
    },
    variants: [],
  },
  {
    id: "california-quail",
    name: "California Quail",
    imageMale: "/birds/img/california-quail-male.png",
    imageFemale: "/birds/img/california-quail-female.png",
    image: "",
    voice: "/birds/audio/california-quail-voice.mp3",
    call: "/birds/audio/california-quail-call.mp3",
    info: {
      scientificName: "Callipepla californica",
      order: "Galliformes",
      family: "Odontophoridae",
      groupName: "New World Quail",
      habitat: "Chaparral, oak woodlands, suburbs",
      food: "Seeds, leaves, insects",
      nesting: "Ground (scrape hidden in vegetation)",
      behavior: "Runs rather than flies",
      conservation: "Low concern",
      basicDescription:
        "California's state bird, instantly recognizable by the comma-shaped black plume drooping forward from the crown. They live in coveys of up to 200 birds in fall and winter, moving together through the underbrush. When alarmed, they prefer to run — exploding into flight only as a last resort. Both parents are devoted caregivers to large broods of tiny, precocial chicks.",
      songs:
        "The loud, three-syllable 'Chi-CA-go' (or 'where ARE you?') call carries far and is used as a rallying call to reassemble a scattered covey.",
      calls:
        "A soft clucking series between flock members. Alarm is a rapid series of sharp 'pit' notes. Males give a variety of shorter notes during courtship.",
      sourceUrl: "https://www.allaboutbirds.org/guide/California_Quail",
    },
    variants: [],
  },
  {
    id: "california-scrub-jay",
    name: "California Scrub-Jay",
    imageMale: "/birds/img/california-scrub-jay-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/california-scrub-jay-voice.mp3",
    call: "/birds/audio/california-scrub-jay-call.mp3",
    info: {
      scientificName: "Aphelocoma californica",
      order: "Passeriformes",
      family: "Corvidae",
      groupName: "Crows and Jays",
      habitat: "Scrub, oak woodland, suburbs",
      food: "Acorns, insects, small animals",
      nesting: "Trees and shrubs (sturdy cup)",
      behavior: "Caches acorns, bold at feeders",
      conservation: "Low concern",
      basicDescription:
        "A sleek, crestless jay with vivid blue, white, and gray plumage that thrives in scrubby western habitats and suburban backyards. California Scrub-Jays are highly intelligent — they cache food, deceive other jays they've caught watching them hide food, and re-hide caches when observed. Research shows they plan for the future, a rare cognitive ability outside humans and great apes.",
      songs:
        "Produces a wide repertoire of harsh, raspy calls and occasional softer warbling. Not a typical melodic songbird.",
      calls:
        "Most common is a loud, rising 'shreek' or 'shrenk.' Also gives a series of harsh, nasal 'check' notes and a rolling 'krrr-krrr' when alarmed.",
      sourceUrl: "https://www.allaboutbirds.org/guide/California_Scrub-Jay",
    },
    variants: [],
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    imageMale: "/birds/img/canada-goose-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/canada-goose-voice.mp3",
    call: "/birds/audio/canada-goose-call.mp3",
    info: {
      scientificName: "Branta canadensis",
      order: "Anseriformes",
      family: "Anatidae",
      groupName: "Geese",
      habitat: "Parks, fields, lakes, coasts",
      food: "Grasses, grains, aquatic plants",
      nesting: "Ground near water",
      behavior: "Grazes, flies in V-formation",
      conservation: "Low concern",
      basicDescription:
        "The familiar large goose with the distinctive black head and neck and white cheek patch. Canada Geese mate for life and are intensely devoted parents — both parents guard the nest, and goslings stay with the family for a full year. Their V-formation flying is a masterclass in aerodynamics: each bird drafts off the wingtip vortex of the bird ahead, reducing effort by up to 65%.",
      calls:
        "The classic honking 'a-HONK' is one of the most recognized sounds in North America. Males give a deeper, louder honk; females a higher, shorter 'hrink.' Flocks are noisy in flight.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Canada_Goose",
    },
    variants: [],
  },
  {
    id: "carolina-wren",
    name: "Carolina Wren",
    imageMale: "/birds/img/carolina-wren-male.png",
    imageFemale: "/birds/img/carolina-wren-female.png",
    image: "",
    voice: "/birds/audio/carolina-wren-voice.mp3",
    call: "/birds/audio/carolina-wren-call.mp3",
    info: {
      scientificName: "Thryothorus ludovicianus",
      order: "Passeriformes",
      family: "Troglodytidae",
      groupName: "Wrens",
      habitat: "Dense shrubs, tangled undergrowth",
      food: "Insects, spiders, berries",
      nesting: "Cavities, crevices, nest boxes",
      behavior: "Explores low tangles, cocks tail",
      conservation: "Low concern",
      basicDescription:
        "A small, richly colored wren with a brilliant white eyebrow stripe and a voice wildly outsized for its body. Carolina Wrens are famously bold and curious, poking into garages, porches, and potted plants to investigate anything interesting. They mate for life and stay on territory year-round, singing every month of the year — even in the coldest weather.",
      songs:
        "Sings a loud, ringing 'tea-kettle, tea-kettle, tea-kettle' or 'liberty, liberty, liberty' — repeated 10–15 times with variations. The song is astonishingly loud for such a small bird.",
      calls:
        "A rapid, scolding 'chert-chert-chert' rattle is the most common call. Also gives a sharp 'tcheek' and a buzzy descending 'dzeert.'",
      sourceUrl: "https://www.allaboutbirds.org/guide/Carolina_Wren",
    },
    variants: [],
  },
  {
    id: "cedar-waxwing",
    name: "Cedar Waxwing",
    imageMale: "/birds/img/cedar-waxwing-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/cedar-waxwing-voice.mp3",
    call: "/birds/audio/cedar-waxwing-call.mp3",
    info: {
      scientificName: "Bombycilla cedrorum",
      order: "Passeriformes",
      family: "Bombycillidae",
      groupName: "Waxwings",
      habitat: "Woodlands, orchards, suburbs",
      food: "Fruit, berries, insects",
      nesting: "Trees (cup nest)",
      behavior: "Roams in flocks following fruit",
      conservation: "Low concern",
      basicDescription:
        "A sleek, crested bird with silky plumage in shades of brown, gray, and lemon yellow, tipped with a bright yellow tail band and glossy red waxy droplets on the wing feathers. Cedar Waxwings are highly social and almost never seen alone. They are fruit specialists, and flocks will descend on berry trees and strip them bare — sometimes eating so many fermented berries that they become intoxicated.",
      songs:
        "Not a typical song — produces a high, thin, trilling whistle, almost insect-like in quality.",
      calls:
        "The signature call is a very high, thin 'sreee' or 'bzee,' given constantly in flight. A flock passing overhead sounds like a chorus of tiny bells. Easily missed if your high-frequency hearing has faded.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Cedar_Waxwing",
    },
    variants: [],
  },
  {
    id: "common-loon",
    name: "Common Loon",
    imageMale: "/birds/img/common-loon-male.png",
    imageFemale: "/birds/img/common-loon-female.png",
    image: "",
    voice: "/birds/audio/common-loon-voice.mp3",
    call: "/birds/audio/common-loon-call.mp3",
    info: {
      scientificName: "Gavia immer",
      order: "Gaviiformes",
      family: "Gaviidae",
      groupName: "Loons",
      habitat: "Forest lakes, coastal waters",
      food: "Fish, crayfish, amphibians",
      nesting: "Ground at water's edge",
      behavior: "Dives, rides low in water",
      conservation: "Low concern",
      basicDescription:
        "The haunting calls of the Common Loon are the sound of wild northern lakes. These large, heavy-bodied birds are supremely adapted for diving — they can plunge to 200 feet and chase fish at speed. Their bones are denser than other birds to help them sink. Parents famously carry newly hatched chicks on their backs to protect them from snapping turtles and cold water.",
      songs:
        "Four distinct calls: the tremolo (laughing call, alarm), the wail (long-distance contact between mates), the yodel (male territorial declaration), and the hoot (soft, short contact within family).",
      calls:
        "The midnight wail echoing across a dark lake is one of the most evocative sounds in nature. The tremolo, often called 'the laugh,' signals alarm or excitement. No two males have the same yodel.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Common_Loon",
    },
    variants: [],
  },
  {
    id: "dark-eyed-junco",
    name: "Dark-Eyed Junco",
    imageMale: "/birds/img/dark-eyed-junco-male.png",
    imageFemale: "/birds/img/dark-eyed-junco-female.png",
    image: "",
    voice: "/birds/audio/dark-eyed-junco-voice.mp3",
    call: "/birds/audio/dark-eyed-junco-call.mp3",
    info: {
      scientificName: "Junco hyemalis",
      order: "Passeriformes",
      family: "Passerellidae",
      groupName: "Sparrows",
      habitat: "Forests, forest edges, suburbs",
      food: "Seeds, insects",
      nesting: "Ground (hidden cup nest)",
      behavior: "Forages on ground, flashes white tail",
      conservation: "Low concern",
      basicDescription:
        "Called 'snowbirds,' Dark-eyed Juncos arrive at feeders across the US each fall as if announcing winter. They flash distinctive white outer tail feathers as they fly — a warning signal to flock members. There are several distinct regional forms (Oregon, Slate-colored, Pink-sided, etc.) that look so different they were once classified as separate species.",
      songs:
        "Sings a simple, musical trill on one pitch — reminiscent of a Chipping Sparrow but slower and more musical. Song varies between individuals and regional forms.",
      calls:
        "A sharp, smacking 'tick' or rapid 'tit-it-it-it' when alarmed. A light twittering 'tsew' in flight. Flock members stay in constant contact with soft chips.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Dark-eyed_Junco",
    },
    variants: [],
  },
  {
    id: "double-crested-cormorant",
    name: "Double-crested Cormorant",
    imageMale: "/birds/img/double-crested-cormorant-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/double-crested-cormorant-voice.mp3",
    call: "/birds/audio/double-crested-cormorant-call.mp3",
    info: {
      scientificName: "Nannopterum auritum",
      order: "Suliformes",
      family: "Phalacrocoracidae",
      groupName: "Cormorants",
      habitat: "Lakes, rivers, coasts",
      food: "Fish",
      nesting: "Trees or ground (colonies)",
      behavior: "Dives, spreads wings to dry",
      conservation: "Low concern",
      basicDescription:
        "Large, dark waterbirds often seen perched with wings spread wide to dry — unlike ducks, their feathers are not fully waterproof, which lets them dive more easily but means they must air-dry after every swim. They swim with their body low in the water and their bill tilted upward, looking prehistoric. The double crests are only visible in breeding plumage.",
      calls:
        "Deep, guttural grunts and pig-like croaks at the nesting colony. Mostly silent in flight.",
      sourceUrl:
        "https://www.allaboutbirds.org/guide/Double-crested_Cormorant",
    },
    variants: [],
  },
  {
    id: "eastern-bluebird",
    name: "Eastern Bluebird",
    imageMale: "/birds/img/eastern-bluebird-male.png",
    imageFemale: "/birds/img/eastern-bluebird-female.png",
    image: "",
    voice: "/birds/audio/eastern-bluebird-voice.mp3",
    call: "/birds/audio/eastern-bluebird-call.mp3",
    info: {
      scientificName: "Sialia sialis",
      order: "Passeriformes",
      family: "Turdidae",
      groupName: "Thrushes",
      habitat: "Open woodland, meadows, farms",
      food: "Insects, berries",
      nesting: "Cavities and nest boxes",
      behavior: "Drops to ground for insects",
      conservation: "Low concern",
      basicDescription:
        "One of North America's most beloved birds — the male's royal blue back and warm rusty breast are iconic. Eastern Bluebird populations crashed in the mid-20th century as starlings and House Sparrows took over their nesting cavities. They bounced back almost entirely thanks to volunteer nest box trails, making them one of the great citizen conservation success stories.",
      songs:
        "A soft, mellow warble — 'chur-lee, chur-lee' — gentle and musical, often described as one of the most pleasant bird songs in North America.",
      calls:
        "A soft, musical 'tu-a-wee' or 'chur-wee' in flight. Nothing about a bluebird's voice is harsh.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Eastern_Bluebird",
    },
    variants: [],
  },
  {
    id: "great-blue-heron",
    name: "Great Blue Heron",
    imageMale: "/birds/img/great-blue-heron-male.png",
    imageFemale: "/birds/img/great-blue-heron-female.png",
    image: "",
    voice: "/birds/audio/great-blue-heron-voice.mp3",
    call: "/birds/audio/great-blue-heron-call.mp3",
    info: {
      scientificName: "Ardea herodias",
      order: "Pelecaniformes",
      family: "Ardeidae",
      groupName: "Herons",
      habitat: "Wetlands, shorelines, marshes",
      food: "Fish, frogs, small mammals",
      nesting: "Tall trees (colonies called rookeries)",
      behavior: "Stands motionless, strikes fast",
      conservation: "Low concern",
      basicDescription:
        "North America's largest heron — a statuesque, slate-blue bird that stands over four feet tall and hunts by standing completely still at the water's edge, then striking with lightning speed. Despite their size they weigh only about 5 pounds; their bones are hollow. They nest in large colonies (rookeries) in tall trees, sometimes with dozens of stick nests crammed into a single tree.",
      songs:
        "Not a melodic vocalist. Produces deep, prehistoric-sounding squawks and croaks.",
      calls:
        "A loud, harsh, guttural 'FRAHNK' or series of 'kraak' squawks when disturbed in flight — one of the most startling sounds you'll hear at a marsh. Also makes lower croaking sounds at the nest.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Great_Blue_Heron",
    },
    variants: [],
  },
  {
    id: "great-horned-owl",
    name: "Great Horned Owl",
    imageMale: "/birds/img/great-horned-owl-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/great-horned-owl-voice.mp3",
    call: "/birds/audio/great-horned-owl-call.mp3",
    info: {
      scientificName: "Bubo virginianus",
      order: "Strigiformes",
      family: "Strigidae",
      groupName: "Owls",
      habitat: "Forests, deserts, suburbs, tundra",
      food: "Rabbits, skunks, geese, other owls",
      nesting: "Abandoned nests of other large birds",
      behavior: "Nocturnal ambush predator",
      conservation: "Low concern",
      basicDescription:
        "The most widespread owl in the Americas and one of the most fearsome predators of the night. Great Horned Owls will take prey as large as geese and as pungent as skunks — they have an almost nonexistent sense of smell, which makes skunks an easy meal other predators avoid. They begin nesting in January or February, the earliest of any North American bird, incubating eggs through blizzards.",
      songs:
        "The classic deep hoot — 'hoo-hoo-hoooo, hoo-hoo' — is one of the most recognizable sounds in nature. Mated pairs duet, with the female's voice slightly higher than the male's.",
      calls:
        "Also produces barks, shrieks, and bill-clapping. Young owls give a loud, raspy hissing scream that can be alarming to hear in the dark.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Great_Horned_Owl",
    },
    variants: [],
  },
  {
    id: "greater-prairie-chicken",
    name: "Greater Prairie Chicken",
    imageMale: "/birds/img/greater-prairie-chicken-male.png",
    imageFemale: "/birds/img/greater-prairie-chicken-female.png",
    image: "",
    voice: "/birds/audio/greater-prairie-chicken-voice.mp3",
    call: "/birds/audio/greater-prairie-chicken-call.mp3",
    info: {
      scientificName: "Tympanuchus cupido",
      order: "Galliformes",
      family: "Phasianidae",
      groupName: "Grouse",
      habitat: "Tallgrass prairie",
      food: "Seeds, grains, insects, buds",
      nesting: "Ground (hidden scrape in tall grass)",
      behavior: "Males boom and dance on leks",
      conservation: "Near threatened",
      basicDescription:
        "A stocky grouse of the tallgrass prairie, famous for the male's extraordinary booming display on communal dancing grounds called leks. Males inflate bright orange neck sacs, stamp their feet rapidly, raise dramatic feather pinnae on their necks, and produce a deep, resonant booming that carries for miles on still spring mornings. Tallgrass prairie has been reduced to less than 4% of its original extent, making this bird increasingly rare.",
      songs:
        "The male's booming is produced by inflating the yellow-orange neck sacs — a deep, foghorn-like 'ooo-woom-ooo' that echoes dramatically across open prairie at dawn.",
      calls:
        "A clucking 'book-book-book' and various cackles. Males also give loud wing-whirring displays and cackling challenges to rival males on the lek.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Greater_Prairie-Chicken",
    },
    variants: [],
  },
  {
    id: "house-finch",
    name: "House Finch",
    imageMale: "/birds/img/house-finch-male.png",
    imageFemale: "/birds/img/house-finch-female.png",
    image: "",
    voice: "/birds/audio/house-finch-voice.mp3",
    call: "/birds/audio/house-finch-call.mp3",
    info: {
      scientificName: "Haemorhous mexicanus",
      order: "Passeriformes",
      family: "Fringillidae",
      groupName: "Finches",
      habitat: "Cities, suburbs, farms",
      food: "Seeds, buds, berries",
      nesting: "Trees, ledges, hanging baskets",
      behavior: "Flocks at feeders",
      conservation: "Low concern",
      basicDescription:
        "A cheerful, streaky finch whose males wear a splash of red earned from the foods they eat — the redder the male, the more carotenoid-rich his diet, and the more attractive he is to females. Originally a western bird, House Finches were released illegally in New York in 1940 and have since spread across the entire continent. They are among the most common backyard birds in North America.",
      songs:
        "A long, bubbly warble of musical phrases with a distinctive hoarse or buzzy note near the end — 'wheeer.' Males sing constantly during breeding season.",
      calls:
        "A rising 'wheet' call, often given in flight. Also a short, soft 'chit' within flocks.",
      sourceUrl: "https://www.allaboutbirds.org/guide/House_Finch",
    },
    variants: [],
  },
  {
    id: "house-sparrow",
    name: "House Sparrow",
    imageMale: "/birds/img/house-sparrow-male.png",
    imageFemale: "/birds/img/house-sparrow-female.png",
    image: "",
    voice: "/birds/audio/house-sparrow-voice.mp3",
    call: "/birds/audio/house-sparrow-call.mp3",
    info: {
      scientificName: "Passer domesticus",
      order: "Passeriformes",
      family: "Passeridae",
      groupName: "Old World Sparrows",
      habitat: "Cities, farms, anywhere near people",
      food: "Seeds, grains, scraps",
      nesting: "Cavities, crevices, signs, nests",
      behavior: "Lives entirely around humans",
      conservation: "Low concern",
      basicDescription:
        "Introduced from England to New York in 1851, the House Sparrow has become one of the most abundant birds on Earth — found on every continent except Antarctica. It is not a true sparrow (it's in its own Old World family) and is fiercely competitive for nest cavities, making it a significant threat to bluebirds and other cavity-nesters. It has lived alongside humans for at least 10,000 years, since the dawn of agriculture.",
      songs:
        "A series of cheerful, monotonous chirps — 'cheep, cheep, cheep' — delivered rapidly and incessantly, especially around nesting sites.",
      calls:
        "A persistent 'chirrup' and variety of soft, chattering chips. Flocks at a feeder produce a constant pleasant background chatter.",
      sourceUrl: "https://www.allaboutbirds.org/guide/House_Sparrow",
    },
    variants: [],
  },
  {
    id: "indigo-bunting",
    name: "Indigo Bunting",
    imageMale: "/birds/img/indigo-bunting-male.png",
    imageFemale: "/birds/img/indigo-bunting-female.png",
    image: "",
    voice: "/birds/audio/indigo-bunting-voice.mp3",
    call: "/birds/audio/indigo-bunting-call.mp3",
    info: {
      scientificName: "Passerina cyanea",
      order: "Passeriformes",
      family: "Cardinalidae",
      groupName: "Cardinals and Allies",
      habitat: "Shrubby edges, roadsides, forest margins",
      food: "Seeds, insects, berries",
      nesting: "Shrubs and low trees (cup nest)",
      behavior: "Male sings from exposed perches",
      conservation: "Low concern",
      basicDescription:
        "The male Indigo Bunting is an intense, saturated blue — one of the most vivid colors in the bird world. Surprisingly, there is no blue pigment in the feathers; the color is entirely structural, produced by the microscopic structure of the feathers scattering light. In dim light or shade, the male looks nearly black. They migrate at night, using the stars to navigate.",
      songs:
        "A lively, energetic series of paired phrases — 'fire-fire, where-where, here-here, see-it-see-it' — bright and musical. Males sing persistently through the heat of summer, even at midday when most birds have gone quiet.",
      calls:
        "A sharp, electric 'spink' or 'spit.' Also a dry, buzzy 'bzzt' in flight.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Indigo_Bunting",
    },
    variants: [],
  },
  {
    id: "killdeer",
    name: "Killdeer",
    imageMale: "/birds/img/killdeer-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/killdeer-voice.mp3",
    call: "/birds/audio/killdeer-call.mp3",
    info: {
      scientificName: "Charadrius vociferus",
      order: "Charadriiformes",
      family: "Charadriidae",
      groupName: "Plovers",
      habitat: "Open ground, fields, parking lots",
      food: "Insects, worms, seeds",
      nesting: "Ground (bare scrape)",
      behavior: "Broken-wing distraction display",
      conservation: "Low concern",
      basicDescription:
        "A plover of open ground famous for its theatrical broken-wing act — when a predator approaches the nest, the adult runs away dragging one wing and crying pitifully to lure the threat away from its eggs. Killdeer nest on gravel, bare dirt, even rooftops and parking lots, relying on their eggs' camouflage pattern to avoid detection. Their Latin name, vociferus, means 'loud voice.'",
      songs:
        "Produces a rolling, liquid 'kill-dee' or 'dee-dee-dee' that gives the bird its name, often repeated rapidly in alarm.",
      calls:
        "An urgent, rising 'DEE-dee-dee-dee' when alarmed or disturbed, and a trilled 'trrrr' given near the nest. Extremely vocal — hard to miss when you're near one.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Killdeer",
    },
    variants: [],
  },
  {
    id: "laughing-gull",
    name: "Laughing Gull",
    imageMale: "/birds/img/laughing-gull-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/laughing-gull-voice.mp3",
    call: "/birds/audio/laughing-gull-call.mp3",
    info: {
      scientificName: "Leucophaeus atricilla",
      order: "Charadriiformes",
      family: "Laridae",
      groupName: "Gulls",
      habitat: "Atlantic and Gulf coasts",
      food: "Fish, invertebrates, scraps",
      nesting: "Ground in salt marshes",
      behavior: "Steals food from other birds",
      conservation: "Low concern",
      basicDescription:
        "The most common gull along the Atlantic and Gulf coasts, with a distinctive black hood in breeding season and a loud, hysterical laugh that is the quintessential sound of beach vacations. They are opportunistic feeders and have no shame — they'll steal food from Brown Pelicans right out of their pouches as the pelicans surface from a dive.",
      songs:
        "The namesake laugh is a long, descending series of 'ha-ha-ha-ha-haah-haah' notes, starting high and fading. Extremely social and vocal in colonies.",
      calls:
        "A short, nasal 'kee-ah' and a sharp 'ka' in alarm. Flocks are endlessly chattering.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Laughing_Gull",
    },
    variants: [],
  },
  {
    id: "mallard",
    name: "Mallard",
    imageMale: "/birds/img/mallard-male.png",
    imageFemale: "/birds/img/mallard-female.png",
    image: "",
    voice: "/birds/audio/mallard-voice.mp3",
    call: "/birds/audio/mallard-call.mp3",
    info: {
      scientificName: "Anas platyrhynchos",
      order: "Anseriformes",
      family: "Anatidae",
      groupName: "Ducks",
      habitat: "Lakes, ponds, parks, wetlands",
      food: "Plants, seeds, invertebrates",
      nesting: "Ground near water",
      behavior: "Tips up to feed underwater",
      conservation: "Low concern",
      basicDescription:
        "The ancestor of nearly all domestic duck breeds, and the most abundant duck in the world. The male's iridescent green head is iconic; females are streaky brown with an orange-and-black bill. Mallards are dabbling ducks — they tip forward to feed underwater rather than diving. They hybridize readily with other ducks, and in some areas their genetics are spreading into rarer species.",
      songs:
        "The classic 'quack' belongs to the female — she produces the loud, bold quack most people associate with ducks. Males make a softer, raspy 'rhaeb.'",
      calls:
        "Females give a series of descending quacks — loud at first, trailing off: 'quack-quack-quack-quack.' Males produce quiet, nasal grunts and whistles during courtship.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Mallard",
    },
    variants: [],
  },
  {
    id: "mourning-dove",
    name: "Mourning Dove",
    imageMale: "/birds/img/mourning-dove-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/mourning-dove-voice.mp3",
    call: "/birds/audio/mourning-dove-call.mp3",
    info: {
      scientificName: "Zenaida macroura",
      order: "Columbiformes",
      family: "Columbidae",
      groupName: "Pigeons and Doves",
      habitat: "Fields, roadsides, suburbs, deserts",
      food: "Seeds almost exclusively",
      nesting: "Trees (flimsy platform)",
      behavior: "Bobs head while walking",
      conservation: "Low concern",
      basicDescription:
        "One of the most abundant birds in North America — estimates put the population above 350 million. Their mournful, cooing call is a fixture of quiet mornings across the continent. Mourning Doves are swift, agile fliers with a distinctive whistling sound made by their wings on takeoff. They drink by suction, like a straw — most birds must tilt their head back to swallow.",
      songs:
        "The soft, melancholy 'ooo-woo-woo-woo' cooing, often mistaken for an owl by newcomers. A peaceful sound that carries well on still mornings.",
      calls:
        "Wings make a distinctive sharp whistling sound on takeoff — a built-in alarm signal for other doves in the area. The cooing call is also used as a contact note.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Mourning_Dove",
    },
    variants: [],
  },
  {
    id: "mute-swan",
    name: "Mute Swan",
    imageMale: "/birds/img/mute-swan-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/mute-swan-voice.mp3",
    call: "/birds/audio/mute-swan-call.mp3",
    info: {
      scientificName: "Cygnus olor",
      order: "Anseriformes",
      family: "Anatidae",
      groupName: "Swans",
      habitat: "Ponds, lakes, bays, slow rivers",
      food: "Aquatic plants, algae, invertebrates",
      nesting: "Large mound at water's edge",
      behavior: "Arches wings in threat display",
      conservation: "Low concern",
      basicDescription:
        "The graceful white swan of fairy tales, introduced to North America from Europe and now widespread. Despite their serene appearance, Mute Swans are fiercely aggressive territory defenders — they will charge kayaks, boats, and people, using their powerful wings like clubs. Their populations have grown large enough in some areas that they are damaging aquatic ecosystems by uprooting native plants.",
      songs:
        "Largely silent — the 'swan song' sung at death is mythology. They produce only hisses, grunts, and snorts.",
      calls:
        "Soft snorts and hisses when threatened. Wings produce a loud, slow, throbbing whistle in flight — like a turbine winding up — audible from far away.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Mute_Swan",
    },
    variants: [],
  },
  {
    id: "northern-cardinal",
    name: "Northern Cardinal",
    imageMale: "/birds/img/northern-cardinal-male.png",
    imageFemale: "/birds/img/northern-cardinal-female.png", // dimorphic – female tan/olive
    image: "",
    voice: "/birds/audio/northern-cardinal-voice.mp3",
    call: "/birds/audio/northern-cardinal-call.mp3",
    info: {
      scientificName: "Cardinalis cardinalis",
      order: "Passeriformes",
      family: "Cardinalidae",
      groupName: "Cardinals and Allies",
      habitat: "Woodland edges, gardens, shrubs",
      food: "Seeds, fruits, insects",
      nesting: "Dense shrubs and vines",
      behavior: "Female also sings (unusual)",
      conservation: "Low concern",
      basicDescription:
        "The brilliant red male is one of the most iconic birds in North America, a fixture of winter feeders from the East to the Southwest. Uniquely among North American songbirds, female Northern Cardinals also sing — often from the nest, possibly to communicate with their mate about when to bring food. They don't migrate and keep their vivid color year-round, even in snow.",
      songs:
        "A loud, clear, descending whistle — 'cheer-cheer-cheer' or 'birdy-birdy-birdy' or 'what-cheer, what-cheer.' Both sexes know up to 24 distinct song patterns.",
      calls:
        "A sharp, metallic 'chink' — like a chip of stone snapping. Once learned, it's often the first thing that alerts you to a cardinal nearby.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Northern_Cardinal",
    },
    variants: [],
  },
  {
    id: "northern-flicker",
    name: "Northern Flicker",
    imageMale: "/birds/img/northern-flicker-male.png",
    imageFemale: "/birds/img/northern-flicker-female.png",
    image: "",
    voice: "/birds/audio/northern-flicker-voice.mp3",
    call: "/birds/audio/northern-flicker-call.mp3",
    info: {
      scientificName: "Colaptes auratus",
      order: "Piciformes",
      family: "Picidae",
      groupName: "Woodpeckers",
      habitat: "Open woodland, forest edges, suburbs",
      food: "Ants, beetles, berries",
      nesting: "Cavities in trees",
      behavior: "Forages on the ground for ants",
      conservation: "Low concern",
      basicDescription:
        "An unusually terrestrial woodpecker that spends most of its time on the ground eating ants — its extraordinarily long tongue is covered in sticky saliva for extracting them from tunnels. In flight it flashes brilliant yellow (eastern) or red (western) under the wings and tail. Males have a black or red 'mustache' streak absent in females. They excavate nest cavities used by dozens of other species for years afterward.",
      songs:
        "A loud, rhythmic 'wicka-wicka-wicka-wicka' repeated rapidly — one of the most recognizable spring sounds in wooded suburbs.",
      calls:
        "A sharp, piercing 'klee-yer!' and a repeated 'wick-wick-wick.' Drumming on resonant metal (gutters, flashing) is used for territory advertisement — and is very good at waking people up.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Northern_Flicker",
    },
    variants: [],
  },
  {
    id: "northern-mockingbird",
    name: "Northern Mockingbird",
    imageMale: "/birds/img/northern-mockingbird-male.png",
    imageFemale: "/birds/img/northern-mockingbird-female.png",
    image: "",
    voice: "/birds/audio/northern-mockingbird-voice.mp3",
    call: "/birds/audio/northern-mockingbird-call.mp3",
    info: {
      scientificName: "Mimus polyglottos",
      order: "Passeriformes",
      family: "Mimidae",
      groupName: "Mockingbirds and Thrashers",
      habitat: "Open areas, suburbs, gardens",
      food: "Insects, berries, fruits",
      nesting: "Shrubs and low trees",
      behavior: "Mimics 200+ species",
      conservation: "Low concern",
      basicDescription:
        "The ultimate vocal impersonator — a single mockingbird can learn over 200 bird songs, plus frogs, insects, and mechanical sounds. Males sing nearly continuously, often through the night during full moons, cycling through their entire repertoire. They are boldly territorial and will dive-bomb cats, dogs, and people who stray too close to their nests — with full commitment, regardless of size difference.",
      songs:
        "An endless medley of imitations, each phrase repeated 2–6 times before shifting to the next. Males with larger repertoires attract more mates and add new sounds throughout their lives.",
      calls:
        "A sharp, emphatic 'tchack!' when alarmed — and they alarm often. Also gives harsh rasps and chatters when attacking intruders.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Northern_Mockingbird",
    },
    variants: [],
  },
  {
    id: "pileated-woodpecker",
    name: "Pileated Woodpecker",
    imageMale: "/birds/img/pileated-woodpecker-male.png",
    imageFemale: "/birds/img/pileated-woodpecker-female.png",
    image: "",
    voice: "/birds/audio/pileated-woodpecker-voice.mp3",
    call: "/birds/audio/pileated-woodpecker-call.mp3",
    info: {
      scientificName: "Dryocopus pileatus",
      order: "Piciformes",
      family: "Picidae",
      groupName: "Woodpeckers",
      habitat: "Mature forest with large dead trees",
      food: "Carpenter ants, beetle larvae",
      nesting: "Large cavities in dead trees",
      behavior: "Excavates rectangular holes",
      conservation: "Low concern",
      basicDescription:
        "The largest woodpecker in North America — crow-sized, with a blazing red crest and a call like wild jungle laughter. Its chisel-like bill excavates large rectangular holes to reach carpenter ant colonies, and these cavities are later reused by ducks, owls, martens, and many other animals. Pileated Woodpeckers are ecosystem engineers whose work benefits dozens of other species.",
      songs:
        "A loud, resonant 'kuk-kuk-kuk-kuk' — wild and laughing, like something from a tropical rainforest. Also a long, wailing call that carries far through the trees.",
      calls:
        "The jungle-like laughing call is unmistakable. Drumming is slow and very powerful with a booming resonance that other woodpeckers can't match.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Pileated_Woodpecker",
    },
    variants: [],
  },
  {
    id: "red-tailed-hawk",
    name: "Red-Tailed Hawk",
    imageMale: "/birds/img/red-tailed-hawk-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/red-tailed-hawk-voice.mp3",
    call: "/birds/audio/red-tailed-hawk-call.mp3",
    info: {
      scientificName: "Buteo jamaicensis",
      order: "Accipitriformes",
      family: "Accipitridae",
      groupName: "Hawks and Eagles",
      habitat: "Open country, roadsides, woodlands",
      food: "Rodents, rabbits, squirrels",
      nesting: "Tall trees (large stick nest)",
      behavior: "Soars on thermals, hunts from perches",
      conservation: "Low concern",
      basicDescription:
        "The most common hawk in North America, equally at home over farmland, suburban neighborhoods, and mountain ridges. Adults have the distinctive brick-red tail that gives the species its name — juveniles lack it for their first year. The raspy scream of the Red-tailed Hawk is used in virtually every film and TV scene requiring a dramatic raptor cry, even when the bird on screen is a Bald Eagle or a falcon.",
      calls:
        "A raspy, rising 'keeeeeer' — the iconic raptor scream of film and television. Real Bald Eagles sound nothing like this; movie sound editors almost always substitute the Red-tail's cry instead.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Red-tailed_Hawk",
    },
    variants: [],
  },
  {
    id: "ring-billed-gull",
    name: "Ring-Billed Gull",
    imageMale: "/birds/img/ring-billed-gull-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/ring-billed-gull-voice.mp3",
    call: "/birds/audio/ring-billed-gull-call.mp3",
    info: {
      scientificName: "Larus delawarensis",
      order: "Charadriiformes",
      family: "Laridae",
      groupName: "Gulls",
      habitat: "Lakes, rivers, coasts, parking lots",
      food: "Fish, insects, garbage, grain",
      nesting: "Ground (colonies on islands)",
      behavior: "Follows tractors, scavenges",
      conservation: "Low concern",
      basicDescription:
        "The most familiar inland gull in North America, identified by the neat black ring around its yellow bill. These are the gulls of parking lots, fast food dumpsters, and farm fields — highly adaptable omnivores that will eat virtually anything. They follow farm equipment to catch insects and worms turned up by plowing, and in winter gather in massive roosts of tens of thousands at landfills.",
      calls:
        "A sharp 'kyow' and a rapid 'kree-kree-kree.' When excited over food or in territorial disputes, produces a hysterical laughing wail similar to other gulls.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Ring-billed_Gull",
    },
    variants: [],
  },
  {
    id: "rock-pigeon",
    name: "Rock Pigeon",
    imageMale: "/birds/img/rock-pigeon-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/rock-pigeon-voice.mp3",
    call: "/birds/audio/rock-pigeon-call.mp3",
    info: {
      scientificName: "Columba livia",
      order: "Columbiformes",
      family: "Columbidae",
      groupName: "Pigeons and Doves",
      habitat: "Cities, cliffs, farms",
      food: "Seeds, grains, scraps",
      nesting: "Ledges, bridges, buildings",
      behavior: "Navigates by sun and magnetism",
      conservation: "Low concern",
      basicDescription:
        "The familiar city pigeon is actually one of the most remarkable navigators in the animal kingdom — they can find their way home from hundreds of miles away using the sun, Earth's magnetic field, and even infrasound. They served as vital message carriers in both World Wars. Descended from European cliff-nesting Rock Doves, they treat building ledges as perfectly adequate cliff substitutes.",
      songs:
        "A soft, repetitive cooing — 'oo-roo-coo, oo-roo-coo' — produced by males during courtship, often while performing an inflated chest-puffing strut.",
      calls:
        "Wings make a loud clapping sound on takeoff. In flight, a musical whistle from the wingtips. Cooing from ledges is a classic urban soundtrack.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Rock_Pigeon",
    },
    variants: [],
  },
  {
    id: "rose-breasted-grosbeak",
    name: "Rose-breasted Grosbeak",
    imageMale: "/birds/img/rose-breasted-grosbeak-male.png",
    imageFemale: "/birds/img/rose-breasted-grosbeak-female.png",
    image: "",
    voice: "/birds/audio/rose-breasted-grosbeak-voice.mp3",
    call: "/birds/audio/rose-breasted-grosbeak-call.mp3",
    info: {
      scientificName: "Pheucticus ludovicianus",
      order: "Passeriformes",
      family: "Cardinalidae",
      groupName: "Cardinals and Allies",
      habitat: "Deciduous and mixed forests",
      food: "Seeds, insects, berries",
      nesting: "Trees (flimsy cup nest)",
      behavior: "Male incubates and sings on nest",
      conservation: "Low concern",
      basicDescription:
        "The male is one of the most striking birds of eastern forests — jet black and white with a brilliant rose-red triangle on the breast. Unusually among songbirds, both sexes share incubation duties equally, and both sing. The male even sings quietly from the nest while incubating — one of very few birds to do so. Females look remarkably like large sparrows with bold white eyebrow stripes.",
      songs:
        "A rich, rolling carol similar to an American Robin but smoother and more melodious — described as 'a robin who took singing lessons.' One of the most beautiful and underappreciated songs in eastern forests.",
      calls:
        "A sharp, distinctive squeaking 'eek' — very recognizable once learned, impossible to confuse with other species.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Rose-breasted_Grosbeak",
    },
    variants: [],
  },
  {
    id: "ruby-throated-hummingbird",
    name: "Ruby Throated Hummingbird",
    imageMale: "/birds/img/ruby-throated-hummingbird-male.png",
    imageFemale: "/birds/img/ruby-throated-hummingbird-female.png",
    image: "",
    voice: "/birds/audio/ruby-throated-hummingbird-voice.mp3",
    call: "/birds/audio/ruby-throated-hummingbird-call.mp3",
    info: {
      scientificName: "Archilochus colubris",
      order: "Apodiformes",
      family: "Trochilidae",
      groupName: "Hummingbirds",
      habitat: "Woodland edges, gardens",
      food: "Nectar, tiny insects",
      nesting: "Trees (walnut-sized cup of plant fiber and spider silk)",
      behavior: "Hovers, wings beat 53×/sec",
      conservation: "Low concern",
      basicDescription:
        "The only breeding hummingbird in eastern North America — a jewel of a bird the size of a thumb. The male's ruby throat glows brilliant red in direct sunlight and looks jet black from an angle. A single individual can visit over 1,000 flowers per day. During fall migration, they fly up to 500 miles non-stop across the Gulf of Mexico — a staggering feat for a creature weighing about 3 grams.",
      songs:
        "Doesn't sing a complex song. Produces squeaky, buzzy chips and chattering during chases.",
      calls:
        "High-pitched 'twittering' chips when feeding or chasing rivals. Wings produce the signature hum at 53 beats per second — audible from several feet away.",
      sourceUrl:
        "https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird",
    },
    variants: [],
  },
  {
    id: "sandhill-crane",
    name: "Sandhill Crane",
    imageMale: "/birds/img/sandhill-crane-male.png",
    imageFemale: "/birds/img/sandhill-crane-female.png",
    image: "",
    voice: "/birds/audio/sandhill-crane-voice.mp3",
    call: "/birds/audio/sandhill-crane-call.mp3",
    info: {
      scientificName: "Antigone canadensis",
      order: "Gruiformes",
      family: "Gruidae",
      groupName: "Cranes",
      habitat: "Wetlands, fields, prairies",
      food: "Grains, tubers, insects, small animals",
      nesting: "Large platform in shallow water",
      behavior: "Dances in elaborate courtship",
      conservation: "Low concern",
      basicDescription:
        "One of the oldest living bird species — fossils from Nebraska are 2.5 million years old, making the Sandhill Crane essentially unchanged since the Pliocene epoch. They are famous for spectacular courtship dances involving bowing, jumping, and wing-spreading. One of North America's great wildlife spectacles is the spring migration on Nebraska's Platte River, where over 500,000 cranes congregate in a single stretch of river.",
      songs:
        "The bugling call is produced by a long, coiled trachea that resonates like a brass instrument — the sound carries for miles across open country.",
      calls:
        "A loud, rolling, rattling 'garooo-a-a-a' — one of the most carrying and ancient-sounding bird calls. Pairs and family groups call constantly to stay in contact during migration.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Sandhill_Crane",
    },
    variants: [],
  },
  {
    id: "scarlet-tanager",
    name: "Scarlet Tanager",
    imageMale: "/birds/img/scarlet-tanager-male.png",
    imageFemale: "/birds/img/scarlet-tanager-female.png",
    image: "",
    voice: "/birds/audio/scarlet-tanager-voice.mp3",
    call: "/birds/audio/scarlet-tanager-call.mp3",
    info: {
      scientificName: "Piranga olivacea",
      order: "Passeriformes",
      family: "Cardinalidae",
      groupName: "Cardinals and Allies",
      habitat: "Mature deciduous forest",
      food: "Insects, berries",
      nesting: "Trees (cup nest, high in canopy)",
      behavior: "Forages quietly in canopy",
      conservation: "Low concern",
      basicDescription:
        "One of the most visually stunning birds in North America — the breeding male is dipped in molten red with jet-black wings and tail, like something from a tropical cloud forest. Despite the outrageous plumage, they are surprisingly hard to spot as they forage quietly in the forest canopy. In fall, males molt to olive-green before wintering in South American forests.",
      songs:
        "A hoarse, burry caroling — 'queer-it, queer-ity, queer-it' — like a robin with a sore throat. Clear and musical but with a distinctive raspiness that sets it apart.",
      calls:
        "A sharp 'chip-burr' — a two-note call unlike any other North American bird. Once learned, unmistakable.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Scarlet_Tanager",
    },
    variants: [],
  },
  {
    id: "spotted-towhee",
    name: "Spotted Towhee",
    imageMale: "/birds/img/spotted-towhee-male.png",
    imageFemale: "/birds/img/spotted-towhee-female.png",
    image: "",
    voice: "/birds/audio/spotted-towhee-voice.mp3",
    call: "/birds/audio/spotted-towhee-call.mp3",
    info: {
      scientificName: "Pipilo maculatus",
      order: "Passeriformes",
      family: "Passerellidae",
      groupName: "Sparrows",
      habitat: "Dense brush, chaparral, forest edges",
      food: "Seeds, insects, berries",
      nesting: "Ground or low shrubs (cup)",
      behavior: "Double-scratches leaf litter",
      conservation: "Low concern",
      basicDescription:
        "A large, handsome sparrow of the understory with a bold black hood, rufous sides, and white-spotted wings. Spotted Towhees are ground foragers with a signature move: a 'double scratch' — jumping forward and kicking backward simultaneously with both feet to rake aside leaves and expose seeds and insects underneath. They are often heard rustling dramatically in the underbrush before being seen.",
      songs:
        "A buzzy, rising trill often written as 'drink-your-teeeeee' — the last part a long buzz. Regionally variable; birds in different areas sing distinctly different versions.",
      calls:
        "A rising, cat-like 'mew' and a sharp 'chewink' — the latter giving the bird its old folk name, 'Chewink.' Also gives a rapid 'tik-tik-tik' alarm.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Spotted_Towhee",
    },
    variants: [],
  },
  {
    id: "stellers-jay",
    name: "Steller's Jay",
    imageMale: "/birds/img/stellers-jay-male.png",
    imageFemale: "/birds/img/stellers-jay-female.png",
    image: "",
    voice: "/birds/audio/stellers-jay-voice.mp3",
    call: "/birds/audio/stellers-jay-call.mp3",
    info: {
      scientificName: "Cyanocitta stelleri",
      order: "Passeriformes",
      family: "Corvidae",
      groupName: "Crows and Jays",
      habitat: "Coniferous and mountain forests",
      food: "Acorns, seeds, insects, eggs",
      nesting: "Trees (bulky cup)",
      behavior: "Caches food, mimics hawks",
      conservation: "Low concern",
      basicDescription:
        "The only crested jay in the western US — sooty black head fading into brilliant blue body. Steller's Jays are bold, intelligent, and loud, dominating feeders and campsites in western mountain forests. Like the Blue Jay, they excel at mimicking Red-tailed and Red-shouldered Hawk calls, scattering other birds from a feeder so they can swoop in and take over.",
      songs:
        "A wide variety of harsh, scraping, and nasal sounds, plus occasional soft warbling notes. A skilled mimic of other species.",
      calls:
        "A raucous 'shaack-shaack-shaack' or 'kreck-kreck-kreck.' Also produces low-pitched coughs, rattles, and a surprisingly quiet whisper song.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Stellers_Jay",
    },
    variants: [],
  },
  {
    id: "swainsons-thrush",
    name: "Swainson's Thrush",
    imageMale: "/birds/img/swainsons-thrush-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/swainsons-thrush-voice.mp3",
    call: "/birds/audio/swainsons-thrush-call.mp3",
    info: {
      scientificName: "Catharus ustulatus",
      order: "Passeriformes",
      family: "Turdidae",
      groupName: "Thrushes",
      habitat: "Boreal and mountain forests",
      food: "Insects, berries",
      nesting: "Trees (cup nest)",
      behavior: "Migrates at night, sings at dusk",
      conservation: "Low concern",
      basicDescription:
        "A secretive, olive-brown thrush best known for its extraordinary song — a spiraling series of fluty notes that wind upward like a musical staircase. They migrate at night, and their soft 'peep' flight call is one of the most commonly heard sounds during autumn nocturnal migration. More often heard than seen, as they stay in dense undergrowth of boreal forests.",
      songs:
        "One of the most beautiful and ethereal songs in North American birding — an upward-spiraling series of flute-like whistles that seem to climb endlessly into the sky. Hearing it in a foggy forest at dusk is unforgettable.",
      calls:
        "A liquid 'whit' or 'peep' used as a night flight call during migration. Also a sharp 'weet' during the day.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Swainsons_Thrush",
    },
    variants: [],
  },
  {
    id: "tree-swallow",
    name: "Tree Swallow",
    imageMale: "/birds/img/tree-swallow-male.png",
    imageFemale: "/birds/img/tree-swallow-female.png",
    image: "",
    voice: "/birds/audio/tree-swallow-voice.mp3",
    call: "/birds/audio/tree-swallow-call.mp3",
    info: {
      scientificName: "Tachycineta bicolor",
      order: "Passeriformes",
      family: "Hirundinidae",
      groupName: "Swallows",
      habitat: "Open areas and wetlands",
      food: "Flying insects, some berries",
      nesting: "Cavities and nest boxes",
      behavior: "Aerial insect hunter",
      conservation: "Low concern",
      basicDescription:
        "A sleek, iridescent blue-green swallow and one of the most studied birds in North America due to its enthusiasm for nest boxes. In late summer, Tree Swallows gather in enormous flocks of hundreds of thousands that swirl over marshes like murmurations before their southward migration — one of the great spectacles of the eastern US. Uniquely among swallows, they can survive cold snaps by eating bayberries when insects disappear.",
      songs:
        "A liquid, gurgling twitter of 'weet' and 'chirp' notes, bubbly and pleasant.",
      calls:
        "A sharp 'weet' or 'chi-veet' given frequently in flight. Churring and chattering near the nest box during disputes.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Tree_Swallow",
    },
    variants: [],
  },
  {
    id: "tufted-titmouse",
    name: "Tufted Titmouse",
    imageMale: "/birds/img/tufted-titmouse-male.png",
    imageFemale: "/birds/img/tufted-titmouse-female.png",
    image: "",
    voice: "/birds/audio/tufted-titmouse-voice.mp3",
    call: "/birds/audio/tufted-titmouse-call.mp3",
    info: {
      scientificName: "Baeolophus bicolor",
      order: "Passeriformes",
      family: "Paridae",
      groupName: "Chickadees and Titmice",
      habitat: "Deciduous forests, suburbs",
      food: "Insects, seeds, berries",
      nesting: "Cavities and nest boxes",
      behavior: "Caches seeds, bold at feeders",
      conservation: "Low concern",
      basicDescription:
        "A small, gray, crested bird with large dark eyes and an outsized personality. Tufted Titmice are often the loudest voices in a mixed winter flock, and they are famously bold — they will sometimes take sunflower seeds directly from an outstretched hand. They have been expanding northward over the past century, with milder winters and the spread of backyard feeders helping them colonize new territory.",
      songs:
        "A loud, clear, repeated whistle — 'peter-peter-peter' or 'here-here-here' — remarkably loud for such a small bird.",
      calls:
        "A raspy, scolding 'tsee-tsee-tsee' or 'day-day-day.' Also gives a thin, high 'see' alarm call and soft churring notes within winter flocks.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Tufted_Titmouse",
    },
    variants: [],
  },
  {
    id: "western-meadowlark",
    name: "Western Meadowlark",
    imageMale: "/birds/img/western-meadowlark-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/western-meadowlark-voice.mp3",
    call: "/birds/audio/western-meadowlark-call.mp3",
    info: {
      scientificName: "Sturnella neglecta",
      order: "Passeriformes",
      family: "Icteridae",
      groupName: "Blackbirds",
      habitat: "Open grasslands, prairies, fields",
      food: "Insects, seeds",
      nesting: "Ground (woven dome in grass)",
      behavior: "Sings from fence posts and wires",
      conservation: "Low concern (declining)",
      basicDescription:
        "The official state bird of six western states and the signature sound of open grasslands. Despite looking nearly identical to the Eastern Meadowlark, the two species rarely interbreed — their songs are completely different, and that's how they tell each other apart. Populations have declined sharply as native grasslands are converted to cropland, making their song increasingly something to seek out.",
      songs:
        "A rich, gurgling, flute-like series of melodic whistles — complex and joyful, often described as the most beautiful bird song on the Great Plains. Males sing constantly from fence posts and wires.",
      calls:
        "A sharp 'chuck' or 'chup' and a buzzy, rattling 'dzert' in flight.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Western_Meadowlark",
    },
    variants: [],
  },
  {
    id: "western-tanager",
    name: "Western Tanager",
    imageMale: "/birds/img/western-tanager-male.png",
    imageFemale: "/birds/img/western-tanager-female.png",
    image: "",
    voice: "/birds/audio/western-tanager-voice.mp3",
    call: "/birds/audio/western-tanager-call.mp3",
    info: {
      scientificName: "Piranga ludoviciana",
      order: "Passeriformes",
      family: "Cardinalidae",
      groupName: "Cardinals and Allies",
      habitat: "Open coniferous and mixed forests",
      food: "Insects, fruit, nectar",
      nesting: "Trees (cup nest, high in canopy)",
      behavior: "Gleans insects from canopy",
      conservation: "Low concern",
      basicDescription:
        "One of the most colorful birds of western North America — the breeding male has a flame-red head, lemon-yellow body, and black wings with white bars. Unusually, the red color doesn't come from carotenoid pigments (which most red birds get from food) but from a rare pigment called rhodoxanthin, which they obtain by eating insects. They breed in mountain forests and spend winters in Central America.",
      songs:
        "A slightly hoarse, robin-like caroling — 'churry-churree-churroo' — with the same burry raspiness as the Scarlet Tanager.",
      calls:
        "A distinctive dry 'pit-er-ick' or 'prit-i-tit' — a three-syllable call quite recognizable once learned.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Western_Tanager",
    },
    variants: [],
  },
  {
    id: "white-breasted-nuthatch",
    name: "White-Breasted Nuthatch",
    imageMale: "/birds/img/white-breasted-nuthatch-male.png",
    imageFemale: "/birds/img/white-breasted-nuthatch-female.png",
    image: "",
    voice: "/birds/audio/white-breasted-nuthatch-voice.mp3",
    call: "/birds/audio/white-breasted-nuthatch-call.mp3",
    info: {
      scientificName: "Sitta carolinensis",
      order: "Passeriformes",
      family: "Sittidae",
      groupName: "Nuthatches",
      habitat: "Deciduous and mixed forests, parks",
      food: "Insects, seeds, nuts",
      nesting: "Cavities and nest boxes",
      behavior: "Walks headfirst down tree trunks",
      conservation: "Low concern",
      basicDescription:
        "The only North American bird that routinely walks headfirst DOWN tree trunks — a unique angle that reveals insects hidden in bark that upward-moving woodpeckers miss entirely. They 'hatch' nuts and seeds by wedging them into bark crevices and hacking them open with their bill — the origin of their name. They often join mixed winter flocks with chickadees, adding their nasal honking to the flock chatter.",
      songs:
        "A rapid, nasal 'wha-wha-wha-wha-wha' on one pitch — sometimes described as a tiny car horn honking rapidly. Surprisingly loud.",
      calls:
        "A nasal 'yank' or 'enk' given repeatedly and emphatically. Also a thin, high 'tsit' contact note within flocks.",
      sourceUrl: "https://www.allaboutbirds.org/guide/White-breasted_Nuthatch",
    },
    variants: [],
  },
  {
    id: "white-throated-sparrow",
    name: "White-Throated Sparrow",
    imageMale: "/birds/img/white-throated-sparrow-male.png",
    imageFemale: "/birds/img/white-throated-sparrow-female.png",
    image: "",
    voice: "/birds/audio/white-throated-sparrow-voice.mp3",
    call: "/birds/audio/white-throated-sparrow-call.mp3",
    info: {
      scientificName: "Zonotrichia albicollis",
      order: "Passeriformes",
      family: "Passerellidae",
      groupName: "Sparrows",
      habitat: "Forests, winter gardens and feeders",
      food: "Seeds, berries, insects",
      nesting: "Ground near forest edges",
      behavior: "Scratches in leaf litter",
      conservation: "Low concern",
      basicDescription:
        "A large, handsome sparrow with a crisp white throat and yellow spot between eye and bill. They breed in Canadian forests but are common winter visitors to backyards across the US. White-throated Sparrows come in two permanent color forms — white-striped and tan-striped — that almost always pair with the opposite form. It's a rare genetic quirk, essentially encoding two distinct 'personalities' into the species.",
      songs:
        "A plaintive, pure whistle — 'oh-sweet-Canada-Canada-Canada' (or 'old-Sam-Peabody-Peabody-Peabody') — one of the most nostalgic bird songs in North America, forever associated with northern forests.",
      calls:
        "A sharp, hard 'chink' and a thin 'tseet' in flight. A sharp chatter when alarmed.",
      sourceUrl: "https://www.allaboutbirds.org/guide/White-throated_Sparrow",
    },
    variants: [],
  },
  {
    id: "wood-duck",
    name: "Wood Duck",
    imageMale: "/birds/img/wood-duck-male.png",
    imageFemale: "/birds/img/wood-duck-female.png",
    image: "",
    voice: "/birds/audio/wood-duck-voice.mp3",
    call: "/birds/audio/wood-duck-call.mp3",
    info: {
      scientificName: "Aix sponsa",
      order: "Anseriformes",
      family: "Anatidae",
      groupName: "Ducks",
      habitat: "Wooded swamps, streams, beaver ponds",
      food: "Acorns, seeds, insects",
      nesting: "Tree cavities and nest boxes",
      behavior: "Perches in trees",
      conservation: "Low concern",
      basicDescription:
        "Often called the most beautiful duck in North America — the male's iridescent plumage of emerald, burgundy, white, and gold looks almost hand-painted. Wood Ducks nest in tree cavities, sometimes 65 feet off the ground. Within 24 hours of hatching, ducklings leap out of the nest hole and free-fall to the ground — their tiny bodies so light they bounce completely unharmed. Hunted nearly to extinction by 1900, they made a full recovery thanks to nest box programs.",
      songs:
        "Males give a thin, rising 'jeeee' whistle. Females give a loud 'oo-EEK oo-EEK' rising call that's often the first sign of a Wood Duck flushing from cover.",
      calls:
        "The female's loud, rising 'oo-EEK' is distinctive and carries well. Males produce quieter whistles during courtship.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Wood_Duck",
    },
    variants: [],
  },
  {
    id: "yellow-rumped-warbler",
    name: "Yellow-Rumped Warbler",
    imageMale: "/birds/img/yellow-rumped-warbler-male.png",
    imageFemale: "/birds/img/yellow-rumped-warbler-female.png",
    image: "",
    voice: "/birds/audio/yellow-rumped-warbler-voice.mp3",
    call: "/birds/audio/yellow-rumped-warbler-call.mp3",
    info: {
      scientificName: "Setophaga coronata",
      order: "Passeriformes",
      family: "Parulidae",
      groupName: "Wood-warblers",
      habitat: "Coniferous forests, shrubby winter habitat",
      food: "Insects, bayberries, wax myrtle",
      nesting: "Trees (cup nest)",
      behavior: "Flashes yellow rump patch in flight",
      conservation: "Low concern",
      basicDescription:
        "The most abundant warbler in North America and the only one able to digest the waxy coating of bayberries and wax myrtle — a superpower that lets them winter far farther north than any other warbler. They flash a bold yellow rump patch in flight (affectionately nicknamed 'butter butt'). Two forms — the Myrtle Warbler (east) and Audubon's Warbler (west) — were once considered separate species and still look quite distinct.",
      songs:
        "A slow, soft warble that rises or falls at the end — quieter and less complex than many warblers. The Myrtle and Audubon's forms sound slightly different.",
      calls:
        "A loud, hard 'chek' — one of the most frequently heard warbler chips in eastern North America, especially during fall migration when thousands of Yellow-rumpeds are on the move.",
      sourceUrl: "https://www.allaboutbirds.org/guide/Yellow-rumped_Warbler",
    },
    variants: [],
  },
];

// ── Expansion birds (alphabetical by display name) ───────────────────────────
export const expansionBirds: Bird[] = [
  {
    id: "african-fish-eagle",
    name: "African Fish Eagle",
    imageMale: "/birds/img/african-fish-eagle-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/african-fish-eagle-voice.mp3",
    call: "/birds/audio/african-fish-eagle-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "flamingo",
    name: "American Flamingo",
    imageMale: "/birds/img/american-flamingo-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/american-flamingo-voice.mp3",
    call: "/birds/audio/american-flamingo-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "indian-koel",
    name: "Asian Koel",
    imageMale: "/birds/img/indian-koel-male.png",
    imageFemale: "/birds/img/indian-koel-female.png", // very dimorphic – male glossy black, female spotted brown
    image: "",
    voice: "/birds/audio/indian-koel-voice.mp3",
    call: "/birds/audio/indian-koel-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "atlantic-puffin",
    name: "Atlantic Puffin",
    imageMale: "/birds/img/atlantic-puffin-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/atlantic-puffin-voice.mp3",
    call: "/birds/audio/atlantic-puffin-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "barn-owl",
    name: "Barn Owl",
    imageMale: "/birds/img/barn-owl-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/barn-owl-voice.mp3",
    call: "/birds/audio/barn-owl-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "black-swan",
    name: "Black Swan",
    imageMale: "/birds/img/black-swan-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/black-swan-voice.mp3",
    call: "/birds/audio/black-swan-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "blyths-kingfisher",
    name: "Blyth's Kingfisher",
    imageMale: "/birds/img/blyths-kingfisher-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/blyths-kingfisher-voice.mp3",
    call: "/birds/audio/blyths-kingfisher-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "blue-footed-booby",
    name: "Blue-footed Booby",
    imageMale: "/birds/img/blue-footed-booby-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/blue-footed-booby-voice.mp3",
    call: "/birds/audio/blue-footed-booby-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "budgie",
    name: "Budgerigar",
    imageMale: "/birds/img/budgie-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/budgie-voice.mp3",
    call: "/birds/audio/budgie-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "chicken",
    name: "Chicken",
    imageMale: "/birds/img/chicken-male.png",
    imageFemale: "/birds/img/chicken-female.png", // very dimorphic – rooster vs hen
    image: "",
    voice: "/birds/audio/chicken-voice.mp3",
    call: "/birds/audio/chicken-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "cuckoo",
    name: "Common Cuckoo",
    imageMale: "/birds/img/cuckoo-male.png",
    imageFemale: "/birds/img/cuckoo-female.png", // somewhat dimorphic – hepatic female morph
    image: "",
    voice: "/birds/audio/cuckoo-voice.mp3",
    call: "/birds/audio/cuckoo-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "european-nightingale",
    name: "Common Nightingale",
    imageMale: "/birds/img/european-nightingale-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/european-nightingale-voice.mp3",
    call: "/birds/audio/european-nightingale-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "ostrich",
    name: "Common Ostrich",
    imageMale: "/birds/img/common-ostrich-male.png",
    imageFemale: "/birds/img/common-ostrich-female.png", // dimorphic – male black, female brown
    image: "",
    voice: "/birds/audio/common-ostrich-voice.mp3",
    call: "/birds/audio/common-ostrich-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "crimson-rosella",
    name: "Crimson Rosella",
    imageMale: "/birds/img/crimson-rosella-male.png",
    imageFemale: "/birds/img/crimson-rosella-female.png", // subtly dimorphic
    image: "",
    voice: "/birds/audio/crimson-rosella-voice.mp3",
    call: "/birds/audio/crimson-rosella-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "emperor-penguin",
    name: "Emperor Penguin",
    imageMale: "/birds/img/emperor-penguin-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/emperor-penguin-voice.mp3",
    call: "/birds/audio/emperor-penguin-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "emu",
    name: "Emu",
    imageMale: "/birds/img/emu-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/emu-voice.mp3",
    call: "/birds/audio/emu-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "eurasian-golden-oriole",
    name: "Eurasian Golden Oriole",
    imageMale: "/birds/img/eurasian-golden-oriole-male.png",
    imageFemale: "/birds/img/eurasian-golden-oriole-female.png", // dimorphic – female greenish
    image: "",
    voice: "/birds/audio/eurasian-golden-oriole-voice.mp3",
    call: "/birds/audio/eurasian-golden-oriole-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "eurasian-hoopoe",
    name: "Eurasian Hoopoe",
    imageMale: "/birds/img/eurasian-hoopoe-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/eurasian-hoopoe-voice.mp3",
    call: "/birds/audio/eurasian-hoopoe-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "eurasian-skylark",
    name: "Eurasian Skylark",
    imageMale: "/birds/img/eurasian-skylark-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/eurasian-skylark-voice.mp3",
    call: "/birds/audio/eurasian-skylark-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "golden-pheasant",
    name: "Golden Pheasant",
    imageMale: "/birds/img/golden-pheasant-male.png",
    imageFemale: "/birds/img/golden-pheasant-female.png", // extremely dimorphic – male red/gold/green, female brown/barred
    image: "",
    voice: "/birds/audio/golden-pheasant-voice.mp3",
    call: "/birds/audio/golden-pheasant-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "great-cormorant",
    name: "Great Cormorant",
    imageMale: "/birds/img/great-cormorant-male.png",
    imageFemale: "/birds/img/great-cormorant-female.png",
    image: "",
    voice: "/birds/audio/great-cormorant-voice.mp3",
    call: "/birds/audio/great-cormorant-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "greater-racket-tailed-drongo",
    name: "Greater Racket-tailed Drongo",
    imageMale: "/birds/img/greater-racket-tailed-drongo-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/greater-racket-tailed-drongo-voice.mp3",
    call: "/birds/audio/greater-racket-tailed-drongo-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "greater-rhea",
    name: "Greater Rhea",
    imageMale: "/birds/img/greater-rhea-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/greater-rhea-voice.mp3",
    call: "/birds/audio/greater-rhea-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "harpy-eagle",
    name: "Harpy Eagle",
    imageMale: "/birds/img/harpy-eagle-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/harpy-eagle-voice.mp3",
    call: "/birds/audio/harpy-eagle-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "indian-peafowl",
    name: "Indian Peafowl",
    imageMale: "/birds/img/indian-peafowl-male.png",
    imageFemale: "/birds/img/indian-peafowl-female.png", // very dimorphic – male is the spectacular one
    image: "",
    voice: "/birds/audio/indian-peafowl-voice.mp3",
    call: "/birds/audio/indian-peafowl-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "japanese-tit",
    name: "Japanese Tit",
    imageMale: "/birds/img/japanese-tit-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/japanese-tit-voice.mp3",
    call: "/birds/audio/japanese-tit-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "keel-billed-toucan",
    name: "Keel-billed Toucan",
    imageMale: "/birds/img/keel-billed-toucan-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/keel-billed-toucan-voice.mp3",
    call: "/birds/audio/keel-billed-toucan-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "kookaburra",
    name: "Laughing Kookaburra",
    imageMale: "/birds/img/kookaburra-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/kookaburra-voice.mp3",
    call: "/birds/audio/kookaburra-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "little-spotted-kiwi",
    name: "Little Spotted Kiwi",
    imageMale: "/birds/img/little-spotted-kiwi-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/little-spotted-kiwi-voice.mp3",
    call: "/birds/audio/little-spotted-kiwi-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "nicobar-pigeon",
    name: "Nicobar Pigeon",
    imageMale: "/birds/img/nicobar-pigeon-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/nicobar-pigeon-voice.mp3",
    call: "/birds/audio/nicobar-pigeon-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "kiwi",
    name: "North Island Brown Kiwi",
    imageMale: "/birds/img/kiwi-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/kiwi-voice.mp3",
    call: "/birds/audio/kiwi-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "purple-swamphen",
    name: "Purple Swamphen",
    imageMale: "/birds/img/purple-swamphen-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/purple-swamphen-voice.mp3",
    call: "/birds/audio/purple-swamphen-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "rainbow-lorikeet",
    name: "Rainbow Lorikeet",
    imageMale: "/birds/img/rainbow-lorikeet-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/rainbow-lorikeet-voice.mp3",
    call: "/birds/audio/rainbow-lorikeet-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "red-bearded-bee-eater",
    name: "Red-bearded Bee-eater",
    imageMale: "/birds/img/red-bearded-bee-eater-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/red-bearded-bee-eater-voice.mp3",
    call: "/birds/audio/red-bearded-bee-eater-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "red-winged-blackbird",
    name: "Red-winged Blackbird",
    imageMale: "/birds/img/red-winged-blackbird-male.png",
    imageFemale: "/birds/img/red-winged-blackbird-female.png", // very dimorphic – male black w/ red epaulets, female streaky brown
    image: "",
    voice: "/birds/audio/red-winged-blackbird-voice.mp3",
    call: "/birds/audio/red-winged-blackbird-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "resplendent-quetzal",
    name: "Resplendent Quetzal",
    imageMale: "/birds/img/resplendent-quetzal-male.png",
    imageFemale: "/birds/img/resplendent-quetzal-female.png", // dimorphic – female lacks long tail plumes, duller green
    image: "",
    voice: "/birds/audio/resplendent-quetzal-voice.mp3",
    call: "/birds/audio/resplendent-quetzal-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "macaw",
    name: "Macaw",
    imageMale: "/birds/img/macaw-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/macaw-voice.mp3",
    call: "/birds/audio/macaw-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "scarlet-macaw",
    name: "Scarlet Macaw",
    imageMale: "/birds/img/scarlet-macaw-male.png",
    imageFemale: "", // monomorphic – identical
    image: "",
    voice: "/birds/audio/scarlet-macaw-voice.mp3",
    call: "/birds/audio/scarlet-macaw-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "secretary-bird",
    name: "Secretary Bird",
    imageMale: "/birds/img/secretary-bird-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/secretary-bird-voice.mp3",
    call: "/birds/audio/secretary-bird-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "snowy-owl",
    name: "Snowy Owl",
    imageMale: "/birds/img/snowy-owl-male.png",
    imageFemale: "/birds/img/snowy-owl-female.png", // dimorphic – male nearly pure white, female has dark barring
    image: "",
    voice: "/birds/audio/snowy-owl-voice.mp3",
    call: "/birds/audio/snowy-owl-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "southern-brown-kiwi",
    name: "Southern Brown Kiwi",
    imageMale: "/birds/img/southern-brown-kiwi-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/southern-brown-kiwi-voice.mp3",
    call: "/birds/audio/southern-brown-kiwi-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "cassowary",
    name: "Southern Cassowary",
    imageMale: "/birds/img/southern-cassowary-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/southern-cassowary-voice.mp3",
    call: "/birds/audio/southern-cassowary-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "splendid-fairywren",
    name: "Splendid Fairywren",
    imageMale: "/birds/img/splendid-fairywren-male.png",
    imageFemale: "/birds/img/splendid-fairywren-female.png", // very dimorphic – male electric blue, female brown
    image: "",
    voice: "/birds/audio/splendid-fairywren-voice.mp3",
    call: "/birds/audio/splendid-fairywren-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "lyrebird",
    name: "Superb Lyrebird",
    imageMale: "/birds/img/superb-lyrebird-male.png",
    imageFemale: "/birds/img/superb-lyrebird-female.png", // dimorphic – male has spectacular lyre-shaped tail
    image: "",
    voice: "/birds/audio/lyrebird-voice.mp3",
    call: "/birds/audio/lyrebird-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "victoria-crowned-pigeon",
    name: "Victoria Crowned Pigeon",
    imageMale: "/birds/img/victoria-crowned-pigeon-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/victoria-crowned-pigeon-voice.mp3",
    call: "/birds/audio/victoria-crowned-pigeon-call.mp3",
    info: { songs: "" },
    variants: [],
  },
  {
    id: "white-bellied-sea-eagle",
    name: "White-bellied Sea Eagle",
    imageMale: "/birds/img/white-bellied-sea-eagle-male.png",
    imageFemale: "", // monomorphic
    image: "",
    voice: "/birds/audio/white-bellied-sea-eagle-voice.mp3",
    call: "/birds/audio/white-bellied-sea-eagle-call.mp3",
    info: { songs: "" },
    variants: [],
  },
];

export const birds: Bird[] = [...primaryBirds, ...expansionBirds];
