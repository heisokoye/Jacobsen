import React, { useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import AccessibilityWidget from './components/AccessibilityWidget'
import ContentSection from './components/ContentSection'
import SearchModal from './components/SearchModal'
import ContactModal from './components/ContactModal'

const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] text-[#333333] font-sans antialiased selection:bg-[#990000] selection:text-white">
      
      {/* Top Contact Bar */}
      <TopBar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Navigation Bar */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Image Carousel */}
        <Carousel />

        {/* Content Section */}
        <ContentSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Accessibility Widget Badge */}
      <AccessibilityWidget />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Contact Details Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

    </div>
  )
}

export default App