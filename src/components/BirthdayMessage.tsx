import { Card } from "@/components/ui/card";

interface BirthdayMessageProps {
  number: number;
  message: string;
  delay?: number;
}

const BirthdayMessage = ({ number, message, delay = 0 }: BirthdayMessageProps) => {
  return (
    <Card 
      className="p-6 border-2 border-celebration/20 bg-gradient-to-br from-card to-card/50 hover:from-celebration/5 hover:to-spiritual/5 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-celebration flex items-center justify-center text-primary-foreground font-bold text-lg">
          {number}
        </div>
        <p className="text-foreground leading-relaxed text-base">
          {message}
        </p>
      </div>
    </Card>
  );
};

export default BirthdayMessage;