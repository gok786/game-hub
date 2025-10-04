import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2ed3445ebce44ff1b7f8cc7119bd151c",
  },
});
