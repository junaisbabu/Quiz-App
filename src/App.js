import "./App.css";
import { createContext, useState } from "react";
import { questions } from "./mcq/questions";
import Routing from "./pages/Routing";

export const context = createContext();

function App() {
  const [mcqQuestion, setMcqQuestion] = useState(questions[0]);

  return (
    <div className="app">
      <context.Provider value={[mcqQuestion, setMcqQuestion]}>
       <Routing />
      </context.Provider>
    </div>
  );
}

export default App;
