export const getGifs = async (category) => {
  const key = 'X4ZiZsdfqKNBDr92FF6D68ZTe1M3IIwB';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=20&api_key=${key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
