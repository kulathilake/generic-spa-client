import { AuthProvider } from "./providers";
import { AuthenticatedUser, User } from "./user";

export interface IAuthApi {
     /**
     * Performs User Signup with email and password
     * @param email string
     * @param password string
     */
      signup(email:string, password: string): Promise<User>,
      /**
       * Performes Federated User Sign Up
       * @param provider AuthProvider
       */
      federatedSignup(provider: AuthProvider): Promise<User>,
      /**
       * Performs user Login with email and password.
       * @param email string
       * @param password string
       */
      login(email: string, password: string): Promise<User>,
      federatedLogin(provider: AuthProvider): Promise<User>
      logout():void,
      reset(email: string): Promise<any>,
      resetConfirm(email: string, code: string): Promise<any>,
      confirmEmail(code:string,email:string): Promise<any>,
      refresh(token: string): Promise<any>,
      changePassword(oldPassword: string, newPassword: string): Promise<any>
      getUser(): User,
    //   getUserProfile(): UserProfile;
      getSession(): any;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value:boolean) => void;
  user: AuthenticatedUser | null;
  setUser: (user:AuthenticatedUser) => void;
}

export enum Permissions {
  
}

export enum Roles {
  CREATOR,
  SELLER,
  BOTH,
  ADMIN
}
