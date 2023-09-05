
let customers=[
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Dave",
        age: 40,
        city: "Los Angeles"
    },
    {
        name: "Mary",
        age: 50,
        city: "Miami"
    },
    {
        name: "Anna",
        age: 30,
        city: "Washington"
    }
];

//4 CU TAPSIRIQ

// 1ci usul
// function createNewCustomer (name, age,city) {
//     let obj= {name: name, age:age, city:city}
//     customers.push(obj);
//     console.table(customers);}

//     createNewCustomer( "Nasiba",33,"Baku");


//2ci usul
function Customer(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
customers.push(new Customer("Nergiz",4,"Baku"));
console.log(customers);
//const nargiz = new Customer("Nergiz", 4, "Baku")
//customers.push(nargiz);
//console.log(nargiz);

// 1ci TAPSIRIQ
function customersName(customersArr) {
    // name parametrinə ehtiyac yoxdur.
    for (let i = 0; i < customersArr.length; i++) {

        document.write(`${customersArr[i].name} <br>`)
        // Tələb arraya toplamaq idi amma sən sadəcə ekrana cap etmisən
    }
};

function getCustomerNames(customerArr) {
    let names = [];
    for (let i = 0; i < customerArr.length; i++) {
        names.push(customerArr[i].name);
    }
    return names;
}



//2CI TAPSIRIQ
function  CalculateTotalAgesNesibe(){
    let sum = 0
    for (let i = 0; i < customers.length; i++) {
        sum += customers[i].age;
    }
    return sum;
}




// 3 CU TAPSIRIQ

function filterCustomersNamesByCapital(customersArr) {
    for (let i = 0; i < customersArr.length; i++) {
        if (customersArr[i].name[0] == "A") {
            document.write(customersArr[i].age, customersArr[i].city)
        }
    }
};

// customersName(customers);



