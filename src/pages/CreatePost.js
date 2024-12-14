import React from "react";
import { Link } from "react-router-dom";

function CreatePost() {
    return (
        <div>
            <h1>Create Your post</h1>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default CreatePost;