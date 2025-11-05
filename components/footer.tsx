"use client";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Cal from "@calcom/embed-react";
import { TextReveal } from "./ui/text-reveal";
import { format } from "date-fns";

const Footer = () => {
  const currentMonthName = format(new Date(), "MMMM");
  return (
    <section className="pb-8 md:pb-10 overflow-x-clip w-full mx-auto relative pt-20 lg:pt-24  text-center">
      <div className="text-2xl mt-8 md:mt-12 md:text-5xl font-semibold text-center tracking-wide mx-auto">
        <TextReveal
          className="px-4 text-balance mx-auto"
          text={"If you scrolled this far, It's time to LEVEL UP"}
        />
        <Button
          className="bg-[#20808D] border-none !px-7 hover:scale-105 hover:bg-[#23a1b2] border text-[#FBFAF4] hover:text-white py-6 transition-transform mt-8 md:flex-0 rounded-full z-40"
          variant={"default"}
          data-cal-link="aurolabs/15min"
          data-cal-config='{"theme":"dark"}'
        >
          Book a Quick Call <Phone />
        </Button>
      </div>

      <p className="text-4xl mt-24 hidden md:block font-semibold tracking-wider">
        Be quick! Spots are almost gone for {currentMonthName}.
      </p>
      <div className="mt-24 md:block">
        <Cal
          calLink="aurolabs/chat-with-aurolabs"
          className="mt-16"
          config={{ theme: "dark" }}
        />
      </div>
      <p
        className="md:text-[15rem] text-7xl text-transparent select-none mt-8"
        style={{
          WebkitTextStroke: "1px #20808D",
        }}
      >
        AuroLabs
      </p>
    </section>
  );
};

export default Footer;
