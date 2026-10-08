// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'useNoopRef'
// - Renamed export 's' to 'useTransitionGroupProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 355911
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  function c() {
    return reactCoreLibraryReexport.useRef({});
  }
  function u(e) {
    var t = e.forceRender;
    var n = t !== undefined && t;
    var u = e.destroyOnClose;
    var s = u !== undefined && u;
    var l = e.visible;
    var f = e.onAfterOpen;
    var d = e.onAfterClose;
    var m = reactCoreLibraryReexport.useMemo(function () {
      return {
        in: l,
        mountOnEnter: !n,
        unmountOnExit: s
      };
    }, [s, n, l]);
    var _ = reactCoreLibraryReexport.useState(l);
    var p = iterableToArrayUtil_1_1.iterableToArray(_, 2);
    var E = p[0];
    var C = p[1];
    var h = reactCoreLibraryReexport.useState(false);
    var v = iterableToArrayUtil_1_1.iterableToArray(h, 2);
    var R = v[0];
    var T = v[1];
    var g = c();
    var N = reactCoreLibraryReexport.useState(null);
    var A = iterableToArrayUtil_1_1.iterableToArray(N, 2);
    var O = A[0];
    var L = A[1];
    if (O !== l) {
      if (l) {
        C(true);
      }
      L(l);
    }
    return {
      noopRef: g,
      transitionGroupProps: reactCoreLibraryReexport.useMemo(function () {
        return objectPropertyAssign.assignObject({
          onEntered: function () {
            T(true);
            if (domTypeUtils_1.isFunction(f)) {
              f();
            }
          },
          onExit: function () {
            T(false);
          },
          onExited: function () {
            C(false);
            if (d != null) {
              d();
            }
          }
        }, m);
      }, [d, f, m]),
      transitionGroupPropsWithoutListener: m,
      styleDisplay: reactCoreLibraryReexport.useMemo(function () {
        if (E) {
          return {};
        } else {
          return {
            display: "none"
          };
        }
      }, [E]),
      animatedVisible: E,
      enteredVisible: R
    };
  }
  require.d(exports, {
    useNoopRef: function () {
      return c;
    },
    useTransitionGroupProps: function () {
      return u;
    }
  });
}