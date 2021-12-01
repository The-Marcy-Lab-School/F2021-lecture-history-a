# Unit 2 Assessment

### Topics:

### Hoisting
 - Mental Model: Push everything to top 
 - What is JS _really_ doing: JS runs the program in two phases: creation phase, execution phase
 - During the first phase, JS will store certain things in memory
 

### var, let, and const on hoisting, scope, reassignment/redeclaration
* `var` has function scope, can be redeclared and reassigned, `var` IS hoisted but is initialized to `undefined`
* `let` has block scope, cannot be redeclared but it CAN be reassigned, `let` is not hoisted
* `const` has block scope, cannot be reassigned nor redeclared, `const` is not hoisted

- reassignment vs redeclaring in a function nested in the global scope (Scope Chain)

- const and immmutability with primitive and objects


- Pass by value vs (primitive)
- Pass by reference (objects and arrays)

 

### Coding:

**Write a function called `stripVowels` that takes a string argument and returns that string with any vowel characters removed.**

```
stripVowels('Hello!'); // 'Hll!'
stripVowels('SevenEleven'); // 'SvnElvn'
stripVowels("Don't play with Me!"); // 'Dn't ply wth M!'
```

**Write a function called `lettersAndNumbers` that takes a string, and returns an object containing the following two properties:**

- The number of characters in the string that are letters
- The number of characters that are numbers

```
lettersAndNumbers("Hello123") // {letters: 5, numbers: 3}
lettersAndNumbers("8749hfq9") // {letters: 3, numbers: 5}
lettersAndNumbers("Don't stop!") // {letters: 8, numbers: 0}
```

"Hello123" => {letter: 5, number: 3}

### [Unit 2 Study Guide](https://github.com/The-Marcy-Lab-School/se-unit-2-study-guide)