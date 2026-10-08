// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'babelInteropRequireWildcard'
// - Resolved require(37636) to 'babel-interop-require-wildcard'
// - Renamed variable 'r' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(975605) to 'iterable-to-array-helper_1'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 741570
         */
module.exports = function (module, exports, require) {
  var babelInteropRequireWildcard = require("babel-interop-require-wildcard") /*id: 37636*/;
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = function (e) {
    var t = s.useRef(false);
    var n = s.useState(e);
    var i = o.default(n, 2);
    var r = i[0];
    var a = i[1];
    s.useEffect(function () {
      t.current = false;
      return function () {
        t.current = true;
      };
    }, []);
    return [r, function (e, n) {
      if (!n || !t.current) {
        a(e);
      }
    }];
  };
  var o = esModuleInteropHelper_2(require("iterable-to-array-helper_1") /*id: 975605*/);
  var s = babelInteropRequireWildcard(require("react-core-library-reexport") /*id: 634663*/);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}