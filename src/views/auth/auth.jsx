import './auth.css'
import { Link } from 'react-router-dom'

const AuthPage = () => {
    return(
            <div className="auth-container container">
                <div className="auth-text-container">
                    <h1>IronProfile</h1>
                    <p>Today we will create an app <br/> with authoritation adding <br/> some cool styles!</p>
                </div>
                <div className="auth-buttons-container">
                    <Link className="btn btn-primary" to="/register">Sign up</Link>
                    <Link className="btn btn-primary mt-3" to="/login">Log in</Link>
                </div>
            </div>
    )
}

export default AuthPage