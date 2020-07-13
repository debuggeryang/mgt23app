define([
  'BiFang_TutorialFrontendJavaScript/js/xml-defined-compo1'
], function(xmlCompo1) {
  return xmlCompo1.extend({
    defaults:{
      jsSource: "in xml",
      templateSource: "in xml",
      dataSource: "from component.defaults",
      extended: "Yes",
      extendMessage: "We created a new module. It extends the original one."
    }
  });
});
