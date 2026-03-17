"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a productos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 overflow-hidden bg-secondary ${
                      selectedImage === index
                        ? "ring-2 ring-foreground"
                        : "opacity-60 hover:opacity-100"
                    } transition-all`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Vista ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              {product.category}
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium mb-6">
              {product.price.toFixed(2)} EUR
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest mb-4">Tallas disponibles</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <a
              href="https://www.instagram.com/_newsteet_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors mb-8"
            >
              Contactar para comprar
            </a>

            {/* Details */}
            <div className="border-t border-border pt-8">
              <h3 className="text-sm uppercase tracking-widest mb-4">Detalles</h3>
              <ul className="flex flex-col gap-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-foreground" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
