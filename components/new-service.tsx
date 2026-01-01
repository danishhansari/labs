import { ibmPlexMono, romanFont } from "@/font";

export const NewService = () => {
  return (
    <>
      <div className="bg-white py-4 text-[#040E0E] border-gray-200">
        <div className="relative px-4 sm:px-8 lg:px-16 border-y border-gray-200">
          <div className="relative border-x border-gray-200">
            <div className="pt-12 border">
              <h2
                className={`pt-2 text-center uppercase ${ibmPlexMono.className} text-sm text-[#14ABBA]`}
              >
                Solutions
              </h2>
              <h1
                className={`${romanFont.className} text-5xl text-center tracking-tight mt-1 mb-6`}
              >
                What we help you build
              </h1>
              <div className="relative">
                <div className="absolute -top-1.5 -left-1.5 w-[101%]  flex justify-between">
                  <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
                  <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
                </div>

                <div className="absolute -bottom-1.5 -left-1.5 w-[101%]  flex justify-between">
                  <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
                  <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
                </div>

                <div className="flex">
                  <div className="border border-gray-200 border-l-0 bg-[#fafafa]">
                    <div className="p-6 bg-white">
                      <h4
                        className={`${romanFont.className} font-medium text-xl`}
                      >
                        Web & Mobile App Development
                      </h4>
                      <p className="text-[#676C6C] mt-1 mb-2 text-sm">
                        We build scalable web and mobile applications that are
                        fast, secure, and ready for real users.
                      </p>
                    </div>
                    <div className="w-full h-[0vh]"></div>
                  </div>
                  <div className="border border-gray-200 border-l-0 bg-[#fafafa]">
                    <div className="p-6 bg-white">
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
                    <div className="w-full h-[40vh]"></div>
                  </div>
                  <div className=" border border-gray-200 border-x-0 bg-[#fafafa]">
                    <div className="p-6 bg-white">
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
                    <div className="w-full h-[40vh]"></div>
                  </div>
                </div>
              </div>
              <button className="text-center bg-[#0D2727] hover:bg-[#0D2727]/96 transition-colors cursor-pointer text-white rounded-xs px-6 py-2 mx-auto flex mt-8 mb-16">
                Book a free call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
