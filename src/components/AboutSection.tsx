const AboutSection = () => {
  return (
    <section className="w-full bg-background border-t border-divider py-16 md:py-24 px-4">
      <div className="max-w-[720px] mx-auto text-center">
        <h2 className="font-serif text-foreground text-2xl md:text-3xl mb-8">
          Über mich
        </h2>
        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed">
          Ich bin Petra Ruebenach, habe meinen Laden 1995 gegründet und bin seither inhabergeführt. 
          Generationsübergreifend biete ich casual High Fashion für jeden Anlass an und habe eine 
          ausgewählte Selektion an High-End Secondhand Ware. Mit Wurzeln in Frankfurt versuche ich 
          durch meine persönliche Beratung und meine Erfahrung für jeden das perfekte Outfit oder 
          auch Einzelteile zusammenzustellen. Ich biete neben meinen aufgelisteten Marken auch immer 
          regionale Teile aus handwerklicher Manufaktur an, um die regionale Identität meines Ladens 
          zu bewahren. Ich freue mich auf Ihren Besuch.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
