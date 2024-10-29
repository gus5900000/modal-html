// On récupère les éléments dont on a besoin
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Quand on clique sur le bouton, on affiche la modal
openBtn.onclick = function () {
    modal.style.display = "flex";
}

// Quand on clique sur la croix, on ferme la modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Si on clique en dehors de la modal, on la ferme aussi
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}