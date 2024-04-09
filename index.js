document.getElementById("homenavbar").onclick = function () {
  document.getElementById("academics").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("home").style.display = "block";
}

document.getElementById("academicsnavbar").onclick = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("academics").style.display = "block";
}

document.getElementById("certificatesnavbar").onclick = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("academics").style.display = "none";
  document.getElementById("certificates").style.display = "block";
}

document.getElementById("skillsnavbar").onclick = function () {
  document.getElementById("academics").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

document.getElementById("projectsnavbar").onclick = function () {
  document.getElementById("academics").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

document.getElementById("othernavbar").onclick = function () {
  document.getElementById("academics").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("other").style.display = "block";
}

$('#ModalCard1').on('hidden.bs.modal', function (e) {
  $('#ModalCard1 iframe').attr("src", "https://www.youtube.com/embed/3rgS-ENBVMg");
});

$('#ModalCard2').on('hidden.bs.modal', function (e) {
  $('#ModalCard2 iframe').attr("src", "https://www.youtube.com/embed/XstT0uxIc7w");
});

$('#ModalCard3').on('hidden.bs.modal', function (e) {
  $('#ModalCard3 iframe').attr("src", "https://www.youtube.com/embed/D8HDixBgjNo");
});

$('#ModalCard4').on('hidden.bs.modal', function (e) {
  $('#ModalCard4 iframe').attr("src", "https://www.youtube.com/embed/ztCq1YluCeI");
});

$('#ModalCard5').on('hidden.bs.modal', function (e) {
  $('#ModalCard5 iframe').attr("src", "https://www.youtube.com/embed/GLZxW3fnYXE");
});

$('#ModalCard6').on('hidden.bs.modal', function (e) {
  $('#ModalCard6 iframe').attr("src", "https://www.youtube.com/embed/XJRZGN9qzHo");
});
