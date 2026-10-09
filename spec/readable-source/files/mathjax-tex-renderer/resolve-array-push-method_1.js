// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'T' to 'arrayPushMethod'
// - Resolved require(59882) to 'array-push-method'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 819123
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayPushMethod = require("array-push-method") /*id: 59882*/;
  var n = Array.prototype;
  module.exports = function (t) {
    var e = t.push;
    if (t === n || isPrototypeOfBind(n, t) && e === n.push) {
      return arrayPushMethod;
    } else {
      return e;
    }
  };
}