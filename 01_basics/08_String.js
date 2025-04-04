const name = "Aditya"
const repoCount = 50

console.log(name + repoCount + " Value");//not used now a days used previously

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//used nowadays and we can also use string manipulation method

const gameName = new String('Aditya-hc-com')//string is not a array it is object and stored as key value pair as 0->A,1->d....12->m

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)//if we use substring(-8,4) it ignore negative value and start from zero same as(0,4)

console.log(newString);

const anotherString = gameName.slice(-12, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//threre are also fxn as trimStart() and trimEnd()

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//replace %20 to - 

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

//split(seperator,limit)
let Name="Aditya Kumar 1"
const words = Name.split(" ");
console.log(words)
console.log(words[0])

//using limit in split

const chars=Name.split("",5)//split the array only upto index number 4 ,5 is excluded if we try to access 5 or greater it will output undefined
console.log(chars[4])

const word=Name.split()
console.log(word)//output array of the string Name

