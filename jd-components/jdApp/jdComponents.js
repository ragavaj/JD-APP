// Components
function JText (label, validators, autocomplete) {
	this.type = "text";
	this.label = label;
	this.validators = validators ? validators : [];
	this.autocomplete = autocomplete;
};

function JTextArea (label, rows, validators) {
	this.type = "textarea";
	this.label = label;
	this.rows = rows;
	this.validators = validators ? validators : [];
};

function JTextAutoComplete (label, datafun) {
	this.type = "text";
	this.autocomplete = true;
	this.label = label;
	this.data = datafun;
}

function JDate (label, time, validators) {
	this.type = "date";
	this.label = label;
	this.time = time;
	this.validators = validators ? validators : [];
};

function JButton (label, action, view, icontype, placement) {
	this.type = "button";
	this.label = label;
	this.action = action;
	this.view = view;
	this.icontype = icontype;
	this.placement = placement;
}

function JGrid () {
	this.type = "grid";
}

function JList () {
	this.type = "list";
}