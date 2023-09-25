import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Component from "./component/Component";

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <Component
        name="Harshit"
        university="Chitkara University"
        rollNo="2110990571"
        batchSize="78"
        batchName="g9"
        login={true}
      />
    </div>
  );
}

export default App;
