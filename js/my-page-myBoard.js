// 탭 버튼 요소 선택
const tabButtons = document.querySelectorAll(".tab button");

// 탭 내용 요소 선택
const tabContents = document.querySelectorAll(".tabcontent");

// 탭 버튼 클릭 이벤트 처리
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

    // 탭 내용 보이기/숨기기
    const targetContentId = this.getAttribute("data-tab");
    tabContents.forEach(function(content) {
      if (content.id == targetContentId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});


// 마이페이지 텝
const mypage = document.getElementById("mypage")
mypage.addEventListener("click", function(){
    const subMenu = document.getElementById("sub-menu");

    if(subMenu.style.display == 'none'){
       subMenu.style.display = "block";

    }else{
        subMenu.style.display = "none";
    }
    
})



  // 페이지당 게시글 개수와 총 게시글 수
const postsPerPage = 10;
const totalPosts = 50;

// 총 페이지 수
const totalPages = Math.ceil(totalPosts / postsPerPage);

// 페이지 번호 목록 생성 함수
function renderPageNumbers() {
  let pageNumbers = "";
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers += `<a href="#" onclick="goToPage(${i})">${i}</a> `;
  }
  document.getElementById("pageNumbers").innerHTML = pageNumbers;
}

// 페이지 이동 함수
function goToPage(pageNumber) {
  // 해당 페이지로 이동하는 로직을 작성하세요.
}
  
  
  
  
  