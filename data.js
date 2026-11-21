// =====================================================================
//  LAB ENGLISH XI — DATA. Ubah isi di sini saja.
//  Jenis aktivitas: quiz, game (Who Wants to Be an English Master), sort (urutkan), classify (kelompokkan), fill (isian)
//  Link video/drive: ganti "url" dengan link Ibu sendiri kapan saja.
// =====================================================================
const yt = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

const LAB = {
  guru: "Dea Arioktavia, S.Pd",
  jabatan: "Guru Bahasa Inggris Tingkat Lanjut · SMAN 1 Batam",
  judul: "Think Lab",
  tagline: "Welcome to Think Lab! This is your space to read stories, share your ideas, and think in English. Watch the videos, play the games, and finish the LKPD at your own pace. Stay curious and keep thinking!",
  heroLinks: [
    { t: "📘 Grammar Corner", url: "grammar.html" },
    { t: "🎬 Get Motivated", url: yt("motivational video for students learning english") },
    { t: "❓ Why Learn English?", url: yt("why learn english importance for students") },
    { t: "🎵 Learn With Songs", url: yt("english songs with lyrics for learning") },
    { t: "🗣️ Speaking Practice", url: yt("english speaking practice for high school students") }
  ],
  driveLinks: [
    { t: "📁 Semester 1 Files", url: "#" },
    { t: "📁 Semester 2 Files", url: "#" }
  ],
  // Unit yang disembunyikan dari murid. Kosongkan jadi [] atau hapus "u3", "u4" untuk menampilkannya lagi.
  sembunyi: ["u3", "u4"],
  // Slide materi (PDF) per unit. Format: ["kode TP", "judul", "file PDF di folder slides/", jumlah slide]
  slides: {
    u1: [
      ["TP 1.1", "The Legend Detectives", "slides/Materi Siswa Unit 1 - TP 1.1 The Legend Detectives.pdf", 10],
      ["TP 1.2", "The Legend Toolkit", "slides/Materi Siswa Unit 1 - TP 1.2 The Legend Toolkit.pdf", 14],
      ["TP 1.3", "Evaluate & Reflect", "slides/Materi Siswa Unit 1 - TP 1.3 Evaluate and Reflect.pdf", 6]
    ],
    u2: [
      ["TP 2.1", "Story Structure & Elements", "slides/unit2-tp2-1.pdf", 18],
      ["TP 2.2", "Language Features", "slides/unit2-tp2-2.pdf", 21],
      ["TP 2.3", "Project Day: Motion Comic", "slides/unit2-tp2-3.pdf", 20]
    ],
    u3: [
      ["TP 3.1", "Why Are Our Classrooms So Hot?", "slides/unit3-tp3-1.pdf", 35],
      ["TP 3.2", "Let the Data Speak for You", "slides/unit3-tp3-2.pdf", 29],
      ["TP 3.3", "Is This Argument Strong Enough?", "slides/unit3-tp3-3.pdf", 19]
    ],
    u4: [
      ["TP 4.1", "Why Should We Live Healthy?", "slides/unit4-tp4-1.pdf", 27],
      ["TP 4.2", "The Language of Advice and Action", "slides/unit4-tp4-2.pdf", 23],
      ["TP 4.3", "Is Our Idea Realistic Enough?", "slides/unit4-tp4-3.pdf", 13]
    ]
  },
  semester: [
    { nama: "Semester 1", sub: "Stories: legends and fairy tales", units: ["u1", "u2"] },
    { nama: "Semester 2", sub: "Opinion texts: analytical and hortatory exposition", units: ["u3", "u4"] }
  ],
  units: {
    // ------------------------------------------------------------- UNIT 1
    u1: {
      no: "01", judul: "Are We Connected to Nature?", jenis: "Narrative Text · Legend", warna: "#2f9e44", emoji: "🌿",
      desk: "Learn how a legend is built, nature words, the simple past, action verbs, and sequence words. Project: a picture story poster.",
      tags: ["Legend", "Simple Past", "Sequence Words", "Poster Project"],
      materi: `
        <h3>What is a Legend?</h3><p>A <b>legend</b> is a traditional narrative story about the origin of a place, often with magical elements and a moral value. Examples: <i>The Legend of the Weeping Lake</i>, <i>The Legend of Telaga Lestari</i>, <i>The Legend of Pulau Setokok (Batam)</i>.</p>
        <h3>Generic Structure</h3><ul><li><b>Orientation</b>: who, when, where</li><li><b>Complication</b>: the problem/conflict</li><li><b>Resolution</b>: how the problem ends</li><li><b>Re-orientation/Coda</b>: moral value or closing</li></ul>
        <h3>Characteristics of a Legend</h3><ul><li>Magical/supernatural elements</li><li>Explains the origin of a place (etiological function)</li><li>Real setting</li><li>Moral message</li><li>Passed down orally</li></ul>
        <h3>Language Features</h3><ul><li><b>Simple past tense</b>: lived, cried, became, went</li><li><b>Action verbs</b>: cut, ran, planted, destroyed</li><li><b>Sequence words</b>: once upon a time, one day, then, after that, finally</li></ul>
        <p><b>Vocabulary:</b> ecosystem, habitat, deforestation, pollution, flood, drought, biodiversity, sustainable.</p>`,
      aktivitas: [
        { id: "u1-asesmen", t: "Warm-up Quiz Unit 1", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["A legend usually explains…", ["what happened in the news today", "how a place, an animal or a natural thing came to be", "how to make something step by step", "why the government made a new rule"], 1],
          ["Which part of a legend introduces the characters, the setting and the background?", ["Orientation", "Complication", "Resolution", "Moral value"], 0],
          ["Cutting down trees in a large area of forest is called…", ["conservation", "extinction", "ecosystem", "deforestation"], 3],
          ["Which sentence is in the simple past tense?", ["The farmers are planting new trees.", "The farmers will plant new trees.", "The farmers planted new trees.", "The farmers plant new trees."], 2],
          ["Which pair shows an irregular verb (V1 → V2)?", ["believe → believed", "come → came", "protect → protected", "watch → watched"], 1],
          ["Which sequence word marks a surprise in a story?", ["Suddenly", "First", "Then", "Finally"], 0],
          ["To find the main idea, we ask WHO or WHAT, WHAT HAPPENED, and…", ["where is the nearest lake", "when was the story written", "why is the story magical", "what was the result"], 3]
        ]},
        { id: "u1-sort", t: "Lab Story Structure", ic: "🧩", type: "sort", note: "Put the story in order", intro: "Put the parts of \"The Legend of Telaga Lestari\" in the right order.", items: [
          "Orientation — Long ago, a small village stood near a green forest. The villagers lived happily and took care of the trees.",
          "Complication — One day, greedy people came and cut down the trees. The river dried up and the animals lost their homes.",
          "Complication — A great drought hit the village. The people cried and prayed for water.",
          "Resolution — A kind girl planted seeds every day. Finally, rain fell and a clear lake appeared where she cried.",
          "Re-orientation — The people named it Telaga Lestari and promised to protect nature forever."
        ]},
        { id: "u1-fill", t: "Lab Past Tense Builder", ic: "🔨", type: "fill", note: "Type the past form", intro: "Write the past form of the verb in brackets.", soal: [
          ["The villagers (live) ___ near the forest.", "lived"], ["One day, a big storm (come) ___.", "came"], ["The old man (cut) ___ the tallest tree.", "cut"],
          ["The girl (cry) ___ all night.", "cried"], ["The water (become) ___ a lake.", "became"], ["They (plant) ___ new trees.", "planted"],
          ["The animals (run) ___ away from the fire.", "ran"], ["The king (find) ___ a magic stone.", "found"]
        ]},
        { id: "u1-classify", t: "Lab Word Explorers", ic: "🔤", type: "classify", note: "Sort the words", intro: "Put each word in the right group.", groups: ["Action Verb", "Sequence Word", "Environment Noun"], items: [
          ["planted", 0], ["destroyed", 0], ["ran", 0], ["first", 1], ["after that", 1], ["finally", 1], ["habitat", 2], ["drought", 2], ["ecosystem", 2]
        ]},
        { id: "u1-game", t: "English Master Game · Unit 1", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["Which part introduces the characters?", ["Orientation", "Complication", "Resolution", "Coda"], 0],
          ["The past form of \"see\" is…", ["seed", "saw", "seen", "sees"], 1],
          ["\"The river dried up and the fish died.\" This is part of the…", ["Orientation", "Complication", "Coda", "Title"], 1],
          ["A legend often explains…", ["how to cook food", "the origin of a place", "today's weather", "a scientific fact"], 1],
          ["Choose the correct sentence.", ["She cry yesterday.", "She cried yesterday.", "She crying yesterday.", "She cries yesterday."], 1],
          ["\"Finally\" is used to show…", ["the first event", "the last event", "a reason", "a contrast"], 1],
          ["The moral value of a legend about cutting trees is probably…", ["Trees are useless", "We must protect nature", "Rivers are dangerous", "Money is everything"], 1],
          ["Which is NOT a characteristic of a legend?", ["Magical elements", "Real setting", "Moral value", "Statistical data"], 3]
        ]},
        { id: "u1-latihan", t: "Practice Unit 1", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["\"Many years ago, there lived a poor fisherman in Batam.\" The sentence is the…", ["Orientation", "Complication", "Resolution", "Re-orientation"], 0],
          ["Which is an irregular verb?", ["walked", "planted", "took", "cleaned"], 2],
          ["\"After that, the village was flooded.\" The sequence word is…", ["village", "after that", "was", "flooded"], 1],
          ["Implicit information is…", ["written directly", "inferred from clues", "the title", "a vocabulary list"], 1],
          ["The purpose of a picture-sequencing poster is to…", ["list prices", "tell a story through ordered pictures", "describe a person", "explain a process scientifically"], 1]
        ]}
      ],
      video: [
        ["Legend", "https://youtu.be/FM8E8QsFpQA?si=XLEn3mjynQhUFc_M"],
        ["Main Idea", "https://youtu.be/zTVYadNxK2Q?si=tHjrTz1F67vSTlw8"],
        ["Simple Past", "https://youtu.be/nWrPtY0hdxw?si=CQCcylxOuOSj4dMm"],
        ["Sequence Words", "https://youtu.be/_wduLjbnrGs?si=YIeiQRSqJI1eeWhm"],
        ["Poster Project", "https://youtu.be/O1Q3TH8W-zM?si=JW5CmACh-NyUyYNx"],
        ["Generic Structure", "https://www.youtube.com/watch?v=O9sCEGfMHRs"],
        ["Simple Past: Regular and Irregular", "https://www.youtube.com/watch?v=K2zCyFS0CJI"],
        ["Sequence Words in Stories", "https://www.youtube.com/watch?v=IQQCrhEgpRc"],
        ["Indonesian Legends", "https://www.youtube.com/watch?v=kdKFvjumOOo"],
        ["Peatland Fires and Our Air", "https://www.youtube.com/watch?v=Nr_oH50-0wE"]
      ],
      inspirasi: [["🎬 Mangrove Forests in Batam", yt("hutan mangrove batam")]]
    },
    // ------------------------------------------------------------- UNIT 2
    u2: {
      no: "02", judul: "Discovering Ourselves", jenis: "Narrative Text · Fairy Tale & Fantasy", warna: "#8e44ff", emoji: "🦄",
      desk: "Learn story elements, inner and outer conflict, noun phrases, adverbs, and reported speech. Project: a motion comic.",
      tags: ["Fairy Tale", "Story Elements", "Reported Speech", "Motion Comic"],
      materi: `
        <h3>Fairy Tale & Fantasy</h3><p>Stories with magical worlds and characters. Behind the magic, they show how a character <b>changes and discovers who they are</b>.</p>
        <h3>Story Elements</h3><ul><li><b>Characters</b> (protagonist, antagonist)</li><li><b>Setting</b> (time & place)</li><li><b>Conflict</b>: <i>internal</i> (inside the character: fear, doubt) and <i>external</i> (with others, nature, society)</li><li><b>Resolution</b> & <b>Coda</b> (lesson learned)</li></ul>
        <h3>Language Features</h3><ul><li><b>Noun phrase</b>: a brave young princess</li><li><b>Adverbs</b>: quickly, bravely, suddenly</li><li><b>Reduced adjective clause</b>: the girl <i>(who was) sitting</i> by the window → the girl sitting by the window</li><li><b>Reported speech</b>: "I am lost," she said. → She said that she was lost.</li></ul>`,
      aktivitas: [
        { id: "u2-asesmen", t: "Warm-up Quiz Unit 2", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["A problem that happens inside the main character's mind, such as fear or self-doubt, is called…", ["orientation", "internal conflict", "external conflict", "setting"], 1],
          ["Which part is optional and closes the story by showing how the character changed?", ["Re-orientation (coda)", "Orientation", "Complication", "Resolution"], 0],
          ["Which sentence shows an external conflict?", ["The character is afraid of failing.", "The character doubts her own ideas.", "The character thinks she is not good enough.", "A big storm destroys the main character's boat."], 3],
          ["Which one is a noun phrase?", ["slowly and carefully", "because she was afraid", "a quiet village near the forest", "clever and kind"], 2],
          ["Which adverb tells us HOW something happens (manner)?", ["always", "slowly", "yesterday", "there"], 1],
          ["\"I am tired,\" Dina said. Which is the correct reported speech? Dina said that she…", ["was tired.", "is tired.", "were tired.", "has been tired."], 0],
          ["Reduce this clause: Nadia, who was a quiet girl from class XI, joined the team.", ["Nadia, who a quiet girl from class XI, joined the team.", "Nadia, was a quiet girl from class XI, joined the team.", "Nadia, a quiet girl was from class XI, joined the team.", "Nadia, a quiet girl from class XI, joined the team."], 3]
        ]},
        { id: "u2-classify", t: "Lab Conflict Detector", ic: "🧠", type: "classify", note: "Inner or outer?", intro: "Is the conflict internal or external?", groups: ["Internal Conflict", "External Conflict"], items: [
          ["Mira is afraid she is not good enough to join the team.", 0], ["Leo cannot decide whether to tell the truth.", 0], ["The prince doubts his own courage.", 0],
          ["A dragon attacks the village.", 1], ["Two friends argue about a secret.", 1], ["A storm destroys the girl's house.", 1]
        ]},
        { id: "u2-reported", t: "Lab Reported Speech", ic: "💬", type: "quiz", note: "Change what people said", soal: [
          ["\"I am happy,\" said Ana. → Ana said that she ___ happy.", ["is", "was", "were", "be"], 1],
          ["\"I can fly,\" said the fairy. → The fairy said that she ___ fly.", ["can", "could", "will", "may"], 1],
          ["\"I will help you,\" he told me. → He told me that he ___ help me.", ["will", "would", "shall", "can"], 1],
          ["\"I lost my way,\" said the boy. → The boy said that he ___ his way.", ["lost", "had lost", "loses", "has lost"], 1],
          ["\"We are in the forest,\" they said. → They said that they ___ in the forest.", ["are", "were", "was", "be"], 1]
        ]},
        { id: "u2-sort", t: "Lab Motion Comic Planner", ic: "🎞️", type: "sort", note: "Put the panels in order", intro: "Put the comic panels in the right order.", items: [
          "Orientation — Rina, a shy girl, loved drawing but never showed anyone her work.",
          "Complication — Her class held an art competition, but she was afraid her friends would laugh at her.",
          "Resolution — Encouraged by her teacher, Rina joined and her drawing won second place.",
          "Coda — Rina learned that believing in herself was the first step to growing up."
        ]},
        { id: "u2-game", t: "English Master Game · Unit 2", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["The main character of a story is called the…", ["antagonist", "protagonist", "narrator", "audience"], 1],
          ["\"Suddenly\" is a(n)…", ["noun", "adjective", "adverb", "verb"], 2],
          ["\"The boy wearing a red hat\" contains a…", ["reduced adjective clause", "question tag", "passive voice", "conditional"], 0],
          ["Where and when a story happens is the…", ["plot", "setting", "theme", "coda"], 1],
          ["A character fighting a monster is an example of…", ["internal conflict", "external conflict", "resolution", "orientation"], 1],
          ["\"I'm tired,\" she said. → She said that she ___ tired.", ["is", "was", "am", "be"], 1],
          ["A motion comic is…", ["a printed newspaper", "a digital comic with movement and sound", "a song", "a speech"], 1],
          ["Fairy tales often teach us about…", ["math formulas", "growing up and values", "weather reports", "recipes"], 1]
        ]},
        { id: "u2-latihan", t: "Practice Unit 2", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["Which is a noun phrase?", ["run quickly", "a beautiful golden castle", "very fast", "and then"], 1],
          ["\"The girl who was sitting alone\" can be reduced to…", ["The girl sat alone", "The girl sitting alone", "The girl sits alone", "The alone girl sitting"], 1],
          ["Character change means…", ["the character's name changes", "the character grows or learns something", "the setting moves", "the story ends"], 1],
          ["In which part does the main problem appear?", ["Orientation", "Complication", "Coda", "Title"], 1]
        ]}
      ],
      video: [
        ["Story Elements", "https://youtu.be/Xnb694zNboU?si=J3KxcGSro0yiPYh4"],
        ["Conflict & Change", "https://youtu.be/7MSCJ8-qkkA?si=0hY4uFwkTH1EYC0N"],
        ["Noun Phrases", "https://youtu.be/W1T7jsn3QD4?si=r7YMfZ0Flq4jyiZ0"],
        ["Adjective Clauses", "https://youtu.be/78zAJloytSk?si=Yg47CQUPk1UA51hu"],
        ["Reported Speech", "https://youtu.be/wMO-wSBmgnI?si=xaNTX40QOny6YbE7"],
        ["Elements of a Story", "https://www.youtube.com/watch?v=Uxxa2Mu_-ec"],
        ["Internal vs External Conflict", "https://www.youtube.com/watch?v=34QDge1BnJM"],
        ["Describing Words: Noun Phrases and Adverbs", "https://www.youtube.com/watch?v=Sj2ztFjBBuE"],
        ["How to Make a Motion Comic", "https://www.youtube.com/watch?v=n6_6CRypDls"],
        ["Short Animated Films", "https://www.youtube.com/watch?v=88aM_ywuNbA"]
      ],
      inspirasi: [["🎬 Short Animated Films", yt("short animated film self discovery")]]
    },
    // ------------------------------------------------------------- UNIT 3
    u3: {
      no: "03", judul: "The Importance of Environmental Protection", jenis: "Analytical Exposition", warna: "#0a84ff", emoji: "🌍",
      desk: "Learn to give an opinion with reasons and data, the simple present, and words like because and therefore. Project: Green Street Journalism.",
      tags: ["Thesis", "CER", "Causal Conjunctions", "Green Journalism"],
      materi: `
        <h3>Analytical Exposition</h3><p>A text that presents the writer's <b>opinion</b> about an issue and supports it with <b>arguments</b>, to convince readers that the issue is important.</p>
        <h3>Generic Structure</h3><ul><li><b>Thesis</b>: the writer's position</li><li><b>Arguments</b>: reasons supported by data</li><li><b>Reiteration</b>: restating the thesis</li></ul>
        <h3>Claim–Evidence–Reasoning (CER)</h3><ul><li><b>Claim</b>: Plastic waste harms marine life.</li><li><b>Evidence</b>: Millions of tons of plastic enter the ocean every year.</li><li><b>Reasoning</b>: Animals mistake plastic for food, so they get sick or die.</li></ul>
        <h3>Language Features</h3><ul><li>Simple present tense: Trees <b>absorb</b> carbon dioxide.</li><li>Causal conjunctions: <b>because, due to, therefore, thus, as a result</b></li><li>Academic vocabulary: biodiversity, sustainability, ecosystem, emission</li></ul>`,
      aktivitas: [
        { id: "u3-asesmen", t: "Warm-up Quiz Unit 3", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["The three parts of an analytical exposition are…", ["title, body, ending", "thesis, arguments, reiteration", "orientation, complication, resolution", "thesis, arguments, recommendation"], 1],
          ["Why is a measurement (a number) better than saying \"I feel hot\"?", ["It is evidence that other people can check.", "Numbers are always more fun than feelings.", "Feelings are wrong and must never be used.", "Only teachers are allowed to measure heat."], 0],
          ["Which tense do we use for facts, and which for our own measurements?", ["facts: simple past; measurements: simple present", "facts: future; measurements: simple present", "facts and measurements: present perfect", "facts: simple present; measurements: simple past"], 3],
          ["Complete the sentence: The temperature ___ from 28°C to 35°C.", ["was rised", "rise", "rose", "rised"], 2],
          ["Sunlight comes straight into the room. ___, the classroom gets very hot.", ["In addition", "As a result", "In contrast", "For example"], 1],
          ["Which sentence is evidence for the claim \"The window makes the room hotter\"?", ["At 13:00 the area near the window was 35°C.", "Everyone knows that windows are bad.", "I am sure curtains fix every hot room.", "Obviously, the sun is the only problem."], 0],
          ["Which phrase is a biased phrase that we should change?", ["The data shows that…", "The measurements suggest that…", "Many students say that…", "Everyone knows that…"], 3]
        ]},
        { id: "u3-sort", t: "Lab Text Structure", ic: "🧩", type: "sort", note: "Build the text", intro: "Put the paragraphs in the right order.", items: [
          "Thesis — Protecting the environment around our school is very important for everyone.",
          "Argument 1 — Firstly, trees around the school reduce heat and make the air cleaner.",
          "Argument 2 — Moreover, a clean environment prevents diseases such as dengue fever.",
          "Argument 3 — Furthermore, a green school helps students feel calm and focus better.",
          "Reiteration — Therefore, it is clear that protecting our school environment is essential."
        ]},
        { id: "u3-cer", t: "Lab CER Builder", ic: "🔬", type: "classify", note: "Claim, evidence, or reason?", intro: "Is it a Claim, Evidence, or Reasoning?", groups: ["Claim", "Evidence", "Reasoning"], items: [
          ["Plastic bags should be reduced in our canteen.", 0], ["Mangrove forests must be protected.", 0],
          ["Our class survey found 200 plastic bags thrown away in one week.", 1], ["Data shows mangroves can store up to four times more carbon than other forests.", 1],
          ["Because plastic takes hundreds of years to decompose, it fills our land and sea.", 2], ["Since mangroves protect the coast from waves, losing them puts villages at risk.", 2]
        ]},
        { id: "u3-game", t: "English Master Game · Unit 3", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["The last part of an analytical exposition is the…", ["Thesis", "Argument", "Reiteration", "Resolution"], 2],
          ["Choose the causal conjunction.", ["however", "due to", "although", "whereas"], 1],
          ["\"Trees absorb carbon dioxide.\" The verb is in…", ["simple present", "simple past", "future", "past perfect"], 0],
          ["A credible source is usually…", ["an anonymous meme", "a scientific journal or official report", "a random comment", "a rumor"], 1],
          ["\"Moreover\" is used to…", ["add an argument", "show contrast", "end the text", "show time"], 0],
          ["Evidence in an argument should be…", ["data or facts", "only feelings", "jokes", "questions"], 0],
          ["Sustainability means…", ["using resources so they last for the future", "wasting energy", "building more factories", "cutting trees"], 0],
          ["Green Street Journalism produces…", ["a song", "a written text and a campaign video", "a poem", "a comic"], 1]
        ]},
        { id: "u3-latihan", t: "Practice Unit 3", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["\"In conclusion, we must keep our rivers clean.\" This is the…", ["Thesis", "Argument", "Reiteration", "Orientation"], 2],
          ["Which sentence shows cause and effect?", ["The river is long.", "The river is polluted due to factory waste.", "I like rivers.", "Rivers are in Batam."], 1],
          ["Which is the best evidence?", ["I think it is bad.", "Everyone knows it.", "A 2025 report shows air pollution rose by 20%.", "My friend said so."], 2],
          ["The thesis contains…", ["the writer's main opinion", "a list of references", "a story ending", "a dialogue"], 0]
        ]}
      ],
      video: [
        ["Stories to Arguments", "https://www.youtube.com/watch?v=rUdIzaSeEc0"],
        ["Text Structure", "https://www.youtube.com/watch?v=KWtVyF5n9Uk"],
        ["Causal Conjunctions", "https://www.youtube.com/watch?v=CO8Cr3jo9MY"],
        ["Claim-Evidence-Reasoning", "https://www.youtube.com/watch?v=nKgKZGP4LrU"],
        ["Green Journalism", "https://www.youtube.com/watch?v=znuw7j49cTw"],
        ["Analytical Exposition Text", "https://www.youtube.com/watch?v=Z6n6WBr88eY"],
        ["Claim, Evidence, Reasoning (CER)", "https://www.youtube.com/watch?v=kcDudJcMbDw"]
      ],
      inspirasi: [["🎬 Environmental Campaign Videos", yt("environmental campaign video students")]]
    },
    // ------------------------------------------------------------- UNIT 4
    u4: {
      no: "04", judul: "Why Should We Live a Healthy Lifestyle?", jenis: "Hortatory Exposition", warna: "#ff5e3a", emoji: "🍎",
      desk: "Learn to persuade people, health words, modals like should and must, and logos, pathos, ethos. Project: a podcast.",
      tags: ["Recommendation", "Modals", "Logos-Pathos-Ethos", "Podcast"],
      materi: `
        <h3>Hortatory Exposition</h3><p>A text that persuades readers that something <b>should or should not be done</b>.</p>
        <h3>Generic Structure</h3><ul><li><b>Thesis</b></li><li><b>Arguments</b></li><li><b>Recommendation</b>: what readers should do</li></ul>
        <h3>Persuasive Strategies</h3><ul><li><b>Logos</b> (logic & data): Studies show teenagers need 8–10 hours of sleep.</li><li><b>Pathos</b> (emotion): Imagine how your parents feel when you are sick.</li><li><b>Ethos</b> (credibility): According to the WHO / doctors…</li></ul>
        <h3>Language Features</h3><ul><li>Modals: <b>should, must, need to, ought to</b></li><li>Persuasive phrases: <b>Let's…, It is important to…</b></li><li>Health vocabulary: hydration, nutrition, balanced diet, exercise, sleep, stress</li></ul>`,
      aktivitas: [
        { id: "u4-asesmen", t: "Warm-up Quiz Unit 4", ic: "🧭", type: "quiz", note: "What do you know?", soal: [
          ["The three parts of a hortatory exposition are…", ["title, list, conclusion", "thesis, arguments, recommendation", "thesis, arguments, reiteration", "orientation, complication, resolution"], 1],
          ["One drink has 24 g of sugar. The daily limit is 50 g. What percent of the limit is that?", ["48%", "24%", "52%", "12%"], 0],
          ["Buying a sweet drink every break is a ___. (something you do regularly, almost without thinking)", ["label", "choice", "snack", "habit"], 3],
          ["Which sentence with a modal is correct?", ["Students must wears shoes.", "Students musts wear shoes.", "Students must wear shoes.", "Students must to wear shoes."], 2],
          ["Complete the formal recommendation: It is recommended that the canteen ___ fresh fruit.", ["to sell", "sell", "sells", "selling"], 1],
          ["Which sentence is an imperative that fits a poster?", ["Read the label!", "Students should read the label.", "The label is on the cup.", "Why is the label there?"], 0],
          ["Which recommendation is more realistic for our school?", ["The canteen should stop selling all fried food tomorrow.", "Students must never buy sweet drinks again.", "The school should close the canteen.", "The canteen should sell one fruit option every day."], 3]
        ]},
        { id: "u4-classify", t: "Lab Logos · Pathos · Ethos", ic: "🎯", type: "classify", note: "Spot the strategy", intro: "Which strategy does each sentence use?", groups: ["Logos (facts)", "Pathos (feelings)", "Ethos (trust)"], items: [
          ["Research shows that 30 minutes of exercise lowers stress by 25%.", 0], ["Teenagers who sleep 8 hours score higher on tests.", 0],
          ["Imagine how sad your family would be if you got sick.", 1], ["Don't let junk food steal your dreams!", 1],
          ["According to the World Health Organization, teens need daily physical activity.", 2], ["As a doctor with 20 years of experience, I recommend eating more vegetables.", 2]
        ]},
        { id: "u4-sort", t: "Lab Podcast Script", ic: "🎙️", type: "sort", note: "Put the script in order", intro: "Put the podcast script in the right order.", items: [
          "Thesis — Hi listeners! Today we believe that every student should drink enough water every day.",
          "Argument 1 — First, water keeps our brain focused. Studies show dehydration lowers concentration.",
          "Argument 2 — Second, water helps our body recover after sports and keeps our skin healthy.",
          "Recommendation — So, let's bring a water bottle to school and stop buying sugary drinks!"
        ]},
        { id: "u4-game", t: "English Master Game · Unit 4", ic: "🎮", type: "game", note: "Answer 8 questions to win", soal: [
          ["Analytical vs hortatory: hortatory adds a…", ["recommendation", "complication", "orientation", "coda"], 0],
          ["\"You ___ eat more fruit.\"", ["should", "did", "were", "has"], 0],
          ["\"According to doctors…\" uses the strategy of…", ["Logos", "Pathos", "Ethos", "Coda"], 2],
          ["\"Imagine losing your health forever.\" uses…", ["Logos", "Pathos", "Ethos", "Thesis"], 1],
          ["A balanced diet includes…", ["only rice", "various nutrients in the right amounts", "only snacks", "no water"], 1],
          ["Which is a recommendation?", ["Sleep is important.", "Many students sleep late.", "We must sleep at least 8 hours.", "I slept late yesterday."], 2],
          ["A good recommendation should be…", ["realistic and relevant", "impossible", "unrelated", "very long"], 0],
          ["A podcast is…", ["an audio program", "a printed poster", "a short story", "a math test"], 0]
        ]},
        { id: "u4-latihan", t: "Practice Unit 4", ic: "📝", type: "quiz", note: "Mixed questions", soal: [
          ["Which modal shows strong obligation?", ["might", "could", "must", "may"], 2],
          ["\"Data shows 1 in 5 teenagers is overweight.\" This is…", ["Logos", "Pathos", "Ethos", "Coda"], 0],
          ["The purpose of the recommendation is to…", ["tell readers what to do", "introduce characters", "describe the setting", "give a title"], 0],
          ["\"Let's\" is followed by…", ["V1 (base verb)", "V2", "V-ing", "to + V1"], 0]
        ]}
      ],
      video: [
        ["Healthy Words", "https://www.youtube.com/watch?v=4Hkpt1PydlY"],
        ["Call to Action", "https://www.youtube.com/watch?v=I2VrFwGQ9uw"],
        ["Modal Verbs", "https://www.youtube.com/watch?v=IALWOVw5Lhg"],
        ["Imperatives & Ethos", "https://www.youtube.com/watch?v=T3J3cnG-kAg"],
        ["Evaluate Advice", "https://www.youtube.com/watch?v=AFpnDNF6kpI"],
        ["Hortatory Exposition Text", "https://www.youtube.com/watch?v=zzzugRNToe0"],
        ["Modal Verbs for Advice", "https://www.youtube.com/watch?v=MHhA8NjMmpk"],
        ["Logos, Pathos, Ethos", "https://www.youtube.com/watch?v=_1AE-bj-UQ0"]
      ],
      inspirasi: [["🎬 Healthy Lifestyle for Teens", yt("healthy lifestyle tips for teenagers")]]
    }
  }
};
