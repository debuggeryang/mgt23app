define(
  ['jquery',
    'uiComponent',
    'ko'],
  function($, Component, ko) {
    return Component.extend({
      defaults: {
        tracks: {
          inputValueNoObserveIsTrack: true,
          inputObject: true, // variable changes in this obejct change can not be tracked in this way.
          // inputObject:{ value: true }, // it is not working
          inputValueArray: true, // if the object is an array, track or ko.observableArray() is
                                 // only responsible for tracking the elements change (eg. new element appended),
                                 // but not responsible for tracking variable value changes in the element object
        },
        inputValueNoObserveNoTrack: "This value is neither in ko.observable() nor tracks.",
        inputValueIsObserveNoTrack: ko.observable("This value is in ko.observable() but not tracks."),
        inputValueNoObserveIsTrack: "This value is not in ko.observable() but in tracks.",
        inputObject: {
          value: "This value is from an object and the object is in track."
        },
        anotherInputObject: {
          value: ko.observable("This value is from an object and this value is in ko.observable.")
        },
        inputValueArray: [
          {inputValue: "One array value. The element is not in ko.observable(). The array is in track"},
          {inputValue: ko.observable("Another array value. The lement is in ko.observable(). The array is in track.")}
        ]
      }
    });
});
