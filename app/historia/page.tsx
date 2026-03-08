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
            El origen de una marca que nacio para romper moldes
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
            New Steet nacio de la pasion por el streetwear y la cultura urbana. Lo que empezo 
            como un sueno entre amigos, se convirtio en una marca que representa la autenticidad 
            y el estilo de una nueva generacion. Desde el primer dia, nuestra mision ha sido 
            crear prendas que permitan a cada persona expresar su individualidad.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-foreground">
            Nuestra filosofia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            En New Steet creemos que la moda es una forma de expresion personal. No seguimos 
            tendencias, las creamos. Cada diseno nace de la observacion de la calle, de la 
            musica, del arte y de la energia de las ciudades. Nuestras colecciones reflejan 
            esa esencia urbana que nos define.
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
            Cada prenda de New Steet esta confeccionada con los mejores materiales. Trabajamos 
            con proveedores de confianza y supervisamos cada etapa del proceso de produccion 
            para garantizar que cada pieza cumpla con nuestros estandares de calidad. No es 
            solo ropa, es una declaracion de estilo.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-foreground">
            La comunidad
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            New Steet es mas que una marca, es una comunidad. Nos conectamos con personas que 
            comparten nuestra vision del mundo, que valoran la autenticidad y que no tienen 
            miedo de destacar. A traves de nuestras redes sociales y eventos, creamos espacios 
            donde nuestra comunidad puede expresarse y conectar.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 border border-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
              Autenticidad
            </h3>
            <p className="text-muted-foreground text-sm">
              Cada diseno refleja nuestra vision unica del streetwear
            </p>
          </div>
          <div className="text-center p-6 border border-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
              Calidad
            </h3>
            <p className="text-muted-foreground text-sm">
              Materiales premium y atencion al detalle en cada pieza
            </p>
          </div>
          <div className="text-center p-6 border border-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2">
              Comunidad
            </h3>
            <p className="text-muted-foreground text-sm">
              Unidos por la pasion por el estilo urbano
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
