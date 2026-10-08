// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'AsyncSchedulerAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 93388
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var o = function (e) {
    function n(n, i) {
      return e.call(this) || this;
    }
    typescriptRuntimeHelpers.classExtends(n, e);
    n.prototype.schedule = function (e, n = 0) {
      return this;
    };
    return n;
  }(require("subscription-core") /*id: 259043*/.Subscription);
  var a = {
    setInterval: function (e, n) {
      var i = [];
      var o = 2;
      for (; o < arguments.length; o++) {
        i[o - 2] = arguments[o];
      }
      var l = a.delegate;
      if (l == null ? undefined : l.setInterval) {
        return l.setInterval.apply(l, typescriptRuntimeHelpers.arraySpread([e, n], typescriptRuntimeHelpers.spreadArray(i)));
      } else {
        return setInterval.apply(undefined, typescriptRuntimeHelpers.arraySpread([e, n], typescriptRuntimeHelpers.spreadArray(i)));
      }
    },
    clearInterval: function (e) {
      var n = a.delegate;
      return ((n == null ? undefined : n.clearInterval) || clearInterval)(e);
    },
    delegate: undefined
  };
  var arrayRemoveUtil = require("array-remove-util") /*id: 91229*/;
  var c = function (e) {
    function n(n, i) {
      var r = e.call(this, n, i) || this;
      r.scheduler = n;
      r.work = i;
      r.pending = false;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(n, e);
    n.prototype.schedule = function (e, n = 0) {
      if (this.closed) {
        return this;
      }
      this.state = e;
      var r = this.id;
      var o = this.scheduler;
      if (r != null) {
        this.id = this.recycleAsyncId(o, r, n);
      }
      this.pending = true;
      this.delay = n;
      this.id = this.id ?? this.requestAsyncId(o, this.id, n);
      return this;
    };
    n.prototype.requestAsyncId = function (e, n, i = 0) {
      return a.setInterval(e.flush.bind(e, this), i);
    };
    n.prototype.recycleAsyncId = function (e, n, i = 0) {
      if (i != null && this.delay === i && this.pending === false) {
        return n;
      }
      if (n != null) {
        a.clearInterval(n);
      }
    };
    n.prototype.execute = function (e, n) {
      if (this.closed) {
        return Error("executing a cancelled action");
      }
      this.pending = false;
      var i = this._execute(e, n);
      if (i) {
        return i;
      }
      if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    n.prototype._execute = function (e, n) {
      var i;
      var r = false;
      try {
        this.work(e);
      } catch (e) {
        r = true;
        i = e || Error("Scheduled action threw falsy error");
      }
      if (r) {
        this.unsubscribe();
        return i;
      }
    };
    n.prototype.unsubscribe = function () {
      if (!this.closed) {
        var n = this.id;
        var i = this.scheduler;
        var r = i.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrayRemoveUtil.removeFromArray(r, this);
        if (n != null) {
          this.id = this.recycleAsyncId(i, n, null);
        }
        this.delay = null;
        e.prototype.unsubscribe.call(this);
      }
    };
    return n;
  }(o);
  require.d(exports, {
    AsyncSchedulerAction: function () {
      return c;
    }
  });
}