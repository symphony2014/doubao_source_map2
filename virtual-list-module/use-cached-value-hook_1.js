// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'babelInteropRequireWildcard'
// - Resolved require(37636) to 'babel-interop-require-wildcard'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 825031
         */
module.exports = function (module, exports, require) {
  var babelInteropRequireWildcard = require("babel-interop-require-wildcard") /*id: 37636*/;
  exports.default = function (e, t, n) {
    var i = r.useRef({});
    if (!("value" in i.current) || n(i.current.condition, t)) {
      i.current.value = e();
      i.current.condition = t;
    }
    return i.current.value;
  };
  var r = babelInteropRequireWildcard(require("react-core-library-reexport") /*id: 634663*/);
}