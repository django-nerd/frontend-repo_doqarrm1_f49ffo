import { motion } from 'framer-motion'
import { Heart, MessageCircle, Send, Share2, ChevronRight } from 'lucide-react'
import PostHeader from './PostHeader'
import SocialCarousel from './SocialCarousel'

export default function SocialPost({ pages, avatarUrl, name, title, platform = 'LinkedIn' }) {
  return (
    <div className="max-w-xl w-full mx-auto">
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <PostHeader avatarUrl={avatarUrl} name={name} title={title} platform={platform} />

        <div className="aspect-[4/5] bg-gray-50 relative">
          <SocialCarousel pages={pages} />
        </div>

        <div className="px-3 py-2 flex items-center gap-4 text-gray-700">
          <button className="inline-flex items-center gap-2 hover:text-rose-500"><Heart className="w-5 h-5"/>Like</button>
          <button className="inline-flex items-center gap-2 hover:text-blue-600"><MessageCircle className="w-5 h-5"/>Comment</button>
          <button className="inline-flex items-center gap-2 hover:text-cyan-600"><Send className="w-5 h-5"/>Send</button>
          <button className="ml-auto inline-flex items-center gap-2 hover:text-emerald-600"><Share2 className="w-5 h-5"/>Share</button>
        </div>

        <div className="px-3 pb-3 text-xs text-gray-500">
          Swipe to see more <ChevronRight className="inline w-4 h-4"/>
        </div>
      </div>
    </div>
  )
}
