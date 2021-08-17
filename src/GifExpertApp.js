import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GridGif from "./Components/GridGif";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch Man"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <ol>
        {categories.map((category) => {
          return <GridGif key={category} category={category}></GridGif>;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;
