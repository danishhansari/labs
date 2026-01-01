import { ibmPlexMono, romanFont } from "@/font";
import { CircleCheck } from "lucide-react";

export const NewPricing = () => {
  return (
    <>
      <div className="bg-white py-14 text-[#040E0E]" id="pricing">
        <div className="relative px-4 sm:px-8 lg:px-16 border-y border-gray-200">
          <div className="relative border-x border-gray-200">
            <div className="absolute -top-1.5 -left-1.5 w-[101%]  flex justify-between">
              <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
              <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
            </div>

            <div className="absolute -bottom-1.5 -left-1.5 w-[101%]  flex justify-between">
              <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
              <span className="w-2.5 h-2.5 mt-0.5 rounded-full bg-white border border-gray-200  z-10"></span>
            </div>
            <div>
              <h4
                className={`pt-6 text-center font-semibold uppercase ${ibmPlexMono.className} text-sm text-[#14ABBA]`}
              >
                pricing
              </h4>
              <h2
                className={`${romanFont.className} tracking-tight text-5xl text-center mt-1 pb-16`}
              >
                Clear pricing for every stage of your journey
              </h2>
            </div>
          </div>
        </div>

        <div
          className="relative px-4 sm:px-8 lg:px-16
         border-b border-gray-200"
        >
          <div className="border-x border-gray-200">
            <div className="flex">
              <div className="p-5 border-r border-gray-200">
                <div className="border-b border-gray-200">
                  <h4 className="text-lg font-medium">Launch Sprint</h4>
                  <div className="flex items-center gap-2 my-4">
                    <p className="text-[#2C6767] text-4xl">$499</p>
                    <p className="text-[#676C6C] text-sm">/ months</p>
                  </div>
                  <p className="text-sm text-[#676C6C] my-2">
                    Early-stage founders, solo founders, or teams launching
                    their first product or idea.
                  </p>
                  <button className="border border-gray-200 block w-full rounded-sm my-4 mb-6 text-sm py-1">
                    Get Started
                  </button>
                </div>

                <ul className="text-xs mt-4 flex flex-col gap-2">
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    UX strategy & scope definition
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    UI/UX design for core screens or landing page
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Responsive website or MVP build
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Basic SEO & performance setup
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Contact forms / lead capture
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Analytics setup
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Testing & launch support
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    2–3 weeks
                  </li>
                </ul>
              </div>

              <div className="p-5 border-r border-gray-200 bg-[#040E0E] text-white">
                <div className="border-b border-[#EBEBEB]">
                  <div className="flex gap-2 items-center">
                    <h4 className="text-lg font-medium">Growth Sprint</h4>
                    <p className="text-[#14ABBA] px-1.5 py-0.5 rounded-xl bg-[#14ABBA1F] text-xs font-medium">
                      Most Popular
                    </p>
                  </div>

                  <div className="flex items-center gap-2 my-4">
                    <p className="text-4xl">$999</p>
                    <p className="text-[#676C6C] text-sm">/ months</p>
                  </div>
                  <p className="text-sm text-[#849191] my-2">
                    Startups with a live product needing better UX, new
                    features, or stronger performance.
                  </p>
                  <button className="border border-gray-200 block w-full rounded-sm my-4 mb-6 text-sm py-1 bg-white text-[#040E0E] ">
                    Get Started
                  </button>
                </div>
                <ul className="text-xs mt-4 flex flex-col gap-2">
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    UX audit of existing product or website
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    UX improvements & flow optimization
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    UI redesign for key journeys
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    Feature design & development
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    Performance & responsiveness improvements
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    Conversion-focused updates
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    QA testing & refinements
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="#188D60"
                      className="inline-block"
                      color="#040E0E"
                      size={18}
                    />
                    3–5 weeks
                  </li>
                </ul>
              </div>

              <div className="p-5">
                <div className="border-b border-gray-200">
                  <h4 className="text-lg font-medium">
                    Product Partner Sprint
                  </h4>
                  <div className="flex items-center gap-2 my-4">
                    <p className="text-4xl">Custom Plan</p>
                  </div>
                  <p className="text-sm text-[#676C6C] my-2">
                    Founders and teams who need a long-term product, design, and
                    development partner.
                  </p>
                  <button className="border border-gray-200 block w-full rounded-sm my-4 mb-6 text-sm py-1">
                    Get Started
                  </button>
                </div>
                <ul className="text-xs mt-4 flex flex-col gap-2">
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Product strategy & roadmap planning
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Continuous UI/UX design support
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Frontend & backend development
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Feature rollouts & iterations
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Regular reviews & priority planning
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Ongoing testing & optimizations
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Monthly or quarterly partnership
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CircleCheck
                      fill="green"
                      className="inline-block"
                      color="white"
                      size={18}
                    />
                    Unlimited Revisions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
