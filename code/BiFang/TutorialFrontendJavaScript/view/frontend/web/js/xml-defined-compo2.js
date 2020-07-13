define(['jquery', 'uiComponent'], function($, Component) {
  return Component.extend({
    defaults: {
      template: "BiFang_TutorialFrontendJavaScript/component-template",
      dataSource: "from component, then replaced by component.defaults"
    },
    jsSource: "in xml",
    templateSource: "in js",
    dataSource: "from component",
    extended: "No"
  });
});
