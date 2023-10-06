 function loadComments(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById('comments').innerHTML = '';
            var result = this.responseText;

            var results = JSON.parse(result);

            results.forEach((comment)=>
        {
            var node = document.createElement("div");
            var name = document.createElement("H5");
            var date = document.createElement("H6");
            var message = document.createElement("P");

            node.className = 'card-body';
            name.className = 'card-title';
            date.className = 'card-subtitle text-muted';

            var textName = document.createTextNode('Name:' + comment.userName);
            var textDate = document.createTextNode('Date:' +comment.date);
            var textMessage = document.createTextNode(comment.comment);

            name.appendChild(textName);
            date.appendChild(textDate);
            message.appendChild(textMessage);

            node.appendChild(name);
            node.appendChild(date);
            node.appendChild(message);

            document.getElementById('comments').appendChild(node);


        });
        }
    }

    xhttp.open("GET", "/home", true);
    xhttp.send();
}


function submit_feedback(str) {
  var xhttp;  
  if (str == "") {
    document.getElementById("feedback").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("feedback").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", ""+str, true);
  xhttp.send();
}


function submit_booking_form()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
        var result = this.responseText;
        console.log("ok");
        //loadComments();
        } 
    }

    var name = document.getElementById('m_name').value;
    var contact = document.getElementById('m_contact').value;
    console.log(name);
    console.log(contact);
    
    xhttp.open("POST", "/ambulance.html", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"name":"'+name+'", "contact":"'+contact+'"}');
    alert("Hello! I am an alert box!!");
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function submit_query()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
        var result = this.responseText;
        console.log("ok");
        //loadComments();
        } 
    }

    var name = document.getElementById('q_name').value;
    var email = document.getElementById('q_email').value;
    var query = document.getElementById('query').value;
    console.log(name);
    console.log(email);
    console.log(query);
    
    xhttp.open("POST", "/contact-us.html", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"name":"'+name+'", "email":"'+email+'", "query":"'+query+'"}');
    
    }

function validateForm1() {
  var x = document.forms["myForm1"]["b_name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
    else{
        var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
        var result = this.responseText;
        console.log("ok");
        //loadComments();
        } 
    }

    var name = document.getElementById('b_name').value;
    var contact = document.getElementById('b_contact').value;
    //var date = document.getElementById('b_date').value;    
    console.log(name);
    console.log(contact);
    //console.log(date);
        
    xhttp.open("POST", "/ambulance.html", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"name":"'+name+'", "contact":"'+contact+'"}');
    }
}
function validateForm2() {
  var x = document.forms["myForm2"]["a_name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
    else{
        var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
        var result = this.responseText;
        console.log("ok");
        //loadComments();
        } 
    }

    var name = document.getElementById('a_name').value;
    var contact = document.getElementById('a_contact').value;
    //var date = document.getElementById('a_date').value; 
    console.log(name);
    console.log(contact);
    
    xhttp.open("POST", "/ambulance.html", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"name":"'+name+'", "contact":"'+contact+'"}');
    }
}
function validateForm3() {
  var x = document.forms["myForm3"]["m_name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
    else{
        var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
        var result = this.responseText;
        console.log("ok");
        //loadComments();
        } 
    }

    var name = document.getElementById('m_name').value;
    var contact = document.getElementById('m_contact').value;
    //var date = document.getElementById('m_date').value; 
    console.log(name);
    console.log(contact);
    
    xhttp.open("POST", "/ambulance.html", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"name":"'+name+'", "contact":"'+contact+'"}');
    }
}

