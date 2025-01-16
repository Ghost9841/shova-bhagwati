import Image from 'next/image'

const teamMembers = [
  {
    name: 'Larry F. Burnett',
    role: 'CEO',
    image: '/placeholder.svg'
  },
  {
    name: 'Meghan J. Webb',
    role: 'CTO',
    image: '/placeholder.svg'
  },
  {
    name: 'Yvonne J. Cullum',
    role: 'CFO',
    image: '/placeholder.svg'
  },
  {
    name: 'Diana H. Williams',
    role: 'COO',
    image: '/placeholder.svg'
  }
]

export default function Team() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>Team</span>
            <span>\</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] mt-2">
            Our Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 rounded-full overflow-hidden aspect-square transition-transform duration-300 transform group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="text-red-500 font-semibold text-lg">
                {member.name}
              </h3>
              <p className="text-[#0A1233] text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

