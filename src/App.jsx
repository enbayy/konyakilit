import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import hydLogo3 from './assets/hydLogo3.png'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import Products from './pages/Products'
import Contact from './pages/Contact'

const footerSections = [
  {
    title: 'KURUMSAL',
    links: [
      'Hakkımızda',
      'Misyon',
      'Vizyon',
      'Pazarlama',
      'Satınalma',
      'Sosyal Sorumluluk',
      'Sertifika',
      'Kvkk Bilgilendirmesi',
    ],
  },
  {
    title: 'ÜRÜNLER',
    links: ['Hidrolik', 'Pnömatik', 'Elektronik', 'Tesisat', 'Sızdırmazlık', 'Projeler', 'Markalar'],
  },
  {
    title: 'MEDYA',
    links: ['Haberler', 'Etkinlikler', 'Galeriler', 'Kataloglar', 'Blog'],
  },
  { title: 'İLETİŞİM', links: ['İletişim Bilgileri', 'İnsan Kaynakları'] },
]

const navItems = [
  { label: 'Anasayfa', path: '/' },
  { label: 'Ürünler', path: '/urunler' },
  { label: 'Markalar', path: '/markalar' },
  { label: 'İletişim', path: '/iletisim' },
]

const pageContent = {
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
        body: 'Adres, telefon ve e-posta bilgilerini buraya ekleyeceğiz.',
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

const brandGallery = {
  Kawasaki: 'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png',
  Walvoil: 'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png',
  Wika: 'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png',
  Salami: 'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png',
  Hydrocar: 'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
  Saip: 'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
  Grimet: 'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
  Zhenjiang: 'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png',
  Gold: 'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png',
  Hemko: 'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png',
}

function App() {
  const [openSecondary, setOpenSecondary] = useState(null)
  const closeSecondaryTimer = useRef(null)
  const pumpGroup = [
    'POMPA',
    'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR',
    'DÖKÜM GÖVDELİ DİŞLİ POMPALAR',
    'EL POMPASI',
    'İÇTEN DİŞLİ POMPALAR',
    'İŞ MAKİNESİ POMPALARI',
    'PALETLİ POMPA',
    'PİSTONLU POMPA',
    'TANDEM POMPALAR',
  ]
  const flowGroup = [
    'AKIŞ BÖLÜCÜLER',
    'ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER',
    'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER',
  ]
  const batteryGroup = ['AKÜLER', 'MEMBRANLI AKÜLER', 'BALONLU AKÜLER']
  const steeringGroup = [
    'DİREKSİYON BEYİNLERİ',
    'EMNİYETLİ NORMAL',
    'EMNİYETLİ ANTİŞOKLU',
    'EMNİYETSİZ NORMAL',
    'EMNİYETSİZ KAPALI MERKEZ',
    'EMNİYETSİZ ANTİŞOKLU',
    'FORKLİFT İÇİN XY SERİSİ',
  ]
  const pressureGroup = [
    'BASINÇ, ISI ÖLÇÜM VE KONTROL CİHAZLARI',
    'BASINÇ ŞALTERLERİ',
    'ISI (SICAKLIK) ÖLÇER',
    'MANOMETRE KORUMA VALFLERİ',
    'MANOMETRE TEST RAKORLARI',
    'MANOMETRE VE VAKUMMETRELER',
    'TRANSMİTTERLER',
  ]
  const motorGroup = [
    'HİDROMOTORLAR',
    'DİŞLİ MOTORLAR',
    'EĞİK EKSENLİ HİDROMOTORLAR',
    'GEROTOR MOTORLAR (ORBİT)',
    'YILDIZ (RADIAL) MOTOR',
  ]
  const controlGroup = [
    'HİDROLİK BAĞLANTI ELEMANLARI',
    'HORTUM BAĞLANTI ELEMANLARI',
    'DİŞLİ BAĞLANTI ELEMANLARI',
    'HORTUMLAR',
  ]
  const cylinderGroup = ['HİDROLİK SİLİNDİR VE AKSESUARLARI', 'KROM KAPLI MİLLER']
  const loaderGroup = [
    'KUMANDA KOLLARI , JOİSTİK VE LOADER VALF',
    'DİLİMLİ KUMANDA KOLU',
    'MONOBLOK KUMANDA KOLU',
    'ELEKTRİK KONTROLLÜ KUMANDA KOLLARI',
    'JOİSTİK VE YÜKLEYİCİ VALF',
  ]

  const handleOpenSecondary = (label) => {
    if (closeSecondaryTimer.current) {
      clearTimeout(closeSecondaryTimer.current)
      closeSecondaryTimer.current = null
    }
    setOpenSecondary(label)
  }

  const handleCloseSecondary = () => {
    if (closeSecondaryTimer.current) {
      clearTimeout(closeSecondaryTimer.current)
    }
    closeSecondaryTimer.current = setTimeout(() => setOpenSecondary(null), 120)
  }

  useEffect(() => {
    return () => {
      if (closeSecondaryTimer.current) {
        clearTimeout(closeSecondaryTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/95 shadow-sm shadow-slate-200/70">
          <div className="border-b border-slate-100">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-3 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-1">
                  📞 +90 212 000 00 00
                </span>
                <span className="hidden md:inline-flex items-center gap-1">
                  ✉️ info@hydpoint.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-full bg-[#ff7f00] px-3 py-1 text-[11px] font-semibold uppercase text-slate-900 shadow-sm">
                  TR
                </button>
                <button className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase text-slate-500 transition hover:text-[#1e4294]">
                  EN
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5">
            <div className="flex items-center gap-3">
              <img
                src={hydLogo3}
                alt="HYD Point logo"
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden items-center gap-12 text-base font-semibold text-slate-700 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative pb-1 transition hover:text-[#1e4294] ${isActive ? 'text-[#1e4294]' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#ff7f00] transition ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-[#ff7f00]/40 hover:text-[#1e4294] sm:flex">
                <span role="img" aria-label="Ara">
                  🔍
                </span>
                Ara
              </button>
              <button className="rounded-full bg-[#ff7f00] px-4 py-2 text-xs font-semibold uppercase text-slate-900 shadow-sm transition hover:bg-[#e07000]">
                Teklif Al
              </button>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50">
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center gap-8 px-8 py-3 text-sm font-semibold text-slate-700">
              {secondaryNav.map((item) => (
                <div
                  key={item.label}
                  className="group"
                  onMouseEnter={() => handleOpenSecondary(item.label)}
                  onMouseLeave={handleCloseSecondary}
                >
                  <NavLink
                    to={item.path}
                    className="flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-[#ff7f00]/10 hover:text-[#1e4294]"
                  >
                    {item.label}
                    <span className="text-xs text-slate-400 group-hover:text-[#ff7f00]">▼</span>
                  </NavLink>
                  {openSecondary === item.label ? (
                    <div
                      onMouseEnter={() => handleOpenSecondary(item.label)}
                      onMouseLeave={handleCloseSecondary}
                      className="absolute left-0 right-0 top-full mt-1 w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
                    >
                      {item.label !== 'Hidrolik' ? (
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        </div>
                      ) : null}
                      {item.label === 'Hidrolik' ? (
                        <div className="mt-4 grid grid-cols-6 gap-x-8 gap-y-2 text-sm text-slate-700">
                          <div className="space-y-2">
                            {pumpGroup.map((link) => {
                              const isHeading = link === 'POMPA'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                          <div className="space-y-2">
                            {flowGroup.map((link) => {
                              const isHeading = link === 'AKIŞ BÖLÜCÜLER'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                            {batteryGroup.map((link) => {
                              const isHeading = link === 'AKÜLER'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                            {motorGroup.map((link) => {
                              const isHeading = link === 'HİDROMOTORLAR'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                          <div className="space-y-2">
                            {steeringGroup.map((link) => {
                              const isHeading = link === 'DİREKSİYON BEYİNLERİ'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                          <div className="space-y-2">
                            {pressureGroup.map((link) => {
                              const isHeading = link === 'BASINÇ, ISI ÖLÇÜM VE KONTROL CİHAZLARI'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                          <div className="space-y-2">
                            {loaderGroup.map((link) => {
                              const isHeading = link === 'KUMANDA KOLLARI , JOİSTİK VE LOADER VALF'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                          <div className="space-y-2">
                            {controlGroup.map((link) => {
                              const isHeading = link === 'HİDROLİK BAĞLANTI ELEMANLARI'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                            {cylinderGroup.map((link) => {
                              const isHeading = link === 'HİDROLİK SİLİNDİR VE AKSESUARLARI'
                              return (
                                <div key={link} className="flex items-start gap-2">
                                  {!isHeading && (
                                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                                  )}
                                  <a
                                    href="#"
                                    className={`transition hover:text-[#1e4294] ${
                                      isHeading ? 'text-[#ff7f00] font-semibold' : ''
                                    }`}
                                  >
                                    {link}
                                  </a>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ) : item.label === 'Markalar' ? (
                        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                          {item.links.map((link) => (
                            <div
                              key={link}
                              className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-[#ff7f00]/60 hover:shadow-md"
                            >
                              <img
                                src={brandGallery[link]}
                                alt={link}
                                className="max-h-10 w-auto object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-700 dark:text-slate-200">
                          {item.links.map((link) => (
                            <li key={link} className="flex items-start gap-2">
                              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7f00]" />
                              <a href="#" className="transition hover:text-[#1e4294] dark:hover:text-[#ffb347]">
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="pt-[190px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/urunler"
              element={<Products />}
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
          </Routes>
        </main>

        <footer className="mt-16 bg-[#1e4294] text-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div className="space-y-4">
                <img
                  src={hydLogo3}
                  alt="HYD Point footer logo"
                  className="h-10 w-auto"
                />
                <p className="text-sm text-slate-300">
                  1978&apos;den bu yana hidrolik ve pnömatik sektöründe güçlü markalar ve mühendislik çözümleri sunuyoruz.
                </p>
                <div className="flex gap-3 text-sm font-semibold text-white">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">FB</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">IG</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">YT</span>
                </div>
              </div>

              {footerSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{section.title}</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="transition hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 bg-[#142f73]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-slate-400 sm:flex-row">
              <p>Copyrights © 2020. HYD Point all rights reserved.</p>
              <a href="https://atlikarinca.net/" className="font-semibold text-slate-300 hover:text-white">
                madeBy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
