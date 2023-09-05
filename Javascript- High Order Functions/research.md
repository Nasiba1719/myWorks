### mutable-unmutable anlayışları nədir izah edin
*** Immutable (Değişmez) ***
Bir deyisen yaradilanda, bu deyisen bir daha değiştirile bilmez demektir. Yeni değişene bir değer verildiyinde deyisen ram’de yaradilir ve her yeni menimsemede ramde yeni bir yaddasa yazir. meselen:
var a = 1 
var b = a 
a = 3 
console.log(a) // : 3
console.log(b) // : 1
burada a=3 verdiyimizde a=1 yaddasda hele de qalmis olur yeni silinmir.

*** Mutable (Değişir) ***
Değişenle elaqeli her yeni is gorulduyunde, ram’de varolan verilenin üzerine yazılır.
Immutable tipler, mutable tiplerden daha performanslıdır. Yeni daha celd isleyirler. Çünkü evvelki değer ile elaqeli bir kontrol elemez ve deyiseni birbasa ram’de tapdigi boş yere yazir.

 ### stack və heap yaddaş nədir? İlkin araşdırmanı edərək yazın 
 Stack eslinde rahat catabilen besit yoneltile bilen bir sahedir. Sadece boyukluyu belli olan değişenler stackda saxlanır. Bunlar numbers, string ve boolean tipleridir.

olcusu  belli olmayan veri tipleri heapde saxlanilir. (object) ve (array) isleme vaxti mutasiyaya uğrayabilirler bu sebeble heapde saxlanilirlar.
 https://medium.com/pragmatech/heap-və-stack-yaddaş-anlayışları-e458ec763a7a bu meqaleni oxudum ve yararli oldu.

 ###  - standart və arrow funskiya arasındakı fərqləri analiz edin

 *** standart function (function expression):***
 const square3 = function (num) {return (num*num)}
 *** arrow function***
const square3 = num => (num*num) 
console.log(square3(8)) // :64
Burada 1setirlik yazi return etdiyine gore ve 1parametr aldigina gore bucur yaziriq.
En esasi ise Arrow functionun this ile elaqesidir ki bu funksiyanin ozune aid this.i yoxdur hemise kenardan alir deyeri. Meselen:

Window.name = "Nergiz";
const tellName = () => {
    console.log(this); //Window.un deyerlerini alacaq
    console.log(this.name); // Nergiz yazacaq ekrana. Cunki ozune aid this.i olmur arrow funksiyalarin
}

tellName();
