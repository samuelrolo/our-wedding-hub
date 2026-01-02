import WeddingCard from "@/components/WeddingCard";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Wedding Card */}
      <WeddingCard />

      {/* Footer */}
      <footer className="mt-12 flex items-center gap-2 text-muted-foreground text-sm font-body animate-fade-in" style={{ animationDelay: "1s" }}>
        <span>Feito com</span>
        <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
        <span>para o nosso dia especial</span>
      </footer>
    </main>
  );
};

export default Index;
