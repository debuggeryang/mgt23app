require([
    'jquery',
    'uiComponent',
    'dropdownDialog'
], function($, Component){
  console.log("hello dropdown");
    $('#bifang-dropdown-dialog').dialog({
        "appendTo": "[data-block=bifang-dropdown]",
        "triggerTarget":"[data-trigger=dropdown-trigger]",
        "timeout": 2000,
        "closeOnMouseLeave": false,
        "closeOnEscape": true,
        "autoOpen": false,
        "triggerClass": "active",
        "parentClass": "active",
        "buttons": []
    });

    return Component.extend({});
});
