// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(120433) to 'get-intrinsic-util'
// - Resolved require(708085) to 'symbol-to-string-tag-check'
// - Renamed variable 'i' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 349988
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util") /*id: 120433*/("%Object.defineProperty%", true);
  var o = require("symbol-to-string-tag-check") /*id: 708085*/();
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var u = o ? Symbol.toStringTag : null;
  module.exports = function (t, e) {
    var r = arguments.length > 2 && arguments[2] && arguments[2].force;
    if (u && (r || !boundHasOwnPropertyUtil(t, u))) {
      if (n) {
        n(t, u, {
          configurable: true,
          enumerable: false,
          value: e,
          writable: false
        });
      } else {
        t[u] = e;
      }
    }
  };
}