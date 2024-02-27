import MovingBorderButton from "./MovingBorderButton";

const Card: React.FC = () => {
    return (
        <div className="bg-white inline-block min-w-min p-1 rounded-full">
            <MovingBorderButton/>
        </div>
    );
  }
  
  export default Card;