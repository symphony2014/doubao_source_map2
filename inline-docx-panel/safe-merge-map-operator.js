// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'createSafeMergeMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 396704
         */
module.exports = function (module, exports, require) {
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  require("scheduler-delay-task") /*id: 622487*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  require.d(exports, {
    createSafeMergeMap: function () {
      return function e(t, n, u = Infinity) {
        if (isFunctionUtil.isFunction(n)) {
          return e(function (e, o) {
            return observableSafeMapOperator.createSafeMapOperator(function (t, r) {
              return n(e, t, o, r);
            })(observableFromAnySource.fromAnySource(t(e, o)));
          }, u);
        } else {
          if (typeof n == "number") {
            u = n;
          }
          return observableSafeLiftUtil.createSafeOperator(function (e, n) {
            var r;
            var o;
            var c;
            var a;
            var f;
            var l;
            var d;
            var p;
            var h;
            r = u;
            c = [];
            a = 0;
            f = 0;
            l = false;
            d = function () {
              if (!!l && !c.length && !a) {
                n.complete();
              }
            };
            p = function (e) {
              if (a < r) {
                return h(e);
              } else {
                return c.push(e);
              }
            };
            h = function (e) {
              a++;
              var u = false;
              observableFromAnySource.fromAnySource(t(e, f++)).subscribe(safeSubscriber.safeSubscriber(n, function (e) {
                if (o) {
                  p(e);
                } else {
                  n.next(e);
                }
              }, function () {
                u = true;
              }, undefined, function () {
                if (u) {
                  try {
                    for (a--; c.length && a < r;) {
                      (function () {
                        var e = c.shift();
                        h(e);
                      })();
                    }
                    d();
                  } catch (e) {
                    n.error(e);
                  }
                }
              }));
            };
            e.subscribe(safeSubscriber.safeSubscriber(n, p, function () {
              l = true;
              d();
            }));
            return function () {};
          });
        }
      };
    }
  });
}