import Header from "./Header"
import InputData from "./InputData"
import TableData from "./TableData"

import { useState } from "react";

function App() {
  
  const [results, setResults] = useState([]);

  return (
    <>
      <Header title='React Investment Calculator'/>
      <InputData setResults={setResults}/>
      <TableData results={results}/>
    </>
  )
}

export default App
