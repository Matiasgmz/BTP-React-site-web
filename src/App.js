import React from "react";
import "./app.css";
import CreateArticle from "./CreateArticle";
import { Routes, Route, Router, Outlet, Link } from 'react-router-dom';
import ReadArticles from "./ReadArticles";
import UpdateArticle from "./UpdateArticles";
import LoginPage from "./LoginPage";
import NavbarHeader from "./NavbarHeader";



function App() {
    return (
        <div className="api-index-title">
            <NavbarHeader />
            <Routes>
                <Route exact path='/createArticle' element={<CreateArticle />} />
                <Route exact path='/readArticles' element={<ReadArticles />} />
                <Route exact path='/updateArticle' element={<UpdateArticle />} />
                <Route exact path='/loginPage' element={<LoginPage />} />
                <Route exact path='/Nav' element={<NavbarHeader />} />
            </Routes>
        </div>
    )
}
export default App
