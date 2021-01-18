import UnrestrictedRoutes from "./Components/React/Routes/UnrestrictedRoutes";
import RestrictedRoutes from "./Components/React/Routes/RestrictedRoutes";


function App() {
  return (
    <div className="App">
      <UnrestrictedRoutes />
      <RestrictedRoutes />
    </div>
  );
}

export default App;
