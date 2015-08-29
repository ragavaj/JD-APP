function offerTypes() {
	var offerTypes = ["Purchase", "Redemption", "Event"];
	return offerTypes;
}

function saveAction() {
	alert("Save clicked!");
}

var MyValidator = [
	{
		"function" : required, 
		"message" : "It is manadatory"
	},
	{
		"function" : minlength,
		"attributes" : {
			"length" : 2
		},
		"message" : "Please enter atleast 3 charaters"
	}
];