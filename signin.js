function myFunction() {
    var x = document.getElementById("sign-in");
    if (x.className === "sign-in-form") {
      x.className += " responsive";
    }
     else {
      x.className = "sign-in-form";
    }
  }
  
  var people= [{
    studentId:"2345",
    password :"12345"
}, {
  studentId:"6789",
  password :"12345"
},


]

function login(){
  var studentId = document.getElementById("user").value
  var password = document.getElementById("password").value
  for(i=0; i< people.length; i++){
      if(studentId == people[i].studentId && password == people[i].password){
      
          window.location = "home.html";
          alert ("You are successfully logged in.");
    
  }
  else {
    alert ("invalid student ID or password");
      
  }
}
}
var signup = new Array();

function register(){
   
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
}
//create ccokies
window.onload=function()
{
	var username = document.getElementById('username').value;
	var button = document.getElementById('login');
	button.onclick = function()
	{
		setCookie('username',username,1);
		window.location.href="home.html";
	}
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
}
