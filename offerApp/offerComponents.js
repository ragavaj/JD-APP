function offerDetailsPanel() {
	this.type = "container";
	this.title = "Offer Details";
	this.width = "800";
	this.theme = "sywr";
	this.background = true;
	this.alignment = "column";
	this.components = {
		"offerCode" : new JText ("Offer Name", MyValidator, null),
		"offerDescription" : new JTextArea ("Offer Description", 2, null),
		"offerType" : new JText ("Offer Type", null, offerTypes),
		"datePanel" : new DatePanel(),
		"Save" : new JButton("Save", MyAction, "icon", "save", "bottom-right")
	}
};

function DatePanel() {
	this.type = "container";
	this.background = true;
	this.alignment = "row";
	this.components = {
		"offerStartDate" : new JDate ("Offer Start Date", true, null),
		"offerEndDate" : new JDate ("Offer End Date", true, null)
	}
};