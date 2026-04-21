import { ArrowRight } from "lucide-react"

const smallerItems = [
  {
    name: "Titan Arm Mount",
    description: "Precision movement for up to 34\" displays.",
    price: "$149.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe_KDsUuaZczdo4j0quhJMNwquVaXBWAL3CMQ9qNjpdQsRUsLojPWLdQiSK14V_8RhFcohGIGQEczehpzQA3eaHtj0rcV1Pb8PGkXi-BsLp-00VFJc3zhexmr1wwhk4CYql6_U1rDefQD3va6ipBW1F76_oHIfBJyGnDl0ZpwKn9sqSRpJ2voBusS5D7AH5ag_i9n52f6uWtqtxYfv_ZYExSN0SefZQ6E3JycywNz8Uf16teOJYgWAd341P8b8NkBUTOpkfFafQkw",
    alt: "Monitor Arm",
  },
  {
    name: "Backlit Deck Keyboard",
    description: "Mechanical switches with ambient glow.",
    price: "$210.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDanDx_VpilRpyfO0PKwdlptOCreo-yvl-aF34QjtjMeEEMamE5gJahlQ7jgNGutVlbPv_fg8otxIKjaqZPLJ_WIohDHu1HPcZZxGsbb2AtpYMwGH_tHPODaz3Q9om88TRtpoBwE6E1bWe-JFPf4SMgyJhYlf8_3RtTrTSkfJ0SNdqImBjhmio-2A1cMoJQCeFEFGMGBkm-iylo1yNYblQvYLanPUZ3WNHS19MbTXuQnVG9_oYkWt7uItIZII9GOUI7yhqWLXV94mo",
    alt: "Mechanical Keyboard",
  },
]

export function Recommended() {
  return (
    <section className="py-32 px-8 max-w-[1440px] mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl font-headline font-extrabold tracking-tight">
          Recommended for Your Workspace
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Large Featured Item */}
        <div className="md:col-span-7 group cursor-pointer">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
            <img
              alt="Luxury Monitor Setup"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9nDAdl1zRjQ7rbAH-pWC1RRiwfJ1fYsyI20U8h5M-2nBalgxEjNJE9Sl0gQI1mty_wGcPp7o0xNb_cKk9jvknJ68uJys4ezKEJzKvFnmbNfa0TZUYG4h2pYKwmpyE3TCOi9pxuM3I4mLUE7S9Fi3voZIzTwZFY6X5ZIOChiQYWPEiMH7yT75UttxJ2ICWZiak9fTZ0nKg-EFKhyd7vQ49KtOKtFJDg0-6wTazo-rkWtt1ng3vQXAgLpqAbFxnEtyyWAt_bgCKUc"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-10 left-10 text-primary-foreground">
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                New Arrival
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4">
                Lumina OLED 49&quot; Ultra-Curve
              </h3>
              <button className="text-sm font-headline font-bold flex items-center group-hover:translate-x-2 transition-transform">
                Explore Specifications <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Stacked Smaller Items */}
        <div className="md:col-span-5 flex flex-col gap-10">
          {smallerItems.map((item) => (
            <div
              key={item.name}
              className="bg-accent rounded-2xl p-8 flex items-center group cursor-pointer transition-all hover:bg-muted"
            >
              <div className="flex-1">
                <h4 className="font-headline font-bold text-xl mb-2">{item.name}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <span className="font-headline font-extrabold text-lg">{item.price}</span>
              </div>
              <div className="w-32 h-32 rounded-xl overflow-hidden relative shrink-0">
                <img
                  alt={item.alt}
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
