import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CsvDataComponent from "./CsvDataComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Reading Csv :   <small>
        <a href="https://support.staffbase.com/hc/en-us/article_attachments/360009197091/email-password-recovery-code.csv">
          {" "}
          This csv file{" "}
          
        </a>
      
      </small> </h1>
    
      <a href="https://ibb.co/WnMYQCG"><img src="https://i.ibb.co/tBvWSRQ/csv-ss.jpg" alt="csv-ss" border="0"/></a>
      <CsvDataComponent />
    </>
  );
}

export default App;
