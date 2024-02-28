
import Card from "../Card";


const Answers: React.FC = () => {




  return (
    <div className="h-[60vh]">

      <div className="h-1/5 border-white" >
        Joker
      </div>

      <div className="h-4/5 flex flex-col">
        <div className="flex-grow">
          <Card/>
        </div>
        <div className="flex-grow">
          <Card/>
        </div>
        <div className="flex-grow">
          <Card/>
        </div>
        <div className="flex-grow">
          <Card/>
        </div>
      </div>

    </div>

  );
}

export default Answers;