 const url = ''

 // Fetch is a promise .then(gives a callback) specifies what you need to do with the response of async call 
 // and you can chain .then which is better than callback hell
 fetch(url)
 .then(function (res) {
     return res.json()
 })
 .then(function (json) {
     return ({
         importantData: json.importantData,
     })
 })
 .then(function (data) {
     console.log(data)
 })
 .catch(function (error) {
     // Handle error
 })