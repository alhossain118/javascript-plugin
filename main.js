//Javascript plugin

// Create an immediately invoked functional expression to wrap our code
(function() {

  // Define our constructor
  this.Modal = function() {
    // Define option defaults
    var defaults = {
      // className: 'fade-and-drop',
      // closeButton: true,
      // content: "",
      // maxWidth: 600,
      // minWidth: 280,
      // overlay: true
      
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

  }

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

}());
