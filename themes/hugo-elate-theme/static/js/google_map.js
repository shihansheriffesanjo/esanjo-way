function initMap() {
  var dubai = { lat: 25.2008035, lng: 55.2722829 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: dubai,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: dubai,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: '/images/loc.png',
  });
}
