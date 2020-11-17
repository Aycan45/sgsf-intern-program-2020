
function NumberOfIceCreamsPerDay(iceCream){

	var iceCream = 30; //number of ice creams per day

	return `Number of ice creams made for a day: ${iceCream}`;

}

function IceCreamPrice(price){

	var price = 5.0;//price of the ice cream

	return `The price of the ice cream: ${price} lv.`;

}

function IceCreamName(name){

	var name = "EXTREME ICE CREAM";//name of the ice cream

	return `The name of the ice cream is ${name}`;
}

function WinterTime(isWinter){
	
	isWinter=true;//variable to see if it is winter;

	if (isWinter) {

		iceCream=0;

		return `Its winter the production is: ${iceCream}`;
	}
	else{
		return "It is summer man, we are producing ice cream!!"
	}

}

function UniqueCode(code){

	var code = "b"+58321;//code for the ice cream

	return `The number of the ice cream is ${code}`;
}

function Tastes(tastes){

	var tastes = ["Vanilla","Chocolate","Banana","Strawberry"];// array for the ice cream tastes
	
	console.log("These are the flavours:");
	
	for (let i = 0; i < tastes.length; i++) {
		
		var result = tastes[i];
		
		console.log(result);
	}
	
	return result;
}
function Advertising(){
	
	var user = prompt("Enter your name:");
	
	if (user) {
		
		var message = console.log("Hello try this good ice cream");
		
		return message;
	}
}

//visualizing the functions and variables in console
console.log(NumberOfIceCreamsPerDay());
console.log(IceCreamPrice());
console.log(IceCreamName());
console.log(WinterTime());
console.log(UniqueCode());
console.log(Tastes());
console.log(Advertising());