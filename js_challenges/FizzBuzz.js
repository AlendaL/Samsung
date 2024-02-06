/* 
for (let n = 0; n <= 100; n++) {
    let concatenete = "";

    if (n % 3 == 0) {
        concatenete += "Fizz";
    }
    if (n % 5 == 0) {
        concatenete += "Buzz";
    }
    console.log(concatenete || n);
} */

// my horrible solution 

   for (let x = 0; x <= 100; x++) {

       //for the verification of x % 3 == 0;

       if (x % 3 == 0 && x % 5 == 0) {
           // do not print
       } else if (x % 3 == 0) {
           console.log("Fizz");
       }

       //for the verification of x % 5 == 0;           

       if (x % 3 == 0 && x % 5 == 0) {
           //do not print
       } else if (x % 5 == 0) {
           console.log("Buzz");

       }

       //for all numbers
       if (x % 3 == 0 || x % 5 == 0) {
           // do not print
       } else {
           console.log(x);
       }

       //for both 5 and 3
       if (x % 3 == 0 && x % 5 == 0) {
           console.log("FizzBuzz");
       }
   }

