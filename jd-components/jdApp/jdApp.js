var JDAPP = {
	"toView" : toView,
	"stringify" : viewStringify
};

function toView(component) {
	if(component) {
		component.scope = component.scope ? component.scope : {};
		component.jtheme = jtheme;
		if(component.components) {
			var components = component.components;
			for(var i in component.components) {
				var currentComponent = components[i]; 
				
				currentComponent.id = i;
				currentComponent.parent = component;
				
				if(currentComponent.type == 'container') {
					currentComponent = toView(currentComponent)
					component.scope[i] = currentComponent.scope; 
				} else {
					currentComponent.jtheme = jtheme;
					component.scope[i] = {};
				}
			}
		}
	}
	return component;
}

function replacer(key, value) {
  if (key === "parent") {
    return undefined;
  }
  return value;
}

function viewStringify(component) {
	return JSON.stringify(component, replacer);
}

var jtheme = function(component) {
	return component ? 
		(component.theme ? component.theme : 
			(component.parent ? component.parent.jtheme(component.parent) : "sears")) : "sears";
}
