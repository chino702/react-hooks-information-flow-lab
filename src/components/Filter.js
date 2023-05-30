import React from "react";

function Filter({ onCategoryChange }) {
    const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
    };

    return(
        <div className="Filter">
            <select name="fileter" onChange={handleCategoryChange}>
                <option value="">Filter by category</option>
                <option value="produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
}

export default Filter;