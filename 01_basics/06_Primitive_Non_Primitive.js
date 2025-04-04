//primitive(call by value)
//7 types -String,Number,Boolean,null,undefined,Symbol,Bigint

//Non Primitive(reference)
//Array,Objects,Functions

//dynamically typed language
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;//decrealed undefined automatically

const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id==anotherId)

const bigNumber=3648363764736336388368n//n used to represent big int

const heros=["shaktiman",'naagraj',"doga"]
let myobj={
    name:"Aditya",
    age:22,
}
//fxn can be treated as variable in js

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)//it can be undefined for bigInt

console.log(typeof(outsideTemp))//null->object

console.log(typeof myFunction)//function->function(objectfunction)

//typeof non primitive date types are basically object 

