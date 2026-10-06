import { Link } from 'react-router-dom'
import {ArrowRight, Award, BadgeCheck, Brain, Calculator, Check, ChevronDown, Clock,Briefcase, Code2, Monitor, Network, PenTool, Phone, Quote, Star,} from 'lucide-react'
import { usePageTitle } from '../components/Navbar'
import { COURSES, FAQS, POPULAR, SITE, STATS, TESTIMONIALS, TRACKS, WHY } from '../data'

const IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`
const HERO = IMG('photo-1522202176988-66273c2fd55f')
const LAB = IMG('photo-1517245386807-bb43f82c33c4')

const TRACK_ICONS = [Monitor, Calculator, Code2, Network, PenTool, Brain]
const WHY_ICONS = [Monitor, Award, Clock, BadgeCheck]

const STEPS = [
  ['Counselling', 'We look at your qualification and goal, then suggest the right course and batch.'],
  ['Classroom and lab training', 'Concepts are taught and then practised on computers, every session.'],
  ['Resume and profile', 'We help you build a clean resume, a profile and a small portfolio of your work.'],
  ['Mock interviews', 'Practice rounds and communication sessions so the real interview feels familiar.'],
  ['Placement drives', 'We share openings and refer ready students to hiring companies.'],
]

const Photo = ({ src, className }) => (
  <div className={`overflow-hidden bg-brand/10 ${className}`}>
    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} />
  </div>
)

const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white hover:bg-ink'
const btnOutline = 'inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand px-6 py-3 font-semibold text-brand hover:bg-brand hover:text-white'

function SectionHead({ title, text, center }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-lg text-ink/70">{text}</p>}
    </div>
  )
}

export default function Home() {
  usePageTitle()
  const popular = POPULAR.map((code) => COURSES.find((c) => c[0] === code)).filter(Boolean)
  const statValue = (v) => (v === 'courses' ? `${COURSES.length}` : v === 'tracks' ? `${TRACKS.length}` : v)

  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-16">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Learn the skill. Then get the job.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/75">
              Mega Advance India teaches practical computer, accounting, programming and AI courses,
              and helps every student prepare for interviews and find placements.
            </p>
            <ul className="mt-6 space-y-2 text-ink/80">
              {['Courses from 2 months to 12 months', 'Hands-on lab practice in every session', 'Resume, interview and placement support'].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-white"><Check size={13} strokeWidth={3} /></span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className={btnPrimary}>Explore courses <ArrowRight size={18} /></Link>
              <Link to="/contact" className={btnOutline}>Talk to a counsellor</Link>
            </div>
          </div>

          <div className="relative pb-8">
            <Photo src={HERO} className="aspect-[4/3.6] rounded-[1.75rem] rounded-tr-[5rem]" />
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="text-center md:border-r md:border-white/20 md:last:border-r-0">
              <dt className="font-display text-3xl font-extrabold sm:text-4xl">{statValue(value)}</dt>
              <dd className="mt-1 text-sm text-white/80">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead center title="Choose your learning track" text="Every track starts from the basics. Move up to a higher diploma when you are ready." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map(([name, blurb], i) => {
            const Icon = TRACK_ICONS[i]
            return (
              <Link key={name} to={`/courses?cat=${encodeURIComponent(name)}`}
                className="group rounded-2xl border border-ink/10 bg-white p-6 hover:border-brand hover:shadow-md">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-brand group-hover:bg-brand group-hover:text-white"><Icon size={24} /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{name}</h3>
                <p className="mt-2 text-ink/70">{blurb}</p>
                <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {COURSES.filter((c) => c[2] === name).length} courses <ArrowRight size={16} />
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHead title="Popular courses" text="The courses most students start with." />
            <Link to="/courses" className={`${btnOutline} self-start sm:self-auto`}>View all {COURSES.length} courses</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map(([code, title, track, duration, desc]) => (
              <article key={code} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-brand px-3 py-1 font-display text-lg font-extrabold text-white">{code}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold"><Clock size={16} className="text-sky" />{duration}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-ink/70">{desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                  <span className="text-sm text-ink/60">{track}</span>
                  <Link to={`/contact?course=${encodeURIComponent(code)}`} className="flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-ink">
                    Enquire <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead center title="Why students choose Mega Advance India" text="Simple, practical training that is built around getting you job-ready." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([title, text], i) => {
            const Icon = WHY_ICONS[i]
            return (
              <div key={title} className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-white"><Icon size={26} /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-ink/70">{text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Placement help starts on day one</h2>
            <p className="mt-4 max-w-md text-white/75">We do not treat placement as an add-on at the end. It is built into how every course runs.</p>
            <Photo src={LAB} className="mt-8 hidden aspect-[16/10] rounded-2xl rounded-bl-[4rem] md:block" />
          </div>
          <ol className="ml-4">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="relative pb-9 pl-9 last:pb-0">
                <span className="absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full bg-sky font-bold text-ink">{i + 1}</span>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-white/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead center title="What our students say" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map(([name, course, text]) => (
              <figure key={name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
                <div className="mt-3 flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((n) => <Star key={n} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">{text}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-display font-bold text-white">{name[0]}</span>
                  <span>
                    <span className="block font-semibold">{name}</span>
                    <span className="block text-sm text-ink/60">{course}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions students ask us</h2>
          <p className="mt-4 max-w-sm text-ink/70">Cannot find your answer? Call us or send an enquiry and we will help.</p>
          <Link to="/contact" className={`${btnOutline} mt-6`}>Ask a question</Link>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown size={20} className="shrink-0 text-brand group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-brand px-6 py-14 text-center text-white sm:px-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to start your career?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/85">
            Pick a course, or talk to a counsellor and we will help you choose the right one.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/courses" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-brand hover:bg-mist">
              Browse courses <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-brand">
              Contact us
            </Link>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-white/85">
            <Phone size={18} /> Or call <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-semibold underline underline-offset-4">{SITE.phone}</a>
          </p>
        </div>
      </section>
    </>
  )
}
