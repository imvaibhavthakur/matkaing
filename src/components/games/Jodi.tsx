import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Jodi = () => {
  const [selectedMarket, setSelectedMarket] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [points, setPoints] = useState<{ [key: string]: string }>({});
  const [totalPoints, setTotalPoints] = useState<number>(0);

  // Generate numbers from 00 to 99
  const numbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));

  const handlePointChange = (number: string, value: string) => {
    const newPoints = { ...points, [number]: value };
    setPoints(newPoints);
    
    // Calculate total points
    const total = Object.values(newPoints)
      .reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    setTotalPoints(total);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">JODI (00-99)</h1>
        <p className="text-xl text-foreground/70">Select Your Game</p>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Select value={selectedMarket} onValueChange={setSelectedMarket}>
            <SelectTrigger>
              <SelectValue placeholder="------ Select Market ------" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="market1">Market 1</SelectItem>
              <SelectItem value="market2">Market 2</SelectItem>
              <SelectItem value="market3">Market 3</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger>
              <SelectValue placeholder="Select Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20-dec-2024">20 Dec 2024</SelectItem>
              <SelectItem value="21-dec-2024">21 Dec 2024</SelectItem>
              <SelectItem value="22-dec-2024">22 Dec 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-4 mb-6">
          {numbers.map((number) => (
            <div key={number} className="flex flex-col space-y-2">
              <div className="w-full h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-md font-bold">
                {number}
              </div>
              <Input
                type="number"
                value={points[number] || ""}
                onChange={(e) => handlePointChange(number, e.target.value)}
                className="w-full"
                min="0"
                placeholder="Points"
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <p className="text-xl font-semibold">
            Total Point : {totalPoints.toString().padStart(2, '0')}
          </p>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
        >
          Submit Game
        </Button>
      </Card>
    </div>
  );
};

export default Jodi;