// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
function printOdds() {
    for (let i = 1; i < 21; i++) {
       if (i%2===1) {
        console.log(i+",")
       }
        
    }
}
var x=printOdds();
// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values 
// that are evenly divisible by 3 from 100 down to 0.
function divideByThree() {
    for (var i = 100; i >0 ; i--) {
        if(i%3===0){
            console.log(i+",")
        }
        
    }
}
var y= divideByThree()

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 
// 4, 2.5, 1, -0.5, -2, -3.5.
var arr=[4, 2.5, 1, -0.5, -2, -3.5]
function printSequence() {
   for (let i = 0; i < (arr.length)-1; i++) {
    console.log(arr[i])
    
   } 
}
var z=printSequence()
// Write code that will add all of the values from 1-100 onto some variable sum 
// and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. 
// We should get back 5050 at the end.
var sum=0;
function Sum() {
    for (let i = 0; i <=100; i++) {
        sum=sum+i
        
    }
    console.log(sum)
}
var s=Sum()
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and 
// at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. 
// We should get back 479001600 at the end.
var product=1
function factoriel() {
    for (let i = 1; i <= 12; i++) {
        product=product*i;
  
    }
    console.log(product)
        
}
var p=factoriel()