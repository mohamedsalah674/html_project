function pw(str) {

var constant = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_,-,#,&,*]).{8}$/;
return constant.test(str);
}




function check(form) {
 if (form.name1.value == "" || form.name2.value == "") {
alert("Please enter your first and last name");
     form.name1.focus();
        return false;
    }


    constant = /^\w+$/ ;

 if (!constant.test(form.name1.value)) {
alert("First name must contain only letters,underscore and numbers ");
     form.name1.focus();
         return false;
    }

for(var i=0;i<=8;i++){
if (form.password1.value[i]==" ")
		{
alert("space is not allowed in password");
form.password1.focus();
        
		return false;
		}
	else{continue;}
	}
	

if(form.password1.value[0]>= 'A' && form.password1.value[0] <= 'Z' )	
{	
	          i=0;
               
}	
else{         
			  alert("first char must be capital letter");
              form.password1.focus(); 
              return false;
	}
	



if (form.password1.value != "" && form.password1.value == form.password2.value) {
if (!pw(form.password1.value)) {
 alert("The password you have entered is not valid! , password must consist of only 8 characters including capital and small case and digits");
    form.password1.focus();
            return false;
        }
    }


    else {
alert("Password and confirm passsword are not identical");
form.password1.focus();
        return false;
    }
    return alert("Hello your chose your right place");



}
