import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Single from "./components/games/Single";
import Jodi from "./components/games/Jodi";
import SinglePatti from "./components/games/SinglePatti";
import DoublePatti from "./components/games/DoublePatti";
import TripplePatti from "./components/games/TripplePatti";
import JodiChart from "./components/games/JodiChart";
import PanelChart from "./components/games/PanelChart";
import HowToPlay from "./components/games/HowToPlay";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/single" element={<Single />} />
          <Route path="/jodi" element={<Jodi />} />
          <Route path="/single-patti" element={<SinglePatti />} />
          <Route path="/double-patti" element={<DoublePatti />} />
          <Route path="/tripple-patti" element={<TripplePatti />} />
          <Route path="/jodi-chart" element={<JodiChart />} />
          <Route path="/panel-chart" element={<PanelChart />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;