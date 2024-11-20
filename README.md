[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/uKacETOn)
# Assignment about Loops

1. Write a for loop to print the numbers 1 through 10.
2. Write a for loop that prints the numbers 10 through 1.
3. Explain the code below. Write a comments to each line.
    ```js
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        sum += i;
    }
    console.log(sum);
    ```
4. How many iterations are in the loop below? Explain.
    ```js
    for (let i = 0; i < 10; i += 2) {
        console.log(i);
    }
    ```
5. What does the break statement do? Explain and give an example.
6. What does the continue statement do? Explain and give an example.
7. Generate and print a random number between 1 adn 100 until you get the number 27;
8. write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
9. write a program that prints 100 random numbers (each random number should be in the range 1-100).
10. write a program that prints the sum of all even numbers between 1 and 1000.
11. write a program that prints the sum of all numbers between 1 and 1000 that are divisible by 3 or 5.
12. write a program that prints the sum of all numbers between 1 and 1000 that are divisible by both 3 and 5.
13. [Challenge] Generate Random Password. HINTS - Use ASCII codes to generate random characters. Search how to get string from character code
14. [Challenge] "There is a man somewhere, Find him", Below code generates string with 2 possible characters, `" "` and `"?"`. Write a code that will find the position of `"?"`.
    ```js
    let str = "";
    for (let i = 0; i < 10; i++) {
        str += Math.random() > 0.5 ? " " : "?";
    }
    console.log(str);

    // write code that finds the position (index) of "?".
    // do not use indexOf method!
    // HINT: You can iterate strings' characters using for loop.
    // and you can access each character by using str[i]
    ``` 
15. [Challenge] "Mystery Room", Write a code that will generate 2d representation of a room. you should generate an empty space, wall or a mystery box. You can use any characters you want. The room should be 10x10. The room should have 10 walls, 1 mystery boxes and the rest should be empty space, mystey box location should be random!. The room should look something like this:
    ```
    ##########
    #?       #
    #        #
    #        #
    #        #
    #        #
    #        #
    #        #
    #        #
    ##########
    ```