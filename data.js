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
    { t: "Grammar Corner", url: "grammar.html" },
    { t: "Get Motivated", url: yt("motivational video for students learning english") },
    { t: "Why Learn English?", url: yt("why learn english importance for students") },
    { t: "Learn With Songs", url: yt("english songs with lyrics for learning") },
    { t: "Speaking Practice", url: yt("english speaking practice for high school students") }
  ],
  driveLinks: [
    { t: "Semester 1 Files", url: "#" },
    { t: "Semester 2 Files", url: "#" }
  ],
  // Unit yang disembunyikan dari murid. Kosongkan jadi [] atau hapus "u3", "u4" untuk menampilkannya lagi.
  sembunyi: ["u3", "u4"],
  // Slide materi (PDF) per unit. Format: ["nama materi", "judul slide", "file PDF di folder slides/", jumlah slide]
  slides: {
    u1: [
      ["Legend Structure, Vocabulary & Main Idea", "The Legend Detectives", "slides/Materi Siswa Unit 1 - TP 1.1 The Legend Detectives.pdf", 10],
      ["Simple Past, Action Verbs & Sequence Words", "The Legend Toolkit", "slides/Materi Siswa Unit 1 - TP 1.2 The Legend Toolkit.pdf", 14],
      ["Text Evaluation & Text-to-World Connection", "Evaluate & Reflect", "slides/Materi Siswa Unit 1 - TP 1.3 Evaluate and Reflect.pdf", 6]
    ],
    u2: [
      ["Story Structure & Story Elements", "The Mirror of Selara", "slides/unit2-tp2-1.pdf", 18],
      ["Noun Phrases, Clauses & Reported Speech", "Language Features", "slides/unit2-tp2-2.pdf", 21],
      ["Group Project: Motion Comic", "Project Day", "slides/unit2-tp2-3.pdf", 20]
    ],
    u3: [
      ["Because, So, Although & Text Structure", "Why Are Our Classrooms So Hot?", "slides/unit3-tp3-1.pdf", 30],
      ["Cause and Effect & Claim, Evidence, Reasoning", "Let the Data Speak for You", "slides/unit3-tp3-2.pdf", 28],
      ["Evaluating Arguments: Data, Source & Bias", "Is This Argument Strong Enough?", "slides/unit3-tp3-3.pdf", 19],
      ["Final Project: Analytical Exposition", "Your Own Final Project", "slides/unit3-tp3-4.pdf", 16]
    ],
    u4: [
      ["Hortatory Structure, Health Words & Survey Data", "Why Should We Live Healthy?", "slides/unit4-tp4-1.pdf", 24],
      ["Modal Verbs, Imperatives & Persuasion", "The Language of Advice and Action", "slides/unit4-tp4-2.pdf", 25],
      ["Judging & Improving Recommendations", "Is Our Idea Realistic Enough?", "slides/unit4-tp4-3.pdf", 14],
      ["Final Project: Hortatory Exposition", "Your Own Campaign", "slides/unit4-tp4-4.pdf", 17]
    ]
  },
  semester: [
    { nama: "Semester 1", sub: "Stories: legends and fairy tales", units: ["u1", "u2"] },
    { nama: "Semester 2", sub: "Opinion texts: analytical and hortatory exposition", units: ["u3", "u4"] }
  ],
  units: {
    // ------------------------------------------------------------- UNIT 1
    u1: {
      no: "01", judul: "Are We Connected to Nature?", jenis: "Narrative Text · Legend", warna: "#2f9e44", emoji: "",
      desk: "Learn how a legend is built, nature words, the simple past, action verbs, and sequence words. Project: a picture story poster.",
      tags: ["Legend", "Simple Past", "Sequence Words", "Poster Project"],
      materi: `
        <h3>What is a Legend?</h3><p>A <b>legend</b> is a traditional narrative story about the origin of a place, often with magical elements and a moral value. Examples: <i>The Legend of the Weeping Lake</i>, <i>The Legend of Telaga Lestari</i>, <i>The Legend of Pulau Setokok (Batam)</i>.</p>
        <h3>Generic Structure</h3><ul><li><b>Orientation</b>: who, when, where</li><li><b>Complication</b>: the problem/conflict</li><li><b>Resolution</b>: how the problem ends</li><li><b>Re-orientation/Coda</b>: moral value or closing</li></ul>
        <h3>Characteristics of a Legend</h3><ul><li>Magical/supernatural elements</li><li>Explains the origin of a place (etiological function)</li><li>Real setting</li><li>Moral message</li><li>Passed down orally</li></ul>
        <h3>Language Features</h3><ul><li><b>Simple past tense</b>: lived, cried, became, went</li><li><b>Action verbs</b>: cut, ran, planted, destroyed</li><li><b>Sequence words</b>: once upon a time, one day, then, after that, finally</li></ul>
        <p><b>Vocabulary:</b> ecosystem, habitat, deforestation, pollution, flood, drought, biodiversity, sustainable.</p>`,
      aktivitas: [
        { id: "u1-asesmen", t: "Warm-up Unit 1", ic: "", type: "quiz", note: "Let's think first", hook: "You are ready to explore legends and nature in Unit 1!", soal: [
          ["Have you ever heard a story about how a lake, a mountain or an island got its name?", ["Yes, many times","Yes, once or twice","No, but I want to hear one","I am not sure"], -1, "Those stories are called legends. A legend explains where a real place, animal or thing comes from."],
          ["In many old stories, people who hurt nature get a big problem. Why do you think storytellers did this?", ["To teach us to protect nature","To make the story scary","To make the story longer","I have another idea"], -1, "Legends often carry a message about respecting nature. Many of them also have magic or a guardian spirit."],
          ["When you hear \"Once upon a time...\", what do you expect?", ["A story from the past","A news report","A set of instructions","A weather forecast"], -1, "A story is starting! A legend usually has a beginning, a problem and a solution."],
          ["Tell a friend what you did yesterday. Which words will you use?", ["went, saw, ate","go, see, eat","going, seeing, eating","will go, will see"], -1, "We use the past form for things that already happened. Legends are told in the simple past, too."],
          ["You are telling a story. Which words help your friend follow the order of events?", ["First, then, finally","Because, so, but","Very, quite, really","Here, there, everywhere"], -1, "Words like first, then and finally show the order. They are called sequence words."],
          ["Why do people tell legends about a place to their children and grandchildren?", ["To pass down culture and values","To sell a new product","To give road directions","I am not sure"], -1, "A legend entertains, but it also keeps the culture and values of a community alive."],
          ["A story starts by telling who the characters are and where they live. What part is that?", ["The orientation","The complication","The resolution","The conclusion"], -1, "The beginning is called the orientation. Then comes a complication, and a resolution ends the problem."],
          ["In a story, a big problem suddenly appears. What do you want to happen next?", ["The hero solves it","The story just stops","Nobody does anything","Another problem comes"], -1, "The problem is the complication, and the solution is the resolution. Most legends follow this pattern."],
          ["Which words make a character come alive in a story?", ["Brave, kind, clever","Table, book, pen","Run, jump, eat","Under, over, near"], -1, "Adjectives describe characters and places. They help readers picture the story."],
          ["Which sentence do you think comes from a legend?", ["Long ago, a giant lived by the sea.","Add two cups of flour slowly.","Today the weather is sunny.","Please sign your name below."], -1, "Time words like long ago and once upon a time place a legend in the past."]
        ]},
        { id: "u1-sort", t: "Lab Story Structure", ic: "", type: "sort", note: "Put the story in order", intro: "Put the parts of \"The Legend of Telaga Lestari\" in the right order.", items: [
          "Orientation — Long ago, a small village stood near a green forest. The villagers lived happily and took care of the trees.",
          "Complication — One day, greedy people came and cut down the trees. The river dried up and the animals lost their homes.",
          "Complication — A great drought hit the village. The people cried and prayed for water.",
          "Resolution — A kind girl planted seeds every day. Finally, rain fell and a clear lake appeared where she cried.",
          "Re-orientation — The people named it Telaga Lestari and promised to protect nature forever."
        ]},
        { id: "u1-fill", t: "Lab Past Tense Builder", ic: "", type: "fill", note: "Type the past form", intro: "Write the past form of the verb in brackets.", soal: [
          ["The villagers (live) ___ near the forest.", "lived"], ["One day, a big storm (come) ___.", "came"], ["The old man (cut) ___ the tallest tree.", "cut"],
          ["The girl (cry) ___ all night.", "cried"], ["The water (become) ___ a lake.", "became"], ["They (plant) ___ new trees.", "planted"],
          ["The animals (run) ___ away from the fire.", "ran"], ["The king (find) ___ a magic stone.", "found"]
        ]},
        { id: "u1-classify", t: "Lab Word Explorers", ic: "", type: "classify", note: "Sort the words", intro: "Put each word in the right group.", groups: ["Action Verb", "Sequence Word", "Environment Noun"], items: [
          ["planted", 0], ["destroyed", 0], ["ran", 0], ["first", 1], ["after that", 1], ["finally", 1], ["habitat", 2], ["drought", 2], ["ecosystem", 2]
        ]},
        { id: "u1-drag1", t: "Drag & Drop: The Lost Spring", ic: "", type: "drag", note: "Drag the vocabulary and past tense words", intro: "Drag each word into the right gap to complete the legend. Use nature vocabulary and the simple past tense.", text: "Long ago, a small village [[stood]] beside a thick green forest. The villagers [[lived]] happily and [[protected]] the [[forest]] with great care.\nOne day, greedy men [[cut]] the tall trees and the river [[dried]] up.\nA kind girl [[planted]] new seeds, and a clear [[spring]] appeared.", extra: ["stand","live"]},
        { id: "u1-drag2", t: "Drag & Drop: The Mountain Giant", ic: "", type: "drag", note: "Drag the story signals", intro: "Drag each signal phrase into the legend. These phrases show the structure of a story.", text: "[[Once upon a time]], a giant lived on a tall mountain and guarded the rice fields.\n[[One day]], a terrible storm destroyed all the fields.\n[[Suddenly]], the giant stood up and held back the water with his hands.\n[[In the end]], the village was safe, and the giant turned into a mountain. [[From that day on]], people have called it Giant Mountain.", extra: ["Next week","Yesterday"]},
        { id: "u1-game", t: "English Master Game · Unit 1", ic: "", type: "game", note: "Answer 8 questions to win", soal: [
          ["Which part introduces the characters?", ["Orientation", "Complication", "Resolution", "Coda"], 0],
          ["The past form of \"see\" is…", ["seed", "saw", "seen", "sees"], 1],
          ["\"The river dried up and the fish died.\" This is part of the…", ["Orientation", "Complication", "Coda", "Title"], 1],
          ["A legend often explains…", ["how to cook food", "the origin of a place", "today's weather", "a scientific fact"], 1],
          ["Choose the correct sentence.", ["She cry yesterday.", "She cried yesterday.", "She crying yesterday.", "She cries yesterday."], 1],
          ["\"Finally\" is used to show…", ["the first event", "the last event", "a reason", "a contrast"], 1],
          ["The moral value of a legend about cutting trees is probably…", ["Trees are useless", "We must protect nature", "Rivers are dangerous", "Money is everything"], 1],
          ["Which is NOT a characteristic of a legend?", ["Magical elements", "Real setting", "Moral value", "Statistical data"], 3]
        ]},
        { id: "u1-prequiz", t: "Pre-quiz Unit 1", ic: "", type: "quiz", note: "Check the topics before the test", soal: [
          ["What is the correct order of the generic structure of a legend?", ["Orientation, complication, resolution","Complication, orientation, resolution","Resolution, complication, orientation","Orientation, resolution, complication"], 0],
          ["Which part of a legend introduces the characters and the setting?", ["Complication","Orientation","Resolution","Re-orientation"], 1],
          ["What is the main purpose of a legend?", ["To report news about today","To describe a product for sale","To explain how a place or thing began","To give instructions for a task"], 2],
          ["Which word means the natural home of a plant or an animal?", ["Drought","Habitat","Pollution","Erosion"], 1],
          ["Which verb form do we use to tell the events in a legend?", ["Simple present tense","Present continuous","Future tense","Simple past tense"], 3],
          ["Which sentence uses the correct past form?", ["The villagers plant new trees yesterday.","The villagers planted new trees.","The villagers plants new trees.","The villagers planting new trees."], 1],
          ["What is the past form of the irregular verb \"begin\"?", ["began","begun","beginned","begins"], 0],
          ["Which group contains only sequence words?", ["Brave, kind, clever","Forest, river, lake","First, then, finally","Run, jump, plant"], 2],
          ["Which sentence has correct subject-verb agreement?", ["The animals was hungry.","The old man were tired.","The river were clean.","The villagers were afraid."], 3],
          ["A legend about nature is effective when it has...", ["no problem for the characters","a clear message about caring for nature","only very difficult words","no setting at all"], 1]
        ]},
        { id: "u1-latihan", t: "Practice Unit 1", ic: "", type: "quiz", note: "Mixed questions", soal: [
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
      inspirasi: [["Mangrove Forests in Batam", yt("hutan mangrove batam")]]
    },
    // ------------------------------------------------------------- UNIT 2
    u2: {
      no: "02", judul: "Discovering Ourselves", jenis: "Narrative Text · Fairy Tale & Fantasy", warna: "#8e44ff", emoji: "",
      desk: "Learn story elements, inner and outer conflict, noun phrases, adverbs, and reported speech. Project: a motion comic.",
      tags: ["Fairy Tale", "Story Elements", "Reported Speech", "Motion Comic"],
      materi: `
        <h3>Fairy Tale & Fantasy</h3><p>Stories with magical worlds and characters. Behind the magic, they show how a character <b>changes and discovers who they are</b>.</p>
        <h3>Story Elements</h3><ul><li><b>Characters</b> (protagonist, antagonist)</li><li><b>Setting</b> (time & place)</li><li><b>Conflict</b>: <i>internal</i> (inside the character: fear, doubt) and <i>external</i> (with others, nature, society)</li><li><b>Resolution</b> & <b>Coda</b> (lesson learned)</li></ul>
        <h3>Language Features</h3><ul><li><b>Noun phrase</b>: a brave young princess</li><li><b>Adverbs</b>: quickly, bravely, suddenly</li><li><b>Reduced adjective clause</b>: the girl <i>(who was) sitting</i> by the window → the girl sitting by the window</li><li><b>Reported speech</b>: "I am lost," she said. → She said that she was lost.</li></ul>`,
      aktivitas: [
        { id: "u2-asesmen", t: "Warm-up Unit 2", ic: "", type: "quiz", note: "Let's think first", hook: "You are ready to discover yourself through stories in Unit 2!", soal: [
          ["Have you ever felt unsure about who you really are or what you are good at?", ["Yes, often","Sometimes","Not really","I never think about it"], -1, "That feeling is very common! Many fairy tales and fantasy stories are about a character who slowly learns who they really are."],
          ["In a fantasy story, you find a magic mirror that answers one question. What do you ask?", ["Who am I really?","What will happen tomorrow?","Where is the treasure?","I would run away"], -1, "In stories, magic often helps a character face their own doubts. This is called self-discovery."],
          ["Which problem is harder to beat?", ["A monster outside","A fear inside me","Both are hard","It depends"], -1, "A problem outside the character is an external conflict. A fear or doubt inside is an internal conflict. Good stories often have both."],
          ["Which sentence helps you imagine the character better?", ["A girl lived in a village.","A quiet girl from a small village lived near an old forest.","A girl lived.","The girl lived there."], -1, "Adding details around a noun makes a noun phrase. It makes a story clearer and more interesting."],
          ["Your friend says, \"I am nervous.\" How do you tell another friend what she said?", ["She said that she was nervous.","She said I am nervous.","She nervous said.","She says was nervous."], -1, "When we report what someone said, we change the pronoun and move the tense back. That is reported speech."],
          ["Why do so many fairy tales end with the hero learning a lesson?", ["To share a moral message","To make the story shorter","To confuse the readers","Nobody knows why"], -1, "Fairy tales carry a moral value, a lesson we can use in real life."],
          ["In most stories, who changes the most from beginning to end?", ["The main character","The narrator","The reader","The setting"], -1, "The main character grows and learns. This is called character development."],
          ["Which opening gives you a clue that it is a fairy tale?", ["In a kingdom far away...","Breaking news today...","Dear Sir or Madam...","Step one: open the box"], -1, "Fairy tales often begin with a faraway place and an unknown time."],
          ["Which of these could happen only in a fantasy story?", ["A mirror that talks","A bus that is late","A test on Monday","A rainy afternoon"], -1, "Fantasy has magic or impossible things that do not exist in real life."],
          ["How do you feel when the hero faces a big challenge?", ["Excited to see what happens","Bored and ready to skip","Confused about the plot","I do not feel anything"], -1, "A big challenge builds tension. It is the complication that keeps readers reading."]
        ]},
        { id: "u2-classify", t: "Lab Conflict Detector", ic: "", type: "classify", note: "Inner or outer?", intro: "Is the conflict internal or external?", groups: ["Internal Conflict", "External Conflict"], items: [
          ["Mira is afraid she is not good enough to join the team.", 0], ["Leo cannot decide whether to tell the truth.", 0], ["The prince doubts his own courage.", 0],
          ["A dragon attacks the village.", 1], ["Two friends argue about a secret.", 1], ["A storm destroys the girl's house.", 1]
        ]},
        { id: "u2-reported", t: "Lab Reported Speech", ic: "", type: "quiz", note: "Change what people said", soal: [
          ["\"I am happy,\" said Ana. → Ana said that she ___ happy.", ["is", "was", "were", "be"], 1],
          ["\"I can fly,\" said the fairy. → The fairy said that she ___ fly.", ["can", "could", "will", "may"], 1],
          ["\"I will help you,\" he told me. → He told me that he ___ help me.", ["will", "would", "shall", "can"], 1],
          ["\"I lost my way,\" said the boy. → The boy said that he ___ his way.", ["lost", "had lost", "loses", "has lost"], 1],
          ["\"We are in the forest,\" they said. → They said that they ___ in the forest.", ["are", "were", "was", "be"], 1]
        ]},
        { id: "u2-sort", t: "Lab Motion Comic Planner", ic: "", type: "sort", note: "Put the panels in order", intro: "Put the comic panels in the right order.", items: [
          "Orientation — Rina, a shy girl, loved drawing but never showed anyone her work.",
          "Complication — Her class held an art competition, but she was afraid her friends would laugh at her.",
          "Resolution — Encouraged by her teacher, Rina joined and her drawing won second place.",
          "Coda — Rina learned that believing in herself was the first step to growing up."
        ]},
        { id: "u2-drag1", t: "Drag & Drop: Mia and Her Art", ic: "", type: "drag", note: "Drag the present tense and language features", intro: "Drag each word into the right gap. Use the simple present tense, a describing word and reported speech.", text: "Mia [[is]] a quiet girl who [[loves]] drawing. She [[draws]] a [[tiny]] castle in her notebook every day.\nHer friend [[said]] that she [[was]] very creative. Now Mia [[wants]] to show her art to the whole school.", extra: ["are","were"]},
        { id: "u2-drag2", t: "Drag & Drop: The Shy Prince", ic: "", type: "drag", note: "Drag the story signals", intro: "Drag each signal phrase into the fairy tale. These phrases show how the story moves.", text: "[[Once upon a time]], a shy prince lived in a faraway castle. He was afraid to speak in front of people.\n[[One day]], a magic mirror appeared in his room.\n[[Suddenly]], it said that he was braver than he thought.\n[[At last]], the prince stood up and spoke to the whole kingdom. [[From that day on]], he was never afraid again.", extra: ["Last year","Next week"]},
        { id: "u2-game", t: "English Master Game · Unit 2", ic: "", type: "game", note: "Answer 8 questions to win", soal: [
          ["The main character of a story is called the…", ["antagonist", "protagonist", "narrator", "audience"], 1],
          ["\"Suddenly\" is a(n)…", ["noun", "adjective", "adverb", "verb"], 2],
          ["\"The boy wearing a red hat\" contains a…", ["reduced adjective clause", "question tag", "passive voice", "conditional"], 0],
          ["Where and when a story happens is the…", ["plot", "setting", "theme", "coda"], 1],
          ["A character fighting a monster is an example of…", ["internal conflict", "external conflict", "resolution", "orientation"], 1],
          ["\"I'm tired,\" she said. → She said that she ___ tired.", ["is", "was", "am", "be"], 1],
          ["A motion comic is…", ["a printed newspaper", "a digital comic with movement and sound", "a song", "a speech"], 1],
          ["Fairy tales often teach us about…", ["math formulas", "growing up and values", "weather reports", "recipes"], 1]
        ]},
        { id: "u2-prequiz", t: "Pre-quiz Unit 2", ic: "", type: "quiz", note: "Check the topics before the test", soal: [
          ["Which part of a narrative tells how the problem is solved?", ["Orientation","Complication","Resolution","Introduction"], 2],
          ["What does the orientation of a story usually tell us?", ["The final lesson only","The writer's opinion","Steps to follow","The characters, place and time"], 3],
          ["Which sentence shows an internal conflict?", ["Mia fought a storm on the mountain.","Mia doubted herself before she spoke on stage.","A giant blocked the bridge.","Mia lost her bag on the bus."], 1],
          ["Which sentence shows an external conflict?", ["The boy felt ashamed of his grades.","She worried that nobody liked her.","He argued with a classmate who laughed at him.","She wondered if she was good enough."], 2],
          ["What is a turning point in a story?", ["The first sentence of the story","The title of the story","The last word of the story","The moment that starts to change the character"], 3],
          ["How can we show that a character has changed?", ["Compare the character at the beginning and at the end","Count the paragraphs in the story","Look only at the title","Check the length of the sentences"], 0],
          ["Which word means not sure about your own ability?", ["Confident","Insecure","Proud","Careless"], 1],
          ["Which sentence is the reduced form of \"The girl who is sitting alone is my friend\"?", ["The girl sat alone is my friend.","The girl who sitting alone is my friend.","The girl sitting alone is my friend.","The girl is sitting alone my friend."], 2],
          ["Mia said, \"I am nervous.\" Which is the correct reported speech?", ["Mia said that I was nervous.","Mia said that she was nervous.","Mia said that she am nervous.","Mia said that she will nervous."], 1],
          ["Which one is a noun phrase?", ["a shy girl with a sketchbook","runs very quickly","because she was afraid","slowly and quietly"], 0]
        ]},
        { id: "u2-latihan", t: "Practice Unit 2", ic: "", type: "quiz", note: "Mixed questions", soal: [
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
      inspirasi: [["Short Animated Films", yt("short animated film self discovery")]]
    },
    // ------------------------------------------------------------- UNIT 3
    u3: {
      no: "03", judul: "The Importance of Environmental Protection", jenis: "Analytical Exposition", warna: "#0a84ff", emoji: "",
      desk: "Learn to give an opinion with reasons and data, the simple present, and words like because and therefore. Project: Green Street Journalism.",
      tags: ["Thesis", "CER", "Causal Conjunctions", "Green Journalism"],
      materi: `
        <h3>Analytical Exposition</h3><p>A text that presents the writer's <b>opinion</b> about an issue and supports it with <b>arguments</b>, to convince readers that the issue is important.</p>
        <h3>Generic Structure</h3><ul><li><b>Thesis</b>: the writer's position</li><li><b>Arguments</b>: reasons supported by data</li><li><b>Reiteration</b>: restating the thesis</li></ul>
        <h3>Claim–Evidence–Reasoning (CER)</h3><ul><li><b>Claim</b>: Plastic waste harms marine life.</li><li><b>Evidence</b>: Millions of tons of plastic enter the ocean every year.</li><li><b>Reasoning</b>: Animals mistake plastic for food, so they get sick or die.</li></ul>
        <h3>Language Features</h3><ul><li>Simple present tense: Trees <b>absorb</b> carbon dioxide.</li><li>Causal conjunctions: <b>because, due to, therefore, thus, as a result</b></li><li>Academic vocabulary: biodiversity, sustainability, ecosystem, emission</li></ul>`,
      aktivitas: [
        { id: "u3-asesmen", t: "Warm-up Unit 3", ic: "", type: "quiz", note: "Let's think first", hook: "You are ready to build strong arguments in Unit 3!", soal: [
          ["Is plastic waste at your school a big problem?", ["Yes, a very big one","A small problem","Not a problem","I have not thought about it"], -1, "A text that argues for a position on an issue is called an analytical exposition. It starts with the writer's position, called the thesis."],
          ["Which sentence is more convincing?", ["Everyone knows plastic is bad.","Plastic takes hundreds of years to break down.","Plastic is just terrible.","I do not like plastic."], -1, "Facts and data are stronger than opinions. A good argument always uses evidence."],
          ["Your friend says, \"Obviously, my idea is the only answer!\" Do you trust it?", ["Yes, he sounds sure","Not yet, I want to see proof","Only if many people agree","I do not know"], -1, "Words like obviously, only and everyone can make an argument weak. A careful writer shows data and uses careful words."],
          ["It rained heavily, ___ the road was flooded.", ["so","but","or","although"], -1, "Words like so, therefore and because link a reason to a result. You will use them to explain why things happen."],
          ["Why do people write essays that argue for something, like longer sleep for students?", ["To convince readers to agree","To tell a funny story","To list some ingredients","To say hello to someone"], -1, "The purpose of an analytical exposition is to persuade readers that an idea is important or true."],
          ["When you debate with a friend, what do you usually say first?", ["My opinion on the topic","My final conclusion only","A thank you message","A funny joke"], -1, "The first part is the thesis, which is the writer's position on the issue."],
          ["After you share your opinion, what comes next?", ["Reasons and proof","A completely new topic","A long greeting","A cooking recipe"], -1, "Next come the arguments. Each argument has a reason supported by evidence."],
          ["At the end of a debate, what do you usually do?", ["Repeat my position","Start a new topic","Stay completely silent","Change the subject"], -1, "The reiteration at the end restates the writer's position in a strong way."],
          ["Which one sounds more like a real argument?", ["Firstly, ... Secondly, ...","Once upon a time, ...","Mix the sugar and ...","Dear friend, I am ..."], -1, "Words like firstly, secondly and in conclusion help organize arguments."],
          ["Which sentence shows a writer's opinion?", ["Schools should ban plastic bottles.","The bottle is blue and small.","I drank some water today.","Plastic is a kind of material."], -1, "Words like should, must and I believe state an opinion, so the writer can defend it."]
        ]},
        { id: "u3-sort", t: "Lab Text Structure", ic: "", type: "sort", note: "Build the text", intro: "Put the paragraphs in the right order.", items: [
          "Thesis — Protecting the environment around our school is very important for everyone.",
          "Argument 1 — Firstly, trees around the school reduce heat and make the air cleaner.",
          "Argument 2 — Moreover, a clean environment prevents diseases such as dengue fever.",
          "Argument 3 — Furthermore, a green school helps students feel calm and focus better.",
          "Reiteration — Therefore, it is clear that protecting our school environment is essential."
        ]},
        { id: "u3-cer", t: "Lab CER Builder", ic: "", type: "classify", note: "Claim, evidence, or reason?", intro: "Is it a Claim, Evidence, or Reasoning?", groups: ["Claim", "Evidence", "Reasoning"], items: [
          ["Plastic bags should be reduced in our canteen.", 0], ["Mangrove forests must be protected.", 0],
          ["Our class survey found 200 plastic bags thrown away in one week.", 1], ["Data shows mangroves can store up to four times more carbon than other forests.", 1],
          ["Because plastic takes hundreds of years to decompose, it fills our land and sea.", 2], ["Since mangroves protect the coast from waves, losing them puts villages at risk.", 2]
        ]},
        { id: "u3-drag1", t: "Drag & Drop: Plastic at School", ic: "", type: "drag", note: "Drag the vocabulary and present tense words", intro: "Drag each word into the right gap to build a strong argument. Use present tense verbs, modals and topic vocabulary.", text: "In my opinion, schools [[should]] ban single-use plastic. Plastic [[takes]] hundreds of years to break down, so it [[harms]] the [[environment]].\nStudents [[throw]] away hundreds of bottles every week. Schools [[must]] act now.", extra: ["took","could"]},
        { id: "u3-drag2", t: "Drag & Drop: Later School Start", ic: "", type: "drag", note: "Drag the linking words", intro: "Drag each linking word into the argument. These words connect reasons and results.", text: "I strongly believe that school should start later. [[Because]] teenagers need eight hours of sleep, early classes make them tired.\n[[For example]], a survey found that most students feel sleepy before nine o'clock. [[In addition]], tired students make more mistakes.\n[[As a result]], their grades drop. [[Consequently]], schools should change the timetable.", extra: ["Long ago","Suddenly"]},
        { id: "u3-game", t: "English Master Game · Unit 3", ic: "", type: "game", note: "Answer 8 questions to win", soal: [
          ["The last part of an analytical exposition is the…", ["Thesis", "Argument", "Reiteration", "Resolution"], 2],
          ["Choose the causal conjunction.", ["however", "due to", "although", "whereas"], 1],
          ["\"Trees absorb carbon dioxide.\" The verb is in…", ["simple present", "simple past", "future", "past perfect"], 0],
          ["A credible source is usually…", ["an anonymous meme", "a scientific journal or official report", "a random comment", "a rumor"], 1],
          ["\"Moreover\" is used to…", ["add an argument", "show contrast", "end the text", "show time"], 0],
          ["Evidence in an argument should be…", ["data or facts", "only feelings", "jokes", "questions"], 0],
          ["Sustainability means…", ["using resources so they last for the future", "wasting energy", "building more factories", "cutting trees"], 0],
          ["Green Street Journalism produces…", ["a song", "a written text and a campaign video", "a poem", "a comic"], 1]
        ]},
        { id: "u3-prequiz", t: "Pre-quiz Unit 3", ic: "", type: "quiz", note: "Check the topics before the test", soal: [
          ["What is the generic structure of an analytical exposition?", ["Orientation, complication, resolution","Thesis, arguments, reiteration","Goal, materials, steps","Thesis, arguments, recommendation"], 1],
          ["What does the thesis do in an analytical exposition?", ["It tells the story of a hero","It lists the steps of a process","It states the writer's position on the issue","It thanks the readers"], 2],
          ["What is the purpose of the reiteration?", ["To introduce the topic","To list new facts","To tell a short story","To restate the writer's position at the end"], 3],
          ["Which word means all the living things and their environment working together?", ["Pollution","Landfill","Ecosystem","Deforestation"], 2],
          ["Which word means using resources so that future generations can still use them?", ["Extinction","Sustainability","Deforestation","Pollution"], 1],
          ["Which sentence uses the simple present tense correctly?", ["Plastic pollutes the sea.","Plastic pollute the sea.","Plastic polluting the sea.","Plastic polluted the sea now."], 0],
          ["Which word can start a sentence to show a result?", ["Although","Unless","While","Therefore"], 3],
          ["Which sentence uses \"due to\" correctly?", ["Due to heavy rain, the school yard flooded.","Due to the school yard flooded, it rained.","The yard flooded due to it rains.","Due to flooded, the heavy rain."], 0],
          ["In Claim-Evidence-Reasoning, what is the evidence?", ["The writer's opinion","Data or facts that support the claim","The title of the text","A greeting to the reader"], 1],
          ["Which source is the most credible for data about waste?", ["A rumor from social media","A friend's guess","A government environment report","An advertisement for a product"], 2]
        ]},
        { id: "u3-latihan", t: "Practice Unit 3", ic: "", type: "quiz", note: "Mixed questions", soal: [
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
      inspirasi: [["Environmental Campaign Videos", yt("environmental campaign video students")]]
    },
    // ------------------------------------------------------------- UNIT 4
    u4: {
      no: "04", judul: "Why Should We Live a Healthy Lifestyle?", jenis: "Hortatory Exposition", warna: "#ff5e3a", emoji: "",
      desk: "Learn to persuade people, health words, modals like should and must, and logos, pathos, ethos. Project: a podcast.",
      tags: ["Recommendation", "Modals", "Logos-Pathos-Ethos", "Podcast"],
      materi: `
        <h3>Hortatory Exposition</h3><p>A text that persuades readers that something <b>should or should not be done</b>.</p>
        <h3>Generic Structure</h3><ul><li><b>Thesis</b></li><li><b>Arguments</b></li><li><b>Recommendation</b>: what readers should do</li></ul>
        <h3>Persuasive Strategies</h3><ul><li><b>Logos</b> (logic & data): Studies show teenagers need 8–10 hours of sleep.</li><li><b>Pathos</b> (emotion): Imagine how your parents feel when you are sick.</li><li><b>Ethos</b> (credibility): According to the WHO / doctors…</li></ul>
        <h3>Language Features</h3><ul><li>Modals: <b>should, must, need to, ought to</b></li><li>Persuasive phrases: <b>Let's…, It is important to…</b></li><li>Health vocabulary: hydration, nutrition, balanced diet, exercise, sleep, stress</li></ul>`,
      aktivitas: [
        { id: "u4-asesmen", t: "Warm-up Unit 4", ic: "", type: "quiz", note: "Let's think first", hook: "You are ready to give strong advice in Unit 4!", soal: [
          ["How many hours do you usually sleep on school nights?", ["Less than 6 hours","6 to 7 hours","About 8 hours","More than 8 hours"], -1, "Teenagers need about 8 hours. A text that urges readers to change a habit is called a hortatory exposition."],
          ["Your friend drinks three sweet drinks every day. What would you say?", ["You should drink more water.","Do whatever you want.","You must stop right now!","Nothing"], -1, "Words like should, must and ought to give advice or rules. They are called modal verbs."],
          ["What makes you change a habit the most?", ["A scary fact","A story about someone I know","Advice from a doctor","Nothing changes my habits"], -1, "Writers persuade with facts (logos), feelings (pathos) and trust (ethos). You will learn to use all three."],
          ["Which advice is easier to follow?", ["Never eat sugar again.","Drink one more glass of water every day.","Change your whole life tomorrow.","Do everything perfectly."], -1, "A good recommendation is realistic. It says who should do what, and when."],
          ["Why do doctors and teachers write articles that tell teens to change habits?", ["To persuade readers to act","To tell a funny legend","To describe a nice place","To say goodbye to friends"], -1, "The purpose of a hortatory exposition is to persuade readers that something should or should not be done."],
          ["Before giving advice, what should a writer state first?", ["The big idea or thesis","A funny joke","The final tip only","Nothing at all"], -1, "A hortatory exposition starts with a thesis, the writer's view about what we should do."],
          ["Which sentence makes you want to take action?", ["We should exercise every day.","Exercise is a kind of sport.","He exercised yesterday morning.","The gym opens at six."], -1, "Hortatory texts use words like should, must and need to."],
          ["At the end of a talk like this, what do you usually say?", ["I recommend that you try this","Once upon a time there was","Thank you for the recipe","I do not know yet"], -1, "The last part is the recommendation, which says what the reader should do."],
          ["Which expression tells your friend that something is very important?", ["It is important that we sleep early","We slept early last night","He sleeps early on Mondays","Sleep was early yesterday"], -1, "Expressions like it is important that and it is recommended that make advice stronger."],
          ["Which reason convinces you more to drink water?", ["Water helps your brain focus.","Water is just good.","Everybody does it.","Because I said so."], -1, "Good reasons use facts and logic. A hortatory text gives arguments before the recommendation."]
        ]},
        { id: "u4-classify", t: "Lab Logos · Pathos · Ethos", ic: "", type: "classify", note: "Spot the strategy", intro: "Which strategy does each sentence use?", groups: ["Logos (facts)", "Pathos (feelings)", "Ethos (trust)"], items: [
          ["Research shows that 30 minutes of exercise lowers stress by 25%.", 0], ["Teenagers who sleep 8 hours score higher on tests.", 0],
          ["Imagine how sad your family would be if you got sick.", 1], ["Don't let junk food steal your dreams!", 1],
          ["According to the World Health Organization, teens need daily physical activity.", 2], ["As a doctor with 20 years of experience, I recommend eating more vegetables.", 2]
        ]},
        { id: "u4-sort", t: "Lab Podcast Script", ic: "", type: "sort", note: "Put the script in order", intro: "Put the podcast script in the right order.", items: [
          "Thesis — Hi listeners! Today we believe that every student should drink enough water every day.",
          "Argument 1 — First, water keeps our brain focused. Studies show dehydration lowers concentration.",
          "Argument 2 — Second, water helps our body recover after sports and keeps our skin healthy.",
          "Recommendation — So, let's bring a water bottle to school and stop buying sugary drinks!"
        ]},
        { id: "u4-drag1", t: "Drag & Drop: Healthy Habits", ic: "", type: "drag", note: "Drag the words into the advice", intro: "Drag each word into the right gap. Use the words that give advice and rules.", text: "Teenagers [[should]] sleep at least eight hours every night. You [[must]] turn off your phone before bed.\nIt is [[important]] that you drink enough water. You [[ought to]] eat more vegetables, and you [[should not]] skip breakfast.", extra: ["did","might"]},
        { id: "u4-drag2", t: "Drag & Drop: Move Every Day", ic: "", type: "drag", note: "Drag the linking phrases", intro: "Drag each phrase into the text. They show the thesis, the arguments and the recommendation.", text: "[[In my opinion]], students need healthy habits. [[First]], research shows that exercise improves focus.\n[[Moreover]], a doctor says that sleep strengthens memory.\n[[Therefore]], I [[recommend]] that every student walks for thirty minutes a day.", extra: ["Long ago","Yesterday"]},
        { id: "u4-game", t: "English Master Game · Unit 4", ic: "", type: "game", note: "Answer 8 questions to win", soal: [
          ["Analytical vs hortatory: hortatory adds a…", ["recommendation", "complication", "orientation", "coda"], 0],
          ["\"You ___ eat more fruit.\"", ["should", "did", "were", "has"], 0],
          ["\"According to doctors…\" uses the strategy of…", ["Logos", "Pathos", "Ethos", "Coda"], 2],
          ["\"Imagine losing your health forever.\" uses…", ["Logos", "Pathos", "Ethos", "Thesis"], 1],
          ["A balanced diet includes…", ["only rice", "various nutrients in the right amounts", "only snacks", "no water"], 1],
          ["Which is a recommendation?", ["Sleep is important.", "Many students sleep late.", "We must sleep at least 8 hours.", "I slept late yesterday."], 2],
          ["A good recommendation should be…", ["realistic and relevant", "impossible", "unrelated", "very long"], 0],
          ["A podcast is…", ["an audio program", "a printed poster", "a short story", "a math test"], 0]
        ]},
        { id: "u4-prequiz", t: "Pre-quiz Unit 4", ic: "", type: "quiz", note: "Check the topics before the test", soal: [
          ["What is the generic structure of a hortatory exposition?", ["Thesis, arguments, reiteration","Orientation, events, re-orientation","Goal, materials, steps","Thesis, arguments, recommendation"], 3],
          ["What is the purpose of a hortatory exposition?", ["To entertain with a magic story","To persuade readers to do or not do something","To describe how a machine works","To report a news event"], 1],
          ["Which part tells the reader what to do?", ["Thesis","Argument","Recommendation","Title"], 2],
          ["Which phrase means moving your body to stay healthy?", ["Mental health","Physical activity","Screen time","Junk food"], 1],
          ["Which word is about eating healthy food for growth and energy?", ["Exercise","Stress","Screen","Nutrition"], 3],
          ["Which sentence gives a suggestion?", ["Students should drink more water.","Students drank water.","Students are drinking water.","Students have a bottle."], 0],
          ["Which sentence uses \"need to\" correctly?", ["Teenagers needs to sleeping eight hours.","Teenagers need sleep to eight hours.","Teenagers need to sleep eight hours.","Teenagers need to slept eight hours."], 2],
          ["Which sentence is an imperative?", ["Students drink water.","He drinks water.","They were drinking water.","Drink water every day."], 3],
          ["Which sentence appeals to feelings (pathos)?", ["Studies show that exercise lowers heart risk.","A doctor with 20 years of experience says so.","Imagine how happy you feel after a good run!","The data come from a national survey."], 2],
          ["Which recommendation is the most realistic for a busy student?", ["Run for five hours every day.","Walk for 20 minutes after school.","Never eat any sugar again.","Quit all school activities."], 1]
        ]},
        { id: "u4-latihan", t: "Practice Unit 4", ic: "", type: "quiz", note: "Mixed questions", soal: [
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
      inspirasi: [["Healthy Lifestyle for Teens", yt("healthy lifestyle tips for teenagers")]]
    }
  }
};
