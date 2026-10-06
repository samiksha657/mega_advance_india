import { Link } from 'react-router-dom'
import { usePageTitle } from '../components/Navbar'

const PRIVACY_SECTIONS = [
  ['Information we collect', 'When you fill in our contact form or call us, we collect your name, phone number, email address, the course you are interested in and any message you send. Our website may also record basic technical data such as browser type and pages visited.'],
  ['How we use it', 'We use your details to reply to enquiries, suggest suitable courses, share batch and fee information and, for enrolled students, to manage admissions and placement support.'],
  ['Sharing your information', 'We do not sell your personal information. For placement purposes we share a student resume with hiring companies only with that student consent. We may also share data with service providers who help us run the website, or when the law requires it.'],
  ['Cookies', 'The website may use cookies or similar tools to keep it working and to understand how visitors use it. You can block cookies in your browser settings, though some features may not work as intended.'],
  ['Data security', 'We take reasonable steps to protect your information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.'],
  ['Your choices', 'You can ask us to correct or delete the personal information we hold about you, or to stop contacting you, by emailing us.'],
  ['Changes to this policy', 'We may update this policy from time to time. The latest version will always be on this page.'],
]

const TERMS_SECTIONS = [
  ['Use of the website', 'The content on this website is for general information about our courses and services. You agree not to misuse the site, attempt to disrupt it or copy its content for commercial use without our permission.'],
  ['Courses and fees', 'Course details, durations and fees are shown as a guide and may change. Final fees, batch timings and course content are confirmed at the time of admission.'],
  ['Attendance and conduct', 'Students are expected to attend classes regularly, follow lab rules and treat staff and other students with respect. We may cancel enrolment for serious or repeated misconduct.'],
  ['Refunds and transfers', 'Fee refund and batch transfer rules are explained at admission and apply as stated in the admission form or receipt.'],
  ['Placement assistance', 'We provide training, interview preparation and job referrals. Placement support is not a guarantee of a job, since hiring decisions are made by employers.'],
  ['Intellectual property', 'The name, logo, study material and website content belong to Mega Advance India and may not be reproduced or shared without written permission.'],
  ['Limitation of liability', 'We make reasonable efforts to keep the website accurate and available, but we are not liable for losses arising from its use or from any temporary unavailability.'],
  ['Governing law', 'These terms are governed by the laws of India. Any dispute will be subject to the courts at the location of our registered office.'],
]

const TABS = [
  { key: 'privacy', label: 'Privacy Policy', intro: 'Mega Advance India respects your privacy. This policy explains what we collect when you use our website or enquire about our courses, and how we use it.', sections: PRIVACY_SECTIONS },
  { key: 'terms', label: 'Terms & Conditions', intro: 'By using this website or enrolling in a course at Mega Advance India, you agree to the terms below. Please read them carefully.', sections: TERMS_SECTIONS },
]

export function Policy({ kind = 'privacy' }) {
  const current = TABS.find((t) => t.key === kind) || TABS[0]

  usePageTitle(current.label)

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <h1 className="font-display text-4xl font-extrabold">{current.label}</h1>
      <p className="mt-2 text-sm text-ink/60">Last updated: September 2026</p>
      <p className="mt-6 leading-relaxed text-ink/80">{current.intro}</p>

      {current.sections.map(([h, body]) => (
        <section key={h} className="mt-8">
          <h2 className="font-display text-xl font-bold">{h}</h2>
          <p className="mt-2 leading-relaxed text-ink/80">{body}</p>
        </section>
      ))}

      <p className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink/60">
        Questions about this page? <Link to="/contact" className="font-semibold text-brand underline">Contact us</Link>.
      </p>
    </article>
  )
}

export default Policy
