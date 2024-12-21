import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DoublePatti = () => {
  const [numbers, setNumbers] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log("Double Patti bet placed:", { numbers, amount });
  };

  return (
    <Card className="bg-betting-card p-6 border-betting-accent">
      <h2 className="text-2xl font-bold text-gold mb-4">Double Patti</h2>
      <div className="space-y-4">
        <Input
          type="number"
          placeholder="Enter three digits (000-999)"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="bg-betting-dark text-white"
          max="999"
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

export default DoublePatti;