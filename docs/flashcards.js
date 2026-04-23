window.AIF_FLASHCARD_DECKS = [
  {
    name: "Fundamentals of Generative AI",
    cards: [
      {
        front: "What is a foundation model (FM)?",
        back: "A large pre-trained model that can be adapted for many tasks, such as text, image, and code.",
      },
      {
        front: "What is Generative AI?",
        back: "AI that creates new content, such as text, images, or audio, instead of just analyzing data.",
      },
      {
        front: "Tokens vs Embeddings",
        back: "Tokens are pieces of text input/output. Embeddings are numeric vector representations of meaning.",
      },
      {
        front: "What controls randomness?",
        back: "Temperature. Low temperature is more deterministic; high temperature is more creative.",
      },
      {
        front: "What determines prompt size?",
        back: "Context window.",
      },
      {
        front: "What increases cost in LLM?",
        back: "The number of tokens processed.",
      },
    ],
  },
  {
    name: "Prompt Engineering & LLM Behavior",
    cards: [
      { front: "How to control tone/style?", back: "Prompt engineering." },
      { front: "Few-shot prompting requires?", back: "Examples of input-output pairs." },
      { front: "How to reduce hallucinations?", back: "Use RAG or lower temperature." },
      { front: "Best way to enforce output format?", back: "Explicit instructions in the prompt." },
      {
        front: "Why prompts differ across models?",
        back: "Different tokenization and training behavior.",
      },
    ],
  },
  {
    name: "Model Customization",
    cards: [
      {
        front: "Fine-tuning vs RAG",
        back: "Fine-tuning changes model behavior. RAG injects external knowledge.",
      },
      { front: "When to use RAG?", back: "When data changes frequently." },
      {
        front: "When to use fine-tuning?",
        back: "When behavior or style needs permanent change.",
      },
      { front: "What format for fine-tuning?", back: "Prompt + completion pairs." },
      {
        front: "What is transfer learning?",
        back: "Adapting a pre-trained model for new tasks.",
      },
    ],
  },
  {
    name: "AWS AI Services",
    cards: [
      {
        front: "Amazon Bedrock",
        back: "Access foundation models without managing infrastructure.",
      },
      {
        front: "Amazon Comprehend",
        back: "Text analysis, including sentiment, entities, and key phrases.",
      },
      {
        front: "Amazon Textract",
        back: "Extract text from documents, PDFs, and scans.",
      },
      { front: "Amazon Transcribe", back: "Speech to text." },
      { front: "Amazon Rekognition", back: "Image and video analysis." },
      { front: "Amazon Lex", back: "Chatbots and natural language understanding." },
    ],
  },
  {
    name: "SageMaker & ML Lifecycle",
    cards: [
      { front: "SageMaker Canvas", back: "No-code ML." },
      { front: "SageMaker Studio", back: "Full ML IDE." },
      { front: "Feature Store", back: "Central feature repository." },
      { front: "Model Monitor", back: "Detect drift in production." },
      { front: "Clarify", back: "Bias detection and explainability." },
    ],
  },
  {
    name: "Inference Types",
    cards: [
      { front: "Real-time inference", back: "Low latency, immediate response." },
      { front: "Batch transform", back: "Large offline datasets." },
      { front: "Async inference", back: "Large payloads with no immediate response." },
      { front: "Serverless inference", back: "Auto scale for intermittent traffic." },
    ],
  },
  {
    name: "Responsible AI",
    cards: [
      { front: "What causes bias?", back: "Unbalanced training data." },
      { front: "How to reduce bias?", back: "Balanced datasets and fairness metrics." },
      { front: "Explainability tool?", back: "SageMaker Clarify." },
      {
        front: "What is hallucination?",
        back: "A model generates incorrect but plausible answers.",
      },
      {
        front: "What is plagiarism?",
        back: "Using generated content without attribution.",
      },
    ],
  },
  {
    name: "Security & Governance",
    cards: [
      { front: "IAM", back: "Access control and least privilege." },
      { front: "CloudTrail", back: "Logs API calls." },
      { front: "GuardDuty", back: "Threat detection." },
      { front: "Macie", back: "Detect sensitive data such as PII." },
      { front: "KMS", back: "Encryption key management." },
      { front: "PrivateLink", back: "Access AWS services without internet." },
    ],
  },
  {
    name: "Evaluation Metrics",
    cards: [
      { front: "Accuracy", back: "Correct predictions divided by total predictions." },
      { front: "F1 Score", back: "Balance of precision and recall." },
      { front: "BLEU", back: "Translation quality." },
      { front: "ROUGE", back: "Summarization quality." },
      {
        front: "Confusion Matrix",
        back: "Classification performance breakdown.",
      },
    ],
  },
  {
    name: "Common Traps",
    cards: [
      { front: "Hallucination fix?", back: "RAG, not fine-tuning." },
      { front: "Cost optimization?", back: "Reduce tokens." },
      { front: "Tone control?", back: "Prompt engineering." },
      { front: "Security logging?", back: "CloudTrail." },
      { front: "Bias detection?", back: "Clarify." },
    ],
  },
];
