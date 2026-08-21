function DateTime(){
    const now = new Date()

    //standard time & date = 2026-08-21T09:32:00

    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()

    const dateTime = `${year}-${month}-${day}T${hour}:${minute}:${second}`

    return dateTime
}

module.exports = DateTime