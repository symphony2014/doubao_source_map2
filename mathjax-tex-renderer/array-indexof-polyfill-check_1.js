// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'T' to 'arrayIndexofPolyfillInit'
// - Resolved require(239226) to 'array-indexof-polyfill-init'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 276601
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayIndexofPolyfillInit = require("array-indexof-polyfill-init") /*id: 239226*/;
  var n = Array.prototype;
  module.exports = function (t) {
    var e = t.indexOf;
    if (t === n || isPrototypeOfBind(n, t) && e === n.indexOf) {
      return arrayIndexofPolyfillInit;
    } else {
      return e;
    }
  };
}