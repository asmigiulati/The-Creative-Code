// define access parameters
var accessToken = '025377baf253b8e37af6bdbd8683c05a';
var endpoint = '50bf7da9.compilers.sphere-engine.com';
fetch('https://api.compilers.sphere-engine.com/api/v4/submissions', {
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "025377baf253b8e37af6bdbd8683c05a"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))





