### document.querySelector()
Bu metod ile birlikde hem css classlarini hemde id.lerini istifade ede bilersiniz.Bundan istifade ederken class ucun evveline "." noqte, id.ler ucun ise "#" qoyulmalidir. Sehivedeki secdiyiniz ilk elementi geri donderir. Eger ad seciminde nese sehvlik etseniz null olaraq geri donecek.




### document.querySelectorAll()
document.querySelector() ile eyni mentiqle isleyir.Sadece burada ilk elementi yox butun elementleri NodeList obyekt olaraq geri donderir.


### document.getElementById()
Elementin kimliyini cagiraraq onla elaqe qurur.Geriye elementi return edir.Eger hec bir element daxil etmemisikse null deyeri dondurur. ID boyuk kicik herfe hessasdir.Ona gorede bir elementin ID.sini secerken onun evveline # isaresi qoymaq gerekmez.Eks halda nul deyeri donecek 
Meselen:
*Document.getElementById('#root'); // null*
*document.getElementById('root'); // <div id=​"root">​…​</div>*​


### document.getElementsByTagName()
Metodu birden cox elementi cagirmaq ucun istifade olunur. Ilkin olaraq bir HTML elementini alir ve ona uygun olaraq HtmlCollection return edir. Meselen:
<p>🐱</p>
<p>🐰</p>
<p>🐯</p>
<p>🐧</p>
Bu sehivede butun p elementlerini secmek istesek
const animals = document.getElementsByTagName('p'); 
// Istehsal edir:  HTMLCollection(4) [p, p, p, p]



### document.getElementsByName()
Metodu elementlerin name deyerlerine gore bir NOdeList obyekti dondurur.Meselen
<input type="text" name="e-posta">
<input type="tel" name="telefon">
<input type="date" name="tarih">
E-posta adını daşıyan butun elementleri getirek.

const emails = document.getElementsByName('e-posta');
// Istehsal edir: NodeList [input]



### document.getElementsByClassName()
Elementleri class adlarina gore secir. DOM.da istediyimiz class name.i dasiyan butun elementleri secmek ucun istifade olunur.BU metod bize bir HtmlCollection donderir. Ve istifade ederken class adinin qarsisina "noqte" qoymamaniz lazimdir. meselen:
<div class="baykuş kusu">🦉</div>
<div class="güvercin kusu">🐦</div>
<div class="kartal kusu">🦅</div>
<div class="kedi">🐱</div>
Sehivedeki butun quslari secek;

const kuslar = document.getElementsByClassName('kusu');
//Istehsal edir: HTMLCollection(3) [div.baykuş.kusu, div.güvercin.kusu, div.kartal.kusu] 






OZUM UCUN QEYD:

{document.getElementById(id): id niteliği ile eşleşen ilk kaydı getirir.
document.getElementsByName(name): name niteliği ile eşleşen tüm kayıtları dizi olarak  getirir.
document.getElementsByTagName(etiketadı):etiket adı ile eşleşen tüm kayıtları dizi olarak getirir.
document.getElementsByClassName(classAdı):class niteliği ile eşleşen tüm kayıtları dizi olarak getirir.
document.querySelector(seçici): seçici ile eşleşen ilk kaydı getirir.
document.querySelectorAll(seçici): seçici ile eşleşen tüm kayıtları dizi olarak getir.}