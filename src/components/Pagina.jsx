

const Pagina = ({onPageChange,currentPage,blogs,pageSize}) => {
    const totalPages= Math.ceil(blogs.length /pageSize );
    console.log(totalPages);
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages},(_,i)=> i+1).map((pageNumber)=>(
          <li className={pageNumber === currentPage?"activePagination":""} key={pageNumber}>
            <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
          </li>
        ))
    }
  return (
    <ul>
      <li>
        <button>Prev</button>
      </li>
      <li>
        <button>{renderPaginationLinks}</button>
      </li>
      <li>Next</li>

    </ul>
  )
}

export default Pagina