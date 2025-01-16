import { Search, Scissors, Code, ClipboardCheck } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Research',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Scissors,
      number: '02',
      title: 'Design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Code,
      number: '03',
      title: 'Develope',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: ClipboardCheck,
      number: '04',
      title: 'Test',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>Planning</span>
            <span>\</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] mt-2">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <Icon className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-3xl font-bold text-gray-200">
                      {step.number}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#0A1233]">
                      {step.title}
                    </h3>
                    <div className="w-12 h-1 bg-red-500" />
                  </div>
                  <p className="text-gray-600">
                    {step.description}
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

