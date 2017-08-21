

///<reference path="bundle.ts"/>
///<reference path="bundle1.ts"/>

// consume interface and function from namespace from both the filesand declare the message with interface datatype;
let msg = { 
    num: 125, 
    item: 'Tomatos'
 };

// call the namespace method with parameter as interface property;
message.displayMessage1(msg.num);

message.displayMessage2(msg.item);

document.write("Please check the console to view the namespace and interface Message");


