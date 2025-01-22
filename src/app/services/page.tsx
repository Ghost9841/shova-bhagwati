
import PageHeader from "@/components/PageHeader";
import QuoteSection from "@/components/QuoteSection";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" currentPage="Services" />
      <Services />
      <QuoteSection
        name="Get Our Services Now and Experience Excellence in Security"
        link="Explore Services"
        hrefs="/service"
      />

    </>
  )
}

