import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos | New Steet",
  description: "Descubre toda nuestra coleccion de ropa urbana. Camisetas, sudaderas y mas."
}

const products = [
  {
    id: "1",
    name: "Camiseta Cherry Corp Negra",
    category: "Camiseta",
    price: 19.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGtI0T6mHTXIdC8V05kumTqfMHptCG.png"
  },
  {
    id: "2",
    name: "Sudadera New Steet Gris",
    category: "Sudadera",
    price: 19.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KizNqNvzQrR8LjWxYGIzkyM4ZWNYWT.jpeg"
  },
  {
    id: "3",
    name: "Sudadera Nst C*rp Negra",
    category: "Sudadera",
    price: 19.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Wy4rDeZk3APD3EiMtjwPT5zFmPGd0.png"
  },
]

export default function ProductosPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          Productos
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explora nuestra colección completa de prendas. 
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="group">
              <Link href={`/productos/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {product.category}
                  </span>
                  <h2 className="text-lg font-medium mb-2 group-hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h2>
                  <span className="text-foreground font-medium">
                    {product.price.toFixed(2)}€
                  </span>
                </div>
              </Link>
              <Link
                href={`/productos/${product.id}`}
                className="inline-flex items-center mt-4 px-6 py-2 border border-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Ver Detalles
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
