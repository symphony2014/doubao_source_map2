// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'queueMicrotaskPolyfill'
// - Resolved require(745385) to 'queue-microtask-polyfill'
// - Renamed variable 'a' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'u' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// - Renamed variable 'c' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'f' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 762993
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var queueMicrotaskPolyfill = require("queue-microtask-polyfill") /*id: 745385*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  polyfillPropertyDefiner({
    global: true,
    enumerable: true,
    dontCallGetSet: true,
    forced: tryCatchFunctionWrapper(function () {
      return es5PropertyDescriptorCheck && Object.getOwnPropertyDescriptor(globalObjectPolyfill, "queueMicrotask").value.length !== 1;
    })
  }, {
    queueMicrotask: function (t) {
      argumentLengthValidator_1(arguments.length, 1);
      queueMicrotaskPolyfill(functionValidator(t));
    }
  });
}