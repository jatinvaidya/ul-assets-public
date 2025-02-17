$(document).ready(function () {
	console.log("jquery loaded in script");
	// dumpContext();
	// setAppBranding();
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
	console.log("application.id: {{ application.id | json }}");
	console.log("application.name: {{ application.name | json }}");
	console.log("application.logo_url: {{ application.logo_url | json }}");
	console.log("application.metadata: {{ application.metadata | json }}");
	console.log("branding.logo_url: {{ branding.logo_url | json }}");
	console.log("branding.colors.primary: {{ branding.colors.primary | json }}");
	console.log(
		"branding.colors.page_background: {{ branding.colors.page_background | json }}"
	);
	console.log("tenant.friendly_name: {{ tenant.friendly_name | json }}");
	console.log("tenant.support_email: {{ tenant.support_email | json }}");
	console.log("tenant.support_url: {{ tenant.support_url | json }}");
	console.log("tenant.enabled_locales: {{ tenant.enabled_locales | json  }}");
	console.log("user.user_id: {{ user.user_id | json  }}");
	console.log("user.picture: {{ user.picture | json  }}");
	console.log("user.email: {{ user.email | json  }}");
	console.log("user.email_verified: {{ user.email_verified | json  }}");
	console.log("user.app_metadata: {{ user.app_metadata | json  }}");
	console.log("user.user_metadata: {{ user.user_metadata | json  }}");
	console.log("user.family_name: {{ user.family_name | json  }}");
	console.log("user.given_name: {{ user.given_name | json  }}");
	console.log("user.name: {{ user.name | json  }}");
	console.log("user.nickname: {{ user.nickname | json  }}");
	console.log("user.username: {{ user.username | json  }}");
	console.log("locale: {{ locale | json  }}");
	console.log("prompt.name: {{ prompt.name | json  }}");
	console.log("prompt.screen.name: {{ prompt.screen.name | json  }}");
	console.log("prompt.screen.texts: {{ prompt.screen.texts | json  }}");
	console.log("state: {{ state | json  }}");
}
