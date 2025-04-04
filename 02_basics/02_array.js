const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)//arrays can take any datatypes in js so it becomes array of array as we push array to another array it becomes one element of it

// console.log(marvel_heros)
// console.log(marvel_heros[3])//dc_heros is 3rd element of array marvel_heros
//console.log(marvel_heros[3][1])//access element of dc_heros

/* Merging two arrays */
// const allHeros=marvel_heros.concat(dc_heros)//merge two array and returns new merged array
// console.log(allHeros)
// console.log(allHeros[5])

/*spread operator*/

// const all_new_heros=[...marvel_heros,...dc_heros]//we can merge two or more arrays
// console.log(all_new_heros)

/*flattten array*/
// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_array[5][2][0])

// const OneDanother_array=another_array.flat(Infinity)//we need to give the depth as argument till which we need to flat our array

// console.log(OneDanother_array)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))//from converts to array

console.log(Array.from({name:"Aditya"}))//important -if it is not able to convert it to array it will return emoty array we nee to declare that we need to convert it into array based on the key or value

let sc1=200
let sc2=300
let sc3=400
console.log(Array.of(sc1,sc2,sc3))
