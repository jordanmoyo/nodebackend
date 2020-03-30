import axios from 'axios';

export default axios.create({
    baseURL : "https://tutorial-demo.herokuapp.com" || "http://localhost:3000/api",
    headers : {
        "Content-type"  : "application/json"
    }
});