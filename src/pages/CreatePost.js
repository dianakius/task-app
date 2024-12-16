import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CreatePost() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(status);
    }, []);

    return (
        <div>
            <h1>Create Your Post</h1>

            {isLoggedIn ? (
                <form>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" required />
                    </div>
                    <div>
                        <label htmlFor="text">Text:</label>
                        <textarea id="text" name="text" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit Post</button>
                </form>
            ) : (
                <p>
                    You are not logged in to create a post. Please <Link to="/login">log in</Link>.
                </p>
            )}

            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default CreatePost;
