import { useEffect } from "react";
import { useState } from "react"
import BlogCards from "./BlogCards";


const BlogPage = () => {
  const [blogs,setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12; 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory,setActiveCategory] =useState(null);

  useEffect(()=>{
    async function fetchBlogs(){
      let url= `http://localhost:5000/blogs?page=${currentPage}&limit=${postsPerPage}`;
      if(selectedCategory){
        url+= `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
      // console.log(data);
    }
    fetchBlogs();
  } ,[currentPage, postsPerPage, selectedCategory]);
  const handlePageChange =(postsPerPage) =>{
    setCurrentPage(postsPerPage);
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div>
      <div>Page categories</div>
      <div><BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} postsPerPage={postsPerPage}/></div>
      <div>pagination</div>
    </div>
  )
}

export default BlogPage