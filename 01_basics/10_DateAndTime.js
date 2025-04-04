// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)

// let myCreatedDate=new Date(2025,0,23)//moths start from 0 in js
// console.log(myCreatedDate.toDateString())

// let mynewDate=new Date(2025,1,21,5,5,30)
// console.log(mynewDate.toLocaleString())

// let newDate=new Date("2025-04-25")//here month start from 1 format yy-mm-dd
// console.log(newDate.toLocaleString())

// let IndDate=new Date("04-25-2025")//format mm-dd-yy
// console.log(IndDate.toLocaleString())

let date=new Date("04-04-2025")
let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(date.getTime())
//console.log(Math.floor(Date.now()/1000))//convert millsecond to second

let newDate=new Date()
// console.log(newDate.getDate())
// console.log(newDate.getHours())
// console.log(newDate.getMonth())//console.log(newDate.getMonth()+1) so that month start from 1
// console.log(newDate.getDay())//mon-1,tue-2...sun-7

newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate.toLocaleString())


