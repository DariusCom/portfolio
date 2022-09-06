import { useState } from "react";
import ChallengeComponent from "../components/ChallengeComponent";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeUtils } from "../utils/codeBlocks";
import { challenges } from "../utils/challenges";

const DesktopAlgorithms = () => {
  const [instruction, setInstruction] = useState(challenges[0]["instructions"]);
  const [code, setCode] = useState(0);

  return (
    <div id="algorithms" className="flex h-[700px]">
      <div className="bg-[#111b27] text-white flex flex-col items-center h-full w-[20%] laptop:w-[25%]">
        <h2 className="w-full text-center text-3xl py-10 font-bold border-b-2 border-white border-opacity-20">
          Challenges
        </h2>
        <div className="flex flex-col overflow-y-auto scrollbar w-full">
          {challenges.map((challenge, i) => (
            <ChallengeComponent
              key={i}
              title={challenge.title}
              rating={challenge.rating}
              description={challenge.description}
              instructions={challenge.instructions}
              setInstruction={setInstruction}
              setCode={setCode}
              index={i}
            />
          ))}
        </div>
      </div>
      <div className=" bg-[#111b27] text-white flex flex-col items-center h-full w-[80%] laptop:w-[75%]">
        <div className="h-[17%] flex justify-center items-center border-b-2 border-white border-opacity-20 w-full">
          <h2 className="text-3xl font-bold">Codewars Algorithms</h2>
        </div>
        <div className="w-full h-[83%] flex">
          <div className="h-full w-[45%] prose bg-[#111b27] prose-headings:text-white prose-p:text-white prose-a:text-blue-500 prose-code:bg-[#1f2937] prose-code:text-white prose-strong:text-white prose-strong:font-bold overflow-y-auto scrollbar text-white px-10 py-6 laptop:w-1/2">
            <ReactMarkdown children={instruction} />
          </div>
          <div className="w-[55%] bg-[#111b27] overflow-y-auto scrollbar h-full border-l-2 border-white border-opacity-20 laptop:w-1/2">
            <SyntaxHighlighter
              customStyle={{ backgroundColor: "#111b27", margin: 0 }}
              language="javascript"
              style={coldarkDark}
            >
              {codeUtils[code]}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAlgorithms;
