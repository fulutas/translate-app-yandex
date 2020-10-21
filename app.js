// Ana JS dosyası
// Prototype,ajax,callback ile kullanıldı.


eventListeners();


function eventListeners() {



    // Submit olduğunda translateWord çalıştır.
    document.getElementById("translate-form").addEventListener("submit", translateWord);

    // Select list değer değiştikçe event tetiklenecek.
    document.getElementById("language").onchange = function () {
        // Arayüz işlemler

        ui.changeUI();
    }
}


const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();


function translateWord(e) {

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value); // O an ki input taki değeri al.

    // prototype.translateWord callback gönderiyoruz.
    translate.translateWord(function (err, response) {

        if (err) {
            // Hata
            ui.displayTranslate(err);
        } else {
            ui.displayTranslate(response);
        }

    });

    e.preventDefault();
}