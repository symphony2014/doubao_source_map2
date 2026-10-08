// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayLikeCopyHelper'
// - Resolved require(977130) to 'array-like-copy-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 336974
         */
module.exports = function (module, exports, require) {
  var arrayLikeCopyHelper = require("array-like-copy-helper") /*id: 977130*/;
  module.exports = function (e, t) {
    if (e) {
      if (typeof e == "string") {
        return arrayLikeCopyHelper(e, t);
      }
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor) {
        n = e.constructor.name;
      }
      if (n === "Map" || n === "Set") {
        return Array.from(e);
      }
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return arrayLikeCopyHelper(e, t);
      }
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}