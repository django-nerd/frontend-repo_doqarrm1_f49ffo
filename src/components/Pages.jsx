import { motion } from 'framer-motion'
import { BadgeCheck, Brain, Database, Github, Sparkles, Cloud, Star, ShieldCheck, Award, FileDown, Heart, MessageCircle, Send, Share2 } from 'lucide-react'
import SkillIcon from './SkillIcon'

export function PageIntro({ name, title, headline, skills }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          {name}
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.05}} className="text-lg md:text-xl text-gray-600 mt-2">
          {title}
        </motion.p>
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">{headline}</span>
        </motion.div>
        <div className="mt-6 grid grid-cols-4 gap-4 max-w-sm">
          {skills.map((s, i) => (
            <SkillIcon key={i} {...s} />
          ))}
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="w-full">
          <div className="relative rounded-2xl border bg-white p-6 shadow-lg">
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-full shadow">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Data-driven leader with 8+ years delivering end-to-end ML systems, from exploration to production. Passionate about shipping measurable impact fast.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
              <Github className="w-4 h-4" />
              github.com/candidate
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PageCompetencies({ items }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Competencies</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <motion.div key={idx} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-700">
                {it.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{it.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border">{it.badge}</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{it.desc}</p>
                <p className="text-gray-500 mt-2 text-sm">{it.summary}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function PageProjects({ projects }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Key Projects</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <details key={i} className="group rounded-xl border bg-white p-4 shadow-sm open:shadow-md">
            <summary className="cursor-pointer list-none">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${p.bg} text-white`}>{p.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900">{p.title}</div>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-2 text-xs inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Star className="w-3 h-3" /> {p.impact}
                  </div>
                </div>
              </div>
            </summary>
            <div className="mt-3 text-sm text-gray-700 leading-relaxed">
              {p.details}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export function PageCerts({ certs }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Certifications & Achievements</h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div key={i} whileHover={{ y: -2 }} className="relative rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900 inline-flex items-center gap-2">
                  {c.name}
                  <span className="text-amber-500 flex items-center">
                    {Array.from({ length: c.rating }).map((_, i2) => (
                      <Star key={i2} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                </div>
                <div className="text-xs text-gray-500">{c.org}</div>
              </div>
            </div>
            <div className="absolute right-3 top-3 text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <span className="px-2 py-1 rounded-full bg-gray-100 border text-gray-700">{c.badge}</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">Hover for details</div>
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-white/90 backdrop-blur rounded-xl p-4 text-sm text-gray-700">
              {c.hover}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function PageCTA({ availability = 14 }) {
  const percent = Math.max(0, Math.min(100, Math.round(((28 - availability) / 28) * 100)))
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Availability & Get in Touch</h2>
      <p className="text-gray-600 mt-2">Available in {availability} {availability === 1 ? 'day' : 'weeks'}</p>

      <div className="mt-6 h-3 w-full rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white border hover:bg-gray-50 shadow-sm"><Heart className="w-4 h-4 text-rose-500"/>Like</button>
        <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white border hover:bg-gray-50 shadow-sm"><MessageCircle className="w-4 h-4 text-blue-600"/>Comment</button>
        <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white border hover:bg-gray-50 shadow-sm"><Send className="w-4 h-4 text-cyan-600"/>DM</button>
        <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow"><FileDown className="w-4 h-4"/>Request Resume</button>
        <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white border hover:bg-gray-50 shadow-sm"><Share2 className="w-4 h-4 text-emerald-600"/>Share</button>
      </div>

      <div className="mt-8">
        <div className="text-sm text-gray-600 mb-2">Hot Availability</div>
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <motion.div className="h-full bg-blue-600" initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1.2, delay: .2 }} />
        </div>
      </div>
    </div>
  )
}
