const baseUrl = "https://localhost:443/webapi";
import Axios from 'axios'

function login(admin,password) {
    Axios
    .post(baseUrl + "/login")
    .then(response => {
        console.log(response);
    })
}