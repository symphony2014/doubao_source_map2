// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'rafScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 998693
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var asyncSchedulerActionImplementation = require("async-scheduler-action-implementation") /*id: 93388*/;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var s = {
    schedule: function (e) {
      var i = requestAnimationFrame;
      var o = cancelAnimationFrame;
      var n = s.delegate;
      if (n) {
        i = n.requestAnimationFrame;
        o = n.cancelAnimationFrame;
      }
      var r = i(function (i) {
        o = undefined;
        e(i);
      });
      return new subscriptionCore.Subscription(function () {
        if (o == null) {
          return undefined;
        } else {
          return o(r);
        }
      });
    },
    requestAnimationFrame: function () {
      var e = [];
      var i = 0;
      for (; i < arguments.length; i++) {
        e[i] = arguments[i];
      }
      var o = s.delegate;
      return ((o == null ? undefined : o.requestAnimationFrame) || requestAnimationFrame).apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e)));
    },
    cancelAnimationFrame: function () {
      var e = [];
      var i = 0;
      for (; i < arguments.length; i++) {
        e[i] = arguments[i];
      }
      var o = s.delegate;
      return ((o == null ? undefined : o.cancelAnimationFrame) || cancelAnimationFrame).apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e)));
    },
    delegate: undefined
  };
  var a = function (e) {
    function i(i, o) {
      var n = e.call(this, i, o) || this;
      n.scheduler = i;
      n.work = o;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(i, e);
    i.prototype.requestAsyncId = function (i, o, n = 0) {
      if (n !== null && n > 0) {
        return e.prototype.requestAsyncId.call(this, i, o, n);
      } else {
        i.actions.push(this);
        return i._scheduled ||= s.requestAnimationFrame(function () {
          return i.flush(undefined);
        });
      }
    };
    i.prototype.recycleAsyncId = function (i, o, n = 0) {
      if (n != null ? n > 0 : this.delay > 0) {
        return e.prototype.recycleAsyncId.call(this, i, o, n);
      }
      var l = i.actions;
      if (o != null && l[l.length - 1]?.id !== o) {
        s.cancelAnimationFrame(o);
        i._scheduled = undefined;
      }
    };
    return i;
  }(asyncSchedulerActionImplementation.AsyncSchedulerAction);
  var c = new (function (e) {
    function i() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(i, e);
    i.prototype.flush = function (e) {
      this._active = true;
      var i;
      var o = this._scheduled;
      this._scheduled = undefined;
      var n = this.actions;
      e = e || n.shift();
      do {
        if (i = e.execute(e.state, e.delay)) {
          break;
        }
      } while ((e = n[0]) && e.id === o && n.shift());
      this._active = false;
      if (i) {
        while ((e = n[0]) && e.id === o && n.shift()) {
          e.unsubscribe();
        }
        throw i;
      }
    };
    return i;
  }(require("async-scheduler-impl") /*id: 41580*/.AsyncScheduler))(a);
  require.d(exports, {
    rafScheduler: function () {
      return c;
    }
  });
}