/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

const activateHyperdrive = () => console.log("Hyperdrive Activated!");
//result: () => console.log("Hyperdrive Activated!")

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.

const scanForLife = ("No lifeforms detected");
//result: 'No lifeforms detected'


/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.

const currentCoordinates = () => [x, y, z];
//result: () => [x, y, z]

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.

const spacecraft = {
    
    receiveMessage: () => {
       return "Message Received: "
        console.log(`Message Received: ${spacecraft}`);
    }
}
/*
 * Observations: I was not able to get this to print to the console.  No error was received.
 * TODO: Explain here.
 */
