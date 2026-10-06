import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { usePageTitle } from '../components/Navbar'
import { COURSES, SITE } from '../data'

const field = 'mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-4 py-3 focus:border-brand'

export default function Contact() {
  usePageTitle('Contact')
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }


  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:py-16 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Talk to us</h1>
        <p className="mt-4 max-w-md text-lg text-ink/75">Ask about a course, fees, batch timings or placement. We reply within one working day.</p>
        <ul className="mt-8 space-y-5">
          {[
            [Phone, 'Call us', SITE.phone, `tel:${SITE.phone.replace(/\s/g, '')}`],
            [Mail, 'Email us', SITE.email, `mailto:${SITE.email}`],
            [MapPin, 'Visit us', SITE.address],
            [Clock, 'Office hours', SITE.hours],
          ].map(([Icon, label, value, href]) => (
            <li key={label} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist text-brand"><Icon size={20} /></span>
              <div>
                <p className="text-sm font-semibold text-ink/60">{label}</p>
                {href ? <a href={href} className="break-all font-semibold hover:text-brand">{value}</a> : <p className="max-w-sm font-semibold">{value}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-mist p-6 sm:p-10">
        {sent ? (
          <div role="status" className="py-12 text-center">
            <h2 className="font-display text-2xl font-bold">Thank you, we have your enquiry</h2>
            <p className="mt-2 text-ink/70">A counsellor will call you within one working day.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
            <label className="font-semibold">Full name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="font-semibold">Phone number
              <input required name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="font-semibold sm:col-span-2">Email
              <input name="email" type="email" autoComplete="email" className={field} />
            </label>
            <label className="font-semibold sm:col-span-2">Course you are interested in
              <select name="course" defaultValue={params.get('course') || ''} className={field}>
                <option value="">Not sure yet</option>
                {COURSES.map((c) => <option key={c[0]} value={c[0]}>{c[0]} - {c[1]}</option>)}
              </select>
            </label>
            <label className="font-semibold sm:col-span-2">Message
              <textarea name="message" rows="4" className={field} />
            </label>
            <button className="rounded-lg bg-brand px-6 py-3.5 font-semibold text-white hover:bg-ink sm:col-span-2 sm:justify-self-start">Send enquiry</button>
          </form>
        )}
      </div>
    </section>
  )
}
