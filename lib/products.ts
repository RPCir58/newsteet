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
    name: "Cherry Corp Tee",
    category: "Camiseta",
    price: 39.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGtI0T6mHTXIdC8V05kumTqfMHptCG.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGtI0T6mHTXIdC8V05kumTqfMHptCG.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8JwcssGJk016HImzmAK8NoBZhYRJ73.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hQGVqvYbBkknARtR3KdJvV7CwyVZXs.png"
    ],
    description: "La iconica camiseta Cherry Corp con el diseno de cerezas caracteristico de la marca. Confeccionada en algodon premium de 220gsm para maxima comodidad y durabilidad.",
    details: [
      "100% Algodon premium 220gsm",
      "Corte oversize",
      "Estampado serigrafico de alta calidad",
      "Cuello reforzado",
      "Lavable a maquina"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "cherry-corp-tee-black-v2",
    name: "Cherry Corp Tee V2",
    category: "Camiseta",
    price: 39.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DbSNZl6P3seir4XtSJ03o63QvPsTJv.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DbSNZl6P3seir4XtSJ03o63QvPsTJv.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-361Up36UqlgwQxufsgW1cg9sC1ETIO.png"
    ],
    description: "Segunda version de la camiseta Cherry Corp con el mismo diseno iconico. Ideal para completar tu coleccion o tener un repuesto de tu prenda favorita.",
    details: [
      "100% Algodon premium 220gsm",
      "Corte oversize",
      "Estampado serigrafico de alta calidad",
      "Cuello reforzado",
      "Lavable a maquina"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "steet-new-hoodie-grey",
    name: "Steet New Hoodie",
    category: "Sudadera",
    price: 69.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KizNqNvzQrR8LjWxYGIzkyM4ZWNYWT.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KizNqNvzQrR8LjWxYGIzkyM4ZWNYWT.jpeg"
    ],
    description: "Sudadera Steet New en gris jaspeado con el logo clasico de la marca. Perfecta para el dia a dia con un toque de estilo urbano.",
    details: [
      "80% Algodon, 20% Poliester",
      "Interior afelpado",
      "Corte regular",
      "Capucha con cordon ajustable",
      "Bolsillo canguro frontal"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "nst-corp-hoodie-black",
    name: "Nst C*rp Hoodie",
    category: "Sudadera",
    price: 74.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Wy4rDeZk3APD3EiMtjwPT5zFmPGd0.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Wy4rDeZk3APD3EiMtjwPT5zFmPGd0.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-wFyy8EzZUNDATaRZZxTz11viBXIQq6.jpeg"
    ],
    description: "La sudadera Nst C*rp en negro con el distintivo logo en contraste. Una pieza esencial para cualquier amante del streetwear.",
    details: [
      "80% Algodon, 20% Poliester",
      "Interior afelpado premium",
      "Corte oversize",
      "Capucha con cordon ajustable",
      "Bolsillo canguro frontal"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "nst-corp-hoodie-black-v2",
    name: "Nst C*rp Hoodie V2",
    category: "Sudadera",
    price: 74.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TciJCatJvXjMJiDBG1bCT2ytSr44VJ.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TciJCatJvXjMJiDBG1bCT2ytSr44VJ.png"
    ],
    description: "Version actualizada de la sudadera Nst C*rp con el mismo diseno iconico que ha conquistado la escena urbana.",
    details: [
      "80% Algodon, 20% Poliester",
      "Interior afelpado premium",
      "Corte oversize",
      "Capucha con cordon ajustable",
      "Bolsillo canguro frontal"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "steet-new-hoodie-grey-stars",
    name: "Steet New Stars Hoodie",
    category: "Sudadera",
    price: 72.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-vqvOdkJxowUjqZV1XtR1mQ9isVzQJS.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-vqvOdkJxowUjqZV1XtR1mQ9isVzQJS.jpeg"
    ],
    description: "Sudadera Steet New en gris con el diseno de estrellas exclusivo. Una pieza unica que combina comodidad y estilo.",
    details: [
      "80% Algodon, 20% Poliester",
      "Interior afelpado",
      "Corte regular",
      "Capucha con cordon ajustable",
      "Bolsillo canguro frontal"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getAllProductIds(): string[] {
  return products.map(p => p.id)
}
