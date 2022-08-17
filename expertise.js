var httpRequest;
var pg = 1;
function makeRequest() {
    var url = 'https://reqres.in/api/users?page='+ pg; 

    // make an HTTP request object
     httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Cannot create an XMLHTTP instance');
      return false;
    }
    
    // register a request listener
    httpRequest.onreadystatechange = showContents;
    // make the HTTP request 
    httpRequest.open('get', url, true);
    httpRequest.send();
  }

  function showContents() {
        
    // check for response state
    if (httpRequest.readyState === 4) {
      // check the response code
      if (httpRequest.status === 200) {
        // Javascript function JSON.parse to parse JSON data
        var jsObj = JSON.parse(httpRequest.responseText);

        console.log("jsObj: ", jsObj) // for debugging
        
        var content = document.getElementById('content');
        var data = jsObj.data;
        var name;

        for (var i of data){
            var div = document.createElement('div');
            name = i.first_name + " " + i.last_name;
            var nameText = document.createElement('h3');
            nameText.innerHTML = name;
            div.append(nameText);
            var img = document.createElement('img');
            img.src = i.avatar;
            img.alt = name + "-pic";
            div.append(img);
            var span = document.createElement('span');
            span.innerHTML = "<br>Email: ";
            div.append(span);
            var mail = document.createElement("a");
            mail.href = "mailto:"+i.email;
            mail.textContent = i.email
            div.append(mail);
            content.append(div);
         }
        



      } else {
        alert('There was a problem with the request. May be caused by the "CORS" issue');
      }
    }
  }

  function first(){
    pg = 1;
    content.innerHTML="";
    makeRequest();
  }
  function second(){
    pg = 2;
    content.innerHTML="";
    makeRequest();
  }

  window.onload = makeRequest;