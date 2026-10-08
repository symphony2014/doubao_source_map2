// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'SpaceLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 286545
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var reactChildrenFlatten = require("react-children-flatten") /*id: 96569*/;
  require("empty-module-export_4") /*id: 530821*/;
  var u = ["children", "align", "size", "direction", "className", "wrap", "split", "style", "keepEmpty", "inline", "shouldItemConfinedToContainer", "itemKey", "shouldPlaceItemInFlowRoot"];
  var h = {
    small: 8,
    medium: 16,
    large: 24
  };
  function p(e) {
    if (typeof e == "string") {
      return h[e];
    } else {
      return e || 0;
    }
  }
  var f = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i = e.children;
    var h = e.align;
    var f = e.size;
    var m = f === undefined ? "small" : f;
    var g = e.direction;
    var v = g === undefined ? "horizontal" : g;
    var b = e.className;
    var x = e.wrap;
    var y = e.split;
    var w = e.style;
    var C = e.keepEmpty;
    var P = e.inline;
    var E = e.shouldItemConfinedToContainer;
    var T = E !== undefined && E;
    var I = e.itemKey;
    var S = e.shouldPlaceItemInFlowRoot;
    var A = S === undefined || S;
    var _ = objectOmitHelper_1.omitWithSymbols(e, u);
    var N = uiConfigContextHooks.useClassName("space");
    var R = uiConfigContextHooks.useClassName("space__item");
    var M = reactChildrenFlatten.flattenChildren(i, {
      keepEmpty: C !== undefined && C
    });
    var O = reactCoreLibraryReexport.useMemo(function () {
      return (Array.isArray(m) ? m : [m, m]).map(p);
    }, [m]);
    var D = iterableToArrayUtil_1_1.iterableToArray(O, 2);
    var k = D[0];
    var L = D[1];
    var F = M.length - 1;
    if (M.length === 0) {
      return null;
    }
    var j = h || (v === "horizontal" ? "center" : A ? undefined : "start");
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({}, _, {
      ref: t,
      className: conditionalClassnames.default(N(), N(`-${v}`), (P === undefined || P) && N("-inline"), j && N(`-align-${j}`), b),
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, x !== undefined && x && {
        flexWrap: "wrap"
      }), {}, {
        columnGap: k / (y ? 2 : 1),
        rowGap: L
      }, w)
    }), M.map(function (e, t) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
        key: I ? I(t) : t
      }, A ? reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(R(), T && R("-confined"))
      }, e) : e, t < F && y && reactCoreLibraryReexport.createElement("span", {
        className: R("__split")
      }, y));
    }));
  });
  require.d(exports, {
    SpaceLayout: function () {
      return f;
    }
  });
}