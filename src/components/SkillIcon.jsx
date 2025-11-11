import { motion } from 'framer-motion'

export default function SkillIcon({ icon: Icon, label, details, color = 'from-blue-500 to-cyan-500' }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={`p-4 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="mt-2 text-center text-sm font-medium text-gray-800">{label}</div>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10 w-56 p-3 rounded-lg bg-white shadow-xl border border-gray-100 text-sm text-gray-700 pointer-events-none opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ y: -8 }}
      >
        {details}
      </motion.div>
    </motion.div>
  )
}
