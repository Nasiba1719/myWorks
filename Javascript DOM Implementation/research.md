### innerHTML xüsusiyyətini analiz edin
HTML teglerine mudaxile ederek onlara her hansi bir melumat oture bilerik ve ya deyisdire bilerik.

### innerTEXT xüsusiyyətini analiz edin
### Bu iki xüsusiyyət arasında fərqlər nələrdir? Yazın

Meselen;
window.document.getElementById('arananId').innerHTML = '<h6>Evet tıkladınız. Helal size!</h6>';

Ekran Çıktısı;

Evet tıkladınız. Helal size!

window.document.getElementById('arananId').innerText = '<h6>Evet tıkladınız. Helal size!</h6>';

Ekran Çıktısı;

<h6>Evet tıkladınız. Helal size!</h6>

Yeni innerText icindeki taglarla birge ekrana cap edir.innerHtml ise yalnizca icindeki metni ekrana verir.

