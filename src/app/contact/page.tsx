import PageHeader from "@/components/PageHeader";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" currentPage="Contact" />
        <ContactForm/>
    </>
  )
}

