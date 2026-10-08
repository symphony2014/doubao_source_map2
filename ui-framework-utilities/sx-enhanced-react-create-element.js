// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'createElementWithSX'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 636291
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var i;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var f = ["sx", "className"];
  function d(e, n) {
    var r = arguments.length;
    var o = Array(r > 2 ? r - 2 : 0);
    var d = 2;
    for (; d < r; d++) {
      o[d - 2] = arguments[d];
    }
    if (n == null || !n.sx || typeof e != "string") {
      return reactCoreLibraryReexport.createElement.apply(i ||= require.t(reactCoreLibraryReexport, 2), [e, n].concat(o));
    }
    var p = n.sx;
    var v = n.className;
    var m = objectOmitHelper_1.omitWithSymbols(n, f);
    return reactCoreLibraryReexport.createElement.apply(i ||= require.t(reactCoreLibraryReexport, 2), [e, objectPropertyAssign.assignObject({
      className: conditionalClassnames.default(v, composeClassNamesUtil.composeClassNames(p))
    }, m)].concat(o));
  }
  r = d ||= {};
  o ||= r.JSX ||= {};
  require.d(exports, {
    createElementWithSX: function () {
      return d;
    }
  });
}