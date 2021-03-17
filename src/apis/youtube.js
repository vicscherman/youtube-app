import axios from "axios";

const KEY = "AIzaSyABlYhBYwj-sPtd6D8p5mpD2dPx-JQdUgc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 10,
    key: KEY,
  },
});
