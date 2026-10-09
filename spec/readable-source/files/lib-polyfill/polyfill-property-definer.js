// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Resolved require(143761) to 'property-descriptor-polyfill'
// - Renamed variable 'i' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'a' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'u' to 'defineGlobalProperty_1'
// - Resolved require(433178) to 'define-global-property_1'
// - Renamed variable 'c' to 'objectDefaultsAssign'
// - Resolved require(210693) to 'object-defaults-assign'
// - Renamed variable 'f' to 'functionFeatureDetectHelper'
// - Resolved require(948260) to 'function-feature-detect-helper'
// - Updated imported property 'f' to 'getOwnPropertyDesc' (module 143761)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 358006
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var o = require("property-descriptor-polyfill") /*id: 143761*/.getOwnPropertyDesc;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var defineGlobalProperty_1 = require("define-global-property_1") /*id: 433178*/;
  var objectDefaultsAssign = require("object-defaults-assign") /*id: 210693*/;
  var functionFeatureDetectHelper = require("function-feature-detect-helper") /*id: 948260*/;
  module.exports = function (t, r) {
    var e;
    var s;
    var l;
    var v;
    var p;
    var h = t.target;
    var d = t.global;
    var y = t.stat;
    if (e = d ? globalObjectPolyfill : y ? globalObjectPolyfill[h] || defineGlobalProperty_1(h, {}) : globalObjectPolyfill[h] && globalObjectPolyfill[h].prototype) {
      for (s in r) {
        v = r[s];
        l = t.dontCallGetSet ? (p = o(e, s)) && p.value : e[s];
        if (!functionFeatureDetectHelper(d ? s : h + (y ? "." : "#") + s, t.forced) && l !== undefined) {
          if (typeof v == typeof l) {
            continue;
          }
          objectDefaultsAssign(v, l);
        }
        if (t.sham || l && l.sham) {
          definePropertyHelper_1(v, "sham", true);
        }
        definePropertyHelper_1_1(e, s, v, t);
      }
    }
  };
}