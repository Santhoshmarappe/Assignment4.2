///<reference path="bundle.ts"/>
//declare a namespace of message with method
var message;
(function (message) {
    //display a message with item
    function displayMessage2(item) {
        console.log("Hey I am diplaying 2nd message, becuase I found 25 " + item);
    }
    message.displayMessage2 = displayMessage2;
})(message || (message = {}));
