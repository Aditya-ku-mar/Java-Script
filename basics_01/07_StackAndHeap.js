//stack(primitive) and Heap(reference type) (Non primitive)
let myName="Aditya"

let anotherName=myName//copy of the myname 
anotherName="Amit"

console.log(myName)
console.log(anotherName)

let userOne={
    email:"user1@gamil.com",
    upiId:"user@ibl",
}
userTwo=userOne//share same reference
userTwo.email="user2@gamil.com"
console.log(userTwo)
console.log(userOne)