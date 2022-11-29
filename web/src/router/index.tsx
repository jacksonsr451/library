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
                <Route path="/books" element={<Books />}/>
                <Route path="/categories" element={<Categories />}/>
                <Route path="/libraries" element={<Libraries />}/>
                <Route path="/rent-books" element={<RentBooks />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router