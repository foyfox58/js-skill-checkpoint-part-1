// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    
  if(userPassword < 6){
    return "Weak";
  } else if (userPassword <= 10){
    return "Medium";
  } else if (userPassword > 10){
    return "Strong";
  }

}

console.log(checkPasswordStrength(userPassword));
