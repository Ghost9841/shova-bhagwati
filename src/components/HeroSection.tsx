import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gray-50 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-red-500 font-medium">
              <span>\</span>
              <span>We Are Here</span>
              <span>\</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1233] leading-tight">
              Better Insights For Business Growth
            </h1>
            
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white px-8"
            >
              View More
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-50 rounded-full transform scale-[1.3]" />
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Business Professional"
                width={600}
                height={600}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

