var map;
var markers = [];
var infoWindow;

function initMap() {
  var ncrMap = {
      lat: 14.694399,
      lng: 121.045612
  }
  map = new google.maps.Map(document.getElementById('map'), {center: ncrMap, zoom: 8});
  infoWindow = new google.maps.InfoWindow();
  searchStores();
}

function searchStores(){
  var foundStores = [];
  var search = document.getElementById('search').value;
  if (search){
      stores.forEach(function(store){
          var postal = store.addressLines[0].substring(0,search.length);
          if (postal == search){
              foundStores.push(store);
          }
      });
      
  }else{
      foundStores = stores;
  }
  clearLocations();
  displayStores(foundStores);
  showStoresMarkers(foundStores);
  setOnClickListener()
}

function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function setOnClickListener(){
  var storeElements  = document.querySelectorAll('.store-container');
  storeElements.forEach(function(elem, index){
      elem.addEventListener('click', function(){
          google.maps.event.trigger(markers[index], 'click');
      })
  });
}

function displayStores(stores){
  var storesHTML = "";
  stores.forEach(function(store,index){
      var address = store.addressLines;
      var phone = store.phoneNumber;
      storesHTML += `
          <div class="store-container">
              <div class="store-container-background">
                  <div class="store-info-container">
                      <div class="store-address">
                          <span>${address[0]}</span>
                          <span>${address[1]}</span> 
                      </div>
                      <div class="store-phone-number">${phone}</div>
                  </div>
                  <div class="store-number-container">
                      <div class="store-number"> ${index+1} </div>
                  </div>
              </div>
          </div>     
      `
  });
  document.querySelector('.stores-list').innerHTML = storesHTML;
}

function showStoresMarkers(stores){
  var bounds = new google.maps.LatLngBounds();
  stores.forEach(function(store, index){
      var latlng = new google.maps.LatLng(
          store.coordinates.latitude,
          store.coordinates.longitude);
      var name = store.name;
      var address = store.addressLines[0];
      var phone = store.phoneNumber;
      bounds.extend(latlng);
      createMarker(latlng, name, address, phone, index)
  })
  map.fitBounds(bounds);
}

function createMarker(latlng, name, address, phone, index) {
  var html = `
      <div class="store-info-window">
          <div class="store-info-name">
              ${name}
          </div>
          <div class="store-info-address">
              <div class="circle">
                  <i class="fas fa-location-arrow"></i>
              </div>
              ${address}
          </div>
          <div class="store-info-phone">
          <div class="circle">
              <i class="fas fa-phone-alt"></i>
          </div>
              ${phone}
          </div>
          
      </div>
  `
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    label: `${index+1}`
  });
  google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
  });
  markers.push(marker);
}