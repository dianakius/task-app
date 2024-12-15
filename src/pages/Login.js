import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(""); 

    const navigate = useNavigate(); 

    const hardcodedUsers = [
        { email: "kiurious@gmail.com", password: "Kiurious1312" },
        { email: "eingidiana@gmail.com", password: "Dianakius1590" },
        { email: "testuser@example.com", password: "test123" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = hardcodedUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userEmail", user.email);

            navigate("/");
        } else {
            setError("Invalid email or password"); 
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>} {}
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default Login;
