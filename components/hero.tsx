"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { secondaryFont } from "@/font";
import { getCalApi } from "@calcom/embed-react";

export const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
    })();
  }, []);
  return (
    <section className="pb-8 px-4 sm:px-8 h-screen md:px-16 lg:px-28 md:pb-10 overflow-x-clip w-full relative pt-24 lg:pt-30">
      <div className="container flex flex-col items-center relative z-10 gap-2 pt-14">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
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
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className={`lg:leading-7 [&:not(:first-child)]:mt-6 text-center text-md md:text-xl lg:w-[60%] mx-auto text-gray-400  text-balance`}
        >
          We craft digital experiences that empower brands to innovate,
          dominate, and stay ahead in an ever-evolving tech world.
        </motion.p>
      </div>
      <motion.div
        className="flex mt-24 md:mt-12 items-center flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Button
          className="bg-[#20808D] border-none  !px-6 lg:text-md hover:bg-[#1FB8CD] border text-[#FBFAF4] py-5 w-full md:flex-0"
          variant={"default"}
          data-cal-link="aurolabs"
          data-cal-config='{"theme":"dark"}'
        >
          Book a Quick Call <Phone />
        </Button>
        <Button
          className="py-5 w-full md:flex-0 lg:text-md !px-6 bg-[#BADEDD] hover:bg-[#D5DDDF] text-[#091717]"
          variant={"secondary"}
        >
          Explore Our Work <Sparkles />
        </Button>
      </motion.div>
    </section>
  );
};
