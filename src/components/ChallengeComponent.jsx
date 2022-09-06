const colors = {
  1: "border-purple-700",
  2: "border-purple-600",
  3: "border-blue-600",
  4: "border-blue-500",
  5: "border-yellow-500",
  6: "border-yellow-400",
  7: "border-green-500",
  8: "border-green-400",
};

const ChallengeComponent = ({
  title,
  rating,
  description,
  instructions,
  setInstruction,
  setCode,
  index,
  setMobileModal,
}) => {
  const onClick = () => {
    setInstruction(instructions);
    setCode(index);
    setMobileModal(false);
  };

  return (
    <div
      onClick={onClick}
      className={`${
        index !== 0 && "border-t-2 border-white border-opacity-20"
      } w-full py-2 select-none cursor-pointer hover:bg-slate-600`}
    >
      <div className="flex justify-between px-3 relative">
        <p className="w-[85%] mb-3 laptop:mb-5">{title}</p>
        <p
          className={`bg-opacity-50 border-[3px] absolute right-2 top-1 px-1 py-2 rounded-full text-[0.7rem] laptop:top-0 ${colors[rating]}`}
        >
          {rating} Kyu
        </p>
      </div>
      <p className="text-[0.75rem] pl-3">{description.substr(0, 40)}...</p>
    </div>
  );
};

export default ChallengeComponent;
