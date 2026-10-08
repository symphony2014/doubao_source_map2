// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'shareReplayWithConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 669027
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var subscriberObserverCore = require("subscriber-observer-core") /*id: 857315*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  function l(e = {}) {
    var t = e.connector;
    var n = t === undefined ? function () {
      return new observableSubjectClass.Subject();
    } : t;
    var r = e.resetOnError;
    var l = r === undefined || r;
    var c = e.resetOnComplete;
    var d = c === undefined || c;
    var f = e.resetOnRefCountZero;
    var h = f === undefined || f;
    return function (e) {
      var t;
      var r;
      var a;
      var c = 0;
      var f = false;
      var p = false;
      function g() {
        if (r != null) {
          r.unsubscribe();
        }
        r = undefined;
      }
      function m() {
        g();
        t = a = undefined;
        f = p = false;
      }
      function v() {
        var e = t;
        m();
        if (e != null) {
          e.unsubscribe();
        }
      }
      return observableSafeLiftUtil.createSafeOperator(function (e, s) {
        c++;
        if (!p && !f) {
          g();
        }
        var y = a = a ?? n();
        s.add(function () {
          if (--c == 0 && !p && !f) {
            r = u(v, h);
          }
        });
        y.subscribe(s);
        if (!t && c > 0) {
          t = new subscriberObserverCore.SafeSubscriber({
            next: function (e) {
              return y.next(e);
            },
            error: function (e) {
              p = true;
              g();
              r = u(m, l, e);
              y.error(e);
            },
            complete: function () {
              f = true;
              g();
              r = u(m, d);
              y.complete();
            }
          });
          observableFromAnySource.fromAnySource(e).subscribe(t);
        }
      })(e);
    };
  }
  function u(e, t) {
    var n = [];
    var a = 2;
    for (; a < arguments.length; a++) {
      n[a - 2] = arguments[a];
    }
    if (t === true) {
      e();
      return;
    }
    if (t !== false) {
      var s = new subscriberObserverCore.SafeSubscriber({
        next: function () {
          s.unsubscribe();
          e();
        }
      });
      return observableFromAnySource.fromAnySource(t.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(n)))).subscribe(s);
    }
  }
  require.d(exports, {
    shareReplayWithConfig: function () {
      return l;
    }
  });
}