$(document).ready(function () {
	console.log("jquery loaded in script");
	setBranding();
});

const setBranding = () => {
	// set background color for any button to #db1b33
	$("button").css("background-color", "#db1b33");

	// set color for any button to #fff
	$("button").css("color", "#fff");

	// set color for any link to #db1b33
	$("a").css("color", "#db1b33");

	// set href for a tag with id a_pp to https://www.fitnessfirst.com.au/
	$("#a_pp").attr("href", "https://www.fitnessfirst.com.sg/privacy-policy");

	// set href for a tag with id a_tc to https://www.fitnessfirst.com.au/
	$("#a_tc").attr(
		"href",
		"https://www.fitnessfirst.com.sg/terms-and-conditions"
	);
};
