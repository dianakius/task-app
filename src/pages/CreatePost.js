import React from "react";
import { Link } from "react-router-dom";

function CreatePost() {
    return (
        <div>
            <h1>Create Your post</h1>
            
            <p>
             You are not logged in to create a post. Please <Link to="/login">log in</Link>.
            </p>
            
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default CreatePost;