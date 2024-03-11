import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["avatar "]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);

    console.log(newCategory);
  };

  return (
    <>
      <h1> GifExpertApp</h1>

      <AddCategory onNewCaregory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category} />
        ))}
      </ol>
    </>
  );
};
