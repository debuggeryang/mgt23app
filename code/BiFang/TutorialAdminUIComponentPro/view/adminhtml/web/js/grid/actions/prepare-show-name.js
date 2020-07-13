define([
    'jquery'
], function ($) {
    'use strict';
    var showNameModal = {
      sayHello: function(event) {
        alert("Hello " + event.data.name);
      }
    }

    var prepare = function(record) {
      $("#say-hello").on(
        'click',
        {
          name: record.customer_name
        },
        showNameModal.sayHello
      );
    }
    return prepare;
});
