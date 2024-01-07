import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const BlogCards = ({ blogs, currentPage, selectedCategory, postsPerPage }) => {
  const fileredBlogs = blogs.filter((blog)=>!selectedCategory || blog.category === selectedCategory).slice((currentPage-1)*postsPerPage,currentPage*postsPerPage);

  console.log(fileredBlogs);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 rounded">
      {fileredBlogs.map((blog, index) => (
        <Link key={index} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src={blog.image} className="w-full" />
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">
              {blog.title}
            </h3>
            <p className="mb-2 text-gray-800">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-400">
              Published: {blog.published_date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
