import React from "react";
import SearchStyled from "../ui/SearchStyled";

const Search: React.FC = () => {
    return (
        <SearchStyled>
            <div className="icon">
                🔎
            </div>
            <input type="text" />
        </SearchStyled>
    )
}

export default Search
