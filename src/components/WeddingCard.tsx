import { Calendar, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import eucalyptusImg from "@/assets/eucalyptus-left.png";
import ringsImg from "@/assets/wedding-rings.png";

const WeddingCard = () => {
  const handleCall = () => {
    window.location.href = "tel:+351964913160";
  };

  const handleLocation = () => {
    window.open(
      "https://www.google.com/maps/search/Quinta+de+S%C3%A3o+Gon%C3%A7alo+Alenquer",
      "_blank"
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Top left eucalyptus */}
      <img
        src={eucalyptusImg}
        alt="Decoração de eucalipto"
        className="absolute -top-8 -left-8 w-40 h-auto opacity-90 eucalyptus-shadow pointer-events-none -rotate-12 z-10"
      />

      {/* Bottom right eucalyptus (flipped) */}
      <img
        src={eucalyptusImg}
        alt="Decoração de eucalipto"
        className="absolute -bottom-8 -right-8 w-40 h-auto opacity-90 eucalyptus-shadow pointer-events-none rotate-180 z-10"
      />

      {/* Main card */}
      <div className="golden-frame bg-card rounded-sm p-8 md:p-12 relative overflow-hidden animate-fade-in">
        {/* Content */}
        <div className="relative z-20 text-center space-y-6">
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground tracking-wide animate-slide-up">
            VAMOS CASAR!
          </h1>

          {/* Rings */}
          <div className="flex justify-center animate-float">
            <img
              src={ringsImg}
              alt="Alianças de casamento"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Message */}
          <p className="font-display text-lg md:text-xl text-foreground/90 italic leading-relaxed max-w-sm mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Depois de 16 anos e tantos momentos felizes, decidimos dizer o "Sim"
            oficial e queremos que faças parte desta festa.
          </p>

          {/* Details */}
          <div className="space-y-4 pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-body font-medium text-foreground">
                25 de Julho de 2026
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body font-medium text-foreground">
                Quinta de São Gonçalo, Alenquer
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-body font-medium text-foreground">
                A festa começa às 14h30
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 golden-gradient mx-auto rounded-full animate-slide-up" style={{ animationDelay: "0.5s" }} />

          {/* RSVP Note */}
          <p className="font-body text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.6s" }}>
            Confirma a tua presença para o noivo ou noiva,<br />
            até dia 25 de Maio
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <Button
              onClick={handleCall}
              className="golden-gradient text-primary-foreground hover:opacity-90 transition-opacity font-body font-medium px-6 py-5 rounded-full shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar aos Noivos
            </Button>

            <Button
              onClick={handleLocation}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-body font-medium px-6 py-5 rounded-full"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Como Chegar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
