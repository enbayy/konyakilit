function SectorsSection() {
  const sectors = [
    {
      title: 'Endüstriyel',
      description: 'Fabrika ve endüstriyel tesisler için güvenlik çözümleri',
      icon: '🏭',
    },
    {
      title: 'Ticari',
      description: 'Ofis binaları ve ticari mekanlar için kilit sistemleri',
      icon: '🏢',
    },
    {
      title: 'Konut',
      description: 'Ev ve konut projeleri için modern kilit çözümleri',
      icon: '🏠',
    },
    {
      title: 'Sağlık',
      description: 'Hastane ve sağlık tesisleri için özel güvenlik sistemleri',
      icon: '🏥',
    },
    {
      title: 'Eğitim',
      description: 'Okul ve eğitim kurumları için güvenlik çözümleri',
      icon: '🎓',
    },
    {
      title: 'Otomotiv',
      description: 'Araç ve otomotiv sektörü için özel kilit sistemleri',
      icon: '🚗',
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-1.5 sm:px-2 lg:px-3">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            <span className="text-slate-700">Sizin</span> Uygulamalarınız, <span className="text-[#16a34a]">Bizim</span> Çözümlerimiz
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Uzmanlığımız birçok farklı sektörü kapsıyor. İş hedeflerinize ulaşmanıza yardımcı olmak için buradayız.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#16a34a]/40 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#16a34a]/10 text-2xl transition-all duration-300 group-hover:bg-[#16a34a] group-hover:text-white">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{sector.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectorsSection
