import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getProductById, getAllProductIds } from "@/lib/products"
import { ProductDetail } from "@/components/product-detail"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return getAllProductIds().map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: "Producto no encontrado | New Steet"
    }
  }

  return {
    title: `${product.name} | New Steet`,
    description: product.description
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
