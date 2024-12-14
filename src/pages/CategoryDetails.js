import React from "react";
import { Link } from "react-router-dom";

function CategoryDetails() {
    return (
        <div>
            <h1>Category Name</h1>
            <Link to="/">Go back to Home</Link>
            <div>
            <button>Create Post</button>
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
