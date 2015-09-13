var map;
var bounds = new google.maps.LatLngBounds();

$(function() {
    google.maps.event.addDomListener(window, 'load', function() {
        initialize();

        $.get('api/index.php/pois?fields=longitude,latitude', function(data) {
            data.map(function(location) {
                var pos = {
                    lat: Number(location.latitude),
                    lng: Number(location.longitude)
                };
                new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: 'images/marker.png'
                });
                bounds.extend(new google.maps.LatLng(location.latitude, location.longitude));
            });
        });
    });
});

function initialize() {
    var mapCanvas = document.getElementById('map');

    var styles = [{
        stylers: [{
            hue: "#00ffe6"
        }, {
            saturation: -20
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            lightness: 100
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];

    // Default coordinates, if geolocation doesn't works
    var coordinates = {
        latitude: 47.139495,
        longitude: 9.524542
    };

    var mapOptions = {
        center: new google.maps.LatLng(coordinates.latitude, coordinates.longitude),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles,
        disableDefaultUI: true,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        backgroundColor: 'none'
    }

    map = new google.maps.Map(mapCanvas, mapOptions);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
			animateMap();
        }, animateMap);
    }

}

function animateMap() {
	var currentCoordinates = map.getCenter();
	map.panTo(new google.maps.LatLng((currentCoordinates.G - 0.00001), currentCoordinates.K));

	window.requestAnimationFrame(animateMap);
}