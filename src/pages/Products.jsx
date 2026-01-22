import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const hydraulicSections = [
  {
    title: 'POMPA',
    items: [
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR',
      'EL POMPASI',
      'İÇTEN DİŞLİ POMPALAR',
      'İŞ MAKİNESİ POMPALARI',
      'PALETLİ POMPA',
      'PİSTONLU POMPA',
      'TANDEM POMPALAR',
    ],
  },
  { title: 'AKIŞ BÖLÜCÜLER', items: ['ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER', 'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER'] },
  { title: 'AKÜLER', items: ['MEMBRANLI AKÜLER', 'BALONLU AKÜLER'] },
  {
    title: 'DİREKSİYON BEYİNLERİ',
    items: ['EMNİYETLİ NORMAL', 'EMNİYETLİ ANTİŞOKLU', 'EMNİYETSİZ NORMAL', 'EMNİYETSİZ KAPALI MERKEZ', 'EMNİYETSİZ ANTİŞOKLU', 'FORKLİFT İÇİN XY SERİSİ'],
  },
  {
    title: 'BASINÇ, ISI ÖLÇÜM VE KONTROL CİHAZLARI',
    items: ['BASINÇ ŞALTERLERİ', 'ISI (SICAKLIK) ÖLÇER', 'MANOMETRE KORUMA VALFLERİ', 'MANOMETRE TEST RAKORLARI', 'MANOMETRE VE VAKUMMETRELER', 'TRANSMİTTERLER'],
  },
  { title: 'HİDROMOTORLAR', items: ['DİŞLİ MOTORLAR', 'EĞİK EKSENLİ HİDROMOTORLAR', 'GEROTOR MOTORLAR (ORBİT)', 'YILDIZ (RADIAL) MOTOR'] },
  {
    title: 'KUMANDA KOLLARI , JOİSTİK VE LOADER VALF',
    items: ['DİLİMLİ KUMANDA KOLU', 'MONOBLOK KUMANDA KOLU', 'ELEKTRİK KONTROLLÜ KUMANDA KOLLARI', 'JOİSTİK VE YÜKLEYİCİ VALF'],
  },
  { title: 'HİDROLİK BAĞLANTI ELEMANLARI', items: ['HORTUM BAĞLANTI ELEMANLARI', 'DİŞLİ BAĞLANTI ELEMANLARI', 'HORTUMLAR'] },
  { title: 'HİDROLİK SİLİNDİR VE AKSESUARLARI', items: ['KROM KAPLI MİLLER'] },
]

const pneumaticSections = [
  { title: 'PNÖMATİK', items: ['SİLİNDİRLER', 'BASINÇ REGÜLATÖRLERİ', 'FİLTRELER', 'BAĞLANTI ELEMANLARI', 'AKSESUARLAR'] },
]

const sealingSections = [
  { title: 'SIZDIRMAZLIK', items: ['O-RING', 'KEÇE', 'HİDROLİK CONTALAR', 'FLANŞ CONTALARI', 'BAKIM KİTLERİ'] },
]

const lockSections = [
  {
    title: 'KOLLU KİLİTLER',
    items: [
      '001 > Kollu Kilit (Küçük Versiyon)',
      '201 > Kollu Kilit',
      '001 > Kollu Kilit',
      '101 > Kollu Kilit',
      '501 > Kollu Kilit',
      '601 > Kollu Kilit',
      '408 > Kollu Kilit',
      '408 > Kollu Kilit',
      '306 > Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '206 > Kollu Kilit',
      '406 > Kollu Kilit',
      '106 > Kollu Kilit',
      '808 > Kollu Kilit',
      '008 > Kollu Kilit',
      '908 > Kollu Kilit',
      '108 > Kollu Kilit',
      '108 > Kollu Kilit',
      '208 > Kollu Kilit',
      '308 > Kollu Kilit',
      '708 > Kollu Kilit',
      '508 > Kollu Kilit',
      '006 > Kollu Kilit',
      '205 > Kollu Kilit',
    ],
  },
  {
    title: 'İSPANYOLET SİSTEMLİ KİLİTLER',
    items: [
      '002 > İspanyolet Sistemli Kollu Kilit',
      'İspanyolet Sistemli Kollu Kilit',
      '102 > İspanyolet Sistemli Kollu Kilit',
      '502 > İspanyolet Sistemli Kollu Kilit',
      '602 > İspanyolet Sistemli Kollu Kilit',
      '409 > İspanyolet Sistemli Kollu Kilit',
      '107 > İspanyolet Sistemli Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '207 > İspanyolet Sistemli Kollu Kilit',
      '307 > İspanyolet Sistemli Kollu Kilit',
      '407 > İspanyolet Sistemli Kollu Kilit',
      '204 > Dikey Hareketli Kollu Kilit',
      'Dikey Mekanizmalı Kollu Kilit',
      '104 > Dikey Mekanizmalı Kollu Kilit',
      '109 > İspanyolet Sistemli Kollu Kilit',
      '909 > İspanyolet Sistemli Kollu Kilit',
      '309 > İspanyolet Sistemli Kollu Kilit',
      '209 > İspanyolet Sistemli Kollu Kilit',
      '007 > İspanyolet Sistemli Kollu Kilit',
      '809 > İspanyolet Sistemli Kollu Kilit',
      '103 > İspanyolet Sistemli Kollu Kilit',
      '203 > İspanyolet Sistemli Kollu Kilit',
      'İspanyolet Sistemli Pano Kilit',
      '203 > İspanyolet Sistemli Pano Kilit',
      'İspanyolet Sistemli Pano Kilidi',
      '003 > İspanyolet Sistemli Pano Kilidi',
      '103 > İspanyolet Sistemli Pano Kilidi',
    ],
  },
  {
    title: 'TRAFO VE KABİN KİLİTLERİ',
    items: [
      'Kabin Kilitleri',
      'T Kollu Kabin Kilitleri',
    ],
  },
  {
    title: 'KİLİMA SANTRAL ÜRÜNLERİ',
    items: [
      '012 > Klima Santral Kilidi',
      '012 > Klima Santral Kilidi',
      '012 > Klima Santral Kilidi',
      'Klima Santral Kilidi Aksesuarı',
      '012 > Klima Santral Kilidi Aksesuarı',
      'Klima Santral Kilidi',
      '012 > Klima Santral Kilidi',
      'Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
      'Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
      'Klima Santral Kilidi Aksesuarları',
      '112 > Klima Santral Kilidi Aksesuarları',
      'Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
      'Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
      'Fonsiyonel Kilit Menteşe',
      '712 > Fonsiyonel Kilit Menteşe',
      'Klima Santral Kilidi',
      '612 > Klima Santral Kilidi',
      'Klima Santral Kilidi \'T\' Kollu',
      '612 > Klima Santral Kilidi \'T\' Kollu',
      'Klima Kabin Kilidi \'L\' Kollu',
      '612 > Klima Kabin Kilidi \'L\' Kollu',
      'Profil Bağlantı Parçası (3D)',
      '078 > Profil Bağlantı Parçası (3D)',
      'Sıkıştırmalı Kilit',
      '462 > Sıkıştırmalı Kilit',
    ],
  },
  {
    title: 'ÇEŞİTLİ ÜRÜNLER',
    items: [
      'Sıkıştırmalı Kilitler',
      'Sürgü Kilitler',
      'Diğer Ürünler',
    ],
  },
  {
    title: 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR',
    items: [
      'Diller',
      'İspanyolet Çubuk ve Aksesuarları',
      'İspanyolet Lama ve Aksesuarları',
      'Paslanmaz İspanyolet Çubuk ve Aksesuarları',
      'Paslanmaz İspanyolet Lama ve Aksesuarları',
      'Anahtarlar',
    ],
  },
  {
    title: 'ÇEYREK DÖNÜŞLÜ KİLİTLER',
    items: [
      'Sıkıştırmalı Kilitler',
      'Kolay Montaj Ç.D. Kilitler',
    ],
  },
  {
    title: 'SİLİNDİRLİ KİLİTLER',
    items: [
      '163 > Silindirli Kilit Yaylı Dilli',
      'Silindirli Kilit',
      '063 > Silindirli Kilit',
      '761 > Silindirli Kilit Kolay Montaj',
      '261 > Silindirli Tutamaklı Kilit',
      '065 > Silindirli Kelebek Kilit',
      '165 > Mini Silindirli Kelebek Kilit',
      '110 > Silindirli "T" Kollu Kilit',
      '111 > Silindirli "L" Kollu Kilit',
      '064 > Silindirli "T" Kollu Kilit',
      '064 > Silindirli "L" Kollu Kilit',
      '240 > Sıkıştırmalı',
      '240 > Sıkıştırmalı T Kollu Kilit',
      '340 > Sıkıştırmalı Kelebek Kilit',
      '340 > Sıkıştırmalı Kelebek Kilit',
      '050 > Silindirli Kilit',
      '050 > Silindirli Kilit',
      '050 A3 > Kilit Tutamağı',
      '050 A4 > Toz Kapağı',
      '050 A1 > Cam Bağlantı Sacı',
      '030 A1 > Kilit Karşılık Sacı',
      '055 A1 > Ahşap Bağlantı Sacı',
      '550 > Silindirli Kilit Kolay Montaj',
      '450 > Yaylı Silindirli Kilit',
      '150 > Silindirli Kilit',
      '250 > Silindirli Kilit',
      '057 > Mini Silindirli Kilit',
      '157 > Mini Silindirli Kilit',
      '257 > Mini Silindirli Kilit',
      '056 > Silindirli Kilit',
    ],
  },
  {
    title: 'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ',
    items: [
      '010 > Silindirli "T" Kollu Kilit',
      '011 > Silindirli "L" Kollu Kilit',
      '021 > Cam Kapak Kilidi',
      '020 > Sürgülü Cam Kilidi',
      '132 > Çekmece Kilidi',
      '032 > Çekmece Kilidi',
      '033 > Çekmece Kilidi',
      '030 > Çekmece Kilidi',
      '159 > Sürgülü Kapak Kilidi',
      '059 > Sürgülü Kapak Kilidi',
      '4150 > Şifreli Kilit',
      '035 > Dosya Dolabı Kilidi',
      '058 > Çelik Eşya Kilidi',
      '158 > Çelik Eşya Kilidi',
      '013 > Yangın Dolabı Kilidi',
      '113 > Yangın Dolabı Kilidi',
    ],
  },
]

const hingeSections = [
  { title: 'KENAR MENTEŞELER', items: [] },
  { title: 'GİZLİ MENTEŞELER', items: [] },
  { title: 'KÖŞE MENTEŞELER', items: [] },
  { title: 'DÜZ MENTEŞELER', items: [] },
]

const sealSections = [
  {
    title: 'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA',
    items: [
      '340.09.001 > Geçme Conta',
      '340.09.002 > Geçme Conta',
      '340.09.003 > Geçme Conta',
      '340.09.004 > Geçme Conta',
      '340.09.006 > Geçme Conta',
      '340.09.007 > Geçme Conta',
      '340.09.014 > Geçme Conta',
      '340.09.971 > Hijyenik Conta',
      '340.09.701 > Geçme Conta',
      '340.09.019 > Geçme Conta',
      '340.09.021 > Geçme Conta',
      '340.09.029 > Geçme Conta',
      '340.09.017 > Geçme Conta',
      '340.09.705 > Geçme Conta',
      '340.09.712 > Geçme Conta',
      '340.09.707 > Geçme Conta',
      '340.09.716 > Geçme Conta',
      '340.09.719 > Geçme Conta',
      '340.09.729 > Geçme Conta',
      '340.09.942 > Geçme Conta',
      '340.09.735 > Geçme Conta',
      '340.09.010 > Geçme Conta',
      '340.09.678 > Geçme Conta',
      '340.09.679 > Geçme Conta',
      '340.09.101 > Geçme Conta',
      '340.09.102 > Geçme Conta',
      '340.09.103 > Geçme Conta',
      '340.09.104 > Geçme Conta',
      '340.09.105 > Geçme Conta',
      '340.09.107 > Geçme Conta',
      '340.09.124 > Geçme Conta',
      '340.09.802 > Geçme Conta',
      '340.09.804 > Geçme Conta',
      '340.09.805 > Geçme Conta',
      '340.09.806 > Geçme Conta',
      '340.09.810 > Geçme Conta',
      '340.09.100 > Geçme Conta',
      '340.09.202 > Geçme Conta',
      '340.09.203 > Geçme Conta',
      '340.09.205 > Geçme Conta',
      '340.09.206 > Geçme Conta',
      '340.09.210 > Geçme Conta',
      '340.09.902 > Geçme Conta',
      '340.09.904 > Geçme Conta',
      '340.09.502 > Geçme Conta',
      '340.09.504 > Geçme Conta',
      '340.09.516 > Geçme Conta',
      '340.09.517 > Geçme Conta',
      '340.09.522 > Geçme Conta',
      '340.09.523 > Geçme Conta',
      '340.09.527 > Geçme Conta',
      '340.09.530 > Geçme Conta',
      '340.09.538 > Geçme Conta',
      '340.09.529 > Geçme Conta',
      '340.09.540 > Geçme Conta',
      '340.09.419 > Geçme Conta',
      '340.09.380 > Geçme Conta',
      '340.09.381 > Geçme Conta',
      '340.09.385 > Geçme Conta',
      '340.09.382 > Geçme Conta',
      '340.09.383 > Geçme Conta',
      '340.09.611 > Geçme Conta',
      '340.09.384 > Geçme Conta',
      '34001010 > U Tipi Fitiller',
      '34001011 > U Tipi Fitiller',
      '34001012 > U Tipi Fitiller',
      '34001015 > U Tipi Fitiller',
    ],
  },
  {
    title: 'YAPIŞKANLI CONTALAR',
    items: [
      '1300 > Yapışkanlı Conta',
      '1100 > Yapışkanlı Dökme Conta',
      '1200 > Yapışkanlı Conta',
      '340.09.966 > Yapışkanlı Conta',
      '340.09.968 > Yapışkanlı Conta',
      '340.09.969 > Yapışkanlı Conta',
      '340.09.970 > Yapışkanlı Conta',
    ],
  },
]

const accessorySections = [
  {
    title: 'KULPLAR',
    items: [
      '084 > Milenyum Kulp',
      '085 > Çekme Kulpu',
      '083 > Alüminyum Tutamak',
      '183 > Alüminyum Tutamak',
      '184 > Metal Kulp',
      '484 > Metal Kulp',
      '884 > Alüminyum Kulp',
      '284 > Metal Kulp',
      '384 > Metal Kulp',
      '584 > Katlanabilir Metal Kulp',
      '684 > Metal Kulp',
      '784 > Metal Kulp',
      '185 > Parmak Kulp',
      '086 > Makina Kapak Kulpu',
      '186 > Makina Kapak Kulpu',
      '386 > Kapak Kulpu',
      '081 > Kapak Kulpu',
      '087 > Makina Kapak Kulpu',
      '287 > Makina Kapak Kulpu',
      '187 > Makina Kapak Kulpu',
      '487 > Makina Kapak Kulpu',
      '286 > Kapak Kulpu',
      '387 > Makina Kapak Kulpu',
      '082 > Gömme Yaylı Kulp',
      '374 > Geçme Kapak Tutamağı',
      '274 > Geçme Kapak Tutamağı',
      '074 > Geçme Kapak Tutamağı',
      '174 > Geçme Kapak Tutamağı',
      '674 > Geçme Kapak Tutamağı',
      '774 > Geçme Kapak Tutamağı',
      '874 > Geçme Kapak Tutamağı',
      '574 > Gömme Tutamak',
      '474 > Gömme Tutamak',
      '974 > Gömme Tutamak',
    ],
  },
  {
    title: 'AKSESUARLAR',
    items: [
      '2300 > Havalandırma Panjuru',
      '2150 > Proje Cebi (A4)',
      '2152 > Proje Cebi (A5)',
      '2220 > Gözetleme Camı',
      '2216 > Sayaç Çerçevesi',
      '2215 > Sayaç Çerçevesi',
      '2451 > Aybolt',
      '2461 > Aybolt',
      '2400 > Kafesli Somun',
      '2700 > Gerdirme Mandalı',
      '2760 > Pim Kilitlemeli Tutamak',
      '2750 > Yaylı Yük Mandalı',
      '2751 > Yaylı Yük Mandalı (Perçinli)',
      '320.02.164 > Kablo Kanalı',
      '025 > Cam Menteşesi',
      '079 > Kapak Tutucu Makası',
      '279 > Kapak Tutucu Makası',
      '179 > Kapak Tutucu Makası',
      '340.10.026 > Akustik Sünger',
      '340.00.370 > Diyafram Tipi Gromet',
      '340.00.380 > Diyafram Tipi Gromet',
      '340.08.010 > Kauçuk Stoper',
      '340.00.400 > Kauçuk Tıpa',
      '340.08.001 > Kapak Tutucu',
      '340.20.005.2000 > Kapı Altı Fırçası',
      '340.20.025.2000 > Kapı Altı Fırçası',
    ],
  },
]

const stainlessSteelSections = [
  { title: 'KİLİTLER', items: [] },
  { title: 'MENTEŞELER', items: [] },
  { title: 'AKSESUARLAR', items: [] },
]

const electronicSections = [
  {
    title: 'ELEKTRONİK KOLLU KİLİTLER',
    items: [
      '3114 > Elektronik Kollu Kilit - Standalone',
      '3101 > Elektronik Kollu Kilit',
      '3102 > Elektronik Kollu Kilit',
      '3103 > Elektronik Kollu Kilit',
      '3104 > Elektronik Kollu Kilit',
      '3111 > Elektronik Kollu Kilit',
      '3112 > Elektronik Kollu Kilit',
      '3105 > Elektronik Kollu Kilit',
      '3106 > Elektronik Kollu Kilit',
      '3113 > Elektronik Kollu Kilit - Standalone',
    ],
  },
  {
    title: 'İZLEME VE ERİŞİM KONTROL SİSTEMİ',
    items: [
      '3402 > ACU Erişim Kontrol Ünitesi',
      '3403 > ACU Plus Erişim Kontrol Ünitesi',
      '3416 > S-AIK Standalone Erişim Arayüzü Tuş Takımı',
      '3417 > S-AIP Standalone Erişim Arayüzü Kart Okuyucu',
      '3414 > AIK Erişim Arayüzü Tuş Takımı',
      '3415 > AIP Erişim Arayüzü Kart Okuyucu',
    ],
  },
  {
    title: 'ELEKTRONİK DOLAP KİLİTLERİ',
    items: [
      '3204 > Elektronik Dolap Kilidi',
      '3205 > Elektronik Dolap Kilidi',
      '3211 > Elektronik Dolap Kilidi',
      '3212 > Elektronik Dolap Kilidi',
      '3213 > Elektronik Dolap Kilidi',
      '3214 > Elektronik Dolap Kilidi',
      '3202 > Elektronik Dolap Kilidi',
      '3203 > Elektronik Dolap Kilidi',
      '3201 > Elektronik Dolap Kilidi',
    ],
  },
  {
    title: 'DİĞER ELEKTRONİK KİLİTLER',
    items: [
      '3341 > Elektronik Kilit',
      '3311 > Selenoid Kilit',
      '3301 > Elektronik Dolap Kilidi',
      '3331 > Elektronik Kancalı Kilit',
      '3501 > Acil Durum Durdurma Butonu',
    ],
  },
]

const catalogGroups = [
  { title: 'KİLİTLER', sections: lockSections },
  { title: 'MENTEŞELER', sections: hingeSections },
  { title: 'CONTALAR', sections: sealSections },
  { title: 'AKSESUARLAR VE KULPLAR', sections: accessorySections },
  { title: 'ELEKTRONİK', sections: electronicSections },
]

function Products() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState(null)
  const [activeGroup, setActiveGroup] = useState(null)
  const [openGroups, setOpenGroups] = useState([])

  useEffect(() => {
    // Sayfa açıldığında KİLİTLER kategorisini açık olarak getir
    setOpenGroups(['KİLİTLER'])
    setActiveGroup('KİLİTLER')
  }, [])

  const currentItems = useMemo(() => {
    if (!activeSection) return []
    // activeSection benzersiz olduğu için tüm gruplarda ara
    // Kesinlikle doğru section'ı bulmak için tam eşleşme kontrolü yap
    // String karşılaştırması için trim ve case-sensitive kontrol yap
    const normalizedActiveSection = activeSection.trim()
    
    for (const group of catalogGroups) {
      for (const section of group.sections) {
        // Tam eşleşme kontrolü - kesinlikle doğru section'ı bul
        const normalizedSectionTitle = section.title.trim()
        if (normalizedSectionTitle === normalizedActiveSection) {
          // Bulunan section'ın items'ını döndür - kesinlikle doğru section'ın items'ı
          return Array.isArray(section.items) ? section.items : []
        }
      }
    }
    return []
  }, [activeSection])

  const currentGroupSections = useMemo(() => {
    if (!activeGroup) return []
    const group = catalogGroups.find((g) => g.title === activeGroup)
    return group ? group.sections : []
  }, [activeGroup])

  const toggleGroup = (title) => {
    if (activeGroup === title) {
      // Aynı gruba tekrar tıklanırsa kapat
      setActiveGroup(null)
      setActiveSection(null)
    } else {
      // Yeni grup seçilirse
      setActiveGroup(title)
      setActiveSection(null)
    }
    setOpenGroups((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  const handleSectionClick = (sectionTitle) => {
    // Belirli alt başlıklar için ayrı sayfaya yönlendir
    const slugMap = {
      'KOLLU KİLİTLER': 'kollu-kilitler',
      'İSPANYOLET SİSTEMLİ KİLİTLER': 'ispanyolet-sistemli-kilitler',
      'TRAFO VE KABİN KİLİTLERİ': 'trafo-ve-kabin-kilitleri',
      'KİLİMA SANTRAL ÜRÜNLERİ': 'kilima-santral-urunleri',
      'ÇEŞİTLİ ÜRÜNLER': 'cesitli-urunler',
      'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR': 'diller-anahtarlar-cubuk-ve-lamalar',
      'ÇEYREK DÖNÜŞLÜ KİLİTLER': 'ceyrek-donuslu-kilitler',
      'SİLİNDİRLİ KİLİTLER': 'silindirli-kilitler',
      'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ': 'mobilya-ve-celik-esya-kilitleri',
      'KENAR MENTEŞELER': 'kenar-menteseler',
      'GİZLİ MENTEŞELER': 'gizli-menteseler',
      'KÖŞE MENTEŞELER': 'kose-menteseler',
      'DÜZ MENTEŞELER': 'duz-menteseler',
      'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA': 'sizdirmazlik-profilleri-ve-kenar-koruma',
      'YAPIŞKANLI CONTALAR': 'yapiskanli-contalar',
      'KULPLAR': 'kulplar',
      'AKSESUARLAR': 'aksesuarlar',
      'ELEKTRONİK KOLLU KİLİTLER': 'elektronik-kollu-kilitler',
      'İZLEME VE ERİŞİM KONTROL SİSTEMİ': 'izleme-ve-erisim-kontrol-sistemi',
      'ELEKTRONİK DOLAP KİLİTLERİ': 'elektronik-dolap-kilitleri',
      'DİĞER ELEKTRONİK KİLİTLER': 'diger-elektronik-kilitler',
    }
    const slug = slugMap[sectionTitle]
    if (slug) {
      navigate(`/urunler/${slug}`)
      return
    }
    
    // Diğer KİLİTLER alt başlıkları için ürün gösterme
    const lockGroup = catalogGroups.find((g) => g.title === 'KİLİTLER')
    if (lockGroup) {
      const isLockSection = lockGroup.sections.some((section) => section.title === sectionTitle)
      if (isLockSection && sectionTitle !== 'KOLLU KİLİTLER' && sectionTitle !== 'İSPANYOLET SİSTEMLİ KİLİTLER') {
        // KİLİTLER grubundaki diğer alt başlıklara tıklandığında activeSection'ı temizle
        setActiveSection(null)
        return
      }
    }
    
    // Diğer gruplar için normal işlem
    for (const group of catalogGroups) {
      const found = group.sections.find((section) => section.title === sectionTitle)
      if (found) {
        // Grubu açık tut
        if (!openGroups.includes(group.title)) {
          setOpenGroups((prev) => [...prev, group.title])
        }
        // activeGroup'u ve activeSection'ı set et
        setActiveGroup(group.title)
        setActiveSection(sectionTitle)
        return
      }
    }
    // Bulunamazsa da set et
    setActiveSection(sectionTitle)
  }

  // Pompa resimleri mapping
  const getPumpImage = (itemName) => {
    const imageMap = {
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR': '/aligodi.png',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR': '/dokum-govdeli-disli-pompal.png',
      'EL POMPASI': '/el-pompasi.png',
      'İÇTEN DİŞLİ POMPALAR': '/icten-disli-pompalar.png',
      'İŞ MAKİNESİ POMPALARI': '/is-makinesi-pompalari.png',
      'PALETLİ POMPA': '/paletli-pompa.png',
      'PİSTONLU POMPA': '/pistonlu-pompa.png',
      'TANDEM POMPALAR': '/tandem-pompalar.png',
      // Kollu Kilitler
      '001 > Kollu Kilit (Küçük Versiyon)': '/kollukilitler.png',
      '201 > Kollu Kilit': '/kollukilitler.png',
      '001 > Kollu Kilit': '/kollukilitler.png',
      '101 > Kollu Kilit': '/kollukilitler.png',
      '501 > Kollu Kilit': '/kollukilitler.png',
      '601 > Kollu Kilit': '/kollukilitler.png',
      '408 > Kollu Kilit': '/kollukilitler.png',
      '306 > Kollu Kilit': '/kollukilitler.png',
      '504 > Dikey Hareketli Kollu Kilit': '/kollukilitler.png',
      '206 > Kollu Kilit': '/kollukilitler.png',
      '406 > Kollu Kilit': '/kollukilitler.png',
      '106 > Kollu Kilit': '/kollukilitler.png',
      '808 > Kollu Kilit': '/kollukilitler.png',
      '008 > Kollu Kilit': '/kollukilitler.png',
      '908 > Kollu Kilit': '/kollukilitler.png',
      '108 > Kollu Kilit': '/kollukilitler.png',
      '208 > Kollu Kilit': '/kollukilitler.png',
      '308 > Kollu Kilit': '/kollukilitler.png',
      '708 > Kollu Kilit': '/kollukilitler.png',
      '508 > Kollu Kilit': '/kollukilitler.png',
      '006 > Kollu Kilit': '/kollukilitler.png',
      '205 > Kollu Kilit': '/kollukilitler.png',
    }
    return imageMap[itemName] || `https://via.placeholder.com/320x200.png?text=${encodeURIComponent(itemName)}`
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
    // Eğer ürün için logo yoksa, ürün adına göre bir logo seç (modulo ile)
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

  // Alt başlık resimleri için placeholder
  const getSectionImage = (sectionTitle) => {
    return `https://via.placeholder.com/320x200.png?text=${encodeURIComponent(sectionTitle)}`
  }

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto flex w-full max-w-[95%] flex-col gap-6 px-3 pt-8 sm:gap-8 sm:px-4 lg:flex-row">
        <aside className="w-full lg:w-96">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-base font-bold text-slate-900">KATEGORİLER</h3>
            {catalogGroups.map((group) => {
              const groupOpen = openGroups.includes(group.title)
              const isActiveGroup = activeGroup === group.title
              return (
                <div key={group.title} className="space-y-2">
                  <button
                    onClick={() => toggleGroup(group.title)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                      isActiveGroup ? 'bg-[#16a34a]/10 text-[#16a34a]' : groupOpen ? 'bg-slate-50 text-slate-800' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{group.title}</span>
                    <span className={`text-xs ${groupOpen ? 'rotate-90' : ''} transition`}>›</span>
                  </button>
                  {groupOpen ? (
                    <div className="ml-3 space-y-2 border-l border-slate-200 pl-3">
                      {group.sections.map((section) => {
                        const isActive = activeSection === section.title
                        return (
                          <div key={section.title} className="space-y-1">
                            <button
                              onClick={() => handleSectionClick(section.title)}
                              className={`flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-sm font-light transition ${
                                isActive ? 'text-[#16a34a]' : 'text-slate-700 hover:text-[#16a34a]'
                              }`}
                            >
                              <span>{section.title}</span>
                              <span
                                className={`text-xs transition ${isActive ? 'text-[#16a34a]' : 'text-slate-400'}`}
                                aria-hidden
                              >
                                ›
                              </span>
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </aside>

        <div className="flex-1 space-y-5">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#16a34a]">
                {activeGroup ? 'Ana Kategori' : activeSection ? 'Alt Kategori' : 'Seçim'}
              </p>
              <h2 className="text-xl font-semibold">
                {activeSection ?? activeGroup ?? 'Henüz seçilmedi'}
              </h2>
            </div>
            <span className="text-sm text-slate-500">
              {activeSection
                ? `${currentItems.length} ürün`
                : activeGroup
                  ? `${currentGroupSections.length} alt kategori`
                  : 'Seçim yapın'}
            </span>
          </div>

          {!activeGroup && !activeSection ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-sm">
              Bir kategori seçin, ürünleri listeleyelim.
            </div>
          ) : activeGroup && !activeSection ? (
            // Ana başlık seçilmiş, alt başlıkları kartlar halinde göster
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentGroupSections.map((section) => {
                const img = getSectionImage(section.title)
                return (
                  <button
                    key={section.title}
                    onClick={() => handleSectionClick(section.title)}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#16a34a]/50 hover:shadow-xl"
                  >
                    {/* Alt Başlık Görseli */}
                    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
                      <img 
                        src={img} 
                        alt={section.title} 
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Alt Başlık Bilgileri */}
                    <div className="flex flex-1 flex-col justify-between border-t border-slate-100 bg-white p-5">
                      <div>
                        {/* Alt Başlık Adı */}
                        <h3 className="mb-3 line-clamp-2 min-h-[3rem] text-base font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#16a34a]">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          ) : activeSection && currentItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-sm">
              Bu grup için ürün bulunamadı.
            </div>
          ) : activeSection ? (
            // Alt başlık seçilmiş, ürünleri göster
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((item) => {
                const img = getPumpImage(item)
                const productSlug = encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))
                return (
                  <Link
                    key={item}
                    to={`/urun-detay/${productSlug}`}
                    state={{ productName: item, productImage: img, productLogo: getProductLogo(item) }}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#16a34a]/50 hover:shadow-xl"
                  >
                    {/* Ürün Görseli */}
                    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
                      <img 
                        src={img} 
                        alt={item} 
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Ürün Bilgileri */}
                    <div className="flex flex-1 flex-col justify-between border-t border-slate-100 bg-white p-5">
                      <div>
                        {/* Ürün Adı */}
                        <h3 className="mb-2 line-clamp-2 min-h-[3rem] text-base font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#16a34a]">
                          {item}
                        </h3>
                        {/* ÇEŞİTLİ ÜRÜNLER için Ürün Grup Çeşitleri yazısı */}
                        {activeSection === 'ÇEŞİTLİ ÜRÜNLER' && (
                          <p className="mb-3 text-xs text-slate-500">Ürün Grup Çeşitleri</p>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default Products

