//function declaration*************************************************************
function add(a, b) {
	return a + b;
}

var a = add(2, 3);
console.log(a);

// array*************************************************************

var a = 4;
var b = [ "hello", "world", "4", "goodbye" ];
var c = [ "hello", 4, "4", "goodbye" ];

for (var i = 0; i < b.length; i++) {
	console.log(b[i]);
}

var d = new Array();
d[0] = "goodbye";
d[1] = "4";
d[2] = "world";
d[3] = "hello";
d[4] = "hi";

console.log(d.length + " is the size of the array");

for (var i = d.length - 1; i >= 0; i--) {
	console.log("i = "+i+" -> "+ d[i]);
}


//string manipulation*************************************************************
var name = "hello"; //string literal declaration
var last = new String("world");  //string object declaration
console.log(name.charAt(1));


var newName=name.concat(" world");
console.log(newName);

console.log("index of e is = "+name.indexOf("e"));

//slicing-substring, start index inclusive, end index is not
console.log(name.slice(1, 4)); //means 1-2-3 indexes


console.log(name.toUpperCase());

var anotherName = "    hello     "; //with many white spaces
console.log(anotherName.trim());





