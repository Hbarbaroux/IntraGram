var geocoder;
var a;
var b;
var c;
var d;
var M;
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('mapFrame'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 2
    });
    geocoder = new google.maps.Geocoder();

    var contentStringFrankfurt = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Frankfurt</h1>'+
        '<div id="bodyContent">'+
        '<p><b>August 2017</b>, Album of my pictures taken at Frankfurt !</p>'+
        '<p>***lien des photos à mettre ici***</p>'+
        '</div>'+
        '</div>';

    var contentStringMaldives = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Maldives</h1>'+
        '<div id="bodyContent">'+
        '<p><b>February 2017</b>, Album of my amazing trip to the Maldives !</p>'+
        '<p>***lien des photos à mettre ici***</p>'+
        '</div>'+
        '</div>';

    var contentStringBeijing = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Beijing</h1>'+
        '<div id="bodyContent">'+
        '<p><b>June 2017</b>, Album of my trip to Beijing !</p>'+
        '<p>***lien des photos à mettre ici***</p>'+
        '</div>'+
        '</div>';

    var contentStringSki = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Chamonix</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Decembre 2016</b>, Album of my Week-end to the Alps.</p>'+
        '<p>***lien des photos à mettre ici***</p>'+
        '</div>'+
        '</div>';

    var infowindowFrankfurt = new google.maps.InfoWindow({
        content: contentStringFrankfurt
    });

    var infowindowMaldives = new google.maps.InfoWindow({
        content: contentStringMaldives
    });

    var infowindowBeijing = new google.maps.InfoWindow({
        content: contentStringBeijing
    });

    var infowindowSki = new google.maps.InfoWindow({
        content: contentStringSki
    });

    var markerFrankfurt = geocodeAddressIntoMarker(geocoder,"Frankfurt", map, "Frankfurt", infowindowFrankfurt, a );
    var markerMaldives = geocodeAddressIntoMarker(geocoder,"Maldives", map, "Maldives", infowindowMaldives, b );
    var markerBeijing = geocodeAddressIntoMarker(geocoder,"Beijing", map, "Beijing", infowindowBeijing, c );
    var markerSki = geocodeAddressIntoMarker(geocoder,"Chamonix", map, "Chamonix", infowindowSki, d );
    //FUNCTIONS
    function addMarker(map, position, label ){
        M = new google.maps.Marker({
            position: position,
            map: map,
            title: label
        });
        return(M);
    }

    function geocodeAddressIntoMarker(geocoder, address, map, label, infowindowName, letter ) {
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                letter = addMarker(map,results[0].geometry.location, label );
                letter.addListener('click', function() {
                    infowindowName.open(map, letter);

                });
            }
        });
    }
}



