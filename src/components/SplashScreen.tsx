import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-500 ${isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
    >
      {/* Golden frame border effect */}
      <div className="absolute inset-4 md:inset-12 border-2 border-primary/40 pointer-events-none" />
      <div className="absolute inset-6 md:inset-14 border border-primary/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Rings icon - golden color */}
        <div className="relative mb-6 animate-float">
          <svg
            viewBox="0 0 100 60"
            className="w-28 h-16 md:w-36 md:h-20 drop-shadow-md mx-auto"
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
              className="animate-pulse"
            />
            {/* Right ring */}
            <circle
              cx="65"
              cy="30"
              r="16"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
          </svg>
        </div>

        {/* Couple names */}
        <h1 className="font-display text-4xl md:text-5xl text-foreground font-semibold tracking-widest mb-3 animate-fade-in">
          Nós
        </h1>

        <p className="font-display text-xl md:text-2xl text-primary italic animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Vamos Casar
        </p>

        {/* Decorative line */}
        <div className="w-16 h-0.5 golden-gradient mx-auto mt-6 rounded-full animate-fade-in" style={{ animationDelay: "0.5s" }} />

        {/* Loading dots */}
        <div className="flex gap-2 mt-6 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
