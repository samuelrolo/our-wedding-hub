import { Calendar, MapPin, Clock, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WeddingCard = () => {
  const handleCall = () => {
    window.location.href = "tel:+351964913160";
  };

  const handleLocation = () => {
    window.open(
      "https://www.google.com/maps/place/Quinta+de+S%C3%A3o+Gon%C3%A7alo/@39.0511,-9.0147,15z",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main card */}
      <div className="golden-frame bg-white/95 backdrop-blur-sm rounded-sm p-12 md:p-20 relative overflow-hidden animate-fade-in shadow-2xl">
        {/* Content */}
        <div className="relative z-20 text-center space-y-6">
          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-wide animate-slide-up">
            Casamento Vando e Anita
          </h1>
          <p className="font-display text-xl md:text-2xl text-primary font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
            25-07-2026
          </p>

          {/* Rings Icon */}
          <div className="flex justify-center animate-float">
            <svg
              viewBox="0 0 100 60"
              className="w-24 h-16 drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left ring */}
              <circle
                cx="35"
                cy="30"
                r="16"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              {/* Right ring */}
              <circle
                cx="65"
                cy="30"
                r="16"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
            </svg>
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
                Quinta de São Gonçalo, Alenquer
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
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

          {/* Footer inside card */}
          <div className="mt-8 pt-6 border-t border-primary/20 flex items-center justify-center gap-2 text-muted-foreground text-sm font-body animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>para o nosso dia especial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
