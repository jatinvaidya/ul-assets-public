$(document).ready(function () {
	console.log("jquery loaded in script");
	setBranding();
});

const setBranding = () => {
	// set background color for any button to #29c3fa
	$("button").css("background-color", "#29c3fa");

	// set color for any button to #fff
	$("button").css("color", "#fff");

	// set color for any link to #29c3fa
	$("a").css("color", "#29c3fa");

	// set href for a tag with id a_pp to https://www.fitnessfirst.com.au/
	$("#a_pp").attr("href", "https://www.goodlife.com.au/privacy-policy");

	// set href for a tag with id a_tc to https://www.fitnessfirst.com.au/
	$("#a_tc").attr("href", "https://www.goodlife.com.au/terms-and-conditions");
};
