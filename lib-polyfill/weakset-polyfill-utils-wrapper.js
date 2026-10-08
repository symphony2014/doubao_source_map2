// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(153468) to 'weakset-polyfill-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 659959
         */
module.exports = function (module, exports, require) {
  var n = require("weakset-polyfill-utils") /*id: 153468*/.has;
  module.exports = function (t) {
    n(t);
    return t;
  };
}