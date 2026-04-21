export function Hero() {
  return (
    <section className="relative h-[870px] flex items-center overflow-hidden px-8">
      <div className="absolute inset-0 z-0">
        <img
          alt="Premium Desktop Monitor"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe14u2BG-tD8N3U1c0nWsU1yDa75QJQUi4WIFlD_H83odbo9J_vAEhJjFbwZdwpwuFLuIqnfSNH_AYNoCgczYofIOufk7hSnkAx5w0z4TWe1uIlbUBiUcYmc3RPcIrito-Hb7pIRhkFR7EwwtJDW-6gHXdSg92DITCw48WEmT_pV6poP9avKDmFFOGZpE8-_v4xY_B6XGmH7_xIBZNWgHTOfshirrjXlduN4MYUafCt-DJWejIC9Ss3OZX7QVF97RaDX1wNCadVD0"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-[4rem] font-headline font-extrabold leading-[1.1] tracking-tight mb-6 text-foreground">
          Shop Smarter,<br />Faster
        </h1>
        <p className="text-xl text-muted-foreground font-light mb-10 max-w-lg leading-relaxed">
          Curated technology designed for the modern lifestyle. Precision engineered displays for the digital atelier.
        </p>
        <div className="flex items-center gap-6">
          <button className="editorial-gradient text-primary-foreground px-10 py-4 rounded-lg font-headline font-bold text-sm tracking-wide hover:scale-[1.02] transition-transform">
            Shop Now
          </button>
          <button className="px-10 py-4 rounded-lg font-headline font-bold text-sm tracking-wide border border-border hover:bg-muted transition-colors">
            Explore
          </button>
        </div>
      </div>
    </section>
  )
}
