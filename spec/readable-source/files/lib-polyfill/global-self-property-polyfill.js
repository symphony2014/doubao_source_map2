// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'a' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 629195
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var u = TypeError;
  var c = Object.defineProperty;
  var f = globalObjectPolyfill.self !== globalObjectPolyfill;
  try {
    if (es5PropertyDescriptorCheck) {
      var s = Object.getOwnPropertyDescriptor(globalObjectPolyfill, "self");
      if (!!f || !s || !s.get || !s.enumerable) {
        objectDefinePropertyPolyfill(globalObjectPolyfill, "self", {
          get: function () {
            return globalObjectPolyfill;
          },
          set: function (t) {
            if (this !== globalObjectPolyfill) {
              throw new u("Illegal invocation");
            }
            c(globalObjectPolyfill, "self", {
              value: t,
              writable: true,
              configurable: true,
              enumerable: true
            });
          },
          configurable: true,
          enumerable: true
        });
      }
    } else {
      polyfillPropertyDefiner({
        global: true,
        simple: true,
        forced: f
      }, {
        self: globalObjectPolyfill
      });
    }
  } catch (t) {}
}