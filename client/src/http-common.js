import axios from 'axios';

export default axios.create({
    baseURL : "https://tutorial-node-vue-mysql.herokuapp.com/api" || "http://localhost:3000/api",
    headers : {
        "Content-type"  : "application/json"
    }
});