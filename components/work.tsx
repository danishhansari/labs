"use client";
import Image from "next/image";
import { images } from "../constants";

export const Work = () => {
  return (
    <section className="relative py-2">
      <style jsx>
        {`
          @keyframes scrollRight {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-14%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .scroll-content {
            animation: scrollRight 20s linear infinite;
            animation-play-state: paused;
          }

          .scroll-container:hover .scroll-content {
            animation-play-state: running;
          }

          @media (max-width: 768px) {
            @keyframes scrollRight {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(-55%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .scroll-content {
              animation: scrollRight 30s linear infinite;
              animation-play-state: running;
            }

            .scroll-container:hover .scroll-content {
              animation-play-state: running;
            }
          }
        `}
      </style>
      <div className="scroll-container overflow-hidden relative">
        <div
          className="scroll-content flex gap-2"
          style={{ width: "max-content" }}
        >
          {images.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              {col.map((img, j) => (
                <div
                  key={j}
                  className={`relative bg-[#BADEDD]/10 ${img.h} w-60 rounded-sm overflow-hidden`}
                >
                  <Image
                    src={img.src}
                    alt="Images"
                    fill
                    className={img.scale || "object-cover"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
