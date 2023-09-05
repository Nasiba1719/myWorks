// IF ELSE VE MANTIKSAL OPERATORLER
//  REQEMLERI BOYUKDEN KICIYE DUZUR

/*var a = 4;
var b = -3;
var c = 6;

if (a > b && a > c) {

    if (b > c) {
        alert(a + " " + b + " " + c);
    }
    else {
        alert(a + " " + c + " " + b);

    }
}

else if (b > a && b > c) {
    if (a > c) {
        alert(b + " " + a + " " + c);
    }
    else {
        alert(b + " " + c + " " + a);
    }
}
else if (c > a && c > b) {
    if(a > b) {
        alert(c + " " + a + " " + b);
    }
    else {
        alert(c + " " + b + " " + a);
    }
}
*/


//SWITCH CASE

/*switch (kontrol edilecek durum) {
    case 1:
        kod calistir;
    break;

        case 2 :
            kod calistir;
    break;
            ......

            default :
            kod calistir;
} */

/*var job = "doktor";

switch (job) {
    case "oyretmen":
        console.log("Ben bir oyretmenim");
        break;

    case "asker":
        console.log("Ben bir askerim");
        break;

    case "doktor":
        console.log("Ben bir doktorum");
        break;

    default:
        console.log("Ben bir ishsizim");
        break;
} */



// FONKSIYON YAPISI 

/*
function fonksiyonAdi(parametre) {
   
    yapilmasi istenen ishlem.
}
*/


/*function findX (t, V) {
    var x = t * V;
    return x;
}

var yol = findX(4, 50);
console.log(yol);

var yol2 = findX(7, 63);
console.log(yol2);*/


//DAIRENIN CEVERESI VE SAHESINI HESABLAYAN FUNKSIYA

/*var yaricap = prompt("Lutfen yaricapi giriniz");

function daireCevreAlan(yaricap) {
    var cevre = parseInt(2* Math.PI * yaricap);
    alert ("Dairenin Cevresi : " + cevre);

    var alan=parseInt(Math.PI * yaricap * yaricap);

    alert("Dairenin Alani: " + alan);
}

daireCevreAlan(yaricap);*/


//TELEBENIN DERS NOTLARIN HESABLAYIR


/*var vize = prompt("Lutfen ders notuuzu giriniz:");
var final = prompt("Lutfen final notuuzu giriniz:");


function dersSonucu(vize,final) {
    var dersNotu = parseInt(vize * 0.4 + final * 0.6);
    if (dersNotu >= 50) {
        alert("Dersi Gectiniz, Notunuz: " + dersNotu);
    }
    else {
        alert("Dersi Gecemediniz, Notunuz: " + dersNotu);
    }
}
dersSonucu(vize, final); */

//JAVASCRIPT DONGULER
// asagidakilar 1 den 10 qeder yazdirir

/*var x = 1;

while (x < 10) {
    console.log(x);
    x++;
} */

/*for (var i = 1; i < 10; i++) {


    if (i == 5) {
        //break; //5 olan kimi qirir dongunu
        continue; // 5 goren kimi atdanir diger reqeme.yeni 5 goren kimi qayidir dovrun basina davam edir
    }
    console.log(i);
} */


// JAVASCRIPT ARRAY YAPISI

/*var names = ["Fabri", "Pepe" , "Cenk"];

console.log(names);

var masinlar = ["Mersedec", "Kia", "Lexus", "34", false]
console.log(masinlar);

masinlar.push('Hundai');  //Matrisin sonuna elave edir
console.log(masinlar);

masinlar.unshift("Mr");  //Matrisin evveline elave edir
console.log(masinlar);

masinlar.pop();       //Massivin sonundakini silir
console.log(masinlar);  


masinlar.shift();    //Massivin birinci elementini silir
console.log(masinlar);


console.log(masinlar.indexOf("Mersedec"));  // index nomresin verir 
*/


//ARRAY.DE REQEMLERIN CEMI VE HASILI

/*var myArray = [4, 7, 5, 2], toplam = 0, carpim = 1;

for (var i = 0; i < myArray.length; i++) {
    toplam += myArray[i];
    carpim *= myArray[i];

}

console.log ('Toplam: ' + toplam  + ' Carpim: ' + carpim); */





/*var myArray = ['Cenk', 'Atiba', 'Pepe'];

console.log(myArray[0]);

var player1 = {
    name: 'Ricardo',
    lastName: 'Carlos',
    age: 33,
    goal: 7
}

console.log(player1.name);
console.log(player1.age);


var variable1 = 'name';

console.log(player1[variable1]);

player1['goal'] = 15; //gol sayini deyisdik
console.log(player1);

var player2 = new Object();
player2.name = 'Cenk';
player2.lastName = 'Tosun';
player2.goal = 27;
player2.age = 28;

console.log(player1);
console.log(player2); */



/*var player1 = {
    name: 'Nigar',
    lastName: 'Hasanova',
    age:28,
    childs : ['Leyla', 'Kamal'],
    fullName : function () {
        return this.name + ' ' + this.lastName;
    }

};

console.log (player1.fullName());*/



/*var library = [
    {

        title: 'Ince Memed',
        author: 'Yasar Kemal',
        status: true
}, //massivin 0-ci elementini yazdiq


{
    title: 'Kuyucakli Yusuf',
    author: 'Sabahattin Ali',
    status: true

},

{
    title: 'Memleketimden insan Manzaralari',
    author: 'Nazim Hikmet Ran',
    status: false
}];


for (var i=0; i < library.length; i++) {

    var book = library[i].title + ' yazari ' + library[i].author + ' . ';


    if (library[i].status) {
        console.log(book + 'Okundu ' );
    } 

    else {
        console.log (book + 'Okunmadi ');
    }

} */





/*function Player(name, surname, age) {

    this.name = name; //this-yeni bu funksiyadaki demekdir
    this.surname = surname;
    this.age = age;

}

var player1 = new Player('Ricardo', 'Quaresma', 34);
var player2 = new Player('Cenk', 'Tosun', 26);
var player3 = new Player('Gokhan', 'Gonul', 25); 

console.log(player1);
console.log(player2);
console.log(player3); */


/*var players = [

    new Player('Ricardo', 'Quaresma', 34),
    new Player('Cenk', 'Tosun', 26),
    new Player('Gokhan', 'Gonul', 25)
];

console.log(players[0].name);*/


/*var i = 0;
var images= ['https://loremflickr.com/cache/resized/65535_48195995681_2c3ba4100c_320_240_nofilter.jpg', 'https://loremflickr.com/cache/resized/65535_52414342406_e644eaa67c_n_320_240_nofilter.jpg', 'https://loremflickr.com/cache/resized/65535_51929087282_c98b5bc831_320_240_g.jpg'];
var duration = 1000;

function slideImg() {
    document.slide.src = images[i];
    if (i< images.length-1) {
        i++
    } 
    
    else { 
        i=0;

    }

setTimeout('slideImg()', duration);


}

window.onload = slideImg;*/



//var myElement = document.getElementById('myHeader');

/*console.log(myElement);
myElement.textContent='New Jumbotron'; // basligin text.ini deyisdi


myElement.innerText = 'Yeni Jumbotron';

myElement.innerHTML = '<h2>Kucuk Baslik</h2>'; */

//myElement.style.backgroundColor = 'red';



/*var myElement = document.getElementsByTagName ('h2');

for (var i = 0; i < myElement.length; i++) {
    myElement[i].textContent = 'Yeni Baslik';
} */



//var myElement = document.querySelector('#myHeader');
//console.log (myElement);


/*var myElement = document.querySelector('body > main > div > div.p-5.mb-4.bg-light.rounded-3 > div > button'); //bunu saytda elements.e gir hansini secmek istyrsense onun ustnde copy et/copy selector et bura yapisdir
console.log(myElement); */


/*var myElement = document.querySelector('body > main > div > div.row.align-items-md-stretch > div:nth-child(2)');

myElement.style.color ='red';
console.log(myElement); */

/*window.onload = function(){

    var button = document.querySelector('#newButton');
    button.addEventListener('click', function(){
        var newNode = document.createElement('p');
        newNode.innerHTML = '<strong>New Paragraph</strong>';
        newNode.setAttribute('id', 'myNode');

        var myArray = document.getElementsByClassName('row align-items-md-stretch');
        myArray[0].insertBefore(newNode, myArray[0].firstElementChild);





    });
}  */



//Events

/*var myElement = document.querySelector('button');

/*myElement.onclick = function() {
    alert('Hello');
}; 

myElement.addEventListener ('click' , fonksiyon1);
myElement.addEventListener ('click' , fonksiyon2);



function fonksiyon1() {
    alert('Merhaba');
}


function fonksiyon2() {
   console.log('Merhaba2');
};*/



//iki reqemi toplama 
/*var num1 = document.querySelector('#numberOne');
var num2 = document.querySelector('#numberTwo');
var sum = document.querySelector('#sum');

num1.addEventListener('input', topla);
num2.addEventListener('input', topla);

function topla () {
    var one = parseInt (num1.value) || 0;
    var two = parseInt(num2.value) || 0;

    sum.innerHTML = "Toplam sonucu: " + (one + two);
}  */



//Accordion
/*var accordion = document.querySelector('#accordion');


var titles = accordion.getElementsByTagName('h2');

for ( i=0; i<titles.length; i++) {
    titles[i].addEventListener ('click', displayAccordion);


    function displayAccordion() {

        content = this.nextSibling.nextSibling  //bir sonraki noda kecid edir

        if (content.style.display != 'block') {
            content.style.display = 'block'
        } else {
            content.style.display = 'none';
        }
    }


} */

var square = document.querySelector('#square');
var rectangle = document.querySelector('#rectangle');


square.addEventListener('click', clickSquare);
rectangle.addEventListener('click', clickRectangle);



function clickSquare (event) {
    event.stopPropagation() // altdakinda ne istenilirse onu edir
    console.log('Square Clicked');
}

function clickRectangle () {
    console.log('Rectangle Clicked');



}






 








 










