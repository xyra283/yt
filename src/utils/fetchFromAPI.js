import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/captions",
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "33d3d801e4msh64bbc771791b885p15d83cjsneab765dc52f5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
