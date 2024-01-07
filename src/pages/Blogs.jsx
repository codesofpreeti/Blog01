import BlogPage from "../components/BlogPage"


const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-white px-4 text-center">
      <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Your blogs</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <BlogPage/>
      </div>
    </div>
  )
}

export default Blogs