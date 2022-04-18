
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");

var adress = document.getElementById("inputAddress");


function validateemail()
{
    let email = document.getElementById("inputEmail4");
    // let emailmsg = document.getElementById("emailmsg");
   let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp.test(email.value)){
      // incorrect.classList.remove("invalid");
      return true;
  
    }
    else 
     {  // correct.classList.remove("invalid");
        return false;
    }

}
function phonenumber()
{
  let phoneno = document.getElementById("input.Ph");
  let phoneno1 = /^\d{10}$/;
  let phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{7})$/;
  // let phoneno3 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(( phoneno.value.match(phoneno1))||( phoneno.value.match(phoneno2)))
        {
      return true;
        }
      else
        {
        return false;
        }
}
