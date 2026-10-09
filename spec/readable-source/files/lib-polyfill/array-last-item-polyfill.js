// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'u' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 359380
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  if (es5PropertyDescriptorCheck) {
    objectDefinePropertyPolyfill(Array.prototype, "lastItem", {
      configurable: true,
      get: function () {
        var t = requireObjectNotNullish(this);
        var r = getArrayLengthSafe(t);
        if (r === 0) {
          return undefined;
        } else {
          return t[r - 1];
        }
      },
      set: function (t) {
        var r = requireObjectNotNullish(this);
        var e = getArrayLengthSafe(r);
        return r[e === 0 ? 0 : e - 1] = t;
      }
    });
    arrayUnscopablesDefine("lastItem");
  }
}