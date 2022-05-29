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

  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (info) {
    if (info.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
$('button').click(() => {
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0Ã.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (places) {
      places.forEach(place => {
        const html = `<article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Gests</div>
          <div class="number_rooms">${place.number_rooms}
            Bedrooms</div>
          <div class="number_bathrooms">${place.number_bathrooms}
          </div>
        </div>
        <div class="user">
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>`;
        $('.places').append(html)
      });
    }
  });
});
});
