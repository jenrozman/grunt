var myApp = {
	mainMessage : "Welcome humans!",

	mainGreeting(){
	console.log('Hey welcome you ugly humans');
	}
	
};
myApp.module1 = {
	saySomething(message){
		console.log(myApp.mainMessage, message, 'second file');
	},

doSomething(){
	console.log('called do something from module1');
	}
};
myApp.module2 = {
	doSomethingElse(){
		console.log('called do something from module2');
	}
};
(() =>{
	myApp.mainGreeting();

	myApp.module1.saySomething('yo homeslice');

	function myFunc(){
		var theHeading = document.querySelector('h1').
		textContent = myApp.mainMessage;
	}
})();