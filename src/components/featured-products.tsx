import { ProductCard } from "./product-card"

const products = [
  {
    name: "Sonic-X Wireless",
    price: "$299.00",
    rating: 4,
    reviews: 128,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZBxlQYW5_4HdJW0AAMDVGJQv9jXD8Y7kYVNoprkSMiKICip8ScC4Sy-w5a1qtrQjdGa8j6kehuQfxEGuDxKM4blTkehV-D7l-e1ns3EEzPFo1fZda5WArLMhIvxI5_4Fv0PunBtl1aWJLkChuCPxwZVm1h0Ix1DuX3l3BWsY7dV8mhFD3PG1q0wV5EYlBOLTwIApbIYVDOelWoS252ZFMlLQoTObycGN84G7MxZzHcVf5jkdGXRIchUE5H2oDo0qeCyUuf7xM0Cw",
    alt: "Audio Pro Headphones",
  },
  {
    name: "Lumina Chrono V1",
    price: "$450.00",
    rating: 5,
    reviews: 84,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzpxSyMieaqqLqWOADLr3cLGJYUMJNdymjxwsHaMcFoyyIGmxwA9qpm5cax2_pXvBgGMUWCAqAKqRDqVFWFWFLpv_u_HU7x-vCDggoyPa0kARZ52v8819f21hmqOhfMzR-uAI9mGOiEuJWIw93T-JFOWVxmwfG0An-l0ZUXOCtcFKkR42i4fC0rDOfqh2lNot-IAfUlCTgx8XyPZ68WlxSRbRe9QMQ1iDh1_jsxKfMXibaAkn7PAUSVVPiPskUXZrBLc64R79n4XA",
    alt: "Modern Minimalist Watch",
  },
  {
    name: "AeroClick Pro",
    price: "$89.00",
    rating: 4,
    reviews: 212,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLnIeQ5eI1gUiTPwFntDnVBrShrTDYmHDfAj54VU50qQDHsmNEqA1uj1sIEoVHMZxkrW2M_AwD70opY6iOpwrWqb2UvgyWlLYP4TLJMrgvWGe_K9J1AynqRyvYz_xTcT-6zy3VjBoneNhnc50fGo4gWDsW4eiUjykZ8ovQjnqLXxlYErlebajfTVHSaUITx5i9H2Jwb7n9qd2j4CQQ-fXWda4jcHv8s-QKKjwrtaDXh7wgbGcVckP4cY2j3eGggqew8wE2L7wUowY",
    alt: "Ergonomic Mouse",
  },
  {
    name: "Canvas Tab Ultra",
    price: "$1,199.00",
    rating: 5,
    reviews: 45,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSe8FCBY4oO9MPLE3mOOM1UNUzMIqycNbHm-3P8tXVrQE0gWrG1wxAgMR7XpXK4g4iyht8lXyf1Z2E_UboBmDftKD0x45-HU8EdC02f23QhhnD6IzzRSxrvap28HhQRsxMVPNePoca95rVz8X2u5mBS2C6IInkTTfeixmG8K5p-jl448Yj-T7L6bWXO7GDSaslJy1tRGPR5gtbePr2fiTvVKIkSF90OJvuKovZDnjy6rFI0y7Ja3-E3lqxOGROmex2R-eMJ5iAaLs",
    alt: "Tablet Pro",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-secondary font-headline font-bold uppercase tracking-[0.2em] text-xs mb-3">
              Essentials
            </p>
            <h2 className="text-4xl font-headline font-bold">Featured Selections</h2>
          </div>
          <a
            href="#"
            className="text-sm font-headline font-bold underline underline-offset-8 decoration-secondary transition-all hover:decoration-primary"
          >
            View All Collection
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
