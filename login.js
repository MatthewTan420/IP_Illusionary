$(document).ready(function () {
    const APIKEY = "63d9e11e3bc6b255ed0c4501";
    $("#login").on("click", function (e) { 
      e.preventDefault();
      getContacts();
    });
    
    function getContacts(limit = 10, all = true) {

        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://ipdatabase-c329.restdb.io/rest/signupinfo",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
      }
      
      $.ajax(settings).done(function (response) {
  
        for (var i = 0; i < response.length && i < limit; i++) {

          let username = response[i].username
          let password = response[i].password
          let log_username = $("#Username").val();
          let log_password = $("#Password").val();

          if((username === log_username) && (password === log_password )){
            window.location.assign('Loading.html');
          } else {
            document.getElementById("user_info").style.visibility = "hidden";
            document.getElementById("error").style.visibility = "visible";
            document.getElementById("error").style.zIndex = "1";
          }
        }
      });
    }
  });