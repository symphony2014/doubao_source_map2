// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66784.0c351d11.js
         * chunkId: 66784
         * moduleId: 692502
         */
module.exports = function (module, exports, require) {
  (function (t) {
    "use strict";

    function n() {}
    var r = n.prototype;
    var o = t.EventEmitter;
    function i(e, t) {
      for (var n = e.length; n--;) {
        if (e[n].listener === t) {
          return n;
        }
      }
      return -1;
    }
    function a(e) {
      return function () {
        return this[e].apply(this, arguments);
      };
    }
    r.getListeners = function (e) {
      var t;
      var n;
      var r = this._getEvents();
      if (e instanceof RegExp) {
        t = {};
        for (n in r) {
          if (r.hasOwnProperty(n) && e.test(n)) {
            t[n] = r[n];
          }
        }
      } else {
        t = r[e] ||= [];
      }
      return t;
    };
    r.flattenListeners = function (e) {
      var t;
      var n = [];
      for (t = 0; t < e.length; t += 1) {
        n.push(e[t].listener);
      }
      return n;
    };
    r.getListenersAsObject = function (e) {
      var t;
      var n = this.getListeners(e);
      if (n instanceof Array) {
        (t = {})[e] = n;
      }
      return t || n;
    };
    r.addListener = function (e, t) {
      if (!function e(t) {
        return typeof t == "function" || t instanceof RegExp || !!t && typeof t == "object" && e(t.listener);
      }(t)) {
        throw TypeError("listener must be a function");
      }
      var n;
      var r = this.getListenersAsObject(e);
      var o = typeof t == "object";
      for (n in r) {
        if (r.hasOwnProperty(n) && i(r[n], t) === -1) {
          r[n].push(o ? t : {
            listener: t,
            once: false
          });
        }
      }
      return this;
    };
    r.on = a("addListener");
    r.addOnceListener = function (e, t) {
      return this.addListener(e, {
        listener: t,
        once: true
      });
    };
    r.once = a("addOnceListener");
    r.defineEvent = function (e) {
      this.getListeners(e);
      return this;
    };
    r.defineEvents = function (e) {
      for (var t = 0; t < e.length; t += 1) {
        this.defineEvent(e[t]);
      }
      return this;
    };
    r.removeListener = function (e, t) {
      var n;
      var r;
      var o = this.getListenersAsObject(e);
      for (r in o) {
        if (o.hasOwnProperty(r) && (n = i(o[r], t)) !== -1) {
          o[r].splice(n, 1);
        }
      }
      return this;
    };
    r.off = a("removeListener");
    r.addListeners = function (e, t) {
      return this.manipulateListeners(false, e, t);
    };
    r.removeListeners = function (e, t) {
      return this.manipulateListeners(true, e, t);
    };
    r.manipulateListeners = function (e, t, n) {
      var r;
      var o;
      var i = e ? this.removeListener : this.addListener;
      var a = e ? this.removeListeners : this.addListeners;
      if (typeof t != "object" || t instanceof RegExp) {
        for (r = n.length; r--;) {
          i.call(this, t, n[r]);
        }
      } else {
        for (r in t) {
          if (t.hasOwnProperty(r) && (o = t[r])) {
            if (typeof o == "function") {
              i.call(this, r, o);
            } else {
              a.call(this, r, o);
            }
          }
        }
      }
      return this;
    };
    r.removeEvent = function (e) {
      var t;
      var n = typeof e;
      var r = this._getEvents();
      if (n === "string") {
        delete r[e];
      } else if (e instanceof RegExp) {
        for (t in r) {
          if (r.hasOwnProperty(t) && e.test(t)) {
            delete r[t];
          }
        }
      } else {
        delete this._events;
      }
      return this;
    };
    r.removeAllListeners = a("removeEvent");
    r.emitEvent = function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var a = this.getListenersAsObject(e);
      for (i in a) {
        if (a.hasOwnProperty(i)) {
          o = 0;
          n = a[i].slice(0);
          for (; o < n.length; o++) {
            if ((r = n[o]).once === true) {
              this.removeListener(e, r.listener);
            }
            if (r.listener.apply(this, t || []) === this._getOnceReturnValue()) {
              this.removeListener(e, r.listener);
            }
          }
        }
      }
      return this;
    };
    r.trigger = a("emitEvent");
    r.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    };
    r.setOnceReturnValue = function (e) {
      this._onceReturnValue = e;
      return this;
    };
    r._getOnceReturnValue = function () {
      return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
    };
    r._getEvents = function () {
      return this._events ||= {};
    };
    n.noConflict = function () {
      t.EventEmitter = o;
      return n;
    };
    if (typeof define == "function" && define.amd) {
      define(function () {
        return n;
      });
    } else if (module.exports) {
      module.exports = n;
    } else {
      t.EventEmitter = n;
    }
  })(typeof window != "undefined" ? window : this || {});
}