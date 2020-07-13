define(['jquery', 'uiComponent'], function($, Component) {
  return Component.extend({
    defaults:{
      childMemo:"I'm compo2-child1, template defined in xml. You should see me twice because I was declared in displayArea and elems()."
    }
  });
});
