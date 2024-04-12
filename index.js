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

const modalCard1 = document.getElementById('modalCard1')
modalCard1.addEventListener('hidden.bs.modal', () => {
  var iframe = modalCard1.querySelector('iframe');
  iframe.src = "https://www.youtube.com/embed/3rgS-ENBVMg";
});

const modalCard2 = document.getElementById('modalCard2')
modalCard2.addEventListener('hidden.bs.modal', () => {
  var iframe = modalCard2.querySelector('iframe');
  iframe.src = "https://www.youtube.com/embed/XstT0uxIc7w";
});

const modalCard3 = document.getElementById('modalCard3')
modalCard3.addEventListener('hidden.bs.modal', () => {
  var iframe = modalCard3.querySelector('iframe');
  iframe.src = "https://www.youtube.com/embed/D8HDixBgjNo";
});

const modalCard4 = document.getElementById('modalCard4')
modalCard4.addEventListener('hidden.bs.modal', () => {
  var iframe = modalCard4.querySelector('iframe');
  iframe.src = "https://www.youtube.com/embed/ztCq1YluCeI";
});

const modalCard5 = document.getElementById('modalCard5')
modalCard5.addEventListener('hidden.bs.modal', () => {
  var iframe = modalCard5.querySelector('iframe');
  iframe.src = "https://www.youtube.com/embed/GLZxW3fnYXE";
});

const modalCard6 = document.getElementById('modalCard6')
modalCard6.addEventListener('hidden.bs.modal', () => {
  var iframe = modalCard6.querySelector('iframe');
  iframe.src = "https://www.youtube.com/embed/XJRZGN9qzHo";
});
