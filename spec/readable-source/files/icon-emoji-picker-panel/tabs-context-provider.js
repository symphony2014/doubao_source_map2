// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RL' to 'TabsContext'
// - Renamed export 'YE' to 'useTabsLogic'
// - Renamed export 'gC' to 'useTabsContext'
// - Renamed export 'vr' to 'tabPaneIdKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 728667
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var reactChildrenFlatten = require("react-children-flatten") /*id: 96569*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var d = "UD_TABPANE_ID";
  function _(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.type?.[d];
    }
  }
  var f = reactContextSelector.createContext({});
  function p(e) {
    var t = e.style;
    var n = e.className;
    var a = e.children;
    var d = e.type;
    var f = d === undefined ? "line" : d;
    var p = e.tabBarGutter;
    var m = p === undefined ? f === "tag" ? 16 : 28 : p;
    var C = e.tabBarStyle;
    var v = e.activeKey;
    var b = e.defaultActiveKey;
    var h = e.size;
    var g = h === undefined ? "medium" : h;
    var M = e.maxCount;
    var y = M === undefined ? "responsive" : M;
    var k = e.tabBarExtraContent;
    var I = e.onChange;
    var w = e.onTabClick;
    var E = e.onTabDoubleClick;
    var T = reactCoreLibraryReexport.useMemo(function () {
      return reactChildrenFlatten.flattenChildren(a).filter(_).map(function (e, t) {
        return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e.props), {}, {
          key: e.key && String(e.key) || `${t}`
        });
      });
    }, [a]);
    var Z = useControlledStateHook_1.useControlledState(b || T[0].key, v);
    var x = iterableToArrayUtil_1_1.iterableToArray(Z, 2);
    var L = x[0];
    var R = x[1];
    var S = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n = T.find(function (t) {
        return t.key === e;
      });
      if (n && !n.disabled) {
        R(e);
        if (domTypeUtils_1.isFunction(I)) {
          I(e);
        }
        if (domTypeUtils_1.isFunction(w)) {
          w(e, t);
        }
      }
    }, [I, w, T, R]);
    var O = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n = T.find(function (t) {
        return t.key === e;
      });
      if (n && !n.disabled && domTypeUtils_1.isFunction(E)) {
        E(e, t);
      }
    }, [E, T]);
    var A = uiConfigContextHooks.useClassName("tabs");
    var P = T.findIndex(function (e) {
      return e.key === L;
    });
    var B = reactCoreLibraryReexport.useRef(new Map());
    var j = reactCoreLibraryReexport.useRef(null);
    var D = reactCoreLibraryReexport.useRef(null);
    return reactCoreLibraryReexport.useMemo(function () {
      return {
        style: t,
        className: n,
        children: a,
        tabBarGutter: m,
        tabBarStyle: objectPropertyAssign.assignObject({
          userSelect: domTypeUtils_1.isFunction(E) ? "none" : "auto"
        }, C),
        activeKey: L,
        type: f,
        size: g,
        maxCount: y,
        tabBarExtraContent: k,
        onChange: I,
        onTabClick: w,
        onTabDoubleClick: E,
        rootCssScope: A,
        setActiveKey: R,
        handleTabClick: S,
        handleTabDoubleClick: O,
        panes: T,
        activeTabIndex: P,
        tabElementMapRef: B,
        tabBarWrapperRef: j,
        moreTabRef: D
      };
    }, [L, P, a, n, S, O, y, I, w, E, T, A, R, g, t, k, m, C, f]);
  }
  function m() {
    return reactContextSelector.useContextValue(f);
  }
  require.d(exports, {
    TabsContext: function () {
      return f;
    },
    useTabsLogic: function () {
      return p;
    },
    useTabsContext: function () {
      return m;
    },
    tabPaneIdKey: function () {
      return d;
    }
  });
}