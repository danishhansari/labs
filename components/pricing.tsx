import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <section className="flex gap-4 flex-col px-4 md:flex-row items-stretch max-w-6xl mx-auto text-sm justify-around">
      <Card
        cta="Launch My Product"
        title="Founders & startups who need speed without shortcuts"
        outcome="You'll walk away with a fully launched, conversion-ready website
          or MVP"
        guarantee="If we
          miss the deadline, you get 10% off, no questions asked."
        plan="Launch Sprint"
        postOutcome="This is not a draft. This is launch-ready."
        deliveryTime="Delivered in 10–14 days"
        promise={[
          "Product & conversion strategy session",
          "UI/UX design tailored to your audience",
          "Fully responsive website or MVP build",
          "Core integrations (forms, analytics, basic APIs)",
          "QA testing & launch support",
        ]}
        price="$999"
      />

      <Card
        cta="Scale my product"
        title="Best for Startups and teams ready to scale traffic, users, or revenue"
        outcome="A scalable web or mobile product built to handle growth, performance, and real users."
        guarantee="Not happy with the result? We revise until it meets the agreed outcome."
        plan="Growth Sprint"
        postOutcome="More than features — a product built to grow."
        deliveryTime="Delivered in 3–4 weeks"
        promise={[
          "Product roadmap & technical architecture",
          "Full website or mobile app development",
          "Backend systems & API integrations",
          "Performance optimization & security best practices",
          "Deployment + post-launch support",
        ]}
        price="$1599"
      />

      <Card
        cta="Talk to us"
        title="Best for Complex products, startups, and enterprises needing long-term execution"
        outcome="A custom digital product delivered in sprints—aligned with business goals, low debt, built to scale."
        guarantee="Transparent milestones. Pay only for completed, approved work."
        plan="Product Partner Sprint"
        postOutcome="We work as your extended product team."
        deliveryTime="Custom roadmap"
        promise={[
          "Clear scope & success metrics",
          "Fixed timelines — no endless delays",
          "Direct communication with builders",
          "Production-ready code",
          "Post-launch support",
        ]}
        price="Custom Pricing"
      />
    </section>
  );
};

const Card = ({
  plan,
  title,
  outcome,
  guarantee,
  cta,
  promise,
  postOutcome,
  deliveryTime,
  price,
}: {
  plan: string;
  title: string;
  outcome: string;
  guarantee: string;
  cta: string;
  promise: Array<string>;
  postOutcome: string;
  deliveryTime: string;
  price?: string;
}) => {
  return (
    <>
      <div className="p-6 rounded-4xl bg-black/80 border">
        <button
          className="rounded-4xl py-1 border px-4 bg-[#BADEDD] text-zinc-800"
          disabled
        >
          {plan}
        </button>
        <p className="text-3xl font-semibold italic mt-4">{price}</p>
        <p className="text-zinc-400 text-sm font-thin my-5">{title}</p>
        <p className="my-1">
          <span className="font-semibold tracking-wide">Outcome:</span>{" "}
          {outcome}
        </p>
        <p className="text-zinc-400 my-3">
          {postOutcome}
          <br />
          {deliveryTime}
        </p>
        <p className="my-4">
          <span className="font-semibold tracking-wide">Guarantee:</span>{" "}
          {guarantee}
        </p>
        <button className="block w-full rounded-4xl text-md py-3 bg-white hover:bg-gray-200 transition-colors my-4 text-black">
          {cta}
        </button>

        <p className="text-md font-semibold mt-4 mb-2">You get:</p>
        <div className="pl-4 space-y-2 text-sm text-muted-foreground">
          {promise.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check size={15} className="shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
