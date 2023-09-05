
### property ,metod ifadələrinin mənası nədir?
property- obyektin içindəki key.lərə deyilir(buucur başa düşdüm)
metod- obyektin içindəki functiona deyilir

### obj.name və obj['name'] ifadələri arasında fərq nədir? Hansı hallarda ikinci versiya istifadə olunur?
əgər ad olaraq bir kelmeden istifadə edəciksə birinci versiya, əgər iki və daha artıq kəlmə işlədəciksə ikinci versiyadan istifadə edirik.

### class,constructor,key,value ifadələrinin mənasını izah edin
### key,value
let user = {    
  name: "Mahsun",  
  age: 30        
};  
    Burada-- name, age : key, 
    "Mahsun", 30 : value adlanir

## constructor
 Constructor(düzəldən): Constructor funksiyası yaradaraq JS.də obyekt yaradırıq və bu funksiyadan, yaratdığımız obyektlər üçün bir şablon olaraq istifadə edirik.
 constructor.a misal olaraq kecen dersin tapsirigini bucur de yaza bilerik
 
 function Customer(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

customers.push(new Customer("Nergiz",4,"Baku"));
console.log(customers);

## class 
əslində constructor funksiyasindan fərqli elədə ciddi bir fərq tapmadim.sadəcə özəl bir funksiya olduğunu öyrəndim.özəlliyi isə yenədə qeyri adi bir şey tapmadım))..daha saəliqəli və anlaşıqlı olsun deyə istifadə edə bilərik məncə)
