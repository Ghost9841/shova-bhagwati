import Image from 'next/image'
import { Phone } from 'lucide-react'

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
                src="/placeholder.svg"
                alt="Team of professionals working together"
                width={600}
                height={400}
                className="rounded-2xl relative z-10"
              />
              {/* Hexagon Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] bg-repeat opacity-20 z-20" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-red-500 font-medium">
              <span>\</span>
              <span>About us</span>
              <span>\</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] leading-tight">
              One of the Fastest Way to Business Growth
            </h2>

            <p className="text-gray-600 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
            </p>

            {/* Professional Advice Box */}
            <div className="bg-gray-50 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-[#0A1233]">
                  Get Instant Professional Advice
                </h3>
              </div>
              <div className="pl-12">
                <p className="text-gray-600">Ready to Help : </p>
                <p className="text-red-500 font-semibold">+1 356 678 7897</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

