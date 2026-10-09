// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 440098
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var a = URLSearchParams.prototype;
  var u = functionBindFallback(a.forEach);
  if (!!es5PropertyDescriptorCheck && !("size" in a)) {
    objectDefinePropertyPolyfill(a, "size", {
      get: function () {
        var t = 0;
        u(this, function () {
          t++;
        });
        return t;
      },
      configurable: true,
      enumerable: true
    });
  }
}