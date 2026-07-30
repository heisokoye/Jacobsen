import React, { useState, useEffect } from 'react'
import { Search, X, Home, MapPin, ArrowRight } from 'lucide-react'

const sampleResults = [
  { id: 1, title: 'The Royal Palm - 3 Bed / 2 Bath', type: 'Floor Plan', desc: '1,540 sq.ft luxury double-wide manufactured home layout.', location: 'Bradenton & Clearwater' },
  { id: 2, title: 'Bradenton Factory Direct Model Center', type: 'Model Center', desc: 'Visit our premier display center featuring 12 fully furnished homes.', location: 'Bradenton, FL' },
  { id: 3, title: 'Clearwater Retirement Community Homes', type: 'Community', desc: '55+ Active adult retirement communities with resort amenities.', location: 'Clearwater, FL' },
  { id: 4, title: 'The Cypress - 2 Bed / 2 Bath', type: 'Floor Plan', desc: '1,120 sq.ft energy-efficient single-wide manufactured home.', location: 'Statewide Delivery' },
]

const popularSearches = ['Bradenton', 'Clearwater', 'Floor Plans', '3 Bedroom', 'Financing', 'Move-in Ready']

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [filteredResults, setFilteredResults] = useState(sampleResults)

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredResults(sampleResults)
    } else {
      const lower = query.toLowerCase()
      setFilteredResults(
        sampleResults.filter(
          item =>
            item.title.toLowerCase().includes(lower) ||
            item.desc.toLowerCase().includes(lower) ||
            item.type.toLowerCase().includes(lower) ||
            item.location.toLowerCase().includes(lower)
        )
      )
    }
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden relative">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-200 bg-gray-50/80 flex items-center gap-3">
          <Search className="w-6 h-6 text-[#990000] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search floor plans, locations, models, financing..."
            autoFocus
            className="w-full bg-transparent text-base sm:text-lg font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors ml-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex-shrink-0">Popular:</span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs bg-red-50 hover:bg-red-100 text-[#990000] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-3">
          {filteredResults.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              No results found for "<span className="font-semibold">{query}</span>". Try searching for "Bradenton" or "Floor Plans".
            </div>
          ) : (
            filteredResults.map((item) => (
              <a
                key={item.id}
                href="#result"
                onClick={onClose}
                className="block p-4 rounded-xl border border-gray-200 hover:border-[#990000] hover:shadow-md transition-all group bg-white"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#990000] bg-red-50 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {item.location}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#990000] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#990000] transition-colors" />
                </h4>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </a>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500 flex justify-between items-center px-5">
          <span>Press ESC to close</span>
          <a href="tel:8556952246" className="font-bold text-[#990000] hover:underline">
            Need help? Call (855) MYJACHOME
          </a>
        </div>

      </div>
    </div>
  )
}

export default SearchModal
