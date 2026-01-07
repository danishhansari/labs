export interface faqType {
  id: number;
  question: string;
  answer: string;
}

export interface ProblemType {
  id: number;
  text: string;
  border: string;
}

export const FAQs: Array<faqType> = [
  {
    id: 1,
    question: "What's the process for starting projects?",
    answer:
      "It starts with a quick discovery call where we understand your vision. From there, we define scope, timelines, and move fast with a clear execution plan.",
  },
  {
    id: 2,
    question: "Do you only offer fixed packages?",
    answer:
      "No, our packages are starting points, not limits. We tailor solutions around your product’s goals so you get exactly what you need.",
  },
  {
    id: 3,
    question: "How fast can you deliver?",
    answer:
      "Speed is our strength. Depending on the scope, we deliver impactful results in just a few weeks without compromising on quality.",
  },
  {
    id: 4,
    question: "Can you redesign an existing product or website?",
    answer:
      "Absolutely. We refine what you already have by improving UX, visuals, and performance to make your product sharper and more effective.",
  },
  {
    id: 5,
    question: "Will I be involved during the process?",
    answer:
      "Yes, collaboration is key. You’ll stay involved through regular updates and reviews to ensure everything aligns with your vision.",
  },
  {
    id: 6,
    question: "What happens after the project is completed?",
    answer:
      "We don’t disappear after launch. We support you with optimizations, improvements, and long-term growth if you choose to continue.",
  },
];

export const Problems: Array<ProblemType> = [
  {
    id: 1,
    text: "Too many agencies, no clear ownership",
    border: "border-b",
  },
  {
    id: 2,
    text: "Slow timelines and unclear progress",
    border: "border-b",
  },
  {
    id: 3,
    text: "Designs that look good but don’t convert",
    border: "border-b",
  },
  {
    id: 4,
    text: "Tech decisions that don’t scale later",
    border: "",
  },
];
