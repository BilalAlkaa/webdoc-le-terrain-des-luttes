import Link from "next/link"

export default function Londres2012() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Crumpled paper background texture */}
      <div 
        className="fixed inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-73tJllMDr5DSrqjYdM0HM3Jid0QgZQ.png')`,
          opacity: 0.4
        }}
      />
      
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />
      
      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(80,60,40,0.2)_60%,rgba(50,35,20,0.5)_100%)]" />
      
      {/* Damaged edges */}
      <div className="fixed top-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-b from-amber-950/30 via-amber-900/10 to-transparent" />
      <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t from-amber-950/30 via-amber-900/10 to-transparent" />
      <div className="fixed top-0 bottom-0 left-0 w-12 pointer-events-none bg-gradient-to-r from-amber-950/40 via-amber-900/15 to-transparent" />
      <div className="fixed top-0 bottom-0 right-0 w-12 pointer-events-none bg-gradient-to-l from-amber-950/40 via-amber-900/15 to-transparent" />
      
      {/* Corner stains */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(101,67,33,0.25)_0%,transparent_70%)]" />
      <div className="fixed top-0 right-0 w-40 h-40 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(101,67,33,0.2)_0%,transparent_70%)]" />
      <div className="fixed bottom-0 left-0 w-36 h-36 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(101,67,33,0.3)_0%,transparent_70%)]" />
      <div className="fixed bottom-0 right-0 w-44 h-44 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(101,67,33,0.25)_0%,transparent_70%)]" />
      
      {/* Page border */}
      <div className="fixed inset-4 border-2 border-amber-900/20 pointer-events-none" style={{ boxShadow: 'inset 0 0 30px rgba(101,67,33,0.1)' }} />
      <div className="fixed inset-6 border border-amber-800/15 pointer-events-none" />

      {/* Back to home button */}
      <Link 
        href="/"
        className="fixed top-6 left-8 z-20 px-4 py-2 text-sm font-semibold tracking-wide uppercase border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Accueil
      </Link>

      {/* Main content */}
      <div className="relative z-10 px-6 py-20 md:px-12 lg:px-20 max-w-4xl mx-auto">
        
        {/* Surtitre */}
        <p 
          className="text-sm md:text-base tracking-[0.3em] uppercase text-accent font-semibold mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          2012 - Londres
        </p>

        {/* Titre */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-8"
          style={{ fontFamily: 'var(--font-playfair)', lineHeight: '1.1' }}
        >
          La révolution des &quot;Superhumains&quot;
        </h1>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-accent mb-10" />

        {/* Image d'archive */}
        <div className="relative w-full max-w-2xl mx-auto mb-10 border-4 border-foreground/80">
          <img 
            src="/2012.jpg" 
            alt="Athlètes paralympiques britanniques pour les Jeux de Londres 2012"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-amber-900/5 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Text content */}
        <p 
          className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-16"
          style={{ fontFamily: 'var(--font-baskerville)' }}
        >
          Si Stoke Mandeville (1948) a vu naître le mouvement paralympique, les Jeux de Londres en 2012 marquent son avènement mondial. Portée par la campagne médiatique choc &quot;Meet the Superhumans&quot;, la compétition change radicalement le regard du grand public sur le handisport. Fini le misérabilisme : les athlètes paralympiques sont enfin célébrés pour ce qu&apos;ils sont, des sportifs de très haut niveau aux performances exceptionnelles. Avec des stades pleins à craquer et une médiatisation sans précédent, ces Jeux brisent les tabous sur le handicap et imposent l&apos;inclusion comme un standard incontournable.
        </p>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t-2 border-foreground/20">
          <Link
            href="/evenements/1995"
            className="px-6 py-3 text-sm font-semibold tracking-wide uppercase border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            ← 1995 : Johannesburg
          </Link>

          <Link
            href="/evenements/2016"
            className="px-6 py-3 text-sm font-semibold tracking-wide uppercase border-2 border-accent bg-accent text-white transition-all duration-300 hover:bg-transparent hover:text-accent"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            2016 : San Diego →
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/menu"
            className="text-sm uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Retour à la frise
          </Link>
        </div>
      </div>
    </main>
  )
}
