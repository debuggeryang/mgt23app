define(['jquery', 'uiComponent'], function($, Component) {
  return Component.extend({
    defaults: {
      extended: "Yes",
      extendMessage: "It is in fact extended, and the original js has been replaced by a rewritten one, but \"Yes\" is overwritten by \"No\" from Block->getJsLayout()."
    }
  });
});
