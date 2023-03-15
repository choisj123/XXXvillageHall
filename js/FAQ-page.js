const tabButtons = document.querySelectorAll(".category-article a");

const tabContents = document.querySelectorAll(".FAQ-board");

tabButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // 탭 버튼 색상과 폰트 굵기 변경
    tabButtons.forEach(function(button) {
      button.classList.remove("active");
      button.style.color = "black";
      button.style.fontWeight = "normal";
    });
    this.classList.add("active");
    this.style.color = "white";
    this.style.fontWeight = "bold";


const targetContentId = this.getAttribute("data-tab");
tabContents.forEach(function(content) {
  if (content.id == targetContentId) {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
