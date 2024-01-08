import { useEffect } from "react";
import { useState } from "react"
import BlogCards from "./BlogCards";
import Pagina from "./Pagina";



const BlogPage = () => {
  const [blogs,setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory,setActiveCategory] =useState(null);

  useEffect(()=>{
    async function fetchBlogs(){
      let url= `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      if(selectedCategory){
        url+= `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
      // console.log(data);
    }
    fetchBlogs();
  } ,[currentPage, pageSize, selectedCategory]);
  const handlePageChange =(pageNumber) =>{
    setCurrentPage(pageNumber);
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div>
      <div>Page categories</div>
      <div><BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/></div>
      <div><Pagina onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs}/></div>
    </div>
  )
}

export default BlogPage