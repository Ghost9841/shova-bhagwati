import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: "The most Popular Business Of the Year",
    date: "May 4th, 2022",
    image: "/placeholder.svg",
    author: {
      name: "Ranold Jeff",
      avatar: "/placeholder.svg"
    },
    readTime: "2 Min Read"
  },
  {
    id: 2,
    title: "The most Popular Business Of the Year",
    date: "Apr 27th, 2022",
    image: "/placeholder.svg",
    author: {
      name: "Patricia Anderson",
      avatar: "/placeholder.svg"
    },
    readTime: "2 Min Read"
  },
  {
    id: 3,
    title: "The most Popular Business Of the Year",
    date: "Apr 20th, 2022",
    image: "/placeholder.svg",
    author: {
      name: "Elaine Luna",
      avatar: "/placeholder.svg"
    },
    readTime: "2 Min Read"
  }
]

export default function BlogGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
            <span>\</span>
            <span>Our Blog</span>
            <span>\</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1233] mt-2">
            Latest Post
          </h2>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src={posts[0].image || "/placeholder.svg"}
                alt={posts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-gray-600">{posts[0].date}</p>
                <h3 className="text-2xl font-bold text-[#0A1233] hover:text-red-500 transition-colors">
                  <Link href={`/blog/${posts[0].id}`}>{posts[0].title}</Link>
                </h3>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={posts[0].author.avatar || "/placeholder.svg"}
                  alt={posts[0].author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{posts[0].author.name}</p>
                  <p className="text-sm text-gray-600">{posts[0].readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1233] hover:text-red-500 transition-colors mb-4">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="flex items-center gap-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{post.author.name}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
