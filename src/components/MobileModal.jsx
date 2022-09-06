import { challenges } from "../utils/challenges";
import ChallengeComponent from "../components/ChallengeComponent";

const MobileModal = ({
  mobileModal,
  setInstruction,
  setCode,
  setMobileModal,
}) => {
  return (
    <>
      {mobileModal && (
        <div className="fixed top-0 right-0 w-full h-full flex justify-center z-30 bg-white">
          <div className="w-full overflow-y-auto">
            <div className="flex flex-col w-full">
              {challenges.map((challenge, i) => (
                <ChallengeComponent
                  key={i}
                  title={challenge.title}
                  rating={challenge.rating}
                  description={challenge.description}
                  instructions={challenge.instructions}
                  setInstruction={setInstruction}
                  setCode={setCode}
                  setMobileModal={setMobileModal}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileModal;
