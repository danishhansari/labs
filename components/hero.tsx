import { romanFont } from "@/font";
import { Fast } from "@/svg/fast";
import { Growth } from "@/svg/growth";
import { UXLed } from "@/svg/svgs";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-24">
      <div className="px-8 py-5 border-x-[0.01px] pt-6 border-t-0 border-b">
        <p
          className={`${romanFont.className} text-6xl text-center tracking-tight mt-8`}
        >
          Thoughtful design.
          <br />
          Reliable product execution.
        </p>
        <p className="text-base text-[#849191] w-[55%] mt-4 mx-auto text-center">
          From landing pages to full-scale apps, we partner with founders to
          turn ideas into reliable, scalable products without the usual delays.
        </p>
        <div className="flex items-center gap-4 justify-center mt-8">
          <Button
            size={"lg"}
            className="bg-[#14ABBA] hover:bg-[#14ABBA]/80 transition-colors text-white"
          >
            Book a free call <Play size={10} fill="white" />
          </Button>
          <Button size={"lg"} variant={"outline"}>
            View our work
          </Button>
        </div>

        <div className="mb-8 mt-18 flex items-center justify-center gap-10">
          <p className="flex items-center gap-2 text-sm">
            <Fast /> Fast Product Launches
          </p>
          <p className="flex items-center gap-2 text-sm">
            <UXLed /> UX-led product design
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Growth /> Scalable Development
          </p>
        </div>
      </div>
    </div>
  );
};
