// Arayüz işlemleri

function UI() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");
    this.languageList = document.getElementById("language");


};

// Arayüz değiştir 
UI.prototype.changeUI = function () {


    this.outputImage.src = `ìmages/${this.languageList.value}.png`;

    // selectedIndex ile tıklanılanı bulup value yazdırıyoruz..
    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;


};


// Çevrilen Kelime
UI.prototype.displayTranslate = function (word) {

    this.outputWord.textContent = word;
}