
import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch'])

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories])
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={onAddCategory} />
            {categories.map(c => (
                <GifGrid key={c} category={c} />
            ))}
        </>
    )
}