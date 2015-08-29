function MyAction(scope, services) {
	scope.offerName.validate(true);
	if(scope.offerName.error == null) {
		var args ={
			offerSearchText : scope.offerName.value,
			datasource : "QA1"
		};
		services.get("/lookup", args, function(data) {
			// alert(JSON.stringify(data));
			scope.OfferGrid.value = data;
		});
	}
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

var MyDateValidator = [
	{
		"function" : datebetween, 
		"attributes" : {
			"from" : "today"
		},
		"message" : "Invalid date"
	}
];

// Validations
function required(val, attributes) {
	return (val ? val.length > 0 : false);
}

function minlength(val, attributes) {
	return (val ? val.length >= attributes.length : false);
}

function datebetween(date, attributes) {
	var fromdate = attributes.from;
	if(attributes.from === "today") {
		fromdate = new Date;
	}
	return date >= fromdate;
}