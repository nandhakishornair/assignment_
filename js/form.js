
// function validateemail()
// {
    // let email = document.getElementById("inputEmail4");
    // let emailmsg = document.getElementById("emailmsg");
  //  let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
  //  if(regexp.test(email))
  //  {
      // return true;
  
    // }
    // else 
    //  {
        // return false;
    //  }

// }
function phonenumber()
{
  let phoneno = document.getElementById("input.Ph").value;
  let phoneno1 = /^\d{10}$/;
  let phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let msg1 = document.getElementById("checkph"); 
  
  // let phoneno3 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(( phoneno.match(phoneno1))||( phoneno.match(phoneno2)))
        {
          msg1.style.color="green";
          msg1.textContent="✔ valid phonenumber"; 
      return true;
        }
      else
        {
           msg1.style.color="#330066";
           msg1.textContent="X invalid phonenumber"; 

          return false;
        }
}
function pswdcheck()
{
  let pswd1=document.getElementById("inputPassword4");
  let pswd2=document.getElementById("inputPassword3");
  let msg = document.getElementById("checkpassword");
  if(pswd1.value==pswd2.value)
  {
    msg.style.color="green";
    msg.textContent="✔ password  match";
    return true;
    
  }
  else{
    msg.style.color="#330066";
    msg.textContent="X password do not match";
    return false;
  }
}
// function checkemail()
// { let va = document.getElementsById("va");
// let inv =  document.getElementById("inv");
  // if (validateemail()==true) {
    // va.style.display = "none";
  // }
  // else{
    // inv.style.display="none";
  // }
// }
// function pswdcheck2()
// {
//   let pswd1=document.getElementById("inputPassword4");
//   // let label=document.getElementsById("formlabel1");
//   // let poor = /[a-z]/;
//   let weak = /(?=.*?[0-9])/;
//   let strong = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
  
//    if (pswd1.match(strong))
//   {
//    pswd1.style.border="2px solid orange";
//   }
//   if  (pswd1.match(weak))
//   {
//     label.style.border="2px solid orange";
//   }
//   else
//   {
//     label.style.border="2px solid red";
//   }
// }