$(document).ready(function () {
  console.log('jquery loaded in rocket homes script');
  setAppBranding();
});

function setAppBranding() {
  $("body").css('background-image', 'url("https://praveen-static-assets.s3.amazonaws.com/rh-logo.jpeg")');
  $("body").css("background-repeat", "no-repeat");
  $("body").css("background-position", "right");
  $("body").css("background-color", "white");
  $('#custom-prompt-logo').css("background-image", "url('https://cdn.auth0.com/manhattan/versions/1.3312.0/assets/badge.png')");
}