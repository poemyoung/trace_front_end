const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
const formatTime = (time) => {
    let date = new Date(time);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

export default {
    formatTime: formatTime
}