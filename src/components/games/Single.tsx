import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Single = () => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log("Single bet placed:", { number, amount });
  };

  return (
    <Card className="bg-betting-card p-6 border-betting-accent">
      <h2 className="text-2xl font-bold text-gold mb-4">Single</h2>
      <div className="space-y-4">
        <Input
          type="number"
          placeholder="Enter single digit (0-9)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="bg-betting-dark text-white"
          max="9"
          min="0"
        />
        <Input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-betting-dark text-white"
        />
        <Button 
          onClick={handleSubmit}
          className="w-full bg-gold hover:bg-yellow-600 text-betting-dark"
        >
          Place Bet
        </Button>
      </div>
    </Card>
  );
};

export default Single;