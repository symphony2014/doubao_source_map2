// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'flattenChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 50392
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  require.d(exports, {
    flattenChildren: function () {
      return function e(t, n = {}) {
        var r = n.keepEmpty;
        var a = r !== undefined && r;
        var l = [];
        reactCoreLibraryReexport.Children.forEach(t, function (t) {
          if (t != null || a) {
            if (Array.isArray(t)) {
              l = l.concat(e(t));
            } else if (reactIsTypeCheckersReexport.isFragment(t) && t.props) {
              l = l.concat(e(t.props.children));
            } else {
              l.push(t);
            }
          }
        });
        return l;
      };
    }
  });
}