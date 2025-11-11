import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ pages }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + pages.length) % pages.length)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-20">
        <button
          aria-label="Previous"
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white shadow border"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20">
        <button
          aria-label="Next"
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white shadow border"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={{
              enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="p-6 md:p-10 min-h-[520px]"
          >
            {pages[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
            className={`h-2 rounded-full transition-all ${i === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
