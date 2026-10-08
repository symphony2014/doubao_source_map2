// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'Subject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-feedback.2262a137.js
         * chunkId: 31747
         * moduleId: 292580
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var o = require("custom-error-factory") /*id: 205452*/.createErrorClass(function (e) {
    return function () {
      e(this);
      this.name = "ObjectUnsubscribedError";
      this.message = "object unsubscribed";
    };
  });
  var arrayRemoveUtil = require("array-remove-util") /*id: 91229*/;
  var syncErrorHandlingUtil = require("sync-error-handling-util") /*id: 360406*/;
  var c = function (e) {
    function t() {
      var t = e.call(this) || this;
      t.closed = false;
      t.currentObservers = null;
      t.observers = [];
      t.isStopped = false;
      t.hasError = false;
      t.thrownError = null;
      return t;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.lift = function (e) {
      var t = new u(this, this);
      t.operator = e;
      return t;
    };
    t.prototype._throwIfClosed = function () {
      if (this.closed) {
        throw new o();
      }
    };
    t.prototype.next = function (e) {
      var t = this;
      syncErrorHandlingUtil.runSynchronous(function () {
        var r;
        var i;
        t._throwIfClosed();
        if (!t.isStopped) {
          t.currentObservers ||= Array.from(t.observers);
          try {
            var s = typescriptRuntimeHelpers.iteratorValues(t.currentObservers);
            var o = s.next();
            for (; !o.done; o = s.next()) {
              o.value.next(e);
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              if (o && !o.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
      });
    };
    t.prototype.error = function (e) {
      var t = this;
      syncErrorHandlingUtil.runSynchronous(function () {
        t._throwIfClosed();
        if (!t.isStopped) {
          t.hasError = t.isStopped = true;
          t.thrownError = e;
          for (var r = t.observers; r.length;) {
            r.shift().error(e);
          }
        }
      });
    };
    t.prototype.complete = function () {
      var e = this;
      syncErrorHandlingUtil.runSynchronous(function () {
        e._throwIfClosed();
        if (!e.isStopped) {
          e.isStopped = true;
          for (var t = e.observers; t.length;) {
            t.shift().complete();
          }
        }
      });
    };
    t.prototype.unsubscribe = function () {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    };
    Object.defineProperty(t.prototype, "observed", {
      get: function () {
        return this.observers?.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype._trySubscribe = function (t) {
      this._throwIfClosed();
      return e.prototype._trySubscribe.call(this, t);
    };
    t.prototype._subscribe = function (e) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(e);
      return this._innerSubscribe(e);
    };
    t.prototype._innerSubscribe = function (e) {
      var t = this;
      var r = this.hasError;
      var n = this.isStopped;
      var i = this.observers;
      if (r || n) {
        return subscriptionCore.emptySubscription;
      } else {
        this.currentObservers = null;
        i.push(e);
        return new subscriptionCore.Subscription(function () {
          t.currentObservers = null;
          arrayRemoveUtil.removeFromArray(i, e);
        });
      }
    };
    t.prototype._checkFinalizedStatuses = function (e) {
      var t = this.hasError;
      var r = this.thrownError;
      var n = this.isStopped;
      if (t) {
        e.error(r);
      } else if (n) {
        e.complete();
      }
    };
    t.prototype.asObservable = function () {
      var e = new observableCoreClass.Observable();
      e.source = this;
      return e;
    };
    t.create = function (e, t) {
      return new u(e, t);
    };
    return t;
  }(observableCoreClass.Observable);
  var u = function (e) {
    function t(t, r) {
      var n = e.call(this) || this;
      n.destination = t;
      n.source = r;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.next = function (e) {
      var t;
      var r;
      if ((r = (t = this.destination) === null || t === undefined ? undefined : t.next) !== null && r !== undefined) {
        r.call(t, e);
      }
    };
    t.prototype.error = function (e) {
      var t;
      var r;
      if ((r = (t = this.destination) === null || t === undefined ? undefined : t.error) !== null && r !== undefined) {
        r.call(t, e);
      }
    };
    t.prototype.complete = function () {
      var e;
      var t;
      if ((t = (e = this.destination) === null || e === undefined ? undefined : e.complete) !== null && t !== undefined) {
        t.call(e);
      }
    };
    t.prototype._subscribe = function (e) {
      var t;
      return ((t = this.source) === null || t === undefined ? undefined : t.subscribe(e)) ?? subscriptionCore.emptySubscription;
    };
    return t;
  }(c);
  require.d(exports, {
    Subject: function () {
      return c;
    }
  });
}