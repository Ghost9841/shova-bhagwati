import { Button } from "@/components/ui/button"
import Link from "next/link"

interface QuoteProps{
    name : string,
    link : string,
    hrefs : string,
}

export default function QuoteSection({name,link,hrefs}:QuoteProps) {
  return (
    <section className="container px-4 mx-auto py-16">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: 'url("/placeholder.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0A1233]/80" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto mb-8">
           {name}
          </h2>
          <Button asChild className="bg-red-500 hover:bg-red-600 text-white px-8">
            <Link href={hrefs}>{link}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

