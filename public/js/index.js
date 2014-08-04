/* global $, filepicker */
$(document).ready(function() {
  var apiKey = 'Aru5Ur9IRKK4nXV4IBn5bz';
  filepicker.setKey(apiKey);

  $('.upload').on('click', function() {
    filepicker.pickAndStore({
      mimetype: 'image/*'
    }, {}, function onSuccess() {
      $('#successModal').modal();
    }, function onError(error) {
      // let's keep this insde body so that users don't have to
      // worry how to report errors
      var href =
        'mailto:twobacksurfers@gmail.com?subject=Error Report&body=' +
        JSON.stringify(error);
      $('.error-report').attr('href', href);
      $('#errorModal').modal();
    });
  });
});
