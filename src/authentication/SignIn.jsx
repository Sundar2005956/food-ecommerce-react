
import { useState } from "react";
import "../pages/styles.css";
import { Link, useNavigate } from "react-router-dom";

function SignIn({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navi = useNavigate();

    function Login(e) {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Please enter both Email and Password");
            return;
        }

        let user = JSON.parse(
            localStorage.getItem("Users") || "[]"
        );

        let value = user.find(
            (u) =>
                u.email === email.trim() &&
                u.password === password
        );

        if (value) {
            alert("Login successful");
            setIsLoggedIn(true);
            navi("/");
        } else {
            alert("Invalid Email or Password");
        }
    }

    return (
        <div
            style={{minHeight: "100vh",width: "100%",backgroundImage:"linear-gradient(to right, #9B2A62, #C057C7, #EDDD53)",overflow: "auto"}}
        >
            <form className="signin" onSubmit={Login}>
                <h2>WELCOME</h2>

                <div className="label">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email"value={email}onChange={(e) => setEmail(e.target.value)}required
                    />
                </div>

                <div className="label">
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" value={password}onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <button type="submit">Submit</button>

                <Link to="/signup" id="clickme">
                    Don't have an account? Click Me
                </Link>
            </form>
        </div>
    );
}

export default SignIn;
