import { Roles } from "../../../common/types/auth";
import { User } from "../../../common/types/user";

export interface AuthWrapperProps{
    setAlert: () => void;
    onLogin: (email: string, password: string) => Promise<void>;
    onSignup: (name: string, email: string, password: string, role: Roles) => Promise<void>;
  }
  
  export interface LoginViewProps extends AuthWrapperProps{
      variant?: 'page' | 'modal' | 'dropdown';
      social?: {
          google?: boolean
          facebook?: boolean;
          github?: boolean;
      }
  }
  
  export interface SignupViewProps extends LoginViewProps{
      
  }

  export type AuthState = {
      session?: {
          loggedInAt: Date;
          user: User;
        },
  }