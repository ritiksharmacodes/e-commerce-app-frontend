import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-32 bg-muted relative overflow-hidden">
      <div className="max-w-xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-4xl font-headline font-extrabold mb-4">Stay Ahead of the Curve</h2>
        <p className="text-muted-foreground mb-10">
          Join 50k+ enthusiasts for exclusive product drops and editorial tech reviews.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="flex-1 px-6 py-4 rounded-lg bg-card border-none focus:ring-2 focus:ring-secondary transition-all text-sm outline-none"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-headline font-bold text-sm tracking-widest hover:bg-secondary transition-colors whitespace-nowrap">
            GET UPDATES
          </button>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl" />
    </section>
  )
}
