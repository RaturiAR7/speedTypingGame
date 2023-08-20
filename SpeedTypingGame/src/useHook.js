import { useEffect, useRef, useState } from "react";

const useHook = (STARTING_TIME = 10) => {
  const [input, setInput] = useState("");
  const [runGame, setRunGame] = useState(false);
  const [countDown, setCountDown] = useState(STARTING_TIME);
  const [wordCount, setWordCount] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    if (countDown > 0 && runGame) {
      setTimeout(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    } else {
      endGame();
    }
  }, [countDown, runGame]);

  function endGame() {
    setRunGame(false);
    countWords(input);
  }
  const startGame = () => {
    setRunGame(true);
    setCountDown(STARTING_TIME);
    setInput("");
    setWordCount(0);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const onchangeHandler = (e) => {
    setInput(e.target.value);
  };
  const countWords = (text) => {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    setWordCount(filteredWords.length);
  };
  return {
    input,
    runGame,
    countDown,
    wordCount,
    inputRef,
    startGame,
    onchangeHandler,
    countWords,
  };
};

export default useHook;
