import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "../pages/Books";
import Categories from "../pages/Categories";
import Libraries from "../pages/Libraries";
import RentBooks from "../pages/RentBooks";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/books" element={<Books />}/>
                <Route path="/admin/categories" element={<Categories />}/>
                <Route path="/admin/libraries" element={<Libraries />}/>
                <Route path="/admin/rent-books" element={<RentBooks />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router