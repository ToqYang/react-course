export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=dBB2FlZXNiWnrTrydZ3adtlWV3Qti8jQ`;

  const resp = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    redirect: "follow",
  });
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(gifs);
  return gifs;
};
