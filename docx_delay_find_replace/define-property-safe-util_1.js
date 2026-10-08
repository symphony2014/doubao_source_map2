// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'toStringHelper'
// - Resolved require(710933) to 'to-string-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 739258
         */
module.exports = function (module, exports, require) {
  var toStringHelper = require("to-string-helper") /*id: 710933*/;
  module.exports = function (e, t, n) {
    if ((t = toStringHelper(t)) in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}