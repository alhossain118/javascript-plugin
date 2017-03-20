(function() {

    // this.privateVar = "You can't access me in the console"
    this.Banner = function (){

      //Create a global element references
      this.banner = null;
      this.section1 = null;
      this.section2 = null;
      this.section3 = null;

      var defaults = {
        text: "",
        imgURL: "https://s-media-cache-ak0.pinimg.com/736x/a6/ac/5a/a6ac5af9c43b797fed0b9df8034b8699.jpg",
        className1: ""
      }

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
      var content, contentHolder, docFrag;

      if(typeof this.options.content === "string"){
        content = this.options.content
      }else {
        content = this.options.content.innerHTML;
      }

      //Create a DocumentFragment to build with
      docFrag = document.createDocumentFragment();

      //Create banner
      this.banner = document.createElement("div");
      this.banner.className = "row";
      this.banner


    }


}());

var citiBanner = document.getElementById('citiBanner')

var myBanner = new Banner({
  content: citiBanner
});

// console.log("privateVar,", privateVar);

// console.log(construct);
