import About from '@/components/About'
import PageHeader from '@/components/PageHeader'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
       <PageHeader title="About" currentPage="About" />
      <About/>
    </div>
  )
}

export default AboutUs
