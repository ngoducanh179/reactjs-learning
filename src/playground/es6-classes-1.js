class Person {
  constructor(name, age = 0) {
    this.name = name
    this.age = age
  }
  getGretting() {
    return 'hi. I am' + this.name + '!'
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major

  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}`
    }
    return description;
  }
}
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  hasHomeLocation() {
    return !!this.homeLocation
  }
  getGretting() {
    let greeting = super.getGretting()
    if (this.hasHomeLocation()) {
      greeting += `i'm visiting from${this.homeLocation}`
    }
    return greeting
  }

}

const me = new Traveler('duc anh', 26, 'gcgcytc')
console.log(me.getGretting())


const other = new Traveler()
console.log(other)



