import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Progress Bar</h1>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="progress-text">{progress}%</p>
    </div>
  );
}
