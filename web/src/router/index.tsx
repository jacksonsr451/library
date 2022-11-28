import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "../pages/books";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/books" element={<Books />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router