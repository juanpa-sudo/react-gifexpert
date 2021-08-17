import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  getGifs(category).then((img) => {
    setTimeout(() => {
      setstate({
        data: img,
        loading: false,
      });
    }, 500);
  });

  return state;
};

export default useFetchGifs;
