import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import AccessibilityWidget from './components/AccessibilityWidget'
import ContentSection from './components/ContentSection'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] text-[#333333] font-sans antialiased selection:bg-[#990000] selection:text-white">
      
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Image Carousel */}
        <Carousel />

        {/* Content Section */}
        <ContentSection />
      </main>

      {/* Accessibility Widget Badge */}
      <AccessibilityWidget />

    </div>
  )
}

export default App