var config = {
    config: {
      mixins: {
        "BiFang_TutorialFrontendJavaScript/js/xml-defined-compo2": {
          'BiFang_TutorialFrontendJavaScriptPro/js/xml-defined-compo2-mixin': true
        }
      }
    },
    paths: { // this array can redirect the js path from to another
      phtmlCompo: "BiFang_TutorialFrontendJavaScriptPro/js/phtml-defined-compo-rewrite",
      xmlCompo1: "BiFang_TutorialFrontendJavaScriptPro/js/xml-defined-compo1-extended",
      xmlCompo3New: "BiFang_TutorialFrontendJavaScriptPro/js/xml-defined-compo3-new"
    },
    map: { // this array setup the nick name (namespace) of each js module,
      //so that we don't need to write the full name when requirejs or define them
      // * seems like a scope, not sure how to use it.
      '*': {

      }
    },
    shim: { // this array specify the loading order (dependency) of each module
      // it could resolve the webpage javascript files loading error
    }
};
