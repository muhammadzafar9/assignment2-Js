/*chapter 21-25 */

//task 1 
/* var firstName =prompt("Enter your First Name:");
var secondName=prompt("Enter your second name:")
alert("WELCOME \n"+firstName +" "+ secondName); */

//task 2 
/* var str  = prompt ("Enter your favorite mobile model [samsung A30s, iphone s6 etc]");
alert("Length of string :"+str.length); */

//task 3
/* var str ="pakistani";
var n = str.indexOf("n");
console.log("string:"+str+ "\n" + "index of  n is :" +n); */

//task 4 
/* var str ="hello world";
var number = str.lastIndexOf("l");
document.write("the index of 'l' in  hello world  are as: "+number) */

//task 5
/* var str ="pakistani";
var res = str.charAt(3);
console.log(str+ " "+ "character index of 3 is \n "+ res); */

//task 6 
/* var contactMethod ="we are using concat() method ";
var str1 = prompt("Enter you first name ");
var str2 = prompt("Enter your second name");
var str3 = ("we are concat() method ")
var output =str1.concat(str2,str3);
alert(output); */

//task 7 
/* var str = "Hyderabad"; 
  var str1="Islam"
  var res = str1+str.slice(5);
  document.write("city Hyderabad change to : \n");
  document.write(res);
 */
//task 8
/* var myStr = 'Ali and Sami are best friends. They play cricket and football together';
var newStr = myStr.replace(/and/g, "&");
document.write(newStr); */

//task 9
/* var value= "472";
document.write("value:"+ " " + value + "<br\> " + " type : string ");

var changeValue = parseInt(value) ;
document.write("value change from string to number : "+ changeValue); */

//task 10 ( toLower case    )
/* var letter= prompt("Enter any string letter [apple, orange etc]");
document.write("USER INPUT: "+letter);
var letter1= letter.toUpperCase();
document.write("input in capital letters"+letter1); */

//task 11 ( toUpper case     )
/* var userInput = prompt("Enter your letter in lower case  [apple, luck, good etc] ");
var userOutPut = userInput.toUpperCase();
console.log(userOutPut);
 */
//task 12
/* var num =35.36;
num =parseInt(num);
console.log(num) */

//taks 13


  /* var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
} */

//tsk 14 
/* var items=["graps", "apple", "banana", "orange"];

var search =prompt("Enter Search item[graps, apple etc...]");

var str = search;
if(str.search(/[^a-zA-Z]+/)){
    document.write("YES" + search + " "+ "\n is availabe in list at index  of an array"+items.indexOf(search) );

}
else{
    alert("We are Sorry" +  search  + "is not avaiable in array list");
}  */

//task 18
/* var str =prompt("Enter nay string like[apple, pakistan etc]");

var res = str.charAt(str.length-1);
document.write("the last character of input: "+ res); */

//task 18 l
/* var temp = "The quick brown fox jumps over The lazy dog";
var count = (temp.match(/The/g) || []).length;

console.log("The quci brown fox jumps over The lazy dog");
console.log("there are two occourance(s) of word  [THE]   "+count); */

//task 15 (password)
/* var password= prompt("Please Enter your Password! it must BE contains [a-z,A-Z,0-9]");
var myPassword = "password must have the following values : it must contain [a-z,A-Z,0-9]";
document.write(myPassword);

if(!password.match(/[a-z]/)){
    document.write("Password must contain at least small character[a-z] ");
    
}
else if(password< 6 ) {
    document.write("Your password has less than 6 characters.");
}
else if(!password.match(/[A-Z]/)){
    document.write("Password must contain at least one upper case letter")

}
else if(!password.match(/\d+/g)){
    document.write("Password must contain at least one number")
}
else{
    alert("Please enter a valid password!");
}
 */

 /* ----------~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 21-25 end  ~~~~~~~~~~~~~~~~~~~~~~~ */

 /* chapter# 26-30 begining  */
 //task 1 (round off numbers)
/*  var number = +prompt("PLEASE ENTER a round different numbers to the nearest integer ");

 var roundoff = Math.round(number);
 if(roundoff> 0){
    document.write("Round off  value :"+roundoff + "<br\> "+ " floor  value: "+ " " +Math.floor(number) + "<br\>"+  " ciel number : "+ Math.ceil(number));

 }
 else{
     document.write("invalid value!");
 } */
 
 
//task# 2 

/* var numberValue = +prompt("PLEASE ENTER a  negative [like -3.456] round different numbers to find nearest integer ");

 var round = Math.round(numberValue);
 if(round>0){
     document.write("INVALID VALUE...!");
 }
 else{

    document.write("Round off  value :"+round + "<br\> "+ " floor  value: "+ " " +Math.floor(numberValue) + "<br\>"+  " ciel number : "+ Math.ceil(numberValue));

 } */

 //TASK# 3 
/*  let absoluteNumber =prompt("please ente a value to find absolute number value[like -4, -5.2 etc");
 document.write("the absolute value of "+ absoluteNumber +"="+ " "+ Math.abs(absoluteNumber) ) */

 //task # 4 
/*  var randomValue = prompt("enter a random dice value ");
 document.write("Random() dice  value of  "+randomValue+"<br\>"+ Math.random(randomValue)); */

 //task # 5  
/*  var coinValue = prompt("How many time do you want to flip the coin?"); */

/* var numOfTrials = prompt("Ente totoal number of tirals ");
var headTurnUp = 0;
var tailTurnUp = 0;

var x =headTurnUp/numOfTrials;

var y = tailTurnUp/numOfTrials;

for(var i =0; i<numOfTrials; i++){
    if(Math.floor(Math.random(i))<0.5){

        console.log("HEADS"+x)
    }
    else {
        console.log("TAIL "+y);
    }

} */

/* Task# 7  */
/* var weight = prompt("Enter you weight in kilograms")
var weightValue=weight;
document.write(weight); */

//task# 6 
/* var x = Math.floor((Math.random() * 100) + 1);
document.write("andom number between 1 and 100"+"<br\>" +x); */

//task# 8
/* var number=prompt("Enter a number between [1-10] ")
var secretNumber = 3;
if(number != secretNumber){
    alert("Try Again!")
}
else{
    alert("CONGRATULATIONS!");

} */


/* </26-30>  */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~ chapter # 31-35 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//task# 1
/* var rightNow = new Date();
document.write("Current date and time : "+ " "+ rightNow); */


//task#2 
/* var objDate = new Date().toLocaleString("en-us", { month: "long" });
document.write("current month:" +" "+objDate); */
 //task#3 
/* var event = new Date();
var options = { weekday: 'short' };
console.log("today is "+event.toLocaleDateString('en-US', options)); */

// taks# 4 

/* var num = +prompt("Enter any number between [0-6]");

switch(num){
    case 0:
        
        num = ("its fund day!");
        break;
        case 1:
            num =("its monday ");
            break;
            case 2:
                num = ("its tuesday");
                break;
                case 3:
                    num =("its wenesday");
                    break;
                    case 4:
                        num =("its thursday");
                        break;
                        case 5:
                            num =("its friday");
                            break;
                            case 6:
                                num =("yahoo!funny day...!");
                                break;
                                default:
                                    num ="invalid number day you enterd!";

                                    

}
alert("toay is "+num); */

// task# 5 
/* var dayNew = prompt("please enter any number ");

var d = new Date();
var n = d.getDate();
console.log("the day of the month june is  "+ " "  + n);

console.log("the current date is \n "+d)
if(dayNew >16){
    console.log("last days of the month ")
}
else{
    console.log("first firteen days of the month")
} */

// task# 6 
/* var d = new Date();
console.log("\n current date is :"+d);

var d = new Date();
  var n = d.getTime();
  console.log("Elapsed milisecond since JANUARY 1, 1970:  " +n );

  var x = new Date();
  var y = x.getMinutes();
  console.log("Elapsed minutes since Januray 1, 1970: "+ y); */


// task# 8  
/* var x = new Date();

var lastday = function(y,m){
    return  new Date(y, m +1, 0).getDate();
    }
    console.log("the last daye of the "+x +" "+ (lastday(2020,5))); */

    //task 9 
/*     var day_start = new Date("April 25 2020");
    var day_end = new Date("June 21 2020");
    var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
    document.write( Math.round(total_days)+ "days have passed science 1st Ramazan 2020");  */

    // tast 12
/*     var d = new Date();
    console.log("the current  date is :"+d);
     d.setFullYear(1914);
     console.log("100 years back, it was "+d); */

     //task #  7 (24 hours format AM PM)
/* var formatHours = 24;
var time = prompt("Enter your time hours [24 Hours Format]")

if(time >=12 ){
    console.log("its PM")
}
else if(time<12){
    console.log("its Am")
}
else{
    console.log("invalid value")

} */

/* chapter 31-34 end   just 3 question solution  required from this section to  */
// task 1 (35-38)
/* function add(a,b,c){
    alert(a+b+c)
}
add(5,10,3);

//task 2 
function greeting (greet){

    alert(greet)
}
greeting("hello SaylaniWalfare!") */

//task 3
/* function sumNumbers (x, y) {
    if (x == y) {
      return  (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumNumbers(10, 20));
   */


   //task // 5
/*    const square = function(x) {
    return x * x;
  };
  
  console.log(square(12)); */
//task 6 
/*   function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert("the factirial of number is "+ factorial(5) ); */


    
    







