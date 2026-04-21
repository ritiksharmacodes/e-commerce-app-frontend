import { Heart, ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  rating: number
  reviews: number
  image: string
  alt: string
}

export function ProductCard({ name, price, rating, reviews, image, alt }: ProductCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden ambient-shadow flex flex-col h-full group">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          alt={alt}
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center hover:bg-background transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline font-bold text-lg mb-2">{name}</h3>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2 font-medium">({reviews})</span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-headline font-extrabold">{price}</span>
          <button className="w-12 h-12 rounded-lg bg-primary-container text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
