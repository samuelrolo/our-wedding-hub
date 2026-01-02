import { Calendar, MapPin, Clock, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WeddingCard = () => {
  const handleCall = () => {
    window.location.href = "tel:+351964913160";
  };

  const handleLocation = () => {
    window.open("https://share.google/w4PlXMvc2JZysKOB4", "_blank");
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main card */}
      <div className="golden-frame bg-white/95 backdrop-blur-sm rounded-sm p-12 md:p-20 lg:p-24 relative overflow-hidden animate-fade-in shadow-2xl">
        {/* Content */}
        <div className="relative z-20 text-center space-y-8">
          {/* Title */}
          <div className="space-y-2 animate-slide-up">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground tracking-wide">
              Casamento
            </h2>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary italic tracking-wider">
              Vando & Anita
            </h1>
          </div>
          <p className="font-display text-xl md:text-2xl text-foreground font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
            25-07-2026
          </p>

          {/* Rings Icon */}
          <div className="flex justify-center animate-float">
            <svg
              viewBox="0 0 100 60"
              className="w-32 h-20 md:w-40 md:h-24 drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left ring */}
              <circle
                cx="35"
                cy="30"
                r="16"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
              />
              {/* Right ring */}
              <circle
                cx="65"
                cy="30"
                r="16"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* Message */}
          <p className="font-display text-xl md:text-2xl text-foreground/90 italic leading-relaxed max-w-sm mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Depois de 16 anos e tantos momentos felizes, decidimos dizer o "Sim"
            oficial e queremos que faças parte desta festa.
          </p>

          {/* Details */}
          <div className="space-y-4 pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-7 h-7 flex-shrink-0 text-primary" />
              <span className="font-body text-lg md:text-xl font-medium text-foreground">
                25 de Julho de 2026
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-7 h-7 flex-shrink-0 text-primary" />
              <span className="font-body text-lg md:text-xl font-medium text-foreground">
                Quinta de São Gonçalo, Alenquer
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Clock className="w-7 h-7 flex-shrink-0 text-primary" />
              <span className="font-body text-lg md:text-xl font-medium text-foreground">
                A festa começa às 14h30
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-32 h-1 bg-primary/30 mx-auto rounded-full animate-slide-up" style={{ animationDelay: "0.5s" }} />

          {/* RSVP Note */}
          <p className="font-body text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.6s" }}>
            Confirma a tua presença para o noivo ou noiva,<br />
            até dia 25 de Maio
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-sm shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Confirmar Presença
            </Button>
            <Button
              variant="outline"
              onClick={handleLocation}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-sm transition-all"
            >
              <MapPin className="w-5 h-5 mr-2" />
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
