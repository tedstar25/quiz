"use client"

import useSWR from 'swr';
import Answercard from '../../Answercard';
import AnswersSlideshow from './AnswerSlideshow';



const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};

const exampledata = {
  "question": "What is the capital of France?",
  "answers": [
    "Paris",
    "London",
    "Berlin",
    "London",


  ]
}




const Yourfield: React.FC = () => {
  const { data, error } = useSWR('/api/getGamestate', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const isSlideShowNeeded = exampledata.answers.length > 4;

  console.log(data)

  return (

  <div className='h-full w-full flex  justify-center items-center flex-col'>
      <div className='h-1/5 '>
        <h1>oihwvfowehgvfpwejvp</h1>
      </div>

      <div className=" w-[100%] h-4/5">
      {0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 bg-purple h-full">
        <AnswersSlideshow answers={exampledata.answers} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-0 bg-purple h-full">
        {exampledata.answers.map((answer: string, index: number) => (
          <div key={index} className="p-2 sm:p-4 sm:px-6 md:p-6 flexcenter ">
              <Answercard answer={answer} />
          </div>
        ))}
        </div>
      )}
   

      


        </div>




  </div>
);};







export default Yourfield;    


{/*       {!data && (
  <div className="absolute inset-0 backdrop-filter backdrop-blur-sm z-10 flex justify-center items-center">
    <div className="w-96 h-96 bg-gray-300 opacity-50 rounded-lg"></div>
  </div>
)} */}