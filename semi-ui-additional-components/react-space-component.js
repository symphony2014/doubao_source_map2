// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'Space'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: oops_notice.c4d63499.js
         * chunkId: 60975
         * moduleId: 676942
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var reactChildrenFlattenUtility = require("react-children-flatten-utility") /*id: 50392*/;
  require("module-no-op") /*id: 116324*/;
  var p = ["children", "align", "size", "direction", "className", "wrap", "split", "style", "keepEmpty", "inline", "shouldItemConfinedToContainer", "itemKey", "shouldPlaceItemInFlowRoot"];
  var m = {
    small: 8,
    medium: 16,
    large: 24
  };
  function f(e) {
    if (typeof e == "string") {
      return m[e];
    } else {
      return e || 0;
    }
  }
  var h = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var i = e.children;
    var m = e.align;
    var h = e.size;
    var y = h === undefined ? "small" : h;
    var v = e.direction;
    var _ = v === undefined ? "horizontal" : v;
    var g = e.className;
    var E = e.wrap;
    var x = e.split;
    var C = e.style;
    var D = e.keepEmpty;
    var w = e.inline;
    var A = e.shouldItemConfinedToContainer;
    var b = A !== undefined && A;
    var k = e.itemKey;
    var I = e.shouldPlaceItemInFlowRoot;
    var N = I === undefined || I;
    var z = objectOmitHelper_1.omitWithSymbols(e, p);
    var L = reactContextUtilsHooks.useComponentClass("space");
    var j = reactContextUtilsHooks.useComponentClass("space__item");
    var H = reactChildrenFlattenUtility.flattenChildren(i, {
      keepEmpty: D !== undefined && D
    });
    var R = reactCoreLibraryReexport.useMemo(function () {
      return (Array.isArray(y) ? y : [y, y]).map(f);
    }, [y]);
    var Z = iterableToArrayUtil_1_1.iterableToArray(R, 2);
    var B = Z[0];
    var F = Z[1];
    var K = H.length - 1;
    if (H.length === 0) {
      return null;
    }
    var O = m || (_ === "horizontal" ? "center" : N ? undefined : "start");
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({}, z, {
      ref: n,
      className: conditionalClassnames.default(L(), L(`-${_}`), (w === undefined || w) && L("-inline"), O && L(`-align-${O}`), g),
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, E !== undefined && E && {
        flexWrap: "wrap"
      }), {}, {
        columnGap: B / (x ? 2 : 1),
        rowGap: F
      }, C)
    }), H.map(function (e, n) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
        key: k ? k(n) : n
      }, N ? reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(j(), b && j("-confined"))
      }, e) : e, n < K && x && reactCoreLibraryReexport.createElement("span", {
        className: j("__split")
      }, x));
    }));
  });
  require.d(exports, {
    Space: function () {
      return h;
    }
  });
}