// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'Observable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 392610
         */
module.exports = function (module, exports, require) {
  var subscriberObserverCore = require("subscriber-observer-core") /*id: 857315*/;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var symbolObservable = require("symbol-observable") /*id: 468947*/;
  var identityUtil = require("identity-util") /*id: 885053*/;
  var globalConfigSettings = require("global-config-settings") /*id: 273922*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var syncErrorHandlingUtil = require("sync-error-handling-util") /*id: 360406*/;
  var f = function () {
    function e(e) {
      if (e) {
        this._subscribe = e;
      }
    }
    e.prototype.lift = function (t) {
      var n = new e();
      n.source = this;
      n.operator = t;
      return n;
    };
    e.prototype.subscribe = function (e, t, n) {
      var o = this;
      var s = !function (e) {
        return e && e instanceof subscriberObserverCore.Subscriber || e && isFunctionUtil.isFunction(e.next) && isFunctionUtil.isFunction(e.error) && isFunctionUtil.isFunction(e.complete) && subscriptionCore.isSubscription(e);
      }(e) ? new subscriberObserverCore.SafeSubscriber(e, t, n) : e;
      syncErrorHandlingUtil.runSynchronous(function () {
        var e = o.operator;
        var t = o.source;
        s.add(e ? e.call(s, t) : t ? o._subscribe(s) : o._trySubscribe(s));
      });
      return s;
    };
    e.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    };
    e.prototype.forEach = function (e, t) {
      var n = this;
      return new (t = l(t))(function (t, i) {
        var o = new subscriberObserverCore.SafeSubscriber({
          next: function (t) {
            try {
              e(t);
            } catch (e) {
              i(e);
              o.unsubscribe();
            }
          },
          error: i,
          complete: t
        });
        n.subscribe(o);
      });
    };
    e.prototype._subscribe = function (e) {
      var t;
      if ((t = this.source) === null || t === undefined) {
        return undefined;
      } else {
        return t.subscribe(e);
      }
    };
    e.prototype[symbolObservable.symbolObservable] = function () {
      return this;
    };
    e.prototype.pipe = function () {
      var e = [];
      var t = 0;
      for (; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      return (e.length === 0 ? identityUtil.identity : e.length === 1 ? e[0] : function (t) {
        return e.reduce(function (e, t) {
          return t(e);
        }, t);
      })(this);
    };
    e.prototype.toPromise = function (e) {
      var t = this;
      return new (e = l(e))(function (e, n) {
        var r;
        t.subscribe(function (e) {
          return r = e;
        }, function (e) {
          return n(e);
        }, function () {
          return e(r);
        });
      });
    };
    e.create = function (t) {
      return new e(t);
    };
    return e;
  }();
  function l(e) {
    return e ?? globalConfigSettings.globalConfig.Promise ?? Promise;
  }
  require.d(exports, {
    Observable: function () {
      return f;
    }
  });
}