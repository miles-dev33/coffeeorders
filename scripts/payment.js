(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-payment=\"form\"]";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler();
  console.log(formHandler);

})(window);
