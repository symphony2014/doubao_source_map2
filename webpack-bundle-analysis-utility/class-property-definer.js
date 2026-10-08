// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'toStringHelper'
// - Resolved require(710933) to 'to-string-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 855975
         */
module.exports = function (module, exports, require) {
  var toStringHelper = require("to-string-helper") /*id: 710933*/;
  function o(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o.enumerable = o.enumerable || false;
      o.configurable = true;
      if ("value" in o) {
        o.writable = true;
      }
      Object.defineProperty(e, toStringHelper(o.key), o);
    }
  }
  module.exports = function (e, t, r) {
    if (t) {
      o(e.prototype, t);
    }
    if (r) {
      o(e, r);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}