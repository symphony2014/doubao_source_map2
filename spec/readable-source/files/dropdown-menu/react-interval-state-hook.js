// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nr' to 'useIntervalState'
// - Renamed export 'y1' to 'useIntervalTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99771.2ba6bc81.js
         * chunkId: 99771
         * moduleId: 69782
         */
module.exports = function (module, exports, require) {
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableIntervalFactory = require("observable-interval-factory") /*id: 98037*/;
  var safeLiftSwitchOperator = require("safe-lift-switch-operator") /*id: 740615*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var useCachedValueHook = require("use-cached-value-hook") /*id: 881417*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function p(e, t = 0) {
    var n = useCachedValueHook.useCachedValue(function () {
      return new observableSubjectClass.Subject();
    });
    reactRefEffectUtils.useEffectOnce(function () {
      return function () {
        n.complete();
      };
    });
    var o = reactCoreLibraryReexport.useMemo(function () {
      return n.pipe(safeLiftSwitchOperator.safeSwitchSource(function () {
        return observableIntervalFactory.createInterval(t);
      }), observableSafeMapOperator.createSafeMapOperator(function (t) {
        return e.apply(undefined, arrayIterableSliceUtil.sliceArrayIterable(t));
      }));
    }, [n, e, t]);
    var i = reactCoreLibraryReexport.useRef();
    reactRefEffectUtils.useLayoutEffect(function () {
      i.current = o.subscribe();
      return function () {
        var e;
        if ((e = i.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.unsubscribe();
        }
      };
    }, [o]);
    return reactCoreLibraryReexport.useMemo(function () {
      function e() {
        var e = arguments.length;
        var t = Array(e);
        var r = 0;
        for (; r < e; r++) {
          t[r] = arguments[r];
        }
        n.next(t);
      }
      e.cancel = function () {
        var e;
        if ((e = i.current) !== null && e !== undefined) {
          e.unsubscribe();
        }
      };
      return e;
    }, [n]);
  }
  function v(e, t, n) {
    var r = (n == null ? undefined : n.equalityFn) || deepEqualUtil_1.deepEqual;
    var a = reactCoreLibraryReexport.useState(e);
    var l = iterableToArrayUtil_1_1.iterableToArray(a, 2);
    var c = l[0];
    var s = l[1];
    var f = reactCoreLibraryReexport.useState();
    var d = iterableToArrayUtil_1_1.iterableToArray(f, 2);
    var v = d[0];
    var m = d[1];
    var h = p(reactCoreLibraryReexport.useCallback(function (e) {
      return s(e);
    }, []), t);
    if (v === undefined || !r(v, e)) {
      h(e);
      m(e);
    }
    return [c, {
      cancel: h.cancel
    }];
  }
  require.d(exports, {
    useIntervalState: function () {
      return v;
    },
    useIntervalTrigger: function () {
      return p;
    }
  });
}