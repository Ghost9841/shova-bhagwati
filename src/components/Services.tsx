import {ShieldCheck, Camera, Siren,PersonStanding, GroupIcon, CheckCheck, Radiation, House, CircleCheckBig,   } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Access Control Management',
    description: 'Ensuring secure entry and exit by managing access points with ID checks, key cards, and biometric systems.'
  },
  {
    icon: Camera,
    title: 'Surveillance and Monitoring',
    description: 'Monitoring premises using CCTV cameras and conducting regular patrols to detect and prevent suspicious activity.'
  },
  {
    icon: Siren,
    title: 'Emergency Response',
    description: 'Responding to incidents such as fire alarms, medical emergencies, or security breaches to ensure safety.'
  },
  {
    icon: PersonStanding,
    title: 'Personal Protection',
    description: 'Providing close protection for individuals, ensuring their safety during travel, events, or public appearances.'
  },
  {
    icon: GroupIcon,
    title: 'Event Security Management',
    description: 'Managing safety and crowd control at events, preventing disruptions, and maintaining order.'
  },
  {
    icon: CheckCheck,
    title: 'Risk Assessment and Mitigation',
    description: 'Identifying vulnerabilities and conducting security audits to minimize risks and strengthen safety measures.'
  },
  {
    icon: Radiation,
    title: 'Security Provider Services',
    description: 'Offering professional security guards to ensure safety for residential, commercial, and industrial properties.'
  },
  {
    icon: House,
    title: 'Housekeeping Services',
    description: 'Providing cleaning and maintenance services to keep facilities tidy, organized, and presentable.'
  },
  {
    icon: CircleCheckBig,
    title: 'Cleaner Services',
    description: 'Delivering professional cleaning services for homes, offices, and public spaces with high standards of hygiene.'
  }
];


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

