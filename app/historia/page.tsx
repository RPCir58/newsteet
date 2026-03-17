import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Historia | New Steet",
  description: "Conoce la historia de New Steet, una marca de streetwear nacida de la pasion por la cultura urbana."
}

export default function HistoriaPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGtI0T6mHTXIdC8V05kumTqfMHptCG.png"
            alt="New Steet Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mb-4">
            Nuestra Historia
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            El origen de una marca emprendida por adolescentes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-foreground">
            Los inicios
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            New Steet nació de un grupo de amigos bla bla bla
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-foreground">
            Nuestras ideas
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            bla bla bla ble ble ble blu blu blu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8JwcssGJk016HImzmAK8NoBZhYRJ73.png"
                alt="New Steet Style"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-vqvOdkJxowUjqZV1XtR1mQ9isVzQJS.jpeg"
                alt="New Steet Lifestyle"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-foreground">
            Calidad ante todo
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Las camisetas son de calidad premium bla bla bla
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-foreground">
            Nuestra comunidad
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Queremos compartir momentos con la gente que nos da forma bla bla bla
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 border border-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
              Auténtico
            </h3>
            <p className="text-muted-foreground text-sm">
              Cada diseño refleja nuestra forma de pensar
            </p>
          </div>
          <div className="text-center p-6 border border-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
              Calidad
            </h3>
            <p className="text-muted-foreground text-sm">
              Materiales premium y atención a cada detalle
            </p>
          </div>
          <div className="text-center p-6 border border-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
              Comunidad
            </h3>
            <p className="text-muted-foreground text-sm">
              Unidos por la pasión de la moda adolescente
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
