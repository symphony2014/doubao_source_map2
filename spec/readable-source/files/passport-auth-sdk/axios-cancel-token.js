// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'axiosCanceledError'
// - Resolved require(195120) to 'axios-canceled-error'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 979463
         */
module.exports = function (module, exports, require) {
  var axiosCanceledError = require("axios-canceled-error") /*id: 195120*/;
  function o(e) {
    if (typeof e != "function") {
      throw TypeError("executor must be a function.");
    }
    this.promise = new Promise(function (e) {
      t = e;
    });
    var t;
    var r = this;
    this.promise.then(function (e) {
      if (r._listeners) {
        for (var t = r._listeners.length; t-- > 0;) {
          r._listeners[t](e);
        }
        r._listeners = null;
      }
    });
    this.promise.then = function (e) {
      var t;
      var n = new Promise(function (e) {
        r.subscribe(e);
        t = e;
      }).then(e);
      n.cancel = function () {
        r.unsubscribe(t);
      };
      return n;
    };
    e(function (e, o, i) {
      if (!r.reason) {
        r.reason = new axiosCanceledError(e, o, i);
        t(r.reason);
      }
    });
  }
  o.prototype.throwIfRequested = function () {
    if (this.reason) {
      throw this.reason;
    }
  };
  o.prototype.subscribe = function (e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(e);
    } else {
      this._listeners = [e];
    }
  };
  o.prototype.unsubscribe = function (e) {
    if (this._listeners) {
      var t = this._listeners.indexOf(e);
      if (t !== -1) {
        this._listeners.splice(t, 1);
      }
    }
  };
  o.source = function () {
    var e;
    return {
      token: new o(function (t) {
        e = t;
      }),
      cancel: e
    };
  };
  module.exports = o;
}