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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
    info: { songs: "" },
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
