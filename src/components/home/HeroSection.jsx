import { useEffect, useMemo, useState } from 'react'

function HeroSection({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = slides.length

  const activeHero = useMemo(() => slides[activeSlide], [activeSlide, slides])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount)
    }, 5200)
    return () => clearInterval(timer)
  }, [slideCount])

  return (
    <section className="mx-auto w-full max-w-[95%] px-3 pt-8 sm:px-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-slate-900 to-black text-white shadow-2xl">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${activeHero.image})`,
          }}
        />
        <div className="relative z-10 flex min-h-[500px] flex-col justify-center gap-6 p-8 sm:min-h-[600px] sm:p-12 md:min-h-[650px] md:p-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-green-300">
            <span className="inline-block h-1 w-8 rounded-full bg-[#16a34a]" />
            Konya Kilit
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{activeHero.title}</h1>
          <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">{activeHero.description}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="#urunler"
              className="rounded-lg bg-[#16a34a] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-[#15803d] shadow-lg"
            >
              Ürünleri İncele
            </a>
            <a
              href="#markalar"
              className="rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
            >
              Markalarımız
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(index)}
                className={`h-2 w-12 rounded-full transition-all ${
                  index === activeSlide ? 'bg-[#16a34a] w-16' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`${slide.title} slaytını göster`}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex gap-3">
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount)}
            className="rounded-full bg-white/20 px-5 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white/30"
            aria-label="Önceki slayt"
          >
            ‹
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % slideCount)}
            className="rounded-full bg-white/20 px-5 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white/30"
            aria-label="Sonraki slayt"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

