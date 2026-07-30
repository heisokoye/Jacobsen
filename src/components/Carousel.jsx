import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/imgs/images_2026-07-30_19_28_17.400704.webp',
    title: 'Waterfront Manufactured Homes in Florida',
    subtitle: 'Factory Direct Outlets in Bradenton and Clearwater',
    alt: 'Waterfront manufactured home with boat dock'
  },
  {
    id: 2,
    image: '/imgs/images__2__2026-07-30_19_24_17.095076.webp',
    title: 'Luxury Kitchens & Modern Interior Designs',
    subtitle: 'Customizable floor plans with premium finish options',
    alt: 'Modern open manufactured home kitchen with island'
  },
  {
    id: 3,
    image: '/imgs/images__3__2026-07-30_19_24_16.857394.webp',
    title: 'Quality Construction & Statewide Delivery',
    subtitle: 'Serving all of Florida for over 60 years',
    alt: 'Exterior view of Jacobsen Homes manufactured home'
  }
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 50) {
      goToNext()
    } else if (distance < -50) {
      goToPrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <div 
      className="relative w-full overflow-hidden bg-black shadow-lg group select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative h-[200px] sm:h-[360px] md:h-[700px] lg:h-[690px] w-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows */}
      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#990000] text-white flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5] -ml-0.5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#990000] text-white flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5] -mr-0.5" />
      </button>


    </div>
  )
}

export default Carousel
