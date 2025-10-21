import {
  Dancing_Script,
  Geist,
  Great_Vibes,
  Instrument_Serif,
  Instrument_Sans,
} from "next/font/google";

export const dancingSans = Dancing_Script({ weight: "400" });
export const geistSans = Geist({ subsets: ["latin"] });
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
