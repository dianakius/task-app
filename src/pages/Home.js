import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(status);

        const fetchPosts = async () => {
            try {
                const response = await fetch("/data/posts.json");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        setIsLoggedIn(false);
    };

    return (
        <div>
            <h1>Posts for you</h1>

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
