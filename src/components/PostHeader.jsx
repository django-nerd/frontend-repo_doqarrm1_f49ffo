import { MoreHorizontal, Verified } from 'lucide-react'

export default function PostHeader({ avatarUrl, name, title, platform = 'LinkedIn', time = '1h' }) {
  return (
    <div className="flex items-center justify-between px-2 md:px-0 mb-3">
      <div className="flex items-center gap-3">
        <img src={avatarUrl} alt={`${name} avatar`} className="w-10 h-10 rounded-full object-cover border"/>
        <div>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            {name}
            <Verified className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-xs text-gray-500">{title} • {platform} • {time}</div>
        </div>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <MoreHorizontal className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}
