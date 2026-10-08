// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(76673) to 'redux-core-api'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 708437
         */
module.exports = function (module, exports, require) {
  var r = require("redux-core-api") /*id: 76673*/.compose;
  exports.__esModule = true;
  exports.composeWithDevTools = function () {
    if (arguments.length != 0) {
      if (typeof arguments[0] == "object") {
        return r;
      } else {
        return r.apply(null, arguments);
      }
    }
  };
  exports.devToolsEnhancer = function () {
    return function (t) {
      return t;
    };
  };
}