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
                {isAuthenticated?
                "Account":
                <a href="/login">Login/Register</a>
                }
            </div>
        </nav>
    )
}