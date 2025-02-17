import Image from 'next/image'
import { Phone } from 'lucide-react'
import security from '@/components/assets/security.jpg'

export default function About() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl" />
          <div className="relative">
            <Image
              src={security}
              alt="Team of professionals working together"
              width={600}
              height={400}
              className="rounded-2xl relative z-10"
            />
            {/* Hexagon Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] bg-repeat opacity-20 z-0 rounded-2xl" />
          </div>
        </div>
  
        {/* Right Content */}
        <div className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>About us</span>
            <span>\</span>
          </div>
  
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] leading-tight">
            One of the Fastest Ways to Business Growth
          </h2>
  
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
          </p>
  
          {/* Professional Advice Box */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500 p-2 rounded-full">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#0A1233]">
                Contact Our Key Personnel
              </h3>
            </div>
            <div className="flex justify-between items-start">
              {/* Left - Managing Director */}
              <div className="text-left space-y-1">
                <p className="text-gray-600 font-semibold">Bishnu Bahadur Khatri K.C.</p>
                <p className="text-gray-500 text-sm text-center">Managing Director</p>
                <p className="text-red-500 font-semibold text-center">9841921543</p>
              </div>
              {/* Center - Security Incharge */}
              <div className="text-center space-y-1">
                <p className="text-gray-600 font-semibold">PasuPati Singh Kunwar</p>
                <p className="text-gray-500 text-sm">Security Incharge</p>
                <p className="text-red-500 font-semibold">9860626719</p>
                
              </div>
              {/* Right - Account Head */}
              <div className="text-right space-y-1">
                <p className="text-gray-600 font-semibold">Krishna Pd. Wasti</p>
                <p className="text-gray-500 text-sm text-center">Account Head</p>
                <p className="text-red-500 font-semibold text-center">9769762771</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

