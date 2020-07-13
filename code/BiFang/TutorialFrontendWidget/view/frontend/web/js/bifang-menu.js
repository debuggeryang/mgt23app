define([
  'jquery',
  'menu'  // you have to include the original widget there otherwise the custom widget cannot init properly
], function ($){
  'use strict';
  $.widget('bifang.menu', $.mage.menu, {
    options: {
        responsive: false,
        expanded: true, // if it is true, when you expand a top level category,
                        // its children also expanded (you can see the grand children)
        showDelay: 42,
        hideDelay: 300,
        delay: 0,
        mediaBreakpoint: '(max-width: 767px)', // when the width is less than 767px,
                                               // mobile mode is enabled
        position:{
          "my":"left top", // the child menu left and top aligns with the parent
          "at":"left bottom" // the child menu position is at left bottom of the parent
        },
    },
  });

  return $.bifang.menu;
});
