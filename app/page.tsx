import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedProducts } from "@/components/featured-products"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Brand Statement */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold mb-6 text-balance">
            La empresa de ropa hecha por adolescentes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            bla bla bla aqui iria un texto inspirador supongo
          </p>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold">
              Productos Destacados
            </h2>
            <Link 
              href="/productos"
              className="mt-4 md:mt-0 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Ver Todo
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-12 text-center">
            Lookbook
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8JwcssGJk016HImzmAK8NoBZhYRJ73.png"
                alt="camiseta cherry corp"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-vqvOdkJxowUjqZV1XtR1mQ9isVzQJS.jpeg"
                alt="sudadera new steet"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-361Up36UqlgwQxufsgW1cg9sC1ETIO.png"
                alt="camiseta cherry corp"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TciJCatJvXjMJiDBG1bCT2ytSr44VJ.png"
                alt="nst corporation sudadera"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-wFyy8EzZUNDATaRZZxTz11viBXIQq6.jpeg"
            alt="colección new steet"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold mb-6">
            Únete a la comunidad
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Síguenos en Instagram para estar al día de las últimas novedades y nuevos lanzamientos.
          </p>
          <a
            href="https://www.instagram.com/_newsteet_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            @_newsteet_
          </a>
        </div>
      </section>
    </div>
  )
}
