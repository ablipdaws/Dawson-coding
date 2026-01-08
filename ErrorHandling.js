//mysteryOperation function
//if operation is successful, it prints to the console "Operation successful: " followed by the result
//if operation fails, it throws an error with the message "Operation failed"
//if operation is successful you get 13 days of vacation
//if operation fails you get 1 days of vacation
//you always get 3 days of vacation for attendance
//this year you will attend 20 mystery operations


// Mystery operation function
function mysteryOperation() {
  // Randomly succeed or fail
  if (Math.random() < 0.5) {
    console.log("Mission successful");
  } else {
    throw new Error("Mission failed");
  }
}

let totalVacationDays = 0;
const missions = 20;

for (let i = 1; i <= missions; i++) {
  try {
    mysteryOperation();
    // Success reward
    totalVacationDays += 13;
  } catch (error) {
    console.log(error.message);
    // Failure reward
    totalVacationDays += 1;
  } finally {
    // Attendance reward (always)
    totalVacationDays += 3;
  }
}

console.log(`You deserve ${totalVacationDays} days of vacation!`);