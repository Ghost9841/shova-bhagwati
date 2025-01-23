import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function GetinTouch() {
  return (
    <section className="bg-[#0A1233] py-16 md:py-24 mb-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>Get In Touch</span>
            <span>\</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Hey! Let&apos;s Talk</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-xl">
            <form className="space-y-6">
              <Input type="text" placeholder="Name" className="border-0 bg-gray-50 h-12" />
              <Input type="email" placeholder="Email" className="border-0 bg-gray-50 h-12" />
              <Input type="tel" placeholder="Phone" className="border-0 bg-gray-50 h-12" />
              <Textarea placeholder="Your Message" className="border-0 bg-gray-50 min-h-[150px] resize-none" />
              <Button className="bg-red-500 hover:bg-red-600 h-12 px-8">Send Now</Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 rounded-xl">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-500 mb-2">Call Anytime</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>+91 23678 27867</p>
                    <p>+91 67678 92678</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Mail className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-500 mb-2">Send Email</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>connect@itfrms.com</p>
                    <p>hello@itfrms.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-2 rounded-lg">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-500 mb-2">Visit Us</h3>
                  <p className="text-sm text-gray-600">
                    20 Island Park Road,
                    <br />
                    New Jearsy, New York, USA
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#0A1233] mb-4">Follow us</h3>
                <div className="flex gap-3">
                  <a href="#" className="bg-red-500 p-2.5 rounded-lg text-white hover:bg-red-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-500 p-2.5 rounded-lg text-white hover:bg-red-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-500 p-2.5 rounded-lg text-white hover:bg-red-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-500 p-2.5 rounded-lg text-white hover:bg-red-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

