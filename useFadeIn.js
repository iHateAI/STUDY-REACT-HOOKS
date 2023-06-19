import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(2);
  const fadeInP = useFadeIn(5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>dflijaslfij3lisaj</p>
    </div>
  );
};

export default App;
