"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    // <section className="pb-8 px-4 sm:px-8 md:px-16 lg:px-28 md:pb-10 bg-gradient-to-br from-black via-zinc-950 to-slate-950 overflow-x-clip min-h-screen w-full relative pt-24 lg:pt-46">
    //   <div className="container flex flex-col items-center relative z-10 gap-2">
    //     <motion.h1
    //       initial={{ opacity: 0, y: 70 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.4, ease: "easeIn" }}
    //       className="text-center text-4xl md:text-5xl lg:text-6xl font-bold
    //          tracking-tight lg:text-balance lg:w-[80%] mx-auto px-2 mt-12 lg:mt-0"
    //     >
    //       From Concept to Launch, We Make It Happen
    //     </motion.h1>
    //     <motion.p
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
    //       className="lg:leading-7 [&:not(:first-child)]:mt-6 text-center text-md md:text-xl lg:w-[60%] mx-auto text-gray-400"
    //     >
    //       We craft digital experiences that empower brands to innovate,
    //       dominate, and stay ahead in an ever-evolving tech world.
    //     </motion.p>
    //   </div>
    //   <motion.div
    //     className="flex mt-24 md:mt-12 items-center flex-col md:flex-row gap-4 justify-center"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.9, ease: "easeInOut" }}
    //   >
    //     <Button
    //       className="bg-indigo-900 !px-8 lg:text-lg hover:bg-indigo-700 border text-white py-6 w-full md:flex-0"
    //       variant={"default"}
    //     >
    //       Book a Quick Call <Phone />
    //     </Button>
    //     <Button
    //       className="py-6 w-full md:flex-0 lg:text-lg !px-8"
    //       variant={"outline"}
    //     >
    //       Explore Our Work <Sparkles />
    //     </Button>
    //   </motion.div>
    // </section>
    <section
      className="pb-8 px-4 sm:px-8 md:px-16 lg:px-28 md:pb-10
    bg-gradient-to-br from-black via-zinc-900 to-gray-900 lg:to-black
    overflow-x-clip min-h-screen w-full relative pt-24 lg:pt-46"
    >
      <div className="container flex flex-col items-center relative z-10 gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold
         tracking-tight lg:text-balance lg:w-[80%] mx-auto px-2 mt-12 lg:mt-0 text-white"
        >
          From Concept to Launch, We Make It Happen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="lg:leading-7 [&:not(:first-child)]:mt-6 text-center text-md md:text-xl lg:w-[60%] mx-auto text-gray-400"
        >
          We craft digital experiences that empower brands to innovate,
          dominate, and stay ahead in an ever-evolving tech world.
        </motion.p>
      </div>
      <motion.div
        className="flex mt-24 md:mt-12 items-center flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <Button
          className="bg-indigo-900 !px-8 lg:text-lg hover:bg-indigo-700 border text-white py-6 w-full md:flex-0"
          variant={"default"}
        >
          Book a Quick Call <Phone />
        </Button>
        <Button
          className="py-6 w-full md:flex-0 lg:text-lg !px-8"
          variant={"outline"}
        >
          Explore Our Work <Sparkles />
        </Button>
      </motion.div>
    </section>
  );
};
