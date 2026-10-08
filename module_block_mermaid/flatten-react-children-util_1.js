// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'reactIsTypeCheckersReexport'
// - Resolved require(547283) to 'react-is-type-checkers-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 697377
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = function e(t, n = {}) {
    var i = [];
    r.default.Children.forEach(t, function (t) {
      if (t != null || n.keepEmpty) {
        if (Array.isArray(t)) {
          i = i.concat(e(t));
        } else if (reactIsTypeCheckersReexport.isFragment(t) && t.props) {
          i = i.concat(e(t.props.children, n));
        } else {
          i.push(t);
        }
      }
    });
    return i;
  };
  var r = esModuleInteropHelper_2(require("react-core-library-reexport") /*id: 634663*/);
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
}