import "./Styles/Theme.scss";
import Accueil from "./Components/Pages/Accueil";
import Project from "./Components/Pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useTheme from "./Components/ReactHook/SwitchTheme";
function App() {
  const theme = "light"; // or "light"
  useTheme(theme);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
