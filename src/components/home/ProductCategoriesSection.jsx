import { useNavigate } from 'react-router-dom'

function ProductCategoriesSection() {
  const navigate = useNavigate()
  
  const categories = [
    {
      title: 'Kilitler',
      description: 'Kollu Kilitler, Silindirli Kilitler, Çeyrek Dönüşlü Kilitler ve daha fazlası',
      icon: '🔒',
      image: '/konyakilitlogo.png',
    },
    {
      title: 'Menteşeler',
      description: 'Kenar Menteşeler, Gizli Menteşeler, Köşe Menteşeler',
      icon: '🔗',
      image: '/konyakilitlogo.png',
    },
    {
      title: 'Contalar',
      description: 'Sızdırmazlık Profilleri, Yapışkanlı Contalar',
      icon: '⚙️',
      image: '/konyakilitlogo.png',
    },
    {
      title: 'Aksesuarlar ve Kulplar',
      description: 'Kulplar ve çeşitli aksesuarlar',
      icon: '🎯',
      image: '/konyakilitlogo.png',
    },
    {
      title: 'Paslanmaz Çelik Ürünler',
      description: 'Kilitler, Menteşeler ve Aksesuarlar',
      icon: '✨',
      image: '/konyakilitlogo.png',
    },
    {
      title: 'Elektronik',
      description: 'Elektronik Kollu Kilitler, Erişim Kontrol Sistemleri',
      icon: '📱',
      image: '/konyakilitlogo.png',
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
    <section className="mx-auto w-full max-w-[95%] px-3 py-12 sm:px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ürün Grup Çeşitleri</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#16a34a]/40 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#16a34a]/10 text-3xl transition-all duration-300 group-hover:bg-[#16a34a] group-hover:text-white">
                {category.icon}
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">{category.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">{category.description}</p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#16a34a] transition-all duration-300 group-hover:gap-3">
              Detayları Görüntüle
              <span className="text-base">→</span>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#16a34a]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCategoriesSection
