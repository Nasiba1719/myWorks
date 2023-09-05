//document.write("Javascript");----ekrana yazir
//window.alert("salam");---ekran mesaji verir
//window.print();---ekrani chap edir
//document.getElementById("js").innerHTML="<b>sagol<b>";---getElementById--id.si js olan html faylini sec ve oradaki innerHTML-- "salam" sozunu "sagol" deye deyish /shriftini de bold et
//== BU BERABERDIR YOXSA YOX DEMEKDIR
//=== BU HEM TIP CEHETDEN DE EYNI OLUB OLMADIGINI YOXLUYUR
//a!=b BU O DEMEKDIRKI A B-E BERABER DEYIL?DEYE SORGULUYUR

/*var meyveler= ["alma", "armud", "uzum"];
document.write(meyveler[0]); --Array(massiv) nomreleme 0-dan baslayir*/

/*var kisi= {ad:"Ahmet", soyad:"Kose", yas:45};
/*document.write(kisi.ad);
document.write(kisi["soyad"]);*/


/*const number=15;
document.write(number);-- const-sabit demekdir Yalniz yazildigi setirin qiymetin alir*/


/*var x=10;
var y=5;
var z = x**y; //10ustu 5 demekdir
document.write(z);
z++; //z-i 1 vahid artir;
z--; //z-i 1 vahid azalt;
x+=5; // x-i 5 vahid artir ve x-e menimset x=x+5;*/

/*function fonksiyonAdi(isim, soyisim) {
    document.write("Hosgeldiniz.." + isim + " "+ soyisim);
}
fonksiyonAdi("Hasan", "Akgul");
function fonksiyonAdi(isim, soyisim) {
    return isim + " " + soyisim;
}
var x= fonksiyonAdi("Hasan", "Akgul");
document.write(x);*/


/*function tonHesapla(kilogram) {
    var x=kilogram / 1000;
    return x;
}
 var a = tonHesapla(500);
 document.write(a);*/



/*var x = 3;
var y;
 document.writeln(typeof x);--BURADA NUMBER DEYER VERECEK
 
 x = x.toString();
 document.write(typeof x);--BURADA STRING DEYER VERECEK*/


/*var x = "3";
var y;
x = Number(x);--REQEME CEVIRIR
document.write(typeof x);*/


/* var x = "javascript oyreniyorum";
  var a = x.length;--UZUNLUGUN YENI HERFLERIN SAYINI VERIR.BOSLUGLARI DA SIMVOL KIMI SAYIR
  document.write(a);*/

/*var x = "javascript ile oyreniyorum";
var a = x.indexOf("ile"); --BURADA CUMLEDEKI "ile" sozunun necenci yerde oldugunu gosterir
document.write(a);*/



/*var x = "javascript ile oyreniyorum ile";
var a = x.lastIndexOf("ile"); --BURADA CUMLEDEKI EN SON"ile" sozunun necenci yerde oldugunu gosterir
document.write(a);*/


/*var x = "javascript ile oyreniyorum ile";
var a = x.search("ile"); --BURADA yuxardaki ile eyni funksiyani yerine yetirir
document.write(a);*/

/*var x = "javascript ile oyreniyorum ile";
var a = x.slice(8); --BURADA CUMLENI 8-CI HERFDEN KESIR VE QALANINI YAZIR EKRANA.SAYMA 0-DAN BASLANIR VE BOSLUQLAR DA SIMVOL KIMI SAYILIR
document.write(a);*/


/*var x = "javascript ile oyreniyorum ile";
var a = x.slice(8,15); --BURADA CUMLENI 8-NEN 15-CI SIMVOL ARASINDAKI HISSENI VERIR EKRANA
document.write(a);*/



/*var x = "javascript ile oyreniyorum ile";
var a = x.slice(-8,-15); --BURADA SAYMA ISLEMINI SONDAN BASLAYARAQ SAYIR
document.write(a);*/



/*var x = "javascript ile oyreniyorum ile";
var a = x.substr(7,5); --BURADA 7-ciden sonra 5 simvolu goster deyir
document.write(a);*/



/*var x = "javascript ile oyreniyorum ile";
var a = x.replace(/ile/i, "ama");--BURADA METNDEKI BIRINCI ILE SOZUNU AMA SOZU ILE DEYISDIRIR."/ i" BU O DEMEKDIRKI METNDE BOYUK KICIK HERFLE YAZILSADA YENEDE DEYISDIRE BILIR
document.write(a);


  
/*var x = "javascript ile oyreniyorum ile";
var a = x.replace(/ile/g, "ama");--BURADA METNDEKI BUTUUUN ILE SOZUNU AMA SOZU ILE DEYISDIRIR.
document.write(a);*/



/*var x = "javascript ile oyreniyorum ile";
var a = x.toUpperCase();--BURADA BUTUN METNI BOYUK HERFLERLE YAZIR
document.write(a);*/



/*var x = "javascript ile oyreniyorum ile";
var a = x.toLowerCase();-- BURADA BUTUN METNI KICIK HERFLERLE YAZIR
document.write(a);*/


/*var x = "javascript ile oyreniyorum";
var y = "InsAllah ki oyrene bilerem";
 var a = x.concat(" ", y)--BURADA X-E BIRLESDIR Y-I DEYIR. ARALARINA DA BOSLUQ QOYDUQ
 document.write(a);*/


/*var x = "   javascript ile oyreniyorum     ";
document.writeln("trimlenmeden once-"  + x.length);
 
var a = x.trim()
document.write("trimlenmeden sonra- " + a.length);  BURADA TRIM METNDEKI BUTUN BOSLUQLARI SILIR*/




/*var x = "javascript ile oyreniyorum";
var a = x.charAt(15);--BURADA 15CI SIMVOLDAKI HERFI VERIR
document.write(a);*/



/* var x = "a, b, c, d";
 var a= x.split(",");--BURADA STRING DEYERI ARRAY-E CEVIRIR
 document.write(a[2]);*/

/*var meyveler = ["alma", "armud", "banan", "saftali"];
var deneme = meyveler[meyveler.length-1];--BURADA SONUNCU MEYVENI TAPMAQ UCUN "-1" YAZIRIQ.CUNKI MASSIVLER 0-DAN BASLAYIR
document.write(deneme);*/


/*var meyveler = ["alma", "armud", "banan", "saftali"];
var deneme = meyveler.push("alca");--BURADA MASSIVE NEYISE ELAVE ETMEK UCUN "PUSH" ISLEDIRIK
document.write(deneme);
document.write(meyveler);*/


/*var meyveler = ["alma", "armud", "banan", "saftali"];
var deneme = meyveler.pop();--BURADA POP EN SON MASSIVI SILIR YERDE QALANINI EKRANA YAZDIRIR
document.write(meyveler);*/



/* var meyveler = ["alma", "armud", "banan", "saftali"];
 var deneme = meyveler.shift();--BURADA EN BIRINCI ELEMENTI SILIR YENI ALMANI
 document.write(meyveler);*/



/*var meyveler = ["alma", "armud", "banan", "saftali"];
var deneme = meyveler.unshift("erik");--BURADA BIRINCI ELEMENTIN QABAGINA ELEMENT ELAVE EDIR
document.write(meyveler);*/



/*var meyveler = ["alma", "armud", "banan", "saftali"];
var deneme = meyveler.slice(1);--BURADA 1CI ELEMENTI SILIR QALANINI VERIR
  document.write(deneme);*/


/* var meyveler = ["alma", "armud", "banan", "saftali"]
 var deneme;
 meyveler.splice(2, 1 , "ciyelek");--BURADA DEYRKI 2CI INDEXE GET ORDAKINI SIL YERINE "CIYELEK" YAZ
 document.write(meyveler);*/


/*var meyveler = ["alma", "armud", "banan", "saftali"]
 var deneme;
 meyveler.splice(2, 1);--BURADA DEYRKI 2CI INDEXE GET 1 INI SIL
 document.write(meyveler);*/



/*var meyveler = ["alma", "armud", "banan", "saftali"]
 var sebzeler = ["pomidor", "xiyar"];
var deneme = meyveler.concat(sebzeler);--BURADA MEYVELERNEN SEBZELERI  BIRLESDIRIR
  document.write(deneme);*/


/*var a = ["Uzum","Alma","Erik", "Saftali", "Qaysi"];
document.getElementById("div1").innerHTML = a + "<br><br>";
a.reverse();--BURADA METNI TERSINE YAZIR
document.getElementById("div2").innerHTML = a + "<br><br>";*/




/*var b = [100, 15, 45, 6, 89, 42];
document.getElementById("div1").innerHTML = b+ "<br><br>";
b.sort(function(x,y){ return x-y} );--BU KICIKDEN BOYUYE DUZUR REQEMLERI 
b.sort(function(x,y){ return y-x} );--BU ISE BOYUKDEN KICIYE DUZUR
var c = b[0];--YUXARDAKI FUNKSIYA KICIKDEN BOYUYE DUZUB DEYE BU EMELYAT EN KICIK REQEMI VERECEK
document.getElementById("div2").innerHTML = b + "<br><br>";
document.write(c);*/


/*var c = [{ marka: "Mercedes", yil: 2010},
         {marka: "Honda", yil: 2005},
         {marka: "Renault", yil:2015}];

function arabalariGoster() {
  document.getElementById ("div1").innerHTML =

        c[0].marka + " " + c[0].yil + "<br>" +
        c[1].marka + " " + c[1].yil + "<br>" +
        c[2].marka + " " + c[2].yil + "<br>";
}


function sirala() {
  c.sort(function (a,b) {return a.yil- b.yil});


}  

arabalariGoster();
sirala();
BURADA MASINLARI ILI KOHNEDEN TEZEYE DOGRU DUZUR

*/



/*var sayi = [45, 60, 27, 59, 100, 3];

var yazi = "";

function yazdir(value, index, array) {
 
  yazi = yazi + value + "<br>";



} 
 sayi.forEach(yazdir);

 document.getElementById("div1").innerHTML = yazi;
 BURADA ALT ALTA YAZIR MASSIVI.FOREACH HER BIRI UCUN DEMEKDIR*/


/*var sayi = [45, 60, 27, 59, 100, 3];

function ucIleCarp(value, index, array) {
 
return value * 3;

} 
 

var sayi2 = sayi.map(ucIleCarp);--MAP FUNKSIYASI YENI BIR ARRAY YARATMAQ UCUNDUR

document.getElementById("div1").innerHTML = sayi2;
document.write(sayi);*/


/*var sayi = [45, 60, 27, 59, 100, 3];

function deneme(value, index, array) {
 
return value > 30;

} 
 

var sayi2 = sayi.filter(deneme);--BURADA FILTER YALNIZ 30-DAN BOYUK OLANLARI YAZDIRACAQ

 document.getElementById("div1").innerHTML = sayi2;
document.write(sayi);*/






/*var sayi = [45, 60, 27, 59, 100, 3];

function deneme(total, value, index, array) {
 
return total + value;

} 
 

var sayi2 = sayi.reduce(deneme); --BURADA MASSIVDEKI REQEMLERI CEMLEYIR.TOTAL BASLANGICDA O GOTURULUR
//var sayi2 = sayi.reduce(deneme,100);--BURADA TOTAL= 100;

 document.getElementById("div1").innerHTML = sayi2;
document.write(sayi);*/


/*var sayi = [45, 60, 27, 59, 100, 3];

function deneme(value, index, array) {
 
return value > 2;

} 
 
var sayi2 = sayi.every(deneme);-- BURADA HER ELEMENTI YOXLAYACAQ HAMISI 2 DEN BOYUK OLMALIDI 1 ELEMENT BELE KICIK GORSE FALSE DEYER VERECEK
//var sayi2 = sayi.some(deneme);-- BURADA ISE HER ELEMENTI YOXLAYACAQ 2 DEN BOYUK 1DENE DE OLSA REQEM VARSA TRUE DEYER VERECEK
//var sayi2 = sayi.find(deneme);- BURADA BIZE MASSIVDEKI 2 DEN BOYUK ILK REQEMI TAPIB VERECEK
//var sayi2 = sayi.findIndex(deneme); BURADA BIZE MASSIVDEKI 2 DEN BOYUK ILK REQEMI TAPIB ONUN INDEX NOMRESIN VERECEK
document.getElementById("div1").innerHTML = sayi2;
document.write(sayi);*/

/*var sayi = [45, 60, 27, 59, 100, 3];

var sayi2 = sayi.indexOf(100);--BURADA REQEMIN INDEX NOMRESINI VERIR.MASSIVLERIN REQEMLEMESI 0-DAN BASLAYIR

document.getElementById("div1").innerHTML = sayi2;
document.write(sayi);*/


/*var calisan = {
    isim: "Nigar", soyisim: "Hesenzade",
    maas: 5000 + "TL", departman: "IK",

    tamAd: function () {
      return this.isim + " " + this.soyisim + " " + this.maas;----BURADA THIS(YENI BIR USTDEKI DEYISENI CAGIRIR)
    }
};
  var a= calisan.tamAd ();
  document.write(a);*/



  //ZAMAN OPERATORLARI
/*var tarih = new Date(2020, 11, 16, 15,30,45,00);

document.write(tarih);*/

/*var tarih = new Date();
a = tarih.getFullYear();--Anliq ili GOSTERIR
a = tarih.getMonth() +1; --- BuRADA ANLIQ AYI GOSTERIR, REQEMLEME 0 DAN BASLADIGI UCUN +1 DEYEREK DOGRU REQEMI VERE BILERIK
a = tarih.getHour()--Saati verir;
a = tarih.getDay()--ANLIQ GUNU VERIR;

document.write(a);*/

//SET METHODS
/*zaman.setDate(25);
zaman.setMonth(3);
zaman.setFullYear(2024);  BUNLAR ANLIQ ZAMANI DEYISMEK UCUN ISTIFADE OLUNUR*/




//Riyazi ifadeler
/*var x = Math.round(6.4);//--YUVARLAQLASDIRIR.VERGULDEN SONRAKI REQEM 5 VE 5 DEN BOYUKDURSE 1VAHID ARTIRIR.MESELEN--6.2=6 ; 6.6=7
var x = Math.ceil(6.4);--VerguLDEN SONRAYA FIKIR VERMIR HEMISE 1 VAHID BOYUYE YUVARLAQLASDIRIR
var x = Math.floor(6.4);--BUDA VERGULE FIKIR VERMIR HEMISE REQEMIN OZUNU VERIR.MESELEN--6.4=6; 6.8=6
document.write(x);
var x = 15.1515151515;
y= x.toPrecision(5); SOLDAN ETIBAREN 5 REQEMI VERIR
y= x.toFixed(6);REQEMI VE VERGULDEN SONRA 6 DENE REQEM VERIR


//BUCUR DE YAZA BILERIK

var y = 16.8;

y = Math.round(y);

document.write(y);*/

/*var a = 2;
var b = 5;
var x = Math.pow(a, b);--BURADA QUVVETE YUKSELDIR..a=dabandi, b=ustu...YENI 2 USTU 5 DEMEKDIR BU YAZILIS
var x = Math.pow(2, 5);--BU CUR DE YAZA BILERIK;
var x = Math.sqrt(64); //KOK ALTINA SALIR
var x = Math.abs(64);--MODULUN VERIR
var x = Math.min(a, b);--BURADA MINIMUM DEYERI VERIR
var x = Math.min(10, 25, 30, 6);--BU REQEMLERIN ICINDE MINIMUMU VERIR
var x = Math.max(a, b);--BURADA Maximum DEYERI VERIR
var x = Math.max(10, 25, 30, 6);--BU REQEMLERIN ICINDE Maximumu VERIR
var x = Math.min(a, b);--BURADA MINIMUM DEYERI VERIR
var x = Math.round(Math.random() * 10);--0 da daxil olmaqla 0-dan 10 a qeder YUVARLAQ TESADUFI REQEMLERI VERIR
var x = Math.ceil(Math.random() * 10);--0 DAXIL OLMAMAQLA RANDOM REQEMLER VERIR
document.write(x);*/


/*var a = 10;
var b = "10";
VAR X = 15;
var y = 20;

var c = (a == b); ---BURADA A=B SORUSUR
var c = (a === b); ---BURADA TIPINI DE SORUSUR.EYNI OLSA TRUE VERIR
var c = (a != b); --A, B-E BERABER DEYILMI DEYE SORUSUR.BERABER DEYLSE TRUE VERIR
var c = (a !== b);-- HEM TIPI HEMDE REQEMIN OZU BERABER DEYILMI DEYE SORUSUR

var c = (a > b);--BOYUKDURSE TRUE;
var c = (a >= b); ODENILIRSE TRUE VERIR




var c = (a < b) && (x < y); BU VE DEMKDIR.TEKLIFLERDEN 2 SIDE DOGRU OLMALI
var c = (a < b) || (x < y); BU VE YA DEMEKDIR.tekliflerden 1 denesi dogru olmali
var c = (a < b) || !(x < y); NOT ! tru false cevirimi yapar
document.write(c);*/


/*var x = 5;
var y = 6;

if (x < y) {
  document.write("x y'den kicikdir.");

}
 else {
  document.write("x y'den buyukdur.");
 }*/

/*var yas = window.prompt("Lutfen yasinizi yazin.", 0);

if (yas < 18) {
  document.write("Giris ede bilmezsiniz...");

}
else {
  document.write("Giris ede bilersiniz...");

}
//BURADA 18 YASDAN KICIKLER QADAGANDIR*/

/*var yas = window.prompt("Lutfen yasinizi yazin.", 0);

if (yas < 18) {
  document.write("Giris ede bilmezsiniz...");

}
 
else if (yas >= 18 && yas <25) {
  document.write("Giris ede bilersiniz.Ve pulsuz icecek qazandiniz");
 }


 else {
  document.write("Giris ede bilersiniz...");

}*/



/*var saat = new Date().getHours();

if ((6 < saat) && (saat < 12))  {
  document.write("Gunaydin...");
}

else if ((12<= saat) && (saat<19)) {
  document.write("Iyi gunler...");

}

else if ((19<= saat) && (saat<23))  {
  document.write("Iyi Aksamlar...");
}


else {

  document.write("Iyi Geceler..");*/


  /*var yas = prompt ("yasinizi qeyd edin" , 0);

  var girisIzni = (yas < 18) ? "giris yasak" : "giris yapilabilir.";
document.write(girisIzni);//--BU QAYDASI DA VAR if.IN */ 

/*var meyveler = ["Alma", "Armud", "Uzum", "Gilas"];

var a = Math.round(Math.random() * 10);

switch (a) {
  case 0:

  document.getElementById("div1"). innerHTML =

   "secilen reqem : " + a + "<br></br>" +
   "Secilen meyve  : " + meyveler[a];
   break;


case 1:

  document.getElementById("div1"). innerHTML =

   "secilen reqem : " + a + "<br></br>" +
   "Secilen meyve  : " + meyveler[a];
   break;



case 2:

  document.getElementById("div1"). innerHTML =

   "secilen reqem : " + a + "<br></br>" +
   "Secilen meyve  : " + meyveler[a];
   break;



case 3:

  document.getElementById("div1"). innerHTML =

   "secilen reqem : " + a + "<br></br>" +
   "Secilen meyve  : " + meyveler[a];
   break;

default:

  document.getElementById("div1"). innerHTML =

  "Secilen Reqem : " + a + "<br><br> Hatali Sayi";
break;
  }
*/

/*var yazi = "";

for (i = 0; i < 10; i++) {

  yazi += "Javascript oyrenirem... <br>";


}
document.getElementById("div1").innerHTML = yazi;*/

/*var yazi = "";

var meyveler = ["Alma", "Armud", "Gilas", "Visne", "Saftali"];

for (i = 0; i < meyveler.length; i++) {
  yazi += meyveler[i] + "<br>";

}

//var a;

for (a of meyveler) {

yazi += a + "<br>";--BURADA DA EYNI ISI GORUR..BURDA a MEYVENIN OZU OLDUGU UCUN INDEKS NOMRESI YAZMIRIQ

}


//var a;
for (a in meyveler) {
 yazi += meyveler[a] + "<br>";--YUXARDAKININ QISA VERSIYASIDI
}

document.getElementById("div1").innerHTML = yazi;


//BURADA ALT ALTA MEYVELERI YAZDIRRIR*/


/*var yazi = "";
for (i =1; i <= 10; i++) {
  
  for (j =1; j <= 10; j++){

    yazi += i + " * " + j + " = " + (i * j) + "<br>";
  }
  yazi += "----------------------------- <br>";
}

document.getElementById("div1").innerHTML = yazi;
//VURMA CEDVELINI DUZELTDIK*/



/*let number = [1,3,5,9,12];
let num = numbers.map(function(n){
  return n*n;
})
console.log (num);  --burada REQEMIN KVADRATINI ALDIQ*/



/*var yazi = "";

var i = 0;

while (i < 10) { --BURADA i 10-dan kicik oldugu muddetce davam edir dongu

  yazi += "Javascript oyrenirem... <br>";

  i++;
}

document.getElementById("div1").innerHTML = yazi;*/

/*var yazi = "";
var i = 1;

do {

  yazi += i + "<br>";
  
  i++;

} while (i <= 10);

document.getElementById("div1").innerHTML = yazi;

1- DEN 10-A QEDER REQEMLERI ALT ALTA DUZUR */


/*var yazi ="";

for ( i = 0; i < 10; i++) {
    
  if (i==5) {
    continue; --BURADA ISE YALNIZ 5 I GORMUR AMMA YENIDEN DOVR ETMEYE DAVAM EDIR
  }
  yazi += "Sayi : " + i + "<br>";

  /*if (i==5) {
   // break; //DONGUNU SONLANDIRIR YENI KESIR!
  }
}
document.getElementById("div1").innerHTML = yazi; */





//HTML VE CSS ILE ELAQELER
//document.getElementById("div1").innerHTML= "Javascript";--Div1 id.li elementi al bu yaziyi ora yazdir demekdir
//document.getElementsByClassName("class1")[2].innerHTML="Javascript";--YAZILISI BUCURDUR
//document.getElementsByTagName("div")[0].innerHTML = "Javascript";-- HTML.DEKI ELEMENT ADLARINA GORE ULASA BILERIK
 //document.getElementsByName("name1")[0].innerHTML = "Javascript";
//document.querySelectorAll("div" //.class1 -kimi de yazmaq olur)[1].innerHTML = "Javascript"


/*var a = document.getElementById("div1").innerHTML;

document.getElementById("div2").innerHTML = a;*/

//document.get//ElementById("div1").remove();--BURADA DIV1 ELEMENTINI SILIR

/*var a = document.getElementById("div1");

a.style.color = "blue";
a.style.fontSize = "50px";*/

//DOM EVENTS

/*function tiklamaIslemi () {
   alert ("butona tiklandi.")
   //document.getElementById("div1").innerHTML = "Butona tiklandi";--BU CUR DE YAZA BILERIK

   BURADAKI FUNKSIYANI HTML.DE ISLEDIRIK.

}*/



/*function isim() {
  document.getElementById("div1").innerHTML = "Metin kutusuna tiklandi.";
}

function isim2() {
  document.getElementById("div1").innerHTML = "Metin kutusundan cikildi.";
}*/





/*function isim() {
  document.getElementById("text1").style.width= "150px";
  document.getElementById("text1").style.height= "150px";
}

function isim2() {
  document.getElementById("text1").style.width = "70px";
  document.getElementById("text1").style.height = "70px";
} --burada HERCUR CSS ISLERI GORE BILERIK*/



//FUNCTIONS

/*function merhaba(){
  console.log("Merhaba")
}
merhaba();  
--BU ADI FUNKSIYANIN YAZILISIDIR.EKRANA MERHABA SOZU CIXIR*/


/*function merhaba(name,age) {
console.log(`Isim: ${name} Yas: ${age}`);--BU DIRNAQLAR KLAVYEDE SOL KUNCDE Ё HERFIDI
}
merhaba("Levent",37);
BU FUNKSIYA SIRALAYIR LISTE KIMI*/



/*function yasHesapla(dogumYili){
return 2021-dogumYili;
}
let ageSamet = yasHesapla(1990);
let ageMehmet = yasHesapla(2000);
let ageCagla = yasHesapla(2005);

console.log(ageSamet);
console.log(ageMehmet);
console.log(ageCagla); 
YASHI HESABLAYIR--*/




//EVENT Listener

/*document.getElementById("btn").addEventListener("click", function(){

//document.getElementById("div1").innerHTML = "javascript oyrenirem";

document.getElementById("div1").style.background = "green";


BU O DEMEKDIRKI JS.DEN BIRBASA HTML.I CAGIRIRIG addEventListener vasitesi ile


});*/


/*var a = document.getElementById("btn");

var isim = prompt ("Isminiz : ", "null");

a.addEventListener("click", selamlama);
a.addEventListener("click", arkaPlan);

//a.removeEventListener("click", selamlama);--Bu YAZILIS EVENT.I LEGV EDIR

function selamlama() {
  document.getElementById("div1").innerHTML = "Hosgeldiniz, " + isim;

}
function arkaPlan() {
  document.getElementById("div1").style.backgroundColor = "green";
} */


//ELEMENT CREATION

/*var a = document.getElementById("div1");
var p2 = document.getElementById("p2");

var x = document.createElement ("p");

var y = document.createTextNode("Besinci Paragraf");

x.appendChild(y);
//a.replaceChild(y,p2);-- BESINCI PARAGRAF SOZUNU P2-NIN YERINE YAZIR

//a.appendChild(x);--EN SONUNCUYA ELAVE EDIR

//a.insertBefore (x, document.getElementById("p3"));-- BESINCI PARAGRAF SOZUNU P3-UN YERINE ELAVE EDIREM 

//a.removeChild(document.getElementById("p4"));-- BURADA P4 PARAGRAFI LEGV EDIR 

//a.setAttribute("id", "div2");--DIV1 ADLI DIVIMIZI DIV2 ADLI DIVE DEYISIRIK */


/*var x = document.getElementsByTagName("p");

for (i = 0; i < x.length; i++) {

  x[i].style.color = "blue";--BU KOD BUTUN P.LERE ULASA BILIR
} */

//WINDOWS
//var x = window.alert("Hosgeldiniz, \n Nigar xanim");
/*var x =window.prompt ("yasinizi girin : ", 15 );
//var x = window.confirm("qebul edirsiniz mi?"); SUAL VERIR 

if(x) {
  document.write("onaylandi");
 

}
else {
  document.write("redd edildi");
} */

/*//BUTONA TIKLAYANDA YENI PENCEREDE ACMAQ FUNKSIYASI
function pencereAc() {
  window.open ("https://www.google.com/", "_blank", "width=300, height=300"); //SEHIFEYE UZUNLUQ GENISLIK DE VERE BILERIK

}
function pencereKapa() {
  window.close();// Movcud PENCERENI BAGLAYIR
window.print();//SEHIVENI CAP EDIR

} */




/*//PENCERENIN OLCULERINI DEYISMEK
var yeniPencere;

function pencereAc() {

   yeniPencere = window.open("", "_blank", "width=200, height=200");

}

function pencereTasi() {

//yeniPencere.moveTo(400, 400);
yeniPencere.resizeTo(400, 400);


yeniPencere.focus();


} */


/*//EKRAN OLCUSUN ALMAQ UCUN

//var x = screen.height;--EKRANIN BUTOV UZUNLUGU
//var x = screen.width;--EKRANIN ENI
//var x = screen.availHeight;--EKRANDA ISLEK OLAN ALANIN UZUNLUGU
 var x = screen.colorDepth;--1reng ucun ne qeder BIT ISLENIR
var x = screen.pixelDepth;-- herf ucun bit
document.getElementById("div1").innerHTML = x; */




/*//EKRANA DURMADAN YAZI YAZDIRIR
setInterval(function () {

//document.write("Javascript oyrenirem..");-- EKRANA DAYANMADAN BU CUMLENI YAZIR
document.getElementById("div1").innerHTML += "Javascript oyrenirem..";--BUDA YUXARDAKINI EDIR AMA YAZILIS QAYDASI FERQLIDI;

}, 2000); */



/*//ARXA FON RENGINI HER 2 SANIYEDE BIR DEYISIR

var sonuc;

function degis() {

  var x = ["blue", "red", "green", "yellow"];
  var random = Math.round(Math.random() * 3);
  sonuc = x[random];

}

var a = setInterval (function () {

  degis();
  document.getElementById("div1").innerHTML += "Javascript oyrenirem.." + "<br>";
  document.getElementById("div1").style.backgroundColor = sonuc;
},2000);

//var a = setTimeout --YUXARDAKI ILE EYNI CUR YAZILIR AMMA BURADA HER 2 SANIYEDE BIR DOVR ETMIR.2SANIYE GOZLEYIR SONRA BIR DEFE YAZDIRIR EKRANA

clearInterval(a);//--BU PROSESI SONLANDIRIR YENI STOP EDIR */

// -- U Y G U L A M A L A R-->

/*//=BUTONLARAA BASANDA BIR BIR ARTIRIB AZALDIR
function artirma() {

  var a = document.getElementById("text").value;
  a = Number(a);
  a += 1;
  document.getElementById("text").value = a;
}

function azaltma() {

  var a = document.getElementById("text").value;
  a = Number(a);
  a -= 1;
  document.getElementById("text").value = a;
} */


/*//ARXA FON RENGINI 2SANIYEDE BIR DEYISMEK

var text;

function renkYarat() {

  var a = "ABCDEF0123456789";
  text = "#";

  for (i = 0; i < 6; i++) {
    var random = Math.round(Math.random() *15);

    text += a.charAt(random);
  }
}
 setInterval(function (){

  renkYarat();
  document.getElementById("arka").style.backgroundColor = text;
 }, 2000);*/

 
 /*//ARXA FON SEKLINI 2SANIYEDE BIR DEYISMEK

 var text;

 function resimSec() {
 
   var a = ["./JS-img/1.jpg" , "./JS-img/2.jpg" , "./JS-img/3.jpg" , "./JS-img/4.jpg" , "./JS-img/5.jpg" ];
   
   text = "";
 

var random = Math.round(Math.random() * 4);
text= a[random];

  }
  
 setInterval(function (){


  resimSec();

  document.getElementById ("img").src = text;
 }, 2000); */


 
 
 /*//KICIK QUTUNUN ICINDE REYLER VE ADAM ADLARI 2 SANIYEDEN BIR DEYISIR

 var a = [{yorum: "cok begendim herkese tavsiye ederim.", isim: "Ebru Sahin"},
          {yorum: "daha kullanmadim ama paketlemesi saglamdi.", isim: "Ofelya Sahin"},
          {yorum: "herkese tavsiye ederim.", isim: "Fatime Sahin"},
          {yorum: "fiyat performans urunu.", isim: "Aydan Sahin"}
        ];

var random;

          function sayiUret() {
          random = Math.round(Math.random() * 3);
          }


setInterval(function () {
  
  sayiUret();
  
  document.getElementById("div2").innerHTML = a[random].yorum;
  document.getElementById("div3").innerHTML = a[random].isim;

},3000); */


 /*//Saat UYGULAMASI

 var date = new Date();

 var saat, dakika, saniye;

 saat = date.getHours();
 dakika = date.getMinutes();
 saniye = date.getSeconds();

 setInterval(function () {
 
  document.getElementById("saat").innerHTML = saat;
  document.getElementById("dakika").innerHTML = dakika;
  document.getElementById("saniye").innerHTML = saniye++;

if (Number(document.getElementById("saniye").innerText) == 59) {

  dakika++;
saniye = 0;


}

if (Number(document.getElementById("dakika").innerText) > 59) {

  saat++;
  dakika = 0;

}
if (Number(document.getElementById("saat").innerText) > 23) {

  saat = 0;
dakika = 0;
}

 },1000) */




 /*// GERI SAYIM UYGULAMASI//

 var saat = prompt("Saat",0); //saat= 0
 var dakika = prompt("Dakika",0); // dakika = 0
 var saniye = prompt("Saniye",10); // saniye = 10

 var a = setInterval(function() {


  document.getElementById("saat").innerHTML = saat;
  document.getElementById("dakika").innerHTML = dakika;
  document.getElementById("saniye").innerHTML = saniye--;

if (Number(document.getElementById("saniye").innerHTML) == 0) {

  dakika--;
  saniye = 59;
}


if (Number(document.getElementById("dakika").innerHTML) == 0 && 
  Number(document.getElementById("saniye").innerHTML) == 0) {
  saat--;
  dakika = 59;
}

if (Number(document.getElementById("saat").innerHTML) == 0 &&
Number(document.getElementById("dakika").innerHTML) == 0 &&
Number(document.getElementById("saniye").innerHTML) == 0) {

 for (i = 0; i < 3; i++) {

    document.getElementsByClassName("deneme")[i].style.backgroundColor = "red";


 }

  clearInterval(a);
}


 },1000); */



 
/*//LOGIN PAROL UYGULAMASI-->

var kullanicilar = [{kullaniciAdi: "admin", parola: "admin"},
    {kullaniciAdi: "nesibe", parola: "1234"},
    {kullaniciAdi: "nigar", parola: "5678"}];


var girilenKullaniciAdi;
var girilenParola;

function kontrolEt() {

    girilenKullaniciAdi = document.getElementById("kullaniciAdi").value;
    girilenParola = document.getElementById("parola").value;
    
    
    for ( x of kullanicilar) {

      if ((x.kullaniciAdi == girilenKullaniciAdi) && (x.parola == girilenParola)) {

return true;
        
        }  

    }
}

function girisOnayi() {

kontrolEt();

if (kontrolEt()) {
  window.open("index.html" , "_self");
}
else {

  alert("Hatali Kullanici Adi yada Parola.Yeniden Deneyin...");
  document.getElementById("kullaniciAdi").value = "";
  document.getElementById("parola").value = "";
}

} */

//HARF NOTU

var vize1, vize2, final, ortalama;

function hesapla() {
    vize1 = document.getElementById("vize1").value;
    vize2 = document.getElementById("vize2").value;
    final = document.getElementById("final").value;

    ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

    return ortalama;
}

function harfNotu() {

  var ort = hesapla();

  if (ort > 90) {
    return "AA";
  }


  else if (ort > 85) {

    return "BA"
  }

  else if (ort > 80) {

    return "BB"
  }
  else if (ort > 70) {

    return "CB"
  }
  else if (ort > 60) {

    return "CC"
  }
  else if (ort > 50) {

    return "DC"
  }
  else if (ort > 40) {

    return "DD"
  }

  else {

    return "FF"
  }
}


function yazdir() {
    document.getElementById("div2").style.display = "block"
    document.getElementById("div2").innerHTML = harfNotu();


    if (harfNotu() == "FF") {

      document.getElementById("div2").style.backgroundColor = "red";
    }

    else {
      document.getElementById("div2").style.backgroundColor = "green";
    }
}