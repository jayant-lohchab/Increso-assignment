import Header from "./components/Header";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="list-container">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
