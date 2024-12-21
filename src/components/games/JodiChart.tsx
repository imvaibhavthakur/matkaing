import { Card } from "@/components/ui/card";

const JodiChart = () => {
  return (
    <Card className="bg-betting-card p-6 border-betting-accent">
      <h2 className="text-2xl font-bold text-gold mb-4">Jodi Chart</h2>
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: 100 }, (_, i) => (
          <div 
            key={i} 
            className="bg-betting-dark p-2 text-center text-white rounded"
          >
            {i.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default JodiChart;