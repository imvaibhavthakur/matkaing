import { BettingCard } from "@/components/BettingCard";
import { WalletCard } from "@/components/WalletCard";
import Navbar from "@/components/Navbar";
import MenuItems from "@/components/MenuItems";
import Description from "@/components/DEscription";

const Index = () => {
  const games = [
    {
      title: "Kalyan Matka",
      currentNumber: "123-45-678",
      timeLeft: "05:30",
    },
    {
      title: "Main Ratan",
      currentNumber: "445-12-890",
      timeLeft: "02:15",
    },
    {
      title: "Milan Day",
      currentNumber: "234-89-567",
      timeLeft: "01:45",
    },
  ];

  return (
    <div className="min-h-screen bg-betting-dark">
      <Navbar />
      <MenuItems />
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Description Section */}
          <div className="mt-1 mb-2 border border-gray-300 p-4 rounded-md">
            <Description />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Wallet Section */}
            <div className="md:col-span-1">
              <WalletCard />
            </div>
            
            {/* Betting Games Section */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid gap-6">
                {games.map((game, index) => (
                  <BettingCard
                    key={index}
                    title={game.title}
                    currentNumber={game.currentNumber}
                    timeLeft={game.timeLeft}
                  />
                ))}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;