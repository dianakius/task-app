import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category-details" element={<CategoryDetails />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/post-details" element={<PostDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

