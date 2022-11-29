import React, { Dispatch, SetStateAction } from "react";
import SearchStyled from "../ui/SearchStyled";

type SearchProps = {
    filterValues:string
    setFilterValues: Dispatch<SetStateAction<string>>
}

const Search: React.FC<SearchProps> = (props) => {
    return (
        <SearchStyled>
            <div className="icon">
                🔎
            </div>
            <input 
                type="text" 
                onChange={(event) => props.setFilterValues(event.target.value)} 
                value={props.filterValues} />
        </SearchStyled>
    )
}

export default Search
