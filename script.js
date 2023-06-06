
function formValidate(person, chk_box_val){

    var name = person.name;
    var email = person.email;
    var country = person.country;
    var phone = person.phone;
    var password = person.password;
    var checked = chk_box_val;

   //console.log(person, checked.checked)

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    var regName = /\d+$/g;
    var checkbox = document.getElementById('agree');

    if(name === ""){
        var errorName = document.getElementById('errorName');
        errorName.innerHTML = "<span style='color: red;'> Please Enter Your Name * </span>";
        document.getElementById('name').focus();
        return false;
    }else {
        document.getElementById('errorName').innerHTML="";

    }
    if(email == "" || !regEmail.test(email)){
        document.getElementById('errorEmail').innerHTML="<span style='color: red;'>Please enter valid Email * </span>";
        document.getElementById('email').focus();
        return false;
    } else{
        document.getElementById('errorEmail').innerHTML="";
    }
    if(country == ""){
        document.getElementById('errorCountry').innerHTML="<span style='color: red;'> Please enter country name * </span>";
        document.getElementById('country').focus();
        return false;
    } else{
        document.getElementById('errorCountry').innerHTML="";
    }
    if(phone == "" || !regPhone.test(phone)){
        document.getElementById('errorPhone').innerHTML="<span style='color: red;'> Please enter valid phone number * </span>";
        document.getElementById('phone').focus();
        return false;
    } else{
        document.getElementById('errorPhone').innerHTML="";
    }
    if(password == "" ){
        document.getElementById('errorPassword').innerHTML="<span style='color: red;'> Please enter Password * </span>";
        document.getElementById('password').focus();
        return false;
    } else{
        document.getElementById('errorPassword').innerHTML="";
    }
    if(password.length < 6 ){
        document.getElementById('errorPassword').innerHTML=" <span style='color: red;'> Password length shoud be at least 6 character long </span>" ;
        document.getElementById('password').focus();
        return false; 
    }else{
        document.getElementById('errorPassword').innerHTML="";
    }
    if(checked.checked==false){
        document.getElementById('errorCheckbox').innerHTML="<span style='color: red;'> Please check terms and conditions </span>";
        document.getElementById('password').focus();
        document.getElementById('agree').focus();
        return false;
    }else{
        document.getElementById('errorCheckbox').innerHTML="";
    }
    


    
//storing data

localStorage.setItem(email, JSON.stringify(person));
//var name = localStorage.setItem("name",person.name);
//var email = localStorage.setItem("email",person.email);
//var country = localStorage.setItem("country",person.country);
//var phone = localStorage.setItem("phone",person.phone);
//var password = localStorage.setItem("password",person.password);
//-------------------------------------------------------------------------
//swal("Good job!", "Regestration successful!", "success");  
alert("Regestration successful!");

return true;
}

function loginvalidate(person){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;


    if(email == "" || !regEmail.test(email)){
        document.getElementById('errorEmail').innerHTML="<span style='color: red;'>Please enter valid Email * </span>";
        document.getElementById('email').focus();
        return false;
    } else{
        document.getElementById('errorEmail').innerHTML="";
    }
    if(password == "" ){
        document.getElementById('errorPassword').innerHTML="<span style='color: red;'> Please enter Password * </span>";
        document.getElementById('password').focus();
        return false;
    } else{
        document.getElementById('errorPassword').innerHTML="";
    }
    if(password.length < 6 ){
        document.getElementById('errorPassword').innerHTML=" <span style='color: red;'> Password length shoud be at least 6 character long </span>" ;
        document.getElementById('password').focus();
        return false; 
    }else{
        document.getElementById('errorPassword').innerHTML="";
    }

    var person = localStorage.getItem(email,'email');
    var obj = JSON.parse(person);

    if(obj.email == email && obj.password == password){
      //  swal("Good job!", "Login successful!", "success");  
      window.alert("Login Successful");
        window.location.replace("./zomato.html");
        //var username = document.write('<html><body><h1><center>')
        //document.write("Welcome"+ " ");
        //document.write(obj.name);
        //document.write('</center></h1></|')
    
    }
    
    if(obj.password != password || obj.email != email){
        //console.log("wrong password");
        swal("Oops..!", "Password and email not matching!", "error");
    }

    return true;
}

