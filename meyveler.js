var meyveler = ["Muz", "Nektarin", "Portakal", "Kumkuat", "Ananas"];
var meyvelerElementi = document.getElementById("meyveler");

function meyveEkle() {
    for (var i = 0; i < 5; i++) {
        var meyveElementi = document.createElement("p");
        meyveElementi.innerHTML = meyveler[i];

        meyvelerElementi.appendChild(meyveElementi);
    }
}