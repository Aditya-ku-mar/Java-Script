const score=400//javascript automatically configure it as number
console.log(score)
//we can also explicitly declare it as number
const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)//we can apply string properties 
console.log(balance.toFixed(2))//take to upto two decimal places

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))

const num=1000000
console.log(num.toLocaleString())//default U.S system 
console.log(num.toLocaleString('en-IN'))//converted to indian system
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

/********************Maths*****************/
//Math  is inbuilt library of java script

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.56))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.sqrt(24))
// console.log(Math.pow(2,3))
// console.log(Math.max(2,3,4,5))
// console.log(Math.min(2,3,4,5))
console.log(Math.random())//returns a value b/w 0 and 1 range of random [0.0, 1.0)
console.log(Math.random()*10+1)//as random can return 0 so random*10=0 so we can avoid it by adding 1 and range [1.0,11.0)
//we can also use Math.floor(Math.random()*10 +1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
