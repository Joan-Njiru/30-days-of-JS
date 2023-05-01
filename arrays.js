//Declare an empty array;
let empty=[]

//Declare an array with more than 5 number of elements
let fruits =["mangoes","passion","oranges","watermelons","Kiwis","pineapples"]
console.log(fruits);

//Find the length of your array
console.log(fruits.length);

//Get the first item, the middle item and the last item of the array
console.log(fruits[0]);
midIndex=Math.floor((fruits.length-1)/2)
console.log(fruits[midIndex]);
console.log(fruits[fruits.length-1]);

//Declare an array called mixedDataTypes, put different data types in 
//the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes=["Joan",true,21.3,null,{name:"Ted"},23n]
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, 
//Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
let middleIndex=Math.floor(itCompanies.length-1)/2
console.log(itCompanies[middleIndex]);
console.log(itCompanies[itCompanies.length-1]);

//Print out each company
console.log(itCompanies);

//Change each company name to uppercase one by one and print them out

for(i of itCompanies){
    console.log(i.toUpperCase());
}

//Print the array like as a sentence: Facebook, Google, Microsoft,
// Apple, IBM,Oracle and Amazon are big IT companies.

let sentence = itCompanies.join(',')+` are big IT companies`
console.log(sentence);

//Check if a certain company exists in the itCompanies array. 
//If it exists return the company else return a company is not found
function checkItem(company){
    if(itCompanies.includes(company)){
        return company;
    }
    else{
        return("a company is not found");
    }
}
console.log(checkItem("PiedPiper"));
console.log(checkItem('Facebook'));


//Filter out companies which have more than one 'o' without the filter method
for(i of itCompanies)
   


//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-4,-1));

//Slice out the middle IT company or companies from the array
let mid=Math.floor(itCompanies.length-1)/2
console.log(itCompanies.slice(mid,mid+1));

//Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

//Remove the middle IT company or companies from the array
itCompanies.splice(mid,1)
console.log(itCompanies);

//Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies);

//Remove all IT companies
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies);