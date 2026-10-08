// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 82119
         */
module.exports = function (module, exports, require) {
  var t = Object.prototype.hasOwnProperty;
  var n = "~";
  function r() {}
  function i(e, t, n) {
    this.fn = e;
    this.context = t;
    this.once = n || false;
  }
  function o(e, t, r, o, a) {
    if (typeof r != "function") {
      throw TypeError("The listener must be a function");
    }
    var s = new i(r, o || e, a);
    var u = n ? n + t : t;
    if (e._events[u]) {
      if (e._events[u].fn) {
        e._events[u] = [e._events[u], s];
      } else {
        e._events[u].push(s);
      }
    } else {
      e._events[u] = s;
      e._eventsCount++;
    }
    return e;
  }
  function a(e, t) {
    if (--e._eventsCount == 0) {
      e._events = new r();
    } else {
      delete e._events[t];
    }
  }
  function s() {
    this._events = new r();
    this._eventsCount = 0;
  }
  if (Object.create) {
    r.prototype = Object.create(null);
    if (!new r().__proto__) {
      n = false;
    }
  }
  s.prototype.eventNames = function () {
    var e;
    var r;
    var i = [];
    if (this._eventsCount === 0) {
      return i;
    }
    for (r in e = this._events) {
      if (t.call(e, r)) {
        i.push(n ? r.slice(1) : r);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return i.concat(Object.getOwnPropertySymbols(e));
    } else {
      return i;
    }
  };
  s.prototype.listeners = function (e) {
    var t = n ? n + e : e;
    var r = this._events[t];
    if (!r) {
      return [];
    }
    if (r.fn) {
      return [r.fn];
    }
    var i = 0;
    var o = r.length;
    var a = Array(o);
    for (; i < o; i++) {
      a[i] = r[i].fn;
    }
    return a;
  };
  s.prototype.listenerCount = function (e) {
    var t = n ? n + e : e;
    var r = this._events[t];
    if (r) {
      if (r.fn) {
        return 1;
      } else {
        return r.length;
      }
    } else {
      return 0;
    }
  };
  s.prototype.emit = function (e, t, r, i, o, a) {
    var s = n ? n + e : e;
    if (!this._events[s]) {
      return false;
    }
    var u;
    var c;
    var l = this._events[s];
    var f = arguments.length;
    if (l.fn) {
      if (l.once) {
        this.removeListener(e, l.fn, undefined, true);
      }
      switch (f) {
        case 1:
          l.fn.call(l.context);
          return true;
        case 2:
          l.fn.call(l.context, t);
          return true;
        case 3:
          l.fn.call(l.context, t, r);
          return true;
        case 4:
          l.fn.call(l.context, t, r, i);
          return true;
        case 5:
          l.fn.call(l.context, t, r, i, o);
          return true;
        case 6:
          l.fn.call(l.context, t, r, i, o, a);
          return true;
      }
      c = 1;
      u = Array(f - 1);
      for (; c < f; c++) {
        u[c - 1] = arguments[c];
      }
      l.fn.apply(l.context, u);
    } else {
      var h;
      var d = l.length;
      for (c = 0; c < d; c++) {
        if (l[c].once) {
          this.removeListener(e, l[c].fn, undefined, true);
        }
        switch (f) {
          case 1:
            l[c].fn.call(l[c].context);
            break;
          case 2:
            l[c].fn.call(l[c].context, t);
            break;
          case 3:
            l[c].fn.call(l[c].context, t, r);
            break;
          case 4:
            l[c].fn.call(l[c].context, t, r, i);
            break;
          default:
            if (!u) {
              h = 1;
              u = Array(f - 1);
              for (; h < f; h++) {
                u[h - 1] = arguments[h];
              }
            }
            l[c].fn.apply(l[c].context, u);
        }
      }
    }
    return true;
  };
  s.prototype.on = function (e, t, n) {
    return o(this, e, t, n, false);
  };
  s.prototype.once = function (e, t, n) {
    return o(this, e, t, n, true);
  };
  s.prototype.removeListener = function (e, t, r, i) {
    var o = n ? n + e : e;
    if (!this._events[o]) {
      return this;
    }
    if (!t) {
      a(this, o);
      return this;
    }
    var s = this._events[o];
    if (s.fn) {
      if (s.fn === t && (!i || !!s.once) && (!r || s.context === r)) {
        a(this, o);
      }
    } else {
      var u = 0;
      var c = [];
      var l = s.length;
      for (; u < l; u++) {
        if (s[u].fn !== t || i && !s[u].once || r && s[u].context !== r) {
          c.push(s[u]);
        }
      }
      if (c.length) {
        this._events[o] = c.length === 1 ? c[0] : c;
      } else {
        a(this, o);
      }
    }
    return this;
  };
  s.prototype.removeAllListeners = function (e) {
    var t;
    if (e) {
      t = n ? n + e : e;
      if (this._events[t]) {
        a(this, t);
      }
    } else {
      this._events = new r();
      this._eventsCount = 0;
    }
    return this;
  };
  s.prototype.off = s.prototype.removeListener;
  s.prototype.addListener = s.prototype.on;
  s.prefixed = n;
  s.EventEmitter = s;
  module.exports = s;
}