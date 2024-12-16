import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryDetails() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(status);
    }, []);

    return (
        <div>
            <h1>Category Name</h1>
            <Link to="/">Go back to Home</Link>
            <div>
                {}
                {isLoggedIn ? (
                    <Link to="/create-post">
                                            <button>Create New Post</button>
                                        </Link>
                ) : (
                    <p>
                        You are not logged in to create a post. Please <Link to="/login">log in</Link>.
                    </p>
                )}
            </div>
            <div>
                <h3>Filter Posts</h3>
            </div>
            <div>
                <h3>Posts in this Category</h3>
            </div>
        </div>
    );
}

export default CategoryDetails;