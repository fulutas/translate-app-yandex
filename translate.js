// Api kullanımı burada gerçekleşir.

function Translate(word, language) {

    this.apikey = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";
    this.word = word;
    this.language = language;

    // XHR Object

    this.xhr = new XMLHttpRequest();
}

// callback ile translateWord func. yakalar.
Translate.prototype.translateWord = function (callback) {
    // Ajax işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    // Get Request Yap
    this.xhr.open("GET", endpoint, true);

    // Request Response/Cevap Al
    this.xhr.onload = () => {

        // İstek başarılı ise;    
        if (this.xhr.status === 200) {

            // Json objesine çevir ve getir. text array elemanı olduğu için [0] yani ilk elemanı çağırdık.
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0]; // Çevirilen dil. 

            callback(null, text); // Hata alınamaz ise null bırak response dön. (1.Param err , 2. response)

        } else {
            callback("Hata : Response alınamadı", null); // Hata alınırsa err dön. (1. Param err , 2. response) 
        }

    }

    // Request Gönder
    this.xhr.send();
};



// Çevrilecek kelime ve dil seçimi değişirse;
Translate.prototype.changeParameters = function (newWord, newLanguage) {

    this.word = newWord;
    this.language = newLanguage;

};