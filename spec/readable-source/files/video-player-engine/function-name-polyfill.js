// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Resolved require(968072) to 'function-name-property-check'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 942449
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var l = require("function-name-property-check") /*id: 968072*/.EXISTS;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var d = Function.prototype;
  var r = functionBindFallback(d.toString);
  var o = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var B = functionBindFallback(o.exec);
  if (es5PropertyDescriptorCheck && !l) {
    objectDefinePropertyPolyfill(d, "name", {
      configurable: true,
      get: function () {
        try {
          return B(o, r(this))[1];
        } catch (U) {
          return "";
        }
      }
    });
  }
}