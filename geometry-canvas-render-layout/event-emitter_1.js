// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 697754
         */
module.exports = function (module, exports, require) {
  function n() {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var i = Array(t);
    var r = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var a = 0;
      var s = o.length;
      for (; a < s; a++, r++) {
        i[r] = o[a];
      }
    }
    return i;
  }
  var i = function () {
    function t() {
      this._eventListeners = {};
    }
    t.prototype.on = function (t, e) {
      var n = this._eventListeners[t] || [];
      if ((!(n.length > 0) || !n.some(function (t) {
        return t === e;
      })) && typeof e == "function") {
        n.push(e);
        this._eventListeners[t] = n;
      }
    };
    t.prototype.off = function (t, e) {
      var n = this._eventListeners[t] || [];
      if (e === undefined) {
        delete this._eventListeners[t];
      } else if (typeof e == "function") {
        var i = n.indexOf(e);
        if (i !== -1) {
          n.splice(i, 1);
        }
        this._eventListeners[t] = n;
      }
    };
    t.prototype.dispatch = function (t) {
      var e = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        e[i - 1] = arguments[i];
      }
      (this._eventListeners[t] || []).forEach(function (t) {
        return t.apply(null, e);
      });
      this.onEvent.apply(this, n([t], e));
    };
    t.prototype.removeAllListeners = function () {
      this._eventListeners = {};
    };
    t.prototype.onEvent = function (t) {
      var e = [];
      var n = 1;
      for (; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
    };
    return t;
  }();
  exports.EventEmitter = i;
}