import { useEffect } from "react";
import { useState } from "react";

const CodeComponent = ({ languages, language, setLanguage, multipleHello }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);
  const [text, setText] = useState("Hello");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % 13;
    let fullText = multipleHello[languages[i]];
    let updatedText = isDeleting
      ? fullText.substr(0, text.length - 1)
      : fullText.substr(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
      setLanguage((prevLanguage) => (prevLanguage + 1) % 13);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return <div>{text}</div>;
};

export default CodeComponent;
