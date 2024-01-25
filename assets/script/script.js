var kontentSejarah = document.getElementById('content-sejarah');
var kontentDeskripsi = document.getElementById('content-deskripsi');
var kontentMenu = document.getElementById('content-menu')

function tampilDeskripsi() {
    if (kontentDeskripsi.style.display === "none") {
        kontentDeskripsi.style.animation = "fadeIn 0.5s"
        kontentDeskripsi.style.display = "block";

    } else {
        kontentDeskripsi.style.display = "none";
    }
};
function tampilSejarah() {
    if (kontentSejarah.style.display === "none") {
        kontentSejarah.style.animation = "fadeIn 0.5s";
        kontentSejarah.style.display = "block";
    } else {
        kontentSejarah.style.display = "none";
    }
};
function tampilMenu() {
    if (kontentMenu.style.display === "none") {
        kontentMenu.style.animation = "fadeIn 0.5s";
        kontentMenu.style.display = "block";
    } else {
        kontentMenu.style.display = "none";
    }
};


