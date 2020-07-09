// npm install xmlhttprequest
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
// npm install node-fetch --save
const fetch = require("node-fetch")


// AJAX
console.log("\n AJAX")

let xhr = new XMLHttpRequest;
// create the XHR object
xhr.open('GET', 'https://api.github.com/users', true)
// call the open function, GET-type of request, url, async-true
xhr.onload = function () {
    // call the onload
    if (this.status === 200) {
        // check status
        console.log("AJAX")
        console.log(JSON.parse(this.responseText))
        // return the server response as an object
    }
}
// call send
xhr.send();
// console.log("\n FETCH API")
// FETCH API
fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => console.log(data))


// ASYNC/AWAIT
// console.log("\n ASYNC AWAIT")

async function getData() {
    let response = await fetch('https://api.github.come/users');
    let data = await response.json()
    return data;
}
getData().then(console.log("\n ASYNC AWAIT")).then(data => console.log(data))


