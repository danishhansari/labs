import { ibmPlexMono, romanFont } from "@/font";
import { BenefitsGrowth } from "@/svg/benefits-growth";
import { Target } from "@/svg/target";
import { Brain, MessageSquareDot, UserRound, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ForegroundButton } from "./ui/foreground-button";

export const Benefits = () => {
  return (
    <>
      <div className="bg-white py-12 md:py-14 text-[#040E0E]">
        <div className="relative px-4 sm:px-8 lg:px-20 border-y border-zinc-200">
          <div className="relative border-x border-zinc-200">
            <div className="absolute -top-1.5 -left-1.5 w-[103.5%] md:w-[101%]  flex justify-between">
              <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-zinc-200  z-10"></span>
              <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-zinc-200  z-10"></span>
            </div>
          </div>
          <div className="border-x border-zinc-200">
            <h4
              className={`pt-6 text-center font-semibold uppercase ${ibmPlexMono.className} text-sm md:text-base text-[#14ABBA]`}
            >
              Benefits
            </h4>
            <h2
              className={`${romanFont.className} tracking-tight text-3xl md:text-5xl text-center mt-1 pb-16`}
            >
              Why teams choose AuroLabs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-200">
              <div className="p-6 border-t border-r border-zinc-200">
                <div className="bg-[#3B8EFC14] border border-[#BCD7FF] rounded-md inline-block p-1 px-1.5 my-2">
                  <UserRound color="#3B8EFC" size={27} />
                </div>
                <h4 className={`${romanFont.className} text-xl mb-2`}>
                  Founder-First Thinking
                </h4>
                <p className={`text-[#676C6C] text-base`}>
                  We prioritize your business goals and user needs, not internal
                  processes or unnecessary technical complexity.
                </p>
              </div>

              <div className="p-6 border-t border-r border-zinc-200">
                <div className="bg-[#9543FF14] border border-[#E7D3FF] rounded-md inline-block p-1 px-1.5 my-2">
                  <Brain color="#9543FF" size={27} />
                </div>
                <h4 className={`${romanFont.className} text-xl mb-2`}>
                  UX-Led Approach
                </h4>
                <p className={`text-[#676C6C] text-base`}>
                  Every decision starts with user experience, ensuring designs
                  are clear, usable, and built to convert.
                </p>
              </div>

              <div className="p-6 border-t border-zinc-200">
                <div className="bg-[#FF9B1814] border border-[#FFECD5] rounded-md inline-block p-1 px-1.5 my-2">
                  <Zap color="#FF9B18" size={27} />
                </div>
                <h4 className={`${romanFont.className} text-xl mb-2`}>
                  Fast, Focused Delivery
                </h4>
                <p className={`text-[#676C6C] text-base`}>
                  Clear scope, structured sprints, and realistic timelines help
                  us deliver quickly without sacrificing quality.
                </p>
              </div>

              <div className="p-6 border-t border-r border-zinc-200">
                <div className="bg-[#275AD914] border border-[#D6E1FF] rounded-md inline-block p-1.5 px-1.5 my-2">
                  <MessageSquareDot color="#275AD9" size={25} />
                </div>
                <h4 className={`${romanFont.className} text-xl mb-2`}>
                  Clear Communication
                </h4>
                <p className={`text-[#676C6C] text-base`}>
                  You work directly with designers and developers, with regular
                  updates and zero unnecessary back-and-forth.
                </p>
              </div>

              <div className="p-6 border-t border-r border-zinc-200">
                <div className="bg-[#3B8EFC14] border border-[#BCD7FF] rounded-md inline-block p-1 px-1.5 my-2">
                  <BenefitsGrowth />
                </div>
                <h4 className={`${romanFont.className} text-xl mb-2`}>
                  Scalable Builds
                </h4>
                <p className={`text-[#676C6C] text-base`}>
                  We design and build scalable products that grow smoothly,
                  without performance issues or costly rebuilds later.
                </p>
              </div>

              <div className="p-6 border-t border-zinc-200">
                <div className="bg-[#3B8EFC14] border border-[#BCD7FF] rounded-md inline-block p-1 px-1.5 my-2">
                  <Target />
                </div>
                <h4 className={`${romanFont.className} text-xl mb-2`}>
                  Outcome Driven
                </h4>
                <p className={`text-[#676C6C] text-base`}>
                  Our success is measured by impact—better usability, stronger
                  conversions, and products people actually use.
                </p>
              </div>
            </div>
          </div>
          <div className="border-x border-zinc-200 pt-8 pb-12">
            <ForegroundButton className="px-6 py-2 mx-auto flex mt-8 mb-8" />
          </div>
        </div>
      </div>
    </>
  );
};
