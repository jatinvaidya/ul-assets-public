$(document).ready(function () {
	console.log("jquery loaded in script");
	dumpContext();
	setAppBranding();
});

function setAppBranding() {
	$("body").css(
		"background-image",
		'url("https://praveen-static-assets.s3.amazonaws.com/rh-logo.jpeg")'
	);
	$("body").css("background-repeat", "no-repeat");
	$("body").css("background-position", "right");
	$("body").css("background-color", "white");
	$("#custom-prompt-logo").css(
		"background-image",
		"url('https://cdn.auth0.com/manhattan/versions/1.3312.0/assets/badge.png')"
	);
}

function dumpContext() {
	console.log("application.id: {{ application.id }}");
	console.log("application.name: {{ application.name }}");
	console.log("application.logo_url: {{ application.logo_url }}");
	console.log("application.metadata: {{ application.metadata }}");
	console.log("branding.logo_url: {{ branding.logo_url }}");
	console.log("branding.colors.primary: {{ branding.colors.primary }}");
	console.log(
		"branding.colors.page_background: {{ branding.colors.page_background }}"
	);
	console.log("tenant.friendly_name: {{ tenant.friendly_name }}");
	console.log("tenant.support_email: {{ tenant.support_email }}");
	console.log("tenant.support_url: {{ tenant.support_url }}");
	console.log("tenant.enabled_locales: {{ tenant.enabled_locales }}");
	console.log("user.user_id: {{ user.user_id }}");
	console.log("user.picture: {{ user.picture }}");
	console.log("user.email: {{ user.email }}");
	console.log("user.email_verified: {{ user.email_verified }}");
	console.log("user.app_metadata: {{ user.app_metadata }}");
	console.log("user.user_metadata: {{ user.user_metadata }}");
	console.log("user.family_name: {{ user.family_name }}");
	console.log("user.given_name: {{ user.given_name }}");
	console.log("user.name: {{ user.name }}");
	console.log("user.nickname: {{ user.nickname }}");
	console.log("user.username: {{ user.username }}");
	console.log("locale: {{ locale }}");
	console.log("prompt.name: {{ prompt.name }}");
	console.log("prompt.screen.name: {{ prompt.screen.name }}");
	console.log("prompt.screen.texts: {{ prompt.screen.texts }}");
	console.log("state: {{ state }}");
}
