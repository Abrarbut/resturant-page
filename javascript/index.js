let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(value) {
};

console.log(user.fullName); 