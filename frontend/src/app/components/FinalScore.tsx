

interface FinalScoreScreenProps {
  score: number;
}

const FinalScore: React.FC<FinalScoreScreenProps> = ({ score }) => {
  return (
    <div>        
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          YOUR SCORE :{" "}
          <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {score}
          </span>
        </h1>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="bg-white hover:bg-gray-100 my-10 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}

export default FinalScore;
