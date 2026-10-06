import { Link, useSearchParams } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { usePageTitle } from '../components/Navbar'
import { CATS, COURSES } from '../data'

export default function Courses() {
  usePageTitle('Courses')
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') || 'All'
  const q = (params.get('q') || '').trim()
  const ql = q.toLowerCase()

  const set = (next) => {
    const p = new URLSearchParams(params)
    Object.entries(next).forEach(([k, v]) => (v && v !== 'All' ? p.set(k, v) : p.delete(k)))
    setParams(p, { replace: true })
  }

  let list = COURSES.filter((c) => cat === 'All' || c[2] === cat)
  const exact = list.filter((c) => c[0].toLowerCase() === ql)
  if (ql) list = exact.length ? exact : list.filter((c) => (c[0] + ' ' + c[1]).toLowerCase().includes(ql))

  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our courses</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink/75">
            {COURSES.length} courses in six tracks. Every course includes practical lab time and placement support. Not sure where to begin? Start with FCA.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0" role="tablist" aria-label="Course tracks">
            {CATS.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => set({ cat: c })}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${cat === c ? 'bg-brand text-white' : 'bg-mist text-ink hover:bg-sky/30'}`}>{c}</button>
            ))}
          </div>
          <input type="search" value={q} onChange={(e) => set({ q: e.target.value })} placeholder="Search by code or name"
            aria-label="Search courses" className="w-full rounded-lg border border-ink/20 px-4 py-2.5 lg:w-64" />
        </div>

        {list.length === 0 ? (
          <p className="py-16 text-center text-ink/70">No course matches that search. Try a different code, or <button className="font-semibold text-brand underline" onClick={() => setParams({})}>clear filters</button>.</p>
        ) : (
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {list.map(([code, title, track, duration, desc]) => (
              <li key={code} className="grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-start">
                <p className="font-display text-3xl font-extrabold text-brand">{code}</p>
                <div>
                  <h2 className="font-display text-xl font-bold">{title}</h2>
                  <p className="mt-1 max-w-2xl text-ink/70">{desc}</p>
                  <p className="mt-2 text-sm text-ink/50">{track}</p>
                </div>
                <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                  <span className="flex items-center gap-1.5 text-sm font-semibold"><Clock size={16} className="text-sky" />{duration}</span>
                  <Link to={`/contact?course=${encodeURIComponent(code)}`} className="rounded-lg border-2 border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-white">Enquire</Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl bg-mist p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Not sure which course is right for you?</h2>
            <p className="mt-2 text-ink/70">Tell us your qualification and goal. A counsellor will suggest a course and batch.</p>
          </div>
          <Link to="/contact" className="shrink-0 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white hover:bg-ink">Talk to a counsellor</Link>
        </div>
      </section>
    </>
  )
}
