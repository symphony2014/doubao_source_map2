// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'ResponsiveOverflowList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-box-archive.e38f088a.js
         * chunkId: 7174
         * moduleId: 971996
         */
module.exports = function (module, exports, require) {
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var responsiveListHooks = require("responsive-list-hooks") /*id: 475611*/;
  require("empty-module-export_8") /*id: 903391*/;
  var c = ["ref", "dispatch", "isResponsive", "mergedKeys"];
  var f = reactCoreLibraryReexport.memo(function (e) {
    var t = e.value;
    var r = e.index;
    var i = e.children;
    var n = uiConfigContextHooks.useClassName("overflow__item");
    var o = responsiveListHooks.useListItem({
      key: t,
      index: r
    });
    var a = o.ref;
    var c = o.isVisible;
    o.isResponsive;
    var f = c ? r : Number.MAX_SAFE_INTEGER;
    return reactCoreLibraryReexport.createElement("div", {
      className: n(),
      style: {
        order: f,
        height: c ? undefined : 0,
        overflowY: c ? undefined : "hidden",
        pointerEvents: c ? undefined : "none"
      }
    }, reactCoreLibraryReexport.createElement("div", {
      ref: a
    }, i));
  });
  var d = reactCoreLibraryReexport.memo(function (e) {
    var t = e.children;
    var r = responsiveListHooks.useRestHook();
    var i = r.ref;
    var n = r.countBeforeRest;
    var o = r.isVisible;
    var a = r.isResponsive;
    var c = r.restPosition;
    var f = uiConfigContextHooks.useClassName("overflow__rest");
    var d = o ? n - 1 : Number.MAX_SAFE_INTEGER;
    return reactCoreLibraryReexport.createElement("div", {
      ref: i,
      className: f(""),
      style: {
        order: a ? d : c - 1,
        height: o ? undefined : 0,
        overflowY: o ? undefined : "hidden",
        pointerEvents: o ? undefined : "none"
      }
    }, t);
  });
  var h = reactCoreLibraryReexport.memo(function (e) {
    var t = e.className;
    var r = e.children;
    var i = responsiveListHooks.useSuffixHook();
    var n = i.ref;
    var c = i.suffixFixedStart;
    var f = i.countAfterRest;
    var d = i.countBeforeRest;
    var h = i.isResponsive;
    var p = i.restWidth;
    var g = i.suffixWrap;
    var M = uiConfigContextHooks.useClassName("overflow__suffix");
    return reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(t, M("")),
      ref: n,
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
        order: h ? d + f - 1 : Number.MAX_SAFE_INTEGER
      }, c !== null && h ? {
        position: "absolute",
        left: c
      } : {}), {}, {
        maxWidth: g ? undefined : `calc(100% - ${p}px)`
      })
    }, r);
  });
  function p(e) {
    return reactCoreLibraryReexport.createElement("div", {
      style: {
        border: "1px red solid"
      }
    }, Array(Number(e) + 1).fill(0).map(function (e, t) {
      return t;
    }).join(","));
  }
  function g(e) {
    var t = e.maxCount;
    var r = e.keys;
    var g = e.style;
    var M = e.className;
    var m = e.itemRenderer;
    var y = m === undefined ? p : m;
    var v = e.restRenderer;
    var I = e.suffixRenderer;
    var N = e.suffixClassName;
    var x = e.restPosition;
    var z = e.addonRenderer;
    var w = e.alwaysObserveResize;
    var S = e.suffixWrap;
    var T = uiConfigContextHooks.useClassName("overflow");
    var L = responsiveListHooks.useResponsiveList({
      maxCount: t,
      keys: r,
      hasSuffix: !!I,
      restPosition: x,
      suffixWrap: S === undefined || S
    });
    var j = L.ref;
    var D = L.dispatch;
    var _ = L.isResponsive;
    var A = L.mergedKeys;
    var b = objectOmitHelper_1.omitWithSymbols(L, c);
    var E = _ || typeof t == "number" && r.length > t;
    return reactCoreLibraryReexport.createElement(responsiveListHooks.ResponsiveListContext.Provider, {
      value: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
        dispatch: D,
        isResponsive: _
      }, b), {}, {
        alwaysObserveResize: w !== undefined && w
      })
    }, reactCoreLibraryReexport.createElement("div", {
      ref: j,
      className: conditionalClassnames.default(T(), M),
      style: g
    }, [].concat(arrayIterableSliceUtil.sliceArrayIterable(A.beforeRest), arrayIterableSliceUtil.sliceArrayIterable(A.afterRest)).map(function (e, t) {
      return reactCoreLibraryReexport.createElement(f, {
        key: e,
        value: e,
        index: t
      }, y(e));
    }), E && reactCoreLibraryReexport.createElement(d, null, (v === undefined ? function (e) {
      return reactCoreLibraryReexport.createElement("div", {
        style: {
          border: "1px blue solid"
        }
      }, `+${e.length}`);
    } : v)(b.omittedKeys)), I && reactCoreLibraryReexport.createElement(h, {
      className: N
    }, I({
      omittedKeys: b.omittedKeys
    })), z && z({
      omittedKeys: b.omittedKeys
    })));
  }
  require.d(exports, {
    ResponsiveOverflowList: function () {
      return g;
    }
  });
}