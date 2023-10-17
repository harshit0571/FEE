import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

export default App;
