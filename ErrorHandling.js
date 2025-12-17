//mysteryOperation function
//if operation is successful, it prints to the console "Operation successful: " followed by the result
//if operation fails, it throws an error with the message "Operation failed"
//if operation is successful you get 13 days of vacation
//if operation fails you get 1 days of vacation
//you always get 3 days of vacation for attendance
//this year you will attend 20 mystery operations
    try {
        function mysteryOperation(input) {
            console.log("Operation successful: " + input);
            return input; //was missing this line
        }
    } catch (error) {
        console.log(error.message);
        return "Operation failed";
    }


//function mysteryOperation(_input) vs (input)