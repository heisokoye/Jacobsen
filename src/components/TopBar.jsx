import React from 'react'
import { Phone, Rss, Search } from 'lucide-react'

// Clean Inline SVG Brand Icons
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const TopBar = ({ onOpenSearch, onOpenContact }) => {
  return (
    <div className="bg-[#990000] hidden md:block text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider py-1.5 px-4 sm:px-8 border-b border-[#770000]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

        {/* Phone & Contact Info */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <button
            onClick={() => onOpenContact && onOpenContact()}
            className="flex items-center gap-1.5 hover:text-gray-200 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>DIAL (971) MY E EDINGER HOMES (971) 487 0100</span>
          </button>
          <span className="hidden sm:inline opacity-40">|</span>
          <button
            onClick={() => onOpenContact && onOpenContact()}
            className="hover:underline hover:text-gray-200 transition-colors cursor-pointer"
          >
            CONTACT US
          </button>
        </div>

        {/* Social Icons & Search (Desktop view right side) */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:opacity-80 transition-opacity"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#rss"
              aria-label="RSS Feed"
              className="hover:opacity-80 transition-opacity"
            >
              <Rss className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          <span className="opacity-40">|</span>

          {/* Search Link */}
          <button
            onClick={() => onOpenSearch && onOpenSearch()}
            className="flex items-center gap-1.5 hover:text-gray-200 cursor-pointer transition-colors uppercase font-semibold"
          >
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>SEARCH ...</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default TopBar
