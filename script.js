<!DOCTYPE html>
    <html>
    <title>Random Password Generator</title> 
    <head>
    <script>
    function xx() {
        document.write("xx");
    }
yy(); 
</script> 
</head> 
<body> 
< h2 onclick = "passwordGen"Generate a Password</h2>

    </body> 
    </html>



    //Cory Address these concerns with tutor Tues
// Need a button: each time pushed a new password 8-128 char is generated and printed to screen
// Req. slider 
// function need to specify length8
// GIVEN that a user needs a new, secure password**

WHEN prompted
for password criteria

THEN a password is generated

    -
    - -


var characters = " !"# $ % & '()*+,-./:;<=>?@[\]^_`{|}~"
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ';"
var numbers = "0123456789";
var letters.numbers = "letters + numbers"
var password = " ";
               for (var index = 0; index < length; index++) {            // This part came directly from Wikipedia but I cannot unsee it :( 
               var character = Math.floor(Math.random() * all.length);
               password += all.substring(character, character + 1);
}
return password;
}

// if else if for length
// length  => 0 
//if length <0  alert "input leg"