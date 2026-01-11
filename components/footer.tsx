"use client";
import { romanFont } from "@/font";
import { Button } from "./ui/button";
import Cal from "@calcom/embed-react";
import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <>
      <motion.div
        className="text-white px-4 sm:px-8 lg:px-20 bg-[#040E0E]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative border-x border-zinc-800">
          <h1
            className={`${romanFont.className} pt-12 md:pt-16 pb-4 tracking-tight text-3xl md:text-5xl mx-auto md:w-[40%] text-center`}
          >
            Got something in mind?
            <br />
            Let&apos;s talk it through
          </h1>
          <div className="flex items-center justify-center pb-8 pt-2">
            <Button
              data-cal-link="aurolabs/15min"
              data-cal-config='{"theme":"light"}'
              size={"lg"}
              className="bg-[#14ABBA] hover:bg-[#14ABBA]/80 transition-colors text-white"
            >
              Book a free call
            </Button>
          </div>
          <Cal
            calLink="aurolabs/chat-with-aurolabs"
            className="mt-4"
            config={{ theme: "light" }}
          />
        </div>
        <div className="flex px-4 sm:px-8 lg:px-8 border-t border-x py-4 items-center justify-center md:justify-between ">
          <a
            href="#"
            className="hidden md:block text-xl font-medium bg-linear-to-b from-[#41C4C6] to-white text-transparent bg-clip-text"
          >
            AuroLabs
          </a>
          <p className="text-sm hidden md:block">Follow us on</p>
          <div className="flex items-center justify-center text-[#849191] gap-2.5">
            <a href="https://x.com/auro_labs">
              <Twitter size={18} />
            </a>
            <a href="">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
