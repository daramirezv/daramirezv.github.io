document.getElementById("homenavbar").onclick = () => {
  document.getElementById("academics").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("home").style.display = "block";
}

document.getElementById("academicsnavbar").onclick = () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("academics").style.display = "block";
}

document.getElementById("certificatesnavbar").onclick = () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("academics").style.display = "none";
  document.getElementById("certificates").style.display = "block";
}

document.getElementById("skillsnavbar").onclick = () => {
  document.getElementById("academics").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

document.getElementById("projectsnavbar").onclick = () => {
  document.getElementById("academics").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("other").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

document.getElementById("othernavbar").onclick = () => {
  document.getElementById("academics").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("other").style.display = "block";
}

const closeNavBar = () => {
  const toggleButton = document.getElementById("navbar-toggler");
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  const isHidden = window.getComputedStyle(toggleButton).display === 'none';
  if (isExpanded && !isHidden) {
    toggleButton.click();
  }
}

document.getElementById("main").onclick = closeNavBar;
document.getElementById("main").addEventListener('touchstart', closeNavBar);

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
