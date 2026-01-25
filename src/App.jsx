import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import SectionProducts from './pages/SectionProducts'
import Contact from './pages/Contact'

// Footer data removed - footer is now built inline with site content

const navItems = [
  { label: 'ANASAYFA', path: '/' },
  { label: 'ÜRÜNLER', path: '/urunler' },
  { label: 'MEDYA', path: '/medya' },
  { label: 'HAKKIMIZDA', path: '/hakkimizda' },
  { label: 'İLETİŞİM', path: '/iletisim' },
]

const pageContent = {
  hakkimizda: {
    title: 'Hakkımızda',
    subtitle: '1978\'den bu yana hidrolik ve pnömatik sektöründe güçlü markalar ve mühendislik çözümleri sunuyoruz.',
    sections: [
      {
        heading: 'Şirketimiz',
        body: 'Konya Kilit, 1978 yılından beri hidrolik ve pnömatik sektöründe faaliyet gösteren köklü bir firmadır. Yılların getirdiği deneyim ve uzman kadromuzla, endüstriyel ve mobil uygulamalar için en kaliteli ürünleri ve çözümleri sunmaktayız.',
      },
      {
        heading: 'Misyonumuz',
        body: 'Müşterilerimize en yüksek kalitede hidrolik ve pnömatik ürünleri sunarak, sektörde öncü bir konumda yer almak. Teknik destek ve mühendislik çözümlerimizle müşteri memnuniyetini en üst seviyede tutmak.',
      },
      {
        heading: 'Vizyonumuz',
        body: 'Türkiye\'nin önde gelen hidrolik ve pnömatik sistem tedarikçisi olmak, uluslararası standartlarda hizmet vermek ve sürekli gelişen teknolojiye ayak uydurarak sektörde lider konumda kalmak.',
      },
      {
        heading: 'Değerlerimiz',
        body: 'İşimizi yaparken öncelik verdiğimiz temel değerlerimiz:',
        items: [
          'Kalite ve güvenilirlik',
          'Müşteri odaklılık',
          'Teknik uzmanlık',
          'Sürekli gelişim',
          'Etik değerler',
        ],
      },
    ],
  },
  urunler: {
    title: 'Ürünler',
    subtitle: 'Hidrolik, pnömatik, elektronik ve tesisat ürün gamımızı inceleyin.',
    sections: [
      {
        heading: 'Hidrolik',
        body: 'Pompalar, valfler, güç üniteleri ve mobil çözümler.',
        items: ['Yüksek basınç çözümleri', 'Mobil hidrolik', 'Endüstriyel uygulamalar'],
      },
      {
        heading: 'Pnömatik',
        body: 'Silindirler, hava hazırlama ekipmanları ve bağlantı elemanları.',
      },
    ],
  },
  markalar: {
    title: 'Markalar',
    subtitle: 'Dünya çapında temsil ettiğimiz markalar ve iş ortaklarımız.',
    sections: [
      {
        heading: 'Çözüm Ortaklarımız',
        body: 'Kawasaki, Walvoil, Wika, Salami ve daha fazlasını tek çatı altında topluyoruz.',
      },
    ],
  },
  projeler: {
    title: 'Projeler',
    subtitle: 'Tamamladığımız endüstriyel ve mobil uygulama projelerinden seçkiler.',
    sections: [
      { heading: 'Referanslar', body: 'Çelik, otomotiv, enerji ve denizcilik sektörlerinde sahada kanıtlanmış projeler.' },
    ],
  },
  medya: {
    title: 'Medya',
    subtitle: 'Haberler, etkinlikler, fotoğraf galerileri ve kataloglarımız tek yerde.',
    sections: [
      { heading: 'Haberler', body: 'Etkinlik ve lansman duyurularını yakında burada paylaşacağız.' },
      { heading: 'Kataloglar', body: 'Ürün kataloglarımızın dijital kopyalarını görüntüleyip indirebilirsiniz.' },
    ],
  },
  iletisim: {
    title: 'İletişim',
    subtitle: 'Satış, teknik destek ve insan kaynakları için bize ulaşın.',
    sections: [
      {
        heading: 'Merkez',
        body: 'Fevziçakmak, Medcezir Cd. no:8/B D:06, 42050 Karatay/Konya',
        items: ['Telefon', 'E-posta', 'Çalışma saatleri'],
      },
    ],
  },
}

const secondaryNav = [
  {
    label: 'Hidrolik',
    path: '/urunler',
    description: 'Pompalar, valfler, güç üniteleri, ağır iş uygulamaları.',
    links: [
      'POMPA',
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR',
      'EL POMPASI',
      'İÇTEN DİŞLİ POMPALAR',
      'İŞ MAKİNESİ POMPALARI',
      'PALETLİ POMPA',
      'PİSTONLU POMPA',
      'TANDEM POMPALAR',
      'AKIŞ BÖLÜCÜLER',
      'ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER',
      'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER',
      'AKÜLER',
      'MEMBRANLI AKÜLER',
      'BALONLU AKÜLER',
    ],
  },
  {
    label: 'Pnömatik',
    path: '/urunler',
    description: 'Silindirler, hava hazırlama ve bağlantı ekipmanları.',
    links: ['Silindirler', 'Basınç Regülatörleri', 'Filtreler', 'Bağlantı Elemanları', 'Aksesuarlar'],
  },
  {
    label: 'Sızdırmazlık',
    path: '/urunler',
    description: 'Tesisat ve hidrolik sistemler için contalar, kelepçeler.',
    links: ['O-ring', 'Keçe', 'Hortum Kelepçeleri', 'Flanş Contaları', 'Bakım Kitleri'],
  },
  {
    label: 'Markalar',
    path: '/markalar',
    description: 'Kawasaki, Walvoil, Wika, Salami ve diğer iş ortaklarımız.',
    links: ['Kawasaki', 'Walvoil', 'Wika', 'Salami', 'Hydrocar', 'Saip', 'Grimet', 'Zhenjiang', 'Gold', 'Hemko'],
  },
]


function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="relative z-40 backdrop-blur bg-white/95 shadow-sm shadow-slate-200/70">
          <div className="border-b border-slate-100">
            <div className="relative mx-auto flex w-full max-w-[95%] items-center justify-between px-4 py-1.5 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-1">
                  📞 0506 092 03 42
                </span>
                <span className="hidden md:inline-flex items-center gap-1">
                  ✉️ info@konyakilit.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 transition hover:bg-[#16a34a] hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/905060920342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 transition hover:bg-[#16a34a] hover:text-white"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[95%] items-center justify-between px-4 py-2">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center">
                <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-black via-gray-900 to-gray-800 p-2.5 shadow-lg">
                  <img
                    src="/konyakilitlogo.png"
                    alt="Konya Kilit logo"
                    className="h-16 w-auto"
                  />
                </div>
              </NavLink>
            </div>

            <nav className="hidden items-center gap-12 text-base font-semibold text-slate-700 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative pb-1 transition hover:text-[#16a34a] ${isActive ? 'text-[#16a34a]' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#16a34a] transition ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 rounded-lg border border-slate-200 bg-white px-4 py-2 pr-10 text-sm text-slate-700 placeholder-slate-400 shadow-sm transition focus:border-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a]/20"
                />
              </div>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#16a34a]/40 hover:text-[#16a34a] lg:hidden"
                aria-label="Menüyü aç/kapat"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition ${
                      mobileOpen ? 'top-1/2 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition ${
                      mobileOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition ${
                      mobileOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-label="Mobil menü">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="relative ml-auto h-full w-[90vw] max-w-sm overflow-y-auto border-l border-slate-200 bg-white shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-black via-gray-900 to-gray-800 p-2 shadow-lg">
                    <img src="/konyakilitlogo.png" alt="Konya Kilit logo" className="h-12 w-auto" />
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                  aria-label="Menüyü kapat"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 px-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                        isActive ? 'bg-[#16a34a] text-white' : 'text-slate-800 hover:bg-slate-100'
                      }`
                    }
                    end={item.path === '/'}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-slate-400">›</span>
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 border-t border-slate-100 px-4 pt-4">
                <p className="px-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Kategoriler</p>
                <div className="mt-2 space-y-2">
                  {secondaryNav.map((item) => (
                    <div key={item.label} className="rounded-xl border border-slate-200">
                      <button
                        onClick={() => setMobileSubOpen((prev) => (prev === item.label ? null : item.label))}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-slate-500">{mobileSubOpen === item.label ? '▲' : '▼'}</span>
                      </button>
                      {mobileSubOpen === item.label ? (
                        <div className="space-y-1 px-4 pb-4">
                          {item.links.map((link) => (
                            <a
                              key={link}
                              href="#"
                              className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ) : null}
        </header>

        <main className="pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/hakkimizda"
              element={<InfoPage {...pageContent.hakkimizda} />}
            />
            <Route
              path="/urunler"
              element={<Products />}
            />
            <Route
              path="/urunler/:sectionSlug"
              element={<SectionProducts />}
            />
            <Route
              path="/markalar"
              element={<InfoPage hideHeader {...pageContent.markalar} />}
            />
            <Route
              path="/projeler"
              element={<InfoPage {...pageContent.projeler} />}
            />
            <Route
              path="/medya"
              element={<InfoPage {...pageContent.medya} />}
            />
            <Route
              path="/iletisim"
              element={<Contact />}
            />
            <Route
              path="/urun-detay/:slug"
              element={<ProductDetail />}
            />
          </Routes>
        </main>

        <footer className="mt-16 bg-[#166534] text-slate-200">
          <div className="mx-auto max-w-[95%] px-4 py-12 lg:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {/* Şirket Bilgileri */}
              <div className="space-y-4 lg:col-span-1">
                <NavLink to="/" className="inline-block">
                  <img
                    src="/konyakilitlogo.png"
                    alt="Konya Kilit logo"
                    className="h-12 w-auto"
                  />
                </NavLink>
                <p className="text-sm leading-relaxed text-slate-300">
                  Kilit, menteşe, conta ve elektronik güvenlik sistemleri sektöründe kaliteli ürünler ve çözümler sunuyoruz.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/902120000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hızlı Linkler */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-white">Hızlı Linkler</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <NavLink
                      to="/"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Anasayfa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/hakkimizda"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Hakkımızda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Ürünler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/iletisim"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      İletişim
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Ürün Kategorileri */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-white">Ürün Kategorileri</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Kilitler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Menteşeler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Contalar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Aksesuarlar ve Kulplar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Elektronik Sistemler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-slate-300 transition hover:text-white hover:underline"
                    >
                      Paslanmaz Çelik Ürünler
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* İletişim Bilgileri */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-white">İletişim</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-white">📍</span>
                    <span>
                      Fevziçakmak, Medcezir Cd. no:8/B D:06<br />
                      42050 Karatay/Konya
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">📞</span>
                    <a
                      href="tel:+902120000000"
                      className="transition hover:text-white hover:underline"
                    >
                      +90 212 000 00 00
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✉️</span>
                    <a
                      href="mailto:info@konyakilit.com"
                      className="transition hover:text-white hover:underline"
                    >
                      info@konyakilit.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 pt-1">
                    <span className="mt-0.5 text-white">🕒</span>
                    <span>
                      <span className="font-semibold text-white">Pazartesi - Cuma:</span> 08:30 - 18:00<br />
                      <span className="font-semibold text-white">Cumartesi:</span> 09:00 - 13:00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alt Kısım */}
          <div className="border-t border-white/10 bg-[#14532d]">
            <div className="mx-auto max-w-[95%] px-4 py-6 text-center text-xs text-slate-400 lg:px-6">
              <p>© {new Date().getFullYear()} Konya Kilit. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
