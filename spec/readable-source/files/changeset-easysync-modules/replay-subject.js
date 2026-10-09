// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'ReplaySubject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 229131
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var timeNowHelper = require("time-now-helper") /*id: 758529*/;
  var s = function (t) {
    function e(e = Infinity, n = Infinity, r = timeNowHelper.timeNow) {
      var i = t.call(this) || this;
      i._bufferSize = e;
      i._windowTime = n;
      i._timestampProvider = r;
      i._buffer = [];
      i._infiniteTimeWindow = true;
      i._infiniteTimeWindow = n === Infinity;
      i._bufferSize = Math.max(1, e);
      i._windowTime = Math.max(1, n);
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.next = function (e) {
      var n = this.isStopped;
      var r = this._buffer;
      var i = this._infiniteTimeWindow;
      var o = this._timestampProvider;
      var s = this._windowTime;
      if (!n) {
        r.push(e);
        if (!i) {
          r.push(o.now() + s);
        }
      }
      this._trimBuffer();
      t.prototype.next.call(this, e);
    };
    e.prototype._subscribe = function (t) {
      this._throwIfClosed();
      this._trimBuffer();
      var e = this._innerSubscribe(t);
      var n = this._infiniteTimeWindow;
      var r = this._buffer.slice();
      var i = 0;
      for (; i < r.length && !t.closed; i += n ? 1 : 2) {
        t.next(r[i]);
      }
      this._checkFinalizedStatuses(t);
      return e;
    };
    e.prototype._trimBuffer = function () {
      var t = this._bufferSize;
      var e = this._timestampProvider;
      var n = this._buffer;
      var r = this._infiniteTimeWindow;
      var i = (r ? 1 : 2) * t;
      if (t < Infinity && i < n.length) {
        n.splice(0, n.length - i);
      }
      if (!r) {
        var o = e.now();
        var s = 0;
        var a = 1;
        for (; a < n.length && n[a] <= o; a += 2) {
          s = a;
        }
        if (s) {
          n.splice(0, s + 1);
        }
      }
    };
    return e;
  }(observableSubjectClass.Subject);
  require.d(exports, {
    ReplaySubject: function () {
      return s;
    }
  });
}