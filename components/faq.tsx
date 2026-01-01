import { ibmPlexMono, romanFont } from "@/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <>
      <div className="bg-white py-4 text-[#040E0E] border-gray-200">
        <div className="relative px-4 sm:px-8 lg:px-16 border-y border-gray-200">
          <div className="relative border-x border-gray-200">
            <div className="pt-12 border">
              <h2
                className={`pt-2 text-center uppercase ${ibmPlexMono.className} text-sm text-[#14ABBA]`}
              >
                faqs
              </h2>
              <h1
                className={`${romanFont.className} text-5xl text-center tracking-tight mt-1 mb-6`}
              >
                Frequently asked questions
              </h1>
            </div>
            <div className="w-[55%] mt-4 py-4 pb-8 mx-auto">
              <Accordion
                className="border-b border-gray-200"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1 border-b border-gray-200">
                  <AccordionTrigger>
                    What&apos;s the process for starting projects?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#676C6C]">
                    No. While we offer structured sprints, we also tailor scope
                    and timelines based on your product and goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                className="border-b border-gray-200"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Do you only offer fixed packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#676C6C]">
                    No. While we offer structured sprints, we also tailor scope
                    and timelines based on your product and goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                className="border-b border-gray-200"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>How fast can you deliver?</AccordionTrigger>
                  <AccordionContent className="text-[#676C6C]">
                    No. While we offer structured sprints, we also tailor scope
                    and timelines based on your product and goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                className="border-b border-gray-200"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can you redesign an existing product or website?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#676C6C]">
                    No. While we offer structured sprints, we also tailor scope
                    and timelines based on your product and goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                className="border-b border-gray-200"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Will I be involved during the process?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#676C6C]">
                    No. While we offer structured sprints, we also tailor scope
                    and timelines based on your product and goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                className="border-b border-gray-200"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What happens after the project is completed?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#676C6C]">
                    No. While we offer structured sprints, we also tailor scope
                    and timelines based on your product and goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
