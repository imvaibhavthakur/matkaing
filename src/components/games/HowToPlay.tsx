import { Card } from "@/components/ui/card";

const HowToPlay = () => {
  return (
    <Card className="bg-betting-card p-6 border-betting-accent">
      <h2 className="text-2xl font-bold text-gold mb-4">How To Play</h2>
      <div className="space-y-4 text-white">
        <section>
          <h3 className="text-xl font-semibold text-gold mb-2">Single</h3>
          <p>Choose any single digit from 0-9 and place your bet.</p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-gold mb-2">Jodi</h3>
          <p>Select any two digits from 00-99 to place your bet.</p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-gold mb-2">Single Patti</h3>
          <p>Choose any three digits from 000-999 where all digits are different.</p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-gold mb-2">Double Patti</h3>
          <p>Select three digits where exactly two digits are the same.</p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-gold mb-2">Tripple Patti</h3>
          <p>Pick three digits where all digits are the same.</p>
        </section>
      </div>
    </Card>
  );
};

export default HowToPlay;