import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from your data source
const posts = [
  {
    id: 1,
    title: "The most Popular Business Of the Year",
    date: "May 4th, 2022",
    image: "/placeholder.svg",
    content: `
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      
      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

      <h2>Why do we use it?</h2>
      
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      
      <ul>
        <li>Comprehensive solution for business</li>
        <li>Professional support and assistance</li>
        <li>Customer satisfaction guaranteed</li>
        <li>Innovative approaches to problems</li>
      </ul>
    `,
    author: {
      name: "Ranold Jeff",
      avatar: "/placeholder.svg",
      role: "Senior Business Analyst",
    },
    readTime: "2 Min Read",
  },
  // ... other posts
]

interface BlogSlugProps {
  params: Promise<{ id: string }>
}

export default async function BlogPost({ params }: BlogSlugProps) {
  // In a real app, you'd fetch this data from an API
  const { id } = await params;
  const post = posts.find((p) => p.id === Number.parseInt(id))

  if (!post) {
    return <div>Post not found</div>
  }

  // Related posts (excluding current post)
  const relatedPosts = posts.filter((p) => p.id !== Number.parseInt(id)).slice(0, 2)

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0A1233] text-white py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <Button variant="ghost" className="text-white mb-8 hover:text-white" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Author */}
          <div className="border-t border-b py-8 my-12">
            <div className="flex items-center gap-4">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg text-[#0A1233]">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0A1233] mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-[#0A1233] group-hover:text-red-500 transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

