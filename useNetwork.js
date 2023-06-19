import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
