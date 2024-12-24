import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PanelChart = () => {
  const [selectedMarket, setSelectedMarket] = useState<string>("");

  // Sample data for the Panel chart
  const chartData = [
    {
      date: "2024-01-20",
      market: "Main Bazar",
      openTime: "10:00 AM",
      closeTime: "6:00 PM",
      openPanel: "128",
      closePanel: "456",
    },
    {
      date: "2024-01-19",
      market: "Main Bazar",
      openTime: "10:00 AM",
      closeTime: "6:00 PM",
      openPanel: "739",
      closePanel: "912",
    },
    {
      date: "2024-01-18",
      market: "Main Bazar",
      openTime: "10:00 AM",
      closeTime: "6:00 PM",
      openPanel: "524",
      closePanel: "678",
    },
    {
      date: "2024-01-17",
      market: "Main Bazar",
      openTime: "10:00 AM",
      closeTime: "6:00 PM",
      openPanel: "147",
      closePanel: "893",
    },
    {
      date: "2024-01-16",
      market: "Main Bazar",
      openTime: "10:00 AM",
      closeTime: "6:00 PM",
      openPanel: "369",
      closePanel: "925",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Panel Chart</h1>
        <p className="text-foreground/70">View historical Panel number results</p>
      </div>

      <Card className="p-6">
        <div className="mb-6">
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
        </div>

        <div className="overflow-x-auto">
          <table className="chart-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Market</th>
                <th>Open Time</th>
                <th>Close Time</th>
                <th>Open Panel</th>
                <th>Close Panel</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.market}</td>
                  <td>{row.openTime}</td>
                  <td>{row.closeTime}</td>
                  <td className="font-semibold text-primary">{row.openPanel}</td>
                  <td className="font-semibold text-primary">{row.closePanel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PanelChart;