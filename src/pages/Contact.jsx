import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: null, message: '' })
  const [loading, setLoading] = useState(false)

  const contactCards = useMemo(
    () => [
      { title: 'İletişim', detail: ['0 506 875 03 58'] },
      { title: 'E-posta', detail: 'konyakilit@gmail.com' },
      { title: 'Adres', detail: 'Fevziçakmak, Medcezir Cd. no:8/B D:06, 42050 Karatay/Konya' },
    ],
    []
  )

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Lütfen geçerli bir e-posta girin.'
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const error = validate()
    if (error) {
      setStatus({ type: 'error', message: error })
      return
    }

    try {
      setLoading(true)

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi',
      })

      setForm(initialForm)
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto max-w-7xl space-y-10 px-1.5 pt-10 sm:px-2 lg:px-3">
        
        {/* İletişim Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactCards.map((card) => (
            <div key={card.title} className="text-center">
              <p className="text-base font-semibold text-slate-900">{card.title}</p>
              {Array.isArray(card.detail) ? (
                <div className="mt-2 space-y-1">
                  {card.detail.map((item, idx) => (
                    <p key={idx} className="text-base text-slate-900">{item}</p>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-base text-slate-900">{card.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* FORM */}
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Form</p>
                <h2 className="text-xl font-semibold text-slate-900">Mesaj bırakın</h2>
              </div>
            </div>

            {status.type && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-[#166534]'
                    : 'border-yellow-200 bg-yellow-50 text-yellow-800'
                }`}
              >
                {status.message}
              </div>
            )}

            <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              
              <label className="space-y-1 text-sm font-medium text-slate-700">
                Ad Soyad*
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-slate-700">
                E-posta*
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-slate-700">
                Telefon
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-slate-700">
                Firma
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  value={form.company}
                  onChange={(e) => updateField('company', e.target.value)}
                />
              </label>

              <label className="md:col-span-2 space-y-1 text-sm font-medium text-slate-700">
                Mesaj*
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </label>

              <div className="md:col-span-2 flex justify-between items-center">
                <p className="text-xs text-slate-500">* Zorunlu alanlar</p>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#166534] px-5 py-3 text-sm font-semibold text-white"
                >
                  {loading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </div>
            </form>
          </div>

          {/* SAĞ TARAF */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Çalışma Saatleri</h3>
              <p className="text-sm mt-2">Pazartesi - Cuma: 08:30 - 17:00</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Konum"
                src="https://www.google.com/maps?q=Fevziçakmak,+Medcezir+Cd.+no:8/B+D:06,+42050+Karatay/Konya&hl=tr&z=15&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact