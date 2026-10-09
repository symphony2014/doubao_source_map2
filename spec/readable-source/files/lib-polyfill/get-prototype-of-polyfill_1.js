// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'symbolDescriptionCache'
// - Resolved require(896189) to 'symbol-description-cache'
// - Renamed variable 'u' to 'checkPrototypeInheritance'
// - Resolved require(397428) to 'check-prototype-inheritance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 427505
         */
module.exports = function (module, exports, require) {
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var symbolDescriptionCache = require("symbol-description-cache") /*id: 896189*/;
  var checkPrototypeInheritance = require("check-prototype-inheritance") /*id: 397428*/;
  var c = symbolDescriptionCache("IE_PROTO");
  var f = Object;
  var s = f.prototype;
  module.exports = checkPrototypeInheritance ? f.getPrototypeOf : function (t) {
    var r = requireObjectNotNullish(t);
    if (objectHasOwnPolyfill_1(r, c)) {
      return r[c];
    }
    var e = r.constructor;
    if (isFunctionPolyfill(e) && r instanceof e) {
      return e.prototype;
    } else if (r instanceof f) {
      return s;
    } else {
      return null;
    }
  };
}