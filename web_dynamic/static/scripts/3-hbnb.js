$(document).ready(function () {
  let dictAmenities = {}
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      dictAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete dictAmenities[$(this).attr('data-id')];
    }
    $('DIV.amenities h4').text(Object.values(dictAmenities).join(', '));
  });

  const url = 'http://127.0.0.1:5001/api/v1/places_search/';
  $.get(url, function (info) {
    if (info.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function () {
      return ("hola")
    }
  })
});