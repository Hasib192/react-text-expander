import Header from "./components/header/Header";
import TextExpander from "./components/textExpander/TextExpander";
import data from "./data/data";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <TextExpander displayText={data[0]} collapseNumeberWords={20} />
        </div>
        <hr />
        <div className="row">
          <TextExpander displayText={data[1]} collapseNumeberWords={10} />
        </div>
        <hr />
        <div className="row">
          <TextExpander displayText={data[2]} collapseNumeberWords={15} />
        </div>
        <hr />
        <div className="row">
          <TextExpander displayText={data[3]} collapseNumeberWords={5} />
        </div>
        <hr />
        <div className="row">
          <TextExpander displayText={data[4]} collapseNumeberWords={5} />
        </div>
      </div>
    </>
  );
}

export default App;
