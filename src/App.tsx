import Header from "./components/Header";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <List />
      </div>
    </div>
  );
}

export default App;
