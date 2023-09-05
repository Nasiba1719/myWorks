
//Səhifə hər dəfə yüklənən ekranın tam ortasında təsadüfi olaraq atalar sözü görünsün. 
let proverbs = [
    "Cahil dirilerin olusudur.",
    "Cahilin ibadətindən alimin yuxusu yaxsidir",
    "Ac deyər doymaram, tox deyər acmaram.",
    "Ac dograyar, tox yeyer.",
    "Ac donuz daridan cixmaz."
]
function randomIndex() {
    let randomProverb = Math.floor(Math.random() * proverbs.length);
    // HTML daxilinde p elementi yaratdim metnleri onun icinde elave etdim.Sen birbasa document.write istifae etdiyin ucun daha onceyazdigin her seyi silirdi.
    
    document.querySelector('.quote').innerHTML=proverbs[randomProverb]
}



//Ekranın ortasında bir button yaradın. Bu butonu ekranın arxa fon rəngini dəyişdirmək üçün istifadə edəcəyik. Buttona bir dəfə klik edəndə arxa fon qırmızı, eyni butona ikinci dəfə klik edəndə arxa fon mavi olmalıdır

let Btn, result, count = 0;
Btn = document.querySelector('#Btn');
result = document.querySelector('#result');
Btn.addEventListener('click', function () {
    if (count % 2 === 0) {
        result.style.backgroundColor = "red";
    } else {
        result.style.backgroundColor = "blue";
    }
    count++;
});



//ad,soyad məlumatlarının yazılacağı input-lar təyin edin. Bu inputlara yazılan məlumatın əldə edilməsi üçün button yaradın. Mən bu butona klik edəndə inputlarda yazılan dəyərlər console-da görünməlidir. Ya da bu əldə edilən dəyərləri ekranda göstərməyi yoxlaya bilərsiniz siyahı şəklində

function myFunction() {
    let x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}

