// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(893631) to 'babel-typeof-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 655840
         */
module.exports = function (module, exports, require) {
  var i = require("babel-typeof-helper") /*id: 893631*/.default;
  module.exports = function (e, t) {
    if (i(e) !== "object" || e === null) {
      return e;
    }
    var n = e[Symbol.toPrimitive];
    if (n !== undefined) {
      var r = n.call(e, t || "default");
      if (i(r) !== "object") {
        return r;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}