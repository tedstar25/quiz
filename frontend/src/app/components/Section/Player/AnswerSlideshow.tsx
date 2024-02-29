import React, { useState } from 'react';
import Answercard from '../../Answercard';

const AnswersSlideshow: React.FC<{ answers: string[] }> = ({ answers }) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPageCount = Math.ceil(answers.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPageCount);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPageCount) % totalPageCount);
  };

  return (
    <div >
      {answers.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((answer, index) => (
        <div key={index} className="p-2 flexcenter">
          <Answercard answer={answer} />
        </div>
      ))}
      {totalPageCount > 1 && (
        <div className="flex justify-between">
          <button className="bg-blue-800 text-white font-bold border-2 border-blue-900 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
            onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
          <button className="bg-blue-800 text-white font-bold border-2 border-blue-900 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
            onClick={handleNextPage} disabled={currentPage === totalPageCount - 1}>Next</button>
        </div>
      )}
    </div>
  );
};

export default AnswersSlideshow;
