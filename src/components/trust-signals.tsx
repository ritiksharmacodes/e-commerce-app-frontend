import { Truck, ShieldCheck, Headphones, RefreshCw } from "lucide-react"

const signals = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "100% Encrypted transactions",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert tech assistance",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free policy",
  },
]

export function TrustSignals() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {signals.map((signal) => (
            <div key={signal.title} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <signal.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h5 className="font-headline font-bold text-sm">{signal.title}</h5>
                <p className="text-xs text-muted-foreground">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
