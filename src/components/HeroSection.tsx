const HeroSection = () => {
  return (
    <section className="w-full bg-primary py-20 md:py-32 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="border border-foreground px-10 py-8 md:px-16 md:py-12 flex items-center justify-center">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary flex items-center justify-center">
          <span className="font-serif text-foreground text-center text-sm md:text-base tracking-[0.3em] uppercase leading-tight font-medium">
            Petra<br />Ruebenach
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-8 md:mt-12 font-serif text-foreground text-lg md:text-xl italic tracking-wide text-center">
        Mode mit Persönlichkeit, seit 1995.
      </p>
    </section>
  );
};

export default HeroSection;
