import { Monitor, Shirt, Home, Sparkles, Dumbbell, BookOpen } from "lucide-react"

const categories = [
  { name: "Electronics", icon: Monitor },
  { name: "Fashion", icon: Shirt },
  { name: "Home", icon: Home },
  { name: "Beauty", icon: Sparkles },
  { name: "Sports", icon: Dumbbell },
  { name: "Books", icon: BookOpen },
]

export function Categories() {
  return (
    <section className="py-24 px-8 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mb-16 px-4">
        <h2 className="text-3xl font-headline font-bold">Browse by Universe</h2>
        <div className="h-[1px] flex-grow mx-8 bg-border/30" />
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-12">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-card ambient-shadow flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-2 duration-300">
              <category.icon className="w-8 h-8 text-foreground" />
            </div>
            <span className="font-headline font-medium text-sm tracking-tight">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
