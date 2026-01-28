import { useNavigate } from 'react-router-dom'

function ProductCategoriesSection() {
  const navigate = useNavigate()
  
  const categories = [
    {
      title: 'Kilitler',
      description: 'Kollu Kilitler, Silindirli Kilitler, Çeyrek Dönüşlü Kilitler ve daha fazlası',
      icon: '🔒',
      image: '/kollukilit.png',
    },
    {
      title: 'Menteşeler',
      description: 'Kenar Menteşeler, Gizli Menteşeler, Köşe Menteşeler',
      icon: '🔗',
      image: '/menteselerslider.png',
    },
    {
      title: 'Contalar',
      description: 'Sızdırmazlık Profilleri, Yapışkanlı Contalar',
      icon: '⚙️',
      image: '/cesitliurunler.jpg',
    },
    {
      title: 'Aksesuarlar ve Kulplar',
      description: 'Kulplar ve çeşitli aksesuarlar',
      icon: '🎯',
      image: '/dilleranahtarlarcubuklarve.png',
    },
    {
      title: 'Paslanmaz Çelik Ürünler',
      description: 'Kilitler, Menteşeler ve Aksesuarlar',
      icon: '✨',
      image: '/paslanmazslider.png',
    },
    {
      title: 'Elektronik',
      description: 'Elektronik Kollu Kilitler, Erişim Kontrol Sistemleri',
      icon: '📱',
      image: '/trafovekabinkilitleri.png',
    },
  ]

  const handleCategoryClick = (category) => {
    const slug = category.title.toLowerCase()
      .replace(/ş/g, 's')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/ı/g, 'i')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
    
    navigate(`/urun-detay/${slug}`, {
      state: {
        productName: category.title,
        productImage: category.image,
        productLogo: category.image,
      },
    })
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-1.5 py-12 sm:px-2 lg:px-3">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ürün Grup Çeşitleri</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#16a34a]/40 hover:shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16a34a]/10 text-2xl transition-all duration-300 group-hover:bg-[#16a34a] group-hover:text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{category.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{category.description}</p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#16a34a] transition-all duration-300 group-hover:gap-3">
                Detayları Görüntüle
                <span className="text-base">→</span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#16a34a]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCategoriesSection
