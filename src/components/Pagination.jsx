import React from 'react'

const Pagination = ({currentPage, setCurrentPage, total}) => {

    const handlePrev = () => {
        if (currentPage > 1 ){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < total) {
            setCurrentPage(currentPage + 1)
        };
    }

  return (
    <div>
        <button onClick={handlePrev}>Prev</button>
        <span>{`${currentPage} / ${total}`}</span>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination;