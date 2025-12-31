import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({ weight: "400" });
export const romanFont = localFont({
  src: "./otf/roman/TimesNewRoman.ttf",
  display: "swap",
});

export const secondaryFont = localFont({
  src: "./otf/secondary/PPEditorialNew-UltralightItalic.woff2",
  display: "swap",
});
