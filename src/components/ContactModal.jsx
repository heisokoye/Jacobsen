import React, { useEffect, useState } from 'react'
import { Phone, X, Check, Copy } from 'lucide-react'

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText('(971) 487-0100')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="fixed inset-0"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md overflow-hidden z-10 animate-fade-in">
        {/* Header */}
        <div className="bg-[#990000] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <h3 className="font-semibold text-lg tracking-wide uppercase">Contact Details</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 text-center space-y-6">
          <div className="w-16 h-16 bg-red-50 text-[#990000] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Phone className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Direct Phone Line
            </p>
            <div className="text-xl sm:text-2xl font-semibold text-neutral-800 tracking-tight leading-tight">
              DIAL (971) MY E EDINGER HOMES
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#990000] tracking-wide">
              (971) 487 0100
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="tel:9714870100"
              className="flex-1 bg-[#990000] hover:bg-[#770000] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <button
              onClick={handleCopy}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-gray-300 text-sm uppercase tracking-wider cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Number</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500 flex justify-between items-center">
        
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-neutral-900 font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
