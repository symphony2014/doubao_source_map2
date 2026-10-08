// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'useEmptyRef'
// - Renamed export 's' to 'useVisibilityState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 107130
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  function u() {
    return reactCoreLibraryReexport.useRef({});
  }
  function c(e) {
    var n = e.forceRender;
    var t = n !== undefined && n;
    var c = e.destroyOnClose;
    var l = c !== undefined && c;
    var s = e.visible;
    var f = e.onAfterOpen;
    var d = e.onAfterClose;
    var p = reactCoreLibraryReexport.useMemo(function () {
      return {
        in: s,
        mountOnEnter: !t,
        unmountOnExit: l
      };
    }, [l, t, s]);
    var v = reactCoreLibraryReexport.useState(s);
    var m = iterableToArrayUtil_1_1.iterableToArray(v, 2);
    var h = m[0];
    var y = m[1];
    var Z = reactCoreLibraryReexport.useState(false);
    var g = iterableToArrayUtil_1_1.iterableToArray(Z, 2);
    var x = g[0];
    var E = g[1];
    var b = u();
    var w = reactCoreLibraryReexport.useState(null);
    var C = iterableToArrayUtil_1_1.iterableToArray(w, 2);
    var R = C[0];
    var A = C[1];
    if (R !== s) {
      if (s) {
        y(true);
      }
      A(s);
    }
    return {
      noopRef: b,
      transitionGroupProps: reactCoreLibraryReexport.useMemo(function () {
        return objectPropertyAssign.assignObject({
          onEntered: function () {
            E(true);
            if (domElementWindowUtils.isFunction(f)) {
              f();
            }
          },
          onExit: function () {
            E(false);
          },
          onExited: function () {
            y(false);
            if (d != null) {
              d();
            }
          }
        }, p);
      }, [d, f, p]),
      transitionGroupPropsWithoutListener: p,
      styleDisplay: reactCoreLibraryReexport.useMemo(function () {
        if (h) {
          return {};
        } else {
          return {
            display: "none"
          };
        }
      }, [h]),
      animatedVisible: h,
      enteredVisible: x
    };
  }
  require.d(exports, {
    useEmptyRef: function () {
      return u;
    },
    useVisibilityState: function () {
      return c;
    }
  });
}