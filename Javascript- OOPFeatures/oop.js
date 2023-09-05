


// // DOM elementləri üzərində iş görə bilmək üçün hazır DOM metodlarından istifadə edirik. Zəhmət olmasa istənilən bir elementin arxa fon rənginə qırmızı rəng verən metod yazın.Yəni mən istənilən dom elementə document.querySelector(element).changeBgColor() kimi custom metod tətbiq edəndə bu metod elementin arxa fon rəngini dəyişsin

// HTMLElement.prototype.changeBgColor = function () {
//     this.style.backgroundColor='red';
//  }
 



//Aşağıda yazılan kodu elə tamamlayın ki kod xəta vermədən istifadə edilə bilsin.

class Foo{

a(){
console.log("a")
return this
// sizin kodunuz
}

b(){
console.log("b")
return this
// sizin kodunuz
}

c(){

console.log("c")
// sizin kodunuz}
return this

}
}

let obj= new Foo()

obj.a().b().c()