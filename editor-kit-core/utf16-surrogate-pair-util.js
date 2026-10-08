// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'u' to 'isHighSurrogate'
// - Resolved require(966229) to 'is-high-surrogate'
// - Renamed variable 'a' to 'isUtf16LowSurrogate'
// - Resolved require(230709) to 'is-utf16-low-surrogate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 884794
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var i = getIntrinsicUtil("%String.fromCharCode%");
  var isHighSurrogate = require("is-high-surrogate") /*id: 966229*/;
  var isUtf16LowSurrogate = require("is-utf16-low-surrogate") /*id: 230709*/;
  module.exports = function (t, e) {
    if (!isHighSurrogate(t) || !isUtf16LowSurrogate(e)) {
      throw new typeErrorConstructor("Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code");
    }
    return i(t) + i(e);
  };
}