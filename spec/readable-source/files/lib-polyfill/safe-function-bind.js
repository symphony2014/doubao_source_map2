// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindPolyfill_2'
// - Resolved require(146857) to 'function-bind-polyfill_2'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'detectBindSupport'
// - Resolved require(412787) to 'detect-bind-support'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 990398
         */
module.exports = function (module, exports, require) {
  var functionBindPolyfill_2 = require("function-bind-polyfill_2") /*id: 146857*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var detectBindSupport = require("detect-bind-support") /*id: 412787*/;
  var a = functionBindPolyfill_2(functionBindPolyfill_2.bind);
  module.exports = function (t, r) {
    functionValidator(t);
    if (r === undefined) {
      return t;
    } else if (detectBindSupport) {
      return a(t, r);
    } else {
      return function () {
        return t.apply(r, arguments);
      };
    }
  };
}