export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PRTnhiH22jFJE8GOhRGLFIFL0Sli7U0K&q=${encodeURI(
    category
  )}&limit=9`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map((image) => {
    return {
      id: image.id,
      title: image.title,
      url: image.images?.downsized_medium.url,
    };
  });
  return gifts;
};
