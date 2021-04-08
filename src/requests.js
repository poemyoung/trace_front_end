const base = "localhost:443"
const baseUrl = "https://"+base+"/webapi";
const httpsBase = "https://"+base;
import Axios from 'axios'
const imageLoad = baseUrl + "/imgpload";

const downLoadImages = arr => {
    return Axios
    .post(baseUrl + "/getimgs",{
        fileList : arr
    })
}

const articleDetail = aid => {
    return Axios
    .get(baseUrl + "/singlewo?aid=" + aid)
}
const mark = (aids,normal) => {
    let s = "";
    aids.map((id) => {
        s = s + id + ",";
    })
    s = s.substr(s,s.length-1);
    if(normal) {
        return Axios
        .get(baseUrl + "/mknormal?list="+s)
    }else{
        return Axios
        .get(baseUrl + "/mkbad?list="+s)
    }
}

const getAdminImage = images => {
    return images.map(image => {
        return httpsBase + image;
    })
}
const search = (livePlace,name,cardId,symptom) => {
    return Axios
    .post(baseUrl + "/search",{
        livePlace:livePlace,
        name:name,
        cardId:cardId,
        symptom:symptom
    })
}

export default {
    login(admin, pwd) {
        return new Promise(function (resolve, reject) {
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
    },
    adrsByDay(day) {
        return new Promise(function (resolve, reject) {
            Axios
                .get(baseUrl + "/dstb?date=" + day)
                .then(response => {
                    resolve(response);
                })
                .catch(response => {
                    reject(response);
                })
        })
    },
    allArticles() {
        return new Promise((resolve, reject) => {
            Axios
                .get(baseUrl + "/allwo")
                .then(response => {
                    resolve(response);
                })
                .catch(response => {
                    reject(response);
                })
        })
    },
    downLoadImages:downLoadImages,
    articleDetail: articleDetail,
    imageLoad : imageLoad,
    getAdminImage : getAdminImage,
    search:search,
    mark:mark
}