const brands = [
  "HERZENSANGELEGENHEIT",
  "MAX MARA",
  "RAFFAELLO ROSSI",
  "CITIZENS OF HUMANITY",
  "ILSE JACOBSEN",
  "ATELIER CAPITANA",
  "WINDSOR",
  "BLOOM CLOTHING",
  "FIONA COLLECTION",
];

const BrandList = () => (
  <>
    {brands.map((brand, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span className="font-sans text-foreground text-xs md:text-sm tracking-[0.25em] uppercase whitespace-nowrap">
          {brand}
        </span>
        <span className="mx-4 md:mx-6 text-primary text-sm">◆</span>
      </span>
    ))}
  </>
);

const MarqueeSection = () => {
  return (
    <section className="w-full bg-background py-6 overflow-hidden">
      <div className="flex animate-marquee w-max">
        <div className="flex">
          <BrandList />
        </div>
        <div className="flex">
          <BrandList />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
