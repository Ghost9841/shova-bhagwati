'use client'

import { CircleIcon, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#0A1233] text-white py-16">
      <div className="container px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <CircleIcon className="h-6 w-6 fill-red-500 text-red-500" />
            <span className="text-xl font-semibold">Shova Bhagwati</span>
          </div>
          <p className="text-gray-300 max-w-sm">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white p-2 rounded-lg hover:opacity-90 transition-opacity">
              <Linkedin className="h-5 w-5 text-[#0A1233]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-lg hover:opacity-90 transition-opacity">
              <Instagram className="h-5 w-5 text-[#0A1233]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-lg hover:opacity-90 transition-opacity">
              <Facebook className="h-5 w-5 text-[#0A1233]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-lg hover:opacity-90 transition-opacity">
              <Twitter className="h-5 w-5 text-[#0A1233]" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold relative">
            Services
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
          </h3>
          <ul className="space-y-4">
            <li className="hover:text-red-500 transition-colors">
              <a href="#">Web Design/Development</a>
            </li>
            <li className="hover:text-red-500 transition-colors">
              <a href="#">App Development</a>
            </li>
            <li className="hover:text-red-500 transition-colors">
              <a href="#">UI/UX Design</a>
            </li>
            <li className="hover:text-red-500 transition-colors">
              <a href="#">HubSpot Integration</a>
            </li>
            <li className="hover:text-red-500 transition-colors">
              <a href="#">Email Marketing</a>
            </li>
            <li className="hover:text-red-500 transition-colors">
              <a href="#">Website Migration</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold relative">
            Contact
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
          </h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-red-500" />
              <span>+1 234 567 890</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-red-500" />
              <span>info@example.com</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>123 Street, City, Country</span>
            </p>
          </div>
        </div>

        {/* Subscribe */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold relative">
            Subscribe Us
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
          </h3>
          <p className="text-gray-300">
            It is a long established fact that a reader will be distracted by the readable
          </p>
          <form className="space-y-4">
            <Input 
              type="email" 
              placeholder="Email" 
              className="bg-white text-black placeholder:text-gray-500"
            />
            <Button className="w-full bg-red-500 hover:bg-red-600 transition-colors">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </footer>
  )
}

