const tabButtons = document.querySelectorAll(".category-article a");

const tabContents = document.querySelectorAll(".FAQ-board");



const targetContentId = this.getAttribute("data-tab");
tabContents.forEach(function(content) {
  if (content.id == targetContentId) {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
