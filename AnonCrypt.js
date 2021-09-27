// Coded by AnonyminHack5
// Language: Nodejs
// import necessary modules

const crypto = require("crypto");
const os = require("os");
const prompt = require("prompt-sync")();
const cipher = crypto.createCipher('aes192', 'a password');
const decipher = crypto.createDecipher('aes192', 'a password');


// displays the banner
var banner = `\x1b[36m
   _____                       _________                        __    
  /  _  \   ____   ____   ____ \_   ___ \_______ ___.__._______/  |_  
 /  /_\  \ /    \ /  _ \ /    \/    \  \/\_  __ <   |  |\____ \   __\ 
/    |    \   |  (  <_> )   |  \     \____|  | \/\___  ||  |_> >  |   
\____|__  /___|  /\____/|___|  /\______  /|__|   / ____||   __/|__|   
        \/     \/            \/        \/        \/     |__|          

	\x1b[33m AnonCrypt-[Encrypting our Messages to the World] - Made in Nodejs
		\x1b[31m AnonCrypt is under the MIT license\x1b[0m
\x1b[0m
=========================================================

\x1b[1;32mName\x1b[0m: AnonCrypt
\x1b[1;33mAuthor\x1b[0m: AnonyminHack5
\x1b[1;36mGIthub\x1b[0m: TermuxHackz
Version: 1.0
=========================================================
Anoncrypt is a tool used for Ciphering and Diciphering of strings/Texts. 
Useful for hiding your messages.(Anonymity)
=========================================================
`

console.log(banner);

console.log("");
 	console.warn("Welcome to the menu of AnonCrypt - Choose from below!!!");
 	console.log("");
 	console.log("\x1b[91m\tKINDLY IGNORE WARNINGS YOU MAY SEE!!\x1b[0m\n");
 	
	console.log("\t\x1b[93m[01] Cipher a Text \x1b[0m");
	console.log("\t\x1b[93m[02] Dicipher a Text\x1b[0m");
	console.log("\t\x1b[93m[03] Show my current system [eg Windows, Linux, etc]\x1b[0m");
	console.log("\t\x1b[93m[04] Start HTTP Server and Visit Site for more Tools\x1b[0m");


console.log("");
const number = prompt("Choose your number: ");
if (number == 1 || number == 01) {
	const message = prompt("Enter text to cipher: ")
	var encrypted = cipher.update(message, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	console.log("\x1b[93mCiphered Text is:",encrypted);
}
else if (number == 2 || number == 02) {
	const message1 = prompt("Enter text to dicipher: ")
	var decrypted = decipher.update(message1, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	console.log("\x1b[94mDiciphered Text is:",decrypted);
} 
else if (number == 3 || number == 03) {
	console.log("Your current system is a:",os.platform + "system");
	
} 
else if (number == 4 || number == 04) {
	var http = require("http");
	http.createServer(function(request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(`
		<!DOCTYPE html>
		<html>
		<head>
		<title>Get More Tools</title>
		<meta charset="UTF-8">
  		<meta name="viewport" content="width=device-width, initial-scale=1">
  		<meta http-equiv="X-UA-Compatible" content="ie=edge">
  		<meta name="author" content="AnonyminHack5">
  		<noscript>Sorry,it appears javascript has been disabled on your browser, kindly enable javascript and continue for this page to work properly</noscript>
  		<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
  		</head>
  		<body>
  		<h4 align="center">This is a web server for you to Get more Tools</h4>
  		<p align="center">For you to get more tools, you can just click the button below to be redirected to a page for getting more tools.</br></p>
  		<br>
  		<center>
  		<style>
  		#btn {
  		background: blue;
  		border: none;
  		cursor: pointer;
  		border-radius: 2px;
  		margin: 1px 0px 2px 1px;
  		color: #fff;
  		padding: 5px;
  		width: 180px;
  		height: 50px;
  		font-size: 16px;
  		text-align: center;
  		box-shadow: 1px 2px 1px 2px black;
  		}
  		#btn:hover {
  		opacity: 0.4;
  		}
  		</style>
  		<br>
  		<button onclick="myfunc()" id="btn">Click here to get more Tools</button>
  		<script>
  		function myfunc() {
  		if(confirm("Do you wish to continue to page to get more Tools?")) {
  			window.open("https://github.com/TermuxHackz?tab=repositories");
  		} else {
  			alert("You have cancelled..!!");
  			return false;
  		}
  		}
  		</script>
  		</center>
  		</body>
  		</html>
  		`);
  		}).listen(8080);
  		console.log("\x1b[34mServer has started at http://127.0.0.1:8080 visit that on your browser.\x1b[0m");
} else {
	console.log("Not part of the options!!");
	return false;
}

  		













