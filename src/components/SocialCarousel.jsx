import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SocialCarousel({ pages }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + pages.length) % pages.length)
  }

  const handleDragEnd = (_e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x
    if (swipe < -1000) paginate(1)
    else if (swipe > 1000) paginate(-1)
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 overflow-hidden">
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
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full w-full p-4 md:p-6">
              <div className="h-full w-full rounded-xl bg-white/80 backdrop-blur border border-gray-200 shadow">
                <div className="p-4 md:p-6 overflow-auto h-full">
                  {pages[index]}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
