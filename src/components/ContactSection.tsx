import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const InstagramWidget = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="bg-primary rounded-lg p-6 md:p-8 h-full">
      <div className="flex flex-col items-center">
        <Instagram className="w-8 h-8 text-foreground mb-3" />
        <span className="font-serif text-foreground text-lg mb-6">@petraruebenach</span>

        {/* Placeholder grid */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-[280px] mb-6">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm ${i % 2 === 0 ? "bg-background" : "bg-primary opacity-60"}`}
              style={{ border: "1px solid hsl(var(--divider))" }}
            />
          ))}
        </div>

        <a
          href="https://www.instagram.com/petraruebenach"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-primary border border-foreground text-foreground font-sans text-sm tracking-wide rounded-sm hover:opacity-80 transition-opacity"
        >
          Zum Instagram Profil
        </a>
      </div>
    </div>
  );
};

const ContactWidget = () => {
  const hours = [
    { day: "Mo", time: "Geschlossen" },
    { day: "Di", time: "11:00 – 18:30 Uhr" },
    { day: "Mi", time: "10:00 – 13:00 Uhr" },
    { day: "Do", time: "11:00 – 18:30 Uhr" },
    { day: "Fr", time: "11:00 – 18:30 Uhr" },
    { day: "Sa", time: "10:00 – 13:00 Uhr" },
    { day: "So", time: "Geschlossen" },
  ];

  return (
    <div className="bg-primary rounded-lg p-6 md:p-8 h-full">
      <h3 className="font-serif text-foreground text-xl md:text-2xl mb-6">
        Kontakt & Öffnungszeiten
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-1 text-foreground shrink-0" />
          <span className="font-sans text-foreground text-sm">Grafenstraße 26, Frankfurt am Main</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-foreground shrink-0" />
          <a href="tel:+496917883" className="font-sans text-foreground text-sm hover:opacity-70 transition-opacity">
            +49 69 517883
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-foreground shrink-0" />
          <a href="mailto:petra.ruebenach@web.de" className="font-sans text-foreground text-sm hover:opacity-70 transition-opacity">
            petra.ruebenach@web.de
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-foreground" />
        <span className="font-sans text-foreground text-sm font-medium">Öffnungszeiten</span>
      </div>

      <div className="space-y-1.5">
        {hours.map((h) => (
          <div key={h.day} className="flex justify-between font-sans text-foreground text-sm">
            <span className="font-medium w-8">{h.day}</span>
            <span className={h.time === "Geschlossen" ? "text-muted-foreground" : ""}>
              {h.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="w-full bg-background border-t border-divider py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <InstagramWidget />
        <ContactWidget />
      </div>
    </section>
  );
};

export default ContactSection;
