// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'fromEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 704650
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var safeMergeMapOperator = require("safe-merge-map-operator") /*id: 396704*/;
  var isArrayLike = require("is-array-like") /*id: 497539*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var safeObservableMapUtil = require("safe-observable-map-util") /*id: 292803*/;
  var h = ["addListener", "removeListener"];
  var u = ["addEventListener", "removeEventListener"];
  var f = ["on", "off"];
  function p(e, t, r, m) {
    if (isFunctionUtil.isFunction(r)) {
      m = r;
      r = undefined;
    }
    if (m) {
      return p(e, t, r).pipe(safeObservableMapUtil.createSafeMapOperator(m));
    }
    var b = typescriptRuntimeHelpers.spreadArray(v(e) ? u.map(function (n) {
      return function (i) {
        return e[n](t, i, r);
      };
    }) : y(e) ? h.map(d(e, t)) : g(e) ? f.map(d(e, t)) : [], 2);
    var O = b[0];
    var w = b[1];
    if (!O && isArrayLike.isArrayLike(e)) {
      return safeMergeMapOperator.createSafeMergeMap(function (e) {
        return p(e, t, r);
      })(observableFromAnySource.fromAnySource(e));
    }
    if (!O) {
      throw TypeError("Invalid event target");
    }
    return new observableCoreClass.Observable(function (e) {
      function t() {
        var t = [];
        var r = 0;
        for (; r < arguments.length; r++) {
          t[r] = arguments[r];
        }
        return e.next(t.length > 1 ? t : t[0]);
      }
      O(t);
      return function () {
        return w(t);
      };
    });
  }
  function d(e, t) {
    return function (r) {
      return function (n) {
        return e[r](t, n);
      };
    };
  }
  function y(e) {
    return isFunctionUtil.isFunction(e.addListener) && isFunctionUtil.isFunction(e.removeListener);
  }
  function g(e) {
    return isFunctionUtil.isFunction(e.on) && isFunctionUtil.isFunction(e.off);
  }
  function v(e) {
    return isFunctionUtil.isFunction(e.addEventListener) && isFunctionUtil.isFunction(e.removeEventListener);
  }
  require.d(exports, {
    fromEvent: function () {
      return p;
    }
  });
}