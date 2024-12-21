import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface BettingCardProps {
  title: string;
  currentNumber: string;
  timeLeft: string;
}

export const BettingCard = ({ title, currentNumber, timeLeft }: BettingCardProps) => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [betAmount, setBetAmount] = useState("");

  const handlePlaceBet = () => {
    console.log("Placing bet:", { selectedNumber, betAmount });
    // TODO: Implement bet placement logic
  };

  return (
    <Card className="w-full max-w-md bg-betting-card p-6 border-betting-accent border-2">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gold">{title}</h3>
          <span className="text-sm text-gray-400">{timeLeft}</span>
        </div>
        
        <div className="text-center py-4">
          <span className="text-3xl font-bold text-white">{currentNumber}</span>
        </div>
        
        <div className="space-y-3">
          <Input
            type="number"
            placeholder="Enter your number"
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(e.target.value)}
            className="bg-betting-dark text-white border-betting-accent"
          />
          
          <Input
            type="number"
            placeholder="Enter bet amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            className="bg-betting-dark text-white border-betting-accent"
          />
          
          <Button 
            onClick={handlePlaceBet}
            className="w-full bg-gold hover:bg-yellow-600 text-betting-dark font-bold"
          >
            Place Bet
          </Button>
        </div>
      </div>
    </Card>
  );
};