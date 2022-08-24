class fullname {
  constructor(rollno, firstName, lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
var a = new fullname("20CS082", "jheel", "shah");
var fn = a.firstName + a.lastName;

class ty {
  set(fn) {
    this.fn = fn;
  }
}
console.log(fn);
