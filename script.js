console.log('Add validation!');

// console log from QuereySlector using an ID 
//

let form = document.querySelector("#parking-form")
console.log(form)

    
//this is a callback function. specifically the submit is the event. after the comma is the callback function
form.addEventListener("submit", (event) => {
    //when submit is triggered the things below will happen
    event.preventDefault();
    console.log ("hello")
    let name = document.querySelector("#name")
    if (name.value.length === 0) {
        console.log("Name Is Blank");

    } else {
        console.log("valid")
    }
} )



function validateForm(){
const form = document.querySelector("#parking-form")
form.addEventListener("submit")

}
// we want to validate the number but first we have to GET the number
// you get the conext of a n input value by using .value
// how to declare a variable 
//focus in of Queuery selecctors and DOM manipulation. 
// preventDefault = prevent the default action and perform another
// referesh what is the === and ++ 
// what is the && symbols used for 
// to make sur3e the inupt is a number you use "type" input id="car-model"
// Look up ParseInt - used to transform something into an integer PArse... integer