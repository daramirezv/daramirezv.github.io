document.getElementById("homenavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("certificates").style.display = "none"; 
    document.getElementById("home").style.display = "block";
}

document.getElementById("academicsnavbar").onclick = function() { 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("certificates").style.display = "none"; 
    document.getElementById("academics").style.display = "block"; 
}

document.getElementById("certificatesnavbar").onclick = function() { 
  document.getElementById("home").style.display = "none"; 
  document.getElementById("skills").style.display = "none"; 
  document.getElementById("projects").style.display = "none"; 
  document.getElementById("other").style.display = "none"; 
  document.getElementById("academics").style.display = "none";
  document.getElementById("certificates").style.display = "block"; 
}

document.getElementById("skillsnavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("certificates").style.display = "none"; 
    document.getElementById("skills").style.display = "block"; 
}

document.getElementById("projectsnavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("certificates").style.display = "none"; 
    document.getElementById("projects").style.display = "block"; 
}

document.getElementById("othernavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("certificates").style.display = "none"; 
    document.getElementById("other").style.display = "block"; 
}

$('#ModalCard1').on('hidden.bs.modal', function (e) {
    $('#ModalCard1 iframe').attr("src", "https://www.youtube.com/embed/tIGn5Hsy98M");
});

$('#ModalCard2').on('hidden.bs.modal', function (e) {
    $('#ModalCard2 iframe').attr("src", "https://www.youtube.com/embed/YIsR0va2TeY");
});

$('#ModalCard3').on('hidden.bs.modal', function (e) {
    $('#ModalCard3 iframe').attr("src", "https://www.youtube.com/embed/VzX3vpX_hpU");
});

$('#ModalCard4').on('hidden.bs.modal', function (e) {
    $('#ModalCard4 iframe').attr("src", "https://www.youtube.com/embed/OCgvRkFoWPE");
});

$('#ModalCard5').on('hidden.bs.modal', function (e) {
    $('#ModalCard5 iframe').attr("src", "https://www.youtube.com/embed/rnmHWYhyu_g");
});

$('.modalBug').on('show.bs.modal', function (e) {
    $('nav.navbar').attr("style", "padding-right:0px;");
});

$('.modalBug').on('hidden.bs.modal', function (e) {
    $('nav.navbar').attr("style", "padding-right:16px;");
});