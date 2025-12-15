import { Card, Carousel } from "./ui/apple-cards-carousel";

export const OurService = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <section className="mi-h-screen mt-8">
      <div className="title flex items-center justify-center flex-col">
        <p className="py-4 px-6 text-5xl mt-8 md:mt-16">Our Services</p>
        <p className="font-thin text-md md:text-xl">
          High-impact design, robust engineering, and products built to grow.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
};

const Content = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>
            </p>
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    category: "Mobile app development",
    title: "Building tomorrow's apps today",
    src: "https://i.pinimg.com/736x/f7/5f/39/f75f39c28d3fc7cdd1343b15a8f0b354.jpg",
    content: <Content />,
  },
  {
    category: "Application development",
    title: "Innovating tomorrow's solutions, today",
    src: "https://i.pinimg.com/1200x/b5/0c/f6/b50cf6a4d5030125120340f55112fc4e.jpg",
    content: <Content />,
  },
  {
    category: "Advanced AI and ML solutions",
    title: "Elevating intelligence, empowering insights",
    src: "https://i.pinimg.com/1200x/40/f7/9c/40f79cb4adef1ad77e7bd56af153c5fc.jpg",
    content: <Content />,
  },

  {
    category: "Website & Landing Page",
    title: "Design / Revamp your website",
    src: "https://i.pinimg.com/736x/69/cf/64/69cf6428c9565e0c5a7bc896ce70ec15.jpg",
    content: <Content />,
  },
];
