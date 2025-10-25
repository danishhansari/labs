"use client";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Cal from "@calcom/embed-react";
import { monthNames } from "@/constants";

const Footer = () => {
  const currentMonth = new Date().getUTCMonth();
  const currentMonthName = monthNames[currentMonth];
  return (
    <section className="pb-8 md:pb-10 overflow-x-clip w-full mx-auto relative pt-20 lg:pt-24  text-center">
      <p
        className="md:text-[15rem] text-7xl text-transparent select-none"
        style={{
          WebkitTextStroke: "1px #20808D",
        }}
      >
        AuroLabs
      </p>
      <div className="text-2xl mt-8 md:mt-12 md:text-5xl font-semibold text-center tracking-wide mx-auto">
        <p>If you scrolled this far,</p>
        <p>It's time to LEVEL UP</p>
        <Button
          className="bg-[#20808D] border-none !px-7 hover:scale-105 hover:bg-[#23a1b2] border text-[#FBFAF4] hover:text-white py-6 transition-transform mt-8 md:flex-0 rounded-full z-40"
          variant={"default"}
          data-cal-link="aurolabs/15min"
          data-cal-config='{"theme":"dark"}'
        >
          Book a Quick Call <Phone />
        </Button>
      </div>

      <div className="mt-24 hidden md:block">
        <p className="text-4xl font-semibold tracking-wider">
          Be quick! Spots are almost gone for {currentMonthName}.
        </p>
        <Cal
          calLink="aurolabs/chat-with-aurolabs"
          className="mt-16"
          config={{ theme: "dark" }}
        />
      </div>
    </section>
  );
};

export default Footer;
