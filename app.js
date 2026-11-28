const L = LAB, $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = { get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch (e) { return d } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} } };
let best = store.get("lab-best", {});
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const ACT = {}; Object.values(L.units).forEach(u => u.aktivitas.forEach(a => ACT[a.id] = { ...a, unit: u }));

// ---------- page (content layer) ----------
const CORNER_NAME = { u1: "Nature Corner", u2: "Self-Discovery Corner", u3: "Green School Corner", u4: "Healthy Life Corner" };
const UNIT_BG = {
  u1: "radial-gradient(60% 60% at 15% 15%,#7ee08a,transparent 60%),radial-gradient(50% 60% at 90% 30%,#1fb5a0,transparent 60%),radial-gradient(70% 60% at 60% 100%,#0f5f3a,transparent 65%),#1d7a46",
  u2: "radial-gradient(60% 60% at 15% 15%,#c58bff,transparent 60%),radial-gradient(50% 60% at 90% 30%,#ff7ac6,transparent 60%),radial-gradient(70% 60% at 60% 100%,#3b1c8f,transparent 65%),#5a2bc4",
  u3: "radial-gradient(60% 60% at 15% 15%,#5ad1ff,transparent 60%),radial-gradient(50% 60% at 90% 30%,#3d6bff,transparent 60%),radial-gradient(70% 60% at 60% 100%,#0a2f7a,transparent 65%),#0d57c4",
  u4: "radial-gradient(60% 60% at 15% 15%,#ffc46b,transparent 60%),radial-gradient(50% 60% at 90% 30%,#ff5f8f,transparent 60%),radial-gradient(70% 60% at 60% 100%,#a3261a,transparent 65%),#e2552c"
};
const MESH = c => `<div class="mesh">${c.map((x, i) => `<i style="background:${x};left:${[5, 55, 25][i]}%;top:${[5, 15, 55][i]}%"></i>`).join("")}</div>`;
const vis = k => !(LAB.sembunyi || []).includes(k);
const TABS0 = [["beranda", "", "Home"], ["u1", "", "Sem 1"], ["u3", "", "Sem 2"], ["profil", "", "Teacher"]];
const TABS = TABS0.filter(t => vis(t[0]));

// ---------- dashboard: side menu, one view at a time, side panel ----------
const SVG = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const ICON = {
  beranda: SVG('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
  unit: SVG('<path d="M12 6c-2-2-5-2-8-1v14c3-1 6-1 8 1 2-2 5-2 8-1V5c-3-1-6-1-8 1z"/><path d="M12 6v14"/>'),
  grammar: SVG('<path d="M4 17L8 7l4 10"/><path d="M5.5 13.5h5"/><circle cx="17" cy="14" r="3"/><path d="M20 11v6"/>'),
  profil: SVG('<circle cx="12" cy="8" r="4"/><path d="M4 20c1-4 4-6 8-6s7 2 8 6"/>')
};
const UNITS = () => Object.keys(L.units).filter(vis);
const slidesOf = k => (LAB.slides || {})[k] || [];
// activities with type "quiz" go to the Quiz tab, all other types go to Games
const tabOf = x => x.type === "quiz" ? "quiz" : "games";
const actsOf = (u, t) => u.aktivitas.filter(x => tabOf(x) === t);
const ext = url => /^https?:|\.pdf$/.test(url) ? ' target="_blank" rel="noopener"' : "";
const semOf = k => L.semester.find(s => s.units.includes(k));
let view = "beranda"; const tab = {};

function fromHash() { const h = location.hash.slice(1); return h === "profil" || UNITS().includes(h) ? h : "beranda"; }
function render() {
  view = fromHash();
  const item = (href, key, icon, label) => `<a href="${href}"${view === key ? ' class="on" aria-current="page"' : ""}>${icon}<span>${label}</span></a>`;
  $("#side").innerHTML = `<a class="logo-tl" href="#beranda" aria-label="Think Lab, home">TL</a>
    ${item("#beranda", "beranda", ICON.beranda, "Home")}
    ${UNITS().map(k => item("#" + k, k, ICON.unit, "Unit " + +L.units[k].no)).join("")}
    ${item("grammar.html", "grammar", ICON.grammar, "Grammar")}
    ${item("#profil", "profil", ICON.profil, "Teacher")}`;
  $("#view").innerHTML = view === "beranda" ? homeView() : view === "profil" ? teacherView() : unitSection(view, L.units[view]);
  $("#rail").innerHTML = rail();
  document.title = view === "beranda" ? "Think Lab" : `${view === "profil" ? "Teacher" : "Unit " + +L.units[view].no} · Think Lab`;
  wireGlass();
}
function homeView() {
  return `<section class="hero" id="beranda">
      <p class="eyebrow">Bahasa Inggris Tingkat Lanjut · Grade XI</p>
      <h1 class="display">Welcome to <em>Think Lab</em></h1>
      <p class="lede">${L.tagline}</p>
    </section>
    <h2 class="dash-h">Your units</h2>
    <div class="ugrid">${UNITS().map((k, i) => { const u = L.units[k]; return `<article class="ucard c${i % 2}">
        <span class="uno">${u.no}</span><small>${u.jenis}</small><h3>${u.judul}</h3>
        <div class="ubtns">
          <button onclick="go('${k}','slides')">Slides <b>${slidesOf(k).length}</b></button>
          <button onclick="go('${k}','games')">Games <b>${actsOf(u, "games").length}</b></button>
          <button onclick="go('${k}','quiz')">Quiz <b>${actsOf(u, "quiz").length}</b></button>
          <button onclick="go('${k}','videos')">Videos <b>${u.video.length}</b></button>
        </div>
        <a class="ugo" href="corner.html?u=${+u.no}">${CORNER_NAME[k]} →</a>
      </article>`; }).join("")}</div>
    <h2 class="dash-h">Quick play</h2>
    <div class="qgrid">${UNITS().flatMap(k => { const u = L.units[k]; return [u.aktivitas[0], u.aktivitas.find(a => a.type === "game")].filter(Boolean); })
      .map((a, i) => `<button class="qcard c${i % 4}" onclick="openAct('${a.id}', this)"><b>${a.t}</b><small>${a.note || ""}</small><span>Play →</span></button>`).join("")}</div>`;
}
function teacherView() {
  return `<section class="plain" id="profil"><p class="eyebrow">Your Teacher</p><div class="prof"><div class="ava">DA</div><div><h3>${L.guru}</h3><p>${L.jabatan}</p></div></div>
    <p class="foot">© 2026 Think Lab · Bahasa Inggris Tingkat Lanjut XI · SMAN 1 Batam</p></section>`;
}
const ytId = u => (u.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/) || [])[1];
function unitSection(k, u) {
  const sem = semOf(k), sl = slidesOf(k);
  const T = [["slides", "Slides", sl.length], ["games", "Games", actsOf(u, "games").length], ["quiz", "Quiz", actsOf(u, "quiz").length], ["videos", "Videos", u.video.length]].filter(t => t[2]);
  const cur = T.some(t => t[0] === tab[k]) ? tab[k] : T[0][0];
  const acts = t => `<div class="panel"><div class="acts">${actsOf(u, t).map(a => `<button class="act" onclick="openAct('${a.id}', this)"><span class="i">${a.ic}</span><span><b>${a.t}</b><small>${a.note || ""}</small></span>${best[a.id] != null ? `<span class="best">BEST ${best[a.id]}</span>` : ""}</button>`).join("")}</div></div>`;
  const body = {
    slides: () => `<div class="sgrid">${sl.map(([tp, t, file, n], i) => `<a class="scard c${i % 4}" href="${file}" target="_blank" rel="noopener"><span class="s-top"><em>${tp}</em><i>SLIDES</i></span><b>${t}</b><small>${n} slides · PDF</small><span class="s-go">Open slides ↗</span></a>`).join("")}</div>`,
    games: () => acts("games"),
    quiz: () => acts("quiz"),
    videos: () => `<div class="vgrid">${u.video.map(([t, url], i) => { const id = ytId(url); return `<a class="vcard" href="${url}" target="_blank" rel="noopener"><span class="vthumb">${id ? `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" onerror="this.remove()">` : ""}<i class="vplay">▶</i><em class="vep">EP ${i + 1}</em></span><b>${t}</b></a>`; }).join("")}</div>
      ${(u.inspirasi || []).length ? `<div class="u-row vmore"><span class="lbl">More to explore</span>${u.inspirasi.map(([t, url]) => `<a class="chip" href="${url}" target="_blank" rel="noopener">${t} ↗</a>`).join("")}</div>` : ""}`
  };
  return `<section class="unit" id="${k}" data-unit="${k}">
    <header class="uhead">
      ${sem ? `<p class="eyebrow">${sem.nama} · Unit ${u.no} · ${u.jenis}</p>` : ""}
      <h2 class="u-title">${u.judul}</h2>
      <p class="u-desk">${u.desk}</p>
      <p class="u-tags">${u.tags.map(t => `<span>${t}</span>`).join("")}</p>
    </header>
    <a class="corner-card" href="corner.html?u=${+u.no}">
      <span class="cc-ic">${String(+u.no).padStart(2, "0")}</span>
      <span class="cc-body"><em class="cc-badge">Start here</em><b class="cc-name">${CORNER_NAME[k]}</b><small class="cc-sub">Theory · Steps · Simulation · LKPD</small></span>
      <span class="cc-go">Enter →</span>
    </a>
    <div class="utabs" role="tablist">${T.map(([id, label, n]) => `<button role="tab" aria-selected="${id === cur}" onclick="go('${k}','${id}')">${label} <b>${n}</b></button>`).join("")}
      <button class="sum" onclick="openMateri('${k}', this)">Summary</button></div>
    ${body[cur]()}
  </section>`;
}
function rail() {
  const list = view === "beranda" || view === "profil" ? UNITS() : [view];
  const rows = list.flatMap(k => slidesOf(k)).map(([tp, t, file]) => `<a class="rrow" href="${file}" target="_blank" rel="noopener"><span><b>${tp}</b><small>${t}</small></span><i>Open</i></a>`).join("");
  const links = L.heroLinks.concat(L.driveLinks.filter(d => d.url !== "#"));
  return `<a class="rme" href="#profil"><span class="rava">DA</span><span><b>${L.guru}</b><small>English teacher</small></span></a>
    ${rows ? `<h2 class="dash-h">${view === "beranda" || view === "profil" ? "All slides" : "Slides for this unit"}</h2>${rows}` : ""}
    <h2 class="dash-h">Quick links</h2>${links.map(l => `<a class="rrow link" href="${l.url}"${ext(l.url)}><span>${l.t}</span><i>→</i></a>`).join("")}`;
}
window.go = (k, t) => { tab[k] = t; if (location.hash === "#" + k) render(); else location.hash = k; };
addEventListener("hashchange", () => { if (location.hash.startsWith("#act=")) return; const was = view; render(); if (was !== view) scrollTo(0, 0); });
function wireGlass() {}

// ---------- sheet: morphs out of the tapped control (FLIP + spring) ----------
let origin = null;
function openModal(title, html, from) {
  if (from) origin = from.getBoundingClientRect();
  const sh = $("#sheet"), first = sh.hidden;
  $("#mt").textContent = title; $("#mb").innerHTML = html; $("#mb").scrollTop = 0;
  sh.hidden = false; $("#scrim").hidden = false; document.body.style.overflow = "hidden"; wireGlass();
  if (first && origin) {
    const end = sh.getBoundingClientRect();
    const dx = origin.left + origin.width / 2 - (end.left + end.width / 2), dy = origin.top + origin.height / 2 - (end.top + end.height / 2);
    const base = getComputedStyle(sh).transform === "none" ? "" : getComputedStyle(sh).transform;
    sh.animate([{ transform: `${base} translate(${dx}px,${dy}px) scale(${origin.width / end.width},${origin.height / end.height})`, borderRadius: "999px", opacity: .4 },
                { transform: base || "none", borderRadius: "36px", opacity: 1 }], { duration: 620, easing: "cubic-bezier(.34,1.4,.64,1)" });
    $("#mb").animate([{ opacity: 0 }, { opacity: 0, offset: .35 }, { opacity: 1 }], { duration: 520 });
  }
}
function closeModal() {
  const sh = $("#sheet"); if (sh.hidden) return;
  const done = () => { sh.hidden = true; $("#scrim").hidden = true; document.body.style.overflow = ""; render(); };
  if (origin) {
    const end = sh.getBoundingClientRect(), base = getComputedStyle(sh).transform === "none" ? "" : getComputedStyle(sh).transform;
    const dx = origin.left + origin.width / 2 - (end.left + end.width / 2), dy = origin.top + origin.height / 2 - (end.top + end.height / 2);
    sh.animate([{ transform: base || "none", opacity: 1 }, { transform: `${base} translate(${dx}px,${dy}px) scale(${origin.width / end.width},${origin.height / end.height})`, borderRadius: "999px", opacity: 0 }],
      { duration: 340, easing: "cubic-bezier(.4,0,.2,1)" }).onfinish = done;
  } else done();
}
window.closeModal = closeModal;
$("#mx").onclick = closeModal; $("#scrim").onclick = closeModal;
addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
window.openMateri = (k, el) => openModal(`Summary · Unit ${+L.units[k].no}`, `<div class="mat">${L.units[k].materi}</div>`, el);

let cur;
window.openAct = (id, el) => { if (el) origin = el.getBoundingClientRect(); cur = ACT[id]; ({ quiz: Quiz, game: Game, sort: Sort, classify: Classify, fill: Fill, drag: Drag })[cur.type].start(); };

function finish(score, extra = "") {
  const old = best[cur.id]; if (old == null || score > old) { best[cur.id] = score; store.set("lab-best", best); }
  const nama = store.get("lab-nama", "");
  const msg = score >= 90 ? "Excellent!" : score >= 75 ? "Great job!" : score >= 50 ? "Good effort!" : "Keep practicing!";
  $("#mb").innerHTML = `<div class="result"><div class="big">${score}</div><p><b>${msg}</b></p>${extra}
    <div class="cert"><input class="name" id="nm" placeholder="Your name & class (e.g. Rina · XI HJ 7)" value="${esc(nama)}">
      <div><b>${esc(cur.t)}</b></div><div>Score: <b>${score}</b> · ${new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}</div>
      <small style="color:var(--muted)">Take a screenshot and send it to your teacher.</small></div>
    <div class="row" style="justify-content:center"><button class="btn" onclick="openAct('${cur.id}')">Try again</button><button class="btn alt" onclick="closeModal()">Done</button></div></div>`;
  $("#nm").oninput = e => store.set("lab-nama", e.target.value);
}

// ---------- quiz ----------
const Quiz = {
  start() { this.hook = !!cur.hook; this.qs = this.hook ? cur.soal : shuffle(cur.soal); this.i = 0; this.ok = 0; this.show(); },
  show() {
    const [q, opts, ans, note] = this.qs[this.i];
    openModal(`${cur.ic} ${cur.t}`, `<div class="prog"><i style="width:${this.i / this.qs.length * 100}%"></i></div>
      <p class="intro">Question ${this.i + 1} of ${this.qs.length}</p><p class="q">${esc(q)}</p>
      ${opts.map((o, j) => `<button class="opt" data-j="${j}">${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join("")}<div class="fb" id="fb"></div><div class="row" id="nx"></div>`);
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const j = +b.dataset.j;
      if (this.hook) { document.querySelectorAll(".opt").forEach(x => { x.disabled = true; }); b.classList.add("right"); $("#fb").innerHTML = `<b>Nice thinking!</b> ${esc(note || "")}`; }
      else {
        document.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); });
        if (j === ans) { this.ok++; $("#fb").innerHTML = "Correct!"; } else { b.classList.add("wrong"); $("#fb").innerHTML = "Not quite. The right answer is highlighted."; }
      }
      $("#nx").innerHTML = `<button class="btn">${this.i + 1 < this.qs.length ? "Next →" : (this.hook ? "I'm ready!" : "See my score")}</button>`;
      $("#nx button").onclick = () => { this.i++; if (this.i < this.qs.length) this.show(); else if (this.hook) this.done(); else finish(Math.round(this.ok / this.qs.length * 100), `<p>${this.ok} of ${this.qs.length} correct</p>`); };
    });
  },
  done() { $("#mb").innerHTML = `<div class="result"><p class="q">Warm-up done!</p><p>${esc(cur.hook)}</p><div class="row" style="justify-content:center"><button class="btn" onclick="closeModal()">Start learning</button><button class="btn alt" onclick="openAct('${cur.id}')">Try again</button></div></div>`; }
};

// ---------- game (millionaire style) ----------
const PRIZE = ["100", "200", "500", "1.000", "5.000", "10.000", "50.000", "1 JUTA"];
const Game = {
  start() { this.qs = shuffle(cur.soal).slice(0, 8); this.i = 0; this.ff = true; this.show(); },
  show() {
    const [q, opts, ans] = this.qs[this.i]; this.ans = ans;
    openModal(`${cur.ic} ${cur.t}`, `<div class="game"><div>
      <p class="intro">Question ${this.i + 1} · <b>${PRIZE[this.i]}</b> points</p><p class="q">${esc(q)}</p>
      ${opts.map((o, j) => `<button class="opt" data-j="${j}">${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join("")}
      <div class="row"><button class="lifeline" id="ff" ${this.ff ? "" : "disabled"}>50 : 50</button></div><div class="fb" id="fb"></div></div>
      <ol class="ladder">${PRIZE.slice(0, this.qs.length).map((p, k) => `<li class="${k === this.i ? "now" : k < this.i ? "done" : ""}">${k + 1}. ${p}</li>`).join("")}</ol></div>`);
    $("#ff").onclick = () => { this.ff = false; $("#ff").disabled = true; shuffle([0, 1, 2, 3].filter(j => j !== ans && j < opts.length)).slice(0, 2).forEach(j => document.querySelector(`.opt[data-j="${j}"]`).classList.add("gone")); };
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      document.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.j === ans) x.classList.add("right"); }); $("#ff").disabled = true;
      const win = +b.dataset.j === ans; if (!win) b.classList.add("wrong");
      setTimeout(() => {
        if (win && this.i + 1 < this.qs.length) { this.i++; this.show(); }
        else finish(Math.round((this.i + (win ? 1 : 0)) / this.qs.length * 100), win ? `<p>You are an <b>English Master</b>!</p>` : `<p>You stopped at question ${this.i + 1}. Try again!</p>`);
      }, 1100);
    });
  }
};

// ---------- sort ----------
const split = s => { const i = s.indexOf(" — "); return i > 0 ? [s.slice(0, i), s.slice(i + 3)] : ["", s]; };
const Sort = {
  start() {
    this.order = shuffle(cur.items.map((_, i) => i)); if (this.order.every((v, i) => v === i)) this.order.reverse();
    this.show();
  },
  show(checked) {
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro} Use ▲▼ to move them.</p>
      <ul class="sort">${this.order.map((v, i) => { const [lab, txt] = split(cur.items[v]);
        return `<li class="${checked ? (v === i ? "right" : "wrong") : ""}"><span class="t">${checked && lab ? `<span class="tag">${esc(lab)}</span>` : ""}${esc(txt)}</span>
        <span class="mv"><button data-u="${i}" ${checked ? "disabled" : ""}>▲</button><button data-d="${i}" ${checked ? "disabled" : ""}>▼</button></span></li>`; }).join("")}</ul>
      <div class="row">${checked ? "" : `<button class="btn" id="ck">Check</button>`}</div>`);
    document.querySelectorAll("[data-u]").forEach(b => b.onclick = () => { const i = +b.dataset.u; if (i > 0) { [this.order[i - 1], this.order[i]] = [this.order[i], this.order[i - 1]]; this.show(); } });
    document.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { const i = +b.dataset.d; if (i < this.order.length - 1) { [this.order[i + 1], this.order[i]] = [this.order[i], this.order[i + 1]]; this.show(); } });
    if (!checked) $("#ck").onclick = () => {
      this.show(true); const ok = this.order.filter((v, i) => v === i).length;
      $(".row").innerHTML = `<p class="fb">${ok === this.order.length ? "Perfect order!" : `${ok} of ${this.order.length} in the right place. Check the labels.`}</p><button class="btn" id="sc">See my score</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / this.order.length * 100));
    };
  }
};

// ---------- classify ----------
const Classify = {
  start() {
    this.items = shuffle(cur.items); this.pick = {};
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro}</p>${this.items.map(([txt], i) => `<div class="cl" id="c${i}"><div>${esc(txt)}</div><div class="g">${cur.groups.map((g, j) => `<button data-i="${i}" data-j="${j}">${esc(g)}</button>`).join("")}</div></div>`).join("")}
      <div class="row"><button class="btn" id="ck">Check</button></div>`);
    document.querySelectorAll(".cl .g button").forEach(b => b.onclick = () => {
      const i = +b.dataset.i; this.pick[i] = +b.dataset.j;
      document.querySelectorAll(`button[data-i="${i}"]`).forEach(x => x.classList.toggle("pick", x === b));
    });
    $("#ck").onclick = () => {
      if (Object.keys(this.pick).length < this.items.length && !confirm("Some items are not done yet. Check anyway?")) return;
      let ok = 0;
      this.items.forEach(([, g], i) => { const r = this.pick[i] === g; if (r) ok++; const el = $("#c" + i); el.classList.add(r ? "right" : "wrong");
        if (!r) el.insertAdjacentHTML("beforeend", `<small>Answer: <b>${esc(cur.groups[g])}</b></small>`); el.querySelectorAll("button").forEach(x => x.disabled = true); });
      $(".row").innerHTML = `<p class="fb">${ok} of ${this.items.length} correct</p><button class="btn" id="sc">See my score</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / this.items.length * 100));
    };
  }
};

// ---------- fill ----------
const Fill = {
  start() {
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${cur.intro}</p>${cur.soal.map(([q], i) => { const [a, b] = q.split("___");
      return `<div class="fi" id="f${i}"><span>${i + 1}. ${esc(a)}</span><input id="in${i}" autocomplete="off" autocapitalize="off"><span>${esc(b || "")}</span></div>`; }).join("")}
      <div class="row"><button class="btn" id="ck">Check</button></div>`);
    $("#ck").onclick = () => {
      let ok = 0;
      cur.soal.forEach(([, ans], i) => { const v = $("#in" + i).value.trim().toLowerCase(); const r = v === ans; if (r) ok++;
        $("#f" + i).classList.add(r ? "right" : "wrong"); $("#in" + i).disabled = true; if (!r) $("#f" + i).insertAdjacentHTML("beforeend", `<small>→ <b>${ans}</b></small>`); });
      $(".row").innerHTML = `<p class="fb">${ok} of ${cur.soal.length} correct</p><button class="btn" id="sc">See my score</button>`;
      $("#sc").onclick = () => finish(Math.round(ok / cur.soal.length * 100));
    };
  }
};

// ---------- drag and drop text ----------
const Drag = {
  start() {
    if (!document.getElementById("dg-css")) { const s = document.createElement("style"); s.id = "dg-css"; s.textContent = ".dg-text p{line-height:2.5;font-size:1.02rem;margin:0 0 .6rem}.dg-gap{display:inline-flex;align-items:center;justify-content:center;min-width:96px;min-height:36px;padding:0 6px;border:2.5px dashed var(--ink);border-radius:12px;background:var(--cream2);vertical-align:middle;margin:0 2px;transition:background .15s,transform .15s}.dg-gap.over{background:var(--peach);transform:scale(1.08)}.dg-gap.right{background:var(--mint);border-style:solid}.dg-gap.wrong{background:#F2B49A;border-style:solid}.dg-gap s{opacity:.6;margin-right:6px}.dg-bank{display:flex;flex-wrap:wrap;gap:10px;padding:14px;border:2.5px solid var(--ink);border-radius:18px;background:var(--peach3);margin:14px 0;min-height:58px}.dg-chip{display:inline-block;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;padding:6px 14px;border:2.5px solid var(--ink);border-radius:999px;background:var(--cream2);font-weight:700;box-shadow:var(--sh);transition:transform .15s}.dg-chip:hover{transform:translate(-2px,-2px) rotate(-2deg)}.dg-chip.sel{background:var(--peach);outline:3px solid var(--red)}.dg-gap .dg-chip{box-shadow:none;padding:3px 10px;margin:2px}.dg-ghost{position:fixed;z-index:99999;pointer-events:none;transform:translate(-50%,-50%) rotate(-5deg);box-shadow:var(--sh2)}.dg-hint{opacity:.75;margin:.2rem 0 .8rem}"; document.head.appendChild(s); }
    this.paras = cur.text.split("\n").map(p => p.split(/\[\[(.+?)\]\]/)); this.ans = []; this.paras.forEach(p => p.forEach((x, i) => { if (i % 2) this.ans.push(x); }));
    this.chips = shuffle([...this.ans, ...(cur.extra || [])].map((w, i) => ({ id: i, w }))); this.place = {}; this.sel = null; this.done = false; this.show();
  },
  placed() { return Object.values(this.place); },
  chipHtml(c) { return `<span class="dg-chip${this.sel === c.id ? " sel" : ""}" data-c="${c.id}">${esc(c.w)}</span>`; },
  show() {
    let g = 0;
    const body = this.paras.map(p => `<p>${p.map((x, i) => { if (i % 2 === 0) return esc(x); const k = g++; const c = this.chips.find(c => c.id === this.place[k]);
      const st = this.done ? (c && c.w === this.ans[k] ? " right" : " wrong") : ""; return `<span class="dg-gap${st}" data-g="${k}">${c ? this.chipHtml(c) : ""}${this.done && st === " wrong" ? ` <b>${esc(this.ans[k])}</b>` : ""}</span>`; }).join("")}</p>`).join("");
    const free = this.chips.filter(c => !this.placed().includes(c.id));
    openModal(`${cur.ic} ${cur.t}`, `<p class="intro">${esc(cur.intro)}</p><p class="dg-hint">Drag a word into a gap. You can also tap a word, then tap a gap.</p><div class="dg-text">${body}</div><div class="dg-bank" id="bank">${free.map(c => this.chipHtml(c)).join("")}</div>
      <div class="row">${this.done ? "" : `<button class="btn" id="ck" ${Object.keys(this.place).length < this.ans.length ? "disabled" : ""}>Check</button>`}</div>`);
    if (this.done) return;
    document.querySelectorAll(".dg-chip").forEach(el => el.onpointerdown = e => this.down(e, el));
    document.querySelectorAll(".dg-gap").forEach(el => el.onclick = e => { if (e.target.closest(".dg-chip")) return; if (this.sel != null) this.put(this.sel, +el.dataset.g); });
    const ck = $("#ck"); if (ck) ck.onclick = () => this.check();
  },
  put(id, gap) {
    Object.keys(this.place).forEach(k => { if (this.place[k] === id) delete this.place[k]; });
    this.place[gap] = id; this.sel = null; this.show();
  },
  down(e, el) {
    e.preventDefault(); const id = +el.dataset.c, x0 = e.clientX, y0 = e.clientY; let ghost = null, over = null, moved = false;
    const gapAt = (x, y) => { const t = document.elementFromPoint(x, y); return t && t.closest ? t.closest(".dg-gap") : null; };
    const move = ev => {
      if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 6) return; moved = true;
      if (!ghost) { ghost = el.cloneNode(true); ghost.className = "dg-chip dg-ghost"; document.body.appendChild(ghost); el.style.opacity = ".35"; }
      ghost.style.left = ev.clientX + "px"; ghost.style.top = ev.clientY + "px";
      const gp = gapAt(ev.clientX, ev.clientY); if (over && over !== gp) over.classList.remove("over"); over = gp; if (gp) gp.classList.add("over");
    };
    const up = ev => {
      window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", up);
      if (ghost) ghost.remove();
      if (!moved) { const inGap = el.closest(".dg-gap"); if (inGap) { delete this.place[+inGap.dataset.g]; this.sel = null; } else this.sel = this.sel === id ? null : id; this.show(); return; }
      const gp = gapAt(ev.clientX, ev.clientY);
      if (gp) this.put(id, +gp.dataset.g);
      else if (document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".dg-bank, .dg-text")) { Object.keys(this.place).forEach(k => { if (this.place[k] === id) delete this.place[k]; }); this.show(); }
      else this.show();
    };
    window.addEventListener("pointermove", move); window.addEventListener("pointerup", up); window.addEventListener("pointercancel", up);
  },
  check() {
    this.done = true; this.show(); let ok = 0; this.ans.forEach((w, k) => { const c = this.chips.find(c => c.id === this.place[k]); if (c && c.w === w) ok++; });
    $(".row").innerHTML = `<p class="fb">${ok} of ${this.ans.length} correct</p><button class="btn" id="sc">See my score</button>`;
    $("#sc").onclick = () => finish(Math.round(ok / this.ans.length * 100));
  }
};

render();
// open a game from a link like lms/#act=u1-quiz (used by the LKPD Practice tab)
if (location.hash.startsWith("#act=")) { const id = location.hash.slice(5); if (ACT[id]) setTimeout(() => { const k = Object.keys(L.units).find(k => L.units[k] === ACT[id].unit); if (k) { history.replaceState(null, "", "#" + k); tab[k] = tabOf(ACT[id]); render(); } openAct(id); }, 450); }
