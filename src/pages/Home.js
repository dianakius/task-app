import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(status);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        setIsLoggedIn(false);

        navigate("/login");
    };

    return (
        <div>
            <h1>Posts for you</h1>

            {isLoggedIn ? (
                <div>
                    <p>Welcome back, {localStorage.getItem("userEmail")}</p>
                    <button onClick={handleLogout}>Logout</button>
                    <p>You now have extra options since you're logged in:</p>
                </div>
            ) : (
                <p>
                    You are not logged in. Please <Link to="/login">log in</Link>.
                </p>
            )}

            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/category-details">Category Details</Link></li>
                    <li><Link to="/create-post">Create Post</Link></li>
                    <li><Link to="/post-details">Post Details</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;


