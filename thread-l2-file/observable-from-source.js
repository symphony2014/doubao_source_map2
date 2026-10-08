// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'fromAnySource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 564103
         */
module.exports = function (module, exports, require) {
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var observableDelayOperator = require("observable-delay-operator") /*id: 577480*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  function s(e, t = 0) {
    return observableSafeLiftUtil.createSafeOperator(function (n, r) {
      r.add(e.schedule(function () {
        return n.subscribe(r);
      }, t));
    });
  }
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var symbolIteratorConstant = require("symbol-iterator-constant") /*id: 939076*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var schedulerDelayTask = require("scheduler-delay-task") /*id: 622487*/;
  function l(e, t) {
    if (!e) {
      throw Error("Iterable cannot be null");
    }
    return new observableCoreClass.Observable(function (n) {
      schedulerDelayTask.scheduleTask(n, t, function () {
        var r = e[Symbol.asyncIterator]();
        schedulerDelayTask.scheduleTask(n, t, function () {
          r.next().then(function (e) {
            if (e.done) {
              n.complete();
            } else {
              n.next(e.value);
            }
          });
        }, 0, true);
      });
    });
  }
  var isObservableUtil = require("is-observable-util") /*id: 786231*/;
  var isThenableUtil = require("is-thenable-util") /*id: 438406*/;
  var isArrayLike = require("is-array-like") /*id: 497539*/;
  var isIterableUtil = require("is-iterable-util") /*id: 500422*/;
  var isAsyncIterableUtil = require("is-async-iterable-util") /*id: 706510*/;
  var streamTypeErrorFactory = require("stream-type-error-factory") /*id: 842860*/;
  var streamReaderUtils = require("stream-reader-utils") /*id: 888197*/;
  function b(e, t) {
    if (t) {
      return function (e, t) {
        if (e != null) {
          if (isObservableUtil.isObservable(e)) {
            return observableFromAnySource.fromAnySource(e).pipe(s(t), observableDelayOperator.createDelayOperator(t));
          }
          if (isArrayLike.isArrayLike(e)) {
            return new observableCoreClass.Observable(function (n) {
              var r = 0;
              return t.schedule(function () {
                if (r === e.length) {
                  n.complete();
                } else {
                  n.next(e[r++]);
                  if (!n.closed) {
                    this.schedule();
                  }
                }
              });
            });
          }
          if (isThenableUtil.isThenable(e)) {
            return observableFromAnySource.fromAnySource(e).pipe(s(t), observableDelayOperator.createDelayOperator(t));
          }
          if (isAsyncIterableUtil.isAsyncIterable(e)) {
            return l(e, t);
          }
          if (isIterableUtil.isIterable(e)) {
            return new observableCoreClass.Observable(function (n) {
              var r;
              schedulerDelayTask.scheduleTask(n, t, function () {
                r = e[symbolIteratorConstant.symbolIterator]();
                schedulerDelayTask.scheduleTask(n, t, function () {
                  var e;
                  var t;
                  var i;
                  try {
                    t = (e = r.next()).value;
                    i = e.done;
                  } catch (e) {
                    n.error(e);
                    return;
                  }
                  if (i) {
                    n.complete();
                  } else {
                    n.next(t);
                  }
                }, 0, true);
              });
              return function () {
                return isFunctionUtil.isFunction(r == null ? undefined : r.return) && r.return();
              };
            });
          }
          if (streamReaderUtils.hasReader(e)) {
            return l(streamReaderUtils.consumeReader(e), t);
          }
        }
        throw streamTypeErrorFactory.createStreamTypeError(e);
      }(e, t);
    } else {
      return observableFromAnySource.fromAnySource(e);
    }
  }
  require.d(exports, {
    fromAnySource: function () {
      return b;
    }
  });
}