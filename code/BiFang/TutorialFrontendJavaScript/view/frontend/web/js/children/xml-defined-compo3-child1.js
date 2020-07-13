define(['jquery', 'uiComponent'], function($, Component) {
  return Component.extend({
    defaults:{
      childMemo:"I'm compo3-child1, template defined in Helper. You can't see compo3-child2 because it's disabled in xml by Helper."
    }
  });
});
