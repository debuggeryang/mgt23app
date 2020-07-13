define([
  'mage/utils/wrapper'
], function(wrapper){
    'use strict';
    return function(originalModule) {
      let newModule = originalModule.extend({
        extended: "Yes",
        extendMessage: "We created a mixin in TutorialFrontendJavaScriptPro"
      });

      newModule.message = "This message belongs to the class instead of the object";
      newModule.getMessage = wrapper.wrap(newModule.getMessage, function() {
        return newModule.message;
      });
      return newModule;
    }
});
