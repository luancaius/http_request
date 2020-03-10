const axios = require('axios');

async function request(input){
    let startTime, endTime;
    startTime = new Date();

    let response = {
        httpHeader:0,
        timeInMilisec:0,
        data:{}
    };

    const url=input.domain+"/"+input.path
    await axios.get(url, {
        params: input.params
      })
      .then(function (res) {
        response.data = res.data
        response.httpHeader = res.status
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
    endTime = new Date();
    response.timeInMilisec = endTime - startTime; 

    return response;
}

module.exports = request;