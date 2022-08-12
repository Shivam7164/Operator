// 21 > 11; // output
true 


// 200 < 11; // output
false


// 11 >= 21; // output
false 


// 200 <= 100; // output
false


// 200 != 200; // output
false

// "A" > "B"; // output
false

// "d" < "a"; // output
false 

// "Hello" < "World"; // output
true 


// "JavaScript" >= "Java"; // output
true


// Equality Operator

// 200 == 200; // output
true

// null == 0; // output
false

// null == ""; // output
false

// null == false; // output
false

// undefined == 0; // output
false


// undefined == ""; // output
false


// undefined == false; // output
false


// NaN == 0; // output
false


// NaN == ""; // output
false


// NaN == false; // output
false


// 200 === 200; // output
true


// 0 == false; // output
true


// 0 == ""; // output
true


// "" == false; // output
true


// 0 === false; // output
false


// true === 1; // output
false

// "21" === "21"; // output
true


// "21" === 21; // output
false


// Double and Triple equal -->
// let a = 5,
//   b = 10,
//   c = "5";
// let x = a;
// What will be the output of the code below on the basis of above code:
// a == c; // output
true


// a === c; // output
false


// a == x; // output
true


// a != b; // output
true


// a > b; // output
false


// a < b; // output
true

// a >= b; // output
false


// a <= b; // output
true


// a >= c; // output
true

// a <= c; // output
true


// Output of the following line of code.


// "NaN" && "undefined" && 0; // output
0


// "AT" && "" && false; // output
""


// "AT" && " " && false; // output
false

// "AT" || 5; // output
"AT"


// " " || "AT" || false; // output
" "


// !{}; // output
false

// !""; // output
true

// !"OK"; // output
false

// !false; // output
true
// !true; // output
false
// Enter a number as input and check whether it's divisible by 5 OR 7, alert true and false based on that.
let num = Number(prompt(`enter a number`));
num % 5 === 0 || num % 7 === 0 ? alert(true) : alert(false);

// Enter a number as input and check whether it's divisible by 2 AND 4, alert true and false based on that.
let num1 = Number(prompt(`enter a number`));
num1 % 2 === 0 || num1 % 4 === 0 ? alert(true) : alert(false)

