import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { 
  Hash, 
  Dice1, 
  Dice2, 
  Dice3, 
  BarChart2, 
  LineChart, 
  HelpCircle 
} from "lucide-react"

const MenuItems = () => {
  return (
    <div className="w-full bg-betting-card border-b border-betting-dark">
      <div className="max-w-7xl mx-auto px-4">
        <Menubar className="border-none bg-transparent">
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <Dice1 className="w-4 h-4 mr-2" />
              SINGLE
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <Hash className="w-4 h-4 mr-2" />
              JODI
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <Dice1 className="w-4 h-4 mr-2" />
              SINGLE PATTI
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <Dice2 className="w-4 h-4 mr-2" />
              DOUBLE PATTI
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <Dice3 className="w-4 h-4 mr-2" />
              TRIPPLE PATTI
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <BarChart2 className="w-4 h-4 mr-2" />
              JODI CHART
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <LineChart className="w-4 h-4 mr-2" />
              PANEL CHART
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-betting-accent cursor-pointer">
              <HelpCircle className="w-4 h-4 mr-2" />
              HOW TO PLAY
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}

export default MenuItems