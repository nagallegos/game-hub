import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'aafa2ff01c394e0989552bdfa1143a2e'
  }
})