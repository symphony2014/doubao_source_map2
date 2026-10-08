// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'AsyncScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 41580
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var timeNowHelper = require("time-now-helper") /*id: 758529*/;
  var a = function () {
    function e(n, i = e.now) {
      this.schedulerActionCtor = n;
      this.now = i;
    }
    e.prototype.schedule = function (e, n = 0, i) {
      return new this.schedulerActionCtor(this, e).schedule(i, n);
    };
    e.now = timeNowHelper.timeNow.now;
    return e;
  }();
  var l = function (e) {
    function n(n, i = a.now) {
      var r = e.call(this, n, i) || this;
      r.actions = [];
      r._active = false;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(n, e);
    n.prototype.flush = function (e) {
      var n;
      var i = this.actions;
      if (this._active) {
        i.push(e);
        return;
      }
      this._active = true;
      do {
        if (n = e.execute(e.state, e.delay)) {
          break;
        }
      } while (e = i.shift());
      this._active = false;
      if (n) {
        while (e = i.shift()) {
          e.unsubscribe();
        }
        throw n;
      }
    };
    return n;
  }(a);
  require.d(exports, {
    AsyncScheduler: function () {
      return l;
    }
  });
}