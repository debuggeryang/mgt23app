define([
  'jquery',
], function ($){
  'use strict';
  console.log("Hello");
  var baseUrl = "http://www.yangmgt23.com";
  var customerUrl = "/rest/V1/customers/me";
  var productUrl = "/rest/V1/products/24-WB04";
  $.ajax({
    url: baseUrl + productUrl,
    // data:"24-WB04",
    method:"GET"
  }).done(function(data) {
    console.log(data);
  }).fail(function(err){
    console.log(err);
  });
});
