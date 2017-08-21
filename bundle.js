//Create a namespace and add an interface and a function.
var message;
(function (message) {
    //display a message with number
    function displayMessage1(num) {
        console.log("Hey i am diplaying 1st message, becuase I am travelling " + num + " Places");
    }
    message.displayMessage1 = displayMessage1;
})(message || (message = {}));
