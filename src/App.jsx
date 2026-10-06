import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import Navbar, { usePageTitle } from './components/Navbar'
import Contact from './components/Contact'
import { Policy } from './components/Policy'

function NotFound() {
  usePageTitle('Page not found')
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl font-bold">This page does not exist</h1>
      <p className="mt-3 text-ink/70">The link may be old or mistyped.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-white">Go to the home page</Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy kind="privacy" />} />
        <Route path="/terms" element={<Policy kind="terms" />} />
        <Route path="/policy" element={<Navigate to="/privacy-policy" replace />} />
      </Route>
    </Routes>
  )
}
