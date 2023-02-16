$(document).ready(function () {
    const APIKEY = "63d9e11e3bc6b255ed0c4501";
    getContacts();
  
    $("#start").on("click", function (e) {
      e.preventDefault();

      let username = $("#Username").val();
      let email = $("#Email").val();
      let password = $("#Password").val();

      let jsondata = {
        "username": username,
        "email": email,
        "password": password,
      };
  
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ipdatabase-c329.restdb.io/rest/signupinfo ",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
      }

      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#start").prop( "disabled", false);
        getContacts();
        window.location.assign('Loading.html');
      });
    });

    function getContacts(limit = 10, all = true) {
    
      let settings = {
       "async": true,
       "crossDomain": true,
       "url": "https://ipdatabase-c329.restdb.io/rest/signupinfo ",
       "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
       },
     }
   }
})