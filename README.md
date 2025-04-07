# ts_num_pad_checker

TypeScript function `checkNumberPadding` that checks whether a list of numeric strings uses **consistent zero-padding**. It's useful in scenarios like document IDs, Bates numbering, or serial codes where numbers are often padded for alignment.

What It Does

Given an array of strings like `["001", "002", "9999"]`, the function checks:

- Are all numbers padded consistently (with leading zeros)?
- Are they padded inconsistently?
- Are they just plain numbers without padding?
- Or is it unclear?

It returns:

- A positive number => consistent padding length  
- `1` =>  numbers are unpadded  
- A negative number =>  padding is unclear or inconsistent  
- `-1` => definitely inconsistent  
- `0` => input is empty  

Setup

1. You have **Node.js** and **npm** installed.
2. in project directory :

> npm i 

> npm start 

<!-- The test cases are in the test.ts file. You may change the test cases by adding
 your own values  -->
