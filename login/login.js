import styles from './login.css'; 

function Login() {
    return (
        <div className="formContainer">
            <form className="form">
                <h1 className="title">Sign in with email</h1>
                <p className="subtitle">Make a new doc to bring your words, data, and teams together. For free</p>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>

                <a href="#" className="forgot-password">Forgot password?</a>

                <input type="submit" value="Get Started" className="submitButton"/>

                
            </form>
        </div>
    );
}



export default Login;