// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hp' to 'SafeSubscriber'
// - Renamed export 'Lv' to 'Subscriber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 857315
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var globalConfigSettings = require("global-config-settings") /*id: 273922*/;
  var unhandledErrorHandler = require("unhandled-error-handler") /*id: 227041*/;
  var aiSpaceOldStub = require("ai-space-old-stub") /*id: 771039*/;
  var c = d("C", undefined, undefined);
  function d(e, t, n) {
    return {
      kind: e,
      value: t,
      error: n
    };
  }
  var timerDelegate = require("timer-delegate") /*id: 521641*/;
  var syncErrorHandlingUtil = require("sync-error-handling-util") /*id: 360406*/;
  var m = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.isStopped = false;
      if (t) {
        n.destination = t;
        if (subscriptionCore.isSubscription(t)) {
          t.add(n);
        }
      } else {
        n.destination = y;
      }
      return n;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.create = function (e, t, n) {
      return new h(e, t, n);
    };
    t.prototype.next = function (e) {
      if (this.isStopped) {
        b(d("N", e, undefined), this);
      } else {
        this._next(e);
      }
    };
    t.prototype.error = function (e) {
      if (this.isStopped) {
        b(d("E", undefined, e), this);
      } else {
        this.isStopped = true;
        this._error(e);
      }
    };
    t.prototype.complete = function () {
      if (this.isStopped) {
        b(c, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    t.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.isStopped = true;
        e.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    t.prototype._next = function (e) {
      this.destination.next(e);
    };
    t.prototype._error = function (e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    };
    t.prototype._complete = function () {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return t;
  }(subscriptionCore.Subscription);
  var v = Function.prototype.bind;
  function f(e, t) {
    return v.call(e, t);
  }
  var p = function () {
    function e(e) {
      this.partialObserver = e;
    }
    e.prototype.next = function (e) {
      var t = this.partialObserver;
      if (t.next) {
        try {
          t.next(e);
        } catch (e) {
          g(e);
        }
      }
    };
    e.prototype.error = function (e) {
      var t = this.partialObserver;
      if (t.error) {
        try {
          t.error(e);
        } catch (e) {
          g(e);
        }
      } else {
        g(e);
      }
    };
    e.prototype.complete = function () {
      var e = this.partialObserver;
      if (e.complete) {
        try {
          e.complete();
        } catch (e) {
          g(e);
        }
      }
    };
    return e;
  }();
  var h = function (e) {
    function t(t, n, i) {
      var o;
      var l;
      var s = e.call(this) || this;
      if (isFunctionUtil.isFunction(t) || !t) {
        o = {
          next: t ?? undefined,
          error: n ?? undefined,
          complete: i ?? undefined
        };
      } else if (s && globalConfigSettings.globalConfig.useDeprecatedNextContext) {
        (l = Object.create(t)).unsubscribe = function () {
          return s.unsubscribe();
        };
        o = {
          next: t.next && f(t.next, l),
          error: t.error && f(t.error, l),
          complete: t.complete && f(t.complete, l)
        };
      } else {
        o = t;
      }
      s.destination = new p(o);
      return s;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    return t;
  }(m);
  function g(e) {
    if (globalConfigSettings.globalConfig.useDeprecatedSynchronousErrorHandling) {
      syncErrorHandlingUtil.reportSyncError(e);
    } else {
      unhandledErrorHandler.handleUncaughtError(e);
    }
  }
  function b(e, t) {
    var n = globalConfigSettings.globalConfig.onStoppedNotification;
    if (n) {
      timerDelegate.timerDelegate.setTimeout(function () {
        return n(e, t);
      });
    }
  }
  var y = {
    closed: true,
    next: aiSpaceOldStub.AiSpaceStub,
    error: function (e) {
      throw e;
    },
    complete: aiSpaceOldStub.AiSpaceStub
  };
  require.d(exports, {
    SafeSubscriber: function () {
      return h;
    },
    Subscriber: function () {
      return m;
    }
  });
}