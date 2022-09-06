import { useState, useEffect } from "react";
import ChallengeComponent from "../components/ChallengeComponent";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeUtils } from "../utils/codeBlocks";
import { withResizeDetector } from "react-resize-detector";
import { challenges } from "../utils/challenges";
import DesktopAlgorithms from "../components/DesktopAlgorithms";
import MobileAlgorithms from "../components/MobileAlgorithms";

const Algorithms = ({ width, height }) => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    setDevice(width > 768 ? "desktop" : "mobile");
  }, [width]);

  return (
    <div>
      {device === "desktop" ? <DesktopAlgorithms /> : <MobileAlgorithms />}
    </div>
  );
};

export default withResizeDetector(Algorithms);
