/* global $, filepicker */
$(document).ready(function() {
  var apiKey = 'Aru5Ur9IRKK4nXV4IBn5bz';
  filepicker.setKey(apiKey);

  $('.upload').on('click', function() {
    filepicker.pick();
  });
});
