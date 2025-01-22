import PageHeader from "@/components/PageHeader";
import ContactForm from "./contact-form";
import QuoteSection from "@/components/QuoteSection";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" currentPage="Contact" />
      <ContactForm />
      <QuoteSection
        name="Get in Touch with Us for Reliable Support and Services"
        link="Contact Us Now"
        hrefs="tel:+977 9860104336"
      />

    </>
  )
}

