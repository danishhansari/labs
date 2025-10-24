import {
  Dancing_Script,
  Geist,
  Great_Vibes,
  Instrument_Serif,
  Instrument_Sans,
} from "next/font/google";
import localFont from "next/font/local";

export const dancingSans = Dancing_Script({ weight: "400" });
export const geistSans = Geist({ subsets: ["latin"] });
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const primaryFont = localFont({
  src: "./otf/primary/PPNeueMontreal-Medium.otf",
  display: "swap",
});

export const secondaryFont = localFont({
  src: "./otf/secondary/PPEditorialNew-UltralightItalic.otf",
  display: "swap",
});
