'use client'

import { useState, useEffect } from 'react'
import { CircleIcon, Contact,  MapPin, Menu, X } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const NavLinks = () => (
    <>
      <Link href="/aboutus" className="text-sm font-medium text-gray-700 hover:text-black">
        About
      </Link>
      <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-black">
        Our Services
      </Link>
      <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-black">
        Blog
      </Link>
      <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
        <Link href="/contact" className="flex items-center gap-2">
          <Contact className="h-4 w-4" />
          <span>Contact Us</span>
        </Link>
      </Button>
      <Button className="bg-red-500 text-white hover:bg-red-600">
        <Link href="/" className='flex items-center gap-2'><MapPin /><span>Location</span></Link>
      </Button>
    </>
  )

  return (
    <header className="w-full border-b sticky top-0 bg-white z-50 gap-2">
      <div className="container flex h-16 items-center justify-between px-10">
        <Link href="/" className="flex items-center gap-2">
          <CircleIcon className="h-6 w-6 fill-red-500 text-red-500"/>
          <span className="text-xl font-semibold">Shova Bhagwati</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobile && isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-6">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
