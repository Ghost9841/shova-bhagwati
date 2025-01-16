import PageHeader from "@/components/PageHeader";
import BlogGrid from "./blog-grid";


export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blogs" currentPage="Blogs" />
      <BlogGrid/>
    </>
  )
}

