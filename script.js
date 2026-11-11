// ---- "What can AI do?" cards ----
const abilities = [
  {
    icon: "💬",
    title: "Understand & write language",
    summary: "Reads, summarizes, translates, and writes text.",
    examples: ["Chatbots and virtual assistants", "Translating between languages", "Summarizing long documents"],
  },
  {
    icon: "👁️",
    title: "Recognize images",
    summary: "Identifies objects, faces, and text in pictures and video.",
    examples: ["Unlocking a phone with your face", "Spotting disease in medical scans", "Helping self-driving cars see the road"],
  },
  {
    icon: "🎙️",
    title: "Hear & speak",
    summary: "Turns speech into text and text into natural-sounding speech.",
    examples: ["Voice assistants like smart speakers", "Automatic video captions", "Reading text aloud for accessibility"],
  },
  {
    icon: "📈",
    title: "Make predictions",
    summary: "Uses past data to forecast what is likely to happen next.",
    examples: ["Weather forecasting", "Detecting credit card fraud", "Predicting when machines need repair"],
  },
  {
    icon: "🎯",
    title: "Recommend things",
    summary: "Learns your preferences and suggests what you might like.",
    examples: ["Movie and music suggestions", "Online shopping recommendations", "Personalized news feeds"],
  },
  {
    icon: "🎨",
    title: "Create new content",
    summary: "Generates images, music, code, and stories from a description.",
    examples: ["Drawing an image from a text prompt", "Helping programmers write code", "Brainstorming ideas and drafts"],
  },
];

const cardsEl = document.getElementById("cards");

abilities.forEach((a) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card";
  card.setAttribute("aria-expanded", "false");
  card.innerHTML = `
    <span class="icon" aria-hidden="true">${a.icon}</span>
    <h3>${a.title}</h3>
    <p>${a.summary}</p>
    <ul class="examples">${a.examples.map((e) => `<li>${e}</li>`).join("")}</ul>
    <span class="toggle">Show examples</span>
  `;
  card.addEventListener("click", () => {
    const open = card.classList.toggle("open");
    card.setAttribute("aria-expanded", String(open));
    card.querySelector(".toggle").textContent = open ? "Hide examples" : "Show examples";
  });
  cardsEl.appendChild(card);
});

// ---- Quiz ----
const questions = [
  {
    q: "How does most modern AI learn?",
    options: ["A person writes every rule by hand", "It studies lots of examples to find patterns", "It reads minds"],
    answer: 1,
  },
  {
    q: "Which of these is an example of AI?",
    options: ["A streaming service recommending a movie", "A light switch", "A paper calculator chart"],
    answer: 0,
  },
  {
    q: "Why should important AI answers be double-checked?",
    options: ["AI is always perfect", "AI can sound confident even when it is wrong", "AI refuses to answer questions"],
    answer: 1,
  },
];

const form = document.getElementById("quiz-form");
const result = document.getElementById("quiz-result");

questions.forEach((item, qi) => {
  const fs = document.createElement("fieldset");
  fs.className = "question";
  fs.innerHTML =
    `<legend>${qi + 1}. ${item.q}</legend>` +
    item.options
      .map(
        (opt, oi) =>
          `<label><input type="radio" name="q${qi}" value="${oi}"> ${opt}</label>`
      )
      .join("");
  form.appendChild(fs);
});

document.getElementById("check-btn").addEventListener("click", () => {
  let score = 0;
  questions.forEach((item, qi) => {
    const labels = form.querySelectorAll(`input[name="q${qi}"]`);
    labels.forEach((input) => {
      const label = input.parentElement;
      label.classList.remove("correct", "wrong");
      const idx = Number(input.value);
      if (idx === item.answer) label.classList.add("correct");
      else if (input.checked) label.classList.add("wrong");
    });
    const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
    if (chosen && Number(chosen.value) === item.answer) score++;
  });
  const msg = score === questions.length ? " Perfect! 🎉" : score >= 2 ? " Nice work!" : " Keep learning!";
  result.textContent = `You scored ${score} / ${questions.length}.${msg}`;
});

document.getElementById("reset-btn").addEventListener("click", () => {
  form.reset();
  form.querySelectorAll("label").forEach((l) => l.classList.remove("correct", "wrong"));
  result.textContent = "";
});
