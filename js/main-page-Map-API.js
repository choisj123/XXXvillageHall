var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.566826, 126.9786567), 
        level: 3 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); 

var markers = [];

// 마커 데이터
var markersData = [
  {
    name: "정훈쓰",
    location: new kakao.maps.LatLng(37.566826, 126.9786567),
    title : "글제목1",
    createAt : "2023-03-08 10:00:00",
    content: "살려주세요",
    category: "이슈"
  },
  {
    name: "수진쓰",
    location: new kakao.maps.LatLng(37.549264, 126.913598),
    title : "글제목2",
    createAt : "2023-03-08 11:00:00",
    content: "시간 너무 안가요",
    category:"명소" 
  },
  {
    name: "정윤쓰",
    location: new kakao.maps.LatLng(37.555284, 126.969833),
    title : "글제목3",
    createAt: "2023-03-08 12:40:00",
    content: "자고싶다",
    category:"취미"
  },
  {
    name: "동준쓰",
    location: new kakao.maps.LatLng(37.575868, 126.976781),
    title : "글제목4",
    createAt: "2023-03-08 22:10:03",
    content: "집에가고싶어요",
    category:"친목"
  },
  {
    name: "민성쓰",
    location: new kakao.maps.LatLng(37.551457, 126.988244),
    title : "글제목5",
    createAt: "2023-03-08 20:50:00",
    content: "안녕하세요",
    category: "추천"
  }
];

for (var i = 0; i < markersData.length; i++) {
  var marker = new kakao.maps.Marker({
    position: markersData[i].location,
    map: map,
    category: markersData[i].category
  });

  markers.push(marker);

  kakao.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
          var infowindow = new kakao.maps.InfoWindow({
              content: 
              '<div class="container">' +
              '<!-- header --> ' +
              '<div class="info">' +
              '  <div class="title">' + 
                  markersData[i].name +
              '  </div>' +
              '    <div class="close">' + markersData[i].createAt + '</div>' +
              '</div>' +
              '<!-- nav -->' +
              '<div class="nav-section">' +
              '  <div class="left">' +
              '    <a href="#">[서초구]</a>' +
              '    <a href="#">' + markersData[i].category + '</a>' +
              '  </div>' +
              '  <div class="right">' +
              '    <span>조회수 400</span>' +
              '    <span>좋아요 400</span>' +
              '  </div>' +
              '</div>' +
              '<!-- main-content -->' +
              '<div class="main">' +
              '  <!-- aside -->' + 
              '  <div></div>' +
              '  <!-- main -->'+
              '  <div class="main-content">'+
              '    <!-- 글제목 -->'+
              '    <div>'+
              '      <p>' + markersData[i].title +
              '</p>'+
              '    </div>'+
              '    <!-- 작성글 -->'+
              '    <div>'+
              '      <p>' + markersData[i].content + '</p>'+
              '    </div>'+
              '  </div>'+
              '  <!-- aside -->'+
              '  <div></div>'+
              '</div>'+
          ' </div>',
          });
          infowindow.open(map, marker);
          map.addListener('click',  function() {
            infowindow.close();
          });
      }
  })(marker, i));
}

function showMarkersByCategory(category) {
    for (var i = 0; i < markersData.length; i++) {
      if (category === "전체" || markersData[i].category === category) {
        markers[i].setVisible(true);
      } else {
        markers[i].setVisible(false);
      }
    }
  }

// 카테고리 선택 폼
var categorySelect = document.getElementById('category');

categorySelect.onchange = function() {
  var category = this.value;
  showMarkersByCategory(category);
};