import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Home, LogIn, UserPlus, User } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full bg-betting-dark border-b border-betting-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-xl font-bold text-betting-accent flex items-center">
              Matkaing
            </Link>
            <Link 
              to="/" 
              className="text-white hover:text-betting-accent flex items-center gap-2 transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-white hover:text-betting-accent flex items-center gap-2 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-white hover:text-betting-accent flex items-center gap-2 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </Link>
            <Link 
              to="/profile" 
              className="text-white hover:text-betting-accent flex items-center gap-2 transition-colors"
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar