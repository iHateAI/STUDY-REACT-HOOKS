import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const triggerNotif = useNotification("Can i", {
    body: "i love kimchi don't you?"
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
