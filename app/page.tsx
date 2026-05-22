import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
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
      
      {/* Vignette effect - darker edges */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(80,60,40,0.2)_60%,rgba(50,35,20,0.5)_100%)]" />
      
      {/* Damaged edges effect - top */}
      <div className="fixed top-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-b from-amber-950/30 via-amber-900/10 to-transparent" />
      
      {/* Damaged edges effect - bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t from-amber-950/30 via-amber-900/10 to-transparent" />
      
      {/* Damaged edges effect - left */}
      <div className="fixed top-0 bottom-0 left-0 w-12 pointer-events-none bg-gradient-to-r from-amber-950/40 via-amber-900/15 to-transparent" />
      
      {/* Damaged edges effect - right */}
      <div className="fixed top-0 bottom-0 right-0 w-12 pointer-events-none bg-gradient-to-l from-amber-950/40 via-amber-900/15 to-transparent" />
      
      {/* Corner stains */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(101,67,33,0.25)_0%,transparent_70%)]" />
      <div className="fixed top-0 right-0 w-40 h-40 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(101,67,33,0.2)_0%,transparent_70%)]" />
      <div className="fixed bottom-0 left-0 w-36 h-36 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(101,67,33,0.3)_0%,transparent_70%)]" />
      <div className="fixed bottom-0 right-0 w-44 h-44 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(101,67,33,0.25)_0%,transparent_70%)]" />
      
      {/* Fold lines */}
      <div className="fixed top-1/3 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />
      <div className="fixed top-2/3 left-0 right-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-amber-800/15 to-transparent" />
      
      {/* Page border decoration */}
      <div className="fixed inset-4 border-2 border-amber-900/20 pointer-events-none" style={{ boxShadow: 'inset 0 0 30px rgba(101,67,33,0.1)' }} />
      <div className="fixed inset-6 border border-amber-800/15 pointer-events-none" />

      {/* Navigation button - top left */}
      <Link 
        href="/menu"
        className="fixed top-6 left-8 z-20 px-4 py-2 text-sm font-semibold tracking-wide uppercase border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Frise Chronologique
      </Link>

      {/* Decorative lines - top right corner like wireframe */}
      <div className="fixed top-6 right-8 flex flex-col gap-2">
        <span className="block w-10 h-0.5 bg-foreground/80" />
        <span className="block w-10 h-0.5 bg-foreground/80 ml-4" />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground uppercase mb-12"
          style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.02em' }}
        >
          Le Terrain des Luttes
        </h1>

        {/* Tunnel Image */}
        <div className="relative w-full max-w-2xl aspect-video mb-12 overflow-hidden border-4 border-foreground/90 shadow-2xl">
          {/* Image with grayscale filter for newspaper effect */}
          <Image
            src="/images/tunnel.jpg"
            alt="Tunnel des joueurs menant au terrain"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for aged effect */}
          <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          {/* Vignette on image */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* CTA Button */}
        <Link 
          href="/evenements/1936"
          className="group relative inline-block"
        >
          <span 
            className="relative z-10 block px-12 py-4 text-xl md:text-2xl font-semibold tracking-wide uppercase border-3 border-foreground bg-transparent text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background"
            style={{ fontFamily: 'var(--font-playfair)', borderWidth: '3px' }}
          >
            Entrer sur le terrain
          </span>
          {/* Decorative shadow */}
          <span className="absolute inset-0 translate-x-1 translate-y-1 border-3 border-foreground/30 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2" style={{ borderWidth: '2px' }} />
        </Link>
      </div>
    </main>
  )
}
