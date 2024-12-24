import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const gameTypes = [
  {
    title: "Single",
    description: "Play single digit numbers from 0-9",
    path: "/single",
  },
  {
    title: "Jodi",
    description: "Play two digit combinations",
    path: "/jodi",
  },
  {
    title: "Single Patti",
    description: "Three digit game with single pattern",
    path: "/single-patti",
  },
  {
    title: "Double Patti",
    description: "Three digit game with double pattern",
    path: "/double-patti",
  },
  {
    title: "Tripple Patti",
    description: "Three digit game with triple pattern",
    path: "/tripple-patti",
  },
];

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Matka Play</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Choose from our variety of exciting number games and try your luck today!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameTypes.map((game) => (
          <Link key={game.path} to={game.path}>
            <Card className="game-card h-full">
              <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
              <p className="text-foreground/70">{game.description}</p>
            </Card>
          </Link>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/jodi-chart-list">
          <Card className="game-card">
            <h2 className="text-xl font-semibold mb-2">Jodi Charts</h2>
            <p className="text-foreground/70">View historical Jodi number charts</p>
          </Card>
        </Link>
        <Link to="/panel-chart-list">
          <Card className="game-card">
            <h2 className="text-xl font-semibold mb-2">Panel Charts</h2>
            <p className="text-foreground/70">View historical Panel number charts</p>
          </Card>
        </Link>
      </section>

      <section className="text-center">
        <Link 
          to="/how-to-play-matka" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Learn How to Play
        </Link>
      </section>
    </div>
  );
};

export default Index;