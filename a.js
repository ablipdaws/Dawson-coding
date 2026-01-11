//let now = new Date();
//object.create()
let person = {
    calcAge(){
        return new Date().getFullYear() - this.birthYear
    }
}
greet(){
    return 'Have a nice day';
}

let john = Object.create(person);
console.log(john);

let mood = 'fantastic';
function getMood(num) {
    let mood = 'meh';
    if (num < 3) {
        let mood = 'bad :(';
    }
    return mood;
}

[2, 3, 5].reduce(function(max, currNum) {
    return Math.max(max, currNum);
});
[2, 3, 5].reduce => (max, currNum) {
    return Math.max(max, currNum);
}
