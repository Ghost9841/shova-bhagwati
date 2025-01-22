import PageHeader from "@/components/PageHeader";
import BlogGrid from "./blog-grid";
import QuoteSection from "@/components/QuoteSection";


export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blogs" currentPage="Blogs" />
      <BlogGrid />
      <QuoteSection
        name="Stay Updated with Insights and Stories from Our Experts"
        link="Read Our Blogs"
        hrefs="/blog"
      />

    </>
  )
}

