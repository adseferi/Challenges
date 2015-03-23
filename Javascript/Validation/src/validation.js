/** This is the file where you will write the JavaScript code for validation the different parts of the form **/

function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var mgender = document.registration.msex;
    var fgender = document.registration.fsex;

    if(validateUsername(uid,5,12))
    {
        if(validatePassword(passid,7,12))
        {
            if(allLetter(uname))
            {
                if(alphanumeric(uadd))
                {
                    if(countryselect(ucountry))
                    {
                        if(allnumeric(uzip))
                        {
                            if(checkEmail(uemail))
                            {
                                if(validgender(mgender,fgender))
                                {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}


function validateUsername(fld) {
   //function for validating usernames

    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a username.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 5) || (fld.value.length > 12)) {
        fld.style.background = 'Yellow';
        error = "The username is the wrong length.\n";
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "The username contains illegal characters.\n";
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
    return true;
}

function validatePassword(fld) {
    //function for validating passwords

    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 7) || (fld.value.length > 12)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
    return true;
}

function allLetter(uname){
    //function for validating names

    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd){
   //function for validating address

    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function countryselect(ucountry){
    //function for validating country

    if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}

function allnumeric(uzip){
    //function validating ZIP code

    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}

function checkEmail(uemail) {
    //function validating email

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function validgender(mgender,fgender){
    //function validating gender
    x=0;

    if(mgender.checked)
    {
        x++;
    } if(fgender.checked)
    {
        x++;
    }
    if(x==0)
    {
        alert('Select Male/Female');
        mgender.focus();
        return false;
    }
    else
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;}
}


