// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'combineObservables'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_activecomment.21f5b4e4.js
         * chunkId: 88485
         * moduleId: 351427
         */
module.exports = function (module, exports, require) {
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var argsNormalizer = require("args-normalizer") /*id: 707012*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var identityUtil = require("identity-util") /*id: 885053*/;
  var safeObservableMapUtil = require("safe-observable-map-util") /*id: 292803*/;
  var arrayPopUtils = require("array-pop-utils") /*id: 451401*/;
  var zipKeysToObject = require("zip-keys-to-object") /*id: 133054*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var schedulerDelayTask = require("scheduler-delay-task") /*id: 622487*/;
  function u() {
    var e;
    var t;
    var o;
    var d = [];
    var u = 0;
    for (; u < arguments.length; u++) {
      d[u] = arguments[u];
    }
    var v = arrayPopUtils.popSchedulable(d);
    var C = arrayPopUtils.popFunction(d);
    var g = argsNormalizer.normalizeArgs(d);
    var f = g.args;
    var k = g.keys;
    if (f.length === 0) {
      return observableFromSource.fromAnySource([], v);
    }
    var b = new observableCoreClass.Observable((e = f, t = v, (o = k ? function (e) {
      return zipKeysToObject.zipToObject(k, e);
    } : identityUtil.identity) === undefined && (o = identityUtil.identity), function (i) {
      h(t, function () {
        var n = e.length;
        var r = Array(n);
        var c = n;
        var s = n;
        function m(n) {
          h(t, function () {
            var m = observableFromSource.fromAnySource(e[n], t);
            var d = false;
            m.subscribe(safeSubscriber.safeSubscriber(i, function (e) {
              r[n] = e;
              if (!d) {
                d = true;
                s--;
              }
              if (!s) {
                i.next(o(r.slice()));
              }
            }, function () {
              if (! --c) {
                i.complete();
              }
            }));
          }, i);
        }
        var d = 0;
        for (; d < n; d++) {
          m(d);
        }
      }, i);
    }));
    if (C) {
      return b.pipe(safeObservableMapUtil.createSafeMapOperator(C));
    } else {
      return b;
    }
  }
  function h(e, t, o) {
    if (e) {
      schedulerDelayTask.scheduleTask(o, e, t);
    } else {
      t();
    }
  }
  require.d(exports, {
    combineObservables: function () {
      return u;
    }
  });
}