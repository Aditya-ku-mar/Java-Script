//array
const myArr=[0,1,2,3,4,5]
// const myHeros=["shaktiman","naagraj"]
// const myArr2=new Array(1,2,3,4)
//console.log(myArr[1])

//Array methods

/*push and pop*/

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

/*shift and unshift*/

// myArr.unshift(9)//ADD the element in starting of thr array
// console.log(myArr)
// myArr.shift()//shift the array to left by one position
// console.log(myArr)

// console.log(myArr.includes(1))//returns true or false
// console.log(myArr.indexOf(3))//return index of ele if not present returns -1

// const newArr=myArr.join()//binds and convert to string

// console.log(myArr)//array
// console.log(newArr)//string

// console.log(typeof myArr)//array object 
// console.log(typeof newArr)//string

/*slice and splice*/
console.log("A",myArr)

const myn1=myArr.slice(1,3)//return [1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)//return [1,3] and delete [1,3] part of array from the original array
console.log(myn2)
console.log("C",myArr)
