// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xf' to 'fromAnySource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 562902
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var isArrayLike = require("is-array-like") /*id: 497539*/;
  var isThenableUtil = require("is-thenable-util") /*id: 438406*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var isObservableUtil = require("is-observable-util") /*id: 786231*/;
  var isAsyncIterableUtil = require("is-async-iterable-util") /*id: 706510*/;
  var streamTypeErrorFactory = require("stream-type-error-factory") /*id: 842860*/;
  var isIterableUtil = require("is-iterable-util") /*id: 500422*/;
  var streamReaderUtils = require("stream-reader-utils") /*id: 888197*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var unhandledErrorHandler = require("unhandled-error-handler") /*id: 227041*/;
  var symbolObservable = require("symbol-observable") /*id: 468947*/;
  function v(e) {
    if (e instanceof observableCoreClass.Observable) {
      return e;
    }
    if (e != null) {
      var t;
      var n;
      var v;
      var g;
      var y;
      if (isObservableUtil.isObservable(e)) {
        t = e;
        return new observableCoreClass.Observable(function (e) {
          var n = t[symbolObservable.symbolObservable]();
          if (isFunctionUtil.isFunction(n.subscribe)) {
            return n.subscribe(e);
          }
          throw TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }
      if (isArrayLike.isArrayLike(e)) {
        n = e;
        return new observableCoreClass.Observable(function (e) {
          for (var t = 0; t < n.length && !e.closed; t++) {
            e.next(n[t]);
          }
          e.complete();
        });
      }
      if (isThenableUtil.isThenable(e)) {
        v = e;
        return new observableCoreClass.Observable(function (e) {
          v.then(function (t) {
            if (!e.closed) {
              e.next(t);
              e.complete();
            }
          }, function (t) {
            return e.error(t);
          }).then(null, unhandledErrorHandler.handleUncaughtError);
        });
      }
      if (isAsyncIterableUtil.isAsyncIterable(e)) {
        return m(e);
      }
      if (isIterableUtil.isIterable(e)) {
        g = e;
        return new observableCoreClass.Observable(function (e) {
          var t;
          var n;
          try {
            var i = typescriptRuntimeHelpers.iteratorValues(g);
            var o = i.next();
            for (; !o.done; o = i.next()) {
              var s = o.value;
              e.next(s);
              if (e.closed) {
                return;
              }
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (o && !o.done && (n = i.return)) {
                n.call(i);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          e.complete();
        });
      }
      if (streamReaderUtils.hasReader(e)) {
        y = e;
        return m(streamReaderUtils.consumeReader(y));
      }
    }
    throw streamTypeErrorFactory.createStreamTypeError(e);
  }
  function m(e) {
    return new observableCoreClass.Observable(function (t) {
      (function (e, t) {
        var n;
        var i;
        var o;
        var s;
        return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
          var c;
          return typescriptRuntimeHelpers.generator(this, function (u) {
            switch (u.label) {
              case 0:
                u.trys.push([0, 5, 6, 11]);
                n = typescriptRuntimeHelpers.asyncDelegator(e);
                u.label = 1;
              case 1:
                return [4, n.next()];
              case 2:
                if ((i = u.sent()).done) {
                  return [3, 4];
                }
                c = i.value;
                t.next(c);
                if (t.closed) {
                  return [2];
                }
                u.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [3, 11];
              case 5:
                o = {
                  error: u.sent()
                };
                return [3, 11];
              case 6:
                u.trys.push([6,, 9, 10]);
                if (!i || !!i.done || !(s = n.return)) {
                  return [3, 8];
                }
                return [4, s.call(n)];
              case 7:
                u.sent();
                u.label = 8;
              case 8:
                return [3, 10];
              case 9:
                if (o) {
                  throw o.error;
                }
                return [7];
              case 10:
                return [7];
              case 11:
                t.complete();
                return [2];
            }
          });
        });
      })(e, t).catch(function (e) {
        return t.error(e);
      });
    });
  }
  require.d(exports, {
    fromAnySource: function () {
      return v;
    }
  });
}