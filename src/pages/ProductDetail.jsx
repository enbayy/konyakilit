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
  '001 > Kollu Kilit': {
    code: '001',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
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
  '101 > Kollu Kilit': {
    code: '101',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '501 > Kollu Kilit': {
    code: '501',
    name: 'Kollu Kilit',
    description: '• Güvenlik seviyesi yüksek bir kilittir.\n• 14.4 mm lik dış çıkıntı ile estetik bir görünüm sağlar.\n• Yüksek güvenlik için özel barel uygulaması yapılır.\n• Toz kapağı uygulaması opsiyoneldir.\n• Asma kilit hamili opsiyoneldir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
      'ASMA KİLİT HAMİLİ': 'Paslanmaz Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '601 > Kollu Kilit': {
    code: '601',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Yüksek güvenlik için özel barel uygulaması yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '408 > Kollu Kilit': {
    code: '408',
    name: 'Kollu Kilit',
    description: '• Özel geometrisi ile dış saldırılara dayanıklıdır\n• Yüksek korozyon dayanımına sahiptir.\n• DIN EN 1627:2011-09 RC2 testine uygundur.\n• Mafsalda kullanılan çift oring sayesinde yüksek sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '306 > Kollu Kilit': {
    code: '306',
    name: 'Kollu Kilit',
    description: '• Sürgü kapaklı uygulama mevcuttur.\n• Ergonomik kola sahiptir.\n• Asma kilit uygulaması opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30 veya Zamak',
      'DİL': 'Çelik –PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '504 > Dikey Hareketli Kollu Kilit': {
    code: '504',
    name: 'Dikey Hareketli Kollu Kilit',
    description: '• Kol, kolay açma kapama sağlamak için dikey yönde 70 derece yukarı / aşağı hareket eder.\n• Metal kola sahiptir.\n• Sürgü kapaklı uygulama\n• Asma kilit uygulaması opsiyoneldir.\n• Geçiş ölçüsü standarttır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik – PA6 GFR 30',
      'CONTA': 'Poliüretan',
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
  '206 > Kollu Kilit': {
    code: '206',
    name: 'Kollu Kilit',
    description: '• Sürgü kapaklı uygulama mevcuttur.\n• Ergonomik kola sahiptir.\n• Asma kilit uygulaması opsiyoneldir.\n• 40 mm pirinç barel uygulaması yapılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '406 > Kollu Kilit': {
    code: '406',
    name: 'Kollu Kilit',
    description: '• Kilitleme sistemi modüler olup uygulama esnasında isteğe göre değiştirilebilir.\n• Kilitleme modülleri bağımsız sipariş edilebilir.\n• Tek noktadan veya 3 noktadan kilitleme aynı gövde üzerinde yapılabilir.\n• Asma kilit uygulaması opsiyoneldir.\n• Gövde alt kısmında klips uygulaması ile hızlı montaj yapılabilir.',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '106 > Kollu Kilit': {
    code: '106',
    name: 'Kollu Kilit',
    description: '• Yaylı kol açılırken dışarı hareket eder çarpmalı şekilde kapanır.\n• Sürgülü toz kapağına sahiptir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '808 > Kollu Kilit': {
    code: '808',
    name: 'Kollu Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik –PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '008 > Kollu Kilit': {
    code: '008',
    name: 'Kollu Kilit',
    description: '• Geçiş ölçüsü 25x150 mm dir.\n• Montaj sacı yüksek bağlantı güvenliği ve topraklama sağlar.\n• 8 mm lik yüzey çıkıntısı ile estetik bir görünüme sahiptir.\n• Kolda yay uygulaması vardır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '908 > Kollu Kilit': {
    code: '908',
    name: 'Kollu Kilit',
    description: '• Basmalı tip kollu kilit\n• Kolda yay uygulaması vardır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '108 > Kollu Kilit': {
    code: '108',
    name: 'Kollu Kilit',
    description: '• Dış ortam kullanımı için yüksek korozyon dayanımına sahiptir\n• Anahtarı kopyalanamaz yüksek güvenlikli barel seçeneği vardır.\n• Kilit bölgesini kapatan hareketli kapak ve iç yüzeyindeki conta sayesinde yüksek seviyede sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '208 > Kollu Kilit': {
    code: '208',
    name: 'Kollu Kilit',
    description: '• Kolda yay uygulaması yoktur.\n• İç mekan panolarda kullanılabilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya PA6 GFR30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '308 > Kollu Kilit': {
    code: '308',
    name: 'Kollu Kilit',
    description: '• İç mekan panolarda kullanılabilir.\n• Geçiş ölçüsü 25x100 mm dir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 yada PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '708 > Kollu Kilit': {
    code: '708',
    name: 'Kollu Kilit',
    description: '• İç mekan panolarda kullanılabilir.\n• Geçiş ölçüsü 25x75 mm dir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'BUTON': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '508 > Kollu Kilit': {
    code: '508',
    name: 'Kollu Kilit',
    description: '• Komple metal.\n• Basmalı tip kollu kilit\n• Kilit montajı tek bir bağlantı sacı ile yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '006 > Kollu Kilit': {
    code: '006',
    name: 'Kollu Kilit',
    description: '• Kolda yay uygulaması mevcuttur.\n• İç ve dış mekan panolarda kullanılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik veya PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '205 > Kollu Kilit': {
    code: '205',
    name: 'Kollu Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
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
  
  // Kollu kilit resim mapping (ürün koduna göre)
  const getKolluKilitImage = () => {
    const code = productDetail?.code || productInfo?.code
    if (!code) return productImage || '/kollukilitler.png'
    
    // Özel durumlar
    if (code === '001') {
      // Küçük versiyon kontrolü
      if (productDetail?.name?.includes('Küçük Versiyon') || productName?.includes('Küçük Versiyon')) {
        return '/001kollukilit.jpg'
      }
      return '/001kollukilit.jpg'
    }
    
    // Kod bazlı resim mapping
    const imageMap = {
      '006': '/006kollukilit.jpg',
      '008': '/008kollukilit.jpg',
      '101': '/101kollukilit.jpg',
      '106': '/106kollukilit.jpg',
      '108': '/108kollukilit.jpg',
      '201': '/201kollukilit.jpg',
      '205': '/205kollukilit.jpg',
      '206': '/206kollukilit.jpg',
      '208': '/208kollukilit.jpg',
      '306': '/306kollukilit.jpg',
      '308': '/308kollukilit.jpg',
      '406': '/406kollukilit.jpg',
      '408': '/408kollukilit.jpg',
      '501': '/501kollukilit.jpg',
      '504': '/504kollukilit.jpg',
      '508': '/508kollukilit.jpg',
      '601': '/601kollukilit.jpg',
      '708': '/708kollukilit.jpg',
      '808': '/808kollukilit.jpg',
      '908': '/908kollukilit.jpg',
    }
    
    return imageMap[code] || productImage || '/kollukilitler.png'
  }
  
  const kolluKilitImage = getKolluKilitImage()
  
  // PDF dosya adını belirle
  const getPdfPath = () => {
    const code = productDetail?.code || productInfo?.code
    const name = productDetail?.name || productInfo?.name || productName
    
    // Özel durumlar
    if (code === '001' && name?.includes('Küçük Versiyon')) {
      return '/001-kollu-kilit-kucuk-versiyon.pdf'
    }
    
    // Kod bazlı PDF mapping
    const pdfMap = {
      '001': '/001-kollu-kilit.pdf',
      '006': '/006-kollu-kilit.pdf',
      '008': '/008-kollu-kilit.pdf',
      '101': '/101-kollu-kilit.pdf',
      '106': '/106-kollu-kilit.pdf',
      '108': '/108-kollu-kilit.pdf',
      '201': '/201-kollu-kilit.pdf',
      '205': '/205-kollu-kilit.pdf',
      '206': '/206-kollu-kilit.pdf',
      '208': '/208-kollu-kilit.pdf',
      '308': '/308-kollu-kilit.pdf',
      '406': '/406-kollu-kilit.pdf',
      '408': '/408-kollu-kilit.pdf',
      '501': '/501-kollu-kilit.pdf',
      '504': '/504-dikey-hareketli-kollu-kilit.pdf',
      '508': '/508-kollu-kilit.pdf',
      '601': '/601-kollu-kilit.pdf',
      '708': '/708-kollu-kilit.pdf',
      '808': '/808-kollu-kilit.pdf',
      '908': '/908-kollu-kilit.pdf',
    }
    
    return code ? pdfMap[code] || null : null
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
                      src={kolluKilitImage} 
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
