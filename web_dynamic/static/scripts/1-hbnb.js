$(document).ready(function(){
    let dictAmenities = {}
    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            dictAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete dictAmenities[$(this).attr('data-id')];
        }
        $('DIV.amenities h4').text(Object.values(dictAmenities));
    });
});