// CHAPTER NUMBER 35 TO 38 ;
// QUESTION NUMBER 1

 var date = new Date();
  document.write(date);

//  QUESTION NUMBER 2

 var fname = prompt("enter your first name");
  var lname = prompt("enter your last name ");
 
 function fullname(){
    alert( fname + lname);
 }
 
 var fullname = fullname();

// QUESTION NUMBER 3

 var num11 = parseInt(prompt("enter your number"));
 var num22 = parseInt(prompt("enter your number"));

 function sum(){
      return alert( num11 + num22);
     
    
 }
   var sum = sum();

//  QUESTION NUMBER 4
 var num1 = parseInt(prompt("enter a number "));
 var operatot = prompt("enter operator");
 var num2 = parseInt(prompt("enter a number "));
 function calculator(){
    if ( operatot === "+"){
     alert( num1 + num2)
    } else if (operatot === "-"){
     alert(num1 - num2)
    } else if (operatot === "*"){
     alert(num1 * num2);
    }else if (num2 !== 0 || operatot === "/"){
     alert(num1 / num2)
    }

 }

 var ans = calculator(num1,num2,operatot);

// QUESTION NUMBER  5 
 var num3 = parseInt(prompt("entr number for square ?"))
 function square(num) {
     return num3 * num3;
 }
   var square = alert( square());

// QUESTION NUMBER 6 
var num4 = parseInt(prompt("Enter Factorial number:"));

 function computeFactorial(n) {
     if (n < 0) {
         return "Invalid input! Factorial is not defined for negative numbers.";
     } else if (n === 0) {
         return 1;
     } else {
         return n * computeFactorial(n - 1);
     }
 }

 alert(computeFactorial(num4));

// QUESTION NUMBER 7
   var num5 = parseInt(prompt("enter starting number"));
  var num6 = parseInt(prompt("enter end number"));

   function countiong( start , end){
      for(j = start;j < end;  j++) {
          document.write(j)
      }
  }

 var counting = document.write(countiong(num5, num6));
 
// QUESTION  NUMBER 8

 function calculateHypotenuse(base, perpendicular) {
    //  Yeh inner function hai jo number ka square compute karta hai.
     function square(number) {
         return number * number;
     }
    
    //  Hypotenuse calculate karte hain.
     return Math.sqrt(square(base) + square(perpendicular));
 }

// Usage
 var base = 3;
 var perpendicular = 4;
 console.log("Hypotenuse:", calculateHypotenuse(base, perpendicular));  // Outputs: 5

// QUESTION NUMBER 9 

 var hight = 50;
 var width = 20;
  function area(){
     return hight * width
  }

 var totalArea = area();

  console.log(totalArea);
// QUESTION NUMBER 10 

// NH SMJ AYIA

// QUESTION NUMBER 11

 function uperCase(str){
   return str.split(' ', uperCase)
 }
  var uperCase = uperCase("the quick brown fox");

  console.log(uperCase);









