import { AuthenticatedUser, User, UserAccount } from "../../../common/types/user";
import { IAuthApi, Roles } from "../../../common/types/auth";
import {firebase} from '../../../App';

export default class AuthApi implements IAuthApi{
    private static instance: AuthApi | null;
    static getApi() {
        if(this.instance) {
            return this.instance;
        } else {
            return new AuthApi();
        }
    };
    
    private constructor() {}
;

    /**
     * Let's a user sign up with email and password
     * @param email 
     * @param password 
     */
    async signup(email: string, password: string, name: string, role: Roles): Promise<AuthenticatedUser> {
        try {
            const authRes = await firebase.auth().createUserWithEmailAndPassword(email,password);
            return {
                username: authRes.user?.email!,
                tokens: {
                    accessToken: {
                        data: await authRes.user?.getIdToken()!
                    },
                    refreshToken: {
                        data: authRes.user?.refreshToken!
                    }
                }
            }
        } catch (e) {
            throw e;
        }
    }
    federatedSignup(provider: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
    /**
     * Logs in a user with email and passowrd
     * @param email string
     * @param password string
     * @returns User
     */
    async login(email: string, password: string): Promise<AuthenticatedUser> {
        try{
            const authRes = await firebase.auth().signInWithEmailAndPassword(email,password);
            return {
                username: authRes.user?.email!,
                tokens: {
                    accessToken: {
                        data: await authRes.user?.getIdToken()!
                    },
                    refreshToken: {
                        data: authRes.user?.refreshToken!
                    }
                }
            };
        }catch(e){
            throw e;
        }
    }
    
    federatedLogin(provider: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async logout(): Promise<void> {
        try{
            await firebase.auth().signOut();
        }catch(e){
            throw e;
        }
    }
    reset(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    resetConfirm(email: string, code: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    confirmEmail(code: string, email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    refresh(token: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    changePassword(oldPassword: string, newPassword: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    /**
     * Fetch User Account Information for the current Authenticated User.
     */
    getUserAccount(): Promise<UserAccount> {
        throw new Error("Method not implemented.");
    }
    /**
     * Sets User Account details for the current Authenticated User.
     * @param data 
     */
    setUserAccount(data: UserAccount): Promise<UserAccount> {
        throw new Error("Method not implemented.");
    }
    
    
}
