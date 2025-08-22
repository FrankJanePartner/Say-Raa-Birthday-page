import { Code, Music, Heart, Sparkles } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Code, position: "top-10 left-10", delay: "0s", color: "tech" },
    { Icon: Music, position: "top-20 right-20", delay: "1s", color: "spiritual" },
    { Icon: Heart, position: "bottom-20 left-20", delay: "2s", color: "warm" },
    { Icon: Sparkles, position: "bottom-10 right-10", delay: "0.5s", color: "celebration" },
    { Icon: Code, position: "top-1/2 left-5", delay: "1.5s", color: "tech" },
    { Icon: Music, position: "top-1/3 right-5", delay: "2.5s", color: "spiritual" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, index) => {
        const { Icon, position, delay, color } = item;
        return (
          <div
            key={index}
            className={`absolute ${position} animate-float opacity-20 hover:opacity-40 transition-opacity`}
            style={{ animationDelay: delay }}
          >
            <Icon 
              size={24} 
              className={`text-${color}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;