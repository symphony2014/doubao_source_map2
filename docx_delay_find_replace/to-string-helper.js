// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(893631) to 'babel-typeof-helper'
// - Renamed variable 'r' to 'toPrimitiveHelper'
// - Resolved require(655840) to 'to-primitive-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 710933
         */
module.exports = function (module, exports, require) {
  var i = require("babel-typeof-helper") /*id: 893631*/.default;
  var toPrimitiveHelper = require("to-primitive-helper") /*id: 655840*/;
  module.exports = function (e) {
    var t = toPrimitiveHelper(e, "string");
    if (i(t) === "symbol") {
      return t;
    } else {
      return String(t);
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}