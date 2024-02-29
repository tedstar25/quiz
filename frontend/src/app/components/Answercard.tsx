
interface AnswercardProps {
    answer: string;
  }
  
    const Answercard: React.FC<AnswercardProps> = ({ answer }) => {



    return (

        <div className="w-full mx-auto h-full  ">
            <div className="flexcenter  h-[100%] animate-shimmer rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                {answer}
                </h2>
            </div>
        </div>
        );
        }

    export default Answercard;


