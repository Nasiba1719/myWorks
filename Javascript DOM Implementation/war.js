let areas = [

    {
        name: "Fuzuli",
        villages: 53
    },

    {
        name: "Qubadli",
        villages: 41

    },

    {
        name: "Xocavend",
        villages: 35
    }
]

//1

// 44 günlük vətən müharibəsində biz necə rayon və o rayonların necə kəndini geri qaytardıq. Siyahi seklinde yaz
let districts = document.querySelector(".districts")

for(let i=0; i< areas.length; i++) {
    let district = `
    <ul class="list-group list-group-flush">
  <li class="list-group-item">name: ${areas[i].name}</li> 
  <li class="list-group-item">villages: ${areas[i].villages}</li> <br> <br>

</ul>`
districts.innerHTML+=district
};



//2
//Ən çox kəndə sahib olan rayonun adını göstərən funksiya yazın
function maxVillagesValue() {
    let max = areas[0].villages
    for (let i = 0; i < areas.length; i++) {
        if (max < areas[i].villages) {
            max = areas[i].villages
        }
    }
    document.write(max);
}
maxVillagesValue();



//3
//Azad edilən rayonlar arasında adı ən uzun olan Rayonun necə KƏNDİ  olduğunu göstərən funksiya yazın
function maxNameAreasVilagesValue() {
    let uzun = areas[0].name.length
    for (let i = 0; i < areas.length; i++) {
        if (uzun < areas[i].name.length) {
            uzun = areas[i].villages
        }

    }
    document.write(uzun)
}

//maxNameAreasVilagesValue() ;



//4
//Azad edilən rayonların adında a hərfi olan rayonların siyahısını array olaraq ekranda göstərin

// function findIncludeA (){
//     let empty = [];
// for (let i = 0; i < areas.length; i++) {
//     if (areas[i].name.includes("a") ){
//         empty.push(areas[i].name)
//     }
// }
// console.log(empty)
// document.write(empty);
// }

// findIncludeA ();





//5
// //Ümumi azad edilən kənd sayını göstərən funksiya yazın
// function sumVillages() {

//     let sum = 0
//     for (let i = 0; i < areas.length; i++) {
//         sum += areas[i].villages
//     }
//     document.write(sum);
// }
// sumVillages()

