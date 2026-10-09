// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'T' to 'arraySortCompatGetter'
// - Resolved require(867793) to 'array-sort-compat-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 905446
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arraySortCompatGetter = require("array-sort-compat-getter") /*id: 867793*/;
  var n = Array.prototype;
  module.exports = function (t) {
    var e = t.sort;
    if (t === n || isPrototypeOfBind(n, t) && e === n.sort) {
      return arraySortCompatGetter;
    } else {
      return e;
    }
  };
}