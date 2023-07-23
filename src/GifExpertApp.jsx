
import React, { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball', 'Digimon'])

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([...categories, value])
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