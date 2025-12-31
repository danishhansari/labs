import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({ weight: "400" });
export const Banner = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-16">
      <div className="px-8 py-5 border-x-[0.01px] border-t-0 border-b flex items-center justify-center gap-4">
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.22576 9.3294L7.224 0.34651C7.7713 -0.35603 8.7972 0.0812405 8.7972 1.01707V7.96994C8.7972 8.5305 9.1995 8.985 9.6958 8.985H13.0996C13.8729 8.985 14.2851 10.0149 13.7742 10.6706L6.776 19.6535C6.2287 20.356 5.2028 19.9188 5.2028 18.9829V12.0301C5.2028 11.4695 4.80048 11.015 4.3042 11.015H0.90035C0.12711 11.015 -0.28506 9.9851 0.22576 9.3294Z"
            fill="url(#paint0_linear_12_34)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_12_34"
              x1="11"
              y1="23.5"
              x2="-7"
              y2="-6.95155e-07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#41C4C6" />
            </linearGradient>
          </defs>
        </svg>
        <span
          className={`uppercase ${ibmPlexMono.className}  text-sm bg-clip-text text-transparent gradient-text`}
        >
          Design & build sprints for startups
        </span>
      </div>
    </div>
  );
};
