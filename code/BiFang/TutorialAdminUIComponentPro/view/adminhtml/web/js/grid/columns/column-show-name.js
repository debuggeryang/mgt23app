define([
    'jquery',
    'Magento_Ui/js/grid/columns/column',
    'mage/template',
     // what is "text!" for?:  https://requirejs.org/docs/api.html
    'text!BiFang_TutorialAdminUIComponentPro/template/grid/template-show-name.html',
    'BiFang_TutorialAdminUIComponentPro/js/grid/actions/prepare-show-name',
], function ($, Column, mageTemplate, showNameTemplate, prepareShowName) {
    'use strict';

    return Column.extend({

      // In fact there is no change in defaults, but I still list a few variables here because they refers to some technicals magento2 is using.
      defaults: {
        // imports and exports allow components to "transmit" data from one to another.
        // https://magento.stackexchange.com/questions/138936/what-are-the-import-exports-defaults-for-in-a-uielement-object/139168#139168
        imports: {
            exportSorting: 'sorting'
        },
        modules: {
            // ${ $.variable } is ES6 template literals in "magento2" style
            // https://alanstorm.com/magento_2_ec6_template_literals/
            source: '${ $.provider }'
        }
      },

      getLabel: function (record) {
          return "<button type='button'>Click to show</button>";
      },

      getFieldHandler: function (record) {
        return this.openShowNameModal.bind(this, record);
      },

      openShowNameModal: function (record) {
        console.log(record);
        // create the html string with required values, mageTemplate is almost like a wrapper of underscorejs.template()
        var renderedTemplate = mageTemplate(showNameTemplate, {
          customer_name: record.customer_name,
          increment_id: record.increment_id
        });

        // convert the html string into a jquery object, so that we can use make it as a jQuery modal widget
        // The trick here is that $('<div/>') will generate a jQuery object with empty content (because the content in <div></div> is empty).
        var jQueryRenderedTemplate = $('<div/>').html(renderedTemplate);

        // create the modal widget
        jQueryRenderedTemplate.modal({
            type: "slide",
            title: "Show Order " + record.increment_id + " Name",
            outerClickHandler: function(){},  // click outer area will trigger closeModal if we don't specify it here
            modalClass: "modal-" + record.increment_id,  // we can destroy this modal by class when we close it
            closed: function () { // This is one model event. When the closed event triggerred, we remove the modal by its class
              // here we cannot use this.modalClass because this refers to the pure html template. Not sure why.
              $(".modal-" + record.increment_id).remove();
            },
            buttons:[], // we removed the OK button
        });

        // open the modal widget
        jQueryRenderedTemplate.trigger('openModal');

        // The modal may be very complicated and have many features.
        // To make this column js file clean, we move all those modal js relevant features to another js file, and call it here:
        prepareShowName(record);
      },

      // Read bifang_order_grid.xml to learn about what this function is for.
      applyActionInOfficialProcedure: function(data) {
        console.log("applyAction:");
        console.log(data);
      }
    });
});
