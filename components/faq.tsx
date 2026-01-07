import { ibmPlexMono, romanFont } from "@/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs, faqType } from "@/lib/content";

export const Faq = () => {
  return (
    <>
      <div className="bg-white text-[#040E0E] border-zinc-200">
        <div className="relative px-4 sm:px-8 lg:px-20 border-y border-zinc-200">
          <div className="relative border-x border-zinc-200">
            <div className="pt-12 border">
              <h2
                className={`pt-2 text-center uppercase ${ibmPlexMono.className} text-sm md:text-base text-[#14ABBA]`}
              >
                faqs
              </h2>
              <h1
                className={`${romanFont.className} text-3xl md:text-5xl text-center tracking-tight mt-1 mb-2 md:mb-6`}
              >
                Frequently asked questions
              </h1>
            </div>
            <div className="w-full md:w-[55%] mt-4 py-4 pb-14 mx-auto px-4">
              {FAQs.map((item: faqType) => (
                <Accordion
                  className="border-b border-zinc-200"
                  type="single"
                  collapsible
                  key={item.id}
                >
                  <AccordionItem value="item-1 border-b border-zinc-200">
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-[#676C6C]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
