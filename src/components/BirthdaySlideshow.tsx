import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Cake, Code, Music, Heart, Sparkles } from "lucide-react";

interface BirthdayMessage {
  id: number;
  text: string;
}

const birthdayMessages: BirthdayMessage[] = [
  { id: 1, text: "Happy 25th Birthday to my favorite coder and worshipper! 🎶💻" },
  { id: 2, text: "You've officially hit Version 2.5 — more stable, more powerful, and bug-free! 😉" },
  { id: 3, text: "May your life compile with grace, run with purpose, and never crash. 🙏" },
  { id: 4, text: "Here's to another year of writing code and singing heaven's melodies." },
  { id: 5, text: "Your life is already a beautiful project — God is the project manager. ❤️" },
  { id: 6, text: "Happy Birthday to the only person I know who can debug errors and cast out devils on the same day! 😂" },
  { id: 7, text: "At 25, you're not just aging — you're upgrading to LTS (Long-Term Stability). 💡" },
  { id: 8, text: "May your pull requests in life always be accepted by God's perfect will." },
  { id: 9, text: "Your voice touches souls, your code powers systems, and your smile lights up lives. 🌟" },
  { id: 10, text: "You are proof that logic and lyrics can live in one heart." },
  { id: 11, text: "May this year bring you more blessings than bugs. 🐞➡️✨" },
  { id: 12, text: "Keep singing His praises while building His kingdom — that's your true calling." },
  { id: 13, text: "Happy 25th to my friend who's both a scripture compiler and a JavaScript slayer." },
  { id: 14, text: "May you always find harmony in worship and clarity in code." },
  { id: 15, text: "Your life is an open-source blessing to everyone around you. 💕" },
  { id: 16, text: "May God continue to give you fresh anointing and clean commits." },
  { id: 17, text: "Like a good developer, you're constantly growing, refactoring, and leveling up." },
  { id: 18, text: "Here's to 25 years of grace, and many more lines of purposeful code." },
  { id: 19, text: "May your debugging sessions be short, and your praise sessions never end. 🙌" },
  { id: 20, text: "Your gift is rare: you can sing down angels and code up apps." },
  { id: 21, text: "May God's firewall of protection surround you always. 🔒✨" },
  { id: 22, text: "The world is blessed to have your talent, kindness, and faith shining in it." },
  { id: 23, text: "Keep being the merge of heaven's sound and earth's brilliance." },
  { id: 24, text: "May every year of your life be a new feature release full of joy." },
  { id: 25, text: "Happy 25th Birthday, my best friend! May you always remain God's masterpiece, beautifully written in both music and code. 🎂🎶💻❤️" }
];

const BirthdaySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % birthdayMessages.length);
        setIsTransitioning(false);
      }, 400);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(timer);
  }, []);

  const currentMessage = birthdayMessages[currentSlide];
  const progress = ((currentSlide + 1) / birthdayMessages.length) * 100;

  return (
    <div className="h-screen w-full gradient-royal flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-white/20 animate-float">
          <Sparkles size={40} />
        </div>
        <div className="absolute top-20 right-20 text-white/15 animate-float" style={{ animationDelay: '1s' }}>
          <Code size={35} />
        </div>
        <div className="absolute bottom-20 left-16 text-white/20 animate-float" style={{ animationDelay: '2s' }}>
          <Music size={45} />
        </div>
        <div className="absolute bottom-16 right-12 text-white/15 animate-float" style={{ animationDelay: '0.5s' }}>
          <Heart size={30} />
        </div>
        <div className="absolute top-1/2 left-8 text-white/10 animate-float" style={{ animationDelay: '1.5s' }}>
          <Cake size={38} />
        </div>
        <div className="absolute top-1/3 right-8 text-white/15 animate-float" style={{ animationDelay: '2.5s' }}>
          ✨
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 z-10">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Cake className="text-white animate-bounce-gentle" size={48} />
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-glow">
            Happy 25th!
          </h1>
          <Cake className="text-white animate-bounce-gentle" size={48} />
        </div>
        <p className="text-2xl md:text-3xl text-white/90 font-medium">
          To my favorite coder and worshipper! 🎶💻
        </p>
      </div>

      {/* Main slide content */}
      <div className="flex-1 flex items-center justify-center px-6 max-w-4xl mx-auto z-10">
        <Card 
          className={`p-8 md:p-12 gradient-slide border-2 border-white/20 backdrop-blur-sm shadow-2xl transition-all duration-800 ${
            isTransitioning ? 'animate-slide-out' : 'animate-slide-in'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-2xl border-2 border-white/30">
              {currentMessage.id}
            </div>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
              {currentMessage.text}
            </p>
          </div>
        </Card>
      </div>

      {/* Progress indicator */}
      <div className="mb-8 w-full max-w-md px-6 z-10">
        <div className="bg-white/20 rounded-full h-2 backdrop-blur-sm">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-4 text-white/80">
          <span className="text-sm">{currentSlide + 1} of {birthdayMessages.length}</span>
          <span className="text-sm">🎂 Birthday Messages 🎂</span>
        </div>
      </div>

      {/* Footer message */}
      <div className="text-center pb-8 z-10">
        <p className="text-xl text-white/90 italic mb-4">
          With love and best wishes for your special day! 💝
        </p>
        <div className="text-4xl animate-bounce-gentle">
          🎉🎂🎊
        </div>
        <div className="text-4xl">
          ~JPartner
        </div>
      </div>
    </div>
  );
};

export default BirthdaySlideshow;