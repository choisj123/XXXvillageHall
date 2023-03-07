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
    name: "이슈",
    location: new kakao.maps.LatLng(37.566826, 126.9786567),
    category: "이슈"
  },
  {
    name: "국회의사당",
    location: new kakao.maps.LatLng(37.549264, 126.913598),
    category:"명소" 
  },
  {
    name: "족구할사람",
    location: new kakao.maps.LatLng(37.555284, 126.969833),
    category:"취미"
  },
  {
    name: "ㅇㅇㅂㅇㅂㅇ",
    location: new kakao.maps.LatLng(37.575868, 126.976781),
    category:"친목"
  },
  {
    name: "남산타워",
    location: new kakao.maps.LatLng(37.551457, 126.988244),
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
              '    홍길동' +
              '  </div>' +
              '    <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
              '</div>' +
              '<!-- nav -->' +
              '<div class="nav-section">' +
              '  <!-- display : flex   -->' +
              '  <div class="left">' +
              '    <a href="#">[서초구]</a>' +
              '    <a href="#">#카페</a>' +
              '    <a href="#">#맛집</a>' +
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
              '      <p>' + marker.getTitle() +'</p>'+
              '    </div>'+
              '    <!-- 작성글 -->'+
              '    <div>'+
              '      <p>저쩌구</p>'+
              '    </div>'+
              '  </div>'+
              '  <!-- aside -->'+
              '  <div></div>'+
              '</div>'+
          ' </div>',
          });
          infowindow.open(map, marker);
          map.addListener('click', function() {
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
