import { useEffect, useMemo, useState } from 'react'

const heroSlides = [
  {
    title: 'SINIFININ EN GÜÇLÜ POMPASI',
    description:
      'Yüksek verimlilik, düşük kayıp ve maksimum dayanım için geliştirilen yeni nesil pompalarımızla üretiminize güç katın.',
    image: 'https://metosan.com.tr/Storage/Upload/cache/637695442382333208-b75-1hakkimizda-494-632.jpeg',
  },
  {
    title: 'GÜÇ ONUN İŞİ',
    description:
      'HYD Point ürün gamındaki hidrolik çözümler; ağır iş, endüstri, tarım ve mobil uygulamalarda sahada kendini kanıtladı.',
    image: 'https://metosan.com.tr/Storage/Upload/cache/637286938676461652-b75-1turkiye-nin-hidrolik-marketi--800-547.jpeg',
  },
  {
    title: "HYD POINT'LE ŞAH-MAT!",
    description:
      '40 yılı aşkın tecrübe, güçlü stok ve uzman mühendislik desteğiyle her zaman yanınızdayız.',
    image: 'https://metosan.com.tr/Storage/Upload/cache/637310364767955696-b75-2covid19-icin-aldigimiz-tedbir-800-547.jpeg',
  },
  {
    title: 'TESİSAT İÇİN HER ŞEY!',
    description:
      'Tesisat, sızdırmazlık ve elektronik kontrol ürünlerinde dünya markalarını aynı çatı altında sunuyoruz.',
    image: 'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
  },
]

const brandLogos = [
  { name: 'GRIMET', src: 'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png' },
  { name: 'SALAMI', src: 'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png' },
  { name: 'WALVOIL', src: 'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png' },
  { name: 'WIKA', src: 'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png' },
  { name: 'ZHENJIANG', src: 'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png' },
  { name: 'SAIP', src: 'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png' },
  { name: 'HYDROCAR', src: 'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png' },
  { name: 'KAWASAKI', src: 'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png' },
  { name: 'GOLD', src: 'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png' },
  { name: 'HEMKO', src: 'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png' },
]

const newsItems = [
  {
    title: "Türkiye'nin Hidrolik Marketi Açıldı",
    date: '28 Mayıs 2020',
    image:
      'https://metosan.com.tr/Storage/Upload/cache/637286938676461652-b75-1turkiye-nin-hidrolik-marketi--800-547.jpeg',
    description:
      'Artık hidrolik ve pnömatik ürünlere tek tıkla ulaşıp satın alabileceğiniz marketimiz hidrolikurunler.com açıldı.',
  },
  {
    title: 'Covid-19 İçin Aldığımız Tedbirler',
    date: '28 Mayıs 2020',
    image:
      'https://metosan.com.tr/Storage/Upload/cache/637310364767955696-b75-2covid19-icin-aldigimiz-tedbir-800-547.jpeg',
    description:
      'Çalışanlarımızın ve iş ortaklarımızın sağlığı için üretim ve lojistik süreçlerinde aldığımız önlemleri paylaşıyoruz.',
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = heroSlides.length

  const activeHero = useMemo(() => heroSlides[activeSlide], [activeSlide])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount)
    }, 5200)
    return () => clearInterval(timer)
  }, [slideCount])

  return (
    <div className="space-y-16 pb-16">
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#1e4294] text-white shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(30,66,148,0.9), rgba(30,66,148,0.55)), url(${activeHero.image})`,
            }}
          />
          <div className="relative z-10 flex flex-col gap-6 p-10 sm:p-14">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#ff7f00]">
              <span className="inline-block h-1 w-8 rounded-full bg-[#ff7f00]" />
              Güçlü Çözümler
            </div>
            <h1 className="text-3xl font-semibold sm:text-4xl">{activeHero.title}</h1>
            <p className="max-w-2xl text-base text-slate-100/80 sm:text-lg">{activeHero.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-[#ff7f00] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-[#e07000]"
              >
                incele
              </a>
              <a
                href="#markalar"
                className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
              >
                markalar
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-10 rounded-full transition ${
                    index === activeSlide ? 'bg-[#ff7f00]' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`${slide.title} slaytını göster`}
                />
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1e4294]/35 to-transparent" />
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button
              onClick={() => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount)}
              className="rounded-full bg-white/15 px-4 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white/25"
              aria-label="Önceki slayt"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % slideCount)}
              className="rounded-full bg-white/15 px-4 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white/25"
              aria-label="Sonraki slayt"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#ff7f00]" />
            <h2 className="text-lg font-semibold text-slate-900">HAKKIMIZDA</h2>
          </div>
          <p className="text-base leading-relaxed text-slate-600">
            1978 yılında ticari faaliyetlerine başlayan firmamız 1995 yılında METOSAN Hidrolik ve Pnömatik San. ve Tic.
            Ltd. Şti adı altında 6000 m² alanda Hidrolik ve Pnömatik sektöründe hizmet vermeye başlamıştır. Firmamız
            bulunduğu sektörde sahip olduğu tecrübe ve birikimi sayesinde günümüzün en etkin ve saygın kuruluşlarından
            biridir.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1e4294] transition hover:text-[#ff7f00]"
          >
            devamını oku
            <span aria-hidden className="text-base">
              →
            </span>
          </a>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://metosan.com.tr/Storage/Upload/cache/637695442382333208-b75-1hakkimizda-494-632.jpeg"
            alt="Hakkımızda görseli"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section id="markalar" className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#ff7f00]" />
            <h2 className="text-lg font-semibold text-slate-900">Markalarımız</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#ff7f00]/40 hover:shadow-md"
            >
              <img src={brand.src} alt={brand.name} className="max-h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7f00]/10 via-white to-white" />
          <div className="relative space-y-4 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#ff7f00]" />
              <h2 className="text-lg font-semibold text-slate-900">Ürün Kataloğu</h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              Bu bölümde ürünlerimize ait genel katalogları bulabilir, indirebilir ve çevrim dışı olarak rahatça
              inceleyebilirsiniz.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
              <select className="h-12 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 shadow-sm focus:border-[#1e4294] focus:outline-none">
                <option>HYD Point Ürün Kataloğu</option>
                <option>Hidrolik Çözümler</option>
                <option>Tesisat ve Sızdırmazlık</option>
              </select>
              <div className="flex gap-3">
                <button className="flex-1 rounded-full bg-[#ff7f00] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-sm transition hover:bg-[#e07000]">
                  görüntüle
                </button>
                <button className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-[#ff7f00]/40 hover:text-[#ff7f00]">
                  indir
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <img
            src="https://metosan.com.tr/Storage/Upload/direct-upload/katalog.gif"
            alt="Ürün kataloğu"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

    </div>
  )
}

export default Home

