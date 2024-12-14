import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Posts for you</h1>
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

