import Search from "./Search";
import Update from "./Update";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Coworking Booking System</h2>
      </nav>

      <div className="container">
        <Search />
        <Update />
      </div>
    </div>
  );
}

export default App;