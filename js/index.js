function initialize() {

    /* Google Map*/
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(47.139495, 9.524542),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);