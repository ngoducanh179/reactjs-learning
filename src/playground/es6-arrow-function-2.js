// const add = (a, b) => {
//   // console.log(arguments)
// }
// console.log(add(55, 1, 1001))

// const user = {
//   name: 'duc anh',
//   cities: ['ha tinh', 'ha noi'],
//   printPlacesLived() {
//     return this.cities.map((city) => {
//       return this.name + 'has lived in' + city
//     })
//   }
// }
// console.log(user.printPlacesLived())

// Challenge area 
const multipler = {
  numbers: [10, 20, 115, 45, 585, 66, 45, 45, 7, 5, 8, 6],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => {
      return number * this.multiplyBy
    })
  }
}
console.log(multipler.multiply())
