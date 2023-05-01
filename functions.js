//Declare a function fullName and it print out your full name.
 function fullName(name){
    console.log(`My name is `+name);
 }
 let me="Joan Njiru"
 fullName(me)

 //Declare a function fullName and now it takes firstName, 
 //lastName as a parameter and it returns your full - name.
 function myFullName(name1,name2){
    console.log(name1+" "+name2);
 }
let first="Ian"
let second="Mwiti"
myFullName(first,second)

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    return num1+num2
}
console.log(addNumbers(4,8));

//An area of a rectangle is calculated as follows: area = length x width. Write a function 
//which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    return length*width
}
console.log(areaOfRectangle(3,8));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
    return (length+width)*2
}
console.log(perimeterOfRectangle(5,9));


//A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height){
    return length*width*height
}
console.log(volumeOfRectPrism(4,7,3));

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    return Math.PI*r*r
}
console.log(areaOfCircle(7));

//Circumference of a circle is calculated as follows: circumference = 2πr. 
//Write a function which calculates circumOfCircle
function circumOfCircle(r){
    return (Math.PI*r)*2
}
console.log(circumOfCircle(14));

//Density of a substance is calculated as follows:density= mass/volume. 
//Write a function which calculates density.
function calculateDensity(mass,volume){
    return mass/volume
}
console.log(calculateDensity(12,6));

//Speed is calculated by dividing the total distance covered by a 
//moving object divided by the total amount of time taken. 
//Write a function which calculates a speed of a moving object, speed.
function calculateSpeed(distance,time){
    return distance/time

}
console.log(calculateSpeed(21,7));

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calculateWeight(mass,gravity){
    return mass*gravity
}
console.log(calculateWeight(20,5));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celcius){
    return (celcius*9/5)+32
}
console.log(convertCelsiusToFahrenheit(24));

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. BMI is used to broadly define different weight groups 
//in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese 
//based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bodyMassIndex(weight,height){
    let bmi=weight/(height*height)
    if(bmi<18.5){
        console.log("Underweight");
    }
    if(bmi>=18.5 && bmi<=24.9){
        console.log("Normal weight");
    }
    if(bmi>=25 && bmi<=29.9){
        console.log("Overweight");
    }
    if(bmi>30){
        console.log("Obese");
    }

}
console.log(bodyMassIndex(65,1.68));

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum 
//with out using Math.max method.
function findMax(x,y,z){
if(x>y &&x>z){
    console.log(x);
}
if(y>x&&y>z){
    console.log(y);
}
if(z>y && z>x){
    console.log(z);
}
// else if(x==y||x==z||y==z){
//     console.log(x);
// }
}
findMax(5,10,10)