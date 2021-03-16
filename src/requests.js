const baseUrl = "https://localhost:443/webapi";
import Axios from 'axios'

export default {
    login(admin,pwd) {
        Axios
        .post(baseUrl + "/login",{
            name : admin,
            password : pwd
        })
        .then(response => {
            
            console.log(response);
        })
    }
}


