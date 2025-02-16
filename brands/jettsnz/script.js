$(document).ready(function () {
  console.log('jquery loaded in rocket mortgage script');
  setAppBranding();
});

function setAppBranding() {
  //set app branding
  $("body").css('background-image', 'url("https://praveen-static-assets.s3.amazonaws.com/rm-logo.jpeg")');
  $("body").css("background-repeat", "no-repeat");
  $("body").css("background-position", "right");

  //Set logo
  $('#custom-prompt-logo').css("background-image", "url('https://cdn.auth0.com/blog/auth0rta/theme/logos/auth0-logo-black.png')");
}