define([], function() {
  return function(config, element) {
    element.getElementsByTagName("button")[0].innerHTML = config.buttonText;
    this.showCompo2Message = function(){
      alert("This component is defined in " + config.componentDefinedIn);
    }
  }
});
