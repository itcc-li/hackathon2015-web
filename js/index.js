function initialize() {

    /* Google Map*/
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(47.139495, 9.524542),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    /* Tab click functions */
    $('#mp_ui_LeftCLickerTab').click(function() {
        $('#mp_ui_RightTab').fadeOut();
        $('#mp_ui_RightCLickerTab').css('border-bottom' , 'none');

        $('#mp_ui_LeftTab').delay(500).fadeIn();
        $('#mp_ui_LeftCLickerTab').css('border-bottom' , '3px solid #507512');
    });

    $('#mp_ui_RightCLickerTab').click(function() {
        $('#mp_ui_LeftTab').fadeOut();
        $('#mp_ui_LeftCLickerTab').css('border-bottom' , 'none');

        $('#mp_ui_RightTab').delay(500).fadeIn();
        $('#mp_ui_RightCLickerTab').css('border-bottom' , '3px solid #507512');
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
