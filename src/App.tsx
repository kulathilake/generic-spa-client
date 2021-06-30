/* eslint-disable react-hooks/exhaustive-deps */
import { routes } from "./app/routes";
import MainRoutes from "./common/components/routes/MainRoutes";
import firebase from './app/firebase';
import { useEffect } from "react";
import { useAuth } from "./app/hooks";

// Initialize Firebase App.
const app = firebase();

function App() {
  const {setIsAuthenticated, setUser, setIsAuthLoading} = useAuth();
  
  /**
   * This Effect Hook will wait for the Firebase onAuthStateChanged Listener
   * to provide information about current Authenticated User.
   * Furthermore, It will dispatch the AuthSlice Action to Fetch User Account Information
   * which includes, User Role, User Permissions, basic User information etc.
   */
  useEffect(()=>{
    app.auth().onAuthStateChanged(async (user)=>{
      if(user){
        setIsAuthenticated(true);
        setIsAuthLoading(false);
        setUser({
          username: user.uid,
          email: user.email!,
          tokens: {
            accessToken: {
              data: await user.getIdToken()
            },
            refreshToken: {
              data: user.refreshToken
            }
          }
        });
        // Dispatch Action to Get User Account Here.
        // The Action's reducer will set the Role and Permissions of the 
        // Current Authenticated User
        // TODO: Call Dispatch on FetchUserAccount Action.
      }else{
        setIsAuthLoading(false);
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
