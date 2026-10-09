// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'T' to 'arrayPrototypeMap_1'
// - Resolved require(597083) to 'array-prototype-map_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 201741
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayPrototypeMap_1 = require("array-prototype-map_1") /*id: 597083*/;
  var n = Array.prototype;
  module.exports = function (t) {
    var e = t.map;
    if (t === n || isPrototypeOfBind(n, t) && e === n.map) {
      return arrayPrototypeMap_1;
    } else {
      return e;
    }
  };
}