<!DOCTYPE html>
    <html>
    <title>Random Password Generator</title>
    <head>
    <script>
    function pwGen(min, max) {
        docvaument.write("xx");
    }
yy();
</script>
</head>
<body>
< h2 onclick = "passwordGen"Generate a Password</h2>

    </body>
    </html>

     //ex.  need the html to connect with html for this
    // detect clicks <div id="demo">Click here</div> see js//
// document.getElementById('demo').onclick = function changeContent() {

document.getElementById('demo').innerHTML = "Help me";
document.getElementById('demo').style = "Color: red";

}

    //Cory Address these concerns with tutor Tues
// Need a button: each time pushed a new password 8-128 char is generated and printed to screen
// Req. slider
// function need to specify length8
// GIVEN that a user needs a new, secure password**

WHEN prompted
for password criteria



THEN a password is generated

var CHARACTER_SETS = [
[true, "Numbers", "0123456789"],
[true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
[false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
[false, "ASCII symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
[false, "Space", " "],
];



var characters = " !"# $ % & '()*+,-./:;<=>?@[\]^_`{|}~"
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ';"
var numbers = "0123456789";
var letters.numbers = "letters + numbers"
var password = " ";

for (var index = 0; index < length; index++) {
var character = Math.floor(Math.random() * all.length);
password += all.substring(character, character + 1);
return password;
}
var generateButton
var regSymbols - [  ]

// if else if for length
// length  => 0
//if length <0  alert "input leg"

//forEach or Char at ?? ( for a function once for each elemenrt in an array)


//Cory REMEMBER:
Configuration
Globals Variables
Initialize
Function CryptoKeyPair
Function pwGenerate characters, length



function makeid() {
    var IdLength = document.getElementById('IdLength');
    //Strip anything but 0 to 9
    var UserInput = IdLength.value.replace(/[^0-9.]/g, "");
    //Update input value
    IdLength.value = UserInput;
    var Results = document.getElementById('results');
    var text = "";
    var shuffle = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //Is input is empty?
    if (IdLength !== '') {
        for (var i = 0; i < IdLength.value; i++) {
            text += shuffle.charAt(Math.floor(Math.random() * shuffle.length));
        }
        Results.innerHTML = text;
    }
// from dan

    function passwordLengthPrompt() ;
        var lenth - prompt(""how long
        if (!length)) || if (isNotaN) {
            return;
            return length;

        }

        prompt for PushSubscriptionOptions
        var includUpper = confirm *"do you want to includer UPPER"_
    var includeLower = confirm(  do you want to includer UPPER"_  )
var includeNumber = condfirm ("do youw ant to include")

// from dan

if (!include Uppter &&
    !include lower &&
    !include Symbol)
    var randomUpper-randomElemenet(bigLetters(
        generatedPassword=generpaw + randoUpper
    ))var randomUpper - randomElemenet(bigLetters(
    generatedPassword = generpaw + randoUpperar randomUpper - randomElemenet(littleLetter
        passwordOptions(
    generatedPassword = generpaw + randoUpperar randomUpper - randomElemenet(bigLetters(
                generatedPassword = generpaw + randoUpper
    else console.log("atleast one picked");
    return;


    while(generatePW.length<options.passwordLength
        geeratedpw = genPw \random Elemtent
        
        )
        passwordText.value= password
        generateBtc.add.eventlisternerr. generatePW

        getRID of any console localStorage
}console.log so we can see it 
//create fuciton that makes pw

    function makePW(option) {


    }

call

makePW(( {

    include Uppercase
    Imclude lower
    inclSum
function randomElement

function makePassword(options)

      var passwordoptions[];
      car gneeratePW= "";

      if(options.includeUppe)
      var 
)
))
//rertimrm [ass


.anchor.apply.
        varpasswordlenth-passwordLengthPrompt()
        if (length << 7 || passwordLength)
            =
input type = "text"
id = "IdLength"
oninput = "makeid()"
placeholder = "Enter 0-9" / >
    <span id = "results" ></span>

    append input control at end of form
      $("<input type='text' value='' />")
         .attr("id", "myfieldid")
         .attr("name", "myfieldid")
         .appendTo("#form-0");
