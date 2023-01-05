const sections = document.querySelectorAll(".target-anchor");
const navLi = document.querySelectorAll("nav .container-xxl ul li a");

// 導覽列
window.onscroll = () => {
  var current = "";
  const root = document.querySelector(':root');
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.href.split("#")[1] == (current)) {
      li.classList.add("active");
    }
  });

};