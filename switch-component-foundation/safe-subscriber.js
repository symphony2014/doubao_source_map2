// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'safeSubscriber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 132026
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function r(e, t, n, i, r) {
    return new o(e, t, n, i, r);
  }
  var o = function (e) {
    function t(t, n, i, r, o, a) {
      var l = e.call(this, t) || this;
      l.onFinalize = o;
      l.shouldUnsubscribe = a;
      l._next = n ? function (e) {
        try {
          n(e);
        } catch (e) {
          t.error(e);
        }
      } : e.prototype._next;
      l._error = r ? function (e) {
        try {
          r(e);
        } catch (e) {
          t.error(e);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._error;
      l._complete = i ? function () {
        try {
          i();
        } catch (e) {
          t.error(e);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._complete;
      return l;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.unsubscribe = function () {
      var t;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var n = this.closed;
        e.prototype.unsubscribe.call(this);
        if (!n && (t = this.onFinalize) !== null && t !== undefined) {
          t.call(this);
        }
      }
    };
    return t;
  }(require("subscriber-observer-core") /*id: 857315*/.Subscriber);
  require.d(exports, {
    safeSubscriber: function () {
      return r;
    }
  });
}