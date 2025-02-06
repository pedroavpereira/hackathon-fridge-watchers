import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewItemForm from "./Components/NewItemForm";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
