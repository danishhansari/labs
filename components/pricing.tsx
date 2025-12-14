import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <section className="flex gap-4 flex-col px-4 md:flex-row items-center max-w-6xl mx-auto text-sm">
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
      />

      <Card
        cta="Scale my product"
        title="Best for Startups and teams ready to scale traffic, users, or revenue"
        outcome="A scalable web or mobile product built to handle growth, performance, and real users."
        guarantee="Not happy with the result? We revise until it meets the agreed outcome."
        plan="Growth Sprint"
        postOutcome="More than features — a product built to grow."
        deliveryTime="Delivered in 10–14 days"
        promise={[
          "Product & conversion strategy session",
          "UI/UX design tailored to your audience",
          "Fully responsive website or MVP build",
          "Core integrations (forms, analytics, basic APIs)",
          "QA testing & launch support",
        ]}
      />

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
      />

      {/* <div className="p-6 rounded-4xl bg-black/80 border">
        <button
          className="rounded-4xl py-1 border px-4 bg-[#babbde] text-zinc-800"
          disabled
        >
          Growth Sprint
        </button>
        <p>
          Best for Startups and teams ready to scale traffic, users, or revenue
        </p>
        <p>
          A scalable web or mobile product that: Handles real users and growth
          Is built with clean, maintainable architecture Improves performance,
          usability, and reliability
        </p>
        <p>
          You don&apos;t just get features — you get a product built to grow.
        </p>
        <p>Delivered in 3–4 weeks</p>
        <p>
          Guarantee: Not happy with the result? We revise until it meets the
          agreed outcome.
        </p>
        <Button>Scale my product</Button>
        <p>You get:</p>
        <p>
          <Check className="inline-block" size={15} /> Product roadmap &
          technical architecture
        </p>
        <p>
          <Check className="inline-block" size={15} /> Full website or mobile
          app development
        </p>
        <p>
          <Check className="inline-block" size={15} /> Backend systems & API
          integrations
        </p>
        <p>
          <Check className="inline-block" size={15} /> Performance optimization
          & security best practices
        </p>
        <p>
          <Check className="inline-block" size={15} /> Deployment + post-launch
          support
        </p>
      </div>

      <div>
        <Button>Product Partner Sprint</Button>
        <p>
          Best for Complex products, startups, and enterprises needing long-term
          execution
        </p>
        <p>
          A fully custom digital product, delivered through structured sprints
          that: Align tech decisions with business goals Reduce long-term
          technical debt Allow continuous improvement and scaling
        </p>
        <p>We work as your extended product team.</p>
        <p>Custom roadmap</p>
        <p>
          Guarantee: Transparent milestones. Pay only for completed, approved
          work.
        </p>
        <Button>Talk to us</Button>
        <p>You get:</p>
        <p>
          <Check className="inline-block" size={15} /> Clear scope & success
          metrics
        </p>
        <p>
          <Check className="inline-block" size={15} />
          Fixed timelines — no endless delays
        </p>
        <p>
          <Check className="inline-block" size={15} /> Direct communication with
          builders
        </p>
        <p>
          <Check className="inline-block" size={15} /> Production-ready code
        </p>
        <p>
          <Check className="inline-block" size={15} /> Post-launch support
        </p>
      </div> */}
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
}: {
  plan: string;
  title: string;
  outcome: string;
  guarantee: string;
  cta: string;
  promise: Array<string>;
  postOutcome: string;
  deliveryTime: string;
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
        <p className="text-3xl font-semibold italic mt-4">$1699</p>
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
