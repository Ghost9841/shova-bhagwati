'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { cn } from "@/lib/utils"

const testimonials = [
  {
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
    author: 'Samuel Karl',
    role: 'CEO',
    image: '/placeholder.svg'
  },
  {
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
    author: 'Daria Linney',
    role: 'CEO',
    image: '/placeholder.svg'
  },
  {
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
    author: 'John Smith',
    role: 'CTO',
    image: '/placeholder.svg'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>From our Customers</span>
            <span>\</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] mt-2">
            Testimonials
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex justify-between mb-8">
                      <Quote className="h-8 w-8 text-red-500" />
                      <Quote className="h-8 w-8 text-red-500 rotate-180" />
                    </div>
                    <p className="text-gray-600 mb-8 text-lg">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-red-500">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index 
                    ? "bg-red-500 w-6" 
                    : "bg-gray-300 hover:bg-red-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

