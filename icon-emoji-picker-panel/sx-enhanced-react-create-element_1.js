// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'createElementWithSx'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 606167
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
  function d(e, t) {
    var r = arguments.length;
    var o = Array(r > 2 ? r - 2 : 0);
    var d = 2;
    for (; d < r; d++) {
      o[d - 2] = arguments[d];
    }
    if (t == null || !t.sx || typeof e != "string") {
      return reactCoreLibraryReexport.createElement.apply(i ||= require.t(reactCoreLibraryReexport, 2), [e, t].concat(o));
    }
    var m = t.sx;
    var _ = t.className;
    var p = objectOmitHelper_1.omitWithSymbols(t, f);
    return reactCoreLibraryReexport.createElement.apply(i ||= require.t(reactCoreLibraryReexport, 2), [e, objectPropertyAssign.assignObject({
      className: conditionalClassnames.default(_, composeClassNamesUtil.composeClassNames(m))
    }, p)].concat(o));
  }
  r = d ||= {};
  o ||= r.JSX ||= {};
  require.d(exports, {
    createElementWithSx: function () {
      return d;
    }
  });
}