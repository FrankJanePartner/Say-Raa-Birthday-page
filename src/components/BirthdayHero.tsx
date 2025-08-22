import { Cake, Code, Music } from "lucide-react";

const BirthdayHero = () => {
  return (
    <div className="text-center py-16 px-6 bg-gradient-hero rounded-3xl shadow-2xl mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
      <div className="relative z-10">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Cake className="text-white animate-bounce-gentle" size={48} />
          <Code className="text-white/80 animate-float" size={40} />
          <Music className="text-white/80 animate-float" size={40} style={{ animationDelay: "1s" }} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
          Happy 25th Birthday!
        </h1>
        
        <div className="text-2xl md:text-3xl text-white/95 font-medium mb-4 animate-fade-in">
          To my favorite coder and worshipper! 🎶💻
        </div>
        
        <div className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Celebrating someone who writes beautiful code and sings heaven's melodies
        </div>

        <div className="mt-8 text-6xl animate-bounce-gentle" style={{ animationDelay: "1s" }}>
          🎂
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 text-white/30 animate-float">✨</div>
      <div className="absolute top-8 right-8 text-white/30 animate-float" style={{ animationDelay: "1s" }}>🌟</div>
      <div className="absolute bottom-4 left-8 text-white/30 animate-float" style={{ animationDelay: "2s" }}>💫</div>
      <div className="absolute bottom-8 right-4 text-white/30 animate-float" style={{ animationDelay: "0.5s" }}>⭐</div>
    </div>
  );
};

export default BirthdayHero;