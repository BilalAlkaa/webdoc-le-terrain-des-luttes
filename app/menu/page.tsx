"use client"

import { TimelineEvent } from "@/components/timeline-event"
import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  {
    year: 1936,
    location: "Berlin",
    title: "Jesse Owens et l'athlétisme",
    description: "L'athlète afro-américain remporte 4 médailles d'or en Allemagne, défiant directement l'idéologie nazie sous les yeux d'Adolf Hitler.",
    id: "berlin-1936"
  },
  {
    year: 1948,
    location: "Stoke Mandeville",
    title: "Les prémices des Jeux Paralympiques",
    description: "Le Dr. Ludwig Guttmann organise les premiers 'Jeux de Stoke Mandeville' pour des vétérans de la Seconde Guerre mondiale atteints à la moelle épinière, posant les fondations du mouvement paralympique moderne.",
    id: "stoke-1948"
  },
  {
    year: 1967,
    location: "Marathon de Boston",
    title: "Kathrine Switzer et la course à pied",
    description: "La première femme à s'inscrire officiellement et à terminer le marathon de Boston, malgré la tentative violente d'un organisateur de l'en exclure en pleine course.",
    id: "boston-1967"
  },
  {
    year: 1968,
    location: "Mexico",
    title: "Le poing levé de Tommie Smith et John Carlos",
    description: "Les deux sprinteurs américains montent sur le podium des 200 mètres et lèvent un poing ganté de noir pendant l'hymne national pour dénoncer le racisme et la ségrégation aux États-Unis.",
    id: "mexico-1968"
  },
  {
    year: 1973,
    location: "Houston",
    title: "Le match de l'égalité",
    description: "Billie Jean King remporte la 'Bataille des Sexes' face à Bobby Riggs, un match d'exhibition devenu symbole de la lutte pour l'égalité dans le sport féminin.",
    id: "houston-1973"
  },
  {
    year: 1995,
    location: "Johannesburg",
    title: "L'union par le ballon ovale",
    description: "Nelson Mandela remet la Coupe du Monde de rugby aux Springboks, transformant un sport symbole de l'apartheid en vecteur de réconciliation nationale.",
    id: "johannesburg-1995"
  },
  {
    year: 2012,
    location: "Londres",
    title: "La révolution des \"Superhumains\"",
    description: "Les Jeux Paralympiques de Londres changent radicalement le regard du grand public sur le handisport, célébrant les athlètes comme des sportifs de très haut niveau.",
    id: "londres-2012"
  },
  {
    year: 2016,
    location: "San Diego",
    title: "Un genou à terre pour la justice",
    description: "Colin Kaepernick pose un genou à terre pendant l'hymne américain pour protester contre les violences policières, déclenchant un mouvement mondial.",
    id: "san-diego-2016"
  }
]

export default function MenuPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const visibleCards = 4
  const maxIndex = events.length - visibleCards

  const scrollPrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const scrollNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

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
      <div className="fixed top-0 bottom-0 left-1/3 w-px pointer-events-none bg-gradient-to-b from-transparent via-amber-800/15 to-transparent" />
      
      {/* Page border decoration */}
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

      <div className="relative z-10 px-6 py-12 md:px-12 lg:px-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-16 h-px bg-foreground/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Chroniques Historiques</span>
              <span className="block w-16 h-px bg-foreground/60" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground uppercase" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}>
              Le Terrain des Luttes
            </h1>
            
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-accent" />
              <span className="text-accent text-2xl">&#10038;</span>
              <span className="block w-8 h-px bg-accent" />
            </div>
            
            <p className="mt-6 text-muted-foreground italic text-lg max-w-xl mx-auto" style={{ fontFamily: 'var(--font-baskerville)' }}>
              Les moments qui ont changé l&apos;histoire du sport
            </p>
          </div>
        </header>

        {/* Timeline Carousel */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Timeline line - extends full width */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-foreground/30" />
          
          {/* Timeline nodes - positioned based on currentIndex */}
          <div className="hidden lg:flex absolute top-8 left-12 right-12 -translate-y-1/2">
            <div 
              className="flex justify-between w-full transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(events.length / visibleCards) * 100}%`
              }}
            >
              {events.map((event, index) => (
                <div 
                  key={event.id}
                  className={`w-4 h-4 rounded-full border-2 border-foreground bg-card transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-150 bg-accent border-accent' : ''
                  }`}
                  style={{ flex: `0 0 ${100 / events.length}%`, display: 'flex', justifyContent: 'center' }}
                />
              ))}
            </div>
          </div>

          {/* Carousel container */}
          <div className="relative mt-0 lg:mt-20">
            
            {/* Left arrow */}
            <button
              onClick={scrollPrev}
              disabled={currentIndex === 0}
              className={`hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center border-2 border-foreground bg-card text-foreground transition-all duration-300 ${
                currentIndex === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-foreground hover:text-background cursor-pointer'
              }`}
              aria-label="Événement précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right arrow */}
            <button
              onClick={scrollNext}
              disabled={currentIndex >= maxIndex}
              className={`hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center border-2 border-foreground bg-card text-foreground transition-all duration-300 ${
                currentIndex >= maxIndex 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-foreground hover:text-background cursor-pointer'
              }`}
              aria-label="Événement suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards container with overflow hidden */}
            <div className="overflow-hidden lg:mx-8" ref={carouselRef}>
              <div 
                className="flex transition-transform duration-500 ease-out gap-4"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                  width: `${(events.length / visibleCards) * 100}%`
                }}
              >
                {events.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="flex-shrink-0"
                    style={{ width: `${100 / events.length}%`, paddingRight: '1rem' }}
                  >
                    <TimelineEvent
                      {...event}
                      onHover={() => setHoveredIndex(index)}
                      onLeave={() => setHoveredIndex(null)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile grid view */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <TimelineEvent
                  key={event.id}
                  {...event}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="hidden lg:flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-accent w-6' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer decoration */}
        <footer className="mt-20 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="block w-24 h-px bg-foreground/30" />
            <span className="text-foreground/40 text-sm tracking-widest uppercase">Fin du Chapitre</span>
            <span className="block w-24 h-px bg-foreground/30" />
          </div>
        </footer>
      </div>
    </main>
  )
}
