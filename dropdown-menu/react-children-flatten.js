// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'flattenChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 96569
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  require.d(exports, {
    flattenChildren: function () {
      return function e(t, i = {}) {
        var o = i.keepEmpty;
        var s = o !== undefined && o;
        var a = [];
        reactCoreLibraryReexport.Children.forEach(t, function (t) {
          if (t != null || s) {
            if (Array.isArray(t)) {
              a = a.concat(e(t));
            } else if (reactIsTypeCheckersReexport.isFragment(t) && t.props) {
              a = a.concat(e(t.props.children));
            } else {
              a.push(t);
            }
          }
        });
        return a;
      };
    }
  });
}