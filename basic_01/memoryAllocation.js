//++++++++++++++++

//MEMORY ALLOCATION 

/*
Stack 
-> jitni bhi premitive value hogii vo jayegi stack mamory me

Heap
-> jitni bhi Non-premitive value hogii vo jayegi stack mamory me

*/

let numOne = 3

let numTwo = numOne;

numTwo++

console.log(numTwo);
console.log(numOne);

let myObj1= {

    name :"Dev",
    rollNo : 4
}

let myObj2 = myObj1;

myObj2.name = "Maitri"

console.log(myObj2.name)
console.log(myObj1.name)