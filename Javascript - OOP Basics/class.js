
class Resume {
    constructor(name, surname, phone, age) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.age = age;
    }
fullInformation() {
    return this.name + " " + this.surname + " " + this.phone + " " + this.age
};
};

const nasiba = new Resume("Nasiba", "Hasanova", +994556657806, 32);
console.table(nasiba.fullInformation());

let obj={
    name: "Nasiba",
    "-23rt*" : "Hasanova"
}
console.log(obj.name);
console.log(obj["-23rt*"]);