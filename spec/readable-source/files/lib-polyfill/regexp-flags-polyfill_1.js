// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'i' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'a' to 'regexpFlagsGenerator'
// - Resolved require(685568) to 'regexp-flags-generator'
// - Renamed variable 'u' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 912481
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var regexpFlagsGenerator = require("regexp-flags-generator") /*id: 685568*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var c = globalObjectPolyfill.RegExp;
  var f = c.prototype;
  if (es5PropertyDescriptorCheck && tryCatchFunctionWrapper(function () {
    var t = true;
    try {
      c(".", "d");
    } catch (r) {
      t = false;
    }
    var r = {};
    var e = "";
    var n = t ? "dgimsy" : "gimsy";
    function o(t, n) {
      Object.defineProperty(r, t, {
        get: function () {
          e += n;
          return true;
        }
      });
    }
    var i = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y"
    };
    if (t) {
      i.hasIndices = "d";
    }
    for (var a in i) {
      o(a, i[a]);
    }
    return Object.getOwnPropertyDescriptor(f, "flags").get.call(r) !== n || e !== n;
  })) {
    objectDefinePropertyPolyfill(f, "flags", {
      configurable: true,
      get: regexpFlagsGenerator
    });
  }
}