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
const rowsPerPage = 3;
  let currentPage = 1;

  const table = querySelectorAll(".contentTable");
  const rowCount = table.tBodies[0].rows.length;
  const pageCount = Math.ceil(rowCount / rowsPerPage);

  const paginationContainer = document.createElement("div");

  for (let i = 1; i <= pageCount; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.innerText = i;
    paginationContainer.appendChild(pageLink);
  }

  const pageLinks = paginationContainer.querySelectorAll("a");

  function setCurrentPage(page) {
    currentPage = page;
    updateTable();
    highlightCurrentPage();
  }

  function highlightCurrentPage() {
    pageLinks.forEach(link => {
      link.classList.remove("active");
      if (+link.innerText === currentPage) {
        link.classList.add("active");
      }
    });
  }

  function updateTable() {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    table.tBodies[0].rows.forEach((row, index) => {
      row.style.display = (index >= start && index < end) ? "" : "none";
    });
  }
  
  highlightCurrentPage();
  
  pageLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      setCurrentPage(+e.target.innerText);
    });
  });
  
  // 이전 페이지, 다음 페이지 이동 버튼 생성
  const prevButton = document.createElement("button");
  prevButton.innerText = "Prev";
  prevButton.addEventListener("click", e => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  });
  
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.addEventListener("click", e => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  });
  
  // 페이지 링크와 이동 버튼을 페이지네이션 컨테이너에 추가
  paginationContainer.insertBefore(prevButton, pageLinks[0]);
  paginationContainer.appendChild(nextButton);
  
  // 페이지네이션 컨테이너를 테이블 아래에 추가
  table.parentNode.insertBefore(paginationContainer, table.nextSibling);

  // 이전 페이지, 다음 페이지 이동 버튼 생성
const prevButton = document.createElement("button");
prevButton.innerText = "Prev";
prevButton.addEventListener("click", e => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
});

const nextButton = document.createElement("button");
nextButton.innerText = "Next";
nextButton.addEventListener("click", e => {
  if (currentPage < pageCount) {
    setCurrentPage(currentPage + 1);
  }
});

// 페이지 링크와 이동 버튼을 페이지네이션 컨테이너에 추가
paginationContainer.insertBefore(prevButton, pageLinks[0]);
paginationContainer.appendChild(nextButton);

// 페이지네이션 컨테이너를 테이블 아래에 추가
table.parentNode.insertBefore(paginationContainer, table.nextSibling);