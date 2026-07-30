import React from 'react'
import { IoAccessibilitySharp } from "react-icons/io5";
const AccessibilityWidget = () => {
  return (
    <div className="fixed left-3 sm:left-4 top-1/2 -translate-y-1/2 z-50 select-none">
      <button
        className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0050FF] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white focus:outline-none transition-transform hover:scale-105 active:scale-95 cursor-pointer relative"
        aria-label="Accessibility Widget"
        title="Accessibility Widget"
      >
        <div className="w-full h-full rounded-full border border-white/80 flex items-center justify-center p-1">
          <IoAccessibilitySharp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
      </button>
    </div>
  )
}

export default AccessibilityWidget
