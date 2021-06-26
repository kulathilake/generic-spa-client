/* eslint-disable react-hooks/exhaustive-deps */
import { routes } from "./app/routes";
import MainRoutes from "./common/components/routes/MainRoutes";
import firebase from './app/firebase';
import { useEffect } from "react";
import { useAuth } from "./app/hooks";
import { Roles } from "./common/types/auth";

// Initialize Firebase App.
const app = firebase();

function App() {
  const {setIsAuthenticated, setUser} = useAuth();
  
  useEffect(()=>{
    app.auth().onAuthStateChanged(async (user)=>{
      if(user){
        setIsAuthenticated(true);
        setUser({
          username: user.email!,
          role: Roles.BOTH,
          permissions:[],
          tokens: {
            accessToken: {
              data: await user.getIdToken()
            },
            refreshToken: {
              data: user.refreshToken
            }
          }
        })
      }
    })
  },[]);

  return (
    <div className="App">
        <MainRoutes routes={routes} redirect='/login'/>
    </div>
  );
}

export {app as firebase};
export default App;
