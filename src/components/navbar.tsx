import { Search, ShoppingBag, User } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-header shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <a href="/" className="text-2xl font-bold tracking-tighter text-slate-900 font-headline">
          LUMINA
        </a>
        
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
            <input
              className="w-full bg-muted border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary-container transition-all outline-none"
              placeholder="Search premium displays..."
              type="text"
            />
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-headline tracking-tight font-medium text-sm">
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
            Gaming
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
            Pro Display
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
            Ultrawide
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
            Accessories
          </a>
        </div>
        
        <div className="flex items-center ml-8 gap-5">
          <button className="hover:opacity-80 transition-opacity">
            <ShoppingBag className="w-5 h-5 text-slate-900" />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <User className="w-5 h-5 text-slate-900" />
          </button>
        </div>
      </div>
    </nav>
  )
}
