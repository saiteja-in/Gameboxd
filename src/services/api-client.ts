import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"1c3120c8c2c14e8bad2bb9d1187bbca6"
    }
})