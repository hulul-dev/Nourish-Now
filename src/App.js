import React,{useEffect} from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div>
      <Navbar />
      {/* The rest of your application content goes here */}
    </div>
  );
};

export default App;
