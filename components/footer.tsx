import { romanFont } from "@/font";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
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
            <Button className="bg-[#14ABBA] hover:bg-[#14ABBA]/80 transition-colors text-white">
              Book a free call <Play size={12} fill="white" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
