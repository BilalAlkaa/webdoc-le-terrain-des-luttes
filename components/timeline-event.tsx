"use client"

import Link from "next/link"

interface TimelineEventProps {
  year: number
  location: string
  title: string
  description: string
  id: string
  onHover: () => void
  onLeave: () => void
}

export function TimelineEvent({ 
  year, 
  location, 
  title, 
  description,
  onHover,
  onLeave
}: TimelineEventProps) {
  return (
    <Link 
      href={`/evenements/${year}`}
      className="group relative cursor-pointer block"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Card container with old paper effect */}
      <div className="relative bg-card border-2 border-foreground/80 p-6 transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] group-hover:-translate-y-1 group-hover:-translate-x-0.5 h-full">
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-foreground/40" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-foreground/40" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-foreground/40" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-foreground/40" />

        {/* Year badge */}
        <div className="mb-4">
          <span className="inline-block bg-foreground text-primary-foreground px-3 py-1 text-2xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-playfair)' }}>
            {year}
          </span>
        </div>

        {/* Location */}
        <div className="mb-3">
          <span className="text-accent font-bold uppercase text-xs tracking-[0.15em] border-b border-accent pb-0.5">
            {location}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-3 leading-tight text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed italic line-clamp-4" style={{ fontFamily: 'var(--font-baskerville)' }}>
          &ldquo;{description}&rdquo;
        </p>

        {/* Read more indicator */}
        <div className="mt-4 pt-3 border-t border-foreground/20">
          <span className="text-xs uppercase tracking-widest text-foreground/60 group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
            Lire la suite
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>

        {/* Aged paper stain effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_20%_80%,rgba(139,119,85,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(ellipse_at_90%_10%,rgba(180,150,100,0.4)_0%,transparent_40%)]" />
      </div>

      {/* Mobile timeline connector */}
      <div className="lg:hidden absolute -left-6 top-0 bottom-0 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-foreground bg-card group-hover:bg-accent group-hover:border-accent transition-colors duration-300" />
        <div className="flex-1 w-0.5 bg-foreground/30" />
      </div>
    </Link>
  )
}
