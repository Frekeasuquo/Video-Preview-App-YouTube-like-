import React, { useState } from "react";

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch}) => {

    const [input, setInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInput(val);
        if (val.length >= 3) onSearch(val);
    }

    return (
        <input 
            type="text"
            placeholder="Search Videos..."
            value={input}
            onChange={handleChange}
            className="p-2 border rounded w-full mb-4"
        />
    )
}

export default SearchBar;