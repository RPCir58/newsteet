export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  images: string[]
  description: string
  details: string[]
  sizes: string[]
}

export const products: Product[] = [
  {
    id: "cherry-corp-tee-black",
    name: "Camiseta Cherry Corp Negra",
    category: "Camiseta",
    price: 19.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DbSNZl6P3seir4XtSJ03o63QvPsTJv.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGtI0T6mHTXIdC8V05kumTqfMHptCG.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8JwcssGJk016HImzmAK8NoBZhYRJ73.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hQGVqvYbBkknARtR3KdJvV7CwyVZXs.png"
    ],
    description: "La primera camiseta diseñada por New Steet. Hecha de algodón para mayor comodidad y durabilidad.",
    details: [
      "Hecho de algodón",
      "Estampado de alta calidad",
      "Apto para lavadora"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "steet-new-hoodie-grey",
    name: "Sudadera New Steet Gris",
    category: "Sudadera",
    price: 19.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KizNqNvzQrR8LjWxYGIzkyM4ZWNYWT.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KizNqNvzQrR8LjWxYGIzkyM4ZWNYWT.jpeg"
    ],
    description: "Sudadera con el clásico logo de la marca. Perfecta para el uso diario, marcando tendencia urbana.",
    details: [
      "Fabricación ecológica",
      "Interior suave",
      "Capucha con cordón ajustable",
      "Bolsillo frontal",
      "Apto para lavadora"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "nst-corp-hoodie-black",
    name: "Camiseta Nst C*rp Negra",
    category: "Camiseta",
    price: 19.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Wy4rDeZk3APD3EiMtjwPT5zFmPGd0.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Wy4rDeZk3APD3EiMtjwPT5zFmPGd0.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-wFyy8EzZUNDATaRZZxTz11viBXIQq6.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TciJCatJvXjMJiDBG1bCT2ytSr44VJ.png"
    ],
    description: "La camiseta Nst C*rp negra con el distintivo logo en contraste. Una pieza esencial para cualquier fan de la marca.",
    details: [
      "Hecha de algodón",
      "Apto para lavadora"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getAllProductIds(): string[] {
  return products.map(p => p.id)
}
