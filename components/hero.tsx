"use client";
import { Button } from "@/components/ui/stateful-button";
import { Phone, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { secondaryFont } from "@/font";

export const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pb-8 px-4 sm:px-8 h-screen md:px-16 lg:px-28 md:pb-10 overflow-x-clip w-full relative pt-24 lg:pt-30">
      <div className="container flex flex-col items-center relative z-10 gap-2 pt-12">
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-bold
             tracking-tight lg:text-balance lg:w-[80%] mx-auto lg:mt-0`}
        >
          From Concept to Launch, We Make It{" "}
          <span
            className={`${secondaryFont.className} text-amber-5001 text-[#20808D]`}
          >
            {" "}
            Happen
          </span>
        </h1>
        <p
          className={`lg:leading-7 [&:not(:first-child)]:mt-6 text-center text-md md:text-xl lg:w-[60%] mx-auto text-[#BADEDD]/80  text-balance`}
        >
          We craft digital experiences that empower brands to innovate,
          dominate, and stay ahead in an ever-evolving tech world.
        </p>
      </div>
      <div className="flex mt-24 md:mt-12 items-center flex-col md:flex-row gap-4 justify-center md:max-w-lg md:mx-auto">
        <Button
          className="bg-[#20808D] hover:ring-[#23a1b2] !px-8 py-3 text-[#FBFAF4] w-full"
          data-cal-link="aurolabs/15min"
          data-cal-config='{"theme":"dark"}'
        >
          Book a Quick Call <Phone size={18} className="inline-block mb-0.5" />
        </Button>
        <Button className="bg-[#BADEDD] hover:ring-[#c7ebea] text-[#091717] font-thin !px-8 py-3 w-full">
          Explore Our Work{" "}
          <Sparkles size={15} className="inline-block mb-0.5" />
        </Button>
      </div>
      <p className="text-center mt-6 text-[#BADEDD]/50 ">
        Get a 7-day trial to see if we're a fit
      </p>
    </section>
  );
};
