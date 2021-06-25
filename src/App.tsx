import { routes } from "./app/routes";
import MainRoutes from "./common/components/routes/MainRoutes";
import firebase from './app/firebase';

// Initialize Firebase App.
const app = firebase();

function App() {

  return (
    <div className="App">
        <MainRoutes routes={routes} redirect='/login'/>
    </div>
  );
}

export {app as firebase};
export default App;
