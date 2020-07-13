define([], function() {
  // config refers to the data passed from phtml,
  // element refers to the element that invokes this script. It is ".compo1" in this case.
  return function(config, element) {
    element.getElementsByTagName("button")[0].innerHTML = config.buttonText;
    // here we specify the scope "this"
    // if you console.log(this), you can find this refers to Window
    // if we don't specify the scope here, you will not be able to use the funcion in phtml
    this.showCompo1Message = function(){
      alert("This component is defined in " + config.componentDefinedIn);
    }
  }
});
