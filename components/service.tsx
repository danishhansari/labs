"use client";
import { ibmPlexMono, romanFont } from "@/font";
import { ForegroundButton } from "./ui/foreground-button";
import { motion } from "framer-motion";

export const Service = () => {
  return (
    <>
      <div
        className="bg-white py-2 md:py-4 text-[#040E0E] border-zinc-200"
        id="services"
      >
        <div className="relative px-5 sm:px-8 lg:px-18 border-y border-zinc-200">
          <div className="relative border-x border-zinc-200">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // triggers once when 20% visible
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="pt-6 md:pt-12 border">
                <h2
                  className={`pt-2 text-center uppercase ${ibmPlexMono.className} text-sm md:text-base text-[#14ABBA]`}
                >
                  Solutions
                </h2>
                <h1
                  className={`${romanFont.className} text-3xl md:text-5xl text-center tracking-tight mt-1 mb-6`}
                >
                  What we help you build
                </h1>
                <div className="relative">
                  <div className="absolute -top-1.5 -left-1.5 w-[104%] md:w-[101%] flex justify-between">
                    <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-zinc-200  z-10"></span>
                    <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-zinc-200  z-10"></span>
                  </div>

                  <div className="absolute -bottom-1.5 -left-1.5 w-[104%] md:w-[101%]  flex justify-between">
                    <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-zinc-200  z-10"></span>
                    <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-zinc-200  z-10"></span>
                  </div>

                  <div className="flex flex-col md:flex-row">
                    <div className="md:border border-t border-zinc-200 md:border-x-0 bg-[#fafafa]">
                      <div className="p-4 md:p-6 bg-white">
                        <h4
                          className={`${romanFont.className} font-medium text-xl`}
                        >
                          Mobile App Development
                        </h4>
                        <p className="text-[#676C6C] mt-1 mb-2 text-sm">
                          We build scalable web and mobile applications that are
                          fast, secure, and ready for real users.
                        </p>
                      </div>
                      <div className="w-full relative h-52 md:h-72 overflow-hidden">
                        <img
                          src="/left-mobile.png"
                          alt="Image"
                          className="w-28 md:w-32 absolute top-24 md:top-20 left-4 z-10"
                        />

                        <img
                          src="/front-mobile.png"
                          alt="Image"
                          className="w-36 md:w-52 absolute top-10 left-1/2 -translate-x-1/2 z-20"
                        />

                        <img
                          src="/right-mobile.png"
                          alt="Image"
                          className="w-28 md:w-32 absolute top-24 md:top-20 right-4 z-10"
                        />
                      </div>
                    </div>
                    <div className="md:border border-t border-zinc-200 border-x-0 bg-[#fafafa]">
                      <div className="p-4 md:p-6 bg-white">
                        <h4
                          className={`${romanFont.className} font-medium text-xl`}
                        >
                          Website Development
                        </h4>
                        <p className="text-[#676C6C] mt-1 mb-2 text-sm w-[103%]">
                          We design high-converting websites that clearly
                          communicate value and convert visitors.
                        </p>
                      </div>
                      <div className="w-full relative h-52 md:h-72 flex flex-col items-center justify-end overflow-hidden">
                        <div className="w-66 h-50 absolute z-10 top-15 border border-gray-100 rounded-sm bg-white"></div>
                        <div className="w-76 h-50 absolute z-10 top-20 border border-gray-100 rounded-sm bg-white"></div>
                        <div className="mt-8 absolute z-20 rounded-sm top-16 drop-shadow-2xl">
                          <img
                            src={"/fitness.png"}
                            className="w-88 rounded-xl"
                            alt="Fitness"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" border border-zinc-200 border-x-0 bg-[#fafafa]">
                      <div className="p-4 md:p-6 bg-white">
                        <h4
                          className={`${romanFont.className} font-medium text-xl`}
                        >
                          Advanced AI and ML solutions
                        </h4>
                        <p className="text-[#676C6C] mt-1 mb-2 text-sm">
                          We integrate AI & machine learning solutions that
                          automate processes & unlock business insights.
                        </p>
                      </div>
                      <div className="hidden md:block w-full h-[40vh]"></div>
                    </div>
                  </div>
                </div>
                <ForegroundButton className="px-6 py-2 mx-auto flex mt-12 mb-16 text-center" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
