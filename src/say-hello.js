var helloWorld = function (name) { console.log("hello " + name + "!") };
exports.sayHello = helloWorld;

const getMessage = () => console.log("Hello World");
exports.sayHello2 = getMessage;


document.getElementById('output').innerHTML = getMessage();
