import { Monitor, Palette, Cloud, Smartphone, Database, Mail } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Design / Development',
    description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.'
  },
  {
    icon: Cloud,
    title: 'Website Migration',
    description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.'
  },
  {
    icon: Database,
    title: 'HubSpot Integration',
    description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.'
  }
]

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>Services</span>
            <span>\</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] mt-2">
            Our Expertice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-lg w-fit group-hover:bg-red-500 transition-colors">
                    <Icon className="h-6 w-6 text-red-500 group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#0A1233]">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-red-500" />
                  </div>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

