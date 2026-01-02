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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-eucalyptus/95 backdrop-blur-sm transition-all duration-500 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Rings icon */}
      <div className="relative mb-8 animate-float">
        <svg
          viewBox="0 0 100 60"
          className="w-32 h-20 drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left ring */}
          <circle
            cx="35"
            cy="30"
            r="18"
            stroke="white"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
          />
          {/* Right ring */}
          <circle
            cx="65"
            cy="30"
            r="18"
            stroke="white"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
        </svg>
      </div>

      {/* Couple names */}
      <h1 className="font-display text-4xl md:text-5xl text-primary-foreground font-semibold tracking-widest mb-2 animate-fade-in">
        Nós
      </h1>
      
      <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic animate-fade-in" style={{ animationDelay: "0.3s" }}>
        Vamos Casar
      </p>

      {/* Loading dots */}
      <div className="flex gap-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-primary-foreground/80 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
