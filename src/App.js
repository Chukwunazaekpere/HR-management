import UnrestrictedRoutes from "./Components/React/Routes/UnrestrictedRoutes";
import RestrictedRoutes from "./Components/React/Routes/RestrictedRoutes";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <UnrestrictedRoutes />
        <RestrictedRoutes />
      </Router>
    </div>
  );
}

export default App;
