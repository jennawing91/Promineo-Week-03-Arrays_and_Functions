console.log("1.	    Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93");
var ages = [3, 9, 64, 2, 8, 28,93]
console.log (ages);

console.log("1a.    Programmatically subtract the value of the first element in the array from the value in the last element of the array."    );
console.log("•	Do not use numbers to reference the last element, find it programmatically,");
console.log("•	ages[7] – ages[0] is not allowed!");

console.log("Value difference between the first and last elements in the array : " , ages[ages.length-1] - ages[0]);
// [ages.length-1] designates the very last element in the array and uses this value
// ages[0] designates the first element in the array to use its value
console.log("1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");

ages.push(32);   // using .push at the end of the array name puts (or pushes) new elements into the array
console.log(ages);
console.log("New value of difference between the first and last elements in the array:", ages[ages.length-1] - ages[0]);

console.log("1c.	Use a loop to iterate through the array and calculate the average age. ");
var i, sum=0;  // sets the beginning of sum=0 
    for(i=0; i<ages.length; i++)      
// iterates through the length of the array until the end of the array beginning with the first element
{
    sum = sum + ages[i];     
// adds the sum of values within the array plus 0 which was the starting sum total
}
console.log("Average age in the ages array is : ",sum/ages.length);
// prints the title of the return and calculates based on the sum above divided by the number of elements (ie length) in the array
console.log("\n\n");

console.log("2.	    Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.");
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log("2a.	Use a loop to iterate through the array and calculate the average number of letters per name. ");
sum=0;
// defines the starting count of the sum
    for(i=0; i<names.length; i++)
// sets the loop to run through each element and count how many characters are in each element of the array
{
    sum = sum + names[i].length;
// adds the number of characters in each element of the array to the starting count of 0 for a total sum of characters
}
console.log("Average letters per name in the array : ",sum/names.length);
// prints the average letter count by using the sum of all characters divided by the number of elements (i.e. length) in the array

console.log("2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. ");
// concatenate = link things together in a chain
var con= names[0];
// sets the variable to make a new array starting with the first element of the names array
    for(i=1; i<names.length; i++)
// runs a loop through the elements starting with the second element in the list through to the end
{
    con = con.concat(" ",names[i]);
// adds the first name of the array as defined by the first variable plus all the additional elements of the array as 
// the loop pulled them 
}
console.log("List of names concatenated : ",con);
// prints all of the names in the element together

console.log("\n\n");

console.log("3.	    How do you access the last element of any array?");
console.log("use Array.length-1");

console.log("\n\n");

console.log("4.	How do you access the first element of any array?");
console.log("use Array[0]")

console.log("\n\n");

console.log("5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
var nameLengths = [];  // creates a new empty array with name nameLengths
for(i=0; i<names.length; i++)  // loop runs through the previous names array starting with the first element and counts how many letters are in each element
{
    nameLengths[i] = names[i].length;  // defines the variable using the element letter count in the names array
}
console.log(nameLengths);

console.log("\n\n");

console.log("6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ");
    sum=0;    // defines the beginning value of the sum
    for(i=0; i<nameLengths.length; i++)    // runs through the values of the array as defined above namesLength array
{
    sum = sum + nameLengths[i];    //adds the count of letters in each element of the nameLengths array together with the defined sum
}
console.log("Sum of elements in the nameLengths array : ",sum);

console.log("\n\n");

console.log("7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).");
function concat_n_times(word, n)
{
    var con = word;
    for (i=1; i<=n; i++)  // loops through the variable for a designated number of runs
        {
        con = con.concat(word);  // changes the variable to be equal to the number of runs in the list chained together 
        }
        return con;  // returns the new variable of list chained together
}
console.log("Concatenated words : ",concat_n_times("buffalo", 5)); // prints the function call with the elements chained together

console.log("\n\n");

console.log("8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.");
console.log("•	The full name should be the first and the last name separated by a space.");

function fullName(firstName, lastName){    // creates a function that puts first and last name together
    return firstName + " " + lastName;    // returns a concatenated name
}
var fullname = fullName("Jennifer", "Hanson");   // function call that includes the return with input variables
console.log(fullname);  //prints the function call with the full name concatenated

console.log("\n\n");

console.log("9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
function numbersGreaterThan100(arr)  //sets the function to look at an array
{
       sum=0;    // establishes that the beginning sum to be added is 0
    for(i=0; i<arr.length; i++)  // runs a loop through the length of the array to list the number of elements
{
    sum = sum + arr[i];  // adds the value of each of the elements returned by the for loop and adds them together with the beginning sum of 0
    }
    if(sum > 100)    // boolean if/else to return a value if the total sum is more or less than 100
    {
    return true;
    }
    else
    {
    return false;
    }
}
console.log("Number is greater than 100 ;", numbersGreaterThan100([50,52,1]));  // This line is unsuccessful as it returns a value that is false but should be true

console.log("\n\n");

console.log("10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function average(arr){
 	var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];  
    var avg = total/arr.length;
  }
  return avg
}
console.log("Average of the array:", average([100,50,75]));
console.log("\n\n");

console.log("11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
function averageBetween(arr1,arr2){
    var total1 = 0;
    for(var i=0;i<arr1.length;i++){
        total1 += arr1[i];
        var avg1 = total1/arr1.length;
    }
    var total2 = 0;
    for(var i=0;i<arr2.length;i++){
        total2 += arr2[i];
        var avg2 = total2/arr2.length;
    }  
    if (avg1 > avg2)
    return true;
    else
    return false;
}
console.log("First array average is greater than second array:", averageBetween([3,6,9],[6,9,12]));
console.log("\n\n");

console.log("12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink(isHotOutside, moneyInPocket){ // creates an action to determine if 2 conditions are met
    if((isHotOutside) && (moneyInPocket > 10.50))  // if/else to determine whether both conditions are true
    {
    return true;
    }
        else
    {
    return false;
    }
}
var hotOutside = true; 
var moneyInthePocket = 9.5;
console.log("Drink can be bought : ",willBuyDrink(hotOutside, moneyInthePocket));  // prints out whether it is hot outside and money is more than 10.50
console.log("\n\n");

console.log("13.	Create a function of your own that solves a problem. ");
console.log("•	In comments, write what the function does and why you created it.");
// the problem to be solved is whether to wear my hair curly or straight. 
// the solution will be based on my mood and the weather. If is it rainy or I am feeling lazy it will return as true. 
function curlyHair(weather,mood){       
    if((weather) || (mood))
    {
    return true;
    }
        else
    {
    return false;
    }
}
var isItRainy = false
var amILazy = true
console.log("I will wear my hair curly today :",curlyHair(isItRainy,amILazy));

