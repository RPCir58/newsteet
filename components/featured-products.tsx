import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
  {
    id: "cherry-corp-tee-black",
    name: "Cherry Corp Tee",
    price: 39.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGtI0T6mHTXIdC8V05kumTqfMHptCG.png"
  },
  {
    id: "steet-new-hoodie-grey",
    name: "Steet New Hoodie",
    price: 69.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KizNqNvzQrR8LjWxYGIzkyM4ZWNYWT.jpeg"
  },
  {
    id: "nst-corp-hoodie-black",
    name: "Nst C*rp Hoodie",
    price: 74.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Wy4rDeZk3APD3EiMtjwPT5zFmPGd0.png"
  }
]

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredProducts.map((product) => (
        <Link 
          key={product.id} 
          href={`/productos/${product.id}`}
          className="group"
        >
          <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="text-muted-foreground">{product.price.toFixed(2)} EUR</p>
        </Link>
      ))}
    </div>
  )
}
