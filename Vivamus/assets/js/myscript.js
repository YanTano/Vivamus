var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) { // This function will display the specified tab of the form...
  var tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } 
    else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (tab.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
      document.getElementById("nextBtn").type = "submit";
    }
    else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
fixStepIndicator(n); //... and run a function that will display the correct step indicator:
}

// This function will figure out which tab to display
function nextPrev(n) { 
  var tab = document.getElementsByClassName("tab"); 
    if (n == 1 && !validateForm()) return false;    // Exit the function if any field in the current tab is invalid:
    tab[currentTab].style.display = "none";           // Hide the current tab:
    currentTab = currentTab + n;             // Increase or decrease the current tab by 1:
    
    if (currentTab >= tab.length) {           // if you have reached the end of the form...
      document.getElementById("regForm").submit();    // ... the form gets submitted:
      return false;
    }
showTab(currentTab); // Otherwise, display the correct tab:
}

// This function deals with validation of the form fields
function validateForm() {  
  var tab, inputText, i, errorMessage,valid = true;
  errorMessage = document.getElementsByClassName("error");
  tab = document.getElementsByClassName("tab");
  inputText= tab[currentTab].getElementsByTagName("input");    
  for (i = 0; i < inputText.length; i++) {  // A loop that checks every input field in the current tab:
    if (inputText[i].value == "") {         // If a field is empty...
      inputText[i].className = "invalid"; // add an "invalid" class to the field:
      valid = false;                // and set the current valid status to false
      errorMessage[i].innerHTML = "Please fill out this field";
    }
    else{
      errorMessage[i].innerHTML = "";
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    document.getElementsByClassName("title")[currentTab].className += " finish";
    document.getElementsByClassName("title-description")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}


// This function removes the "active" class of all steps...
function fixStepIndicator(n) {
  var i;
  var step = document.getElementsByClassName("step");
  var title = document.getElementsByClassName("title"); 
  var titleDescript = document.getElementsByClassName("title-description");

  for (i = 1; i < step.length; i++) {
 step[i].className.replace(" active", "");
  }
   for (i = 1; i < title.length; i++) {
    title[n].className += " active";
  }
  for (i = 1; i < titleDescript.length; i++) {
    titleDescript[n].className += " active";  
  }
  step[n].className += " active";
   //... and adds the "active" class on the current step:
}


//payment options 
document.getElementById("paypal-btn").addEventListener("click", myPaypal);
document.getElementById("credit-btn").addEventListener("click", myCredit);
let paypalbtn = document.getElementById("paypal-btn");
let creditbtn = document.getElementById("credit-btn");
function myPaypal() {
  document.getElementById("paypal-form").style.display = "block";
  document.getElementById("credit-form").style.display = "none";
  paypalbtn.id = "active-btn"; 
  creditbtn.id = "credit-not-active";
}
function myCredit() {
  document.getElementById("credit-form").style.display = "block";
  document.getElementById("paypal-form").style.display = "none";
  paypalbtn.id = "not-active-btn"; 
  creditbtn.id = "active-btn";
}




// First Name Validation
let fname = document.getElementById("fname");
let fnameValidation=function(){
  let firstNameValue=fname.value.trim();
   let validFirstName=/^[A-Za-z]+$/;
   let firstNameErr=document.getElementById("fname-error");
      
        if(firstNameValue==""){
          firstNameErr.innerHTML="First Name is required";
        }     
          else if(!validFirstName.test(firstNameValue)){
            firstNameErr.innerHTML="First name must be only letters and without spaces";
            fname.className = "invalid";
          }
            else{
              firstNameErr.innerHTML="";
              fname.className = "";
              return true;
            }
};
fname.oninput=function(){
  fnameValidation();
};
//Last Name Validation
let lname = document.getElementById("lname");
let lnameValidation=function(){
  let lastNameValue=lname.value.trim();
   let validLastName=/^[A-Za-z]+$/;
   let lastNameErr=document.getElementById("lname-error");
      
        if(lastNameValue==""){
          lastNameErr.innerHTML="Last Name is required";
        }     
          else if(!validLastName.test(lastNameValue)){
            lastNameErr.innerHTML="Last name must be only letters and without spaces";
            lname.className = "invalid";
          }
            else{
              lastNameErr.innerHTML="";
              lname.className = "";
              return true;
            }
};
lname.oninput=function(){
  lnameValidation();
};
 // Email Address Validation
let email= document.getElementById("email");
let emailValidation= function(){
let  emailValue=email.value.trim(); 
let  validEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let  emailErr=document.getElementById("email-error");
    if(emailValue==""){
      emailErr.innerHTML="Email Address is required";
    }
      else if(!validEmail.test(emailValue)){
        emailErr.innerHTML="Email Addre must be in valid format with @ symbol";
        email.className = "invalid";
      }
        else{
          emailErr.innerHTML="";
          email.className = "";
          return true;
        }
 };
email.oninput=function(){
   emailValidation();
};

 // Phone Number Validation 
let phone = document.getElementById("phone");
let phoneValidation= function(){
let  phoneValue=phone.value.trim(); 
let  validPhone=/^\+?([0]{1})([9]{1})\)?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let  phoneErr=document.getElementById('number-error');
    if(phoneValue==""){
      phoneErr.innerHTML="Mobile Number is required";
    }
      else if(!validPhone.test(phoneValue)){
        phoneErr.innerHTML="Mobile Number must be valid format ex. 09123456789";
        phone.className = "invalid";
      }
        else{
          phoneErr.innerHTML="";
          phone.className = "";
          return true;
        }
 };
phone.oninput=function(){
   phoneValidation();
};

//STEP 2 FORM VALIDATION -----------------------------------------

// Donation Validation
let donation= document.getElementById("donation");
let donationValidation=function(){
  let  donationValue=donation.value.trim();
  let  validDonation=/[1-9]\d*(\.\d{0,2})?/;
 let   donationErr=document.getElementById('donation-error');
      
        if(donationValue==""){
          donationErr.innerHTML="&emsp;&emsp; Donation is required";
        }     
          else if(!validDonation.test(donationValue)){
            donationErr.innerHTML="&emsp;&emsp; Donation must be only numbers";
            donation.className = "invalid";
          }
            else{
              donationErr.innerHTML="";
              donation.innerHTML="";
              donation.className = "";
              return true;
            }
};
donation.oninput=function(){
  donationValidation();
};
// Card Holder Validation
let cardHolder= document.getElementById("cardHolder");
let cardHolderValidation= function(){
let    cardHolderValue=cardHolder.value.trim(); 
let    validcardHolder=/[a-zA-Z]+ [a-zA-Z]+$/;
 let   cardHolderErr=document.getElementById("holder-error");

      if(cardHolderValue==""){
        cardHolderErr.innerHTML="&emsp;&emsp; Card Holder Name is required";
          }
            else if(!validcardHolder.test(cardHolderValue)){
              cardHolderErr.innerHTML="&emsp;&emsp; Card Holder Name must First Name & Lastname";
              cardHolder.className = "invalid";
            }
              else{
                cardHolderErr.innerHTML="";
                cardHolder.className = "";
                return true;
              }
};
cardHolder.oninput=function(){
    cardHolderValidation();
};


// Card Number Validation
let cardNum= document.getElementById("cardNum");
let cardNumValidation=function(){
 let   cardNumValue=cardNum.value.trim();
 let   validCardNum=/^\+?([0-9]{15})$/;
 let   cardNumErr=document.getElementById('card-error');
      
        if(cardNumValue==""){
          cardNumErr.innerHTML="&emsp;&emsp;Card Number is required";
        }     
          else if(!validCardNum.test(cardNumValue)){
            cardNumErr.innerHTML="&emsp;&emsp;Card Number must have 15 numbers";
            cardNum.className = "invalid";
          }
            else{
              cardNumErr.innerHTML="";
              cardNum.className = "";
              return true;
            }
};
cardNum.oninput=function(){
  cardNumValidation();
};
// Security Code Validation
let code = document.getElementById("code");
let codeValidation=function(){
 let   codeValue=code.value.trim();
 let   validCode=/^\+?([0-9]{6})$/;
 let   codeErr=document.getElementById('code-error');
      
        if(codeValue==""){
          codeErr.innerHTML="Card Security Code is required";
        }     
          else if(!validCode.test(codeValue)){
            codeErr.innerHTML="Code must have 6 numbers";
            code.className = "invalid";
          }
            else{
              codeErr.innerHTML="";
              code.className = "";
              return true;
            }
};
code.oninput=function(){
  codeValidation();
};
// Expire Date
let exDate= document.getElementById("exDate");
let exDateValidation=function(){
 let   exDateValue=exDate.value.trim();
 let   validExDate=/^\+?([0-9]{2})?[/]?([0-9]{2})$/;
 let   exDateErr=document.getElementById('date-error');
      
        if(exDateValue==""){
          exDateErr.innerHTML="Expiry Date is required";
        }     
          else if(!validExDate.test(exDateValue)){
            exDateErr.innerHTML="Expire Date must be only numbers (MM/YY)";
            exDate.className = "invalid";
          }
            else{
              exDateErr.innerHTML="";
              exDate.className = "";
              return true;
            }
};
exDate.oninput=function(){
  exDateValidation();
};





