import { useAuth } from "../../../app/hooks";

export default function DashboardTopMenu(){
    const { isAuthenticated } = useAuth();
    return (
        <nav>
            <div>
                <img src="" alt="outreach logo"/>
            </div>
            <ul>
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