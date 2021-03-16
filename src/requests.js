const baseUrl = "https://www.poemyoung.xyz/webapi";
import Axios from 'axios'

export default {
    login(admin, pwd) {
        return new Promise(function(resolve,reject){
            Axios
            .post(baseUrl + "/login", {
                name: admin,
                password: pwd
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(response => {
                reject(response);
            })
        })
    }
}