
//Create a namespace and add an interface and a function.

namespace message {
    //create interface with two properties, one for this file namespace, other for bundle2 namespace
    export interface messageType {
        num: number;
        item: string;
    }
    //display a message with number
    export function displayMessage1(num: number) {
        console.log(`Hey i am diplaying 1st message, becuase I am travelling ${num} Places`);
    }
}



