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
          ["What kind of text is a legend?", ["A text that sells a product to buyers", "A narrative text that explains the origin of something", "A text that gives steps to make something", "A text that reports an event of today"], 1],
          ["What is the generic structure of a legend?", ["Orientation, complication, resolution", "Thesis, arguments, reiteration", "Goal, materials, steps", "Title, list, conclusion"], 0],
          ["Which language feature is mostly used in a legend?", ["Imperative sentences", "Simple present tense for facts", "Modal verbs for advice", "Action verbs in the simple past tense"], 3],
          ["A legend usually delivers a…", ["product price", "news headline", "moral value or lesson", "list of materials"], 2],
          ["Which words help us show the order of events in a legend?", ["Greeting words (hello, thanks)", "Sequence words (first, then, finally)", "Modal verbs (should, must)", "Question words (who, what)"], 1],
          ["Which topic is the theme of Unit 1?", ["Nature and the environment", "Robots and technology", "Fashion and shopping", "Sports and games"], 0]
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
          ["Which one is NOT a characteristic of a legend?", ["It delivers a moral value or lesson", "It gives step-by-step instructions", "It explains the origin of something real", "It has magical or supernatural elements"], 1],
          ["Which signal words usually appear in the complication of a legend?", ["One day… / Suddenly… / However…", "Once upon a time… / A long time ago…", "Finally… / From that day on…", "There lived a… / In a village near…"], 0],
          ["What does the resolution of a legend usually explain?", ["Who the characters are and where they live", "What problem changes the calm situation", "What the writer thinks about an issue", "How the problem is solved and the origin of a real place or thing"], 3],
          ["A community of living things that interact with their environment is called an…", ["extinction", "conservation", "ecosystem", "habitat"], 2],
          ["In the Three Magic Questions, what is step 3 for finding the main idea?", ["Copy the first sentence of the paragraph", "Conclude: combine the answers into ONE main idea sentence", "Read and search for the keywords", "Underline and note who or what, what happened, and the result"], 1],
          ["What is the simple past of \"stop\"?", ["stopped", "stoped", "stopt", "stopping"], 0],
          ["What is the simple past of \"worry\"?", ["worryed", "worrid", "worrying", "worried"], 3],
          ["Which list contains only irregular verbs (V1 → V2)?", ["walk → walked, stop → stopped, play → played", "go → goed, see → seed, take → taked", "go → went, see → saw, take → took", "live → lived, cry → cried, want → wanted"], 2],
          ["Action verbs in a legend show…", ["what the moral lesson is", "what happened (the actions of the story)", "who the characters are", "where the story takes place"], 1],
          ["Which sequence word marks the ending of a story?", ["Finally", "First", "Suddenly", "Then"], 0],
          ["Which one is NOT one of the four criteria for evaluating a narrative text?", ["Clarity of structure", "Accuracy of language", "Clarity of message", "Number of pages"], 3],
          ["A text-to-world connection links…", ["a title to its author", "a verb to its tense", "something in a story to something in real life", "two paragraphs in the same story"], 2]
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
          ["What does self-discovery mean in a story?", ["A character travels to another country", "A character wins a big competition", "A character learns something true about who they really are", "A character finds a hidden treasure"], 2],
          ["Which types of text do we learn in Unit 2?", ["Business letters", "Fairy tale and fantasy stories", "News reports", "Procedure texts"], 1],
          ["What is the generic structure of a fairy tale or fantasy story?", ["Orientation, complication, resolution, re-orientation", "Thesis, arguments, reiteration", "Thesis, arguments, recommendation", "Goal, materials, steps"], 0],
          ["Which are the story elements?", ["Claim, evidence, reasoning", "Thesis, argument, reiteration", "Goal, materials, steps", "Character, setting, conflict, resolution"], 3],
          ["Which language features do we study in Unit 2?", ["Only greetings and invitations", "Only advice with should and must", "Noun phrases, adverbs, clauses and reported speech", "Only numbers, tables and graphs"], 2],
          ["Which is a main idea of a story about self-discovery?", ["The writer gives steps to cook a meal", "The character faces a problem and learns about themselves", "The character sells a product to customers", "The writer reports a news event"], 1]
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
          ["Which question does the complication of a story answer?", ["How is it solved?", "What did the character discover?", "What goes wrong?", "Who? Where? When?"], 2],
          ["Conflict in a story means…", ["the lesson at the end", "the problem the main character must face", "the place where the story happens", "the person who tells the story"], 1],
          ["The helper in a story is the character who…", ["guides or supports the main character", "creates the main problem", "tells the lesson to the readers", "writes the story"], 0],
          ["Which is an example of an internal conflict?", ["A flood destroys the village", "A rival tries to take the prize", "A test is very difficult", "A character is afraid and doubts herself"], 3],
          ["Which one is an adjective phrase? (It can follow is, was or felt.)", ["the old library", "a trail of lights", "afraid of the dark", "a dark forest"], 2],
          ["Which sentence puts the adverb of frequency in the correct place?", ["Never he is late.", "He is never late.", "He never is late.", "He is late never."], 1],
          ["Which group of words is a dependent clause?", ["when she opened the door", "the old wooden door", "she opened the door", "opening the door slowly"], 0],
          ["Which sentence uses the comma correctly?", ["Although, it was raining they kept walking.", "They kept, walking although it was raining.", "Although it was raining they, kept walking.", "Although it was raining, they kept walking."], 3],
          ["Choose the correct relative word: This is the school ___ I studied.", ["whose", "which", "where", "who"], 2],
          ["Reduce the clause: The app which was on his laptop was ready.", ["The app which was on his laptop ready.", "The app on his laptop was ready.", "The app which on his laptop was ready.", "The app was on his laptop was ready."], 1],
          ["Dimas asked, \"Where is my bag?\" Which is the correct reported question?", ["Dimas asked where his bag was.", "Dimas asked where was his bag.", "Dimas asked where is his bag.", "Dimas asked where my bag was."], 0],
          ["\"Please close the door,\" Mom said. Which is the correct reported command?", ["Mom asked me close the door.", "Mom asked me that I close the door.", "Mom asked me closing the door.", "Mom asked me to close the door."], 3]
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
          ["What is the purpose of an analytical exposition?", ["To entertain readers with a story", "To explain how to make something", "To describe a person or a place", "To persuade readers that something is important, with arguments"], 3],
          ["What is the generic structure of an analytical exposition?", ["Thesis, arguments, recommendation", "Goal, materials, steps", "Thesis, arguments, reiteration", "Orientation, complication, resolution"], 2],
          ["Which tense is mostly used in an analytical exposition?", ["Future tense only", "Simple present tense", "Simple past tense", "Past perfect tense"], 1],
          ["Which language feature shows cause and effect?", ["Causal connectors such as because and therefore", "Direct speech with quotation marks", "Imperatives such as read and drink", "Rhymes as in a poem"], 0],
          ["A strong argument is supported by…", ["personal feelings only", "long and difficult words", "a funny title", "evidence such as data and facts"], 3],
          ["Which pattern helps us build an argument?", ["Goal, materials, steps", "Greeting, body, closing", "Claim, evidence, reasoning", "Orientation, complication, resolution"], 2]
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
          ["What is the purpose of an analytical exposition?", ["To entertain readers with a story", "To explain how to make something", "To describe a person or a place", "To persuade readers that something is important, with arguments"], 3],
          ["What does the reiteration do in an analytical exposition?", ["It gives the evidence for each argument", "It tells readers what to do", "It restates the thesis and closes the text", "It introduces the topic and the writer's position"], 2],
          ["The thesis of an analytical exposition is…", ["the title of the text", "the writer's position on the issue", "a list of facts only", "the final recommendation"], 1],
          ["Which sentence states a general fact correctly?", ["Plants absorb carbon dioxide.", "Plants absorbed carbon dioxide.", "Plants are absorbed carbon dioxide.", "Plants will absorbing carbon dioxide."], 0],
          ["What is the simple past of \"fall\"?", ["falled", "fallen", "felt", "fell"], 3],
          ["Which connector introduces a reason (cause)?", ["as a result", "consequently", "because of", "therefore"], 2],
          ["It rained heavily. ___, the road was flooded.", ["Although", "As a result", "Because of", "Due to"], 1],
          ["In Claim-Evidence-Reasoning, the claim is…", ["a statement that answers the question or states the position", "the data that supports the idea", "the explanation that links data to the claim", "a greeting to the reader"], 0],
          ["Which is the best evidence for the claim \"Plastic bags harm the sea\"?", ["Everyone knows that plastic is bad.", "I feel sad about plastic.", "Plastic bags are very common.", "A study found plastic in 90% of seabirds."], 3],
          ["Which words are often biased because they are too strong?", ["may, might, could, suggests", "according to the data, in my study", "everyone, always, only, obviously", "many, often, mainly, the data shows"], 2],
          ["Which is a more careful version of \"Everyone knows that…\"?", ["I am sure that…", "Many students say that…", "Obviously, …", "Nobody can say that…"], 1],
          ["Which one is NOT a question for judging an argument?", ["Does the text have many paragraphs?", "Is there data?", "Can we trust the source?", "Is there enough evidence?"], 0]
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
          ["What is the purpose of a hortatory exposition?", ["To persuade readers to do something", "To retell a past event", "To describe how something works", "To entertain with a magic story"], 0],
          ["What is the generic structure of a hortatory exposition?", ["Thesis, arguments, reiteration", "Orientation, complication, resolution", "Title, list, conclusion", "Thesis, arguments, recommendation"], 3],
          ["Which language features are common in a hortatory exposition?", ["Noun phrases for characters", "Reported speech for dialogue", "Modal verbs and imperatives", "Action verbs in the simple past"], 2],
          ["What does the recommendation part do?", ["It gives the title of the text", "It tells readers what they should do", "It introduces the characters", "It retells a past event"], 1],
          ["Which persuasion strategies do we learn in Unit 4?", ["Logos, pathos and ethos", "Orientation, complication and resolution", "Past, present and future", "Character, setting and conflict"], 0],
          ["Which topic fits Unit 4?", ["Space travel", "Ancient kings", "Fashion trends", "A healthy lifestyle"], 3]
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
          ["What does the thesis of a hortatory exposition state?", ["The writer's position on the issue", "The steps to follow", "The characters of the story", "A list of materials"], 0],
          ["In a hortatory exposition, the arguments…", ["retell events in order", "describe the characters", "list the materials needed", "give reasons and evidence why action is needed"], 3],
          ["\"Concentrate\" means…", ["to cook food in hot oil", "to choose between two things", "to give all your attention to one thing", "to feel very sleepy"], 2],
          ["Which sentence is correct?", ["She must sleeps early.", "She ought to sleep early.", "She ought sleep early.", "She should to sleep early."], 1],
          ["Which modal is the strongest (a rule or a big risk)?", ["must", "should", "ought to", "need to"], 0],
          ["Which is the correct negative advice?", ["You should not to skip breakfast.", "You not should skip breakfast.", "You should not skipping breakfast.", "You should not skip breakfast."], 3],
          ["Which sentence is a negative imperative?", ["Not stay up late.", "Don't staying up late.", "Do not stay up late.", "You do not stay up late."], 2],
          ["It is recommended that the school ___ a new rule.", ["to add", "add", "adds", "adding"], 1],
          ["Which persuasion strategy appeals to feelings?", ["Pathos", "Logos", "Ethos", "Thesis"], 0],
          ["Quoting a doctor with 20 years of experience is an example of…", ["logos", "pathos", "reiteration", "ethos"], 3],
          ["Which criterion asks, \"Do the people involved agree?\"", ["Affordable", "Effective", "Acceptable", "Realistic"], 2],
          ["A specific recommendation answers which questions?", ["Past? Present? Future? Never?", "Who? What? When? How much?", "Why? Why? Why? Why?", "Where? Which? Whose? Whom?"], 1]
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
