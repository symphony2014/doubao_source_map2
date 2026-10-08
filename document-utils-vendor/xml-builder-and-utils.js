// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(989572) to 'buffer-polyfill-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 730126
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var a;
  var s;
  var l;
  var u;
  var c;
  var h;
  var d;
  var f;
  var A;
  var g;
  var p;
  var m;
  var y;
  var v;
  var b;
  var w;
  var C;
  var E;
  var I;
  var B;
  var x;
  var D;
  var S;
  var k;
  var _;
  var T;
  var Q;
  var R;
  var F;
  var L;
  var O;
  var N;
  var M;
  var P;
  var U;
  var z;
  var H;
  var G;
  var Z;
  var W;
  var j;
  var Y;
  var K;
  var q;
  var V;
  var J;
  var X;
  var $;
  var ee;
  var et;
  var er;
  var en;
  var ei;
  var eo;
  var ea;
  var es;
  var el;
  var eu;
  var ec;
  var eh;
  var ed;
  var ef;
  var eA;
  var eg;
  var ep;
  var em;
  var ey;
  var ev;
  var eb;
  var ew;
  var eC;
  var eE;
  var eI;
  var eB;
  var ex;
  var eD;
  var eS;
  var ek;
  var e_;
  var eT;
  var eQ;
  var eR;
  var eF;
  var eL;
  var eO;
  var eN;
  var eM = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  var eP = Object.defineProperty;
  var eU = Object.defineProperties;
  var ez = Object.getOwnPropertyDescriptors;
  var eH = Object.getOwnPropertySymbols;
  var eG = Object.prototype.hasOwnProperty;
  var eZ = Object.prototype.propertyIsEnumerable;
  var eW = (e, t, r) => t in e ? eP(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var ej = (e, t) => {
    for (var r in t ||= {}) {
      if (eG.call(t, r)) {
        eW(e, r, t[r]);
      }
    }
    if (eH) {
      for (var r of eH(t)) {
        if (eZ.call(t, r)) {
          eW(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var eY = (e, t) => eU(e, ez(t));
  var eK = (e, t, r) => {
    eW(e, typeof t != "symbol" ? t + "" : t, r);
    return r;
  };
  var eq = (e, t, r) => new Promise((n, i) => {
    var o = e => {
      try {
        s(r.next(e));
      } catch (e) {
        i(e);
      }
    };
    var a = e => {
      try {
        s(r.throw(e));
      } catch (e) {
        i(e);
      }
    };
    var s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
    s((r = r.apply(e, t)).next());
  });
  class eV {
    constructor(e) {
      eK(this, "rootKey");
      this.rootKey = e;
    }
  }
  let eJ = Object.seal({});
  class eX extends eV {
    constructor(e) {
      super(e);
      eK(this, "root");
      this.root = [];
    }
    prepForXml(e) {
      var t;
      e.stack.push(this);
      let r = this.root.map(t => t instanceof eV ? t.prepForXml(e) : t).filter(e => e !== undefined);
      e.stack.pop();
      return {
        [this.rootKey]: r.length ? r.length === 1 && ((t = r[0]) == null ? undefined : t._attr) ? r[0] : r : eJ
      };
    }
    addChildElement(e) {
      this.root.push(e);
      return this;
    }
  }
  class e$ extends eX {
    prepForXml(e) {
      let t = super.prepForXml(e);
      if (t && (typeof t[this.rootKey] != "object" || Object.keys(t[this.rootKey]).length)) {
        return t;
      }
    }
  }
  class e0 extends eV {
    constructor(e) {
      super("_attr");
      eK(this, "xmlKeys");
      this.root = e;
    }
    prepForXml(e) {
      let t = {};
      Object.keys(this.root).forEach(e => {
        let r = this.root[e];
        if (r !== undefined) {
          t[this.xmlKeys && this.xmlKeys[e] || e] = r;
        }
      });
      return {
        _attr: t
      };
    }
  }
  class e1 extends eV {
    constructor(e) {
      super("_attr");
      this.root = e;
    }
    prepForXml(e) {
      return {
        _attr: Object.values(this.root).filter(({
          value: e
        }) => e !== undefined).reduce((e, {
          key: t,
          value: r
        }) => eY(ej({}, e), {
          [t]: r
        }), {})
      };
    }
  }
  class e2 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val",
        color: "w:color",
        fill: "w:fill",
        space: "w:space",
        sz: "w:sz",
        type: "w:type",
        rsidR: "w:rsidR",
        rsidRPr: "w:rsidRPr",
        rsidSect: "w:rsidSect",
        w: "w:w",
        h: "w:h",
        top: "w:top",
        right: "w:right",
        bottom: "w:bottom",
        left: "w:left",
        header: "w:header",
        footer: "w:footer",
        gutter: "w:gutter",
        linePitch: "w:linePitch",
        pos: "w:pos"
      });
    }
  }
  var e5 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
  function e3(e) {
    if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
      return e.default;
    } else {
      return e;
    }
  }
  var e4 = {};
  var e6 = {
    exports: {}
  };
  var e8 = typeof Reflect == "object" ? Reflect : null;
  var e7 = e8 && typeof e8.apply == "function" ? e8.apply : function (e, t, r) {
    return Function.prototype.apply.call(e, t, r);
  };
  o = e8 && typeof e8.ownKeys == "function" ? e8.ownKeys : Object.getOwnPropertySymbols ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : function (e) {
    return Object.getOwnPropertyNames(e);
  };
  var e9 = Number.isNaN || function (e) {
    return e != e;
  };
  function te() {
    te.init.call(this);
  }
  e6.exports = te;
  e6.exports.once = function (e, t) {
    return new Promise(function (r, n) {
      var i;
      var o;
      var a;
      function s(r) {
        e.removeListener(t, l);
        n(r);
      }
      function l() {
        if (typeof e.removeListener == "function") {
          e.removeListener("error", s);
        }
        r([].slice.call(arguments));
      }
      tc(e, t, l, {
        once: true
      });
      if (t !== "error") {
        i = e;
        o = s;
        a = {
          once: true
        };
        if (typeof i.on == "function") {
          tc(i, "error", o, a);
        }
      }
    });
  };
  te.EventEmitter = te;
  te.prototype._events = undefined;
  te.prototype._eventsCount = 0;
  te.prototype._maxListeners = undefined;
  var tt = 10;
  function tr(e) {
    if (typeof e != "function") {
      throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
    }
  }
  function tn(e) {
    if (e._maxListeners === undefined) {
      return te.defaultMaxListeners;
    } else {
      return e._maxListeners;
    }
  }
  function ti(e, t, r, n) {
    tr(r);
    if ((o = e._events) === undefined) {
      o = e._events = Object.create(null);
      e._eventsCount = 0;
    } else {
      if (o.newListener !== undefined) {
        e.emit("newListener", t, r.listener ? r.listener : r);
        o = e._events;
      }
      a = o[t];
    }
    if (a === undefined) {
      a = o[t] = r;
      ++e._eventsCount;
    } else {
      if (typeof a == "function") {
        a = o[t] = n ? [r, a] : [a, r];
      } else if (n) {
        a.unshift(r);
      } else {
        a.push(r);
      }
      if ((i = tn(e)) > 0 && a.length > i && !a.warned) {
        a.warned = true;
        var i;
        var o;
        var a;
        var s = Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        s.name = "MaxListenersExceededWarning";
        s.emitter = e;
        s.type = t;
        s.count = a.length;
      }
    }
    return e;
  }
  function to() {
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
  function ta(e, t, r) {
    var n = {
      fired: false,
      wrapFn: undefined,
      target: e,
      type: t,
      listener: r
    };
    var i = to.bind(n);
    i.listener = r;
    n.wrapFn = i;
    return i;
  }
  function ts(e, t, r) {
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
      return tu(i, i.length);
    }
  }
  function tl(e) {
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
  function tu(e, t) {
    var r = Array(t);
    var n = 0;
    for (; n < t; ++n) {
      r[n] = e[n];
    }
    return r;
  }
  function tc(e, t, r, n) {
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
  Object.defineProperty(te, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
      return tt;
    },
    set: function (e) {
      if (typeof e != "number" || e < 0 || e9(e)) {
        throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
      }
      tt = e;
    }
  });
  te.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  te.prototype.setMaxListeners = function (e) {
    if (typeof e != "number" || e < 0 || e9(e)) {
      throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
    }
    this._maxListeners = e;
    return this;
  };
  te.prototype.getMaxListeners = function () {
    return tn(this);
  };
  te.prototype.emit = function (e) {
    var t = [];
    var r = 1;
    for (; r < arguments.length; r++) {
      t.push(arguments[r]);
    }
    var n = e === "error";
    var i = this._events;
    if (i !== undefined) {
      n = n && i.error === undefined;
    } else if (!n) {
      return false;
    }
    if (n) {
      if (t.length > 0) {
        o = t[0];
      }
      if (o instanceof Error) {
        throw o;
      }
      var o;
      var a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      a.context = o;
      throw a;
    }
    var s = i[e];
    if (s === undefined) {
      return false;
    }
    if (typeof s == "function") {
      e7(s, this, t);
    } else {
      var l = s.length;
      var u = tu(s, l);
      var r = 0;
      for (; r < l; ++r) {
        e7(u[r], this, t);
      }
    }
    return true;
  };
  te.prototype.addListener = function (e, t) {
    return ti(this, e, t, false);
  };
  te.prototype.on = te.prototype.addListener;
  te.prototype.prependListener = function (e, t) {
    return ti(this, e, t, true);
  };
  te.prototype.once = function (e, t) {
    tr(t);
    this.on(e, ta(this, e, t));
    return this;
  };
  te.prototype.prependOnceListener = function (e, t) {
    tr(t);
    this.prependListener(e, ta(this, e, t));
    return this;
  };
  te.prototype.removeListener = function (e, t) {
    var r;
    var n;
    var i;
    var o;
    var a;
    tr(t);
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
          a = r[o].listener;
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
        this.emit("removeListener", e, a || t);
      }
    }
    return this;
  };
  te.prototype.off = te.prototype.removeListener;
  te.prototype.removeAllListeners = function (e) {
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
  te.prototype.listeners = function (e) {
    return ts(this, e, true);
  };
  te.prototype.rawListeners = function (e) {
    return ts(this, e, false);
  };
  te.listenerCount = function (e, t) {
    if (typeof e.listenerCount == "function") {
      return e.listenerCount(t);
    } else {
      return tl.call(e, t);
    }
  };
  te.prototype.listenerCount = tl;
  te.prototype.eventNames = function () {
    if (this._eventsCount > 0) {
      return o(this._events);
    } else {
      return [];
    }
  };
  var th = e6.exports;
  var td = {
    exports: {}
  };
  if (typeof Object.create == "function") {
    td.exports = function (e, t) {
      if (t) {
        e.super_ = t;
        e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    td.exports = function (e, t) {
      if (t) {
        e.super_ = t;
        function r() {}
        r.prototype = t.prototype;
        e.prototype = new r();
        e.prototype.constructor = e;
      }
    };
  }
  var tf = td.exports;
  var tA = {
    exports: {}
  };
  var tg = tA.exports = {};
  function tp() {
    throw Error("setTimeout has not been defined");
  }
  function tm() {
    throw Error("clearTimeout has not been defined");
  }
  function ty(e) {
    if (a === setTimeout) {
      return setTimeout(e, 0);
    }
    if ((a === tp || !a) && setTimeout) {
      a = setTimeout;
      return setTimeout(e, 0);
    }
    try {
      return a(e, 0);
    } catch (t) {
      try {
        return a.call(null, e, 0);
      } catch (t) {
        return a.call(this, e, 0);
      }
    }
  }
  (function () {
    try {
      a = typeof setTimeout == "function" ? setTimeout : tp;
    } catch (e) {
      a = tp;
    }
    try {
      s = typeof clearTimeout == "function" ? clearTimeout : tm;
    } catch (e) {
      s = tm;
    }
  })();
  var tv = [];
  var tb = false;
  var tw = -1;
  function tC() {
    if (tb && l) {
      tb = false;
      if (l.length) {
        tv = l.concat(tv);
      } else {
        tw = -1;
      }
      if (tv.length) {
        tE();
      }
    }
  }
  function tE() {
    if (!tb) {
      var e = ty(tC);
      tb = true;
      for (var t = tv.length; t;) {
        l = tv;
        tv = [];
        while (++tw < t) {
          if (l) {
            l[tw].run();
          }
        }
        tw = -1;
        t = tv.length;
      }
      l = null;
      tb = false;
      (function (e) {
        if (s === clearTimeout) {
          return clearTimeout(e);
        }
        if ((s === tm || !s) && clearTimeout) {
          s = clearTimeout;
          return clearTimeout(e);
        }
        try {
          s(e);
        } catch (t) {
          try {
            return s.call(null, e);
          } catch (t) {
            return s.call(this, e);
          }
        }
      })(e);
    }
  }
  function tI(e, t) {
    this.fun = e;
    this.array = t;
  }
  function tB() {}
  tg.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var r = 1; r < arguments.length; r++) {
        t[r - 1] = arguments[r];
      }
    }
    tv.push(new tI(e, t));
    if (tv.length === 1 && !tb) {
      ty(tE);
    }
  };
  tI.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  tg.title = "browser";
  tg.browser = true;
  tg.env = {};
  tg.argv = [];
  tg.version = "";
  tg.versions = {};
  tg.on = tB;
  tg.addListener = tB;
  tg.once = tB;
  tg.off = tB;
  tg.removeListener = tB;
  tg.removeAllListeners = tB;
  tg.emit = tB;
  tg.prependListener = tB;
  tg.prependOnceListener = tB;
  tg.listeners = function (e) {
    return [];
  };
  tg.binding = function (e) {
    throw Error("process.binding is not supported");
  };
  tg.cwd = function () {
    return "/";
  };
  tg.chdir = function (e) {
    throw Error("process.chdir is not supported");
  };
  tg.umask = function () {
    return 0;
  };
  let tx = (n = tA.exports) && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  function tD() {
    if (c) {
      return u;
    } else {
      c = 1;
      return u = th.EventEmitter;
    }
  }
  var tS = {};
  var tk = {};
  var t_ = {};
  function tT() {
    if (!f) {
      f = 1;
      (function (e) {
        var t = function () {
          if (h) {
            return tk;
          }
          h = 1;
          tk.byteLength = function (e) {
            var t = a(e);
            var r = t[0];
            var n = t[1];
            return (r + n) * 3 / 4 - n;
          };
          tk.toByteArray = function (e) {
            var n;
            var i;
            var o = a(e);
            var s = o[0];
            var l = o[1];
            var u = new r((s + l) * 3 / 4 - l);
            var c = 0;
            var h = l > 0 ? s - 4 : s;
            for (i = 0; i < h; i += 4) {
              n = t[e.charCodeAt(i)] << 18 | t[e.charCodeAt(i + 1)] << 12 | t[e.charCodeAt(i + 2)] << 6 | t[e.charCodeAt(i + 3)];
              u[c++] = n >> 16 & 255;
              u[c++] = n >> 8 & 255;
              u[c++] = n & 255;
            }
            if (l === 2) {
              n = t[e.charCodeAt(i)] << 2 | t[e.charCodeAt(i + 1)] >> 4;
              u[c++] = n & 255;
            }
            if (l === 1) {
              n = t[e.charCodeAt(i)] << 10 | t[e.charCodeAt(i + 1)] << 4 | t[e.charCodeAt(i + 2)] >> 2;
              u[c++] = n >> 8 & 255;
              u[c++] = n & 255;
            }
            return u;
          };
          tk.fromByteArray = function (t) {
            var r;
            var n = t.length;
            var i = n % 3;
            var o = [];
            var a = 0;
            var s = n - i;
            for (; a < s; a += 16383) {
              o.push(function (t, r, n) {
                var i;
                var o = [];
                var a = r;
                for (; a < n; a += 3) {
                  i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (t[a + 2] & 255);
                  o.push(e[i >> 18 & 63] + e[i >> 12 & 63] + e[i >> 6 & 63] + e[i & 63]);
                }
                return o.join("");
              }(t, a, a + 16383 > s ? s : a + 16383));
            }
            if (i === 1) {
              o.push(e[(r = t[n - 1]) >> 2] + e[r << 4 & 63] + "==");
            } else if (i === 2) {
              o.push(e[(r = (t[n - 2] << 8) + t[n - 1]) >> 10] + e[r >> 4 & 63] + e[r << 2 & 63] + "=");
            }
            return o.join("");
          };
          var e = [];
          var t = [];
          var r = typeof Uint8Array != "undefined" ? Uint8Array : Array;
          var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var i = 0;
          var o = n.length;
          for (; i < o; ++i) {
            e[i] = n[i];
            t[n.charCodeAt(i)] = i;
          }
          function a(e) {
            var t = e.length;
            if (t % 4 > 0) {
              throw Error("Invalid string. Length must be a multiple of 4");
            }
            var r = e.indexOf("=");
            if (r === -1) {
              r = t;
            }
            var n = r === t ? 0 : 4 - r % 4;
            return [r, n];
          }
          t["-".charCodeAt(0)] = 62;
          t["_".charCodeAt(0)] = 63;
          return tk;
        }();
        if (!d) {
          d = 1;
          t_.read = function (e, t, r, n, i) {
            var o;
            var a;
            var s = i * 8 - n - 1;
            var l = (1 << s) - 1;
            var u = l >> 1;
            var c = -7;
            var h = r ? i - 1 : 0;
            var d = r ? -1 : 1;
            var f = e[t + h];
            h += d;
            o = f & (1 << -c) - 1;
            f >>= -c;
            c += s;
            for (; c > 0; c -= 8) {
              o = o * 256 + e[t + h];
              h += d;
            }
            a = o & (1 << -c) - 1;
            o >>= -c;
            c += n;
            for (; c > 0; c -= 8) {
              a = a * 256 + e[t + h];
              h += d;
            }
            if (o === 0) {
              o = 1 - u;
            } else {
              if (o === l) {
                if (a) {
                  return NaN;
                } else {
                  return (f ? -1 : 1) * Infinity;
                }
              }
              a += Math.pow(2, n);
              o -= u;
            }
            return (f ? -1 : 1) * a * Math.pow(2, o - n);
          };
          t_.write = function (e, t, r, n, i, o) {
            var a;
            var s;
            var l;
            var u = o * 8 - i - 1;
            var c = (1 << u) - 1;
            var h = c >> 1;
            var d = (i === 23) * 5.960464477539062e-8;
            var f = n ? 0 : o - 1;
            var A = n ? 1 : -1;
            var g = +(t < 0 || t === 0 && 1 / t < 0);
            for (isNaN(t = Math.abs(t)) || t === Infinity ? (s = +!!isNaN(t), a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + h >= 1 ? t += d / l : t += d * Math.pow(2, 1 - h), t * l >= 2 && (a++, l /= 2), a + h >= c ? (s = 0, a = c) : a + h >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; i -= 8) {
              e[r + f] = s & 255;
              f += A;
              s /= 256;
            }
            a = a << i | s;
            u += i;
            for (; u > 0; u -= 8) {
              e[r + f] = a & 255;
              f += A;
              a /= 256;
            }
            e[r + f - A] |= g * 128;
          };
        }
        var r = t_;
        var n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        function i(e) {
          if (e > 2147483647) {
            throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
          }
          var t = new Uint8Array(e);
          Object.setPrototypeOf(t, o.prototype);
          return t;
        }
        function o(e, t, r) {
          if (typeof e == "number") {
            if (typeof t == "string") {
              throw TypeError("The \"string\" argument must be of type string. Received type number");
            }
            return l(e);
          }
          return a(e, t, r);
        }
        function a(e, t, r) {
          if (typeof e == "string") {
            return function (e, t) {
              if (typeof t != "string" || t === "") {
                t = "utf8";
              }
              if (!o.isEncoding(t)) {
                throw TypeError("Unknown encoding: " + t);
              }
              var r = A(e, t) | 0;
              var n = i(r);
              var a = n.write(e, t);
              if (a !== r) {
                n = n.slice(0, a);
              }
              return n;
            }(e, t);
          }
          if (ArrayBuffer.isView(e)) {
            return function (e) {
              if (k(e, Uint8Array)) {
                var t = new Uint8Array(e);
                return c(t.buffer, t.byteOffset, t.byteLength);
              }
              return u(e);
            }(e);
          }
          if (e == null) {
            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
          }
          if (k(e, ArrayBuffer) || e && k(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer != "undefined" && (k(e, SharedArrayBuffer) || e && k(e.buffer, SharedArrayBuffer))) {
            return c(e, t, r);
          }
          if (typeof e == "number") {
            throw TypeError("The \"value\" argument must not be of type number. Received type number");
          }
          var n = e.valueOf && e.valueOf();
          if (n != null && n !== e) {
            return o.from(n, t, r);
          }
          var a = function (e) {
            if (o.isBuffer(e)) {
              var t = f(e.length) | 0;
              var r = i(t);
              if (r.length !== 0) {
                e.copy(r, 0, 0, t);
              }
              return r;
            }
            if (e.length !== undefined) {
              if (typeof e.length != "number" || function (e) {
                return e != e;
              }(e.length)) {
                return i(0);
              } else {
                return u(e);
              }
            } else if (e.type === "Buffer" && Array.isArray(e.data)) {
              return u(e.data);
            } else {
              return undefined;
            }
          }(e);
          if (a) {
            return a;
          }
          if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") {
            return o.from(e[Symbol.toPrimitive]("string"), t, r);
          }
          throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        }
        function s(e) {
          if (typeof e != "number") {
            throw TypeError("\"size\" argument must be of type number");
          }
          if (e < 0) {
            throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
          }
        }
        function l(e) {
          s(e);
          return i(e < 0 ? 0 : f(e) | 0);
        }
        function u(e) {
          var t = e.length < 0 ? 0 : f(e.length) | 0;
          var r = i(t);
          var n = 0;
          for (; n < t; n += 1) {
            r[n] = e[n] & 255;
          }
          return r;
        }
        function c(e, t, r) {
          var n;
          if (t < 0 || e.byteLength < t) {
            throw RangeError("\"offset\" is outside of buffer bounds");
          }
          if (e.byteLength < t + (r || 0)) {
            throw RangeError("\"length\" is outside of buffer bounds");
          }
          Object.setPrototypeOf(n = t === undefined && r === undefined ? new Uint8Array(e) : r === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, r), o.prototype);
          return n;
        }
        function f(e) {
          if (e >= 2147483647) {
            throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
          }
          return e | 0;
        }
        function A(e, t) {
          if (o.isBuffer(e)) {
            return e.length;
          }
          if (ArrayBuffer.isView(e) || k(e, ArrayBuffer)) {
            return e.byteLength;
          }
          if (typeof e != "string") {
            throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
          }
          var r = e.length;
          var n = arguments.length > 2 && arguments[2] === true;
          if (!n && r === 0) {
            return 0;
          }
          var i = false;
          while (true) {
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
                return x(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return r * 2;
              case "hex":
                return r >>> 1;
              case "base64":
                return D(e).length;
              default:
                if (i) {
                  if (n) {
                    return -1;
                  } else {
                    return x(e).length;
                  }
                }
                t = ("" + t).toLowerCase();
                i = true;
            }
          }
        }
        function g(e, r, n) {
          var i;
          var o;
          var a;
          var s = false;
          if (r === undefined || r < 0) {
            r = 0;
          }
          if (r > this.length || ((n === undefined || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (r >>>= 0))) {
            return "";
          }
          for (e ||= "utf8";;) {
            switch (e) {
              case "hex":
                return function (e, t, r) {
                  var n = e.length;
                  if (!t || t < 0) {
                    t = 0;
                  }
                  if (!r || r < 0 || r > n) {
                    r = n;
                  }
                  var i = "";
                  var o = t;
                  for (; o < r; ++o) {
                    i += _[e[o]];
                  }
                  return i;
                }(this, r, n);
              case "utf8":
              case "utf-8":
                return v(this, r, n);
              case "ascii":
                return function (e, t, r) {
                  var n = "";
                  r = Math.min(e.length, r);
                  for (var i = t; i < r; ++i) {
                    n += String.fromCharCode(e[i] & 127);
                  }
                  return n;
                }(this, r, n);
              case "latin1":
              case "binary":
                return function (e, t, r) {
                  var n = "";
                  r = Math.min(e.length, r);
                  for (var i = t; i < r; ++i) {
                    n += String.fromCharCode(e[i]);
                  }
                  return n;
                }(this, r, n);
              case "base64":
                i = this;
                o = r;
                a = n;
                if (o === 0 && a === i.length) {
                  return t.fromByteArray(i);
                } else {
                  return t.fromByteArray(i.slice(o, a));
                }
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return function (e, t, r) {
                  var n = e.slice(t, r);
                  var i = "";
                  var o = 0;
                  for (; o < n.length - 1; o += 2) {
                    i += String.fromCharCode(n[o] + n[o + 1] * 256);
                  }
                  return i;
                }(this, r, n);
              default:
                if (s) {
                  throw TypeError("Unknown encoding: " + e);
                }
                e = (e + "").toLowerCase();
                s = true;
            }
          }
        }
        function p(e, t, r) {
          var n = e[t];
          e[t] = e[r];
          e[r] = n;
        }
        function m(e, t, r, n, i) {
          var a;
          if (e.length === 0) {
            return -1;
          }
          if (typeof r == "string") {
            n = r;
            r = 0;
          } else if (r > 2147483647) {
            r = 2147483647;
          } else if (r < -2147483648) {
            r = -2147483648;
          }
          if ((a = r *= 1) != a) {
            r = i ? 0 : e.length - 1;
          }
          if (r < 0) {
            r = e.length + r;
          }
          if (r >= e.length) {
            if (i) {
              return -1;
            }
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) {
              return -1;
            }
            r = 0;
          }
          if (typeof t == "string") {
            t = o.from(t, n);
          }
          if (o.isBuffer(t)) {
            if (t.length === 0) {
              return -1;
            } else {
              return y(e, t, r, n, i);
            }
          }
          if (typeof t == "number") {
            t &= 255;
            if (typeof Uint8Array.prototype.indexOf == "function") {
              if (i) {
                return Uint8Array.prototype.indexOf.call(e, t, r);
              } else {
                return Uint8Array.prototype.lastIndexOf.call(e, t, r);
              }
            } else {
              return y(e, [t], r, n, i);
            }
          }
          throw TypeError("val must be string, number or Buffer");
        }
        function y(e, t, r, n, i) {
          var o;
          var a = 1;
          var s = e.length;
          var l = t.length;
          if (n !== undefined && ((n = String(n).toLowerCase()) === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (e.length < 2 || t.length < 2) {
              return -1;
            }
            a = 2;
            s /= 2;
            l /= 2;
            r /= 2;
          }
          function u(e, t) {
            if (a === 1) {
              return e[t];
            } else {
              return e.readUInt16BE(t * a);
            }
          }
          if (i) {
            var c = -1;
            for (o = r; o < s; o++) {
              if (u(e, o) === u(t, c === -1 ? 0 : o - c)) {
                if (c === -1) {
                  c = o;
                }
                if (o - c + 1 === l) {
                  return c * a;
                }
              } else {
                if (c !== -1) {
                  o -= o - c;
                }
                c = -1;
              }
            }
          } else {
            if (r + l > s) {
              r = s - l;
            }
            o = r;
            for (; o >= 0; o--) {
              var h = true;
              var d = 0;
              for (; d < l; d++) {
                if (u(e, o + d) !== u(t, d)) {
                  h = false;
                  break;
                }
              }
              if (h) {
                return o;
              }
            }
          }
          return -1;
        }
        function v(e, t, r) {
          r = Math.min(e.length, r);
          var n = [];
          var i = t;
          while (i < r) {
            var o;
            var a;
            var s;
            var l;
            var u = e[i];
            var c = null;
            var h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + h <= r) {
              switch (h) {
                case 1:
                  if (u < 128) {
                    c = u;
                  }
                  break;
                case 2:
                  if (((o = e[i + 1]) & 192) == 128 && (l = (u & 31) << 6 | o & 63) > 127) {
                    c = l;
                  }
                  break;
                case 3:
                  o = e[i + 1];
                  a = e[i + 2];
                  if ((o & 192) == 128 && (a & 192) == 128 && (l = (u & 15) << 12 | (o & 63) << 6 | a & 63) > 2047 && (l < 55296 || l > 57343)) {
                    c = l;
                  }
                  break;
                case 4:
                  o = e[i + 1];
                  a = e[i + 2];
                  s = e[i + 3];
                  if ((o & 192) == 128 && (a & 192) == 128 && (s & 192) == 128 && (l = (u & 15) << 18 | (o & 63) << 12 | (a & 63) << 6 | s & 63) > 65535 && l < 1114112) {
                    c = l;
                  }
              }
            }
            if (c === null) {
              c = 65533;
              h = 1;
            } else if (c > 65535) {
              c -= 65536;
              n.push(c >>> 10 & 1023 | 55296);
              c = c & 1023 | 56320;
            }
            n.push(c);
            i += h;
          }
          return function (e) {
            var t = e.length;
            if (t <= 4096) {
              return String.fromCharCode.apply(String, e);
            }
            var r = "";
            var n = 0;
            while (n < t) {
              r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
            }
            return r;
          }(n);
        }
        function b(e, t, r) {
          if (e % 1 != 0 || e < 0) {
            throw RangeError("offset is not uint");
          }
          if (e + t > r) {
            throw RangeError("Trying to access beyond buffer length");
          }
        }
        function w(e, t, r, n, i, a) {
          if (!o.isBuffer(e)) {
            throw TypeError("\"buffer\" argument must be a Buffer instance");
          }
          if (t > i || t < a) {
            throw RangeError("\"value\" argument is out of bounds");
          }
          if (r + n > e.length) {
            throw RangeError("Index out of range");
          }
        }
        function C(e, t, r, n, i, o) {
          if (r + n > e.length || r < 0) {
            throw RangeError("Index out of range");
          }
        }
        function E(e, t, n, i, o) {
          t *= 1;
          n >>>= 0;
          if (!o) {
            C(e, t, n, 4);
          }
          r.write(e, t, n, i, 23, 4);
          return n + 4;
        }
        function I(e, t, n, i, o) {
          t *= 1;
          n >>>= 0;
          if (!o) {
            C(e, t, n, 8);
          }
          r.write(e, t, n, i, 52, 8);
          return n + 8;
        }
        e.Buffer = o;
        e.SlowBuffer = function (e) {
          if (+e != e) {
            e = 0;
          }
          return o.alloc(+e);
        };
        e.INSPECT_MAX_BYTES = 50;
        e.kMaxLength = 2147483647;
        o.TYPED_ARRAY_SUPPORT = function () {
          try {
            var e = new Uint8Array(1);
            var t = {
              foo: function () {
                return 42;
              }
            };
            Object.setPrototypeOf(t, Uint8Array.prototype);
            Object.setPrototypeOf(e, t);
            return e.foo() === 42;
          } catch (e) {
            return false;
          }
        }();
        o.TYPED_ARRAY_SUPPORT;
        Object.defineProperty(o.prototype, "parent", {
          enumerable: true,
          get: function () {
            if (o.isBuffer(this)) {
              return this.buffer;
            }
          }
        });
        Object.defineProperty(o.prototype, "offset", {
          enumerable: true,
          get: function () {
            if (o.isBuffer(this)) {
              return this.byteOffset;
            }
          }
        });
        o.poolSize = 8192;
        o.from = function (e, t, r) {
          return a(e, t, r);
        };
        Object.setPrototypeOf(o.prototype, Uint8Array.prototype);
        Object.setPrototypeOf(o, Uint8Array);
        o.alloc = function (e, t, r) {
          s(e);
          if (e <= 0) {
            return i(e);
          } else if (t !== undefined) {
            if (typeof r == "string") {
              return i(e).fill(t, r);
            } else {
              return i(e).fill(t);
            }
          } else {
            return i(e);
          }
        };
        o.allocUnsafe = function (e) {
          return l(e);
        };
        o.allocUnsafeSlow = function (e) {
          return l(e);
        };
        o.isBuffer = function (e) {
          return e != null && e._isBuffer === true && e !== o.prototype;
        };
        o.compare = function (e, t) {
          if (k(e, Uint8Array)) {
            e = o.from(e, e.offset, e.byteLength);
          }
          if (k(t, Uint8Array)) {
            t = o.from(t, t.offset, t.byteLength);
          }
          if (!o.isBuffer(e) || !o.isBuffer(t)) {
            throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
          }
          if (e === t) {
            return 0;
          }
          var r = e.length;
          var n = t.length;
          var i = 0;
          var a = Math.min(r, n);
          for (; i < a; ++i) {
            if (e[i] !== t[i]) {
              r = e[i];
              n = t[i];
              break;
            }
          }
          if (r < n) {
            return -1;
          } else {
            return +(n < r);
          }
        };
        o.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        };
        o.concat = function (e, t) {
          if (!Array.isArray(e)) {
            throw TypeError("\"list\" argument must be an Array of Buffers");
          }
          if (e.length === 0) {
            return o.alloc(0);
          }
          if (t === undefined) {
            r = 0;
            t = 0;
            for (; r < e.length; ++r) {
              t += e[r].length;
            }
          }
          var r;
          var n = o.allocUnsafe(t);
          var i = 0;
          for (r = 0; r < e.length; ++r) {
            var a = e[r];
            if (k(a, Uint8Array)) {
              if (i + a.length > n.length) {
                o.from(a).copy(n, i);
              } else {
                Uint8Array.prototype.set.call(n, a, i);
              }
            } else if (o.isBuffer(a)) {
              a.copy(n, i);
            } else {
              throw TypeError("\"list\" argument must be an Array of Buffers");
            }
            i += a.length;
          }
          return n;
        };
        o.byteLength = A;
        o.prototype._isBuffer = true;
        o.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) {
            throw RangeError("Buffer size must be a multiple of 16-bits");
          }
          for (var t = 0; t < e; t += 2) {
            p(this, t, t + 1);
          }
          return this;
        };
        o.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) {
            throw RangeError("Buffer size must be a multiple of 32-bits");
          }
          for (var t = 0; t < e; t += 4) {
            p(this, t, t + 3);
            p(this, t + 1, t + 2);
          }
          return this;
        };
        o.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) {
            throw RangeError("Buffer size must be a multiple of 64-bits");
          }
          for (var t = 0; t < e; t += 8) {
            p(this, t, t + 7);
            p(this, t + 1, t + 6);
            p(this, t + 2, t + 5);
            p(this, t + 3, t + 4);
          }
          return this;
        };
        o.prototype.toString = function () {
          var e = this.length;
          if (e === 0) {
            return "";
          } else if (arguments.length == 0) {
            return v(this, 0, e);
          } else {
            return g.apply(this, arguments);
          }
        };
        o.prototype.toLocaleString = o.prototype.toString;
        o.prototype.equals = function (e) {
          if (!o.isBuffer(e)) {
            throw TypeError("Argument must be a Buffer");
          }
          return this === e || o.compare(this, e) === 0;
        };
        o.prototype.inspect = function () {
          var t = "";
          var r = e.INSPECT_MAX_BYTES;
          t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim();
          if (this.length > r) {
            t += " ... ";
          }
          return "<Buffer " + t + ">";
        };
        if (n) {
          o.prototype[n] = o.prototype.inspect;
        }
        o.prototype.compare = function (e, t, r, n, i) {
          if (k(e, Uint8Array)) {
            e = o.from(e, e.offset, e.byteLength);
          }
          if (!o.isBuffer(e)) {
            throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
          }
          if (t === undefined) {
            t = 0;
          }
          if (r === undefined) {
            r = e ? e.length : 0;
          }
          if (n === undefined) {
            n = 0;
          }
          if (i === undefined) {
            i = this.length;
          }
          if (t < 0 || r > e.length || n < 0 || i > this.length) {
            throw RangeError("out of range index");
          }
          if (n >= i && t >= r) {
            return 0;
          }
          if (n >= i) {
            return -1;
          }
          if (t >= r) {
            return 1;
          }
          t >>>= 0;
          r >>>= 0;
          n >>>= 0;
          i >>>= 0;
          if (this === e) {
            return 0;
          }
          var a = i - n;
          var s = r - t;
          var l = Math.min(a, s);
          var u = this.slice(n, i);
          var c = e.slice(t, r);
          var h = 0;
          for (; h < l; ++h) {
            if (u[h] !== c[h]) {
              a = u[h];
              s = c[h];
              break;
            }
          }
          if (a < s) {
            return -1;
          } else {
            return +(s < a);
          }
        };
        o.prototype.includes = function (e, t, r) {
          return this.indexOf(e, t, r) !== -1;
        };
        o.prototype.indexOf = function (e, t, r) {
          return m(this, e, t, r, true);
        };
        o.prototype.lastIndexOf = function (e, t, r) {
          return m(this, e, t, r, false);
        };
        o.prototype.write = function (e, t, r, n) {
          if (t === undefined) {
            n = "utf8";
            r = this.length;
            t = 0;
          } else if (r === undefined && typeof t == "string") {
            n = t;
            r = this.length;
            t = 0;
          } else if (isFinite(t)) {
            t >>>= 0;
            if (isFinite(r)) {
              r >>>= 0;
              if (n === undefined) {
                n = "utf8";
              }
            } else {
              n = r;
              r = undefined;
            }
          } else {
            throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          }
          var i;
          var o;
          var a;
          var s;
          var l;
          var u;
          var c;
          var h;
          var d = this.length - t;
          if (r === undefined || r > d) {
            r = d;
          }
          if (e.length > 0 && (r < 0 || t < 0) || t > this.length) {
            throw RangeError("Attempt to write outside buffer bounds");
          }
          n ||= "utf8";
          var f = false;
          while (true) {
            switch (n) {
              case "hex":
                return function (e, t, r, n) {
                  r = Number(r) || 0;
                  var i = e.length - r;
                  if (n) {
                    if ((n = Number(n)) > i) {
                      n = i;
                    }
                  } else {
                    n = i;
                  }
                  var o = t.length;
                  if (n > o / 2) {
                    n = o / 2;
                  }
                  for (var a = 0; a < n; ++a) {
                    var s;
                    var l = parseInt(t.substr(a * 2, 2), 16);
                    if ((s = l) != s) {
                      break;
                    }
                    e[r + a] = l;
                  }
                  return a;
                }(this, e, t, r);
              case "utf8":
              case "utf-8":
                i = t;
                o = r;
                return S(x(e, this.length - i), this, i, o);
              case "ascii":
              case "latin1":
              case "binary":
                a = t;
                s = r;
                return S(function (e) {
                  var t = [];
                  var r = 0;
                  for (; r < e.length; ++r) {
                    t.push(e.charCodeAt(r) & 255);
                  }
                  return t;
                }(e), this, a, s);
              case "base64":
                l = t;
                u = r;
                return S(D(e), this, l, u);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                c = t;
                h = r;
                return S(function (e, t) {
                  var r;
                  var n;
                  var i = [];
                  var o = 0;
                  for (; o < e.length && !((t -= 2) < 0); ++o) {
                    n = (r = e.charCodeAt(o)) >> 8;
                    i.push(r % 256);
                    i.push(n);
                  }
                  return i;
                }(e, this.length - c), this, c, h);
              default:
                if (f) {
                  throw TypeError("Unknown encoding: " + n);
                }
                n = ("" + n).toLowerCase();
                f = true;
            }
          }
        };
        o.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        o.prototype.slice = function (e, t) {
          var r = this.length;
          e = ~~e;
          t = t === undefined ? r : ~~t;
          if (e < 0) {
            if ((e += r) < 0) {
              e = 0;
            }
          } else if (e > r) {
            e = r;
          }
          if (t < 0) {
            if ((t += r) < 0) {
              t = 0;
            }
          } else if (t > r) {
            t = r;
          }
          if (t < e) {
            t = e;
          }
          var n = this.subarray(e, t);
          Object.setPrototypeOf(n, o.prototype);
          return n;
        };
        o.prototype.readUintLE = o.prototype.readUIntLE = function (e, t, r) {
          e >>>= 0;
          t >>>= 0;
          if (!r) {
            b(e, t, this.length);
          }
          var n = this[e];
          var i = 1;
          var o = 0;
          while (++o < t && (i *= 256)) {
            n += this[e + o] * i;
          }
          return n;
        };
        o.prototype.readUintBE = o.prototype.readUIntBE = function (e, t, r) {
          e >>>= 0;
          t >>>= 0;
          if (!r) {
            b(e, t, this.length);
          }
          var n = this[e + --t];
          var i = 1;
          while (t > 0 && (i *= 256)) {
            n += this[e + --t] * i;
          }
          return n;
        };
        o.prototype.readUint8 = o.prototype.readUInt8 = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 1, this.length);
          }
          return this[e];
        };
        o.prototype.readUint16LE = o.prototype.readUInt16LE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 2, this.length);
          }
          return this[e] | this[e + 1] << 8;
        };
        o.prototype.readUint16BE = o.prototype.readUInt16BE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 2, this.length);
          }
          return this[e] << 8 | this[e + 1];
        };
        o.prototype.readUint32LE = o.prototype.readUInt32LE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 4, this.length);
          }
          return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
        };
        o.prototype.readUint32BE = o.prototype.readUInt32BE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 4, this.length);
          }
          return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        };
        o.prototype.readIntLE = function (e, t, r) {
          e >>>= 0;
          t >>>= 0;
          if (!r) {
            b(e, t, this.length);
          }
          var n = this[e];
          var i = 1;
          var o = 0;
          while (++o < t && (i *= 256)) {
            n += this[e + o] * i;
          }
          if (n >= (i *= 128)) {
            n -= Math.pow(2, t * 8);
          }
          return n;
        };
        o.prototype.readIntBE = function (e, t, r) {
          e >>>= 0;
          t >>>= 0;
          if (!r) {
            b(e, t, this.length);
          }
          var n = t;
          var i = 1;
          var o = this[e + --n];
          while (n > 0 && (i *= 256)) {
            o += this[e + --n] * i;
          }
          if (o >= (i *= 128)) {
            o -= Math.pow(2, t * 8);
          }
          return o;
        };
        o.prototype.readInt8 = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 1, this.length);
          }
          if (this[e] & 128) {
            return -((255 - this[e] + 1) * 1);
          } else {
            return this[e];
          }
        };
        o.prototype.readInt16LE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 2, this.length);
          }
          var r = this[e] | this[e + 1] << 8;
          if (r & 32768) {
            return r | -65536;
          } else {
            return r;
          }
        };
        o.prototype.readInt16BE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 2, this.length);
          }
          var r = this[e + 1] | this[e] << 8;
          if (r & 32768) {
            return r | -65536;
          } else {
            return r;
          }
        };
        o.prototype.readInt32LE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 4, this.length);
          }
          return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        };
        o.prototype.readInt32BE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 4, this.length);
          }
          return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        };
        o.prototype.readFloatLE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 4, this.length);
          }
          return r.read(this, e, true, 23, 4);
        };
        o.prototype.readFloatBE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 4, this.length);
          }
          return r.read(this, e, false, 23, 4);
        };
        o.prototype.readDoubleLE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 8, this.length);
          }
          return r.read(this, e, true, 52, 8);
        };
        o.prototype.readDoubleBE = function (e, t) {
          e >>>= 0;
          if (!t) {
            b(e, 8, this.length);
          }
          return r.read(this, e, false, 52, 8);
        };
        o.prototype.writeUintLE = o.prototype.writeUIntLE = function (e, t, r, n) {
          e *= 1;
          t >>>= 0;
          r >>>= 0;
          if (!n) {
            var i = Math.pow(2, r * 8) - 1;
            w(this, e, t, r, i, 0);
          }
          var o = 1;
          var a = 0;
          for (this[t] = e & 255; ++a < r && (o *= 256);) {
            this[t + a] = e / o & 255;
          }
          return t + r;
        };
        o.prototype.writeUintBE = o.prototype.writeUIntBE = function (e, t, r, n) {
          e *= 1;
          t >>>= 0;
          r >>>= 0;
          if (!n) {
            var i = Math.pow(2, r * 8) - 1;
            w(this, e, t, r, i, 0);
          }
          var o = r - 1;
          var a = 1;
          for (this[t + o] = e & 255; --o >= 0 && (a *= 256);) {
            this[t + o] = e / a & 255;
          }
          return t + r;
        };
        o.prototype.writeUint8 = o.prototype.writeUInt8 = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 1, 255, 0);
          }
          this[t] = e & 255;
          return t + 1;
        };
        o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 2, 65535, 0);
          }
          this[t] = e & 255;
          this[t + 1] = e >>> 8;
          return t + 2;
        };
        o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 2, 65535, 0);
          }
          this[t] = e >>> 8;
          this[t + 1] = e & 255;
          return t + 2;
        };
        o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 4, 4294967295, 0);
          }
          this[t + 3] = e >>> 24;
          this[t + 2] = e >>> 16;
          this[t + 1] = e >>> 8;
          this[t] = e & 255;
          return t + 4;
        };
        o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 4, 4294967295, 0);
          }
          this[t] = e >>> 24;
          this[t + 1] = e >>> 16;
          this[t + 2] = e >>> 8;
          this[t + 3] = e & 255;
          return t + 4;
        };
        o.prototype.writeIntLE = function (e, t, r, n) {
          e *= 1;
          t >>>= 0;
          if (!n) {
            var i = Math.pow(2, r * 8 - 1);
            w(this, e, t, r, i - 1, -i);
          }
          var o = 0;
          var a = 1;
          var s = 0;
          for (this[t] = e & 255; ++o < r && (a *= 256);) {
            if (e < 0 && s === 0 && this[t + o - 1] !== 0) {
              s = 1;
            }
            this[t + o] = (e / a >> 0) - s & 255;
          }
          return t + r;
        };
        o.prototype.writeIntBE = function (e, t, r, n) {
          e *= 1;
          t >>>= 0;
          if (!n) {
            var i = Math.pow(2, r * 8 - 1);
            w(this, e, t, r, i - 1, -i);
          }
          var o = r - 1;
          var a = 1;
          var s = 0;
          for (this[t + o] = e & 255; --o >= 0 && (a *= 256);) {
            if (e < 0 && s === 0 && this[t + o + 1] !== 0) {
              s = 1;
            }
            this[t + o] = (e / a >> 0) - s & 255;
          }
          return t + r;
        };
        o.prototype.writeInt8 = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 1, 127, -128);
          }
          if (e < 0) {
            e = 255 + e + 1;
          }
          this[t] = e & 255;
          return t + 1;
        };
        o.prototype.writeInt16LE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 2, 32767, -32768);
          }
          this[t] = e & 255;
          this[t + 1] = e >>> 8;
          return t + 2;
        };
        o.prototype.writeInt16BE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 2, 32767, -32768);
          }
          this[t] = e >>> 8;
          this[t + 1] = e & 255;
          return t + 2;
        };
        o.prototype.writeInt32LE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 4, 2147483647, -2147483648);
          }
          this[t] = e & 255;
          this[t + 1] = e >>> 8;
          this[t + 2] = e >>> 16;
          this[t + 3] = e >>> 24;
          return t + 4;
        };
        o.prototype.writeInt32BE = function (e, t, r) {
          e *= 1;
          t >>>= 0;
          if (!r) {
            w(this, e, t, 4, 2147483647, -2147483648);
          }
          if (e < 0) {
            e = 4294967295 + e + 1;
          }
          this[t] = e >>> 24;
          this[t + 1] = e >>> 16;
          this[t + 2] = e >>> 8;
          this[t + 3] = e & 255;
          return t + 4;
        };
        o.prototype.writeFloatLE = function (e, t, r) {
          return E(this, e, t, true, r);
        };
        o.prototype.writeFloatBE = function (e, t, r) {
          return E(this, e, t, false, r);
        };
        o.prototype.writeDoubleLE = function (e, t, r) {
          return I(this, e, t, true, r);
        };
        o.prototype.writeDoubleBE = function (e, t, r) {
          return I(this, e, t, false, r);
        };
        o.prototype.copy = function (e, t, r, n) {
          if (!o.isBuffer(e)) {
            throw TypeError("argument should be a Buffer");
          }
          r ||= 0;
          if (!n && n !== 0) {
            n = this.length;
          }
          if (t >= e.length) {
            t = e.length;
          }
          t ||= 0;
          if (n > 0 && n < r) {
            n = r;
          }
          if (n === r || e.length === 0 || this.length === 0) {
            return 0;
          }
          if (t < 0) {
            throw RangeError("targetStart out of bounds");
          }
          if (r < 0 || r >= this.length) {
            throw RangeError("Index out of range");
          }
          if (n < 0) {
            throw RangeError("sourceEnd out of bounds");
          }
          if (n > this.length) {
            n = this.length;
          }
          if (e.length - t < n - r) {
            n = e.length - t + r;
          }
          var i = n - r;
          if (this === e && typeof Uint8Array.prototype.copyWithin == "function") {
            this.copyWithin(t, r, n);
          } else {
            Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
          }
          return i;
        };
        o.prototype.fill = function (e, t, r, n) {
          if (typeof e == "string") {
            if (typeof t == "string") {
              n = t;
              t = 0;
              r = this.length;
            } else if (typeof r == "string") {
              n = r;
              r = this.length;
            }
            if (n !== undefined && typeof n != "string") {
              throw TypeError("encoding must be a string");
            }
            if (typeof n == "string" && !o.isEncoding(n)) {
              throw TypeError("Unknown encoding: " + n);
            }
            if (e.length === 1) {
              var i;
              var a = e.charCodeAt(0);
              if (n === "utf8" && a < 128 || n === "latin1") {
                e = a;
              }
            }
          } else if (typeof e == "number") {
            e &= 255;
          } else if (typeof e == "boolean") {
            e = Number(e);
          }
          if (t < 0 || this.length < t || this.length < r) {
            throw RangeError("Out of range index");
          }
          if (r <= t) {
            return this;
          }
          t >>>= 0;
          r = r === undefined ? this.length : r >>> 0;
          e ||= 0;
          if (typeof e == "number") {
            for (i = t; i < r; ++i) {
              this[i] = e;
            }
          } else {
            var s = o.isBuffer(e) ? e : o.from(e, n);
            var l = s.length;
            if (l === 0) {
              throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
            }
            for (i = 0; i < r - t; ++i) {
              this[i + t] = s[i % l];
            }
          }
          return this;
        };
        var B = /[^+/0-9A-Za-z-_]/g;
        function x(e, t) {
          t = t || Infinity;
          var r;
          var n = e.length;
          var i = null;
          var o = [];
          var a = 0;
          for (; a < n; ++a) {
            if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319 || a + 1 === n) {
                  if ((t -= 3) > -1) {
                    o.push(239, 191, 189);
                  }
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                if ((t -= 3) > -1) {
                  o.push(239, 191, 189);
                }
                i = r;
                continue;
              }
              r = (i - 55296 << 10 | r - 56320) + 65536;
            } else if (i && (t -= 3) > -1) {
              o.push(239, 191, 189);
            }
            i = null;
            if (r < 128) {
              if ((t -= 1) < 0) {
                break;
              }
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) {
                break;
              }
              o.push(r >> 6 | 192, r & 63 | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) {
                break;
              }
              o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
            } else if (r < 1114112) {
              if ((t -= 4) < 0) {
                break;
              }
              o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
            } else {
              throw Error("Invalid code point");
            }
          }
          return o;
        }
        function D(e) {
          return t.toByteArray(function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(B, "")).length < 2) {
              return "";
            }
            while (e.length % 4 != 0) {
              e += "=";
            }
            return e;
          }(e));
        }
        function S(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) {
            t[i + r] = e[i];
          }
          return i;
        }
        function k(e, t) {
          return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
        }
        var _ = function () {
          var e = "0123456789abcdef";
          var t = Array(256);
          var r = 0;
          for (; r < 16; ++r) {
            var n = r * 16;
            var i = 0;
            for (; i < 16; ++i) {
              t[n + i] = e[r] + e[i];
            }
          }
          return t;
        }();
      })(tS);
    }
    return tS;
  }
  var tQ = {};
  var tR = {};
  function tF() {
    if (g) {
      return A;
    } else {
      g = 1;
      return A = function () {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
          return false;
        }
        if (typeof Symbol.iterator == "symbol") {
          return true;
        }
        var e = {};
        var t = Symbol("test");
        var r = Object(t);
        if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") {
          return false;
        }
        e[t] = 42;
        for (t in e) {
          return false;
        }
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) {
          return false;
        }
        var n = Object.getOwnPropertySymbols(e);
        if (n.length !== 1 || n[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var i = Object.getOwnPropertyDescriptor(e, t);
          if (i.value !== 42 || i.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  }
  function tL() {
    if (m) {
      return p;
    }
    m = 1;
    var e = tF();
    return p = function () {
      return e() && !!Symbol.toStringTag;
    };
  }
  function tO() {
    if (B) {
      return I;
    }
    B = 1;
    var e = function () {
      if (E) {
        return C;
      }
      E = 1;
      var e = Object.prototype.toString;
      var t = Math.max;
      function r(e, t) {
        var r = [];
        var n = 0;
        for (; n < e.length; n += 1) {
          r[n] = e[n];
        }
        for (var i = 0; i < t.length; i += 1) {
          r[i + e.length] = t[i];
        }
        return r;
      }
      function n(e, t) {
        var r = [];
        var n = t || 0;
        var i = 0;
        for (; n < e.length; n += 1, i += 1) {
          r[i] = e[n];
        }
        return r;
      }
      function i(e, t) {
        var r = "";
        var n = 0;
        for (; n < e.length; n += 1) {
          r += e[n];
          if (n + 1 < e.length) {
            r += t;
          }
        }
        return r;
      }
      return C = function (o) {
        var a;
        var s = this;
        if (typeof s != "function" || e.apply(s) !== "[object Function]") {
          throw TypeError("Function.prototype.bind called on incompatible " + s);
        }
        var l = n(arguments, 1);
        var u = t(0, s.length - l.length);
        var c = [];
        var h = 0;
        for (; h < u; h++) {
          c[h] = "$" + h;
        }
        a = Function("binder", "return function (" + i(c, ",") + "){ return binder.apply(this,arguments); }")(function () {
          if (this instanceof a) {
            var e = s.apply(this, r(l, arguments));
            if (Object(e) === e) {
              return e;
            } else {
              return this;
            }
          }
          return s.apply(o, r(l, arguments));
        });
        if (s.prototype) {
          function d() {}
          d.prototype = s.prototype;
          a.prototype = new d();
          d.prototype = null;
        }
        return a;
      };
    }();
    return I = Function.prototype.bind || e;
  }
  function tN() {
    if (k) {
      return S;
    }
    k = 1;
    var e;
    var t = SyntaxError;
    var r = Function;
    var n = TypeError;
    function i(e) {
      try {
        return r("\"use strict\"; return (" + e + ").constructor;")();
      } catch (e) {}
    }
    var o = Object.getOwnPropertyDescriptor;
    if (o) {
      try {
        o({}, "");
      } catch (e) {
        o = null;
      }
    }
    function a() {
      throw new n();
    }
    var s = o ? function () {
      try {
        arguments.callee;
        return a;
      } catch (e) {
        try {
          return o(arguments, "callee").get;
        } catch (e) {
          return a;
        }
      }
    }() : a;
    var l = function () {
      if (v) {
        return y;
      }
      v = 1;
      var e = typeof Symbol != "undefined" && Symbol;
      var t = tF();
      return y = function () {
        return typeof e == "function" && typeof Symbol == "function" && typeof e("foo") == "symbol" && typeof Symbol("bar") == "symbol" && t();
      };
    }()();
    var u = function () {
      if (w) {
        return b;
      }
      w = 1;
      var e = {
        foo: {}
      };
      var t = Object;
      return b = function () {
        return {
          __proto__: e
        }.foo === e.foo && !({
          __proto__: null
        } instanceof t);
      };
    }()();
    var c = Object.getPrototypeOf || (u ? function (e) {
      return e.__proto__;
    } : null);
    var h = {};
    var d = typeof Uint8Array != "undefined" && c ? c(Uint8Array) : e;
    var f = {
      "%AggregateError%": typeof AggregateError == "undefined" ? e : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? e : ArrayBuffer,
      "%ArrayIteratorPrototype%": l && c ? c([][Symbol.iterator]()) : e,
      "%AsyncFromSyncIteratorPrototype%": e,
      "%AsyncFunction%": h,
      "%AsyncGenerator%": h,
      "%AsyncGeneratorFunction%": h,
      "%AsyncIteratorPrototype%": h,
      "%Atomics%": typeof Atomics == "undefined" ? e : Atomics,
      "%BigInt%": typeof BigInt == "undefined" ? e : BigInt,
      "%BigInt64Array%": typeof BigInt64Array == "undefined" ? e : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array == "undefined" ? e : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView == "undefined" ? e : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array == "undefined" ? e : Float32Array,
      "%Float64Array%": typeof Float64Array == "undefined" ? e : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? e : FinalizationRegistry,
      "%Function%": r,
      "%GeneratorFunction%": h,
      "%Int8Array%": typeof Int8Array == "undefined" ? e : Int8Array,
      "%Int16Array%": typeof Int16Array == "undefined" ? e : Int16Array,
      "%Int32Array%": typeof Int32Array == "undefined" ? e : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": l && c ? c(c([][Symbol.iterator]())) : e,
      "%JSON%": typeof JSON == "object" ? JSON : e,
      "%Map%": typeof Map == "undefined" ? e : Map,
      "%MapIteratorPrototype%": typeof Map != "undefined" && l && c ? c(new Map()[Symbol.iterator]()) : e,
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise == "undefined" ? e : Promise,
      "%Proxy%": typeof Proxy == "undefined" ? e : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect == "undefined" ? e : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set == "undefined" ? e : Set,
      "%SetIteratorPrototype%": typeof Set != "undefined" && l && c ? c(new Set()[Symbol.iterator]()) : e,
      "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? e : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": l && c ? c(""[Symbol.iterator]()) : e,
      "%Symbol%": l ? Symbol : e,
      "%SyntaxError%": t,
      "%ThrowTypeError%": s,
      "%TypedArray%": d,
      "%TypeError%": n,
      "%Uint8Array%": typeof Uint8Array == "undefined" ? e : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? e : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array == "undefined" ? e : Uint16Array,
      "%Uint32Array%": typeof Uint32Array == "undefined" ? e : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap == "undefined" ? e : WeakMap,
      "%WeakRef%": typeof WeakRef == "undefined" ? e : WeakRef,
      "%WeakSet%": typeof WeakSet == "undefined" ? e : WeakSet
    };
    if (c) {
      try {
        null.error;
      } catch (e) {
        var A = c(c(e));
        f["%Error.prototype%"] = A;
      }
    }
    var g = function e(t) {
      var r;
      if (t === "%AsyncFunction%") {
        r = i("async function () {}");
      } else if (t === "%GeneratorFunction%") {
        r = i("function* () {}");
      } else if (t === "%AsyncGeneratorFunction%") {
        r = i("async function* () {}");
      } else if (t === "%AsyncGenerator%") {
        var n = e("%AsyncGeneratorFunction%");
        if (n) {
          r = n.prototype;
        }
      } else if (t === "%AsyncIteratorPrototype%") {
        var o = e("%AsyncGenerator%");
        if (o && c) {
          r = c(o.prototype);
        }
      }
      f[t] = r;
      return r;
    };
    var p = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var m = tO();
    var C = function () {
      if (D) {
        return x;
      }
      D = 1;
      var e = Function.prototype.call;
      var t = Object.prototype.hasOwnProperty;
      return x = tO().call(e, t);
    }();
    var E = m.call(Function.call, Array.prototype.concat);
    var I = m.call(Function.apply, Array.prototype.splice);
    var B = m.call(Function.call, String.prototype.replace);
    var _ = m.call(Function.call, String.prototype.slice);
    var T = m.call(Function.call, RegExp.prototype.exec);
    var Q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var R = /\\(\\)?/g;
    function F(e) {
      var r = _(e, 0, 1);
      var n = _(e, -1);
      if (r === "%" && n !== "%") {
        throw new t("invalid intrinsic syntax, expected closing `%`");
      }
      if (n === "%" && r !== "%") {
        throw new t("invalid intrinsic syntax, expected opening `%`");
      }
      var i = [];
      B(e, Q, function (e, t, r, n) {
        i[i.length] = r ? B(n, R, "$1") : t || e;
      });
      return i;
    }
    function L(e, r) {
      var i;
      var o = e;
      if (C(p, o)) {
        o = "%" + (i = p[o])[0] + "%";
      }
      if (C(f, o)) {
        var a = f[o];
        if (a === h) {
          a = g(o);
        }
        if (a === undefined && !r) {
          throw new n("intrinsic " + e + " exists, but is not available. Please file an issue!");
        }
        return {
          alias: i,
          name: o,
          value: a
        };
      }
      throw new t("intrinsic " + e + " does not exist!");
    }
    return S = function (e, r) {
      if (typeof e != "string" || e.length === 0) {
        throw new n("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof r != "boolean") {
        throw new n("\"allowMissing\" argument must be a boolean");
      }
      if (T(/^%?[^%]*%?$/, e) === null) {
        throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var i = F(e);
      var a = i.length > 0 ? i[0] : "";
      var s = L("%" + a + "%", r);
      var l = s.name;
      var u = s.value;
      var c = false;
      var h = s.alias;
      if (h) {
        a = h[0];
        I(i, E([0, 1], h));
      }
      var d = 1;
      var A = true;
      for (; d < i.length; d += 1) {
        var g = i[d];
        var p = _(g, 0, 1);
        var m = _(g, -1);
        if ((p === "\"" || p === "'" || p === "`" || m === "\"" || m === "'" || m === "`") && p !== m) {
          throw new t("property names with quotes must have matching quotes");
        }
        if (g === "constructor" || !A) {
          c = true;
        }
        a += "." + g;
        if (C(f, l = "%" + a + "%")) {
          u = f[l];
        } else if (u != null) {
          if (!(g in u)) {
            if (!r) {
              throw new n("base intrinsic for " + e + " exists, but the property is not available.");
            }
            return;
          }
          if (o && d + 1 >= i.length) {
            var y = o(u, g);
            u = (A = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : u[g];
          } else {
            A = C(u, g);
            u = u[g];
          }
          if (A && !c) {
            f[l] = u;
          }
        }
      }
      return u;
    };
  }
  var tM = {
    exports: {}
  };
  function tP() {
    if (T) {
      return _;
    }
    T = 1;
    var e = tN()("%Object.defineProperty%", true);
    function t() {
      if (e) {
        try {
          e({}, "a", {
            value: 1
          });
          return true;
        } catch (e) {}
      }
      return false;
    }
    t.hasArrayLengthDefineBug = function () {
      if (!t()) {
        return null;
      }
      try {
        return e([], "length", {
          value: 1
        }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    return _ = t;
  }
  function tU() {
    if (R) {
      return Q;
    }
    R = 1;
    var e = tN()("%Object.getOwnPropertyDescriptor%", true);
    if (e) {
      try {
        e([], "length");
      } catch (t) {
        e = null;
      }
    }
    return Q = e;
  }
  function tz() {
    if (!M) {
      M = 1;
      (function (e) {
        var t = tO();
        var r = tN();
        var n = function () {
          if (N) {
            return O;
          }
          N = 1;
          var e = tN();
          var t = function () {
            if (L) {
              return F;
            }
            L = 1;
            var e = tP()();
            var t = tN();
            var r = e && t("%Object.defineProperty%", true);
            if (r) {
              try {
                r({}, "a", {
                  value: 1
                });
              } catch (e) {
                r = false;
              }
            }
            var n = t("%SyntaxError%");
            var i = t("%TypeError%");
            var o = tU();
            return F = function (e, t, a) {
              if (!e || typeof e != "object" && typeof e != "function") {
                throw new i("`obj` must be an object or a function`");
              }
              if (typeof t != "string" && typeof t != "symbol") {
                throw new i("`property` must be a string or a symbol`");
              }
              if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) {
                throw new i("`nonEnumerable`, if provided, must be a boolean or null");
              }
              if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) {
                throw new i("`nonWritable`, if provided, must be a boolean or null");
              }
              if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) {
                throw new i("`nonConfigurable`, if provided, must be a boolean or null");
              }
              if (arguments.length > 6 && typeof arguments[6] != "boolean") {
                throw new i("`loose`, if provided, must be a boolean");
              }
              var s = arguments.length > 3 ? arguments[3] : null;
              var l = arguments.length > 4 ? arguments[4] : null;
              var u = arguments.length > 5 ? arguments[5] : null;
              var c = arguments.length > 6 && arguments[6];
              var h = !!o && o(e, t);
              if (r) {
                r(e, t, {
                  configurable: u === null && h ? h.configurable : !u,
                  enumerable: s === null && h ? h.enumerable : !s,
                  value: a,
                  writable: l === null && h ? h.writable : !l
                });
              } else if (!c && (s || l || u)) {
                throw new n("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
              } else {
                e[t] = a;
              }
            };
          }();
          var r = tP()();
          var n = tU();
          var i = e("%TypeError%");
          var o = e("%Math.floor%");
          return O = function (e, a) {
            if (typeof e != "function") {
              throw new i("`fn` is not a function");
            }
            if (typeof a != "number" || a < 0 || a > 4294967295 || o(a) !== a) {
              throw new i("`length` must be a positive 32-bit integer");
            }
            var s = arguments.length > 2 && !!arguments[2];
            var l = true;
            var u = true;
            if ("length" in e && n) {
              var c = n(e, "length");
              if (c && !c.configurable) {
                l = false;
              }
              if (c && !c.writable) {
                u = false;
              }
            }
            if (l || u || !s) {
              if (r) {
                t(e, "length", a, true, true);
              } else {
                t(e, "length", a);
              }
            }
            return e;
          };
        }();
        var i = r("%TypeError%");
        var o = r("%Function.prototype.apply%");
        var a = r("%Function.prototype.call%");
        var s = r("%Reflect.apply%", true) || t.call(a, o);
        var l = r("%Object.defineProperty%", true);
        var u = r("%Math.max%");
        if (l) {
          try {
            l({}, "a", {
              value: 1
            });
          } catch (e) {
            l = null;
          }
        }
        e.exports = function (e) {
          if (typeof e != "function") {
            throw new i("a function is required");
          }
          var r = s(t, a, arguments);
          return n(r, 1 + u(0, e.length - (arguments.length - 1)), true);
        };
        function c() {
          return s(t, o, arguments);
        }
        if (l) {
          l(e.exports, "apply", {
            value: c
          });
        } else {
          e.exports.apply = c;
        }
      })(tM);
    }
    return tM.exports;
  }
  function tH() {
    if (U) {
      return P;
    }
    U = 1;
    var e = tN();
    var t = tz();
    var r = t(e("String.prototype.indexOf"));
    return P = function (n, i) {
      var o = e(n, !!i);
      if (typeof o == "function" && r(n, ".prototype.") > -1) {
        return t(o);
      } else {
        return o;
      }
    };
  }
  function tG() {
    if (X) {
      return J;
    }
    X = 1;
    var e = function () {
      if (K) {
        return Y;
      }
      K = 1;
      var e = function () {
        if (j) {
          return W;
        }
        j = 1;
        var e;
        var t;
        var r = Function.prototype.toString;
        var n = typeof Reflect == "object" && Reflect !== null && Reflect.apply;
        if (typeof n == "function" && typeof Object.defineProperty == "function") {
          try {
            e = Object.defineProperty({}, "length", {
              get: function () {
                throw t;
              }
            });
            t = {};
            n(function () {
              throw 42;
            }, null, e);
          } catch (e) {
            if (e !== t) {
              n = null;
            }
          }
        } else {
          n = null;
        }
        var i = /^\s*class\b/;
        function o(e) {
          try {
            var t = r.call(e);
            return i.test(t);
          } catch (e) {
            return false;
          }
        }
        function a(e) {
          try {
            if (o(e)) {
              return false;
            }
            r.call(e);
            return true;
          } catch (e) {
            return false;
          }
        }
        var s = Object.prototype.toString;
        var l = typeof Symbol == "function" && !!Symbol.toStringTag;
        var u = !(0 in [,]);
        function c() {
          return false;
        }
        if (typeof document == "object") {
          var h = document.all;
          if (s.call(h) === s.call(document.all)) {
            c = function (e) {
              if ((u || !e) && (e === undefined || typeof e == "object")) {
                try {
                  var t = s.call(e);
                  return (t === "[object HTMLAllCollection]" || t === "[object HTML document.all class]" || t === "[object HTMLCollection]" || t === "[object Object]") && e("") == null;
                } catch (e) {}
              }
              return false;
            };
          }
        }
        return W = n ? function (r) {
          if (c(r)) {
            return true;
          }
          if (!r || typeof r != "function" && typeof r != "object") {
            return false;
          }
          try {
            n(r, null, e);
          } catch (e) {
            if (e !== t) {
              return false;
            }
          }
          return !o(r) && a(r);
        } : function (e) {
          if (c(e)) {
            return true;
          }
          if (!e || typeof e != "function" && typeof e != "object") {
            return false;
          }
          if (l) {
            return a(e);
          }
          if (o(e)) {
            return false;
          }
          var t = s.call(e);
          return (t === "[object Function]" || t === "[object GeneratorFunction]" || !!/^\[object HTML/.test(t)) && a(e);
        };
      }();
      var t = Object.prototype.toString;
      var r = Object.prototype.hasOwnProperty;
      function n(e, t, n) {
        var i = 0;
        var o = e.length;
        for (; i < o; i++) {
          if (r.call(e, i)) {
            if (n == null) {
              t(e[i], i, e);
            } else {
              t.call(n, e[i], i, e);
            }
          }
        }
      }
      function i(e, t, r) {
        var n = 0;
        var i = e.length;
        for (; n < i; n++) {
          if (r == null) {
            t(e.charAt(n), n, e);
          } else {
            t.call(r, e.charAt(n), n, e);
          }
        }
      }
      function o(e, t, n) {
        for (var i in e) {
          if (r.call(e, i)) {
            if (n == null) {
              t(e[i], i, e);
            } else {
              t.call(n, e[i], i, e);
            }
          }
        }
      }
      return Y = function (r, a, s) {
        var l;
        if (!e(a)) {
          throw TypeError("iterator must be a function");
        }
        if (arguments.length >= 3) {
          l = s;
        }
        if (t.call(r) === "[object Array]") {
          n(r, a, l);
        } else if (typeof r == "string") {
          i(r, a, l);
        } else {
          o(r, a, l);
        }
      };
    }();
    var t = function () {
      if (V) {
        return q;
      }
      V = 1;
      var e = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"];
      var t = typeof globalThis == "undefined" ? e5 : globalThis;
      return q = function () {
        var r = [];
        var n = 0;
        for (; n < e.length; n++) {
          if (typeof t[e[n]] == "function") {
            r[r.length] = e[n];
          }
        }
        return r;
      };
    }();
    var r = tz();
    var n = tH();
    var i = tU();
    var o = n("Object.prototype.toString");
    var a = tL()();
    var s = typeof globalThis == "undefined" ? e5 : globalThis;
    var l = t();
    var u = n("String.prototype.slice");
    var c = Object.getPrototypeOf;
    var h = n("Array.prototype.indexOf", true) || function (e, t) {
      for (var r = 0; r < e.length; r += 1) {
        if (e[r] === t) {
          return r;
        }
      }
      return -1;
    };
    var d = {
      __proto__: null
    };
    if (a && i && c) {
      e(l, function (e) {
        var t = new s[e]();
        if (Symbol.toStringTag in t) {
          var n = c(t);
          var o = i(n, Symbol.toStringTag);
          o ||= i(c(n), Symbol.toStringTag);
          d["$" + e] = r(o.get);
        }
      });
    } else {
      e(l, function (e) {
        var t = new s[e]();
        var n = t.slice || t.set;
        if (n) {
          d["$" + e] = r(n);
        }
      });
    }
    function f(t) {
      var r = false;
      e(d, function (e, n) {
        if (!r) {
          try {
            if ("$" + e(t) === n) {
              r = u(n, 1);
            }
          } catch (e) {}
        }
      });
      return r;
    }
    function A(t) {
      var r = false;
      e(d, function (e, n) {
        if (!r) {
          try {
            e(t);
            r = u(n, 1);
          } catch (e) {}
        }
      });
      return r;
    }
    return J = function (e) {
      if (!e || typeof e != "object") {
        return false;
      }
      if (!a) {
        var t = u(o(e), 8, -1);
        if (h(l, t) > -1) {
          return t;
        } else {
          return t === "Object" && A(e);
        }
      }
      if (i) {
        return f(e);
      } else {
        return null;
      }
    };
  }
  function tZ() {
    if (!ei) {
      ei = 1;
      (function (e) {
        var t = Object.getOwnPropertyDescriptors || function (e) {
          var t = Object.keys(e);
          var r = {};
          var n = 0;
          for (; n < t.length; n++) {
            r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
          }
          return r;
        };
        var r = /%[sdj%]/g;
        e.format = function (e) {
          if (!p(e)) {
            var t = [];
            var n = 0;
            for (; n < arguments.length; n++) {
              t.push(a(arguments[n]));
            }
            return t.join(" ");
          }
          var n = 1;
          var i = arguments;
          var o = i.length;
          var s = String(e).replace(r, function (e) {
            if (e === "%%") {
              return "%";
            }
            if (n >= o) {
              return e;
            }
            switch (e) {
              case "%s":
                return String(i[n++]);
              case "%d":
                return Number(i[n++]);
              case "%j":
                try {
                  return JSON.stringify(i[n++]);
                } catch (e) {
                  return "[Circular]";
                }
              default:
                return e;
            }
          });
          var l = i[n];
          for (; n < o; l = i[++n]) {
            if (A(l) || !v(l)) {
              s += " " + l;
            } else {
              s += " " + a(l);
            }
          }
          return s;
        };
        e.deprecate = function (t, r) {
          if (tx !== undefined && tx.noDeprecation === true) {
            return t;
          }
          if (tx === undefined) {
            return function () {
              return e.deprecate(t, r).apply(this, arguments);
            };
          }
          var n = false;
          return function () {
            if (!n) {
              if (tx.throwDeprecation) {
                throw Error(r);
              }
              tx.traceDeprecation;
              n = true;
            }
            return t.apply(this, arguments);
          };
        };
        var n = {};
        var i = /^$/;
        if (tx.env.NODE_DEBUG) {
          var o = tx.env.NODE_DEBUG;
          i = RegExp("^" + (o = o.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i");
        }
        function a(t, r) {
          var n = {
            seen: [],
            stylize: l
          };
          if (arguments.length >= 3) {
            n.depth = arguments[2];
          }
          if (arguments.length >= 4) {
            n.colors = arguments[3];
          }
          if (f(r)) {
            n.showHidden = r;
          } else if (r) {
            e._extend(n, r);
          }
          if (m(n.showHidden)) {
            n.showHidden = false;
          }
          if (m(n.depth)) {
            n.depth = 2;
          }
          if (m(n.colors)) {
            n.colors = false;
          }
          if (m(n.customInspect)) {
            n.customInspect = true;
          }
          if (n.colors) {
            n.stylize = s;
          }
          return u(n, t, n.depth);
        }
        function s(e, t) {
          var r = a.styles[t];
          if (r) {
            return "[" + a.colors[r][0] + "m" + e + "[" + a.colors[r][1] + "m";
          } else {
            return e;
          }
        }
        function l(e, t) {
          return e;
        }
        function u(t, r, n) {
          if (t.customInspect && r && C(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
            var i;
            var o;
            var a;
            var s;
            var l;
            var v = r.inspect(n, t);
            if (!p(v)) {
              v = u(t, v, n);
            }
            return v;
          }
          var E = function (e, t) {
            if (m(t)) {
              return e.stylize("undefined", "undefined");
            }
            if (p(t)) {
              var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
              return e.stylize(r, "string");
            }
            if (g(t)) {
              return e.stylize("" + t, "number");
            } else if (f(t)) {
              return e.stylize("" + t, "boolean");
            } else if (A(t)) {
              return e.stylize("null", "null");
            } else {
              return undefined;
            }
          }(t, r);
          if (E) {
            return E;
          }
          var B = Object.keys(r);
          s = {};
          B.forEach(function (e, t) {
            s[e] = true;
          });
          var x = s;
          if (t.showHidden) {
            B = Object.getOwnPropertyNames(r);
          }
          if (w(r) && (B.indexOf("message") >= 0 || B.indexOf("description") >= 0)) {
            return c(r);
          }
          if (B.length === 0) {
            if (C(r)) {
              var D = r.name ? ": " + r.name : "";
              return t.stylize("[Function" + D + "]", "special");
            }
            if (y(r)) {
              return t.stylize(RegExp.prototype.toString.call(r), "regexp");
            }
            if (b(r)) {
              return t.stylize(Date.prototype.toString.call(r), "date");
            }
            if (w(r)) {
              return c(r);
            }
          }
          var S = "";
          var k = false;
          var _ = ["{", "}"];
          if (d(r)) {
            k = true;
            _ = ["[", "]"];
          }
          if (C(r)) {
            S = " [Function" + (r.name ? ": " + r.name : "") + "]";
          }
          if (y(r)) {
            S = " " + RegExp.prototype.toString.call(r);
          }
          if (b(r)) {
            S = " " + Date.prototype.toUTCString.call(r);
          }
          if (w(r)) {
            S = " " + c(r);
          }
          if (B.length === 0 && (!k || r.length == 0)) {
            return _[0] + S + _[1];
          }
          if (n < 0) {
            if (y(r)) {
              return t.stylize(RegExp.prototype.toString.call(r), "regexp");
            } else {
              return t.stylize("[Object]", "special");
            }
          }
          t.seen.push(r);
          l = k ? function (e, t, r, n, i) {
            var o = [];
            var a = 0;
            var s = t.length;
            for (; a < s; ++a) {
              if (I(t, String(a))) {
                o.push(h(e, t, r, n, String(a), true));
              } else {
                o.push("");
              }
            }
            i.forEach(function (i) {
              if (!i.match(/^\d+$/)) {
                o.push(h(e, t, r, n, i, true));
              }
            });
            return o;
          }(t, r, n, x, B) : B.map(function (e) {
            return h(t, r, n, x, e, k);
          });
          t.seen.pop();
          i = l;
          o = S;
          a = _;
          if (i.reduce(function (e, t) {
            t.indexOf("\n");
            return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60) {
            return a[0] + (o === "" ? "" : o + "\n ") + " " + i.join(",\n  ") + " " + a[1];
          } else {
            return a[0] + o + " " + i.join(", ") + " " + a[1];
          }
        }
        function c(e) {
          return "[" + Error.prototype.toString.call(e) + "]";
        }
        function h(e, t, r, n, i, o) {
          var a;
          var s;
          var l;
          if ((l = Object.getOwnPropertyDescriptor(t, i) || {
            value: t[i]
          }).get) {
            s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special");
          } else if (l.set) {
            s = e.stylize("[Setter]", "special");
          }
          if (!I(n, i)) {
            a = "[" + i + "]";
          }
          if (!s) {
            if (e.seen.indexOf(l.value) < 0) {
              if ((s = A(r) ? u(e, l.value, null) : u(e, l.value, r - 1)).indexOf("\n") > -1) {
                s = o ? s.split("\n").map(function (e) {
                  return "  " + e;
                }).join("\n").slice(2) : "\n" + s.split("\n").map(function (e) {
                  return "   " + e;
                }).join("\n");
              }
            } else {
              s = e.stylize("[Circular]", "special");
            }
          }
          if (m(a)) {
            if (o && i.match(/^\d+$/)) {
              return s;
            }
            if ((a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              a = a.slice(1, -1);
              a = e.stylize(a, "name");
            } else {
              a = a.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
              a = e.stylize(a, "string");
            }
          }
          return a + ": " + s;
        }
        function d(e) {
          return Array.isArray(e);
        }
        function f(e) {
          return typeof e == "boolean";
        }
        function A(e) {
          return e === null;
        }
        function g(e) {
          return typeof e == "number";
        }
        function p(e) {
          return typeof e == "string";
        }
        function m(e) {
          return e === undefined;
        }
        function y(e) {
          return v(e) && E(e) === "[object RegExp]";
        }
        function v(e) {
          return typeof e == "object" && e !== null;
        }
        function b(e) {
          return v(e) && E(e) === "[object Date]";
        }
        function w(e) {
          return v(e) && (E(e) === "[object Error]" || e instanceof Error);
        }
        function C(e) {
          return typeof e == "function";
        }
        function E(e) {
          return Object.prototype.toString.call(e);
        }
        e.debuglog = function (t) {
          if (!n[t = t.toUpperCase()]) {
            if (i.test(t)) {
              tx.pid;
              n[t] = function () {
                e.format.apply(e, arguments);
              };
            } else {
              n[t] = function () {};
            }
          }
          return n[t];
        };
        e.inspect = a;
        a.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        };
        a.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        };
        if (!et) {
          et = 1;
          (function (e) {
            var t = function () {
              if (H) {
                return z;
              }
              H = 1;
              var e = tL()();
              var t = tH()("Object.prototype.toString");
              function r(r) {
                return (!e || !r || typeof r != "object" || !(Symbol.toStringTag in r)) && t(r) === "[object Arguments]";
              }
              function n(e) {
                return !!r(e) || e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && t(e) !== "[object Array]" && t(e.callee) === "[object Function]";
              }
              var i = function () {
                return r(arguments);
              }();
              r.isLegacyArguments = n;
              return z = i ? r : n;
            }();
            var r = function () {
              if (Z) {
                return G;
              }
              Z = 1;
              var e;
              var t = Object.prototype.toString;
              var r = Function.prototype.toString;
              var n = /^\s*(?:function)?\*/;
              var i = tL()();
              var o = Object.getPrototypeOf;
              function a() {
                if (!i) {
                  return false;
                }
                try {
                  return Function("return function*() {}")();
                } catch (e) {}
              }
              return G = function (s) {
                if (typeof s != "function") {
                  return false;
                }
                if (n.test(r.call(s))) {
                  return true;
                }
                if (!i) {
                  return t.call(s) === "[object GeneratorFunction]";
                }
                if (!o) {
                  return false;
                }
                if (e === undefined) {
                  var l = a();
                  e = !!l && o(l);
                }
                return o(s) === e;
              };
            }();
            var n = tG();
            var i = function () {
              if (ee) {
                return $;
              }
              ee = 1;
              var e = tG();
              return $ = function (t) {
                return !!e(t);
              };
            }();
            function o(e) {
              return e.call.bind(e);
            }
            var a = typeof BigInt != "undefined";
            var s = typeof Symbol != "undefined";
            var l = o(Object.prototype.toString);
            var u = o(Number.prototype.valueOf);
            var c = o(String.prototype.valueOf);
            var h = o(Boolean.prototype.valueOf);
            if (a) {
              var d = o(BigInt.prototype.valueOf);
            }
            if (s) {
              var f = o(Symbol.prototype.valueOf);
            }
            function A(e, t) {
              if (typeof e != "object") {
                return false;
              }
              try {
                t(e);
                return true;
              } catch (e) {
                return false;
              }
            }
            function g(e) {
              return l(e) === "[object Map]";
            }
            function p(e) {
              return l(e) === "[object Set]";
            }
            function m(e) {
              return l(e) === "[object WeakMap]";
            }
            function y(e) {
              return l(e) === "[object WeakSet]";
            }
            function v(e) {
              return l(e) === "[object ArrayBuffer]";
            }
            function b(e) {
              return typeof ArrayBuffer != "undefined" && (v.working ? v(e) : e instanceof ArrayBuffer);
            }
            function w(e) {
              return l(e) === "[object DataView]";
            }
            function C(e) {
              return typeof DataView != "undefined" && (w.working ? w(e) : e instanceof DataView);
            }
            e.isArgumentsObject = t;
            e.isGeneratorFunction = r;
            e.isTypedArray = i;
            e.isPromise = function (e) {
              return typeof Promise != "undefined" && e instanceof Promise || e !== null && typeof e == "object" && typeof e.then == "function" && typeof e.catch == "function";
            };
            e.isArrayBufferView = function (e) {
              if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
                return ArrayBuffer.isView(e);
              } else {
                return i(e) || C(e);
              }
            };
            e.isUint8Array = function (e) {
              return n(e) === "Uint8Array";
            };
            e.isUint8ClampedArray = function (e) {
              return n(e) === "Uint8ClampedArray";
            };
            e.isUint16Array = function (e) {
              return n(e) === "Uint16Array";
            };
            e.isUint32Array = function (e) {
              return n(e) === "Uint32Array";
            };
            e.isInt8Array = function (e) {
              return n(e) === "Int8Array";
            };
            e.isInt16Array = function (e) {
              return n(e) === "Int16Array";
            };
            e.isInt32Array = function (e) {
              return n(e) === "Int32Array";
            };
            e.isFloat32Array = function (e) {
              return n(e) === "Float32Array";
            };
            e.isFloat64Array = function (e) {
              return n(e) === "Float64Array";
            };
            e.isBigInt64Array = function (e) {
              return n(e) === "BigInt64Array";
            };
            e.isBigUint64Array = function (e) {
              return n(e) === "BigUint64Array";
            };
            g.working = typeof Map != "undefined" && g(new Map());
            e.isMap = function (e) {
              return typeof Map != "undefined" && (g.working ? g(e) : e instanceof Map);
            };
            p.working = typeof Set != "undefined" && p(new Set());
            e.isSet = function (e) {
              return typeof Set != "undefined" && (p.working ? p(e) : e instanceof Set);
            };
            m.working = typeof WeakMap != "undefined" && m(new WeakMap());
            e.isWeakMap = function (e) {
              return typeof WeakMap != "undefined" && (m.working ? m(e) : e instanceof WeakMap);
            };
            y.working = typeof WeakSet != "undefined" && y(new WeakSet());
            e.isWeakSet = function (e) {
              return y(e);
            };
            v.working = typeof ArrayBuffer != "undefined" && v(new ArrayBuffer());
            e.isArrayBuffer = b;
            w.working = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined" && w(new DataView(new ArrayBuffer(1), 0, 1));
            e.isDataView = C;
            var E = typeof SharedArrayBuffer != "undefined" ? SharedArrayBuffer : undefined;
            function I(e) {
              return l(e) === "[object SharedArrayBuffer]";
            }
            function B(e) {
              return E !== undefined && (I.working === undefined && (I.working = I(new E())), I.working ? I(e) : e instanceof E);
            }
            function x(e) {
              return A(e, u);
            }
            function D(e) {
              return A(e, c);
            }
            function S(e) {
              return A(e, h);
            }
            function k(e) {
              return a && A(e, d);
            }
            function _(e) {
              return s && A(e, f);
            }
            e.isSharedArrayBuffer = B;
            e.isAsyncFunction = function (e) {
              return l(e) === "[object AsyncFunction]";
            };
            e.isMapIterator = function (e) {
              return l(e) === "[object Map Iterator]";
            };
            e.isSetIterator = function (e) {
              return l(e) === "[object Set Iterator]";
            };
            e.isGeneratorObject = function (e) {
              return l(e) === "[object Generator]";
            };
            e.isWebAssemblyCompiledModule = function (e) {
              return l(e) === "[object WebAssembly.Module]";
            };
            e.isNumberObject = x;
            e.isStringObject = D;
            e.isBooleanObject = S;
            e.isBigIntObject = k;
            e.isSymbolObject = _;
            e.isBoxedPrimitive = function (e) {
              return x(e) || D(e) || S(e) || k(e) || _(e);
            };
            e.isAnyArrayBuffer = function (e) {
              return typeof Uint8Array != "undefined" && (b(e) || B(e));
            };
            ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (t) {
              Object.defineProperty(e, t, {
                enumerable: false,
                value: function () {
                  throw Error(t + " is not supported in userland");
                }
              });
            });
          })(tR);
        }
        e.types = tR;
        e.isArray = d;
        e.isBoolean = f;
        e.isNull = A;
        e.isNullOrUndefined = function (e) {
          return e == null;
        };
        e.isNumber = g;
        e.isString = p;
        e.isSymbol = function (e) {
          return typeof e == "symbol";
        };
        e.isUndefined = m;
        e.isRegExp = y;
        e.types.isRegExp = y;
        e.isObject = v;
        e.isDate = b;
        e.types.isDate = b;
        e.isError = w;
        e.types.isNativeError = w;
        e.isFunction = C;
        e.isPrimitive = function (e) {
          return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
        };
        e.isBuffer = en ? er : (en = 1, er = function (e) {
          return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
        });
        function I(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        e.log = function () {};
        e.inherits = tf;
        e._extend = function (e, t) {
          if (!t || !v(t)) {
            return e;
          }
          var r = Object.keys(t);
          var n = r.length;
          while (n--) {
            e[r[n]] = t[r[n]];
          }
          return e;
        };
        var B = typeof Symbol != "undefined" ? Symbol("util.promisify.custom") : undefined;
        function x(e, t) {
          if (!e) {
            var r = Error("Promise was rejected with a falsy value");
            r.reason = e;
            e = r;
          }
          return t(e);
        }
        e.promisify = function (e) {
          if (typeof e != "function") {
            throw TypeError("The \"original\" argument must be of type Function");
          }
          if (B && e[B]) {
            var r = e[B];
            if (typeof r != "function") {
              throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
            }
            Object.defineProperty(r, B, {
              value: r,
              enumerable: false,
              writable: false,
              configurable: true
            });
            return r;
          }
          function r() {
            var t;
            var r;
            var n = new Promise(function (e, n) {
              t = e;
              r = n;
            });
            var i = [];
            var o = 0;
            for (; o < arguments.length; o++) {
              i.push(arguments[o]);
            }
            i.push(function (e, n) {
              if (e) {
                r(e);
              } else {
                t(n);
              }
            });
            try {
              e.apply(this, i);
            } catch (e) {
              r(e);
            }
            return n;
          }
          Object.setPrototypeOf(r, Object.getPrototypeOf(e));
          if (B) {
            Object.defineProperty(r, B, {
              value: r,
              enumerable: false,
              writable: false,
              configurable: true
            });
          }
          return Object.defineProperties(r, t(e));
        };
        e.promisify.custom = B;
        e.callbackify = function (e) {
          if (typeof e != "function") {
            throw TypeError("The \"original\" argument must be of type Function");
          }
          function r() {
            var t = [];
            var r = 0;
            for (; r < arguments.length; r++) {
              t.push(arguments[r]);
            }
            var n = t.pop();
            if (typeof n != "function") {
              throw TypeError("The last argument must be of type Function");
            }
            var i = this;
            function o() {
              return n.apply(i, arguments);
            }
            e.apply(this, t).then(function (e) {
              tx.nextTick(o.bind(null, null, e));
            }, function (e) {
              tx.nextTick(x.bind(null, e, o));
            });
          }
          Object.setPrototypeOf(r, Object.getPrototypeOf(e));
          Object.defineProperties(r, t(e));
          return r;
        };
      })(tQ);
    }
    return tQ;
  }
  function tW() {
    if (el) {
      return es;
    }
    function e(e, n) {
      r(e, n);
      t(e);
    }
    function t(e) {
      if ((!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose)) {
        e.emit("close");
      }
    }
    function r(e, t) {
      e.emit("error", t);
    }
    el = 1;
    return es = {
      destroy: function (n, i) {
        var o = this;
        var a = this._readableState && this._readableState.destroyed;
        var s = this._writableState && this._writableState.destroyed;
        if (a || s) {
          if (i) {
            i(n);
          } else if (n) {
            if (this._writableState) {
              if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                tx.nextTick(r, this, n);
              }
            } else {
              tx.nextTick(r, this, n);
            }
          }
        } else {
          if (this._readableState) {
            this._readableState.destroyed = true;
          }
          if (this._writableState) {
            this._writableState.destroyed = true;
          }
          this._destroy(n || null, function (r) {
            if (!i && r) {
              if (o._writableState) {
                if (o._writableState.errorEmitted) {
                  tx.nextTick(t, o);
                } else {
                  o._writableState.errorEmitted = true;
                  tx.nextTick(e, o, r);
                }
              } else {
                tx.nextTick(e, o, r);
              }
            } else if (i) {
              tx.nextTick(t, o);
              i(r);
            } else {
              tx.nextTick(t, o);
            }
          });
        }
        return this;
      },
      undestroy: function () {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finalCalled = false;
          this._writableState.prefinished = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      },
      errorOrDestroy: function (e, t) {
        var r = e._readableState;
        var n = e._writableState;
        if (r && r.autoDestroy || n && n.autoDestroy) {
          e.destroy(t);
        } else {
          e.emit("error", t);
        }
      }
    };
  }
  var tj = {};
  function tY() {
    if (eu) {
      return tj;
    }
    eu = 1;
    var e = {};
    function t(t, r, n) {
      n ||= Error;
      var i = function (e) {
        function t(t, n, i) {
          return e.call(this, typeof r == "string" ? r : r(t, n, i)) || this;
        }
        t.prototype = Object.create(e.prototype);
        t.prototype.constructor = t;
        t.__proto__ = e;
        return t;
      }(n);
      i.prototype.name = n.name;
      i.prototype.code = t;
      e[t] = i;
    }
    function r(e, t) {
      if (!Array.isArray(e)) {
        return `of ${t} ${String(e)}`;
      }
      var r = e.length;
      e = e.map(function (e) {
        return String(e);
      });
      if (r > 2) {
        return `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ${e[r - 1]}`;
      } else if (r === 2) {
        return `one of ${t} ${e[0]} or ${e[1]}`;
      } else {
        return `of ${t} ${e[0]}`;
      }
    }
    t("ERR_INVALID_OPT_VALUE", function (e, t) {
      return "The value \"" + t + "\" is invalid for option \"" + e + "\"";
    }, TypeError);
    t("ERR_INVALID_ARG_TYPE", function (e, t, n) {
      if (typeof t == "string" && (i = "not ", t.substr(0, i.length) === i)) {
        l = "must not be";
        t = t.replace(/^not /, "");
      } else {
        l = "must be";
      }
      o = " argument";
      if (a === undefined || a > e.length) {
        a = e.length;
      }
      if (e.substring(a - o.length, a) === o) {
        u = `The ${e} ${l} ${r(t, "type")}`;
      } else {
        var i;
        var o;
        var a;
        var s;
        var l;
        var u;
        var c = (typeof s != "number" && (s = 0), s + 1 > e.length || e.indexOf(".", s) === -1) ? "argument" : "property";
        u = `The "${e}" ${c} ${l} ${r(t, "type")}`;
      }
      return `${u}. Received type ${typeof n}`;
    }, TypeError);
    t("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    t("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
      return "The " + e + " method is not implemented";
    });
    t("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    t("ERR_STREAM_DESTROYED", function (e) {
      return "Cannot call " + e + " after a stream was destroyed";
    });
    t("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    t("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    t("ERR_STREAM_WRITE_AFTER_END", "write after end");
    t("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    t("ERR_UNKNOWN_ENCODING", function (e) {
      return "Unknown encoding: " + e;
    }, TypeError);
    t("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    tj.codes = e;
    return tj;
  }
  function tK() {
    if (eh) {
      return ec;
    }
    eh = 1;
    var e = tY().codes.ERR_INVALID_OPT_VALUE;
    return ec = {
      getHighWaterMark: function (t, r, n, i) {
        var o = r.highWaterMark ?? (i ? r[n] : null);
        if (o != null) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0) {
            throw new e(i ? n : "highWaterMark", o);
          }
          return Math.floor(o);
        }
        if (t.objectMode) {
          return 16;
        } else {
          return 16384;
        }
      }
    };
  }
  function tq() {
    if (eg) {
      return eA;
    }
    function e(e) {
      var t = this;
      this.next = null;
      this.entry = null;
      this.finish = function () {
        (function (e, t, r) {
          var n = e.entry;
          for (e.entry = null; n;) {
            var i = n.callback;
            t.pendingcb--;
            i(undefined);
            n = n.next;
          }
          t.corkedRequestsFree.next = e;
        })(t, e);
      };
    }
    eg = 1;
    eA = w;
    w.WritableState = b;
    var t;
    var r;
    var n = {
      deprecate: function () {
        if (ef) {
          return ed;
        }
        function e(e) {
          try {
            if (!e5.localStorage) {
              return false;
            }
          } catch (e) {
            return false;
          }
          var t = e5.localStorage[e];
          return t != null && String(t).toLowerCase() === "true";
        }
        ef = 1;
        return ed = function (t, r) {
          if (e("noDeprecation")) {
            return t;
          }
          var n = false;
          return function () {
            if (!n) {
              if (e("throwDeprecation")) {
                throw Error(r);
              }
              e("traceDeprecation");
              n = true;
            }
            return t.apply(this, arguments);
          };
        };
      }()
    };
    var i = tD();
    var o = tT().Buffer;
    var a = e5.Uint8Array || function () {};
    var s = tW();
    var l = tK().getHighWaterMark;
    var u = tY().codes;
    var c = u.ERR_INVALID_ARG_TYPE;
    var h = u.ERR_METHOD_NOT_IMPLEMENTED;
    var d = u.ERR_MULTIPLE_CALLBACK;
    var f = u.ERR_STREAM_CANNOT_PIPE;
    var A = u.ERR_STREAM_DESTROYED;
    var g = u.ERR_STREAM_NULL_VALUES;
    var p = u.ERR_STREAM_WRITE_AFTER_END;
    var m = u.ERR_UNKNOWN_ENCODING;
    var y = s.errorOrDestroy;
    function v() {}
    function b(r, n, i) {
      t = t || tV();
      r = r || {};
      if (typeof i != "boolean") {
        i = n instanceof t;
      }
      this.objectMode = !!r.objectMode;
      if (i) {
        this.objectMode = this.objectMode || !!r.writableObjectMode;
      }
      this.highWaterMark = l(this, r, "writableHighWaterMark", i);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var o = r.decodeStrings === false;
      this.decodeStrings = !o;
      this.defaultEncoding = r.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function (e) {
        (function (e, t) {
          var r = e._writableState;
          var n = r.sync;
          var i = r.writecb;
          if (typeof i != "function") {
            throw new d();
          }
          r.writing = false;
          r.writecb = null;
          r.length -= r.writelen;
          r.writelen = 0;
          if (t) {
            --r.pendingcb;
            if (n) {
              tx.nextTick(i, t);
              tx.nextTick(D, e, r);
              e._writableState.errorEmitted = true;
              y(e, t);
            } else {
              i(t);
              e._writableState.errorEmitted = true;
              y(e, t);
              D(e, r);
            }
          } else {
            var o = B(r) || e.destroyed;
            if (!o && !r.corked && !r.bufferProcessing && !!r.bufferedRequest) {
              I(e, r);
            }
            if (n) {
              tx.nextTick(E, e, r, o, i);
            } else {
              E(e, r, o, i);
            }
          }
        })(n, e);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = r.emitClose !== false;
      this.autoDestroy = !!r.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new e(this);
    }
    function w(e) {
      var n = this instanceof (t = t || tV());
      if (!n && !r.call(w, this)) {
        return new w(e);
      }
      this._writableState = new b(e, this, n);
      this.writable = true;
      if (e) {
        if (typeof e.write == "function") {
          this._write = e.write;
        }
        if (typeof e.writev == "function") {
          this._writev = e.writev;
        }
        if (typeof e.destroy == "function") {
          this._destroy = e.destroy;
        }
        if (typeof e.final == "function") {
          this._final = e.final;
        }
      }
      i.call(this);
    }
    function C(e, t, r, n, i, o, a) {
      t.writelen = n;
      t.writecb = a;
      t.writing = true;
      t.sync = true;
      if (t.destroyed) {
        t.onwrite(new A("write"));
      } else if (r) {
        e._writev(i, t.onwrite);
      } else {
        e._write(i, o, t.onwrite);
      }
      t.sync = false;
    }
    function E(e, t, r, n) {
      var i;
      var o;
      if (!r) {
        i = e;
        if ((o = t).length === 0 && o.needDrain) {
          o.needDrain = false;
          i.emit("drain");
        }
      }
      t.pendingcb--;
      n();
      D(e, t);
    }
    function I(t, r) {
      r.bufferProcessing = true;
      var n = r.bufferedRequest;
      if (t._writev && n && n.next) {
        var i = Array(r.bufferedRequestCount);
        var o = r.corkedRequestsFree;
        o.entry = n;
        var a = 0;
        var s = true;
        while (n) {
          i[a] = n;
          if (!n.isBuf) {
            s = false;
          }
          n = n.next;
          a += 1;
        }
        i.allBuffers = s;
        C(t, r, true, r.length, i, "", o.finish);
        r.pendingcb++;
        r.lastBufferedRequest = null;
        if (o.next) {
          r.corkedRequestsFree = o.next;
          o.next = null;
        } else {
          r.corkedRequestsFree = new e(r);
        }
        r.bufferedRequestCount = 0;
      } else {
        while (n) {
          var l = n.chunk;
          var u = n.encoding;
          var c = n.callback;
          var h = r.objectMode ? 1 : l.length;
          C(t, r, false, h, l, u, c);
          n = n.next;
          r.bufferedRequestCount--;
          if (r.writing) {
            break;
          }
        }
        if (n === null) {
          r.lastBufferedRequest = null;
        }
      }
      r.bufferedRequest = n;
      r.bufferProcessing = false;
    }
    function B(e) {
      return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
    }
    function x(e, t) {
      e._final(function (r) {
        t.pendingcb--;
        if (r) {
          y(e, r);
        }
        t.prefinished = true;
        e.emit("prefinish");
        D(e, t);
      });
    }
    function D(e, t) {
      var r = B(t);
      if (r && (t.prefinished || t.finalCalled || (typeof e._final != "function" || t.destroyed ? (t.prefinished = true, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = true, tx.nextTick(x, e, t))), t.pendingcb === 0 && (t.finished = true, e.emit("finish"), t.autoDestroy))) {
        var n = e._readableState;
        if (!n || n.autoDestroy && n.endEmitted) {
          e.destroy();
        }
      }
      return r;
    }
    tf(w, i);
    b.prototype.getBuffer = function () {
      var e = this.bufferedRequest;
      var t = [];
      while (e) {
        t.push(e);
        e = e.next;
      }
      return t;
    };
    (function () {
      try {
        Object.defineProperty(b.prototype, "buffer", {
          get: n.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (e) {}
    })();
    if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
      r = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(w, Symbol.hasInstance, {
        value: function (e) {
          return !!r.call(this, e) || this === w && e && e._writableState instanceof b;
        }
      });
    } else {
      r = function (e) {
        return e instanceof this;
      };
    }
    w.prototype.pipe = function () {
      y(this, new f());
    };
    w.prototype.write = function (e, t, r) {
      var n;
      var i;
      var s;
      var l;
      var u;
      var h;
      var d;
      var f = this._writableState;
      var A = false;
      var m = !f.objectMode && (n = e, o.isBuffer(n) || n instanceof a);
      if (m && !o.isBuffer(e)) {
        i = e;
        e = o.from(i);
      }
      if (typeof t == "function") {
        r = t;
        t = null;
      }
      if (m) {
        t = "buffer";
      } else {
        t ||= f.defaultEncoding;
      }
      if (typeof r != "function") {
        r = v;
      }
      if (f.ending) {
        s = r;
        y(this, l = new p());
        tx.nextTick(s, l);
      } else if (m || (u = e, h = r, u === null ? d = new g() : typeof u == "string" || f.objectMode || (d = new c("chunk", ["string", "Buffer"], u)), !d || (y(this, d), tx.nextTick(h, d), 0))) {
        f.pendingcb++;
        A = function (e, t, r, n, i, a) {
          if (!r) {
            var s;
            var l;
            s = n;
            l = i;
            if (!t.objectMode && t.decodeStrings !== false && typeof s == "string") {
              s = o.from(s, l);
            }
            var u = s;
            if (n !== u) {
              r = true;
              i = "buffer";
              n = u;
            }
          }
          var c = t.objectMode ? 1 : n.length;
          t.length += c;
          var h = t.length < t.highWaterMark;
          if (!h) {
            t.needDrain = true;
          }
          if (t.writing || t.corked) {
            var d = t.lastBufferedRequest;
            t.lastBufferedRequest = {
              chunk: n,
              encoding: i,
              isBuf: r,
              callback: a,
              next: null
            };
            if (d) {
              d.next = t.lastBufferedRequest;
            } else {
              t.bufferedRequest = t.lastBufferedRequest;
            }
            t.bufferedRequestCount += 1;
          } else {
            C(e, t, false, c, n, i, a);
          }
          return h;
        }(this, f, m, e, t, r);
      }
      return A;
    };
    w.prototype.cork = function () {
      this._writableState.corked++;
    };
    w.prototype.uncork = function () {
      var e = this._writableState;
      if (e.corked) {
        e.corked--;
        if (!e.writing && !e.corked && !e.bufferProcessing && !!e.bufferedRequest) {
          I(this, e);
        }
      }
    };
    w.prototype.setDefaultEncoding = function (e) {
      if (typeof e == "string") {
        e = e.toLowerCase();
      }
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) {
        throw new m(e);
      }
      this._writableState.defaultEncoding = e;
      return this;
    };
    Object.defineProperty(w.prototype, "writableBuffer", {
      enumerable: false,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(w.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    w.prototype._write = function (e, t, r) {
      r(new h("_write()"));
    };
    w.prototype._writev = null;
    w.prototype.end = function (e, t, r) {
      var n;
      var i;
      var o;
      var a = this._writableState;
      if (typeof e == "function") {
        r = e;
        e = null;
        t = null;
      } else if (typeof t == "function") {
        r = t;
        t = null;
      }
      if (e != null) {
        this.write(e, t);
      }
      if (a.corked) {
        a.corked = 1;
        this.uncork();
      }
      if (!a.ending) {
        n = this;
        i = a;
        o = r;
        i.ending = true;
        D(n, i);
        if (o) {
          if (i.finished) {
            tx.nextTick(o);
          } else {
            n.once("finish", o);
          }
        }
        i.ended = true;
        n.writable = false;
      }
      return this;
    };
    Object.defineProperty(w.prototype, "writableLength", {
      enumerable: false,
      get: function () {
        return this._writableState.length;
      }
    });
    Object.defineProperty(w.prototype, "destroyed", {
      enumerable: false,
      get: function () {
        return this._writableState !== undefined && this._writableState.destroyed;
      },
      set: function (e) {
        if (this._writableState) {
          this._writableState.destroyed = e;
        }
      }
    });
    w.prototype.destroy = s.destroy;
    w.prototype._undestroy = s.undestroy;
    w.prototype._destroy = function (e, t) {
      t(e);
    };
    return eA;
  }
  function tV() {
    if (em) {
      return ep;
    }
    em = 1;
    var e = Object.keys || function (e) {
      var t = [];
      for (var r in e) {
        t.push(r);
      }
      return t;
    };
    ep = a;
    var t = t1();
    var r = tq();
    tf(a, t);
    var n = e(r.prototype);
    var i = 0;
    for (; i < n.length; i++) {
      var o = n[i];
      a.prototype[o] ||= r.prototype[o];
    }
    function a(e) {
      if (!(this instanceof a)) {
        return new a(e);
      }
      t.call(this, e);
      r.call(this, e);
      this.allowHalfOpen = true;
      if (e) {
        if (e.readable === false) {
          this.readable = false;
        }
        if (e.writable === false) {
          this.writable = false;
        }
        if (e.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", s);
        }
      }
    }
    function s() {
      if (!this._writableState.ended) {
        tx.nextTick(l, this);
      }
    }
    function l(e) {
      e.end();
    }
    Object.defineProperty(a.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(a.prototype, "writableBuffer", {
      enumerable: false,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(a.prototype, "writableLength", {
      enumerable: false,
      get: function () {
        return this._writableState.length;
      }
    });
    Object.defineProperty(a.prototype, "destroyed", {
      enumerable: false,
      get: function () {
        return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (e) {
        if (this._readableState !== undefined && this._writableState !== undefined) {
          this._readableState.destroyed = e;
          this._writableState.destroyed = e;
        }
      }
    });
    return ep;
  }
  var tJ = {};
  var tX = {
    exports: {}
  };
  function t$() {
    if (ev) {
      return tJ;
    }
    ev = 1;
    var e = (ey || (ey = 1, !function (e, t) {
      var r = tT();
      var n = r.Buffer;
      function i(e, t) {
        for (var r in e) {
          t[r] = e[r];
        }
      }
      function o(e, t, r) {
        return n(e, t, r);
      }
      if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
        e.exports = r;
      } else {
        i(r, t);
        t.Buffer = o;
      }
      i(n, o);
      o.from = function (e, t, r) {
        if (typeof e == "number") {
          throw TypeError("Argument must not be a number");
        }
        return n(e, t, r);
      };
      o.alloc = function (e, t, r) {
        if (typeof e != "number") {
          throw TypeError("Argument must be a number");
        }
        var i = n(e);
        if (t !== undefined) {
          if (typeof r == "string") {
            i.fill(t, r);
          } else {
            i.fill(t);
          }
        } else {
          i.fill(0);
        }
        return i;
      };
      o.allocUnsafe = function (e) {
        if (typeof e != "number") {
          throw TypeError("Argument must be a number");
        }
        return n(e);
      };
      o.allocUnsafeSlow = function (e) {
        if (typeof e != "number") {
          throw TypeError("Argument must be a number");
        }
        return r.SlowBuffer(e);
      };
    }(tX, tX.exports)), tX.exports).Buffer;
    var t = e.isEncoding || function (e) {
      switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function r(r) {
      var n;
      this.encoding = function (r) {
        var n = function (e) {
          var t;
          if (!e) {
            return "utf8";
          }
          while (true) {
            switch (e) {
              case "utf8":
              case "utf-8":
                return "utf8";
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return "utf16le";
              case "latin1":
              case "binary":
                return "latin1";
              case "base64":
              case "ascii":
              case "hex":
                return e;
              default:
                if (t) {
                  return;
                }
                e = ("" + e).toLowerCase();
                t = true;
            }
          }
        }(r);
        if (typeof n != "string" && (e.isEncoding === t || !t(r))) {
          throw Error("Unknown encoding: " + r);
        }
        return n || r;
      }(r);
      switch (this.encoding) {
        case "utf16le":
          this.text = o;
          this.end = a;
          n = 4;
          break;
        case "utf8":
          this.fillLast = i;
          n = 4;
          break;
        case "base64":
          this.text = s;
          this.end = l;
          n = 3;
          break;
        default:
          this.write = u;
          this.end = c;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = e.allocUnsafe(n);
    }
    function n(e) {
      if (e <= 127) {
        return 0;
      } else if (e >> 5 == 6) {
        return 2;
      } else if (e >> 4 == 14) {
        return 3;
      } else if (e >> 3 == 30) {
        return 4;
      } else if (e >> 6 == 2) {
        return -1;
      } else {
        return -2;
      }
    }
    function i(e) {
      var t = this.lastTotal - this.lastNeed;
      var r = function (e, t, r) {
        if ((t[0] & 192) != 128) {
          e.lastNeed = 0;
          return "�";
        }
        if (e.lastNeed > 1 && t.length > 1) {
          if ((t[1] & 192) != 128) {
            e.lastNeed = 1;
            return "�";
          }
          if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) {
            e.lastNeed = 2;
            return "�";
          }
        }
      }(this, e);
      if (r !== undefined) {
        return r;
      } else if (this.lastNeed <= e.length) {
        e.copy(this.lastChar, t, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      } else {
        e.copy(this.lastChar, t, 0, e.length);
        this.lastNeed -= e.length;
        return;
      }
    }
    function o(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = e[e.length - 2];
            this.lastChar[1] = e[e.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = e[e.length - 1];
      return e.toString("utf16le", t, e.length - 1);
    }
    function a(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function s(e, t) {
      var r = (e.length - t) % 3;
      if (r === 0) {
        return e.toString("base64", t);
      } else {
        this.lastNeed = 3 - r;
        this.lastTotal = 3;
        if (r === 1) {
          this.lastChar[0] = e[e.length - 1];
        } else {
          this.lastChar[0] = e[e.length - 2];
          this.lastChar[1] = e[e.length - 1];
        }
        return e.toString("base64", t, e.length - r);
      }
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      } else {
        return t;
      }
    }
    function u(e) {
      return e.toString(this.encoding);
    }
    function c(e) {
      if (e && e.length) {
        return this.write(e);
      } else {
        return "";
      }
    }
    tJ.StringDecoder = r;
    r.prototype.write = function (e) {
      var t;
      var r;
      if (e.length === 0) {
        return "";
      }
      if (this.lastNeed) {
        if ((t = this.fillLast(e)) === undefined) {
          return "";
        }
        r = this.lastNeed;
        this.lastNeed = 0;
      } else {
        r = 0;
      }
      if (r < e.length) {
        if (t) {
          return t + this.text(e, r);
        } else {
          return this.text(e, r);
        }
      } else {
        return t || "";
      }
    };
    r.prototype.end = function (e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        return t + "�";
      } else {
        return t;
      }
    };
    r.prototype.text = function (e, t) {
      var r = function (e, t, r) {
        var i = t.length - 1;
        if (i < r) {
          return 0;
        }
        var o = n(t[i]);
        if (o >= 0) {
          if (o > 0) {
            e.lastNeed = o - 1;
          }
          return o;
        } else if (--i < r || o === -2) {
          return 0;
        } else if ((o = n(t[i])) >= 0) {
          if (o > 0) {
            e.lastNeed = o - 2;
          }
          return o;
        } else if (--i < r || o === -2) {
          return 0;
        } else if ((o = n(t[i])) >= 0) {
          if (o > 0) {
            if (o === 2) {
              o = 0;
            } else {
              e.lastNeed = o - 3;
            }
          }
          return o;
        } else {
          return 0;
        }
      }(this, e, t);
      if (!this.lastNeed) {
        return e.toString("utf8", t);
      }
      this.lastTotal = r;
      var i = e.length - (r - this.lastNeed);
      e.copy(this.lastChar, 0, i);
      return e.toString("utf8", t, i);
    };
    r.prototype.fillLast = function (e) {
      if (this.lastNeed <= e.length) {
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
      this.lastNeed -= e.length;
    };
    return tJ;
  }
  function t0() {
    if (ew) {
      return eb;
    }
    ew = 1;
    var e = tY().codes.ERR_STREAM_PREMATURE_CLOSE;
    function t() {}
    return eb = function r(n, i, o) {
      if (typeof i == "function") {
        return r(n, null, i);
      }
      i ||= {};
      a = o || t;
      s = false;
      o = function () {
        if (!s) {
          s = true;
          var e = arguments.length;
          var t = Array(e);
          var r = 0;
          for (; r < e; r++) {
            t[r] = arguments[r];
          }
          a.apply(this, t);
        }
      };
      var a;
      var s;
      var l = i.readable || i.readable !== false && n.readable;
      var u = i.writable || i.writable !== false && n.writable;
      function c() {
        if (!n.writable) {
          d();
        }
      }
      var h = n._writableState && n._writableState.finished;
      function d() {
        u = false;
        h = true;
        if (!l) {
          o.call(n);
        }
      }
      var f = n._readableState && n._readableState.endEmitted;
      function A() {
        l = false;
        f = true;
        if (!u) {
          o.call(n);
        }
      }
      function g(e) {
        o.call(n, e);
      }
      function p() {
        var t;
        if (l && !f) {
          if (!n._readableState || !n._readableState.ended) {
            t = new e();
          }
          return o.call(n, t);
        } else if (u && !h) {
          if (!n._writableState || !n._writableState.ended) {
            t = new e();
          }
          return o.call(n, t);
        } else {
          return undefined;
        }
      }
      function m() {
        n.req.on("finish", d);
      }
      if (n.setHeader && typeof n.abort == "function") {
        n.on("complete", d);
        n.on("abort", p);
        if (n.req) {
          m();
        } else {
          n.on("request", m);
        }
      } else if (u && !n._writableState) {
        n.on("end", c);
        n.on("close", c);
      }
      n.on("end", A);
      n.on("finish", d);
      if (i.error !== false) {
        n.on("error", g);
      }
      n.on("close", p);
      return function () {
        n.removeListener("complete", d);
        n.removeListener("abort", p);
        n.removeListener("request", m);
        if (n.req) {
          n.req.removeListener("finish", d);
        }
        n.removeListener("end", c);
        n.removeListener("close", c);
        n.removeListener("finish", d);
        n.removeListener("end", A);
        n.removeListener("error", g);
        n.removeListener("close", p);
      };
    };
  }
  function t1() {
    if (eD) {
      return ex;
    }
    eD = 1;
    ex = w;
    w.ReadableState = b;
    th.EventEmitter;
    var e;
    var t;
    var r;
    var n;
    var i;
    function o(e, t) {
      return e.listeners(t).length;
    }
    var a = tD();
    var s = tT().Buffer;
    var l = e5.Uint8Array || function () {};
    var u = tZ();
    t = u && u.debuglog ? u.debuglog("stream") : function () {};
    var c = function () {
      if (ea) {
        return eo;
      }
      function e(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          if (t) {
            n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          r.push.apply(r, n);
        }
        return r;
      }
      ea = 1;
      var t = tT().Buffer;
      var r = tZ().inspect;
      var n = r && r.custom || "inspect";
      return eo = function () {
        var i;
        function o() {
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, o);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        i = [{
          key: "push",
          value: function (e) {
            var t = {
              data: e,
              next: null
            };
            if (this.length > 0) {
              this.tail.next = t;
            } else {
              this.head = t;
            }
            this.tail = t;
            ++this.length;
          }
        }, {
          key: "unshift",
          value: function (e) {
            var t = {
              data: e,
              next: this.head
            };
            if (this.length === 0) {
              this.tail = t;
            }
            this.head = t;
            ++this.length;
          }
        }, {
          key: "shift",
          value: function () {
            if (this.length !== 0) {
              var e = this.head.data;
              if (this.length === 1) {
                this.head = this.tail = null;
              } else {
                this.head = this.head.next;
              }
              --this.length;
              return e;
            }
          }
        }, {
          key: "clear",
          value: function () {
            this.head = this.tail = null;
            this.length = 0;
          }
        }, {
          key: "join",
          value: function (e) {
            if (this.length === 0) {
              return "";
            }
            var t = this.head;
            var r = "" + t.data;
            while (t = t.next) {
              r += e + t.data;
            }
            return r;
          }
        }, {
          key: "concat",
          value: function (e) {
            if (this.length === 0) {
              return t.alloc(0);
            }
            var r;
            var n;
            var i = t.allocUnsafe(e >>> 0);
            var o = this.head;
            var a = 0;
            while (o) {
              r = o.data;
              n = a;
              t.prototype.copy.call(r, i, n);
              a += o.data.length;
              o = o.next;
            }
            return i;
          }
        }, {
          key: "consume",
          value: function (e, t) {
            var r;
            if (e < this.head.data.length) {
              r = this.head.data.slice(0, e);
              this.head.data = this.head.data.slice(e);
            } else {
              r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e);
            }
            return r;
          }
        }, {
          key: "first",
          value: function () {
            return this.head.data;
          }
        }, {
          key: "_getString",
          value: function (e) {
            var t = this.head;
            var r = 1;
            var n = t.data;
            for (e -= n.length; t = t.next;) {
              var i = t.data;
              var o = e > i.length ? i.length : e;
              if (o === i.length) {
                n += i;
              } else {
                n += i.slice(0, e);
              }
              if ((e -= o) == 0) {
                if (o === i.length) {
                  ++r;
                  if (t.next) {
                    this.head = t.next;
                  } else {
                    this.head = this.tail = null;
                  }
                } else {
                  this.head = t;
                  t.data = i.slice(o);
                }
                break;
              }
              ++r;
            }
            this.length -= r;
            return n;
          }
        }, {
          key: "_getBuffer",
          value: function (e) {
            var r = t.allocUnsafe(e);
            var n = this.head;
            var i = 1;
            n.data.copy(r);
            e -= n.data.length;
            while (n = n.next) {
              var o = n.data;
              var a = e > o.length ? o.length : e;
              o.copy(r, r.length - e, 0, a);
              if ((e -= a) == 0) {
                if (a === o.length) {
                  ++i;
                  if (n.next) {
                    this.head = n.next;
                  } else {
                    this.head = this.tail = null;
                  }
                } else {
                  this.head = n;
                  n.data = o.slice(a);
                }
                break;
              }
              ++i;
            }
            this.length -= i;
            return r;
          }
        }, {
          key: n,
          value: function (t, n) {
            return r(this, function (t) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r] ?? {};
                if (r % 2) {
                  e(Object(n), true).forEach(function (e) {
                    var r;
                    var i;
                    var o;
                    r = t;
                    i = e;
                    o = n[e];
                    if (i in r) {
                      Object.defineProperty(r, i, {
                        value: o,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      });
                    } else {
                      r[i] = o;
                    }
                  });
                } else if (Object.getOwnPropertyDescriptors) {
                  Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
                } else {
                  e(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
                }
              }
              return t;
            }({}, n, {
              depth: 0,
              customInspect: false
            }));
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, n.key, n);
          }
        })(o.prototype, i);
        return o;
      }();
    }();
    var h = tW();
    var d = tK().getHighWaterMark;
    var f = tY().codes;
    var A = f.ERR_INVALID_ARG_TYPE;
    var g = f.ERR_STREAM_PUSH_AFTER_EOF;
    var p = f.ERR_METHOD_NOT_IMPLEMENTED;
    var m = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    tf(w, a);
    var y = h.errorOrDestroy;
    var v = ["error", "close", "destroy", "pause", "resume"];
    function b(t, n, i) {
      e = e || tV();
      t = t || {};
      if (typeof i != "boolean") {
        i = n instanceof e;
      }
      this.objectMode = !!t.objectMode;
      if (i) {
        this.objectMode = this.objectMode || !!t.readableObjectMode;
      }
      this.highWaterMark = d(this, t, "readableHighWaterMark", i);
      this.buffer = new c();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = t.emitClose !== false;
      this.autoDestroy = !!t.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = t.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (t.encoding) {
        r ||= t$().StringDecoder;
        this.decoder = new r(t.encoding);
        this.encoding = t.encoding;
      }
    }
    function w(t) {
      e = e || tV();
      if (!(this instanceof w)) {
        return new w(t);
      }
      var r = this instanceof e;
      this._readableState = new b(t, this, r);
      this.readable = true;
      if (t) {
        if (typeof t.read == "function") {
          this._read = t.read;
        }
        if (typeof t.destroy == "function") {
          this._destroy = t.destroy;
        }
      }
      a.call(this);
    }
    function C(e, r, n, i, o) {
      t("readableAddChunk", r);
      var a;
      var u;
      var c = e._readableState;
      if (r === null) {
        c.reading = false;
        (function (e, r) {
          t("onEofChunk");
          if (!r.ended) {
            if (r.decoder) {
              var n = r.decoder.end();
              if (n && n.length) {
                r.buffer.push(n);
                r.length += r.objectMode ? 1 : n.length;
              }
            }
            r.ended = true;
            if (r.sync) {
              B(e);
            } else {
              r.needReadable = false;
              if (!r.emittedReadable) {
                r.emittedReadable = true;
                x(e);
              }
            }
          }
        })(e, c);
      } else {
        if (!o) {
          u = function (e, t) {
            var r;
            if (!s.isBuffer(t) && !(t instanceof l) && typeof t != "string" && t !== undefined && !e.objectMode) {
              r = new A("chunk", ["string", "Buffer", "Uint8Array"], t);
            }
            return r;
          }(c, r);
        }
        if (u) {
          y(e, u);
        } else if (c.objectMode || r && r.length > 0) {
          if (typeof r != "string" && !c.objectMode && Object.getPrototypeOf(r) !== s.prototype) {
            a = r;
            r = s.from(a);
          }
          if (i) {
            if (c.endEmitted) {
              y(e, new m());
            } else {
              E(e, c, r, true);
            }
          } else if (c.ended) {
            y(e, new g());
          } else {
            if (c.destroyed) {
              return false;
            }
            c.reading = false;
            if (c.decoder && !n) {
              r = c.decoder.write(r);
              if (c.objectMode || r.length !== 0) {
                E(e, c, r, false);
              } else {
                D(e, c);
              }
            } else {
              E(e, c, r, false);
            }
          }
        } else if (!i) {
          c.reading = false;
          D(e, c);
        }
      }
      return !c.ended && (c.length < c.highWaterMark || c.length === 0);
    }
    function E(e, t, r, n) {
      if (t.flowing && t.length === 0 && !t.sync) {
        t.awaitDrain = 0;
        e.emit("data", r);
      } else {
        t.length += t.objectMode ? 1 : r.length;
        if (n) {
          t.buffer.unshift(r);
        } else {
          t.buffer.push(r);
        }
        if (t.needReadable) {
          B(e);
        }
      }
      D(e, t);
    }
    function I(e, t) {
      if (e <= 0 || t.length === 0 && t.ended) {
        return 0;
      }
      if (t.objectMode) {
        return 1;
      }
      if (e != e) {
        if (t.flowing && t.length) {
          return t.buffer.head.data.length;
        } else {
          return t.length;
        }
      }
      if (e > t.highWaterMark) {
        var r;
        if ((r = e) >= 1073741824) {
          r = 1073741824;
        } else {
          r--;
          r |= r >>> 1;
          r |= r >>> 2;
          r |= r >>> 4;
          r |= r >>> 8;
          r |= r >>> 16;
          r++;
        }
        t.highWaterMark = r;
      }
      if (e <= t.length) {
        return e;
      } else if (t.ended) {
        return t.length;
      } else {
        t.needReadable = true;
        return 0;
      }
    }
    function B(e) {
      var r = e._readableState;
      t("emitReadable", r.needReadable, r.emittedReadable);
      r.needReadable = false;
      if (!r.emittedReadable) {
        t("emitReadable", r.flowing);
        r.emittedReadable = true;
        tx.nextTick(x, e);
      }
    }
    function x(e) {
      var r = e._readableState;
      t("emitReadable_", r.destroyed, r.length, r.ended);
      if (!r.destroyed && (r.length || r.ended)) {
        e.emit("readable");
        r.emittedReadable = false;
      }
      r.needReadable = !r.flowing && !r.ended && r.length <= r.highWaterMark;
      Q(e);
    }
    function D(e, t) {
      if (!t.readingMore) {
        t.readingMore = true;
        tx.nextTick(S, e, t);
      }
    }
    function S(e, r) {
      while (!r.reading && !r.ended && (r.length < r.highWaterMark || r.flowing && r.length === 0)) {
        var n = r.length;
        t("maybeReadMore read 0");
        e.read(0);
        if (n === r.length) {
          break;
        }
      }
      r.readingMore = false;
    }
    function k(e) {
      var t = e._readableState;
      t.readableListening = e.listenerCount("readable") > 0;
      if (t.resumeScheduled && !t.paused) {
        t.flowing = true;
      } else if (e.listenerCount("data") > 0) {
        e.resume();
      }
    }
    function _(e) {
      t("readable nexttick read 0");
      e.read(0);
    }
    function T(e, r) {
      t("resume", r.reading);
      if (!r.reading) {
        e.read(0);
      }
      r.resumeScheduled = false;
      e.emit("resume");
      Q(e);
      if (r.flowing && !r.reading) {
        e.read(0);
      }
    }
    function Q(e) {
      var r = e._readableState;
      for (t("flow", r.flowing); r.flowing && e.read() !== null;);
    }
    function R(e, t) {
      var r;
      if (t.length === 0) {
        return null;
      } else {
        if (t.objectMode) {
          r = t.buffer.shift();
        } else if (!e || e >= t.length) {
          r = t.decoder ? t.buffer.join("") : t.buffer.length === 1 ? t.buffer.first() : t.buffer.concat(t.length);
          t.buffer.clear();
        } else {
          r = t.buffer.consume(e, t.decoder);
        }
        return r;
      }
    }
    function F(e) {
      var r = e._readableState;
      t("endReadable", r.endEmitted);
      if (!r.endEmitted) {
        r.ended = true;
        tx.nextTick(L, r, e);
      }
    }
    function L(e, r) {
      t("endReadableNT", e.endEmitted, e.length);
      if (!e.endEmitted && e.length === 0 && (e.endEmitted = true, r.readable = false, r.emit("end"), e.autoDestroy)) {
        var n = r._writableState;
        if (!n || n.autoDestroy && n.finished) {
          r.destroy();
        }
      }
    }
    function O(e, t) {
      var r = 0;
      var n = e.length;
      for (; r < n; r++) {
        if (e[r] === t) {
          return r;
        }
      }
      return -1;
    }
    Object.defineProperty(w.prototype, "destroyed", {
      enumerable: false,
      get: function () {
        return this._readableState !== undefined && this._readableState.destroyed;
      },
      set: function (e) {
        if (this._readableState) {
          this._readableState.destroyed = e;
        }
      }
    });
    w.prototype.destroy = h.destroy;
    w.prototype._undestroy = h.undestroy;
    w.prototype._destroy = function (e, t) {
      t(e);
    };
    w.prototype.push = function (e, t) {
      var r;
      var n = this._readableState;
      if (n.objectMode) {
        r = true;
      } else if (typeof e == "string") {
        if ((t = t || n.defaultEncoding) !== n.encoding) {
          e = s.from(e, t);
          t = "";
        }
        r = true;
      }
      return C(this, e, t, false, r);
    };
    w.prototype.unshift = function (e) {
      return C(this, e, null, true, false);
    };
    w.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };
    w.prototype.setEncoding = function (e) {
      r ||= t$().StringDecoder;
      var t = new r(e);
      this._readableState.decoder = t;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var n = this._readableState.buffer.head;
      var i = "";
      while (n !== null) {
        i += t.write(n.data);
        n = n.next;
      }
      this._readableState.buffer.clear();
      if (i !== "") {
        this._readableState.buffer.push(i);
      }
      this._readableState.length = i.length;
      return this;
    };
    w.prototype.read = function (e) {
      t("read", e);
      e = parseInt(e, 10);
      var r;
      var n = this._readableState;
      var i = e;
      if (e !== 0) {
        n.emittedReadable = false;
      }
      if (e === 0 && n.needReadable && ((n.highWaterMark !== 0 ? n.length >= n.highWaterMark : n.length > 0) || n.ended)) {
        t("read: emitReadable", n.length, n.ended);
        if (n.length === 0 && n.ended) {
          F(this);
        } else {
          B(this);
        }
        return null;
      }
      if ((e = I(e, n)) === 0 && n.ended) {
        if (n.length === 0) {
          F(this);
        }
        return null;
      }
      var o = n.needReadable;
      t("need readable", o);
      if (n.length === 0 || n.length - e < n.highWaterMark) {
        t("length less than watermark", o = true);
      }
      if (n.ended || n.reading) {
        t("reading or ended", o = false);
      } else if (o) {
        t("do read");
        n.reading = true;
        n.sync = true;
        if (n.length === 0) {
          n.needReadable = true;
        }
        this._read(n.highWaterMark);
        n.sync = false;
        if (!n.reading) {
          e = I(i, n);
        }
      }
      if ((r = e > 0 ? R(e, n) : null) === null) {
        n.needReadable = n.length <= n.highWaterMark;
        e = 0;
      } else {
        n.length -= e;
        n.awaitDrain = 0;
      }
      if (n.length === 0) {
        if (!n.ended) {
          n.needReadable = true;
        }
        if (i !== e && n.ended) {
          F(this);
        }
      }
      if (r !== null) {
        this.emit("data", r);
      }
      return r;
    };
    w.prototype._read = function (e) {
      y(this, new p("_read()"));
    };
    w.prototype.pipe = function (e, r) {
      var n;
      var i = this;
      var a = this._readableState;
      switch (a.pipesCount) {
        case 0:
          a.pipes = e;
          break;
        case 1:
          a.pipes = [a.pipes, e];
          break;
        default:
          a.pipes.push(e);
      }
      a.pipesCount += 1;
      t("pipe count=%d opts=%j", a.pipesCount, r);
      var s = r && r.end === false || e === tx.stdout || e === tx.stderr ? g : l;
      function l() {
        t("onend");
        e.end();
      }
      if (a.endEmitted) {
        tx.nextTick(s);
      } else {
        i.once("end", s);
      }
      e.on("unpipe", function r(n, o) {
        t("onunpipe");
        if (n === i && o && o.hasUnpiped === false) {
          o.hasUnpiped = true;
          t("cleanup");
          e.removeListener("close", f);
          e.removeListener("finish", A);
          e.removeListener("drain", u);
          e.removeListener("error", d);
          e.removeListener("unpipe", r);
          i.removeListener("end", l);
          i.removeListener("end", g);
          i.removeListener("data", h);
          c = true;
          if (a.awaitDrain && (!e._writableState || e._writableState.needDrain)) {
            u();
          }
        }
      });
      n = i;
      function u() {
        var e = n._readableState;
        t("pipeOnDrain", e.awaitDrain);
        if (e.awaitDrain) {
          e.awaitDrain--;
        }
        if (e.awaitDrain === 0 && o(n, "data")) {
          e.flowing = true;
          Q(n);
        }
      }
      e.on("drain", u);
      var c = false;
      function h(r) {
        t("ondata");
        var n = e.write(r);
        t("dest.write", n);
        if (n === false) {
          if ((a.pipesCount === 1 && a.pipes === e || a.pipesCount > 1 && O(a.pipes, e) !== -1) && !c) {
            t("false write response, pause", a.awaitDrain);
            a.awaitDrain++;
          }
          i.pause();
        }
      }
      function d(r) {
        t("onerror", r);
        g();
        e.removeListener("error", d);
        if (o(e, "error") === 0) {
          y(e, r);
        }
      }
      function f() {
        e.removeListener("finish", A);
        g();
      }
      function A() {
        t("onfinish");
        e.removeListener("close", f);
        g();
      }
      function g() {
        t("unpipe");
        i.unpipe(e);
      }
      i.on("data", h);
      (function (e, t, r) {
        if (typeof e.prependListener == "function") {
          return e.prependListener(t, r);
        }
        if (e._events && e._events[t]) {
          if (Array.isArray(e._events[t])) {
            e._events[t].unshift(r);
          } else {
            e._events[t] = [r, e._events[t]];
          }
        } else {
          e.on(t, r);
        }
      })(e, "error", d);
      e.once("close", f);
      e.once("finish", A);
      e.emit("pipe", i);
      if (!a.flowing) {
        t("pipe resume");
        i.resume();
      }
      return e;
    };
    w.prototype.unpipe = function (e) {
      var t = this._readableState;
      var r = {
        hasUnpiped: false
      };
      if (t.pipesCount === 0) {
        return this;
      }
      if (t.pipesCount === 1) {
        if (!e || e === t.pipes) {
          e ||= t.pipes;
          t.pipes = null;
          t.pipesCount = 0;
          t.flowing = false;
          if (e) {
            e.emit("unpipe", this, r);
          }
        }
        return this;
      }
      if (!e) {
        var n = t.pipes;
        var i = t.pipesCount;
        t.pipes = null;
        t.pipesCount = 0;
        t.flowing = false;
        for (var o = 0; o < i; o++) {
          n[o].emit("unpipe", this, {
            hasUnpiped: false
          });
        }
        return this;
      }
      var a = O(t.pipes, e);
      if (a !== -1) {
        t.pipes.splice(a, 1);
        t.pipesCount -= 1;
        if (t.pipesCount === 1) {
          t.pipes = t.pipes[0];
        }
        e.emit("unpipe", this, r);
      }
      return this;
    };
    w.prototype.on = function (e, r) {
      var n = a.prototype.on.call(this, e, r);
      var i = this._readableState;
      if (e === "data") {
        i.readableListening = this.listenerCount("readable") > 0;
        if (i.flowing !== false) {
          this.resume();
        }
      } else if (e === "readable" && !i.endEmitted && !i.readableListening) {
        i.readableListening = i.needReadable = true;
        i.flowing = false;
        i.emittedReadable = false;
        t("on readable", i.length, i.reading);
        if (i.length) {
          B(this);
        } else if (!i.reading) {
          tx.nextTick(_, this);
        }
      }
      return n;
    };
    w.prototype.addListener = w.prototype.on;
    w.prototype.removeListener = function (e, t) {
      var r = a.prototype.removeListener.call(this, e, t);
      if (e === "readable") {
        tx.nextTick(k, this);
      }
      return r;
    };
    w.prototype.removeAllListeners = function (e) {
      var t = a.prototype.removeAllListeners.apply(this, arguments);
      if (e === "readable" || e === undefined) {
        tx.nextTick(k, this);
      }
      return t;
    };
    w.prototype.resume = function () {
      var e;
      var r;
      var n = this._readableState;
      if (!n.flowing) {
        t("resume");
        n.flowing = !n.readableListening;
        e = this;
        if (!(r = n).resumeScheduled) {
          r.resumeScheduled = true;
          tx.nextTick(T, e, r);
        }
      }
      n.paused = false;
      return this;
    };
    w.prototype.pause = function () {
      t("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        t("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    w.prototype.wrap = function (e) {
      var r = this;
      var n = this._readableState;
      var i = false;
      e.on("end", function () {
        t("wrapped end");
        if (n.decoder && !n.ended) {
          var e = n.decoder.end();
          if (e && e.length) {
            r.push(e);
          }
        }
        r.push(null);
      });
      e.on("data", function (o) {
        t("wrapped data");
        if (n.decoder) {
          o = n.decoder.write(o);
        }
        if (!n.objectMode || o != null) {
          if (n.objectMode || o && o.length) {
            if (!r.push(o)) {
              i = true;
              e.pause();
            }
          }
        }
      });
      for (var o in e) {
        if (this[o] === undefined && typeof e[o] == "function") {
          this[o] = function (t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          }(o);
        }
      }
      for (var a = 0; a < v.length; a++) {
        e.on(v[a], this.emit.bind(this, v[a]));
      }
      this._read = function (r) {
        t("wrapped _read", r);
        if (i) {
          i = false;
          e.resume();
        }
      };
      return this;
    };
    if (typeof Symbol == "function") {
      w.prototype[Symbol.asyncIterator] = function () {
        if (n === undefined) {
          n = function () {
            if (eE) {
              return eC;
            }
            function e(e, t, r) {
              if (t in e) {
                Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[t] = r;
              }
              return e;
            }
            eE = 1;
            var t;
            var r = t0();
            var n = Symbol("lastResolve");
            var i = Symbol("lastReject");
            var o = Symbol("error");
            var a = Symbol("ended");
            var s = Symbol("lastPromise");
            var l = Symbol("handlePromise");
            var u = Symbol("stream");
            function c(e, t) {
              return {
                value: e,
                done: t
              };
            }
            function h(e) {
              var t = e[n];
              if (t !== null) {
                var r = e[u].read();
                if (r !== null) {
                  e[s] = null;
                  e[n] = null;
                  e[i] = null;
                  t(c(r, false));
                }
              }
            }
            function d(e) {
              tx.nextTick(h, e);
            }
            var f = Object.getPrototypeOf(function () {});
            var A = Object.setPrototypeOf((e(t = {
              get stream() {
                return this[u];
              },
              next: function () {
                var e;
                var t;
                var r = this;
                var n = this[o];
                if (n !== null) {
                  return Promise.reject(n);
                }
                if (this[a]) {
                  return Promise.resolve(c(undefined, true));
                }
                if (this[u].destroyed) {
                  return new Promise(function (e, t) {
                    tx.nextTick(function () {
                      if (r[o]) {
                        t(r[o]);
                      } else {
                        e(c(undefined, true));
                      }
                    });
                  });
                }
                var i = this[s];
                if (i) {
                  t = new Promise((e = this, function (t, r) {
                    i.then(function () {
                      if (e[a]) {
                        t(c(undefined, true));
                        return;
                      }
                      e[l](t, r);
                    }, r);
                  }));
                } else {
                  var h = this[u].read();
                  if (h !== null) {
                    return Promise.resolve(c(h, false));
                  }
                  t = new Promise(this[l]);
                }
                this[s] = t;
                return t;
              }
            }, Symbol.asyncIterator, function () {
              return this;
            }), e(t, "return", function () {
              var e = this;
              return new Promise(function (t, r) {
                e[u].destroy(null, function (e) {
                  if (e) {
                    r(e);
                    return;
                  }
                  t(c(undefined, true));
                });
              });
            }), t), f);
            return eC = function (t) {
              var h;
              var f = Object.create(A, (e(h = {}, u, {
                value: t,
                writable: true
              }), e(h, n, {
                value: null,
                writable: true
              }), e(h, i, {
                value: null,
                writable: true
              }), e(h, o, {
                value: null,
                writable: true
              }), e(h, a, {
                value: t._readableState.endEmitted,
                writable: true
              }), e(h, l, {
                value: function (e, t) {
                  var r = f[u].read();
                  if (r) {
                    f[s] = null;
                    f[n] = null;
                    f[i] = null;
                    e(c(r, false));
                  } else {
                    f[n] = e;
                    f[i] = t;
                  }
                },
                writable: true
              }), h));
              f[s] = null;
              r(t, function (e) {
                if (e && e.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                  var t = f[i];
                  if (t !== null) {
                    f[s] = null;
                    f[n] = null;
                    f[i] = null;
                    t(e);
                  }
                  f[o] = e;
                  return;
                }
                var r = f[n];
                if (r !== null) {
                  f[s] = null;
                  f[n] = null;
                  f[i] = null;
                  r(c(undefined, true));
                }
                f[a] = true;
              });
              t.on("readable", d.bind(null, f));
              return f;
            };
          }();
        }
        return n(this);
      };
    }
    Object.defineProperty(w.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(w.prototype, "readableBuffer", {
      enumerable: false,
      get: function () {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(w.prototype, "readableFlowing", {
      enumerable: false,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (e) {
        if (this._readableState) {
          this._readableState.flowing = e;
        }
      }
    });
    w._fromList = R;
    Object.defineProperty(w.prototype, "readableLength", {
      enumerable: false,
      get: function () {
        return this._readableState.length;
      }
    });
    if (typeof Symbol == "function") {
      w.from = function (e, t) {
        if (i === undefined) {
          i = eB ? eI : (eB = 1, eI = function () {
            throw Error("Readable.from is not available in the browser");
          });
        }
        return i(w, e, t);
      };
    }
    return ex;
  }
  function t2() {
    if (ek) {
      return eS;
    }
    ek = 1;
    eS = s;
    var e = tY().codes;
    var t = e.ERR_METHOD_NOT_IMPLEMENTED;
    var r = e.ERR_MULTIPLE_CALLBACK;
    var n = e.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var i = e.ERR_TRANSFORM_WITH_LENGTH_0;
    var o = tV();
    function a(e, t) {
      var n = this._transformState;
      n.transforming = false;
      var i = n.writecb;
      if (i === null) {
        return this.emit("error", new r());
      }
      n.writechunk = null;
      n.writecb = null;
      if (t != null) {
        this.push(t);
      }
      i(e);
      var o = this._readableState;
      o.reading = false;
      if (o.needReadable || o.length < o.highWaterMark) {
        this._read(o.highWaterMark);
      }
    }
    function s(e) {
      if (!(this instanceof s)) {
        return new s(e);
      }
      o.call(this, e);
      this._transformState = {
        afterTransform: a.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (e) {
        if (typeof e.transform == "function") {
          this._transform = e.transform;
        }
        if (typeof e.flush == "function") {
          this._flush = e.flush;
        }
      }
      this.on("prefinish", l);
    }
    function l() {
      var e = this;
      if (typeof this._flush != "function" || this._readableState.destroyed) {
        u(this, null, null);
      } else {
        this._flush(function (t, r) {
          u(e, t, r);
        });
      }
    }
    function u(e, t, r) {
      if (t) {
        return e.emit("error", t);
      }
      if (r != null) {
        e.push(r);
      }
      if (e._writableState.length) {
        throw new i();
      }
      if (e._transformState.transforming) {
        throw new n();
      }
      return e.push(null);
    }
    tf(s, o);
    s.prototype.push = function (e, t) {
      this._transformState.needTransform = false;
      return o.prototype.push.call(this, e, t);
    };
    s.prototype._transform = function (e, r, n) {
      n(new t("_transform()"));
    };
    s.prototype._write = function (e, t, r) {
      var n = this._transformState;
      n.writecb = r;
      n.writechunk = e;
      n.writeencoding = t;
      if (!n.transforming) {
        var i = this._readableState;
        if (n.needTransform || i.needReadable || i.length < i.highWaterMark) {
          this._read(i.highWaterMark);
        }
      }
    };
    s.prototype._read = function (e) {
      var t = this._transformState;
      if (t.writechunk === null || t.transforming) {
        t.needTransform = true;
      } else {
        t.transforming = true;
        this._transform(t.writechunk, t.writeencoding, t.afterTransform);
      }
    };
    s.prototype._destroy = function (e, t) {
      o.prototype._destroy.call(this, e, function (e) {
        t(e);
      });
    };
    return eS;
  }
  var t5 = th.EventEmitter;
  function t3() {
    t5.call(this);
  }
  tf(t3, t5);
  t3.Readable = t1();
  t3.Writable = tq();
  t3.Duplex = tV();
  t3.Transform = t2();
  t3.PassThrough = function () {
    if (eT) {
      return e_;
    }
    eT = 1;
    e_ = t;
    var e = t2();
    function t(r) {
      if (!(this instanceof t)) {
        return new t(r);
      }
      e.call(this, r);
    }
    tf(t, e);
    t.prototype._transform = function (e, t, r) {
      r(null, e);
    };
    return e_;
  }();
  t3.finished = t0();
  t3.pipeline = function () {
    if (eR) {
      return eQ;
    }
    eR = 1;
    var e;
    var t = tY().codes;
    var r = t.ERR_MISSING_ARGS;
    var n = t.ERR_STREAM_DESTROYED;
    function i(e) {
      if (e) {
        throw e;
      }
    }
    function o(e) {
      e();
    }
    function a(e, t) {
      return e.pipe(t);
    }
    return eQ = function () {
      var t;
      var s;
      var l = arguments.length;
      var u = Array(l);
      var c = 0;
      for (; c < l; c++) {
        u[c] = arguments[c];
      }
      var h = (t = u).length && typeof t[t.length - 1] == "function" ? t.pop() : i;
      if (Array.isArray(u[0])) {
        u = u[0];
      }
      if (u.length < 2) {
        throw new r("streams");
      }
      var d = u.map(function (t, r) {
        var i;
        var a;
        var l;
        var c;
        var f;
        var A;
        var g = r < u.length - 1;
        i = r > 0;
        l = a = function (e) {
          s ||= e;
          if (e) {
            d.forEach(o);
          }
          if (!g) {
            d.forEach(o);
            h(s);
          }
        };
        c = false;
        a = function () {
          if (!c) {
            c = true;
            l.apply(undefined, arguments);
          }
        };
        f = false;
        t.on("close", function () {
          f = true;
        });
        if (e === undefined) {
          e = t0();
        }
        e(t, {
          readable: g,
          writable: i
        }, function (e) {
          if (e) {
            return a(e);
          }
          f = true;
          a();
        });
        A = false;
        return function (e) {
          if (!f && !A) {
            A = true;
            if (t.setHeader && typeof t.abort == "function") {
              return t.abort();
            }
            if (typeof t.destroy == "function") {
              return t.destroy();
            }
            a(e || new n("pipe"));
          }
        };
      });
      return u.reduce(a);
    };
  }();
  t3.Stream = t3;
  t3.prototype.pipe = function (e, t) {
    var r = this;
    function n(t) {
      if (e.writable && e.write(t) === false && r.pause) {
        r.pause();
      }
    }
    function i() {
      if (r.readable && r.resume) {
        r.resume();
      }
    }
    r.on("data", n);
    e.on("drain", i);
    if (!e._isStdio && (!t || t.end !== false)) {
      r.on("end", a);
      r.on("close", s);
    }
    var o = false;
    function a() {
      if (!o) {
        o = true;
        e.end();
      }
    }
    function s() {
      if (!o) {
        o = true;
        if (typeof e.destroy == "function") {
          e.destroy();
        }
      }
    }
    function l(e) {
      u();
      if (t5.listenerCount(this, "error") === 0) {
        throw e;
      }
    }
    function u() {
      r.removeListener("data", n);
      e.removeListener("drain", i);
      r.removeListener("end", a);
      r.removeListener("close", s);
      r.removeListener("error", l);
      e.removeListener("error", l);
      r.removeListener("end", u);
      r.removeListener("close", u);
      e.removeListener("close", u);
    }
    r.on("error", l);
    e.on("error", l);
    r.on("end", u);
    r.on("close", u);
    e.on("close", u);
    e.emit("pipe", r);
    return e;
  };
  (function (e) {
    e.parser = function (e, t) {
      return new a(e, t);
    };
    e.SAXParser = a;
    e.SAXStream = l;
    e.createStream = function (e, t) {
      return new l(e, t);
    };
    e.MAX_BUFFER_LENGTH = 65536;
    var t;
    var r;
    var n;
    var i;
    var o = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
    function a(t, r) {
      if (!(this instanceof a)) {
        return new a(t, r);
      }
      (function (e) {
        var t = 0;
        var r = o.length;
        for (; t < r; t++) {
          e[o[t]] = "";
        }
      })(this);
      this.q = this.c = "";
      this.bufferCheckPosition = e.MAX_BUFFER_LENGTH;
      this.opt = r || {};
      this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags;
      this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase";
      this.tags = [];
      this.closed = this.closedRoot = this.sawRoot = false;
      this.tag = this.error = null;
      this.strict = !!t;
      this.noscript = !!t || !!this.opt.noscript;
      this.state = v.BEGIN;
      this.strictEntities = this.opt.strictEntities;
      this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES);
      this.attribList = [];
      if (this.opt.xmlns) {
        this.ns = Object.create(h);
      }
      this.trackPosition = this.opt.position !== false;
      if (this.trackPosition) {
        this.position = this.line = this.column = 0;
      }
      w(this, "onready");
    }
    e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
    Object.create ||= function (e) {
      function t() {}
      t.prototype = e;
      return new t();
    };
    Object.keys ||= function (e) {
      var t = [];
      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          t.push(r);
        }
      }
      return t;
    };
    a.prototype = {
      end: function () {
        x(this);
      },
      write: function (t) {
        if (this.error) {
          throw this.error;
        }
        if (this.closed) {
          return B(this, "Cannot write after close. Assign an onready handler.");
        }
        if (t === null) {
          return x(this);
        }
        if (typeof t == "object") {
          t = t.toString();
        }
        var r = 0;
        var n = "";
        while (n = R(t, r++), this.c = n, n) {
          if (this.trackPosition) {
            this.position++;
            if (n === "\n") {
              this.line++;
              this.column = 0;
            } else {
              this.column++;
            }
          }
          switch (this.state) {
            case v.BEGIN:
              this.state = v.BEGIN_WHITESPACE;
              if (n === "﻿") {
                continue;
              }
              Q(this, n);
              continue;
            case v.BEGIN_WHITESPACE:
              Q(this, n);
              continue;
            case v.TEXT:
              if (this.sawRoot && !this.closedRoot) {
                var i;
                var a;
                var s;
                var l = r - 1;
                while (n && n !== "<" && n !== "&") {
                  if ((n = R(t, r++)) && this.trackPosition) {
                    this.position++;
                    if (n === "\n") {
                      this.line++;
                      this.column = 0;
                    } else {
                      this.column++;
                    }
                  }
                }
                this.textNode += t.substring(l, r - 1);
              }
              if (n !== "<" || this.sawRoot && this.closedRoot && !this.strict) {
                if (!p(n) && (!this.sawRoot || !!this.closedRoot)) {
                  D(this, "Text data outside of root node.");
                }
                if (n === "&") {
                  this.state = v.TEXT_ENTITY;
                } else {
                  this.textNode += n;
                }
              } else {
                this.state = v.OPEN_WAKA;
                this.startTagPosition = this.position;
              }
              continue;
            case v.SCRIPT:
              if (n === "<") {
                this.state = v.SCRIPT_ENDING;
              } else {
                this.script += n;
              }
              continue;
            case v.SCRIPT_ENDING:
              if (n === "/") {
                this.state = v.CLOSE_TAG;
              } else {
                this.script += "<" + n;
                this.state = v.SCRIPT;
              }
              continue;
            case v.OPEN_WAKA:
              if (n === "!") {
                this.state = v.SGML_DECL;
                this.sgmlDecl = "";
              } else if (!p(n)) {
                if (y(d, n)) {
                  this.state = v.OPEN_TAG;
                  this.tagName = n;
                } else if (n === "/") {
                  this.state = v.CLOSE_TAG;
                  this.tagName = "";
                } else if (n === "?") {
                  this.state = v.PROC_INST;
                  this.procInstName = this.procInstBody = "";
                } else {
                  D(this, "Unencoded <");
                  if (this.startTagPosition + 1 < this.position) {
                    n = Array(this.position - this.startTagPosition).join(" ") + n;
                  }
                  this.textNode += "<" + n;
                  this.state = v.TEXT;
                }
              }
              continue;
            case v.SGML_DECL:
              if ((this.sgmlDecl + n).toUpperCase() === "[CDATA[") {
                C(this, "onopencdata");
                this.state = v.CDATA;
                this.sgmlDecl = "";
                this.cdata = "";
              } else if (this.sgmlDecl + n === "--") {
                this.state = v.COMMENT;
                this.comment = "";
                this.sgmlDecl = "";
              } else if ((this.sgmlDecl + n).toUpperCase() === "DOCTYPE") {
                this.state = v.DOCTYPE;
                if (this.doctype || this.sawRoot) {
                  D(this, "Inappropriately located doctype declaration");
                }
                this.doctype = "";
                this.sgmlDecl = "";
              } else if (n === ">") {
                C(this, "onsgmldeclaration", this.sgmlDecl);
                this.sgmlDecl = "";
                this.state = v.TEXT;
              } else {
                if (m(n)) {
                  this.state = v.SGML_DECL_QUOTED;
                }
                this.sgmlDecl += n;
              }
              continue;
            case v.SGML_DECL_QUOTED:
              if (n === this.q) {
                this.state = v.SGML_DECL;
                this.q = "";
              }
              this.sgmlDecl += n;
              continue;
            case v.DOCTYPE:
              if (n === ">") {
                this.state = v.TEXT;
                C(this, "ondoctype", this.doctype);
                this.doctype = true;
              } else {
                this.doctype += n;
                if (n === "[") {
                  this.state = v.DOCTYPE_DTD;
                } else if (m(n)) {
                  this.state = v.DOCTYPE_QUOTED;
                  this.q = n;
                }
              }
              continue;
            case v.DOCTYPE_QUOTED:
              this.doctype += n;
              if (n === this.q) {
                this.q = "";
                this.state = v.DOCTYPE;
              }
              continue;
            case v.DOCTYPE_DTD:
              this.doctype += n;
              if (n === "]") {
                this.state = v.DOCTYPE;
              } else if (m(n)) {
                this.state = v.DOCTYPE_DTD_QUOTED;
                this.q = n;
              }
              continue;
            case v.DOCTYPE_DTD_QUOTED:
              this.doctype += n;
              if (n === this.q) {
                this.state = v.DOCTYPE_DTD;
                this.q = "";
              }
              continue;
            case v.COMMENT:
              if (n === "-") {
                this.state = v.COMMENT_ENDING;
              } else {
                this.comment += n;
              }
              continue;
            case v.COMMENT_ENDING:
              if (n === "-") {
                this.state = v.COMMENT_ENDED;
                this.comment = I(this.opt, this.comment);
                if (this.comment) {
                  C(this, "oncomment", this.comment);
                }
                this.comment = "";
              } else {
                this.comment += "-" + n;
                this.state = v.COMMENT;
              }
              continue;
            case v.COMMENT_ENDED:
              if (n !== ">") {
                D(this, "Malformed comment");
                this.comment += "--" + n;
                this.state = v.COMMENT;
              } else {
                this.state = v.TEXT;
              }
              continue;
            case v.CDATA:
              if (n === "]") {
                this.state = v.CDATA_ENDING;
              } else {
                this.cdata += n;
              }
              continue;
            case v.CDATA_ENDING:
              if (n === "]") {
                this.state = v.CDATA_ENDING_2;
              } else {
                this.cdata += "]" + n;
                this.state = v.CDATA;
              }
              continue;
            case v.CDATA_ENDING_2:
              if (n === ">") {
                if (this.cdata) {
                  C(this, "oncdata", this.cdata);
                }
                C(this, "onclosecdata");
                this.cdata = "";
                this.state = v.TEXT;
              } else if (n === "]") {
                this.cdata += "]";
              } else {
                this.cdata += "]]" + n;
                this.state = v.CDATA;
              }
              continue;
            case v.PROC_INST:
              if (n === "?") {
                this.state = v.PROC_INST_ENDING;
              } else if (p(n)) {
                this.state = v.PROC_INST_BODY;
              } else {
                this.procInstName += n;
              }
              continue;
            case v.PROC_INST_BODY:
              if (!!this.procInstBody || !p(n)) {
                if (n === "?") {
                  this.state = v.PROC_INST_ENDING;
                } else {
                  this.procInstBody += n;
                }
              }
              continue;
            case v.PROC_INST_ENDING:
              if (n === ">") {
                C(this, "onprocessinginstruction", {
                  name: this.procInstName,
                  body: this.procInstBody
                });
                this.procInstName = this.procInstBody = "";
                this.state = v.TEXT;
              } else {
                this.procInstBody += "?" + n;
                this.state = v.PROC_INST_BODY;
              }
              continue;
            case v.OPEN_TAG:
              if (y(f, n)) {
                this.tagName += n;
              } else {
                (function (e) {
                  if (!e.strict) {
                    e.tagName = e.tagName[e.looseCase]();
                  }
                  var t = e.tags[e.tags.length - 1] || e;
                  var r = e.tag = {
                    name: e.tagName,
                    attributes: {}
                  };
                  if (e.opt.xmlns) {
                    r.ns = t.ns;
                  }
                  e.attribList.length = 0;
                  C(e, "onopentagstart", r);
                })(this);
                if (n === ">") {
                  _(this);
                } else if (n === "/") {
                  this.state = v.OPEN_TAG_SLASH;
                } else {
                  if (!p(n)) {
                    D(this, "Invalid character in tag name");
                  }
                  this.state = v.ATTRIB;
                }
              }
              continue;
            case v.OPEN_TAG_SLASH:
              if (n === ">") {
                _(this, true);
                T(this);
              } else {
                D(this, "Forward-slash in opening tag not followed by >");
                this.state = v.ATTRIB;
              }
              continue;
            case v.ATTRIB:
              if (!p(n)) {
                if (n === ">") {
                  _(this);
                } else if (n === "/") {
                  this.state = v.OPEN_TAG_SLASH;
                } else if (y(d, n)) {
                  this.attribName = n;
                  this.attribValue = "";
                  this.state = v.ATTRIB_NAME;
                } else {
                  D(this, "Invalid attribute name");
                }
              }
              continue;
            case v.ATTRIB_NAME:
              if (n === "=") {
                this.state = v.ATTRIB_VALUE;
              } else if (n === ">") {
                D(this, "Attribute without value");
                this.attribValue = this.attribName;
                k(this);
                _(this);
              } else if (p(n)) {
                this.state = v.ATTRIB_NAME_SAW_WHITE;
              } else if (y(f, n)) {
                this.attribName += n;
              } else {
                D(this, "Invalid attribute name");
              }
              continue;
            case v.ATTRIB_NAME_SAW_WHITE:
              if (n === "=") {
                this.state = v.ATTRIB_VALUE;
              } else if (!p(n)) {
                D(this, "Attribute without value");
                this.tag.attributes[this.attribName] = "";
                this.attribValue = "";
                C(this, "onattribute", {
                  name: this.attribName,
                  value: ""
                });
                this.attribName = "";
                if (n === ">") {
                  _(this);
                } else if (y(d, n)) {
                  this.attribName = n;
                  this.state = v.ATTRIB_NAME;
                } else {
                  D(this, "Invalid attribute name");
                  this.state = v.ATTRIB;
                }
              }
              continue;
            case v.ATTRIB_VALUE:
              if (!p(n)) {
                if (m(n)) {
                  this.q = n;
                  this.state = v.ATTRIB_VALUE_QUOTED;
                } else {
                  D(this, "Unquoted attribute value");
                  this.state = v.ATTRIB_VALUE_UNQUOTED;
                  this.attribValue = n;
                }
              }
              continue;
            case v.ATTRIB_VALUE_QUOTED:
              if (n !== this.q) {
                if (n === "&") {
                  this.state = v.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  this.attribValue += n;
                }
                continue;
              }
              k(this);
              this.q = "";
              this.state = v.ATTRIB_VALUE_CLOSED;
              continue;
            case v.ATTRIB_VALUE_CLOSED:
              if (p(n)) {
                this.state = v.ATTRIB;
              } else if (n === ">") {
                _(this);
              } else if (n === "/") {
                this.state = v.OPEN_TAG_SLASH;
              } else if (y(d, n)) {
                D(this, "No whitespace between attributes");
                this.attribName = n;
                this.attribValue = "";
                this.state = v.ATTRIB_NAME;
              } else {
                D(this, "Invalid attribute name");
              }
              continue;
            case v.ATTRIB_VALUE_UNQUOTED:
              if ((i = n) !== ">" && !p(i)) {
                if (n === "&") {
                  this.state = v.ATTRIB_VALUE_ENTITY_U;
                } else {
                  this.attribValue += n;
                }
                continue;
              }
              k(this);
              if (n === ">") {
                _(this);
              } else {
                this.state = v.ATTRIB;
              }
              continue;
            case v.CLOSE_TAG:
              if (this.tagName) {
                if (n === ">") {
                  T(this);
                } else if (y(f, n)) {
                  this.tagName += n;
                } else if (this.script) {
                  this.script += "</" + this.tagName;
                  this.tagName = "";
                  this.state = v.SCRIPT;
                } else {
                  if (!p(n)) {
                    D(this, "Invalid tagname in closing tag");
                  }
                  this.state = v.CLOSE_TAG_SAW_WHITE;
                }
              } else if (!p(n)) {
                if (y(d, n)) {
                  this.tagName = n;
                } else if (this.script) {
                  this.script += "</" + n;
                  this.state = v.SCRIPT;
                } else {
                  D(this, "Invalid tagname in closing tag.");
                }
              }
              continue;
            case v.CLOSE_TAG_SAW_WHITE:
              if (p(n)) {
                continue;
              }
              if (n === ">") {
                T(this);
              } else {
                D(this, "Invalid characters in closing tag");
              }
              continue;
            case v.TEXT_ENTITY:
            case v.ATTRIB_VALUE_ENTITY_Q:
            case v.ATTRIB_VALUE_ENTITY_U:
              switch (this.state) {
                case v.TEXT_ENTITY:
                  a = v.TEXT;
                  s = "textNode";
                  break;
                case v.ATTRIB_VALUE_ENTITY_Q:
                  a = v.ATTRIB_VALUE_QUOTED;
                  s = "attribValue";
                  break;
                case v.ATTRIB_VALUE_ENTITY_U:
                  a = v.ATTRIB_VALUE_UNQUOTED;
                  s = "attribValue";
              }
              if (n === ";") {
                this[s] += function (e) {
                  var t;
                  var r = e.entity;
                  var n = r.toLowerCase();
                  var i = "";
                  if (e.ENTITIES[r]) {
                    return e.ENTITIES[r];
                  } else if (e.ENTITIES[n]) {
                    return e.ENTITIES[n];
                  } else {
                    if ((r = n).charAt(0) === "#") {
                      i = r.charAt(1) === "x" ? (t = parseInt(r = r.slice(2), 16)).toString(16) : (t = parseInt(r = r.slice(1), 10)).toString(10);
                    }
                    r = r.replace(/^0+/, "");
                    if (isNaN(t) || i.toLowerCase() !== r) {
                      D(e, "Invalid character entity");
                      return "&" + e.entity + ";";
                    } else {
                      return String.fromCodePoint(t);
                    }
                  }
                }(this);
                this.entity = "";
                this.state = a;
              } else if (y(this.entity.length ? g : A, n)) {
                this.entity += n;
              } else {
                D(this, "Invalid character in entity name");
                this[s] += "&" + this.entity + n;
                this.entity = "";
                this.state = a;
              }
              continue;
            default:
              throw Error(this, "Unknown state: " + this.state);
          }
        }
        if (this.position >= this.bufferCheckPosition) {
          (function (t) {
            var r = Math.max(e.MAX_BUFFER_LENGTH, 10);
            var n = 0;
            var i = 0;
            var a = o.length;
            for (; i < a; i++) {
              var s = t[o[i]].length;
              if (s > r) {
                switch (o[i]) {
                  case "textNode":
                    E(t);
                    break;
                  case "cdata":
                    C(t, "oncdata", t.cdata);
                    t.cdata = "";
                    break;
                  case "script":
                    C(t, "onscript", t.script);
                    t.script = "";
                    break;
                  default:
                    B(t, "Max buffer length exceeded: " + o[i]);
                }
              }
              n = Math.max(n, s);
            }
            var l = e.MAX_BUFFER_LENGTH - n;
            t.bufferCheckPosition = l + t.position;
          })(this);
        }
        return this;
      },
      resume: function () {
        this.error = null;
        return this;
      },
      close: function () {
        return this.write(null);
      },
      flush: function () {
        E(this);
        if (this.cdata !== "") {
          C(this, "oncdata", this.cdata);
          this.cdata = "";
        }
        if (this.script !== "") {
          C(this, "onscript", this.script);
          this.script = "";
        }
      }
    };
    try {
      i = t3.Stream;
    } catch (e) {
      i = function () {};
    }
    var s = e.EVENTS.filter(function (e) {
      return e !== "error" && e !== "end";
    });
    function l(e, t) {
      if (!(this instanceof l)) {
        return new l(e, t);
      }
      i.apply(this);
      this._parser = new a(e, t);
      this.writable = true;
      this.readable = true;
      var r = this;
      this._parser.onend = function () {
        r.emit("end");
      };
      this._parser.onerror = function (e) {
        r.emit("error", e);
        r._parser.error = null;
      };
      this._decoder = null;
      s.forEach(function (e) {
        Object.defineProperty(r, "on" + e, {
          get: function () {
            return r._parser["on" + e];
          },
          set: function (t) {
            if (!t) {
              r.removeAllListeners(e);
              r._parser["on" + e] = t;
              return t;
            }
            r.on(e, t);
          },
          enumerable: true,
          configurable: false
        });
      });
    }
    l.prototype = Object.create(i.prototype, {
      constructor: {
        value: l
      }
    });
    l.prototype.write = function (e) {
      if (typeof eM == "function" && typeof eM.isBuffer == "function" && eM.isBuffer(e)) {
        if (!this._decoder) {
          var t = t$().StringDecoder;
          this._decoder = new t("utf8");
        }
        e = this._decoder.write(e);
      }
      this._parser.write(e.toString());
      this.emit("data", e);
      return true;
    };
    l.prototype.end = function (e) {
      if (e && e.length) {
        this.write(e);
      }
      this._parser.end();
      return true;
    };
    l.prototype.on = function (e, t) {
      var r = this;
      if (!r._parser["on" + e] && s.indexOf(e) !== -1) {
        r._parser["on" + e] = function () {
          var t = arguments.length == 1 ? [arguments[0]] : Array.apply(null, arguments);
          t.splice(0, 0, e);
          r.emit.apply(r, t);
        };
      }
      return i.prototype.on.call(r, e, t);
    };
    var u = "http://www.w3.org/XML/1998/namespace";
    var c = "http://www.w3.org/2000/xmlns/";
    var h = {
      xml: u,
      xmlns: c
    };
    var d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var f = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var A = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var g = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function p(e) {
      return e === " " || e === "\n" || e === "\r" || e === "\t";
    }
    function m(e) {
      return e === "\"" || e === "'";
    }
    function y(e, t) {
      return e.test(t);
    }
    var v = 0;
    e.STATE = {
      BEGIN: v++,
      BEGIN_WHITESPACE: v++,
      TEXT: v++,
      TEXT_ENTITY: v++,
      OPEN_WAKA: v++,
      SGML_DECL: v++,
      SGML_DECL_QUOTED: v++,
      DOCTYPE: v++,
      DOCTYPE_QUOTED: v++,
      DOCTYPE_DTD: v++,
      DOCTYPE_DTD_QUOTED: v++,
      COMMENT_STARTING: v++,
      COMMENT: v++,
      COMMENT_ENDING: v++,
      COMMENT_ENDED: v++,
      CDATA: v++,
      CDATA_ENDING: v++,
      CDATA_ENDING_2: v++,
      PROC_INST: v++,
      PROC_INST_BODY: v++,
      PROC_INST_ENDING: v++,
      OPEN_TAG: v++,
      OPEN_TAG_SLASH: v++,
      ATTRIB: v++,
      ATTRIB_NAME: v++,
      ATTRIB_NAME_SAW_WHITE: v++,
      ATTRIB_VALUE: v++,
      ATTRIB_VALUE_QUOTED: v++,
      ATTRIB_VALUE_CLOSED: v++,
      ATTRIB_VALUE_UNQUOTED: v++,
      ATTRIB_VALUE_ENTITY_Q: v++,
      ATTRIB_VALUE_ENTITY_U: v++,
      CLOSE_TAG: v++,
      CLOSE_TAG_SAW_WHITE: v++,
      SCRIPT: v++,
      SCRIPT_ENDING: v++
    };
    e.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: "\"",
      apos: "'"
    };
    e.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: "\"",
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    };
    Object.keys(e.ENTITIES).forEach(function (t) {
      var r = e.ENTITIES[t];
      var n = typeof r == "number" ? String.fromCharCode(r) : r;
      e.ENTITIES[t] = n;
    });
    for (var b in e.STATE) {
      e.STATE[e.STATE[b]] = b;
    }
    function w(e, t, r) {
      if (e[t]) {
        e[t](r);
      }
    }
    function C(e, t, r) {
      if (e.textNode) {
        E(e);
      }
      w(e, t, r);
    }
    function E(e) {
      e.textNode = I(e.opt, e.textNode);
      if (e.textNode) {
        w(e, "ontext", e.textNode);
      }
      e.textNode = "";
    }
    function I(e, t) {
      if (e.trim) {
        t = t.trim();
      }
      if (e.normalize) {
        t = t.replace(/\s+/g, " ");
      }
      return t;
    }
    function B(e, t) {
      E(e);
      if (e.trackPosition) {
        t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c;
      }
      t = Error(t);
      e.error = t;
      w(e, "onerror", t);
      return e;
    }
    function x(e) {
      if (e.sawRoot && !e.closedRoot) {
        D(e, "Unclosed root tag");
      }
      if (e.state !== v.BEGIN && e.state !== v.BEGIN_WHITESPACE && e.state !== v.TEXT) {
        B(e, "Unexpected end");
      }
      E(e);
      e.c = "";
      e.closed = true;
      w(e, "onend");
      a.call(e, e.strict, e.opt);
      return e;
    }
    function D(e, t) {
      if (typeof e != "object" || !(e instanceof a)) {
        throw Error("bad call to strictFail");
      }
      if (e.strict) {
        B(e, t);
      }
    }
    function S(e, t) {
      var r = e.indexOf(":") < 0 ? ["", e] : e.split(":");
      var n = r[0];
      var i = r[1];
      if (t && e === "xmlns") {
        n = "xmlns";
        i = "";
      }
      return {
        prefix: n,
        local: i
      };
    }
    function k(e) {
      if (!e.strict) {
        e.attribName = e.attribName[e.looseCase]();
      }
      if (e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
        e.attribName = e.attribValue = "";
        return;
      }
      if (e.opt.xmlns) {
        var t = S(e.attribName, true);
        var r = t.prefix;
        var n = t.local;
        if (r === "xmlns") {
          if (n === "xml" && e.attribValue !== u) {
            D(e, "xml: prefix must be bound to " + u + "\nActual: " + e.attribValue);
          } else if (n === "xmlns" && e.attribValue !== c) {
            D(e, "xmlns: prefix must be bound to " + c + "\nActual: " + e.attribValue);
          } else {
            var i = e.tag;
            var o = e.tags[e.tags.length - 1] || e;
            if (i.ns === o.ns) {
              i.ns = Object.create(o.ns);
            }
            i.ns[n] = e.attribValue;
          }
        }
        e.attribList.push([e.attribName, e.attribValue]);
      } else {
        e.tag.attributes[e.attribName] = e.attribValue;
        C(e, "onattribute", {
          name: e.attribName,
          value: e.attribValue
        });
      }
      e.attribName = e.attribValue = "";
    }
    function _(e, t) {
      if (e.opt.xmlns) {
        var r = e.tag;
        var n = S(e.tagName);
        r.prefix = n.prefix;
        r.local = n.local;
        r.uri = r.ns[n.prefix] || "";
        if (r.prefix && !r.uri) {
          D(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName));
          r.uri = n.prefix;
        }
        var i = e.tags[e.tags.length - 1] || e;
        if (r.ns && i.ns !== r.ns) {
          Object.keys(r.ns).forEach(function (t) {
            C(e, "onopennamespace", {
              prefix: t,
              uri: r.ns[t]
            });
          });
        }
        var o = 0;
        var a = e.attribList.length;
        for (; o < a; o++) {
          var s = e.attribList[o];
          var l = s[0];
          var u = s[1];
          var c = S(l, true);
          var h = c.prefix;
          var d = c.local;
          var f = h === "" ? "" : r.ns[h] || "";
          var A = {
            name: l,
            value: u,
            prefix: h,
            local: d,
            uri: f
          };
          if (h && h !== "xmlns" && !f) {
            D(e, "Unbound namespace prefix: " + JSON.stringify(h));
            A.uri = h;
          }
          e.tag.attributes[l] = A;
          C(e, "onattribute", A);
        }
        e.attribList.length = 0;
      }
      e.tag.isSelfClosing = !!t;
      e.sawRoot = true;
      e.tags.push(e.tag);
      C(e, "onopentag", e.tag);
      if (!t) {
        if (e.noscript || e.tagName.toLowerCase() !== "script") {
          e.state = v.TEXT;
        } else {
          e.state = v.SCRIPT;
        }
        e.tag = null;
        e.tagName = "";
      }
      e.attribName = e.attribValue = "";
      e.attribList.length = 0;
    }
    function T(e) {
      if (!e.tagName) {
        D(e, "Weird empty close tag.");
        e.textNode += "</>";
        e.state = v.TEXT;
        return;
      }
      if (e.script) {
        if (e.tagName !== "script") {
          e.script += "</" + e.tagName + ">";
          e.tagName = "";
          e.state = v.SCRIPT;
          return;
        }
        C(e, "onscript", e.script);
        e.script = "";
      }
      var t = e.tags.length;
      var r = e.tagName;
      if (!e.strict) {
        r = r[e.looseCase]();
      }
      var n = r;
      for (; t--;) {
        if (e.tags[t].name !== n) {
          D(e, "Unexpected close tag");
        } else {
          break;
        }
      }
      if (t < 0) {
        D(e, "Unmatched closing tag: " + e.tagName);
        e.textNode += "</" + e.tagName + ">";
        e.state = v.TEXT;
        return;
      }
      e.tagName = r;
      for (var i = e.tags.length; i-- > t;) {
        var o = e.tag = e.tags.pop();
        e.tagName = e.tag.name;
        C(e, "onclosetag", e.tagName);
        var a = {};
        for (var s in o.ns) {
          a[s] = o.ns[s];
        }
        var l = e.tags[e.tags.length - 1] || e;
        if (e.opt.xmlns && o.ns !== l.ns) {
          Object.keys(o.ns).forEach(function (t) {
            var r = o.ns[t];
            C(e, "onclosenamespace", {
              prefix: t,
              uri: r
            });
          });
        }
      }
      if (t === 0) {
        e.closedRoot = true;
      }
      e.tagName = e.attribValue = e.attribName = "";
      e.attribList.length = 0;
      e.state = v.TEXT;
    }
    function Q(e, t) {
      if (t === "<") {
        e.state = v.OPEN_WAKA;
        e.startTagPosition = e.position;
      } else if (!p(t)) {
        D(e, "Non-whitespace before first tag.");
        e.textNode = t;
        e.state = v.TEXT;
      }
    }
    function R(e, t) {
      var r = "";
      if (t < e.length) {
        r = e.charAt(t);
      }
      return r;
    }
    v = e.STATE;
    if (!String.fromCodePoint) {
      t = String.fromCharCode;
      r = Math.floor;
      n = function () {
        var e;
        var n;
        var i = [];
        var o = -1;
        var a = arguments.length;
        if (!a) {
          return "";
        }
        var s = "";
        while (++o < a) {
          var l = Number(arguments[o]);
          if (!isFinite(l) || l < 0 || l > 1114111 || r(l) !== l) {
            throw RangeError("Invalid code point: " + l);
          }
          if (l <= 65535) {
            i.push(l);
          } else {
            l -= 65536;
            e = (l >> 10) + 55296;
            n = l % 1024 + 56320;
            i.push(e, n);
          }
          if (o + 1 === a || i.length > 16384) {
            s += t.apply(null, i);
            i.length = 0;
          }
        }
        return s;
      };
      if (Object.defineProperty) {
        Object.defineProperty(String, "fromCodePoint", {
          value: n,
          configurable: true,
          writable: true
        });
      } else {
        String.fromCodePoint = n;
      }
    }
  })(e4);
  function t4(e) {
    if (Array.isArray) {
      return Array.isArray(e);
    } else {
      return Object.prototype.toString.call(e) === "[object Array]";
    }
  }
  function t6(e) {
    var t;
    var r = {};
    for (t in e) {
      if (e.hasOwnProperty(t)) {
        r[t] = e[t];
      }
    }
    return r;
  }
  function t8(e, t) {
    if (!(e in t) || typeof t[e] != "boolean") {
      t[e] = false;
    }
  }
  function t7(e) {
    if (!("spaces" in e) || typeof e.spaces != "number" && typeof e.spaces != "string") {
      e.spaces = 0;
    }
  }
  function t9(e) {
    if (!("alwaysArray" in e) || typeof e.alwaysArray != "boolean" && !t4(e.alwaysArray)) {
      e.alwaysArray = false;
    }
  }
  function re(e, t) {
    if (!(e + "Key" in t) || typeof t[e + "Key"] != "string") {
      t[e + "Key"] = t.compact ? "_" + e : e;
    }
  }
  function rt(e, t) {
    return e + "Fn" in t;
  }
  function rr(e) {
    var t = Number(e);
    if (!isNaN(t)) {
      return t;
    }
    var r = e.toLowerCase();
    return r === "true" || r !== "false" && e;
  }
  function rn(e, t) {
    var r;
    if (eF.compact) {
      if (!eL[eF[e + "Key"]] && (t4(eF.alwaysArray) ? eF.alwaysArray.indexOf(eF[e + "Key"]) !== -1 : eF.alwaysArray)) {
        eL[eF[e + "Key"]] = [];
      }
      if (eL[eF[e + "Key"]] && !t4(eL[eF[e + "Key"]])) {
        eL[eF[e + "Key"]] = [eL[eF[e + "Key"]]];
      }
      if (e + "Fn" in eF && typeof t == "string") {
        t = eF[e + "Fn"](t, eL);
      }
      if (e === "instruction" && ("instructionFn" in eF || "instructionNameFn" in eF)) {
        for (r in t) {
          if (t.hasOwnProperty(r)) {
            if ("instructionFn" in eF) {
              t[r] = eF.instructionFn(t[r], r, eL);
            } else {
              var n = t[r];
              delete t[r];
              t[eF.instructionNameFn(r, n, eL)] = n;
            }
          }
        }
      }
      if (t4(eL[eF[e + "Key"]])) {
        eL[eF[e + "Key"]].push(t);
      } else {
        eL[eF[e + "Key"]] = t;
      }
    } else {
      eL[eF.elementsKey] ||= [];
      var i = {
        [eF.typeKey]: e
      };
      if (e === "instruction") {
        for (r in t) {
          if (t.hasOwnProperty(r)) {
            break;
          }
        }
        i[eF.nameKey] = "instructionNameFn" in eF ? eF.instructionNameFn(r, t, eL) : r;
        if (eF.instructionHasAttributes) {
          i[eF.attributesKey] = t[r][eF.attributesKey];
          if ("instructionFn" in eF) {
            i[eF.attributesKey] = eF.instructionFn(i[eF.attributesKey], r, eL);
          }
        } else {
          if ("instructionFn" in eF) {
            t[r] = eF.instructionFn(t[r], r, eL);
          }
          i[eF.instructionKey] = t[r];
        }
      } else {
        if (e + "Fn" in eF) {
          t = eF[e + "Fn"](t, eL);
        }
        i[eF[e + "Key"]] = t;
      }
      if (eF.addParent) {
        i[eF.parentKey] = eL;
      }
      eL[eF.elementsKey].push(i);
    }
  }
  function ri(e) {
    if ("attributesFn" in eF && e) {
      e = eF.attributesFn(e, eL);
    }
    if ((eF.trim || "attributeValueFn" in eF || "attributeNameFn" in eF || eF.nativeTypeAttributes) && e) {
      var t;
      for (t in e) {
        if (e.hasOwnProperty(t) && (eF.trim && (e[t] = e[t].trim()), eF.nativeTypeAttributes && (e[t] = rr(e[t])), "attributeValueFn" in eF && (e[t] = eF.attributeValueFn(e[t], t, eL)), "attributeNameFn" in eF)) {
          var r = e[t];
          delete e[t];
          e[eF.attributeNameFn(t, e[t], eL)] = r;
        }
      }
    }
    return e;
  }
  function ro(e) {
    var t = {};
    if (e.body && (e.name.toLowerCase() === "xml" || eF.instructionHasAttributes)) {
      var r;
      var n = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
      while ((r = n.exec(e.body)) !== null) {
        t[r[1]] = r[2] || r[3] || r[4];
      }
      t = ri(t);
    }
    if (e.name.toLowerCase() === "xml") {
      if (eF.ignoreDeclaration) {
        return;
      }
      eL[eF.declarationKey] = {};
      if (Object.keys(t).length) {
        eL[eF.declarationKey][eF.attributesKey] = t;
      }
      if (eF.addParent) {
        eL[eF.declarationKey][eF.parentKey] = eL;
      }
    } else {
      if (eF.ignoreInstruction) {
        return;
      }
      if (eF.trim) {
        e.body = e.body.trim();
      }
      var i = {};
      if (eF.instructionHasAttributes && Object.keys(t).length) {
        i[e.name] = {};
        i[e.name][eF.attributesKey] = t;
      } else {
        i[e.name] = e.body;
      }
      rn("instruction", i);
    }
  }
  function ra(e, t) {
    var r;
    var n;
    if (typeof e == "object") {
      t = e.attributes;
      e = e.name;
    }
    t = ri(t);
    if ("elementNameFn" in eF) {
      e = eF.elementNameFn(e, eL);
    }
    if (eF.compact) {
      r = {};
      if (!eF.ignoreAttributes && t && Object.keys(t).length) {
        r[eF.attributesKey] = {};
        for (n in t) {
          if (t.hasOwnProperty(n)) {
            r[eF.attributesKey][n] = t[n];
          }
        }
      }
      if (!(e in eL) && !(t4(eF.alwaysArray) ? eF.alwaysArray.indexOf(e) === -1 : !eF.alwaysArray)) {
        eL[e] = [];
      }
      if (eL[e] && !t4(eL[e])) {
        eL[e] = [eL[e]];
      }
      if (t4(eL[e])) {
        eL[e].push(r);
      } else {
        eL[e] = r;
      }
    } else {
      eL[eF.elementsKey] ||= [];
      (r = {})[eF.typeKey] = "element";
      r[eF.nameKey] = e;
      if (!eF.ignoreAttributes && t && Object.keys(t).length) {
        r[eF.attributesKey] = t;
      }
      if (eF.alwaysChildren) {
        r[eF.elementsKey] = [];
      }
      eL[eF.elementsKey].push(r);
    }
    r[eF.parentKey] = eL;
    eL = r;
  }
  function rs(e) {
    if (!eF.ignoreText && (e.trim() || eF.captureSpacesBetweenElements)) {
      if (eF.trim) {
        e = e.trim();
      }
      if (eF.nativeType) {
        e = rr(e);
      }
      if (eF.sanitize) {
        e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      rn("text", e);
    }
  }
  function rl(e) {
    if (!eF.ignoreComment) {
      if (eF.trim) {
        e = e.trim();
      }
      rn("comment", e);
    }
  }
  function ru(e) {
    var t = eL[eF.parentKey];
    if (!eF.addParent) {
      delete eL[eF.parentKey];
    }
    eL = t;
  }
  function rc(e) {
    if (!eF.ignoreCdata) {
      if (eF.trim) {
        e = e.trim();
      }
      rn("cdata", e);
    }
  }
  function rh(e) {
    if (!eF.ignoreDoctype) {
      e = e.replace(/^ /, "");
      if (eF.trim) {
        e = e.trim();
      }
      rn("doctype", e);
    }
  }
  function rd(e) {
    e.note = e;
  }
  function rf(e, t, r) {
    return (!r && e.spaces ? "\n" : "") + Array(t + 1).join(e.spaces);
  }
  function rA(e, t, r) {
    if (t.ignoreAttributes) {
      return "";
    }
    if ("attributesFn" in t) {
      e = t.attributesFn(e, eN, eO);
    }
    var n;
    var i;
    var o;
    var a;
    var s = [];
    for (n in e) {
      if (e.hasOwnProperty(n) && e[n] !== null && e[n] !== undefined) {
        a = t.noQuotesForNativeAttributes && typeof e[n] != "string" ? "" : "\"";
        i = (i = "" + e[n]).replace(/"/g, "&quot;");
        o = "attributeNameFn" in t ? t.attributeNameFn(n, i, eN, eO) : n;
        s.push(t.spaces && t.indentAttributes ? rf(t, r + 1, false) : " ");
        s.push(o + "=" + a + ("attributeValueFn" in t ? t.attributeValueFn(i, n, eN, eO) : i) + a);
      }
    }
    if (e && Object.keys(e).length && t.spaces && t.indentAttributes) {
      s.push(rf(t, r, false));
    }
    return s.join("");
  }
  function rg(e, t, r) {
    eO = e;
    eN = "xml";
    if (t.ignoreDeclaration) {
      return "";
    } else {
      return "<?xml" + rA(e[t.attributesKey], t, r) + "?>";
    }
  }
  function rp(e, t, r) {
    if (t.ignoreInstruction) {
      return "";
    }
    for (n in e) {
      if (e.hasOwnProperty(n)) {
        break;
      }
    }
    var n;
    var i = "instructionNameFn" in t ? t.instructionNameFn(n, e[n], eN, eO) : n;
    if (typeof e[n] == "object") {
      eO = e;
      eN = i;
      return "<?" + i + rA(e[n][t.attributesKey], t, r) + "?>";
    }
    var o = e[n] ? e[n] : "";
    if ("instructionFn" in t) {
      o = t.instructionFn(o, n, eN, eO);
    }
    return "<?" + i + (o ? " " + o : "") + "?>";
  }
  function rm(e, t) {
    if (t.ignoreComment) {
      return "";
    } else {
      return "<!--" + ("commentFn" in t ? t.commentFn(e, eN, eO) : e) + "-->";
    }
  }
  function ry(e, t) {
    if (t.ignoreCdata) {
      return "";
    } else {
      return "<![CDATA[" + ("cdataFn" in t ? t.cdataFn(e, eN, eO) : e.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
    }
  }
  function rv(e, t) {
    if (t.ignoreDoctype) {
      return "";
    } else {
      return "<!DOCTYPE " + ("doctypeFn" in t ? t.doctypeFn(e, eN, eO) : e) + ">";
    }
  }
  function rb(e, t) {
    if (t.ignoreText) {
      return "";
    } else {
      e = (e = (e = "" + e).replace(/&amp;/g, "&")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if ("textFn" in t) {
        return t.textFn(e, eN, eO);
      } else {
        return e;
      }
    }
  }
  function rw(e, t, r) {
    var n;
    for (n in e) {
      if (e.hasOwnProperty(n)) {
        switch (n) {
          case t.parentKey:
          case t.attributesKey:
            break;
          case t.textKey:
            if (t.indentText || r) {
              return true;
            }
            break;
          case t.cdataKey:
            if (t.indentCdata || r) {
              return true;
            }
            break;
          case t.instructionKey:
            if (t.indentInstruction || r) {
              return true;
            }
            break;
          case t.doctypeKey:
          case t.commentKey:
          default:
            return true;
        }
      }
    }
    return false;
  }
  function rC(e, t) {
    var r = e4.parser(true, {});
    var n = {};
    eL = n;
    eF = t6(t);
    t8("ignoreDeclaration", eF);
    t8("ignoreInstruction", eF);
    t8("ignoreAttributes", eF);
    t8("ignoreText", eF);
    t8("ignoreComment", eF);
    t8("ignoreCdata", eF);
    t8("ignoreDoctype", eF);
    t8("compact", eF);
    t8("alwaysChildren", eF);
    t8("addParent", eF);
    t8("trim", eF);
    t8("nativeType", eF);
    t8("nativeTypeAttributes", eF);
    t8("sanitize", eF);
    t8("instructionHasAttributes", eF);
    t8("captureSpacesBetweenElements", eF);
    t9(eF);
    re("declaration", eF);
    re("instruction", eF);
    re("attributes", eF);
    re("text", eF);
    re("comment", eF);
    re("cdata", eF);
    re("doctype", eF);
    re("type", eF);
    re("name", eF);
    re("elements", eF);
    re("parent", eF);
    rt("doctype", eF);
    rt("instruction", eF);
    rt("cdata", eF);
    rt("comment", eF);
    rt("text", eF);
    rt("instructionName", eF);
    rt("elementName", eF);
    rt("attributeName", eF);
    rt("attributeValue", eF);
    rt("attributes", eF);
    r.opt = {
      strictEntities: true
    };
    r.onopentag = ra;
    r.ontext = rs;
    r.oncomment = rl;
    r.onclosetag = ru;
    r.onerror = rd;
    r.oncdata = rc;
    r.ondoctype = rh;
    r.onprocessinginstruction = ro;
    r.write(e).close();
    if (n[eF.elementsKey]) {
      var i = n[eF.elementsKey];
      delete n[eF.elementsKey];
      n[eF.elementsKey] = i;
      delete n.text;
    }
    return n;
  }
  let rE = e => {
    switch (e.type) {
      case undefined:
      case "element":
        let t = new rB(e.name, e.attributes);
        for (let r of e.elements || []) {
          let e = rE(r);
          if (e !== undefined) {
            t.push(e);
          }
        }
        return t;
      case "text":
        return e.text;
      default:
        return;
    }
  };
  class rI extends e0 {}
  class rB extends eX {
    static fromXmlString(e) {
      return rE(rC(e, {
        compact: false
      }));
    }
    constructor(e, t) {
      super(e);
      if (t) {
        this.root.push(new rI(t));
      }
    }
    push(e) {
      this.root.push(e);
    }
  }
  class rx extends eX {
    constructor(e) {
      super("");
      this._attr = e;
    }
    prepForXml(e) {
      return {
        _attr: this._attr
      };
    }
  }
  class rD extends eX {
    constructor(e, t) {
      super(e);
      if (t) {
        this.root = t.root;
      }
    }
  }
  let rS = e => {
    if (isNaN(e)) {
      throw Error(`Invalid value '${e}' specified. Must be an integer.`);
    }
    return Math.floor(e);
  };
  let rk = e => {
    let t = rS(e);
    if (t < 0) {
      throw Error(`Invalid value '${e}' specified. Must be a positive integer.`);
    }
    return t;
  };
  let r_ = (e, t) => {
    let r = t * 2;
    if (e.length !== r || isNaN(Number(`0x${e}`))) {
      throw Error(`Invalid hex value '${e}'. Expected ${r} digit hex value`);
    }
    return e;
  };
  let rT = e => r_(e, 1);
  let rQ = e => {
    let t = e.slice(-2);
    let r = e.substring(0, e.length - 2);
    return `${Number(r)}${t}`;
  };
  let rR = e => {
    let t = rQ(e);
    if (parseFloat(t) < 0) {
      throw Error(`Invalid value '${t}' specified. Expected a positive number.`);
    }
    return t;
  };
  let rF = e => e === "auto" ? e : r_(e.charAt(0) === "#" ? e.substring(1) : e, 3);
  let rL = e => typeof e == "string" ? rQ(e) : rS(e);
  let rO = e => typeof e == "string" ? rR(e) : rk(e);
  let rN = e => typeof e == "string" ? rR(e) : rk(e);
  let rM = e => {
    let t = e.substring(0, e.length - 1);
    return `${Number(t)}%`;
  };
  let rP = e => typeof e == "number" ? rS(e) : e.slice(-1) === "%" ? rM(e) : rQ(e);
  let rU = e => e.toISOString();
  class rz extends eX {
    constructor(e, t = true) {
      super(e);
      if (t !== true) {
        this.root.push(new e2({
          val: t
        }));
      }
    }
  }
  class rH extends eX {
    constructor(e, t) {
      super(e);
      this.root.push(new e2({
        val: rO(t)
      }));
    }
  }
  class rG extends eX {
    constructor(e, t) {
      super(e);
      this.root.push(new e2({
        val: t
      }));
    }
  }
  let rZ = (e, t) => new rK({
    name: e,
    attributes: {
      value: {
        key: "w:val",
        value: t
      }
    }
  });
  class rW extends eX {
    constructor(e, t) {
      super(e);
      this.root.push(new e2({
        val: t
      }));
    }
  }
  class rj extends eX {
    constructor(e, t) {
      super(e);
      this.root.push(new e2({
        val: t
      }));
    }
  }
  class rY extends eX {
    constructor(e, t) {
      super(e);
      this.root.push(t);
    }
  }
  class rK extends eX {
    constructor({
      name: e,
      attributes: t,
      children: r
    }) {
      super(e);
      if (t) {
        this.root.push(new e1(t));
      }
      if (r) {
        this.root.push(...r);
      }
    }
  }
  let rq = {
    START: "start",
    CENTER: "center",
    END: "end",
    BOTH: "both",
    MEDIUM_KASHIDA: "mediumKashida",
    DISTRIBUTE: "distribute",
    NUM_TAB: "numTab",
    HIGH_KASHIDA: "highKashida",
    LOW_KASHIDA: "lowKashida",
    THAI_DISTRIBUTE: "thaiDistribute",
    LEFT: "left",
    RIGHT: "right",
    JUSTIFIED: "both"
  };
  class rV extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class rJ extends eX {
    constructor(e) {
      super("w:jc");
      this.root.push(new rV({
        val: e
      }));
    }
  }
  class rX extends eX {
    constructor(e, {
      color: t,
      size: r,
      space: n,
      style: i
    }) {
      super(e);
      this.root.push(new r$({
        style: i,
        color: t === undefined ? undefined : rF(t),
        size: r === undefined ? undefined : rk(r),
        space: n === undefined ? undefined : rk(n)
      }));
    }
  }
  class r$ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        style: "w:val",
        color: "w:color",
        size: "w:sz",
        space: "w:space"
      });
    }
  }
  let r0 = "single";
  class r1 extends e$ {
    constructor(e) {
      super("w:pBdr");
      if (e.top) {
        this.root.push(new rX("w:top", e.top));
      }
      if (e.bottom) {
        this.root.push(new rX("w:bottom", e.bottom));
      }
      if (e.left) {
        this.root.push(new rX("w:left", e.left));
      }
      if (e.right) {
        this.root.push(new rX("w:right", e.right));
      }
    }
  }
  class r2 extends eX {
    constructor() {
      super("w:pBdr");
      let e = new rX("w:bottom", {
        color: "auto",
        space: 1,
        style: r0,
        size: 6
      });
      this.root.push(e);
    }
  }
  class r5 extends eX {
    constructor({
      start: e,
      end: t,
      left: r,
      right: n,
      hanging: i,
      firstLine: o
    }) {
      super("w:ind");
      this.root.push(new e1({
        start: {
          key: "w:start",
          value: e === undefined ? undefined : rL(e)
        },
        end: {
          key: "w:end",
          value: t === undefined ? undefined : rL(t)
        },
        left: {
          key: "w:left",
          value: r === undefined ? undefined : rL(r)
        },
        right: {
          key: "w:right",
          value: n === undefined ? undefined : rL(n)
        },
        hanging: {
          key: "w:hanging",
          value: i === undefined ? undefined : rN(i)
        },
        firstLine: {
          key: "w:firstLine",
          value: o === undefined ? undefined : rN(o)
        }
      }));
    }
  }
  let r3 = class extends eX {
    constructor() {
      super("w:br");
    }
  };
  class r4 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        type: "w:fldCharType",
        dirty: "w:dirty"
      });
    }
  }
  class r6 extends eX {
    constructor(e) {
      super("w:fldChar");
      this.root.push(new r4({
        type: "begin",
        dirty: e
      }));
    }
  }
  class r8 extends eX {
    constructor(e) {
      super("w:fldChar");
      this.root.push(new r4({
        type: "separate",
        dirty: e
      }));
    }
  }
  class r7 extends eX {
    constructor(e) {
      super("w:fldChar");
      this.root.push(new r4({
        type: "end",
        dirty: e
      }));
    }
  }
  let r9 = {
    DEFAULT: "default",
    PRESERVE: "preserve"
  };
  class ne extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        space: "xml:space"
      });
    }
  }
  class nt extends eX {
    constructor() {
      super("w:instrText");
      this.root.push(new ne({
        space: r9.PRESERVE
      }));
      this.root.push("PAGE");
    }
  }
  class nr extends eX {
    constructor() {
      super("w:instrText");
      this.root.push(new ne({
        space: r9.PRESERVE
      }));
      this.root.push("NUMPAGES");
    }
  }
  class nn extends eX {
    constructor() {
      super("w:instrText");
      this.root.push(new ne({
        space: r9.PRESERVE
      }));
      this.root.push("SECTIONPAGES");
    }
  }
  class ni extends eX {
    constructor() {
      super("w:instrText");
      this.root.push(new ne({
        space: r9.PRESERVE
      }));
      this.root.push("SECTION");
    }
  }
  class no extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        fill: "w:fill",
        color: "w:color",
        type: "w:val"
      });
    }
  }
  class na extends eX {
    constructor({
      fill: e,
      color: t,
      type: r
    }) {
      super("w:shd");
      this.root.push(new no({
        fill: e === undefined ? undefined : rF(e),
        color: t === undefined ? undefined : rF(t),
        type: r
      }));
    }
  }
  class ns extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "w:id",
        author: "w:author",
        date: "w:date"
      });
    }
  }
  class nl extends eX {
    constructor(e) {
      super("w:em");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class nu extends nl {
    constructor(e = "dot") {
      super(e);
    }
  }
  class nc extends eX {
    constructor(e) {
      super("w:spacing");
      this.root.push(new e2({
        val: rL(e)
      }));
    }
  }
  class nh extends eX {
    constructor(e) {
      super("w:color");
      this.root.push(new e2({
        val: rF(e)
      }));
    }
  }
  class nd extends eX {
    constructor(e) {
      super("w:highlight");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class nf extends eX {
    constructor(e) {
      super("w:highlightCs");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  let nA = e => new rK({
    name: "w:lang",
    attributes: {
      value: {
        key: "w:val",
        value: e.value
      },
      eastAsia: {
        key: "w:eastAsia",
        value: e.eastAsia
      },
      bidirectional: {
        key: "w:bidi",
        value: e.bidirectional
      }
    }
  });
  class ng extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        ascii: "w:ascii",
        cs: "w:cs",
        eastAsia: "w:eastAsia",
        hAnsi: "w:hAnsi",
        hint: "w:hint"
      });
    }
  }
  class np extends eX {
    constructor(e, t) {
      super("w:rFonts");
      if (typeof e == "string") {
        this.root.push(new ng({
          ascii: e,
          cs: e,
          eastAsia: e,
          hAnsi: e,
          hint: t
        }));
      } else {
        this.root.push(new ng(e));
      }
    }
  }
  let nm = class extends eX {
    constructor(e) {
      super("w:vertAlign");
      this.root.push(new e2({
        val: e
      }));
    }
  };
  class ny extends nm {
    constructor() {
      super("superscript");
    }
  }
  class nv extends nm {
    constructor() {
      super("subscript");
    }
  }
  let nb = "single";
  class nw extends eX {
    constructor(e = nb, t) {
      super("w:u");
      this.root.push(new e2({
        val: e,
        color: t === undefined ? undefined : rF(t)
      }));
    }
  }
  class nC extends e$ {
    constructor(e) {
      super("w:rPr");
      if (!e) {
        return;
      }
      if (e.noProof !== undefined) {
        this.push(new rz("w:noProof", e.noProof));
      }
      if (e.bold !== undefined) {
        this.push(new rz("w:b", e.bold));
      }
      if (e.boldComplexScript === undefined && e.bold !== undefined || e.boldComplexScript) {
        this.push(new rz("w:bCs", e.boldComplexScript ?? e.bold));
      }
      if (e.italics !== undefined) {
        this.push(new rz("w:i", e.italics));
      }
      if (e.italicsComplexScript === undefined && e.italics !== undefined || e.italicsComplexScript) {
        this.push(new rz("w:iCs", e.italicsComplexScript ?? e.italics));
      }
      if (e.underline) {
        this.push(new nw(e.underline.type, e.underline.color));
      }
      if (e.effect) {
        this.push(new rG("w:effect", e.effect));
      }
      if (e.emphasisMark) {
        this.push(new nu(e.emphasisMark.type));
      }
      if (e.color) {
        this.push(new nh(e.color));
      }
      if (e.kern) {
        this.push(new rH("w:kern", e.kern));
      }
      if (e.position) {
        this.push(new rG("w:position", e.position));
      }
      if (e.size !== undefined) {
        this.push(new rH("w:sz", e.size));
      }
      let n = e.sizeComplexScript === undefined || e.sizeComplexScript === true ? e.size : e.sizeComplexScript;
      if (n) {
        this.push(new rH("w:szCs", n));
      }
      if (e.rightToLeft !== undefined) {
        this.push(new rz("w:rtl", e.rightToLeft));
      }
      if (e.smallCaps !== undefined) {
        this.push(new rz("w:smallCaps", e.smallCaps));
      } else if (e.allCaps !== undefined) {
        this.push(new rz("w:caps", e.allCaps));
      }
      if (e.strike !== undefined) {
        this.push(new rz("w:strike", e.strike));
      }
      if (e.doubleStrike !== undefined) {
        this.push(new rz("w:dstrike", e.doubleStrike));
      }
      if (e.subScript) {
        this.push(new nv());
      }
      if (e.superScript) {
        this.push(new ny());
      }
      if (e.style) {
        this.push(new rG("w:rStyle", e.style));
      }
      if (e.font) {
        if (typeof e.font == "string") {
          this.push(new np(e.font));
        } else if ("name" in e.font) {
          this.push(new np(e.font.name, e.font.hint));
        } else {
          this.push(new np(e.font));
        }
      }
      if (e.highlight) {
        this.push(new nd(e.highlight));
      }
      let i = e.highlightComplexScript === undefined || e.highlightComplexScript === true ? e.highlight : e.highlightComplexScript;
      if (i) {
        this.push(new nf(i));
      }
      if (e.characterSpacing) {
        this.push(new nc(e.characterSpacing));
      }
      if (e.emboss !== undefined) {
        this.push(new rz("w:emboss", e.emboss));
      }
      if (e.imprint !== undefined) {
        this.push(new rz("w:imprint", e.imprint));
      }
      if (e.shading) {
        this.push(new na(e.shading));
      }
      if (e.revision) {
        this.push(new nE(e.revision));
      }
      if (e.border) {
        this.push(new rX("w:bdr", e.border));
      }
      if (e.snapToGrid !== undefined) {
        this.push(new rz("w:snapToGrid", e.snapToGrid));
      }
      if (e.vanish) {
        this.push(new rz("w:vanish", e.vanish));
      }
      if (e.specVanish) {
        this.push(new rz("w:specVanish", e.vanish));
      }
      if (e.scale !== undefined) {
        this.push(new rW("w:w", e.scale));
      }
      if (e.language) {
        this.push(nA(e.language));
      }
      if (e.math) {
        this.push(new rz("w:oMath", e.math));
      }
    }
    push(e) {
      this.root.push(e);
    }
  }
  class nE extends eX {
    constructor(e) {
      super("w:rPrChange");
      this.root.push(new ns({
        id: e.id,
        author: e.author,
        date: e.date
      }));
      this.addChildElement(new nC(e));
    }
  }
  class nI extends eX {
    constructor(e) {
      super("w:t");
      if (typeof e == "string") {
        this.root.push(new ne({
          space: r9.PRESERVE
        }));
        this.root.push(e);
        return this;
      }
      this.root.push(new ne({
        space: e.space ?? r9.DEFAULT
      }));
      this.root.push(e.text);
      return this;
    }
  }
  let nB = {
    CURRENT: "CURRENT",
    TOTAL_PAGES: "TOTAL_PAGES",
    TOTAL_PAGES_IN_SECTION: "TOTAL_PAGES_IN_SECTION",
    CURRENT_SECTION: "SECTION"
  };
  class nx extends eX {
    constructor(e) {
      super("w:r");
      eK(this, "properties");
      this.properties = new nC(e);
      this.root.push(this.properties);
      if (e.break) {
        for (let t = 0; t < e.break; t++) {
          this.root.push(new r3());
        }
      }
      if (e.children) {
        for (let t of e.children) {
          if (typeof t == "string") {
            switch (t) {
              case nB.CURRENT:
                this.root.push(new r6());
                this.root.push(new nt());
                this.root.push(new r8());
                this.root.push(new r7());
                break;
              case nB.TOTAL_PAGES:
                this.root.push(new r6());
                this.root.push(new nr());
                this.root.push(new r8());
                this.root.push(new r7());
                break;
              case nB.TOTAL_PAGES_IN_SECTION:
                this.root.push(new r6());
                this.root.push(new nn());
                this.root.push(new r8());
                this.root.push(new r7());
                break;
              case nB.CURRENT_SECTION:
                this.root.push(new r6());
                this.root.push(new ni());
                this.root.push(new r8());
                this.root.push(new r7());
                break;
              default:
                this.root.push(new nI(t));
            }
            continue;
          }
          this.root.push(t);
        }
      } else if (e.text) {
        this.root.push(new nI(e.text));
      }
    }
  }
  class nD extends nx {
    constructor(e) {
      if (typeof e == "string") {
        super({});
        this.root.push(new nI(e));
        return this;
      }
      super(e);
    }
  }
  let nS = (e, t = 21) => (r = t) => {
    let n = "";
    let i = r;
    while (i--) {
      n += e[Math.random() * e.length | 0];
    }
    return n;
  };
  let nk = (e = 21) => {
    let t = "";
    let r = e;
    while (r--) {
      t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[Math.random() * 64 | 0];
    }
    return t;
  };
  let n_ = e => Math.floor(e * 1440);
  let nT = (e = 0) => {
    let t = e;
    return () => ++t;
  };
  let nQ = () => nT();
  let nR = () => nT(1);
  let nF = () => nT();
  let nL = () => nT();
  let nO = () => nk().toLowerCase();
  let nN = e => nS("1234567890abcdef", e)();
  let nM = () => `${nN(8)}-${nN(4)}-${nN(4)}-${nN(4)}-${nN(12)}`;
  let nP = {
    PAGE: "page"
  };
  let nU = {
    PAGE: "page"
  };
  class nz extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        x: "x",
        y: "y"
      });
    }
  }
  class nH extends eX {
    constructor() {
      super("wp:simplePos");
      this.root.push(new nz({
        x: 0,
        y: 0
      }));
    }
  }
  class nG extends eX {
    constructor(e) {
      super("wp:align");
      this.root.push(e);
    }
  }
  class nZ extends eX {
    constructor(e) {
      super("wp:posOffset");
      this.root.push(e.toString());
    }
  }
  class nW extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        relativeFrom: "relativeFrom"
      });
    }
  }
  class nj extends eX {
    constructor(e) {
      super("wp:positionH");
      this.root.push(new nW({
        relativeFrom: e.relative || nP.PAGE
      }));
      if (e.align) {
        this.root.push(new nG(e.align));
      } else if (e.offset !== undefined) {
        this.root.push(new nZ(e.offset));
      } else {
        throw Error("There is no configuration provided for floating position (Align or offset)");
      }
    }
  }
  class nY extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        relativeFrom: "relativeFrom"
      });
    }
  }
  class nK extends eX {
    constructor(e) {
      super("wp:positionV");
      this.root.push(new nY({
        relativeFrom: e.relative || nU.PAGE
      }));
      if (e.align) {
        this.root.push(new nG(e.align));
      } else if (e.offset !== undefined) {
        this.root.push(new nZ(e.offset));
      } else {
        throw Error("There is no configuration provided for floating position (Align or offset)");
      }
    }
  }
  class nq extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        uri: "uri"
      });
    }
  }
  class nV extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        embed: "r:embed",
        cstate: "cstate"
      });
    }
  }
  class nJ extends eX {
    constructor(e) {
      super("a:blip");
      this.root.push(new nV({
        embed: `rId{${e.fileName}}`,
        cstate: "none"
      }));
    }
  }
  class nX extends eX {
    constructor() {
      super("a:srcRect");
    }
  }
  class n$ extends eX {
    constructor() {
      super("a:fillRect");
    }
  }
  class n0 extends eX {
    constructor() {
      super("a:stretch");
      this.root.push(new n$());
    }
  }
  class n1 extends eX {
    constructor(e) {
      super("pic:blipFill");
      this.root.push(new nJ(e));
      this.root.push(new nX());
      this.root.push(new n0());
    }
  }
  class n2 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        noChangeAspect: "noChangeAspect",
        noChangeArrowheads: "noChangeArrowheads"
      });
    }
  }
  class n5 extends eX {
    constructor() {
      super("a:picLocks");
      this.root.push(new n2({
        noChangeAspect: 1,
        noChangeArrowheads: 1
      }));
    }
  }
  class n3 extends eX {
    constructor() {
      super("pic:cNvPicPr");
      this.root.push(new n5());
    }
  }
  let n4 = (e, t) => new rK({
    name: "a:hlinkClick",
    attributes: eY(ej({}, t ? {
      xmlns: {
        key: "xmlns:a",
        value: "http://schemas.openxmlformats.org/drawingml/2006/main"
      }
    } : {}), {
      id: {
        key: "r:id",
        value: `rId${e}`
      }
    })
  });
  class n6 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "id",
        name: "name",
        descr: "descr"
      });
    }
  }
  class n8 extends eX {
    constructor() {
      super("pic:cNvPr");
      this.root.push(new n6({
        id: 0,
        name: "",
        descr: ""
      }));
    }
    prepForXml(e) {
      for (let t = e.stack.length - 1; t >= 0; t--) {
        let r = e.stack[t];
        if (r instanceof oe) {
          this.root.push(n4(r.linkId, false));
          break;
        }
      }
      return super.prepForXml(e);
    }
  }
  class n7 extends eX {
    constructor() {
      super("pic:nvPicPr");
      this.root.push(new n8());
      this.root.push(new n3());
    }
  }
  class n9 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        xmlns: "xmlns:pic"
      });
    }
  }
  class ie extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        cx: "cx",
        cy: "cy"
      });
    }
  }
  class it extends eX {
    constructor(e, t) {
      super("a:ext");
      eK(this, "attributes");
      this.attributes = new ie({
        cx: e,
        cy: t
      });
      this.root.push(this.attributes);
    }
  }
  class ir extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        x: "x",
        y: "y"
      });
    }
  }
  class ii extends eX {
    constructor() {
      super("a:off");
      this.root.push(new ir({
        x: 0,
        y: 0
      }));
    }
  }
  class io extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        flipVertical: "flipV",
        flipHorizontal: "flipH",
        rotation: "rot"
      });
    }
  }
  class ia extends eX {
    constructor(e) {
      var t;
      var r;
      super("a:xfrm");
      eK(this, "extents");
      this.root.push(new io({
        flipVertical: (t = e.flip) == null ? undefined : t.vertical,
        flipHorizontal: (r = e.flip) == null ? undefined : r.horizontal,
        rotation: e.rotation
      }));
      this.extents = new it(e.emus.x, e.emus.y);
      this.root.push(new ii());
      this.root.push(this.extents);
    }
  }
  let is = () => new rK({
    name: "a:noFill"
  });
  let il = e => new rK({
    name: "a:schemeClr",
    attributes: {
      value: {
        key: "val",
        value: e.value
      }
    }
  });
  let iu = e => new rK({
    name: "a:srgbClr",
    attributes: {
      value: {
        key: "val",
        value: e.value
      }
    }
  });
  let ic = e => new rK({
    name: "a:solidFill",
    children: [e.type === "rgb" ? iu(e) : il(e)]
  });
  let ih = e => new rK({
    name: "a:ln",
    attributes: {
      width: {
        key: "w",
        value: e.width
      },
      cap: {
        key: "cap",
        value: e.cap
      },
      compoundLine: {
        key: "cmpd",
        value: e.compoundLine
      },
      align: {
        key: "algn",
        value: e.align
      }
    },
    children: [e.type === "noFill" ? is() : e.solidFillType === "rgb" ? ic({
      type: "rgb",
      value: e.value
    }) : ic({
      type: "scheme",
      value: e.value
    })]
  });
  class id extends eX {
    constructor() {
      super("a:avLst");
    }
  }
  class iA extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        prst: "prst"
      });
    }
  }
  class ig extends eX {
    constructor() {
      super("a:prstGeom");
      this.root.push(new iA({
        prst: "rect"
      }));
      this.root.push(new id());
    }
  }
  class ip extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        bwMode: "bwMode"
      });
    }
  }
  class im extends eX {
    constructor({
      outline: e,
      transform: t
    }) {
      super("pic:spPr");
      eK(this, "form");
      this.root.push(new ip({
        bwMode: "auto"
      }));
      this.form = new ia(t);
      this.root.push(this.form);
      this.root.push(new ig());
      if (e) {
        this.root.push(is());
        this.root.push(ih(e));
      }
    }
  }
  class iy extends eX {
    constructor({
      mediaData: e,
      transform: t,
      outline: r
    }) {
      super("pic:pic");
      this.root.push(new n9({
        xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture"
      }));
      this.root.push(new n7());
      this.root.push(new n1(e));
      this.root.push(new im({
        transform: t,
        outline: r
      }));
    }
  }
  class iv extends eX {
    constructor({
      mediaData: e,
      transform: t,
      outline: r
    }) {
      super("a:graphicData");
      eK(this, "pic");
      this.root.push(new nq({
        uri: "http://schemas.openxmlformats.org/drawingml/2006/picture"
      }));
      this.pic = new iy({
        mediaData: e,
        transform: t,
        outline: r
      });
      this.root.push(this.pic);
    }
  }
  class ib extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        a: "xmlns:a"
      });
    }
  }
  class iw extends eX {
    constructor({
      mediaData: e,
      transform: t,
      outline: r
    }) {
      super("a:graphic");
      eK(this, "data");
      this.root.push(new ib({
        a: "http://schemas.openxmlformats.org/drawingml/2006/main"
      }));
      this.data = new iv({
        mediaData: e,
        transform: t,
        outline: r
      });
      this.root.push(this.data);
    }
  }
  let iC = {
    NONE: 0,
    SQUARE: 1,
    TIGHT: 2,
    TOP_AND_BOTTOM: 3
  };
  let iE = {
    BOTH_SIDES: "bothSides"
  };
  class iI extends eX {
    constructor() {
      super("wp:wrapNone");
    }
  }
  class iB extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        distT: "distT",
        distB: "distB",
        distL: "distL",
        distR: "distR",
        wrapText: "wrapText"
      });
    }
  }
  class ix extends eX {
    constructor(e, t = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }) {
      super("wp:wrapSquare");
      this.root.push(new iB({
        wrapText: e.side || iE.BOTH_SIDES,
        distT: t.top,
        distB: t.bottom,
        distL: t.left,
        distR: t.right
      }));
    }
  }
  class iD extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        distT: "distT",
        distB: "distB"
      });
    }
  }
  class iS extends eX {
    constructor(e = {
      top: 0,
      bottom: 0
    }) {
      super("wp:wrapTight");
      this.root.push(new iD({
        distT: e.top,
        distB: e.bottom
      }));
    }
  }
  class ik extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        distT: "distT",
        distB: "distB"
      });
    }
  }
  class i_ extends eX {
    constructor(e = {
      top: 0,
      bottom: 0
    }) {
      super("wp:wrapTopAndBottom");
      this.root.push(new ik({
        distT: e.top,
        distB: e.bottom
      }));
    }
  }
  class iT extends eX {
    constructor({
      name: e,
      description: t,
      title: r
    } = {
      name: "",
      description: "",
      title: ""
    }) {
      super("wp:docPr");
      eK(this, "docPropertiesUniqueNumericId", nF());
      this.root.push(new e1({
        id: {
          key: "id",
          value: this.docPropertiesUniqueNumericId()
        },
        name: {
          key: "name",
          value: e
        },
        description: {
          key: "descr",
          value: t
        },
        title: {
          key: "title",
          value: r
        }
      }));
    }
    prepForXml(e) {
      for (let t = e.stack.length - 1; t >= 0; t--) {
        let r = e.stack[t];
        if (r instanceof oe) {
          this.root.push(n4(r.linkId, true));
          break;
        }
      }
      return super.prepForXml(e);
    }
  }
  let iQ = ({
    top: e,
    right: t,
    bottom: r,
    left: n
  }) => new rK({
    name: "wp:effectExtent",
    attributes: {
      top: {
        key: "t",
        value: e
      },
      right: {
        key: "r",
        value: t
      },
      bottom: {
        key: "b",
        value: r
      },
      left: {
        key: "l",
        value: n
      }
    }
  });
  class iR extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        cx: "cx",
        cy: "cy"
      });
    }
  }
  class iF extends eX {
    constructor(e, t) {
      super("wp:extent");
      eK(this, "attributes");
      this.attributes = new iR({
        cx: e,
        cy: t
      });
      this.root.push(this.attributes);
    }
  }
  class iL extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        xmlns: "xmlns:a",
        noChangeAspect: "noChangeAspect"
      });
    }
  }
  class iO extends eX {
    constructor() {
      super("a:graphicFrameLocks");
      this.root.push(new iL({
        xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main",
        noChangeAspect: 1
      }));
    }
  }
  class iN extends eX {
    constructor() {
      super("wp:cNvGraphicFramePr");
      this.root.push(new iO());
    }
  }
  class iM extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        distT: "distT",
        distB: "distB",
        distL: "distL",
        distR: "distR",
        allowOverlap: "allowOverlap",
        behindDoc: "behindDoc",
        layoutInCell: "layoutInCell",
        locked: "locked",
        relativeHeight: "relativeHeight",
        simplePos: "simplePos"
      });
    }
  }
  class iP extends eX {
    constructor({
      mediaData: e,
      transform: t,
      drawingOptions: r
    }) {
      super("wp:anchor");
      let n = ej({
        allowOverlap: true,
        behindDocument: false,
        lockAnchor: false,
        layoutInCell: true,
        verticalPosition: {},
        horizontalPosition: {}
      }, r.floating);
      this.root.push(new iM({
        distT: n.margins && n.margins.top || 0,
        distB: n.margins && n.margins.bottom || 0,
        distL: n.margins && n.margins.left || 0,
        distR: n.margins && n.margins.right || 0,
        simplePos: "0",
        allowOverlap: n.allowOverlap === true ? "1" : "0",
        behindDoc: n.behindDocument === true ? "1" : "0",
        locked: n.lockAnchor === true ? "1" : "0",
        layoutInCell: n.layoutInCell === true ? "1" : "0",
        relativeHeight: n.zIndex ? n.zIndex : t.emus.y
      }));
      this.root.push(new nH());
      this.root.push(new nj(n.horizontalPosition));
      this.root.push(new nK(n.verticalPosition));
      this.root.push(new iF(t.emus.x, t.emus.y));
      this.root.push(iQ({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }));
      if (r.floating !== undefined && r.floating.wrap !== undefined) {
        switch (r.floating.wrap.type) {
          case iC.SQUARE:
            this.root.push(new ix(r.floating.wrap, r.floating.margins));
            break;
          case iC.TIGHT:
            this.root.push(new iS(r.floating.margins));
            break;
          case iC.TOP_AND_BOTTOM:
            this.root.push(new i_(r.floating.margins));
            break;
          case iC.NONE:
          default:
            this.root.push(new iI());
        }
      } else {
        this.root.push(new iI());
      }
      this.root.push(new iT(r.docProperties));
      this.root.push(new iN());
      this.root.push(new iw({
        mediaData: e,
        transform: t,
        outline: r.outline
      }));
    }
  }
  let iU = ({
    mediaData: e,
    transform: t,
    docProperties: r,
    outline: n
  }) => {
    return new rK({
      name: "wp:inline",
      attributes: {
        distanceTop: {
          key: "distT",
          value: 0
        },
        distanceBottom: {
          key: "distB",
          value: 0
        },
        distanceLeft: {
          key: "distL",
          value: 0
        },
        distanceRight: {
          key: "distR",
          value: 0
        }
      },
      children: [new iF(t.emus.x, t.emus.y), iQ(n ? {
        top: (n.width ?? 9525) * 2,
        right: (n.width ?? 9525) * 2,
        bottom: (n.width ?? 9525) * 2,
        left: (n.width ?? 9525) * 2
      } : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), new iT(r), new iN(), new iw({
        mediaData: e,
        transform: t,
        outline: n
      })]
    });
  };
  class iz extends eX {
    constructor(e, t = {}) {
      super("w:drawing");
      if (t.floating) {
        this.root.push(new iP({
          mediaData: e,
          transform: e.transformation,
          drawingOptions: t
        }));
      } else {
        this.root.push(iU({
          mediaData: e,
          transform: e.transformation,
          docProperties: t.docProperties,
          outline: t.outline
        }));
      }
    }
  }
  class iH extends nx {
    constructor(e) {
      super({});
      eK(this, "key", `${nO()}.png`);
      eK(this, "imageData");
      let t = typeof e.data == "string" ? this.convertDataURIToBinary(e.data) : e.data;
      this.imageData = {
        stream: t,
        fileName: this.key,
        transformation: {
          pixels: {
            x: Math.round(e.transformation.width),
            y: Math.round(e.transformation.height)
          },
          emus: {
            x: Math.round(e.transformation.width * 9525),
            y: Math.round(e.transformation.height * 9525)
          },
          flip: e.transformation.flip,
          rotation: e.transformation.rotation ? e.transformation.rotation * 60000 : undefined
        }
      };
      let r = new iz(this.imageData, {
        floating: e.floating,
        docProperties: e.altText,
        outline: e.outline
      });
      this.root.push(r);
    }
    prepForXml(e) {
      e.file.Media.addImage(this.key, this.imageData);
      return super.prepForXml(e);
    }
    convertDataURIToBinary(e) {
      if (typeof atob != "function") {
        return new (require("buffer").Buffer)(e, "base64");
      }
      {
        let t = ";base64,";
        let r = e.indexOf(t);
        let n = r === -1 ? 0 : r + t.length;
        return new Uint8Array(atob(e.substring(n)).split("").map(e => e.charCodeAt(0)));
      }
    }
  }
  class iG extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "w:id",
        initials: "w:initials",
        author: "w:author",
        date: "w:date"
      });
    }
  }
  class iZ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        "xmlns:cx": "xmlns:cx",
        "xmlns:cx1": "xmlns:cx1",
        "xmlns:cx2": "xmlns:cx2",
        "xmlns:cx3": "xmlns:cx3",
        "xmlns:cx4": "xmlns:cx4",
        "xmlns:cx5": "xmlns:cx5",
        "xmlns:cx6": "xmlns:cx6",
        "xmlns:cx7": "xmlns:cx7",
        "xmlns:cx8": "xmlns:cx8",
        "xmlns:mc": "xmlns:mc",
        "xmlns:aink": "xmlns:aink",
        "xmlns:am3d": "xmlns:am3d",
        "xmlns:o": "xmlns:o",
        "xmlns:r": "xmlns:r",
        "xmlns:m": "xmlns:m",
        "xmlns:v": "xmlns:v",
        "xmlns:wp14": "xmlns:wp14",
        "xmlns:wp": "xmlns:wp",
        "xmlns:w10": "xmlns:w10",
        "xmlns:w": "xmlns:w",
        "xmlns:w14": "xmlns:w14",
        "xmlns:w15": "xmlns:w15",
        "xmlns:w16cex": "xmlns:w16cex",
        "xmlns:w16cid": "xmlns:w16cid",
        "xmlns:w16": "xmlns:w16",
        "xmlns:w16sdtdh": "xmlns:w16sdtdh",
        "xmlns:w16se": "xmlns:w16se",
        "xmlns:wpg": "xmlns:wpg",
        "xmlns:wpi": "xmlns:wpi",
        "xmlns:wne": "xmlns:wne",
        "xmlns:wps": "xmlns:wps"
      });
    }
  }
  class iW extends eX {
    constructor({
      id: e,
      initials: t,
      author: r,
      date: n = new Date(),
      children: i
    }) {
      super("w:comment");
      this.root.push(new iG({
        id: e,
        initials: t,
        author: r,
        date: n.toISOString()
      }));
      for (let o of i) {
        this.root.push(o);
      }
    }
  }
  class ij extends eX {
    constructor({
      children: e
    }) {
      super("w:comments");
      this.root.push(new iZ({
        "xmlns:cx": "http://schemas.microsoft.com/office/drawing/2014/chartex",
        "xmlns:cx1": "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
        "xmlns:cx2": "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
        "xmlns:cx3": "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
        "xmlns:cx4": "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
        "xmlns:cx5": "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
        "xmlns:cx6": "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
        "xmlns:cx7": "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
        "xmlns:cx8": "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
        "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
        "xmlns:aink": "http://schemas.microsoft.com/office/drawing/2016/ink",
        "xmlns:am3d": "http://schemas.microsoft.com/office/drawing/2017/model3d",
        "xmlns:o": "urn:schemas-microsoft-com:office:office",
        "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        "xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
        "xmlns:v": "urn:schemas-microsoft-com:vml",
        "xmlns:wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        "xmlns:wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        "xmlns:w10": "urn:schemas-microsoft-com:office:word",
        "xmlns:w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        "xmlns:w14": "http://schemas.microsoft.com/office/word/2010/wordml",
        "xmlns:w15": "http://schemas.microsoft.com/office/word/2012/wordml",
        "xmlns:w16cex": "http://schemas.microsoft.com/office/word/2018/wordml/cex",
        "xmlns:w16cid": "http://schemas.microsoft.com/office/word/2016/wordml/cid",
        "xmlns:w16": "http://schemas.microsoft.com/office/word/2018/wordml",
        "xmlns:w16sdtdh": "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",
        "xmlns:w16se": "http://schemas.microsoft.com/office/word/2015/wordml/symex",
        "xmlns:wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        "xmlns:wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        "xmlns:wne": "http://schemas.microsoft.com/office/word/2006/wordml",
        "xmlns:wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
      }));
      for (let t of e) {
        this.root.push(new iW(t));
      }
    }
  }
  class iY extends eX {
    constructor() {
      super("w:pageBreakBefore");
    }
  }
  let iK = "auto";
  class iq extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        after: "w:after",
        before: "w:before",
        line: "w:line",
        lineRule: "w:lineRule"
      });
    }
  }
  class iV extends eX {
    constructor(e) {
      super("w:spacing");
      this.root.push(new iq(e));
    }
  }
  let iJ = class extends eX {
    constructor(e) {
      super("w:pStyle");
      this.root.push(new e2({
        val: e
      }));
    }
  };
  class iX extends eX {
    constructor(e) {
      super("w:tabs");
      for (let t of e) {
        this.root.push(new i1(t));
      }
    }
  }
  let i$ = {
    LEFT: "left",
    RIGHT: "right"
  };
  class i0 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val",
        pos: "w:pos",
        leader: "w:leader"
      });
    }
  }
  class i1 extends eX {
    constructor({
      type: e,
      position: t,
      leader: r
    }) {
      super("w:tab");
      this.root.push(new i0({
        val: e,
        pos: t,
        leader: r
      }));
    }
  }
  class i2 extends eX {
    constructor(e, t) {
      super("w:numPr");
      this.root.push(new i5(t));
      this.root.push(new i3(e));
    }
  }
  class i5 extends eX {
    constructor(e) {
      super("w:ilvl");
      if (e > 9) {
        throw Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");
      }
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class i3 extends eX {
    constructor(e) {
      super("w:numId");
      this.root.push(new e2({
        val: typeof e == "string" ? `{${e}}` : e
      }));
    }
  }
  class i4 extends eX {
    constructor() {
      super(...arguments);
      eK(this, "fileChild", Symbol());
    }
  }
  class i6 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "Id",
        type: "Type",
        target: "Target",
        targetMode: "TargetMode"
      });
    }
  }
  let i8 = {
    EXTERNAL: "External"
  };
  class i7 extends eX {
    constructor(e, t, r, n) {
      super("Relationship");
      this.root.push(new i6({
        id: e,
        type: t,
        target: r,
        targetMode: n
      }));
    }
  }
  class i9 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "r:id",
        history: "w:history",
        anchor: "w:anchor"
      });
    }
  }
  class oe extends eX {
    constructor(e, t, r) {
      super("w:hyperlink");
      eK(this, "linkId");
      this.linkId = t;
      let n = new i9({
        history: 1,
        anchor: r || undefined,
        id: r ? undefined : `rId${this.linkId}`
      });
      this.root.push(n);
      e.forEach(e => {
        this.root.push(e);
      });
    }
  }
  class ot extends eX {
    constructor(e) {
      super("w:externalHyperlink");
      this.options = e;
    }
  }
  class or extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "w:id",
        name: "w:name"
      });
    }
  }
  class on extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        id: "w:id"
      });
    }
  }
  class oi {
    constructor(e) {
      eK(this, "bookmarkUniqueNumericId", nL());
      eK(this, "start");
      eK(this, "children");
      eK(this, "end");
      let t = this.bookmarkUniqueNumericId();
      this.start = new oo(e.id, t);
      this.children = e.children;
      this.end = new oa(t);
    }
  }
  class oo extends eX {
    constructor(e, t) {
      super("w:bookmarkStart");
      let r = new or({
        name: e,
        id: t
      });
      this.root.push(r);
    }
  }
  class oa extends eX {
    constructor(e) {
      super("w:bookmarkEnd");
      let t = new on({
        id: e
      });
      this.root.push(t);
    }
  }
  class os extends eX {
    constructor(e) {
      super("w:outlineLvl");
      this.level = e;
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class ol extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        verticalAlign: "w:val"
      });
    }
  }
  class ou extends eX {
    constructor(e) {
      super("w:vAlign");
      this.root.push(new ol({
        verticalAlign: e
      }));
    }
  }
  let oc = {
    DEFAULT: "default",
    FIRST: "first",
    EVEN: "even"
  };
  class oh extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        type: "w:type",
        id: "r:id"
      });
    }
  }
  class od extends eX {
    constructor(e, t) {
      super(e);
      this.root.push(new oh({
        type: t.type || oc.DEFAULT,
        id: `rId${t.id}`
      }));
    }
  }
  class of extends eX {
    constructor({
      space: e,
      count: t,
      separate: r,
      equalWidth: n,
      children: i
    }) {
      super("w:cols");
      this.root.push(new e1({
        space: {
          key: "w:space",
          value: e === undefined ? undefined : rN(e)
        },
        count: {
          key: "w:num",
          value: t === undefined ? undefined : rS(t)
        },
        separate: {
          key: "w:sep",
          value: r
        },
        equalWidth: {
          key: "w:equalWidth",
          value: n
        }
      }));
      if (!n && i) {
        i.forEach(e => this.addChildElement(e));
      }
    }
  }
  class oA extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        type: "w:type",
        linePitch: "w:linePitch",
        charSpace: "w:charSpace"
      });
    }
  }
  class og extends eX {
    constructor(e, t, r) {
      super("w:docGrid");
      this.root.push(new oA({
        type: r,
        linePitch: rS(e),
        charSpace: t ? rS(t) : undefined
      }));
    }
  }
  let op = ({
    countBy: e,
    start: t,
    restart: r,
    distance: n
  }) => new rK({
    name: "w:lnNumType",
    attributes: {
      countBy: {
        key: "w:countBy",
        value: e === undefined ? undefined : rS(e)
      },
      start: {
        key: "w:start",
        value: t === undefined ? undefined : rS(t)
      },
      restart: {
        key: "w:restart",
        value: r
      },
      distance: {
        key: "w:distance",
        value: n === undefined ? undefined : rN(n)
      }
    }
  });
  class om extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        display: "w:display",
        offsetFrom: "w:offsetFrom",
        zOrder: "w:zOrder"
      });
    }
  }
  class oy extends e$ {
    constructor(e) {
      super("w:pgBorders");
      if (!e) {
        return this;
      }
      if (e.pageBorders) {
        this.root.push(new om({
          display: e.pageBorders.display,
          offsetFrom: e.pageBorders.offsetFrom,
          zOrder: e.pageBorders.zOrder
        }));
      } else {
        this.root.push(new om({}));
      }
      if (e.pageBorderTop) {
        this.root.push(new rX("w:top", e.pageBorderTop));
      }
      if (e.pageBorderLeft) {
        this.root.push(new rX("w:left", e.pageBorderLeft));
      }
      if (e.pageBorderBottom) {
        this.root.push(new rX("w:bottom", e.pageBorderBottom));
      }
      if (e.pageBorderRight) {
        this.root.push(new rX("w:right", e.pageBorderRight));
      }
    }
  }
  class ov extends eX {
    constructor(e, t, r, n, i, o, a) {
      super("w:pgMar");
      this.root.push(new e1({
        top: {
          key: "w:top",
          value: rL(e)
        },
        right: {
          key: "w:right",
          value: rN(t)
        },
        bottom: {
          key: "w:bottom",
          value: rL(r)
        },
        left: {
          key: "w:left",
          value: rN(n)
        },
        header: {
          key: "w:header",
          value: rN(i)
        },
        footer: {
          key: "w:footer",
          value: rN(o)
        },
        gutter: {
          key: "w:gutter",
          value: rN(a)
        }
      }));
    }
  }
  class ob extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        start: "w:start",
        formatType: "w:fmt",
        separator: "w:chapSep"
      });
    }
  }
  class ow extends eX {
    constructor({
      start: e,
      formatType: t,
      separator: r
    }) {
      super("w:pgNumType");
      this.root.push(new ob({
        start: e === undefined ? undefined : rS(e),
        formatType: t,
        separator: r
      }));
    }
  }
  class oC extends eX {
    constructor(e, t, r) {
      super("w:pgSz");
      let n = r === "landscape";
      let i = rN(e);
      let o = rN(t);
      this.root.push(new e1({
        width: {
          key: "w:w",
          value: n ? o : i
        },
        height: {
          key: "w:h",
          value: n ? i : o
        },
        orientation: {
          key: "w:orient",
          value: r
        }
      }));
    }
  }
  class oE extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class oI extends eX {
    constructor(e) {
      super("w:textDirection");
      this.root.push(new oE({
        val: e
      }));
    }
  }
  class oB extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class ox extends eX {
    constructor(e) {
      super("w:type");
      this.root.push(new oB({
        val: e
      }));
    }
  }
  class oD extends eX {
    constructor({
      page: {
        size: {
          width: e = 11906,
          height: t = 16838,
          orientation: r = "portrait"
        } = {},
        margin: {
          top: n = 1440,
          right: i = 1440,
          bottom: o = 1440,
          left: a = 1440,
          header: s = 708,
          footer: l = 708,
          gutter: u = 0
        } = {},
        pageNumbers: c = {},
        borders: h,
        textDirection: d
      } = {},
      grid: {
        linePitch: f = 360,
        charSpace: A,
        type: g
      } = {},
      headerWrapperGroup: p = {},
      footerWrapperGroup: m = {},
      lineNumbers: y,
      titlePage: v,
      verticalAlign: b,
      column: w,
      type: C
    } = {}) {
      super("w:sectPr");
      this.addHeaderFooterGroup("w:headerReference", p);
      this.addHeaderFooterGroup("w:footerReference", m);
      if (C) {
        this.root.push(new ox(C));
      }
      this.root.push(new oC(e, t, r));
      this.root.push(new ov(n, i, o, a, s, l, u));
      if (h) {
        this.root.push(new oy(h));
      }
      if (y) {
        this.root.push(op(y));
      }
      this.root.push(new ow(c));
      if (w) {
        this.root.push(new of(w));
      }
      if (b) {
        this.root.push(new ou(b));
      }
      if (v !== undefined) {
        this.root.push(new rz("w:titlePg", v));
      }
      if (d) {
        this.root.push(new oI(d));
      }
      this.root.push(new og(f, A, g));
    }
    addHeaderFooterGroup(e, t) {
      if (t.default) {
        this.root.push(new od(e, {
          type: oc.DEFAULT,
          id: t.default.View.ReferenceId
        }));
      }
      if (t.first) {
        this.root.push(new od(e, {
          type: oc.FIRST,
          id: t.first.View.ReferenceId
        }));
      }
      if (t.even) {
        this.root.push(new od(e, {
          type: oc.EVEN,
          id: t.even.View.ReferenceId
        }));
      }
    }
  }
  class oS extends eX {
    constructor() {
      super("w:body");
      eK(this, "sections", []);
    }
    addSection(e) {
      let t = this.sections.pop();
      this.root.push(this.createSectionParagraph(t));
      this.sections.push(new oD(e));
    }
    prepForXml(e) {
      if (this.sections.length === 1) {
        this.root.splice(0, 1);
        this.root.push(this.sections.pop());
      }
      return super.prepForXml(e);
    }
    push(e) {
      this.root.push(e);
    }
    createSectionParagraph(e) {
      let t = new oU({});
      let r = new oP({});
      r.push(e);
      t.addChildElement(r);
      return t;
    }
  }
  class ok extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        wpc: "xmlns:wpc",
        mc: "xmlns:mc",
        o: "xmlns:o",
        r: "xmlns:r",
        m: "xmlns:m",
        v: "xmlns:v",
        wp14: "xmlns:wp14",
        wp: "xmlns:wp",
        w10: "xmlns:w10",
        w: "xmlns:w",
        w14: "xmlns:w14",
        w15: "xmlns:w15",
        wpg: "xmlns:wpg",
        wpi: "xmlns:wpi",
        wne: "xmlns:wne",
        wps: "xmlns:wps",
        Ignorable: "mc:Ignorable",
        cp: "xmlns:cp",
        dc: "xmlns:dc",
        dcterms: "xmlns:dcterms",
        dcmitype: "xmlns:dcmitype",
        xsi: "xmlns:xsi",
        type: "xsi:type",
        cx: "xmlns:cx",
        cx1: "xmlns:cx1",
        cx2: "xmlns:cx2",
        cx3: "xmlns:cx3",
        cx4: "xmlns:cx4",
        cx5: "xmlns:cx5",
        cx6: "xmlns:cx6",
        cx7: "xmlns:cx7",
        cx8: "xmlns:cx8",
        aink: "xmlns:aink",
        am3d: "xmlns:am3d",
        w16cex: "xmlns:w16cex",
        w16cid: "xmlns:w16cid",
        w16: "xmlns:w16",
        w16sdtdh: "xmlns:w16sdtdh",
        w16se: "xmlns:w16se"
      });
    }
  }
  class o_ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        color: "w:color",
        themeColor: "w:themeColor",
        themeShade: "w:themeShade",
        themeTint: "w:themeTint"
      });
    }
  }
  class oT extends eX {
    constructor(e) {
      super("w:background");
      this.root.push(new o_({
        color: e.color === undefined ? undefined : rF(e.color),
        themeColor: e.themeColor,
        themeShade: e.themeShade === undefined ? undefined : rT(e.themeShade),
        themeTint: e.themeTint === undefined ? undefined : rT(e.themeTint)
      }));
    }
  }
  class oQ extends eX {
    constructor(e) {
      super("w:document");
      eK(this, "body");
      this.root.push(new ok({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
        cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
        cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
        cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
        cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
        cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
        cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
        cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
        cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
        aink: "http://schemas.microsoft.com/office/drawing/2016/ink",
        am3d: "http://schemas.microsoft.com/office/drawing/2017/model3d",
        w16cex: "http://schemas.microsoft.com/office/word/2018/wordml/cex",
        w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid",
        w16: "http://schemas.microsoft.com/office/word/2018/wordml",
        w16sdtdh: "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",
        w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex",
        Ignorable: "w14 w15 wp14"
      }));
      this.body = new oS();
      if (e.background) {
        this.root.push(new oT(e.background));
      }
      this.root.push(this.body);
    }
    add(e) {
      this.body.push(e);
      return this;
    }
    get Body() {
      return this.body;
    }
  }
  class oR extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        xmlns: "xmlns"
      });
    }
  }
  class oF extends eX {
    constructor() {
      super("Relationships");
      this.root.push(new oR({
        xmlns: "http://schemas.openxmlformats.org/package/2006/relationships"
      }));
    }
    createRelationship(e, t, r, n) {
      let i = new i7(`rId${e}`, t, r, n);
      this.root.push(i);
      return i;
    }
    get RelationshipCount() {
      return this.root.length - 1;
    }
  }
  class oL {
    constructor(e) {
      eK(this, "document");
      eK(this, "relationships");
      this.document = new oQ(e);
      this.relationships = new oF();
    }
    get View() {
      return this.document;
    }
    get Relationships() {
      return this.relationships;
    }
  }
  class oO extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class oN extends eX {
    constructor() {
      super("w:wordWrap");
      this.root.push(new oO({
        val: 0
      }));
    }
  }
  let oM = e => {
    var t;
    var r;
    return new rK({
      name: "w:framePr",
      attributes: {
        anchorLock: {
          key: "w:anchorLock",
          value: e.anchorLock
        },
        dropCap: {
          key: "w:dropCap",
          value: e.dropCap
        },
        width: {
          key: "w:w",
          value: e.width
        },
        height: {
          key: "w:h",
          value: e.height
        },
        x: {
          key: "w:x",
          value: e.position ? e.position.x : undefined
        },
        y: {
          key: "w:y",
          value: e.position ? e.position.y : undefined
        },
        anchorHorizontal: {
          key: "w:hAnchor",
          value: e.anchor.horizontal
        },
        anchorVertical: {
          key: "w:vAnchor",
          value: e.anchor.vertical
        },
        spaceHorizontal: {
          key: "w:hSpace",
          value: (t = e.space) == null ? undefined : t.horizontal
        },
        spaceVertical: {
          key: "w:vSpace",
          value: (r = e.space) == null ? undefined : r.vertical
        },
        rule: {
          key: "w:hRule",
          value: e.rule
        },
        alignmentX: {
          key: "w:xAlign",
          value: e.alignment ? e.alignment.x : undefined
        },
        alignmentY: {
          key: "w:yAlign",
          value: e.alignment ? e.alignment.y : undefined
        },
        lines: {
          key: "w:lines",
          value: e.lines
        },
        wrap: {
          key: "w:wrap",
          value: e.wrap
        }
      }
    });
  };
  class oP extends e$ {
    constructor(e) {
      super("w:pPr");
      eK(this, "numberingReferences", []);
      if (!e) {
        return this;
      }
      if (e.heading) {
        this.push(new iJ(e.heading));
      }
      if (e.bullet) {
        this.push(new iJ("ListParagraph"));
      }
      if (!!e.numbering && !e.style && !e.heading && !e.numbering.custom) {
        this.push(new iJ("ListParagraph"));
      }
      if (e.style) {
        this.push(new iJ(e.style));
      }
      if (e.keepNext !== undefined) {
        this.push(new rz("w:keepNext", e.keepNext));
      }
      if (e.keepLines !== undefined) {
        this.push(new rz("w:keepLines", e.keepLines));
      }
      if (e.pageBreakBefore) {
        this.push(new iY());
      }
      if (e.frame) {
        this.push(oM(e.frame));
      }
      if (e.widowControl !== undefined) {
        this.push(new rz("w:widowControl", e.widowControl));
      }
      if (e.bullet) {
        this.push(new i2(1, e.bullet.level));
      }
      if (e.numbering) {
        this.numberingReferences.push({
          reference: e.numbering.reference,
          instance: e.numbering.instance ?? 0
        });
        this.push(new i2(`${e.numbering.reference}-${e.numbering.instance ?? 0}`, e.numbering.level));
      }
      if (e.border) {
        this.push(new r1(e.border));
      }
      if (e.thematicBreak) {
        this.push(new r2());
      }
      if (e.shading) {
        this.push(new na(e.shading));
      }
      if (e.wordWrap) {
        this.push(new oN());
      }
      if (e.overflowPunctuation) {
        this.push(new rz("w:overflowPunct", e.overflowPunctuation));
      }
      let n = [...(e.rightTabStop !== undefined ? [{
        type: i$.RIGHT,
        position: e.rightTabStop
      }] : []), ...(e.tabStops ? e.tabStops : []), ...(e.leftTabStop !== undefined ? [{
        type: i$.LEFT,
        position: e.leftTabStop
      }] : [])];
      if (n.length > 0) {
        this.push(new iX(n));
      }
      if (e.bidirectional !== undefined) {
        this.push(new rz("w:bidi", e.bidirectional));
      }
      if (e.spacing) {
        this.push(new iV(e.spacing));
      }
      if (e.indent) {
        this.push(new r5(e.indent));
      }
      if (e.contextualSpacing !== undefined) {
        this.push(new rz("w:contextualSpacing", e.contextualSpacing));
      }
      if (e.alignment) {
        this.push(new rJ(e.alignment));
      }
      if (e.outlineLevel !== undefined) {
        this.push(new os(e.outlineLevel));
      }
      if (e.suppressLineNumbers !== undefined) {
        this.push(new rz("w:suppressLineNumbers", e.suppressLineNumbers));
      }
      if (e.autoSpaceEastAsianText !== undefined) {
        this.push(new rz("w:autoSpaceDN", e.autoSpaceEastAsianText));
      }
      if (e.run) {
        this.push(new nC(e.run));
      }
    }
    push(e) {
      this.root.push(e);
    }
    prepForXml(e) {
      if (e.viewWrapper instanceof oL) {
        for (let t of this.numberingReferences) {
          e.file.Numbering.createConcreteNumberingInstance(t.reference, t.instance);
        }
      }
      return super.prepForXml(e);
    }
  }
  class oU extends i4 {
    constructor(e) {
      super("w:p");
      eK(this, "properties");
      if (typeof e == "string") {
        this.properties = new oP({});
        this.root.push(this.properties);
        this.root.push(new nD(e));
        return this;
      }
      this.properties = new oP(e);
      this.root.push(this.properties);
      if (e.text) {
        this.root.push(new nD(e.text));
      }
      if (e.children) {
        for (let t of e.children) {
          if (t instanceof oi) {
            this.root.push(t.start);
            for (let e of t.children) {
              this.root.push(e);
            }
            this.root.push(t.end);
            continue;
          }
          this.root.push(t);
        }
      }
    }
    prepForXml(e) {
      for (let t of this.root) {
        if (t instanceof ot) {
          let r = this.root.indexOf(t);
          let n = new oe(t.options.children, nO());
          e.viewWrapper.Relationships.createRelationship(n.linkId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", t.options.link, i8.EXTERNAL);
          this.root[r] = n;
        }
      }
      return super.prepForXml(e);
    }
    addRunToFront(e) {
      this.root.splice(1, 0, e);
      return this;
    }
  }
  class oz extends eX {
    constructor(e) {
      super("w:tblGrid");
      for (let t of e) {
        this.root.push(new oH(t));
      }
    }
  }
  class oH extends eX {
    constructor(e) {
      super("w:gridCol");
      if (e !== undefined) {
        this.root.push(new e1({
          width: {
            key: "w:w",
            value: rN(e)
          }
        }));
      }
    }
  }
  let oG = {
    TABLE: "w:tblCellMar",
    TABLE_CELL: "w:tcMar"
  };
  class oZ extends e$ {
    constructor(e, {
      marginUnitType: t = oW.DXA,
      top: r,
      left: n,
      bottom: i,
      right: o
    }) {
      super(e);
      if (r !== undefined) {
        this.root.push(new oj("w:top", {
          type: t,
          size: r
        }));
      }
      if (n !== undefined) {
        this.root.push(new oj("w:left", {
          type: t,
          size: n
        }));
      }
      if (i !== undefined) {
        this.root.push(new oj("w:bottom", {
          type: t,
          size: i
        }));
      }
      if (o !== undefined) {
        this.root.push(new oj("w:right", {
          type: t,
          size: o
        }));
      }
    }
  }
  let oW = {
    AUTO: "auto",
    DXA: "dxa",
    PERCENTAGE: "pct"
  };
  class oj extends eX {
    constructor(e, {
      type: t = oW.AUTO,
      size: r
    }) {
      super(e);
      let n = r;
      if (t === oW.PERCENTAGE && typeof r == "number") {
        n = `${r}%`;
      }
      this.root.push(new e1({
        type: {
          key: "w:type",
          value: t
        },
        size: {
          key: "w:w",
          value: rP(n)
        }
      }));
    }
  }
  class oY extends e$ {
    constructor(e) {
      super("w:tcBorders");
      if (e.top) {
        this.root.push(new rX("w:top", e.top));
      }
      if (e.start) {
        this.root.push(new rX("w:start", e.start));
      }
      if (e.left) {
        this.root.push(new rX("w:left", e.left));
      }
      if (e.bottom) {
        this.root.push(new rX("w:bottom", e.bottom));
      }
      if (e.end) {
        this.root.push(new rX("w:end", e.end));
      }
      if (e.right) {
        this.root.push(new rX("w:right", e.right));
      }
    }
  }
  class oK extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class oq extends eX {
    constructor(e) {
      super("w:gridSpan");
      this.root.push(new oK({
        val: rS(e)
      }));
    }
  }
  let oV = {
    CONTINUE: "continue",
    RESTART: "restart"
  };
  class oJ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class oX extends eX {
    constructor(e) {
      super("w:vMerge");
      this.root.push(new oJ({
        val: e
      }));
    }
  }
  class o$ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class o0 extends eX {
    constructor(e) {
      super("w:textDirection");
      this.root.push(new o$({
        val: e
      }));
    }
  }
  class o1 extends e$ {
    constructor(e) {
      super("w:tcPr");
      if (e.width) {
        this.root.push(new oj("w:tcW", e.width));
      }
      if (e.columnSpan) {
        this.root.push(new oq(e.columnSpan));
      }
      if (e.verticalMerge) {
        this.root.push(new oX(e.verticalMerge));
      } else if (e.rowSpan && e.rowSpan > 1) {
        this.root.push(new oX(oV.RESTART));
      }
      if (e.borders) {
        this.root.push(new oY(e.borders));
      }
      if (e.shading) {
        this.root.push(new na(e.shading));
      }
      if (e.margins) {
        this.root.push(new oZ(oG.TABLE_CELL, e.margins));
      }
      if (e.textDirection) {
        this.root.push(new o0(e.textDirection));
      }
      if (e.verticalAlign) {
        this.root.push(new ou(e.verticalAlign));
      }
    }
  }
  class o2 extends eX {
    constructor(e) {
      super("w:tc");
      this.options = e;
      this.root.push(new o1(e));
      for (let t of e.children) {
        this.root.push(t);
      }
    }
    prepForXml(e) {
      if (!(this.root[this.root.length - 1] instanceof oU)) {
        this.root.push(new oU({}));
      }
      return super.prepForXml(e);
    }
  }
  let o5 = {
    style: "none",
    size: 0,
    color: "auto"
  };
  let o3 = {
    style: r0,
    size: 4,
    color: "auto"
  };
  class o4 extends eX {
    constructor(e) {
      super("w:tblBorders");
      if (e.top) {
        this.root.push(new rX("w:top", e.top));
      } else {
        this.root.push(new rX("w:top", o3));
      }
      if (e.left) {
        this.root.push(new rX("w:left", e.left));
      } else {
        this.root.push(new rX("w:left", o3));
      }
      if (e.bottom) {
        this.root.push(new rX("w:bottom", e.bottom));
      } else {
        this.root.push(new rX("w:bottom", o3));
      }
      if (e.right) {
        this.root.push(new rX("w:right", e.right));
      } else {
        this.root.push(new rX("w:right", o3));
      }
      if (e.insideHorizontal) {
        this.root.push(new rX("w:insideH", e.insideHorizontal));
      } else {
        this.root.push(new rX("w:insideH", o3));
      }
      if (e.insideVertical) {
        this.root.push(new rX("w:insideV", e.insideVertical));
      } else {
        this.root.push(new rX("w:insideV", o3));
      }
    }
  }
  eK(o4, "NONE", {
    top: o5,
    bottom: o5,
    left: o5,
    right: o5,
    insideHorizontal: o5,
    insideVertical: o5
  });
  class o6 extends eX {
    constructor({
      horizontalAnchor: e,
      verticalAnchor: t,
      absoluteHorizontalPosition: r,
      relativeHorizontalPosition: n,
      absoluteVerticalPosition: i,
      relativeVerticalPosition: o,
      bottomFromText: a,
      topFromText: s,
      leftFromText: l,
      rightFromText: u,
      overlap: c
    }) {
      super("w:tblpPr");
      this.root.push(new e1({
        leftFromText: {
          key: "w:leftFromText",
          value: l === undefined ? undefined : rN(l)
        },
        rightFromText: {
          key: "w:rightFromText",
          value: u === undefined ? undefined : rN(u)
        },
        topFromText: {
          key: "w:topFromText",
          value: s === undefined ? undefined : rN(s)
        },
        bottomFromText: {
          key: "w:bottomFromText",
          value: a === undefined ? undefined : rN(a)
        },
        absoluteHorizontalPosition: {
          key: "w:tblpX",
          value: r === undefined ? undefined : rL(r)
        },
        absoluteVerticalPosition: {
          key: "w:tblpY",
          value: i === undefined ? undefined : rL(i)
        },
        horizontalAnchor: {
          key: "w:horzAnchor",
          value: e === undefined ? undefined : e
        },
        relativeHorizontalPosition: {
          key: "w:tblpXSpec",
          value: n
        },
        relativeVerticalPosition: {
          key: "w:tblpYSpec",
          value: o
        },
        verticalAnchor: {
          key: "w:vertAnchor",
          value: t
        }
      }));
      if (c) {
        this.root.push(new rj("w:tblOverlap", c));
      }
    }
  }
  class o8 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        type: "w:type"
      });
    }
  }
  class o7 extends eX {
    constructor(e) {
      super("w:tblLayout");
      this.root.push(new o8({
        type: e
      }));
    }
  }
  class o9 extends e$ {
    constructor(e) {
      super("w:tblPr");
      if (e.style) {
        this.root.push(new rG("w:tblStyle", e.style));
      }
      if (e.float) {
        this.root.push(new o6(e.float));
      }
      if (e.visuallyRightToLeft !== undefined) {
        this.root.push(new rz("w:bidiVisual", e.visuallyRightToLeft));
      }
      if (e.width) {
        this.root.push(new oj("w:tblW", e.width));
      }
      if (e.alignment) {
        this.root.push(new rJ(e.alignment));
      }
      if (e.indent) {
        this.root.push(new oj("w:tblInd", e.indent));
      }
      if (e.borders) {
        this.root.push(new o4(e.borders));
      }
      if (e.shading) {
        this.root.push(new na(e.shading));
      }
      if (e.layout) {
        this.root.push(new o7(e.layout));
      }
      if (e.cellMargin) {
        this.root.push(new oZ(oG.TABLE, e.cellMargin));
      }
    }
  }
  class ae extends i4 {
    constructor({
      rows: e,
      width: t,
      columnWidths: r = Array(Math.max(...e.map(e => e.CellCount))).fill(100),
      margins: n,
      indent: i,
      float: o,
      layout: a,
      style: s,
      borders: l,
      alignment: u,
      visuallyRightToLeft: c
    }) {
      super("w:tbl");
      this.root.push(new o9({
        borders: l ?? {},
        width: t ?? {
          size: 100
        },
        indent: i,
        float: o,
        layout: a,
        style: s,
        alignment: u,
        cellMargin: n,
        visuallyRightToLeft: c
      }));
      this.root.push(new oz(r));
      for (let h of e) {
        this.root.push(h);
      }
      e.forEach((t, r) => {
        if (r === e.length - 1) {
          return;
        }
        let n = 0;
        t.cells.forEach(t => {
          if (t.options.rowSpan && t.options.rowSpan > 1) {
            let i = new o2({
              rowSpan: t.options.rowSpan - 1,
              columnSpan: t.options.columnSpan,
              borders: t.options.borders,
              children: [],
              verticalMerge: oV.CONTINUE
            });
            e[r + 1].addCellToColumnIndex(i, n);
          }
          n += t.options.columnSpan || 1;
        });
      });
    }
  }
  class at extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        value: "w:val",
        rule: "w:hRule"
      });
    }
  }
  class ar extends eX {
    constructor(e, t) {
      super("w:trHeight");
      this.root.push(new at({
        value: rN(e),
        rule: t
      }));
    }
  }
  class an extends e$ {
    constructor(e) {
      super("w:trPr");
      if (e.cantSplit !== undefined) {
        this.root.push(new rz("w:cantSplit", e.cantSplit));
      }
      if (e.tableHeader !== undefined) {
        this.root.push(new rz("w:tblHeader", e.tableHeader));
      }
      if (e.height) {
        this.root.push(new ar(e.height.value, e.height.rule));
      }
    }
  }
  class ai extends eX {
    constructor(e) {
      super("w:tr");
      this.options = e;
      this.root.push(new an(e));
      for (let t of e.children) {
        this.root.push(t);
      }
    }
    get CellCount() {
      return this.options.children.length;
    }
    get cells() {
      return this.root.filter(e => e instanceof o2);
    }
    addCellToIndex(e, t) {
      this.root.splice(t + 1, 0, e);
    }
    addCellToColumnIndex(e, t) {
      let r = this.columnIndexToRootIndex(t, true);
      this.addCellToIndex(e, r - 1);
    }
    rootIndexToColumnIndex(e) {
      if (e < 1 || e >= this.root.length) {
        throw Error(`cell 'rootIndex' should between 1 to ${this.root.length - 1}`);
      }
      let t = 0;
      for (let r = 1; r < e; r++) {
        t += this.root[r].options.columnSpan || 1;
      }
      return t;
    }
    columnIndexToRootIndex(e, t = false) {
      if (e < 0) {
        throw Error("cell 'columnIndex' should not less than zero");
      }
      let r = 0;
      let n = 1;
      while (r <= e) {
        if (n >= this.root.length) {
          if (t) {
            return this.root.length;
          }
          throw Error(`cell 'columnIndex' should not great than ${r - 1}`);
        }
        let e = this.root[n];
        n += 1;
        r += e && e.options.columnSpan || 1;
      }
      return n - 1;
    }
  }
  class ao extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        xmlns: "xmlns",
        vt: "xmlns:vt"
      });
    }
  }
  class aa extends eX {
    constructor() {
      super("Properties");
      this.root.push(new ao({
        xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"
      }));
    }
  }
  class as extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        xmlns: "xmlns"
      });
    }
  }
  class al extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        contentType: "ContentType",
        extension: "Extension"
      });
    }
  }
  class au extends eX {
    constructor(e, t) {
      super("Default");
      this.root.push(new al({
        contentType: e,
        extension: t
      }));
    }
  }
  class ac extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        contentType: "ContentType",
        partName: "PartName"
      });
    }
  }
  class ah extends eX {
    constructor(e, t) {
      super("Override");
      this.root.push(new ac({
        contentType: e,
        partName: t
      }));
    }
  }
  class ad extends eX {
    constructor() {
      super("Types");
      this.root.push(new as({
        xmlns: "http://schemas.openxmlformats.org/package/2006/content-types"
      }));
      this.root.push(new au("image/png", "png"));
      this.root.push(new au("image/jpeg", "jpeg"));
      this.root.push(new au("image/jpeg", "jpg"));
      this.root.push(new au("image/bmp", "bmp"));
      this.root.push(new au("image/gif", "gif"));
      this.root.push(new au("application/vnd.openxmlformats-package.relationships+xml", "rels"));
      this.root.push(new au("application/xml", "xml"));
      this.root.push(new au("application/vnd.openxmlformats-officedocument.obfuscatedFont", "odttf"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", "/word/document.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml", "/word/styles.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-package.core-properties+xml", "/docProps/core.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.custom-properties+xml", "/docProps/custom.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.extended-properties+xml", "/docProps/app.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml", "/word/numbering.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml", "/word/footnotes.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml", "/word/settings.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml", "/word/comments.xml"));
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml", "/word/fontTable.xml"));
    }
    addFooter(e) {
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml", `/word/footer${e}.xml`));
    }
    addHeader(e) {
      this.root.push(new ah("application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml", `/word/header${e}.xml`));
    }
  }
  class af extends eX {
    constructor(e) {
      super("cp:coreProperties");
      this.root.push(new ok({
        cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        dcmitype: "http://purl.org/dc/dcmitype/",
        xsi: "http://www.w3.org/2001/XMLSchema-instance"
      }));
      if (e.title) {
        this.root.push(new rY("dc:title", e.title));
      }
      if (e.subject) {
        this.root.push(new rY("dc:subject", e.subject));
      }
      if (e.creator) {
        this.root.push(new rY("dc:creator", e.creator));
      }
      if (e.keywords) {
        this.root.push(new rY("cp:keywords", e.keywords));
      }
      if (e.description) {
        this.root.push(new rY("dc:description", e.description));
      }
      if (e.lastModifiedBy) {
        this.root.push(new rY("cp:lastModifiedBy", e.lastModifiedBy));
      }
      if (e.revision) {
        this.root.push(new rY("cp:revision", String(e.revision)));
      }
      this.root.push(new aA("dcterms:created"));
      this.root.push(new aA("dcterms:modified"));
    }
  }
  class aA extends eX {
    constructor(e) {
      super(e);
      this.root.push(new ok({
        type: "dcterms:W3CDTF"
      }));
      this.root.push(rU(new Date()));
    }
  }
  class ag extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        xmlns: "xmlns",
        vt: "xmlns:vt"
      });
    }
  }
  class ap extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        fmtid: "fmtid",
        pid: "pid",
        name: "name"
      });
    }
  }
  class am extends eX {
    constructor(e, t) {
      super("property");
      this.root.push(new ap({
        fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
        pid: e.toString(),
        name: t.name
      }));
      this.root.push(new ay(t.value));
    }
  }
  class ay extends eX {
    constructor(e) {
      super("vt:lpwstr");
      this.root.push(e);
    }
  }
  class av extends eX {
    constructor(e) {
      super("Properties");
      eK(this, "nextId");
      eK(this, "properties", []);
      this.root.push(new ag({
        xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"
      }));
      this.nextId = 2;
      for (let t of e) {
        this.addCustomProperty(t);
      }
    }
    prepForXml(e) {
      this.properties.forEach(e => this.root.push(e));
      return super.prepForXml(e);
    }
    addCustomProperty(e) {
      this.properties.push(new am(this.nextId++, e));
    }
  }
  class ab extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        wpc: "xmlns:wpc",
        mc: "xmlns:mc",
        o: "xmlns:o",
        r: "xmlns:r",
        m: "xmlns:m",
        v: "xmlns:v",
        wp14: "xmlns:wp14",
        wp: "xmlns:wp",
        w10: "xmlns:w10",
        w: "xmlns:w",
        w14: "xmlns:w14",
        w15: "xmlns:w15",
        wpg: "xmlns:wpg",
        wpi: "xmlns:wpi",
        wne: "xmlns:wne",
        wps: "xmlns:wps",
        cp: "xmlns:cp",
        dc: "xmlns:dc",
        dcterms: "xmlns:dcterms",
        dcmitype: "xmlns:dcmitype",
        xsi: "xmlns:xsi",
        type: "xsi:type"
      });
    }
  }
  let aw = class extends rD {
    constructor(e, t) {
      super("w:ftr", t);
      eK(this, "refId");
      this.refId = e;
      if (!t) {
        this.root.push(new ab({
          wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
          mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
          o: "urn:schemas-microsoft-com:office:office",
          r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
          v: "urn:schemas-microsoft-com:vml",
          wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
          wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
          w10: "urn:schemas-microsoft-com:office:word",
          w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
          w14: "http://schemas.microsoft.com/office/word/2010/wordml",
          w15: "http://schemas.microsoft.com/office/word/2012/wordml",
          wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
          wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
          wne: "http://schemas.microsoft.com/office/word/2006/wordml",
          wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
        }));
      }
    }
    get ReferenceId() {
      return this.refId;
    }
    add(e) {
      this.root.push(e);
    }
  };
  class aC {
    constructor(e, t, r) {
      eK(this, "footer");
      eK(this, "relationships");
      this.media = e;
      this.footer = new aw(t, r);
      this.relationships = new oF();
    }
    add(e) {
      this.footer.add(e);
    }
    addChildElement(e) {
      this.footer.addChildElement(e);
    }
    get View() {
      return this.footer;
    }
    get Relationships() {
      return this.relationships;
    }
    get Media() {
      return this.media;
    }
  }
  class aE extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        type: "w:type",
        id: "w:id"
      });
    }
  }
  class aI extends eX {
    constructor() {
      super("w:footnoteRef");
    }
  }
  class aB extends nx {
    constructor() {
      super({
        style: "FootnoteReference"
      });
      this.root.push(new aI());
    }
  }
  class ax extends eX {
    constructor(e) {
      super("w:footnote");
      this.root.push(new aE({
        type: e.type,
        id: e.id
      }));
      for (let t = 0; t < e.children.length; t++) {
        let r = e.children[t];
        if (t === 0) {
          r.addRunToFront(new aB());
        }
        this.root.push(r);
      }
    }
  }
  class aD extends eX {
    constructor() {
      super("w:continuationSeparator");
    }
  }
  class aS extends nx {
    constructor() {
      super({});
      this.root.push(new aD());
    }
  }
  class ak extends eX {
    constructor() {
      super("w:separator");
    }
  }
  class a_ extends nx {
    constructor() {
      super({});
      this.root.push(new ak());
    }
  }
  class aT extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        wpc: "xmlns:wpc",
        mc: "xmlns:mc",
        o: "xmlns:o",
        r: "xmlns:r",
        m: "xmlns:m",
        v: "xmlns:v",
        wp14: "xmlns:wp14",
        wp: "xmlns:wp",
        w10: "xmlns:w10",
        w: "xmlns:w",
        w14: "xmlns:w14",
        w15: "xmlns:w15",
        wpg: "xmlns:wpg",
        wpi: "xmlns:wpi",
        wne: "xmlns:wne",
        wps: "xmlns:wps",
        Ignorable: "mc:Ignorable"
      });
    }
  }
  class aQ extends eX {
    constructor() {
      super("w:footnotes");
      this.root.push(new aT({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        Ignorable: "w14 w15 wp14"
      }));
      let e = new ax({
        id: -1,
        type: "separator",
        children: [new oU({
          spacing: {
            after: 0,
            line: 240,
            lineRule: iK
          },
          children: [new a_()]
        })]
      });
      this.root.push(e);
      let t = new ax({
        id: 0,
        type: "continuationSeparator",
        children: [new oU({
          spacing: {
            after: 0,
            line: 240,
            lineRule: iK
          },
          children: [new aS()]
        })]
      });
      this.root.push(t);
    }
    createFootNote(e, t) {
      let r = new ax({
        id: e,
        children: t
      });
      this.root.push(r);
    }
  }
  class aR {
    constructor() {
      eK(this, "footnotess");
      eK(this, "relationships");
      this.footnotess = new aQ();
      this.relationships = new oF();
    }
    get View() {
      return this.footnotess;
    }
    get Relationships() {
      return this.relationships;
    }
  }
  class aF extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        wpc: "xmlns:wpc",
        mc: "xmlns:mc",
        o: "xmlns:o",
        r: "xmlns:r",
        m: "xmlns:m",
        v: "xmlns:v",
        wp14: "xmlns:wp14",
        wp: "xmlns:wp",
        w10: "xmlns:w10",
        w: "xmlns:w",
        w14: "xmlns:w14",
        w15: "xmlns:w15",
        wpg: "xmlns:wpg",
        wpi: "xmlns:wpi",
        wne: "xmlns:wne",
        wps: "xmlns:wps",
        cp: "xmlns:cp",
        dc: "xmlns:dc",
        dcterms: "xmlns:dcterms",
        dcmitype: "xmlns:dcmitype",
        xsi: "xmlns:xsi",
        type: "xsi:type",
        cx: "xmlns:cx",
        cx1: "xmlns:cx1",
        cx2: "xmlns:cx2",
        cx3: "xmlns:cx3",
        cx4: "xmlns:cx4",
        cx5: "xmlns:cx5",
        cx6: "xmlns:cx6",
        cx7: "xmlns:cx7",
        cx8: "xmlns:cx8",
        w16cid: "xmlns:w16cid",
        w16se: "xmlns:w16se"
      });
    }
  }
  let aL = class extends rD {
    constructor(e, t) {
      super("w:hdr", t);
      eK(this, "refId");
      this.refId = e;
      if (!t) {
        this.root.push(new aF({
          wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
          mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
          o: "urn:schemas-microsoft-com:office:office",
          r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
          v: "urn:schemas-microsoft-com:vml",
          wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
          wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
          w10: "urn:schemas-microsoft-com:office:word",
          w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
          w14: "http://schemas.microsoft.com/office/word/2010/wordml",
          w15: "http://schemas.microsoft.com/office/word/2012/wordml",
          wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
          wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
          wne: "http://schemas.microsoft.com/office/word/2006/wordml",
          wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
          cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
          cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
          cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
          cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
          cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
          cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
          cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
          cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
          cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
          w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid",
          w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex"
        }));
      }
    }
    get ReferenceId() {
      return this.refId;
    }
    add(e) {
      this.root.push(e);
    }
  };
  class aO {
    constructor(e, t, r) {
      eK(this, "header");
      eK(this, "relationships");
      this.media = e;
      this.header = new aL(t, r);
      this.relationships = new oF();
    }
    add(e) {
      this.header.add(e);
      return this;
    }
    addChildElement(e) {
      this.header.addChildElement(e);
    }
    get View() {
      return this.header;
    }
    get Relationships() {
      return this.relationships;
    }
    get Media() {
      return this.media;
    }
  }
  class aN {
    constructor() {
      eK(this, "map");
      this.map = new Map();
    }
    addImage(e, t) {
      this.map.set(e, t);
    }
    get Array() {
      return Array.from(this.map.values());
    }
  }
  let aM = {
    DECIMAL: "decimal",
    UPPER_ROMAN: "upperRoman",
    LOWER_ROMAN: "lowerRoman",
    UPPER_LETTER: "upperLetter",
    LOWER_LETTER: "lowerLetter",
    ORDINAL: "ordinal",
    CARDINAL_TEXT: "cardinalText",
    ORDINAL_TEXT: "ordinalText",
    HEX: "hex",
    CHICAGO: "chicago",
    IDEOGRAPH__DIGITAL: "ideographDigital",
    JAPANESE_COUNTING: "japaneseCounting",
    AIUEO: "aiueo",
    IROHA: "iroha",
    DECIMAL_FULL_WIDTH: "decimalFullWidth",
    DECIMAL_HALF_WIDTH: "decimalHalfWidth",
    JAPANESE_LEGAL: "japaneseLegal",
    JAPANESE_DIGITAL_TEN_THOUSAND: "japaneseDigitalTenThousand",
    DECIMAL_ENCLOSED_CIRCLE: "decimalEnclosedCircle",
    DECIMAL_FULL_WIDTH2: "decimalFullWidth2",
    AIUEO_FULL_WIDTH: "aiueoFullWidth",
    IROHA_FULL_WIDTH: "irohaFullWidth",
    DECIMAL_ZERO: "decimalZero",
    BULLET: "bullet",
    GANADA: "ganada",
    CHOSUNG: "chosung",
    DECIMAL_ENCLOSED_FULLSTOP: "decimalEnclosedFullstop",
    DECIMAL_ENCLOSED_PARENTHESES: "decimalEnclosedParen",
    DECIMAL_ENCLOSED_CIRCLE_CHINESE: "decimalEnclosedCircleChinese",
    IDEOGRAPH_ENCLOSED_CIRCLE: "ideographEnclosedCircle",
    IDEOGRAPH_TRADITIONAL: "ideographTraditional",
    IDEOGRAPH_ZODIAC: "ideographZodiac",
    IDEOGRAPH_ZODIAC_TRADITIONAL: "ideographZodiacTraditional",
    TAIWANESE_COUNTING: "taiwaneseCounting",
    IDEOGRAPH_LEGAL_TRADITIONAL: "ideographLegalTraditional",
    TAIWANESE_COUNTING_THOUSAND: "taiwaneseCountingThousand",
    TAIWANESE_DIGITAL: "taiwaneseDigital",
    CHINESE_COUNTING: "chineseCounting",
    CHINESE_LEGAL_SIMPLIFIED: "chineseLegalSimplified",
    CHINESE_COUNTING_THOUSAND: "chineseCountingThousand",
    KOREAN_DIGITAL: "koreanDigital",
    KOREAN_COUNTING: "koreanCounting",
    KOREAN_LEGAL: "koreanLegal",
    KOREAN_DIGITAL2: "koreanDigital2",
    VIETNAMESE_COUNTING: "vietnameseCounting",
    RUSSIAN_LOWER: "russianLower",
    RUSSIAN_UPPER: "russianUpper",
    NONE: "none",
    NUMBER_IN_DASH: "numberInDash",
    HEBREW1: "hebrew1",
    HEBREW2: "hebrew2",
    ARABIC_ALPHA: "arabicAlpha",
    ARABIC_ABJAD: "arabicAbjad",
    HINDI_VOWELS: "hindiVowels",
    HINDI_CONSONANTS: "hindiConsonants",
    HINDI_NUMBERS: "hindiNumbers",
    HINDI_COUNTING: "hindiCounting",
    THAI_LETTERS: "thaiLetters",
    THAI_NUMBERS: "thaiNumbers",
    THAI_COUNTING: "thaiCounting",
    BAHT_TEXT: "bahtText",
    DOLLAR_TEXT: "dollarText",
    CUSTOM: "custom"
  };
  class aP extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        ilvl: "w:ilvl",
        tentative: "w15:tentative"
      });
    }
  }
  class aU extends eX {
    constructor(e) {
      super("w:numFmt");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class az extends eX {
    constructor(e) {
      super("w:lvlText");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class aH extends eX {
    constructor(e) {
      super("w:lvlJc");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class aG extends eX {
    constructor(e) {
      super("w:suff");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class aZ extends eX {
    constructor() {
      super("w:isLgl");
    }
  }
  class aW extends eX {
    constructor({
      level: e,
      format: t,
      text: r,
      alignment: n = rq.START,
      start: i = 1,
      style: o,
      suffix: a,
      isLegalNumberingStyle: s
    }) {
      super("w:lvl");
      eK(this, "paragraphProperties");
      eK(this, "runProperties");
      this.root.push(new rW("w:start", rS(i)));
      if (t) {
        this.root.push(new aU(t));
      }
      if (a) {
        this.root.push(new aG(a));
      }
      if (s) {
        this.root.push(new aZ());
      }
      if (r) {
        this.root.push(new az(r));
      }
      this.root.push(new aH(n));
      this.paragraphProperties = new oP(o && o.paragraph);
      this.runProperties = new nC(o && o.run);
      this.root.push(this.paragraphProperties);
      this.root.push(this.runProperties);
      if (e > 9) {
        throw Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");
      }
      this.root.push(new aP({
        ilvl: rS(e),
        tentative: 1
      }));
    }
  }
  class aj extends aW {}
  class aY extends eX {
    constructor(e) {
      super("w:multiLevelType");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class aK extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        abstractNumId: "w:abstractNumId",
        restartNumberingAfterBreak: "w15:restartNumberingAfterBreak"
      });
    }
  }
  class aq extends eX {
    constructor(e, t) {
      super("w:abstractNum");
      eK(this, "id");
      this.root.push(new aK({
        abstractNumId: rS(e),
        restartNumberingAfterBreak: 0
      }));
      this.root.push(new aY("hybridMultilevel"));
      this.id = e;
      for (let r of t) {
        this.root.push(new aj(r));
      }
    }
  }
  class aV extends eX {
    constructor(e) {
      super("w:abstractNumId");
      this.root.push(new e2({
        val: e
      }));
    }
  }
  class aJ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        numId: "w:numId"
      });
    }
  }
  class aX extends eX {
    constructor(e) {
      super("w:num");
      eK(this, "numId");
      eK(this, "reference");
      eK(this, "instance");
      this.numId = e.numId;
      this.reference = e.reference;
      this.instance = e.instance;
      this.root.push(new aJ({
        numId: rS(e.numId)
      }));
      this.root.push(new aV(rS(e.abstractNumId)));
      if (e.overrideLevels && e.overrideLevels.length) {
        for (let t of e.overrideLevels) {
          this.root.push(new a0(t.num, t.start));
        }
      }
    }
  }
  class a$ extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        ilvl: "w:ilvl"
      });
    }
  }
  class a0 extends eX {
    constructor(e, t) {
      super("w:lvlOverride");
      this.root.push(new a$({
        ilvl: e
      }));
      if (t !== undefined) {
        this.root.push(new a2(t));
      }
    }
  }
  class a1 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class a2 extends eX {
    constructor(e) {
      super("w:startOverride");
      this.root.push(new a1({
        val: e
      }));
    }
  }
  class a5 extends eX {
    constructor(e) {
      super("w:numbering");
      eK(this, "abstractNumberingMap", new Map());
      eK(this, "concreteNumberingMap", new Map());
      eK(this, "referenceConfigMap", new Map());
      eK(this, "abstractNumUniqueNumericId", nQ());
      eK(this, "concreteNumUniqueNumericId", nR());
      this.root.push(new ok({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        Ignorable: "w14 w15 wp14"
      }));
      let t = new aq(this.abstractNumUniqueNumericId(), [{
        level: 0,
        format: aM.BULLET,
        text: "●",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: n_(0.5),
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 1,
        format: aM.BULLET,
        text: "○",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: n_(1),
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 2,
        format: aM.BULLET,
        text: "■",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 2160,
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 3,
        format: aM.BULLET,
        text: "●",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 2880,
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 4,
        format: aM.BULLET,
        text: "○",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 3600,
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 5,
        format: aM.BULLET,
        text: "■",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 4320,
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 6,
        format: aM.BULLET,
        text: "●",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 5040,
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 7,
        format: aM.BULLET,
        text: "●",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 5760,
              hanging: n_(0.25)
            }
          }
        }
      }, {
        level: 8,
        format: aM.BULLET,
        text: "●",
        alignment: rq.LEFT,
        style: {
          paragraph: {
            indent: {
              left: 6480,
              hanging: n_(0.25)
            }
          }
        }
      }]);
      this.concreteNumberingMap.set("default-bullet-numbering", new aX({
        numId: 1,
        abstractNumId: t.id,
        reference: "default-bullet-numbering",
        instance: 0,
        overrideLevels: [{
          num: 0,
          start: 1
        }]
      }));
      this.abstractNumberingMap.set("default-bullet-numbering", t);
      for (let r of e.config) {
        this.abstractNumberingMap.set(r.reference, new aq(this.abstractNumUniqueNumericId(), r.levels));
        this.referenceConfigMap.set(r.reference, r.levels);
      }
    }
    prepForXml(e) {
      for (let e of this.abstractNumberingMap.values()) {
        this.root.push(e);
      }
      for (let e of this.concreteNumberingMap.values()) {
        this.root.push(e);
      }
      return super.prepForXml(e);
    }
    createConcreteNumberingInstance(e, t) {
      let r = this.abstractNumberingMap.get(e);
      if (!r) {
        return;
      }
      let n = `${e}-${t}`;
      if (this.concreteNumberingMap.has(n)) {
        return;
      }
      let i = this.referenceConfigMap.get(e);
      let o = i && i[0].start;
      let a = {
        numId: this.concreteNumUniqueNumericId(),
        abstractNumId: r.id,
        reference: e,
        instance: t,
        overrideLevels: [o && Number.isInteger(o) ? {
          num: 0,
          start: o
        } : {
          num: 0,
          start: 1
        }]
      };
      this.concreteNumberingMap.set(n, new aX(a));
    }
    get ConcreteNumbering() {
      return Array.from(this.concreteNumberingMap.values());
    }
    get ReferenceConfig() {
      return Array.from(this.referenceConfigMap.values());
    }
  }
  class a3 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        version: "w:val",
        name: "w:name",
        uri: "w:uri"
      });
    }
  }
  class a4 extends eX {
    constructor(e) {
      super("w:compatSetting");
      this.root.push(new a3({
        version: e,
        uri: "http://schemas.microsoft.com/office/word",
        name: "compatibilityMode"
      }));
    }
  }
  class a6 extends eX {
    constructor(e) {
      super("w:compat");
      if (e.version) {
        this.root.push(new a4(e.version));
      }
      if (e.useSingleBorderforContiguousCells) {
        this.root.push(new rz("w:useSingleBorderforContiguousCells", e.useSingleBorderforContiguousCells));
      }
      if (e.wordPerfectJustification) {
        this.root.push(new rz("w:wpJustification", e.wordPerfectJustification));
      }
      if (e.noTabStopForHangingIndent) {
        this.root.push(new rz("w:noTabHangInd", e.noTabStopForHangingIndent));
      }
      if (e.noLeading) {
        this.root.push(new rz("w:noLeading", e.noLeading));
      }
      if (e.spaceForUnderline) {
        this.root.push(new rz("w:spaceForUL", e.spaceForUnderline));
      }
      if (e.noColumnBalance) {
        this.root.push(new rz("w:noColumnBalance", e.noColumnBalance));
      }
      if (e.balanceSingleByteDoubleByteWidth) {
        this.root.push(new rz("w:balanceSingleByteDoubleByteWidth", e.balanceSingleByteDoubleByteWidth));
      }
      if (e.noExtraLineSpacing) {
        this.root.push(new rz("w:noExtraLineSpacing", e.noExtraLineSpacing));
      }
      if (e.doNotLeaveBackslashAlone) {
        this.root.push(new rz("w:doNotLeaveBackslashAlone", e.doNotLeaveBackslashAlone));
      }
      if (e.underlineTrailingSpaces) {
        this.root.push(new rz("w:ulTrailSpace", e.underlineTrailingSpaces));
      }
      if (e.doNotExpandShiftReturn) {
        this.root.push(new rz("w:doNotExpandShiftReturn", e.doNotExpandShiftReturn));
      }
      if (e.spacingInWholePoints) {
        this.root.push(new rz("w:spacingInWholePoints", e.spacingInWholePoints));
      }
      if (e.lineWrapLikeWord6) {
        this.root.push(new rz("w:lineWrapLikeWord6", e.lineWrapLikeWord6));
      }
      if (e.printBodyTextBeforeHeader) {
        this.root.push(new rz("w:printBodyTextBeforeHeader", e.printBodyTextBeforeHeader));
      }
      if (e.printColorsBlack) {
        this.root.push(new rz("w:printColBlack", e.printColorsBlack));
      }
      if (e.spaceWidth) {
        this.root.push(new rz("w:wpSpaceWidth", e.spaceWidth));
      }
      if (e.showBreaksInFrames) {
        this.root.push(new rz("w:showBreaksInFrames", e.showBreaksInFrames));
      }
      if (e.subFontBySize) {
        this.root.push(new rz("w:subFontBySize", e.subFontBySize));
      }
      if (e.suppressBottomSpacing) {
        this.root.push(new rz("w:suppressBottomSpacing", e.suppressBottomSpacing));
      }
      if (e.suppressTopSpacing) {
        this.root.push(new rz("w:suppressTopSpacing", e.suppressTopSpacing));
      }
      if (e.suppressSpacingAtTopOfPage) {
        this.root.push(new rz("w:suppressSpacingAtTopOfPage", e.suppressSpacingAtTopOfPage));
      }
      if (e.suppressTopSpacingWP) {
        this.root.push(new rz("w:suppressTopSpacingWP", e.suppressTopSpacingWP));
      }
      if (e.suppressSpBfAfterPgBrk) {
        this.root.push(new rz("w:suppressSpBfAfterPgBrk", e.suppressSpBfAfterPgBrk));
      }
      if (e.swapBordersFacingPages) {
        this.root.push(new rz("w:swapBordersFacingPages", e.swapBordersFacingPages));
      }
      if (e.convertMailMergeEsc) {
        this.root.push(new rz("w:convMailMergeEsc", e.convertMailMergeEsc));
      }
      if (e.truncateFontHeightsLikeWP6) {
        this.root.push(new rz("w:truncateFontHeightsLikeWP6", e.truncateFontHeightsLikeWP6));
      }
      if (e.macWordSmallCaps) {
        this.root.push(new rz("w:mwSmallCaps", e.macWordSmallCaps));
      }
      if (e.usePrinterMetrics) {
        this.root.push(new rz("w:usePrinterMetrics", e.usePrinterMetrics));
      }
      if (e.doNotSuppressParagraphBorders) {
        this.root.push(new rz("w:doNotSuppressParagraphBorders", e.doNotSuppressParagraphBorders));
      }
      if (e.wrapTrailSpaces) {
        this.root.push(new rz("w:wrapTrailSpaces", e.wrapTrailSpaces));
      }
      if (e.footnoteLayoutLikeWW8) {
        this.root.push(new rz("w:footnoteLayoutLikeWW8", e.footnoteLayoutLikeWW8));
      }
      if (e.shapeLayoutLikeWW8) {
        this.root.push(new rz("w:shapeLayoutLikeWW8", e.shapeLayoutLikeWW8));
      }
      if (e.alignTablesRowByRow) {
        this.root.push(new rz("w:alignTablesRowByRow", e.alignTablesRowByRow));
      }
      if (e.forgetLastTabAlignment) {
        this.root.push(new rz("w:forgetLastTabAlignment", e.forgetLastTabAlignment));
      }
      if (e.adjustLineHeightInTable) {
        this.root.push(new rz("w:adjustLineHeightInTable", e.adjustLineHeightInTable));
      }
      if (e.autoSpaceLikeWord95) {
        this.root.push(new rz("w:autoSpaceLikeWord95", e.autoSpaceLikeWord95));
      }
      if (e.noSpaceRaiseLower) {
        this.root.push(new rz("w:noSpaceRaiseLower", e.noSpaceRaiseLower));
      }
      if (e.doNotUseHTMLParagraphAutoSpacing) {
        this.root.push(new rz("w:doNotUseHTMLParagraphAutoSpacing", e.doNotUseHTMLParagraphAutoSpacing));
      }
      if (e.layoutRawTableWidth) {
        this.root.push(new rz("w:layoutRawTableWidth", e.layoutRawTableWidth));
      }
      if (e.layoutTableRowsApart) {
        this.root.push(new rz("w:layoutTableRowsApart", e.layoutTableRowsApart));
      }
      if (e.useWord97LineBreakRules) {
        this.root.push(new rz("w:useWord97LineBreakRules", e.useWord97LineBreakRules));
      }
      if (e.doNotBreakWrappedTables) {
        this.root.push(new rz("w:doNotBreakWrappedTables", e.doNotBreakWrappedTables));
      }
      if (e.doNotSnapToGridInCell) {
        this.root.push(new rz("w:doNotSnapToGridInCell", e.doNotSnapToGridInCell));
      }
      if (e.selectFieldWithFirstOrLastCharacter) {
        this.root.push(new rz("w:selectFldWithFirstOrLastChar", e.selectFieldWithFirstOrLastCharacter));
      }
      if (e.applyBreakingRules) {
        this.root.push(new rz("w:applyBreakingRules", e.applyBreakingRules));
      }
      if (e.doNotWrapTextWithPunctuation) {
        this.root.push(new rz("w:doNotWrapTextWithPunct", e.doNotWrapTextWithPunctuation));
      }
      if (e.doNotUseEastAsianBreakRules) {
        this.root.push(new rz("w:doNotUseEastAsianBreakRules", e.doNotUseEastAsianBreakRules));
      }
      if (e.useWord2002TableStyleRules) {
        this.root.push(new rz("w:useWord2002TableStyleRules", e.useWord2002TableStyleRules));
      }
      if (e.growAutofit) {
        this.root.push(new rz("w:growAutofit", e.growAutofit));
      }
      if (e.useFELayout) {
        this.root.push(new rz("w:useFELayout", e.useFELayout));
      }
      if (e.useNormalStyleForList) {
        this.root.push(new rz("w:useNormalStyleForList", e.useNormalStyleForList));
      }
      if (e.doNotUseIndentAsNumberingTabStop) {
        this.root.push(new rz("w:doNotUseIndentAsNumberingTabStop", e.doNotUseIndentAsNumberingTabStop));
      }
      if (e.useAlternateEastAsianLineBreakRules) {
        this.root.push(new rz("w:useAltKinsokuLineBreakRules", e.useAlternateEastAsianLineBreakRules));
      }
      if (e.allowSpaceOfSameStyleInTable) {
        this.root.push(new rz("w:allowSpaceOfSameStyleInTable", e.allowSpaceOfSameStyleInTable));
      }
      if (e.doNotSuppressIndentation) {
        this.root.push(new rz("w:doNotSuppressIndentation", e.doNotSuppressIndentation));
      }
      if (e.doNotAutofitConstrainedTables) {
        this.root.push(new rz("w:doNotAutofitConstrainedTables", e.doNotAutofitConstrainedTables));
      }
      if (e.autofitToFirstFixedWidthCell) {
        this.root.push(new rz("w:autofitToFirstFixedWidthCell", e.autofitToFirstFixedWidthCell));
      }
      if (e.underlineTabInNumberingList) {
        this.root.push(new rz("w:underlineTabInNumList", e.underlineTabInNumberingList));
      }
      if (e.displayHangulFixedWidth) {
        this.root.push(new rz("w:displayHangulFixedWidth", e.displayHangulFixedWidth));
      }
      if (e.splitPgBreakAndParaMark) {
        this.root.push(new rz("w:splitPgBreakAndParaMark", e.splitPgBreakAndParaMark));
      }
      if (e.doNotVerticallyAlignCellWithSp) {
        this.root.push(new rz("w:doNotVertAlignCellWithSp", e.doNotVerticallyAlignCellWithSp));
      }
      if (e.doNotBreakConstrainedForcedTable) {
        this.root.push(new rz("w:doNotBreakConstrainedForcedTable", e.doNotBreakConstrainedForcedTable));
      }
      if (e.ignoreVerticalAlignmentInTextboxes) {
        this.root.push(new rz("w:doNotVertAlignInTxbx", e.ignoreVerticalAlignmentInTextboxes));
      }
      if (e.useAnsiKerningPairs) {
        this.root.push(new rz("w:useAnsiKerningPairs", e.useAnsiKerningPairs));
      }
      if (e.cachedColumnBalance) {
        this.root.push(new rz("w:cachedColBalance", e.cachedColumnBalance));
      }
    }
  }
  class a8 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        wpc: "xmlns:wpc",
        mc: "xmlns:mc",
        o: "xmlns:o",
        r: "xmlns:r",
        m: "xmlns:m",
        v: "xmlns:v",
        wp14: "xmlns:wp14",
        wp: "xmlns:wp",
        w10: "xmlns:w10",
        w: "xmlns:w",
        w14: "xmlns:w14",
        w15: "xmlns:w15",
        wpg: "xmlns:wpg",
        wpi: "xmlns:wpi",
        wne: "xmlns:wne",
        wps: "xmlns:wps",
        Ignorable: "mc:Ignorable"
      });
    }
  }
  class a7 extends eX {
    constructor(e) {
      var r;
      super("w:settings");
      this.root.push(new a8({
        wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
        mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
        o: "urn:schemas-microsoft-com:office:office",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
        v: "urn:schemas-microsoft-com:vml",
        wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
        wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
        w10: "urn:schemas-microsoft-com:office:word",
        w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        w14: "http://schemas.microsoft.com/office/word/2010/wordml",
        w15: "http://schemas.microsoft.com/office/word/2012/wordml",
        wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
        wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
        wne: "http://schemas.microsoft.com/office/word/2006/wordml",
        wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        Ignorable: "w14 w15 wp14"
      }));
      this.root.push(new rz("w:displayBackgroundShape", true));
      if (e.trackRevisions !== undefined) {
        this.root.push(new rz("w:trackRevisions", e.trackRevisions));
      }
      if (e.evenAndOddHeaders !== undefined) {
        this.root.push(new rz("w:evenAndOddHeaders", e.evenAndOddHeaders));
      }
      if (e.updateFields !== undefined) {
        this.root.push(new rz("w:updateFields", e.updateFields));
      }
      if (e.defaultTabStop !== undefined) {
        this.root.push(new rW("w:defaultTabStop", e.defaultTabStop));
      }
      this.root.push(new a6(eY(ej({}, e.compatibility ?? {}), {
        version: ((r = e.compatibility) == null ? undefined : r.version) ?? e.compatibilityModeVersion ?? 15
      })));
    }
  }
  class a9 extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        val: "w:val"
      });
    }
  }
  class se extends eX {
    constructor(e) {
      super("w:name");
      this.root.push(new a9({
        val: e
      }));
    }
  }
  class st extends eX {
    constructor(e) {
      super("w:uiPriority");
      this.root.push(new a9({
        val: rS(e)
      }));
    }
  }
  class sr extends e0 {
    constructor() {
      super(...arguments);
      eK(this, "xmlKeys", {
        type: "w:type",
        styleId: "w:styleId",
        default: "w:default",
        customStyle: "w:customStyle"
      });
    }
  }
  class sn extends eX {
    constructor(e, t) {
      super("w:style");
      this.root.push(new sr(e));
      if (t.name) {
        this.root.push(new se(t.name));
      }
      if (t.basedOn) {
        this.root.push(new rG("w:basedOn", t.basedOn));
      }
      if (t.next) {
        this.root.push(new rG("w:next", t.next));
      }
      if (t.link) {
        this.root.push(new rG("w:link", t.link));
      }
      if (t.uiPriority !== undefined) {
        this.root.push(new st(t.uiPriority));
      }
      if (t.semiHidden !== undefined) {
        this.root.push(new rz("w:semiHidden", t.semiHidden));
      }
      if (t.unhideWhenUsed !== undefined) {
        this.root.push(new rz("w:unhideWhenUsed", t.unhideWhenUsed));
      }
      if (t.quickFormat !== undefined) {
        this.root.push(new rz("w:qFormat", t.quickFormat));
      }
    }
  }
  class si extends sn {
    constructor(e) {
      super({
        type: "paragraph",
        styleId: e.id
      }, e);
      eK(this, "paragraphProperties");
      eK(this, "runProperties");
      this.paragraphProperties = new oP(e.paragraph);
      this.runProperties = new nC(e.run);
      this.root.push(this.paragraphProperties);
      this.root.push(this.runProperties);
    }
  }
  class so extends sn {
    constructor(e) {
      super({
        type: "character",
        styleId: e.id
      }, ej({
        uiPriority: 99,
        unhideWhenUsed: true
      }, e));
      eK(this, "runProperties");
      this.runProperties = new nC(e.run);
      this.root.push(this.runProperties);
    }
  }
  class sa extends si {
    constructor(e) {
      super(ej({
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true
      }, e));
    }
  }
  class ss extends sa {
    constructor(e) {
      super(ej({
        id: "Title",
        name: "Title"
      }, e));
    }
  }
  class sl extends sa {
    constructor(e) {
      super(ej({
        id: "Heading1",
        name: "Heading 1"
      }, e));
    }
  }
  class su extends sa {
    constructor(e) {
      super(ej({
        id: "Heading2",
        name: "Heading 2"
      }, e));
    }
  }
  class sc extends sa {
    constructor(e) {
      super(ej({
        id: "Heading3",
        name: "Heading 3"
      }, e));
    }
  }
  class sh extends sa {
    constructor(e) {
      super(ej({
        id: "Heading4",
        name: "Heading 4"
      }, e));
    }
  }
  class sd extends sa {
    constructor(e) {
      super(ej({
        id: "Heading5",
        name: "Heading 5"
      }, e));
    }
  }
  class sf extends sa {
    constructor(e) {
      super(ej({
        id: "Heading6",
        name: "Heading 6"
      }, e));
    }
  }
  class sA extends sa {
    constructor(e) {
      super(ej({
        id: "Strong",
        name: "Strong"
      }, e));
    }
  }
  class sg extends si {
    constructor(e) {
      super(ej({
        id: "ListParagraph",
        name: "List Paragraph",
        basedOn: "Normal",
        quickFormat: true
      }, e));
    }
  }
  class sp extends si {
    constructor(e) {
      super(ej({
        id: "FootnoteText",
        name: "footnote text",
        link: "FootnoteTextChar",
        basedOn: "Normal",
        uiPriority: 99,
        semiHidden: true,
        unhideWhenUsed: true,
        paragraph: {
          spacing: {
            after: 0,
            line: 240,
            lineRule: iK
          }
        },
        run: {
          size: 20
        }
      }, e));
    }
  }
  class sm extends so {
    constructor(e) {
      super(ej({
        id: "FootnoteReference",
        name: "footnote reference",
        basedOn: "DefaultParagraphFont",
        semiHidden: true,
        run: {
          superScript: true
        }
      }, e));
    }
  }
  class sy extends so {
    constructor(e) {
      super(ej({
        id: "FootnoteTextChar",
        name: "Footnote Text Char",
        basedOn: "DefaultParagraphFont",
        link: "FootnoteText",
        semiHidden: true,
        run: {
          size: 20
        }
      }, e));
    }
  }
  class sv extends so {
    constructor(e) {
      super(ej({
        id: "Hyperlink",
        name: "Hyperlink",
        basedOn: "DefaultParagraphFont",
        run: {
          color: "0563C1",
          underline: {
            type: nb
          }
        }
      }, e));
    }
  }
  class sb extends eX {
    constructor(e) {
      super("w:styles");
      if (e.initialStyles) {
        this.root.push(e.initialStyles);
      }
      if (e.importedStyles) {
        for (let t of e.importedStyles) {
          this.root.push(t);
        }
      }
      if (e.paragraphStyles) {
        for (let t of e.paragraphStyles) {
          this.root.push(new si(t));
        }
      }
      if (e.characterStyles) {
        for (let t of e.characterStyles) {
          this.root.push(new so(t));
        }
      }
    }
  }
  class sw extends eX {
    constructor(e) {
      super("w:pPrDefault");
      this.root.push(new oP(e));
    }
  }
  class sC extends eX {
    constructor(e) {
      super("w:rPrDefault");
      this.root.push(new nC(e));
    }
  }
  class sE extends eX {
    constructor(e) {
      super("w:docDefaults");
      eK(this, "runPropertiesDefaults");
      eK(this, "paragraphPropertiesDefaults");
      this.runPropertiesDefaults = new sC(e.run);
      this.paragraphPropertiesDefaults = new sw(e.paragraph);
      this.root.push(this.runPropertiesDefaults);
      this.root.push(this.paragraphPropertiesDefaults);
    }
  }
  class sI {
    newInstance(e) {
      let t;
      for (let r of rC(e, {
        compact: false
      }).elements || []) {
        if (r.name === "w:styles") {
          t = r;
        }
      }
      if (t === undefined) {
        throw Error("can not find styles element");
      }
      let r = t.elements || [];
      return new sb({
        initialStyles: new rx(t.attributes),
        importedStyles: r.map(e => rE(e))
      });
    }
  }
  class sB {
    newInstance(e = {}) {
      return {
        initialStyles: new ok({
          mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
          r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
          w14: "http://schemas.microsoft.com/office/word/2010/wordml",
          w15: "http://schemas.microsoft.com/office/word/2012/wordml",
          Ignorable: "w14 w15"
        }),
        importedStyles: [new sE(e.document ?? {}), new ss(ej({
          run: {
            size: 56
          }
        }, e.title)), new sl(ej({
          run: {
            color: "2E74B5",
            size: 32
          }
        }, e.heading1)), new su(ej({
          run: {
            color: "2E74B5",
            size: 26
          }
        }, e.heading2)), new sc(ej({
          run: {
            color: "1F4D78",
            size: 24
          }
        }, e.heading3)), new sh(ej({
          run: {
            color: "2E74B5",
            italics: true
          }
        }, e.heading4)), new sd(ej({
          run: {
            color: "2E74B5"
          }
        }, e.heading5)), new sf(ej({
          run: {
            color: "1F4D78"
          }
        }, e.heading6)), new sA(ej({
          run: {
            bold: true
          }
        }, e.strong)), new sg(e.listParagraph || {}), new sv(e.hyperlink || {}), new sm(e.footnoteReference || {}), new sp(e.footnoteText || {}), new sy(e.footnoteTextChar || {})]
      };
    }
  }
  let sx = ({
    id: e,
    fontKey: t,
    subsetted: r
  }, n) => new rK({
    name: n,
    attributes: ej({
      id: {
        key: "r:id",
        value: e
      }
    }, t ? {
      fontKey: {
        key: "w:fontKey",
        value: `{${t}}`
      }
    } : {}),
    children: [...(r ? [new rz("w:subsetted", r)] : [])]
  });
  let sD = ({
    name: e,
    altName: t,
    panose1: r,
    charset: n,
    family: i,
    notTrueType: o,
    pitch: a,
    sig: s,
    embedRegular: l,
    embedBold: u,
    embedItalic: c,
    embedBoldItalic: h
  }) => new rK({
    name: "w:font",
    attributes: {
      name: {
        key: "w:name",
        value: e
      }
    },
    children: [...(t ? [rZ("w:altName", t)] : []), ...(r ? [rZ("w:panose1", r)] : []), ...(n ? [rZ("w:charset", n)] : []), ...(i ? [rZ("w:family", i)] : []), ...(o ? [new rz("w:notTrueType", o)] : []), ...(a ? [rZ("w:pitch", a)] : []), ...(s ? [new rK({
      name: "w:sig",
      attributes: {
        usb0: {
          key: "w:usb0",
          value: s.usb0
        },
        usb1: {
          key: "w:usb1",
          value: s.usb1
        },
        usb2: {
          key: "w:usb2",
          value: s.usb2
        },
        usb3: {
          key: "w:usb3",
          value: s.usb3
        },
        csb0: {
          key: "w:csb0",
          value: s.csb0
        },
        csb1: {
          key: "w:csb1",
          value: s.csb1
        }
      }
    })] : []), ...(l ? [sx(l, "w:embedRegular")] : []), ...(u ? [sx(u, "w:embedBold")] : []), ...(c ? [sx(c, "w:embedItalic")] : []), ...(h ? [sx(h, "w:embedBoldItalic")] : [])]
  });
  let sS = ({
    name: e,
    index: t,
    fontKey: r,
    characterSet: n
  }) => sD({
    name: e,
    sig: {
      usb0: "E0002AFF",
      usb1: "C000247B",
      usb2: "00000009",
      usb3: "00000000",
      csb0: "000001FF",
      csb1: "00000000"
    },
    charset: n,
    family: "auto",
    pitch: "variable",
    embedRegular: {
      fontKey: r,
      id: `rId${t}`
    }
  });
  let sk = e => new rK({
    name: "w:fonts",
    attributes: {
      mc: {
        key: "xmlns:mc",
        value: "http://schemas.openxmlformats.org/markup-compatibility/2006"
      },
      r: {
        key: "xmlns:r",
        value: "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
      },
      w: {
        key: "xmlns:w",
        value: "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
      },
      w14: {
        key: "xmlns:w14",
        value: "http://schemas.microsoft.com/office/word/2010/wordml"
      },
      w15: {
        key: "xmlns:w15",
        value: "http://schemas.microsoft.com/office/word/2012/wordml"
      },
      w16cex: {
        key: "xmlns:w16cex",
        value: "http://schemas.microsoft.com/office/word/2018/wordml/cex"
      },
      w16cid: {
        key: "xmlns:w16cid",
        value: "http://schemas.microsoft.com/office/word/2016/wordml/cid"
      },
      w16: {
        key: "xmlns:w16",
        value: "http://schemas.microsoft.com/office/word/2018/wordml"
      },
      w16sdtdh: {
        key: "xmlns:w16sdtdh",
        value: "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash"
      },
      w16se: {
        key: "xmlns:w16se",
        value: "http://schemas.microsoft.com/office/word/2015/wordml/symex"
      },
      Ignorable: {
        key: "mc:Ignorable",
        value: "w14 w15 w16se w16cid w16 w16cex w16sdtdh"
      }
    },
    children: e.map((e, t) => sS({
      name: e.name,
      index: t + 1,
      fontKey: e.fontKey
    }))
  });
  class s_ {
    constructor(e) {
      eK(this, "fontTable");
      eK(this, "relationships");
      eK(this, "fontOptionsWithKey", []);
      this.options = e;
      this.fontOptionsWithKey = e.map(e => eY(ej({}, e), {
        fontKey: nM()
      }));
      this.fontTable = sk(this.fontOptionsWithKey);
      this.relationships = new oF();
      for (let t = 0; t < e.length; t++) {
        this.relationships.createRelationship(t + 1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font", `fonts/${e[t].name}.odttf`);
      }
    }
    get View() {
      return this.fontTable;
    }
    get Relationships() {
      return this.relationships;
    }
  }
  class sT {
    constructor(e) {
      var a;
      var s;
      eK(this, "currentRelationshipId", 1);
      eK(this, "documentWrapper");
      eK(this, "headers", []);
      eK(this, "footers", []);
      eK(this, "coreProperties");
      eK(this, "numbering");
      eK(this, "media");
      eK(this, "fileRelationships");
      eK(this, "footnotesWrapper");
      eK(this, "settings");
      eK(this, "contentTypes");
      eK(this, "customProperties");
      eK(this, "appProperties");
      eK(this, "styles");
      eK(this, "comments");
      eK(this, "fontWrapper");
      this.coreProperties = new af(eY(ej({}, e), {
        creator: e.creator ?? "Un-named",
        revision: e.revision ?? 1,
        lastModifiedBy: e.lastModifiedBy ?? "Un-named"
      }));
      this.numbering = new a5(e.numbering ? e.numbering : {
        config: []
      });
      this.comments = new ij(e.comments ?? {
        children: []
      });
      this.fileRelationships = new oF();
      this.customProperties = new av(e.customProperties ?? []);
      this.appProperties = new aa();
      this.footnotesWrapper = new aR();
      this.contentTypes = new ad();
      this.documentWrapper = new oL({
        background: e.background
      });
      this.settings = new a7({
        compatibilityModeVersion: e.compatabilityModeVersion,
        compatibility: e.compatibility,
        evenAndOddHeaders: !!e.evenAndOddHeaderAndFooters,
        trackRevisions: (a = e.features) == null ? undefined : a.trackRevisions,
        updateFields: (s = e.features) == null ? undefined : s.updateFields,
        defaultTabStop: e.defaultTabStop
      });
      this.media = new aN();
      if (e.externalStyles) {
        let t = new sI();
        this.styles = t.newInstance(e.externalStyles);
      } else if (e.styles) {
        let t = new sB().newInstance(e.styles.default);
        this.styles = new sb(ej(ej({}, t), e.styles));
      } else {
        let e = new sB();
        this.styles = new sb(e.newInstance());
      }
      this.addDefaultRelationships();
      for (let t of e.sections) {
        this.addSection(t);
      }
      if (e.footnotes) {
        for (let t in e.footnotes) {
          this.footnotesWrapper.View.createFootNote(parseFloat(t), e.footnotes[t].children);
        }
      }
      this.fontWrapper = new s_(e.fonts ?? []);
    }
    addSection({
      headers: e = {},
      footers: t = {},
      children: r,
      properties: n
    }) {
      this.documentWrapper.View.Body.addSection(eY(ej({}, n), {
        headerWrapperGroup: {
          default: e.default ? this.createHeader(e.default) : undefined,
          first: e.first ? this.createHeader(e.first) : undefined,
          even: e.even ? this.createHeader(e.even) : undefined
        },
        footerWrapperGroup: {
          default: t.default ? this.createFooter(t.default) : undefined,
          first: t.first ? this.createFooter(t.first) : undefined,
          even: t.even ? this.createFooter(t.even) : undefined
        }
      }));
      for (let i of r) {
        this.documentWrapper.View.add(i);
      }
    }
    createHeader(e) {
      let t = new aO(this.media, this.currentRelationshipId++);
      for (let r of e.options.children) {
        t.add(r);
      }
      this.addHeaderToDocument(t);
      return t;
    }
    createFooter(e) {
      let t = new aC(this.media, this.currentRelationshipId++);
      for (let r of e.options.children) {
        t.add(r);
      }
      this.addFooterToDocument(t);
      return t;
    }
    addHeaderToDocument(e, t = oc.DEFAULT) {
      this.headers.push({
        header: e,
        type: t
      });
      this.documentWrapper.Relationships.createRelationship(e.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", `header${this.headers.length}.xml`);
      this.contentTypes.addHeader(this.headers.length);
    }
    addFooterToDocument(e, t = oc.DEFAULT) {
      this.footers.push({
        footer: e,
        type: t
      });
      this.documentWrapper.Relationships.createRelationship(e.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", `footer${this.footers.length}.xml`);
      this.contentTypes.addFooter(this.footers.length);
    }
    addDefaultRelationships() {
      this.fileRelationships.createRelationship(1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", "word/document.xml");
      this.fileRelationships.createRelationship(2, "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", "docProps/core.xml");
      this.fileRelationships.createRelationship(3, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", "docProps/app.xml");
      this.fileRelationships.createRelationship(4, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", "docProps/custom.xml");
      this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", "styles.xml");
      this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", "numbering.xml");
      this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", "footnotes.xml");
      this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", "settings.xml");
      this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", "comments.xml");
    }
    get Document() {
      return this.documentWrapper;
    }
    get Styles() {
      return this.styles;
    }
    get CoreProperties() {
      return this.coreProperties;
    }
    get Numbering() {
      return this.numbering;
    }
    get Media() {
      return this.media;
    }
    get FileRelationships() {
      return this.fileRelationships;
    }
    get Headers() {
      return this.headers.map(e => e.header);
    }
    get Footers() {
      return this.footers.map(e => e.footer);
    }
    get ContentTypes() {
      return this.contentTypes;
    }
    get CustomProperties() {
      return this.customProperties;
    }
    get AppProperties() {
      return this.appProperties;
    }
    get FootNotes() {
      return this.footnotesWrapper;
    }
    get Settings() {
      return this.settings;
    }
    get Comments() {
      return this.comments;
    }
    get FontTable() {
      return this.fontWrapper;
    }
  }
  function sQ(e) {
    throw Error("Could not dynamically require \"" + e + "\". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.");
  }
  var sR = {
    exports: {}
  };
  i = function () {
    return function e(t, r, n) {
      function i(a, s) {
        if (!r[a]) {
          if (!t[a]) {
            if (!s && sQ) {
              return sQ(a, true);
            }
            if (o) {
              return o(a, true);
            }
            var l = Error("Cannot find module '" + a + "'");
            l.code = "MODULE_NOT_FOUND";
            throw l;
          }
          var u = r[a] = {
            exports: {}
          };
          t[a][0].call(u.exports, function (e) {
            return i(t[a][1][e] || e);
          }, u, u.exports, e, t, r, n);
        }
        return r[a].exports;
      }
      var o = sQ;
      var a = 0;
      for (; a < n.length; a++) {
        i(n[a]);
      }
      return i;
    }({
      1: [function (e, t, r) {
        var n = e("./utils");
        var i = e("./support");
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function (e) {
          var t;
          var r;
          var i;
          var a;
          var s;
          var l;
          var u;
          var c = [];
          var h = 0;
          var d = e.length;
          var f = d;
          var A = n.getTypeOf(e) !== "string";
          while (h < e.length) {
            f = d - h;
            i = A ? (t = e[h++], r = h < d ? e[h++] : 0, h < d ? e[h++] : 0) : (t = e.charCodeAt(h++), r = h < d ? e.charCodeAt(h++) : 0, h < d ? e.charCodeAt(h++) : 0);
            a = t >> 2;
            s = (t & 3) << 4 | r >> 4;
            l = f > 1 ? (r & 15) << 2 | i >> 6 : 64;
            u = f > 2 ? i & 63 : 64;
            c.push(o.charAt(a) + o.charAt(s) + o.charAt(l) + o.charAt(u));
          }
          return c.join("");
        };
        r.decode = function (e) {
          var t;
          var r;
          var n;
          var a;
          var s;
          var l;
          var u = 0;
          var c = 0;
          var h = "data:";
          if (e.substr(0, h.length) === h) {
            throw Error("Invalid base64 input, it looks like a data url.");
          }
          var d;
          var f = (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length * 3 / 4;
          if (e.charAt(e.length - 1) === o.charAt(64)) {
            f--;
          }
          if (e.charAt(e.length - 2) === o.charAt(64)) {
            f--;
          }
          if (f % 1 != 0) {
            throw Error("Invalid base64 input, bad content length.");
          }
          for (d = i.uint8array ? new Uint8Array(f | 0) : Array(f | 0); u < e.length;) {
            t = o.indexOf(e.charAt(u++)) << 2 | (a = o.indexOf(e.charAt(u++))) >> 4;
            r = (a & 15) << 4 | (s = o.indexOf(e.charAt(u++))) >> 2;
            n = (s & 3) << 6 | (l = o.indexOf(e.charAt(u++)));
            d[c++] = t;
            if (s !== 64) {
              d[c++] = r;
            }
            if (l !== 64) {
              d[c++] = n;
            }
          }
          return d;
        };
      }, {
        "./support": 30,
        "./utils": 32
      }],
      2: [function (e, t, r) {
        var n = e("./external");
        var i = e("./stream/DataWorker");
        var o = e("./stream/Crc32Probe");
        var a = e("./stream/DataLengthProbe");
        function s(e, t, r, n, i) {
          this.compressedSize = e;
          this.uncompressedSize = t;
          this.crc32 = r;
          this.compression = n;
          this.compressedContent = i;
        }
        s.prototype = {
          getContentWorker: function () {
            var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length"));
            var t = this;
            e.on("end", function () {
              if (this.streamInfo.data_length !== t.uncompressedSize) {
                throw Error("Bug : uncompressed data size mismatch");
              }
            });
            return e;
          },
          getCompressedWorker: function () {
            return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          }
        };
        s.createWorkerFrom = function (e, t, r) {
          return e.pipe(new o()).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t);
        };
        t.exports = s;
      }, {
        "./external": 6,
        "./stream/Crc32Probe": 25,
        "./stream/DataLengthProbe": 26,
        "./stream/DataWorker": 27
      }],
      3: [function (e, t, r) {
        var n = e("./stream/GenericWorker");
        r.STORE = {
          magic: "\0\0",
          compressWorker: function () {
            return new n("STORE compression");
          },
          uncompressWorker: function () {
            return new n("STORE decompression");
          }
        };
        r.DEFLATE = e("./flate");
      }, {
        "./flate": 7,
        "./stream/GenericWorker": 28
      }],
      4: [function (e, t, r) {
        var n = e("./utils");
        var i = function () {
          var e;
          var t = [];
          var r = 0;
          for (; r < 256; r++) {
            e = r;
            for (var n = 0; n < 8; n++) {
              e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
            }
            t[r] = e;
          }
          return t;
        }();
        t.exports = function (e, t) {
          if (e !== undefined && e.length) {
            if (n.getTypeOf(e) !== "string") {
              return function (e, t, r, n) {
                var o = 0 + r;
                e ^= -1;
                for (var a = 0; a < o; a++) {
                  e = e >>> 8 ^ i[(e ^ t[a]) & 255];
                }
                return e ^ -1;
              }(t | 0, e, e.length, 0);
            } else {
              return function (e, t, r, n) {
                var o = 0 + r;
                e ^= -1;
                for (var a = 0; a < o; a++) {
                  e = e >>> 8 ^ i[(e ^ t.charCodeAt(a)) & 255];
                }
                return e ^ -1;
              }(t | 0, e, e.length, 0);
            }
          } else {
            return 0;
          }
        };
      }, {
        "./utils": 32
      }],
      5: [function (e, t, r) {
        r.base64 = false;
        r.binary = false;
        r.dir = false;
        r.createFolders = true;
        r.date = null;
        r.compression = null;
        r.compressionOptions = null;
        r.comment = null;
        r.unixPermissions = null;
        r.dosPermissions = null;
      }, {}],
      6: [function (e, t, r) {
        var n = null;
        n = typeof Promise != "undefined" ? Promise : e("lie");
        t.exports = {
          Promise: n
        };
      }, {
        lie: 37
      }],
      7: [function (e, t, r) {
        var n = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Uint32Array != "undefined";
        var i = e("pako");
        var o = e("./utils");
        var a = e("./stream/GenericWorker");
        var s = n ? "uint8array" : "array";
        function l(e, t) {
          a.call(this, "FlateWorker/" + e);
          this._pako = null;
          this._pakoAction = e;
          this._pakoOptions = t;
          this.meta = {};
        }
        r.magic = "\b\0";
        o.inherits(l, a);
        l.prototype.processChunk = function (e) {
          this.meta = e.meta;
          if (this._pako === null) {
            this._createPako();
          }
          this._pako.push(o.transformTo(s, e.data), false);
        };
        l.prototype.flush = function () {
          a.prototype.flush.call(this);
          if (this._pako === null) {
            this._createPako();
          }
          this._pako.push([], true);
        };
        l.prototype.cleanUp = function () {
          a.prototype.cleanUp.call(this);
          this._pako = null;
        };
        l.prototype._createPako = function () {
          this._pako = new i[this._pakoAction]({
            raw: true,
            level: this._pakoOptions.level || -1
          });
          var e = this;
          this._pako.onData = function (t) {
            e.push({
              data: t,
              meta: e.meta
            });
          };
        };
        r.compressWorker = function (e) {
          return new l("Deflate", e);
        };
        r.uncompressWorker = function () {
          return new l("Inflate", {});
        };
      }, {
        "./stream/GenericWorker": 28,
        "./utils": 32,
        pako: 38
      }],
      8: [function (e, t, r) {
        function n(e, t) {
          var r;
          var n = "";
          for (r = 0; r < t; r++) {
            n += String.fromCharCode(e & 255);
            e >>>= 8;
          }
          return n;
        }
        function i(e, t, r, i, a, c) {
          var h;
          var d;
          var f;
          var A;
          var g = e.file;
          var p = e.compression;
          var m = c !== s.utf8encode;
          var y = o.transformTo("string", c(g.name));
          var v = o.transformTo("string", s.utf8encode(g.name));
          var b = g.comment;
          var w = o.transformTo("string", c(b));
          var C = o.transformTo("string", s.utf8encode(b));
          var E = v.length !== g.name.length;
          var I = C.length !== b.length;
          var B = "";
          var x = "";
          var D = "";
          var S = g.dir;
          var k = g.date;
          var _ = {
            crc32: 0,
            compressedSize: 0,
            uncompressedSize: 0
          };
          if (!t || !!r) {
            _.crc32 = e.crc32;
            _.compressedSize = e.compressedSize;
            _.uncompressedSize = e.uncompressedSize;
          }
          var T = 0;
          if (t) {
            T |= 8;
          }
          if (!m && (E || I)) {
            T |= 2048;
          }
          var Q = 0;
          var R = 0;
          if (S) {
            Q |= 16;
          }
          if (a === "UNIX") {
            R = 798;
            d = h = g.unixPermissions;
            if (!h) {
              d = S ? 16893 : 33204;
            }
            Q |= (d & 65535) << 16;
          } else {
            R = 20;
            Q |= (g.dosPermissions || 0) & 63;
          }
          f = (k.getUTCHours() << 6 | k.getUTCMinutes()) << 5 | k.getUTCSeconds() / 2;
          A = (k.getUTCFullYear() - 1980 << 4 | k.getUTCMonth() + 1) << 5 | k.getUTCDate();
          if (E) {
            x = n(1, 1) + n(l(y), 4) + v;
            B += "up" + n(x.length, 2) + x;
          }
          if (I) {
            D = n(1, 1) + n(l(w), 4) + C;
            B += "uc" + n(D.length, 2) + D;
          }
          var F = "";
          F += "\n\0";
          F += n(T, 2);
          F += p.magic;
          F += n(f, 2);
          F += n(A, 2);
          F += n(_.crc32, 4);
          F += n(_.compressedSize, 4);
          F += n(_.uncompressedSize, 4);
          F += n(y.length, 2);
          F += n(B.length, 2);
          return {
            fileRecord: u.LOCAL_FILE_HEADER + F + y + B,
            dirRecord: u.CENTRAL_FILE_HEADER + n(R, 2) + F + n(w.length, 2) + "\0\0\0\0" + n(Q, 4) + n(i, 4) + y + B + w
          };
        }
        var o = e("../utils");
        var a = e("../stream/GenericWorker");
        var s = e("../utf8");
        var l = e("../crc32");
        var u = e("../signature");
        function c(e, t, r, n) {
          a.call(this, "ZipFileWorker");
          this.bytesWritten = 0;
          this.zipComment = t;
          this.zipPlatform = r;
          this.encodeFileName = n;
          this.streamFiles = e;
          this.accumulate = false;
          this.contentBuffer = [];
          this.dirRecords = [];
          this.currentSourceOffset = 0;
          this.entriesCount = 0;
          this.currentFile = null;
          this._sources = [];
        }
        o.inherits(c, a);
        c.prototype.push = function (e) {
          var t = e.meta.percent || 0;
          var r = this.entriesCount;
          var n = this._sources.length;
          if (this.accumulate) {
            this.contentBuffer.push(e);
          } else {
            this.bytesWritten += e.data.length;
            a.prototype.push.call(this, {
              data: e.data,
              meta: {
                currentFile: this.currentFile,
                percent: r ? (t + (r - n - 1) * 100) / r : 100
              }
            });
          }
        };
        c.prototype.openedSource = function (e) {
          this.currentSourceOffset = this.bytesWritten;
          this.currentFile = e.file.name;
          var t = this.streamFiles && !e.file.dir;
          if (t) {
            var r = i(e, t, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({
              data: r.fileRecord,
              meta: {
                percent: 0
              }
            });
          } else {
            this.accumulate = true;
          }
        };
        c.prototype.closedSource = function (e) {
          this.accumulate = false;
          var t = this.streamFiles && !e.file.dir;
          var r = i(e, t, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.dirRecords.push(r.dirRecord);
          if (t) {
            this.push({
              data: u.DATA_DESCRIPTOR + n(e.crc32, 4) + n(e.compressedSize, 4) + n(e.uncompressedSize, 4),
              meta: {
                percent: 100
              }
            });
          } else {
            for (this.push({
              data: r.fileRecord,
              meta: {
                percent: 0
              }
            }); this.contentBuffer.length;) {
              this.push(this.contentBuffer.shift());
            }
          }
          this.currentFile = null;
        };
        c.prototype.flush = function () {
          var e;
          var t;
          var r;
          var i;
          var a = this.bytesWritten;
          var s = 0;
          for (; s < this.dirRecords.length; s++) {
            this.push({
              data: this.dirRecords[s],
              meta: {
                percent: 100
              }
            });
          }
          var l = this.bytesWritten - a;
          e = this.dirRecords.length;
          t = this.zipComment;
          r = this.encodeFileName;
          i = o.transformTo("string", r(t));
          var c = u.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(e, 2) + n(e, 2) + n(l, 4) + n(a, 4) + n(i.length, 2) + i;
          this.push({
            data: c,
            meta: {
              percent: 100
            }
          });
        };
        c.prototype.prepareNextSource = function () {
          this.previous = this._sources.shift();
          this.openedSource(this.previous.streamInfo);
          if (this.isPaused) {
            this.previous.pause();
          } else {
            this.previous.resume();
          }
        };
        c.prototype.registerPrevious = function (e) {
          this._sources.push(e);
          var t = this;
          e.on("data", function (e) {
            t.processChunk(e);
          });
          e.on("end", function () {
            t.closedSource(t.previous.streamInfo);
            if (t._sources.length) {
              t.prepareNextSource();
            } else {
              t.end();
            }
          });
          e.on("error", function (e) {
            t.error(e);
          });
          return this;
        };
        c.prototype.resume = function () {
          return !!a.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? undefined : (this.end(), true));
        };
        c.prototype.error = function (e) {
          var t = this._sources;
          if (!a.prototype.error.call(this, e)) {
            return false;
          }
          for (var r = 0; r < t.length; r++) {
            try {
              t[r].error(e);
            } catch (e) {}
          }
          return true;
        };
        c.prototype.lock = function () {
          a.prototype.lock.call(this);
          var e = this._sources;
          var t = 0;
          for (; t < e.length; t++) {
            e[t].lock();
          }
        };
        t.exports = c;
      }, {
        "../crc32": 4,
        "../signature": 23,
        "../stream/GenericWorker": 28,
        "../utf8": 31,
        "../utils": 32
      }],
      9: [function (e, t, r) {
        var n = e("../compressions");
        var i = e("./ZipFileWorker");
        r.generateWorker = function (e, t, r) {
          var o = new i(t.streamFiles, r, t.platform, t.encodeFileName);
          var a = 0;
          try {
            e.forEach(function (e, r) {
              a++;
              var i = function (e, t) {
                var r = e || t;
                var i = n[r];
                if (!i) {
                  throw Error(r + " is not a valid compression method !");
                }
                return i;
              }(r.options.compression, t.compression);
              var s = r.options.compressionOptions || t.compressionOptions || {};
              var l = r.dir;
              var u = r.date;
              r._compressWorker(i, s).withStreamInfo("file", {
                name: e,
                dir: l,
                date: u,
                comment: r.comment || "",
                unixPermissions: r.unixPermissions,
                dosPermissions: r.dosPermissions
              }).pipe(o);
            });
            o.entriesCount = a;
          } catch (e) {
            o.error(e);
          }
          return o;
        };
      }, {
        "../compressions": 3,
        "./ZipFileWorker": 8
      }],
      10: [function (e, t, r) {
        function n() {
          if (!(this instanceof n)) {
            return new n();
          }
          if (arguments.length) {
            throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          }
          this.files = Object.create(null);
          this.comment = null;
          this.root = "";
          this.clone = function () {
            var e = new n();
            for (var t in this) {
              if (typeof this[t] != "function") {
                e[t] = this[t];
              }
            }
            return e;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load");
        n.support = e("./support");
        n.defaults = e("./defaults");
        n.version = "3.10.1";
        n.loadAsync = function (e, t) {
          return new n().loadAsync(e, t);
        };
        n.external = e("./external");
        t.exports = n;
      }, {
        "./defaults": 5,
        "./external": 6,
        "./load": 11,
        "./object": 15,
        "./support": 30
      }],
      11: [function (e, t, r) {
        var n = e("./utils");
        var i = e("./external");
        var o = e("./utf8");
        var a = e("./zipEntries");
        var s = e("./stream/Crc32Probe");
        var l = e("./nodejsUtils");
        t.exports = function (e, t) {
          var r = this;
          t = n.extend(t || {}, {
            base64: false,
            checkCRC32: false,
            optimizedBinaryString: false,
            createFolders: false,
            decodeFileName: o.utf8decode
          });
          if (l.isNode && l.isStream(e)) {
            return i.Promise.reject(Error("JSZip can't accept a stream when loading a zip file."));
          } else {
            return n.prepareContent("the loaded zip file", e, true, t.optimizedBinaryString, t.base64).then(function (e) {
              var r = new a(t);
              r.load(e);
              return r;
            }).then(function (e) {
              var r = [i.Promise.resolve(e)];
              var n = e.files;
              if (t.checkCRC32) {
                for (var o = 0; o < n.length; o++) {
                  r.push(function (e) {
                    return new i.Promise(function (t, r) {
                      var n = e.decompressed.getContentWorker().pipe(new s());
                      n.on("error", function (e) {
                        r(e);
                      }).on("end", function () {
                        if (n.streamInfo.crc32 !== e.decompressed.crc32) {
                          r(Error("Corrupted zip : CRC32 mismatch"));
                        } else {
                          t();
                        }
                      }).resume();
                    });
                  }(n[o]));
                }
              }
              return i.Promise.all(r);
            }).then(function (e) {
              var i = e.shift();
              var o = i.files;
              var a = 0;
              for (; a < o.length; a++) {
                var s = o[a];
                var l = s.fileNameStr;
                var u = n.resolve(s.fileNameStr);
                r.file(u, s.decompressed, {
                  binary: true,
                  optimizedBinaryString: true,
                  date: s.date,
                  dir: s.dir,
                  comment: s.fileCommentStr.length ? s.fileCommentStr : null,
                  unixPermissions: s.unixPermissions,
                  dosPermissions: s.dosPermissions,
                  createFolders: t.createFolders
                });
                if (!s.dir) {
                  r.file(u).unsafeOriginalName = l;
                }
              }
              if (i.zipComment.length) {
                r.comment = i.zipComment;
              }
              return r;
            });
          }
        };
      }, {
        "./external": 6,
        "./nodejsUtils": 14,
        "./stream/Crc32Probe": 25,
        "./utf8": 31,
        "./utils": 32,
        "./zipEntries": 33
      }],
      12: [function (e, t, r) {
        var n = e("../utils");
        var i = e("../stream/GenericWorker");
        function o(e, t) {
          i.call(this, "Nodejs stream input adapter for " + e);
          this._upstreamEnded = false;
          this._bindStream(t);
        }
        n.inherits(o, i);
        o.prototype._bindStream = function (e) {
          var t = this;
          (this._stream = e).pause();
          e.on("data", function (e) {
            t.push({
              data: e,
              meta: {
                percent: 0
              }
            });
          }).on("error", function (e) {
            if (t.isPaused) {
              this.generatedError = e;
            } else {
              t.error(e);
            }
          }).on("end", function () {
            if (t.isPaused) {
              t._upstreamEnded = true;
            } else {
              t.end();
            }
          });
        };
        o.prototype.pause = function () {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        };
        o.prototype.resume = function () {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        };
        t.exports = o;
      }, {
        "../stream/GenericWorker": 28,
        "../utils": 32
      }],
      13: [function (e, t, r) {
        var n = e("readable-stream").Readable;
        function i(e, t, r) {
          n.call(this, t);
          this._helper = e;
          var i = this;
          e.on("data", function (e, t) {
            if (!i.push(e)) {
              i._helper.pause();
            }
            if (r) {
              r(t);
            }
          }).on("error", function (e) {
            i.emit("error", e);
          }).on("end", function () {
            i.push(null);
          });
        }
        e("../utils").inherits(i, n);
        i.prototype._read = function () {
          this._helper.resume();
        };
        t.exports = i;
      }, {
        "../utils": 32,
        "readable-stream": 16
      }],
      14: [function (e, t, r) {
        t.exports = {
          isNode: eM !== undefined,
          newBufferFrom: function (e, t) {
            if (eM.from && eM.from !== Uint8Array.from) {
              return eM.from(e, t);
            }
            if (typeof e == "number") {
              throw Error("The \"data\" argument must not be a number");
            }
            return new eM(e, t);
          },
          allocBuffer: function (e) {
            if (eM.alloc) {
              return eM.alloc(e);
            }
            var t = new eM(e);
            t.fill(0);
            return t;
          },
          isBuffer: function (e) {
            return eM.isBuffer(e);
          },
          isStream: function (e) {
            return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
          }
        };
      }, {}],
      15: [function (e, t, r) {
        function n(e, t, r) {
          var n;
          var i = o.getTypeOf(t);
          var s = o.extend(r || {}, l);
          s.date = s.date || new Date();
          if (s.compression !== null) {
            s.compression = s.compression.toUpperCase();
          }
          if (typeof s.unixPermissions == "string") {
            s.unixPermissions = parseInt(s.unixPermissions, 8);
          }
          if (s.unixPermissions && s.unixPermissions & 16384) {
            s.dir = true;
          }
          if (s.dosPermissions && s.dosPermissions & 16) {
            s.dir = true;
          }
          if (s.dir) {
            e = g(e);
          }
          if (s.createFolders && (n = A(e))) {
            p.call(this, n, true);
          }
          var h = i === "string" && s.binary === false && s.base64 === false;
          if (!r || r.binary === undefined) {
            s.binary = !h;
          }
          if (t instanceof u && t.uncompressedSize === 0 || s.dir || !t || t.length === 0) {
            s.base64 = false;
            s.binary = true;
            t = "";
            s.compression = "STORE";
            i = "string";
          }
          var m = null;
          m = t instanceof u || t instanceof a ? t : d.isNode && d.isStream(t) ? new f(e, t) : o.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
          var y = new c(e, m, s);
          this.files[e] = y;
        }
        var i = e("./utf8");
        var o = e("./utils");
        var a = e("./stream/GenericWorker");
        var s = e("./stream/StreamHelper");
        var l = e("./defaults");
        var u = e("./compressedObject");
        var c = e("./zipObject");
        var h = e("./generate");
        var d = e("./nodejsUtils");
        var f = e("./nodejs/NodejsStreamInputAdapter");
        function A(e) {
          if (e.slice(-1) === "/") {
            e = e.substring(0, e.length - 1);
          }
          var t = e.lastIndexOf("/");
          if (t > 0) {
            return e.substring(0, t);
          } else {
            return "";
          }
        }
        function g(e) {
          if (e.slice(-1) !== "/") {
            e += "/";
          }
          return e;
        }
        function p(e, t) {
          t = t !== undefined ? t : l.createFolders;
          e = g(e);
          if (!this.files[e]) {
            n.call(this, e, null, {
              dir: true,
              createFolders: t
            });
          }
          return this.files[e];
        }
        function m(e) {
          return Object.prototype.toString.call(e) === "[object RegExp]";
        }
        t.exports = {
          load: function () {
            throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          },
          forEach: function (e) {
            var t;
            var r;
            var n;
            for (t in this.files) {
              n = this.files[t];
              if ((r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root) {
                e(r, n);
              }
            }
          },
          filter: function (e) {
            var t = [];
            this.forEach(function (r, n) {
              if (e(r, n)) {
                t.push(n);
              }
            });
            return t;
          },
          file: function (e, t, r) {
            if (arguments.length != 1) {
              e = this.root + e;
              n.call(this, e, t, r);
              return this;
            }
            if (m(e)) {
              var i = e;
              return this.filter(function (e, t) {
                return !t.dir && i.test(e);
              });
            }
            var o = this.files[this.root + e];
            if (o && !o.dir) {
              return o;
            } else {
              return null;
            }
          },
          folder: function (e) {
            if (!e) {
              return this;
            }
            if (m(e)) {
              return this.filter(function (t, r) {
                return r.dir && e.test(t);
              });
            }
            var t = this.root + e;
            var r = p.call(this, t);
            var n = this.clone();
            n.root = r.name;
            return n;
          },
          remove: function (e) {
            e = this.root + e;
            var t = this.files[e];
            if (!t) {
              if (e.slice(-1) !== "/") {
                e += "/";
              }
              t = this.files[e];
            }
            if (t && !t.dir) {
              delete this.files[e];
            } else {
              var r = this.filter(function (t, r) {
                return r.name.slice(0, e.length) === e;
              });
              var n = 0;
              for (; n < r.length; n++) {
                delete this.files[r[n].name];
              }
            }
            return this;
          },
          generate: function () {
            throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          },
          generateInternalStream: function (e) {
            var t;
            var r = {};
            try {
              (r = o.extend(e || {}, {
                streamFiles: false,
                compression: "STORE",
                compressionOptions: null,
                type: "",
                platform: "DOS",
                comment: null,
                mimeType: "application/zip",
                encodeFileName: i.utf8encode
              })).type = r.type.toLowerCase();
              r.compression = r.compression.toUpperCase();
              if (r.type === "binarystring") {
                r.type = "string";
              }
              if (!r.type) {
                throw Error("No output type specified.");
              }
              o.checkSupport(r.type);
              if (r.platform === "darwin" || r.platform === "freebsd" || r.platform === "linux" || r.platform === "sunos") {
                r.platform = "UNIX";
              }
              if (r.platform === "win32") {
                r.platform = "DOS";
              }
              var n = r.comment || this.comment || "";
              t = h.generateWorker(this, r, n);
            } catch (e) {
              (t = new a("error")).error(e);
            }
            return new s(t, r.type || "string", r.mimeType);
          },
          generateAsync: function (e, t) {
            return this.generateInternalStream(e).accumulate(t);
          },
          generateNodeStream: function (e, t) {
            if (!(e = e || {}).type) {
              e.type = "nodebuffer";
            }
            return this.generateInternalStream(e).toNodejsStream(t);
          }
        };
      }, {
        "./compressedObject": 2,
        "./defaults": 5,
        "./generate": 9,
        "./nodejs/NodejsStreamInputAdapter": 12,
        "./nodejsUtils": 14,
        "./stream/GenericWorker": 28,
        "./stream/StreamHelper": 29,
        "./utf8": 31,
        "./utils": 32,
        "./zipObject": 35
      }],
      16: [function (e, t, r) {
        t.exports = e("stream");
      }, {
        stream: undefined
      }],
      17: [function (e, t, r) {
        var n = e("./DataReader");
        function i(e) {
          n.call(this, e);
          for (var t = 0; t < this.data.length; t++) {
            e[t] = e[t] & 255;
          }
        }
        e("../utils").inherits(i, n);
        i.prototype.byteAt = function (e) {
          return this.data[this.zero + e];
        };
        i.prototype.lastIndexOfSignature = function (e) {
          var t = e.charCodeAt(0);
          var r = e.charCodeAt(1);
          var n = e.charCodeAt(2);
          var i = e.charCodeAt(3);
          var o = this.length - 4;
          for (; o >= 0; --o) {
            if (this.data[o] === t && this.data[o + 1] === r && this.data[o + 2] === n && this.data[o + 3] === i) {
              return o - this.zero;
            }
          }
          return -1;
        };
        i.prototype.readAndCheckSignature = function (e) {
          var t = e.charCodeAt(0);
          var r = e.charCodeAt(1);
          var n = e.charCodeAt(2);
          var i = e.charCodeAt(3);
          var o = this.readData(4);
          return t === o[0] && r === o[1] && n === o[2] && i === o[3];
        };
        i.prototype.readData = function (e) {
          this.checkOffset(e);
          if (e === 0) {
            return [];
          }
          var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
          this.index += e;
          return t;
        };
        t.exports = i;
      }, {
        "../utils": 32,
        "./DataReader": 18
      }],
      18: [function (e, t, r) {
        var n = e("../utils");
        function i(e) {
          this.data = e;
          this.length = e.length;
          this.index = 0;
          this.zero = 0;
        }
        i.prototype = {
          checkOffset: function (e) {
            this.checkIndex(this.index + e);
          },
          checkIndex: function (e) {
            if (this.length < this.zero + e || e < 0) {
              throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
            }
          },
          setIndex: function (e) {
            this.checkIndex(e);
            this.index = e;
          },
          skip: function (e) {
            this.setIndex(this.index + e);
          },
          byteAt: function () {},
          readInt: function (e) {
            var t;
            var r = 0;
            this.checkOffset(e);
            t = this.index + e - 1;
            for (; t >= this.index; t--) {
              r = (r << 8) + this.byteAt(t);
            }
            this.index += e;
            return r;
          },
          readString: function (e) {
            return n.transformTo("string", this.readData(e));
          },
          readData: function () {},
          lastIndexOfSignature: function () {},
          readAndCheckSignature: function () {},
          readDate: function () {
            var e = this.readInt(4);
            return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (e & 31) << 1));
          }
        };
        t.exports = i;
      }, {
        "../utils": 32
      }],
      19: [function (e, t, r) {
        var n = e("./Uint8ArrayReader");
        function i(e) {
          n.call(this, e);
        }
        e("../utils").inherits(i, n);
        i.prototype.readData = function (e) {
          this.checkOffset(e);
          var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
          this.index += e;
          return t;
        };
        t.exports = i;
      }, {
        "../utils": 32,
        "./Uint8ArrayReader": 21
      }],
      20: [function (e, t, r) {
        var n = e("./DataReader");
        function i(e) {
          n.call(this, e);
        }
        e("../utils").inherits(i, n);
        i.prototype.byteAt = function (e) {
          return this.data.charCodeAt(this.zero + e);
        };
        i.prototype.lastIndexOfSignature = function (e) {
          return this.data.lastIndexOf(e) - this.zero;
        };
        i.prototype.readAndCheckSignature = function (e) {
          return e === this.readData(4);
        };
        i.prototype.readData = function (e) {
          this.checkOffset(e);
          var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
          this.index += e;
          return t;
        };
        t.exports = i;
      }, {
        "../utils": 32,
        "./DataReader": 18
      }],
      21: [function (e, t, r) {
        var n = e("./ArrayReader");
        function i(e) {
          n.call(this, e);
        }
        e("../utils").inherits(i, n);
        i.prototype.readData = function (e) {
          this.checkOffset(e);
          if (e === 0) {
            return new Uint8Array(0);
          }
          var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
          this.index += e;
          return t;
        };
        t.exports = i;
      }, {
        "../utils": 32,
        "./ArrayReader": 17
      }],
      22: [function (e, t, r) {
        var n = e("../utils");
        var i = e("../support");
        var o = e("./ArrayReader");
        var a = e("./StringReader");
        var s = e("./NodeBufferReader");
        var l = e("./Uint8ArrayReader");
        t.exports = function (e) {
          var t = n.getTypeOf(e);
          n.checkSupport(t);
          if (t !== "string" || i.uint8array) {
            if (t === "nodebuffer") {
              return new s(e);
            } else if (i.uint8array) {
              return new l(n.transformTo("uint8array", e));
            } else {
              return new o(n.transformTo("array", e));
            }
          } else {
            return new a(e);
          }
        };
      }, {
        "../support": 30,
        "../utils": 32,
        "./ArrayReader": 17,
        "./NodeBufferReader": 19,
        "./StringReader": 20,
        "./Uint8ArrayReader": 21
      }],
      23: [function (e, t, r) {
        r.LOCAL_FILE_HEADER = "PK";
        r.CENTRAL_FILE_HEADER = "PK";
        r.CENTRAL_DIRECTORY_END = "PK";
        r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
        r.ZIP64_CENTRAL_DIRECTORY_END = "PK";
        r.DATA_DESCRIPTOR = "PK\b";
      }, {}],
      24: [function (e, t, r) {
        var n = e("./GenericWorker");
        var i = e("../utils");
        function o(e) {
          n.call(this, "ConvertWorker to " + e);
          this.destType = e;
        }
        i.inherits(o, n);
        o.prototype.processChunk = function (e) {
          this.push({
            data: i.transformTo(this.destType, e.data),
            meta: e.meta
          });
        };
        t.exports = o;
      }, {
        "../utils": 32,
        "./GenericWorker": 28
      }],
      25: [function (e, t, r) {
        var n = e("./GenericWorker");
        var i = e("../crc32");
        function o() {
          n.call(this, "Crc32Probe");
          this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(o, n);
        o.prototype.processChunk = function (e) {
          this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0);
          this.push(e);
        };
        t.exports = o;
      }, {
        "../crc32": 4,
        "../utils": 32,
        "./GenericWorker": 28
      }],
      26: [function (e, t, r) {
        var n = e("../utils");
        var i = e("./GenericWorker");
        function o(e) {
          i.call(this, "DataLengthProbe for " + e);
          this.propName = e;
          this.withStreamInfo(e, 0);
        }
        n.inherits(o, i);
        o.prototype.processChunk = function (e) {
          if (e) {
            var t = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t + e.data.length;
          }
          i.prototype.processChunk.call(this, e);
        };
        t.exports = o;
      }, {
        "../utils": 32,
        "./GenericWorker": 28
      }],
      27: [function (e, t, r) {
        var n = e("../utils");
        var i = e("./GenericWorker");
        function o(e) {
          i.call(this, "DataWorker");
          var t = this;
          this.dataIsReady = false;
          this.index = 0;
          this.max = 0;
          this.data = null;
          this.type = "";
          this._tickScheduled = false;
          e.then(function (e) {
            t.dataIsReady = true;
            t.data = e;
            t.max = e && e.length || 0;
            t.type = n.getTypeOf(e);
            if (!t.isPaused) {
              t._tickAndRepeat();
            }
          }, function (e) {
            t.error(e);
          });
        }
        n.inherits(o, i);
        o.prototype.cleanUp = function () {
          i.prototype.cleanUp.call(this);
          this.data = null;
        };
        o.prototype.resume = function () {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        };
        o.prototype._tickAndRepeat = function () {
          this._tickScheduled = false;
          if (!this.isPaused && !this.isFinished) {
            this._tick();
            if (!this.isFinished) {
              n.delay(this._tickAndRepeat, [], this);
              this._tickScheduled = true;
            }
          }
        };
        o.prototype._tick = function () {
          if (this.isPaused || this.isFinished) {
            return false;
          }
          var e = null;
          var t = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) {
            return this.end();
          }
          switch (this.type) {
            case "string":
              e = this.data.substring(this.index, t);
              break;
            case "uint8array":
              e = this.data.subarray(this.index, t);
              break;
            case "array":
            case "nodebuffer":
              e = this.data.slice(this.index, t);
          }
          this.index = t;
          return this.push({
            data: e,
            meta: {
              percent: this.max ? this.index / this.max * 100 : 0
            }
          });
        };
        t.exports = o;
      }, {
        "../utils": 32,
        "./GenericWorker": 28
      }],
      28: [function (e, t, r) {
        function n(e) {
          this.name = e || "default";
          this.streamInfo = {};
          this.generatedError = null;
          this.extraStreamInfo = {};
          this.isPaused = true;
          this.isFinished = false;
          this.isLocked = false;
          this._listeners = {
            data: [],
            end: [],
            error: []
          };
          this.previous = null;
        }
        n.prototype = {
          push: function (e) {
            this.emit("data", e);
          },
          end: function () {
            if (this.isFinished) {
              return false;
            }
            this.flush();
            try {
              this.emit("end");
              this.cleanUp();
              this.isFinished = true;
            } catch (e) {
              this.emit("error", e);
            }
            return true;
          },
          error: function (e) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = true, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), true);
          },
          on: function (e, t) {
            this._listeners[e].push(t);
            return this;
          },
          cleanUp: function () {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null;
            this._listeners = [];
          },
          emit: function (e, t) {
            if (this._listeners[e]) {
              for (var r = 0; r < this._listeners[e].length; r++) {
                this._listeners[e][r].call(this, t);
              }
            }
          },
          pipe: function (e) {
            return e.registerPrevious(this);
          },
          registerPrevious: function (e) {
            if (this.isLocked) {
              throw Error("The stream '" + this + "' has already been used.");
            }
            this.streamInfo = e.streamInfo;
            this.mergeStreamInfo();
            this.previous = e;
            var t = this;
            e.on("data", function (e) {
              t.processChunk(e);
            });
            e.on("end", function () {
              t.end();
            });
            e.on("error", function (e) {
              t.error(e);
            });
            return this;
          },
          pause: function () {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          },
          resume: function () {
            if (!this.isPaused || this.isFinished) {
              return false;
            }
            var e = this.isPaused = false;
            if (this.generatedError) {
              this.error(this.generatedError);
              e = true;
            }
            if (this.previous) {
              this.previous.resume();
            }
            return !e;
          },
          flush: function () {},
          processChunk: function (e) {
            this.push(e);
          },
          withStreamInfo: function (e, t) {
            this.extraStreamInfo[e] = t;
            this.mergeStreamInfo();
            return this;
          },
          mergeStreamInfo: function () {
            for (var e in this.extraStreamInfo) {
              if (Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e)) {
                this.streamInfo[e] = this.extraStreamInfo[e];
              }
            }
          },
          lock: function () {
            if (this.isLocked) {
              throw Error("The stream '" + this + "' has already been used.");
            }
            this.isLocked = true;
            if (this.previous) {
              this.previous.lock();
            }
          },
          toString: function () {
            var e = "Worker " + this.name;
            if (this.previous) {
              return this.previous + " -> " + e;
            } else {
              return e;
            }
          }
        };
        t.exports = n;
      }, {}],
      29: [function (e, t, r) {
        var n = e("../utils");
        var i = e("./ConvertWorker");
        var o = e("./GenericWorker");
        var a = e("../base64");
        var s = e("../support");
        var l = e("../external");
        var u = null;
        if (s.nodestream) {
          try {
            u = e("../nodejs/NodejsStreamOutputAdapter");
          } catch (e) {}
        }
        function c(e, t, r) {
          var a = t;
          switch (t) {
            case "blob":
            case "arraybuffer":
              a = "uint8array";
              break;
            case "base64":
              a = "string";
          }
          try {
            this._internalType = a;
            this._outputType = t;
            this._mimeType = r;
            n.checkSupport(a);
            this._worker = e.pipe(new i(a));
            e.lock();
          } catch (e) {
            this._worker = new o("error");
            this._worker.error(e);
          }
        }
        c.prototype = {
          accumulate: function (e) {
            var t;
            t = this;
            return new l.Promise(function (r, i) {
              var o = [];
              var s = t._internalType;
              var l = t._outputType;
              var u = t._mimeType;
              t.on("data", function (t, r) {
                o.push(t);
                if (e) {
                  e(r);
                }
              }).on("error", function (e) {
                o = [];
                i(e);
              }).on("end", function () {
                try {
                  var e = function (e, t, r) {
                    switch (e) {
                      case "blob":
                        return n.newBlob(n.transformTo("arraybuffer", t), r);
                      case "base64":
                        return a.encode(t);
                      default:
                        return n.transformTo(e, t);
                    }
                  }(l, function (e, t) {
                    var r;
                    var n = 0;
                    var i = null;
                    var o = 0;
                    for (r = 0; r < t.length; r++) {
                      o += t[r].length;
                    }
                    switch (e) {
                      case "string":
                        return t.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t);
                      case "uint8array":
                        i = new Uint8Array(o);
                        r = 0;
                        for (; r < t.length; r++) {
                          i.set(t[r], n);
                          n += t[r].length;
                        }
                        return i;
                      case "nodebuffer":
                        return eM.concat(t);
                      default:
                        throw Error("concat : unsupported type '" + e + "'");
                    }
                  }(s, o), u);
                  r(e);
                } catch (e) {
                  i(e);
                }
                o = [];
              }).resume();
            });
          },
          on: function (e, t) {
            var r = this;
            if (e === "data") {
              this._worker.on(e, function (e) {
                t.call(r, e.data, e.meta);
              });
            } else {
              this._worker.on(e, function () {
                n.delay(t, arguments, r);
              });
            }
            return this;
          },
          resume: function () {
            n.delay(this._worker.resume, [], this._worker);
            return this;
          },
          pause: function () {
            this._worker.pause();
            return this;
          },
          toNodejsStream: function (e) {
            n.checkSupport("nodestream");
            if (this._outputType !== "nodebuffer") {
              throw Error(this._outputType + " is not supported by this method");
            }
            return new u(this, {
              objectMode: this._outputType !== "nodebuffer"
            }, e);
          }
        };
        t.exports = c;
      }, {
        "../base64": 1,
        "../external": 6,
        "../nodejs/NodejsStreamOutputAdapter": 13,
        "../support": 30,
        "../utils": 32,
        "./ConvertWorker": 24,
        "./GenericWorker": 28
      }],
      30: [function (e, t, r) {
        r.base64 = true;
        r.array = true;
        r.string = true;
        r.arraybuffer = typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined";
        r.nodebuffer = eM !== undefined;
        r.uint8array = typeof Uint8Array != "undefined";
        if (typeof ArrayBuffer == "undefined") {
          r.blob = false;
        } else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = new Blob([n], {
              type: "application/zip"
            }).size === 0;
          } catch (e) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n);
              r.blob = i.getBlob("application/zip").size === 0;
            } catch (e) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e) {
          r.nodestream = false;
        }
      }, {
        "readable-stream": 16
      }],
      31: [function (e, t, r) {
        var n = e("./utils");
        var i = e("./support");
        var o = e("./nodejsUtils");
        var a = e("./stream/GenericWorker");
        var s = Array(256);
        var l = 0;
        for (; l < 256; l++) {
          s[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
        }
        function u() {
          a.call(this, "utf-8 decode");
          this.leftOver = null;
        }
        function c() {
          a.call(this, "utf-8 encode");
        }
        s[254] = s[254] = 1;
        r.utf8encode = function (e) {
          if (i.nodebuffer) {
            return o.newBufferFrom(e, "utf-8");
          } else {
            return function (e) {
              var t;
              var r;
              var n;
              var o;
              var a;
              var s = e.length;
              var l = 0;
              for (o = 0; o < s; o++) {
                if (((r = e.charCodeAt(o)) & 64512) == 55296 && o + 1 < s && ((n = e.charCodeAt(o + 1)) & 64512) == 56320) {
                  r = 65536 + (r - 55296 << 10) + (n - 56320);
                  o++;
                }
                l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
              }
              t = i.uint8array ? new Uint8Array(l) : Array(l);
              o = a = 0;
              for (; a < l; o++) {
                if (((r = e.charCodeAt(o)) & 64512) == 55296 && o + 1 < s && ((n = e.charCodeAt(o + 1)) & 64512) == 56320) {
                  r = 65536 + (r - 55296 << 10) + (n - 56320);
                  o++;
                }
                if (r < 128) {
                  t[a++] = r;
                } else {
                  if (r < 2048) {
                    t[a++] = r >>> 6 | 192;
                  } else {
                    if (r < 65536) {
                      t[a++] = r >>> 12 | 224;
                    } else {
                      t[a++] = r >>> 18 | 240;
                      t[a++] = r >>> 12 & 63 | 128;
                    }
                    t[a++] = r >>> 6 & 63 | 128;
                  }
                  t[a++] = r & 63 | 128;
                }
              }
              return t;
            }(e);
          }
        };
        r.utf8decode = function (e) {
          if (i.nodebuffer) {
            return n.transformTo("nodebuffer", e).toString("utf-8");
          } else {
            return function (e) {
              var t;
              var r;
              var i;
              var o;
              var a = e.length;
              var l = Array(a * 2);
              for (t = r = 0; t < a;) {
                if ((i = e[t++]) < 128) {
                  l[r++] = i;
                } else if ((o = s[i]) > 4) {
                  l[r++] = 65533;
                  t += o - 1;
                } else {
                  for (i &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && t < a;) {
                    i = i << 6 | e[t++] & 63;
                    o--;
                  }
                  if (o > 1) {
                    l[r++] = 65533;
                  } else if (i < 65536) {
                    l[r++] = i;
                  } else {
                    i -= 65536;
                    l[r++] = i >> 10 & 1023 | 55296;
                    l[r++] = i & 1023 | 56320;
                  }
                }
              }
              if (l.length !== r) {
                if (l.subarray) {
                  l = l.subarray(0, r);
                } else {
                  l.length = r;
                }
              }
              return n.applyFromCharCode(l);
            }(e = n.transformTo(i.uint8array ? "uint8array" : "array", e));
          }
        };
        n.inherits(u, a);
        u.prototype.processChunk = function (e) {
          var t = n.transformTo(i.uint8array ? "uint8array" : "array", e.data);
          if (this.leftOver && this.leftOver.length) {
            if (i.uint8array) {
              var o = t;
              (t = new Uint8Array(o.length + this.leftOver.length)).set(this.leftOver, 0);
              t.set(o, this.leftOver.length);
            } else {
              t = this.leftOver.concat(t);
            }
            this.leftOver = null;
          }
          var a = function (e, t) {
            var r;
            if ((t = t || e.length) > e.length) {
              t = e.length;
            }
            r = t - 1;
            while (r >= 0 && (e[r] & 192) == 128) {
              r--;
            }
            if (r < 0) {
              return t;
            } else if (r === 0) {
              return t;
            } else if (r + s[e[r]] > t) {
              return r;
            } else {
              return t;
            }
          }(t);
          var l = t;
          if (a !== t.length) {
            if (i.uint8array) {
              l = t.subarray(0, a);
              this.leftOver = t.subarray(a, t.length);
            } else {
              l = t.slice(0, a);
              this.leftOver = t.slice(a, t.length);
            }
          }
          this.push({
            data: r.utf8decode(l),
            meta: e.meta
          });
        };
        u.prototype.flush = function () {
          if (this.leftOver && this.leftOver.length) {
            this.push({
              data: r.utf8decode(this.leftOver),
              meta: {}
            });
            this.leftOver = null;
          }
        };
        r.Utf8DecodeWorker = u;
        n.inherits(c, a);
        c.prototype.processChunk = function (e) {
          this.push({
            data: r.utf8encode(e.data),
            meta: e.meta
          });
        };
        r.Utf8EncodeWorker = c;
      }, {
        "./nodejsUtils": 14,
        "./stream/GenericWorker": 28,
        "./support": 30,
        "./utils": 32
      }],
      32: [function (e, t, r) {
        var n = e("./support");
        var i = e("./base64");
        var o = e("./nodejsUtils");
        var a = e("./external");
        function s(e) {
          return e;
        }
        function l(e, t) {
          for (var r = 0; r < e.length; ++r) {
            t[r] = e.charCodeAt(r) & 255;
          }
          return t;
        }
        e("setimmediate");
        r.newBlob = function (e, t) {
          r.checkSupport("blob");
          try {
            return new Blob([e], {
              type: t
            });
          } catch (r) {
            try {
              var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              n.append(e);
              return n.getBlob(t);
            } catch (e) {
              throw Error("Bug : can't construct the Blob.");
            }
          }
        };
        var u = {
          stringifyByChunk: function (e, t, r) {
            var n = [];
            var i = 0;
            var o = e.length;
            if (o <= r) {
              return String.fromCharCode.apply(null, e);
            }
            while (i < o) {
              if (t === "array" || t === "nodebuffer") {
                n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, o))));
              } else {
                n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, o))));
              }
              i += r;
            }
            return n.join("");
          },
          stringifyByChar: function (e) {
            var t = "";
            var r = 0;
            for (; r < e.length; r++) {
              t += String.fromCharCode(e[r]);
            }
            return t;
          },
          applyCanBeUsed: {
            uint8array: function () {
              try {
                return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
              } catch (e) {
                return false;
              }
            }(),
            nodebuffer: function () {
              try {
                return n.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
              } catch (e) {
                return false;
              }
            }()
          }
        };
        function c(e) {
          var t = 65536;
          var n = r.getTypeOf(e);
          var i = true;
          if (n === "uint8array") {
            i = u.applyCanBeUsed.uint8array;
          } else if (n === "nodebuffer") {
            i = u.applyCanBeUsed.nodebuffer;
          }
          if (i) {
            while (t > 1) {
              try {
                return u.stringifyByChunk(e, n, t);
              } catch (e) {
                t = Math.floor(t / 2);
              }
            }
          }
          return u.stringifyByChar(e);
        }
        function h(e, t) {
          for (var r = 0; r < e.length; r++) {
            t[r] = e[r];
          }
          return t;
        }
        r.applyFromCharCode = c;
        var d = {};
        d.string = {
          string: s,
          array: function (e) {
            return l(e, Array(e.length));
          },
          arraybuffer: function (e) {
            return d.string.uint8array(e).buffer;
          },
          uint8array: function (e) {
            return l(e, new Uint8Array(e.length));
          },
          nodebuffer: function (e) {
            return l(e, o.allocBuffer(e.length));
          }
        };
        d.array = {
          string: c,
          array: s,
          arraybuffer: function (e) {
            return new Uint8Array(e).buffer;
          },
          uint8array: function (e) {
            return new Uint8Array(e);
          },
          nodebuffer: function (e) {
            return o.newBufferFrom(e);
          }
        };
        d.arraybuffer = {
          string: function (e) {
            return c(new Uint8Array(e));
          },
          array: function (e) {
            return h(new Uint8Array(e), Array(e.byteLength));
          },
          arraybuffer: s,
          uint8array: function (e) {
            return new Uint8Array(e);
          },
          nodebuffer: function (e) {
            return o.newBufferFrom(new Uint8Array(e));
          }
        };
        d.uint8array = {
          string: c,
          array: function (e) {
            return h(e, Array(e.length));
          },
          arraybuffer: function (e) {
            return e.buffer;
          },
          uint8array: s,
          nodebuffer: function (e) {
            return o.newBufferFrom(e);
          }
        };
        d.nodebuffer = {
          string: c,
          array: function (e) {
            return h(e, Array(e.length));
          },
          arraybuffer: function (e) {
            return d.nodebuffer.uint8array(e).buffer;
          },
          uint8array: function (e) {
            return h(e, new Uint8Array(e.length));
          },
          nodebuffer: s
        };
        r.transformTo = function (e, t) {
          t = t || "";
          if (e) {
            r.checkSupport(e);
            return d[r.getTypeOf(t)][e](t);
          } else {
            return t;
          }
        };
        r.resolve = function (e) {
          var t = e.split("/");
          var r = [];
          var n = 0;
          for (; n < t.length; n++) {
            var i = t[n];
            if (i !== "." && (i !== "" || n === 0 || n === t.length - 1)) {
              if (i === "..") {
                r.pop();
              } else {
                r.push(i);
              }
            }
          }
          return r.join("/");
        };
        r.getTypeOf = function (e) {
          if (typeof e == "string") {
            return "string";
          } else if (Object.prototype.toString.call(e) === "[object Array]") {
            return "array";
          } else if (n.nodebuffer && o.isBuffer(e)) {
            return "nodebuffer";
          } else if (n.uint8array && e instanceof Uint8Array) {
            return "uint8array";
          } else if (n.arraybuffer && e instanceof ArrayBuffer) {
            return "arraybuffer";
          } else {
            return undefined;
          }
        };
        r.checkSupport = function (e) {
          if (!n[e.toLowerCase()]) {
            throw Error(e + " is not supported by this platform");
          }
        };
        r.MAX_VALUE_16BITS = 65535;
        r.MAX_VALUE_32BITS = -1;
        r.pretty = function (e) {
          var t;
          var r;
          var n = "";
          for (r = 0; r < (e || "").length; r++) {
            n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
          }
          return n;
        };
        r.delay = function (e, t, r) {
          setImmediate(function () {
            e.apply(r || null, t || []);
          });
        };
        r.inherits = function (e, t) {
          function r() {}
          r.prototype = t.prototype;
          e.prototype = new r();
        };
        r.extend = function () {
          var e;
          var t;
          var r = {};
          for (e = 0; e < arguments.length; e++) {
            for (t in arguments[e]) {
              if (Object.prototype.hasOwnProperty.call(arguments[e], t) && r[t] === undefined) {
                r[t] = arguments[e][t];
              }
            }
          }
          return r;
        };
        r.prepareContent = function (e, t, o, s, u) {
          return a.Promise.resolve(t).then(function (e) {
            if (n.blob && (e instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e)) !== -1) && typeof FileReader != "undefined") {
              return new a.Promise(function (t, r) {
                var n = new FileReader();
                n.onload = function (e) {
                  t(e.target.result);
                };
                n.onerror = function (e) {
                  r(e.target.error);
                };
                n.readAsArrayBuffer(e);
              });
            } else {
              return e;
            }
          }).then(function (t) {
            var c;
            var h = r.getTypeOf(t);
            if (h) {
              if (h === "arraybuffer") {
                t = r.transformTo("uint8array", t);
              } else if (h === "string") {
                if (u) {
                  t = i.decode(t);
                } else if (o && s !== true) {
                  t = l(c = t, n.uint8array ? new Uint8Array(c.length) : Array(c.length));
                }
              }
              return t;
            } else {
              return a.Promise.reject(Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            }
          });
        };
      }, {
        "./base64": 1,
        "./external": 6,
        "./nodejsUtils": 14,
        "./support": 30,
        setimmediate: 54
      }],
      33: [function (e, t, r) {
        var n = e("./reader/readerFor");
        var i = e("./utils");
        var o = e("./signature");
        var a = e("./zipEntry");
        var s = e("./support");
        function l(e) {
          this.files = [];
          this.loadOptions = e;
        }
        l.prototype = {
          checkSignature: function (e) {
            if (!this.reader.readAndCheckSignature(e)) {
              this.reader.index -= 4;
              var t = this.reader.readString(4);
              throw Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
            }
          },
          isSignature: function (e, t) {
            var r = this.reader.index;
            this.reader.setIndex(e);
            var n = this.reader.readString(4) === t;
            this.reader.setIndex(r);
            return n;
          },
          readBlockEndOfCentral: function () {
            this.diskNumber = this.reader.readInt(2);
            this.diskWithCentralDirStart = this.reader.readInt(2);
            this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
            this.centralDirRecords = this.reader.readInt(2);
            this.centralDirSize = this.reader.readInt(4);
            this.centralDirOffset = this.reader.readInt(4);
            this.zipCommentLength = this.reader.readInt(2);
            var e = this.reader.readData(this.zipCommentLength);
            var t = s.uint8array ? "uint8array" : "array";
            var r = i.transformTo(t, e);
            this.zipComment = this.loadOptions.decodeFileName(r);
          },
          readBlockZip64EndOfCentral: function () {
            this.zip64EndOfCentralSize = this.reader.readInt(8);
            this.reader.skip(4);
            this.diskNumber = this.reader.readInt(4);
            this.diskWithCentralDirStart = this.reader.readInt(4);
            this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
            this.centralDirRecords = this.reader.readInt(8);
            this.centralDirSize = this.reader.readInt(8);
            this.centralDirOffset = this.reader.readInt(8);
            this.zip64ExtensibleData = {};
            var e;
            var t;
            var r;
            var n = this.zip64EndOfCentralSize - 44;
            while (n > 0) {
              e = this.reader.readInt(2);
              t = this.reader.readInt(4);
              r = this.reader.readData(t);
              this.zip64ExtensibleData[e] = {
                id: e,
                length: t,
                value: r
              };
            }
          },
          readBlockZip64EndOfCentralLocator: function () {
            this.diskWithZip64CentralDirStart = this.reader.readInt(4);
            this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
            this.disksCount = this.reader.readInt(4);
            if (this.disksCount > 1) {
              throw Error("Multi-volumes zip are not supported");
            }
          },
          readLocalFiles: function () {
            var e;
            var t;
            for (e = 0; e < this.files.length; e++) {
              t = this.files[e];
              this.reader.setIndex(t.localHeaderOffset);
              this.checkSignature(o.LOCAL_FILE_HEADER);
              t.readLocalPart(this.reader);
              t.handleUTF8();
              t.processAttributes();
            }
          },
          readCentralDir: function () {
            var e;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);) {
              (e = new a({
                zip64: this.zip64
              }, this.loadOptions)).readCentralPart(this.reader);
              this.files.push(e);
            }
            if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) {
              throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            }
          },
          readEndOfCentral: function () {
            var e = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
            if (e < 0) {
              throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? Error("Corrupted zip: can't find end of central directory") : Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            }
            this.reader.setIndex(e);
            var t = e;
            this.checkSignature(o.CENTRAL_DIRECTORY_END);
            this.readBlockEndOfCentral();
            if (this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
              this.zip64 = true;
              if ((e = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) {
                throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              }
              this.reader.setIndex(e);
              this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
              this.readBlockZip64EndOfCentralLocator();
              if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) {
                throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
              }
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
              this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END);
              this.readBlockZip64EndOfCentral();
            }
            var r = this.centralDirOffset + this.centralDirSize;
            if (this.zip64) {
              r += 20;
              r += 12 + this.zip64EndOfCentralSize;
            }
            var n = t - r;
            if (n > 0) {
              if (!this.isSignature(t, o.CENTRAL_FILE_HEADER)) {
                this.reader.zero = n;
              }
            } else if (n < 0) {
              throw Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
            }
          },
          prepareReader: function (e) {
            this.reader = n(e);
          },
          load: function (e) {
            this.prepareReader(e);
            this.readEndOfCentral();
            this.readCentralDir();
            this.readLocalFiles();
          }
        };
        t.exports = l;
      }, {
        "./reader/readerFor": 22,
        "./signature": 23,
        "./support": 30,
        "./utils": 32,
        "./zipEntry": 34
      }],
      34: [function (e, t, r) {
        var n = e("./reader/readerFor");
        var i = e("./utils");
        var o = e("./compressedObject");
        var a = e("./crc32");
        var s = e("./utf8");
        var l = e("./compressions");
        var u = e("./support");
        function c(e, t) {
          this.options = e;
          this.loadOptions = t;
        }
        c.prototype = {
          isEncrypted: function () {
            return (this.bitFlag & 1) == 1;
          },
          useUTF8: function () {
            return (this.bitFlag & 2048) == 2048;
          },
          readLocalPart: function (e) {
            var t;
            var r;
            e.skip(22);
            this.fileNameLength = e.readInt(2);
            r = e.readInt(2);
            this.fileName = e.readData(this.fileNameLength);
            e.skip(r);
            if (this.compressedSize === -1 || this.uncompressedSize === -1) {
              throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            }
            if ((t = function (e) {
              for (var t in l) {
                if (Object.prototype.hasOwnProperty.call(l, t) && l[t].magic === e) {
                  return l[t];
                }
              }
              return null;
            }(this.compressionMethod)) === null) {
              throw Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
            }
            this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
          },
          readCentralPart: function (e) {
            this.versionMadeBy = e.readInt(2);
            e.skip(2);
            this.bitFlag = e.readInt(2);
            this.compressionMethod = e.readString(2);
            this.date = e.readDate();
            this.crc32 = e.readInt(4);
            this.compressedSize = e.readInt(4);
            this.uncompressedSize = e.readInt(4);
            var t = e.readInt(2);
            this.extraFieldsLength = e.readInt(2);
            this.fileCommentLength = e.readInt(2);
            this.diskNumberStart = e.readInt(2);
            this.internalFileAttributes = e.readInt(2);
            this.externalFileAttributes = e.readInt(4);
            this.localHeaderOffset = e.readInt(4);
            if (this.isEncrypted()) {
              throw Error("Encrypted zip are not supported");
            }
            e.skip(t);
            this.readExtraFields(e);
            this.parseZIP64ExtraField(e);
            this.fileComment = e.readData(this.fileCommentLength);
          },
          processAttributes: function () {
            this.unixPermissions = null;
            this.dosPermissions = null;
            var e = this.versionMadeBy >> 8;
            this.dir = !!(this.externalFileAttributes & 16);
            if (e == 0) {
              this.dosPermissions = this.externalFileAttributes & 63;
            }
            if (e == 3) {
              this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
            }
            if (!this.dir && this.fileNameStr.slice(-1) === "/") {
              this.dir = true;
            }
          },
          parseZIP64ExtraField: function () {
            if (this.extraFields[1]) {
              var e = n(this.extraFields[1].value);
              if (this.uncompressedSize === i.MAX_VALUE_32BITS) {
                this.uncompressedSize = e.readInt(8);
              }
              if (this.compressedSize === i.MAX_VALUE_32BITS) {
                this.compressedSize = e.readInt(8);
              }
              if (this.localHeaderOffset === i.MAX_VALUE_32BITS) {
                this.localHeaderOffset = e.readInt(8);
              }
              if (this.diskNumberStart === i.MAX_VALUE_32BITS) {
                this.diskNumberStart = e.readInt(4);
              }
            }
          },
          readExtraFields: function (e) {
            var t;
            var r;
            var n;
            var i = e.index + this.extraFieldsLength;
            for (this.extraFields ||= {}; e.index + 4 < i;) {
              t = e.readInt(2);
              r = e.readInt(2);
              n = e.readData(r);
              this.extraFields[t] = {
                id: t,
                length: r,
                value: n
              };
            }
            e.setIndex(i);
          },
          handleUTF8: function () {
            var e = u.uint8array ? "uint8array" : "array";
            if (this.useUTF8()) {
              this.fileNameStr = s.utf8decode(this.fileName);
              this.fileCommentStr = s.utf8decode(this.fileComment);
            } else {
              var t = this.findExtraFieldUnicodePath();
              if (t !== null) {
                this.fileNameStr = t;
              } else {
                var r = i.transformTo(e, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r);
              }
              var n = this.findExtraFieldUnicodeComment();
              if (n !== null) {
                this.fileCommentStr = n;
              } else {
                var o = i.transformTo(e, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(o);
              }
            }
          },
          findExtraFieldUnicodePath: function () {
            var e = this.extraFields[28789];
            if (e) {
              var t = n(e.value);
              if (t.readInt(1) !== 1) {
                return null;
              } else if (a(this.fileName) !== t.readInt(4)) {
                return null;
              } else {
                return s.utf8decode(t.readData(e.length - 5));
              }
            }
            return null;
          },
          findExtraFieldUnicodeComment: function () {
            var e = this.extraFields[25461];
            if (e) {
              var t = n(e.value);
              if (t.readInt(1) !== 1) {
                return null;
              } else if (a(this.fileComment) !== t.readInt(4)) {
                return null;
              } else {
                return s.utf8decode(t.readData(e.length - 5));
              }
            }
            return null;
          }
        };
        t.exports = c;
      }, {
        "./compressedObject": 2,
        "./compressions": 3,
        "./crc32": 4,
        "./reader/readerFor": 22,
        "./support": 30,
        "./utf8": 31,
        "./utils": 32
      }],
      35: [function (e, t, r) {
        function n(e, t, r) {
          this.name = e;
          this.dir = r.dir;
          this.date = r.date;
          this.comment = r.comment;
          this.unixPermissions = r.unixPermissions;
          this.dosPermissions = r.dosPermissions;
          this._data = t;
          this._dataBinary = r.binary;
          this.options = {
            compression: r.compression,
            compressionOptions: r.compressionOptions
          };
        }
        var i = e("./stream/StreamHelper");
        var o = e("./stream/DataWorker");
        var a = e("./utf8");
        var s = e("./compressedObject");
        var l = e("./stream/GenericWorker");
        n.prototype = {
          internalStream: function (e) {
            var t = null;
            var r = "string";
            try {
              if (!e) {
                throw Error("No output type specified.");
              }
              var n = (r = e.toLowerCase()) === "string" || r === "text";
              if (r === "binarystring" || r === "text") {
                r = "string";
              }
              t = this._decompressWorker();
              var o = !this._dataBinary;
              if (o && !n) {
                t = t.pipe(new a.Utf8EncodeWorker());
              }
              if (!o && n) {
                t = t.pipe(new a.Utf8DecodeWorker());
              }
            } catch (e) {
              (t = new l("error")).error(e);
            }
            return new i(t, r, "");
          },
          async: function (e, t) {
            return this.internalStream(e).accumulate(t);
          },
          nodeStream: function (e, t) {
            return this.internalStream(e || "nodebuffer").toNodejsStream(t);
          },
          _compressWorker: function (e, t) {
            if (this._data instanceof s && this._data.compression.magic === e.magic) {
              return this._data.getCompressedWorker();
            }
            var r = this._decompressWorker();
            if (!this._dataBinary) {
              r = r.pipe(new a.Utf8EncodeWorker());
            }
            return s.createWorkerFrom(r, e, t);
          },
          _decompressWorker: function () {
            if (this._data instanceof s) {
              return this._data.getContentWorker();
            } else if (this._data instanceof l) {
              return this._data;
            } else {
              return new o(this._data);
            }
          }
        };
        var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
        function c() {
          throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }
        var h = 0;
        for (; h < u.length; h++) {
          n.prototype[u[h]] = c;
        }
        t.exports = n;
      }, {
        "./compressedObject": 2,
        "./stream/DataWorker": 27,
        "./stream/GenericWorker": 28,
        "./stream/StreamHelper": 29,
        "./utf8": 31
      }],
      36: [function (e, t, r) {
        (function (e) {
          var r;
          var n;
          var i = e.MutationObserver || e.WebKitMutationObserver;
          if (i) {
            var o = 0;
            var a = new i(c);
            var s = e.document.createTextNode("");
            a.observe(s, {
              characterData: true
            });
            r = function () {
              s.data = o = ++o % 2;
            };
          } else if (e.setImmediate || e.MessageChannel === undefined) {
            r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
              var t = e.document.createElement("script");
              t.onreadystatechange = function () {
                c();
                t.onreadystatechange = null;
                t.parentNode.removeChild(t);
                t = null;
              };
              e.document.documentElement.appendChild(t);
            } : function () {
              setTimeout(c, 0);
            };
          } else {
            var l = new e.MessageChannel();
            l.port1.onmessage = c;
            r = function () {
              l.port2.postMessage(0);
            };
          }
          var u = [];
          function c() {
            var e;
            var t;
            n = true;
            for (var r = u.length; r;) {
              t = u;
              u = [];
              e = -1;
              while (++e < r) {
                t[e]();
              }
              r = u.length;
            }
            n = false;
          }
          t.exports = function (e) {
            if (u.push(e) === 1 && !n) {
              r();
            }
          };
        }).call(this, e5 !== undefined ? e5 : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {}],
      37: [function (e, t, r) {
        var n = e("immediate");
        function i() {}
        var o = {};
        var a = ["REJECTED"];
        var s = ["FULFILLED"];
        var l = ["PENDING"];
        function u(e) {
          if (typeof e != "function") {
            throw TypeError("resolver must be a function");
          }
          this.state = l;
          this.queue = [];
          this.outcome = undefined;
          if (e !== i) {
            f(this, e);
          }
        }
        function c(e, t, r) {
          this.promise = e;
          if (typeof t == "function") {
            this.onFulfilled = t;
            this.callFulfilled = this.otherCallFulfilled;
          }
          if (typeof r == "function") {
            this.onRejected = r;
            this.callRejected = this.otherCallRejected;
          }
        }
        function h(e, t, r) {
          n(function () {
            var n;
            try {
              n = t(r);
            } catch (t) {
              return o.reject(e, t);
            }
            if (n === e) {
              o.reject(e, TypeError("Cannot resolve promise with itself"));
            } else {
              o.resolve(e, n);
            }
          });
        }
        function d(e) {
          var t = e && e.then;
          if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") {
            return function () {
              t.apply(e, arguments);
            };
          }
        }
        function f(e, t) {
          var r = false;
          function n(t) {
            if (!r) {
              r = true;
              o.reject(e, t);
            }
          }
          function i(t) {
            if (!r) {
              r = true;
              o.resolve(e, t);
            }
          }
          var a = A(function () {
            t(i, n);
          });
          if (a.status === "error") {
            n(a.value);
          }
        }
        function A(e, t) {
          var r = {};
          try {
            r.value = e(t);
            r.status = "success";
          } catch (e) {
            r.status = "error";
            r.value = e;
          }
          return r;
        }
        (t.exports = u).prototype.finally = function (e) {
          if (typeof e != "function") {
            return this;
          }
          var t = this.constructor;
          return this.then(function (r) {
            return t.resolve(e()).then(function () {
              return r;
            });
          }, function (r) {
            return t.resolve(e()).then(function () {
              throw r;
            });
          });
        };
        u.prototype.catch = function (e) {
          return this.then(null, e);
        };
        u.prototype.then = function (e, t) {
          if (typeof e != "function" && this.state === s || typeof t != "function" && this.state === a) {
            return this;
          }
          var r = new this.constructor(i);
          if (this.state !== l) {
            h(r, this.state === s ? e : t, this.outcome);
          } else {
            this.queue.push(new c(r, e, t));
          }
          return r;
        };
        c.prototype.callFulfilled = function (e) {
          o.resolve(this.promise, e);
        };
        c.prototype.otherCallFulfilled = function (e) {
          h(this.promise, this.onFulfilled, e);
        };
        c.prototype.callRejected = function (e) {
          o.reject(this.promise, e);
        };
        c.prototype.otherCallRejected = function (e) {
          h(this.promise, this.onRejected, e);
        };
        o.resolve = function (e, t) {
          var r = A(d, t);
          if (r.status === "error") {
            return o.reject(e, r.value);
          }
          var n = r.value;
          if (n) {
            f(e, n);
          } else {
            e.state = s;
            e.outcome = t;
            var i = -1;
            var a = e.queue.length;
            while (++i < a) {
              e.queue[i].callFulfilled(t);
            }
          }
          return e;
        };
        o.reject = function (e, t) {
          e.state = a;
          e.outcome = t;
          var r = -1;
          var n = e.queue.length;
          while (++r < n) {
            e.queue[r].callRejected(t);
          }
          return e;
        };
        u.resolve = function (e) {
          if (e instanceof this) {
            return e;
          } else {
            return o.resolve(new this(i), e);
          }
        };
        u.reject = function (e) {
          var t = new this(i);
          return o.reject(t, e);
        };
        u.all = function (e) {
          var t = this;
          if (Object.prototype.toString.call(e) !== "[object Array]") {
            return this.reject(TypeError("must be an array"));
          }
          var r = e.length;
          var n = false;
          if (!r) {
            return this.resolve([]);
          }
          var a = Array(r);
          var s = 0;
          var l = -1;
          var u = new this(i);
          while (++l < r) {
            (function (e, i) {
              t.resolve(e).then(function (e) {
                a[i] = e;
                if (++s === r && !n) {
                  n = true;
                  o.resolve(u, a);
                }
              }, function (e) {
                if (!n) {
                  n = true;
                  o.reject(u, e);
                }
              });
            })(e[l], l);
          }
          return u;
        };
        u.race = function (e) {
          if (Object.prototype.toString.call(e) !== "[object Array]") {
            return this.reject(TypeError("must be an array"));
          }
          var t;
          var r = e.length;
          var n = false;
          if (!r) {
            return this.resolve([]);
          }
          var a = -1;
          var s = new this(i);
          while (++a < r) {
            t = e[a];
            this.resolve(t).then(function (e) {
              if (!n) {
                n = true;
                o.resolve(s, e);
              }
            }, function (e) {
              if (!n) {
                n = true;
                o.reject(s, e);
              }
            });
          }
          return s;
        };
      }, {
        immediate: 36
      }],
      38: [function (e, t, r) {
        var n = {};
        e("./lib/utils/common").assign(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants"));
        t.exports = n;
      }, {
        "./lib/deflate": 39,
        "./lib/inflate": 40,
        "./lib/utils/common": 41,
        "./lib/zlib/constants": 44
      }],
      39: [function (e, t, r) {
        var n = e("./zlib/deflate");
        var i = e("./utils/common");
        var o = e("./utils/strings");
        var a = e("./zlib/messages");
        var s = e("./zlib/zstream");
        var l = Object.prototype.toString;
        function u(e) {
          if (!(this instanceof u)) {
            return new u(e);
          }
          this.options = i.assign({
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: ""
          }, e || {});
          var t;
          var r = this.options;
          if (r.raw && r.windowBits > 0) {
            r.windowBits = -r.windowBits;
          } else if (r.gzip && r.windowBits > 0 && r.windowBits < 16) {
            r.windowBits += 16;
          }
          this.err = 0;
          this.msg = "";
          this.ended = false;
          this.chunks = [];
          this.strm = new s();
          this.strm.avail_out = 0;
          var c = n.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
          if (c !== 0) {
            throw Error(a[c]);
          }
          if (r.header) {
            n.deflateSetHeader(this.strm, r.header);
          }
          if (r.dictionary) {
            t = typeof r.dictionary == "string" ? o.string2buf(r.dictionary) : l.call(r.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(r.dictionary) : r.dictionary;
            if ((c = n.deflateSetDictionary(this.strm, t)) !== 0) {
              throw Error(a[c]);
            }
            this._dict_set = true;
          }
        }
        function c(e, t) {
          var r = new u(t);
          r.push(e, true);
          if (r.err) {
            throw r.msg || a[r.err];
          }
          return r.result;
        }
        u.prototype.push = function (e, t) {
          var r;
          var a;
          var s = this.strm;
          var u = this.options.chunkSize;
          if (this.ended) {
            return false;
          }
          a = t === ~~t ? t : (t === true) * 4;
          if (typeof e == "string") {
            s.input = o.string2buf(e);
          } else if (l.call(e) === "[object ArrayBuffer]") {
            s.input = new Uint8Array(e);
          } else {
            s.input = e;
          }
          s.next_in = 0;
          s.avail_in = s.input.length;
          do {
            if (s.avail_out === 0) {
              s.output = new i.Buf8(u);
              s.next_out = 0;
              s.avail_out = u;
            }
            if ((r = n.deflate(s, a)) !== 1 && r !== 0) {
              this.onEnd(r);
              this.ended = true;
              return false;
            }
            if (s.avail_out === 0 || s.avail_in === 0 && (a === 4 || a === 2)) {
              if (this.options.to === "string") {
                this.onData(o.buf2binstring(i.shrinkBuf(s.output, s.next_out)));
              } else {
                this.onData(i.shrinkBuf(s.output, s.next_out));
              }
            }
          } while ((s.avail_in > 0 || s.avail_out === 0) && r !== 1);
          if (a === 4) {
            r = n.deflateEnd(this.strm);
            this.onEnd(r);
            this.ended = true;
            return r === 0;
          } else {
            return a !== 2 || (this.onEnd(0), s.avail_out = 0, true);
          }
        };
        u.prototype.onData = function (e) {
          this.chunks.push(e);
        };
        u.prototype.onEnd = function (e) {
          if (e === 0) {
            if (this.options.to === "string") {
              this.result = this.chunks.join("");
            } else {
              this.result = i.flattenChunks(this.chunks);
            }
          }
          this.chunks = [];
          this.err = e;
          this.msg = this.strm.msg;
        };
        r.Deflate = u;
        r.deflate = c;
        r.deflateRaw = function (e, t) {
          (t = t || {}).raw = true;
          return c(e, t);
        };
        r.gzip = function (e, t) {
          (t = t || {}).gzip = true;
          return c(e, t);
        };
      }, {
        "./utils/common": 41,
        "./utils/strings": 42,
        "./zlib/deflate": 46,
        "./zlib/messages": 51,
        "./zlib/zstream": 53
      }],
      40: [function (e, t, r) {
        var n = e("./zlib/inflate");
        var i = e("./utils/common");
        var o = e("./utils/strings");
        var a = e("./zlib/constants");
        var s = e("./zlib/messages");
        var l = e("./zlib/zstream");
        var u = e("./zlib/gzheader");
        var c = Object.prototype.toString;
        function h(e) {
          if (!(this instanceof h)) {
            return new h(e);
          }
          this.options = i.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ""
          }, e || {});
          var t = this.options;
          if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
            t.windowBits = -t.windowBits;
            if (t.windowBits === 0) {
              t.windowBits = -15;
            }
          }
          if (!!(t.windowBits >= 0) && !!(t.windowBits < 16) && (!e || !e.windowBits)) {
            t.windowBits += 32;
          }
          if (t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) == 0) {
            t.windowBits |= 15;
          }
          this.err = 0;
          this.msg = "";
          this.ended = false;
          this.chunks = [];
          this.strm = new l();
          this.strm.avail_out = 0;
          var r = n.inflateInit2(this.strm, t.windowBits);
          if (r !== a.Z_OK) {
            throw Error(s[r]);
          }
          this.header = new u();
          n.inflateGetHeader(this.strm, this.header);
        }
        function d(e, t) {
          var r = new h(t);
          r.push(e, true);
          if (r.err) {
            throw r.msg || s[r.err];
          }
          return r.result;
        }
        h.prototype.push = function (e, t) {
          var r;
          var s;
          var l;
          var u;
          var h;
          var d;
          var f = this.strm;
          var A = this.options.chunkSize;
          var g = this.options.dictionary;
          var p = false;
          if (this.ended) {
            return false;
          }
          s = t === ~~t ? t : t === true ? a.Z_FINISH : a.Z_NO_FLUSH;
          if (typeof e == "string") {
            f.input = o.binstring2buf(e);
          } else if (c.call(e) === "[object ArrayBuffer]") {
            f.input = new Uint8Array(e);
          } else {
            f.input = e;
          }
          f.next_in = 0;
          f.avail_in = f.input.length;
          do {
            if (f.avail_out === 0) {
              f.output = new i.Buf8(A);
              f.next_out = 0;
              f.avail_out = A;
            }
            if ((r = n.inflate(f, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && g) {
              d = typeof g == "string" ? o.string2buf(g) : c.call(g) === "[object ArrayBuffer]" ? new Uint8Array(g) : g;
              r = n.inflateSetDictionary(this.strm, d);
            }
            if (r === a.Z_BUF_ERROR && p === true) {
              r = a.Z_OK;
              p = false;
            }
            if (r !== a.Z_STREAM_END && r !== a.Z_OK) {
              this.onEnd(r);
              this.ended = true;
              return false;
            }
            if (f.next_out) {
              if (f.avail_out === 0 || r === a.Z_STREAM_END || f.avail_in === 0 && (s === a.Z_FINISH || s === a.Z_SYNC_FLUSH)) {
                if (this.options.to === "string") {
                  l = o.utf8border(f.output, f.next_out);
                  u = f.next_out - l;
                  h = o.buf2string(f.output, l);
                  f.next_out = u;
                  f.avail_out = A - u;
                  if (u) {
                    i.arraySet(f.output, f.output, l, u, 0);
                  }
                  this.onData(h);
                } else {
                  this.onData(i.shrinkBuf(f.output, f.next_out));
                }
              }
            }
            if (f.avail_in === 0 && f.avail_out === 0) {
              p = true;
            }
          } while ((f.avail_in > 0 || f.avail_out === 0) && r !== a.Z_STREAM_END);
          if (r === a.Z_STREAM_END) {
            s = a.Z_FINISH;
          }
          if (s === a.Z_FINISH) {
            r = n.inflateEnd(this.strm);
            this.onEnd(r);
            this.ended = true;
            return r === a.Z_OK;
          } else {
            return s !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), f.avail_out = 0, true);
          }
        };
        h.prototype.onData = function (e) {
          this.chunks.push(e);
        };
        h.prototype.onEnd = function (e) {
          if (e === a.Z_OK) {
            if (this.options.to === "string") {
              this.result = this.chunks.join("");
            } else {
              this.result = i.flattenChunks(this.chunks);
            }
          }
          this.chunks = [];
          this.err = e;
          this.msg = this.strm.msg;
        };
        r.Inflate = h;
        r.inflate = d;
        r.inflateRaw = function (e, t) {
          (t = t || {}).raw = true;
          return d(e, t);
        };
        r.ungzip = d;
      }, {
        "./utils/common": 41,
        "./utils/strings": 42,
        "./zlib/constants": 44,
        "./zlib/gzheader": 47,
        "./zlib/inflate": 49,
        "./zlib/messages": 51,
        "./zlib/zstream": 53
      }],
      41: [function (e, t, r) {
        var n = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
        r.assign = function (e) {
          for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
            var r = t.shift();
            if (r) {
              if (typeof r != "object") {
                throw TypeError(r + "must be non-object");
              }
              for (var n in r) {
                if (r.hasOwnProperty(n)) {
                  e[n] = r[n];
                }
              }
            }
          }
          return e;
        };
        r.shrinkBuf = function (e, t) {
          if (e.length === t) {
            return e;
          } else if (e.subarray) {
            return e.subarray(0, t);
          } else {
            e.length = t;
            return e;
          }
        };
        var i = {
          arraySet: function (e, t, r, n, i) {
            if (t.subarray && e.subarray) {
              e.set(t.subarray(r, r + n), i);
            } else {
              for (var o = 0; o < n; o++) {
                e[i + o] = t[r + o];
              }
            }
          },
          flattenChunks: function (e) {
            var t;
            var r;
            var n;
            var i;
            var o;
            var a;
            t = n = 0;
            r = e.length;
            for (; t < r; t++) {
              n += e[t].length;
            }
            a = new Uint8Array(n);
            t = i = 0;
            r = e.length;
            for (; t < r; t++) {
              o = e[t];
              a.set(o, i);
              i += o.length;
            }
            return a;
          }
        };
        var o = {
          arraySet: function (e, t, r, n, i) {
            for (var o = 0; o < n; o++) {
              e[i + o] = t[r + o];
            }
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          }
        };
        r.setTyped = function (e) {
          if (e) {
            r.Buf8 = Uint8Array;
            r.Buf16 = Uint16Array;
            r.Buf32 = Int32Array;
            r.assign(r, i);
          } else {
            r.Buf8 = Array;
            r.Buf16 = Array;
            r.Buf32 = Array;
            r.assign(r, o);
          }
        };
        r.setTyped(n);
      }, {}],
      42: [function (e, t, r) {
        var n = e("./common");
        var i = true;
        var o = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e) {
          o = false;
        }
        var a = new n.Buf8(256);
        var s = 0;
        for (; s < 256; s++) {
          a[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
        }
        function l(e, t) {
          if (t < 65537 && (e.subarray && o || !e.subarray && i)) {
            return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
          }
          var r = "";
          var a = 0;
          for (; a < t; a++) {
            r += String.fromCharCode(e[a]);
          }
          return r;
        }
        a[254] = a[254] = 1;
        r.string2buf = function (e) {
          var t;
          var r;
          var i;
          var o;
          var a;
          var s = e.length;
          var l = 0;
          for (o = 0; o < s; o++) {
            if (((r = e.charCodeAt(o)) & 64512) == 55296 && o + 1 < s && ((i = e.charCodeAt(o + 1)) & 64512) == 56320) {
              r = 65536 + (r - 55296 << 10) + (i - 56320);
              o++;
            }
            l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
          }
          t = new n.Buf8(l);
          o = a = 0;
          for (; a < l; o++) {
            if (((r = e.charCodeAt(o)) & 64512) == 55296 && o + 1 < s && ((i = e.charCodeAt(o + 1)) & 64512) == 56320) {
              r = 65536 + (r - 55296 << 10) + (i - 56320);
              o++;
            }
            if (r < 128) {
              t[a++] = r;
            } else {
              if (r < 2048) {
                t[a++] = r >>> 6 | 192;
              } else {
                if (r < 65536) {
                  t[a++] = r >>> 12 | 224;
                } else {
                  t[a++] = r >>> 18 | 240;
                  t[a++] = r >>> 12 & 63 | 128;
                }
                t[a++] = r >>> 6 & 63 | 128;
              }
              t[a++] = r & 63 | 128;
            }
          }
          return t;
        };
        r.buf2binstring = function (e) {
          return l(e, e.length);
        };
        r.binstring2buf = function (e) {
          var t = new n.Buf8(e.length);
          var r = 0;
          var i = t.length;
          for (; r < i; r++) {
            t[r] = e.charCodeAt(r);
          }
          return t;
        };
        r.buf2string = function (e, t) {
          var r;
          var n;
          var i;
          var o;
          var s = t || e.length;
          var u = Array(s * 2);
          for (r = n = 0; r < s;) {
            if ((i = e[r++]) < 128) {
              u[n++] = i;
            } else if ((o = a[i]) > 4) {
              u[n++] = 65533;
              r += o - 1;
            } else {
              for (i &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < s;) {
                i = i << 6 | e[r++] & 63;
                o--;
              }
              if (o > 1) {
                u[n++] = 65533;
              } else if (i < 65536) {
                u[n++] = i;
              } else {
                i -= 65536;
                u[n++] = i >> 10 & 1023 | 55296;
                u[n++] = i & 1023 | 56320;
              }
            }
          }
          return l(u, n);
        };
        r.utf8border = function (e, t) {
          var r;
          if ((t = t || e.length) > e.length) {
            t = e.length;
          }
          r = t - 1;
          while (r >= 0 && (e[r] & 192) == 128) {
            r--;
          }
          if (r < 0) {
            return t;
          } else if (r === 0) {
            return t;
          } else if (r + a[e[r]] > t) {
            return r;
          } else {
            return t;
          }
        };
      }, {
        "./common": 41
      }],
      43: [function (e, t, r) {
        t.exports = function (e, t, r, n) {
          var i = e & 65535 | 0;
          var o = e >>> 16 & 65535 | 0;
          var a = 0;
          while (r !== 0) {
            for (r -= a = r > 2000 ? 2000 : r; o = o + (i = i + t[n++] | 0) | 0, --a;);
            i %= 65521;
            o %= 65521;
          }
          return i | o << 16 | 0;
        };
      }, {}],
      44: [function (e, t, r) {
        t.exports = {
          Z_NO_FLUSH: 0,
          Z_PARTIAL_FLUSH: 1,
          Z_SYNC_FLUSH: 2,
          Z_FULL_FLUSH: 3,
          Z_FINISH: 4,
          Z_BLOCK: 5,
          Z_TREES: 6,
          Z_OK: 0,
          Z_STREAM_END: 1,
          Z_NEED_DICT: 2,
          Z_ERRNO: -1,
          Z_STREAM_ERROR: -2,
          Z_DATA_ERROR: -3,
          Z_BUF_ERROR: -5,
          Z_NO_COMPRESSION: 0,
          Z_BEST_SPEED: 1,
          Z_BEST_COMPRESSION: 9,
          Z_DEFAULT_COMPRESSION: -1,
          Z_FILTERED: 1,
          Z_HUFFMAN_ONLY: 2,
          Z_RLE: 3,
          Z_FIXED: 4,
          Z_DEFAULT_STRATEGY: 0,
          Z_BINARY: 0,
          Z_TEXT: 1,
          Z_UNKNOWN: 2,
          Z_DEFLATED: 8
        };
      }, {}],
      45: [function (e, t, r) {
        var n = function () {
          var e;
          var t = [];
          var r = 0;
          for (; r < 256; r++) {
            e = r;
            for (var n = 0; n < 8; n++) {
              e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
            }
            t[r] = e;
          }
          return t;
        }();
        t.exports = function (e, t, r, i) {
          var o = i + r;
          e ^= -1;
          for (var a = i; a < o; a++) {
            e = e >>> 8 ^ n[(e ^ t[a]) & 255];
          }
          return e ^ -1;
        };
      }, {}],
      46: [function (e, t, r) {
        var n;
        var i = e("../utils/common");
        var o = e("./trees");
        var a = e("./adler32");
        var s = e("./crc32");
        var l = e("./messages");
        function u(e, t) {
          e.msg = l[t];
          return t;
        }
        function c(e) {
          return (e << 1) - (e > 4) * 9;
        }
        function h(e) {
          for (var t = e.length; --t >= 0;) {
            e[t] = 0;
          }
        }
        function d(e) {
          var t = e.state;
          var r = t.pending;
          if (r > e.avail_out) {
            r = e.avail_out;
          }
          if (r !== 0) {
            i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out);
            e.next_out += r;
            t.pending_out += r;
            e.total_out += r;
            e.avail_out -= r;
            t.pending -= r;
            if (t.pending === 0) {
              t.pending_out = 0;
            }
          }
        }
        function f(e, t) {
          o._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
          e.block_start = e.strstart;
          d(e.strm);
        }
        function A(e, t) {
          e.pending_buf[e.pending++] = t;
        }
        function g(e, t) {
          e.pending_buf[e.pending++] = t >>> 8 & 255;
          e.pending_buf[e.pending++] = t & 255;
        }
        function p(e, t) {
          var r;
          var n;
          var i = e.max_chain_length;
          var o = e.strstart;
          var a = e.prev_length;
          var s = e.nice_match;
          var l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0;
          var u = e.window;
          var c = e.w_mask;
          var h = e.prev;
          var d = e.strstart + 258;
          var f = u[o + a - 1];
          var A = u[o + a];
          if (e.prev_length >= e.good_match) {
            i >>= 2;
          }
          if (s > e.lookahead) {
            s = e.lookahead;
          }
          do {
            if (u[(r = t) + a] === A && u[r + a - 1] === f && u[r] === u[o] && u[++r] === u[o + 1]) {
              o += 2;
              r++;
              do ; while (u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && o < d);
              n = 258 - (d - o);
              o = d - 258;
              if (a < n) {
                e.match_start = t;
                if (s <= (a = n)) {
                  break;
                }
                f = u[o + a - 1];
                A = u[o + a];
              }
            }
          } while ((t = h[t & c]) > l && --i != 0);
          if (a <= e.lookahead) {
            return a;
          } else {
            return e.lookahead;
          }
        }
        function m(e) {
          var t;
          var r;
          var n;
          var o;
          var l;
          var u;
          var c;
          var h;
          var d;
          var f;
          var A = e.w_size;
          do {
            o = e.window_size - e.lookahead - e.strstart;
            if (e.strstart >= A + (A - 262)) {
              i.arraySet(e.window, e.window, A, A, 0);
              e.match_start -= A;
              e.strstart -= A;
              e.block_start -= A;
              t = r = e.hash_size;
              while (n = e.head[--t], e.head[t] = A <= n ? n - A : 0, --r);
              for (t = r = A; n = e.prev[--t], e.prev[t] = A <= n ? n - A : 0, --r;);
              o += A;
            }
            if (e.strm.avail_in === 0) {
              break;
            }
            u = e.strm;
            c = e.window;
            h = e.strstart + e.lookahead;
            f = undefined;
            if ((d = o) < (f = u.avail_in)) {
              f = d;
            }
            r = f === 0 ? 0 : (u.avail_in -= f, i.arraySet(c, u.input, u.next_in, f, h), u.state.wrap === 1 ? u.adler = a(u.adler, c, f, h) : u.state.wrap === 2 && (u.adler = s(u.adler, c, f, h)), u.next_in += f, u.total_in += f, f);
            e.lookahead += r;
            if (e.lookahead + e.insert >= 3) {
              l = e.strstart - e.insert;
              e.ins_h = e.window[l];
              e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + 1]) & e.hash_mask;
              while (e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + 3 - 1]) & e.hash_mask, e.prev[l & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = l, l++, e.insert--, !(e.lookahead + e.insert < 3)));
            }
          } while (e.lookahead < 262 && e.strm.avail_in !== 0);
        }
        function y(e, t) {
          var r;
          var n;
          while (true) {
            if (e.lookahead < 262) {
              m(e);
              if (e.lookahead < 262 && t === 0) {
                return 1;
              }
              if (e.lookahead === 0) {
                break;
              }
            }
            r = 0;
            if (e.lookahead >= 3) {
              e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
              r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
              e.head[e.ins_h] = e.strstart;
            }
            if (r !== 0 && e.strstart - r <= e.w_size - 262) {
              e.match_length = p(e, r);
            }
            if (e.match_length >= 3) {
              n = o._tr_tally(e, e.strstart - e.match_start, e.match_length - 3);
              e.lookahead -= e.match_length;
              if (e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
                e.strstart++;
              } else {
                e.strstart += e.match_length;
                e.match_length = 0;
                e.ins_h = e.window[e.strstart];
                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
              }
            } else {
              n = o._tr_tally(e, 0, e.window[e.strstart]);
              e.lookahead--;
              e.strstart++;
            }
            if (n && (f(e, false), e.strm.avail_out === 0)) {
              return 1;
            }
          }
          e.insert = e.strstart < 2 ? e.strstart : 2;
          if (t === 4) {
            f(e, true);
            if (e.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (e.last_lit && (f(e, false), e.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        }
        function v(e, t) {
          var r;
          var n;
          var i;
          while (true) {
            if (e.lookahead < 262) {
              m(e);
              if (e.lookahead < 262 && t === 0) {
                return 1;
              }
              if (e.lookahead === 0) {
                break;
              }
            }
            r = 0;
            if (e.lookahead >= 3) {
              e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
              r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
              e.head[e.ins_h] = e.strstart;
            }
            e.prev_length = e.match_length;
            e.prev_match = e.match_start;
            e.match_length = 2;
            if (r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - 262) {
              e.match_length = p(e, r);
              if (e.match_length <= 5 && (e.strategy === 1 || e.match_length === 3 && e.strstart - e.match_start > 4096)) {
                e.match_length = 2;
              }
            }
            if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
              i = e.strstart + e.lookahead - 3;
              n = o._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
              e.lookahead -= e.prev_length - 1;
              e.prev_length -= 2;
              while (++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0);
              e.match_available = 0;
              e.match_length = 2;
              e.strstart++;
              if (n && (f(e, false), e.strm.avail_out === 0)) {
                return 1;
              }
            } else if (e.match_available) {
              if (n = o._tr_tally(e, 0, e.window[e.strstart - 1])) {
                f(e, false);
              }
              e.strstart++;
              e.lookahead--;
              if (e.strm.avail_out === 0) {
                return 1;
              }
            } else {
              e.match_available = 1;
              e.strstart++;
              e.lookahead--;
            }
          }
          if (e.match_available) {
            n = o._tr_tally(e, 0, e.window[e.strstart - 1]);
            e.match_available = 0;
          }
          e.insert = e.strstart < 2 ? e.strstart : 2;
          if (t === 4) {
            f(e, true);
            if (e.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (e.last_lit && (f(e, false), e.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        }
        function b(e, t, r, n, i) {
          this.good_length = e;
          this.max_lazy = t;
          this.nice_length = r;
          this.max_chain = n;
          this.func = i;
        }
        function w() {
          this.strm = null;
          this.status = 0;
          this.pending_buf = null;
          this.pending_buf_size = 0;
          this.pending_out = 0;
          this.pending = 0;
          this.wrap = 0;
          this.gzhead = null;
          this.gzindex = 0;
          this.method = 8;
          this.last_flush = -1;
          this.w_size = 0;
          this.w_bits = 0;
          this.w_mask = 0;
          this.window = null;
          this.window_size = 0;
          this.prev = null;
          this.head = null;
          this.ins_h = 0;
          this.hash_size = 0;
          this.hash_bits = 0;
          this.hash_mask = 0;
          this.hash_shift = 0;
          this.block_start = 0;
          this.match_length = 0;
          this.prev_match = 0;
          this.match_available = 0;
          this.strstart = 0;
          this.match_start = 0;
          this.lookahead = 0;
          this.prev_length = 0;
          this.max_chain_length = 0;
          this.max_lazy_match = 0;
          this.level = 0;
          this.strategy = 0;
          this.good_match = 0;
          this.nice_match = 0;
          this.dyn_ltree = new i.Buf16(1146);
          this.dyn_dtree = new i.Buf16(122);
          this.bl_tree = new i.Buf16(78);
          h(this.dyn_ltree);
          h(this.dyn_dtree);
          h(this.bl_tree);
          this.l_desc = null;
          this.d_desc = null;
          this.bl_desc = null;
          this.bl_count = new i.Buf16(16);
          this.heap = new i.Buf16(573);
          h(this.heap);
          this.heap_len = 0;
          this.heap_max = 0;
          this.depth = new i.Buf16(573);
          h(this.depth);
          this.l_buf = 0;
          this.lit_bufsize = 0;
          this.last_lit = 0;
          this.d_buf = 0;
          this.opt_len = 0;
          this.static_len = 0;
          this.matches = 0;
          this.insert = 0;
          this.bi_buf = 0;
          this.bi_valid = 0;
        }
        function C(e) {
          var t;
          if (e && e.state) {
            e.total_in = e.total_out = 0;
            e.data_type = 2;
            (t = e.state).pending = 0;
            t.pending_out = 0;
            if (t.wrap < 0) {
              t.wrap = -t.wrap;
            }
            t.status = t.wrap ? 42 : 113;
            e.adler = +(t.wrap !== 2);
            t.last_flush = 0;
            o._tr_init(t);
            return 0;
          } else {
            return u(e, -2);
          }
        }
        function E(e) {
          var t;
          var r = C(e);
          if (r === 0) {
            (t = e.state).window_size = t.w_size * 2;
            h(t.head);
            t.max_lazy_match = n[t.level].max_lazy;
            t.good_match = n[t.level].good_length;
            t.nice_match = n[t.level].nice_length;
            t.max_chain_length = n[t.level].max_chain;
            t.strstart = 0;
            t.block_start = 0;
            t.lookahead = 0;
            t.insert = 0;
            t.match_length = t.prev_length = 2;
            t.match_available = 0;
            t.ins_h = 0;
          }
          return r;
        }
        function I(e, t, r, n, o, a) {
          if (!e) {
            return -2;
          }
          var s = 1;
          if (t === -1) {
            t = 6;
          }
          if (n < 0) {
            s = 0;
            n = -n;
          } else if (n > 15) {
            s = 2;
            n -= 16;
          }
          if (o < 1 || o > 9 || r !== 8 || n < 8 || n > 15 || t < 0 || t > 9 || a < 0 || a > 4) {
            return u(e, -2);
          }
          if (n === 8) {
            n = 9;
          }
          var l = new w();
          (e.state = l).strm = e;
          l.wrap = s;
          l.gzhead = null;
          l.w_bits = n;
          l.w_size = 1 << l.w_bits;
          l.w_mask = l.w_size - 1;
          l.hash_bits = o + 7;
          l.hash_size = 1 << l.hash_bits;
          l.hash_mask = l.hash_size - 1;
          l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3);
          l.window = new i.Buf8(l.w_size * 2);
          l.head = new i.Buf16(l.hash_size);
          l.prev = new i.Buf16(l.w_size);
          l.lit_bufsize = 1 << o + 6;
          l.pending_buf_size = l.lit_bufsize * 4;
          l.pending_buf = new i.Buf8(l.pending_buf_size);
          l.d_buf = +l.lit_bufsize;
          l.l_buf = l.lit_bufsize * 3;
          l.level = t;
          l.strategy = a;
          l.method = r;
          return E(e);
        }
        n = [new b(0, 0, 0, 0, function (e, t) {
          var r = 65535;
          for (e.pending_buf_size - 5 < 65535 && (r = e.pending_buf_size - 5);;) {
            if (e.lookahead <= 1) {
              m(e);
              if (e.lookahead === 0 && t === 0) {
                return 1;
              }
              if (e.lookahead === 0) {
                break;
              }
            }
            e.strstart += e.lookahead;
            e.lookahead = 0;
            var n = e.block_start + r;
            if ((e.strstart === 0 || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, f(e, false), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - 262 && (f(e, false), e.strm.avail_out === 0)) {
              return 1;
            }
          }
          e.insert = 0;
          if (t === 4) {
            f(e, true);
            if (e.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else {
            if (e.strstart > e.block_start) {
              f(e, false);
              e.strm.avail_out;
            }
            return 1;
          }
        }), new b(4, 4, 8, 4, y), new b(4, 5, 16, 8, y), new b(4, 6, 32, 32, y), new b(4, 4, 16, 16, v), new b(8, 16, 32, 32, v), new b(8, 16, 128, 128, v), new b(8, 32, 128, 256, v), new b(32, 128, 258, 1024, v), new b(32, 258, 258, 4096, v)];
        r.deflateInit = function (e, t) {
          return I(e, t, 8, 15, 8, 0);
        };
        r.deflateInit2 = I;
        r.deflateReset = E;
        r.deflateResetKeep = C;
        r.deflateSetHeader = function (e, t) {
          if (e && e.state) {
            if (e.state.wrap !== 2) {
              return -2;
            } else {
              e.state.gzhead = t;
              return 0;
            }
          } else {
            return -2;
          }
        };
        r.deflate = function (e, t) {
          var r;
          var i;
          var a;
          var l;
          if (!e || !e.state || t > 5 || t < 0) {
            if (e) {
              return u(e, -2);
            } else {
              return -2;
            }
          }
          i = e.state;
          if (!e.output || !e.input && e.avail_in !== 0 || i.status === 666 && t !== 4) {
            return u(e, e.avail_out === 0 ? -5 : -2);
          }
          i.strm = e;
          r = i.last_flush;
          i.last_flush = t;
          if (i.status === 42) {
            if (i.wrap === 2) {
              e.adler = 0;
              A(i, 31);
              A(i, 139);
              A(i, 8);
              if (i.gzhead) {
                A(i, +!!i.gzhead.text + !!i.gzhead.hcrc * 2 + !!i.gzhead.extra * 4 + !!i.gzhead.name * 8 + !!i.gzhead.comment * 16);
                A(i, i.gzhead.time & 255);
                A(i, i.gzhead.time >> 8 & 255);
                A(i, i.gzhead.time >> 16 & 255);
                A(i, i.gzhead.time >> 24 & 255);
                A(i, i.level === 9 ? 2 : (i.strategy >= 2 || i.level < 2) * 4);
                A(i, i.gzhead.os & 255);
                if (i.gzhead.extra && i.gzhead.extra.length) {
                  A(i, i.gzhead.extra.length & 255);
                  A(i, i.gzhead.extra.length >> 8 & 255);
                }
                if (i.gzhead.hcrc) {
                  e.adler = s(e.adler, i.pending_buf, i.pending, 0);
                }
                i.gzindex = 0;
                i.status = 69;
              } else {
                A(i, 0);
                A(i, 0);
                A(i, 0);
                A(i, 0);
                A(i, 0);
                A(i, i.level === 9 ? 2 : (i.strategy >= 2 || i.level < 2) * 4);
                A(i, 3);
                i.status = 113;
              }
            } else {
              var p = 8 + (i.w_bits - 8 << 4) << 8;
              p |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6;
              if (i.strstart !== 0) {
                p |= 32;
              }
              p += 31 - p % 31;
              i.status = 113;
              g(i, p);
              if (i.strstart !== 0) {
                g(i, e.adler >>> 16);
                g(i, e.adler & 65535);
              }
              e.adler = 1;
            }
          }
          if (i.status === 69) {
            if (i.gzhead.extra) {
              for (a = i.pending; i.gzindex < (i.gzhead.extra.length & 65535) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), d(e), a = i.pending, i.pending !== i.pending_buf_size));) {
                A(i, i.gzhead.extra[i.gzindex] & 255);
                i.gzindex++;
              }
              if (i.gzhead.hcrc && i.pending > a) {
                e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
              }
              if (i.gzindex === i.gzhead.extra.length) {
                i.gzindex = 0;
                i.status = 73;
              }
            } else {
              i.status = 73;
            }
          }
          if (i.status === 73) {
            if (i.gzhead.name) {
              a = i.pending;
              do {
                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), d(e), a = i.pending, i.pending === i.pending_buf_size)) {
                  l = 1;
                  break;
                }
                l = i.gzindex < i.gzhead.name.length ? i.gzhead.name.charCodeAt(i.gzindex++) & 255 : 0;
                A(i, l);
              } while (l !== 0);
              if (i.gzhead.hcrc && i.pending > a) {
                e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
              }
              if (l === 0) {
                i.gzindex = 0;
                i.status = 91;
              }
            } else {
              i.status = 91;
            }
          }
          if (i.status === 91) {
            if (i.gzhead.comment) {
              a = i.pending;
              do {
                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = s(e.adler, i.pending_buf, i.pending - a, a)), d(e), a = i.pending, i.pending === i.pending_buf_size)) {
                  l = 1;
                  break;
                }
                l = i.gzindex < i.gzhead.comment.length ? i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : 0;
                A(i, l);
              } while (l !== 0);
              if (i.gzhead.hcrc && i.pending > a) {
                e.adler = s(e.adler, i.pending_buf, i.pending - a, a);
              }
              if (l === 0) {
                i.status = 103;
              }
            } else {
              i.status = 103;
            }
          }
          if (i.status === 103) {
            if (i.gzhead.hcrc) {
              if (i.pending + 2 > i.pending_buf_size) {
                d(e);
              }
              if (i.pending + 2 <= i.pending_buf_size) {
                A(i, e.adler & 255);
                A(i, e.adler >> 8 & 255);
                e.adler = 0;
                i.status = 113;
              }
            } else {
              i.status = 113;
            }
          }
          if (i.pending !== 0) {
            d(e);
            if (e.avail_out === 0) {
              i.last_flush = -1;
              return 0;
            }
          } else if (e.avail_in === 0 && c(t) <= c(r) && t !== 4) {
            return u(e, -5);
          }
          if (i.status === 666 && e.avail_in !== 0) {
            return u(e, -5);
          }
          if (e.avail_in !== 0 || i.lookahead !== 0 || t !== 0 && i.status !== 666) {
            var y = i.strategy === 2 ? function (e, t) {
              var r;
              for (;;) {
                if (e.lookahead === 0 && (m(e), e.lookahead === 0)) {
                  if (t === 0) {
                    return 1;
                  }
                  break;
                }
                e.match_length = 0;
                r = o._tr_tally(e, 0, e.window[e.strstart]);
                e.lookahead--;
                e.strstart++;
                if (r && (f(e, false), e.strm.avail_out === 0)) {
                  return 1;
                }
              }
              e.insert = 0;
              if (t === 4) {
                f(e, true);
                if (e.strm.avail_out === 0) {
                  return 3;
                } else {
                  return 4;
                }
              } else if (e.last_lit && (f(e, false), e.strm.avail_out === 0)) {
                return 1;
              } else {
                return 2;
              }
            }(i, t) : i.strategy === 3 ? function (e, t) {
              var r;
              var n;
              var i;
              var a;
              var s = e.window;
              while (true) {
                if (e.lookahead <= 258) {
                  m(e);
                  if (e.lookahead <= 258 && t === 0) {
                    return 1;
                  }
                  if (e.lookahead === 0) {
                    break;
                  }
                }
                e.match_length = 0;
                if (e.lookahead >= 3 && e.strstart > 0 && (n = s[i = e.strstart - 1]) === s[++i] && n === s[++i] && n === s[++i]) {
                  a = e.strstart + 258;
                  do ; while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < a);
                  e.match_length = 258 - (a - i);
                  if (e.match_length > e.lookahead) {
                    e.match_length = e.lookahead;
                  }
                }
                if (e.match_length >= 3) {
                  r = o._tr_tally(e, 1, e.match_length - 3);
                  e.lookahead -= e.match_length;
                  e.strstart += e.match_length;
                  e.match_length = 0;
                } else {
                  r = o._tr_tally(e, 0, e.window[e.strstart]);
                  e.lookahead--;
                  e.strstart++;
                }
                if (r && (f(e, false), e.strm.avail_out === 0)) {
                  return 1;
                }
              }
              e.insert = 0;
              if (t === 4) {
                f(e, true);
                if (e.strm.avail_out === 0) {
                  return 3;
                } else {
                  return 4;
                }
              } else if (e.last_lit && (f(e, false), e.strm.avail_out === 0)) {
                return 1;
              } else {
                return 2;
              }
            }(i, t) : n[i.level].func(i, t);
            if (y === 3 || y === 4) {
              i.status = 666;
            }
            if (y === 1 || y === 3) {
              if (e.avail_out === 0) {
                i.last_flush = -1;
              }
              return 0;
            }
            if (y === 2 && (t === 1 ? o._tr_align(i) : t !== 5 && (o._tr_stored_block(i, 0, 0, false), t === 3 && (h(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), d(e), e.avail_out === 0)) {
              i.last_flush = -1;
              return 0;
            }
          }
          if (t !== 4) {
            return 0;
          } else if (i.wrap <= 0) {
            return 1;
          } else {
            if (i.wrap === 2) {
              A(i, e.adler & 255);
              A(i, e.adler >> 8 & 255);
              A(i, e.adler >> 16 & 255);
              A(i, e.adler >> 24 & 255);
              A(i, e.total_in & 255);
              A(i, e.total_in >> 8 & 255);
              A(i, e.total_in >> 16 & 255);
              A(i, e.total_in >> 24 & 255);
            } else {
              g(i, e.adler >>> 16);
              g(i, e.adler & 65535);
            }
            d(e);
            if (i.wrap > 0) {
              i.wrap = -i.wrap;
            }
            return +(i.pending === 0);
          }
        };
        r.deflateEnd = function (e) {
          var t;
          if (e && e.state) {
            if ((t = e.state.status) !== 42 && t !== 69 && t !== 73 && t !== 91 && t !== 103 && t !== 113 && t !== 666) {
              return u(e, -2);
            } else {
              e.state = null;
              if (t === 113) {
                return u(e, -3);
              } else {
                return 0;
              }
            }
          } else {
            return -2;
          }
        };
        r.deflateSetDictionary = function (e, t) {
          var r;
          var n;
          var o;
          var s;
          var l;
          var u;
          var c;
          var d;
          var f = t.length;
          if (!e || !e.state || (s = (r = e.state).wrap) === 2 || s === 1 && r.status !== 42 || r.lookahead) {
            return -2;
          }
          if (s === 1) {
            e.adler = a(e.adler, t, f, 0);
          }
          r.wrap = 0;
          if (f >= r.w_size) {
            if (s === 0) {
              h(r.head);
              r.strstart = 0;
              r.block_start = 0;
              r.insert = 0;
            }
            d = new i.Buf8(r.w_size);
            i.arraySet(d, t, f - r.w_size, r.w_size, 0);
            t = d;
            f = r.w_size;
          }
          l = e.avail_in;
          u = e.next_in;
          c = e.input;
          e.avail_in = f;
          e.next_in = 0;
          e.input = t;
          m(r);
          while (r.lookahead >= 3) {
            n = r.strstart;
            o = r.lookahead - 2;
            while (r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + 3 - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, --o);
            r.strstart = n;
            r.lookahead = 2;
            m(r);
          }
          r.strstart += r.lookahead;
          r.block_start = r.strstart;
          r.insert = r.lookahead;
          r.lookahead = 0;
          r.match_length = r.prev_length = 2;
          r.match_available = 0;
          e.next_in = u;
          e.input = c;
          e.avail_in = l;
          r.wrap = s;
          return 0;
        };
        r.deflateInfo = "pako deflate (from Nodeca project)";
      }, {
        "../utils/common": 41,
        "./adler32": 43,
        "./crc32": 45,
        "./messages": 51,
        "./trees": 52
      }],
      47: [function (e, t, r) {
        t.exports = function () {
          this.text = 0;
          this.time = 0;
          this.xflags = 0;
          this.os = 0;
          this.extra = null;
          this.extra_len = 0;
          this.name = "";
          this.comment = "";
          this.hcrc = 0;
          this.done = false;
        };
      }, {}],
      48: [function (e, t, r) {
        t.exports = function (e, t) {
          var r;
          var n;
          var i;
          var o;
          var a;
          var s;
          var l;
          var u;
          var c;
          var h;
          var d;
          var f;
          var A;
          var g;
          var p;
          var m;
          var y;
          var v;
          var b;
          var w;
          var C;
          var E;
          var I;
          var B;
          var x;
          r = e.state;
          n = e.next_in;
          B = e.input;
          i = n + (e.avail_in - 5);
          o = e.next_out;
          x = e.output;
          a = o - (t - e.avail_out);
          s = o + (e.avail_out - 257);
          l = r.dmax;
          u = r.wsize;
          c = r.whave;
          h = r.wnext;
          d = r.window;
          f = r.hold;
          A = r.bits;
          g = r.lencode;
          p = r.distcode;
          m = (1 << r.lenbits) - 1;
          y = (1 << r.distbits) - 1;
          i: do {
            if (A < 15) {
              f += B[n++] << A;
              A += 8;
              f += B[n++] << A;
              A += 8;
            }
            v = g[f & m];
            while (true) {
              f >>>= b = v >>> 24;
              A -= b;
              if ((b = v >>> 16 & 255) == 0) {
                x[o++] = v & 65535;
              } else {
                if (!(b & 16)) {
                  if ((b & 64) == 0) {
                    v = g[(v & 65535) + (f & (1 << b) - 1)];
                    continue;
                  }
                  if (b & 32) {
                    r.mode = 12;
                    break i;
                  }
                  e.msg = "invalid literal/length code";
                  r.mode = 30;
                  break i;
                }
                w = v & 65535;
                if (b &= 15) {
                  if (A < b) {
                    f += B[n++] << A;
                    A += 8;
                  }
                  w += f & (1 << b) - 1;
                  f >>>= b;
                  A -= b;
                }
                if (A < 15) {
                  f += B[n++] << A;
                  A += 8;
                  f += B[n++] << A;
                  A += 8;
                }
                v = p[f & y];
                while (true) {
                  f >>>= b = v >>> 24;
                  A -= b;
                  if (!((b = v >>> 16 & 255) & 16)) {
                    if ((b & 64) == 0) {
                      v = p[(v & 65535) + (f & (1 << b) - 1)];
                      continue;
                    }
                    e.msg = "invalid distance code";
                    r.mode = 30;
                    break i;
                  }
                  C = v & 65535;
                  if (A < (b &= 15)) {
                    f += B[n++] << A;
                    if ((A += 8) < b) {
                      f += B[n++] << A;
                      A += 8;
                    }
                  }
                  if (l < (C += f & (1 << b) - 1)) {
                    e.msg = "invalid distance too far back";
                    r.mode = 30;
                    break i;
                  }
                  f >>>= b;
                  A -= b;
                  if ((b = o - a) < C) {
                    if (c < (b = C - b) && r.sane) {
                      e.msg = "invalid distance too far back";
                      r.mode = 30;
                      break i;
                    }
                    I = d;
                    if ((E = 0) === h) {
                      E += u - b;
                      if (b < w) {
                        for (w -= b; x[o++] = d[E++], --b;);
                        E = o - C;
                        I = x;
                      }
                    } else if (h < b) {
                      E += u + h - b;
                      if ((b -= h) < w) {
                        for (w -= b; x[o++] = d[E++], --b;);
                        E = 0;
                        if (h < w) {
                          for (w -= b = h; x[o++] = d[E++], --b;);
                          E = o - C;
                          I = x;
                        }
                      }
                    } else {
                      E += h - b;
                      if (b < w) {
                        for (w -= b; x[o++] = d[E++], --b;);
                        E = o - C;
                        I = x;
                      }
                    }
                    while (w > 2) {
                      x[o++] = I[E++];
                      x[o++] = I[E++];
                      x[o++] = I[E++];
                      w -= 3;
                    }
                    if (w) {
                      x[o++] = I[E++];
                      if (w > 1) {
                        x[o++] = I[E++];
                      }
                    }
                  } else {
                    for (E = o - C; x[o++] = x[E++], x[o++] = x[E++], x[o++] = x[E++], (w -= 3) > 2;);
                    if (w) {
                      x[o++] = x[E++];
                      if (w > 1) {
                        x[o++] = x[E++];
                      }
                    }
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && o < s);
          n -= w = A >> 3;
          f &= (1 << (A -= w << 3)) - 1;
          e.next_in = n;
          e.next_out = o;
          e.avail_in = n < i ? i - n + 5 : 5 - (n - i);
          e.avail_out = o < s ? s - o + 257 : 257 - (o - s);
          r.hold = f;
          r.bits = A;
        };
      }, {}],
      49: [function (e, t, r) {
        var n = e("../utils/common");
        var i = e("./adler32");
        var o = e("./crc32");
        var a = e("./inffast");
        var s = e("./inftrees");
        function l(e) {
          return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
        }
        function u() {
          this.mode = 0;
          this.last = false;
          this.wrap = 0;
          this.havedict = false;
          this.flags = 0;
          this.dmax = 0;
          this.check = 0;
          this.total = 0;
          this.head = null;
          this.wbits = 0;
          this.wsize = 0;
          this.whave = 0;
          this.wnext = 0;
          this.window = null;
          this.hold = 0;
          this.bits = 0;
          this.length = 0;
          this.offset = 0;
          this.extra = 0;
          this.lencode = null;
          this.distcode = null;
          this.lenbits = 0;
          this.distbits = 0;
          this.ncode = 0;
          this.nlen = 0;
          this.ndist = 0;
          this.have = 0;
          this.next = null;
          this.lens = new n.Buf16(320);
          this.work = new n.Buf16(288);
          this.lendyn = null;
          this.distdyn = null;
          this.sane = 0;
          this.back = 0;
          this.was = 0;
        }
        function c(e) {
          var t;
          if (e && e.state) {
            t = e.state;
            e.total_in = e.total_out = t.total = 0;
            e.msg = "";
            if (t.wrap) {
              e.adler = t.wrap & 1;
            }
            t.mode = 1;
            t.last = 0;
            t.havedict = 0;
            t.dmax = 32768;
            t.head = null;
            t.hold = 0;
            t.bits = 0;
            t.lencode = t.lendyn = new n.Buf32(852);
            t.distcode = t.distdyn = new n.Buf32(592);
            t.sane = 1;
            t.back = -1;
            return 0;
          } else {
            return -2;
          }
        }
        function h(e) {
          var t;
          if (e && e.state) {
            (t = e.state).wsize = 0;
            t.whave = 0;
            t.wnext = 0;
            return c(e);
          } else {
            return -2;
          }
        }
        function d(e, t) {
          var r;
          var n;
          if (e && e.state) {
            n = e.state;
            if (t < 0) {
              r = 0;
              t = -t;
            } else {
              r = 1 + (t >> 4);
              if (t < 48) {
                t &= 15;
              }
            }
            if (t && (t < 8 || t > 15)) {
              return -2;
            } else {
              if (n.window !== null && n.wbits !== t) {
                n.window = null;
              }
              n.wrap = r;
              n.wbits = t;
              return h(e);
            }
          } else {
            return -2;
          }
        }
        function f(e, t) {
          var r;
          var n;
          if (e) {
            n = new u();
            (e.state = n).window = null;
            if ((r = d(e, t)) !== 0) {
              e.state = null;
            }
            return r;
          } else {
            return -2;
          }
        }
        var A;
        var g;
        var p = true;
        function m(e, t, r, i) {
          var o;
          var a = e.state;
          if (a.window === null) {
            a.wsize = 1 << a.wbits;
            a.wnext = 0;
            a.whave = 0;
            a.window = new n.Buf8(a.wsize);
          }
          if (i >= a.wsize) {
            n.arraySet(a.window, t, r - a.wsize, a.wsize, 0);
            a.wnext = 0;
            a.whave = a.wsize;
          } else {
            if (i < (o = a.wsize - a.wnext)) {
              o = i;
            }
            n.arraySet(a.window, t, r - i, o, a.wnext);
            if (i -= o) {
              n.arraySet(a.window, t, r - i, i, 0);
              a.wnext = i;
              a.whave = a.wsize;
            } else {
              a.wnext += o;
              if (a.wnext === a.wsize) {
                a.wnext = 0;
              }
              if (a.whave < a.wsize) {
                a.whave += o;
              }
            }
          }
          return 0;
        }
        r.inflateReset = h;
        r.inflateReset2 = d;
        r.inflateResetKeep = c;
        r.inflateInit = function (e) {
          return f(e, 15);
        };
        r.inflateInit2 = f;
        r.inflate = function (e, t) {
          var r;
          var u;
          var c;
          var h;
          var d;
          var f;
          var y;
          var v;
          var b;
          var w;
          var C;
          var E;
          var I;
          var B;
          var x;
          var D;
          var S;
          var k;
          var _;
          var T;
          var Q;
          var R;
          var F;
          var L;
          var O = 0;
          var N = new n.Buf8(4);
          var M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) {
            return -2;
          }
          if ((r = e.state).mode === 12) {
            r.mode = 13;
          }
          d = e.next_out;
          c = e.output;
          y = e.avail_out;
          h = e.next_in;
          u = e.input;
          f = e.avail_in;
          v = r.hold;
          b = r.bits;
          w = f;
          C = y;
          R = 0;
          i: while (true) {
            switch (r.mode) {
              case 1:
                if (r.wrap === 0) {
                  r.mode = 13;
                  break;
                }
                while (b < 16) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                if (r.wrap & 2 && v === 35615) {
                  N[r.check = 0] = v & 255;
                  N[1] = v >>> 8 & 255;
                  r.check = o(r.check, N, 2, 0);
                  b = v = 0;
                  r.mode = 2;
                  break;
                }
                r.flags = 0;
                if (r.head) {
                  r.head.done = false;
                }
                if (!(r.wrap & 1) || (((v & 255) << 8) + (v >> 8)) % 31) {
                  e.msg = "incorrect header check";
                  r.mode = 30;
                  break;
                }
                if ((v & 15) != 8) {
                  e.msg = "unknown compression method";
                  r.mode = 30;
                  break;
                }
                b -= 4;
                Q = 8 + ((v >>>= 4) & 15);
                if (r.wbits === 0) {
                  r.wbits = Q;
                } else if (Q > r.wbits) {
                  e.msg = "invalid window size";
                  r.mode = 30;
                  break;
                }
                r.dmax = 1 << Q;
                e.adler = r.check = 1;
                r.mode = v & 512 ? 10 : 12;
                b = v = 0;
                break;
              case 2:
                while (b < 16) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                r.flags = v;
                if ((r.flags & 255) != 8) {
                  e.msg = "unknown compression method";
                  r.mode = 30;
                  break;
                }
                if (r.flags & 57344) {
                  e.msg = "unknown header flags set";
                  r.mode = 30;
                  break;
                }
                if (r.head) {
                  r.head.text = v >> 8 & 1;
                }
                if (r.flags & 512) {
                  N[0] = v & 255;
                  N[1] = v >>> 8 & 255;
                  r.check = o(r.check, N, 2, 0);
                }
                b = v = 0;
                r.mode = 3;
              case 3:
                while (b < 32) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                if (r.head) {
                  r.head.time = v;
                }
                if (r.flags & 512) {
                  N[0] = v & 255;
                  N[1] = v >>> 8 & 255;
                  N[2] = v >>> 16 & 255;
                  N[3] = v >>> 24 & 255;
                  r.check = o(r.check, N, 4, 0);
                }
                b = v = 0;
                r.mode = 4;
              case 4:
                while (b < 16) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                if (r.head) {
                  r.head.xflags = v & 255;
                  r.head.os = v >> 8;
                }
                if (r.flags & 512) {
                  N[0] = v & 255;
                  N[1] = v >>> 8 & 255;
                  r.check = o(r.check, N, 2, 0);
                }
                b = v = 0;
                r.mode = 5;
              case 5:
                if (r.flags & 1024) {
                  while (b < 16) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  r.length = v;
                  if (r.head) {
                    r.head.extra_len = v;
                  }
                  if (r.flags & 512) {
                    N[0] = v & 255;
                    N[1] = v >>> 8 & 255;
                    r.check = o(r.check, N, 2, 0);
                  }
                  b = v = 0;
                } else if (r.head) {
                  r.head.extra = null;
                }
                r.mode = 6;
              case 6:
                if (r.flags & 1024 && (f < (E = r.length) && (E = f), E && (r.head && (Q = r.head.extra_len - r.length, r.head.extra ||= Array(r.head.extra_len), n.arraySet(r.head.extra, u, h, E, Q)), r.flags & 512 && (r.check = o(r.check, u, E, h)), f -= E, h += E, r.length -= E), r.length)) {
                  break i;
                }
                r.length = 0;
                r.mode = 7;
              case 7:
                if (r.flags & 2048) {
                  if (f === 0) {
                    break i;
                  }
                  for (E = 0; Q = u[h + E++], r.head && Q && r.length < 65536 && (r.head.name += String.fromCharCode(Q)), Q && E < f;);
                  if (r.flags & 512) {
                    r.check = o(r.check, u, E, h);
                  }
                  f -= E;
                  h += E;
                  if (Q) {
                    break i;
                  }
                } else if (r.head) {
                  r.head.name = null;
                }
                r.length = 0;
                r.mode = 8;
              case 8:
                if (r.flags & 4096) {
                  if (f === 0) {
                    break i;
                  }
                  for (E = 0; Q = u[h + E++], r.head && Q && r.length < 65536 && (r.head.comment += String.fromCharCode(Q)), Q && E < f;);
                  if (r.flags & 512) {
                    r.check = o(r.check, u, E, h);
                  }
                  f -= E;
                  h += E;
                  if (Q) {
                    break i;
                  }
                } else if (r.head) {
                  r.head.comment = null;
                }
                r.mode = 9;
              case 9:
                if (r.flags & 512) {
                  while (b < 16) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  if (v !== (r.check & 65535)) {
                    e.msg = "header crc mismatch";
                    r.mode = 30;
                    break;
                  }
                  b = v = 0;
                }
                if (r.head) {
                  r.head.hcrc = r.flags >> 9 & 1;
                  r.head.done = true;
                }
                e.adler = r.check = 0;
                r.mode = 12;
                break;
              case 10:
                while (b < 32) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                e.adler = r.check = l(v);
                b = v = 0;
                r.mode = 11;
              case 11:
                if (r.havedict === 0) {
                  e.next_out = d;
                  e.avail_out = y;
                  e.next_in = h;
                  e.avail_in = f;
                  r.hold = v;
                  r.bits = b;
                  return 2;
                }
                e.adler = r.check = 1;
                r.mode = 12;
              case 12:
                if (t === 5 || t === 6) {
                  break i;
                }
              case 13:
                if (r.last) {
                  v >>>= b & 7;
                  b -= b & 7;
                  r.mode = 27;
                  break;
                }
                while (b < 3) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                r.last = v & 1;
                b -= 1;
                switch ((v >>>= 1) & 3) {
                  case 0:
                    r.mode = 14;
                    break;
                  case 1:
                    (function (e) {
                      if (p) {
                        var t;
                        A = new n.Buf32(512);
                        g = new n.Buf32(32);
                        t = 0;
                        while (t < 144) {
                          e.lens[t++] = 8;
                        }
                        while (t < 256) {
                          e.lens[t++] = 9;
                        }
                        while (t < 280) {
                          e.lens[t++] = 7;
                        }
                        while (t < 288) {
                          e.lens[t++] = 8;
                        }
                        s(1, e.lens, 0, 288, A, 0, e.work, {
                          bits: 9
                        });
                        t = 0;
                        while (t < 32) {
                          e.lens[t++] = 5;
                        }
                        s(2, e.lens, 0, 32, g, 0, e.work, {
                          bits: 5
                        });
                        p = false;
                      }
                      e.lencode = A;
                      e.lenbits = 9;
                      e.distcode = g;
                      e.distbits = 5;
                    })(r);
                    r.mode = 20;
                    if (t !== 6) {
                      break;
                    }
                    v >>>= 2;
                    b -= 2;
                    break i;
                  case 2:
                    r.mode = 17;
                    break;
                  case 3:
                    e.msg = "invalid block type";
                    r.mode = 30;
                }
                v >>>= 2;
                b -= 2;
                break;
              case 14:
                v >>>= b & 7;
                b -= b & 7;
                while (b < 32) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                if ((v & 65535) != (v >>> 16 ^ 65535)) {
                  e.msg = "invalid stored block lengths";
                  r.mode = 30;
                  break;
                }
                r.length = v & 65535;
                b = v = 0;
                r.mode = 15;
                if (t === 6) {
                  break i;
                }
              case 15:
                r.mode = 16;
              case 16:
                if (E = r.length) {
                  if (f < E) {
                    E = f;
                  }
                  if (y < E) {
                    E = y;
                  }
                  if (E === 0) {
                    break i;
                  }
                  n.arraySet(c, u, h, E, d);
                  f -= E;
                  h += E;
                  y -= E;
                  d += E;
                  r.length -= E;
                  break;
                }
                r.mode = 12;
                break;
              case 17:
                while (b < 14) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                r.nlen = 257 + (v & 31);
                v >>>= 5;
                b -= 5;
                r.ndist = 1 + (v & 31);
                v >>>= 5;
                b -= 5;
                r.ncode = 4 + (v & 15);
                v >>>= 4;
                b -= 4;
                if (r.nlen > 286 || r.ndist > 30) {
                  e.msg = "too many length or distance symbols";
                  r.mode = 30;
                  break;
                }
                r.have = 0;
                r.mode = 18;
              case 18:
                while (r.have < r.ncode) {
                  while (b < 3) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  r.lens[M[r.have++]] = v & 7;
                  v >>>= 3;
                  b -= 3;
                }
                while (r.have < 19) {
                  r.lens[M[r.have++]] = 0;
                }
                r.lencode = r.lendyn;
                r.lenbits = 7;
                F = {
                  bits: r.lenbits
                };
                R = s(0, r.lens, 0, 19, r.lencode, 0, r.work, F);
                r.lenbits = F.bits;
                if (R) {
                  e.msg = "invalid code lengths set";
                  r.mode = 30;
                  break;
                }
                r.have = 0;
                r.mode = 19;
              case 19:
                while (r.have < r.nlen + r.ndist) {
                  while (D = (O = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, S = O & 65535, !((x = O >>> 24) <= b)) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  if (S < 16) {
                    v >>>= x;
                    b -= x;
                    r.lens[r.have++] = S;
                  } else {
                    if (S === 16) {
                      for (L = x + 2; b < L;) {
                        if (f === 0) {
                          break i;
                        }
                        f--;
                        v += u[h++] << b;
                        b += 8;
                      }
                      v >>>= x;
                      b -= x;
                      if (r.have === 0) {
                        e.msg = "invalid bit length repeat";
                        r.mode = 30;
                        break;
                      }
                      Q = r.lens[r.have - 1];
                      E = 3 + (v & 3);
                      v >>>= 2;
                      b -= 2;
                    } else if (S === 17) {
                      for (L = x + 3; b < L;) {
                        if (f === 0) {
                          break i;
                        }
                        f--;
                        v += u[h++] << b;
                        b += 8;
                      }
                      b -= x;
                      Q = 0;
                      E = 3 + ((v >>>= x) & 7);
                      v >>>= 3;
                      b -= 3;
                    } else {
                      for (L = x + 7; b < L;) {
                        if (f === 0) {
                          break i;
                        }
                        f--;
                        v += u[h++] << b;
                        b += 8;
                      }
                      b -= x;
                      Q = 0;
                      E = 11 + ((v >>>= x) & 127);
                      v >>>= 7;
                      b -= 7;
                    }
                    if (r.have + E > r.nlen + r.ndist) {
                      e.msg = "invalid bit length repeat";
                      r.mode = 30;
                      break;
                    }
                    while (E--) {
                      r.lens[r.have++] = Q;
                    }
                  }
                }
                if (r.mode === 30) {
                  break;
                }
                if (r.lens[256] === 0) {
                  e.msg = "invalid code -- missing end-of-block";
                  r.mode = 30;
                  break;
                }
                r.lenbits = 9;
                F = {
                  bits: r.lenbits
                };
                R = s(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, F);
                r.lenbits = F.bits;
                if (R) {
                  e.msg = "invalid literal/lengths set";
                  r.mode = 30;
                  break;
                }
                r.distbits = 6;
                r.distcode = r.distdyn;
                F = {
                  bits: r.distbits
                };
                R = s(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, F);
                r.distbits = F.bits;
                if (R) {
                  e.msg = "invalid distances set";
                  r.mode = 30;
                  break;
                }
                r.mode = 20;
                if (t === 6) {
                  break i;
                }
              case 20:
                r.mode = 21;
              case 21:
                if (f >= 6 && y >= 258) {
                  e.next_out = d;
                  e.avail_out = y;
                  e.next_in = h;
                  e.avail_in = f;
                  r.hold = v;
                  r.bits = b;
                  a(e, C);
                  d = e.next_out;
                  c = e.output;
                  y = e.avail_out;
                  h = e.next_in;
                  u = e.input;
                  f = e.avail_in;
                  v = r.hold;
                  b = r.bits;
                  if (r.mode === 12) {
                    r.back = -1;
                  }
                  break;
                }
                for (r.back = 0; D = (O = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, S = O & 65535, !((x = O >>> 24) <= b);) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                if (D && (D & 240) == 0) {
                  k = x;
                  _ = D;
                  T = S;
                  while (D = (O = r.lencode[T + ((v & (1 << k + _) - 1) >> k)]) >>> 16 & 255, S = O & 65535, !(k + (x = O >>> 24) <= b)) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  v >>>= k;
                  b -= k;
                  r.back += k;
                }
                v >>>= x;
                b -= x;
                r.back += x;
                r.length = S;
                if (D === 0) {
                  r.mode = 26;
                  break;
                }
                if (D & 32) {
                  r.back = -1;
                  r.mode = 12;
                  break;
                }
                if (D & 64) {
                  e.msg = "invalid literal/length code";
                  r.mode = 30;
                  break;
                }
                r.extra = D & 15;
                r.mode = 22;
              case 22:
                if (r.extra) {
                  for (L = r.extra; b < L;) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  r.length += v & (1 << r.extra) - 1;
                  v >>>= r.extra;
                  b -= r.extra;
                  r.back += r.extra;
                }
                r.was = r.length;
                r.mode = 23;
              case 23:
                while (D = (O = r.distcode[v & (1 << r.distbits) - 1]) >>> 16 & 255, S = O & 65535, !((x = O >>> 24) <= b)) {
                  if (f === 0) {
                    break i;
                  }
                  f--;
                  v += u[h++] << b;
                  b += 8;
                }
                if ((D & 240) == 0) {
                  k = x;
                  _ = D;
                  T = S;
                  while (D = (O = r.distcode[T + ((v & (1 << k + _) - 1) >> k)]) >>> 16 & 255, S = O & 65535, !(k + (x = O >>> 24) <= b)) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  v >>>= k;
                  b -= k;
                  r.back += k;
                }
                v >>>= x;
                b -= x;
                r.back += x;
                if (D & 64) {
                  e.msg = "invalid distance code";
                  r.mode = 30;
                  break;
                }
                r.offset = S;
                r.extra = D & 15;
                r.mode = 24;
              case 24:
                if (r.extra) {
                  for (L = r.extra; b < L;) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  r.offset += v & (1 << r.extra) - 1;
                  v >>>= r.extra;
                  b -= r.extra;
                  r.back += r.extra;
                }
                if (r.offset > r.dmax) {
                  e.msg = "invalid distance too far back";
                  r.mode = 30;
                  break;
                }
                r.mode = 25;
              case 25:
                if (y === 0) {
                  break i;
                }
                E = C - y;
                if (r.offset > E) {
                  if ((E = r.offset - E) > r.whave && r.sane) {
                    e.msg = "invalid distance too far back";
                    r.mode = 30;
                    break;
                  }
                  I = E > r.wnext ? (E -= r.wnext, r.wsize - E) : r.wnext - E;
                  if (E > r.length) {
                    E = r.length;
                  }
                  B = r.window;
                } else {
                  B = c;
                  I = d - r.offset;
                  E = r.length;
                }
                if (y < E) {
                  E = y;
                }
                y -= E;
                r.length -= E;
                while (c[d++] = B[I++], --E);
                if (r.length === 0) {
                  r.mode = 21;
                }
                break;
              case 26:
                if (y === 0) {
                  break i;
                }
                c[d++] = r.length;
                y--;
                r.mode = 21;
                break;
              case 27:
                if (r.wrap) {
                  while (b < 32) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v |= u[h++] << b;
                    b += 8;
                  }
                  C -= y;
                  e.total_out += C;
                  r.total += C;
                  if (C) {
                    e.adler = r.check = r.flags ? o(r.check, c, C, d - C) : i(r.check, c, C, d - C);
                  }
                  C = y;
                  if ((r.flags ? v : l(v)) !== r.check) {
                    e.msg = "incorrect data check";
                    r.mode = 30;
                    break;
                  }
                  b = v = 0;
                }
                r.mode = 28;
              case 28:
                if (r.wrap && r.flags) {
                  while (b < 32) {
                    if (f === 0) {
                      break i;
                    }
                    f--;
                    v += u[h++] << b;
                    b += 8;
                  }
                  if (v !== (r.total & -1)) {
                    e.msg = "incorrect length check";
                    r.mode = 30;
                    break;
                  }
                  b = v = 0;
                }
                r.mode = 29;
              case 29:
                R = 1;
                break i;
              case 30:
                R = -3;
                break i;
              case 31:
                return -4;
              default:
                return -2;
            }
          }
          e.next_out = d;
          e.avail_out = y;
          e.next_in = h;
          e.avail_in = f;
          r.hold = v;
          r.bits = b;
          if ((r.wsize || C !== e.avail_out && r.mode < 30 && (r.mode < 27 || t !== 4)) && m(e, e.output, e.next_out, C - e.avail_out)) {
            r.mode = 31;
            return -4;
          } else {
            w -= e.avail_in;
            C -= e.avail_out;
            e.total_in += w;
            e.total_out += C;
            r.total += C;
            if (r.wrap && C) {
              e.adler = r.check = r.flags ? o(r.check, c, C, e.next_out - C) : i(r.check, c, C, e.next_out - C);
            }
            e.data_type = r.bits + !!r.last * 64 + (r.mode === 12) * 128 + (r.mode === 20 || r.mode === 15) * 256;
            if ((w == 0 && C === 0 || t === 4) && R === 0) {
              R = -5;
            }
            return R;
          }
        };
        r.inflateEnd = function (e) {
          if (!e || !e.state) {
            return -2;
          }
          var t = e.state;
          t.window &&= null;
          e.state = null;
          return 0;
        };
        r.inflateGetHeader = function (e, t) {
          var r;
          if (e && e.state) {
            if (((r = e.state).wrap & 2) == 0) {
              return -2;
            } else {
              (r.head = t).done = false;
              return 0;
            }
          } else {
            return -2;
          }
        };
        r.inflateSetDictionary = function (e, t) {
          var r;
          var n = t.length;
          if (e && e.state) {
            if ((r = e.state).wrap !== 0 && r.mode !== 11) {
              return -2;
            } else if (r.mode === 11 && i(1, t, n, 0) !== r.check) {
              return -3;
            } else if (m(e, t, n, n)) {
              r.mode = 31;
              return -4;
            } else {
              r.havedict = 1;
              return 0;
            }
          } else {
            return -2;
          }
        };
        r.inflateInfo = "pako inflate (from Nodeca project)";
      }, {
        "../utils/common": 41,
        "./adler32": 43,
        "./crc32": 45,
        "./inffast": 48,
        "./inftrees": 50
      }],
      50: [function (e, t, r) {
        var n = e("../utils/common");
        var i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
        var o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
        var a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
        var s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function (e, t, r, l, u, c, h, d) {
          var f;
          var A;
          var g;
          var p;
          var m;
          var y;
          var v;
          var b;
          var w;
          var C = d.bits;
          var E = 0;
          var I = 0;
          var B = 0;
          var x = 0;
          var D = 0;
          var S = 0;
          var k = 0;
          var _ = 0;
          var T = 0;
          var Q = 0;
          var R = null;
          var F = 0;
          var L = new n.Buf16(16);
          var O = new n.Buf16(16);
          var N = null;
          var M = 0;
          for (E = 0; E <= 15; E++) {
            L[E] = 0;
          }
          for (I = 0; I < l; I++) {
            L[t[r + I]]++;
          }
          D = C;
          x = 15;
          for (; x >= 1 && L[x] === 0; x--);
          if (x < D) {
            D = x;
          }
          if (x === 0) {
            u[c++] = 20971520;
            u[c++] = 20971520;
            d.bits = 1;
            return 0;
          }
          for (B = 1; B < x && L[B] === 0; B++);
          if (D < B) {
            D = B;
          }
          E = _ = 1;
          for (; E <= 15; E++) {
            _ <<= 1;
            if ((_ -= L[E]) < 0) {
              return -1;
            }
          }
          if (_ > 0 && (e === 0 || x !== 1)) {
            return -1;
          }
          O[1] = 0;
          E = 1;
          for (; E < 15; E++) {
            O[E + 1] = O[E] + L[E];
          }
          for (I = 0; I < l; I++) {
            if (t[r + I] !== 0) {
              h[O[t[r + I]]++] = I;
            }
          }
          y = e === 0 ? (R = N = h, 19) : e === 1 ? (R = i, F -= 257, N = o, M -= 257, 256) : (R = a, N = s, -1);
          E = B;
          m = c;
          k = I = Q = 0;
          g = -1;
          p = (T = 1 << (S = D)) - 1;
          if (e === 1 && T > 852 || e === 2 && T > 592) {
            return 1;
          }
          while (true) {
            v = E - k;
            w = h[I] < y ? (b = 0, h[I]) : h[I] > y ? (b = N[M + h[I]], R[F + h[I]]) : (b = 96, 0);
            f = 1 << E - k;
            B = A = 1 << S;
            while (u[m + (Q >> k) + (A -= f)] = v << 24 | b << 16 | w | 0, A !== 0);
            for (f = 1 << E - 1; Q & f;) {
              f >>= 1;
            }
            if (f !== 0) {
              Q &= f - 1;
              Q += f;
            } else {
              Q = 0;
            }
            I++;
            if (--L[E] == 0) {
              if (E === x) {
                break;
              }
              E = t[r + h[I]];
            }
            if (D < E && (Q & p) !== g) {
              if (k === 0) {
                k = D;
              }
              m += B;
              _ = 1 << (S = E - k);
              while (S + k < x && !((_ -= L[S + k]) <= 0)) {
                S++;
                _ <<= 1;
              }
              T += 1 << S;
              if (e === 1 && T > 852 || e === 2 && T > 592) {
                return 1;
              }
              u[g = Q & p] = D << 24 | S << 16 | m - c | 0;
            }
          }
          if (Q !== 0) {
            u[m + Q] = E - k << 24 | 4194304;
          }
          d.bits = D;
          return 0;
        };
      }, {
        "../utils/common": 41
      }],
      51: [function (e, t, r) {
        t.exports = {
          2: "need dictionary",
          1: "stream end",
          0: "",
          "-1": "file error",
          "-2": "stream error",
          "-3": "data error",
          "-4": "insufficient memory",
          "-5": "buffer error",
          "-6": "incompatible version"
        };
      }, {}],
      52: [function (e, t, r) {
        var n = e("../utils/common");
        function i(e) {
          for (var t = e.length; --t >= 0;) {
            e[t] = 0;
          }
        }
        var o = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
        var a = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
        var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
        var l = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        var u = Array(576);
        i(u);
        var c = Array(60);
        i(c);
        var h = Array(512);
        i(h);
        var d = Array(256);
        i(d);
        var f = Array(29);
        i(f);
        var A;
        var g;
        var p;
        var m = Array(30);
        function y(e, t, r, n, i) {
          this.static_tree = e;
          this.extra_bits = t;
          this.extra_base = r;
          this.elems = n;
          this.max_length = i;
          this.has_stree = e && e.length;
        }
        function v(e, t) {
          this.dyn_tree = e;
          this.max_code = 0;
          this.stat_desc = t;
        }
        function b(e) {
          if (e < 256) {
            return h[e];
          } else {
            return h[256 + (e >>> 7)];
          }
        }
        function w(e, t) {
          e.pending_buf[e.pending++] = t & 255;
          e.pending_buf[e.pending++] = t >>> 8 & 255;
        }
        function C(e, t, r) {
          if (e.bi_valid > 16 - r) {
            e.bi_buf |= t << e.bi_valid & 65535;
            w(e, e.bi_buf);
            e.bi_buf = t >> 16 - e.bi_valid;
            e.bi_valid += r - 16;
          } else {
            e.bi_buf |= t << e.bi_valid & 65535;
            e.bi_valid += r;
          }
        }
        function E(e, t, r) {
          C(e, r[t * 2], r[t * 2 + 1]);
        }
        function I(e, t) {
          for (var r = 0; r |= e & 1, e >>>= 1, r <<= 1, --t > 0;);
          return r >>> 1;
        }
        function B(e, t, r) {
          var n;
          var i;
          var o = Array(16);
          var a = 0;
          for (n = 1; n <= 15; n++) {
            o[n] = a = a + r[n - 1] << 1;
          }
          for (i = 0; i <= t; i++) {
            var s = e[i * 2 + 1];
            if (s !== 0) {
              e[i * 2] = I(o[s]++, s);
            }
          }
        }
        function x(e) {
          var t;
          for (t = 0; t < 286; t++) {
            e.dyn_ltree[t * 2] = 0;
          }
          for (t = 0; t < 30; t++) {
            e.dyn_dtree[t * 2] = 0;
          }
          for (t = 0; t < 19; t++) {
            e.bl_tree[t * 2] = 0;
          }
          e.dyn_ltree[512] = 1;
          e.opt_len = e.static_len = 0;
          e.last_lit = e.matches = 0;
        }
        function D(e) {
          if (e.bi_valid > 8) {
            w(e, e.bi_buf);
          } else if (e.bi_valid > 0) {
            e.pending_buf[e.pending++] = e.bi_buf;
          }
          e.bi_buf = 0;
          e.bi_valid = 0;
        }
        function S(e, t, r, n) {
          var i = t * 2;
          var o = r * 2;
          return e[i] < e[o] || e[i] === e[o] && n[t] <= n[r];
        }
        function k(e, t, r) {
          var n = e.heap[r];
          var i = r << 1;
          while (i <= e.heap_len && (i < e.heap_len && S(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !S(t, n, e.heap[i], e.depth))) {
            e.heap[r] = e.heap[i];
            r = i;
            i <<= 1;
          }
          e.heap[r] = n;
        }
        function _(e, t, r) {
          var n;
          var i;
          var s;
          var l;
          var u = 0;
          if (e.last_lit !== 0) {
            while (n = e.pending_buf[e.d_buf + u * 2] << 8 | e.pending_buf[e.d_buf + u * 2 + 1], i = e.pending_buf[e.l_buf + u], u++, n === 0 ? E(e, i, t) : (E(e, (s = d[i]) + 256 + 1, t), (l = o[s]) !== 0 && C(e, i -= f[s], l), E(e, s = b(--n), r), (l = a[s]) !== 0 && C(e, n -= m[s], l)), u < e.last_lit);
          }
          E(e, 256, t);
        }
        function T(e, t) {
          var r;
          var n;
          var i;
          var o = t.dyn_tree;
          var a = t.stat_desc.static_tree;
          var s = t.stat_desc.has_stree;
          var l = t.stat_desc.elems;
          var u = -1;
          e.heap_len = 0;
          e.heap_max = 573;
          r = 0;
          for (; r < l; r++) {
            if (o[r * 2] !== 0) {
              e.heap[++e.heap_len] = u = r;
              e.depth[r] = 0;
            } else {
              o[r * 2 + 1] = 0;
            }
          }
          while (e.heap_len < 2) {
            o[(i = e.heap[++e.heap_len] = u < 2 ? ++u : 0) * 2] = 1;
            e.depth[i] = 0;
            e.opt_len--;
            if (s) {
              e.static_len -= a[i * 2 + 1];
            }
          }
          t.max_code = u;
          r = e.heap_len >> 1;
          for (; r >= 1; r--) {
            k(e, o, r);
          }
          for (i = l; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], k(e, o, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, o[i * 2] = o[r * 2] + o[n * 2], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, o[r * 2 + 1] = o[n * 2 + 1] = i, e.heap[1] = i++, k(e, o, 1), e.heap_len >= 2;);
          e.heap[--e.heap_max] = e.heap[1];
          (function (e, t) {
            var r;
            var n;
            var i;
            var o;
            var a;
            var s;
            var l = t.dyn_tree;
            var u = t.max_code;
            var c = t.stat_desc.static_tree;
            var h = t.stat_desc.has_stree;
            var d = t.stat_desc.extra_bits;
            var f = t.stat_desc.extra_base;
            var A = t.stat_desc.max_length;
            var g = 0;
            for (o = 0; o <= 15; o++) {
              e.bl_count[o] = 0;
            }
            l[e.heap[e.heap_max] * 2 + 1] = 0;
            r = e.heap_max + 1;
            for (; r < 573; r++) {
              if (A < (o = l[l[(n = e.heap[r]) * 2 + 1] * 2 + 1] + 1)) {
                o = A;
                g++;
              }
              l[n * 2 + 1] = o;
              if (!(u < n)) {
                e.bl_count[o]++;
                a = 0;
                if (f <= n) {
                  a = d[n - f];
                }
                s = l[n * 2];
                e.opt_len += s * (o + a);
                if (h) {
                  e.static_len += s * (c[n * 2 + 1] + a);
                }
              }
            }
            if (g !== 0) {
              do {
                for (o = A - 1; e.bl_count[o] === 0;) {
                  o--;
                }
                e.bl_count[o]--;
                e.bl_count[o + 1] += 2;
                e.bl_count[A]--;
                g -= 2;
              } while (g > 0);
              for (o = A; o !== 0; o--) {
                for (n = e.bl_count[o]; n !== 0;) {
                  if (!(u < (i = e.heap[--r]))) {
                    if (l[i * 2 + 1] !== o) {
                      e.opt_len += (o - l[i * 2 + 1]) * l[i * 2];
                      l[i * 2 + 1] = o;
                    }
                    n--;
                  }
                }
              }
            }
          })(e, t);
          B(o, u, e.bl_count);
        }
        function Q(e, t, r) {
          var n;
          var i;
          var o = -1;
          var a = t[1];
          var s = 0;
          var l = 7;
          var u = 4;
          if (a === 0) {
            l = 138;
            u = 3;
          }
          t[(r + 1) * 2 + 1] = 65535;
          n = 0;
          for (; n <= r; n++) {
            i = a;
            a = t[(n + 1) * 2 + 1];
            if (!(++s < l) || i !== a) {
              if (s < u) {
                e.bl_tree[i * 2] += s;
              } else if (i !== 0) {
                if (i !== o) {
                  e.bl_tree[i * 2]++;
                }
                e.bl_tree[32]++;
              } else if (s <= 10) {
                e.bl_tree[34]++;
              } else {
                e.bl_tree[36]++;
              }
              o = i;
              u = (s = 0) === a ? (l = 138, 3) : i === a ? (l = 6, 3) : (l = 7, 4);
            }
          }
        }
        function R(e, t, r) {
          var n;
          var i;
          var o = -1;
          var a = t[1];
          var s = 0;
          var l = 7;
          var u = 4;
          if (a === 0) {
            l = 138;
            u = 3;
          }
          n = 0;
          for (; n <= r; n++) {
            i = a;
            a = t[(n + 1) * 2 + 1];
            if (!(++s < l) || i !== a) {
              if (s < u) {
                while (E(e, i, e.bl_tree), --s != 0);
              } else if (i !== 0) {
                if (i !== o) {
                  E(e, i, e.bl_tree);
                  s--;
                }
                E(e, 16, e.bl_tree);
                C(e, s - 3, 2);
              } else if (s <= 10) {
                E(e, 17, e.bl_tree);
                C(e, s - 3, 3);
              } else {
                E(e, 18, e.bl_tree);
                C(e, s - 11, 7);
              }
              o = i;
              u = (s = 0) === a ? (l = 138, 3) : i === a ? (l = 6, 3) : (l = 7, 4);
            }
          }
        }
        i(m);
        var F = false;
        function L(e, t, r, i) {
          C(e, 0 + +!!i, 3);
          D(e);
          w(e, r);
          w(e, ~r);
          n.arraySet(e.pending_buf, e.window, t, r, e.pending);
          e.pending += r;
        }
        r._tr_init = function (e) {
          if (!F) {
            (function () {
              var e;
              var t;
              var r;
              var n;
              var i;
              var l = Array(16);
              for (n = r = 0; n < 28; n++) {
                f[n] = r;
                e = 0;
                for (; e < 1 << o[n]; e++) {
                  d[r++] = n;
                }
              }
              d[r - 1] = n;
              n = i = 0;
              for (; n < 16; n++) {
                m[n] = i;
                e = 0;
                for (; e < 1 << a[n]; e++) {
                  h[i++] = n;
                }
              }
              for (i >>= 7; n < 30; n++) {
                m[n] = i << 7;
                e = 0;
                for (; e < 1 << a[n] - 7; e++) {
                  h[256 + i++] = n;
                }
              }
              for (t = 0; t <= 15; t++) {
                l[t] = 0;
              }
              for (e = 0; e <= 143;) {
                u[e * 2 + 1] = 8;
                e++;
                l[8]++;
              }
              while (e <= 255) {
                u[e * 2 + 1] = 9;
                e++;
                l[9]++;
              }
              while (e <= 279) {
                u[e * 2 + 1] = 7;
                e++;
                l[7]++;
              }
              while (e <= 287) {
                u[e * 2 + 1] = 8;
                e++;
                l[8]++;
              }
              B(u, 287, l);
              e = 0;
              for (; e < 30; e++) {
                c[e * 2 + 1] = 5;
                c[e * 2] = I(e, 5);
              }
              A = new y(u, o, 257, 286, 15);
              g = new y(c, a, 0, 30, 15);
              p = new y([], s, 0, 19, 7);
            })();
            F = true;
          }
          e.l_desc = new v(e.dyn_ltree, A);
          e.d_desc = new v(e.dyn_dtree, g);
          e.bl_desc = new v(e.bl_tree, p);
          e.bi_buf = 0;
          e.bi_valid = 0;
          x(e);
        };
        r._tr_stored_block = L;
        r._tr_flush_block = function (e, t, r, n) {
          var i;
          var o;
          var a = 0;
          if (e.level > 0) {
            if (e.strm.data_type === 2) {
              e.strm.data_type = function (e) {
                var t;
                var r = 4093624447;
                for (t = 0; t <= 31; t++, r >>>= 1) {
                  if (r & 1 && e.dyn_ltree[t * 2] !== 0) {
                    return 0;
                  }
                }
                if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
                  return 1;
                }
                for (t = 32; t < 256; t++) {
                  if (e.dyn_ltree[t * 2] !== 0) {
                    return 1;
                  }
                }
                return 0;
              }(e);
            }
            T(e, e.l_desc);
            T(e, e.d_desc);
            a = function (e) {
              var t;
              Q(e, e.dyn_ltree, e.l_desc.max_code);
              Q(e, e.dyn_dtree, e.d_desc.max_code);
              T(e, e.bl_desc);
              t = 18;
              for (; t >= 3 && e.bl_tree[l[t] * 2 + 1] === 0; t--);
              e.opt_len += (t + 1) * 3 + 5 + 5 + 4;
              return t;
            }(e);
            i = e.opt_len + 3 + 7 >>> 3;
            if ((o = e.static_len + 3 + 7 >>> 3) <= i) {
              i = o;
            }
          } else {
            i = o = r + 5;
          }
          if (r + 4 <= i && t !== -1) {
            L(e, t, r, n);
          } else if (e.strategy === 4 || o === i) {
            C(e, 2 + +!!n, 3);
            _(e, u, c);
          } else {
            C(e, 4 + +!!n, 3);
            (function (e, t, r, n) {
              var i;
              C(e, t - 257, 5);
              C(e, r - 1, 5);
              C(e, n - 4, 4);
              i = 0;
              for (; i < n; i++) {
                C(e, e.bl_tree[l[i] * 2 + 1], 3);
              }
              R(e, e.dyn_ltree, t - 1);
              R(e, e.dyn_dtree, r - 1);
            })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1);
            _(e, e.dyn_ltree, e.dyn_dtree);
          }
          x(e);
          if (n) {
            D(e);
          }
        };
        r._tr_tally = function (e, t, r) {
          e.pending_buf[e.d_buf + e.last_lit * 2] = t >>> 8 & 255;
          e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255;
          e.pending_buf[e.l_buf + e.last_lit] = r & 255;
          e.last_lit++;
          if (t === 0) {
            e.dyn_ltree[r * 2]++;
          } else {
            e.matches++;
            t--;
            e.dyn_ltree[(d[r] + 256 + 1) * 2]++;
            e.dyn_dtree[b(t) * 2]++;
          }
          return e.last_lit === e.lit_bufsize - 1;
        };
        r._tr_align = function (e) {
          C(e, 2, 3);
          E(e, 256, u);
          if (e.bi_valid === 16) {
            w(e, e.bi_buf);
            e.bi_buf = 0;
            e.bi_valid = 0;
          } else if (e.bi_valid >= 8) {
            e.pending_buf[e.pending++] = e.bi_buf & 255;
            e.bi_buf >>= 8;
            e.bi_valid -= 8;
          }
        };
      }, {
        "../utils/common": 41
      }],
      53: [function (e, t, r) {
        t.exports = function () {
          this.input = null;
          this.next_in = 0;
          this.avail_in = 0;
          this.total_in = 0;
          this.output = null;
          this.next_out = 0;
          this.avail_out = 0;
          this.total_out = 0;
          this.msg = "";
          this.state = null;
          this.data_type = 2;
          this.adler = 0;
        };
      }, {}],
      54: [function (e, t, r) {
        (function (e) {
          (function (e, t) {
            if (!e.setImmediate) {
              var r;
              var n;
              var i;
              var o;
              var a = 1;
              var s = {};
              var l = false;
              var u = e.document;
              var c = Object.getPrototypeOf && Object.getPrototypeOf(e);
              c = c && c.setTimeout ? c : e;
              r = {}.toString.call(e.process) === "[object process]" ? function (e) {
                tx.nextTick(function () {
                  d(e);
                });
              } : !function () {
                if (e.postMessage && !e.importScripts) {
                  var t = true;
                  var r = e.onmessage;
                  e.onmessage = function () {
                    t = false;
                  };
                  e.postMessage("", "*");
                  e.onmessage = r;
                  return t;
                }
              }() ? e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function (e) {
                d(e.data);
              }, function (e) {
                i.port2.postMessage(e);
              }) : u && "onreadystatechange" in u.createElement("script") ? (n = u.documentElement, function (e) {
                var t = u.createElement("script");
                t.onreadystatechange = function () {
                  d(e);
                  t.onreadystatechange = null;
                  n.removeChild(t);
                  t = null;
                };
                n.appendChild(t);
              }) : function (e) {
                setTimeout(d, 0, e);
              } : (o = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", f, false) : e.attachEvent("onmessage", f), function (t) {
                e.postMessage(o + t, "*");
              });
              c.setImmediate = function (e) {
                if (typeof e != "function") {
                  e = Function("" + e);
                }
                var t = Array(arguments.length - 1);
                var n = 0;
                for (; n < t.length; n++) {
                  t[n] = arguments[n + 1];
                }
                var i = {
                  callback: e,
                  args: t
                };
                s[a] = i;
                r(a);
                return a++;
              };
              c.clearImmediate = h;
            }
            function h(e) {
              delete s[e];
            }
            function d(e) {
              if (l) {
                setTimeout(d, 0, e);
              } else {
                var r = s[e];
                if (r) {
                  l = true;
                  try {
                    (function (e) {
                      var r = e.callback;
                      var n = e.args;
                      switch (n.length) {
                        case 0:
                          r();
                          break;
                        case 1:
                          r(n[0]);
                          break;
                        case 2:
                          r(n[0], n[1]);
                          break;
                        case 3:
                          r(n[0], n[1], n[2]);
                          break;
                        default:
                          r.apply(t, n);
                      }
                    })(r);
                  } finally {
                    h(e);
                    l = false;
                  }
                }
              }
            }
            function f(t) {
              if (t.source === e && typeof t.data == "string" && t.data.indexOf(o) === 0) {
                d(+t.data.slice(o.length));
              }
            }
          })(typeof self == "undefined" ? e === undefined ? this : e : self);
        }).call(this, e5 !== undefined ? e5 : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {}]
    }, {}, [10])(10);
  };
  sR.exports = i();
  let sF = e3(sR.exports);
  var sL = {
    exports: {}
  };
  var sO = {
    "&": "&amp;",
    "\"": "&quot;",
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;"
  };
  function sN(e) {
    if (e && e.replace) {
      return e.replace(/([&"<>'])/g, function (e, t) {
        return sO[t];
      });
    } else {
      return e;
    }
  }
  var sM = t3.Stream;
  function sP(e, t, r) {
    var n;
    var i;
    var o = Array((r = r || 0) || 0).join(t || "");
    var a = e;
    if (typeof e == "object" && (n = Object.keys(e)[0], (a = e[n]) && a._elem)) {
      a._elem.name = n;
      a._elem.icount = r;
      a._elem.indent = t;
      a._elem.indents = o;
      a._elem.interrupt = a;
      return a._elem;
    }
    var s = [];
    var l = [];
    function u(e) {
      Object.keys(e).forEach(function (t) {
        s.push(t + "=\"" + sN(e[t]) + "\"");
      });
    }
    switch (typeof a) {
      case "object":
        if (a === null) {
          break;
        }
        if (a._attr) {
          u(a._attr);
        }
        if (a._cdata) {
          l.push(("<![CDATA[" + a._cdata).replace(/\]\]>/g, "]]]]><![CDATA[>") + "]]>");
        }
        if (a.forEach) {
          i = false;
          l.push("");
          a.forEach(function (e) {
            if (typeof e == "object") {
              if (Object.keys(e)[0] == "_attr") {
                u(e._attr);
              } else {
                l.push(sP(e, t, r + 1));
              }
            } else {
              l.pop();
              i = true;
              l.push(sN(e));
            }
          });
          if (!i) {
            l.push("");
          }
        }
        break;
      default:
        l.push(sN(a));
    }
    return {
      name: n,
      interrupt: false,
      attributes: s,
      content: l,
      icount: r,
      indents: o,
      indent: t
    };
  }
  function sU(e, t, r) {
    if (typeof t != "object") {
      return e(false, t);
    }
    var n = t.interrupt ? 1 : t.content.length;
    function i() {
      while (t.content.length) {
        var i = t.content.shift();
        if (i !== undefined) {
          if (o(i)) {
            return;
          }
          sU(e, i);
        }
      }
      e(false, (n > 1 ? t.indents : "") + (t.name ? "</" + t.name + ">" : "") + (t.indent && !r ? "\n" : ""));
      if (r) {
        r();
      }
    }
    function o(t) {
      return !!t.interrupt && (t.interrupt.append = e, t.interrupt.end = i, t.interrupt = false, e(true), true);
    }
    e(false, t.indents + (t.name ? "<" + t.name : "") + (t.attributes.length ? " " + t.attributes.join(" ") : "") + (n ? t.name ? ">" : "" : t.name ? "/>" : "") + (t.indent && n > 1 ? "\n" : ""));
    if (!n) {
      return e(false, t.indent ? "\n" : "");
    }
    if (!o(t)) {
      i();
    }
  }
  sL.exports = function (e, t) {
    if (typeof t != "object") {
      t = {
        indent: t
      };
    }
    var r;
    var n;
    var i = t.stream ? new sM() : null;
    var o = "";
    var a = false;
    var s = t.indent ? t.indent === true ? "    " : t.indent : "";
    var l = true;
    function u(e) {
      if (l) {
        tx.nextTick(e);
      } else {
        e();
      }
    }
    function c(e, t) {
      if (t !== undefined) {
        o += t;
      }
      if (e && !a) {
        i = i || new sM();
        a = true;
      }
      if (e && a) {
        var r = o;
        u(function () {
          i.emit("data", r);
        });
        o = "";
      }
    }
    function h(e, t) {
      sU(c, sP(e, s, +!!s), t);
    }
    function d() {
      if (i) {
        var e = o;
        u(function () {
          i.emit("data", e);
          i.emit("end");
          i.readable = false;
          i.emit("close");
        });
      }
    }
    u(function () {
      l = false;
    });
    if (t.declaration) {
      n = {
        version: "1.0",
        encoding: (r = t.declaration).encoding || "UTF-8"
      };
      if (r.standalone) {
        n.standalone = r.standalone;
      }
      h({
        "?xml": {
          _attr: n
        }
      });
      o = o.replace("/>", "?>");
    }
    if (e && e.forEach) {
      e.forEach(function (t, r) {
        var n;
        if (r + 1 === e.length) {
          n = d;
        }
        h(t, n);
      });
    } else {
      h(e, d);
    }
    if (i) {
      i.readable = true;
      return i;
    } else {
      return o;
    }
  };
  sL.exports.element = sL.exports.Element = function () {
    var e = Array.prototype.slice.call(arguments);
    var t = {
      _elem: sP(e)
    };
    t.push = function (e) {
      if (!this.append) {
        throw Error("not assigned to a parent!");
      }
      var t = this;
      var r = this._elem.indent;
      sU(this.append, sP(e, r, this._elem.icount + +!!r), function () {
        t.append(true);
      });
    };
    t.close = function (e) {
      if (e !== undefined) {
        this.push(e);
      }
      if (this.end) {
        this.end();
      }
    };
    return t;
  };
  let sz = e3(sL.exports);
  let sH = (e, t) => {
    let r = t.replace(/-/g, "");
    if (r.length !== 32) {
      throw Error(`Error: Cannot extract GUID from font filename: ${t}`);
    }
    let n = r.replace(/(..)/g, "$1 ").trim().split(" ").map(e => parseInt(e, 16));
    n.reverse();
    let i = e.slice(0, 32).map((e, t) => e ^ n[t % n.length]);
    return eM.concat([e.slice(0, 0), i, e.slice(32)]);
  };
  class sG {
    format(e, t = {
      stack: []
    }) {
      let r = e.prepForXml(t);
      if (r) {
        return r;
      }
      throw Error("XMLComponent did not format correctly");
    }
  }
  class sZ {
    replace(e, t, r) {
      let n = e;
      t.forEach((e, t) => {
        n = n.replace(RegExp(`{${e.fileName}}`, "g"), (r + t).toString());
      });
      return n;
    }
    getMediaData(e, t) {
      return t.Array.filter(t => e.search(`{${t.fileName}}`) > 0);
    }
  }
  class sW {
    replace(e, t) {
      let r = e;
      for (let e of t) {
        r = r.replace(RegExp(`{${e.reference}-${e.instance}}`, "g"), e.numId.toString());
      }
      return r;
    }
  }
  let sj = {
    WITH_2_BLANKS: "  "
  };
  let sY = e => e === true ? sj.WITH_2_BLANKS : e === false ? undefined : e;
  class sK {
    static toString(e, t) {
      return eq(this, null, function* () {
        let r = this.compiler.compile(e, sY(t));
        return yield r.generateAsync({
          type: "string",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          compression: "DEFLATE"
        });
      });
    }
    static toBuffer(e, t) {
      return eq(this, null, function* () {
        let r = this.compiler.compile(e, sY(t));
        return yield r.generateAsync({
          type: "nodebuffer",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          compression: "DEFLATE"
        });
      });
    }
    static toBase64String(e, t) {
      return eq(this, null, function* () {
        let r = this.compiler.compile(e, sY(t));
        return yield r.generateAsync({
          type: "base64",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          compression: "DEFLATE"
        });
      });
    }
    static toBlob(e, t) {
      return eq(this, null, function* () {
        let r = this.compiler.compile(e, sY(t));
        return yield r.generateAsync({
          type: "blob",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          compression: "DEFLATE"
        });
      });
    }
    static toStream(e, t) {
      let r = new t3.Stream();
      this.compiler.compile(e, sY(t)).generateAsync({
        type: "nodebuffer",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE"
      }).then(e => {
        r.emit("data", e);
        r.emit("end");
      });
      return r;
    }
  }
  eK(sK, "compiler", new class {
    constructor() {
      eK(this, "formatter");
      eK(this, "imageReplacer");
      eK(this, "numberingReplacer");
      this.formatter = new sG();
      this.imageReplacer = new sZ();
      this.numberingReplacer = new sW();
    }
    compile(e, t) {
      let r = new sF();
      for (let [, n] of new Map(Object.entries(this.xmlifyFile(e, t)))) {
        if (Array.isArray(n)) {
          for (let e of n) {
            r.file(e.path, e.data);
          }
        } else {
          r.file(n.path, n.data);
        }
      }
      for (let {
        stream: t,
        fileName: n
      } of e.Media.Array) {
        r.file(`word/media/${n}`, t);
      }
      for (let {
        data: t,
        name: n,
        fontKey: i
      } of e.FontTable.fontOptionsWithKey) {
        let [e] = n.split(".");
        r.file(`word/fonts/${e}.odttf`, sH(t, i));
      }
      return r;
    }
    xmlifyFile(e, t) {
      let r = e.Document.Relationships.RelationshipCount + 1;
      let n = sz(this.formatter.format(e.Document.View, {
        viewWrapper: e.Document,
        file: e,
        stack: []
      }), {
        indent: t,
        declaration: {
          standalone: "yes",
          encoding: "UTF-8"
        }
      });
      let i = this.imageReplacer.getMediaData(n, e.Media);
      return {
        Relationships: {
          data: (i.forEach((t, n) => {
            e.Document.Relationships.createRelationship(r + n, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${t.fileName}`);
          }), sz(this.formatter.format(e.Document.Relationships, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          })),
          path: "word/_rels/document.xml.rels"
        },
        Document: {
          data: (() => {
            let t = this.imageReplacer.replace(n, i, r);
            return this.numberingReplacer.replace(t, e.Numbering.ConcreteNumbering);
          })(),
          path: "word/document.xml"
        },
        Styles: {
          data: (() => {
            let r = sz(this.formatter.format(e.Styles, {
              viewWrapper: e.Document,
              file: e,
              stack: []
            }), {
              indent: t,
              declaration: {
                standalone: "yes",
                encoding: "UTF-8"
              }
            });
            return this.numberingReplacer.replace(r, e.Numbering.ConcreteNumbering);
          })(),
          path: "word/styles.xml"
        },
        Properties: {
          data: sz(this.formatter.format(e.CoreProperties, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "docProps/core.xml"
        },
        Numbering: {
          data: sz(this.formatter.format(e.Numbering, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "word/numbering.xml"
        },
        FileRelationships: {
          data: sz(this.formatter.format(e.FileRelationships, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          }),
          path: "_rels/.rels"
        },
        HeaderRelationships: e.Headers.map((r, n) => {
          let i = sz(this.formatter.format(r.View, {
            viewWrapper: r,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          });
          this.imageReplacer.getMediaData(i, e.Media).forEach((e, t) => {
            r.Relationships.createRelationship(t, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${e.fileName}`);
          });
          return {
            data: sz(this.formatter.format(r.Relationships, {
              viewWrapper: r,
              file: e,
              stack: []
            }), {
              indent: t,
              declaration: {
                encoding: "UTF-8"
              }
            }),
            path: `word/_rels/header${n + 1}.xml.rels`
          };
        }),
        FooterRelationships: e.Footers.map((r, n) => {
          let i = sz(this.formatter.format(r.View, {
            viewWrapper: r,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          });
          this.imageReplacer.getMediaData(i, e.Media).forEach((e, t) => {
            r.Relationships.createRelationship(t, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${e.fileName}`);
          });
          return {
            data: sz(this.formatter.format(r.Relationships, {
              viewWrapper: r,
              file: e,
              stack: []
            }), {
              indent: t,
              declaration: {
                encoding: "UTF-8"
              }
            }),
            path: `word/_rels/footer${n + 1}.xml.rels`
          };
        }),
        Headers: e.Headers.map((r, n) => {
          let i = sz(this.formatter.format(r.View, {
            viewWrapper: r,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          });
          let o = this.imageReplacer.getMediaData(i, e.Media);
          let a = this.imageReplacer.replace(i, o, 0);
          return {
            data: this.numberingReplacer.replace(a, e.Numbering.ConcreteNumbering),
            path: `word/header${n + 1}.xml`
          };
        }),
        Footers: e.Footers.map((r, n) => {
          let i = sz(this.formatter.format(r.View, {
            viewWrapper: r,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          });
          let o = this.imageReplacer.getMediaData(i, e.Media);
          let a = this.imageReplacer.replace(i, o, 0);
          return {
            data: this.numberingReplacer.replace(a, e.Numbering.ConcreteNumbering),
            path: `word/footer${n + 1}.xml`
          };
        }),
        ContentTypes: {
          data: sz(this.formatter.format(e.ContentTypes, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          }),
          path: "[Content_Types].xml"
        },
        CustomProperties: {
          data: sz(this.formatter.format(e.CustomProperties, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "docProps/custom.xml"
        },
        AppProperties: {
          data: sz(this.formatter.format(e.AppProperties, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "docProps/app.xml"
        },
        FootNotes: {
          data: sz(this.formatter.format(e.FootNotes.View, {
            viewWrapper: e.FootNotes,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          }),
          path: "word/footnotes.xml"
        },
        FootNotesRelationships: {
          data: sz(this.formatter.format(e.FootNotes.Relationships, {
            viewWrapper: e.FootNotes,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          }),
          path: "word/_rels/footnotes.xml.rels"
        },
        Settings: {
          data: sz(this.formatter.format(e.Settings, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "word/settings.xml"
        },
        Comments: {
          data: sz(this.formatter.format(e.Comments, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "word/comments.xml"
        },
        FontTable: {
          data: sz(this.formatter.format(e.FontTable.View, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              standalone: "yes",
              encoding: "UTF-8"
            }
          }),
          path: "word/fontTable.xml"
        },
        FontTableRelationships: {
          data: sz(this.formatter.format(e.FontTable.Relationships, {
            viewWrapper: e.Document,
            file: e,
            stack: []
          }), {
            indent: t,
            declaration: {
              encoding: "UTF-8"
            }
          }),
          path: "word/_rels/fontTable.xml.rels"
        }
      };
    }
  }());
  new sG();
  new sG();
  new sZ();
  require.d(exports, {
    B1p: function () {
      return rq;
    },
    BBB: function () {
      return sT;
    },
    EpJ: function () {
      return ot;
    },
    SCH: function () {
      return ai;
    },
    UDs: function () {
      return sK;
    },
    WaB: function () {
      return aM;
    },
    _oj: function () {
      return iH;
    },
    hal: function () {
      return nD;
    },
    iA_: function () {
      return ae;
    },
    nvN: function () {
      return oU;
    },
    pj1: function () {
      return o2;
    },
    vwV: function () {
      return n_;
    }
  });
}