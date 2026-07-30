import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { MapPin, ArrowRight, ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react'

const ContentSection = () => {
  return (
    <section className="bg-textured py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Title - Exact Font, Spacing, and Colors */}
        <h1 className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-[34px]  text-neutral-700 tracking-normal  uppercase leading-snug sm:leading-tight mb-4 sm:mb-6">
          WE ARE CITRUS HOMES / MEADOWOOD HOMES OF FLORIDA!
        </h1>

        {/* Subtitle - Italic Serif */}
        <p className="font-sans font-normal italic text-base sm:text-base md:text-[17px] text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
          We are a Jacobsen Homes Factory Direct Outlet for Manufactured Homes with locations in Bradenton and Clearwater Florida. Offering Statewide Sales, Delivery and Service.
        </p>

        {/* Horizontal Divider with House Icon */}
        <div className="relative flex items-center justify-center my-8 sm:my-10 max-w-xl mx-auto">
          <div className="w-full border-t border-gray-300"></div>
          <div className="absolute bg-[#f8f8f7] px-4">
            <div className="p-1 rounded-sm text-[#444444]">
              <HiMiniHome className="w-10 h-9 text-[#444444]" />
            </div>
          </div>
        </div>

        {/* Description Paragraph */}
        <p className="text-neutral-600 text-base sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-normal">
          We offer a wide variety of services and can assist you with just about any aspect related to Manufactured Homes or Modular Homes.
        </p>
      </div>
    </section>
  )
}

export default ContentSection
