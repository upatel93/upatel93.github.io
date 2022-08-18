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
        
        var content = document.getElementById('table');
        var data = jsObj.data;
        var name;

        var table = document.createElement('table');
        var tableCaption = document.createElement('caption');
        tableCaption.innerHTML = "Our Developers";
        table.append(tableCaption);
        var tableHeader = document.createElement('thead');
        var tableRow = document.createElement('tr');
        var tableCell1 = document.createElement('th');
        tableCell1.innerHTML = "Picture";
        var tableCell2 = document.createElement('th');
        tableCell2.innerHTML = "Name";
        var tableCell3 = document.createElement('th');
        tableCell3.innerHTML = "Email";
        tableRow.append(tableCell1);
        tableRow.append(tableCell2);
        tableRow.append(tableCell3);
        tableHeader.append(tableRow);
        table.append(tableHeader);
        content.append(table);
        var tableBody = document.createElement('tbody');
        for (var i of data){
            var tableRow = document.createElement('tr');
            name = i.first_name + " " + i.last_name;
            var tableCell2 = document.createElement('td');
            tableCell2.innerHTML = name;
            var img = document.createElement('img');
            img.src = i.avatar;
            img.alt = name + "-pic";
            var tableCell1 = document.createElement('td');
            tableCell1.append(img);
            var mail = document.createElement("a");
            mail.href = "mailto:"+i.email;
            mail.textContent = i.email;
            var tableCell3 = document.createElement('td');
            tableCell3.append(mail);
            tableRow.append(tableCell1);
            tableRow.append(tableCell2);
            tableRow.append(tableCell3);
            tableBody.append(tableRow);
         }

         table.append(tableBody);
        content.append(table);

      } else {
        alert('There was a problem with the request. May be caused by the "CORS" issue');
      }
    }
  }

  window.onload = makeRequest;