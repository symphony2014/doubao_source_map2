// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'o' to 'arrayConcatMethod'
// - Resolved require(371994) to 'array-concat-method'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 125115
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayConcatMethod = require("array-concat-method") /*id: 371994*/;
  var i = Array.prototype;
  module.exports = function (t) {
    var r = t.concat;
    if (t === i || isPrototypeOfBind(i, t) && r === i.concat) {
      return arrayConcatMethod;
    } else {
      return r;
    }
  };
}