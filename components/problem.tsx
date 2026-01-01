import { ibmPlexMono, romanFont } from "@/font";
import { Direction } from "@/svg/direction";
import { Marker } from "@/svg/marker";
import { OverbuiltMvp } from "@/svg/overflow";
import { Question } from "@/svg/question";
import { SlowDevelopment } from "@/svg/slow-development";
import { Timeline } from "@/svg/timeline";
import { Calendar1, CircleAlert } from "lucide-react";

export const Problem = () => {
  return (
    <div className="bg-white py-14 text-[#040E0E]">
      <div className="relative px-4 sm:px-8 lg:px-16 border-y border-gray-200">
        <div className="absolute left-0 -top-1 w-full flex justify-between px-3 sm:px-6 lg:px-14">
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-200 ml-1 m z-10"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-200 mr-1 z-10"></span>
        </div>
        <div className="absolute left-0 -bottom-1 w-full flex justify-between px-3 sm:px-6 lg:px-14">
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-200 ml-1 m z-10"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white border border-gray-200 mr-1 z-10"></span>
        </div>
        <div className="border-x border-gray-200 flex gap-6 items-stretch">
          <div className="pt-5 w-full">
            <h2
              className={`px-6 text-[#FF5858] uppercase ${ibmPlexMono.className} text-base`}
            >
              problems
            </h2>
            <p className={`px-6 text-5xl ${romanFont.className} mt-3 tracking-tight`}>
              Product building shouldn&apos;t be this complicated
            </p>
            <button className="mx-7 mt-8 text-center bg-[#0D2727] hover:bg-[#0D2727]/96 transition-colors cursor-pointer text-white rounded-xs px-6 py-2">
              Book a free call
            </button>

            <ul className="mt-12">
              <li className="flex items-center gap-3 border-b border-gray-200 py-4 px-8">
                <span className="bg-[#FAFAFA] p-1.5 px-2 rounded-sm border-[0.5px] border-[#EBEBEB]">
                  <CircleAlert
                    fill="#FF5858"
                    size={18}
                    color="white"
                    className="block"
                  />
                </span>
                <span className="text-lg">
                  Too many agencies, no clear ownership
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-gray-200 py-4 px-8">
                <span className="bg-[#FAFAFA] p-1.5 px-2 rounded-sm border-[0.5px] border-[#EBEBEB]">
                  <CircleAlert
                    fill="#FF5858"
                    size={18}
                    color="white"
                    className="block"
                  />
                </span>
                <span className="text-lg">
                  Slow timelines and unclear progress
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-gray-200 py-4 px-8">
                <span className="bg-[#FAFAFA] p-1.5 px-2 rounded-sm border-[0.5px] border-[#EBEBEB]">
                  <CircleAlert
                    fill="#FF5858"
                    size={18}
                    color="white"
                    className="block"
                  />
                </span>
                <span className="text-lg">
                  Designs that look good but don&apos;t convert{" "}
                </span>
              </li>
              <li className="flex items-center gap-3 py-4 px-8">
                <span className="bg-[#FAFAFA] p-1.5 px-2 rounded-sm border-[0.5px] border-[#EBEBEB]">
                  <CircleAlert
                    fill="#FF5858"
                    size={18}
                    color="white"
                    className="block"
                  />
                </span>
                <span className="text-lg">
                  Tech decisions that don&apos;t scale later
                </span>
              </li>{" "}
            </ul>
          </div>
          <div className="bg-[#FAFAFA] w-full relative">
            <p className="text-[#FF3333] flex text-xs gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border items-center absolute -rotate-[30deg] top-32 left-1/2 -translate-1/2">
              <Marker />
              Design Without Strategy
            </p>
            <p className="text-[#FF3333] flex text-xs gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border absolute items-center bottom-26 left-28">
              <Timeline />
              Unpredictable Timelines
            </p>
            <p className="text-[#FF3333] flex text-xs items-center gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-20 right-12 rotate-[30deg]">
              <SlowDevelopment />
              Slow Development Cycles
            </p>
            <p className="text-[#FF3333] flex text-xs gap-2 px-3 rounded-2xl py-1 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-14 right-40 items-center">
              <OverbuiltMvp />
              Overbuilt MVPs
            </p>
            <p className="text-[#FF3333] flex text-xs gap-1 px-3 rounded-2xl py-1.5 border-[#FFC5C5] bg-[#FFF3F3] border absolute bottom-12 left-16 items-center -rotate-12">
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
