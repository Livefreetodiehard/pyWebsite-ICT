function submit()
{
    name=document.getElementById("name").value
    email=document.getElementById("email").value
    mob=document.getElementById("mob").value
    if(name==""||email==""||mob=="")
    {
        alert("Data must be filled out");
    return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.getElementById("name").value)) {
        alert("Only Alphabets in Name");
        document.getElementById("name").value="";
        document.myForm.name.focus();
        return false;
    } 
    a=validateEmail(email);
    if(!a)
    {
        return false;
    }
    if (!/^[0-9]*$/g.test(document.getElementById("mob").value)) {
        alert("Only Numbers in mobile Number");
        document.getElementById("mob").value="";
        document.myForm.name.focus();
        return false;
    } 

    alert("Data Accepted");

}

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}
