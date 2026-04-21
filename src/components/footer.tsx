import { Globe, Share2, Network } from "lucide-react"

const footerLinks = {
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Tracking", href: "#" },
  ],
  company: [
    { label: "Sustainability", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Shipping", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full py-16 px-8 mt-auto bg-slate-100 dark:bg-slate-900 border-t border-border/10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-[1440px] mx-auto">
        <div className="col-span-2">
          <div className="text-lg font-bold text-slate-900 dark:text-slate-50 font-headline mb-6">
            LUMINA
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed mb-8">
            Defining the future of digital workspaces through precision engineering and editorial design.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Network className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h6 className="font-headline font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-slate-50">
            Support
          </h6>
          {footerLinks.support.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-all underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col gap-4">
          <h6 className="font-headline font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-slate-50">
            Company
          </h6>
          {footerLinks.company.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-all underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col gap-4">
          <h6 className="font-headline font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-slate-50">
            Legal
          </h6>
          {footerLinks.legal.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-all underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-border/10 text-center">
        <p className="font-sans text-[10px] uppercase tracking-widest text-slate-400">
          © 2024 Lumina Displays. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
