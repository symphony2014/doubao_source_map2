// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'UniverseIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 19498
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var c = ["icon", "className", "svgProps"];
  var s = 0;
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var l = e.icon;
    var f = e.className;
    var p = e.svgProps;
    var d = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("span", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default("universe-icon", f),
      ref: t
    }, d), reactCoreLibraryReexport.createElement(l, objectAssignUtil.objectAssign({
      prefixId: (n = reactCoreLibraryReexport.useState(function () {
        s++;
        return `u${s.toString(32)}`;
      }), iterableToArrayUtil_1_1.iterableToArray(n, 1)[0])
    }, p)));
  });
  require.d(exports, {
    UniverseIcon: function () {
      return l;
    }
  });
}