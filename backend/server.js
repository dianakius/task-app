const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const postsFilePath = path.join(__dirname, "data", "posts.json");

const readPosts = () => {
    const data = fs.readFileSync(postsFilePath, "utf-8");
    return JSON.parse(data);
};

const writePosts = (posts) => {
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

app.get("/", (req, res) => {
    res.send("Backend is running!");
});


app.get("/api/posts", (req, res) => {
    try {
        const posts = readPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error reading posts" });
    }
});

app.get("/api/posts/:id", (req, res) => {
    try {
        const posts = readPosts();
        const post = posts.find((p) => p.id === parseInt(req.params.id));
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error reading posts" });
    }
});

app.post("/api/posts", (req, res) => {
    try {
        const posts = readPosts();
        const newPost = {
            id: posts.length + 1, 
            ...req.body,
            datePublished: new Date().toISOString().split("T")[0],
        };
        posts.push(newPost);
        writePosts(posts);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
    }
});

app.put("/api/posts/:id", (req, res) => {
    try {
        const posts = readPosts();
        const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
        if (postIndex !== -1) {
            posts[postIndex] = { ...posts[postIndex], ...req.body }; 
            writePosts(posts);
            res.json(posts[postIndex]);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating post" });
    }
});

app.delete("/api/posts/:id", (req, res) => {
    try {
        const posts = readPosts();
        const filteredPosts = posts.filter((p) => p.id !== parseInt(req.params.id));
        if (posts.length !== filteredPosts.length) {
            writePosts(filteredPosts);
            res.json({ message: "Post deleted" });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting post" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
