interface PageHeaderProps {
    title: string
    currentPage: string
  }
  
  export default function PageHeader({ title, currentPage }: PageHeaderProps) {
    return (
      <div className="bg-[#0A1233] py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-red-500 text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <div className="text-white text-sm">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>{currentPage}</span>
          </div>
        </div>
      </div>
    )
  }
  
  