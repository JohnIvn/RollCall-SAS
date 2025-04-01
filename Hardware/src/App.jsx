import { BrowserRouter as Router } from "react-router-dom";
import PageRouter from "./Router";
import "./App.css";

function App() {
  return (
    <Router>
      <PageRouter />
    </Router>
  );
}

export default App;
