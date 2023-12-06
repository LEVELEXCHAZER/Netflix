import axios from "axios";

// create an instance with baseurl
const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default instance