// write your code in this directory
// 1
for (let i = 1; i<=10; i++) {
    console.log(i);
}


// 2
for (let i = 10; i>=1; i--) {
    console.log(i);
}


// 3
let sum = 0; // creating variable named sum equal to zero
for (let i = 1; i <= 50; i++) { // creating for loop for i variable which is number 1 at creation and will be incremented by 1 until it reaches the value 50
    sum += i;  // adding each i value on each iteration to sum which will count the summary of all numbers added to each other starting from 1 including 50
}
console.log(sum); // printing it to console to see the result


// 4
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// there will be 5 iterations starting from 0 followed by 2, 4, 6, 8, because as i is incremented by two on every iteration it will reach 10 in 5 iterations


// 5 break - break statement in programming is used to terminate a loop immediately when a specific condition is met.
for (let i=0; i < 10; i++) {
    console.log(i);
    if (i === 4) {
        break;
    }
}


// 6 continue - continue statement in programming is used within loops to skip the rest of the code in the current iteration and 
// move to the next iteration of the loop.
for (let i=0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(`odd number ${i}`);
}


// 7 Generate and print a random number between 1 and 100 until you get the number 27;
let randomNum;

while (randomNum !== 27) {
    randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum === 27) {
        break;
    }
    console.log(randomNum);
}


// 8 write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)  {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}


// 9 write a program that prints 100 random numbers (each random number should be in the range 1-100).
for (let i = 0; i < 100; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}


// 10 write a program that prints the sum of all even numbers between 1 and 1000.
let sum1 = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0) {
        sum1 += i;
    }
}

console.log(sum1);


// 11 write a program that prints the sum of all numbers between 1 and 1000 that are divisible by 3 or 5.
let sum2 = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum2 += i;
    }
}

console.log(sum2);


// 12 write a program that prints the sum of all numbers between 1 and 1000 that are divisible by both 3 and 5.
let sum3 = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum3 += i;
    }
}

console.log(sum3);


// 13 [Challenge] Generate Random Password. HINTS - Use ASCII codes to generate random characters. Search how to get string from character code
let password = "";

for (let i = 0; i < 8; i++) {
    let randomCharCode;

    if (Math.random() < 0.5) {
        randomCharCode = Math.floor(Math.random() * 26) + 65;
    } else {
        randomCharCode = Math.floor(Math.random() * 26) + 97;
    }

    let randomChar = String.fromCharCode(randomCharCode);
    password += randomChar;
}

console.log(password);



// 14 [Challenge] "There is a man somewhere, Find him", Below code generates string with 2 possible characters, " " and "?". Write a code that will find the position of "?".
let str = "";

for (let i = 0; i < 10; i++) {
    str += Math.random() > 0.5 ? " " : "?";
}
console.log(str);

for (let i = 0; i < 10; i++) {
    if (str[i] === '?') {
        console.log(i);
    }
}


// 15 [Challenge] "Mystery Room", Write a code that will generate 2d representation of a room. you should generate an empty space, wall or a mystery box. You can use any characters you want. The room should be 10x10. The room should have 10 walls, 1 mystery boxes and the rest should be empty space, mystey box location should be random!
let mysteryBox = false;
let line = "";

for (let i = 0; i < 10; i++) {
    if (i === 0 || i === 9) {
        line = "##########"
        console.log(line);
    } else {
        if (mysteryBox === false) {
            let trueOrFalse = Math.random();
            if (trueOrFalse > 0.5) {
                let position = Math.floor(Math.random() * 10);
                let line2 = "#        #";
                if (position === 9 || position === 0){
                    position = 5;
                    line2 = line2.slice(0, position) + "?" + line2.slice(position);
                } else {
                    line2 = line2.slice(0, position) + "?" + line2.slice(position);
                }
                console.log (line2);
                mysteryBox = true;
            } else {
                console.log("#        #");
             }
        } else {
           console.log("#        #");
        }
    }
}

