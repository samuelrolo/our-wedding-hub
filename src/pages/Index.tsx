import { useState } from "react";
import WeddingCard from "@/components/WeddingCard";
import SplashScreen from "@/components/SplashScreen";
import eucalyptusBg from "@/assets/eucalyptus-left.png";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <main
        className={`min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${eucalyptusBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Wedding Card */}
        <div className="relative z-10">
          <WeddingCard />
        </div>
      </main>
    </>
  );
};

export default Index;
