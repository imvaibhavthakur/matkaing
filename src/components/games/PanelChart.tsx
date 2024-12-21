import { Card } from "@/components/ui/card";

const PanelChart = () => {
  return (
    <Card className="bg-betting-card p-6 border-betting-accent">
      <h2 className="text-2xl font-bold text-gold mb-4">Panel Chart</h2>
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: 220 }, (_, i) => (
          <div 
            key={i} 
            className="bg-betting-dark p-2 text-center text-white rounded"
          >
            {i.toString().padStart(3, '0')}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PanelChart;