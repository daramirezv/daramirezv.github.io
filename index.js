document.getElementById("homenavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("home").style.display = "block";
}

document.getElementById("academicsnavbar").onclick = function() { 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("academics").style.display = "block"; 
}

document.getElementById("skillsnavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("skills").style.display = "block"; 
}

document.getElementById("projectsnavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("other").style.display = "none"; 
    document.getElementById("projects").style.display = "block"; 
}

document.getElementById("othernavbar").onclick = function() { 
    document.getElementById("academics").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    document.getElementById("projects").style.display = "none"; 
    document.getElementById("home").style.display = "none"; 
    document.getElementById("other").style.display = "block"; 
}

$("#ModalCard1").on('hidden.bs.modal', function (e) {
    $("video").each(function () { this.pause() });
});

$("#ModalCard2").on('hidden.bs.modal', function (e) {
    $("video").each(function () { this.pause() });
});

$("#ModalCard3").on('hidden.bs.modal', function (e) {
    $("video").each(function () { this.pause() });
});

$("#ModalCard4").on('hidden.bs.modal', function (e) {
    $("video").each(function () { this.pause() });
});

$("#ModalCard5").on('hidden.bs.modal', function (e) {
    $("video").each(function () { this.pause() });
});

$("#ModalCard6").on('hidden.bs.modal', function (e) {
    $("video").each(function () { this.pause() });
});