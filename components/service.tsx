import { ibmPlexMono, romanFont } from "@/font";
import { Button } from "./ui/button";
import { ForegroundButton } from "./ui/foreground-button";

export const Service = () => {
  return (
    <>
      <div
        className="bg-white py-2 md:py-4 text-[#040E0E] border-zinc-200"
        id="services"
      >
        <div className="relative px-5 sm:px-8 lg:px-18 border-y border-zinc-200">
          <div className="relative border-x border-zinc-200">
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
                  <div className="md:border border-t border-zinc-200 md:border-l-0 bg-[#fafafa]">
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
                    <div className="w-full h-[0vh]"></div>
                  </div>
                  <div className="md:border border-t border-zinc-200 border-l-0 bg-[#fafafa]">
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
                    <div className="hidden md:block w-full h-[40vh]"></div>
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
          </div>
        </div>
      </div>
    </>
  );
};
