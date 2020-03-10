const http = require('./index')

const input = {
    domain: "http://99.79.143.29",
    path:"api/busstop",
    params: {
        route: "100",
        agency: "ttc",
        latitude: 43.7179499,
        longitude: -79.33338
    }
}
asyncCall(input)

async function asyncCall(input) {
    let result = await http(input)
    console.log(result.data)
    console.log(result.timeInMilisec + " miliseconds");
    console.log(result.httpHeader)
}