console.log("hello main.js");
console.log("what is this", this);

var world = 42;

function sky(){
	console.log("sky function");
	ocean();
}

function ocean(){
	console.log("ocean function");
	dirt();
}

function dirt(){
	console.log("dirt function");
	let world="333";
	console.log("this", this); //what is execution contex?
	console.log("this.world", this.world); //the original call site
}

//sky();

dirt();

function makeSound(){
	console.log("this.sound", this.sound);
}

var chickenObj = {
	eggs: 6,
	sound: "cackle",
	makeSound: makeSound //no () here as we dont want to call it when we invoke it
}

var dogObj = {
	pups: 6,
	sound: "bark",
	makeSound: makeSound //no () here as we dont want to call it when we invoke it
}

chickenObj.makeSound(); //this line calls the method makeSound of the chickenObj

//makeSound(); //if we call this directly then this.eggs is undefined as we are bypassing the chicken object

dogObj.makeSound();

function foo(){
	console.log("foo", this.a);
}

let obj2 = {
	a:42,
	foo:foo
};

let obj1 = {
	a:2,
	obj2:obj2 
};

obj1.obj2.foo();

function storm(){
	console.log("storm: this.temp", this.temp);
}

let weatherObj = {
	temp:72,
	storm: storm
}

let bar = weatherObj.storm;
var temp = "global warming";

weatherObj.storm();

storm();

function foo5(){
	console.log("foo5", this.a);
}

function doFoo(fn){
	fn();
}

var obj = {
	a:2,
	foo5: foo5
};

var a = "oops, global";
doFoo(obj.foo5);






















































