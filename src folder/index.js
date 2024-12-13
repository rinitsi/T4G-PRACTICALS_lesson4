//if (condition) {}

//let x=prompt("give me money");
//console.log(typeof(x));
//x=Number(x);

//let result = (x+15);
//let remainder = results % 2;

//if (remainder == 1){
  //  alert("Winner")
//} else {
   // alert("loser"); 
//}

//if a user wants to delete their account
//let del = prompt("are you sure yo want to delete yo:") 
//if (del == "yes"){
//alert("account deleted");
//}else if (del == "no"){
  //alert("Account not deleted");
//}

let booking= prompt("let us know if you would want to confirm, cancel or reschedule");

if (booking == "confirm"){
 alert("see you soon");
} else if (booking == "cancel"){
    alert("booking cancelled");
} else if (booking == "reschedule"){
    let reschedule = prompt("when would you like to reschedule to?");
    
      alert("your appointemnt has been rescheduled to" + reschedule);
    } else {
       alert("please cancel, confirm or reschedule");
    }
