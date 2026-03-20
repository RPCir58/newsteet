"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8JwcssGJk016HImzmAK8NoBZhYRJ73.png",
    title: "New Steet",
    subtitle: "La marca de ropa emprendida por adolescentes"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-vqvOdkJxowUjqZV1XtR1mQ9isVzQJS.jpeg",
    title: "New Steet",
    subtitle: "La marca de ropa emprendida por adolescentes"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-361Up36UqlgwQxufsgW1cg9sC1ETIO.png",
    title: "Coruña",
    subtitle: "Trabajamos desde"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hQGVqvYbBkknARtR3KdJvV7CwyVZXs.png",
    title: "Compra ya",
    subtitle: "Calidad, a un gran precio"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DbSNZl6P3seir4XtSJ03o63QvPsTJv.png",
    title: "Moda",
    subtitle: "Pronto con más"
  }
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <span className="text-sm uppercase tracking-[0.3em] mb-4 opacity-80">
          {slides[current].subtitle}
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          {slides[current].title}
        </h1>
        <Link
          href="/productos"
          className="inline-flex items-center px-8 py-3 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Ver Coleccion
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
