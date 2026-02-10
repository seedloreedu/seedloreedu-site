import React from 'react'
import Head from 'next/head'
import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

import CoursesHub from '../components/home/CoursesHub'
import WhyChoose from '../components/home/WhyChoose'
import FaqSection from '../components/home/FaqSection'

export default function Home() {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Seedlore Educare</title>
          <meta property="og:title" content="Seedlore Educare" />
        </Head>

        <Navigation />

        {/* Reduced-motion safety (kept from your original) */}
        <div className="home-container11">
          <div className="home-container12">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.card, .card:hover, .card:focus { transform: none; }
.media-card video { animation: none; }
.badge { animation: none; }
}
</style>`}
            />
          </div>
        </div>

        {/* 1) Courses */}
        <CoursesHub />

        {/* 2) Why Choose + Progress Path */}
        <WhyChoose />

        {/* 3) FAQ */}
        <FaqSection />

        <Footer />
      </div>

      {/* Keep your original “hidden container” behavior intact */}
      <style jsx>{`
        .home-container10 {
          width: 100%;
          display: block;
          min-height: 100vh;
        }
        .home-container11 {
          display: none;
        }
        .home-container12 {
          display: contents;
        }
      `}</style>
    </>
  )
}
