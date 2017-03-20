//Javascript plugin

//Create an immediately invoked functional expression to wrap our code

//Closures can be leveraged to create a private scope,
//where you have control over what data you make available.

// We want to add a constructor method for our plugin, and expose it as public.
// Our IIFE is called globally, so our this keyword is pointing at the window.
// Let’s attach our constructor to the global scope using this.
(function() {

    this.Banner = function(){

    var defaults = {
      imgURL : null,
      text : null,
      textColor : null,
      backgroundColor : null,
      fontFamily : null,
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function buildOut() {
    var content, other1, other2;

    if(typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      content = this.options.content.innerHTML;
    }

    // Create a banner2 element

    this.banner = document.createElement("div");
    this.banner.className = "citi-banner " + " ";
    // this.banner.



  }


}())
