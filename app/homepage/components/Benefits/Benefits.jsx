"use client";

import Image from "next/image";

const items = [
  {
    title: "200 Milliona+",
    description: "Preko 200 miliona prodatih proizvoda širom sveta.",
    icon: "/power-bank.svg",
  },
  {
    title: "12 Godina inovacija",
    description: "Pioniri u tehnologiji punjenja već 12 godina.",
    icon: "/green-innovation.svg",
  },
  {
    title: "146 Država",
    description: "Dostupno u 146 zemalja.",
    icon: "/earth.svg",
  },
  {
    title: "100 Miliona",
    description: "100 miliona globalnih kupaca.",
    icon: "/costumer.svg",
  },
];

const Benefits = () => {
  return (
    <div
      className="sectionPaddingX marginBottomSection bg-primary py-[70px]"
      data-aos="fade-up"
    >
      <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <div>
              <Image
                src={`/icons/benefits/${item.icon}`}
                alt={item.title}
                width={80}
                height={80}
                className="h-[80px] w-[80px] transform invert 2xl:h-[60px] 2xl:w-[60px] 3xl:h-[80px] 3xl:w-[80px]"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-7">
              <h3 className="transform text-2xl text-white transition-all duration-300 3xl:text-[27px]">
                {item.title}
              </h3>
              <p className="transform text-[15px] text-white opacity-90 transition-all duration-300 hover:opacity-100">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
