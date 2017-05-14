var loginDB = "http://127.0.0.1:3000/users/";
var tweetDB = "http://127.0.0.1:3000/chirps/";



function login(){
	var username= document.getElementById("username").value;
	var pass =  document.getElementById("password").value;
	var details = {"username":username, "password":pass};
	if(validateSimple(username) && validateSimple(pass)){
		var arr =[];
		arr.push(details);
		$.ajax({
			type: "POST",
			url: loginDB,
			data: details,
			success: function(){
				signedUser = username;
				loginSuccess();
				//serverReturn(JSON.parse(httpGet(activeDB+other.statusText)));
			},
			error: function(xhr, textStatus, errorThrown){
				alert("Username or Password incorrect");
			},
			dataType: "text"
		});
	}
}


function gatherTweets(){
	$.ajax({
			type: "GET",
			url: tweetDB,
			success: function(data,status){
				//console.log(data);
				drawTweets(JSON.parse(data));
				//loginSuccess();
			},
			error: function(xhr, textStatus){
				console.log(xhr, textStatus);
			},
			dataType: "text"
	});
	
}



function drawTweets(arr){
	tweetHolder = document.getElementById("tweetHolder");
	for (var i = 0; i < arr.length; ++i){
		var tweet= document.createElement("div");
		tweet.className = "chirp";

		var msg= document.createElement("div");
		msg.className = "tweet-message";
		msg.innerHTML = arr[i].msg;

		var header= document.createElement("div");
		header.className = "tweet-head";
		header.innerHTML = arr[i].user +"-"+arr[i].datetime;

		tweet.appendChild(header);
		tweet.appendChild(msg);
		//tweetHolder.appendChild(tweet);
		tweetHolder.insertBefore(tweet, tweetHolder.firstChild);
	}
}
var signedUser = null;

function sendTweet(){
	if(signedUser!=null){
		var tweetMsg = document.getElementById("new-tweet").value;
		var d = new Date();
		var time=
		    ("00" + (d.getMonth() + 1)).slice(-2) + "/" + 
		    ("00" + d.getDate()).slice(-2) + "/" + 
		    d.getFullYear() + " " + 
		    ("00" + d.getHours()).slice(-2) + ":" + 
		    ("00" + d.getMinutes()).slice(-2) + ":" + 
		    ("00" + d.getSeconds()).slice(-2);
		var chirp =	{ "user": signedUser, "datetime":time, "msg": tweetMsg}; 
		var arr =[];
		arr.push(chirp);
		$.ajax({
			type: "POST",
			url: tweetDB,
			data: chirp,
			success: function(){
				//signedUser = username;
				//loginSuccess();
				//serverReturn(JSON.parse(httpGet(activeDB+other.statusText)));
				document.getElementById("new-tweet").value = "";
				drawTweets(arr);
			},
			error: function(xhr, textStatus, errorThrown){
				alert("Username or Password incorrect");
			},
			dataType: "text"
		});  
	}
	else{
		alert("You must be signed in to tweet");
	}
}


function validateSimple(txt){
	/*if(txt ==null){
		return false;
	}
	else if(txt == ""){
		return false;	
	}
	else if(txt == "null"){
		return false;	
	}
	else if(txt.replace(/\s+/g, '') == ""){
		return false;	
	}*/
	return true;
}


function loginSuccess(){
	document.getElementById("loginName").innerHTML = signedUser;
	document.getElementById("logBtn").disabled = true;
}


dialogAlive = false;
function toggleDialog(){
		dialogAlive=!dialogAlive;
		if(dialogAlive){
			document.getElementById("myModal").style.display = "block";
		}
		else{
			document.getElementById("myModal").style.display = "none";
		}
	}


