// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'T' to 'arrayReduceMethod'
// - Resolved require(769811) to 'array-reduce-method'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 427814
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayReduceMethod = require("array-reduce-method") /*id: 769811*/;
  var n = Array.prototype;
  module.exports = function (t) {
    var e = t.reduce;
    if (t === n || isPrototypeOfBind(n, t) && e === n.reduce) {
      return arrayReduceMethod;
    } else {
      return e;
    }
  };
}