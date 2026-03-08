import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4">
              NEW STEET
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Streetwear con actitud. Diseños exclusivos para quienes marcan tendencia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-foreground">
              Navegacion
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/historia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Historia
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-foreground">
              Siguenos
            </h4>
            <a 
              href="https://www.instagram.com/_newsteet_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@_newsteet_</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} New Steet. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
