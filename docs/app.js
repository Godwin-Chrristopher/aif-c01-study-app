const domains = [
  {
    id: 1,
    title: "Fundamentals of AI and ML",
    summary:
      "Separate AI, machine learning, and deep learning. Recognize supervised, unsupervised, and reinforcement learning scenarios.",
    aws:
      "Use the vocabulary to decide when a managed AWS AI service is enough and when a custom ML workflow is needed.",
    cards: [
      ["What does AI stand for?", "Artificial Intelligence."],
      ["What does ML stand for?", "Machine Learning."],
      ["Name the three ML types in this repo.", "Supervised, unsupervised, and reinforcement learning."],
    ],
    quiz: {
      question: "Which learning type uses labeled examples?",
      options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"],
      answer: 0,
    },
  },
  {
    id: 2,
    title: "Fundamentals of Generative AI",
    summary:
      "Understand prompt engineering, foundation models, and common generative AI use cases such as text, image, and code generation.",
    aws:
      "Connect these ideas to Amazon Bedrock model selection, prompting, and business use cases.",
    cards: [
      ["What is prompt engineering?", "Crafting effective inputs for AI models."],
      ["What is a foundation model?", "A large, general-purpose AI model."],
      ["Name three generative AI use cases.", "Image generation, text generation, and code generation."],
    ],
    quiz: {
      question: "Which option best describes a foundation model?",
      options: ["A large general-purpose AI model", "A spreadsheet formula", "A database backup plan"],
      answer: 0,
    },
  },
  {
    id: 3,
    title: "Applications of Foundation Models",
    summary:
      "Study retrieval augmented generation and the tradeoffs behind model selection.",
    aws:
      "Map RAG concepts to knowledge bases, vector search, cost, performance, scalability, and interpretability.",
    cards: [
      ["What does RAG stand for?", "Retrieval Augmented Generation."],
      ["What does RAG improve?", "It enhances LLM responses with external knowledge."],
      ["Name two model selection criteria.", "Cost, performance, scalability, or interpretability."],
    ],
    quiz: {
      question: "Why use RAG with a language model?",
      options: [
        "To ground responses in external knowledge",
        "To remove all need for source data",
        "To encrypt every prompt automatically",
      ],
      answer: 0,
    },
  },
  {
    id: 4,
    title: "Guidelines for Responsible AI",
    summary:
      "Review fairness, accountability, transparency, ethics, and the ways bias can affect model behavior.",
    aws:
      "Relate responsible AI practices to guardrails, model evaluation, human review, and risk documentation.",
    cards: [
      ["Name two responsible AI features.", "Fairness, accountability, transparency, or ethics."],
      ["What is demographic bias?", "A model impact that affects specific groups."],
      ["What is performance bias?", "A model accuracy issue across its behavior or outputs."],
    ],
    quiz: {
      question: "Which practice is part of responsible AI?",
      options: ["Transparency", "Ignoring evaluation data", "Unlimited data collection"],
      answer: 0,
    },
  },
  {
    id: 5,
    title: "Security, Compliance, and Governance",
    summary:
      "Connect AI solutions to identity, encryption, auditing, data classification, and access control.",
    aws:
      "The repo highlights IAM, KMS, and CloudTrail as key services for secure AI workloads.",
    cards: [
      ["Name three AWS security services in the repo.", "IAM, KMS, and CloudTrail."],
      ["Name two data governance strategies.", "Data classification, access control, encryption, or auditing."],
      ["Why does governance matter for AI?", "It keeps data use, access, and model operations controlled and auditable."],
    ],
    quiz: {
      question: "Which AWS service is used for audit trails?",
      options: ["CloudTrail", "Kendra", "Polly"],
      answer: 0,
    },
  },
];

const cheatSheet = [
  {
    title: "1. Core AI Concepts",
    rows: [
      ["Labeled data", "Supervised"],
      ["No labels", "Unsupervised"],
      ["Reward-based", "Reinforcement"],
    ],
    note: "If you think more than 1 second, review the basics again.",
  },
  {
    title: "2. Generative AI Basics",
    rows: [
      ["Tokens", "Cost driver"],
      ["Temperature", "Randomness"],
      ["Embeddings", "Meaning vectors"],
      ["Context window", "Maximum input size"],
    ],
    note: "Trap: tokens are not embeddings.",
  },
  {
    title: "3. Prompt vs RAG vs Fine-Tune",
    rows: [
      ["Change tone or style", "Prompt engineering"],
      ["Use private or company data", "RAG"],
      ["Deep customization", "Fine-tuning"],
    ],
    note: "A lot of exam questions sit in this choice.",
  },
  {
    title: "4. SageMaker Inference Types",
    rows: [
      ["Real-time, low latency", "Real-time inference"],
      ["Large data, no urgency", "Batch transform"],
      ["Large and async", "Asynchronous inference"],
      ["No infrastructure management", "Serverless inference"],
    ],
    note: "Trap: batch and async are not the same thing.",
  },
  {
    title: "5. Model Evaluation",
    rows: [
      ["Classification", "Accuracy / F1"],
      ["Translation", "BLEU"],
      ["Summarization", "ROUGE"],
    ],
    note: "Do not mix BLEU and ROUGE.",
  },
  {
    title: "6. Responsible AI",
    rows: [
      ["Bias", "Fix data"],
      ["Explainability", "SageMaker Clarify"],
      ["Toxic output", "Guardrails"],
      ["Hallucination", "Lower temperature / RAG"],
    ],
    note: "Responsible AI is a major trap area.",
  },
  {
    title: "7. AWS Security",
    rows: [
      ["Who did what", "CloudTrail"],
      ["Logs and metrics", "CloudWatch"],
      ["Sensitive data", "Macie"],
      ["Private AWS access", "PrivateLink"],
      ["Access control", "IAM"],
    ],
    note: "Keep CloudTrail and CloudWatch separated.",
  },
  {
    title: "8. Model Types",
    rows: [
      ["Text generation", "GPT"],
      ["Image generation", "GAN"],
      ["Text understanding", "BERT"],
    ],
  },
  {
    title: "9. Cost Optimization",
    rows: [
      ["High cost", "Reduce tokens"],
      ["Idle usage", "On-demand"],
      ["Heavy usage", "Provisioned"],
    ],
  },
  {
    title: "10. Common Exam Traps",
    traps: [
      "Simple math usually means code, not ML.",
      "Accuracy issues are not always fixed with more epochs; check data and prompts.",
      "Improve output often points to prompt engineering.",
      "Private data points to RAG, not fine-tuning.",
      "Consistency points to lower temperature.",
    ],
  },
  {
    title: "11. Speed Rules",
    rows: [
      ["Style", "Prompt"],
      ["Knowledge", "RAG"],
      ["Randomness", "Lower temperature"],
      ["Cost", "Reduce tokens"],
      ["Security logs", "CloudTrail"],
    ],
    note: "Before the exam: read this, do 20-30 questions, and time yourself.",
  },
];

const domainFlashcardDeckMap = {
  1: ["SageMaker & ML Lifecycle", "Inference Types", "Evaluation Metrics"],
  2: ["Fundamentals of Generative AI", "Prompt Engineering & LLM Behavior"],
  3: ["Model Customization", "AWS AI Services", "Common Traps"],
  4: ["Responsible AI", "Common Traps"],
  5: ["Security & Governance", "AWS AI Services"],
};

const state = {
  selectedDomain: 0,
  selectedCard: 0,
  selectedQuestion: 0,
  selectedHardQuestion: 0,
  cardFlipped: false,
  completed: new Set(JSON.parse(localStorage.getItem("aifCompleted") || "[]")),
  reviewedCards: Number(localStorage.getItem("aifReviewedCards") || 0),
  quizAnswers: JSON.parse(localStorage.getItem("aifQuizAnswers") || "{}"),
  hardAnswers: JSON.parse(localStorage.getItem("aifHardAnswers") || "{}"),
};

const els = {
  domainList: document.querySelector("#domain-list"),
  completedCount: document.querySelector("#completed-count"),
  cardCount: document.querySelector("#card-count"),
  quizScore: document.querySelector("#quiz-score"),
  kicker: document.querySelector("#selected-domain-kicker"),
  title: document.querySelector("#selected-domain-title"),
  summary: document.querySelector("#selected-domain-summary"),
  aws: document.querySelector("#selected-domain-aws"),
  markComplete: document.querySelector("#mark-complete"),
  flashcard: document.querySelector("#flashcard"),
  flashcardText: document.querySelector("#flashcard-text"),
  flipCard: document.querySelector("#flip-card"),
  previousCard: document.querySelector("#previous-card"),
  nextCard: document.querySelector("#next-card"),
  tabCards: document.querySelector("#tab-cards"),
  tabQuiz: document.querySelector("#tab-quiz"),
  tabHard: document.querySelector("#tab-hard"),
  tabCheatSheet: document.querySelector("#tab-cheat-sheet"),
  cardsMode: document.querySelector("#cards-mode"),
  quizMode: document.querySelector("#quiz-mode"),
  hardMode: document.querySelector("#hard-mode"),
  cheatSheetMode: document.querySelector("#cheat-sheet-mode"),
  cheatSheet: document.querySelector("#cheat-sheet"),
  quizPosition: document.querySelector("#quiz-position"),
  quizSource: document.querySelector("#quiz-source"),
  quizQuestion: document.querySelector("#quiz-question"),
  quizOptions: document.querySelector("#quiz-options"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  previousQuestion: document.querySelector("#previous-question"),
  nextQuestion: document.querySelector("#next-question"),
  hardPosition: document.querySelector("#hard-position"),
  hardSource: document.querySelector("#hard-source"),
  hardScore: document.querySelector("#hard-score"),
  hardQuestion: document.querySelector("#hard-question"),
  hardOptions: document.querySelector("#hard-options"),
  hardFeedback: document.querySelector("#hard-feedback"),
  previousHardQuestion: document.querySelector("#previous-hard-question"),
  nextHardQuestion: document.querySelector("#next-hard-question"),
  startReview: document.querySelector("#start-review"),
  resetProgress: document.querySelector("#reset-progress"),
};

const questionBank = window.AIF_QUESTIONS || [];
const flashcardDecks = window.AIF_FLASHCARD_DECKS || [];
const hardQuestionBank = dedupeQuestions(window.AIF_HARD_QUESTIONS || []).map(normalizeQuestion);

function saveProgress() {
  localStorage.setItem("aifCompleted", JSON.stringify([...state.completed]));
  localStorage.setItem("aifReviewedCards", String(state.reviewedCards));
  localStorage.setItem("aifQuizAnswers", JSON.stringify(state.quizAnswers));
  localStorage.setItem("aifHardAnswers", JSON.stringify(state.hardAnswers));
}

function renderDomains() {
  els.domainList.innerHTML = "";
  domains.forEach((domain, index) => {
    const button = document.createElement("button");
    button.className = `domain-button${index === state.selectedDomain ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="domain-button__number">${domain.id}</span>
      <span>${domain.title}</span>
      <span class="domain-button__status">${state.completed.has(domain.id) ? "✓" : ""}</span>
    `;
    button.addEventListener("click", () => selectDomain(index));
    els.domainList.appendChild(button);
  });
}

function renderProgress() {
  const questionIds = new Set(questionBank.map((question) => question.id));
  const answeredIds = Object.keys(state.quizAnswers).filter((id) => questionIds.has(id));
  const correct = answeredIds.filter((id) => getAnswerRecord(id).correct).length;
  const score = answeredIds.length ? Math.round((correct / answeredIds.length) * 100) : 0;
  els.completedCount.textContent = state.completed.size;
  els.cardCount.textContent = state.reviewedCards;
  els.quizScore.textContent = `${score}%`;
}

function renderSelectedDomain() {
  const domain = domains[state.selectedDomain];
  const questionCount = getDomainQuestions().length;
  els.kicker.textContent = `Domain ${domain.id}`;
  els.title.textContent = domain.title;
  els.summary.textContent = `${domain.summary} This section includes ${questionCount} practice questions from the folder.`;
  els.aws.textContent = domain.aws;
  els.markComplete.classList.toggle("is-complete", state.completed.has(domain.id));
  els.markComplete.title = state.completed.has(domain.id)
    ? "Mark domain incomplete"
    : "Mark domain complete";
  renderCard();
  renderQuiz();
}

function renderCard() {
  const cards = getDomainFlashcards();
  const card = cards[state.selectedCard];
  const label = els.flashcard.querySelector(".flashcard__label");
  if (!card) {
    label.textContent = "Flashcards";
    els.flashcardText.textContent = "No flashcards are mapped to this domain yet.";
    return;
  }
  label.textContent = `${card.source} · ${state.selectedCard + 1} of ${cards.length} · ${
    state.cardFlipped ? "Answer" : "Question"
  }`;
  els.flashcardText.textContent = state.cardFlipped ? card.back : card.front;
}

function renderQuiz() {
  const questions = getDomainQuestions();
  const question = questions[state.selectedQuestion];
  if (!question) {
    els.quizPosition.textContent = "0 of 0";
    els.quizSource.textContent = "No questions";
    els.quizQuestion.textContent = "No practice questions were found for this domain.";
    els.quizOptions.innerHTML = "";
    els.quizFeedback.textContent = "";
    return;
  }

  const answerRecord = getAnswerRecord(question.id);
  const answeredCorrectly = answerRecord?.correct;
  els.quizPosition.textContent = `${state.selectedQuestion + 1} of ${questions.length}`;
  els.quizSource.textContent = question.source;
  els.quizQuestion.textContent = question.question;
  els.quizFeedback.textContent =
    answeredCorrectly === undefined
      ? "Choose the best answer."
      : answeredCorrectly
        ? `Correct. ${question.explanation}`
        : `Not quite. ${question.explanation}`;
  els.quizOptions.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const hasAnswer = answeredCorrectly !== undefined;
    button.type = "button";
    button.textContent = option;
    if (hasAnswer && index === question.answer) {
      button.classList.add("is-correct");
    }
    if (hasAnswer && answeredCorrectly === false && index === answerRecord.selected) {
      button.classList.add("is-wrong");
    }
    button.addEventListener("click", () => answerQuiz(index));
    els.quizOptions.appendChild(button);
  });
}

function renderHardQuiz() {
  const question = hardQuestionBank[state.selectedHardQuestion];
  const answeredIds = Object.keys(state.hardAnswers).filter((id) =>
    hardQuestionBank.some((item) => item.id === id)
  );
  const correct = answeredIds.filter((id) => getHardAnswerRecord(id).correct).length;
  const score = answeredIds.length ? Math.round((correct / answeredIds.length) * 100) : 0;

  if (!question) {
    els.hardPosition.textContent = "0 of 0";
    els.hardSource.textContent = "No questions";
    els.hardScore.textContent = "0%";
    els.hardQuestion.textContent = "No hard questions have been added yet.";
    els.hardOptions.innerHTML = "";
    els.hardFeedback.textContent = "";
    return;
  }

  const answerRecord = getHardAnswerRecord(question.id);
  const answeredCorrectly = answerRecord?.correct;
  els.hardPosition.textContent = `${state.selectedHardQuestion + 1} of ${hardQuestionBank.length}`;
  els.hardSource.textContent = question.source;
  els.hardScore.textContent = `${score}% hard score`;
  els.hardQuestion.textContent = question.question;
  els.hardFeedback.textContent =
    answeredCorrectly === undefined
      ? "Choose the best answer."
      : answeredCorrectly
        ? `Correct. ${question.explanation}`
        : `Not quite. ${question.explanation}`;
  els.hardOptions.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const hasAnswer = answeredCorrectly !== undefined;
    button.type = "button";
    button.textContent = option;
    if (hasAnswer && index === question.answer) {
      button.classList.add("is-correct");
    }
    if (hasAnswer && answeredCorrectly === false && index === answerRecord.selected) {
      button.classList.add("is-wrong");
    }
    button.addEventListener("click", () => answerHardQuiz(index));
    els.hardOptions.appendChild(button);
  });
}

function selectDomain(index) {
  state.selectedDomain = index;
  state.selectedCard = 0;
  state.selectedQuestion = 0;
  state.cardFlipped = false;
  render();
}

function answerQuiz(index) {
  const question = getDomainQuestions()[state.selectedQuestion];
  if (!question) {
    return;
  }
  state.quizAnswers[question.id] = {
    selected: index,
    correct: index === question.answer,
  };
  saveProgress();
  render();
}

function answerHardQuiz(index) {
  const question = hardQuestionBank[state.selectedHardQuestion];
  if (!question) {
    return;
  }
  state.hardAnswers[question.id] = {
    selected: index,
    correct: index === question.answer,
  };
  saveProgress();
  renderHardQuiz();
}

function getDomainQuestions() {
  const domainId = domains[state.selectedDomain].id;
  return questionBank.filter((question) => question.domain === domainId);
}

function getDomainFlashcards() {
  const domainId = domains[state.selectedDomain].id;
  if (flashcardDecks.length) {
    const allowedDecks = new Set(domainFlashcardDeckMap[domainId] || []);
    return flashcardDecks
      .filter((deck) => allowedDecks.has(deck.name))
      .flatMap((deck) =>
        deck.cards.map((card) => ({
          ...card,
          source: deck.name,
        }))
      );
  }
  return domains[state.selectedDomain].cards.map(([front, back]) => ({
    front,
    back,
    source: domains[state.selectedDomain].title,
  }));
}

function getAnswerRecord(questionId) {
  const value = state.quizAnswers[questionId];
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === "boolean") {
    return { selected: -1, correct: value };
  }
  return value;
}

function getHardAnswerRecord(questionId) {
  const value = state.hardAnswers[questionId];
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === "boolean") {
    return { selected: -1, correct: value };
  }
  return value;
}

function dedupeQuestions(questions) {
  const seen = new Set();
  return questions.filter((question) => {
    const key = question.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function normalizeQuestion(question) {
  if (typeof question.answer === "number") {
    return question;
  }
  return {
    ...question,
    answer: question.options.findIndex((option) => option === question.answer),
  };
}

function setMode(mode) {
  const isCards = mode === "cards";
  const isQuiz = mode === "quiz";
  const isHard = mode === "hard";
  const isCheatSheet = mode === "cheat-sheet";
  els.tabCards.classList.toggle("is-active", isCards);
  els.tabQuiz.classList.toggle("is-active", isQuiz);
  els.tabHard.classList.toggle("is-active", isHard);
  els.tabCheatSheet.classList.toggle("is-active", isCheatSheet);
  els.cardsMode.classList.toggle("is-active", isCards);
  els.quizMode.classList.toggle("is-active", isQuiz);
  els.hardMode.classList.toggle("is-active", isHard);
  els.cheatSheetMode.classList.toggle("is-active", isCheatSheet);
}

function render() {
  renderDomains();
  renderProgress();
  renderSelectedDomain();
  renderHardQuiz();
  renderCheatSheet();
}

function renderCheatSheet() {
  els.cheatSheet.innerHTML = "";
  cheatSheet.forEach((section) => {
    const article = document.createElement("article");
    article.className = "cheat-section";

    const heading = document.createElement("h3");
    heading.textContent = section.title;
    article.appendChild(heading);

    if (section.rows) {
      const grid = document.createElement("div");
      grid.className = "cheat-grid";
      section.rows.forEach(([label, value]) => {
        const labelCell = document.createElement("div");
        const valueCell = document.createElement("div");
        labelCell.textContent = label;
        valueCell.textContent = value;
        grid.append(labelCell, valueCell);
      });
      article.appendChild(grid);
    }

    if (section.traps) {
      const list = document.createElement("ul");
      list.className = "trap-list";
      section.traps.forEach((trap) => {
        const item = document.createElement("li");
        item.textContent = trap;
        list.appendChild(item);
      });
      article.appendChild(list);
    }

    if (section.note) {
      const note = document.createElement("p");
      note.className = "cheat-note";
      note.textContent = section.note;
      article.appendChild(note);
    }

    els.cheatSheet.appendChild(article);
  });
}

els.markComplete.addEventListener("click", () => {
  const domainId = domains[state.selectedDomain].id;
  if (state.completed.has(domainId)) {
    state.completed.delete(domainId);
  } else {
    state.completed.add(domainId);
  }
  saveProgress();
  render();
});

els.flipCard.addEventListener("click", () => {
  if (!state.cardFlipped) {
    state.reviewedCards += 1;
  }
  state.cardFlipped = !state.cardFlipped;
  saveProgress();
  renderCard();
  renderProgress();
});

els.flashcard.addEventListener("click", () => els.flipCard.click());
els.flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    els.flipCard.click();
  }
});

els.previousCard.addEventListener("click", () => {
  const cards = getDomainFlashcards();
  if (!cards.length) {
    return;
  }
  state.selectedCard = (state.selectedCard - 1 + cards.length) % cards.length;
  state.cardFlipped = false;
  renderCard();
});

els.nextCard.addEventListener("click", () => {
  const cards = getDomainFlashcards();
  if (!cards.length) {
    return;
  }
  state.selectedCard = (state.selectedCard + 1) % cards.length;
  state.cardFlipped = false;
  renderCard();
});

els.previousQuestion.addEventListener("click", () => {
  const questions = getDomainQuestions();
  if (!questions.length) {
    return;
  }
  state.selectedQuestion = (state.selectedQuestion - 1 + questions.length) % questions.length;
  renderQuiz();
});

els.nextQuestion.addEventListener("click", () => {
  const questions = getDomainQuestions();
  if (!questions.length) {
    return;
  }
  state.selectedQuestion = (state.selectedQuestion + 1) % questions.length;
  renderQuiz();
});

els.previousHardQuestion.addEventListener("click", () => {
  if (!hardQuestionBank.length) {
    return;
  }
  state.selectedHardQuestion =
    (state.selectedHardQuestion - 1 + hardQuestionBank.length) % hardQuestionBank.length;
  renderHardQuiz();
});

els.nextHardQuestion.addEventListener("click", () => {
  if (!hardQuestionBank.length) {
    return;
  }
  state.selectedHardQuestion = (state.selectedHardQuestion + 1) % hardQuestionBank.length;
  renderHardQuiz();
});

els.tabCards.addEventListener("click", () => setMode("cards"));
els.tabQuiz.addEventListener("click", () => setMode("quiz"));
els.tabHard.addEventListener("click", () => setMode("hard"));
els.tabCheatSheet.addEventListener("click", () => setMode("cheat-sheet"));

els.startReview.addEventListener("click", () => {
  document.querySelector(".workspace").scrollIntoView({ behavior: "smooth", block: "start" });
});

els.resetProgress.addEventListener("click", () => {
  state.completed.clear();
  state.reviewedCards = 0;
  state.quizAnswers = {};
  state.hardAnswers = {};
  saveProgress();
  render();
});

render();
