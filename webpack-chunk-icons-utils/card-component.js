// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Card'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 592812
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var sizeConvertUtils = require("size-convert-utils") /*id: 293585*/;
  require("empty-module-export_4") /*id: 530821*/;
  var f = ["className", "shadowed", "bordered", "shadow", "borderRadius", "noHoverState"];
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var r;
    var l = e.className;
    var d = e.shadowed;
    var h = e.bordered;
    var g = e.shadow;
    var x = e.borderRadius;
    var M = e.noHoverState;
    var p = objectOmitHelper_1.omitWithSymbols(e, f);
    var y = uiConfigContextHooks.useClassName("card");
    var N = sizeConvertUtils.getSizeCode(g === undefined ? "medium" : g, "medium");
    var v = sizeConvertUtils.getSizeCode(x === undefined ? "small" : x, "small");
    var D = conditionalClassnames.default(y(), (r = {}, objectPropertySetter.setObjectProperty(r, y(`--shadow-${N}`), N), objectPropertySetter.setObjectProperty(r, y(`--br-${v}`), v), objectPropertySetter.setObjectProperty(r, y("--noborder"), h !== undefined && !h), objectPropertySetter.setObjectProperty(r, y("--noshadows"), d !== undefined && !d), objectPropertySetter.setObjectProperty(r, y("--no-hover-state"), M !== undefined && M), r), l);
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      ref: t,
      className: D
    }, p));
  });
  require.d(exports, {
    Card: function () {
      return l;
    }
  });
}