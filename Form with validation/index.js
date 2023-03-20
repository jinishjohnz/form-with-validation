function logIn(){
    var N=document.getElementById("name");
    var P=document.getElementById("password");

    if(N.value=="")
    {
        alert("Enter a valid user name");
        document.lgin.name.focus();
        return false;
    }
    else if(P.value=="")
    {
        alert("Enter a valid password");
        document.lgin.password.focus();
        return false;

    }
    else{
        alert("login successfull");
        return true;
    }
}
function signup(){

    var a=document.getElementById("email");
    var b=document.getElementById("fname");
    var c=document.getElementById("ttl");
    var d=document.getElementById("lname");
    var e=document.getElementById("phone");
   var f=document.getElementById("te");
    var checkbox=document.getElementById("box");
    var str1 = document.getElementById('txtCaptcha').value;
    var str2 = document.getElementById('txtCompare').value; 
 var error= document.getElementById("error");
    if(a.value=="")
    {
        alert("Enter an Valid Email");
        document.form.email.focus();
        return false;
    }
    else if(b.value=="")
    {
        alert("Enter firstname");
        document.form.fname.focus();
        return false;
    }
    // else if(c.value=="")
    // {
    //    alert("select any option");
    //    document.sigup.ttl.focus();
    //    return false;

    // } 
    else if(d.value=="")
    {
        alert("enter the lastname");
        document.form.lname.focus();
        return false;

    }
    else if(e.value=="")
    {
        alert("enter a phone number");
        document.form.phone.focus();
        return false;

    }
    // else if(f.value=="")
    // {
    //     alert("select a country code");
    //     document.form.f.focus();
    //     return false;
    // }
    else if(checkbox.checked==false)
    {
        alert("agree the terms and conditions");
        // document.form.checkbox.focus();
        return false;

    }
    else if (str1!=str2) {
        error.innerHTML="<span style='color:red;'>"+"missmatch</span>"
        return false; 

        
    }  
    

    else
    {
        alert("sucess");
        return true;
    }
   // function ValidCaptcha() {  
       
        
}
     
    
        

        
function GenerateCaptcha() {  
    var chr1 = Math.ceil(Math.random() * 10) + '';
    var chr2 = Math.ceil(Math.random() * 10) + ''; 
    var chr3 = Math.ceil(Math.random() * 10) + ''; 

    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });alert(str);
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3; 
    document.getElementById("txtCaptcha").value = captchaCode  
}  


  
//function removeSpaces(string) {  
  //  return string.split(' ').join('');  
//} 
   