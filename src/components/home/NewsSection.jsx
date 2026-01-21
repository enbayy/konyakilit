function NewsSection({ items }) {
  return (
    <section className="mx-auto max-w-[95%] space-y-8 px-3 py-12 sm:px-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-1 w-10 rounded-full bg-[#16a34a]" />
          <h2 className="text-2xl font-bold text-slate-900">MESAN HABERLER</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((news) => (
          <article
            key={news.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="h-56 overflow-hidden">
              <img src={news.image} alt={news.title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold text-slate-900">{news.title}</h3>
              <p className="text-sm font-semibold text-[#16a34a]">{news.date}</p>
              <p className="text-base leading-relaxed text-slate-600">{news.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#16a34a] hover:text-[#15803d]"
              >
                devamını oku
                <span aria-hidden className="text-base">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-[#16a34a]/40 hover:text-[#16a34a]"
        >
          tüm haberler
          <span aria-hidden className="text-base">→</span>
        </a>
      </div>
    </section>
  )
}

export default NewsSection

