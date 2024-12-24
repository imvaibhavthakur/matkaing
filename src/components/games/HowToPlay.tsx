import { Card } from "@/components/ui/card";

const HowToPlay = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">How to Play Matka</h1>
        <p className="text-foreground/70">Learn how to play different Matka games</p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Single</h2>
          <p className="text-foreground/80 leading-relaxed">
            In Single game, you need to select any number from 0-9. If your selected number matches with the result, you win. The winning amount is 10 times of your bet amount.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Jodi</h2>
          <p className="text-foreground/80 leading-relaxed">
            Jodi is a two-digit number game where you need to select any number from 00-99. If your selected number matches with the result, you win. The winning amount is 90 times of your bet amount.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Single Patti</h2>
          <p className="text-foreground/80 leading-relaxed">
            Single Patti is a three-digit number game where you need to select any number from 000-999. If your selected number matches with the result, you win. The winning amount is 150 times of your bet amount.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Double Patti</h2>
          <p className="text-foreground/80 leading-relaxed">
            Double Patti is similar to Single Patti but with two same digits. For example: 112, 221, 334, etc. The winning amount is 300 times of your bet amount.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Triple Patti</h2>
          <p className="text-foreground/80 leading-relaxed">
            Triple Patti is when all three digits are same. For example: 111, 222, 333, etc. The winning amount is 900 times of your bet amount.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Important Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li>You can play multiple numbers in a single game</li>
            <li>Minimum bet amount is 10 points</li>
            <li>Results are declared twice a day</li>
            <li>Morning result time: 10:00 AM</li>
            <li>Evening result time: 6:00 PM</li>
            <li>You can check previous results in Jodi Chart and Panel Chart</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default HowToPlay;