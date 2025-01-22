import Image from 'next/image'
import { Lightbulb, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-red-500 font-medium">
              <span>\</span>
              <span>What We Do</span>
              <span>\</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] leading-tight">
              We Build Secure Solutions That Protect What Matters Most.
            </h2>

            <p className="text-gray-600">
              In today’s digital age, safeguarding your data and systems is more critical than ever.
              Our security solutions ensure robust protection against emerging threats, enabling peace of mind and uninterrupted operations.
              Trust in our expertise to defend your organization from vulnerabilities and cyber risks.
            </p>


            <div className="grid sm:grid-cols-2 gap-6 ">
              <div className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="p-3 bg-red-50 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1233] mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    Dedicated to providing reliable and professional security services to ensure your safety and peace of mind.
                  </p>

                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="p-3 bg-red-50 rounded-lg">
                  <Trophy className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1233] mb-2">Our Goal</h3>
                  <p className="text-gray-600 text-sm">
                    To provide top-notch security services that prioritize safety, professionalism, and trust for every client we serve.
                  </p>

                </div>
              </div>
            </div>

            <Button className="bg-red-500 hover:bg-red-600">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

