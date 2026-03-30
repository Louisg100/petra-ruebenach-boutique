import glamotti from "@/assets/brands/glamotti.png";
import herzensangelegenheit from "@/assets/brands/herzensangelegenheit.png";
import ilseJacobsen from "@/assets/brands/ilse-jacobsen.webp";
import bloom from "@/assets/brands/bloom.png";
import citizensOfHumanity from "@/assets/brands/citizens-of-humanity.webp";
import raffaelloRossi from "@/assets/brands/raffaello-rossi.png";
import windsor from "@/assets/brands/windsor.svg";

const brands = [
  { src: herzensangelegenheit, alt: "Herzensangelegenheit", className: "h-5 md:h-7" },
  { src: raffaelloRossi, alt: "Raffaello Rossi" },
  { src: citizensOfHumanity, alt: "Citizens of Humanity" },
  { src: ilseJacobsen, alt: "Ilse Jacobsen" },
  { src: windsor, alt: "Windsor", className: "h-5 md:h-7" },
  { src: bloom, alt: "Bloom" },
  { src: glamotti, alt: "Glamotti" },
] as const;

const BrandLogos = () => (
  <>
    {brands.map((brand, i) => (
      <img
        key={i}
        src={brand.src}
        alt={brand.alt}
        className={`${brand.className || "h-8 md:h-10"} w-auto object-contain mx-8 md:mx-12 shrink-0 opacity-70`}
        loading="lazy"
      />
    ))}
  </>
);

const MarqueeSection = () => {
  return (
    <section className="w-full bg-background py-8 md:py-10 overflow-hidden">
      <div className="flex animate-marquee w-max">
        <div className="flex items-center">
          <BrandLogos />
        </div>
        <div className="flex items-center">
          <BrandLogos />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
