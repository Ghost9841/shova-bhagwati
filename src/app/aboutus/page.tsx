import About from '@/components/About'
import PageHeader from '@/components/PageHeader'
import QuoteSection from '@/components/QuoteSection'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
       <PageHeader title="About" currentPage="About" />
      <About/>
      <QuoteSection 
  name="Learn About Our Journey and Commitment to Excellence" 
  link="Discover More" 
  hrefs='/aboutus'
/>

    </div>
  )
}

export default AboutUs
