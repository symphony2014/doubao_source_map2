// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 'o' to 'isRegexpCheck_1'
// - Resolved require(655670) to 'is-regexp-check_1'
// - Renamed variable 'u' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 973768
         */
module.exports = function (module, exports, require) {
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var isRegexpCheck_1 = require("is-regexp-check_1") /*id: 655670*/;
  var i = getIntrinsicSafe("RegExp.prototype.exec");
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  module.exports = function (t) {
    if (!isRegexpCheck_1(t)) {
      throw new typeErrorConstructor("`regex` must be a RegExp");
    }
    return function (e) {
      return i(t, e) !== null;
    };
  };
}