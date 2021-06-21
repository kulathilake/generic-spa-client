import { routes } from "./app/routes";
import MainRoutes from "./common/components/routes/MainRoutes";

function App() {

  return (
    <div className="App">
      Hello
        <MainRoutes routes={routes} redirect='/login'/>
    </div>
  );
}

export default App;
