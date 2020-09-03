// 1. Program to search for a particular character in a string.

let string1="Stormbreaker";
let char1="r";
let array1=[];
let flag;
for(let i=0;i<string1.length;i++){
    if(string1[i]==char1){
        array1.push(i);
        flag=1;
    }
}
if(flag!=1){
    console.log("1. Entered charcter is not present in the given string")
}
else{
data1=`1. The character ${char1} is found at indices: ${array1}`;
console.log(data1);
}

// 2. Program to convert minutes to seconds.

let min1=10.5;
let sec1=min1*60;
data2=`2. ${min1} minutes is equal to ${sec1} seconds.`
console.log(data2);

// 3. Program to search for an element in an array of strings.

let array3=["Mustang","Charger","Bugatti","Koenigsegg","Benz","Audi"];
let car3="Bugatti";
let pos3=array3.indexOf(car3);
data3=`3. The element ${car3} is found at index ${pos3}.`
console.log(data3);

// 4. Program to display only elements containing "a" in an array.

let array4=["Iron man","Joker","Captain America","Hello","Good","Spider man","Thor"]
let element4=[];
let flag4=0;
array4.forEach(function(elem){
    for(let i=0;i<elem.length;i++){
        if(elem[i]=="a"){
            flag4=1;
            element4.push(elem);
            break;
        }        
    }
});
data4=`4. The elements containing "a" in the given array are: ${element4}.`;
console.log(data4);

// 5. Program to print an array in reverse order.

let array5=["Iron man","Joker","Captain America","Hello","Good","Spider man","Thor"]
let reverse5=[]
for(let i=array5.length-1;i>=0;i--){
    reverse5.push(array5[i])
}
data5=`5. The given array in reverse order is; ${reverse5}.`;
console.log(data5);