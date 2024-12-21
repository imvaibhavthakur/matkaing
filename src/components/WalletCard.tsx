import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WalletCard = () => {
  const balance = 1000; // This would come from your state management

  return (
    <Card className="bg-betting-card p-6 border-betting-accent border-2">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gold">Your Wallet</h3>
        <div className="text-center">
          <span className="text-3xl font-bold text-white">₹{balance}</span>
        </div>
        <div className="space-y-2">
          <Button 
            className="w-full bg-gold hover:bg-yellow-600 text-betting-dark font-bold"
          >
            Add Money
          </Button>
          <Button 
            variant="outline"
            className="w-full border-gold text-gold hover:bg-gold hover:text-betting-dark"
          >
            Withdraw
          </Button>
        </div>
      </div>
    </Card>
  );
};