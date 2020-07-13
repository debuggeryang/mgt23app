define(['jquery', 'uiComponent'], function($, Component) {
  return Component.extend({
    defaults:{
      jsSource: "in xml",
      templateSource: "in xml",
      dataSource: "from component.defaults",
      extended: "No"
    }
  });
});
