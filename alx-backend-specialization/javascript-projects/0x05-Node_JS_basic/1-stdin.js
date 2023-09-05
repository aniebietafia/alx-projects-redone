/*
Create a program named 1-stdin.js that will be executed through command line:
•	It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
•	The user should be able to input their name on a new line
•	The program should display Your name is: INPUT
•	When the user ends the program, it should display This important software is now closing (followed by a new line)
Requirements:
•	Your code will be tested through a child process, make sure you have everything you need for that
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Welcome to Holberton School, what is your name? ", (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on("close", () => {
  console.log("This important software is now closing");
  process.exit(0);
});
