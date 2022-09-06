import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { challenges } from "../utils/challenges";
import { codeUtils } from "../utils/codeBlocks";
import MobileModal from "./MobileModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const MobileAlgorithms = () => {
  const [showInfo, setShowInfo] = useState("instructions");
  const [instruction, setInstruction] = useState(challenges[0]["instructions"]);
  const [code, setCode] = useState(0);
  const [mobileModal, setMobileModal] = useState(false);

  return (
    <>
      <MobileModal
        mobileModal={mobileModal}
        setInstruction={setInstruction}
        setCode={setCode}
        setMobileModal={setMobileModal}
      />
      <div id="algorithms" className="bg-slate-800 pt-24">
        <div
          className="bg-[#111b27] h-16 flex items-center justify-between pr-12 pl-6 text-lg w-2/3 text-white mb-12 sm:text-base lg:pl-4 lg:pr-6"
          onClick={() => setMobileModal(true)}
        >
          <p>Select Challenge</p>
          <FontAwesomeIcon size="xl" icon={faAnglesRight} />
        </div>
        <div>
          <div className="flex justify-around text-center text-white text-lg">
            <h3
              className={`cursor-pointer ${
                showInfo === "instructions" && "bg-[#111b27]"
              } w-1/2 py-3`}
              onClick={() => setShowInfo("instructions")}
            >
              Instructions
            </h3>
            <h3
              className={`cursor-pointer ${
                showInfo === "solutions" && "bg-[#111b27]"
              } w-1/2 py-3`}
              onClick={() => setShowInfo("solutions")}
            >
              My Solution
            </h3>
          </div>
          <div className="bg-[#111b27] flex justify-center">
            {showInfo === "instructions" ? (
              <div className="w-full overflow-x-auto pt-12 prose prose-headings:text-white prose-code:bg-[#1f2937] prose-p:text-white prose-a:text-blue-500 prose-li:text-white prose-code:text-white prose-strong:text-white prose-strong:font-bold">
                <ReactMarkdown children={instruction} />
              </div>
            ) : (
              <SyntaxHighlighter
                customStyle={{ margin: 0 }}
                language="javascript"
                style={coldarkDark}
              >
                {codeUtils[code]}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAlgorithms;
