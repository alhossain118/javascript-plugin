// document.
console.log('connected1');

(function() {
  // document.addEventListener("DOMContentLoaded", function() {

    window.Banner = function() {
    this.string1 = "We cann help you consolidate debt, payoff medical expenses, finance home improvements and much more.";
    this.string2 = "";
    this.imgURL = "";

    }

    Banner.prototype.changeDefaults = function(widgetObj){

      var obj2 = widgetObj;
      p1.innerHTML = obj2["string1"];
      p2.innerHTML = obj2["string2"];
      imgComponent.src = imgURL;
    }

}())

var citi_banner = new Banner();

this.string6 = 'This is String6'
var string1 = citi_banner.string1;
var string2 = "Learn More";
var imgURL = "https://s-media-cache-ak0.pinimg.com/736x/a6/ac/5a/a6ac5af9c43b797fed0b9df8034b8699.jpg";
// var divElement = document.createElement("div");
var CITI_BANNER = document.getElementById("citi-Banner");
var citi_row = document.createElement("div");
citi_row.className = "row";
CITI_BANNER.appendChild(citi_row);
var section1 = document.createElement('div')
section1.className = "col-xs-6 container-orange-color-1";
var p1 = document.createElement("p")
p1.innerHTML= string1;
section1.appendChild(p1);
citi_row.appendChild(section1)
var section2 = document.createElement('div');
section2.className = "col-xs-2 container-orange-color-2";
var p2 = document.createElement("p")
p2.innerHTML = string2;
section2.appendChild(p2)
citi_row.appendChild(section2);
var section3 = document.createElement('div');
section3.className = "col-xs-4";
var imgComponent = document.createElement('img')
imgComponent.src = imgURL;
section3.appendChild(imgComponent)
citi_row.appendChild(section3)

var defaults = {
  string1:"Changed12",
  string2:"Changed23",
  imgURL: "https://s-media-cache-ak0.pinimg.com/736x/a6/ac/5a/a6ac5af9c43b797fed0b9df8034b8699.jpg"
}
citi_banner.changeDefaults(defaults);

var newPara = {
  string1:"V1",
  string2:"V2",
  imgURL: "https://s-media-cache-ak0.pinimg.com/736x/a6/ac/5a/a6ac5af9c43b797fed0b9df8034b8699.jpg"
}

citi_banner.changeDefaults(newPara)
// console.log(CITI_BANNER);
