// ASSIGNMENT 1

//1. Write a script to greet your website visitor using JS alert box
alert("Hello Visitor");

//2.Write a script to display following message on your web page
alert("Error! Please enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\nHappy coding!");

//4. Write a script to display following messages in sequence:
alert("Wlcome to JS Land...");

//5. Generate the following message through browser’s developer console:
alert("Hello! I can run JSs through my web browser's console");

//6. Make use of alerts in your new/existing HTML & CSS project.
<body>
    <script>
        alert("Using Alert in html and css project");
    </script>
    
</body>
//7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//<head>
    <script>
        alert("Using Alert in head section");
    </script> 
   // <meta charset="UTF-8">
   // <meta name="viewport" content="width=device-width, initial-scale=1.0">
   // <script src="test.js"></script>
//<title>Document</title>
//</head>
<script>
    alert("Using Alert before body section");
</script> 
<body>
    <script>
        alert("Using Alert in body section");
    </script> 
    
</body>
<script>
    alert("Using Alert after body section");
</script> 
//</html>

//ASSIGNMENT 2

//1. Declare a variable called username.
var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Farwa Fatima Abidi";

//3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.
var message = "Hello World!";
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
alert("Jhone Doe");
alert("15 years old");
alert("Certifie Mobie Application Development");

//5. Write a script to display the following alert using one JS variable:
var name ="PIZZA";
var pizza ="";
for(i = name.length; i>=0;i--){
 pizza += (name.slice(0,i)) + "\n";
   
}
alert(pizza);
//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). 
var email="rfarwa50@gmail.com";
var message ="My email address is "+ email;
alert(message);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
var book = "A smarter way lo learn JavaScript";
var message ="I am trying to learn from the book" + " " + book;
alert(message);


//8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through Javascript");


//Store following string in a variable and show in alert and browser through JS
var message ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(message);
document.write(message);

//ASSIGNMENT 3

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 15;
alert("I am" + " " + age + " "+"years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
var visited = 14;
alert("You have visited this site" + " " + visited + " " + "times");

//3. Declare a variable called birthYear & assign to it your birth year.
var birthYear = 2000;
var message ="My birth year is" + " " + birthYear;
document.write(message+'<br/>'+"Data type of my declared variable is number");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
var visitor_name =prompt("Enter Visitor's name");
var product_title =prompt("Enter product title");
var quantity =prompt("Enter quantity");
document.write(visitor_name +" "+ "ordered" +" "+quantity +" "+ product_title+"(s)"+ " "+"on XYZ Clothing store");

//ASSIGNMENT 4

//1. Declare 3 variables in one statement.
var variable1, variable2, variable3;

//2. Declare 5 legal & 5 illegal variable names
// legal :
var variable1, varVariable, var_variable, $var, variable;
//illegal:
var 1variable, !variable#, if, 1_variable, %variable_; 

//3. Display this in your browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write('<br/>')
document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable");
document.write('<br/>')
document.write("Variables must begin with a letter, $ or _. For example  $name, _name or name");
document.write('<br/>')
document.write("Variable names are case sensitive");
document.write('<br/>')
document.write("Variable names should not be JS keywords");

//ASSIGNMENT 5

//1. Write a program that take two numbers & add them in a new variable.
var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 + val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 - val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 * val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 / val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 % val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

//3. Do the following using JS Mathematic Expressions
var value;
document.write("Value after variable declaration is " + value +'<br/>');
value = 5;
document.write("Initial value: "+ value +'<br/>');
document.write("Value after increment is: " + ++value +'<br/>');
value  = value + 7;
document.write("Value after addition is: "+ value +'<br/>' );
document.write("Value after decrement is: " + --value +'<br/>' );
value = 12 % 3;
document.write("The remainder is: " + value)

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price
var price = 600;
var tickets = +prompt("How many tickets do you want to buy?");
var total = tickets * price;
document.write("Total cost of buying "+ tickets+ " tickets to a movie is "+total+ "PKR");

//5. Write a script to display multiplication table of any number
var number = +prompt("Enter a number");
document.write("Table of "+ number +'<br/>');
for (i=1; i <=10; i++){
    ans = number * i;
    document.write(number + " X " + i +" = " + ans+'<br/>');
}

//6. The Temperature Converter:
var celsius = +prompt("Enter temperature in celsius");
var fahrenheit = +prompt("enter temperature in fahrenheit");
var ans1 = ((fahrenheit - 32) *5 ) / 9;
var ans2 = ((celsius * 9)/5 ) + 32;
document.write(celsius+"°C is " + ans2 +"°F"+'<br/>');
document.write(fahrenheit+"°F is " + ans1 +"°C");

//7. Write a program to implement checkout process of a shopping cart system
var price1 = 650;
var price2 = 100;
var quantity1 = +prompt("Enter quantity of item 1");
var quantity2 = +prompt("Enter quantity of item 2");
var shipping = 100;
var total = quantity1 * price1 + quantity2 * price2 + shipping;
document.write("Price of item 1 is "+price1 +'<br/>');
document.write("Quantity of item 1 is "+ quantity1+'<br/>');
document.write("Price of item 2 is "+price2 +'<br/>');
document.write("Quantity of item 2 is "+ quantity2+'<br/>');
document.write("Shipping charges is " +shipping+'<br/>');
document.write('<br/>');
document.write("Total cost of your order is "+ total);

//8. Store total marks & marks obtained by a student in 2 variables. 
var marks_obtained= +prompt("Enter marks obtained");
var total_marks= 980;
var percentage = (marks_obtained / total_marks) * 100;
document.write("<h1>Marks Sheet</h1>" + '<br/>');
document.write('<br/>');
document.write("Total Marks: "+ total_marks +'<br/>');
document.write("Marks Obtained: "+ marks_obtained +'<br/>');
document.write("Percentage: "+ percentage +"%"+'<br/>');


//9. Assume we have 10 US dollars & 25 Saudi Riyals. 
var us_dollar = +prompt("How many US dollar do you have?");
var saudi_riyal = +prompt("How many Saudi Riyals do you have?");
var us_pkr = us_dollar *  104.80;
var riyal_pkr = saudi_riyal * 28;
var total_pkr = us_pkr + riyal_pkr;
document.write("<h1>Currency in PKR</h1>" + '<br/>');
document.write('<br/>');
document.write("Total Currency in PKR: "+ total_pkr +'<br/>');

//10. Write a program to initialize a variable 
var number = 5;
var exp = ((number + 5 ) * 10 ) / 2;
document.write("Answer is: " + exp);

//11. The Age Calculator
var current_year = +prompt("Enter current year");
var birth_year = +prompt("Enter birth year");
var age = current_year - birth_year;
document.write("<h1>Age Calculator</h1>" + '<br/>');
document.write('<br/>');
document.write("Current year: "+ current_year +'<br/>');
document.write("Birth year: "+ birth_year +'<br/>');
document.write("Your age is: "+ age +'<br/>');

//12. The Geometrizer: 
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius**2);
document.write("<h1>The Geometrizer</h1>" + '<br/>');
document.write('<br/>');
document.write("Radius of Circle: "+ radius +'<br/>');
document.write("Circumference is: "+ circumference +'<br/>');
document.write("Area is: "+ area +'<br/>');

//13. The Lifetime Supply Calculator:
var snack = prompt("Enter your favourite snack");
var age = +prompt("Enter your current age");
var max_age = +prompt("Enter your maximum age");
var amount = +prompt("Enter estimated amount per day");
var ans = (max_age - age) * amount;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write('<br/>');
document.write("Favourite snack: " +snack +'<br/>');
document.write("Current age: "+ age +'<br/>');
document.write("Estimated Maximum Age: " +max_age+'<br/>');
document.write("Amounts snack per day: " +amount +'<br/>');
document.write("You will need " +ans + " "+snack +" to last you until the ripe old age of "+max_age+'<br/>');


//ASSIGNMENT 6

//1. Write a program to take a number in a variable, do the required arithmetic
var a = 10;
document.write("Result:"+'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("---------------------------"+'<br/>');
document.write('<br/>');
document.write("The value of ++a is: "+ ++a+'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("The value of a++ is: "+ a++ +'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("The value of --a is: "+ --a+'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("The value of a-- is: "+ a-- +'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');

//2. What will be the output in variables a, b & result after execution 
var a = 2, b = 1;
document.write("a is: "+ a +'<br/>');
document.write("b is: "+ b +'<br/>');
var result = --a - --b + ++b + b--;
//--a; pre decrement will make the value 1
//--a - --b; --a = 1 and pre decrement in b will make it 0 hence: 1-0 = 1
//--a - --b + ++b;  pre increment in b will make it 1 hence : 1 - 0 + 1 = 2
//--a - --b + ++b + b--; post decrement in b will make it 1 (unchanged value) hence: 1 - 0 + 1 + 1 = 3
document.write("Result is: "+ result +'<br/>');

//3. Write a program that takes input a name from user & greet the user.
var name = prompt("Enter your name");
alert("Hello "+name+"!");

//5. Write a program to take input a number from user & display it’s multiplication table 
var number = +prompt("Enter Number");
if(number){
document.write("Table of "+ number +'<br/>');
for (i=1; i <=10; i++){
    ans = number * i;
    document.write(number + " X " + i +" = " + ans+'<br/>');
}
 } else {
    for (i=1; i <=10; i++){
        ans = 5 * i;
        document.write(5 + " X " + i +" = " + ans+'<br/>');
    }
 }
 
//6. Take a) Take three subjects name from user
var subj1 = prompt("Enter first subject");
var subj2 = prompt("Enter second subject");
var subj3 = prompt("Enter third subject");
var marks1 = +prompt("Enter marks of first subject");
var marks2 = +prompt("Enter marks of second subject");
var marks3 = +prompt("Enter marks of third subject");
var total = 100;
var total_obtained_marks = marks1 + marks2 + marks3;
var per1 = (marks1 / total)*100;
var per2 = (marks2 / total)*100;
var per3 = (marks3 / total)*100;
var total_percentage = per1 + per2 + per3;
document.write("<h3>Subject \xa0\xa0 Total Marks\xa0\xa0\xa0 Obtained Marks\xa0\xa0\xa0 Percentage</h3>" +'<br/>');
document.write(subj1+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+marks1+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+per1+"%"+'<br/>');
document.write(subj2+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+marks2+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+per2+"%"+'<br/>');
document.write(subj3+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+marks3+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+per3+"%"+'<br/>');
document.write("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total*3+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_obtained_marks+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_percentage+"%"+'<br/>');

// ASSIGNMENT 9-11

//1. Write a program to take “city” name as input from user
var name = prompt("Enter city name");
if(name == "karachi" || name == "Karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome");
}

//2. Write a program to take “gender” as input from user
var gender = prompt("Enter your gender");
if(gender == "male" || gender == "Male"){
    alert(" Good Morning Sir");
} 
else if(gender == "female" || gender == "Female"){
    alert(" Good Morning Ma’am");
}

//3. Write a program to take input color of road traffic signal 
var color = prompt("Enter traffic signal color");
if(color == "red"){
    alert("Must Stop");
} 
else if(color == "yellow"){
    alert("Ready to move");
}
else if(color == "green"){
    alert("Move now");
}

//4. Write a program to take input remaining fuel in car 
var fuel = +prompt("Enter amount of fuel");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("No need to refill");
}

//5. Run this script, & check whether alert message would be displayed or not.
//a OUTPUT: given condition for variable a is true
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//b OUTPUT: No output shown
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//c OUTPUT: condition 2 is true  and condition 4 is true
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//d OUTPUT: The cost equals
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e OUTPUT: True
if (true){
    alert("True");
}
    if (false){
    alert("False");
}
//f OUTPUT: car is smaller than cat
if("car" < "cat"){
    alert("car is smaller than cat");
    }
 
//6. Write a program to take input the marks obtained in three subjects & total marks. 
var marks1 = +prompt("Enter marks of first subject");
var marks2 = +prompt("Enter marks of second subject");
var marks3 = +prompt("Enter marks of third subject");
var total = +prompt("Enter total marks");
var total_obtained_marks = marks1 + marks2 + marks3;
var percentage = (total_obtained_marks / total)*100;
document.write("<h1>Marks Sheet</h1>"+'<br/>');
document.write('<br/>');
document.write('<br/>');
document.write("Total Marks: "+total+'<br/>');
document.write("Marks Obtained: "+total_obtained_marks+'<br/>');
document.write("Percentage: "+percentage+"%"+'<br/>');
if(percentage >= 80){
    document.write("Grade: A-One"+'<br/>');
document.write("Remarks: Excellent"+'<br/>');
} else if(percentage >= 70 && percentage < 80){
    document.write("Grade: A"+'<br/>');
document.write("Remarks: Good"+'<br/>');
}  else if(percentage >= 60 && percentage < 70){
    document.write("Grade: B"+'<br/>');
document.write("Remarks:You need to improve"+'<br/>');
}  else if(percentage < 60){
    document.write("Grade: Fail"+'<br/>');
document.write("Remarks: Sorry"+'<br/>');
}

//7. Guess game
var secret_number = 8;
var guess = +prompt("Enter your Guess number from 1 to 10");
if( guess == secret_number){
    alert("Bingo! Correct answer!");
} else if(guess == secret_number-1){
    alert("Close enough to the correct answer");
} else {
    alert("Your guess is wrong");
}

//8. Write a program to check whether the given number is divisible by 3.
var number = +prompt("Enter your number");
var result = number % 3;
if (result == 0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number
var number = +prompt("Enter a number");
if(number%2 == 0){
    alert("Number is even");
}
else{
    alert("Number is odd");
}

//10. Write a program that takes temperature as input 
var temp = +prompt("Enter temperature");
if(temp > 40){
    alert("It is too hot outside.");
} 
else if(temp > 30 && temp < 40){
    alert("The Weather today is Normal.");
}
else if(temp > 20 && temp < 30){
    alert("Today’s Weather is cool.");
}
else if(temp > 10 && temp < 20){
    alert("OMG!Today’s weather is so Cool.");
}

//11. Write a program to create a calculator for +,-,*, / & %
var number1 = +prompt("Enter first number");
var number2 = +prompt("Enter second number");
var operation = prompt("Enter operation");
if(operation == "+"){
   result = number1 + number2;
   alert("Result: " +result);
} else if(operation == "-"){
    result = number1 - number2;
    alert("Result: " +result);
 }
 else if(operation == "*"){
    result = number1 * number2;
    alert("Result: " +result);
 }
 else if(operation == "/"){
    result = number1 / number2;
    alert("Result: " +result);
 }
 else if(operation == "%"){
    result = number1 % number2;
    alert("Result: " +result);
 }
 
 //ASSIGNMENT 12-13

 //1. Write a program that takes a character
 var character = prompt("Enter a character");
if(character>= "A" && character <= "Z"){
    alert("Uppercase letter");
}
else if(character>= "a" && character <= "z"){
    alert("Lowercase letter");
}
else if(character>= "0" && character <= "9"){
    alert("Number");
}

//2. Write a JavaScript program that accept two integers and display the larger.
var number1 = +prompt("Enter first number");
var number2 = +prompt("Enter second number");
if(number1 > number2){
    alert(number1+" is the larger number");
}
else if(number2 > number1){
    alert(number2+" is the larger number");
}
else {
    alert("numbers are equal");
}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero
var number = +prompt("Enter a number");
if(number > 0){
    alert("Number is positive");
}
else if(number < 0){
    alert("Number is negative");
}
else if(number == 0){
    alert("Number is Zero");
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel
var ch = prompt("Enter a character");
if(ch == "a" || ch =="i" || ch =="o" || ch=="u" || ch =="e"){
    alert("True");
} else{
    alert("false");
}

//5. Write a program that  a. Store correct password in a JS variable.
var correct_pass = "saylani";
var pass = prompt("Enter your password");
if(pass == ""){
    alert("Please enter your password");
}
else if(pass == correct_pass){
    alert("“Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect Password");
}

//6. This if/else statement does not work. Try to fix it
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else {
greeting = "Good evening";
alert(greeting);
}

//7. Write a program that takes time as input from user in 24 hours clock format
var time = +prompt("Enter time in 24 hours format");
if(time >= 0000 && time < 1200){
   alert("Good morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good afternoon!");

 }
 else if(time >= 1700 && time < 2100){
    alert("Good evening!");
    
 }
 else if(time >= 2100 && time < 2359){
    alert("Good night!");
    
 }

 //ASSIGNMENT 13-15

 //1. Declare an empty array using JS literal notation
var names_array = [];

//2. Declare an empty array using JS object notation
var names_array = new Array();

//3. Declare and initialize a strings array.
var Myarray = ["string","array"];

//4. Declare and initialize a numbers array
var num_array = [1,4,77,9];

//5. Declare and initialize a boolean array.
var boolArray = [true,false];

//6. Declare and initialize a mixed array.
var mixed_Array = [a,b,2,7,true,false];

//7. Declare and Initialize an array and store available education qualifications
var education = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS","M.Phil","PhD"];
var num = [1,2,3,4,5,6,7,8];
document.write("<h1>Qualifications</h1>");
for(i = 0; i<education.length; i++){
    document.write(num[i]+") "+education[i]+'<br/>');
}

//8. Write a program to store 3 student names in an array
var names = ["Micheal","John","Tony"];
var scores = [320,230,480];
var total = 500;
for(i=0; i<names.length; i++){
    document.write("Score of "+names[i]+ " "+ "is "+ scores[i]+"."+"Percentage "+(scores[i]/total)*100+"%"+'<br/>');
}

//9. Initialize an array with color names. Display the array elements in your browser.
var color = ["red","blue","black"];
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
//. Ask the user what color he/she wants to add to the beginning
var color = ["red","blue","black"];
document.write("List before adding color"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');
var add_color = prompt("What color do you want to add in beginning?");
color.unshift(add_color);
document.write("List after adding color"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');

//b. Ask the user what color he/she wants to add to the end 
var color = ["red","blue","black"];
document.write("List before adding color"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');
var add_color = prompt("What color do you want to add in beginning?");
color.push(add_color);
document.write("List after adding color"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');

//c. Add two more color to the beginning of the array
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+" , ");
}
document.write('<br/>');
var add_color = ["brown","yellow"];
color.unshift(add_color);
document.write("List after adding color:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+" , ");
}
document.write('<br/>');

//d. Delete the first color in the array. Display the updated array in your browser
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
var add_color = ["yellow", "brown"];
color.shift(add_color);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//e. Delete the last color in the array. 
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
var add_color = ["yellow", "brown"];
color.pop(add_color);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//f. Ask the user at which index he/she wants to add a color & color name
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
var add_color = ["yellow"];
var index = +prompt("Which index to add color?");
color.splice(index,0,add_color);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
var color = ["red","blue","black","yellow","pink"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
//var add_color = ["yellow"];
var index = +prompt("At which index to delete color?");
var remove = +prompt("How many colors to remove?");
color.splice(index,remove);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//10. Write a program to store student scores in an array 
var scores = [320, 230, 480, 120];
document.write("Scores of students: ");
for(i = 0; i < scores.length; i ++){
 document.write(scores[i]+",");
}
document.write('<br/>');
scores.sort();
document.write("Ordered scores of students: ");
for(i = 0; i < scores.length; i ++){
    document.write(scores[i]+",");
   }

//11. Write a program to initialize an array with city names.
var cities = ["karachi", "lahore", "islamabad","quetta","peshawer"];
document.write("City list:"+'<br/>');
for(i = 0; i < cities.length; i ++){
    document.write(cities[i]+",");
   }
document.write('<br/>');   
var selectedcities = cities.slice(0,3);
document.write("Selected cities list:"+'<br/>');
for(i =0 ; i < selectedcities.length; i ++){
    document.write(selectedcities[i]+",");
   }

//12. Write a program to create a single string 
var  arr = ["This", "is",  "my", "cat"];
var joined = arr.join();
document.write("Array:"+'<br/>');
document.write(joined);
document.write('<br/>');
document.write('<br/>');
document.write("String:"+'<br/>');
for(i = 0; i <arr.length; i++){
    document.write(arr[i]+" ");
}

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored
var items = ["keyboard", "mouse", "printer", "monitor"];
var display = items.join();
document.write("Display:"+'<br/>'+display+'<br/>'+'<br/>');
for(i = 0; i < items.length; i++){
    document.write("Out:"+'<br/>'+ items[i] +'<br/>');
}

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
var items = ["keyboard", "mouse", "printer", "monitor"];
var display = items.join();
document.write("Display:"+'<br/>'+display+'<br/>'+'<br/>');
items = items.reverse();
for(i = 0; i < items.length; i++){
    document.write("Out:"+'<br/>'+ items[i] +'<br/>');
}

//15. Write a program to store phone manufacturers
var mobile = ["Apple","Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];
document.write("Dropdown/select:"+'<br/>');
for(i = 0; i <mobile.length; i++){
    document.write(mobile[i]+'<br/>');
}


//ASSIGNMENT 17-20

//1. Declare and initialize an empty multidimensional array
var arr = [
    [],
    [],
    []
    
];

//2. Declare and initialize a multidimensional array 
var arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

for(i = 0; i <arr.length; i++){
      document.write(arr[i]+'<br/>');
   }

//3. Write a program to print numeric counting from 1 to 10 
for(i=1; i<=10; i++){
    document.write(i+'<br/>');
}

//4. Write a program to print multiplication table
var number = +prompt("Enter a number to show it's multiplication table");
var len = +prompt("Enter length of multiplication table");
document.write("Multiplication Table of "+number +" of length "+len+'<br/>'+'<br/>');
for(i=1; i<=len; i++){
    var result = number * i;
    document.write(number+ " x "+i+ " = "+result+'<br/>');
}

//5. Write a program to print items of the following array
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(i =0; i < fruits.length;i++){
    document.write(fruits[i]+'<br/>');

}
document.write('<br/>');
for(i=0 ; i< fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+'<br/>');
}

//6. Generate the following series in your browser
//a. Counting:
document.write("<h1>Counting</h1>"+'<br/>');
for(i =1; i <= 15;i++){
document.write(i+" , ");    
}
//b. Reverse counting:
document.write("<h1>Reverse Counting</h1>"+'<br/>');
for(i =10; i >= 1;i--){
document.write(i+",");    
}
//c. Even:
document.write("<h1>Even</h1>"+'<br/>');
for(i =0; i <=20 ;i++){
    if(i % 2== 0)
    {
      document.write(i+",");
    }
}
//d. Odd:
document.write("<h1>Odd</h1>"+'<br/>');
for(i =0; i <=20 ;i++){
    if(i % 2!= 0)
    {
      document.write(i+",");
    }
}
//e. Series:
document.write("<h1>Series</h1>"+'<br/>');
for(i =1; i <=20 ;i++){
    if(i % 2== 0)
    {
      document.write(i+"k"+",");
    }
}

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?");
for(i=0; i< items.length; i++){
    if(items[i] == search){
        document.write(items[i] + " is available at index "+i+" in our bakery"+'<br/>');    
    }    
}
if(!items.includes(search) ){
    document.write("We are sorry. "+search + " is not available in our bakery"+'<br/>');
}

//8. Write a program to identify the largest number in the given array
var numbers = [24, 53, 78, 91, 12];
var largest= numbers[0];

for (i=0; i<=numbers.length;i++){
    if (numbers[i]>largest) {
        var largest=numbers[i];
    }
}
document.write(largest+" is the largest number");

//9. Write a program to identify the smallest number in the array
var numbers = [24, 53, 78, 91, 12];
var smallest= numbers[0];
document.write("Array items: "+numbers.join()+'<br/>');

for (i=0; i<=numbers.length;i++){
    if (numbers[i]<smallest) {
        var smallest=numbers[i];
    }
}
document.write("The smallest numbers is "+smallest);

//10. Write a program to print multiples of 5 ranging 1 to 100
for(i=1 ; i <= 100; i++){
    if(i % 5 == 0){
        document.write(i+",");
    }
}























