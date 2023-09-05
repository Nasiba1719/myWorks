
//indexOf Method

let girls = ["Nigar", "Nergiz", "Ayan", "Fereh", "Gunay"]

function indexOf(x) {
    for (i = 0; i < girls.length; i++) {
        if (girls[i] === x) {
            return i;
        }
    }
  
}

// let index = indexOf("Fereh");
// console.log(index);



//pop Method
function popMethod() {
    for (i = 0; i < girls.length; i++) {
        if (i == girls.length - 1) {
            girls.length = i;

        }

    }
    console.log(girls);
}
//popMethod();




//push Method
function pushMethod(addEnd) {
    girls[girls.length] = addEnd
    console.log(girls)
}

//pushMethod("Nasiba");





//unshift method
function addFirstElement(newFirst) {
    girls = [newFirst, ...girls]
    console.log(girls)
}
//addFirstElement("Ilkin");





//shift method 
function shiftMethod() {
    let newShiftArray = []
    for (i = 1; i < girls.length; i++) {
        // yeni massivin 0-cı elementini köhnə massivin 1-ci elementinə bərabər etdim.Aralarında bir fərq olmaqla for vasitəsi ilə mənimsətmə etdim
        newShiftArray[i-1]=girls[i]
    }
    return newShiftArray
}
let c = shiftMethod();
console.log(c)

