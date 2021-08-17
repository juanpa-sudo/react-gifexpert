import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import ImageGift from "./ImageGift";
import Loading from "./Loading";

function GridGif({ category }) {
  // const [image, setImage] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImage);
  // }, [category]);
  const { data: image, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="animate__animated animate__backInDown">{category}</h3>
      <div className="grid">
        {loading && <Loading></Loading>}
        {image.map((element) => (
          <ImageGift key={element.id} {...element}></ImageGift>
        ))}
        {/* <p>{loading ? "cargando" : "data es llena"}</p> */}
      </div>
    </>
  );
}

export default GridGif;
