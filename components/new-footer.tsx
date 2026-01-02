import { romanFont } from "@/font";
import { Play } from "lucide-react";

export const NewFooter = () => {
  return (
    <>
      <div className="text-white px-4 sm:px-8 lg:px-16 bg-[#040E0E]">
        <div className="relative border-x border-zinc-800">
          <h1
            className={`${romanFont.className} pt-16 pb-4 tracking-tight text-5xl w-[45%] mx-auto text-center`}
          >
            Got something in mind? Let&apos;s talk it through
          </h1>
          <div className="flex items-center justify-center pb-8">
            <button className="text-white bg-[#14ABBA] hover:bg-[#14ABBA]/80 transition-colors flex items-center gap-2 px-4 py-2 rounded-sm text-base cursor-pointer">
              Book a free call <Play size={12} fill="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
