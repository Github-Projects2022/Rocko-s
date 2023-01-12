var map;
var markers = [];
var infoWindow;

var storeData = [];

$.getJSON("assets/js/store-data.json", function(data){
    $.each(data, function (i) { 
    storeData.push(data[i]);
    });

    
    genStoreCard(storeData);
});

//Display all cards in carousel
function genStoreCard(_storeData) {

    $("#carousel-4 .carousel-inner").html("");
  
    $.each(_storeData, function (i) { 
      $("#carousel-4 .carousel-inner").append("\
      <div class=\"carousel-item\">\
          <div class=\"card\">\
              <div class=\"card-body\">\
                  <h6 class=\"  card-subtitle mb-2\">" + _storeData[i].location + "</h6>\
                  <h5 class=\"card-title d-flex align-items-end\">" + _storeData[i].name + "</h4>\
                  <p class=\"card-text\">" + _storeData[i].address + "</p>\
                  <a class=\"card-link btn btn-danger\" href=\"" + _storeData[i].map + "\" target=\"_blank\">Directions</a>\
              </div>\
          </div>\
      </div>\
      ");
    });
  
    $("#carousel-4 .carousel-inner .carousel-item:nth-child(1)").addClass("active");
}


//Google map initialize
function initMap() {

    var ncrMap = {
        lat: 14.694399,
        lng: 121.045612
    }

    map = new google.maps.Map(document.getElementById('rockos-map'), {center: ncrMap, zoom: 8});
    infoWindow = new google.maps.InfoWindow();
}

var mapModalVisible;
var mapLoaded;

$("#find a").on("click", function(){
    setTimeout(function(){
        mapModalVisible = $("#store-locator").hasClass("show");
    }, 500);

    if(mapModalVisible && (mapLoaded = 1)) {
        return;
    } else {
        setTimeout(function(){
            initMap();  
            searchStores();
            mapLoaded = 1;
        }, 500);
    }
    
});

//Search function via location
function searchStores(){
    var foundStores = [];
    var search = (document.getElementById('search').value).toUpperCase();
    if (search){
          storeData.forEach(function(store){
            var loc = ((store.location).toUpperCase()).substring(0,search.length);
            if (loc == search){
                foundStores.push(store);
            }
        });
        
    }else{
        foundStores = storeData;
    }

    clearLocations();
    displayStores(foundStores);
    showStoresMarkers(foundStores);
    setOnClickListener();
}

//clear store list
function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

//display store list
function displayStores(stores){
    var storesHTML = "";
    stores.forEach(function(store,index){
        var address = store.address;
        var location = store.location;
        storesHTML += `
            <div class="store-container">
                <div class="store-container-background">
                    <div class="store-info-container">
                        <div class="store-address">
                            <span>${address}</span> 
                        </div>
                        <div class="store-phone-number">${location}</div>
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

//event listener on click branch
function setOnClickListener(){
  var storeElements  = document.querySelectorAll('.store-container');
  storeElements.forEach(function(elem, index){
      elem.addEventListener('click', function(){
          google.maps.event.trigger(markers[index], 'click');
      })
  });
}

//store marker on map
function showStoresMarkers(stores){
    var bounds = new google.maps.LatLngBounds();
    stores.forEach(function(store, index){
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude);
        var name = store.name;
        var address = store.address;
        var location = store.location;
        bounds.extend(latlng);    
        createMarker(latlng, name, address, location, index)
    })
    map.fitBounds(bounds);
}

//create marker
function createMarker(latlng, name, address, location, index) {
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
              ${location}
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


