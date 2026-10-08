// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68685.ba4452d3.js
         * chunkId: 68685
         * moduleId: 361873
         */
module.exports = function (module, exports, require) {
  var t;
  var r = typeof Reflect == "object" ? Reflect : null;
  var n = r && typeof r.apply == "function" ? r.apply : function (e, t, r) {
    return Function.prototype.apply.call(e, t, r);
  };
  t = r && typeof r.ownKeys == "function" ? r.ownKeys : Object.getOwnPropertySymbols ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : function (e) {
    return Object.getOwnPropertyNames(e);
  };
  var i = Number.isNaN || function (e) {
    return e != e;
  };
  function o() {
    o.init.call(this);
  }
  module.exports = o;
  module.exports.once = function (e, t) {
    return new Promise(function (r, n) {
      var i;
      var o;
      var s;
      function a(r) {
        e.removeListener(t, u);
        n(r);
      }
      function u() {
        if (typeof e.removeListener == "function") {
          e.removeListener("error", a);
        }
        r([].slice.call(arguments));
      }
      v(e, t, u, {
        once: true
      });
      if (t !== "error") {
        i = e;
        o = a;
        s = {
          once: true
        };
        if (typeof i.on == "function") {
          v(i, "error", o, s);
        }
      }
    });
  };
  o.EventEmitter = o;
  o.prototype._events = undefined;
  o.prototype._eventsCount = 0;
  o.prototype._maxListeners = undefined;
  var s = 10;
  function a(e) {
    if (typeof e != "function") {
      throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
    }
  }
  function u(e) {
    if (e._maxListeners === undefined) {
      return o.defaultMaxListeners;
    } else {
      return e._maxListeners;
    }
  }
  function l(e, t, r, n) {
    a(r);
    if ((o = e._events) === undefined) {
      o = e._events = Object.create(null);
      e._eventsCount = 0;
    } else {
      if (o.newListener !== undefined) {
        e.emit("newListener", t, r.listener ? r.listener : r);
        o = e._events;
      }
      s = o[t];
    }
    if (s === undefined) {
      s = o[t] = r;
      ++e._eventsCount;
    } else {
      if (typeof s == "function") {
        s = o[t] = n ? [r, s] : [s, r];
      } else if (n) {
        s.unshift(r);
      } else {
        s.push(r);
      }
      if ((i = u(e)) > 0 && s.length > i && !s.warned) {
        s.warned = true;
        var i;
        var o;
        var s;
        var l = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        l.name = "MaxListenersExceededWarning";
        l.emitter = e;
        l.type = t;
        l.count = s.length;
      }
    }
    return e;
  }
  function c() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length == 0) {
        return this.listener.call(this.target);
      } else {
        return this.listener.apply(this.target, arguments);
      }
    }
  }
  function f(e, t, r) {
    var n = {
      fired: false,
      wrapFn: undefined,
      target: e,
      type: t,
      listener: r
    };
    var i = c.bind(n);
    i.listener = r;
    n.wrapFn = i;
    return i;
  }
  function p(e, t, r) {
    var n = e._events;
    if (n === undefined) {
      return [];
    }
    var i = n[t];
    if (i === undefined) {
      return [];
    } else if (typeof i == "function") {
      if (r) {
        return [i.listener || i];
      } else {
        return [i];
      }
    } else if (r) {
      return function (e) {
        var t = Array(e.length);
        var r = 0;
        for (; r < t.length; ++r) {
          t[r] = e[r].listener || e[r];
        }
        return t;
      }(i);
    } else {
      return m(i, i.length);
    }
  }
  function h(e) {
    var t = this._events;
    if (t !== undefined) {
      var r = t[e];
      if (typeof r == "function") {
        return 1;
      }
      if (r !== undefined) {
        return r.length;
      }
    }
    return 0;
  }
  function m(e, t) {
    var r = Array(t);
    var n = 0;
    for (; n < t; ++n) {
      r[n] = e[n];
    }
    return r;
  }
  function v(e, t, r, n) {
    if (typeof e.on == "function") {
      if (n.once) {
        e.once(t, r);
      } else {
        e.on(t, r);
      }
    } else if (typeof e.addEventListener == "function") {
      e.addEventListener(t, function i(o) {
        if (n.once) {
          e.removeEventListener(t, i);
        }
        r(o);
      });
    } else {
      throw TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
    }
  }
  Object.defineProperty(o, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
      return s;
    },
    set: function (e) {
      if (typeof e != "number" || e < 0 || i(e)) {
        throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
      }
      s = e;
    }
  });
  o.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  o.prototype.setMaxListeners = function (e) {
    if (typeof e != "number" || e < 0 || i(e)) {
      throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
    }
    this._maxListeners = e;
    return this;
  };
  o.prototype.getMaxListeners = function () {
    return u(this);
  };
  o.prototype.emit = function (e) {
    var t = [];
    var r = 1;
    for (; r < arguments.length; r++) {
      t.push(arguments[r]);
    }
    var i = e === "error";
    var o = this._events;
    if (o !== undefined) {
      i = i && o.error === undefined;
    } else if (!i) {
      return false;
    }
    if (i) {
      if (t.length > 0) {
        s = t[0];
      }
      if (s instanceof Error) {
        throw s;
      }
      var s;
      var a = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      a.context = s;
      throw a;
    }
    var u = o[e];
    if (u === undefined) {
      return false;
    }
    if (typeof u == "function") {
      n(u, this, t);
    } else {
      var l = u.length;
      var c = m(u, l);
      var r = 0;
      for (; r < l; ++r) {
        n(c[r], this, t);
      }
    }
    return true;
  };
  o.prototype.addListener = function (e, t) {
    return l(this, e, t, false);
  };
  o.prototype.on = o.prototype.addListener;
  o.prototype.prependListener = function (e, t) {
    return l(this, e, t, true);
  };
  o.prototype.once = function (e, t) {
    a(t);
    this.on(e, f(this, e, t));
    return this;
  };
  o.prototype.prependOnceListener = function (e, t) {
    a(t);
    this.prependListener(e, f(this, e, t));
    return this;
  };
  o.prototype.removeListener = function (e, t) {
    var r;
    var n;
    var i;
    var o;
    var s;
    a(t);
    if ((n = this._events) === undefined || (r = n[e]) === undefined) {
      return this;
    }
    if (r === t || r.listener === t) {
      if (--this._eventsCount == 0) {
        this._events = Object.create(null);
      } else {
        delete n[e];
        if (n.removeListener) {
          this.emit("removeListener", e, r.listener || t);
        }
      }
    } else if (typeof r != "function") {
      i = -1;
      o = r.length - 1;
      for (; o >= 0; o--) {
        if (r[o] === t || r[o].listener === t) {
          s = r[o].listener;
          i = o;
          break;
        }
      }
      if (i < 0) {
        return this;
      }
      if (i === 0) {
        r.shift();
      } else {
        (function (e, t) {
          for (; t + 1 < e.length; t++) {
            e[t] = e[t + 1];
          }
          e.pop();
        })(r, i);
      }
      if (r.length === 1) {
        n[e] = r[0];
      }
      if (n.removeListener !== undefined) {
        this.emit("removeListener", e, s || t);
      }
    }
    return this;
  };
  o.prototype.off = o.prototype.removeListener;
  o.prototype.removeAllListeners = function (e) {
    var t;
    var r;
    var n;
    if ((r = this._events) === undefined) {
      return this;
    }
    if (r.removeListener === undefined) {
      if (arguments.length == 0) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      } else if (r[e] !== undefined) {
        if (--this._eventsCount == 0) {
          this._events = Object.create(null);
        } else {
          delete r[e];
        }
      }
      return this;
    }
    if (arguments.length == 0) {
      var i;
      var o = Object.keys(r);
      for (n = 0; n < o.length; ++n) {
        if ((i = o[n]) !== "removeListener") {
          this.removeAllListeners(i);
        }
      }
      this.removeAllListeners("removeListener");
      this._events = Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    if (typeof (t = r[e]) == "function") {
      this.removeListener(e, t);
    } else if (t !== undefined) {
      for (n = t.length - 1; n >= 0; n--) {
        this.removeListener(e, t[n]);
      }
    }
    return this;
  };
  o.prototype.listeners = function (e) {
    return p(this, e, true);
  };
  o.prototype.rawListeners = function (e) {
    return p(this, e, false);
  };
  o.listenerCount = function (e, t) {
    if (typeof e.listenerCount == "function") {
      return e.listenerCount(t);
    } else {
      return h.call(e, t);
    }
  };
  o.prototype.listenerCount = h;
  o.prototype.eventNames = function () {
    if (this._eventsCount > 0) {
      return t(this._events);
    } else {
      return [];
    }
  };
}