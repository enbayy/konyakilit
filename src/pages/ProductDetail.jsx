import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Ürün detay verileri
const productDetails = {
  '001 > Kollu Kilit (Küçük Versiyon)': {
    code: '001',
    name: 'Kollu Kilit (Küçük Versiyon)',
    description: 'Sac ve polyester panolara uygulanır. 40 mm pirinç barel uygulaması yapılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '201 > Kollu Kilit': {
    code: '201',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'TOZ KAPAĞI': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
}

// Ürün logoları mapping
const getProductLogo = (itemName) => {
  const logoMap = {
    'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
    'DÖKÜM GÖVDELİ DİŞLİ POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
    'EL POMPASI': 'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png',
    'İÇTEN DİŞLİ POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png',
    'İŞ MAKİNESİ POMPALARI': 'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png',
    'PALETLİ POMPA': 'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png',
    'PİSTONLU POMPA': 'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png',
    'TANDEM POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
    'ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER': 'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png',
    'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER': 'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png',
    'MEMBRANLI AKÜLER': 'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
    'BALONLU AKÜLER': 'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
  }
  const logos = [
    'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png',
  ]
  return logoMap[itemName] || logos[itemName.length % logos.length]
}

function ProductDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { productName, productImage, productLogo } = location.state || {}
  const [isPdfFullscreen, setIsPdfFullscreen] = useState(false)

  // ESC tuşu ile tam ekran modunu kapat
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isPdfFullscreen) {
        setIsPdfFullscreen(false)
      }
    }
    if (isPdfFullscreen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isPdfFullscreen])

  // Eğer state yoksa geri dön
  if (!productName) {
    return (
      <div className="bg-slate-50 pb-16 text-slate-900">
        <div className="mx-auto max-w-[95%] px-3 pt-10 sm:px-4">
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-base text-slate-600">Ürün bulunamadı.</p>
            <button
              onClick={() => navigate('/urunler')}
              className="mt-4 rounded-lg bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
            >
              Ürünlere Dön
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Ürün adından kod ve ismi çıkar (örn: "001 > Kollu Kilit (Küçük Versiyon)" -> code: "001", name: "Kollu Kilit (Küçük Versiyon)")
  const extractProductInfo = (name) => {
    const match = name.match(/^(\d+(?:\s*[A-Z]\d+)?)\s*>\s*(.+)$/)
    if (match) {
      return { code: match[1], name: match[2] }
    }
    // Kod yoksa, sadece ismi döndür
    if (name.includes('Kollu Kilit') || name.includes('Dikey Hareketli')) {
      return { code: null, name: name }
    }
    return null
  }

  const productInfo = extractProductInfo(productName)
  const productDetail = productDetails[productName]
  
  // Kollu kilit ürünleri için otomatik detay sayfası
  const isLockProduct = productInfo && (productInfo.name.includes('Kollu Kilit') || productInfo.name.includes('Dikey Hareketli'))
  const hasDetail = !!productDetail || isLockProduct
  
  // PDF dosya adını belirle
  const getPdfPath = () => {
    const code = productDetail?.code || productInfo?.code
    if (code === '001') return '/001-kollu-kilit-kucuk-versiyon.pdf'
    if (code === '201') return '/201-kollu-kilit.pdf'
    return null
  }
  
  const pdfPath = getPdfPath()

  // Tüm marka logoları
  const baseBrandLogos = [
    'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png',
    'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png',
  ]

  // ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR için ilk logoyu hydropack yap
  const allBrandLogos = productName === 'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR'
    ? ['/hydropack.png', ...baseBrandLogos]
    : baseBrandLogos

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto max-w-[95%] px-3 pt-10 sm:px-4">
        {/* Geri Dön Butonu */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#16a34a]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Geri Dön
        </button>

        {hasDetail ? (
          <div className="max-w-6xl mx-auto">
            {/* Ürün Başlığı ve Kod */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {(productDetail?.code || productInfo?.code) && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-sm font-semibold">
                    {productDetail?.code || productInfo?.code}
                  </span>
                )}
                <h1 className="text-3xl font-bold text-slate-900">{productDetail?.name || productInfo?.name || productName}</h1>
              </div>
            </div>

            {/* Ana İçerik Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Sol Kolon - Ürün Görseli */}
              <div className="flex items-start justify-center lg:sticky lg:top-8 lg:h-fit">
                <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
                    <img 
                      src={productImage || '/kollukilitler.png'} 
                      alt={productDetail?.name || productInfo?.name || productName} 
                      className="max-h-full max-w-full object-contain p-4" 
                    />
                  </div>
                </div>
              </div>

              {/* Sağ Kolon - Ürün Bilgileri */}
              <div className="space-y-6">
                {/* Ürün Bilgisi */}
                {(productDetail?.description || isLockProduct) && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
                      <h3 className="text-xl font-bold text-slate-900">Ürün Bilgisi</h3>
                    </div>
                    <div className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                      {productDetail?.description || 'Sac ve polyester panolara uygulanır. 40 mm pirinç barel uygulaması yapılabilir.'}
                    </div>
                  </div>
                )}

                {/* Malzeme Bilgileri */}
                {(productDetail?.materials || isLockProduct) && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
                      <h3 className="text-xl font-bold text-slate-900">MALZEME</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(productDetail?.materials || {
                        'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
                        'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6GFR 30',
                        'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
                        'DİL': 'Çelik',
                        'CONTA': 'Kauçuk',
                      }).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="min-w-[120px] font-semibold text-slate-900 text-sm sm:text-base">{key}:</div>
                          <div className="text-sm sm:text-base text-slate-600 flex-1">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Katalog Sayfası */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
                    <h3 className="text-lg font-bold text-slate-900">Katalog Sayfası</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{productDetail?.name || productInfo?.name || productName}</p>
                  {pdfPath && (
                    <div className="space-y-2">
                      {/* PDF Görüntüleyici - Küçük */}
                      <div className="relative rounded-lg border border-slate-200 bg-slate-50 overflow-auto max-h-96">
                        <iframe
                          src={`${pdfPath}#toolbar=0&navpanes=0&view=FitV&page=1`}
                          className="w-full border-0"
                          style={{ height: '800px' }}
                          title="Katalog PDF"
                        />
                        {/* Büyültme İkonu */}
                        <button
                          onClick={() => setIsPdfFullscreen(true)}
                          className="absolute top-2 right-2 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-md transition hover:bg-white hover:border-[#16a34a] hover:text-[#16a34a]"
                          title="Tam Ekran"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* İndirme Butonu */}
                      <a
                        href={pdfPath}
                        download
                        className="inline-flex items-center gap-2 rounded-lg bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF İndir
                      </a>
                      
                      {/* Tam Ekran PDF Modal */}
                      {isPdfFullscreen && (
                        <div 
                          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                          onClick={() => setIsPdfFullscreen(false)}
                        >
                          <div className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-lg overflow-hidden shadow-2xl">
                            {/* Kapatma Butonu */}
                            <button
                              onClick={() => setIsPdfFullscreen(false)}
                              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-md transition hover:bg-white hover:border-[#16a34a] hover:text-[#16a34a]"
                              title="Kapat"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            {/* PDF İframe */}
                            <iframe
                              src={`${pdfPath}#toolbar=0&navpanes=0&view=FitH&page=1`}
                              className="w-full h-full border-0"
                              title="Katalog PDF - Tam Ekran"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Ürün Başlığı */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-slate-900">{productName}</h1>
            </div>

            {/* Marka Logoları */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
                {allBrandLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex h-28 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-[#16a34a] hover:bg-white hover:shadow-md sm:h-32 sm:p-4 md:h-36 md:p-5 lg:h-40 lg:p-6"
                  >
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`} 
                      className="max-h-16 w-auto object-contain sm:max-h-20 md:max-h-24 lg:max-h-28" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default ProductDetail
