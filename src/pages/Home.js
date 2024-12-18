import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [posts, setPosts] = useState([]);

    console.log("Home component rendered");

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        console.log("Login status from localStorage:", status);
        setIsLoggedIn(status);

        const fetchPosts = async () => {
            try {
                console.log("Fetching posts from the backend...");
                const response = await fetch("http://localhost:3001/api/posts");
                console.log("Fetch response status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Posts fetched successfully:", data);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleLogout = () => {
        console.log("Logging out...");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        setIsLoggedIn(false);
    };

    return (
        <div>
            <h1>Posts for you</h1>

            {console.log("isLoggedIn state:", isLoggedIn)}

            {isLoggedIn ? (
                <div>
                    <p>Welcome back, {localStorage.getItem("userEmail")}</p>
                    <Link to="/login" onClick={handleLogout}>
                        <button>Logout</button>
                    </Link>
                    <p>You now have extra options since you're logged in:</p>
                    <Link to="/create-post">
                        <button>Create New Post</button>
                    </Link>
                </div>
            ) : (
                <p>
                    You are not logged in. Please <Link to="/login">log in</Link>.
                </p>
            )}

            <h2>Recent Posts</h2>

            {console.log("Posts state:", posts)}

            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.text}</p>
                            <p><strong>Category:</strong> {post.category}</p>
                            <p><strong>Date Published:</strong> {post.datePublished}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available.</p>
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
