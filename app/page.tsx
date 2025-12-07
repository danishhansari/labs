import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { OurService } from "@/components/our-service";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <OurService />
      <Footer />
    </>
  );
}
