function searchWidget() {
	this.type = "container";
	this.form = true;
	this.formname = 'myForm';
	this.title = "Search";
	this.width = "600";
	this.theme = "sears";
	this.background = true;
	this.alignment = "column";
	this.components = {
		"offerName" : new JText ("Offer Name", MyValidator),
		// "datePanel" : new DateWidget(),
		// "search" : new JButton("Search", MyAction, "icon", "search", "bottom-right")
		"SubSubWidget" : new SubSubWidget(),
		"OfferGrid" : new JList()
	}
};

function DateWidget() {
	this.type = "container";
	this.background = true;
	this.alignment = "row";
	this.components = {
		"offerStartDate" : new JText ("Offer Start Date", []),
		"offerEndDate" : new JDate ("Offer End Date", MyDateValidator)
	}
};

function SubSubWidget() {
	this.type = "container";
	this.background = true;
	this.alignment = "column";
	this.components = {
		"datePanel" : new DateWidget(),
		"search" : new JButton("Search", MyAction, "icon", "search", "bottom-right")
	}
}

