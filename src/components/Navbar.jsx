import React, { useState } from 'react'
import { Search, X, Plus, Rss } from 'lucide-react'

// Clean Inline SVG Brand Icons for mobile drawer footer
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

const navData = [
  {
    id: 'home',
    name: 'HOME',
    href: '#home',
    active: true,
    hasPlus: true,
  },
  {
    id: 'floor-plans',
    name: 'MANUFACTURED HOME FLOOR PLANS',
    href: '#floor-plans',
    hasPlus: true,
    subItems: [
      { name: 'BY SQUARE FOOT', href: '#by-sq-ft', hasPlus: true },
      { name: 'BY # OF BEDROOMS', href: '#by-bedrooms', hasPlus: true },
      { name: 'JACOBSEN HOMES', href: '#jacobsen-homes', hasPlus: true },
      { name: 'SCOTBILT HOMES', href: '#scotbilt-homes' },
      { name: 'IMPACT HOUSING', href: '#impact-housing' },
      { name: 'MANUFACTURED HOME VIRTUAL TOURS', href: '#virtual-tours' },
      { name: 'ELEVATED / STILT HOMES', href: '#stilt-homes' },
      { name: 'JACOBSEN MODULAR HOMES', href: '#modular-homes' },
    ]
  },
  {
    id: 'model-centers',
    name: 'MODEL CENTERS',
    href: '#model-centers',
    hasPlus: true,
    subItems: [
      { name: 'BRADENTON MODEL CENTER', href: '#bradenton' },
      { name: 'CLEARWATER MODEL CENTER', href: '#clearwater' },
    ]
  },
  {
    id: 'move-in-ready',
    name: 'MOVE IN READY HOMES!',
    href: '#move-in-ready',
    hasPlus: false,
  },
  {
    id: 'retirement-communities',
    name: 'RETIREMENT COMMUNITIES',
    href: '#retirement-communities',
    hasPlus: true,
    subItems: [
      { name: '55+ COMMUNITIES', href: '#55-plus' },
      { name: 'RETIREMENT PARKS', href: '#retirement-parks' },
    ]
  },
  {
    id: 'financing',
    name: 'FINANCING',
    href: '#financing',
    hasPlus: true,
    subItems: [
      { name: 'PRE-QUALIFICATION', href: '#pre-qual' },
      { name: 'LENDERS', href: '#lenders' },
    ]
  },
  {
    id: 'contact',
    name: 'CONTACT US',
    href: '#contact',
    hasPlus: false,
  },
]

const Navbar = ({ onOpenSearch, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('HOME')
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <header className="sticky top-0 z-40 bg-[#f4f4f4] bg-textured border-b border-gray-300 shadow-xs select-none">
      <div className="w-full flex items-stretch h-16 sm:h-20 md:h-[78px]">
        
        {/* Logo Cell with Right Vertical Separator */}
        <div className="flex items-center px-4 sm:px-6 md:px-8 border-r border-gray-300/80 shrink-0">
          <a href="#home" className="flex items-center">
            <img 
              src="/imgs/logo.png" 
              alt="My Jacobsen Homes Logo" 
              className="h-10 sm:h-12 md:h-[58px] w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation Links (Grid Cells with vertical borders) */}
        <nav className="hidden lg:flex items-stretch flex-1">
          {navData.map((item) => {
            const isActive = activeTab === item.name
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (item.id === 'contact') {
                    e.preventDefault()
                    if (onOpenContact) onOpenContact()
                  } else {
                    setActiveTab(item.name)
                  }
                }}
                className={`flex items-center justify-center flex-1 px-3 xl:px-5 text-[12px] xl:text-[13px] font-bold tracking-wide transition-colors border-r border-gray-300/80 last:border-r-0 text-center hover:bg-white/40 ${
                  isActive 
                    ? 'text-[#990000] bg-white/30' 
                    : 'text-[#333333] hover:text-[#990000]'
                }`}
              >
                <span className={`inline-block py-0.5 ${isActive ? 'border-b-2 border-[#990000] font-extrabold' : ''}`}>
                  {item.name}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Mobile Right Controls: Search button & Hamburger Menu */}
        <div className="flex lg:hidden items-center justify-end flex-1 px-4 gap-3 sm:gap-4">
          
          {/* Mobile Search Button */}
          <button 
            onClick={() => onOpenSearch && onOpenSearch()}
            className="flex items-center gap-1.5 text-[#333333] hover:text-[#990000] transition-colors py-2 px-1 text-xs font-bold uppercase tracking-wider cursor-pointer"
            aria-label="Open Search"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span className="font-bold text-[13px]">SEARCH ...</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#990000] hover:bg-gray-200 rounded-md focus:outline-none transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col gap-1.5 justify-center items-center w-7 h-6">
              <span className="w-7 h-[3px] bg-[#990000] rounded-xs"></span>
              <span className="w-7 h-[3px] bg-[#990000] rounded-xs"></span>
              <span className="w-7 h-[3px] bg-[#990000] rounded-xs"></span>
            </div>
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu Modal matching exact screenshot */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          
          {/* Semi-transparent Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-red-900/20 backdrop-blur-[1px] transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Right-aligned Drawer Panel */}
          <div className="relative w-[82%] max-w-sm bg-white h-full shadow-2xl overflow-y-auto flex flex-col z-10 animate-fade-in">
            
            {/* Top Bar with Red Square Close Button [X] */}
            <div className="flex justify-end p-3 sticky top-0 bg-white z-20">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 bg-[#990000] text-white flex items-center justify-center rounded-xs shadow-md hover:bg-[#770000] transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Navigation Menu Accordion List */}
            <div className="px-6 py-2 divide-y divide-gray-200/70 flex-1">
              {navData.map((item) => {
                const isExpanded = !!expandedItems[item.id]
                const hasSub = item.subItems && item.subItems.length > 0
                const isHome = item.id === 'home'

                return (
                  <div key={item.id} className="py-4">
                    {/* Primary Level Header */}
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (item.id === 'contact') {
                            e.preventDefault()
                            setMobileMenuOpen(false)
                            if (onOpenContact) onOpenContact()
                          } else if (hasSub) {
                            toggleExpand(item.id)
                          } else {
                            setActiveTab(item.name)
                            setMobileMenuOpen(false)
                          }
                        }}
                        className={`text-[14px] font-medium uppercase tracking-wide transition-colors ${
                          isHome 
                            ? 'text-[#990000]' 
                            : 'text-[#333333] hover:text-[#990000]'
                        }`}
                      >
                        {item.name}
                      </a>

                      {/* Right Plus / Collapse icon */}
                      {hasSub ? (
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="p-1 text-gray-300 hover:text-gray-600 cursor-pointer focus:outline-none"
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          {isExpanded ? (
                            <X className="w-4 h-4 text-gray-400 stroke-[1.8]" />
                          ) : (
                            <span className="text-gray-300 text-sm font-light">+</span>
                          )}
                        </button>
                      ) : item.hasPlus ? (
                        <span className="text-gray-300 text-sm font-light">+</span>
                      ) : null}
                    </div>

                    {/* Sub-items List */}
                    {hasSub && isExpanded && (
                      <div className="mt-3.5 pl-4 space-y-3.5 border-l-2 border-gray-100">
                        {item.subItems.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-center justify-between">
                            <a
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false)
                              }}
                              className="text-[12px] font-bold text-gray-600 hover:text-[#990000] tracking-wider uppercase transition-colors"
                            >
                              {sub.name}
                            </a>
                            {sub.hasPlus && (
                              <span className="text-gray-300 text-xs font-light">+</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Bottom TopMenu Label & Social Buttons matching screenshot */}
              <div className="pt-6 pb-8 flex items-center justify-between">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenSearch) onOpenSearch();
                  }}
                  className="flex items-center gap-2 text-gray-800 font-bold text-sm hover:text-[#990000] transition-colors"
                >
                  <span className="text-lg font-extrabold leading-none">≡</span>
                  <span className="font-medium text-[14px]">TopMenu</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Facebook"
                    className="w-7 h-7 bg-[#990000] text-white rounded-xs flex items-center justify-center hover:bg-[#770000] transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="YouTube"
                    className="w-7 h-7 bg-[#990000] text-white rounded-xs flex items-center justify-center hover:bg-[#770000] transition-colors"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="#rss" 
                    aria-label="RSS Feed"
                    className="w-7 h-7 bg-[#990000] text-white rounded-xs flex items-center justify-center hover:bg-[#770000] transition-colors"
                  >
                    <Rss className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}
    </header>
  )
}

export default Navbar
