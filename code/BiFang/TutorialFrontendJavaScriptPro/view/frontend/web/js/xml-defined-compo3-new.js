define([
  'BiFang_TutorialFrontendJavaScript/js/xml-defined-compo3'
], function(xmlCompo3) {
  return xmlCompo3.extend({
    defaults:{
      extended: "Yes",
      extendMessage: "It is in fact extended, and component js file path has been changed in xml, but \"Yes\" is overwritten by \"No\" from Helper."
    }
  });
});
