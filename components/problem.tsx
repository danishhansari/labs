import { ibmPlexMono, romanFont } from "@/font";
import { Direction } from "@/svg/direction";
import { Marker } from "@/svg/marker";
import { OverbuiltMvp } from "@/svg/overflow";
import { Question } from "@/svg/question";
import { SlowDevelopment } from "@/svg/slow-development";
import { Timeline } from "@/svg/timeline";
import { CircleAlert } from "lucide-react";
import { ForegroundButton } from "./ui/foreground-button";
import { Problems, ProblemType } from "@/lib/content";

export const Problem = () => {
  return (
    <div className="bg-white py-12 md:py-14 text-[#040E0E]">
      <div className="relative px-5 sm:px-8 lg:px-18 border-y border-zinc-200">
        <div className="absolute left-0 -top-1 w-full flex justify-between px-3 sm:px-6 lg:px-16">
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-zinc-200 ml-1 m z-10"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-zinc-200 mr-1 z-10"></span>
        </div>
        <div className="absolute left-0 -bottom-1 w-full flex justify-between px-3 sm:px-6 lg:px-16">
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-zinc-200 ml-1 m z-10"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-zinc-200 mr-1 z-10"></span>
        </div>
        <div className="border-x border-zinc-200 flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="pt-5 w-full">
            <h2
              className={`px-4 md:px-6 text-[#FF5858] uppercase ${ibmPlexMono.className} text-sm md:text-base`}
            >
              problems
            </h2>
            <p
              className={`px-4 md:pl-6 text-3xl font-normal md:text-5xl ${romanFont.className} mt-3 tracking-tight`}
            >
              Product building shouldn&apos;t be this complicated
            </p>
            <ForegroundButton className="mx-5 md:mx-7 mt-6 md:mt-8" />

            <ul className="mt-8 md:mt-12">
              {Problems.map((problem: ProblemType) => (
                <li
                  key={problem.id}
                  className="flex items-center gap-1 md:gap-3 border-b border-zinc-200 py-4 px-5 md:px-8"
                >
                  <span className="bg-[#FAFAFA] p-1 md:p-1.5 px-1.5 md:px-2 rounded-sm border-[0.5px] border-[#EBEBEB]">
                    <CircleAlert
                      fill="#FF5858"
                      size={18}
                      color="white"
                      className="block"
                    />
                  </span>
                  <span className="text-xs md:text-sm">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FAFAFA] w-full relative h-[60vh] md:h-[80vh] lg:h-auto">
            <p className="text-[#FF3333] flex text-xs gap-1 md:gap-2 px-1 md:px-3 rounded-2xl py-0.5 md:py-1 border-[#FFC5C5] bg-[#FFF3F3] border items-center absolute -rotate-30 top-32 left-1/2 -translate-1/2">
              <Marker />
              <span>Design Without Strategy</span>
            </p>
            <p className="text-[#FF3333] flex text-xs gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border absolute items-center bottom-28 left-28">
              <Timeline />
              Unpredictable Timelines
            </p>
            <p className="text-[#FF3333] flex text-xs items-center gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-24 right-12 rotate-30">
              <SlowDevelopment />
              Slow Development Cycles
            </p>
            <p className="text-[#FF3333] flex text-xs gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-14 right-34 items-center">
              <OverbuiltMvp />
              Overbuilt MVPs
            </p>
            <p className="text-[#FF3333] flex text-xs gap-1 px-3 rounded-2xl py-1.5 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-14 left-16 items-center -rotate-12">
              <Direction /> Unclear Product Direction
            </p>
            <p className="text-[#FF3333] flex text-xs gap-1 px-3 rounded-2xl py-1.5 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-0 left-1/2 -translate-1/2 items-center">
              <Question />
              Agencty Communication Gaps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
