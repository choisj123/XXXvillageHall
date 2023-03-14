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
    
});


// 페이징용 js
const tbody = document.querySelector('.posts-list');
const rowsPerPage = 4;
let currentPage = 1;
let totalPages;
const maxPagesToShow = 5;

function showRows() {
  const rows = tbody.rows;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  for (let i = 0; i < rows.length; i++) {
    if (i >= startIndex && i < endIndex) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
}

function createPages() {
  totalPages = Math.ceil(tbody.rows.length / rowsPerPage);

  const pagesDiv = document.querySelector('#pages');
  const prevButton = document.createElement('button');
  prevButton.innerHTML = 'prev';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      showRows();
      updatePaging();
    }
  });
  pagesDiv.appendChild(prevButton);

  const pageButtons = document.createDocumentFragment();

  let startPage, endPage;
  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerHTML = i;
    pageButton.disabled = i === currentPage;
    pageButton.addEventListener('click', function() {
      currentPage = i;
      showRows();
      updatePaging();
    });
    pageButtons.appendChild(pageButton);
  }

  pagesDiv.appendChild(pageButtons);

  const nextButton = document.createElement('button');
  nextButton.innerHTML = 'next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      showRows();
      updatePaging();
    }
  });
  pagesDiv.appendChild(nextButton);
}

function updatePaging() {
  const pagesDiv = document.querySelector('#pages');
  pagesDiv.innerHTML = '';
  createPages();
}

showRows();
createPages();