import { useAuth } from "../../../app/hooks"

export default function LandingPageMenu(){
    const {isAuthenticated} = useAuth();
    return (
        <nav>
            <div>
                <img src="" alt="outreach logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
            <div>
                <ul>
                {isAuthenticated?
                <>
                <li>Account</li>
                <li><a href="/logout">Logout</a></li>
                </>:
                <li><a href="/login">Login</a></li>
                }
            </ul>
            </div>
        </nav>
    )
}