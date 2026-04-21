import { useEffect, useState } from "react"

export function FlashSale() {
  const [time, setTime] = useState({ hours: 4, minutes: 22, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="editorial-gradient py-24 text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <img
          alt="Tech Background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5TOWJRt9ce6WjtWiB4LEjFYIfupPq-TXhYAPmctWtvSTTjcDrMoGAPUsIIPlrcJu5gbKPROFOoYWceIbADoXU7SYpi1AIkQudJDd-yQXS1YxONrexASkA33Xf4CEoGG2a1dHyKMG_ElZKH42CQ6arddTYsMH7-Jp2uOcsb47udrEPYN4GslAGs7nC3QcURFMEjPgUmwNp-OFDS8f3RGyKpu2UNqLp8VLbAc_AXxTZIBX7PP_sxSQI1l68RDup4eUaLwaAr0EB88"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full mb-8">
          Limited Time Offer
        </span>
        
        <h2 className="text-5xl md:text-7xl font-headline font-extrabold mb-10 tracking-tighter uppercase italic">
          Midnight Tech Drop
        </h2>
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-extrabold font-headline mb-1">
              {String(time.hours).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">Hours</div>
          </div>
          <div className="text-4xl font-light opacity-50">:</div>
          <div className="text-center">
            <div className="text-5xl font-extrabold font-headline mb-1">
              {String(time.minutes).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">Minutes</div>
          </div>
          <div className="text-4xl font-light opacity-50">:</div>
          <div className="text-center">
            <div className="text-5xl font-extrabold font-headline mb-1">
              {String(time.seconds).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">Seconds</div>
          </div>
        </div>
        
        <button className="bg-primary-foreground text-primary px-12 py-5 rounded-lg font-headline font-bold text-sm tracking-widest hover:bg-secondary hover:text-secondary-foreground transition-all">
          CLAIM EARLY ACCESS
        </button>
      </div>
    </section>
  )
}
