function CatalogSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-1.5 py-12 sm:px-2 lg:grid-cols-[1.2fr_0.8fr] lg:px-3">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-50/50 via-white to-white" />
        <div className="relative space-y-6 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#16a34a]" />
            <h2 className="text-2xl font-bold text-slate-900">Ürün Kataloğu</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Bu bölümde ürünlerimize ait genel katalogları bulabilir, indirebilir ve çevrim dışı olarak rahatça
            inceleyebilirsiniz.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <select className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm focus:border-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a]/20">
              <option>Konya Kilit Ürün Kataloğu</option>
              <option>Kilit Sistemleri</option>
              <option>Menteşe ve Aksesuarlar</option>
            </select>
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg bg-[#16a34a] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#15803d]">
                görüntüle
              </button>
              <button className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-[#16a34a]/40 hover:text-[#16a34a]">
                indir
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
        <div className="flex h-full min-h-[300px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
          <div className="text-center">
            <div className="mb-4 text-6xl">📄</div>
            <p className="text-sm font-semibold text-slate-600">Katalog Görseli</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogSection

