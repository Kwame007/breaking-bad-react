import "./App.css";
import "./index.css";
import Header from "./UI/Header";
import Characters from "./components/Characters";

function App() {
  return (
    <>
      <Header className={"center"} />
      <Characters className={"container"} />
    </>
  );
}

export default App;
