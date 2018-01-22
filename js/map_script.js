var geocoder;


function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('mapFrame'), {
        zoom: 4,
        center: uluru
    });
    geocoder = new google.maps.Geocoder();


    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var markerFrankfurt;
    marker = addMarker(marker, map, uluru, "Frankfurt" );

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    var marker1;
    geocodeAddressIntoMarker(geocoder, "Paris",marker1, map, "PARIS" )

}

function geocodeAddressIntoMarker(geocoder, address,markerName, map, label ) {
    var a;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            addMarker(markerName, map,results[0].geometry.location, label )
        }
    });
}

function addMarker(markerName, map, position, label ){
    markerName = new google.maps.Marker({
        position: position,
        map: map,
        title: label
    });
    return(markerName);
}