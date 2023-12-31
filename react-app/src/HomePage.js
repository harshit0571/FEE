import Component from "./component/Component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";

const HomePage = () => {
  return (
    <div className="App">
      <Header />
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
};

export default HomePage;
