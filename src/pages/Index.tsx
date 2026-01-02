import { useState } from "react";
import WeddingCard from "@/components/WeddingCard";
import SplashScreen from "@/components/SplashScreen";
import { Heart } from "lucide-react";
import weddingBg from "@/assets/wedding-invite.jpeg";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <main
        className={`min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${weddingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Wedding Card */}
        <div className="relative z-10">
          <WeddingCard />
        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-12 flex items-center gap-2 text-white text-sm font-body animate-fade-in drop-shadow-lg" style={{ animationDelay: "1s" }}>
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          <span>para o nosso dia especial</span>
        </footer>
      </main>
    </>
  );
};

export default Index;
