
import { useState } from "react";
import "../pages/styles.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navi = useNavigate();

    function handleSignup(e) {
        e.preventDefault();

        // Check empty fields
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert("Please fill in all fields");
            return;
        }

        // Get registered users
        let user = JSON.parse(
            localStorage.getItem("Users") || "[]"
        );

        // Check whether email already exists
        let existingUser = user.find(
            (u) => u.email.toLowerCase() === email.trim().toLowerCase()
        );

        if (existingUser) {
            alert("This email is already registered");
            return;
        }

        // Create new user
        let obj = {
            name: name.trim(),
            email: email.trim(),
            password: password
        };

        user.push(obj);

        localStorage.setItem("Users", JSON.stringify(user));

        alert("Registration successful");
        navi("/signin");
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                backgroundImage:
                    "linear-gradient(to right, #9B2A62, #C057C7, #EDDD53)",
                overflow: "auto"
            }}
        >
            <form className="signup" onSubmit={handleSignup}>
                <h2>WELCOME</h2>

                <div className="label">
                    <label htmlFor="name">UserName</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="label">
                    <label htmlFor="email">Email ID</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="label">
                    <label htmlFor="pswd">Password</label>
                    <input
                        type="password"
                        id="pswd"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </div>

                <button type="submit">Submit</button>

                <Link to="/signin" id="clickme">
                    Already have an account? Click Me
                </Link>
            </form>
        </div>
    );
}

export default Signup;
