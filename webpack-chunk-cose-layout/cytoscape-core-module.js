// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Cytoscape'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32838.6babfad4.js
         * chunkId: 32838
         * moduleId: 305745
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function i(e, t) {
    if (!(e instanceof t)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  function o(e, t, n) {
    if (t) {
      a(e.prototype, t);
    }
    if (n) {
      a(e, n);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  }
  function s(e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  function l(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var n;
      var r;
      var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (i != null) {
        var a = [];
        var o = true;
        var s = false;
        try {
          for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = true);
        } catch (e) {
          s = true;
          r = e;
        } finally {
          try {
            if (!o && i.return != null) {
              i.return();
            }
          } finally {
            if (s) {
              throw r;
            }
          }
        }
        return a;
      }
    }(e, t) || u(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function u(e, t) {
    if (e) {
      if (typeof e == "string") {
        return h(e, t);
      }
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor) {
        n = e.constructor.name;
      }
      if (n === "Map" || n === "Set") {
        return Array.from(e);
      }
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return h(e, t);
      }
    }
  }
  function h(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  function c(e, t) {
    var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = u(e)) || t && e && typeof e.length == "number") {
        if (n) {
          e = n;
        }
        var r = 0;
        function i() {}
        return {
          s: i,
          n: function () {
            if (r >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[r++]
              };
            }
          },
          e: function (e) {
            throw e;
          },
          f: i
        };
      }
      throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a;
    var o = true;
    var s = false;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        o = e.done;
        return e;
      },
      e: function (e) {
        s = true;
        a = e;
      },
      f: function () {
        try {
          if (!o && n.return != null) {
            n.return();
          }
        } finally {
          if (s) {
            throw a;
          }
        }
      }
    };
  }
  var d;
  var p;
  var g;
  var f;
  var v;
  var y;
  var b = typeof window == "undefined" ? null : window;
  var x = b ? b.navigator : null;
  if (b) {
    b.document;
  }
  var w = r("");
  var E = r({});
  var T = r(function () {});
  var C = typeof HTMLElement == "undefined" ? "undefined" : r(HTMLElement);
  function N(e) {
    if (e && e.instanceString && D(e.instanceString)) {
      return e.instanceString();
    } else {
      return null;
    }
  }
  function _(e) {
    return e != null && r(e) == w;
  }
  function D(e) {
    return e != null && r(e) === T;
  }
  function M(e) {
    return !O(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
  }
  function A(e) {
    return e != null && r(e) === E && !M(e) && e.constructor === Object;
  }
  function S(e) {
    return e != null && r(e) === r(1) && !isNaN(e);
  }
  function P(e) {
    if (C !== "undefined") {
      return e != null && e instanceof HTMLElement;
    }
  }
  function O(e) {
    return I(e) || L(e);
  }
  function I(e) {
    return N(e) === "collection" && e._private.single;
  }
  function L(e) {
    return N(e) === "collection" && !e._private.single;
  }
  function k(e) {
    return N(e) === "core";
  }
  function R(e) {
    return N(e) === "stylesheet";
  }
  function B(e) {
    return e == null || e === "" || !!e.match(/^\s+$/);
  }
  function F(e) {
    return e != null && r(e) === E && D(e.then);
  }
  function z(e, t) {
    t ||= function () {
      if (arguments.length == 1) {
        return arguments[0];
      }
      if (arguments.length == 0) {
        return "undefined";
      }
      var e = [];
      var t = 0;
      for (; t < arguments.length; t++) {
        e.push(arguments[t]);
      }
      return e.join("$");
    };
    var n = function n() {
      var r;
      var i = arguments;
      var a = t.apply(this, i);
      var o = n.cache;
      if (!(r = o[a])) {
        r = o[a] = e.apply(this, i);
      }
      return r;
    };
    n.cache = {};
    return n;
  }
  var V = z(function (e) {
    return e.replace(/([A-Z])/g, function (e) {
      return "-" + e.toLowerCase();
    });
  });
  var Y = z(function (e) {
    return e.replace(/(-\w)/g, function (e) {
      return e[1].toUpperCase();
    });
  });
  var G = z(function (e, t) {
    return e + t[0].toUpperCase() + t.substring(1);
  }, function (e, t) {
    return e + "$" + t;
  });
  function X(e) {
    if (B(e)) {
      return e;
    } else {
      return e.charAt(0).toUpperCase() + e.substring(1);
    }
  }
  var H = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
  var U = "rgb[a]?\\((" + H + "[%]?)\\s*,\\s*(" + H + "[%]?)\\s*,\\s*(" + H + "[%]?)(?:\\s*,\\s*(" + H + "))?\\)";
  var W = "rgb[a]?\\((?:" + H + "[%]?)\\s*,\\s*(?:" + H + "[%]?)\\s*,\\s*(?:" + H + "[%]?)(?:\\s*,\\s*(?:" + H + "))?\\)";
  var j = "hsl[a]?\\((" + H + ")\\s*,\\s*(" + H + "[%])\\s*,\\s*(" + H + "[%])(?:\\s*,\\s*(" + H + "))?\\)";
  var q = "hsl[a]?\\((?:" + H + ")\\s*,\\s*(?:" + H + "[%])\\s*,\\s*(?:" + H + "[%])(?:\\s*,\\s*(?:" + H + "))?\\)";
  function K(e, t) {
    if (e < t) {
      return -1;
    } else {
      return +(e > t);
    }
  }
  var Z = Object.assign != null ? Object.assign.bind(Object) : function (e) {
    var t = arguments;
    var n = 1;
    for (; n < t.length; n++) {
      var r = t[n];
      if (r != null) {
        var i = Object.keys(r);
        var a = 0;
        for (; a < i.length; a++) {
          var o = i[a];
          e[o] = r[o];
        }
      }
    }
    return e;
  };
  function $(e) {
    if ((e.length === 4 || e.length === 7) && e[0] === "#") {
      var t;
      var n;
      var r;
      if (e.length === 4) {
        t = parseInt(e[1] + e[1], 16);
        n = parseInt(e[2] + e[2], 16);
        r = parseInt(e[3] + e[3], 16);
      } else {
        t = parseInt(e[1] + e[2], 16);
        n = parseInt(e[3] + e[4], 16);
        r = parseInt(e[5] + e[6], 16);
      }
      return [t, n, r];
    }
  }
  function Q(e) {
    function t(e, t, n) {
      if (n < 0) {
        n += 1;
      }
      if (n > 1) {
        n -= 1;
      }
      if (n < 1 / 6) {
        return e + (t - e) * 6 * n;
      } else if (n < 0.5) {
        return t;
      } else if (n < 2 / 3) {
        return e + (t - e) * (2 / 3 - n) * 6;
      } else {
        return e;
      }
    }
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var u;
    var h = RegExp("^" + j + "$").exec(e);
    if (h) {
      if ((r = parseInt(h[1])) < 0) {
        r = (360 - r * -1 % 360) % 360;
      } else if (r > 360) {
        r %= 360;
      }
      r /= 360;
      if ((i = parseFloat(h[2])) < 0 || i > 100 || (i /= 100, (a = parseFloat(h[3])) < 0 || a > 100) || (a /= 100, (o = h[4]) !== undefined && ((o = parseFloat(o)) < 0 || o > 1))) {
        return;
      }
      if (i === 0) {
        s = l = u = Math.round(a * 255);
      } else {
        var c = a < 0.5 ? a * (1 + i) : a + i - a * i;
        var d = a * 2 - c;
        s = Math.round(t(d, c, r + 1 / 3) * 255);
        l = Math.round(t(d, c, r) * 255);
        u = Math.round(t(d, c, r - 1 / 3) * 255);
      }
      n = [s, l, u, o];
    }
    return n;
  }
  function J(e) {
    var t;
    var n = RegExp("^" + U + "$").exec(e);
    if (n) {
      t = [];
      var r = [];
      var i = 1;
      for (; i <= 3; i++) {
        var a = n[i];
        if (a[a.length - 1] === "%") {
          r[i] = true;
        }
        a = parseFloat(a);
        if (r[i]) {
          a = a / 100 * 255;
        }
        if (a < 0 || a > 255) {
          return;
        }
        t.push(Math.floor(a));
      }
      var o = r[1] || r[2] || r[3];
      var s = r[1] && r[2] && r[3];
      if (o && !s) {
        return;
      }
      var l = n[4];
      if (l !== undefined) {
        if ((l = parseFloat(l)) < 0 || l > 1) {
          return;
        }
        t.push(l);
      }
    }
    return t;
  }
  var ee = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    grey: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  function et(e) {
    var t = e.map;
    var n = e.keys;
    var r = n.length;
    var i = 0;
    for (; i < r; i++) {
      var a = n[i];
      if (A(a)) {
        throw Error("Tried to set map with object key");
      }
      if (i < n.length - 1) {
        if (t[a] == null) {
          t[a] = {};
        }
        t = t[a];
      } else {
        t[a] = e.value;
      }
    }
  }
  function en(e) {
    var t = e.map;
    var n = e.keys;
    var r = n.length;
    var i = 0;
    for (; i < r; i++) {
      var a = n[i];
      if (A(a)) {
        throw Error("Tried to get map with object key");
      }
      if ((t = t[a]) == null) {
        break;
      }
    }
    return t;
  }
  function er(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var ei = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
  var ea = typeof ei == "object" && ei && ei.Object === Object && ei;
  var eo = typeof self == "object" && self && self.Object === Object && self;
  var es = ea || eo || Function("return this")();
  function el() {
    return es.Date.now();
  }
  var eu = /\s/;
  function eh(e) {
    for (var t = e.length; t-- && eu.test(e.charAt(t)););
    return t;
  }
  var ec = /^\s+/;
  var ed = es.Symbol;
  var ep = Object.prototype;
  var eg = ep.hasOwnProperty;
  var ef = ep.toString;
  var ev = ed ? ed.toStringTag : undefined;
  function ey(e) {
    var t = eg.call(e, ev);
    var n = e[ev];
    try {
      e[ev] = undefined;
      var r = true;
    } catch (e) {}
    var i = ef.call(e);
    if (r) {
      if (t) {
        e[ev] = n;
      } else {
        delete e[ev];
      }
    }
    return i;
  }
  var em = Object.prototype.toString;
  var eb = ed ? ed.toStringTag : undefined;
  function ex(e) {
    if (e == null) {
      if (e === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else if (eb && eb in Object(e)) {
      return ey(e);
    } else {
      return em.call(e);
    }
  }
  function ew(e) {
    return typeof e == "symbol" || e != null && typeof e == "object" && ex(e) == "[object Symbol]";
  }
  var eE = 0 / 0;
  var eT = /^[-+]0x[0-9a-f]+$/i;
  var eC = /^0b[01]+$/i;
  var eN = /^0o[0-7]+$/i;
  var e_ = parseInt;
  function eD(e) {
    if (typeof e == "number") {
      return e;
    }
    if (ew(e)) {
      return eE;
    }
    if (er(e)) {
      var t;
      var n = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = er(n) ? n + "" : n;
    }
    if (typeof e != "string") {
      if (e === 0) {
        return e;
      } else {
        return +e;
      }
    }
    e = (t = e) ? t.slice(0, eh(t) + 1).replace(ec, "") : t;
    var r = eC.test(e);
    if (r || eN.test(e)) {
      return e_(e.slice(2), r ? 2 : 8);
    } else if (eT.test(e)) {
      return eE;
    } else {
      return +e;
    }
  }
  var eM = Math.max;
  var eA = Math.min;
  function eS(e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var u = 0;
    var h = false;
    var c = false;
    var d = true;
    if (typeof e != "function") {
      throw TypeError("Expected a function");
    }
    function p(t) {
      var n = r;
      var a = i;
      r = i = undefined;
      u = t;
      return o = e.apply(a, n);
    }
    function g(e) {
      var n = e - l;
      var r = e - u;
      return l === undefined || n >= t || n < 0 || c && r >= a;
    }
    function f() {
      var e;
      var n;
      var r;
      var i = el();
      if (g(i)) {
        return v(i);
      }
      s = setTimeout(f, (e = i - l, n = i - u, r = t - e, c ? eA(r, a - n) : r));
    }
    function v(e) {
      s = undefined;
      if (d && r) {
        return p(e);
      } else {
        r = i = undefined;
        return o;
      }
    }
    function y() {
      var e;
      var n = el();
      var a = g(n);
      r = arguments;
      i = this;
      l = n;
      if (a) {
        if (s === undefined) {
          u = e = l;
          s = setTimeout(f, t);
          if (h) {
            return p(e);
          } else {
            return o;
          }
        }
        if (c) {
          clearTimeout(s);
          s = setTimeout(f, t);
          return p(l);
        }
      }
      if (s === undefined) {
        s = setTimeout(f, t);
      }
      return o;
    }
    t = eD(t) || 0;
    if (er(n)) {
      h = !!n.leading;
      a = (c = "maxWait" in n) ? eM(eD(n.maxWait) || 0, t) : a;
      d = "trailing" in n ? !!n.trailing : d;
    }
    y.cancel = function () {
      if (s !== undefined) {
        clearTimeout(s);
      }
      u = 0;
      r = l = i = s = undefined;
    };
    y.flush = function () {
      if (s === undefined) {
        return o;
      } else {
        return v(el());
      }
    };
    return y;
  }
  var eP = b ? b.performance : null;
  var eO = eP && eP.now ? function () {
    return eP.now();
  } : function () {
    return Date.now();
  };
  var eI = function () {
    if (b) {
      if (b.requestAnimationFrame) {
        return function (e) {
          b.requestAnimationFrame(e);
        };
      }
      if (b.mozRequestAnimationFrame) {
        return function (e) {
          b.mozRequestAnimationFrame(e);
        };
      }
      if (b.webkitRequestAnimationFrame) {
        return function (e) {
          b.webkitRequestAnimationFrame(e);
        };
      } else if (b.msRequestAnimationFrame) {
        return function (e) {
          b.msRequestAnimationFrame(e);
        };
      }
    }
    return function (e) {
      if (e) {
        setTimeout(function () {
          e(eO());
        }, 1000 / 60);
      }
    };
  }();
  function eL(e) {
    return eI(e);
  }
  function ek(e) {
    var t;
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9261;
    var r = n;
    while (!(t = e.next()).done) {
      r = r * 65599 + t.value | 0;
    }
    return r;
  }
  function eR(e, t = 9261) {
    return t * 65599 + e | 0;
  }
  function eB(e, t = 5381) {
    return (t << 5) + t + e | 0;
  }
  function eF(e) {
    return e[0] * 2097152 + e[1];
  }
  function ez(e, t) {
    return [eR(e[0], t[0]), eB(e[1], t[1])];
  }
  function eV(e, t) {
    var n = {
      value: 0,
      done: false
    };
    var r = 0;
    var i = e.length;
    return ek({
      next: function () {
        if (r < i) {
          n.value = e[r++];
        } else {
          n.done = true;
        }
        return n;
      }
    }, t);
  }
  function eY(e, t) {
    var n = {
      value: 0,
      done: false
    };
    var r = 0;
    var i = e.length;
    return ek({
      next: function () {
        if (r < i) {
          n.value = e.charCodeAt(r++);
        } else {
          n.done = true;
        }
        return n;
      }
    }, t);
  }
  function eG() {
    return eX(arguments);
  }
  function eX(e) {
    var t;
    var n = 0;
    for (; n < e.length; n++) {
      var r = e[n];
      t = n === 0 ? eY(r) : eY(r, t);
    }
    return t;
  }
  var eH = true;
  var eU = console.warn != null;
  var eW = Number.MAX_SAFE_INTEGER || 9007199254740991;
  function ej() {
    return true;
  }
  function eq() {
    return false;
  }
  function eK() {
    return 0;
  }
  function eZ() {}
  function e$(e) {
    throw Error(e);
  }
  function eQ(e) {
    if (e === undefined) {
      return eH;
    }
    eH = !!e;
  }
  function eJ(e) {
    eQ();
  }
  function e0(e) {
    if (e == null) {
      return e;
    } else if (M(e)) {
      return e.slice();
    } else if (A(e)) {
      return Z({}, e);
    } else {
      return e;
    }
  }
  function e1(e, t) {
    for (t = e = ""; e++ < 36; t += e * 51 & 52 ? (e ^ 15 ? Math.random() * (e ^ 20 ? 16 : 4) ^ 8 : 4).toString(16) : "-");
    return t;
  }
  var e2 = {};
  function e5() {
    return e2;
  }
  function e3(e) {
    var t = Object.keys(e);
    return function (n) {
      var r = {};
      var i = 0;
      for (; i < t.length; i++) {
        var a = t[i];
        var o = n == null ? undefined : n[a];
        r[a] = o === undefined ? e[a] : o;
      }
      return r;
    };
  }
  function e4(e, t, n) {
    for (var r = e.length - 1; r >= 0 && (e[r] !== t || (e.splice(r, 1), !n)); r--);
  }
  function e9(e) {
    e.splice(0, e.length);
  }
  function e6(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      e.push(r);
    }
  }
  function e8(e, t, n) {
    if (n) {
      t = G(n, t);
    }
    return e[t];
  }
  function e7(e, t, n, r) {
    if (n) {
      t = G(n, t);
    }
    e[t] = r;
  }
  var te = function () {
    function e() {
      i(this, e);
      this._obj = {};
    }
    o(e, [{
      key: "set",
      value: function (e, t) {
        this._obj[e] = t;
        return this;
      }
    }, {
      key: "delete",
      value: function (e) {
        this._obj[e] = undefined;
        return this;
      }
    }, {
      key: "clear",
      value: function () {
        this._obj = {};
      }
    }, {
      key: "has",
      value: function (e) {
        return this._obj[e] !== undefined;
      }
    }, {
      key: "get",
      value: function (e) {
        return this._obj[e];
      }
    }]);
    return e;
  }();
  var tt = typeof Map != "undefined" ? Map : te;
  var tn = function () {
    function e(t) {
      i(this, e);
      this._obj = Object.create(null);
      this.size = 0;
      if (t != null) {
        var n;
        n = t.instanceString != null && t.instanceString() === this.instanceString() ? t.toArray() : t;
        for (var r = 0; r < n.length; r++) {
          this.add(n[r]);
        }
      }
    }
    o(e, [{
      key: "instanceString",
      value: function () {
        return "set";
      }
    }, {
      key: "add",
      value: function (e) {
        var t = this._obj;
        if (t[e] !== 1) {
          t[e] = 1;
          this.size++;
        }
      }
    }, {
      key: "delete",
      value: function (e) {
        var t = this._obj;
        if (t[e] === 1) {
          t[e] = 0;
          this.size--;
        }
      }
    }, {
      key: "clear",
      value: function () {
        this._obj = Object.create(null);
      }
    }, {
      key: "has",
      value: function (e) {
        return this._obj[e] === 1;
      }
    }, {
      key: "toArray",
      value: function () {
        var e = this;
        return Object.keys(this._obj).filter(function (t) {
          return e.has(t);
        });
      }
    }, {
      key: "forEach",
      value: function (e, t) {
        return this.toArray().forEach(e, t);
      }
    }]);
    return e;
  }();
  var tr = (typeof Set == "undefined" ? "undefined" : r(Set)) !== "undefined" ? Set : tn;
  function ti(e, t) {
    var n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    if (e === undefined || t === undefined || !k(e)) {
      e$("An element must have a core reference and parameters set");
      return;
    }
    var r = t.group;
    if (r == null) {
      r = t.data && t.data.source != null && t.data.target != null ? "edges" : "nodes";
    }
    if (r !== "nodes" && r !== "edges") {
      e$("An element must be of type `nodes` or `edges`; you specified `" + r + "`");
      return;
    }
    this.length = 1;
    this[0] = this;
    var i = this._private = {
      cy: e,
      single: true,
      data: t.data || {},
      position: t.position || {
        x: 0,
        y: 0
      },
      autoWidth: undefined,
      autoHeight: undefined,
      autoPadding: undefined,
      compoundBoundsClean: false,
      listeners: [],
      group: r,
      style: {},
      rstyle: {},
      styleCxts: [],
      styleKeys: {},
      removed: true,
      selected: !!t.selected,
      selectable: t.selectable === undefined || !!t.selectable,
      locked: !!t.locked,
      grabbed: false,
      grabbable: t.grabbable === undefined || !!t.grabbable,
      pannable: t.pannable === undefined ? r === "edges" : !!t.pannable,
      active: false,
      classes: new tr(),
      animation: {
        current: [],
        queue: []
      },
      rscratch: {},
      scratch: t.scratch || {},
      edges: [],
      children: [],
      parent: t.parent && t.parent.isNode() ? t.parent : null,
      traversalCache: {},
      backgrounding: false,
      bbCache: null,
      bbCacheShift: {
        x: 0,
        y: 0
      },
      bodyBounds: null,
      overlayBounds: null,
      labelBounds: {
        all: null,
        source: null,
        target: null,
        main: null
      },
      arrowBounds: {
        source: null,
        target: null,
        "mid-source": null,
        "mid-target": null
      }
    };
    if (i.position.x == null) {
      i.position.x = 0;
    }
    if (i.position.y == null) {
      i.position.y = 0;
    }
    if (t.renderedPosition) {
      var a = t.renderedPosition;
      var o = e.pan();
      var s = e.zoom();
      i.position = {
        x: (a.x - o.x) / s,
        y: (a.y - o.y) / s
      };
    }
    var l = [];
    if (M(t.classes)) {
      l = t.classes;
    } else if (_(t.classes)) {
      l = t.classes.split(/\s+/);
    }
    var u = 0;
    var h = l.length;
    for (; u < h; u++) {
      var c = l[u];
      if (c && c !== "") {
        i.classes.add(c);
      }
    }
    this.createEmitter();
    var d = t.style || t.css;
    if (d) {
      eJ("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead.");
      this.style(d);
    }
    if (n === undefined || n) {
      this.restore();
    }
  }
  function ta(e) {
    e = {
      bfs: e.bfs || !e.dfs,
      dfs: e.dfs || !e.bfs
    };
    return function (t, n, r) {
      if (A(t) && !O(t)) {
        t = (i = t).roots || i.root;
        n = i.visit;
        r = i.directed;
      }
      r = arguments.length != 2 || D(n) ? r : n;
      n = D(n) ? n : function () {};
      var i;
      var a;
      var o = this._private.cy;
      var s = t = _(t) ? this.filter(t) : t;
      var l = [];
      var u = [];
      var h = {};
      var c = {};
      var d = {};
      var p = 0;
      var g = this.byGroup();
      var f = g.nodes;
      var v = g.edges;
      var y = 0;
      for (; y < s.length; y++) {
        var b = s[y];
        var x = b.id();
        if (b.isNode()) {
          l.unshift(b);
          if (e.bfs) {
            d[x] = true;
            u.push(b);
          }
          c[x] = 0;
        }
      }
      while (l.length !== 0) {
        var w = function () {
          var t = e.bfs ? l.shift() : l.pop();
          var i = t.id();
          if (e.dfs) {
            if (d[i]) {
              return "continue";
            }
            d[i] = true;
            u.push(t);
          }
          var o = c[i];
          var s = h[i];
          var g = s != null ? s.source() : null;
          var y = s != null ? s.target() : null;
          var b = s == null ? undefined : t.same(g) ? y[0] : g[0];
          var x = undefined;
          if ((x = n(t, s, b, p++, o)) === true) {
            a = t;
            return "break";
          }
          if (x === false) {
            return "break";
          }
          var w = t.connectedEdges().filter(function (e) {
            return (!r || e.source().same(t)) && v.has(e);
          });
          var E = 0;
          for (; E < w.length; E++) {
            var T = w[E];
            var C = T.connectedNodes().filter(function (e) {
              return !e.same(t) && f.has(e);
            });
            var N = C.id();
            if (C.length !== 0 && !d[N]) {
              C = C[0];
              l.push(C);
              if (e.bfs) {
                d[N] = true;
                u.push(C);
              }
              h[N] = T;
              c[N] = c[i] + 1;
            }
          }
        }();
        if (w !== "continue" && w === "break") {
          break;
        }
      }
      var E = o.collection();
      var T = 0;
      for (; T < u.length; T++) {
        var C = u[T];
        var N = h[C.id()];
        if (N != null) {
          E.push(N);
        }
        E.push(C);
      }
      return {
        path: o.collection(E),
        found: o.collection(a)
      };
    };
  }
  var to = {
    breadthFirstSearch: ta({
      bfs: true
    }),
    depthFirstSearch: ta({
      dfs: true
    })
  };
  to.bfs = to.breadthFirstSearch;
  to.dfs = to.depthFirstSearch;
  (function (e, t) {
    (function () {
      var t;
      var n;
      var r;
      var i;
      var a;
      var o;
      var s;
      var l;
      var u;
      var h;
      var c;
      var d;
      var p;
      var g;
      var f;
      var v;
      r = Math.floor;
      h = Math.min;
      n = function (e, t) {
        if (e < t) {
          return -1;
        } else {
          return +(e > t);
        }
      };
      u = function (e, t, i, a, o) {
        var s;
        if (i == null) {
          i = 0;
        }
        if (o == null) {
          o = n;
        }
        if (i < 0) {
          throw Error("lo must be non-negative");
        }
        for (a == null && (a = e.length); i < a;) {
          if (o(t, e[s = r((i + a) / 2)]) < 0) {
            a = s;
          } else {
            i = s + 1;
          }
        }
        [].splice.apply(e, [i, i - i].concat(t));
        return t;
      };
      o = function (e, t, r) {
        if (r == null) {
          r = n;
        }
        e.push(t);
        return g(e, 0, e.length - 1, r);
      };
      a = function (e, t) {
        var r;
        var i;
        if (t == null) {
          t = n;
        }
        r = e.pop();
        if (e.length) {
          i = e[0];
          e[0] = r;
          f(e, 0, t);
        } else {
          i = r;
        }
        return i;
      };
      l = function (e, t, r) {
        var i;
        if (r == null) {
          r = n;
        }
        i = e[0];
        e[0] = t;
        f(e, 0, r);
        return i;
      };
      s = function (e, t, r) {
        var i;
        if (r == null) {
          r = n;
        }
        if (e.length && r(e[0], t) < 0) {
          t = (i = [e[0], t])[0];
          e[0] = i[1];
          f(e, 0, r);
        }
        return t;
      };
      i = function (e, t) {
        var i;
        var a;
        var o;
        var s;
        var l;
        var u;
        if (t == null) {
          t = n;
        }
        s = function () {
          u = [];
          var t = 0;
          var n = r(e.length / 2);
          for (; n >= 0 ? t < n : t > n; n >= 0 ? t++ : t--) {
            u.push(t);
          }
          return u;
        }.apply(this).reverse();
        l = [];
        a = 0;
        o = s.length;
        for (; a < o; a++) {
          i = s[a];
          l.push(f(e, i, t));
        }
        return l;
      };
      p = function (e, t, r) {
        var i;
        if (r == null) {
          r = n;
        }
        if ((i = e.indexOf(t)) !== -1) {
          g(e, 0, i, r);
          return f(e, i, r);
        }
      };
      c = function (e, t, r) {
        var a;
        var o;
        var l;
        var u;
        if (r == null) {
          r = n;
        }
        if (!(a = e.slice(0, t)).length) {
          return a;
        }
        i(a, r);
        o = 0;
        l = (u = e.slice(t)).length;
        for (; o < l; o++) {
          s(a, u[o], r);
        }
        return a.sort(r).reverse();
      };
      d = function (e, t, r) {
        var o;
        var s;
        var l;
        var c;
        var d;
        var p;
        var g;
        var f;
        var v;
        if (r == null) {
          r = n;
        }
        if (t * 10 <= e.length) {
          if (!(l = e.slice(0, t).sort(r)).length) {
            return l;
          }
          c = 0;
          s = l[l.length - 1];
          p = (g = e.slice(t)).length;
          for (; c < p; c++) {
            if (r(o = g[c], s) < 0) {
              u(l, o, 0, null, r);
              l.pop();
              s = l[l.length - 1];
            }
          }
          return l;
        }
        i(e, r);
        v = [];
        d = 0;
        f = h(t, e.length);
        for (; f >= 0 ? d < f : d > f; f >= 0 ? ++d : --d) {
          v.push(a(e, r));
        }
        return v;
      };
      g = function (e, t, r, i) {
        var a;
        var o;
        var s;
        if (i == null) {
          i = n;
        }
        a = e[r];
        while (r > t) {
          if (i(a, o = e[s = r - 1 >> 1]) < 0) {
            e[r] = o;
            r = s;
            continue;
          }
          break;
        }
        return e[r] = a;
      };
      f = function (e, t, r) {
        var i;
        var a;
        var o;
        var s;
        var l;
        if (r == null) {
          r = n;
        }
        a = e.length;
        l = t;
        o = e[t];
        i = t * 2 + 1;
        while (i < a) {
          if ((s = i + 1) < a && !(r(e[i], e[s]) < 0)) {
            i = s;
          }
          e[t] = e[i];
          i = (t = i) * 2 + 1;
        }
        e[t] = o;
        return g(e, l, t, r);
      };
      t = function () {
        function e(e) {
          this.cmp = e ?? n;
          this.nodes = [];
        }
        e.push = o;
        e.pop = a;
        e.replace = l;
        e.pushpop = s;
        e.heapify = i;
        e.updateItem = p;
        e.nlargest = c;
        e.nsmallest = d;
        e.prototype.push = function (e) {
          return o(this.nodes, e, this.cmp);
        };
        e.prototype.pop = function () {
          return a(this.nodes, this.cmp);
        };
        e.prototype.peek = function () {
          return this.nodes[0];
        };
        e.prototype.contains = function (e) {
          return this.nodes.indexOf(e) !== -1;
        };
        e.prototype.replace = function (e) {
          return l(this.nodes, e, this.cmp);
        };
        e.prototype.pushpop = function (e) {
          return s(this.nodes, e, this.cmp);
        };
        e.prototype.heapify = function () {
          return i(this.nodes, this.cmp);
        };
        e.prototype.updateItem = function (e) {
          return p(this.nodes, e, this.cmp);
        };
        e.prototype.clear = function () {
          return this.nodes = [];
        };
        e.prototype.empty = function () {
          return this.nodes.length === 0;
        };
        e.prototype.size = function () {
          return this.nodes.length;
        };
        e.prototype.clone = function () {
          var t;
          (t = new e()).nodes = this.nodes.slice(0);
          return t;
        };
        e.prototype.toArray = function () {
          return this.nodes.slice(0);
        };
        e.prototype.insert = e.prototype.push;
        e.prototype.top = e.prototype.peek;
        e.prototype.front = e.prototype.peek;
        e.prototype.has = e.prototype.contains;
        e.prototype.copy = e.prototype.clone;
        return e;
      }();
      v = function () {
        return t;
      };
      e.exports = v();
    }).call(ei);
  })(oH = {
    exports: {}
  }, oH.exports);
  var ts = oH.exports;
  var tl = e3({
    root: null,
    weight: function (e) {
      return 1;
    },
    directed: false
  });
  var tu = e3({
    root: null,
    goal: null,
    weight: function (e) {
      return 1;
    },
    heuristic: function (e) {
      return 0;
    },
    directed: false
  });
  var th = e3({
    weight: function (e) {
      return 1;
    },
    directed: false
  });
  var tc = e3({
    weight: function (e) {
      return 1;
    },
    directed: false,
    root: null
  });
  var td = Math.sqrt(2);
  function tp(e, t, n) {
    if (n.length === 0) {
      e$("Karger-Stein must be run on a connected (sub)graph");
    }
    var r = n[e];
    var i = r[1];
    var a = r[2];
    var o = t[i];
    var s = t[a];
    var l = n.length - 1;
    for (; l >= 0; l--) {
      var u = n[l];
      var h = u[1];
      var c = u[2];
      if (t[h] === o && t[c] === s || t[h] === s && t[c] === o) {
        n.splice(l, 1);
      }
    }
    for (var d = 0; d < n.length; d++) {
      var p = n[d];
      if (p[1] === s) {
        n[d] = p.slice();
        n[d][1] = o;
      } else if (p[2] === s) {
        n[d] = p.slice();
        n[d][2] = o;
      }
    }
    for (var g = 0; g < t.length; g++) {
      if (t[g] === s) {
        t[g] = o;
      }
    }
    return n;
  }
  function tg(e, t, n, r) {
    while (n > r) {
      t = tp(Math.floor(Math.random() * t.length), e, t);
      n--;
    }
    return t;
  }
  function tf(e, t, n) {
    return {
      x: e.x * t + n.x,
      y: e.y * t + n.y
    };
  }
  function tv(e, t, n) {
    return {
      x: (e.x - n.x) / t,
      y: (e.y - n.y) / t
    };
  }
  function ty(e) {
    return {
      x: e[0],
      y: e[1]
    };
  }
  function tm(e, t = 0, n = e.length) {
    var r = Infinity;
    var i = t;
    for (; i < n; i++) {
      var a = e[i];
      if (isFinite(a)) {
        r = Math.min(a, r);
      }
    }
    return r;
  }
  function tb(e, t = 0, n = e.length) {
    var r = -Infinity;
    var i = t;
    for (; i < n; i++) {
      var a = e[i];
      if (isFinite(a)) {
        r = Math.max(a, r);
      }
    }
    return r;
  }
  function tx(e, t = 0, n = e.length) {
    var r = 0;
    var i = 0;
    var a = t;
    for (; a < n; a++) {
      var o = e[a];
      if (isFinite(o)) {
        r += o;
        i++;
      }
    }
    return r / i;
  }
  function tw(e, t = 0, n = e.length) {
    var r = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    var i = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    var a = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
    if (r) {
      e = e.slice(t, n);
    } else {
      if (n < e.length) {
        e.splice(n, e.length - n);
      }
      if (t > 0) {
        e.splice(0, t);
      }
    }
    var o = 0;
    var s = e.length - 1;
    for (; s >= 0; s--) {
      var l = e[s];
      if (a) {
        if (!isFinite(l)) {
          e[s] = -Infinity;
          o++;
        }
      } else {
        e.splice(s, 1);
      }
    }
    if (i) {
      e.sort(function (e, t) {
        return e - t;
      });
    }
    var u = e.length;
    var h = Math.floor(u / 2);
    if (u % 2 != 0) {
      return e[h + 1 + o];
    } else {
      return (e[h - 1 + o] + e[h + o]) / 2;
    }
  }
  function tE(e, t) {
    return Math.atan2(t, e) - Math.PI / 2;
  }
  var tT = Math.log2 || function (e) {
    return Math.log(e) / Math.log(2);
  };
  function tC(e) {
    if (e > 0) {
      return 1;
    } else if (e < 0) {
      return -1;
    } else {
      return 0;
    }
  }
  function tN(e, t) {
    return Math.sqrt(t_(e, t));
  }
  function t_(e, t) {
    var n = t.x - e.x;
    var r = t.y - e.y;
    return n * n + r * r;
  }
  function tD(e) {
    var t = e.length;
    var n = 0;
    var r = 0;
    for (; r < t; r++) {
      n += e[r];
    }
    for (var i = 0; i < t; i++) {
      e[i] = e[i] / n;
    }
    return e;
  }
  function tM(e, t, n, r) {
    return (1 - r) * (1 - r) * e + (1 - r) * 2 * r * t + r * r * n;
  }
  function tA(e, t, n, r) {
    return {
      x: tM(e.x, t.x, n.x, r),
      y: tM(e.y, t.y, n.y, r)
    };
  }
  function tS(e, t, n, r) {
    var i = {
      x: t.x - e.x,
      y: t.y - e.y
    };
    var a = tN(e, t);
    var o = {
      x: i.x / a,
      y: i.y / a
    };
    n = n == null ? 0 : n;
    r = r ?? n * a;
    return {
      x: e.x + o.x * r,
      y: e.y + o.y * r
    };
  }
  function tP(e, t, n) {
    return Math.max(e, Math.min(n, t));
  }
  function tO(e) {
    if (e == null) {
      return {
        x1: Infinity,
        y1: Infinity,
        x2: -Infinity,
        y2: -Infinity,
        w: 0,
        h: 0
      };
    }
    if (e.x1 != null && e.y1 != null) {
      if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1) {
        return {
          x1: e.x1,
          y1: e.y1,
          x2: e.x2,
          y2: e.y2,
          w: e.x2 - e.x1,
          h: e.y2 - e.y1
        };
      }
      if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0) {
        return {
          x1: e.x1,
          y1: e.y1,
          x2: e.x1 + e.w,
          y2: e.y1 + e.h,
          w: e.w,
          h: e.h
        };
      }
    }
  }
  function tI(e) {
    e.x1 = Infinity;
    e.y1 = Infinity;
    e.x2 = -Infinity;
    e.y2 = -Infinity;
    e.w = 0;
    e.h = 0;
  }
  function tL(e, t) {
    e.x1 = Math.min(e.x1, t.x1);
    e.x2 = Math.max(e.x2, t.x2);
    e.w = e.x2 - e.x1;
    e.y1 = Math.min(e.y1, t.y1);
    e.y2 = Math.max(e.y2, t.y2);
    e.h = e.y2 - e.y1;
  }
  function tk(e, t, n) {
    e.x1 = Math.min(e.x1, t);
    e.x2 = Math.max(e.x2, t);
    e.w = e.x2 - e.x1;
    e.y1 = Math.min(e.y1, n);
    e.y2 = Math.max(e.y2, n);
    e.h = e.y2 - e.y1;
  }
  function tR(e, t = 0) {
    e.x1 -= t;
    e.x2 += t;
    e.y1 -= t;
    e.y2 += t;
    e.w = e.x2 - e.x1;
    e.h = e.y2 - e.y1;
    return e;
  }
  function tB(e) {
    var t;
    var n;
    var r;
    var i;
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0];
    if (a.length === 1) {
      t = n = r = i = a[0];
    } else if (a.length === 2) {
      t = r = a[0];
      i = n = a[1];
    } else if (a.length === 4) {
      var o = l(a, 4);
      t = o[0];
      n = o[1];
      r = o[2];
      i = o[3];
    }
    e.x1 -= i;
    e.x2 += n;
    e.y1 -= t;
    e.y2 += r;
    e.w = e.x2 - e.x1;
    e.h = e.y2 - e.y1;
    return e;
  }
  function tF(e, t) {
    e.x1 = t.x1;
    e.y1 = t.y1;
    e.x2 = t.x2;
    e.y2 = t.y2;
    e.w = e.x2 - e.x1;
    e.h = e.y2 - e.y1;
  }
  function tz(e, t) {
    return !(e.x1 > t.x2) && !(t.x1 > e.x2) && !(e.x2 < t.x1) && !(t.x2 < e.x1) && !(e.y2 < t.y1) && !(t.y2 < e.y1) && !(e.y1 > t.y2) && !(t.y1 > e.y2) && true;
  }
  function tV(e, t, n) {
    return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2;
  }
  function tY(e, t) {
    return tV(e, t.x1, t.y1) && tV(e, t.x2, t.y2);
  }
  function tG(e, t, n, r, i, a, o) {
    var s;
    var l;
    var u = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "auto";
    var h = u === "auto" ? nt(i, a) : u;
    var c = i / 2;
    var d = a / 2;
    var p = (h = Math.min(h, c, d)) !== c;
    var g = h !== d;
    if (p) {
      var f = n - c + h - o;
      var v = r - d - o;
      var y = n + c - h + o;
      if ((s = t3(e, t, n, r, f, v, y, v, false)).length > 0) {
        return s;
      }
    }
    if (g) {
      var b = n + c + o;
      var x = r - d + h - o;
      var w = r + d - h + o;
      if ((s = t3(e, t, n, r, b, x, b, w, false)).length > 0) {
        return s;
      }
    }
    if (p) {
      var E = n - c + h - o;
      var T = r + d + o;
      var C = n + c - h + o;
      if ((s = t3(e, t, n, r, E, T, C, T, false)).length > 0) {
        return s;
      }
    }
    if (g) {
      var N = n - c - o;
      var _ = r - d + h - o;
      var D = r + d - h + o;
      if ((s = t3(e, t, n, r, N, _, N, D, false)).length > 0) {
        return s;
      }
    }
    var M = n - c + h;
    var A = r - d + h;
    if ((l = t2(e, t, n, r, M, A, h + o)).length > 0 && l[0] <= M && l[1] <= A) {
      return [l[0], l[1]];
    }
    var S = n + c - h;
    var P = r - d + h;
    if ((l = t2(e, t, n, r, S, P, h + o)).length > 0 && l[0] >= S && l[1] <= P) {
      return [l[0], l[1]];
    }
    var O = n + c - h;
    var I = r + d - h;
    if ((l = t2(e, t, n, r, O, I, h + o)).length > 0 && l[0] >= O && l[1] >= I) {
      return [l[0], l[1]];
    }
    var L = n - c + h;
    var k = r + d - h;
    if ((l = t2(e, t, n, r, L, k, h + o)).length > 0 && l[0] <= L && l[1] >= k) {
      return [l[0], l[1]];
    } else {
      return [];
    }
  }
  function tX(e, t, n, r, i, a, o) {
    var s = Math.min(n, i);
    var l = Math.max(n, i);
    var u = Math.min(r, a);
    var h = Math.max(r, a);
    return s - o <= e && e <= l + o && u - o <= t && t <= h + o;
  }
  function tH(e, t, n, r, i, a, o, s, l) {
    var u = {
      x1: Math.min(n, o, i) - l,
      x2: Math.max(n, o, i) + l,
      y1: Math.min(r, s, a) - l,
      y2: Math.max(r, s, a) + l
    };
    return !(e < u.x1) && !(e > u.x2) && !(t < u.y1) && !(t > u.y2);
  }
  function tU(e, t, n, r) {
    var i = t * t - e * 4 * (n -= r);
    if (i < 0) {
      return [];
    }
    var a = Math.sqrt(i);
    var o = e * 2;
    return [(-t + a) / o, (-t - a) / o];
  }
  function tW(e, t, n, r, i) {
    var a;
    var o;
    var s;
    var l;
    var u;
    var h;
    var c;
    var d;
    if (e === 0) {
      e = 0.00001;
    }
    t /= e;
    n /= e;
    r /= e;
    a = (o = (n * 3 - t * t) / 9) * o * o + (s = (-(r * 27) + t * (n * 9 - t * t * 2)) / 54) * s;
    i[1] = 0;
    c = t / 3;
    if (a > 0) {
      u = (u = s + Math.sqrt(a)) < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
      h = (h = s - Math.sqrt(a)) < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3);
      i[0] = -c + u + h;
      c += (u + h) / 2;
      i[4] = i[2] = -c;
      c = Math.sqrt(3) * (-h + u) / 2;
      i[3] = c;
      i[5] = -c;
      return;
    }
    i[5] = i[3] = 0;
    if (a === 0) {
      d = s < 0 ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3);
      i[0] = -c + d * 2;
      i[4] = i[2] = -(d + c);
      return;
    }
    l = Math.acos(s / Math.sqrt(l = (o = -o) * o * o));
    d = Math.sqrt(o) * 2;
    i[0] = -c + d * Math.cos(l / 3);
    i[2] = -c + d * Math.cos((l + Math.PI * 2) / 3);
    i[4] = -c + d * Math.cos((l + Math.PI * 4) / 3);
  }
  function tj(e, t, n, r, i, a, o, s) {
    var l;
    var u = [];
    tW(+n * n - n * 4 * i + n * 2 * o + i * 4 * i - i * 4 * o + o * o + r * r - r * 4 * a + r * 2 * s + a * 4 * a - a * 4 * s + s * s, n * 9 * i - n * 3 * n - n * 3 * o - i * 6 * i + i * 3 * o + r * 9 * a - r * 3 * r - r * 3 * s - a * 6 * a + a * 3 * s, n * 3 * n - n * 6 * i + n * o - n * e + i * 2 * i + i * 2 * e - o * e + r * 3 * r - r * 6 * a + r * s - r * t + a * 2 * a + a * 2 * t - s * t, +n * i - n * n + n * e - i * e + r * a - r * r + r * t - a * t, u);
    var h = [];
    var c = 0;
    for (; c < 6; c += 2) {
      if (Math.abs(u[c + 1]) < 1e-7 && u[c] >= 0 && u[c] <= 1) {
        h.push(u[c]);
      }
    }
    h.push(1);
    h.push(0);
    var d = -1;
    var p = 0;
    for (; p < h.length; p++) {
      l = Math.pow(Math.pow(1 - h[p], 2) * n + (1 - h[p]) * 2 * h[p] * i + h[p] * h[p] * o - e, 2) + Math.pow(Math.pow(1 - h[p], 2) * r + (1 - h[p]) * 2 * h[p] * a + h[p] * h[p] * s - t, 2);
      if (d >= 0) {
        if (l < d) {
          d = l;
        }
      } else {
        d = l;
      }
    }
    return d;
  }
  function tq(e, t, n, r, i, a) {
    var o = [e - n, t - r];
    var s = [i - n, a - r];
    var l = s[0] * s[0] + s[1] * s[1];
    var u = o[0] * o[0] + o[1] * o[1];
    var h = o[0] * s[0] + o[1] * s[1];
    var c = h * h / l;
    if (h < 0) {
      return u;
    } else if (c > l) {
      return (e - i) * (e - i) + (t - a) * (t - a);
    } else {
      return u - c;
    }
  }
  function tK(e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s = 0;
    var l = 0;
    for (; l < n.length / 2; l++) {
      r = n[l * 2];
      i = n[l * 2 + 1];
      if (l + 1 < n.length / 2) {
        a = n[(l + 1) * 2];
        o = n[(l + 1) * 2 + 1];
      } else {
        a = n[(l + 1 - n.length / 2) * 2];
        o = n[(l + 1 - n.length / 2) * 2 + 1];
      }
      if (r == e && a == e) ;else {
        if ((!(r >= e) || !(e >= a)) && (!(r <= e) || !(e <= a))) {
          continue;
        }
        if ((e - r) / (a - r) * (o - i) + i > t) {
          s++;
        }
      }
    }
    return s % 2 != 0;
  }
  function tZ(e, t, n, r, i, a, o, s, l) {
    var u;
    var h;
    var c = Array(n.length);
    if (s[0] != null) {
      u = Math.atan(s[1] / s[0]);
      if (s[0] < 0) {
        u += Math.PI / 2;
      } else {
        u = -u - Math.PI / 2;
      }
    } else {
      u = s;
    }
    var d = Math.cos(-u);
    var p = Math.sin(-u);
    var g = 0;
    for (; g < c.length / 2; g++) {
      c[g * 2] = a / 2 * (n[g * 2] * d - n[g * 2 + 1] * p);
      c[g * 2 + 1] = o / 2 * (n[g * 2 + 1] * d + n[g * 2] * p);
      c[g * 2] += r;
      c[g * 2 + 1] += i;
    }
    return tK(e, t, l > 0 ? tQ(tJ(c, -l)) : c);
  }
  function t$(e, t, n, r, i, a, o, s) {
    var l = Array(n.length * 2);
    var u = 0;
    for (; u < s.length; u++) {
      var h = s[u];
      l[u * 4 + 0] = h.startX;
      l[u * 4 + 1] = h.startY;
      l[u * 4 + 2] = h.stopX;
      l[u * 4 + 3] = h.stopY;
      if (Math.pow(h.cx - e, 2) + Math.pow(h.cy - t, 2) <= Math.pow(h.radius, 2)) {
        return true;
      }
    }
    return tK(e, t, l);
  }
  function tQ(e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var u = Array(e.length / 2);
    var h = 0;
    for (; h < e.length / 4; h++) {
      t = e[h * 4];
      n = e[h * 4 + 1];
      r = e[h * 4 + 2];
      i = e[h * 4 + 3];
      if (h < e.length / 4 - 1) {
        a = e[(h + 1) * 4];
        o = e[(h + 1) * 4 + 1];
        s = e[(h + 1) * 4 + 2];
        l = e[(h + 1) * 4 + 3];
      } else {
        a = e[0];
        o = e[1];
        s = e[2];
        l = e[3];
      }
      var c = t3(t, n, r, i, a, o, s, l, true);
      u[h * 2] = c[0];
      u[h * 2 + 1] = c[1];
    }
    return u;
  }
  function tJ(e, t) {
    var n;
    var r;
    var i;
    var a;
    var o = Array(e.length * 2);
    var s = 0;
    for (; s < e.length / 2; s++) {
      n = e[s * 2];
      r = e[s * 2 + 1];
      if (s < e.length / 2 - 1) {
        i = e[(s + 1) * 2];
        a = e[(s + 1) * 2 + 1];
      } else {
        i = e[0];
        a = e[1];
      }
      var l = a - r;
      var u = -(i - n);
      var h = Math.sqrt(l * l + u * u);
      var c = l / h;
      var d = u / h;
      o[s * 4] = n + c * t;
      o[s * 4 + 1] = r + d * t;
      o[s * 4 + 2] = i + c * t;
      o[s * 4 + 3] = a + d * t;
    }
    return o;
  }
  function t0(e, t, n, r, i, a) {
    var o = n - e;
    var s = r - t;
    var l = Math.sqrt((o /= i) * o + (s /= a) * s);
    var u = l - 1;
    if (u < 0) {
      return [];
    }
    var h = u / l;
    return [(n - e) * h + e, (r - t) * h + t];
  }
  function t1(e, t, n, r, i, a, o) {
    e -= i;
    t -= a;
    return (e /= n / 2 + o) * e + (t /= r / 2 + o) * t <= 1;
  }
  function t2(e, t, n, r, i, a, o) {
    var s = [n - e, r - t];
    var l = [e - i, t - a];
    var u = s[0] * s[0] + s[1] * s[1];
    var h = (l[0] * s[0] + l[1] * s[1]) * 2;
    var c = h * h - u * 4 * (l[0] * l[0] + l[1] * l[1] - o * o);
    if (c < 0) {
      return [];
    }
    var d = (-h + Math.sqrt(c)) / (u * 2);
    var p = (-h - Math.sqrt(c)) / (u * 2);
    var g = Math.min(d, p);
    var f = Math.max(d, p);
    var v = [];
    if (g >= 0 && g <= 1) {
      v.push(g);
    }
    if (f >= 0 && f <= 1) {
      v.push(f);
    }
    if (v.length === 0) {
      return [];
    }
    var y = v[0] * s[0] + e;
    var b = v[0] * s[1] + t;
    if (v.length > 1) {
      if (v[0] == v[1]) {
        return [y, b];
      } else {
        return [y, b, v[1] * s[0] + e, v[1] * s[1] + t];
      }
    } else {
      return [y, b];
    }
  }
  function t5(e, t, n) {
    if (t <= e && e <= n || n <= e && e <= t) {
      return e;
    } else if (e <= t && t <= n || n <= t && t <= e) {
      return t;
    } else {
      return n;
    }
  }
  function t3(e, t, n, r, i, a, o, s, l) {
    var u = e - i;
    var h = n - e;
    var c = o - i;
    var d = t - a;
    var p = r - t;
    var g = s - a;
    var f = c * d - g * u;
    var v = h * d - p * u;
    var y = g * h - c * p;
    if (y !== 0) {
      var b = f / y;
      var x = v / y;
      if (b >= -0.001 && b <= 1.001 && x >= -0.001 && x <= 1.001) {
        return [e + b * h, t + b * p];
      } else if (l) {
        return [e + b * h, t + b * p];
      } else {
        return [];
      }
    }
    if (f !== 0 && v !== 0) {
      return [];
    } else if (t5(e, n, o) === o) {
      return [o, s];
    } else if (t5(e, n, i) === i) {
      return [i, a];
    } else if (t5(i, o, n) === n) {
      return [n, r];
    } else {
      return [];
    }
  }
  function t4(e, t, n, r, i, a, o, s) {
    var l;
    var u;
    var h;
    var c;
    var d;
    var p;
    var g = [];
    var f = Array(n.length);
    var v = true;
    if (a == null) {
      v = false;
    }
    if (v) {
      for (var y = 0; y < f.length / 2; y++) {
        f[y * 2] = n[y * 2] * a + r;
        f[y * 2 + 1] = n[y * 2 + 1] * o + i;
      }
      u = s > 0 ? tQ(tJ(f, -s)) : f;
    } else {
      u = n;
    }
    for (var b = 0; b < u.length / 2; b++) {
      h = u[b * 2];
      c = u[b * 2 + 1];
      if (b < u.length / 2 - 1) {
        d = u[(b + 1) * 2];
        p = u[(b + 1) * 2 + 1];
      } else {
        d = u[0];
        p = u[1];
      }
      if ((l = t3(e, t, r, i, h, c, d, p)).length !== 0) {
        g.push(l[0], l[1]);
      }
    }
    return g;
  }
  function t9(e, t, n, r, i, a, o, s, l) {
    var u;
    var h = [];
    var c = Array(n.length * 2);
    l.forEach(function (n, a) {
      if (a === 0) {
        c[c.length - 2] = n.startX;
        c[c.length - 1] = n.startY;
      } else {
        c[a * 4 - 2] = n.startX;
        c[a * 4 - 1] = n.startY;
      }
      c[a * 4] = n.stopX;
      c[a * 4 + 1] = n.stopY;
      if ((u = t2(e, t, r, i, n.cx, n.cy, n.radius)).length !== 0) {
        h.push(u[0], u[1]);
      }
    });
    for (var d = 0; d < c.length / 4; d++) {
      if ((u = t3(e, t, r, i, c[d * 4], c[d * 4 + 1], c[d * 4 + 2], c[d * 4 + 3], false)).length !== 0) {
        h.push(u[0], u[1]);
      }
    }
    if (h.length > 2) {
      var p = [h[0], h[1]];
      var g = Math.pow(p[0] - e, 2) + Math.pow(p[1] - t, 2);
      var f = 1;
      for (; f < h.length / 2; f++) {
        var v = Math.pow(h[f * 2] - e, 2) + Math.pow(h[f * 2 + 1] - t, 2);
        if (v <= g) {
          p[0] = h[f * 2];
          p[1] = h[f * 2 + 1];
          g = v;
        }
      }
      return p;
    }
    return h;
  }
  function t6(e, t, n) {
    var r = [e[0] - t[0], e[1] - t[1]];
    var i = Math.sqrt(r[0] * r[0] + r[1] * r[1]);
    var a = (i - n) / i;
    if (a < 0) {
      a = 0.00001;
    }
    return [t[0] + a * r[0], t[1] + a * r[1]];
  }
  function t8(e, t) {
    var n = ne(e, t);
    return t7(n);
  }
  function t7(e) {
    var t;
    var n;
    var r = e.length / 2;
    var i = Infinity;
    var a = Infinity;
    var o = -Infinity;
    var s = -Infinity;
    var l = 0;
    for (; l < r; l++) {
      t = e[l * 2];
      n = e[l * 2 + 1];
      i = Math.min(i, t);
      o = Math.max(o, t);
      a = Math.min(a, n);
      s = Math.max(s, n);
    }
    var u = 2 / (o - i);
    var h = 2 / (s - a);
    var c = 0;
    for (; c < r; c++) {
      t = e[c * 2] = e[c * 2] * u;
      n = e[c * 2 + 1] = e[c * 2 + 1] * h;
      i = Math.min(i, t);
      o = Math.max(o, t);
      a = Math.min(a, n);
      s = Math.max(s, n);
    }
    if (a < -1) {
      for (var d = 0; d < r; d++) {
        n = e[d * 2 + 1] = e[d * 2 + 1] + (-1 - a);
      }
    }
    return e;
  }
  function ne(e, t) {
    var n;
    var r = 1 / e * 2 * Math.PI;
    var i = e % 2 == 0 ? Math.PI / 2 + r / 2 : Math.PI / 2;
    i += t;
    var a = Array(e * 2);
    var o = 0;
    for (; o < e; o++) {
      n = o * r + i;
      a[o * 2] = Math.cos(n);
      a[o * 2 + 1] = Math.sin(-n);
    }
    return a;
  }
  function nt(e, t) {
    return Math.min(e / 4, t / 4, 8);
  }
  function nn(e, t) {
    return Math.min(e / 10, t / 10, 8);
  }
  function nr() {
    return 8;
  }
  function ni(e, t) {
    return {
      heightOffset: Math.min(15, t * 0.05),
      widthOffset: Math.min(100, e * 0.25),
      ctrlPtOffsetPct: 0.05
    };
  }
  var na = e3({
    dampingFactor: 0.8,
    precision: 0.000001,
    iterations: 200,
    weight: function (e) {
      return 1;
    }
  });
  var no = e3({
    root: null,
    weight: function (e) {
      return 1;
    },
    directed: false,
    alpha: 0
  });
  var ns = {
    degreeCentralityNormalized: function (e) {
      e = no(e);
      var t = this.cy();
      var n = this.nodes();
      var r = n.length;
      if (e.directed) {
        var i = {};
        var a = {};
        var o = 0;
        var s = 0;
        var l = 0;
        for (; l < r; l++) {
          var u = n[l];
          var h = u.id();
          e.root = u;
          var c = this.degreeCentrality(e);
          if (o < c.indegree) {
            o = c.indegree;
          }
          if (s < c.outdegree) {
            s = c.outdegree;
          }
          i[h] = c.indegree;
          a[h] = c.outdegree;
        }
        return {
          indegree: function (e) {
            if (o == 0) {
              return 0;
            } else {
              if (_(e)) {
                e = t.filter(e);
              }
              return i[e.id()] / o;
            }
          },
          outdegree: function (e) {
            if (s === 0) {
              return 0;
            } else {
              if (_(e)) {
                e = t.filter(e);
              }
              return a[e.id()] / s;
            }
          }
        };
      }
      var d = {};
      var p = 0;
      var g = 0;
      for (; g < r; g++) {
        var f = n[g];
        e.root = f;
        var v = this.degreeCentrality(e);
        if (p < v.degree) {
          p = v.degree;
        }
        d[f.id()] = v.degree;
      }
      return {
        degree: function (e) {
          if (p === 0) {
            return 0;
          } else {
            if (_(e)) {
              e = t.filter(e);
            }
            return d[e.id()] / p;
          }
        }
      };
    },
    degreeCentrality: function (e) {
      e = no(e);
      var t = this.cy();
      var n = this;
      var r = e;
      var i = r.root;
      var a = r.weight;
      var o = r.directed;
      var s = r.alpha;
      i = t.collection(i)[0];
      if (o) {
        var l = i.connectedEdges();
        var u = l.filter(function (e) {
          return e.target().same(i) && n.has(e);
        });
        var h = l.filter(function (e) {
          return e.source().same(i) && n.has(e);
        });
        var c = u.length;
        var d = h.length;
        var p = 0;
        var g = 0;
        var f = 0;
        for (; f < u.length; f++) {
          p += a(u[f]);
        }
        for (var v = 0; v < h.length; v++) {
          g += a(h[v]);
        }
        return {
          indegree: Math.pow(c, 1 - s) * Math.pow(p, s),
          outdegree: Math.pow(d, 1 - s) * Math.pow(g, s)
        };
      }
      var y = i.connectedEdges().intersection(n);
      var b = y.length;
      var x = 0;
      var w = 0;
      for (; w < y.length; w++) {
        x += a(y[w]);
      }
      return {
        degree: Math.pow(b, 1 - s) * Math.pow(x, s)
      };
    }
  };
  ns.dc = ns.degreeCentrality;
  ns.dcn = ns.degreeCentralityNormalised = ns.degreeCentralityNormalized;
  var nl = e3({
    harmonic: true,
    weight: function () {
      return 1;
    },
    directed: false,
    root: null
  });
  var nu = {
    closenessCentralityNormalized: function (e) {
      var t = nl(e);
      var n = t.harmonic;
      var r = t.weight;
      var i = t.directed;
      var a = this.cy();
      var o = {};
      var s = 0;
      var l = this.nodes();
      var u = this.floydWarshall({
        weight: r,
        directed: i
      });
      var h = 0;
      for (; h < l.length; h++) {
        var c = 0;
        var d = l[h];
        var p = 0;
        for (; p < l.length; p++) {
          if (h !== p) {
            var g = u.distance(d, l[p]);
            if (n) {
              c += 1 / g;
            } else {
              c += g;
            }
          }
        }
        if (!n) {
          c = 1 / c;
        }
        if (s < c) {
          s = c;
        }
        o[d.id()] = c;
      }
      return {
        closeness: function (e) {
          if (s == 0) {
            return 0;
          } else {
            return o[e = _(e) ? a.filter(e)[0].id() : e.id()] / s;
          }
        }
      };
    },
    closenessCentrality: function (e) {
      var t = nl(e);
      var n = t.root;
      var r = t.weight;
      var i = t.directed;
      var a = t.harmonic;
      n = this.filter(n)[0];
      var o = this.dijkstra({
        root: n,
        weight: r,
        directed: i
      });
      var s = 0;
      var l = this.nodes();
      var u = 0;
      for (; u < l.length; u++) {
        var h = l[u];
        if (!h.same(n)) {
          var c = o.distanceTo(h);
          if (a) {
            s += 1 / c;
          } else {
            s += c;
          }
        }
      }
      if (a) {
        return s;
      } else {
        return 1 / s;
      }
    }
  };
  nu.cc = nu.closenessCentrality;
  nu.ccn = nu.closenessCentralityNormalised = nu.closenessCentralityNormalized;
  var nh = e3({
    weight: null,
    directed: false
  });
  var nc = {
    betweennessCentrality: function (e) {
      var t = nh(e);
      var n = t.directed;
      var r = t.weight;
      var i = r != null;
      var a = this.cy();
      var o = this.nodes();
      var s = {};
      var l = {};
      var u = 0;
      var h = {
        set: function (e, t) {
          l[e] = t;
          if (t > u) {
            u = t;
          }
        },
        get: function (e) {
          return l[e];
        }
      };
      var c = 0;
      for (; c < o.length; c++) {
        var d = o[c];
        var p = d.id();
        if (n) {
          s[p] = d.outgoers().nodes();
        } else {
          s[p] = d.openNeighborhood().nodes();
        }
        h.set(p, 0);
      }
      for (var g = 0; g < o.length; g++) {
        (function (e) {
          var t = o[e].id();
          var n = [];
          var l = {};
          var u = {};
          var c = {};
          var d = new ts(function (e, t) {
            return c[e] - c[t];
          });
          var p = 0;
          for (; p < o.length; p++) {
            var g = o[p].id();
            l[g] = [];
            u[g] = 0;
            c[g] = Infinity;
          }
          u[t] = 1;
          c[t] = 0;
          d.push(t);
          while (!d.empty()) {
            var f = d.pop();
            n.push(f);
            if (i) {
              for (var v = 0; v < s[f].length; v++) {
                var y = s[f][v];
                var b = a.getElementById(f);
                var x = undefined;
                var w = r(b.edgesTo(y).length > 0 ? b.edgesTo(y)[0] : y.edgesTo(b)[0]);
                if (c[y = y.id()] > c[f] + w) {
                  c[y] = c[f] + w;
                  if (d.nodes.indexOf(y) < 0) {
                    d.push(y);
                  } else {
                    d.updateItem(y);
                  }
                  u[y] = 0;
                  l[y] = [];
                }
                if (c[y] == c[f] + w) {
                  u[y] = u[y] + u[f];
                  l[y].push(f);
                }
              }
            } else {
              for (var E = 0; E < s[f].length; E++) {
                var T = s[f][E].id();
                if (c[T] == Infinity) {
                  d.push(T);
                  c[T] = c[f] + 1;
                }
                if (c[T] == c[f] + 1) {
                  u[T] = u[T] + u[f];
                  l[T].push(f);
                }
              }
            }
          }
          var C = {};
          var N = 0;
          for (; N < o.length; N++) {
            C[o[N].id()] = 0;
          }
          while (n.length > 0) {
            var _ = n.pop();
            var D = 0;
            for (; D < l[_].length; D++) {
              var M = l[_][D];
              C[M] = C[M] + u[M] / u[_] * (1 + C[_]);
            }
            if (_ != o[e].id()) {
              h.set(_, h.get(_) + C[_]);
            }
          }
        })(g);
      }
      var f = {
        betweenness: function (e) {
          var t = a.collection(e).id();
          return h.get(t);
        },
        betweennessNormalized: function (e) {
          if (u == 0) {
            return 0;
          }
          var t = a.collection(e).id();
          return h.get(t) / u;
        }
      };
      f.betweennessNormalised = f.betweennessNormalized;
      return f;
    }
  };
  nc.bc = nc.betweennessCentrality;
  var nd = e3({
    expandFactor: 2,
    inflateFactor: 2,
    multFactor: 1,
    maxIterations: 20,
    attributes: [function (e) {
      return 1;
    }]
  });
  function np(e, t) {
    var n = 0;
    var r = 0;
    for (; r < t.length; r++) {
      n += t[r](e);
    }
    return n;
  }
  function ng(e, t, n) {
    for (var r = 0; r < t; r++) {
      e[r * t + r] = n;
    }
  }
  function nf(e, t) {
    var n;
    var r = 0;
    for (; r < t; r++) {
      n = 0;
      for (var i = 0; i < t; i++) {
        n += e[i * t + r];
      }
      for (var a = 0; a < t; a++) {
        e[a * t + r] = e[a * t + r] / n;
      }
    }
  }
  function nv(e, t, n) {
    var r = Array(n * n);
    var i = 0;
    for (; i < n; i++) {
      for (var a = 0; a < n; a++) {
        r[i * n + a] = 0;
      }
      for (var o = 0; o < n; o++) {
        for (var s = 0; s < n; s++) {
          r[i * n + s] += e[i * n + o] * t[o * n + s];
        }
      }
    }
    return r;
  }
  function ny(e, t, n) {
    var r = e.slice(0);
    var i = 1;
    for (; i < n; i++) {
      e = nv(e, r, t);
    }
    return e;
  }
  function nm(e, t, n) {
    var r = Array(t * t);
    var i = 0;
    for (; i < t * t; i++) {
      r[i] = Math.pow(e[i], n);
    }
    nf(r, t);
    return r;
  }
  function nb(e, t, n, r) {
    for (var i = 0; i < n; i++) {
      if (Math.round(e[i] * Math.pow(10, r)) / Math.pow(10, r) != Math.round(t[i] * Math.pow(10, r)) / Math.pow(10, r)) {
        return false;
      }
    }
    return true;
  }
  function nx(e, t, n, r) {
    var i = [];
    var a = 0;
    for (; a < t; a++) {
      var o = [];
      var s = 0;
      for (; s < t; s++) {
        if (Math.round(e[a * t + s] * 1000) / 1000 > 0) {
          o.push(n[s]);
        }
      }
      if (o.length !== 0) {
        i.push(r.collection(o));
      }
    }
    return i;
  }
  function nw(e, t) {
    for (var n = 0; n < e.length; n++) {
      if (!t[n] || e[n].id() !== t[n].id()) {
        return false;
      }
    }
    return true;
  }
  function nE(e) {
    for (var t = 0; t < e.length; t++) {
      for (var n = 0; n < e.length; n++) {
        if (t != n && nw(e[t], e[n])) {
          e.splice(n, 1);
        }
      }
    }
    return e;
  }
  function nT(e) {
    var t = this.nodes();
    var n = this.edges();
    var r = this.cy();
    var i = nd(e);
    var a = {};
    var o = 0;
    for (; o < t.length; o++) {
      a[t[o].id()] = o;
    }
    var s;
    var l = t.length;
    var u = l * l;
    var h = Array(u);
    var c = 0;
    for (; c < u; c++) {
      h[c] = 0;
    }
    for (var d = 0; d < n.length; d++) {
      var p = n[d];
      var g = a[p.source().id()];
      var f = a[p.target().id()];
      var v = np(p, i.attributes);
      h[g * l + f] += v;
      h[f * l + g] += v;
    }
    ng(h, l, i.multFactor);
    nf(h, l);
    var y = true;
    var b = 0;
    while (y && b < i.maxIterations) {
      y = false;
      if (!nb(h = nm(s = ny(h, l, i.expandFactor), l, i.inflateFactor), s, u, 4)) {
        y = true;
      }
      b++;
    }
    var x = nx(h, l, t, r);
    return nE(x);
  }
  function nC(e) {
    return e;
  }
  function nN(e, t) {
    return Math.abs(t - e);
  }
  function n_(e, t, n) {
    return e + nN(t, n);
  }
  function nD(e, t, n) {
    return e + Math.pow(n - t, 2);
  }
  function nM(e) {
    return Math.sqrt(e);
  }
  function nA(e, t, n) {
    return Math.max(e, nN(t, n));
  }
  function nS(e, t, n, r, i, a = nC) {
    var o = r;
    var s = 0;
    for (; s < e; s++) {
      o = i(o, t(s), n(s));
    }
    return a(o);
  }
  var nP = {
    euclidean: function (e, t, n) {
      if (e >= 2) {
        return nS(e, t, n, 0, nD, nM);
      } else {
        return nS(e, t, n, 0, n_);
      }
    },
    squaredEuclidean: function (e, t, n) {
      return nS(e, t, n, 0, nD);
    },
    manhattan: function (e, t, n) {
      return nS(e, t, n, 0, n_);
    },
    max: function (e, t, n) {
      return nS(e, t, n, -Infinity, nA);
    }
  };
  function nO(e, t, n, r, i, a) {
    var o;
    o = D(e) ? e : nP[e] || nP.euclidean;
    if (t === 0 && D(e)) {
      return o(i, a);
    } else {
      return o(t, n, r, i, a);
    }
  }
  nP["squared-euclidean"] = nP.squaredEuclidean;
  nP.squaredeuclidean = nP.squaredEuclidean;
  var nI = e3({
    k: 2,
    m: 2,
    sensitivityThreshold: 0.0001,
    distance: "euclidean",
    maxIterations: 10,
    attributes: [],
    testMode: false,
    testCentroids: null
  });
  function nL(e) {
    return nI(e);
  }
  function nk(e, t, n, r, i) {
    var a = i !== "kMedoids" ? function (e) {
      return n[e];
    } : function (e) {
      return r[e](n);
    };
    return nO(e, r.length, a, function (e) {
      return r[e](t);
    }, n, t);
  }
  function nR(e, t, n) {
    var r = n.length;
    var i = Array(r);
    var a = Array(r);
    var o = Array(t);
    var s = null;
    var l = 0;
    for (; l < r; l++) {
      i[l] = e.min(n[l]).value;
      a[l] = e.max(n[l]).value;
    }
    for (var u = 0; u < t; u++) {
      s = [];
      for (var h = 0; h < r; h++) {
        s[h] = Math.random() * (a[h] - i[h]) + i[h];
      }
      o[u] = s;
    }
    return o;
  }
  function nB(e, t, n, r, i) {
    var a = Infinity;
    var o = 0;
    var s = 0;
    for (; s < t.length; s++) {
      var l = nk(n, e, t[s], r, i);
      if (l < a) {
        a = l;
        o = s;
      }
    }
    return o;
  }
  function nF(e, t, n) {
    var r = [];
    var i = null;
    var a = 0;
    for (; a < t.length; a++) {
      if (n[(i = t[a]).id()] === e) {
        r.push(i);
      }
    }
    return r;
  }
  function nz(e, t, n) {
    for (var r = 0; r < e.length; r++) {
      for (var i = 0; i < e[r].length; i++) {
        if (Math.abs(e[r][i] - t[r][i]) > n) {
          return false;
        }
      }
    }
    return true;
  }
  function nV(e, t, n) {
    for (var r = 0; r < n; r++) {
      if (e === t[r]) {
        return true;
      }
    }
    return false;
  }
  function nY(e, t) {
    var n = Array(t);
    if (e.length < 50) {
      for (var r = 0; r < t; r++) {
        for (var i = e[Math.floor(Math.random() * e.length)]; nV(i, n, r);) {
          i = e[Math.floor(Math.random() * e.length)];
        }
        n[r] = i;
      }
    } else {
      for (var a = 0; a < t; a++) {
        n[a] = e[Math.floor(Math.random() * e.length)];
      }
    }
    return n;
  }
  function nG(e, t, n) {
    var r = 0;
    var i = 0;
    for (; i < t.length; i++) {
      r += nk("manhattan", t[i], e, n, "kMedoids");
    }
    return r;
  }
  function nX(e, t, n, r, i) {
    var a;
    var o;
    var s = 0;
    for (; s < t.length; s++) {
      for (var l = 0; l < e.length; l++) {
        r[s][l] = Math.pow(n[s][l], i.m);
      }
    }
    for (var u = 0; u < e.length; u++) {
      for (var h = 0; h < i.attributes.length; h++) {
        a = 0;
        o = 0;
        for (var c = 0; c < t.length; c++) {
          a += r[c][u] * i.attributes[h](t[c]);
          o += r[c][u];
        }
        e[u][h] = a / o;
      }
    }
  }
  function nH(e, t, n, r, i) {
    var a;
    var o = 0;
    for (; o < e.length; o++) {
      t[o] = e[o].slice();
    }
    var s = 2 / (i.m - 1);
    var l = 0;
    for (; l < n.length; l++) {
      for (var u = 0; u < r.length; u++) {
        a = 0;
        for (var h = 0; h < n.length; h++) {
          a += Math.pow(nk(i.distance, r[u], n[l], i.attributes, "cmeans") / nk(i.distance, r[u], n[h], i.attributes, "cmeans"), s);
        }
        e[u][l] = 1 / a;
      }
    }
  }
  function nU(e, t, n, r) {
    var i;
    var a;
    var o = Array(n.k);
    var s = 0;
    for (; s < o.length; s++) {
      o[s] = [];
    }
    for (var l = 0; l < t.length; l++) {
      i = -Infinity;
      a = -1;
      for (var u = 0; u < t[0].length; u++) {
        if (t[l][u] > i) {
          i = t[l][u];
          a = u;
        }
      }
      o[a].push(e[l]);
    }
    for (var h = 0; h < o.length; h++) {
      o[h] = r.collection(o[h]);
    }
    return o;
  }
  function nW(e) {
    var t;
    var n;
    var r;
    var i;
    var a = this.cy();
    var o = this.nodes();
    var s = nL(e);
    r = Array(o.length);
    for (var l = 0; l < o.length; l++) {
      r[l] = Array(s.k);
    }
    n = Array(o.length);
    for (var u = 0; u < o.length; u++) {
      n[u] = Array(s.k);
    }
    for (var h = 0; h < o.length; h++) {
      var c = 0;
      var d = 0;
      for (; d < s.k; d++) {
        n[h][d] = Math.random();
        c += n[h][d];
      }
      for (var p = 0; p < s.k; p++) {
        n[h][p] = n[h][p] / c;
      }
    }
    t = Array(s.k);
    for (var g = 0; g < s.k; g++) {
      t[g] = Array(s.attributes.length);
    }
    i = Array(o.length);
    for (var f = 0; f < o.length; f++) {
      i[f] = Array(s.k);
    }
    var v = true;
    var y = 0;
    while (v && y < s.maxIterations) {
      v = false;
      nX(t, o, n, i, s);
      nH(n, r, t, o, s);
      if (!nz(n, r, s.sensitivityThreshold)) {
        v = true;
      }
      y++;
    }
    return {
      clusters: nU(o, n, s, a),
      degreeOfMembership: n
    };
  }
  var nj = e3({
    distance: "euclidean",
    linkage: "min",
    mode: "threshold",
    threshold: Infinity,
    addDendrogram: false,
    dendrogramDepth: 0,
    attributes: []
  });
  var nq = {
    single: "min",
    complete: "max"
  };
  function nK(e) {
    var t = nj(e);
    var n = nq[t.linkage];
    if (n != null) {
      t.linkage = n;
    }
    return t;
  }
  function nZ(e, t, n, r, i) {
    var a;
    var o;
    var s = 0;
    var l = Infinity;
    var u = i.attributes;
    function h(e, t) {
      return nO(i.distance, u.length, function (t) {
        return u[t](e);
      }, function (e) {
        return u[e](t);
      }, e, t);
    }
    var c = 0;
    for (; c < e.length; c++) {
      var d = e[c].key;
      var p = n[d][r[d]];
      if (p < l) {
        s = d;
        l = p;
      }
    }
    if (i.mode === "threshold" && l >= i.threshold || i.mode === "dendrogram" && e.length === 1) {
      return false;
    }
    var g = t[s];
    var f = t[r[s]];
    o = i.mode === "dendrogram" ? {
      left: g,
      right: f,
      key: g.key
    } : {
      value: g.value.concat(f.value),
      key: g.key
    };
    e[g.index] = o;
    e.splice(f.index, 1);
    t[g.key] = o;
    for (var v = 0; v < e.length; v++) {
      var y = e[v];
      if (g.key === y.key) {
        a = Infinity;
      } else if (i.linkage === "min") {
        a = n[g.key][y.key];
        if (n[g.key][y.key] > n[f.key][y.key]) {
          a = n[f.key][y.key];
        }
      } else if (i.linkage === "max") {
        a = n[g.key][y.key];
        if (n[g.key][y.key] < n[f.key][y.key]) {
          a = n[f.key][y.key];
        }
      } else {
        a = i.linkage === "mean" ? (n[g.key][y.key] * g.size + n[f.key][y.key] * f.size) / (g.size + f.size) : i.mode === "dendrogram" ? h(y.value, g.value) : h(y.value[0], g.value[0]);
      }
      n[g.key][y.key] = n[y.key][g.key] = a;
    }
    for (var b = 0; b < e.length; b++) {
      var x = e[b].key;
      if (r[x] === g.key || r[x] === f.key) {
        var w = x;
        var E = 0;
        for (; E < e.length; E++) {
          var T = e[E].key;
          if (n[x][T] < n[x][w]) {
            w = T;
          }
        }
        r[x] = w;
      }
      e[b].index = b;
    }
    g.key = f.key = g.index = f.index = null;
    return true;
  }
  var n$ = function e(t, n, r) {
    if (t) {
      if (t.value) {
        n.push(t.value);
      } else {
        if (t.left) {
          e(t.left, n);
        }
        if (t.right) {
          e(t.right, n);
        }
      }
    }
  };
  var nQ = function e(t, n) {
    if (!t) {
      return "";
    }
    if (t.left && t.right) {
      var r = e(t.left, n);
      var i = e(t.right, n);
      var a = n.add({
        group: "nodes",
        data: {
          id: r + "," + i
        }
      });
      n.add({
        group: "edges",
        data: {
          source: r,
          target: a.id()
        }
      });
      n.add({
        group: "edges",
        data: {
          source: i,
          target: a.id()
        }
      });
      return a.id();
    }
    if (t.value) {
      return t.value.id();
    }
  };
  var nJ = function e(t, n, r) {
    if (!t) {
      return [];
    }
    var i = [];
    var a = [];
    var o = [];
    if (n === 0) {
      if (t.left) {
        n$(t.left, i);
      }
      if (t.right) {
        n$(t.right, a);
      }
      o = i.concat(a);
      return [r.collection(o)];
    } else if (n === 1) {
      if (t.value) {
        return [r.collection(t.value)];
      } else {
        if (t.left) {
          n$(t.left, i);
        }
        if (t.right) {
          n$(t.right, a);
        }
        return [r.collection(i), r.collection(a)];
      }
    } else if (t.value) {
      return [r.collection(t.value)];
    } else {
      if (t.left) {
        i = e(t.left, n - 1, r);
      }
      if (t.right) {
        a = e(t.right, n - 1, r);
      }
      return i.concat(a);
    }
  };
  function n0(e) {
    var t;
    var n = this.cy();
    var r = this.nodes();
    var i = nK(e);
    var a = i.attributes;
    function o(e, t) {
      return nO(i.distance, a.length, function (t) {
        return a[t](e);
      }, function (e) {
        return a[e](t);
      }, e, t);
    }
    var s = [];
    var l = [];
    var u = [];
    var h = [];
    var c = 0;
    for (; c < r.length; c++) {
      var d = {
        value: i.mode === "dendrogram" ? r[c] : [r[c]],
        key: c,
        index: c
      };
      s[c] = d;
      h[c] = d;
      l[c] = [];
      u[c] = 0;
    }
    for (var p = 0; p < s.length; p++) {
      for (var g = 0; g <= p; g++) {
        var f = undefined;
        f = i.mode === "dendrogram" ? p === g ? Infinity : o(s[p].value, s[g].value) : p === g ? Infinity : o(s[p].value[0], s[g].value[0]);
        l[p][g] = f;
        l[g][p] = f;
        if (f < l[p][u[p]]) {
          u[p] = g;
        }
      }
    }
    for (var v = nZ(s, h, l, u, i); v;) {
      v = nZ(s, h, l, u, i);
    }
    if (i.mode === "dendrogram") {
      t = nJ(s[0], i.dendrogramDepth, n);
      if (i.addDendrogram) {
        nQ(s[0], n);
      }
    } else {
      t = Array(s.length);
      s.forEach(function (e, r) {
        e.key = e.index = null;
        t[r] = n.collection(e.value);
      });
    }
    return t;
  }
  var n1 = e3({
    distance: "euclidean",
    preference: "median",
    damping: 0.8,
    maxIterations: 1000,
    minIterations: 100,
    attributes: []
  });
  function n2(e) {
    var t = e.damping;
    var n = e.preference;
    if (!(t >= 0.5) || !(t < 1)) {
      e$(`Damping must range on [0.5, 1).  Got: ${t}`);
    }
    var r = ["median", "mean", "min", "max"];
    if (!r.some(function (e) {
      return e === n;
    }) && !S(n)) {
      e$(`Preference must be one of [${r.map(function (e) {
        return `'${e}'`;
      }).join(", ")}] or a number.  Got: ${n}`);
    }
    return n1(e);
  }
  function n5(e, t, n, r) {
    function i(e, t) {
      return r[t](e);
    }
    return -nO(e, r.length, function (e) {
      return i(t, e);
    }, function (e) {
      return i(n, e);
    }, t, n);
  }
  function n3(e, t) {
    var n = null;
    if (t === "median") {
      return tw(e);
    } else if (t === "mean") {
      return tx(e);
    } else if (t === "min") {
      return tm(e);
    } else if (t === "max") {
      return tb(e);
    } else {
      return t;
    }
  }
  function n4(e, t, n) {
    var r = [];
    var i = 0;
    for (; i < e; i++) {
      if (t[i * e + i] + n[i * e + i] > 0) {
        r.push(i);
      }
    }
    return r;
  }
  function n9(e, t, n) {
    var r = [];
    var i = 0;
    for (; i < e; i++) {
      var a = -1;
      var o = -Infinity;
      var s = 0;
      for (; s < n.length; s++) {
        var l = n[s];
        if (t[i * e + l] > o) {
          a = l;
          o = t[i * e + l];
        }
      }
      if (a > 0) {
        r.push(a);
      }
    }
    for (var u = 0; u < n.length; u++) {
      r[n[u]] = n[u];
    }
    return r;
  }
  function n6(e, t, n) {
    var r = n9(e, t, n);
    var i = 0;
    for (; i < n.length; i++) {
      var a = [];
      var o = 0;
      for (; o < r.length; o++) {
        if (r[o] === n[i]) {
          a.push(o);
        }
      }
      var s = -1;
      var l = -Infinity;
      var u = 0;
      for (; u < a.length; u++) {
        var h = 0;
        var c = 0;
        for (; c < a.length; c++) {
          h += t[a[c] * e + a[u]];
        }
        if (h > l) {
          s = u;
          l = h;
        }
      }
      n[i] = a[s];
    }
    return n9(e, t, n);
  }
  function n8(e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l = this.cy();
    var u = this.nodes();
    var h = n2(e);
    var c = {};
    var d = 0;
    for (; d < u.length; d++) {
      c[u[d].id()] = d;
    }
    r = Array(n = (t = u.length) * t);
    for (var p = 0; p < n; p++) {
      r[p] = -Infinity;
    }
    for (var g = 0; g < t; g++) {
      for (var f = 0; f < t; f++) {
        if (g !== f) {
          r[g * t + f] = n5(h.distance, u[g], u[f], h.attributes);
        }
      }
    }
    i = n3(r, h.preference);
    for (var v = 0; v < t; v++) {
      r[v * t + v] = i;
    }
    a = Array(n);
    for (var y = 0; y < n; y++) {
      a[y] = 0;
    }
    o = Array(n);
    for (var b = 0; b < n; b++) {
      o[b] = 0;
    }
    var x = Array(t);
    var w = Array(t);
    var E = Array(t);
    var T = 0;
    for (; T < t; T++) {
      x[T] = 0;
      w[T] = 0;
      E[T] = 0;
    }
    var C = Array(t * h.minIterations);
    var N = 0;
    for (; N < C.length; N++) {
      C[N] = 0;
    }
    for (s = 0; s < h.maxIterations; s++) {
      for (var _ = 0; _ < t; _++) {
        var D = -Infinity;
        var M = -Infinity;
        var A = -1;
        var S = 0;
        var P = 0;
        for (; P < t; P++) {
          x[P] = a[_ * t + P];
          if ((S = o[_ * t + P] + r[_ * t + P]) >= D) {
            M = D;
            D = S;
            A = P;
          } else if (S > M) {
            M = S;
          }
        }
        for (var O = 0; O < t; O++) {
          a[_ * t + O] = (1 - h.damping) * (r[_ * t + O] - D) + h.damping * x[O];
        }
        a[_ * t + A] = (1 - h.damping) * (r[_ * t + A] - M) + h.damping * x[A];
      }
      for (var I = 0; I < t; I++) {
        var L = 0;
        var k = 0;
        for (; k < t; k++) {
          x[k] = o[k * t + I];
          w[k] = Math.max(0, a[k * t + I]);
          L += w[k];
        }
        L -= w[I];
        w[I] = a[I * t + I];
        L += w[I];
        for (var R = 0; R < t; R++) {
          o[R * t + I] = (1 - h.damping) * Math.min(0, L - w[R]) + h.damping * x[R];
        }
        o[I * t + I] = (1 - h.damping) * (L - w[I]) + h.damping * x[I];
      }
      var B = 0;
      var F = 0;
      for (; F < t; F++) {
        var z = +(o[F * t + F] + a[F * t + F] > 0);
        C[s % h.minIterations * t + F] = z;
        B += z;
      }
      if (B > 0 && (s >= h.minIterations - 1 || s == h.maxIterations - 1)) {
        var V = 0;
        var Y = 0;
        for (; Y < t; Y++) {
          E[Y] = 0;
          for (var G = 0; G < h.minIterations; G++) {
            E[Y] += C[G * t + Y];
          }
          if (E[Y] === 0 || E[Y] === h.minIterations) {
            V++;
          }
        }
        if (V === t) {
          break;
        }
      }
    }
    var X = n4(t, a, o);
    var H = n6(t, r, X);
    var U = {};
    var W = 0;
    for (; W < X.length; W++) {
      U[X[W]] = [];
    }
    for (var j = 0; j < u.length; j++) {
      var q = H[c[u[j].id()]];
      if (q != null) {
        U[q].push(u[j]);
      }
    }
    var K = Array(X.length);
    var Z = 0;
    for (; Z < X.length; Z++) {
      K[Z] = l.collection(U[X[Z]]);
    }
    return K;
  }
  var n7 = e3({
    root: undefined,
    directed: false
  });
  function re() {
    var e = this;
    var t = {};
    var n = 0;
    var r = 0;
    var i = [];
    var a = [];
    var o = {};
    function s(n, r) {
      var o = a.length - 1;
      var s = [];
      var l = e.spawn();
      while (a[o].x != n || a[o].y != r) {
        s.push(a.pop().edge);
        o--;
      }
      s.push(a.pop().edge);
      s.forEach(function (n) {
        var r = n.connectedNodes().intersection(e);
        l.merge(n);
        r.forEach(function (n) {
          var r = n.id();
          var i = n.connectedEdges().intersection(e);
          l.merge(n);
          if (t[r].cutVertex) {
            l.merge(i.filter(function (e) {
              return e.isLoop();
            }));
          } else {
            l.merge(i);
          }
        });
      });
      i.push(l);
    }
    var l = function l(u, h, c) {
      if (u === c) {
        r += 1;
      }
      t[h] = {
        id: n,
        low: n++,
        cutVertex: false
      };
      var d;
      var p;
      var g;
      var f;
      var v = e.getElementById(h).connectedEdges().intersection(e);
      if (v.size() === 0) {
        i.push(e.spawn(e.getElementById(h)));
      } else {
        v.forEach(function (e) {
          d = e.source().id();
          p = e.target().id();
          if ((g = d === h ? p : d) !== c) {
            if (!o[f = e.id()]) {
              o[f] = true;
              a.push({
                x: h,
                y: g,
                edge: e
              });
            }
            if (g in t) {
              t[h].low = Math.min(t[h].low, t[g].id);
            } else {
              l(u, g, h);
              t[h].low = Math.min(t[h].low, t[g].low);
              if (t[h].id <= t[g].low) {
                t[h].cutVertex = true;
                s(h, g);
              }
            }
          }
        });
      }
    };
    e.forEach(function (e) {
      if (e.isNode()) {
        var n = e.id();
        if (!(n in t)) {
          r = 0;
          l(n, n);
          t[n].cutVertex = r > 1;
        }
      }
    });
    var u = Object.keys(t).filter(function (e) {
      return t[e].cutVertex;
    }).map(function (t) {
      return e.getElementById(t);
    });
    return {
      cut: e.spawn(u),
      components: i
    };
  }
  function rt() {
    var e = this;
    var t = {};
    var n = 0;
    var r = [];
    var i = [];
    var a = e.spawn(e);
    var o = function o(s) {
      i.push(s);
      t[s] = {
        index: n,
        low: n++,
        explored: false
      };
      e.getElementById(s).connectedEdges().intersection(e).forEach(function (e) {
        var n = e.target().id();
        if (n !== s) {
          if (!(n in t)) {
            o(n);
          }
          if (!t[n].explored) {
            t[s].low = Math.min(t[s].low, t[n].low);
          }
        }
      });
      if (t[s].index === t[s].low) {
        var l = e.spawn();
        for (;;) {
          var u = i.pop();
          l.merge(e.getElementById(u));
          t[u].low = t[s].index;
          t[u].explored = true;
          if (u === s) {
            break;
          }
        }
        var h = l.edgesWith(l);
        var c = l.merge(h);
        r.push(c);
        a = a.difference(c);
      }
    };
    e.forEach(function (e) {
      if (e.isNode()) {
        var n = e.id();
        if (!(n in t)) {
          o(n);
        }
      }
    });
    return {
      cut: a,
      components: r
    };
  }
  var rn = {};
  [to, {
    dijkstra: function (e) {
      if (!A(e)) {
        var t = arguments;
        e = {
          root: t[0],
          weight: t[1],
          directed: t[2]
        };
      }
      var n = tl(e);
      var r = n.root;
      var i = n.weight;
      var a = n.directed;
      var o = this;
      var s = _(r) ? this.filter(r)[0] : r[0];
      var l = {};
      var u = {};
      var h = {};
      var c = this.byGroup();
      var d = c.nodes;
      var p = c.edges;
      p.unmergeBy(function (e) {
        return e.isLoop();
      });
      function g(e) {
        return l[e.id()];
      }
      var f = new ts(function (e, t) {
        return g(e) - g(t);
      });
      var v = 0;
      for (; v < d.length; v++) {
        var y = d[v];
        l[y.id()] = y.same(s) ? 0 : Infinity;
        f.push(y);
      }
      while (f.size() > 0) {
        var b = f.pop();
        var x = g(b);
        h[b.id()] = x;
        if (x !== Infinity) {
          var w = b.neighborhood().intersect(d);
          var E = 0;
          for (; E < w.length; E++) {
            var T = w[E];
            var C = T.id();
            var N = function (e, t) {
              var n;
              var r = (a ? e.edgesTo(t) : e.edgesWith(t)).intersect(p);
              var o = Infinity;
              var s = 0;
              for (; s < r.length; s++) {
                var l = r[s];
                var u = i(l);
                if (u < o || !n) {
                  o = u;
                  n = l;
                }
              }
              return {
                edge: n,
                dist: o
              };
            }(b, T);
            var D = x + N.dist;
            if (D < g(T)) {
              l[T.id()] = D;
              f.updateItem(T);
              u[C] = {
                node: b,
                edge: N.edge
              };
            }
          }
        }
      }
      return {
        distanceTo: function (e) {
          return h[(_(e) ? d.filter(e)[0] : e[0]).id()];
        },
        pathTo: function (e) {
          var t = _(e) ? d.filter(e)[0] : e[0];
          var n = [];
          var r = t;
          var i = r.id();
          if (t.length > 0) {
            for (n.unshift(t); u[i];) {
              var a = u[i];
              n.unshift(a.edge);
              n.unshift(a.node);
              i = (r = a.node).id();
            }
          }
          return o.spawn(n);
        }
      };
    }
  }, {
    kruskal: function (e) {
      e = e || function (e) {
        return 1;
      };
      var t = this.byGroup();
      var n = t.nodes;
      var r = t.edges;
      var i = n.length;
      var a = Array(i);
      function o(e) {
        for (var t = 0; t < a.length; t++) {
          if (a[t].has(e)) {
            return t;
          }
        }
      }
      var s = 0;
      for (; s < i; s++) {
        a[s] = this.spawn(n[s]);
      }
      var l = r.sort(function (t, n) {
        return e(t) - e(n);
      });
      var u = 0;
      for (; u < l.length; u++) {
        var h = l[u];
        var c = h.source()[0];
        var d = h.target()[0];
        var p = o(c);
        var g = o(d);
        var f = a[p];
        var v = a[g];
        if (p !== g) {
          n.merge(h);
          f.merge(v);
          a.splice(g, 1);
        }
      }
      return n;
    }
  }, {
    aStar: function (e) {
      var t;
      var n;
      var r = this.cy();
      var i = tu(e);
      var a = i.root;
      var o = i.goal;
      var s = i.heuristic;
      var l = i.directed;
      var u = i.weight;
      a = r.collection(a)[0];
      o = r.collection(o)[0];
      var h = a.id();
      var c = o.id();
      var d = {};
      var p = {};
      var g = {};
      var f = new ts(function (e, t) {
        return p[e.id()] - p[t.id()];
      });
      var v = new tr();
      var y = {};
      var b = {};
      function x(e, t) {
        f.push(e);
        v.add(t);
      }
      x(a, h);
      d[h] = 0;
      p[h] = s(a);
      var w = 0;
      for (; f.size() > 0;) {
        n = (t = f.pop()).id();
        v.delete(n);
        w++;
        if (n === c) {
          var E = [];
          var T = o;
          var C = c;
          var N = b[C];
          while (E.unshift(T), N != null && E.unshift(N), (T = y[C]) != null) {
            N = b[C = T.id()];
          }
          return {
            found: true,
            distance: d[n],
            path: this.spawn(E),
            steps: w
          };
        }
        g[n] = true;
        var _ = t._private.edges;
        var D = 0;
        for (; D < _.length; D++) {
          var M = _[D];
          if (this.hasElementWithId(M.id()) && (!l || M.data("source") === n)) {
            var A = M.source();
            var S = M.target();
            var P = A.id() !== n ? A : S;
            var O = P.id();
            if (this.hasElementWithId(O) && !g[O]) {
              var I = d[n] + u(M);
              if (!v.has(O)) {
                d[O] = I;
                p[O] = I + s(P);
                x(P, O);
                y[O] = t;
                b[O] = M;
                continue;
              }
              if (I < d[O]) {
                d[O] = I;
                p[O] = I + s(P);
                y[O] = t;
                b[O] = M;
              }
            }
          }
        }
      }
      return {
        found: false,
        distance: undefined,
        path: undefined,
        steps: w
      };
    }
  }, {
    floydWarshall: function (e) {
      var t = this.cy();
      var n = th(e);
      var r = n.weight;
      var i = n.directed;
      var a = this.byGroup();
      var o = a.nodes;
      var s = a.edges;
      var l = o.length;
      var u = l * l;
      function h(e) {
        return o.indexOf(e);
      }
      function c(e) {
        return o[e];
      }
      var d = Array(u);
      var p = 0;
      for (; p < u; p++) {
        var g = p % l;
        if ((p - g) / l === g) {
          d[p] = 0;
        } else {
          d[p] = Infinity;
        }
      }
      var f = Array(u);
      var v = Array(u);
      var y = 0;
      for (; y < s.length; y++) {
        var b = s[y];
        var x = b.source()[0];
        var w = b.target()[0];
        if (x !== w) {
          var E = h(x);
          var T = h(w);
          var C = E * l + T;
          var N = r(b);
          if (d[C] > N) {
            d[C] = N;
            f[C] = T;
            v[C] = b;
          }
          if (!i) {
            var D = T * l + E;
            if (!i && d[D] > N) {
              d[D] = N;
              f[D] = E;
              v[D] = b;
            }
          }
        }
      }
      for (var M = 0; M < l; M++) {
        for (var A = 0; A < l; A++) {
          var S = A * l + M;
          var P = 0;
          for (; P < l; P++) {
            var O = A * l + P;
            var I = M * l + P;
            if (d[S] + d[I] < d[O]) {
              d[O] = d[S] + d[I];
              f[O] = f[S];
            }
          }
        }
      }
      function L(e) {
        return h((_(e) ? t.filter(e) : e)[0]);
      }
      return {
        distance: function (e, t) {
          return d[L(e) * l + L(t)];
        },
        path: function (e, n) {
          var r;
          var i = L(e);
          var a = L(n);
          var o = c(i);
          if (i === a) {
            return o.collection();
          }
          if (f[i * l + a] == null) {
            return t.collection();
          }
          var s = t.collection();
          var u = i;
          for (s.merge(o); i !== a;) {
            u = i;
            i = f[i * l + a];
            r = v[u * l + i];
            s.merge(r);
            s.merge(c(i));
          }
          return s;
        }
      };
    }
  }, {
    bellmanFord: function (e) {
      var t = this;
      var n = tc(e);
      var r = n.weight;
      var i = n.directed;
      var a = n.root;
      var o = this;
      var s = this.cy();
      var l = this.byGroup();
      var u = l.edges;
      var h = l.nodes;
      var c = h.length;
      var d = new tt();
      var p = false;
      var g = [];
      a = s.collection(a)[0];
      u.unmergeBy(function (e) {
        return e.isLoop();
      });
      var f = u.length;
      function v(e) {
        var t = d.get(e.id());
        if (!t) {
          t = {};
          d.set(e.id(), t);
        }
        return t;
      }
      function y(e) {
        return (_(e) ? s.$(e) : e)[0];
      }
      var b = 0;
      for (; b < c; b++) {
        var x = h[b];
        var w = v(x);
        if (x.same(a)) {
          w.dist = 0;
        } else {
          w.dist = Infinity;
        }
        w.pred = null;
        w.edge = null;
      }
      var E = false;
      function T(e, t, n, r, i, a) {
        var o = r.dist + a;
        if (o < i.dist && !n.same(r.edge)) {
          i.dist = o;
          i.pred = e;
          i.edge = n;
          E = true;
        }
      }
      var C = 1;
      for (; C < c; C++) {
        E = false;
        for (var N = 0; N < f; N++) {
          var D = u[N];
          var M = D.source();
          var A = D.target();
          var S = r(D);
          var P = v(M);
          var O = v(A);
          T(M, A, D, P, O, S);
          if (!i) {
            T(A, M, D, O, P, S);
          }
        }
        if (!E) {
          break;
        }
      }
      if (E) {
        var I = [];
        var L = 0;
        for (; L < f; L++) {
          var k = u[L];
          var R = k.source();
          var B = k.target();
          var F = r(k);
          var z = v(R).dist;
          var V = v(B).dist;
          if (z + F < V || !i && V + F < z) {
            if (!p) {
              eJ("Graph contains a negative weight cycle for Bellman-Ford");
              p = true;
            }
            if (e.findNegativeWeightCycles !== false) {
              var Y = [];
              if (z + F < V) {
                Y.push(R);
              }
              if (!i && V + F < z) {
                Y.push(B);
              }
              var G = Y.length;
              var X = 0;
              for (; X < G; X++) {
                var H = Y[X];
                var U = [H];
                U.push(v(H).edge);
                for (var W = v(H).pred; U.indexOf(W) === -1;) {
                  U.push(W);
                  U.push(v(W).edge);
                  W = v(W).pred;
                }
                var j = (U = U.slice(U.indexOf(W)))[0].id();
                var q = 0;
                var K = 2;
                for (; K < U.length; K += 2) {
                  if (U[K].id() < j) {
                    j = U[K].id();
                    q = K;
                  }
                }
                (U = U.slice(q).concat(U.slice(0, q))).push(U[0]);
                var Z = U.map(function (e) {
                  return e.id();
                }).join(",");
                if (I.indexOf(Z) === -1) {
                  g.push(o.spawn(U));
                  I.push(Z);
                }
              }
            } else {
              break;
            }
          }
        }
      }
      return {
        distanceTo: function (e) {
          return v(y(e)).dist;
        },
        pathTo: function (e, n = a) {
          var r = y(e);
          var i = [];
          var s = r;
          while (true) {
            if (s == null) {
              return t.spawn();
            }
            var l = v(s);
            var u = l.edge;
            var h = l.pred;
            i.unshift(s[0]);
            if (s.same(n) && i.length > 0) {
              break;
            }
            if (u != null) {
              i.unshift(u);
            }
            s = h;
          }
          return o.spawn(i);
        },
        hasNegativeWeightCycle: p,
        negativeWeightCycles: g
      };
    }
  }, {
    kargerStein: function () {
      var e = this;
      var t = this.byGroup();
      var n = t.nodes;
      var r = t.edges;
      r.unmergeBy(function (e) {
        return e.isLoop();
      });
      var i = n.length;
      var a = r.length;
      var o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2));
      var s = Math.floor(i / td);
      if (i < 2) {
        e$("At least 2 nodes are required for Karger-Stein algorithm");
        return;
      }
      var l = [];
      var u = 0;
      for (; u < a; u++) {
        var h = r[u];
        l.push([u, n.indexOf(h.source()), n.indexOf(h.target())]);
      }
      var c = Infinity;
      var d = [];
      var p = Array(i);
      var g = Array(i);
      var f = Array(i);
      function v(e, t) {
        for (var n = 0; n < i; n++) {
          t[n] = e[n];
        }
      }
      var y = 0;
      for (; y <= o; y++) {
        for (var b = 0; b < i; b++) {
          g[b] = b;
        }
        var x = tg(g, l.slice(), i, s);
        var w = x.slice();
        v(g, f);
        var E = tg(g, x, s, 2);
        var T = tg(f, w, s, 2);
        if (E.length <= T.length && E.length < c) {
          c = E.length;
          d = E;
          v(g, p);
        } else if (T.length <= E.length && T.length < c) {
          c = T.length;
          d = T;
          v(f, p);
        }
      }
      var C = this.spawn(d.map(function (e) {
        return r[e[0]];
      }));
      var N = this.spawn();
      var _ = this.spawn();
      var D = p[0];
      var M = 0;
      for (; M < p.length; M++) {
        var A = p[M];
        var S = n[M];
        if (A === D) {
          N.merge(S);
        } else {
          _.merge(S);
        }
      }
      function P(t) {
        var n = e.spawn();
        t.forEach(function (t) {
          n.merge(t);
          t.connectedEdges().forEach(function (t) {
            if (e.contains(t) && !C.contains(t)) {
              n.merge(t);
            }
          });
        });
        return n;
      }
      return {
        cut: C,
        components: [P(N), P(_)],
        partition1: N,
        partition2: _
      };
    }
  }, {
    pageRank: function (e) {
      var t;
      var n = na(e);
      var r = n.dampingFactor;
      var i = n.precision;
      var a = n.iterations;
      var o = n.weight;
      var s = this._private.cy;
      var l = this.byGroup();
      var u = l.nodes;
      var h = l.edges;
      var c = u.length;
      var d = c * c;
      var p = h.length;
      var g = Array(d);
      var f = Array(c);
      var v = (1 - r) / c;
      var y = 0;
      for (; y < c; y++) {
        for (var b = 0; b < c; b++) {
          g[y * c + b] = 0;
        }
        f[y] = 0;
      }
      for (var x = 0; x < p; x++) {
        var w = h[x];
        var E = w.data("source");
        var T = w.data("target");
        if (E !== T) {
          var C = u.indexOfId(E);
          var N = u.indexOfId(T);
          var _ = o(w);
          var D = N * c + C;
          g[D] += _;
          f[C] += _;
        }
      }
      var M = 1 / c + v;
      var A = 0;
      for (; A < c; A++) {
        if (f[A] === 0) {
          for (var S = 0; S < c; S++) {
            g[S * c + A] = M;
          }
        } else {
          for (var P = 0; P < c; P++) {
            var O = P * c + A;
            g[O] = g[O] / f[A] + v;
          }
        }
      }
      var I = Array(c);
      var L = Array(c);
      var k = 0;
      for (; k < c; k++) {
        I[k] = 1;
      }
      for (var R = 0; R < a; R++) {
        for (var B = 0; B < c; B++) {
          L[B] = 0;
        }
        for (var F = 0; F < c; F++) {
          for (var z = 0; z < c; z++) {
            var V = F * c + z;
            L[F] += g[V] * I[z];
          }
        }
        tD(L);
        t = I;
        I = L;
        L = t;
        var Y = 0;
        var G = 0;
        for (; G < c; G++) {
          var X = t[G] - I[G];
          Y += X * X;
        }
        if (Y < i) {
          break;
        }
      }
      return {
        rank: function (e) {
          e = s.collection(e)[0];
          return I[u.indexOf(e)];
        }
      };
    }
  }, ns, nu, nc, {
    markovClustering: nT,
    mcl: nT
  }, {
    kMeans: function (e) {
      var t;
      var n = this.cy();
      var i = this.nodes();
      var a = null;
      var o = nL(e);
      var s = Array(o.k);
      var l = {};
      if (o.testMode) {
        if (typeof o.testCentroids == "number") {
          o.testCentroids;
          t = nR(i, o.k, o.attributes);
        } else {
          t = r(o.testCentroids) === "object" ? o.testCentroids : nR(i, o.k, o.attributes);
        }
      } else {
        t = nR(i, o.k, o.attributes);
      }
      var u = true;
      var h = 0;
      while (u && h < o.maxIterations) {
        for (var c = 0; c < i.length; c++) {
          l[(a = i[c]).id()] = nB(a, t, o.distance, o.attributes, "kMeans");
        }
        u = false;
        for (var d = 0; d < o.k; d++) {
          var p = nF(d, i, l);
          if (p.length !== 0) {
            var g = o.attributes.length;
            var f = t[d];
            var v = Array(g);
            var y = Array(g);
            var b = 0;
            for (; b < g; b++) {
              y[b] = 0;
              var x;
              var w = 0;
              for (; w < p.length; w++) {
                a = p[w];
                y[b] += o.attributes[b](a);
              }
              v[b] = y[b] / p.length;
              x = v[b];
              if (!(Math.abs(f[b] - x) <= o.sensitivityThreshold)) {
                u = true;
              }
            }
            t[d] = v;
            s[d] = n.collection(p);
          }
        }
        h++;
      }
      return s;
    },
    kMedoids: function (e) {
      var t;
      var n;
      var i = this.cy();
      var a = this.nodes();
      var o = null;
      var s = nL(e);
      var l = Array(s.k);
      var u = {};
      var h = Array(s.k);
      if (s.testMode) {
        if (typeof s.testCentroids != "number") {
          t = r(s.testCentroids) === "object" ? s.testCentroids : nY(a, s.k);
        }
      } else {
        t = nY(a, s.k);
      }
      var c = true;
      var d = 0;
      while (c && d < s.maxIterations) {
        for (var p = 0; p < a.length; p++) {
          u[(o = a[p]).id()] = nB(o, t, s.distance, s.attributes, "kMedoids");
        }
        c = false;
        for (var g = 0; g < t.length; g++) {
          var f = nF(g, a, u);
          if (f.length !== 0) {
            h[g] = nG(t[g], f, s.attributes);
            for (var v = 0; v < f.length; v++) {
              if ((n = nG(f[v], f, s.attributes)) < h[g]) {
                h[g] = n;
                t[g] = f[v];
                c = true;
              }
            }
            l[g] = i.collection(f);
          }
        }
        d++;
      }
      return l;
    },
    fuzzyCMeans: nW,
    fcm: nW
  }, {
    hierarchicalClustering: n0,
    hca: n0
  }, {
    affinityPropagation: n8,
    ap: n8
  }, {
    hierholzer: function (e) {
      if (!A(e)) {
        var t;
        var n;
        var r;
        var i = arguments;
        e = {
          root: i[0],
          directed: i[1]
        };
      }
      var a = n7(e);
      var o = a.root;
      var s = a.directed;
      var l = false;
      if (o) {
        r = _(o) ? this.filter(o)[0].id() : o[0].id();
      }
      var u = {};
      var h = {};
      if (s) {
        this.forEach(function (e) {
          var r = e.id();
          if (e.isNode()) {
            var i = e.indegree(true);
            var a = e.outdegree(true);
            var o = i - a;
            var s = a - i;
            if (o == 1) {
              if (t) {
                l = true;
              } else {
                t = r;
              }
            } else if (s == 1) {
              if (n) {
                l = true;
              } else {
                n = r;
              }
            } else if (s > 1 || o > 1) {
              l = true;
            }
            u[r] = [];
            e.outgoers().forEach(function (e) {
              if (e.isEdge()) {
                u[r].push(e.id());
              }
            });
          } else {
            h[r] = [undefined, e.target().id()];
          }
        });
      } else {
        this.forEach(function (e) {
          var r = e.id();
          if (e.isNode()) {
            if (e.degree(true) % 2) {
              if (t) {
                if (n) {
                  l = true;
                } else {
                  n = r;
                }
              } else {
                t = r;
              }
            }
            u[r] = [];
            e.connectedEdges().forEach(function (e) {
              return u[r].push(e.id());
            });
          } else {
            h[r] = [e.source().id(), e.target().id()];
          }
        });
      }
      var c = {
        found: false,
        trail: undefined
      };
      if (l) {
        return c;
      }
      if (n && t) {
        if (s) {
          if (r && n != r) {
            return c;
          }
          r = n;
        } else {
          if (r && n != r && t != r) {
            return c;
          }
          r ||= n;
        }
      } else {
        r ||= this[0].id();
      }
      function d(e) {
        var t;
        var n;
        var r;
        var i = e;
        var a = [e];
        while (u[i].length) {
          n = h[t = u[i].shift()][0];
          if (i != (r = h[t][1])) {
            u[r] = u[r].filter(function (e) {
              return e != t;
            });
            i = r;
          } else if (!s && i != n) {
            u[n] = u[n].filter(function (e) {
              return e != t;
            });
            i = n;
          }
          a.unshift(t);
          a.unshift(i);
        }
        return a;
      }
      var p = [];
      var g = [];
      for (g = d(r); g.length != 1;) {
        if (u[g[0]].length == 0) {
          p.unshift(this.getElementById(g.shift()));
          p.unshift(this.getElementById(g.shift()));
        } else {
          g = d(g.shift()).concat(g);
        }
      }
      p.unshift(this.getElementById(g.shift()));
      for (var f in u) {
        if (u[f].length) {
          return c;
        }
      }
      c.found = true;
      c.trail = this.spawn(p, true);
      return c;
    }
  }, {
    hopcroftTarjanBiconnected: re,
    htbc: re,
    htb: re,
    hopcroftTarjanBiconnectedComponents: re
  }, {
    tarjanStronglyConnected: rt,
    tsc: rt,
    tscc: rt,
    tarjanStronglyConnectedComponents: rt
  }].forEach(function (e) {
    Z(rn, e);
  });
  var rr = function e(t) {
    if (!(this instanceof e)) {
      return new e(t);
    }
    this.id = "Thenable/1.0.7";
    this.state = 0;
    this.fulfillValue = undefined;
    this.rejectReason = undefined;
    this.onFulfilled = [];
    this.onRejected = [];
    this.proxy = {
      then: this.then.bind(this)
    };
    if (typeof t == "function") {
      t.call(this, this.fulfill.bind(this), this.reject.bind(this));
    }
  };
  rr.prototype = {
    fulfill: function (e) {
      return ri(this, 1, "fulfillValue", e);
    },
    reject: function (e) {
      return ri(this, 2, "rejectReason", e);
    },
    then: function (e, t) {
      var n = new rr();
      this.onFulfilled.push(rs(e, n, "fulfill"));
      this.onRejected.push(rs(t, n, "reject"));
      ra(this);
      return n.proxy;
    }
  };
  function ri(e, t, n, r) {
    if (e.state === 0) {
      e.state = t;
      e[n] = r;
      ra(e);
    }
    return e;
  }
  function ra(e) {
    if (e.state === 1) {
      ro(e, "onFulfilled", e.fulfillValue);
    } else if (e.state === 2) {
      ro(e, "onRejected", e.rejectReason);
    }
  }
  function ro(e, t, n) {
    if (e[t].length !== 0) {
      var r = e[t];
      e[t] = [];
      function i() {
        for (var e = 0; e < r.length; e++) {
          r[e](n);
        }
      }
      if (typeof setImmediate == "function") {
        setImmediate(i);
      } else {
        setTimeout(i, 0);
      }
    }
  }
  function rs(e, t, n) {
    return function (r) {
      if (typeof e != "function") {
        t[n].call(t, r);
      } else {
        var i;
        try {
          i = e(r);
        } catch (e) {
          t.reject(e);
          return;
        }
        rl(t, i);
      }
    };
  }
  var rl = function e(t, n) {
    if (t === n || t.proxy === n) {
      t.reject(TypeError("cannot resolve promise with itself"));
      return;
    }
    if (r(n) === "object" && n !== null || typeof n == "function") {
      try {
        i = n.then;
      } catch (e) {
        t.reject(e);
        return;
      }
    }
    if (typeof i == "function") {
      var i;
      var a = false;
      try {
        i.call(n, function (r) {
          if (!a) {
            a = true;
            if (r === n) {
              t.reject(TypeError("circular thenable chain"));
            } else {
              e(t, r);
            }
          }
        }, function (e) {
          if (!a) {
            a = true;
            t.reject(e);
          }
        });
      } catch (e) {
        if (!a) {
          t.reject(e);
        }
      }
      return;
    }
    t.fulfill(n);
  };
  rr.all = function (e) {
    return new rr(function (t, n) {
      var r = Array(e.length);
      var i = 0;
      function a(n, a) {
        r[n] = a;
        if (++i === e.length) {
          t(r);
        }
      }
      var o = 0;
      for (; o < e.length; o++) {
        (function (t) {
          var r = e[t];
          if (r != null && r.then != null) {
            r.then(function (e) {
              a(t, e);
            }, function (e) {
              n(e);
            });
          } else {
            a(t, r);
          }
        })(o);
      }
    });
  };
  rr.resolve = function (e) {
    return new rr(function (t, n) {
      t(e);
    });
  };
  rr.reject = function (e) {
    return new rr(function (t, n) {
      n(e);
    });
  };
  var ru = typeof Promise != "undefined" ? Promise : rr;
  function rh(e, t, n) {
    var r = k(e);
    var i = this._private = Z({
      duration: 1000
    }, t, n);
    i.target = e;
    i.style = i.style || i.css;
    i.started = false;
    i.playing = false;
    i.hooked = false;
    i.applying = false;
    i.progress = 0;
    i.completes = [];
    i.frames = [];
    if (i.complete && D(i.complete)) {
      i.completes.push(i.complete);
    }
    if (!r) {
      var a = e.position();
      i.startPosition = i.startPosition || {
        x: a.x,
        y: a.y
      };
      i.startStyle = i.startStyle || e.cy().style().getAnimationStartStyle(e, i.style);
    }
    if (r) {
      var o = e.pan();
      i.startPan = {
        x: o.x,
        y: o.y
      };
      i.startZoom = e.zoom();
    }
    this.length = 1;
    this[0] = this;
  }
  var rc = rh.prototype;
  Z(rc, {
    instanceString: function () {
      return "animation";
    },
    hook: function () {
      var e = this._private;
      if (!e.hooked) {
        var t;
        var n = e.target._private.animation;
        (e.queue ? n.queue : n.current).push(this);
        if (O(e.target)) {
          e.target.cy().addToAnimationPool(e.target);
        }
        e.hooked = true;
      }
      return this;
    },
    play: function () {
      var e = this._private;
      if (e.progress === 1) {
        e.progress = 0;
      }
      e.playing = true;
      e.started = false;
      e.stopped = false;
      this.hook();
      return this;
    },
    playing: function () {
      return this._private.playing;
    },
    apply: function () {
      var e = this._private;
      e.applying = true;
      e.started = false;
      e.stopped = false;
      this.hook();
      return this;
    },
    applying: function () {
      return this._private.applying;
    },
    pause: function () {
      var e = this._private;
      e.playing = false;
      e.started = false;
      return this;
    },
    stop: function () {
      var e = this._private;
      e.playing = false;
      e.started = false;
      e.stopped = true;
      return this;
    },
    rewind: function () {
      return this.progress(0);
    },
    fastforward: function () {
      return this.progress(1);
    },
    time: function (e) {
      var t = this._private;
      if (e === undefined) {
        return t.progress * t.duration;
      } else {
        return this.progress(e / t.duration);
      }
    },
    progress: function (e) {
      var t = this._private;
      var n = t.playing;
      if (e === undefined) {
        return t.progress;
      } else {
        if (n) {
          this.pause();
        }
        t.progress = e;
        t.started = false;
        if (n) {
          this.play();
        }
        return this;
      }
    },
    completed: function () {
      return this._private.progress === 1;
    },
    reverse: function () {
      var e = this._private;
      var t = e.playing;
      if (t) {
        this.pause();
      }
      e.progress = 1 - e.progress;
      e.started = false;
      function n(t, n) {
        var r = e[t];
        if (r != null) {
          e[t] = e[n];
          e[n] = r;
        }
      }
      n("zoom", "startZoom");
      n("pan", "startPan");
      n("position", "startPosition");
      if (e.style) {
        for (var r = 0; r < e.style.length; r++) {
          var i = e.style[r];
          var a = i.name;
          var o = e.startStyle[a];
          e.startStyle[a] = i;
          e.style[r] = o;
        }
      }
      if (t) {
        this.play();
      }
      return this;
    },
    promise: function (e) {
      var t;
      var n = this._private;
      t = e === "frame" ? n.frames : n.completes;
      return new ru(function (e, n) {
        t.push(function () {
          e();
        });
      });
    }
  });
  rc.complete = rc.completed;
  rc.run = rc.play;
  rc.running = rc.playing;
  var rd = Array.isArray;
  var rp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var rg = /^\w*$/;
  function rf(e, t) {
    if (rd(e)) {
      return false;
    }
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || !!ew(e) || rg.test(e) || !rp.test(e) || t != null && e in Object(t);
  }
  function rv(e) {
    if (!er(e)) {
      return false;
    }
    var t = ex(e);
    return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
  }
  var ry = es["__core-js_shared__"];
  var rm = (oU = /[^.]+$/.exec(ry && ry.keys && ry.keys.IE_PROTO || "")) ? "Symbol(src)_1." + oU : "";
  var rb = Function.prototype.toString;
  function rx(e) {
    if (e != null) {
      try {
        return rb.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  var rw = /^\[object .+?Constructor\]$/;
  var rE = Object.prototype;
  var rT = Function.prototype.toString;
  var rC = rE.hasOwnProperty;
  var rN = RegExp("^" + rT.call(rC).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function r_(e) {
    return !!er(e) && (!rm || !(rm in e)) && (rv(e) ? rN : rw).test(rx(e));
  }
  function rD(e, t) {
    var n = e == null ? undefined : e[t];
    if (r_(n)) {
      return n;
    } else {
      return undefined;
    }
  }
  var rM = rD(Object, "create");
  var rA = Object.prototype.hasOwnProperty;
  var rS = Object.prototype.hasOwnProperty;
  function rP(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  rP.prototype.clear = function () {
    this.__data__ = rM ? rM(null) : {};
    this.size = 0;
  };
  rP.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    this.size -= +!!t;
    return t;
  };
  rP.prototype.get = function (e) {
    var t = this.__data__;
    if (rM) {
      var n = t[e];
      if (n === "__lodash_hash_undefined__") {
        return undefined;
      } else {
        return n;
      }
    }
    if (rA.call(t, e)) {
      return t[e];
    } else {
      return undefined;
    }
  };
  rP.prototype.has = function (e) {
    var t = this.__data__;
    if (rM) {
      return t[e] !== undefined;
    } else {
      return rS.call(t, e);
    }
  };
  rP.prototype.set = function (e, t) {
    var n = this.__data__;
    this.size += +!this.has(e);
    n[e] = rM && t === undefined ? "__lodash_hash_undefined__" : t;
    return this;
  };
  function rO(e, t) {
    return e === t || e != e && t != t;
  }
  function rI(e, t) {
    for (var n = e.length; n--;) {
      if (rO(e[n][0], t)) {
        return n;
      }
    }
    return -1;
  }
  var rL = Array.prototype.splice;
  function rk(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  rk.prototype.clear = function () {
    this.__data__ = [];
    this.size = 0;
  };
  rk.prototype.delete = function (e) {
    var t = this.__data__;
    var n = rI(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : rL.call(t, n, 1), --this.size, true);
  };
  rk.prototype.get = function (e) {
    var t = this.__data__;
    var n = rI(t, e);
    if (n < 0) {
      return undefined;
    } else {
      return t[n][1];
    }
  };
  rk.prototype.has = function (e) {
    return rI(this.__data__, e) > -1;
  };
  rk.prototype.set = function (e, t) {
    var n = this.__data__;
    var r = rI(n, e);
    if (r < 0) {
      ++this.size;
      n.push([e, t]);
    } else {
      n[r][1] = t;
    }
    return this;
  };
  var rR = rD(es, "Map");
  function rB(e) {
    var t = typeof e;
    if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
      return e !== "__proto__";
    } else {
      return e === null;
    }
  }
  function rF(e, t) {
    var n = e.__data__;
    if (rB(t)) {
      return n[typeof t == "string" ? "string" : "hash"];
    } else {
      return n.map;
    }
  }
  function rz(e) {
    var t = -1;
    var n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  function rV(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") {
      throw TypeError("Expected a function");
    }
    function n() {
      var r = arguments;
      var i = t ? t.apply(this, r) : r[0];
      var a = n.cache;
      if (a.has(i)) {
        return a.get(i);
      }
      var o = e.apply(this, r);
      n.cache = a.set(i, o) || a;
      return o;
    }
    n.cache = new (rV.Cache || rz)();
    return n;
  }
  rz.prototype.clear = function () {
    this.size = 0;
    this.__data__ = {
      hash: new rP(),
      map: new (rR || rk)(),
      string: new rP()
    };
  };
  rz.prototype.delete = function (e) {
    var t = rF(this, e).delete(e);
    this.size -= +!!t;
    return t;
  };
  rz.prototype.get = function (e) {
    return rF(this, e).get(e);
  };
  rz.prototype.has = function (e) {
    return rF(this, e).has(e);
  };
  rz.prototype.set = function (e, t) {
    var n = rF(this, e);
    var r = n.size;
    n.set(e, t);
    this.size += +(n.size != r);
    return this;
  };
  rV.Cache = rz;
  var rY = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var rG = /\\(\\)?/g;
  oj = (oW = rV(function (e) {
    var t = [];
    if (e.charCodeAt(0) === 46) {
      t.push("");
    }
    e.replace(rY, function (e, n, r, i) {
      t.push(r ? i.replace(rG, "$1") : n || e);
    });
    return t;
  }, function (e) {
    if (oj.size === 500) {
      oj.clear();
    }
    return e;
  })).cache;
  var rX = oW;
  function rH(e, t) {
    var n = -1;
    var r = e == null ? 0 : e.length;
    var i = Array(r);
    while (++n < r) {
      i[n] = t(e[n], n, e);
    }
    return i;
  }
  var rU = Infinity;
  var rW = ed ? ed.prototype : undefined;
  var rj = rW ? rW.toString : undefined;
  var rq = function e(t) {
    if (typeof t == "string") {
      return t;
    }
    if (rd(t)) {
      return rH(t, e) + "";
    }
    if (ew(t)) {
      if (rj) {
        return rj.call(t);
      } else {
        return "";
      }
    }
    var n = t + "";
    if (n == "0" && 1 / t == -rU) {
      return "-0";
    } else {
      return n;
    }
  };
  function rK(e) {
    if (e == null) {
      return "";
    } else {
      return rq(e);
    }
  }
  function rZ(e, t) {
    if (rd(e)) {
      return e;
    } else if (rf(e, t)) {
      return [e];
    } else {
      return rX(rK(e));
    }
  }
  var r$ = Infinity;
  function rQ(e) {
    if (typeof e == "string" || ew(e)) {
      return e;
    }
    var t = e + "";
    if (t == "0" && 1 / e == -r$) {
      return "-0";
    } else {
      return t;
    }
  }
  function rJ(e, t) {
    t = rZ(t, e);
    var n = 0;
    var r = t.length;
    while (e != null && n < r) {
      e = e[rQ(t[n++])];
    }
    if (n && n == r) {
      return e;
    } else {
      return undefined;
    }
  }
  function r0(e, t, n) {
    var r = e == null ? undefined : rJ(e, t);
    if (r === undefined) {
      return n;
    } else {
      return r;
    }
  }
  var r1 = function () {
    try {
      var e = rD(Object, "defineProperty");
      e({}, "", {});
      return e;
    } catch (e) {}
  }();
  function r2(e, t, n) {
    if (t == "__proto__" && r1) {
      r1(e, t, {
        configurable: true,
        enumerable: true,
        value: n,
        writable: true
      });
    } else {
      e[t] = n;
    }
  }
  var r5 = Object.prototype.hasOwnProperty;
  function r3(e, t, n) {
    var r = e[t];
    if (!r5.call(e, t) || !rO(r, n) || n === undefined && !(t in e)) {
      r2(e, t, n);
    }
  }
  var r4 = /^(?:0|[1-9]\d*)$/;
  function r9(e, t) {
    var n = typeof e;
    return !!(t = t == null ? 9007199254740991 : t) && (n == "number" || n != "symbol" && r4.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function r6(e, t, n, r) {
    if (!er(e)) {
      return e;
    }
    t = rZ(t, e);
    var i = -1;
    var a = t.length;
    var o = a - 1;
    var s = e;
    while (s != null && ++i < a) {
      var l = rQ(t[i]);
      var u = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") {
        break;
      }
      if (i != o) {
        var h = s[l];
        if ((u = r ? r(h, l, s) : undefined) === undefined) {
          u = er(h) ? h : r9(t[i + 1]) ? [] : {};
        }
      }
      r3(s, l, u);
      s = s[l];
    }
    return e;
  }
  function r8(e, t) {
    var n = -1;
    var r = e.length;
    for (t ||= Array(r); ++n < r;) {
      t[n] = e[n];
    }
    return t;
  }
  var r7 = {};
  [{
    animated: function () {
      return function () {
        var e = this.length !== undefined;
        if (!(this._private.cy || this).styleEnabled()) {
          return false;
        }
        var t = (e ? this : [this])[0];
        if (t) {
          return t._private.animation.current.length > 0;
        }
      };
    },
    clearQueue: function () {
      return function () {
        var e = this.length !== undefined ? this : [this];
        if (!(this._private.cy || this).styleEnabled()) {
          return this;
        }
        for (var t = 0; t < e.length; t++) {
          e[t]._private.animation.queue = [];
        }
        return this;
      };
    },
    delay: function () {
      return function (e, t) {
        if ((this._private.cy || this).styleEnabled()) {
          return this.animate({
            delay: e,
            duration: e,
            complete: t
          });
        } else {
          return this;
        }
      };
    },
    delayAnimation: function () {
      return function (e, t) {
        if ((this._private.cy || this).styleEnabled()) {
          return this.animation({
            delay: e,
            duration: e,
            complete: t
          });
        } else {
          return this;
        }
      };
    },
    animation: function () {
      return function (e, t) {
        var n = this.length !== undefined;
        var r = n ? this : [this];
        var i = this._private.cy || this;
        var a = !n;
        var o = !a;
        if (!i.styleEnabled()) {
          return this;
        }
        var s = i.style();
        if (Object.keys(e = Z({}, e, t)).length === 0) {
          return new rh(r[0], e);
        }
        if (e.duration === undefined) {
          e.duration = 400;
        }
        switch (e.duration) {
          case "slow":
            e.duration = 600;
            break;
          case "fast":
            e.duration = 200;
        }
        if (o) {
          e.style = s.getPropsList(e.style || e.css);
          e.css = undefined;
        }
        if (o && e.renderedPosition != null) {
          var l = e.renderedPosition;
          var u = i.pan();
          var h = i.zoom();
          e.position = tv(l, h, u);
        }
        if (a && e.panBy != null) {
          var c = e.panBy;
          var d = i.pan();
          e.pan = {
            x: d.x + c.x,
            y: d.y + c.y
          };
        }
        var p = e.center || e.centre;
        if (a && p != null) {
          var g = i.getCenterPan(p.eles, e.zoom);
          if (g != null) {
            e.pan = g;
          }
        }
        if (a && e.fit != null) {
          var f = e.fit;
          var v = i.getFitViewport(f.eles || f.boundingBox, f.padding);
          if (v != null) {
            e.pan = v.pan;
            e.zoom = v.zoom;
          }
        }
        if (a && A(e.zoom)) {
          var y = i.getZoomedViewport(e.zoom);
          if (y != null) {
            if (y.zoomed) {
              e.zoom = y.zoom;
            }
            if (y.panned) {
              e.pan = y.pan;
            }
          } else {
            e.zoom = null;
          }
        }
        return new rh(r[0], e);
      };
    },
    animate: function () {
      return function (e, t) {
        var n = this.length !== undefined ? this : [this];
        if (!(this._private.cy || this).styleEnabled()) {
          return this;
        }
        if (t) {
          e = Z({}, e, t);
        }
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          var a = i.animated() && (e.queue === undefined || e.queue);
          i.animation(e, a ? {
            queue: true
          } : undefined).play();
        }
        return this;
      };
    },
    stop: function () {
      return function (e, t) {
        var n = this.length !== undefined ? this : [this];
        var r = this._private.cy || this;
        if (!r.styleEnabled()) {
          return this;
        }
        for (var i = 0; i < n.length; i++) {
          var a = n[i]._private;
          var o = a.animation.current;
          var s = 0;
          for (; s < o.length; s++) {
            var l = o[s]._private;
            if (t) {
              l.duration = 0;
            }
          }
          if (e) {
            a.animation.queue = [];
          }
          if (!t) {
            a.animation.current = [];
          }
        }
        r.notify("draw");
        return this;
      };
    }
  }, {
    data: function (e) {
      e = Z({}, {
        field: "data",
        bindingEvent: "data",
        allowBinding: false,
        allowSetting: false,
        allowGetting: false,
        settingEvent: "data",
        settingTriggersEvent: false,
        triggerFnName: "trigger",
        immutableKeys: {},
        updateStyle: false,
        beforeGet: function (e) {},
        beforeSet: function (e, t) {},
        onSet: function (e) {},
        canSet: function (e) {
          return true;
        }
      }, e);
      return function (t, n) {
        var r;
        var i = e;
        var a = this.length !== undefined;
        var o = a ? this : [this];
        var l = a ? this[0] : this;
        if (_(t)) {
          var u = t.indexOf(".") !== -1 && (rd(t) ? rH(t, rQ) : ew(t) ? [t] : r8(rX(rK(t))));
          if (i.allowGetting && n === undefined) {
            if (l) {
              i.beforeGet(l);
              p = u && l._private[i.field][t] === undefined ? r0(l._private[i.field], u) : l._private[i.field][t];
            }
            return p;
          }
          if (i.allowSetting && n !== undefined && !i.immutableKeys[t]) {
            var h = s({}, t, n);
            i.beforeSet(this, h);
            var c = 0;
            var d = o.length;
            for (; c < d; c++) {
              var p;
              var g;
              var f = o[c];
              if (i.canSet(f)) {
                if (u && l._private[i.field][t] === undefined) {
                  if ((g = f._private[i.field]) != null) {
                    r6(g, u, n);
                  }
                } else {
                  f._private[i.field][t] = n;
                }
              }
            }
            if (i.updateStyle) {
              this.updateStyle();
            }
            i.onSet(this);
            if (i.settingTriggersEvent) {
              this[i.triggerFnName](i.settingEvent);
            }
          }
        } else if (i.allowSetting && A(t)) {
          var v;
          var y;
          var b = Object.keys(t);
          i.beforeSet(this, t);
          for (var x = 0; x < b.length; x++) {
            y = t[v = b[x]];
            if (!i.immutableKeys[v]) {
              for (var w = 0; w < o.length; w++) {
                var E = o[w];
                if (i.canSet(E)) {
                  E._private[i.field][v] = y;
                }
              }
            }
          }
          if (i.updateStyle) {
            this.updateStyle();
          }
          i.onSet(this);
          if (i.settingTriggersEvent) {
            this[i.triggerFnName](i.settingEvent);
          }
        } else if (i.allowBinding && D(t)) {
          this.on(i.bindingEvent, t);
        } else if (i.allowGetting && t === undefined) {
          if (l) {
            i.beforeGet(l);
            r = l._private[i.field];
          }
          return r;
        }
        return this;
      };
    },
    removeData: function (e) {
      e = Z({}, {
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: false,
        immutableKeys: {}
      }, e);
      return function (t) {
        var n = e;
        var r = this.length !== undefined ? this : [this];
        if (_(t)) {
          var i = t.split(/\s+/);
          var a = i.length;
          var o = 0;
          for (; o < a; o++) {
            var s = i[o];
            if (!B(s) && !n.immutableKeys[s]) {
              var l = 0;
              var u = r.length;
              for (; l < u; l++) {
                r[l]._private[n.field][s] = undefined;
              }
            }
          }
          if (n.triggerEvent) {
            this[n.triggerFnName](n.event);
          }
        } else if (t === undefined) {
          var h = 0;
          var c = r.length;
          for (; h < c; h++) {
            var d = r[h]._private[n.field];
            var p = Object.keys(d);
            var g = 0;
            for (; g < p.length; g++) {
              var f = p[g];
              if (!n.immutableKeys[f]) {
                d[f] = undefined;
              }
            }
          }
          if (n.triggerEvent) {
            this[n.triggerFnName](n.event);
          }
        }
        return this;
      };
    }
  }, {
    eventAliasesOn: function (e) {
      e.addListener = e.listen = e.bind = e.on;
      e.unlisten = e.unbind = e.off = e.removeListener;
      e.trigger = e.emit;
      e.pon = e.promiseOn = function (e, t) {
        var n = this;
        var r = Array.prototype.slice.call(arguments, 0);
        return new ru(function (e, t) {
          var i = r.concat([function (t) {
            n.off.apply(n, a);
            e(t);
          }]);
          var a = i.concat([]);
          n.on.apply(n, i);
        });
      };
    }
  }].forEach(function (e) {
    Z(r7, e);
  });
  var ie = {
    animate: r7.animate(),
    animation: r7.animation(),
    animated: r7.animated(),
    clearQueue: r7.clearQueue(),
    delay: r7.delay(),
    delayAnimation: r7.delayAnimation(),
    stop: r7.stop()
  };
  var it = {
    classes: function (e) {
      if (e === undefined) {
        var t = [];
        this[0]._private.classes.forEach(function (e) {
          return t.push(e);
        });
        return t;
      }
      if (!M(e)) {
        e = (e || "").match(/\S+/g) || [];
      }
      var n = [];
      var r = new tr(e);
      var i = 0;
      for (; i < this.length; i++) {
        var a = this[i];
        var o = a._private;
        var s = o.classes;
        var l = false;
        var u = 0;
        for (; u < e.length; u++) {
          var h = e[u];
          if (!s.has(h)) {
            l = true;
            break;
          }
        }
        l ||= s.size !== e.length;
        if (l) {
          o.classes = r;
          n.push(a);
        }
      }
      if (n.length > 0) {
        this.spawn(n).updateStyle().emit("class");
      }
      return this;
    },
    addClass: function (e) {
      return this.toggleClass(e, true);
    },
    hasClass: function (e) {
      var t = this[0];
      return t != null && t._private.classes.has(e);
    },
    toggleClass: function (e, t) {
      if (!M(e)) {
        e = e.match(/\S+/g) || [];
      }
      var n = t === undefined;
      var r = [];
      var i = 0;
      var a = this.length;
      for (; i < a; i++) {
        var o = this[i];
        var s = o._private.classes;
        var l = false;
        var u = 0;
        for (; u < e.length; u++) {
          var h = e[u];
          var c = s.has(h);
          var d = false;
          if (t || n && !c) {
            s.add(h);
            d = true;
          } else if (!t || n && c) {
            s.delete(h);
            d = true;
          }
          if (!l && d) {
            r.push(o);
            l = true;
          }
        }
      }
      if (r.length > 0) {
        this.spawn(r).updateStyle().emit("class");
      }
      return this;
    },
    removeClass: function (e) {
      return this.toggleClass(e, false);
    },
    flashClass: function (e, t) {
      var n = this;
      if (t == null) {
        t = 250;
      } else if (t === 0) {
        return n;
      }
      n.addClass(e);
      setTimeout(function () {
        n.removeClass(e);
      }, t);
      return n;
    }
  };
  it.className = it.classNames = it.classes;
  var ir = {
    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
    boolOp: "\\?|\\!|\\^",
    string: "\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'",
    number: H,
    meta: "degree|indegree|outdegree",
    separator: "\\s*,\\s*",
    descendant: "\\s+",
    child: "\\s+>\\s+",
    subject: "\\$",
    group: "node|edge|\\*",
    directedEdge: "\\s+->\\s+",
    undirectedEdge: "\\s+<->\\s+"
  };
  ir.variable = "(?:[\\w-.]|(?:\\\\" + ir.metaChar + "))+";
  ir.className = "(?:[\\w-]|(?:\\\\" + ir.metaChar + "))+";
  ir.value = ir.string + "|" + ir.number;
  ir.id = ir.variable;
  (function () {
    var e;
    var t;
    var n;
    n = 0;
    e = ir.comparatorOp.split("|");
    for (; n < e.length; n++) {
      t = e[n];
      ir.comparatorOp += "|@" + t;
    }
    n = 0;
    e = ir.comparatorOp.split("|");
    for (; n < e.length; n++) {
      if (!((t = e[n]).indexOf("!") >= 0) && t !== "=") {
        ir.comparatorOp += "|\\!" + t;
      }
    }
  })();
  function ii() {
    return {
      checks: []
    };
  }
  var ia = {
    GROUP: 0,
    COLLECTION: 1,
    FILTER: 2,
    DATA_COMPARE: 3,
    DATA_EXIST: 4,
    DATA_BOOL: 5,
    META_COMPARE: 6,
    STATE: 7,
    ID: 8,
    CLASS: 9,
    UNDIRECTED_EDGE: 10,
    DIRECTED_EDGE: 11,
    NODE_SOURCE: 12,
    NODE_TARGET: 13,
    NODE_NEIGHBOR: 14,
    CHILD: 15,
    DESCENDANT: 16,
    PARENT: 17,
    ANCESTOR: 18,
    COMPOUND_SPLIT: 19,
    TRUE: 20
  };
  var io = [{
    selector: ":selected",
    matches: function (e) {
      return e.selected();
    }
  }, {
    selector: ":unselected",
    matches: function (e) {
      return !e.selected();
    }
  }, {
    selector: ":selectable",
    matches: function (e) {
      return e.selectable();
    }
  }, {
    selector: ":unselectable",
    matches: function (e) {
      return !e.selectable();
    }
  }, {
    selector: ":locked",
    matches: function (e) {
      return e.locked();
    }
  }, {
    selector: ":unlocked",
    matches: function (e) {
      return !e.locked();
    }
  }, {
    selector: ":visible",
    matches: function (e) {
      return e.visible();
    }
  }, {
    selector: ":hidden",
    matches: function (e) {
      return !e.visible();
    }
  }, {
    selector: ":transparent",
    matches: function (e) {
      return e.transparent();
    }
  }, {
    selector: ":grabbed",
    matches: function (e) {
      return e.grabbed();
    }
  }, {
    selector: ":free",
    matches: function (e) {
      return !e.grabbed();
    }
  }, {
    selector: ":removed",
    matches: function (e) {
      return e.removed();
    }
  }, {
    selector: ":inside",
    matches: function (e) {
      return !e.removed();
    }
  }, {
    selector: ":grabbable",
    matches: function (e) {
      return e.grabbable();
    }
  }, {
    selector: ":ungrabbable",
    matches: function (e) {
      return !e.grabbable();
    }
  }, {
    selector: ":animated",
    matches: function (e) {
      return e.animated();
    }
  }, {
    selector: ":unanimated",
    matches: function (e) {
      return !e.animated();
    }
  }, {
    selector: ":parent",
    matches: function (e) {
      return e.isParent();
    }
  }, {
    selector: ":childless",
    matches: function (e) {
      return e.isChildless();
    }
  }, {
    selector: ":child",
    matches: function (e) {
      return e.isChild();
    }
  }, {
    selector: ":orphan",
    matches: function (e) {
      return e.isOrphan();
    }
  }, {
    selector: ":nonorphan",
    matches: function (e) {
      return e.isChild();
    }
  }, {
    selector: ":compound",
    matches: function (e) {
      if (e.isNode()) {
        return e.isParent();
      } else {
        return e.source().isParent() || e.target().isParent();
      }
    }
  }, {
    selector: ":loop",
    matches: function (e) {
      return e.isLoop();
    }
  }, {
    selector: ":simple",
    matches: function (e) {
      return e.isSimple();
    }
  }, {
    selector: ":active",
    matches: function (e) {
      return e.active();
    }
  }, {
    selector: ":inactive",
    matches: function (e) {
      return !e.active();
    }
  }, {
    selector: ":backgrounding",
    matches: function (e) {
      return e.backgrounding();
    }
  }, {
    selector: ":nonbackgrounding",
    matches: function (e) {
      return !e.backgrounding();
    }
  }].sort(function (e, t) {
    return K(e.selector, t.selector) * -1;
  });
  var is = function () {
    var e;
    var t = {};
    var n = 0;
    for (; n < io.length; n++) {
      t[(e = io[n]).selector] = e.matches;
    }
    return t;
  }();
  var il = "(" + io.map(function (e) {
    return e.selector;
  }).join("|") + ")";
  function iu(e) {
    return e.replace(RegExp("\\\\(" + ir.metaChar + ")", "g"), function (e, t) {
      return t;
    });
  }
  function ih(e, t, n) {
    e[e.length - 1] = n;
  }
  var ic = [{
    name: "group",
    query: true,
    regex: "(" + ir.group + ")",
    populate: function (e, t, n) {
      var r = l(n, 1)[0];
      t.checks.push({
        type: ia.GROUP,
        value: r === "*" ? r : r + "s"
      });
    }
  }, {
    name: "state",
    query: true,
    regex: il,
    populate: function (e, t, n) {
      var r = l(n, 1)[0];
      t.checks.push({
        type: ia.STATE,
        value: r
      });
    }
  }, {
    name: "id",
    query: true,
    regex: "\\#(" + ir.id + ")",
    populate: function (e, t, n) {
      var r = l(n, 1)[0];
      t.checks.push({
        type: ia.ID,
        value: iu(r)
      });
    }
  }, {
    name: "className",
    query: true,
    regex: "\\.(" + ir.className + ")",
    populate: function (e, t, n) {
      var r = l(n, 1)[0];
      t.checks.push({
        type: ia.CLASS,
        value: iu(r)
      });
    }
  }, {
    name: "dataExists",
    query: true,
    regex: "\\[\\s*(" + ir.variable + ")\\s*\\]",
    populate: function (e, t, n) {
      var r = l(n, 1)[0];
      t.checks.push({
        type: ia.DATA_EXIST,
        field: iu(r)
      });
    }
  }, {
    name: "dataCompare",
    query: true,
    regex: "\\[\\s*(" + ir.variable + ")\\s*(" + ir.comparatorOp + ")\\s*(" + ir.value + ")\\s*\\]",
    populate: function (e, t, n) {
      var r = l(n, 3);
      var i = r[0];
      var a = r[1];
      var o = r[2];
      o = RegExp("^" + ir.string + "$").exec(o) != null ? o.substring(1, o.length - 1) : parseFloat(o);
      t.checks.push({
        type: ia.DATA_COMPARE,
        field: iu(i),
        operator: a,
        value: o
      });
    }
  }, {
    name: "dataBool",
    query: true,
    regex: "\\[\\s*(" + ir.boolOp + ")\\s*(" + ir.variable + ")\\s*\\]",
    populate: function (e, t, n) {
      var r = l(n, 2);
      var i = r[0];
      var a = r[1];
      t.checks.push({
        type: ia.DATA_BOOL,
        field: iu(a),
        operator: i
      });
    }
  }, {
    name: "metaCompare",
    query: true,
    regex: "\\[\\[\\s*(" + ir.meta + ")\\s*(" + ir.comparatorOp + ")\\s*(" + ir.number + ")\\s*\\]\\]",
    populate: function (e, t, n) {
      var r = l(n, 3);
      var i = r[0];
      var a = r[1];
      var o = r[2];
      t.checks.push({
        type: ia.META_COMPARE,
        field: iu(i),
        operator: a,
        value: parseFloat(o)
      });
    }
  }, {
    name: "nextQuery",
    separator: true,
    regex: ir.separator,
    populate: function (e, t) {
      var n = e.currentSubject;
      var r = e.edgeCount;
      var i = e.compoundCount;
      var a = e[e.length - 1];
      if (n != null) {
        a.subject = n;
        e.currentSubject = null;
      }
      a.edgeCount = r;
      a.compoundCount = i;
      e.edgeCount = 0;
      e.compoundCount = 0;
      return e[e.length++] = ii();
    }
  }, {
    name: "directedEdge",
    separator: true,
    regex: ir.directedEdge,
    populate: function (e, t) {
      if (e.currentSubject == null) {
        var n = ii();
        var r = ii();
        n.checks.push({
          type: ia.DIRECTED_EDGE,
          source: t,
          target: r
        });
        ih(e, t, n);
        e.edgeCount++;
        return r;
      }
      var i = ii();
      var a = ii();
      i.checks.push({
        type: ia.NODE_SOURCE,
        source: t,
        target: a
      });
      ih(e, t, i);
      e.edgeCount++;
      return a;
    }
  }, {
    name: "undirectedEdge",
    separator: true,
    regex: ir.undirectedEdge,
    populate: function (e, t) {
      if (e.currentSubject == null) {
        var n = ii();
        var r = ii();
        n.checks.push({
          type: ia.UNDIRECTED_EDGE,
          nodes: [t, r]
        });
        ih(e, t, n);
        e.edgeCount++;
        return r;
      }
      var i = ii();
      var a = ii();
      i.checks.push({
        type: ia.NODE_NEIGHBOR,
        node: t,
        neighbor: a
      });
      ih(e, t, i);
      return a;
    }
  }, {
    name: "child",
    separator: true,
    regex: ir.child,
    populate: function (e, t) {
      if (e.currentSubject == null) {
        var n = ii();
        var r = ii();
        var i = e[e.length - 1];
        n.checks.push({
          type: ia.CHILD,
          parent: i,
          child: r
        });
        ih(e, t, n);
        e.compoundCount++;
        return r;
      }
      if (e.currentSubject === t) {
        var a = ii();
        var o = e[e.length - 1];
        var s = ii();
        var l = ii();
        var u = ii();
        var h = ii();
        a.checks.push({
          type: ia.COMPOUND_SPLIT,
          left: o,
          right: s,
          subject: l
        });
        l.checks = t.checks;
        t.checks = [{
          type: ia.TRUE
        }];
        h.checks.push({
          type: ia.TRUE
        });
        s.checks.push({
          type: ia.PARENT,
          parent: h,
          child: u
        });
        ih(e, o, a);
        e.currentSubject = l;
        e.compoundCount++;
        return u;
      }
      var c = ii();
      var d = ii();
      var p = [{
        type: ia.PARENT,
        parent: c,
        child: d
      }];
      c.checks = t.checks;
      t.checks = p;
      e.compoundCount++;
      return d;
    }
  }, {
    name: "descendant",
    separator: true,
    regex: ir.descendant,
    populate: function (e, t) {
      if (e.currentSubject == null) {
        var n = ii();
        var r = ii();
        var i = e[e.length - 1];
        n.checks.push({
          type: ia.DESCENDANT,
          ancestor: i,
          descendant: r
        });
        ih(e, t, n);
        e.compoundCount++;
        return r;
      }
      if (e.currentSubject === t) {
        var a = ii();
        var o = e[e.length - 1];
        var s = ii();
        var l = ii();
        var u = ii();
        var h = ii();
        a.checks.push({
          type: ia.COMPOUND_SPLIT,
          left: o,
          right: s,
          subject: l
        });
        l.checks = t.checks;
        t.checks = [{
          type: ia.TRUE
        }];
        h.checks.push({
          type: ia.TRUE
        });
        s.checks.push({
          type: ia.ANCESTOR,
          ancestor: h,
          descendant: u
        });
        ih(e, o, a);
        e.currentSubject = l;
        e.compoundCount++;
        return u;
      }
      var c = ii();
      var d = ii();
      var p = [{
        type: ia.ANCESTOR,
        ancestor: c,
        descendant: d
      }];
      c.checks = t.checks;
      t.checks = p;
      e.compoundCount++;
      return d;
    }
  }, {
    name: "subject",
    modifier: true,
    regex: ir.subject,
    populate: function (e, t) {
      if (e.currentSubject != null && e.currentSubject !== t) {
        eJ("Redefinition of subject in selector `" + e.toString() + "`");
        return false;
      }
      e.currentSubject = t;
      var n = e[e.length - 1].checks[0];
      var r = n == null ? null : n.type;
      if (r === ia.DIRECTED_EDGE) {
        n.type = ia.NODE_TARGET;
      } else if (r === ia.UNDIRECTED_EDGE) {
        n.type = ia.NODE_NEIGHBOR;
        n.node = n.nodes[1];
        n.neighbor = n.nodes[0];
        n.nodes = null;
      }
    }
  }];
  ic.forEach(function (e) {
    return e.regexObj = RegExp("^" + e.regex);
  });
  function id(e) {
    var t;
    var n;
    var r;
    var i = 0;
    for (; i < ic.length; i++) {
      var a = ic[i];
      var o = a.name;
      var s = e.match(a.regexObj);
      if (s != null) {
        n = s;
        t = a;
        r = o;
        var l = s[0];
        e = e.substring(l.length);
        break;
      }
    }
    return {
      expr: t,
      match: n,
      name: r,
      remaining: e
    };
  }
  function ip(e) {
    var t = e.match(/^\s+/);
    if (t) {
      var n = t[0];
      e = e.substring(n.length);
    }
    return e;
  }
  function ig(e, t, n) {
    var r;
    var i;
    var a;
    var o = _(e);
    var s = S(e);
    var l = _(n);
    var u = false;
    var h = false;
    var c = false;
    if (t.indexOf("!") >= 0) {
      t = t.replace("!", "");
      h = true;
    }
    if (t.indexOf("@") >= 0) {
      t = t.replace("@", "");
      u = true;
    }
    if (o || l || u) {
      i = o || s ? "" + e : "";
      a = "" + n;
    }
    if (u) {
      e = i = i.toLowerCase();
      n = a = a.toLowerCase();
    }
    switch (t) {
      case "*=":
        r = i.indexOf(a) >= 0;
        break;
      case "$=":
        r = i.indexOf(a, i.length - a.length) >= 0;
        break;
      case "^=":
        r = i.indexOf(a) === 0;
        break;
      case "=":
        r = e === n;
        break;
      case ">":
        c = true;
        r = e > n;
        break;
      case ">=":
        c = true;
        r = e >= n;
        break;
      case "<":
        c = true;
        r = e < n;
        break;
      case "<=":
        c = true;
        r = e <= n;
        break;
      default:
        r = false;
    }
    if (h && (e != null || !c)) {
      r = !r;
    }
    return r;
  }
  function iv(e, t) {
    switch (t) {
      case "?":
        return !!e;
      case "!":
        return !e;
      case "^":
        return e === undefined;
    }
  }
  function iy(e, t) {
    return e.data(t);
  }
  var im = [];
  function ib(e, t) {
    return e.checks.every(function (e) {
      return im[e.type](e, t);
    });
  }
  im[ia.GROUP] = function (e, t) {
    var n = e.value;
    return n === "*" || n === t.group();
  };
  im[ia.STATE] = function (e, t) {
    return is[e.value](t);
  };
  im[ia.ID] = function (e, t) {
    var n = e.value;
    return t.id() === n;
  };
  im[ia.CLASS] = function (e, t) {
    var n = e.value;
    return t.hasClass(n);
  };
  im[ia.META_COMPARE] = function (e, t) {
    var n = e.field;
    var r = e.operator;
    var i = e.value;
    return ig(t[n](), r, i);
  };
  im[ia.DATA_COMPARE] = function (e, t) {
    var n = e.field;
    var r = e.operator;
    var i = e.value;
    return ig(iy(t, n), r, i);
  };
  im[ia.DATA_BOOL] = function (e, t) {
    var n = e.field;
    var r = e.operator;
    return iv(iy(t, n), r);
  };
  im[ia.DATA_EXIST] = function (e, t) {
    var n = e.field;
    e.operator;
    return iy(t, n) !== undefined;
  };
  im[ia.UNDIRECTED_EDGE] = function (e, t) {
    var n = e.nodes[0];
    var r = e.nodes[1];
    var i = t.source();
    var a = t.target();
    return ib(n, i) && ib(r, a) || ib(r, i) && ib(n, a);
  };
  im[ia.NODE_NEIGHBOR] = function (e, t) {
    return ib(e.node, t) && t.neighborhood().some(function (t) {
      return t.isNode() && ib(e.neighbor, t);
    });
  };
  im[ia.DIRECTED_EDGE] = function (e, t) {
    return ib(e.source, t.source()) && ib(e.target, t.target());
  };
  im[ia.NODE_SOURCE] = function (e, t) {
    return ib(e.source, t) && t.outgoers().some(function (t) {
      return t.isNode() && ib(e.target, t);
    });
  };
  im[ia.NODE_TARGET] = function (e, t) {
    return ib(e.target, t) && t.incomers().some(function (t) {
      return t.isNode() && ib(e.source, t);
    });
  };
  im[ia.CHILD] = function (e, t) {
    return ib(e.child, t) && ib(e.parent, t.parent());
  };
  im[ia.PARENT] = function (e, t) {
    return ib(e.parent, t) && t.children().some(function (t) {
      return ib(e.child, t);
    });
  };
  im[ia.DESCENDANT] = function (e, t) {
    return ib(e.descendant, t) && t.ancestors().some(function (t) {
      return ib(e.ancestor, t);
    });
  };
  im[ia.ANCESTOR] = function (e, t) {
    return ib(e.ancestor, t) && t.descendants().some(function (t) {
      return ib(e.descendant, t);
    });
  };
  im[ia.COMPOUND_SPLIT] = function (e, t) {
    return ib(e.subject, t) && ib(e.left, t) && ib(e.right, t);
  };
  im[ia.TRUE] = function () {
    return true;
  };
  im[ia.COLLECTION] = function (e, t) {
    return e.value.has(t);
  };
  im[ia.FILTER] = function (e, t) {
    return e.value(t);
  };
  function ix(e) {
    this.inputText = e;
    this.currentSubject = null;
    this.compoundCount = 0;
    this.edgeCount = 0;
    this.length = 0;
    if (e != null && (!_(e) || !e.match(/^\s*$/))) {
      if (O(e)) {
        this.addQuery({
          checks: [{
            type: ia.COLLECTION,
            value: e.collection()
          }]
        });
      } else if (D(e)) {
        this.addQuery({
          checks: [{
            type: ia.FILTER,
            value: e
          }]
        });
      } else if (_(e)) {
        if (!this.parse(e)) {
          this.invalid = true;
        }
      } else {
        e$("A selector must be created from a string; found ");
      }
    }
  }
  var iw = ix.prototype;
  [{
    parse: function (e) {
      var t = this.inputText = e;
      var n = this[0] = ii();
      this.length = 1;
      t = ip(t);
      while (true) {
        var r = id(t);
        if (r.expr == null) {
          eJ("The selector `" + e + "`is invalid");
          return false;
        }
        var i = r.match.slice(1);
        var a = r.expr.populate(this, n, i);
        if (a === false) {
          return false;
        }
        if (a != null) {
          n = a;
        }
        if ((t = r.remaining).match(/^\s*$/)) {
          break;
        }
      }
      var o = this[this.length - 1];
      if (this.currentSubject != null) {
        o.subject = this.currentSubject;
      }
      o.edgeCount = this.edgeCount;
      o.compoundCount = this.compoundCount;
      for (var s = 0; s < this.length; s++) {
        var l = this[s];
        if (l.compoundCount > 0 && l.edgeCount > 0) {
          eJ("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector");
          return false;
        }
        if (l.edgeCount > 1) {
          eJ("The selector `" + e + "` is invalid because it uses multiple edge selectors");
          return false;
        }
        if (l.edgeCount === 1) {
          eJ("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
        }
      }
      return true;
    },
    toString: function () {
      if (this.toStringCache != null) {
        return this.toStringCache;
      }
      function e(e) {
        if (e == null) {
          return "";
        } else {
          return e;
        }
      }
      function t(t) {
        if (_(t)) {
          return "\"" + t + "\"";
        } else {
          return e(t);
        }
      }
      function n(e) {
        return " " + e + " ";
      }
      function r(r, a) {
        var o = r.type;
        var s = r.value;
        switch (o) {
          case ia.GROUP:
            var l = e(s);
            return l.substring(0, l.length - 1);
          case ia.DATA_COMPARE:
            return "[" + r.field + n(e(r.operator)) + t(s) + "]";
          case ia.DATA_BOOL:
            var u = r.operator;
            var h = r.field;
            return "[" + e(u) + h + "]";
          case ia.DATA_EXIST:
            return "[" + r.field + "]";
          case ia.META_COMPARE:
            var c = r.operator;
            return "[[" + r.field + n(e(c)) + t(s) + "]]";
          case ia.STATE:
            return s;
          case ia.ID:
            return "#" + s;
          case ia.CLASS:
            return "." + s;
          case ia.PARENT:
          case ia.CHILD:
            return i(r.parent, a) + n(">") + i(r.child, a);
          case ia.ANCESTOR:
          case ia.DESCENDANT:
            return i(r.ancestor, a) + " " + i(r.descendant, a);
          case ia.COMPOUND_SPLIT:
            var d = i(r.left, a);
            var p = i(r.subject, a);
            var g = i(r.right, a);
            return d + (d.length > 0 ? " " : "") + p + g;
          case ia.TRUE:
            return "";
        }
      }
      function i(e, t) {
        return e.checks.reduce(function (n, i, a) {
          return n + (t === e && a === 0 ? "$" : "") + r(i, t);
        }, "");
      }
      var a = "";
      var o = 0;
      for (; o < this.length; o++) {
        var s = this[o];
        a += i(s, s.subject);
        if (this.length > 1 && o < this.length - 1) {
          a += ", ";
        }
      }
      this.toStringCache = a;
      return a;
    }
  }, {
    matches: function (e) {
      for (var t = 0; t < this.length; t++) {
        if (ib(this[t], e)) {
          return true;
        }
      }
      return false;
    },
    filter: function (e) {
      var t = this;
      if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === ia.ID) {
        return e.getElementById(t[0].checks[0].value).collection();
      }
      function n(e) {
        for (var n = 0; n < t.length; n++) {
          if (ib(t[n], e)) {
            return true;
          }
        }
        return false;
      }
      if (t.text() == null) {
        n = function () {
          return true;
        };
      }
      return e.filter(n);
    }
  }].forEach(function (e) {
    return Z(iw, e);
  });
  iw.text = function () {
    return this.inputText;
  };
  iw.size = function () {
    return this.length;
  };
  iw.eq = function (e) {
    return this[e];
  };
  iw.sameText = function (e) {
    return !this.invalid && !e.invalid && this.text() === e.text();
  };
  iw.addQuery = function (e) {
    this[this.length++] = e;
  };
  iw.selector = iw.toString;
  var iE = {
    allAre: function (e) {
      var t = new ix(e);
      return this.every(function (e) {
        return t.matches(e);
      });
    },
    is: function (e) {
      var t = new ix(e);
      return this.some(function (e) {
        return t.matches(e);
      });
    },
    some: function (e, t) {
      for (var n = 0; n < this.length; n++) {
        if (t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this)) {
          return true;
        }
      }
      return false;
    },
    every: function (e, t) {
      for (var n = 0; n < this.length; n++) {
        if (!(t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this))) {
          return false;
        }
      }
      return true;
    },
    same: function (e) {
      if (this === e) {
        return true;
      }
      e = this.cy().collection(e);
      var t = this.length;
      return t === e.length && (t === 1 ? this[0] === e[0] : this.every(function (t) {
        return e.hasElementWithId(t.id());
      }));
    },
    anySame: function (e) {
      e = this.cy().collection(e);
      return this.some(function (t) {
        return e.hasElementWithId(t.id());
      });
    },
    allAreNeighbors: function (e) {
      e = this.cy().collection(e);
      var t = this.neighborhood();
      return e.every(function (e) {
        return t.hasElementWithId(e.id());
      });
    },
    contains: function (e) {
      e = this.cy().collection(e);
      var t = this;
      return e.every(function (e) {
        return t.hasElementWithId(e.id());
      });
    }
  };
  iE.allAreNeighbours = iE.allAreNeighbors;
  iE.has = iE.contains;
  iE.equal = iE.equals = iE.same;
  function iT(e, t) {
    return function (n, r, i, a) {
      if (n == null) {
        o = "";
      } else if (O(n) && n.length === 1) {
        o = n.id();
      }
      if (this.length !== 1 || !o) {
        return e.call(this, n, r, i, a);
      }
      var o;
      var s = this[0]._private;
      var l = s.traversalCache = s.traversalCache || {};
      var u = l[t] = l[t] || [];
      var h = eY(o);
      var c = u[h];
      return c || (u[h] = e.call(this, n, r, i, a));
    };
  }
  var iC = {
    parent: function (e) {
      var t = [];
      if (this.length === 1) {
        var n = this[0]._private.parent;
        if (n) {
          return n;
        }
      }
      for (var r = 0; r < this.length; r++) {
        var i = this[r]._private.parent;
        if (i) {
          t.push(i);
        }
      }
      return this.spawn(t, true).filter(e);
    },
    parents: function (e) {
      var t = [];
      var n = this.parent();
      while (n.nonempty()) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          t.push(i);
        }
        n = n.parent();
      }
      return this.spawn(t, true).filter(e);
    },
    commonAncestors: function (e) {
      var t;
      var n = 0;
      for (; n < this.length; n++) {
        var r = this[n].parents();
        t = (t = t || r).intersect(r);
      }
      return t.filter(e);
    },
    orphans: function (e) {
      return this.stdFilter(function (e) {
        return e.isOrphan();
      }).filter(e);
    },
    nonorphans: function (e) {
      return this.stdFilter(function (e) {
        return e.isChild();
      }).filter(e);
    },
    children: iT(function (e) {
      var t = [];
      var n = 0;
      for (; n < this.length; n++) {
        var r = this[n]._private.children;
        var i = 0;
        for (; i < r.length; i++) {
          t.push(r[i]);
        }
      }
      return this.spawn(t, true).filter(e);
    }, "children"),
    siblings: function (e) {
      return this.parent().children().not(this).filter(e);
    },
    isParent: function () {
      var e = this[0];
      if (e) {
        return e.isNode() && e._private.children.length !== 0;
      }
    },
    isChildless: function () {
      var e = this[0];
      if (e) {
        return e.isNode() && e._private.children.length === 0;
      }
    },
    isChild: function () {
      var e = this[0];
      if (e) {
        return e.isNode() && e._private.parent != null;
      }
    },
    isOrphan: function () {
      var e = this[0];
      if (e) {
        return e.isNode() && e._private.parent == null;
      }
    },
    descendants: function (e) {
      var t = [];
      (function e(n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          t.push(i);
          if (i.children().nonempty()) {
            e(i.children());
          }
        }
      })(this.children());
      return this.spawn(t, true).filter(e);
    }
  };
  function iN(e, t, n, r) {
    var i = [];
    var a = new tr();
    var o = e.cy().hasCompoundNodes();
    var s = 0;
    for (; s < e.length; s++) {
      var l = e[s];
      if (n) {
        i.push(l);
      } else if (o) {
        r(i, a, l);
      }
    }
    while (i.length > 0) {
      var u = i.shift();
      t(u);
      a.add(u.id());
      if (o) {
        r(i, a, u);
      }
    }
    return e;
  }
  function i_(e, t, n) {
    if (n.isParent()) {
      var r = n._private.children;
      var i = 0;
      for (; i < r.length; i++) {
        var a = r[i];
        if (!t.has(a.id())) {
          e.push(a);
        }
      }
    }
  }
  function iD(e, t, n) {
    if (n.isChild()) {
      var r = n._private.parent;
      if (!t.has(r.id())) {
        e.push(r);
      }
    }
  }
  function iM(e, t, n) {
    iD(e, t, n);
    i_(e, t, n);
  }
  iC.forEachDown = function (e) {
    var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    return iN(this, e, t, i_);
  };
  iC.forEachUp = function (e) {
    var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    return iN(this, e, t, iD);
  };
  iC.forEachUpAndDown = function (e) {
    var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    return iN(this, e, t, iM);
  };
  iC.ancestors = iC.parents;
  (oK = oZ = {
    data: r7.data({
      field: "data",
      bindingEvent: "data",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "data",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      immutableKeys: {
        id: true,
        source: true,
        target: true,
        parent: true
      },
      updateStyle: true
    }),
    removeData: r7.removeData({
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: true,
      immutableKeys: {
        id: true,
        source: true,
        target: true,
        parent: true
      },
      updateStyle: true
    }),
    scratch: r7.data({
      field: "scratch",
      bindingEvent: "scratch",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "scratch",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      updateStyle: true
    }),
    removeScratch: r7.removeData({
      field: "scratch",
      event: "scratch",
      triggerFnName: "trigger",
      triggerEvent: true,
      updateStyle: true
    }),
    rscratch: r7.data({
      field: "rscratch",
      allowBinding: false,
      allowSetting: true,
      settingTriggersEvent: false,
      allowGetting: true
    }),
    removeRscratch: r7.removeData({
      field: "rscratch",
      triggerEvent: false
    }),
    id: function () {
      var e = this[0];
      if (e) {
        return e._private.data.id;
      }
    }
  }).attr = oK.data;
  oK.removeAttr = oK.removeData;
  var iA = {};
  function iS(e) {
    return function (t = true) {
      if (this.length !== 0) {
        if (!!this.isNode() && !this.removed()) {
          var n = 0;
          var r = this[0];
          var i = r._private.edges;
          var a = 0;
          for (; a < i.length; a++) {
            var o = i[a];
            if (!!t || !o.isLoop()) {
              n += e(r, o);
            }
          }
          return n;
        }
      }
    };
  }
  function iP(e, t) {
    return function (n) {
      var r;
      var i = this.nodes();
      var a = 0;
      for (; a < i.length; a++) {
        var o = i[a][e](n);
        if (o !== undefined && (r === undefined || t(o, r))) {
          r = o;
        }
      }
      return r;
    };
  }
  Z(iA, {
    degree: iS(function (e, t) {
      if (t.source().same(t.target())) {
        return 2;
      } else {
        return 1;
      }
    }),
    indegree: iS(function (e, t) {
      return +!!t.target().same(e);
    }),
    outdegree: iS(function (e, t) {
      return +!!t.source().same(e);
    })
  });
  Z(iA, {
    minDegree: iP("degree", function (e, t) {
      return e < t;
    }),
    maxDegree: iP("degree", function (e, t) {
      return e > t;
    }),
    minIndegree: iP("indegree", function (e, t) {
      return e < t;
    }),
    maxIndegree: iP("indegree", function (e, t) {
      return e > t;
    }),
    minOutdegree: iP("outdegree", function (e, t) {
      return e < t;
    }),
    maxOutdegree: iP("outdegree", function (e, t) {
      return e > t;
    })
  });
  Z(iA, {
    totalDegree: function (e) {
      var t = 0;
      var n = this.nodes();
      var r = 0;
      for (; r < n.length; r++) {
        t += n[r].degree(e);
      }
      return t;
    }
  });
  function iO(e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      if (!i.locked()) {
        var a = i._private.position;
        var o = {
          x: t.x != null ? t.x - a.x : 0,
          y: t.y != null ? t.y - a.y : 0
        };
        if (i.isParent() && (o.x !== 0 || o.y !== 0)) {
          i.children().shift(o, n);
        }
        i.dirtyBoundingBoxCache();
      }
    }
  }
  var iI = {
    field: "position",
    bindingEvent: "position",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "position",
    settingTriggersEvent: true,
    triggerFnName: "emitAndNotify",
    allowGetting: true,
    validKeys: ["x", "y"],
    beforeGet: function (e) {
      e.updateCompoundBounds();
    },
    beforeSet: function (e, t) {
      iO(e, t, false);
    },
    onSet: function (e) {
      e.dirtyCompoundBoundsCache();
    },
    canSet: function (e) {
      return !e.locked();
    }
  };
  (o$ = oQ = {
    position: r7.data(iI),
    silentPosition: r7.data(Z({}, iI, {
      allowBinding: false,
      allowSetting: true,
      settingTriggersEvent: false,
      allowGetting: false,
      beforeSet: function (e, t) {
        iO(e, t, true);
      },
      onSet: function (e) {
        e.dirtyCompoundBoundsCache();
      }
    })),
    positions: function (e, t) {
      if (A(e)) {
        if (t) {
          this.silentPosition(e);
        } else {
          this.position(e);
        }
      } else if (D(e)) {
        var n = this.cy();
        n.startBatch();
        for (var r = 0; r < this.length; r++) {
          var i = this[r];
          var a = undefined;
          if (a = e(i, r)) {
            if (t) {
              i.silentPosition(a);
            } else {
              i.position(a);
            }
          }
        }
        n.endBatch();
      }
      return this;
    },
    silentPositions: function (e) {
      return this.positions(e, true);
    },
    shift: function (e, t, n) {
      var r;
      if (A(e)) {
        r = {
          x: S(e.x) ? e.x : 0,
          y: S(e.y) ? e.y : 0
        };
        n = t;
      } else if (_(e) && S(t)) {
        (r = {
          x: 0,
          y: 0
        })[e] = t;
      }
      if (r != null) {
        var i = this.cy();
        i.startBatch();
        for (var a = 0; a < this.length; a++) {
          var o = this[a];
          if (!i.hasCompoundNodes() || !o.isChild() || !o.ancestors().anySame(this)) {
            var s = o.position();
            var l = {
              x: s.x + r.x,
              y: s.y + r.y
            };
            if (n) {
              o.silentPosition(l);
            } else {
              o.position(l);
            }
          }
        }
        i.endBatch();
      }
      return this;
    },
    silentShift: function (e, t) {
      if (A(e)) {
        this.shift(e, true);
      } else if (_(e) && S(t)) {
        this.shift(e, t, true);
      }
      return this;
    },
    renderedPosition: function (e, t) {
      var n = this[0];
      var r = this.cy();
      var i = r.zoom();
      var a = r.pan();
      var o = A(e) ? e : undefined;
      var s = o !== undefined || t !== undefined && _(e);
      if (n && n.isNode()) {
        if (!s) {
          o = tf(n.position(), i, a);
          if (e === undefined) {
            return o;
          } else {
            return o[e];
          }
        }
        for (var l = 0; l < this.length; l++) {
          var u = this[l];
          if (t !== undefined) {
            u.position(e, (t - a[e]) / i);
          } else if (o !== undefined) {
            u.position(tv(o, i, a));
          }
        }
      } else if (!s) {
        return;
      }
      return this;
    },
    relativePosition: function (e, t) {
      var n = this[0];
      var r = this.cy();
      var i = A(e) ? e : undefined;
      var a = i !== undefined || t !== undefined && _(e);
      var o = r.hasCompoundNodes();
      if (n && n.isNode()) {
        if (a) {
          for (var s = 0; s < this.length; s++) {
            var l = this[s];
            var u = o ? l.parent() : null;
            var h = u && u.length > 0;
            if (h) {
              u = u[0];
            }
            var c = h ? u.position() : {
              x: 0,
              y: 0
            };
            if (t !== undefined) {
              l.position(e, t + c[e]);
            } else if (i !== undefined) {
              l.position({
                x: i.x + c.x,
                y: i.y + c.y
              });
            }
          }
        } else {
          var d = n.position();
          var p = o ? n.parent() : null;
          var g = p && p.length > 0;
          if (g) {
            p = p[0];
          }
          var f = g ? p.position() : {
            x: 0,
            y: 0
          };
          i = {
            x: d.x - f.x,
            y: d.y - f.y
          };
          if (e === undefined) {
            return i;
          } else {
            return i[e];
          }
        }
      } else if (!a) {
        return;
      }
      return this;
    }
  }).modelPosition = o$.point = o$.position;
  o$.modelPositions = o$.points = o$.positions;
  o$.renderedPoint = o$.renderedPosition;
  o$.relativePoint = o$.relativePosition;
  oJ = o0 = {};
  o0.renderedBoundingBox = function (e) {
    var t = this.boundingBox(e);
    var n = this.cy();
    var r = n.zoom();
    var i = n.pan();
    var a = t.x1 * r + i.x;
    var o = t.x2 * r + i.x;
    var s = t.y1 * r + i.y;
    var l = t.y2 * r + i.y;
    return {
      x1: a,
      x2: o,
      y1: s,
      y2: l,
      w: o - a,
      h: l - s
    };
  };
  o0.dirtyCompoundBoundsCache = function (e = false) {
    var t = this.cy();
    if (t.styleEnabled() && t.hasCompoundNodes()) {
      this.forEachUp(function (t) {
        if (t.isParent()) {
          var n = t._private;
          n.compoundBoundsClean = false;
          n.bbCache = null;
          if (!e) {
            t.emitAndNotify("bounds");
          }
        }
      });
    }
    return this;
  };
  o0.updateCompoundBounds = function (e = false) {
    var t = this.cy();
    if (!t.styleEnabled() || !t.hasCompoundNodes() || !e && t.batching()) {
      return this;
    }
    for (var n = 0; n < this.length; n++) {
      var r = this[n];
      var i = r._private;
      if (!i.compoundBoundsClean || !!e) {
        (function (e) {
          if (e.isParent()) {
            var t = e._private;
            var n = e.children();
            var r = e.pstyle("compound-sizing-wrt-labels").value === "include";
            var i = {
              width: {
                val: e.pstyle("min-width").pfValue,
                left: e.pstyle("min-width-bias-left"),
                right: e.pstyle("min-width-bias-right")
              },
              height: {
                val: e.pstyle("min-height").pfValue,
                top: e.pstyle("min-height-bias-top"),
                bottom: e.pstyle("min-height-bias-bottom")
              }
            };
            var a = n.boundingBox({
              includeLabels: r,
              includeOverlays: false,
              useCache: false
            });
            var o = t.position;
            if (a.w === 0 || a.h === 0) {
              (a = {
                w: e.pstyle("width").pfValue,
                h: e.pstyle("height").pfValue
              }).x1 = o.x - a.w / 2;
              a.x2 = o.x + a.w / 2;
              a.y1 = o.y - a.h / 2;
              a.y2 = o.y + a.h / 2;
            }
            var s = i.width.left.value;
            if (i.width.left.units === "px" && i.width.val > 0) {
              s = s * 100 / i.width.val;
            }
            var l = i.width.right.value;
            if (i.width.right.units === "px" && i.width.val > 0) {
              l = l * 100 / i.width.val;
            }
            var u = i.height.top.value;
            if (i.height.top.units === "px" && i.height.val > 0) {
              u = u * 100 / i.height.val;
            }
            var h = i.height.bottom.value;
            if (i.height.bottom.units === "px" && i.height.val > 0) {
              h = h * 100 / i.height.val;
            }
            var c = y(i.width.val - a.w, s, l);
            var d = c.biasDiff;
            var p = c.biasComplementDiff;
            var g = y(i.height.val - a.h, u, h);
            var f = g.biasDiff;
            var v = g.biasComplementDiff;
            t.autoPadding = function (e, t, n, r) {
              if (n.units === "%") {
                switch (r) {
                  case "width":
                    if (e > 0) {
                      return n.pfValue * e;
                    } else {
                      return 0;
                    }
                  case "height":
                    if (t > 0) {
                      return n.pfValue * t;
                    } else {
                      return 0;
                    }
                  case "average":
                    if (e > 0 && t > 0) {
                      return n.pfValue * (e + t) / 2;
                    } else {
                      return 0;
                    }
                  case "min":
                    if (e > 0 && t > 0) {
                      if (e > t) {
                        return n.pfValue * t;
                      } else {
                        return n.pfValue * e;
                      }
                    } else {
                      return 0;
                    }
                  case "max":
                    if (e > 0 && t > 0) {
                      if (e > t) {
                        return n.pfValue * e;
                      } else {
                        return n.pfValue * t;
                      }
                    } else {
                      return 0;
                    }
                  default:
                    return 0;
                }
              } else if (n.units === "px") {
                return n.pfValue;
              } else {
                return 0;
              }
            }(a.w, a.h, e.pstyle("padding"), e.pstyle("padding-relative-to").value);
            t.autoWidth = Math.max(a.w, i.width.val);
            o.x = (-d + a.x1 + a.x2 + p) / 2;
            t.autoHeight = Math.max(a.h, i.height.val);
            o.y = (-f + a.y1 + a.y2 + v) / 2;
          }
          function y(e, t, n) {
            var r = 0;
            var i = 0;
            var a = t + n;
            if (e > 0 && a > 0) {
              r = t / a * e;
              i = n / a * e;
            }
            return {
              biasDiff: r,
              biasComplementDiff: i
            };
          }
        })(r);
        if (!t.batching()) {
          i.compoundBoundsClean = true;
        }
      }
    }
    return this;
  };
  function iL(e) {
    if (e === Infinity || e === -Infinity) {
      return 0;
    } else {
      return e;
    }
  }
  function ik(e, t, n, r, i) {
    if (r - t != 0 && i - n != 0 && t != null && n != null && r != null && i != null) {
      e.x1 = t < e.x1 ? t : e.x1;
      e.x2 = r > e.x2 ? r : e.x2;
      e.y1 = n < e.y1 ? n : e.y1;
      e.y2 = i > e.y2 ? i : e.y2;
      e.w = e.x2 - e.x1;
      e.h = e.y2 - e.y1;
    }
  }
  function iR(e, t) {
    if (t == null) {
      return e;
    } else {
      return ik(e, t.x1, t.y1, t.x2, t.y2);
    }
  }
  function iB(e, t, n) {
    return e8(e, t, n);
  }
  function iF(e, t, n) {
    if (!t.cy().headless()) {
      var r;
      var i;
      var a = t._private;
      var o = a.rstyle;
      var s = o.arrowWidth / 2;
      if (t.pstyle(n + "-arrow-shape").value !== "none") {
        if (n === "source") {
          r = o.srcX;
          i = o.srcY;
        } else if (n === "target") {
          r = o.tgtX;
          i = o.tgtY;
        } else {
          r = o.midX;
          i = o.midY;
        }
        var l = a.arrowBounds = a.arrowBounds || {};
        var u = l[n] = l[n] || {};
        u.x1 = r - s;
        u.y1 = i - s;
        u.x2 = r + s;
        u.y2 = i + s;
        u.w = u.x2 - u.x1;
        u.h = u.y2 - u.y1;
        tR(u, 1);
        ik(e, u.x1, u.y1, u.x2, u.y2);
      }
    }
  }
  function iz(e, t, n) {
    if (!t.cy().headless()) {
      a = n ? n + "-" : "";
      var r = t._private;
      var i = r.rstyle;
      if (t.pstyle(a + "label").strValue) {
        var a;
        var o;
        var s;
        var l;
        var u;
        var h = t.pstyle("text-halign");
        var c = t.pstyle("text-valign");
        var d = iB(i, "labelWidth", n);
        var p = iB(i, "labelHeight", n);
        var g = iB(i, "labelX", n);
        var f = iB(i, "labelY", n);
        var v = t.pstyle(a + "text-margin-x").pfValue;
        var y = t.pstyle(a + "text-margin-y").pfValue;
        var b = t.isEdge();
        var x = t.pstyle(a + "text-rotation");
        var w = t.pstyle("text-outline-width").pfValue;
        var E = t.pstyle("text-border-width").pfValue / 2;
        var T = t.pstyle("text-background-padding").pfValue;
        var C = d / 2;
        var N = p / 2;
        if (b) {
          o = g - C;
          s = g + C;
          l = f - N;
          u = f + N;
        } else {
          switch (h.value) {
            case "left":
              o = g - d;
              s = g;
              break;
            case "center":
              o = g - C;
              s = g + C;
              break;
            case "right":
              o = g;
              s = g + d;
          }
          switch (c.value) {
            case "top":
              l = f - p;
              u = f;
              break;
            case "center":
              l = f - N;
              u = f + N;
              break;
            case "bottom":
              l = f;
              u = f + p;
          }
        }
        var _ = v - Math.max(w, E) - T - 2;
        var D = v + Math.max(w, E) + T + 2;
        var M = y - Math.max(w, E) - T - 2;
        var A = y + Math.max(w, E) + T + 2;
        o += _;
        s += D;
        l += M;
        u += A;
        var S = n || "main";
        var P = r.labelBounds;
        var O = P[S] = P[S] || {};
        O.x1 = o;
        O.y1 = l;
        O.x2 = s;
        O.y2 = u;
        O.w = s - o;
        O.h = u - l;
        O.leftPad = _;
        O.rightPad = D;
        O.topPad = M;
        O.botPad = A;
        var I = b && x.strValue === "autorotate";
        var L = x.pfValue != null && x.pfValue !== 0;
        if (I || L) {
          var k = I ? iB(r.rstyle, "labelAngle", n) : x.pfValue;
          var R = Math.cos(k);
          var B = Math.sin(k);
          var F = (o + s) / 2;
          var z = (l + u) / 2;
          if (!b) {
            switch (h.value) {
              case "left":
                F = s;
                break;
              case "right":
                F = o;
            }
            switch (c.value) {
              case "top":
                z = u;
                break;
              case "bottom":
                z = l;
            }
          }
          function V(e, t) {
            return {
              x: (e -= F) * R - (t -= z) * B + F,
              y: e * B + t * R + z
            };
          }
          var Y = V(o, l);
          var G = V(o, u);
          var X = V(s, l);
          var H = V(s, u);
          o = Math.min(Y.x, G.x, X.x, H.x);
          s = Math.max(Y.x, G.x, X.x, H.x);
          l = Math.min(Y.y, G.y, X.y, H.y);
          u = Math.max(Y.y, G.y, X.y, H.y);
        }
        var U = S + "Rot";
        var W = P[U] = P[U] || {};
        W.x1 = o;
        W.y1 = l;
        W.x2 = s;
        W.y2 = u;
        W.w = s - o;
        W.h = u - l;
        ik(e, o, l, s, u);
        ik(r.labelBounds.all, o, l, s, u);
      }
      return e;
    }
  }
  function iV(e, t) {
    if (!t.cy().headless()) {
      var n = t.pstyle("outline-opacity").value;
      var r = t.pstyle("outline-width").value;
      if (n > 0 && r > 0) {
        var i = t.pstyle("outline-offset").value;
        var a = t.pstyle("shape").value;
        var o = r + i;
        var s = (e.w + o * 2) / e.w;
        var l = (e.h + o * 2) / e.h;
        var u = 0;
        if (["diamond", "pentagon", "round-triangle"].includes(a)) {
          s = (e.w + o * 2.4) / e.w;
          u = -o / 3.6;
        } else if (["concave-hexagon", "rhomboid", "right-rhomboid"].includes(a)) {
          s = (e.w + o * 2.4) / e.w;
        } else if (a === "star") {
          s = (e.w + o * 2.8) / e.w;
          l = (e.h + o * 2.6) / e.h;
          u = -o / 3.8;
        } else if (a === "triangle") {
          s = (e.w + o * 2.8) / e.w;
          l = (e.h + o * 2.4) / e.h;
          u = -o / 1.4;
        } else if (a === "vee") {
          s = (e.w + o * 4.4) / e.w;
          l = (e.h + o * 3.8) / e.h;
          u = -(o * 0.5);
        }
        var h = e.h * l - e.h;
        var c = e.w * s - e.w;
        tB(e, [Math.ceil(h / 2), Math.ceil(c / 2)]);
        if (u !== 0) {
          var d;
          d = u;
          var p = {
            x1: e.x1 + 0,
            x2: e.x2 + 0,
            y1: e.y1 + d,
            y2: e.y2 + d,
            w: e.w,
            h: e.h
          };
          tL(e, p);
        }
      }
    }
  }
  function iY(e, t) {
    var n = e._private.cy;
    var r = n.styleEnabled();
    var i = n.headless();
    var a = tO();
    var o = e._private;
    var s = e.isNode();
    var l = e.isEdge();
    var u = o.rstyle;
    var h = s && r ? e.pstyle("bounds-expansion").pfValue : [0];
    function c(e) {
      return e.pstyle("display").value !== "none";
    }
    var d = !r || c(e) && (!l || c(e.source()) && c(e.target()));
    if (d) {
      var p = 0;
      var g = 0;
      if (r && t.includeOverlays && e.pstyle("overlay-opacity").value !== 0) {
        g = e.pstyle("overlay-padding").value;
      }
      var f = 0;
      var v = 0;
      if (r && t.includeUnderlays && e.pstyle("underlay-opacity").value !== 0) {
        v = e.pstyle("underlay-padding").value;
      }
      var y = Math.max(g, v);
      var b = 0;
      var x = 0;
      if (r) {
        x = e.pstyle("width").pfValue / 2;
      }
      if (s && t.includeNodes) {
        var w = e.position();
        M = w.x;
        A = w.y;
        var E = e.outerWidth() / 2;
        var T = e.outerHeight() / 2;
        C = M - E;
        N = M + E;
        ik(a, C, _ = A - T, N, D = A + T);
        if (r && t.includeOutlines) {
          iV(a, e);
        }
      } else if (l && t.includeEdges) {
        if (r && !i) {
          var C;
          var N;
          var _;
          var D;
          var M;
          var A;
          var S;
          var P = e.pstyle("curve-style").strValue;
          C = Math.min(u.srcX, u.midX, u.tgtX);
          N = Math.max(u.srcX, u.midX, u.tgtX);
          _ = Math.min(u.srcY, u.midY, u.tgtY);
          D = Math.max(u.srcY, u.midY, u.tgtY);
          C -= x;
          N += x;
          ik(a, C, _ -= x, N, D += x);
          if (P === "haystack") {
            var O = u.haystackPts;
            if (O && O.length === 2) {
              C = O[0].x;
              _ = O[0].y;
              N = O[1].x;
              D = O[1].y;
              if (C > N) {
                var I = C;
                C = N;
                N = I;
              }
              if (_ > D) {
                var L = _;
                _ = D;
                D = L;
              }
              ik(a, C - x, _ - x, N + x, D + x);
            }
          } else if (P === "bezier" || P === "unbundled-bezier" || P.endsWith("segments") || P.endsWith("taxi")) {
            switch (P) {
              case "bezier":
              case "unbundled-bezier":
                S = u.bezierPts;
                break;
              case "segments":
              case "taxi":
              case "round-segments":
              case "round-taxi":
                S = u.linePts;
            }
            if (S != null) {
              for (var k = 0; k < S.length; k++) {
                var R = S[k];
                C = R.x - x;
                N = R.x + x;
                ik(a, C, _ = R.y - x, N, D = R.y + x);
              }
            }
          }
        } else {
          var B = e.source().position();
          var F = e.target().position();
          C = B.x;
          N = F.x;
          _ = B.y;
          D = F.y;
          if (C > N) {
            var z = C;
            C = N;
            N = z;
          }
          if (_ > D) {
            var V = _;
            _ = D;
            D = V;
          }
          C -= x;
          N += x;
          ik(a, C, _ -= x, N, D += x);
        }
      }
      if (r && t.includeEdges && l) {
        iF(a, e, "mid-source");
        iF(a, e, "mid-target");
        iF(a, e, "source");
        iF(a, e, "target");
      }
      if (r && e.pstyle("ghost").value === "yes") {
        var Y = e.pstyle("ghost-offset-x").pfValue;
        var G = e.pstyle("ghost-offset-y").pfValue;
        ik(a, a.x1 + Y, a.y1 + G, a.x2 + Y, a.y2 + G);
      }
      var X = o.bodyBounds = o.bodyBounds || {};
      tF(X, a);
      tB(X, h);
      tR(X, 1);
      if (r) {
        C = a.x1;
        N = a.x2;
        _ = a.y1;
        D = a.y2;
        ik(a, C - y, _ - y, N + y, D + y);
      }
      var H = o.overlayBounds = o.overlayBounds || {};
      tF(H, a);
      tB(H, h);
      tR(H, 1);
      var U = o.labelBounds = o.labelBounds || {};
      if (U.all != null) {
        tI(U.all);
      } else {
        U.all = tO();
      }
      if (r && t.includeLabels) {
        if (t.includeMainLabels) {
          iz(a, e, null);
        }
        if (l) {
          if (t.includeSourceLabels) {
            iz(a, e, "source");
          }
          if (t.includeTargetLabels) {
            iz(a, e, "target");
          }
        }
      }
    }
    a.x1 = iL(a.x1);
    a.y1 = iL(a.y1);
    a.x2 = iL(a.x2);
    a.y2 = iL(a.y2);
    a.w = iL(a.x2 - a.x1);
    a.h = iL(a.y2 - a.y1);
    if (a.w > 0 && a.h > 0 && d) {
      tB(a, h);
      tR(a, 1);
    }
    return a;
  }
  function iG(e) {
    var t;
    var n = 0;
    function r(e) {
      return +!!e << n++;
    }
    return 0 + r(e.incudeNodes) + r(e.includeEdges) + r(e.includeLabels) + r(e.includeMainLabels) + r(e.includeSourceLabels) + r(e.includeTargetLabels) + r(e.includeOverlays) + r(e.includeOutlines);
  }
  function iX(e) {
    if (!e.isEdge()) {
      return 0;
    }
    var t = e.source().position();
    var n = e.target().position();
    function r(e) {
      return Math.round(e);
    }
    return eV([r(t.x), r(t.y), r(n.x), r(n.y)]);
  }
  function iH(e, t) {
    var n;
    var r = e._private;
    var i = e.isEdge();
    var a = t == null ? iW : iG(t);
    var o = iX(e);
    var s = r.bbCachePosKey === o;
    var l = t.useCache && s;
    function u(e) {
      return e._private.bbCache == null || e._private.styleDirty;
    }
    if (!l || u(e) || i && (u(e.source()) || u(e.target()))) {
      if (!s) {
        e.recalculateRenderedStyle(l);
      }
      n = iY(e, iU);
      r.bbCache = n;
      r.bbCachePosKey = o;
    } else {
      n = r.bbCache;
    }
    if (a !== iW) {
      var h = e.isNode();
      n = tO();
      if (t.includeNodes && h || t.includeEdges && !h) {
        if (t.includeOverlays) {
          iR(n, r.overlayBounds);
        } else {
          iR(n, r.bodyBounds);
        }
      }
      if (t.includeLabels) {
        if (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels)) {
          iR(n, r.labelBounds.all);
        } else {
          if (t.includeMainLabels) {
            iR(n, r.labelBounds.mainRot);
          }
          if (t.includeSourceLabels) {
            iR(n, r.labelBounds.sourceRot);
          }
          if (t.includeTargetLabels) {
            iR(n, r.labelBounds.targetRot);
          }
        }
      }
      n.w = n.x2 - n.x1;
      n.h = n.y2 - n.y1;
    }
    return n;
  }
  var iU = {
    includeNodes: true,
    includeEdges: true,
    includeLabels: true,
    includeMainLabels: true,
    includeSourceLabels: true,
    includeTargetLabels: true,
    includeOverlays: true,
    includeUnderlays: true,
    includeOutlines: true,
    useCache: true
  };
  var iW = iG(iU);
  var ij = e3(iU);
  o0.boundingBox = function (e) {
    var t;
    if (this.length !== 1 || this[0]._private.bbCache == null || this[0]._private.styleDirty || e !== undefined && e.useCache !== undefined && e.useCache !== true) {
      t = tO();
      var n = ij(e = e || iU);
      if (this.cy().styleEnabled()) {
        for (var r = 0; r < this.length; r++) {
          var i = this[r];
          var a = i._private;
          var o = iX(i);
          var s = a.bbCachePosKey === o;
          var l = n.useCache && s && !a.styleDirty;
          i.recalculateRenderedStyle(l);
        }
      }
      this.updateCompoundBounds(!e.useCache);
      for (var u = 0; u < this.length; u++) {
        iR(t, iH(this[u], n));
      }
    } else {
      e = e === undefined ? iU : ij(e);
      t = iH(this[0], e);
    }
    t.x1 = iL(t.x1);
    t.y1 = iL(t.y1);
    t.x2 = iL(t.x2);
    t.y2 = iL(t.y2);
    t.w = iL(t.x2 - t.x1);
    t.h = iL(t.y2 - t.y1);
    return t;
  };
  o0.dirtyBoundingBoxCache = function () {
    for (var e = 0; e < this.length; e++) {
      var t = this[e]._private;
      t.bbCache = null;
      t.bbCachePosKey = null;
      t.bodyBounds = null;
      t.overlayBounds = null;
      t.labelBounds.all = null;
      t.labelBounds.source = null;
      t.labelBounds.target = null;
      t.labelBounds.main = null;
      t.labelBounds.sourceRot = null;
      t.labelBounds.targetRot = null;
      t.labelBounds.mainRot = null;
      t.arrowBounds.source = null;
      t.arrowBounds.target = null;
      t.arrowBounds["mid-source"] = null;
      t.arrowBounds["mid-target"] = null;
    }
    this.emitAndNotify("bounds");
    return this;
  };
  o0.boundingBoxAt = function (e) {
    var t;
    var n = this.nodes();
    var r = this.cy();
    var i = r.hasCompoundNodes();
    var a = r.collection();
    if (i) {
      a = n.filter(function (e) {
        return e.isParent();
      });
      n = n.not(a);
    }
    if (A(e)) {
      var o = e;
      e = function () {
        return o;
      };
    }
    r.startBatch();
    n.forEach(function (t, n) {
      return t._private.bbAtOldPos = e(t, n);
    }).silentPositions(e);
    if (i) {
      a.dirtyCompoundBoundsCache();
      a.dirtyBoundingBoxCache();
      a.updateCompoundBounds(true);
    }
    var s = {
      x1: (t = this.boundingBox({
        useCache: false
      })).x1,
      x2: t.x2,
      w: t.w,
      y1: t.y1,
      y2: t.y2,
      h: t.h
    };
    n.silentPositions(function (e) {
      return e._private.bbAtOldPos;
    });
    if (i) {
      a.dirtyCompoundBoundsCache();
      a.dirtyBoundingBoxCache();
      a.updateCompoundBounds(true);
    }
    r.endBatch();
    return s;
  };
  oJ.boundingbox = oJ.bb = oJ.boundingBox;
  oJ.renderedBoundingbox = oJ.renderedBoundingBox;
  o1 = o2 = {};
  function iq(e) {
    e.uppercaseName = X(e.name);
    e.autoName = "auto" + e.uppercaseName;
    e.labelName = "label" + e.uppercaseName;
    e.outerName = "outer" + e.uppercaseName;
    e.uppercaseOuterName = X(e.outerName);
    o1[e.name] = function () {
      var t = this[0];
      var n = t._private;
      var r = n.cy._private.styleEnabled;
      if (t) {
        if (!r) {
          return 1;
        }
        if (t.isParent()) {
          t.updateCompoundBounds();
          return n[e.autoName] || 0;
        }
        var i = t.pstyle(e.name);
        if (i.strValue === "label") {
          t.recalculateRenderedStyle();
          return n.rstyle[e.labelName] || 0;
        } else {
          return i.pfValue;
        }
      }
    };
    o1["outer" + e.uppercaseName] = function () {
      var t = this[0];
      var n = t._private.cy._private.styleEnabled;
      if (t) {
        if (n) {
          return t[e.name]() + t.pstyle("border-width").pfValue + t.padding() * 2;
        } else {
          return 1;
        }
      }
    };
    o1["rendered" + e.uppercaseName] = function () {
      var t = this[0];
      if (t) {
        return t[e.name]() * this.cy().zoom();
      }
    };
    o1["rendered" + e.uppercaseOuterName] = function () {
      var t = this[0];
      if (t) {
        return t[e.outerName]() * this.cy().zoom();
      }
    };
  }
  iq({
    name: "width"
  });
  iq({
    name: "height"
  });
  o2.padding = function () {
    var e = this[0];
    var t = e._private;
    if (e.isParent() && (e.updateCompoundBounds(), t.autoPadding !== undefined)) {
      return t.autoPadding;
    } else {
      return e.pstyle("padding").pfValue;
    }
  };
  o2.paddedHeight = function () {
    var e = this[0];
    return e.height() + e.padding() * 2;
  };
  o2.paddedWidth = function () {
    var e = this[0];
    return e.width() + e.padding() * 2;
  };
  function iK(e, t) {
    if (e.isEdge()) {
      return t(e);
    }
  }
  function iZ(e, t) {
    if (e.isEdge()) {
      var n = e.cy();
      return tf(t(e), n.zoom(), n.pan());
    }
  }
  function i$(e, t) {
    if (e.isEdge()) {
      var n = e.cy();
      var r = n.pan();
      var i = n.zoom();
      return t(e).map(function (e) {
        return tf(e, i, r);
      });
    }
  }
  var iQ = {
    controlPoints: {
      get: function (e) {
        return e.renderer().getControlPoints(e);
      },
      mult: true
    },
    segmentPoints: {
      get: function (e) {
        return e.renderer().getSegmentPoints(e);
      },
      mult: true
    },
    sourceEndpoint: {
      get: function (e) {
        return e.renderer().getSourceEndpoint(e);
      }
    },
    targetEndpoint: {
      get: function (e) {
        return e.renderer().getTargetEndpoint(e);
      }
    },
    midpoint: {
      get: function (e) {
        return e.renderer().getEdgeMidpoint(e);
      }
    }
  };
  var iJ = Z({}, oQ, o0, o2, Object.keys(iQ).reduce(function (e, t) {
    var n = iQ[t];
    var r = "rendered" + t[0].toUpperCase() + t.substr(1);
    e[t] = function () {
      return iK(this, n.get);
    };
    if (n.mult) {
      e[r] = function () {
        return i$(this, n.get);
      };
    } else {
      e[r] = function () {
        return iZ(this, n.get);
      };
    }
    return e;
  }, {}));
  function i0(e, t) {
    this.recycle(e, t);
  }
  function i1() {
    return false;
  }
  function i2() {
    return true;
  }
  i0.prototype = {
    instanceString: function () {
      return "event";
    },
    recycle: function (e, t) {
      this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = i1;
      if (e != null && e.preventDefault) {
        this.type = e.type;
        this.isDefaultPrevented = e.defaultPrevented ? i2 : i1;
      } else if (e != null && e.type) {
        t = e;
      } else {
        this.type = e;
      }
      if (t != null) {
        this.originalEvent = t.originalEvent;
        this.type = t.type ?? this.type;
        this.cy = t.cy;
        this.target = t.target;
        this.position = t.position;
        this.renderedPosition = t.renderedPosition;
        this.namespace = t.namespace;
        this.layout = t.layout;
      }
      if (this.cy != null && this.position != null && this.renderedPosition == null) {
        var n = this.position;
        var r = this.cy.zoom();
        var i = this.cy.pan();
        this.renderedPosition = {
          x: n.x * r + i.x,
          y: n.y * r + i.y
        };
      }
      this.timeStamp = e && e.timeStamp || Date.now();
    },
    preventDefault: function () {
      this.isDefaultPrevented = i2;
      var e = this.originalEvent;
      if (e && e.preventDefault) {
        e.preventDefault();
      }
    },
    stopPropagation: function () {
      this.isPropagationStopped = i2;
      var e = this.originalEvent;
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = i2;
      this.stopPropagation();
    },
    isDefaultPrevented: i1,
    isPropagationStopped: i1,
    isImmediatePropagationStopped: i1
  };
  var i5 = /^([^.]+)(\.(?:[^.]+))?$/;
  var i3 = {
    qualifierCompare: function (e, t) {
      return e === t;
    },
    eventMatches: function () {
      return true;
    },
    addEventFields: function () {},
    callbackContext: function (e) {
      return e;
    },
    beforeEmit: function () {},
    afterEmit: function () {},
    bubble: function () {
      return false;
    },
    parent: function () {
      return null;
    },
    context: null
  };
  var i4 = Object.keys(i3);
  var i9 = {};
  function i6(e = i9, t) {
    var n = 0;
    for (; n < i4.length; n++) {
      var r = i4[n];
      this[r] = e[r] || i3[r];
    }
    this.context = t || this.context;
    this.listeners = [];
    this.emitting = 0;
  }
  var i8 = i6.prototype;
  function i7(e, t, n, r, i, a, o) {
    if (D(r)) {
      i = r;
      r = null;
    }
    if (o) {
      a = a == null ? o : Z({}, a, o);
    }
    var s = M(n) ? n : n.split(/\s+/);
    var l = 0;
    for (; l < s.length; l++) {
      var u = s[l];
      if (!B(u)) {
        var h = u.match(i5);
        if (h && t(e, u, h[1], h[2] ? h[2] : null, r, i, a) === false) {
          break;
        }
      }
    }
  }
  function ae(e, t) {
    e.addEventFields(e.context, t);
    return new i0(t.type, t);
  }
  function at(e, t, n) {
    if (N(n) === "event") {
      t(e, n);
      return;
    }
    if (A(n)) {
      t(e, ae(e, n));
      return;
    }
    var r = M(n) ? n : n.split(/\s+/);
    var i = 0;
    for (; i < r.length; i++) {
      var a = r[i];
      if (!B(a)) {
        var o = a.match(i5);
        if (o) {
          var s = ae(e, {
            type: o[1],
            namespace: o[2] ? o[2] : null,
            target: e.context
          });
          t(e, s);
        }
      }
    }
  }
  i8.on = i8.addListener = function (e, t, n, r, i) {
    i7(this, function (e, t, n, r, i, a, o) {
      if (D(a)) {
        e.listeners.push({
          event: t,
          callback: a,
          type: n,
          namespace: r,
          qualifier: i,
          conf: o
        });
      }
    }, e, t, n, r, i);
    return this;
  };
  i8.one = function (e, t, n, r) {
    return this.on(e, t, n, r, {
      one: true
    });
  };
  i8.removeListener = i8.off = function (e, t, n, r) {
    var i = this;
    if (this.emitting !== 0) {
      this.listeners = this.listeners.slice();
    }
    var a = this.listeners;
    function o(o) {
      var s = a[o];
      i7(i, function (t, n, r, i, l, u) {
        if ((s.type === r || e === "*") && (!i && s.namespace !== ".*" || s.namespace === i) && (!l || t.qualifierCompare(s.qualifier, l)) && (!u || s.callback === u)) {
          a.splice(o, 1);
          return false;
        }
      }, e, t, n, r);
    }
    var s = a.length - 1;
    for (; s >= 0; s--) {
      o(s);
    }
    return this;
  };
  i8.removeAllListeners = function () {
    return this.removeListener("*");
  };
  i8.emit = i8.trigger = function (e, t, n) {
    var r = this.listeners;
    var i = r.length;
    this.emitting++;
    if (!M(t)) {
      t = [t];
    }
    at(this, function (e, a) {
      if (n != null) {
        i = (r = [{
          event: a.event,
          type: a.type,
          namespace: a.namespace,
          callback: n
        }]).length;
      }
      for (var o = 0; o < i; o++) {
        (function (n) {
          var i = r[n];
          if (i.type === a.type && (!i.namespace || i.namespace === a.namespace || i.namespace === ".*") && e.eventMatches(e.context, i, a)) {
            var o = [a];
            if (t != null) {
              e6(o, t);
            }
            e.beforeEmit(e.context, i, a);
            if (i.conf && i.conf.one) {
              e.listeners = e.listeners.filter(function (e) {
                return e !== i;
              });
            }
            var s = e.callbackContext(e.context, i, a);
            var l = i.callback.apply(s, o);
            e.afterEmit(e.context, i, a);
            if (l === false) {
              a.stopPropagation();
              a.preventDefault();
            }
          }
        })(o);
      }
      if (e.bubble(e.context) && !a.isPropagationStopped()) {
        e.parent(e.context).emit(a, t);
      }
    }, e);
    this.emitting--;
    return this;
  };
  var an = {
    qualifierCompare: function (e, t) {
      if (e == null || t == null) {
        return e == null && t == null;
      } else {
        return e.sameText(t);
      }
    },
    eventMatches: function (e, t, n) {
      var r = t.qualifier;
      return r == null || e !== n.target && I(n.target) && r.matches(n.target);
    },
    addEventFields: function (e, t) {
      t.cy = e.cy();
      t.target = e;
    },
    callbackContext: function (e, t, n) {
      if (t.qualifier != null) {
        return n.target;
      } else {
        return e;
      }
    },
    beforeEmit: function (e, t) {
      if (t.conf && t.conf.once) {
        t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
      }
    },
    bubble: function () {
      return true;
    },
    parent: function (e) {
      if (e.isChild()) {
        return e.parent();
      } else {
        return e.cy();
      }
    }
  };
  function ar(e) {
    if (_(e)) {
      return new ix(e);
    } else {
      return e;
    }
  }
  var ai = {
    createEmitter: function () {
      for (var e = 0; e < this.length; e++) {
        var t = this[e];
        var n = t._private;
        n.emitter ||= new i6(an, t);
      }
      return this;
    },
    emitter: function () {
      return this._private.emitter;
    },
    on: function (e, t, n) {
      var r = ar(t);
      var i = 0;
      for (; i < this.length; i++) {
        this[i].emitter().on(e, r, n);
      }
      return this;
    },
    removeListener: function (e, t, n) {
      var r = ar(t);
      var i = 0;
      for (; i < this.length; i++) {
        this[i].emitter().removeListener(e, r, n);
      }
      return this;
    },
    removeAllListeners: function () {
      for (var e = 0; e < this.length; e++) {
        this[e].emitter().removeAllListeners();
      }
      return this;
    },
    one: function (e, t, n) {
      var r = ar(t);
      var i = 0;
      for (; i < this.length; i++) {
        this[i].emitter().one(e, r, n);
      }
      return this;
    },
    once: function (e, t, n) {
      var r = ar(t);
      var i = 0;
      for (; i < this.length; i++) {
        this[i].emitter().on(e, r, n, {
          once: true,
          onceCollection: this
        });
      }
    },
    emit: function (e, t) {
      for (var n = 0; n < this.length; n++) {
        this[n].emitter().emit(e, t);
      }
      return this;
    },
    emitAndNotify: function (e, t) {
      if (this.length !== 0) {
        this.cy().notify(e, this);
        this.emit(e, t);
        return this;
      }
    }
  };
  r7.eventAliasesOn(ai);
  var aa = {
    nodes: function (e) {
      return this.filter(function (e) {
        return e.isNode();
      }).filter(e);
    },
    edges: function (e) {
      return this.filter(function (e) {
        return e.isEdge();
      }).filter(e);
    },
    byGroup: function () {
      var e = this.spawn();
      var t = this.spawn();
      var n = 0;
      for (; n < this.length; n++) {
        var r = this[n];
        if (r.isNode()) {
          e.push(r);
        } else {
          t.push(r);
        }
      }
      return {
        nodes: e,
        edges: t
      };
    },
    filter: function (e, t) {
      if (e === undefined) {
        return this;
      }
      if (_(e) || O(e)) {
        return new ix(e).filter(this);
      }
      if (D(e)) {
        var n = this.spawn();
        var r = 0;
        for (; r < this.length; r++) {
          var i = this[r];
          if (t ? e.apply(t, [i, r, this]) : e(i, r, this)) {
            n.push(i);
          }
        }
        return n;
      }
      return this.spawn();
    },
    not: function (e) {
      if (!e) {
        return this;
      }
      if (_(e)) {
        e = this.filter(e);
      }
      var t = this.spawn();
      var n = 0;
      for (; n < this.length; n++) {
        var r = this[n];
        if (!e.has(r)) {
          t.push(r);
        }
      }
      return t;
    },
    absoluteComplement: function () {
      return this.cy().mutableElements().not(this);
    },
    intersect: function (e) {
      if (_(e)) {
        return this.filter(e);
      }
      var t = this.spawn();
      var n = this.length < e.length;
      var r = n ? this : e;
      var i = n ? e : this;
      var a = 0;
      for (; a < r.length; a++) {
        var o = r[a];
        if (i.has(o)) {
          t.push(o);
        }
      }
      return t;
    },
    xor: function (e) {
      var t = this._private.cy;
      if (_(e)) {
        e = t.$(e);
      }
      var n = this.spawn();
      var r = e;
      function i(e, t) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          var a = i._private.data.id;
          if (!t.hasElementWithId(a)) {
            n.push(i);
          }
        }
      }
      i(this, r);
      i(r, this);
      return n;
    },
    diff: function (e) {
      var t = this._private.cy;
      if (_(e)) {
        e = t.$(e);
      }
      var n = this.spawn();
      var r = this.spawn();
      var i = this.spawn();
      var a = e;
      function o(e, t, n) {
        for (var r = 0; r < e.length; r++) {
          var a = e[r];
          var o = a._private.data.id;
          if (t.hasElementWithId(o)) {
            i.merge(a);
          } else {
            n.push(a);
          }
        }
      }
      o(this, a, n);
      o(a, this, r);
      return {
        left: n,
        right: r,
        both: i
      };
    },
    add: function (e) {
      var t = this._private.cy;
      if (!e) {
        return this;
      }
      if (_(e)) {
        var n = e;
        e = t.mutableElements().filter(n);
      }
      var r = this.spawnSelf();
      var i = 0;
      for (; i < e.length; i++) {
        var a = e[i];
        if (!this.has(a)) {
          r.push(a);
        }
      }
      return r;
    },
    merge: function (e) {
      var t = this._private;
      var n = t.cy;
      if (!e) {
        return this;
      }
      if (e && _(e)) {
        var r = e;
        e = n.mutableElements().filter(r);
      }
      var i = t.map;
      var a = 0;
      for (; a < e.length; a++) {
        var o = e[a];
        var s = o._private.data.id;
        if (!i.has(s)) {
          var l = this.length++;
          this[l] = o;
          i.set(s, {
            ele: o,
            index: l
          });
        }
      }
      return this;
    },
    unmergeAt: function (e) {
      var t = this[e].id();
      var n = this._private.map;
      this[e] = undefined;
      n.delete(t);
      var r = e === this.length - 1;
      if (this.length > 1 && !r) {
        var i = this.length - 1;
        var a = this[i];
        var o = a._private.data.id;
        this[i] = undefined;
        this[e] = a;
        n.set(o, {
          ele: a,
          index: e
        });
      }
      this.length--;
      return this;
    },
    unmergeOne: function (e) {
      e = e[0];
      var t = this._private;
      var n = e._private.data.id;
      var r = t.map.get(n);
      if (!r) {
        return this;
      }
      var i = r.index;
      this.unmergeAt(i);
      return this;
    },
    unmerge: function (e) {
      var t = this._private.cy;
      if (!e) {
        return this;
      }
      if (e && _(e)) {
        var n = e;
        e = t.mutableElements().filter(n);
      }
      for (var r = 0; r < e.length; r++) {
        this.unmergeOne(e[r]);
      }
      return this;
    },
    unmergeBy: function (e) {
      for (var t = this.length - 1; t >= 0; t--) {
        if (e(this[t])) {
          this.unmergeAt(t);
        }
      }
      return this;
    },
    map: function (e, t) {
      var n = [];
      var r = 0;
      for (; r < this.length; r++) {
        var i = this[r];
        var a = t ? e.apply(t, [i, r, this]) : e(i, r, this);
        n.push(a);
      }
      return n;
    },
    reduce: function (e, t) {
      var n = t;
      var r = 0;
      for (; r < this.length; r++) {
        n = e(n, this[r], r, this);
      }
      return n;
    },
    max: function (e, t) {
      var n;
      var r = -Infinity;
      var i = 0;
      for (; i < this.length; i++) {
        var a = this[i];
        var o = t ? e.apply(t, [a, i, this]) : e(a, i, this);
        if (o > r) {
          r = o;
          n = a;
        }
      }
      return {
        value: r,
        ele: n
      };
    },
    min: function (e, t) {
      var n;
      var r = Infinity;
      var i = 0;
      for (; i < this.length; i++) {
        var a = this[i];
        var o = t ? e.apply(t, [a, i, this]) : e(a, i, this);
        if (o < r) {
          r = o;
          n = a;
        }
      }
      return {
        value: r,
        ele: n
      };
    }
  };
  aa.u = aa["|"] = aa["+"] = aa.union = aa.or = aa.add;
  aa["\\"] = aa["!"] = aa["-"] = aa.difference = aa.relativeComplement = aa.subtract = aa.not;
  aa.n = aa["&"] = aa["."] = aa.and = aa.intersection = aa.intersect;
  aa["^"] = aa["(+)"] = aa["(-)"] = aa.symmetricDifference = aa.symdiff = aa.xor;
  aa.fnFilter = aa.filterFn = aa.stdFilter = aa.filter;
  aa.complement = aa.abscomp = aa.absoluteComplement;
  function ao(e, t) {
    var n = e.cy().hasCompoundNodes();
    function r(e) {
      var t = e.pstyle("z-compound-depth");
      if (t.value === "auto") {
        if (n) {
          return e.zDepth();
        } else {
          return 0;
        }
      } else if (t.value === "bottom") {
        return -1;
      } else if (t.value === "top") {
        return eW;
      } else {
        return 0;
      }
    }
    var i = r(e) - r(t);
    if (i !== 0) {
      return i;
    }
    function a(e) {
      if (e.pstyle("z-index-compare").value === "auto") {
        return +!!e.isNode();
      } else {
        return 0;
      }
    }
    var o = a(e) - a(t);
    if (o !== 0) {
      return o;
    }
    var s = e.pstyle("z-index").value - t.pstyle("z-index").value;
    if (s !== 0) {
      return s;
    } else {
      return e.poolIndex() - t.poolIndex();
    }
  }
  var as = {
    forEach: function (e, t) {
      if (D(e)) {
        var n = this.length;
        var r = 0;
        for (; r < n; r++) {
          var i = this[r];
          if ((t ? e.apply(t, [i, r, this]) : e(i, r, this)) === false) {
            break;
          }
        }
      }
      return this;
    },
    toArray: function () {
      var e = [];
      var t = 0;
      for (; t < this.length; t++) {
        e.push(this[t]);
      }
      return e;
    },
    slice: function (e, t) {
      var n = [];
      var r = this.length;
      if (t == null) {
        t = r;
      }
      if (e == null) {
        e = 0;
      }
      if (e < 0) {
        e = r + e;
      }
      if (t < 0) {
        t = r + t;
      }
      for (var i = e; i >= 0 && i < t && i < r; i++) {
        n.push(this[i]);
      }
      return this.spawn(n);
    },
    size: function () {
      return this.length;
    },
    eq: function (e) {
      return this[e] || this.spawn();
    },
    first: function () {
      return this[0] || this.spawn();
    },
    last: function () {
      return this[this.length - 1] || this.spawn();
    },
    empty: function () {
      return this.length === 0;
    },
    nonempty: function () {
      return !this.empty();
    },
    sort: function (e) {
      if (!D(e)) {
        return this;
      }
      var t = this.toArray().sort(e);
      return this.spawn(t);
    },
    sortByZIndex: function () {
      return this.sort(ao);
    },
    zDepth: function () {
      var e = this[0];
      if (e) {
        var t = e._private;
        if (t.group === "nodes") {
          var n = t.data.parent ? e.parents().size() : 0;
          if (e.isParent()) {
            return n;
          } else {
            return eW - 1;
          }
        }
        var r = t.source;
        var i = t.target;
        return Math.max(r.zDepth(), i.zDepth(), 0);
      }
    }
  };
  as.each = as.forEach;
  oq = "undefined";
  if ((typeof Symbol == "undefined" ? "undefined" : r(Symbol)) != oq && r(Symbol.iterator) != oq) {
    as[Symbol.iterator] = function () {
      var e = this;
      var t = {
        value: undefined,
        done: false
      };
      var n = 0;
      var r = this.length;
      return s({
        next: function () {
          if (n < r) {
            t.value = e[n++];
          } else {
            t.value = undefined;
            t.done = true;
          }
          return t;
        }
      }, Symbol.iterator, function () {
        return this;
      });
    };
  }
  var al = e3({
    nodeDimensionsIncludeLabels: false
  });
  var au = {
    layoutDimensions: function (e) {
      e = al(e);
      if (this.takesUpSpace()) {
        if (e.nodeDimensionsIncludeLabels) {
          var t;
          var n = this.boundingBox();
          t = {
            w: n.w,
            h: n.h
          };
        } else {
          t = {
            w: this.outerWidth(),
            h: this.outerHeight()
          };
        }
      } else {
        t = {
          w: 0,
          h: 0
        };
      }
      if (t.w === 0 || t.h === 0) {
        t.w = t.h = 1;
      }
      return t;
    },
    layoutPositions: function (e, t, n) {
      var r = this.nodes().filter(function (e) {
        return !e.isParent();
      });
      var i = this.cy();
      var a = t.eles;
      function o(e) {
        return e.id();
      }
      var s = z(n, o);
      e.emit({
        type: "layoutstart",
        layout: e
      });
      e.animations = [];
      function l(e, t, n) {
        var r = {
          x: t.x1 + t.w / 2,
          y: t.y1 + t.h / 2
        };
        var i = {
          x: (n.x - r.x) * e,
          y: (n.y - r.y) * e
        };
        return {
          x: r.x + i.x,
          y: r.y + i.y
        };
      }
      var u = t.spacingFactor && t.spacingFactor !== 1;
      var h = function () {
        if (!u) {
          return null;
        }
        var e = tO();
        var t = 0;
        for (; t < r.length; t++) {
          var n = s(r[t], t);
          tk(e, n.x, n.y);
        }
        return e;
      }();
      var c = z(function (e, n) {
        var r = s(e, n);
        if (u) {
          r = l(Math.abs(t.spacingFactor), h, r);
        }
        if (t.transform != null) {
          r = t.transform(e, r);
        }
        return r;
      }, o);
      if (t.animate) {
        for (var d = 0; d < r.length; d++) {
          var p = r[d];
          var g = c(p, d);
          if (t.animateFilter == null || t.animateFilter(p, d)) {
            var f = p.animation({
              position: g,
              duration: t.animationDuration,
              easing: t.animationEasing
            });
            e.animations.push(f);
          } else {
            p.position(g);
          }
        }
        if (t.fit) {
          var v = i.animation({
            fit: {
              boundingBox: a.boundingBoxAt(c),
              padding: t.padding
            },
            duration: t.animationDuration,
            easing: t.animationEasing
          });
          e.animations.push(v);
        } else if (t.zoom !== undefined && t.pan !== undefined) {
          var y = i.animation({
            zoom: t.zoom,
            pan: t.pan,
            duration: t.animationDuration,
            easing: t.animationEasing
          });
          e.animations.push(y);
        }
        e.animations.forEach(function (e) {
          return e.play();
        });
        e.one("layoutready", t.ready);
        e.emit({
          type: "layoutready",
          layout: e
        });
        ru.all(e.animations.map(function (e) {
          return e.promise();
        })).then(function () {
          e.one("layoutstop", t.stop);
          e.emit({
            type: "layoutstop",
            layout: e
          });
        });
      } else {
        r.positions(c);
        if (t.fit) {
          i.fit(t.eles, t.padding);
        }
        if (t.zoom != null) {
          i.zoom(t.zoom);
        }
        if (t.pan) {
          i.pan(t.pan);
        }
        e.one("layoutready", t.ready);
        e.emit({
          type: "layoutready",
          layout: e
        });
        e.one("layoutstop", t.stop);
        e.emit({
          type: "layoutstop",
          layout: e
        });
      }
      return this;
    },
    layout: function (e) {
      return this.cy().makeLayout(Z({}, e, {
        eles: this
      }));
    }
  };
  function ah(e, t, n) {
    var r;
    var i = n._private;
    var a = i.styleCache = i.styleCache || [];
    if ((r = a[e]) != null) {
      return r;
    } else {
      return r = a[e] = t(n);
    }
  }
  function ac(e, t) {
    e = eY(e);
    return function (n) {
      return ah(e, t, n);
    };
  }
  function ad(e, t) {
    e = eY(e);
    function n(e) {
      return t.call(e);
    }
    return function () {
      var t = this[0];
      if (t) {
        return ah(e, n, t);
      }
    };
  }
  au.createLayout = au.makeLayout = au.layout;
  var ap = {
    recalculateRenderedStyle: function (e) {
      var t = this.cy();
      var n = t.renderer();
      var r = t.styleEnabled();
      if (n && r) {
        n.recalculateRenderedStyle(this, e);
      }
      return this;
    },
    dirtyStyleCache: function () {
      var e;
      var t = this.cy();
      function n(e) {
        return e._private.styleCache = null;
      }
      if (t.hasCompoundNodes()) {
        (e = this.spawnSelf().merge(this.descendants()).merge(this.parents())).merge(e.connectedEdges());
        e.forEach(n);
      } else {
        this.forEach(function (e) {
          n(e);
          e.connectedEdges().forEach(n);
        });
      }
      return this;
    },
    updateStyle: function (e) {
      var t = this._private.cy;
      if (!t.styleEnabled()) {
        return this;
      }
      if (t.batching()) {
        t._private.batchStyleEles.merge(this);
        return this;
      }
      var n = t.hasCompoundNodes();
      var r = this;
      e = !!e || e === undefined;
      if (n) {
        r = this.spawnSelf().merge(this.descendants()).merge(this.parents());
      }
      var i = r;
      if (e) {
        i.emitAndNotify("style");
      } else {
        i.emit("style");
      }
      r.forEach(function (e) {
        return e._private.styleDirty = true;
      });
      return this;
    },
    cleanStyle: function () {
      var e = this.cy();
      if (e.styleEnabled()) {
        for (var t = 0; t < this.length; t++) {
          var n = this[t];
          if (n._private.styleDirty) {
            n._private.styleDirty = false;
            e.style().apply(n);
          }
        }
      }
    },
    parsedStyle: function (e) {
      var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      var n = this[0];
      var r = n.cy();
      if (r.styleEnabled() && n) {
        this.cleanStyle();
        var i = n._private.style[e];
        return i ?? (t ? r.style().getDefaultProperty(e) : null);
      }
    },
    numericStyle: function (e) {
      var t = this[0];
      if (t.cy().styleEnabled() && t) {
        var n = t.pstyle(e);
        if (n.pfValue !== undefined) {
          return n.pfValue;
        } else {
          return n.value;
        }
      }
    },
    numericStyleUnits: function (e) {
      var t = this[0];
      if (t.cy().styleEnabled() && t) {
        return t.pstyle(e).units;
      }
    },
    renderedStyle: function (e) {
      var t = this.cy();
      if (!t.styleEnabled()) {
        return this;
      }
      var n = this[0];
      if (n) {
        return t.style().getRenderedStyle(n, e);
      }
    },
    style: function (e, t) {
      var n = this.cy();
      if (!n.styleEnabled()) {
        return this;
      }
      var r = n.style();
      if (A(e)) {
        r.applyBypass(this, e, false);
        this.emitAndNotify("style");
      } else if (_(e)) {
        if (t === undefined) {
          var i = this[0];
          if (i) {
            return r.getStylePropertyValue(i, e);
          } else {
            return undefined;
          }
        }
        r.applyBypass(this, e, t, false);
        this.emitAndNotify("style");
      } else if (e === undefined) {
        var a = this[0];
        if (a) {
          return r.getRawStyle(a);
        } else {
          return undefined;
        }
      }
      return this;
    },
    removeStyle: function (e) {
      var t = this.cy();
      if (!t.styleEnabled()) {
        return this;
      }
      var n = t.style();
      if (e === undefined) {
        for (var r = 0; r < this.length; r++) {
          var i = this[r];
          n.removeAllBypasses(i, false);
        }
      } else {
        e = e.split(/\s+/);
        for (var a = 0; a < this.length; a++) {
          var o = this[a];
          n.removeBypasses(o, e, false);
        }
      }
      this.emitAndNotify("style");
      return this;
    },
    show: function () {
      this.css("display", "element");
      return this;
    },
    hide: function () {
      this.css("display", "none");
      return this;
    },
    effectiveOpacity: function () {
      var e = this.cy();
      if (!e.styleEnabled()) {
        return 1;
      }
      var t = e.hasCompoundNodes();
      var n = this[0];
      if (n) {
        var r = n._private;
        var i = n.pstyle("opacity").value;
        if (!t) {
          return i;
        }
        var a = r.data.parent ? n.parents() : null;
        if (a) {
          for (var o = 0; o < a.length; o++) {
            i *= a[o].pstyle("opacity").value;
          }
        }
        return i;
      }
    },
    transparent: function () {
      if (!this.cy().styleEnabled()) {
        return false;
      }
      var e = this[0];
      var t = e.cy().hasCompoundNodes();
      if (e) {
        if (t) {
          return e.effectiveOpacity() === 0;
        } else {
          return e.pstyle("opacity").value === 0;
        }
      }
    },
    backgrounding: function () {
      return !!this.cy().styleEnabled() && !!this[0]._private.backgrounding;
    }
  };
  function ag(e, t) {
    var n = e._private.data.parent ? e.parents() : null;
    if (n) {
      for (var r = 0; r < n.length; r++) {
        if (!t(n[r])) {
          return false;
        }
      }
    }
    return true;
  }
  function af(e) {
    var t = e.ok;
    var n = e.edgeOkViaNode || e.ok;
    var r = e.parentOk || e.ok;
    return function () {
      var e = this.cy();
      if (!e.styleEnabled()) {
        return true;
      }
      var i = this[0];
      var a = e.hasCompoundNodes();
      if (i) {
        var o = i._private;
        if (!t(i)) {
          return false;
        }
        if (i.isNode()) {
          return !a || ag(i, r);
        }
        var s = o.source;
        var l = o.target;
        return n(s) && (!a || ag(s, n)) && (s === l || n(l) && (!a || ag(l, n)));
      }
    };
  }
  var av = ac("eleTakesUpSpace", function (e) {
    return e.pstyle("display").value === "element" && e.width() !== 0 && (!e.isNode() || e.height() !== 0);
  });
  ap.takesUpSpace = ad("takesUpSpace", af({
    ok: av
  }));
  var ay = ac("eleInteractive", function (e) {
    return e.pstyle("events").value === "yes" && e.pstyle("visibility").value === "visible" && av(e);
  });
  var am = ac("parentInteractive", function (e) {
    return e.pstyle("visibility").value === "visible" && av(e);
  });
  ap.interactive = ad("interactive", af({
    ok: ay,
    parentOk: am,
    edgeOkViaNode: av
  }));
  ap.noninteractive = function () {
    var e = this[0];
    if (e) {
      return !e.interactive();
    }
  };
  var ab = ac("eleVisible", function (e) {
    return e.pstyle("visibility").value === "visible" && e.pstyle("opacity").pfValue !== 0 && av(e);
  });
  ap.visible = ad("visible", af({
    ok: ab,
    edgeOkViaNode: av
  }));
  ap.hidden = function () {
    var e = this[0];
    if (e) {
      return !e.visible();
    }
  };
  ap.isBundledBezier = ad("isBundledBezier", function () {
    return !!this.cy().styleEnabled() && !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace();
  });
  ap.bypass = ap.css = ap.style;
  ap.renderedCss = ap.renderedStyle;
  ap.removeBypass = ap.removeCss = ap.removeStyle;
  ap.pstyle = ap.parsedStyle;
  var ax = {};
  function aw(e) {
    return function () {
      var t = arguments;
      var n = [];
      if (t.length === 2) {
        var r = t[0];
        var i = t[1];
        this.on(e.event, r, i);
      } else if (t.length === 1 && D(t[0])) {
        var a = t[0];
        this.on(e.event, a);
      } else if (t.length === 0 || t.length === 1 && M(t[0])) {
        var o = t.length === 1 ? t[0] : null;
        var s = 0;
        for (; s < this.length; s++) {
          var l = this[s];
          var u = !e.ableField || l._private[e.ableField];
          var h = l._private[e.field] != e.value;
          if (e.overrideAble) {
            var c = e.overrideAble(l);
            if (c !== undefined && (u = c, !c)) {
              return this;
            }
          }
          if (u) {
            l._private[e.field] = e.value;
            if (h) {
              n.push(l);
            }
          }
        }
        var d = this.spawn(n);
        d.updateStyle();
        d.emit(e.event);
        if (o) {
          d.emit(o);
        }
      }
      return this;
    };
  }
  function aE(e) {
    ax[e.field] = function () {
      var t = this[0];
      if (t) {
        if (e.overrideField) {
          var n = e.overrideField(t);
          if (n !== undefined) {
            return n;
          }
        }
        return t._private[e.field];
      }
    };
    ax[e.on] = aw({
      event: e.on,
      field: e.field,
      ableField: e.ableField,
      overrideAble: e.overrideAble,
      value: true
    });
    ax[e.off] = aw({
      event: e.off,
      field: e.field,
      ableField: e.ableField,
      overrideAble: e.overrideAble,
      value: false
    });
  }
  aE({
    field: "locked",
    overrideField: function (e) {
      return !!e.cy().autolock() || undefined;
    },
    on: "lock",
    off: "unlock"
  });
  aE({
    field: "grabbable",
    overrideField: function (e) {
      return !e.cy().autoungrabify() && !e.pannable() && undefined;
    },
    on: "grabify",
    off: "ungrabify"
  });
  aE({
    field: "selected",
    ableField: "selectable",
    overrideAble: function (e) {
      return !e.cy().autounselectify() && undefined;
    },
    on: "select",
    off: "unselect"
  });
  aE({
    field: "selectable",
    overrideField: function (e) {
      return !e.cy().autounselectify() && undefined;
    },
    on: "selectify",
    off: "unselectify"
  });
  ax.deselect = ax.unselect;
  ax.grabbed = function () {
    var e = this[0];
    if (e) {
      return e._private.grabbed;
    }
  };
  aE({
    field: "active",
    on: "activate",
    off: "unactivate"
  });
  aE({
    field: "pannable",
    on: "panify",
    off: "unpanify"
  });
  ax.inactive = function () {
    var e = this[0];
    if (e) {
      return !e._private.active;
    }
  };
  var aT = {};
  function aC(e) {
    return function (t) {
      var n = [];
      var r = 0;
      for (; r < this.length; r++) {
        var i = this[r];
        if (i.isNode()) {
          var a = false;
          var o = i.connectedEdges();
          var s = 0;
          for (; s < o.length; s++) {
            var l = o[s];
            var u = l.source();
            var h = l.target();
            if (e.noIncomingEdges && h === i && u !== i || e.noOutgoingEdges && u === i && h !== i) {
              a = true;
              break;
            }
          }
          if (!a) {
            n.push(i);
          }
        }
      }
      return this.spawn(n, true).filter(t);
    };
  }
  function aN(e) {
    return function (t) {
      var n = [];
      var r = 0;
      for (; r < this.length; r++) {
        var i = this[r];
        if (i.isNode()) {
          var a = i.connectedEdges();
          var o = 0;
          for (; o < a.length; o++) {
            var s = a[o];
            var l = s.source();
            var u = s.target();
            if (e.outgoing && l === i) {
              n.push(s);
              n.push(u);
            } else if (e.incoming && u === i) {
              n.push(s);
              n.push(l);
            }
          }
        }
      }
      return this.spawn(n, true).filter(t);
    };
  }
  function a_(e) {
    return function (t) {
      var n = this;
      var r = [];
      var i = {};
      while (true) {
        var a = e.outgoing ? n.outgoers() : n.incomers();
        if (a.length === 0) {
          break;
        }
        var o = false;
        var s = 0;
        for (; s < a.length; s++) {
          var l = a[s];
          var u = l.id();
          if (!i[u]) {
            i[u] = true;
            r.push(l);
            o = true;
          }
        }
        if (!o) {
          break;
        }
        n = a;
      }
      return this.spawn(r, true).filter(t);
    };
  }
  function aD(e) {
    return function (t) {
      var n = [];
      var r = 0;
      for (; r < this.length; r++) {
        var i = this[r]._private[e.attr];
        if (i) {
          n.push(i);
        }
      }
      return this.spawn(n, true).filter(t);
    };
  }
  function aM(e) {
    return function (t) {
      var n = [];
      var r = this._private.cy;
      var i = e || {};
      if (_(t)) {
        t = r.$(t);
      }
      for (var a = 0; a < t.length; a++) {
        var o = t[a]._private.edges;
        var s = 0;
        for (; s < o.length; s++) {
          var l = o[s];
          var u = l._private.data;
          var h = this.hasElementWithId(u.source) && t.hasElementWithId(u.target);
          var c = t.hasElementWithId(u.source) && this.hasElementWithId(u.target);
          if ((h || c) && (!i.thisIsSrc && !i.thisIsTgt || (!i.thisIsSrc || h) && (!i.thisIsTgt || c))) {
            n.push(l);
          }
        }
      }
      return this.spawn(n, true);
    };
  }
  function aA(e) {
    e = Z({}, {
      codirected: false
    }, e);
    return function (t) {
      var n = [];
      var r = this.edges();
      var i = e;
      var a = 0;
      for (; a < r.length; a++) {
        var o = r[a]._private;
        var s = o.source;
        var l = s._private.data.id;
        var u = o.data.target;
        var h = s._private.edges;
        var c = 0;
        for (; c < h.length; c++) {
          var d = h[c];
          var p = d._private.data;
          var g = p.target;
          var f = p.source;
          var v = g === u && f === l;
          var y = l === g && u === f;
          if (i.codirected && v || !i.codirected && (v || y)) {
            n.push(d);
          }
        }
      }
      return this.spawn(n, true).filter(t);
    };
  }
  aT.clearTraversalCache = function () {
    for (var e = 0; e < this.length; e++) {
      this[e]._private.traversalCache = null;
    }
  };
  Z(aT, {
    roots: aC({
      noIncomingEdges: true
    }),
    leaves: aC({
      noOutgoingEdges: true
    }),
    outgoers: iT(aN({
      outgoing: true
    }), "outgoers"),
    successors: a_({
      outgoing: true
    }),
    incomers: iT(aN({
      incoming: true
    }), "incomers"),
    predecessors: a_({
      incoming: true
    })
  });
  Z(aT, {
    neighborhood: iT(function (e) {
      var t = [];
      var n = this.nodes();
      var r = 0;
      for (; r < n.length; r++) {
        var i = n[r];
        var a = i.connectedEdges();
        var o = 0;
        for (; o < a.length; o++) {
          var s = a[o];
          var l = s.source();
          var u = s.target();
          var h = i === l ? u : l;
          if (h.length > 0) {
            t.push(h[0]);
          }
          t.push(s[0]);
        }
      }
      return this.spawn(t, true).filter(e);
    }, "neighborhood"),
    closedNeighborhood: function (e) {
      return this.neighborhood().add(this).filter(e);
    },
    openNeighborhood: function (e) {
      return this.neighborhood(e);
    }
  });
  aT.neighbourhood = aT.neighborhood;
  aT.closedNeighbourhood = aT.closedNeighborhood;
  aT.openNeighbourhood = aT.openNeighborhood;
  Z(aT, {
    source: iT(function (e) {
      var t;
      var n = this[0];
      if (n) {
        t = n._private.source || n.cy().collection();
      }
      if (t && e) {
        return t.filter(e);
      } else {
        return t;
      }
    }, "source"),
    target: iT(function (e) {
      var t;
      var n = this[0];
      if (n) {
        t = n._private.target || n.cy().collection();
      }
      if (t && e) {
        return t.filter(e);
      } else {
        return t;
      }
    }, "target"),
    sources: aD({
      attr: "source"
    }),
    targets: aD({
      attr: "target"
    })
  });
  Z(aT, {
    edgesWith: iT(aM(), "edgesWith"),
    edgesTo: iT(aM({
      thisIsSrc: true
    }), "edgesTo")
  });
  Z(aT, {
    connectedEdges: iT(function (e) {
      var t = [];
      var n = 0;
      for (; n < this.length; n++) {
        var r = this[n];
        if (r.isNode()) {
          var i = r._private.edges;
          var a = 0;
          for (; a < i.length; a++) {
            var o = i[a];
            t.push(o);
          }
        }
      }
      return this.spawn(t, true).filter(e);
    }, "connectedEdges"),
    connectedNodes: iT(function (e) {
      var t = [];
      var n = 0;
      for (; n < this.length; n++) {
        var r = this[n];
        if (r.isEdge()) {
          t.push(r.source()[0]);
          t.push(r.target()[0]);
        }
      }
      return this.spawn(t, true).filter(e);
    }, "connectedNodes"),
    parallelEdges: iT(aA(), "parallelEdges"),
    codirectedEdges: iT(aA({
      codirected: true
    }), "codirectedEdges")
  });
  Z(aT, {
    components: function (e) {
      var t = this;
      var n = t.cy();
      var r = n.collection();
      var i = e == null ? t.nodes() : e.nodes();
      var a = [];
      if (e != null && i.empty()) {
        i = e.sources();
      }
      function o(e, t) {
        r.merge(e);
        i.unmerge(e);
        t.merge(e);
      }
      if (i.empty()) {
        return t.spawn();
      }
      do {
        (function () {
          var e = n.collection();
          a.push(e);
          var r = i[0];
          o(r, e);
          t.bfs({
            directed: false,
            roots: r,
            visit: function (t) {
              return o(t, e);
            }
          });
          e.forEach(function (n) {
            n.connectedEdges().forEach(function (n) {
              if (t.has(n) && e.has(n.source()) && e.has(n.target())) {
                e.merge(n);
              }
            });
          });
        })();
      } while (i.length > 0);
      return a;
    },
    component: function () {
      var e = this[0];
      return e.cy().mutableElements().components(e)[0];
    }
  });
  aT.componentsOf = aT.components;
  function aS(e, t, n = false, r = false) {
    if (e === undefined) {
      e$("A collection must have a reference to the core");
      return;
    }
    var i = new tt();
    var a = false;
    if (t) {
      if (t.length > 0 && A(t[0]) && !I(t[0])) {
        a = true;
        var o = [];
        var s = new tr();
        var l = 0;
        var u = t.length;
        for (; l < u; l++) {
          var h = t[l];
          if (h.data == null) {
            h.data = {};
          }
          var c = h.data;
          if (c.id == null) {
            c.id = e1();
          } else if (e.hasElementWithId(c.id) || s.has(c.id)) {
            continue;
          }
          var d = new ti(e, h, false);
          o.push(d);
          s.add(c.id);
        }
        t = o;
      }
    } else {
      t = [];
    }
    this.length = 0;
    var p = 0;
    var g = t.length;
    for (; p < g; p++) {
      var f = t[p][0];
      if (f != null) {
        var v = f._private.data.id;
        if (!n || !i.has(v)) {
          if (n) {
            i.set(v, {
              index: this.length,
              ele: f
            });
          }
          this[this.length] = f;
          this.length++;
        }
      }
    }
    this._private = {
      eles: this,
      cy: e,
      get map() {
        if (this.lazyMap == null) {
          this.rebuildMap();
        }
        return this.lazyMap;
      },
      set map(m) {
        this.lazyMap = m;
      },
      rebuildMap: function () {
        var e = this.lazyMap = new tt();
        var t = this.eles;
        var n = 0;
        for (; n < t.length; n++) {
          var r = t[n];
          e.set(r.id(), {
            index: n,
            ele: r
          });
        }
      }
    };
    if (n) {
      this._private.map = i;
    }
    if (a && !r) {
      this.restore();
    }
  }
  var aP = ti.prototype = aS.prototype = Object.create(Array.prototype);
  aP.instanceString = function () {
    return "collection";
  };
  aP.spawn = function (e, t) {
    return new aS(this.cy(), e, t);
  };
  aP.spawnSelf = function () {
    return this.spawn(this);
  };
  aP.cy = function () {
    return this._private.cy;
  };
  aP.renderer = function () {
    return this._private.cy.renderer();
  };
  aP.element = function () {
    return this[0];
  };
  aP.collection = function () {
    if (L(this)) {
      return this;
    } else {
      return new aS(this._private.cy, [this]);
    }
  };
  aP.unique = function () {
    return new aS(this._private.cy, this, true);
  };
  aP.hasElementWithId = function (e) {
    e = "" + e;
    return this._private.map.has(e);
  };
  aP.getElementById = function (e) {
    e = "" + e;
    var t = this._private.cy;
    var n = this._private.map.get(e);
    if (n) {
      return n.ele;
    } else {
      return new aS(t);
    }
  };
  aP.$id = aP.getElementById;
  aP.poolIndex = function () {
    var e = this._private.cy._private.elements;
    var t = this[0]._private.data.id;
    return e._private.map.get(t).index;
  };
  aP.indexOf = function (e) {
    var t = e[0]._private.data.id;
    return this._private.map.get(t).index;
  };
  aP.indexOfId = function (e) {
    e = "" + e;
    return this._private.map.get(e).index;
  };
  aP.json = function (e) {
    var t = this.element();
    var n = this.cy();
    if (t == null && e) {
      return this;
    }
    if (t != null) {
      var r = t._private;
      if (A(e)) {
        n.startBatch();
        if (e.data) {
          t.data(e.data);
          var i = r.data;
          if (t.isEdge()) {
            var a = false;
            var o = {};
            var s = e.data.source;
            var l = e.data.target;
            if (s != null && s != i.source) {
              o.source = "" + s;
              a = true;
            }
            if (l != null && l != i.target) {
              o.target = "" + l;
              a = true;
            }
            if (a) {
              t = t.move(o);
            }
          } else {
            var u = "parent" in e.data;
            var h = e.data.parent;
            if (u && (h != null || i.parent != null) && h != i.parent) {
              if (h === undefined) {
                h = null;
              }
              if (h != null) {
                h = "" + h;
              }
              t = t.move({
                parent: h
              });
            }
          }
        }
        if (e.position) {
          t.position(e.position);
        }
        function c(n, i, a) {
          var o = e[n];
          if (o != null && o !== r[n]) {
            if (o) {
              t[i]();
            } else {
              t[a]();
            }
          }
        }
        c("removed", "remove", "restore");
        c("selected", "select", "unselect");
        c("selectable", "selectify", "unselectify");
        c("locked", "lock", "unlock");
        c("grabbable", "grabify", "ungrabify");
        c("pannable", "panify", "unpanify");
        if (e.classes != null) {
          t.classes(e.classes);
        }
        n.endBatch();
        return this;
      }
      if (e === undefined) {
        var d = {
          data: e0(r.data),
          position: e0(r.position),
          group: r.group,
          removed: r.removed,
          selected: r.selected,
          selectable: r.selectable,
          locked: r.locked,
          grabbable: r.grabbable,
          pannable: r.pannable,
          classes: null
        };
        d.classes = "";
        var p = 0;
        r.classes.forEach(function (e) {
          return d.classes += p++ == 0 ? e : " " + e;
        });
        return d;
      }
    }
  };
  aP.jsons = function () {
    var e = [];
    var t = 0;
    for (; t < this.length; t++) {
      var n = this[t].json();
      e.push(n);
    }
    return e;
  };
  aP.clone = function () {
    var e = this.cy();
    var t = [];
    var n = 0;
    for (; n < this.length; n++) {
      var r = new ti(e, this[n].json(), false);
      t.push(r);
    }
    return new aS(e, t);
  };
  aP.copy = aP.clone;
  aP.restore = function () {
    var e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    var n = this.cy();
    var r = n._private;
    var i = [];
    var a = [];
    var o = 0;
    var s = this.length;
    for (; o < s; o++) {
      var l = this[o];
      if (!t || l.removed()) {
        if (l.isNode()) {
          i.push(l);
        } else {
          a.push(l);
        }
      }
    }
    I = i.concat(a);
    function u() {
      I.splice(L, 1);
      L--;
    }
    for (L = 0; L < I.length; L++) {
      var h = I[L];
      var c = h._private;
      var d = c.data;
      h.clearTraversalCache();
      if (t || c.removed) {
        if (d.id === undefined) {
          d.id = e1();
        } else if (S(d.id)) {
          d.id = "" + d.id;
        } else if (B(d.id) || !_(d.id)) {
          e$("Can not create element with invalid string ID `" + d.id + "`");
          u();
          continue;
        } else if (n.hasElementWithId(d.id)) {
          e$("Can not create second element with ID `" + d.id + "`");
          u();
          continue;
        }
      }
      var p = d.id;
      if (h.isNode()) {
        var g = c.position;
        if (g.x == null) {
          g.x = 0;
        }
        if (g.y == null) {
          g.y = 0;
        }
      }
      if (h.isEdge()) {
        var f = ["source", "target"];
        var v = f.length;
        var y = false;
        var b = 0;
        for (; b < v; b++) {
          var x = f[b];
          var w = d[x];
          if (S(w)) {
            w = d[x] = "" + d[x];
          }
          if (w == null || w === "") {
            e$("Can not create edge `" + p + "` with unspecified " + x);
            y = true;
          } else if (!n.hasElementWithId(w)) {
            e$("Can not create edge `" + p + "` with nonexistant " + x + " `" + w + "`");
            y = true;
          }
        }
        if (y) {
          u();
          continue;
        }
        var E = n.getElementById(d.source);
        var T = n.getElementById(d.target);
        if (E.same(T)) {
          E._private.edges.push(h);
        } else {
          E._private.edges.push(h);
          T._private.edges.push(h);
        }
        h._private.source = E;
        h._private.target = T;
      }
      c.map = new tt();
      c.map.set(p, {
        ele: h,
        index: 0
      });
      c.removed = false;
      if (t) {
        n.addToPool(h);
      }
    }
    for (var C = 0; C < i.length; C++) {
      var N = i[C];
      var D = N._private.data;
      if (S(D.parent)) {
        D.parent = "" + D.parent;
      }
      var M = D.parent;
      if (M != null || N._private.parent) {
        var A = N._private.parent ? n.collection().merge(N._private.parent) : n.getElementById(M);
        if (A.empty()) {
          D.parent = undefined;
        } else if (A[0].removed()) {
          eJ("Node added with missing parent, reference to parent removed");
          D.parent = undefined;
          N._private.parent = null;
        } else {
          var P = false;
          var O = A;
          while (!O.empty()) {
            if (N.same(O)) {
              P = true;
              D.parent = undefined;
              break;
            }
            O = O.parent();
          }
          if (!P) {
            A[0]._private.children.push(N);
            N._private.parent = A[0];
            r.hasCompoundNodes = true;
          }
        }
      }
    }
    if (I.length > 0) {
      var I;
      var L;
      var k;
      var R = I.length === this.length ? this : new aS(n, I);
      var F = 0;
      for (; F < R.length; F++) {
        var z = R[F];
        if (!z.isNode()) {
          z.parallelEdges().clearTraversalCache();
          z.source().clearTraversalCache();
          z.target().clearTraversalCache();
        }
      }
      (r.hasCompoundNodes ? n.collection().merge(R).merge(R.connectedNodes()).merge(R.parent()) : R).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(e);
      if (e) {
        R.emitAndNotify("add");
      } else if (t) {
        R.emit("add");
      }
    }
    return this;
  };
  aP.removed = function () {
    var e = this[0];
    return e && e._private.removed;
  };
  aP.inside = function () {
    var e = this[0];
    return e && !e._private.removed;
  };
  aP.remove = function () {
    var e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    var t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    var n = [];
    var r = {};
    var i = this._private.cy;
    var a = 0;
    var o = this.length;
    for (; a < o; a++) {
      (function e(i) {
        var a = r[i.id()];
        if ((!t || !i.removed()) && !a) {
          r[i.id()] = true;
          if (i.isNode()) {
            n.push(i);
            (function (t) {
              var n = t._private.edges;
              var r = 0;
              for (; r < n.length; r++) {
                e(n[r]);
              }
            })(i);
            (function (t) {
              var n = t._private.children;
              var r = 0;
              for (; r < n.length; r++) {
                e(n[r]);
              }
            })(i);
          } else {
            n.unshift(i);
          }
        }
      })(this[a]);
    }
    function s(e, t) {
      e4(e._private.edges, t);
      e.clearTraversalCache();
    }
    var l = [];
    l.ids = {};
    this.dirtyCompoundBoundsCache();
    if (t) {
      i.removeFromPool(n);
    }
    for (var u = 0; u < n.length; u++) {
      var h = n[u];
      if (h.isEdge()) {
        var c = h.source()[0];
        var d = h.target()[0];
        s(c, h);
        s(d, h);
        var p = h.parallelEdges();
        var g = 0;
        for (; g < p.length; g++) {
          var f = p[g];
          (function (e) {
            e.clearTraversalCache();
          })(f);
          if (f.isBundledBezier()) {
            f.dirtyBoundingBoxCache();
          }
        }
      } else {
        var v = h.parent();
        if (v.length !== 0) {
          (function (e, t) {
            t = t[0];
            var n = (e = e[0])._private.children;
            var r = e.id();
            e4(n, t);
            t._private.parent = null;
            if (!l.ids[r]) {
              l.ids[r] = true;
              l.push(e);
            }
          })(v, h);
        }
      }
      if (t) {
        h._private.removed = true;
      }
    }
    var y = i._private.elements;
    i._private.hasCompoundNodes = false;
    for (var b = 0; b < y.length; b++) {
      if (y[b].isParent()) {
        i._private.hasCompoundNodes = true;
        break;
      }
    }
    var x = new aS(this.cy(), n);
    if (x.size() > 0) {
      if (e) {
        x.emitAndNotify("remove");
      } else if (t) {
        x.emit("remove");
      }
    }
    for (var w = 0; w < l.length; w++) {
      var E = l[w];
      if (!t || !E.removed()) {
        E.updateStyle();
      }
    }
    return x;
  };
  aP.move = function (e) {
    var t = this._private.cy;
    var n = this;
    function r(e) {
      if (e == null) {
        return e;
      } else {
        return "" + e;
      }
    }
    if (e.source !== undefined || e.target !== undefined) {
      var i = r(e.source);
      var a = r(e.target);
      var o = i != null && t.hasElementWithId(i);
      var s = a != null && t.hasElementWithId(a);
      if (o || s) {
        t.batch(function () {
          n.remove(false, false);
          n.emitAndNotify("moveout");
          for (var e = 0; e < n.length; e++) {
            var t = n[e];
            var r = t._private.data;
            if (t.isEdge()) {
              if (o) {
                r.source = i;
              }
              if (s) {
                r.target = a;
              }
            }
          }
          n.restore(false, false);
        });
        n.emitAndNotify("move");
      }
    } else if (e.parent !== undefined) {
      var l = r(e.parent);
      if (l === null || t.hasElementWithId(l)) {
        var u = l === null ? undefined : l;
        t.batch(function () {
          var e = n.remove(false, false);
          e.emitAndNotify("moveout");
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            var i = r._private.data;
            if (r.isNode()) {
              i.parent = u;
            }
          }
          e.restore(false, false);
        });
        n.emitAndNotify("move");
      }
    }
    return this;
  };
  [rn, ie, it, iE, iC, oZ, iA, iJ, ai, aa, {
    isNode: function () {
      return this.group() === "nodes";
    },
    isEdge: function () {
      return this.group() === "edges";
    },
    isLoop: function () {
      return this.isEdge() && this.source()[0] === this.target()[0];
    },
    isSimple: function () {
      return this.isEdge() && this.source()[0] !== this.target()[0];
    },
    group: function () {
      var e = this[0];
      if (e) {
        return e._private.group;
      }
    }
  }, as, au, ap, ax, aT].forEach(function (e) {
    Z(aP, e);
  });
  var aO = function () {
    function e(e) {
      return -e.tension * e.x - e.friction * e.v;
    }
    function t(t, n, r) {
      var i = {
        x: t.x + r.dx * n,
        v: t.v + r.dv * n,
        tension: t.tension,
        friction: t.friction
      };
      return {
        dx: i.v,
        dv: e(i)
      };
    }
    return function n(r, i, a) {
      var o;
      var s;
      var l;
      var u;
      var h;
      var c;
      var d;
      var p;
      var g;
      var f;
      var v;
      var y = {
        x: -1,
        v: 0,
        tension: null,
        friction: null
      };
      var b = [0];
      var x = 0;
      r = parseFloat(r) || 500;
      i = parseFloat(i) || 20;
      a = a || null;
      y.tension = r;
      y.friction = i;
      f = (g = a !== null) ? (x = n(r, i)) / a * 0.016 : 0.016;
      while (o = v || y, s = f, l = {
        dx: o.v,
        dv: e(o)
      }, u = t(o, s * 0.5, l), h = t(o, s * 0.5, u), c = t(o, s, h), d = 1 / 6 * (l.dx + (u.dx + h.dx) * 2 + c.dx), p = 1 / 6 * (l.dv + (u.dv + h.dv) * 2 + c.dv), o.x = o.x + d * s, o.v = o.v + p * s, v = o, b.push(1 + v.x), x += 16, Math.abs(v.x) > 0.0001 && Math.abs(v.v) > 0.0001);
      if (g) {
        return function (e) {
          return b[e * (b.length - 1) | 0];
        };
      } else {
        return x;
      }
    };
  }();
  function aI(e, t, n, r) {
    var i = function (e, t, n, r) {
      var i = typeof Float32Array != "undefined";
      if (arguments.length != 4) {
        return false;
      }
      for (var a = 0; a < 4; ++a) {
        if (typeof arguments[a] != "number" || isNaN(arguments[a]) || !isFinite(arguments[a])) {
          return false;
        }
      }
      e = Math.min(e, 1);
      n = Math.min(n, 1);
      e = Math.max(e, 0);
      n = Math.max(n, 0);
      var o = i ? new Float32Array(11) : Array(11);
      function s(e, t, n) {
        return (((1 - n * 3 + t * 3) * e + (n * 3 - t * 6)) * e + t * 3) * e;
      }
      function l(e, t, n) {
        return (1 - n * 3 + t * 3) * 3 * e * e + (n * 3 - t * 6) * 2 * e + t * 3;
      }
      var u = false;
      function h(i) {
        if (!u) {
          u = true;
          if (e !== t || n !== r) {
            (function () {
              for (var t = 0; t < 11; ++t) {
                o[t] = s(t * 0.1, e, n);
              }
            })();
          }
        }
        if (e === t && n === r) {
          return i;
        } else if (i === 0) {
          return 0;
        } else if (i === 1) {
          return 1;
        } else {
          return s(function (t) {
            var r = 0;
            var i = 1;
            for (; i !== 10 && o[i] <= t; ++i) {
              r += 0.1;
            }
            var a = r + (t - o[--i]) / (o[i + 1] - o[i]) * 0.1;
            var u = l(a, e, n);
            if (u >= 0.001) {
              return function (t, r) {
                for (var i = 0; i < 4; ++i) {
                  var a = l(r, e, n);
                  if (a === 0) {
                    break;
                  }
                  var o = s(r, e, n) - t;
                  r -= o / a;
                }
                return r;
              }(t, a);
            } else if (u === 0) {
              return a;
            } else {
              return function (t, r, i) {
                var a;
                var o;
                var l = 0;
                do {
                  if ((a = s(o = r + (i - r) / 2, e, n) - t) > 0) {
                    i = o;
                  } else {
                    r = o;
                  }
                } while (Math.abs(a) > 1e-7 && ++l < 10);
                return o;
              }(t, r, r + 0.1);
            }
          }(i), t, r);
        }
      }
      h.getControlPoints = function () {
        return [{
          x: e,
          y: t
        }, {
          x: n,
          y: r
        }];
      };
      var c = "generateBezier(" + [e, t, n, r] + ")";
      h.toString = function () {
        return c;
      };
      return h;
    }(e, t, n, r);
    return function (e, t, n) {
      return e + (t - e) * i(n);
    };
  }
  var aL = {
    linear: function (e, t, n) {
      return e + (t - e) * n;
    },
    ease: aI(0.25, 0.1, 0.25, 1),
    "ease-in": aI(0.42, 0, 1, 1),
    "ease-out": aI(0, 0, 0.58, 1),
    "ease-in-out": aI(0.42, 0, 0.58, 1),
    "ease-in-sine": aI(0.47, 0, 0.745, 0.715),
    "ease-out-sine": aI(0.39, 0.575, 0.565, 1),
    "ease-in-out-sine": aI(0.445, 0.05, 0.55, 0.95),
    "ease-in-quad": aI(0.55, 0.085, 0.68, 0.53),
    "ease-out-quad": aI(0.25, 0.46, 0.45, 0.94),
    "ease-in-out-quad": aI(0.455, 0.03, 0.515, 0.955),
    "ease-in-cubic": aI(0.55, 0.055, 0.675, 0.19),
    "ease-out-cubic": aI(0.215, 0.61, 0.355, 1),
    "ease-in-out-cubic": aI(0.645, 0.045, 0.355, 1),
    "ease-in-quart": aI(0.895, 0.03, 0.685, 0.22),
    "ease-out-quart": aI(0.165, 0.84, 0.44, 1),
    "ease-in-out-quart": aI(0.77, 0, 0.175, 1),
    "ease-in-quint": aI(0.755, 0.05, 0.855, 0.06),
    "ease-out-quint": aI(0.23, 1, 0.32, 1),
    "ease-in-out-quint": aI(0.86, 0, 0.07, 1),
    "ease-in-expo": aI(0.95, 0.05, 0.795, 0.035),
    "ease-out-expo": aI(0.19, 1, 0.22, 1),
    "ease-in-out-expo": aI(1, 0, 0, 1),
    "ease-in-circ": aI(0.6, 0.04, 0.98, 0.335),
    "ease-out-circ": aI(0.075, 0.82, 0.165, 1),
    "ease-in-out-circ": aI(0.785, 0.135, 0.15, 0.86),
    spring: function (e, t, n) {
      if (n === 0) {
        return aL.linear;
      }
      var r = aO(e, t, n);
      return function (e, t, n) {
        return e + (t - e) * r(n);
      };
    },
    "cubic-bezier": aI
  };
  function ak(e, t, n, r, i) {
    if (r === 1 || t === n) {
      return n;
    }
    var a = i(t, n, r);
    if (e != null) {
      if (e.roundValue || e.color) {
        a = Math.round(a);
      }
      if (e.min !== undefined) {
        a = Math.max(a, e.min);
      }
      if (e.max !== undefined) {
        a = Math.min(a, e.max);
      }
    }
    return a;
  }
  function aR(e, t) {
    if (e.pfValue == null && e.value == null) {
      return e;
    } else if (e.pfValue != null && (t == null || t.type.units !== "%")) {
      return e.pfValue;
    } else {
      return e.value;
    }
  }
  function aB(e, t, n, r, i) {
    var a = i != null ? i.type : null;
    if (n < 0) {
      n = 0;
    } else if (n > 1) {
      n = 1;
    }
    var o = aR(e, i);
    var s = aR(t, i);
    if (S(o) && S(s)) {
      return ak(a, o, s, n, r);
    }
    if (M(o) && M(s)) {
      var l = [];
      var u = 0;
      for (; u < s.length; u++) {
        var h = o[u];
        var c = s[u];
        if (h != null && c != null) {
          var d = ak(a, h, c, n, r);
          l.push(d);
        } else {
          l.push(c);
        }
      }
      return l;
    }
  }
  function aF(e, t) {
    return e != null && t != null && (!!S(e) && !!S(t) || !!e && !!t);
  }
  function az(e, t) {
    var n = t._private.aniEles;
    var r = [];
    function i(t, n) {
      var i = t._private;
      var a = i.animation.current;
      var o = i.animation.queue;
      var s = false;
      if (a.length === 0) {
        var l = o.shift();
        if (l) {
          a.push(l);
        }
      }
      function u(e) {
        for (var t = e.length - 1; t >= 0; t--) {
          e[t]();
        }
        e.splice(0, e.length);
      }
      var h = a.length - 1;
      for (; h >= 0; h--) {
        var c = a[h];
        var d = c._private;
        if (d.stopped) {
          a.splice(h, 1);
          d.hooked = false;
          d.playing = false;
          d.started = false;
          u(d.frames);
          continue;
        }
        if (d.playing || d.applying) {
          if (d.playing && d.applying) {
            d.applying = false;
          }
          if (!d.started) {
            (function (e, t, n, r) {
              var i = t._private;
              i.started = true;
              i.startTime = n - i.progress * i.duration;
            })(0, c, e);
          }
          (function (e, t, n, r) {
            var i;
            var a;
            var o;
            var s;
            var l = !r;
            var u = e._private;
            var h = t._private;
            var c = h.easing;
            var d = h.startTime;
            var p = (r ? e : e.cy()).style();
            if (!h.easingImpl) {
              if (c == null) {
                h.easingImpl = aL.linear;
              } else {
                i = _(c) ? p.parse("transition-timing-function", c).value : c;
                if (_(i)) {
                  a = i;
                  o = [];
                } else {
                  a = i[1];
                  o = i.slice(2).map(function (e) {
                    return +e;
                  });
                }
                if (o.length > 0) {
                  if (a === "spring") {
                    o.push(h.duration);
                  }
                  h.easingImpl = aL[a].apply(null, o);
                } else {
                  h.easingImpl = aL[a];
                }
              }
            }
            var g = h.easingImpl;
            s = h.duration === 0 ? 1 : (n - d) / h.duration;
            if (h.applying) {
              s = h.progress;
            }
            if (s < 0) {
              s = 0;
            } else if (s > 1) {
              s = 1;
            }
            if (h.delay == null) {
              var f = h.startPosition;
              var v = h.position;
              if (v && l && !e.locked()) {
                var y = {};
                if (aF(f.x, v.x)) {
                  y.x = aB(f.x, v.x, s, g);
                }
                if (aF(f.y, v.y)) {
                  y.y = aB(f.y, v.y, s, g);
                }
                e.position(y);
              }
              var b = h.startPan;
              var x = h.pan;
              var w = u.pan;
              var E = x != null && r;
              if (E) {
                if (aF(b.x, x.x)) {
                  w.x = aB(b.x, x.x, s, g);
                }
                if (aF(b.y, x.y)) {
                  w.y = aB(b.y, x.y, s, g);
                }
                e.emit("pan");
              }
              var T = h.startZoom;
              var C = h.zoom;
              var N = C != null && r;
              if (N) {
                if (aF(T, C)) {
                  u.zoom = tP(u.minZoom, aB(T, C, s, g), u.maxZoom);
                }
                e.emit("zoom");
              }
              if (E || N) {
                e.emit("viewport");
              }
              var D = h.style;
              if (D && D.length > 0 && l) {
                for (var M = 0; M < D.length; M++) {
                  var A = D[M];
                  var S = A.name;
                  var P = h.startStyle[S];
                  var O = p.properties[P.name];
                  var I = aB(P, A, s, g, O);
                  p.overrideBypass(e, S, I);
                }
                e.emit("style");
              }
            }
            h.progress = s;
          })(t, c, e, n);
          d.applying &&= false;
          u(d.frames);
          if (d.step != null) {
            d.step(e);
          }
          if (c.completed()) {
            a.splice(h, 1);
            d.hooked = false;
            d.playing = false;
            d.started = false;
            u(d.completes);
          }
          s = true;
        }
      }
      if (!n && a.length === 0 && o.length === 0) {
        r.push(t);
      }
      return s;
    }
    var a = false;
    var o = 0;
    for (; o < n.length; o++) {
      var s = i(n[o]);
      a = a || s;
    }
    var l = i(t, true);
    if (a || l) {
      if (n.length > 0) {
        t.notify("draw", n);
      } else {
        t.notify("draw");
      }
    }
    n.unmerge(r);
    t.emit("step");
  }
  var aV = {
    animate: r7.animate(),
    animation: r7.animation(),
    animated: r7.animated(),
    clearQueue: r7.clearQueue(),
    delay: r7.delay(),
    delayAnimation: r7.delayAnimation(),
    stop: r7.stop(),
    addToAnimationPool: function (e) {
      if (this.styleEnabled()) {
        this._private.aniEles.merge(e);
      }
    },
    stopAnimationLoop: function () {
      this._private.animationsRunning = false;
    },
    startAnimationLoop: function () {
      var e = this;
      e._private.animationsRunning = true;
      if (e.styleEnabled()) {
        var t = e.renderer();
        if (t && t.beforeRender) {
          t.beforeRender(function (t, n) {
            az(n, e);
          }, t.beforeRenderPriorities.animations);
        } else {
          (function t() {
            if (e._private.animationsRunning) {
              eL(function (n) {
                az(n, e);
                t();
              });
            }
          })();
        }
      }
    }
  };
  var aY = {
    qualifierCompare: function (e, t) {
      if (e == null || t == null) {
        return e == null && t == null;
      } else {
        return e.sameText(t);
      }
    },
    eventMatches: function (e, t, n) {
      var r = t.qualifier;
      return r == null || e !== n.target && I(n.target) && r.matches(n.target);
    },
    addEventFields: function (e, t) {
      t.cy = e;
      t.target = e;
    },
    callbackContext: function (e, t, n) {
      if (t.qualifier != null) {
        return n.target;
      } else {
        return e;
      }
    }
  };
  function aG(e) {
    if (_(e)) {
      return new ix(e);
    } else {
      return e;
    }
  }
  var aX = {
    createEmitter: function () {
      var e = this._private;
      e.emitter ||= new i6(aY, this);
      return this;
    },
    emitter: function () {
      return this._private.emitter;
    },
    on: function (e, t, n) {
      this.emitter().on(e, aG(t), n);
      return this;
    },
    removeListener: function (e, t, n) {
      this.emitter().removeListener(e, aG(t), n);
      return this;
    },
    removeAllListeners: function () {
      this.emitter().removeAllListeners();
      return this;
    },
    one: function (e, t, n) {
      this.emitter().one(e, aG(t), n);
      return this;
    },
    once: function (e, t, n) {
      this.emitter().one(e, aG(t), n);
      return this;
    },
    emit: function (e, t) {
      this.emitter().emit(e, t);
      return this;
    },
    emitAndNotify: function (e, t) {
      this.emit(e);
      this.notify(e, t);
      return this;
    }
  };
  r7.eventAliasesOn(aX);
  var aH = {
    png: function (e) {
      e = e || {};
      return this._private.renderer.png(e);
    },
    jpg: function (e) {
      var t = this._private.renderer;
      (e = e || {}).bg = e.bg || "#fff";
      return t.jpg(e);
    }
  };
  aH.jpeg = aH.jpg;
  var aU = {
    layout: function (e) {
      if (e == null) {
        e$("Layout options must be specified to make a layout");
        return;
      }
      if (e.name == null) {
        e$("A `name` must be specified to make a layout");
        return;
      }
      var t;
      var n = e.name;
      var r = this.extension("layout", n);
      if (r == null) {
        e$("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
        return;
      }
      t = _(e.eles) ? this.$(e.eles) : e.eles ?? this.$();
      return new r(Z({}, e, {
        cy: this,
        eles: t
      }));
    }
  };
  aU.createLayout = aU.makeLayout = aU.layout;
  var aW = e3({
    hideEdgesOnViewport: false,
    textureOnViewport: false,
    motionBlur: false,
    motionBlurOpacity: 0.05,
    pixelRatio: undefined,
    desktopTapThreshold: 4,
    touchTapThreshold: 8,
    wheelSensitivity: 1,
    debug: false,
    showFps: false
  });
  var aj = {
    renderTo: function (e, t, n, r) {
      this._private.renderer.renderTo(e, t, n, r);
      return this;
    },
    renderer: function () {
      return this._private.renderer;
    },
    forceRender: function () {
      this.notify("draw");
      return this;
    },
    resize: function () {
      this.invalidateSize();
      this.emitAndNotify("resize");
      return this;
    },
    initRenderer: function (e) {
      var t = this.extension("renderer", e.name);
      if (t == null) {
        e$(`Can not initialise: No such renderer \`${e.name}\` found. Did you forget to import it and \`cytoscape.use()\` it?`);
        return;
      }
      if (e.wheelSensitivity !== undefined) {
        eJ("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
      }
      var n = aW(e);
      n.cy = this;
      this._private.renderer = new t(n);
      this.notify("init");
    },
    destroyRenderer: function () {
      this.notify("destroy");
      var e = this.container();
      if (e) {
        for (e._cyreg = null; e.childNodes.length > 0;) {
          e.removeChild(e.childNodes[0]);
        }
      }
      this._private.renderer = null;
      this.mutableElements().forEach(function (e) {
        var t = e._private;
        t.rscratch = {};
        t.rstyle = {};
        t.animation.current = [];
        t.animation.queue = [];
      });
    },
    onRender: function (e) {
      return this.on("render", e);
    },
    offRender: function (e) {
      return this.off("render", e);
    }
  };
  aj.invalidateDimensions = aj.resize;
  var aq = {
    collection: function (e, t) {
      if (_(e)) {
        return this.$(e);
      } else if (O(e)) {
        return e.collection();
      } else if (M(e)) {
        t ||= {};
        return new aS(this, e, t.unique, t.removed);
      } else {
        return new aS(this);
      }
    },
    nodes: function (e) {
      var t = this.$(function (e) {
        return e.isNode();
      });
      if (e) {
        return t.filter(e);
      } else {
        return t;
      }
    },
    edges: function (e) {
      var t = this.$(function (e) {
        return e.isEdge();
      });
      if (e) {
        return t.filter(e);
      } else {
        return t;
      }
    },
    $: function (e) {
      var t = this._private.elements;
      if (e) {
        return t.filter(e);
      } else {
        return t.spawnSelf();
      }
    },
    mutableElements: function () {
      return this._private.elements;
    }
  };
  aq.elements = aq.filter = aq.$;
  var aK = {};
  aK.apply = function (e) {
    var t = this._private.cy.collection();
    var n = 0;
    for (; n < e.length; n++) {
      var r = e[n];
      var i = this.getContextMeta(r);
      if (!i.empty) {
        var a = this.getContextStyle(i);
        var o = this.applyContextStyle(i, a, r);
        if (r._private.appliedInitStyle) {
          this.updateTransitions(r, o.diffProps);
        } else {
          r._private.appliedInitStyle = true;
        }
        if (this.updateStyleHints(r)) {
          t.push(r);
        }
      }
    }
    return t;
  };
  aK.getPropertiesDiff = function (e, t) {
    var n = this._private.propDiffs = this._private.propDiffs || {};
    var r = e + "-" + t;
    var i = n[r];
    if (i) {
      return i;
    }
    var a = [];
    var o = {};
    var s = 0;
    for (; s < this.length; s++) {
      var l = this[s];
      var u = e[s] === "t";
      var h = t[s] === "t";
      var c = u !== h;
      var d = l.mappedProperties.length > 0;
      if (c || h && d) {
        var p = undefined;
        if (c && d) {
          p = l.properties;
        } else if (c) {
          p = l.properties;
        } else if (d) {
          p = l.mappedProperties;
        }
        for (var g = 0; g < p.length; g++) {
          var f = p[g];
          var v = f.name;
          var y = false;
          var b = s + 1;
          for (; b < this.length; b++) {
            var x = this[b];
            if (t[b] === "t" && (y = x.properties[f.name] != null)) {
              break;
            }
          }
          if (!o[v] && !y) {
            o[v] = true;
            a.push(v);
          }
        }
      }
    }
    n[r] = a;
    return a;
  };
  aK.getContextMeta = function (e) {
    var t;
    var n = "";
    var r = e._private.styleCxtKey || "";
    var i = 0;
    for (; i < this.length; i++) {
      var a = this[i];
      if (a.selector && a.selector.matches(e)) {
        n += "t";
      } else {
        n += "f";
      }
    }
    t = this.getPropertiesDiff(r, n);
    e._private.styleCxtKey = n;
    return {
      key: n,
      diffPropNames: t,
      empty: t.length === 0
    };
  };
  aK.getContextStyle = function (e) {
    var t = e.key;
    var n = this._private.contextStyles = this._private.contextStyles || {};
    if (n[t]) {
      return n[t];
    }
    var r = {
      _private: {
        key: t
      }
    };
    var i = 0;
    for (; i < this.length; i++) {
      var a = this[i];
      if (t[i] === "t") {
        for (var o = 0; o < a.properties.length; o++) {
          var s = a.properties[o];
          r[s.name] = s;
        }
      }
    }
    n[t] = r;
    return r;
  };
  aK.applyContextStyle = function (e, t, n) {
    var r = e.diffPropNames;
    var i = {};
    var a = this.types;
    var o = 0;
    for (; o < r.length; o++) {
      var s = r[o];
      var l = t[s];
      var u = n.pstyle(s);
      if (!l) {
        if (!u) {
          continue;
        }
        l = u.bypass ? {
          name: s,
          deleteBypassed: true
        } : {
          name: s,
          delete: true
        };
      }
      if (u !== l) {
        if (l.mapped === a.fn && u != null && u.mapping != null && u.mapping.value === l.value) {
          var h = u.mapping;
          if ((h.fnValue = l.value(n)) === h.prevFnValue) {
            continue;
          }
        }
        var c = i[s] = {
          prev: u
        };
        this.applyParsedProperty(n, l);
        c.next = n.pstyle(s);
        if (c.next && c.next.bypass) {
          c.next = c.next.bypassed;
        }
      }
    }
    return {
      diffProps: i
    };
  };
  aK.updateStyleHints = function (e) {
    var t = e._private;
    var n = this;
    var r = n.propertyGroupNames;
    var i = n.propertyGroupKeys;
    function a(e, t, r) {
      return n.getPropertiesHash(e, t, r);
    }
    var o = t.styleKey;
    if (e.removed()) {
      return false;
    }
    var s = t.group === "nodes";
    var l = e._private.style;
    r = Object.keys(l);
    for (var u = 0; u < i.length; u++) {
      var h = i[u];
      t.styleKeys[h] = [9261, 5381];
    }
    function c(e, n) {
      return t.styleKeys[n][0] = eR(e, t.styleKeys[n][0]);
    }
    function d(e, n) {
      return t.styleKeys[n][1] = eB(e, t.styleKeys[n][1]);
    }
    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        c(r, t);
        d(r, t);
      }
    }
    var g = 0;
    for (; g < r.length; g++) {
      var f;
      var v;
      var y = r[g];
      var b = l[y];
      if (b != null) {
        var x = this.properties[y];
        var w = x.type;
        var E = x.groupKey;
        var T = undefined;
        if (x.hashOverride != null) {
          T = x.hashOverride(e, b);
        } else if (b.pfValue != null) {
          T = b.pfValue;
        }
        var C = x.enums == null ? b.value : null;
        var N = T != null;
        var _ = C != null;
        var D = N || _;
        var M = b.units;
        if (w.number && D && !w.multiple) {
          c(v = (f = N ? T : C) > -128 && f < 128 && Math.floor(f) !== f ? 2000000000 - (f * 1024 | 0) : f, E);
          d(v, E);
          if (!N && M != null) {
            p(M, E);
          }
        } else {
          p(b.strValue, E);
        }
      }
    }
    var A = [9261, 5381];
    var S = 0;
    for (; S < i.length; S++) {
      var P = i[S];
      var O = t.styleKeys[P];
      A[0] = eR(O[0], A[0]);
      A[1] = eB(O[1], A[1]);
    }
    t.styleKey = A[0] * 2097152 + A[1];
    var I = t.styleKeys;
    t.labelDimsKey = eF(I.labelDimensions);
    var L = a(e, ["label"], I.labelDimensions);
    t.labelKey = eF(L);
    t.labelStyleKey = eF(ez(I.commonLabel, L));
    if (!s) {
      var k = a(e, ["source-label"], I.labelDimensions);
      t.sourceLabelKey = eF(k);
      t.sourceLabelStyleKey = eF(ez(I.commonLabel, k));
      var R = a(e, ["target-label"], I.labelDimensions);
      t.targetLabelKey = eF(R);
      t.targetLabelStyleKey = eF(ez(I.commonLabel, R));
    }
    if (s) {
      var B = t.styleKeys;
      var F = B.nodeBody;
      var z = B.nodeBorder;
      var V = B.nodeOutline;
      var Y = B.backgroundImage;
      var G = B.compound;
      var X = B.pie;
      var H = [F, z, V, Y, G, X].filter(function (e) {
        return e != null;
      }).reduce(ez, [9261, 5381]);
      t.nodeKey = eF(H);
      t.hasPie = X != null && X[0] !== 9261 && X[1] !== 5381;
    }
    return o !== t.styleKey;
  };
  aK.clearStyleHints = function (e) {
    var t = e._private;
    t.styleCxtKey = "";
    t.styleKeys = {};
    t.styleKey = null;
    t.labelKey = null;
    t.labelStyleKey = null;
    t.sourceLabelKey = null;
    t.sourceLabelStyleKey = null;
    t.targetLabelKey = null;
    t.targetLabelStyleKey = null;
    t.nodeKey = null;
    t.hasPie = null;
  };
  aK.applyParsedProperty = function (e, t) {
    var n = this;
    var r = t;
    var i = e._private.style;
    var a = n.types;
    var o = n.properties[r.name].type;
    var s = r.bypass;
    var l = i[r.name];
    var u = l && l.bypass;
    var h = e._private;
    var c = "mapping";
    function d(e) {
      if (e == null) {
        return null;
      } else {
        return e.pfValue ?? e.value;
      }
    }
    function p() {
      var t = d(l);
      var i = d(r);
      n.checkTriggers(e, r.name, t, i);
    }
    if (t.name === "curve-style" && e.isEdge() && (t.value !== "bezier" && e.isLoop() || t.value === "haystack" && (e.source().isParent() || e.target().isParent()))) {
      r = t = this.parse(t.name, "bezier", s);
    }
    if (r.delete) {
      i[r.name] = undefined;
      p();
      return true;
    }
    if (r.deleteBypassed) {
      if (l) {
        return !!l.bypass && (l.bypassed = undefined, p(), true);
      } else {
        p();
        return true;
      }
    }
    if (r.deleteBypass) {
      if (l) {
        return !!l.bypass && (i[r.name] = l.bypassed, p(), true);
      } else {
        p();
        return true;
      }
    }
    function g() {
      eJ("Do not assign mappings to elements without corresponding data (i.e. ele `" + e.id() + "` has no mapping for property `" + r.name + "` with data field `" + r.field + "`); try a `[" + r.field + "]` selector to limit scope to elements with `" + r.field + "` defined");
    }
    switch (r.mapped) {
      case a.mapData:
        var f;
        var v;
        var y = r.field.split(".");
        var b = h.data;
        var x = 0;
        for (; x < y.length && b; x++) {
          b = b[y[x]];
        }
        if (b == null) {
          g();
          return false;
        }
        if (!S(b)) {
          eJ("Do not use continuous mappers without specifying numeric data (i.e. `" + r.field + ": " + b + "` for `" + e.id() + "` is non-numeric)");
          return false;
        }
        var w = r.fieldMax - r.fieldMin;
        if ((v = w === 0 ? 0 : (b - r.fieldMin) / w) < 0) {
          v = 0;
        } else if (v > 1) {
          v = 1;
        }
        if (o.color) {
          var E = r.valueMin[0];
          var T = r.valueMax[0];
          var C = r.valueMin[1];
          var N = r.valueMax[1];
          var _ = r.valueMin[2];
          var D = r.valueMax[2];
          var M = r.valueMin[3] == null ? 1 : r.valueMin[3];
          var A = [Math.round(E + (T - E) * v), Math.round(C + (N - C) * v), Math.round(_ + (D - _) * v), Math.round(M + ((r.valueMax[3] == null ? 1 : r.valueMax[3]) - M) * v)];
          f = {
            bypass: r.bypass,
            name: r.name,
            value: A,
            strValue: "rgb(" + A[0] + ", " + A[1] + ", " + A[2] + ")"
          };
        } else {
          if (!o.number) {
            return false;
          }
          var P = r.valueMin + (r.valueMax - r.valueMin) * v;
          f = this.parse(r.name, P, r.bypass, c);
        }
        if (!f) {
          g();
          return false;
        }
        f.mapping = r;
        r = f;
        break;
      case a.data:
        var O = r.field.split(".");
        var I = h.data;
        var L = 0;
        for (; L < O.length && I; L++) {
          I = I[O[L]];
        }
        if (I != null) {
          f = this.parse(r.name, I, r.bypass, c);
        }
        if (!f) {
          g();
          return false;
        }
        f.mapping = r;
        r = f;
        break;
      case a.fn:
        var k = r.value;
        var R = r.fnValue ?? k(e);
        r.prevFnValue = R;
        if (R == null) {
          eJ("Custom function mappers may not return null (i.e. `" + r.name + "` for ele `" + e.id() + "` is null)");
          return false;
        }
        if (!(f = this.parse(r.name, R, r.bypass, c))) {
          eJ("Custom function mappers may not return invalid values for the property type (i.e. `" + r.name + "` for ele `" + e.id() + "` is invalid)");
          return false;
        }
        f.mapping = e0(r);
        r = f;
        break;
      case undefined:
        break;
      default:
        return false;
    }
    if (s) {
      if (u) {
        r.bypassed = l.bypassed;
      } else {
        r.bypassed = l;
      }
      i[r.name] = r;
    } else if (u) {
      l.bypassed = r;
    } else {
      i[r.name] = r;
    }
    p();
    return true;
  };
  aK.cleanElements = function (e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      this.clearStyleHints(r);
      r.dirtyCompoundBoundsCache();
      r.dirtyBoundingBoxCache();
      if (t) {
        var i = r._private.style;
        var a = Object.keys(i);
        var o = 0;
        for (; o < a.length; o++) {
          var s = a[o];
          var l = i[s];
          if (l != null) {
            if (l.bypass) {
              l.bypassed = null;
            } else {
              i[s] = null;
            }
          }
        }
      } else {
        r._private.style = {};
      }
    }
  };
  aK.update = function () {
    this._private.cy.mutableElements().updateStyle();
  };
  aK.updateTransitions = function (e, t) {
    var n = this;
    var r = e._private;
    var i = e.pstyle("transition-property").value;
    var a = e.pstyle("transition-duration").pfValue;
    var o = e.pstyle("transition-delay").pfValue;
    if (i.length > 0 && a > 0) {
      var s = {};
      var l = false;
      var u = 0;
      for (; u < i.length; u++) {
        var h = i[u];
        var c = e.pstyle(h);
        var d = t[h];
        if (d) {
          var p = d.prev;
          var g = d.next ?? c;
          var f = false;
          var v = undefined;
          if (p) {
            if (S(p.pfValue) && S(g.pfValue)) {
              f = g.pfValue - p.pfValue;
              v = p.pfValue + f * 0.000001;
            } else if (S(p.value) && S(g.value)) {
              f = g.value - p.value;
              v = p.value + f * 0.000001;
            } else if (M(p.value) && M(g.value)) {
              f = p.value[0] !== g.value[0] || p.value[1] !== g.value[1] || p.value[2] !== g.value[2];
              v = p.strValue;
            }
            if (f) {
              s[h] = g.strValue;
              this.applyBypass(e, h, v);
              l = true;
            }
          }
        }
      }
      if (!l) {
        return;
      }
      r.transitioning = true;
      new ru(function (t) {
        if (o > 0) {
          e.delayAnimation(o).play().promise().then(t);
        } else {
          t();
        }
      }).then(function () {
        return e.animation({
          style: s,
          duration: a,
          easing: e.pstyle("transition-timing-function").value,
          queue: false
        }).play().promise();
      }).then(function () {
        n.removeBypasses(e, i);
        e.emitAndNotify("style");
        r.transitioning = false;
      });
    } else if (r.transitioning) {
      this.removeBypasses(e, i);
      e.emitAndNotify("style");
      r.transitioning = false;
    }
  };
  aK.checkTrigger = function (e, t, n, r, i, a) {
    var o = this.properties[t];
    var s = i(o);
    if (s != null && s(n, r)) {
      a(o);
    }
  };
  aK.checkZOrderTrigger = function (e, t, n, r) {
    var i = this;
    this.checkTrigger(e, t, n, r, function (e) {
      return e.triggersZOrder;
    }, function () {
      i._private.cy.notify("zorder", e);
    });
  };
  aK.checkBoundsTrigger = function (e, t, n, r) {
    this.checkTrigger(e, t, n, r, function (e) {
      return e.triggersBounds;
    }, function (i) {
      e.dirtyCompoundBoundsCache();
      e.dirtyBoundingBoxCache();
      if (i.triggersBoundsOfParallelBeziers && t === "curve-style" && (n === "bezier" || r === "bezier")) {
        e.parallelEdges().forEach(function (e) {
          e.dirtyBoundingBoxCache();
        });
      }
      if (i.triggersBoundsOfConnectedEdges && t === "display" && (n === "none" || r === "none")) {
        e.connectedEdges().forEach(function (e) {
          e.dirtyBoundingBoxCache();
        });
      }
    });
  };
  aK.checkTriggers = function (e, t, n, r) {
    e.dirtyStyleCache();
    this.checkZOrderTrigger(e, t, n, r);
    this.checkBoundsTrigger(e, t, n, r);
  };
  var aZ = {};
  aZ.applyBypass = function (e, t, n, r) {
    var i = [];
    if (t === "*" || t === "**") {
      if (n !== undefined) {
        for (var a = 0; a < this.properties.length; a++) {
          var o = this.properties[a].name;
          var s = this.parse(o, n, true);
          if (s) {
            i.push(s);
          }
        }
      }
    } else if (_(t)) {
      var l = this.parse(t, n, true);
      if (l) {
        i.push(l);
      }
    } else {
      if (!A(t)) {
        return false;
      }
      r = n;
      var u = Object.keys(t);
      var h = 0;
      for (; h < u.length; h++) {
        var c = u[h];
        var d = t[c];
        if (d === undefined) {
          d = t[Y(c)];
        }
        if (d !== undefined) {
          var p = this.parse(c, d, true);
          if (p) {
            i.push(p);
          }
        }
      }
    }
    if (i.length === 0) {
      return false;
    }
    var g = false;
    var f = 0;
    for (; f < e.length; f++) {
      var v = e[f];
      var y = {};
      var b = undefined;
      var x = 0;
      for (; x < i.length; x++) {
        var w = i[x];
        if (r) {
          var E = v.pstyle(w.name);
          b = y[w.name] = {
            prev: E
          };
        }
        g = this.applyParsedProperty(v, e0(w)) || g;
        if (r) {
          b.next = v.pstyle(w.name);
        }
      }
      if (g) {
        this.updateStyleHints(v);
      }
      if (r) {
        this.updateTransitions(v, y, true);
      }
    }
    return g;
  };
  aZ.overrideBypass = function (e, t, n) {
    t = V(t);
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      var a = i._private.style[t];
      var o = this.properties[t].type;
      var s = o.color;
      var l = o.mutiple;
      var u = a ? a.pfValue ?? a.value : null;
      if (a && a.bypass) {
        a.value = n;
        if (a.pfValue != null) {
          a.pfValue = n;
        }
        if (s) {
          a.strValue = "rgb(" + n.join(",") + ")";
        } else if (l) {
          a.strValue = n.join(" ");
        } else {
          a.strValue = "" + n;
        }
        this.updateStyleHints(i);
      } else {
        this.applyBypass(i, t, n);
      }
      this.checkTriggers(i, t, u, n);
    }
  };
  aZ.removeAllBypasses = function (e, t) {
    return this.removeBypasses(e, this.propertyNames, t);
  };
  aZ.removeBypasses = function (e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      var a = {};
      var o = 0;
      for (; o < t.length; o++) {
        var s = t[o];
        var l = this.properties[s];
        var u = i.pstyle(l.name);
        if (u && u.bypass) {
          var h = this.parse(s, "", true);
          var c = a[l.name] = {
            prev: u
          };
          this.applyParsedProperty(i, h);
          c.next = i.pstyle(l.name);
        }
      }
      this.updateStyleHints(i);
      if (n) {
        this.updateTransitions(i, a, true);
      }
    }
  };
  var a$ = {};
  a$.getEmSizeInPixels = function () {
    var e = this.containerCss("font-size");
    if (e != null) {
      return parseFloat(e);
    } else {
      return 1;
    }
  };
  a$.containerCss = function (e) {
    var t = this._private.cy;
    var n = t.container();
    var r = t.window();
    if (r && n && r.getComputedStyle) {
      return r.getComputedStyle(n).getPropertyValue(e);
    }
  };
  var aQ = {};
  aQ.getRenderedStyle = function (e, t) {
    if (t) {
      return this.getStylePropertyValue(e, t, true);
    } else {
      return this.getRawStyle(e, true);
    }
  };
  aQ.getRawStyle = function (e, t) {
    if (e = e[0]) {
      var n = {};
      var r = 0;
      for (; r < this.properties.length; r++) {
        var i = this.properties[r];
        var a = this.getStylePropertyValue(e, i.name, t);
        if (a != null) {
          n[i.name] = a;
          n[Y(i.name)] = a;
        }
      }
      return n;
    }
  };
  aQ.getIndexedStyle = function (e, t, n, r) {
    var i = e.pstyle(t)[n][r];
    return i ?? e.cy().style().getDefaultProperty(t)[n][0];
  };
  aQ.getStylePropertyValue = function (e, t, n) {
    if (e = e[0]) {
      var r = this.properties[t];
      if (r.alias) {
        r = r.pointsTo;
      }
      var i = r.type;
      var a = e.pstyle(r.name);
      if (a) {
        var o = a.value;
        var s = a.units;
        var l = a.strValue;
        if (n && i.number && o != null && S(o)) {
          var u = e.cy().zoom();
          function h(e) {
            return e * u;
          }
          function c(e, t) {
            return h(e) + t;
          }
          var d = M(o);
          if (d ? s.every(function (e) {
            return e != null;
          }) : s != null) {
            if (d) {
              return o.map(function (e, t) {
                return c(e, s[t]);
              }).join(" ");
            } else {
              return c(o, s);
            }
          } else if (d) {
            return o.map(function (e) {
              if (_(e)) {
                return e;
              } else {
                return "" + h(e);
              }
            }).join(" ");
          } else {
            return "" + h(o);
          }
        }
        if (l != null) {
          return l;
        }
      }
      return null;
    }
  };
  aQ.getAnimationStartStyle = function (e, t) {
    var n = {};
    var r = 0;
    for (; r < t.length; r++) {
      var i = t[r].name;
      var a = e.pstyle(i);
      if (a !== undefined) {
        a = A(a) ? this.parse(i, a.strValue) : this.parse(i, a);
      }
      if (a) {
        n[i] = a;
      }
    }
    return n;
  };
  aQ.getPropsList = function (e) {
    var t = [];
    var n = this.properties;
    if (e) {
      var r = Object.keys(e);
      var i = 0;
      for (; i < r.length; i++) {
        var a = r[i];
        var o = e[a];
        var s = n[a] || n[V(a)];
        var l = this.parse(s.name, o);
        if (l) {
          t.push(l);
        }
      }
    }
    return t;
  };
  aQ.getNonDefaultPropertiesHash = function (e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var u = n.slice();
    for (s = 0; s < t.length; s++) {
      r = t[s];
      if ((i = e.pstyle(r, false)) != null) {
        if (i.pfValue != null) {
          u[0] = eR(o, u[0]);
          u[1] = eB(o, u[1]);
        } else {
          l = 0;
          a = i.strValue;
          for (; l < a.length; l++) {
            o = a.charCodeAt(l);
            u[0] = eR(o, u[0]);
            u[1] = eB(o, u[1]);
          }
        }
      }
    }
    return u;
  };
  aQ.getPropertiesHash = aQ.getNonDefaultPropertiesHash;
  var aJ = {};
  aJ.appendFromJson = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      var r = n.selector;
      var i = n.style || n.css;
      var a = Object.keys(i);
      this.selector(r);
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        var l = i[s];
        this.css(s, l);
      }
    }
    return this;
  };
  aJ.fromJson = function (e) {
    this.resetToDefault();
    this.appendFromJson(e);
    return this;
  };
  aJ.json = function () {
    var e = [];
    var t = this.defaultLength;
    for (; t < this.length; t++) {
      var n = this[t];
      var r = n.selector;
      var i = n.properties;
      var a = {};
      var o = 0;
      for (; o < i.length; o++) {
        var s = i[o];
        a[s.name] = s.strValue;
      }
      e.push({
        selector: r ? r.toString() : "core",
        style: a
      });
    }
    return e;
  };
  var a0 = {};
  a0.appendFromString = function (e) {
    var t;
    var n;
    var r;
    var i = "" + e;
    function a() {
      i = i.length > t.length ? i.substr(t.length) : "";
    }
    function o() {
      n = n.length > r.length ? n.substr(r.length) : "";
    }
    for (i = i.replace(/[/][*](\s|.)+?[*][/]/g, ""); !i.match(/^\s*$/);) {
      var s = i.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
      if (!s) {
        eJ("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + i);
        break;
      }
      t = s[0];
      var l = s[1];
      if (l !== "core" && new ix(l).invalid) {
        eJ("Skipping parsing of block: Invalid selector found in string stylesheet: " + l);
        a();
        continue;
      }
      var u = s[2];
      var h = false;
      n = u;
      var c = [];
      for (; !n.match(/^\s*$/);) {
        var d = n.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
        if (!d) {
          eJ("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + u);
          h = true;
          break;
        }
        r = d[0];
        var p = d[1];
        var g = d[2];
        if (!this.properties[p]) {
          eJ("Skipping property: Invalid property name in: " + r);
          o();
          continue;
        }
        if (!this.parse(p, g)) {
          eJ("Skipping property: Invalid property definition in: " + r);
          o();
          continue;
        }
        c.push({
          name: p,
          val: g
        });
        o();
      }
      if (h) {
        a();
        break;
      }
      this.selector(l);
      for (var f = 0; f < c.length; f++) {
        var v = c[f];
        this.css(v.name, v.val);
      }
      a();
    }
    return this;
  };
  a0.fromString = function (e) {
    this.resetToDefault();
    this.appendFromString(e);
    return this;
  };
  var a1 = {};
  (function () {
    function e(e) {
      return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
    }
    function t(e) {
      var t = H + "|\\w+|" + W + "|" + q + "|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
      return "^" + e + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + H + ")\\s*\\,\\s*(" + H + ")\\s*,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\)$";
    }
    var n = ["^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$", "^(none)$", "^(.+)$"];
    a1.types = {
      time: {
        number: true,
        min: 0,
        units: "s|ms",
        implicitUnits: "ms"
      },
      percent: {
        number: true,
        min: 0,
        max: 100,
        units: "%",
        implicitUnits: "%"
      },
      percentages: {
        number: true,
        min: 0,
        max: 100,
        units: "%",
        implicitUnits: "%",
        multiple: true
      },
      zeroOneNumber: {
        number: true,
        min: 0,
        max: 1,
        unitless: true
      },
      zeroOneNumbers: {
        number: true,
        min: 0,
        max: 1,
        unitless: true,
        multiple: true
      },
      nOneOneNumber: {
        number: true,
        min: -1,
        max: 1,
        unitless: true
      },
      nonNegativeInt: {
        number: true,
        min: 0,
        integer: true,
        unitless: true
      },
      nonNegativeNumber: {
        number: true,
        min: 0,
        unitless: true
      },
      position: {
        enums: ["parent", "origin"]
      },
      nodeSize: {
        number: true,
        min: 0,
        enums: ["label"]
      },
      number: {
        number: true,
        unitless: true
      },
      numbers: {
        number: true,
        unitless: true,
        multiple: true
      },
      positiveNumber: {
        number: true,
        unitless: true,
        min: 0,
        strictMin: true
      },
      size: {
        number: true,
        min: 0
      },
      bidirectionalSize: {
        number: true
      },
      bidirectionalSizeMaybePercent: {
        number: true,
        allowPercent: true
      },
      bidirectionalSizes: {
        number: true,
        multiple: true
      },
      sizeMaybePercent: {
        number: true,
        min: 0,
        allowPercent: true
      },
      axisDirection: {
        enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
      },
      paddingRelativeTo: {
        enums: ["width", "height", "average", "min", "max"]
      },
      bgWH: {
        number: true,
        min: 0,
        allowPercent: true,
        enums: ["auto"],
        multiple: true
      },
      bgPos: {
        number: true,
        allowPercent: true,
        multiple: true
      },
      bgRelativeTo: {
        enums: ["inner", "include-padding"],
        multiple: true
      },
      bgRepeat: {
        enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
        multiple: true
      },
      bgFit: {
        enums: ["none", "contain", "cover"],
        multiple: true
      },
      bgCrossOrigin: {
        enums: ["anonymous", "use-credentials", "null"],
        multiple: true
      },
      bgClip: {
        enums: ["none", "node"],
        multiple: true
      },
      bgContainment: {
        enums: ["inside", "over"],
        multiple: true
      },
      color: {
        color: true
      },
      colors: {
        color: true,
        multiple: true
      },
      fill: {
        enums: ["solid", "linear-gradient", "radial-gradient"]
      },
      bool: {
        enums: ["yes", "no"]
      },
      bools: {
        enums: ["yes", "no"],
        multiple: true
      },
      lineStyle: {
        enums: ["solid", "dotted", "dashed"]
      },
      lineCap: {
        enums: ["butt", "round", "square"]
      },
      linePosition: {
        enums: ["center", "inside", "outside"]
      },
      lineJoin: {
        enums: ["round", "bevel", "miter"]
      },
      borderStyle: {
        enums: ["solid", "dotted", "dashed", "double"]
      },
      curveStyle: {
        enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
      },
      radiusType: {
        enums: ["arc-radius", "influence-radius"],
        multiple: true
      },
      fontFamily: {
        regex: "^([\\w- \\\"]+(?:\\s*,\\s*[\\w- \\\"]+)*)$"
      },
      fontStyle: {
        enums: ["italic", "normal", "oblique"]
      },
      fontWeight: {
        enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      textDecoration: {
        enums: ["none", "underline", "overline", "line-through"]
      },
      textTransform: {
        enums: ["none", "uppercase", "lowercase"]
      },
      textWrap: {
        enums: ["none", "wrap", "ellipsis"]
      },
      textOverflowWrap: {
        enums: ["whitespace", "anywhere"]
      },
      textBackgroundShape: {
        enums: ["rectangle", "roundrectangle", "round-rectangle"]
      },
      nodeShape: {
        enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
      },
      overlayShape: {
        enums: ["roundrectangle", "round-rectangle", "ellipse"]
      },
      cornerRadius: {
        number: true,
        min: 0,
        units: "px|em",
        implicitUnits: "px",
        enums: ["auto"]
      },
      compoundIncludeLabels: {
        enums: ["include", "exclude"]
      },
      arrowShape: {
        enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
      },
      arrowFill: {
        enums: ["filled", "hollow"]
      },
      arrowWidth: {
        number: true,
        units: "%|px|em",
        implicitUnits: "px",
        enums: ["match-line"]
      },
      display: {
        enums: ["element", "none"]
      },
      visibility: {
        enums: ["hidden", "visible"]
      },
      zCompoundDepth: {
        enums: ["bottom", "orphan", "auto", "top"]
      },
      zIndexCompare: {
        enums: ["auto", "manual"]
      },
      valign: {
        enums: ["top", "center", "bottom"]
      },
      halign: {
        enums: ["left", "center", "right"]
      },
      justification: {
        enums: ["left", "center", "right", "auto"]
      },
      text: {
        string: true
      },
      data: {
        mapping: true,
        regex: e("data")
      },
      layoutData: {
        mapping: true,
        regex: e("layoutData")
      },
      scratch: {
        mapping: true,
        regex: e("scratch")
      },
      mapData: {
        mapping: true,
        regex: t("mapData")
      },
      mapLayoutData: {
        mapping: true,
        regex: t("mapLayoutData")
      },
      mapScratch: {
        mapping: true,
        regex: t("mapScratch")
      },
      fn: {
        mapping: true,
        fn: true
      },
      url: {
        regexes: n,
        singleRegexMatchValue: true
      },
      urls: {
        regexes: n,
        singleRegexMatchValue: true,
        multiple: true
      },
      propList: {
        propList: true
      },
      angle: {
        number: true,
        units: "deg|rad",
        implicitUnits: "rad"
      },
      textRotation: {
        number: true,
        units: "deg|rad",
        implicitUnits: "rad",
        enums: ["none", "autorotate"]
      },
      polygonPointList: {
        number: true,
        multiple: true,
        evenMultiple: true,
        min: -1,
        max: 1,
        unitless: true
      },
      edgeDistances: {
        enums: ["intersection", "node-position", "endpoints"]
      },
      edgeEndpoint: {
        number: true,
        multiple: true,
        units: "%|px|em|deg|rad",
        implicitUnits: "px",
        enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
        singleEnum: true,
        validate: function (e, t) {
          switch (e.length) {
            case 2:
              return t[0] !== "deg" && t[0] !== "rad" && t[1] !== "deg" && t[1] !== "rad";
            case 1:
              return _(e[0]) || t[0] === "deg" || t[0] === "rad";
            default:
              return false;
          }
        }
      },
      easing: {
        regexes: ["^(spring)\\s*\\(\\s*(" + H + ")\\s*,\\s*(" + H + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + H + ")\\s*,\\s*(" + H + ")\\s*,\\s*(" + H + ")\\s*,\\s*(" + H + ")\\s*\\)$"],
        enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
      },
      gradientDirection: {
        enums: ["to-bottom", "to-top", "to-left", "to-right", "to-bottom-right", "to-bottom-left", "to-top-right", "to-top-left", "to-right-bottom", "to-left-bottom", "to-right-top", "to-left-top"]
      },
      boundsExpansion: {
        number: true,
        multiple: true,
        min: 0,
        validate: function (e) {
          var t = e.length;
          return t === 1 || t === 2 || t === 4;
        }
      }
    };
    function r(e, t) {
      return (e == null || t == null) && e !== t || e == 0 && t != 0 || e != 0 && t == 0;
    }
    function i(e, t) {
      return e != t;
    }
    var a = a1.types;
    var o = [{
      name: "label",
      type: a.text,
      triggersBounds: i,
      triggersZOrder: function (e, t) {
        var n = B(e);
        var r = B(t);
        return n && !r || !n && r;
      }
    }, {
      name: "text-rotation",
      type: a.textRotation,
      triggersBounds: i
    }, {
      name: "text-margin-x",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "text-margin-y",
      type: a.bidirectionalSize,
      triggersBounds: i
    }];
    var s = [{
      name: "source-label",
      type: a.text,
      triggersBounds: i
    }, {
      name: "source-text-rotation",
      type: a.textRotation,
      triggersBounds: i
    }, {
      name: "source-text-margin-x",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "source-text-margin-y",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "source-text-offset",
      type: a.size,
      triggersBounds: i
    }];
    var l = [{
      name: "target-label",
      type: a.text,
      triggersBounds: i
    }, {
      name: "target-text-rotation",
      type: a.textRotation,
      triggersBounds: i
    }, {
      name: "target-text-margin-x",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "target-text-margin-y",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "target-text-offset",
      type: a.size,
      triggersBounds: i
    }];
    var u = [{
      name: "font-family",
      type: a.fontFamily,
      triggersBounds: i
    }, {
      name: "font-style",
      type: a.fontStyle,
      triggersBounds: i
    }, {
      name: "font-weight",
      type: a.fontWeight,
      triggersBounds: i
    }, {
      name: "font-size",
      type: a.size,
      triggersBounds: i
    }, {
      name: "text-transform",
      type: a.textTransform,
      triggersBounds: i
    }, {
      name: "text-wrap",
      type: a.textWrap,
      triggersBounds: i
    }, {
      name: "text-overflow-wrap",
      type: a.textOverflowWrap,
      triggersBounds: i
    }, {
      name: "text-max-width",
      type: a.size,
      triggersBounds: i
    }, {
      name: "text-outline-width",
      type: a.size,
      triggersBounds: i
    }, {
      name: "line-height",
      type: a.positiveNumber,
      triggersBounds: i
    }];
    var h = [{
      name: "text-valign",
      type: a.valign,
      triggersBounds: i
    }, {
      name: "text-halign",
      type: a.halign,
      triggersBounds: i
    }, {
      name: "color",
      type: a.color
    }, {
      name: "text-outline-color",
      type: a.color
    }, {
      name: "text-outline-opacity",
      type: a.zeroOneNumber
    }, {
      name: "text-background-color",
      type: a.color
    }, {
      name: "text-background-opacity",
      type: a.zeroOneNumber
    }, {
      name: "text-background-padding",
      type: a.size,
      triggersBounds: i
    }, {
      name: "text-border-opacity",
      type: a.zeroOneNumber
    }, {
      name: "text-border-color",
      type: a.color
    }, {
      name: "text-border-width",
      type: a.size,
      triggersBounds: i
    }, {
      name: "text-border-style",
      type: a.borderStyle,
      triggersBounds: i
    }, {
      name: "text-background-shape",
      type: a.textBackgroundShape,
      triggersBounds: i
    }, {
      name: "text-justification",
      type: a.justification
    }];
    var c = [{
      name: "events",
      type: a.bool,
      triggersZOrder: i
    }, {
      name: "text-events",
      type: a.bool,
      triggersZOrder: i
    }];
    var d = [{
      name: "display",
      type: a.display,
      triggersZOrder: i,
      triggersBounds: i,
      triggersBoundsOfConnectedEdges: true
    }, {
      name: "visibility",
      type: a.visibility,
      triggersZOrder: i
    }, {
      name: "opacity",
      type: a.zeroOneNumber,
      triggersZOrder: r
    }, {
      name: "text-opacity",
      type: a.zeroOneNumber
    }, {
      name: "min-zoomed-font-size",
      type: a.size
    }, {
      name: "z-compound-depth",
      type: a.zCompoundDepth,
      triggersZOrder: i
    }, {
      name: "z-index-compare",
      type: a.zIndexCompare,
      triggersZOrder: i
    }, {
      name: "z-index",
      type: a.number,
      triggersZOrder: i
    }];
    var p = [{
      name: "overlay-padding",
      type: a.size,
      triggersBounds: i
    }, {
      name: "overlay-color",
      type: a.color
    }, {
      name: "overlay-opacity",
      type: a.zeroOneNumber,
      triggersBounds: r
    }, {
      name: "overlay-shape",
      type: a.overlayShape,
      triggersBounds: i
    }, {
      name: "overlay-corner-radius",
      type: a.cornerRadius
    }];
    var g = [{
      name: "underlay-padding",
      type: a.size,
      triggersBounds: i
    }, {
      name: "underlay-color",
      type: a.color
    }, {
      name: "underlay-opacity",
      type: a.zeroOneNumber,
      triggersBounds: r
    }, {
      name: "underlay-shape",
      type: a.overlayShape,
      triggersBounds: i
    }, {
      name: "underlay-corner-radius",
      type: a.cornerRadius
    }];
    var f = [{
      name: "transition-property",
      type: a.propList
    }, {
      name: "transition-duration",
      type: a.time
    }, {
      name: "transition-delay",
      type: a.time
    }, {
      name: "transition-timing-function",
      type: a.easing
    }];
    function v(e, t) {
      if (t.value === "label") {
        return -e.poolIndex();
      } else {
        return t.pfValue;
      }
    }
    var y = [{
      name: "height",
      type: a.nodeSize,
      triggersBounds: i,
      hashOverride: v
    }, {
      name: "width",
      type: a.nodeSize,
      triggersBounds: i,
      hashOverride: v
    }, {
      name: "shape",
      type: a.nodeShape,
      triggersBounds: i
    }, {
      name: "shape-polygon-points",
      type: a.polygonPointList,
      triggersBounds: i
    }, {
      name: "corner-radius",
      type: a.cornerRadius
    }, {
      name: "background-color",
      type: a.color
    }, {
      name: "background-fill",
      type: a.fill
    }, {
      name: "background-opacity",
      type: a.zeroOneNumber
    }, {
      name: "background-blacken",
      type: a.nOneOneNumber
    }, {
      name: "background-gradient-stop-colors",
      type: a.colors
    }, {
      name: "background-gradient-stop-positions",
      type: a.percentages
    }, {
      name: "background-gradient-direction",
      type: a.gradientDirection
    }, {
      name: "padding",
      type: a.sizeMaybePercent,
      triggersBounds: i
    }, {
      name: "padding-relative-to",
      type: a.paddingRelativeTo,
      triggersBounds: i
    }, {
      name: "bounds-expansion",
      type: a.boundsExpansion,
      triggersBounds: i
    }];
    var b = [{
      name: "border-color",
      type: a.color
    }, {
      name: "border-opacity",
      type: a.zeroOneNumber
    }, {
      name: "border-width",
      type: a.size,
      triggersBounds: i
    }, {
      name: "border-style",
      type: a.borderStyle
    }, {
      name: "border-cap",
      type: a.lineCap
    }, {
      name: "border-join",
      type: a.lineJoin
    }, {
      name: "border-dash-pattern",
      type: a.numbers
    }, {
      name: "border-dash-offset",
      type: a.number
    }, {
      name: "border-position",
      type: a.linePosition
    }];
    var x = [{
      name: "outline-color",
      type: a.color
    }, {
      name: "outline-opacity",
      type: a.zeroOneNumber
    }, {
      name: "outline-width",
      type: a.size,
      triggersBounds: i
    }, {
      name: "outline-style",
      type: a.borderStyle
    }, {
      name: "outline-offset",
      type: a.size,
      triggersBounds: i
    }];
    var w = [{
      name: "background-image",
      type: a.urls
    }, {
      name: "background-image-crossorigin",
      type: a.bgCrossOrigin
    }, {
      name: "background-image-opacity",
      type: a.zeroOneNumbers
    }, {
      name: "background-image-containment",
      type: a.bgContainment
    }, {
      name: "background-image-smoothing",
      type: a.bools
    }, {
      name: "background-position-x",
      type: a.bgPos
    }, {
      name: "background-position-y",
      type: a.bgPos
    }, {
      name: "background-width-relative-to",
      type: a.bgRelativeTo
    }, {
      name: "background-height-relative-to",
      type: a.bgRelativeTo
    }, {
      name: "background-repeat",
      type: a.bgRepeat
    }, {
      name: "background-fit",
      type: a.bgFit
    }, {
      name: "background-clip",
      type: a.bgClip
    }, {
      name: "background-width",
      type: a.bgWH
    }, {
      name: "background-height",
      type: a.bgWH
    }, {
      name: "background-offset-x",
      type: a.bgPos
    }, {
      name: "background-offset-y",
      type: a.bgPos
    }];
    var E = [{
      name: "position",
      type: a.position,
      triggersBounds: i
    }, {
      name: "compound-sizing-wrt-labels",
      type: a.compoundIncludeLabels,
      triggersBounds: i
    }, {
      name: "min-width",
      type: a.size,
      triggersBounds: i
    }, {
      name: "min-width-bias-left",
      type: a.sizeMaybePercent,
      triggersBounds: i
    }, {
      name: "min-width-bias-right",
      type: a.sizeMaybePercent,
      triggersBounds: i
    }, {
      name: "min-height",
      type: a.size,
      triggersBounds: i
    }, {
      name: "min-height-bias-top",
      type: a.sizeMaybePercent,
      triggersBounds: i
    }, {
      name: "min-height-bias-bottom",
      type: a.sizeMaybePercent,
      triggersBounds: i
    }];
    var T = [{
      name: "line-style",
      type: a.lineStyle
    }, {
      name: "line-color",
      type: a.color
    }, {
      name: "line-fill",
      type: a.fill
    }, {
      name: "line-cap",
      type: a.lineCap
    }, {
      name: "line-opacity",
      type: a.zeroOneNumber
    }, {
      name: "line-dash-pattern",
      type: a.numbers
    }, {
      name: "line-dash-offset",
      type: a.number
    }, {
      name: "line-outline-width",
      type: a.size
    }, {
      name: "line-outline-color",
      type: a.color
    }, {
      name: "line-gradient-stop-colors",
      type: a.colors
    }, {
      name: "line-gradient-stop-positions",
      type: a.percentages
    }, {
      name: "curve-style",
      type: a.curveStyle,
      triggersBounds: i,
      triggersBoundsOfParallelBeziers: true
    }, {
      name: "haystack-radius",
      type: a.zeroOneNumber,
      triggersBounds: i
    }, {
      name: "source-endpoint",
      type: a.edgeEndpoint,
      triggersBounds: i
    }, {
      name: "target-endpoint",
      type: a.edgeEndpoint,
      triggersBounds: i
    }, {
      name: "control-point-step-size",
      type: a.size,
      triggersBounds: i
    }, {
      name: "control-point-distances",
      type: a.bidirectionalSizes,
      triggersBounds: i
    }, {
      name: "control-point-weights",
      type: a.numbers,
      triggersBounds: i
    }, {
      name: "segment-distances",
      type: a.bidirectionalSizes,
      triggersBounds: i
    }, {
      name: "segment-weights",
      type: a.numbers,
      triggersBounds: i
    }, {
      name: "segment-radii",
      type: a.numbers,
      triggersBounds: i
    }, {
      name: "radius-type",
      type: a.radiusType,
      triggersBounds: i
    }, {
      name: "taxi-turn",
      type: a.bidirectionalSizeMaybePercent,
      triggersBounds: i
    }, {
      name: "taxi-turn-min-distance",
      type: a.size,
      triggersBounds: i
    }, {
      name: "taxi-direction",
      type: a.axisDirection,
      triggersBounds: i
    }, {
      name: "taxi-radius",
      type: a.number,
      triggersBounds: i
    }, {
      name: "edge-distances",
      type: a.edgeDistances,
      triggersBounds: i
    }, {
      name: "arrow-scale",
      type: a.positiveNumber,
      triggersBounds: i
    }, {
      name: "loop-direction",
      type: a.angle,
      triggersBounds: i
    }, {
      name: "loop-sweep",
      type: a.angle,
      triggersBounds: i
    }, {
      name: "source-distance-from-node",
      type: a.size,
      triggersBounds: i
    }, {
      name: "target-distance-from-node",
      type: a.size,
      triggersBounds: i
    }];
    var C = [{
      name: "ghost",
      type: a.bool,
      triggersBounds: i
    }, {
      name: "ghost-offset-x",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "ghost-offset-y",
      type: a.bidirectionalSize,
      triggersBounds: i
    }, {
      name: "ghost-opacity",
      type: a.zeroOneNumber
    }];
    var N = [{
      name: "selection-box-color",
      type: a.color
    }, {
      name: "selection-box-opacity",
      type: a.zeroOneNumber
    }, {
      name: "selection-box-border-color",
      type: a.color
    }, {
      name: "selection-box-border-width",
      type: a.size
    }, {
      name: "active-bg-color",
      type: a.color
    }, {
      name: "active-bg-opacity",
      type: a.zeroOneNumber
    }, {
      name: "active-bg-size",
      type: a.size
    }, {
      name: "outside-texture-bg-color",
      type: a.color
    }, {
      name: "outside-texture-bg-opacity",
      type: a.zeroOneNumber
    }];
    var D = [];
    a1.pieBackgroundN = 16;
    D.push({
      name: "pie-size",
      type: a.sizeMaybePercent
    });
    for (var M = 1; M <= a1.pieBackgroundN; M++) {
      D.push({
        name: "pie-" + M + "-background-color",
        type: a.color
      });
      D.push({
        name: "pie-" + M + "-background-size",
        type: a.percent
      });
      D.push({
        name: "pie-" + M + "-background-opacity",
        type: a.zeroOneNumber
      });
    }
    var A = [];
    var S = a1.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
    [{
      name: "arrow-shape",
      type: a.arrowShape,
      triggersBounds: i
    }, {
      name: "arrow-color",
      type: a.color
    }, {
      name: "arrow-fill",
      type: a.arrowFill
    }, {
      name: "arrow-width",
      type: a.arrowWidth
    }].forEach(function (e) {
      S.forEach(function (t) {
        var n = t + "-" + e.name;
        var r = e.type;
        var i = e.triggersBounds;
        A.push({
          name: n,
          type: r,
          triggersBounds: i
        });
      });
    }, {});
    var P = a1.properties = [].concat(c, f, d, p, g, C, h, u, o, s, l, y, b, x, w, D, E, T, A, N);
    var O = a1.propertyGroups = {
      behavior: c,
      transition: f,
      visibility: d,
      overlay: p,
      underlay: g,
      ghost: C,
      commonLabel: h,
      labelDimensions: u,
      mainLabel: o,
      sourceLabel: s,
      targetLabel: l,
      nodeBody: y,
      nodeBorder: b,
      nodeOutline: x,
      backgroundImage: w,
      pie: D,
      compound: E,
      edgeLine: T,
      edgeArrow: A,
      core: N
    };
    var I = a1.propertyGroupNames = {};
    (a1.propertyGroupKeys = Object.keys(O)).forEach(function (e) {
      I[e] = O[e].map(function (e) {
        return e.name;
      });
      O[e].forEach(function (t) {
        return t.groupKey = e;
      });
    });
    var L = a1.aliases = [{
      name: "content",
      pointsTo: "label"
    }, {
      name: "control-point-distance",
      pointsTo: "control-point-distances"
    }, {
      name: "control-point-weight",
      pointsTo: "control-point-weights"
    }, {
      name: "segment-distance",
      pointsTo: "segment-distances"
    }, {
      name: "segment-weight",
      pointsTo: "segment-weights"
    }, {
      name: "segment-radius",
      pointsTo: "segment-radii"
    }, {
      name: "edge-text-rotation",
      pointsTo: "text-rotation"
    }, {
      name: "padding-left",
      pointsTo: "padding"
    }, {
      name: "padding-right",
      pointsTo: "padding"
    }, {
      name: "padding-top",
      pointsTo: "padding"
    }, {
      name: "padding-bottom",
      pointsTo: "padding"
    }];
    a1.propertyNames = P.map(function (e) {
      return e.name;
    });
    for (var k = 0; k < P.length; k++) {
      var R = P[k];
      P[R.name] = R;
    }
    for (var F = 0; F < L.length; F++) {
      var z = L[F];
      var V = P[z.pointsTo];
      var Y = {
        name: z.name,
        alias: true,
        pointsTo: V
      };
      P.push(Y);
      P[z.name] = Y;
    }
  })();
  a1.getDefaultProperty = function (e) {
    return this.getDefaultProperties()[e];
  };
  a1.getDefaultProperties = function () {
    var e = this._private;
    if (e.defaultProperties != null) {
      return e.defaultProperties;
    }
    var t = Z({
      "selection-box-color": "#ddd",
      "selection-box-opacity": 0.65,
      "selection-box-border-color": "#aaa",
      "selection-box-border-width": 1,
      "active-bg-color": "black",
      "active-bg-opacity": 0.15,
      "active-bg-size": 30,
      "outside-texture-bg-color": "#000",
      "outside-texture-bg-opacity": 0.125,
      events: "yes",
      "text-events": "no",
      "text-valign": "top",
      "text-halign": "center",
      "text-justification": "auto",
      "line-height": 1,
      color: "#000",
      "text-outline-color": "#000",
      "text-outline-width": 0,
      "text-outline-opacity": 1,
      "text-opacity": 1,
      "text-decoration": "none",
      "text-transform": "none",
      "text-wrap": "none",
      "text-overflow-wrap": "whitespace",
      "text-max-width": 9999,
      "text-background-color": "#000",
      "text-background-opacity": 0,
      "text-background-shape": "rectangle",
      "text-background-padding": 0,
      "text-border-opacity": 0,
      "text-border-width": 0,
      "text-border-style": "solid",
      "text-border-color": "#000",
      "font-family": "Helvetica Neue, Helvetica, sans-serif",
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": 16,
      "min-zoomed-font-size": 0,
      "text-rotation": "none",
      "source-text-rotation": "none",
      "target-text-rotation": "none",
      visibility: "visible",
      display: "element",
      opacity: 1,
      "z-compound-depth": "auto",
      "z-index-compare": "auto",
      "z-index": 0,
      label: "",
      "text-margin-x": 0,
      "text-margin-y": 0,
      "source-label": "",
      "source-text-offset": 0,
      "source-text-margin-x": 0,
      "source-text-margin-y": 0,
      "target-label": "",
      "target-text-offset": 0,
      "target-text-margin-x": 0,
      "target-text-margin-y": 0,
      "overlay-opacity": 0,
      "overlay-color": "#000",
      "overlay-padding": 10,
      "overlay-shape": "round-rectangle",
      "overlay-corner-radius": "auto",
      "underlay-opacity": 0,
      "underlay-color": "#000",
      "underlay-padding": 10,
      "underlay-shape": "round-rectangle",
      "underlay-corner-radius": "auto",
      "transition-property": "none",
      "transition-duration": 0,
      "transition-delay": 0,
      "transition-timing-function": "linear",
      "background-blacken": 0,
      "background-color": "#999",
      "background-fill": "solid",
      "background-opacity": 1,
      "background-image": "none",
      "background-image-crossorigin": "anonymous",
      "background-image-opacity": 1,
      "background-image-containment": "inside",
      "background-image-smoothing": "yes",
      "background-position-x": "50%",
      "background-position-y": "50%",
      "background-offset-x": 0,
      "background-offset-y": 0,
      "background-width-relative-to": "include-padding",
      "background-height-relative-to": "include-padding",
      "background-repeat": "no-repeat",
      "background-fit": "none",
      "background-clip": "node",
      "background-width": "auto",
      "background-height": "auto",
      "border-color": "#000",
      "border-opacity": 1,
      "border-width": 0,
      "border-style": "solid",
      "border-dash-pattern": [4, 2],
      "border-dash-offset": 0,
      "border-cap": "butt",
      "border-join": "miter",
      "border-position": "center",
      "outline-color": "#999",
      "outline-opacity": 1,
      "outline-width": 0,
      "outline-offset": 0,
      "outline-style": "solid",
      height: 30,
      width: 30,
      shape: "ellipse",
      "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
      "corner-radius": "auto",
      "bounds-expansion": 0,
      "background-gradient-direction": "to-bottom",
      "background-gradient-stop-colors": "#999",
      "background-gradient-stop-positions": "0%",
      ghost: "no",
      "ghost-offset-y": 0,
      "ghost-offset-x": 0,
      "ghost-opacity": 0,
      padding: 0,
      "padding-relative-to": "width",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      "min-width": 0,
      "min-width-bias-left": 0,
      "min-width-bias-right": 0,
      "min-height": 0,
      "min-height-bias-top": 0,
      "min-height-bias-bottom": 0
    }, {
      "pie-size": "100%"
    }, [{
      name: "pie-{{i}}-background-color",
      value: "black"
    }, {
      name: "pie-{{i}}-background-size",
      value: "0%"
    }, {
      name: "pie-{{i}}-background-opacity",
      value: 1
    }].reduce(function (e, t) {
      for (var n = 1; n <= a1.pieBackgroundN; n++) {
        var r = t.name.replace("{{i}}", n);
        var i = t.value;
        e[r] = i;
      }
      return e;
    }, {}), {
      "line-style": "solid",
      "line-color": "#999",
      "line-fill": "solid",
      "line-cap": "butt",
      "line-opacity": 1,
      "line-outline-width": 0,
      "line-outline-color": "#000",
      "line-gradient-stop-colors": "#999",
      "line-gradient-stop-positions": "0%",
      "control-point-step-size": 40,
      "control-point-weights": 0.5,
      "segment-weights": 0.5,
      "segment-distances": 20,
      "segment-radii": 15,
      "radius-type": "arc-radius",
      "taxi-turn": "50%",
      "taxi-radius": 15,
      "taxi-turn-min-distance": 10,
      "taxi-direction": "auto",
      "edge-distances": "intersection",
      "curve-style": "haystack",
      "haystack-radius": 0,
      "arrow-scale": 1,
      "loop-direction": "-45deg",
      "loop-sweep": "-90deg",
      "source-distance-from-node": 0,
      "target-distance-from-node": 0,
      "source-endpoint": "outside-to-node",
      "target-endpoint": "outside-to-node",
      "line-dash-pattern": [6, 3],
      "line-dash-offset": 0
    }, [{
      name: "arrow-shape",
      value: "none"
    }, {
      name: "arrow-color",
      value: "#999"
    }, {
      name: "arrow-fill",
      value: "filled"
    }, {
      name: "arrow-width",
      value: 1
    }].reduce(function (e, t) {
      a1.arrowPrefixes.forEach(function (n) {
        var r = n + "-" + t.name;
        var i = t.value;
        e[r] = i;
      });
      return e;
    }, {}));
    var n = {};
    var r = 0;
    for (; r < this.properties.length; r++) {
      var i = this.properties[r];
      if (!i.pointsTo) {
        var a = i.name;
        var o = t[a];
        var s = this.parse(a, o);
        n[a] = s;
      }
    }
    e.defaultProperties = n;
    return e.defaultProperties;
  };
  a1.addDefaultStylesheet = function () {
    this.selector(":parent").css({
      shape: "rectangle",
      padding: 10,
      "background-color": "#eee",
      "border-color": "#ccc",
      "border-width": 1
    }).selector("edge").css({
      width: 3
    }).selector(":loop").css({
      "curve-style": "bezier"
    }).selector("edge:compound").css({
      "curve-style": "bezier",
      "source-endpoint": "outside-to-line",
      "target-endpoint": "outside-to-line"
    }).selector(":selected").css({
      "background-color": "#0169D9",
      "line-color": "#0169D9",
      "source-arrow-color": "#0169D9",
      "target-arrow-color": "#0169D9",
      "mid-source-arrow-color": "#0169D9",
      "mid-target-arrow-color": "#0169D9"
    }).selector(":parent:selected").css({
      "background-color": "#CCE1F9",
      "border-color": "#aec8e5"
    }).selector(":active").css({
      "overlay-color": "black",
      "overlay-padding": 10,
      "overlay-opacity": 0.25
    });
    this.defaultLength = this.length;
  };
  var a2 = {};
  a2.parse = function (e, t, n, r) {
    if (D(t)) {
      return this.parseImplWarn(e, t, n, r);
    }
    var i;
    var a = eG(e, "" + t, n ? "t" : "f", r === "mapping" || r === true || r === false || r == null ? "dontcare" : r);
    var o = this.propCache = this.propCache || [];
    if (!(i = o[a])) {
      i = o[a] = this.parseImplWarn(e, t, n, r);
    }
    if ((n || r === "mapping") && (i = e0(i))) {
      i.value = e0(i.value);
    }
    return i;
  };
  a2.parseImplWarn = function (e, t, n, r) {
    var i = this.parseImpl(e, t, n, r);
    if (!i && t != null) {
      eJ(`The style property \`${e}: ${t}\` is invalid`);
    }
    if (i && (i.name === "width" || i.name === "height") && t === "label") {
      eJ("The style value of `label` is deprecated for `" + i.name + "`");
    }
    return i;
  };
  a2.parseImpl = function (e, t, n, r) {
    e = V(e);
    var i = this.properties[e];
    var a = t;
    var o = this.types;
    if (!i || t === undefined) {
      return null;
    }
    if (i.alias) {
      e = (i = i.pointsTo).name;
    }
    var s = _(t);
    if (s) {
      t = t.trim();
    }
    var l = i.type;
    if (!l) {
      return null;
    }
    if (n && (t === "" || t === null)) {
      return {
        name: e,
        value: t,
        bypass: true,
        deleteBypass: true
      };
    }
    if (D(t)) {
      return {
        name: e,
        value: t,
        strValue: "fn",
        mapped: o.fn,
        bypass: n
      };
    }
    if (!s || r || t.length < 7 || t[1] !== "a") ;else if (t.length >= 7 && t[0] === "d" && (f = new RegExp(o.data.regex).exec(t))) {
      if (n) {
        return false;
      }
      var u = o.data;
      return {
        name: e,
        value: f,
        strValue: "" + t,
        mapped: u,
        field: f[1],
        bypass: n
      };
    } else if (t.length >= 10 && t[0] === "m" && (v = new RegExp(o.mapData.regex).exec(t))) {
      if (n || l.multiple) {
        return false;
      }
      var h = o.mapData;
      if (!l.color && !l.number) {
        return false;
      }
      var c = this.parse(e, v[4]);
      if (!c || c.mapped) {
        return false;
      }
      var d = this.parse(e, v[5]);
      if (!d || d.mapped) {
        return false;
      }
      if (c.pfValue === d.pfValue || c.strValue === d.strValue) {
        eJ("`" + e + ": " + t + "` is not a valid mapper because the output range is zero; converting to `" + e + ": " + c.strValue + "`");
        return this.parse(e, c.strValue);
      }
      if (l.color) {
        var p = c.value;
        var g = d.value;
        if (p[0] === g[0] && p[1] === g[1] && p[2] === g[2] && (p[3] === g[3] || (p[3] == null || p[3] === 1) && (g[3] == null || g[3] === 1))) {
          return false;
        }
      }
      return {
        name: e,
        value: v,
        strValue: "" + t,
        mapped: h,
        field: v[1],
        fieldMin: parseFloat(v[2]),
        fieldMax: parseFloat(v[3]),
        valueMin: c.value,
        valueMax: d.value,
        bypass: n
      };
    }
    if (l.multiple && r !== "multiple") {
      y = s ? t.split(/\s+/) : M(t) ? t : [t];
      if (l.evenMultiple && y.length % 2 != 0) {
        return null;
      }
      var f;
      var v;
      var y;
      var b = [];
      var x = [];
      var w = [];
      var E = "";
      var T = false;
      var C = 0;
      for (; C < y.length; C++) {
        var N = this.parse(e, y[C], n, "multiple");
        T = T || _(N.value);
        b.push(N.value);
        w.push(N.pfValue ?? N.value);
        x.push(N.units);
        E += (C > 0 ? " " : "") + N.strValue;
      }
      if (l.validate && !l.validate(b, x)) {
        return null;
      } else if (l.singleEnum && T) {
        if (b.length === 1 && _(b[0])) {
          return {
            name: e,
            value: b[0],
            strValue: b[0],
            bypass: n
          };
        } else {
          return null;
        }
      } else {
        return {
          name: e,
          value: b,
          pfValue: w,
          strValue: E,
          bypass: n,
          units: x
        };
      }
    }
    function A() {
      for (var r = 0; r < l.enums.length; r++) {
        if (l.enums[r] === t) {
          return {
            name: e,
            value: t,
            strValue: "" + t,
            bypass: n
          };
        }
      }
      return null;
    }
    if (l.number) {
      var P;
      var O;
      var I = "px";
      if (l.units) {
        O = l.units;
      }
      if (l.implicitUnits) {
        I = l.implicitUnits;
      }
      if (!l.unitless) {
        if (s) {
          var L = "px|em" + (l.allowPercent ? "|\\%" : "");
          if (O) {
            L = O;
          }
          var k = t.match("^(" + H + ")(" + L + ")?$");
          if (k) {
            t = k[1];
            O = k[2] || I;
          }
        } else if (!O || l.implicitUnits) {
          O = I;
        }
      }
      if (isNaN(t = parseFloat(t)) && l.enums === undefined) {
        return null;
      }
      if (isNaN(t) && l.enums !== undefined) {
        t = a;
        return A();
      }
      if (l.integer && (!S(P = t) || Math.floor(P) !== P) || l.min !== undefined && (t < l.min || l.strictMin && t === l.min) || l.max !== undefined && (t > l.max || l.strictMax && t === l.max)) {
        return null;
      }
      var R = {
        name: e,
        value: t,
        strValue: "" + t + (O || ""),
        units: O,
        bypass: n
      };
      if (l.unitless || O !== "px" && O !== "em") {
        R.pfValue = t;
      } else {
        R.pfValue = O !== "px" && O ? this.getEmSizeInPixels() * t : t;
      }
      if (O === "ms" || O === "s") {
        R.pfValue = O === "ms" ? t : t * 1000;
      }
      if (O === "deg" || O === "rad") {
        R.pfValue = O === "rad" ? t : Math.PI * t / 180;
      }
      if (O === "%") {
        R.pfValue = t / 100;
      }
      return R;
    }
    if (l.propList) {
      var B = [];
      var F = "" + t;
      if (F === "none") ;else {
        var z = F.split(/\s*,\s*|\s+/);
        var Y = 0;
        for (; Y < z.length; Y++) {
          var G = z[Y].trim();
          if (this.properties[G]) {
            B.push(G);
          } else {
            eJ("`" + G + "` is not a valid property name");
          }
        }
        if (B.length === 0) {
          return null;
        }
      }
      return {
        name: e,
        value: B,
        strValue: B.length === 0 ? "none" : B.join(" "),
        bypass: n
      };
    }
    if (l.color) {
      var X;
      var U = (M(X = t) ? X : null) || ee[X.toLowerCase()] || $(X) || J(X) || Q(X);
      if (U) {
        return {
          name: e,
          value: U,
          pfValue: U,
          strValue: "rgb(" + U[0] + "," + U[1] + "," + U[2] + ")",
          bypass: n
        };
      } else {
        return null;
      }
    }
    if (l.regex || l.regexes) {
      if (l.enums) {
        var W = A();
        if (W) {
          return W;
        }
      }
      var j = l.regexes ? l.regexes : [l.regex];
      var q = 0;
      for (; q < j.length; q++) {
        var K = new RegExp(j[q]).exec(t);
        if (K) {
          return {
            name: e,
            value: l.singleRegexMatchValue ? K[1] : K,
            strValue: "" + t,
            bypass: n
          };
        }
      }
      return null;
    }
    if (l.string) {
      return {
        name: e,
        value: "" + t,
        strValue: "" + t,
        bypass: n
      };
    } else if (l.enums) {
      return A();
    } else {
      return null;
    }
  };
  var a5 = function e(t) {
    if (!(this instanceof e)) {
      return new e(t);
    }
    if (!k(t)) {
      e$("A style must have a core reference");
      return;
    }
    this._private = {
      cy: t,
      coreStyle: {}
    };
    this.length = 0;
    this.resetToDefault();
  };
  var a3 = a5.prototype;
  a3.instanceString = function () {
    return "style";
  };
  a3.clear = function () {
    var e = this._private;
    var t = e.cy.elements();
    var n = 0;
    for (; n < this.length; n++) {
      this[n] = undefined;
    }
    this.length = 0;
    e.contextStyles = {};
    e.propDiffs = {};
    this.cleanElements(t, true);
    t.forEach(function (e) {
      var t = e[0]._private;
      t.styleDirty = true;
      t.appliedInitStyle = false;
    });
    return this;
  };
  a3.resetToDefault = function () {
    this.clear();
    this.addDefaultStylesheet();
    return this;
  };
  a3.core = function (e) {
    return this._private.coreStyle[e] || this.getDefaultProperty(e);
  };
  a3.selector = function (e) {
    var t = e === "core" ? null : new ix(e);
    var n = this.length++;
    this[n] = {
      selector: t,
      properties: [],
      mappedProperties: [],
      index: n
    };
    return this;
  };
  a3.css = function () {
    var e = arguments;
    if (e.length === 1) {
      var t = e[0];
      var n = 0;
      for (; n < this.properties.length; n++) {
        var r = this.properties[n];
        var i = t[r.name];
        if (i === undefined) {
          i = t[Y(r.name)];
        }
        if (i !== undefined) {
          this.cssRule(r.name, i);
        }
      }
    } else if (e.length === 2) {
      this.cssRule(e[0], e[1]);
    }
    return this;
  };
  a3.style = a3.css;
  a3.cssRule = function (e, t) {
    var n = this.parse(e, t);
    if (n) {
      var r = this.length - 1;
      this[r].properties.push(n);
      this[r].properties[n.name] = n;
      if (n.name.match(/pie-(\d+)-background-size/) && n.value) {
        this._private.hasPie = true;
      }
      if (n.mapped) {
        this[r].mappedProperties.push(n);
      }
      if (!this[r].selector) {
        this._private.coreStyle[n.name] = n;
      }
    }
    return this;
  };
  a3.append = function (e) {
    if (R(e)) {
      e.appendToStyle(this);
    } else if (M(e)) {
      this.appendFromJson(e);
    } else if (_(e)) {
      this.appendFromString(e);
    }
    return this;
  };
  a5.fromJson = function (e, t) {
    var n = new a5(e);
    n.fromJson(t);
    return n;
  };
  a5.fromString = function (e, t) {
    return new a5(e).fromString(t);
  };
  [aK, aZ, a$, aQ, aJ, a0, a1, a2].forEach(function (e) {
    Z(a3, e);
  });
  a5.types = a3.types;
  a5.properties = a3.properties;
  a5.propertyGroups = a3.propertyGroups;
  a5.propertyGroupNames = a3.propertyGroupNames;
  a5.propertyGroupKeys = a3.propertyGroupKeys;
  var a4 = {
    autolock: function (e) {
      if (e === undefined) {
        return this._private.autolock;
      } else {
        this._private.autolock = !!e;
        return this;
      }
    },
    autoungrabify: function (e) {
      if (e === undefined) {
        return this._private.autoungrabify;
      } else {
        this._private.autoungrabify = !!e;
        return this;
      }
    },
    autounselectify: function (e) {
      if (e === undefined) {
        return this._private.autounselectify;
      } else {
        this._private.autounselectify = !!e;
        return this;
      }
    },
    selectionType: function (e) {
      var t = this._private;
      if (t.selectionType == null) {
        t.selectionType = "single";
      }
      if (e === undefined) {
        return t.selectionType;
      } else {
        if (e === "additive" || e === "single") {
          t.selectionType = e;
        }
        return this;
      }
    },
    panningEnabled: function (e) {
      if (e === undefined) {
        return this._private.panningEnabled;
      } else {
        this._private.panningEnabled = !!e;
        return this;
      }
    },
    userPanningEnabled: function (e) {
      if (e === undefined) {
        return this._private.userPanningEnabled;
      } else {
        this._private.userPanningEnabled = !!e;
        return this;
      }
    },
    zoomingEnabled: function (e) {
      if (e === undefined) {
        return this._private.zoomingEnabled;
      } else {
        this._private.zoomingEnabled = !!e;
        return this;
      }
    },
    userZoomingEnabled: function (e) {
      if (e === undefined) {
        return this._private.userZoomingEnabled;
      } else {
        this._private.userZoomingEnabled = !!e;
        return this;
      }
    },
    boxSelectionEnabled: function (e) {
      if (e === undefined) {
        return this._private.boxSelectionEnabled;
      } else {
        this._private.boxSelectionEnabled = !!e;
        return this;
      }
    },
    pan: function () {
      var e;
      var t;
      var n;
      var r;
      var i;
      var a = arguments;
      var o = this._private.pan;
      switch (a.length) {
        case 0:
          return o;
        case 1:
          if (_(a[0])) {
            return o[e = a[0]];
          }
          if (A(a[0])) {
            if (!this._private.panningEnabled) {
              return this;
            }
            r = (n = a[0]).x;
            i = n.y;
            if (S(r)) {
              o.x = r;
            }
            if (S(i)) {
              o.y = i;
            }
            this.emit("pan viewport");
          }
          break;
        case 2:
          if (!this._private.panningEnabled) {
            return this;
          }
          e = a[0];
          t = a[1];
          if ((e === "x" || e === "y") && S(t)) {
            o[e] = t;
          }
          this.emit("pan viewport");
      }
      this.notify("viewport");
      return this;
    },
    panBy: function (e, t) {
      var n;
      var r;
      var i;
      var a = arguments;
      var o = this._private.pan;
      if (!this._private.panningEnabled) {
        return this;
      }
      switch (a.length) {
        case 1:
          if (A(e)) {
            r = (n = a[0]).x;
            i = n.y;
            if (S(r)) {
              o.x += r;
            }
            if (S(i)) {
              o.y += i;
            }
            this.emit("pan viewport");
          }
          break;
        case 2:
          if ((e === "x" || e === "y") && S(t)) {
            o[e] += t;
          }
          this.emit("pan viewport");
      }
      this.notify("viewport");
      return this;
    },
    fit: function (e, t) {
      var n = this.getFitViewport(e, t);
      if (n) {
        var r = this._private;
        r.zoom = n.zoom;
        r.pan = n.pan;
        this.emit("pan zoom viewport");
        this.notify("viewport");
      }
      return this;
    },
    getFitViewport: function (e, t) {
      if (S(e) && t === undefined) {
        t = e;
        e = undefined;
      }
      if (this._private.panningEnabled && this._private.zoomingEnabled) {
        if (_(e)) {
          var n;
          var r;
          var i;
          var a = e;
          e = this.$(a);
        } else if (A(n = e) && S(n.x1) && S(n.x2) && S(n.y1) && S(n.y2)) {
          var o = e;
          (r = {
            x1: o.x1,
            y1: o.y1,
            x2: o.x2,
            y2: o.y2
          }).w = r.x2 - r.x1;
          r.h = r.y2 - r.y1;
        } else if (!O(e)) {
          e = this.mutableElements();
        }
        if (!O(e) || !e.empty()) {
          r = r || e.boundingBox();
          var s = this.width();
          var l = this.height();
          t = S(t) ? t : 0;
          if (!isNaN(s) && !isNaN(l) && s > 0 && l > 0 && !isNaN(r.w) && !isNaN(r.h) && r.w > 0 && r.h > 0) {
            i = (i = (i = Math.min((s - t * 2) / r.w, (l - t * 2) / r.h)) > this._private.maxZoom ? this._private.maxZoom : i) < this._private.minZoom ? this._private.minZoom : i;
            var u = {
              x: (s - i * (r.x1 + r.x2)) / 2,
              y: (l - i * (r.y1 + r.y2)) / 2
            };
            return {
              zoom: i,
              pan: u
            };
          }
        }
      }
    },
    zoomRange: function (e, t) {
      var n = this._private;
      if (t == null) {
        var r = e;
        e = r.min;
        t = r.max;
      }
      if (S(e) && S(t) && e <= t) {
        n.minZoom = e;
        n.maxZoom = t;
      } else if (S(e) && t === undefined && e <= n.maxZoom) {
        n.minZoom = e;
      } else if (S(t) && e === undefined && t >= n.minZoom) {
        n.maxZoom = t;
      }
      return this;
    },
    minZoom: function (e) {
      if (e === undefined) {
        return this._private.minZoom;
      } else {
        return this.zoomRange({
          min: e
        });
      }
    },
    maxZoom: function (e) {
      if (e === undefined) {
        return this._private.maxZoom;
      } else {
        return this.zoomRange({
          max: e
        });
      }
    },
    getZoomedViewport: function (e) {
      var t;
      var n;
      var r = this._private;
      var i = r.pan;
      var a = r.zoom;
      var o = false;
      if (!r.zoomingEnabled) {
        o = true;
      }
      if (S(e)) {
        n = e;
      } else if (A(e)) {
        n = e.level;
        if (e.position != null) {
          t = tf(e.position, a, i);
        } else if (e.renderedPosition != null) {
          t = e.renderedPosition;
        }
        if (t != null && !r.panningEnabled) {
          o = true;
        }
      }
      n = (n = n > r.maxZoom ? r.maxZoom : n) < r.minZoom ? r.minZoom : n;
      if (o || !S(n) || n === a || t != null && (!S(t.x) || !S(t.y))) {
        return null;
      }
      if (t == null) {
        return {
          zoomed: true,
          panned: false,
          zoom: n,
          pan: i
        };
      }
      var s = n;
      var l = {
        x: -s / a * (t.x - i.x) + t.x,
        y: -s / a * (t.y - i.y) + t.y
      };
      return {
        zoomed: true,
        panned: true,
        zoom: s,
        pan: l
      };
    },
    zoom: function (e) {
      if (e === undefined) {
        return this._private.zoom;
      }
      var t = this.getZoomedViewport(e);
      var n = this._private;
      if (t != null && t.zoomed) {
        n.zoom = t.zoom;
        if (t.panned) {
          n.pan.x = t.pan.x;
          n.pan.y = t.pan.y;
        }
        this.emit("zoom" + (t.panned ? " pan" : "") + " viewport");
        this.notify("viewport");
      }
      return this;
    },
    viewport: function (e) {
      var t = this._private;
      var n = true;
      var r = true;
      var i = [];
      var a = false;
      var o = false;
      if (!e || (S(e.zoom) || (n = false), A(e.pan) || (r = false), !n && !r)) {
        return this;
      }
      if (n) {
        var s = e.zoom;
        if (s < t.minZoom || s > t.maxZoom || !t.zoomingEnabled) {
          a = true;
        } else {
          t.zoom = s;
          i.push("zoom");
        }
      }
      if (r && (!a || !e.cancelOnFailedZoom) && t.panningEnabled) {
        var l = e.pan;
        if (S(l.x)) {
          t.pan.x = l.x;
          o = false;
        }
        if (S(l.y)) {
          t.pan.y = l.y;
          o = false;
        }
        if (!o) {
          i.push("pan");
        }
      }
      if (i.length > 0) {
        i.push("viewport");
        this.emit(i.join(" "));
        this.notify("viewport");
      }
      return this;
    },
    center: function (e) {
      var t = this.getCenterPan(e);
      if (t) {
        this._private.pan = t;
        this.emit("pan viewport");
        this.notify("viewport");
      }
      return this;
    },
    getCenterPan: function (e, t) {
      if (this._private.panningEnabled) {
        if (_(e)) {
          var n = e;
          e = this.mutableElements().filter(n);
        } else if (!O(e)) {
          e = this.mutableElements();
        }
        if (e.length !== 0) {
          var r = e.boundingBox();
          var i = this.width();
          var a = this.height();
          return {
            x: (i - (t = t === undefined ? this._private.zoom : t) * (r.x1 + r.x2)) / 2,
            y: (a - t * (r.y1 + r.y2)) / 2
          };
        }
      }
    },
    reset: function () {
      if (this._private.panningEnabled && this._private.zoomingEnabled) {
        this.viewport({
          pan: {
            x: 0,
            y: 0
          },
          zoom: 1
        });
      }
      return this;
    },
    invalidateSize: function () {
      this._private.sizeCache = null;
    },
    size: function () {
      var e;
      var t;
      var n = this._private;
      var r = n.container;
      return n.sizeCache = n.sizeCache || (r ? (e = this.window().getComputedStyle(r), t = function (t) {
        return parseFloat(e.getPropertyValue(t));
      }, {
        width: r.clientWidth - t("padding-left") - t("padding-right"),
        height: r.clientHeight - t("padding-top") - t("padding-bottom")
      }) : {
        width: 1,
        height: 1
      });
    },
    width: function () {
      return this.size().width;
    },
    height: function () {
      return this.size().height;
    },
    extent: function () {
      var e = this._private.pan;
      var t = this._private.zoom;
      var n = this.renderedExtent();
      var r = {
        x1: (n.x1 - e.x) / t,
        x2: (n.x2 - e.x) / t,
        y1: (n.y1 - e.y) / t,
        y2: (n.y2 - e.y) / t
      };
      r.w = r.x2 - r.x1;
      r.h = r.y2 - r.y1;
      return r;
    },
    renderedExtent: function () {
      var e = this.width();
      var t = this.height();
      return {
        x1: 0,
        y1: 0,
        x2: e,
        y2: t,
        w: e,
        h: t
      };
    },
    multiClickDebounceTime: function (e) {
      if (e) {
        this._private.multiClickDebounceTime = e;
        return this;
      } else {
        return this._private.multiClickDebounceTime;
      }
    }
  };
  a4.centre = a4.center;
  a4.autolockNodes = a4.autolock;
  a4.autoungrabifyNodes = a4.autoungrabify;
  var a9 = {
    data: r7.data({
      field: "data",
      bindingEvent: "data",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "data",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      updateStyle: true
    }),
    removeData: r7.removeData({
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: true,
      updateStyle: true
    }),
    scratch: r7.data({
      field: "scratch",
      bindingEvent: "scratch",
      allowBinding: true,
      allowSetting: true,
      settingEvent: "scratch",
      settingTriggersEvent: true,
      triggerFnName: "trigger",
      allowGetting: true,
      updateStyle: true
    }),
    removeScratch: r7.removeData({
      field: "scratch",
      event: "scratch",
      triggerFnName: "trigger",
      triggerEvent: true,
      updateStyle: true
    })
  };
  a9.attr = a9.data;
  a9.removeAttr = a9.removeData;
  function a6(e) {
    var t = this;
    var n = (e = Z({}, e)).container;
    if (n && !P(n) && P(n[0])) {
      n = n[0];
    }
    var r = n ? n._cyreg : null;
    if ((r = r || {}).cy) {
      r.cy.destroy();
      r = {};
    }
    var i = r.readies = r.readies || [];
    if (n) {
      n._cyreg = r;
    }
    r.cy = t;
    var a = b !== undefined && n !== undefined && !e.headless;
    var o = e;
    o.layout = Z({
      name: a ? "grid" : "null"
    }, o.layout);
    o.renderer = Z({
      name: a ? "canvas" : "null"
    }, o.renderer);
    function s(e, t, n) {
      if (t !== undefined) {
        return t;
      } else if (n !== undefined) {
        return n;
      } else {
        return e;
      }
    }
    var l = this._private = {
      container: n,
      ready: false,
      options: o,
      elements: new aS(this),
      listeners: [],
      aniEles: new aS(this),
      data: o.data || {},
      scratch: {},
      layout: null,
      renderer: null,
      destroyed: false,
      notificationsEnabled: true,
      minZoom: 1e-50,
      maxZoom: 1e+50,
      zoomingEnabled: s(true, o.zoomingEnabled),
      userZoomingEnabled: s(true, o.userZoomingEnabled),
      panningEnabled: s(true, o.panningEnabled),
      userPanningEnabled: s(true, o.userPanningEnabled),
      boxSelectionEnabled: s(true, o.boxSelectionEnabled),
      autolock: s(false, o.autolock, o.autolockNodes),
      autoungrabify: s(false, o.autoungrabify, o.autoungrabifyNodes),
      autounselectify: s(false, o.autounselectify),
      styleEnabled: o.styleEnabled === undefined ? a : o.styleEnabled,
      zoom: S(o.zoom) ? o.zoom : 1,
      pan: {
        x: A(o.pan) && S(o.pan.x) ? o.pan.x : 0,
        y: A(o.pan) && S(o.pan.y) ? o.pan.y : 0
      },
      animation: {
        current: [],
        queue: []
      },
      hasCompoundNodes: false,
      multiClickDebounceTime: s(250, o.multiClickDebounceTime)
    };
    this.createEmitter();
    this.selectionType(o.selectionType);
    this.zoomRange({
      min: o.minZoom,
      max: o.maxZoom
    });
    if (l.styleEnabled) {
      t.setStyle([]);
    }
    var u = Z({}, o, o.renderer);
    t.initRenderer(u);
    function h(e, n, r) {
      t.notifications(false);
      var i = t.mutableElements();
      if (i.length > 0) {
        i.remove();
      }
      if (e != null && (A(e) || M(e))) {
        t.add(e);
      }
      t.one("layoutready", function (e) {
        t.notifications(true);
        t.emit(e);
        t.one("load", n);
        t.emitAndNotify("load");
      }).one("layoutstop", function () {
        t.one("done", r);
        t.emit("done");
      });
      var a = Z({}, t._private.options.layout);
      a.eles = t.elements();
      t.layout(a).run();
    }
    (function (e, t) {
      if (e.some(F)) {
        return ru.all(e).then(t);
      }
      t(e);
    })([o.style, o.elements], function (e) {
      var n = e[0];
      var a = e[1];
      if (l.styleEnabled) {
        t.style().append(n);
      }
      h(a, function () {
        t.startAnimationLoop();
        l.ready = true;
        if (D(o.ready)) {
          t.on("ready", o.ready);
        }
        for (var e = 0; e < i.length; e++) {
          var n = i[e];
          t.on("ready", n);
        }
        if (r) {
          r.readies = [];
        }
        t.emit("ready");
      }, o.done);
    });
  }
  var a8 = a6.prototype;
  Z(a8, {
    instanceString: function () {
      return "core";
    },
    isReady: function () {
      return this._private.ready;
    },
    destroyed: function () {
      return this._private.destroyed;
    },
    ready: function (e) {
      if (this.isReady()) {
        this.emitter().emit("ready", [], e);
      } else {
        this.on("ready", e);
      }
      return this;
    },
    destroy: function () {
      if (!this.destroyed()) {
        this.stopAnimationLoop();
        this.destroyRenderer();
        this.emit("destroy");
        this._private.destroyed = true;
        return this;
      }
    },
    hasElementWithId: function (e) {
      return this._private.elements.hasElementWithId(e);
    },
    getElementById: function (e) {
      return this._private.elements.getElementById(e);
    },
    hasCompoundNodes: function () {
      return this._private.hasCompoundNodes;
    },
    headless: function () {
      return this._private.renderer.isHeadless();
    },
    styleEnabled: function () {
      return this._private.styleEnabled;
    },
    addToPool: function (e) {
      this._private.elements.merge(e);
      return this;
    },
    removeFromPool: function (e) {
      this._private.elements.unmerge(e);
      return this;
    },
    container: function () {
      return this._private.container || null;
    },
    window: function () {
      if (this._private.container == null) {
        return b;
      }
      var e = this._private.container.ownerDocument;
      if (e === undefined || e == null) {
        return b;
      } else {
        return e.defaultView || b;
      }
    },
    mount: function (e) {
      if (e != null) {
        var t = this._private;
        var n = t.options;
        if (!P(e) && P(e[0])) {
          e = e[0];
        }
        this.stopAnimationLoop();
        this.destroyRenderer();
        t.container = e;
        t.styleEnabled = true;
        this.invalidateSize();
        this.initRenderer(Z({}, n, n.renderer, {
          name: n.renderer.name === "null" ? "canvas" : n.renderer.name
        }));
        this.startAnimationLoop();
        this.style(n.style);
        this.emit("mount");
        return this;
      }
    },
    unmount: function () {
      this.stopAnimationLoop();
      this.destroyRenderer();
      this.initRenderer({
        name: "null"
      });
      this.emit("unmount");
      return this;
    },
    options: function () {
      return e0(this._private.options);
    },
    json: function (e) {
      var t = this;
      var n = t._private;
      var r = t.mutableElements();
      if (A(e)) {
        t.startBatch();
        if (e.elements) {
          var i = {};
          function a(e, n) {
            var r = [];
            var a = [];
            var o = 0;
            for (; o < e.length; o++) {
              var s = e[o];
              if (!s.data.id) {
                eJ("cy.json() cannot handle elements without an ID attribute");
                continue;
              }
              var l = "" + s.data.id;
              var u = t.getElementById(l);
              i[l] = true;
              if (u.length !== 0) {
                a.push({
                  ele: u,
                  json: s
                });
              } else {
                if (n) {
                  s.group = n;
                }
                r.push(s);
              }
            }
            t.add(r);
            for (var h = 0; h < a.length; h++) {
              var c = a[h];
              var d = c.ele;
              var p = c.json;
              d.json(p);
            }
          }
          if (M(e.elements)) {
            a(e.elements);
          } else {
            var o = ["nodes", "edges"];
            var s = 0;
            for (; s < o.length; s++) {
              var l = o[s];
              var u = e.elements[l];
              if (M(u)) {
                a(u, l);
              }
            }
          }
          var h = t.collection();
          r.filter(function (e) {
            return !i[e.id()];
          }).forEach(function (e) {
            if (e.isParent()) {
              h.merge(e);
            } else {
              e.remove();
            }
          });
          h.forEach(function (e) {
            return e.children().move({
              parent: null
            });
          });
          h.forEach(function (e) {
            return t.getElementById(e.id()).remove();
          });
        }
        if (e.style) {
          t.style(e.style);
        }
        if (e.zoom != null && e.zoom !== n.zoom) {
          t.zoom(e.zoom);
        }
        if (e.pan && (e.pan.x !== n.pan.x || e.pan.y !== n.pan.y)) {
          t.pan(e.pan);
        }
        if (e.data) {
          t.data(e.data);
        }
        var c = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"];
        var d = 0;
        for (; d < c.length; d++) {
          var p = c[d];
          if (e[p] != null) {
            t[p](e[p]);
          }
        }
        t.endBatch();
        return this;
      }
      var g = {};
      if (e) {
        g.elements = this.elements().map(function (e) {
          return e.json();
        });
      } else {
        g.elements = {};
        r.forEach(function (e) {
          var t = e.group();
          g.elements[t] ||= [];
          g.elements[t].push(e.json());
        });
      }
      if (this._private.styleEnabled) {
        g.style = t.style().json();
      }
      g.data = e0(t.data());
      var f = n.options;
      g.zoomingEnabled = n.zoomingEnabled;
      g.userZoomingEnabled = n.userZoomingEnabled;
      g.zoom = n.zoom;
      g.minZoom = n.minZoom;
      g.maxZoom = n.maxZoom;
      g.panningEnabled = n.panningEnabled;
      g.userPanningEnabled = n.userPanningEnabled;
      g.pan = e0(n.pan);
      g.boxSelectionEnabled = n.boxSelectionEnabled;
      g.renderer = e0(f.renderer);
      g.hideEdgesOnViewport = f.hideEdgesOnViewport;
      g.textureOnViewport = f.textureOnViewport;
      g.wheelSensitivity = f.wheelSensitivity;
      g.motionBlur = f.motionBlur;
      g.multiClickDebounceTime = f.multiClickDebounceTime;
      return g;
    }
  });
  a8.$id = a8.getElementById;
  [{
    add: function (e) {
      var t;
      if (O(e)) {
        if (e._private.cy === this) {
          t = e.restore();
        } else {
          var n = [];
          var r = 0;
          for (; r < e.length; r++) {
            var i = e[r];
            n.push(i.json());
          }
          t = new aS(this, n);
        }
      } else if (M(e)) {
        t = new aS(this, e);
      } else if (A(e) && (M(e.nodes) || M(e.edges))) {
        var a = [];
        var o = ["nodes", "edges"];
        var s = 0;
        var l = o.length;
        for (; s < l; s++) {
          var u = o[s];
          var h = e[u];
          if (M(h)) {
            var c = 0;
            var d = h.length;
            for (; c < d; c++) {
              var p = Z({
                group: u
              }, h[c]);
              a.push(p);
            }
          }
        }
        t = new aS(this, a);
      } else {
        t = new ti(this, e).collection();
      }
      return t;
    },
    remove: function (e) {
      if (O(e)) ;else if (_(e)) {
        var t = e;
        e = this.$(t);
      }
      return e.remove();
    }
  }, aV, aX, aH, aU, {
    notify: function (e, t) {
      var n = this._private;
      if (this.batching()) {
        n.batchNotifications = n.batchNotifications || {};
        var r = n.batchNotifications[e] = n.batchNotifications[e] || this.collection();
        if (t != null) {
          r.merge(t);
        }
        return;
      }
      if (n.notificationsEnabled) {
        var i = this.renderer();
        if (!this.destroyed() && i) {
          i.notify(e, t);
        }
      }
    },
    notifications: function (e) {
      var t = this._private;
      if (e === undefined) {
        return t.notificationsEnabled;
      } else {
        t.notificationsEnabled = !!e;
        return this;
      }
    },
    noNotifications: function (e) {
      this.notifications(false);
      e();
      this.notifications(true);
    },
    batching: function () {
      return this._private.batchCount > 0;
    },
    startBatch: function () {
      var e = this._private;
      if (e.batchCount == null) {
        e.batchCount = 0;
      }
      if (e.batchCount === 0) {
        e.batchStyleEles = this.collection();
        e.batchNotifications = {};
      }
      e.batchCount++;
      return this;
    },
    endBatch: function () {
      var e = this._private;
      if (e.batchCount === 0) {
        return this;
      }
      e.batchCount--;
      if (e.batchCount === 0) {
        e.batchStyleEles.updateStyle();
        var t = this.renderer();
        Object.keys(e.batchNotifications).forEach(function (n) {
          var r = e.batchNotifications[n];
          if (r.empty()) {
            t.notify(n);
          } else {
            t.notify(n, r);
          }
        });
      }
      return this;
    },
    batch: function (e) {
      this.startBatch();
      e();
      this.endBatch();
      return this;
    },
    batchData: function (e) {
      var t = this;
      return this.batch(function () {
        var n = Object.keys(e);
        var r = 0;
        for (; r < n.length; r++) {
          var i = n[r];
          var a = e[i];
          t.getElementById(i).data(a);
        }
      });
    }
  }, aj, aq, {
    style: function (e) {
      if (e) {
        this.setStyle(e).update();
      }
      return this._private.style;
    },
    setStyle: function (e) {
      var t = this._private;
      if (R(e)) {
        t.style = e.generateStyle(this);
      } else if (M(e)) {
        t.style = a5.fromJson(this, e);
      } else if (_(e)) {
        t.style = a5.fromString(this, e);
      } else {
        t.style = a5(this);
      }
      return t.style;
    },
    updateStyle: function () {
      this.mutableElements().updateStyle();
    }
  }, a4, a9].forEach(function (e) {
    Z(a8, e);
  });
  var a7 = {
    fit: true,
    directed: false,
    padding: 30,
    circle: false,
    grid: false,
    spacingFactor: 1.75,
    boundingBox: undefined,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    roots: undefined,
    depthSort: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    ready: undefined,
    stop: undefined,
    transform: function (e, t) {
      return t;
    }
  };
  var oe = {
    maximal: false,
    acyclic: false
  };
  function ot(e) {
    return e.scratch("breadthfirst");
  }
  function on(e, t) {
    return e.scratch("breadthfirst", t);
  }
  function or(e) {
    this.options = Z({}, a7, oe, e);
  }
  or.prototype.run = function () {
    var e;
    var t = this.options;
    var n = t.cy;
    var r = t.eles;
    var i = r.nodes().filter(function (e) {
      return !e.isParent();
    });
    var a = t.directed;
    var o = t.acyclic || t.maximal || t.maximalAdjustments > 0;
    var s = tO(t.boundingBox ? t.boundingBox : {
      x1: 0,
      y1: 0,
      w: n.width(),
      h: n.height()
    });
    if (O(t.roots)) {
      e = t.roots;
    } else if (M(t.roots)) {
      var l = [];
      var u = 0;
      for (; u < t.roots.length; u++) {
        var h = t.roots[u];
        var c = n.getElementById(h);
        l.push(c);
      }
      e = n.collection(l);
    } else if (_(t.roots)) {
      e = n.$(t.roots);
    } else if (a) {
      e = i.roots();
    } else {
      var d = r.components();
      e = n.collection();
      for (var p = 0; p < d.length; p++) {
        (function (t) {
          var n = d[t];
          var r = n.maxDegree(false);
          var i = n.filter(function (e) {
            return e.degree(false) === r;
          });
          e = e.add(i);
        })(p);
      }
    }
    var g = [];
    var f = {};
    function v(e, t) {
      if (g[t] == null) {
        g[t] = [];
      }
      var n = g[t].length;
      g[t].push(e);
      on(e, {
        index: n,
        depth: t
      });
    }
    function y(e, t) {
      var n = ot(e);
      var r = n.depth;
      var i = n.index;
      g[r][i] = null;
      v(e, t);
    }
    r.bfs({
      roots: e,
      directed: t.directed,
      visit: function (e, t, n, r, i) {
        var a = e[0];
        var o = a.id();
        v(a, i);
        f[o] = true;
      }
    });
    var b = [];
    var x = 0;
    for (; x < i.length; x++) {
      var w = i[x];
      if (!f[w.id()]) {
        b.push(w);
      }
    }
    function E(e) {
      var t = g[e];
      var n = 0;
      for (; n < t.length; n++) {
        var r = t[n];
        if (r == null) {
          t.splice(n, 1);
          n--;
          continue;
        }
        on(r, {
          depth: e,
          index: n
        });
      }
    }
    function T() {
      for (var e = 0; e < g.length; e++) {
        E(e);
      }
    }
    if (a && o) {
      var C = [];
      var N = {};
      function D(e) {
        return C.push(e);
      }
      for (i.forEach(function (e) {
        return C.push(e);
      }); C.length > 0;) {
        var A = C.shift();
        var S = function (e, n) {
          var i = ot(e);
          var a = e.incomers().filter(function (e) {
            return e.isNode() && r.has(e);
          });
          var o = -1;
          var s = e.id();
          var l = 0;
          for (; l < a.length; l++) {
            o = Math.max(o, ot(a[l]).depth);
          }
          if (i.depth <= o) {
            if (!t.acyclic && n[s]) {
              return null;
            }
            var u = o + 1;
            y(e, u);
            n[s] = u;
            return true;
          }
          return false;
        }(A, N);
        if (S) {
          A.outgoers().filter(function (e) {
            return e.isNode() && r.has(e);
          }).forEach(D);
        } else if (S === null) {
          eJ("Detected double maximal shift for node `" + A.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
          break;
        }
      }
    }
    T();
    var P = 0;
    if (t.avoidOverlap) {
      for (var I = 0; I < i.length; I++) {
        var L = i[I].layoutDimensions(t);
        var k = L.w;
        var R = L.h;
        P = Math.max(P, k, R);
      }
    }
    var B = {};
    function F(e) {
      if (B[e.id()]) {
        return B[e.id()];
      }
      var t = ot(e).depth;
      var n = e.neighborhood();
      var r = 0;
      var a = 0;
      var o = 0;
      for (; o < n.length; o++) {
        var s = n[o];
        if (!s.isEdge() && !s.isParent() && !!i.has(s)) {
          var l = ot(s);
          if (l != null) {
            var u = l.index;
            var h = l.depth;
            if (u != null && h != null) {
              var c = g[h].length;
              if (h < t) {
                r += u / c;
                a++;
              }
            }
          }
        }
      }
      r /= a = Math.max(1, a);
      if (a === 0) {
        r = 0;
      }
      B[e.id()] = r;
      return r;
    }
    function z(e, t) {
      var n = F(e) - F(t);
      if (n === 0) {
        return K(e.id(), t.id());
      } else {
        return n;
      }
    }
    if (t.depthSort !== undefined) {
      z = t.depthSort;
    }
    for (var V = 0; V < g.length; V++) {
      g[V].sort(z);
      E(V);
    }
    var Y = [];
    var G = 0;
    for (; G < b.length; G++) {
      Y.push(b[G]);
    }
    g.unshift(Y);
    T();
    var X = 0;
    var H = 0;
    for (; H < g.length; H++) {
      X = Math.max(g[H].length, X);
    }
    var U = {
      x: s.x1 + s.w / 2,
      y: s.x1 + s.h / 2
    };
    var W = g.reduce(function (e, t) {
      return Math.max(e, t.length);
    }, 0);
    r.nodes().layoutPositions(this, t, function (e) {
      var n = ot(e);
      var r = n.depth;
      var i = n.index;
      var a = g[r].length;
      var o = Math.max(s.w / ((t.grid ? W : a) + 1), P);
      var l = Math.max(s.h / (g.length + 1), P);
      var u = Math.min(s.w / 2 / g.length, s.h / 2 / g.length);
      u = Math.max(u, P);
      if (!t.circle) {
        return {
          x: U.x + (i + 1 - (a + 1) / 2) * o,
          y: (r + 1) * l
        };
      }
      var h = u * r + u - (g.length > 0 && g[0].length <= 3 ? u / 2 : 0);
      var c = Math.PI * 2 / g[r].length * i;
      if (r === 0 && g[0].length === 1) {
        h = 1;
      }
      return {
        x: U.x + h * Math.cos(c),
        y: U.y + h * Math.sin(c)
      };
    });
    return this;
  };
  var oi = {
    fit: true,
    padding: 30,
    boundingBox: undefined,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: undefined,
    radius: undefined,
    startAngle: Math.PI * 1.5,
    sweep: undefined,
    clockwise: true,
    sort: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    ready: undefined,
    stop: undefined,
    transform: function (e, t) {
      return t;
    }
  };
  function oa(e) {
    this.options = Z({}, oi, e);
  }
  oa.prototype.run = function () {
    var e;
    var t = this.options;
    var n = t.cy;
    var r = t.eles;
    var i = t.counterclockwise !== undefined ? !t.counterclockwise : t.clockwise;
    var a = r.nodes().not(":parent");
    if (t.sort) {
      a = a.sort(t.sort);
    }
    var o = tO(t.boundingBox ? t.boundingBox : {
      x1: 0,
      y1: 0,
      w: n.width(),
      h: n.height()
    });
    var s = {
      x: o.x1 + o.w / 2,
      y: o.y1 + o.h / 2
    };
    var l = (t.sweep === undefined ? Math.PI * 2 - Math.PI * 2 / a.length : t.sweep) / Math.max(1, a.length - 1);
    var u = 0;
    var h = 0;
    for (; h < a.length; h++) {
      var c = a[h].layoutDimensions(t);
      u = Math.max(u, c.w, c.h);
    }
    e = S(t.radius) ? t.radius : a.length <= 1 ? 0 : Math.min(o.h, o.w) / 2 - u;
    if (a.length > 1 && t.avoidOverlap) {
      var d = Math.cos(l) - 1;
      var p = Math.sin(l) - 0;
      e = Math.max(Math.sqrt((u *= 1.75) * u / (d * d + p * p)), e);
    }
    r.nodes().layoutPositions(this, t, function (n, r) {
      var a = t.startAngle + r * l * (i ? 1 : -1);
      var o = e * Math.cos(a);
      var u = e * Math.sin(a);
      return {
        x: s.x + o,
        y: s.y + u
      };
    });
    return this;
  };
  var oo = {
    fit: true,
    padding: 30,
    startAngle: Math.PI * 1.5,
    sweep: undefined,
    clockwise: true,
    equidistant: false,
    minNodeSpacing: 10,
    boundingBox: undefined,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
    height: undefined,
    width: undefined,
    spacingFactor: undefined,
    concentric: function (e) {
      return e.degree();
    },
    levelWidth: function (e) {
      return e.maxDegree() / 4;
    },
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    ready: undefined,
    stop: undefined,
    transform: function (e, t) {
      return t;
    }
  };
  function os(e) {
    this.options = Z({}, oo, e);
  }
  os.prototype.run = function () {
    var e = this.options;
    var t = e.counterclockwise !== undefined ? !e.counterclockwise : e.clockwise;
    var n = e.cy;
    var r = e.eles;
    var i = r.nodes().not(":parent");
    var a = tO(e.boundingBox ? e.boundingBox : {
      x1: 0,
      y1: 0,
      w: n.width(),
      h: n.height()
    });
    var o = {
      x: a.x1 + a.w / 2,
      y: a.y1 + a.h / 2
    };
    var s = [];
    var l = 0;
    var u = 0;
    for (; u < i.length; u++) {
      var h = i[u];
      var c = undefined;
      c = e.concentric(h);
      s.push({
        value: c,
        node: h
      });
      h._private.scratch.concentric = c;
    }
    i.updateStyle();
    for (var d = 0; d < i.length; d++) {
      var p = i[d].layoutDimensions(e);
      l = Math.max(l, p.w, p.h);
    }
    s.sort(function (e, t) {
      return t.value - e.value;
    });
    var g = e.levelWidth(i);
    var f = [[]];
    var v = f[0];
    var y = 0;
    for (; y < s.length; y++) {
      var b = s[y];
      if (v.length > 0 && Math.abs(v[0].value - b.value) >= g) {
        v = [];
        f.push(v);
      }
      v.push(b);
    }
    var x = l + e.minNodeSpacing;
    if (!e.avoidOverlap) {
      var w = f.length > 0 && f[0].length > 1;
      var E = (Math.min(a.w, a.h) / 2 - x) / (f.length + w ? 1 : 0);
      x = Math.min(x, E);
    }
    var T = 0;
    var C = 0;
    for (; C < f.length; C++) {
      var N = f[C];
      var _ = e.sweep === undefined ? Math.PI * 2 - Math.PI * 2 / N.length : e.sweep;
      var D = N.dTheta = _ / Math.max(1, N.length - 1);
      if (N.length > 1 && e.avoidOverlap) {
        var M = Math.cos(D) - 1;
        var A = Math.sin(D) - 0;
        T = Math.max(Math.sqrt(x * x / (M * M + A * A)), T);
      }
      N.r = T;
      T += x;
    }
    if (e.equidistant) {
      var S = 0;
      var P = 0;
      var O = 0;
      for (; O < f.length; O++) {
        S = Math.max(S, f[O].r - P);
      }
      P = 0;
      for (var I = 0; I < f.length; I++) {
        var L = f[I];
        if (I === 0) {
          P = L.r;
        }
        L.r = P;
        P += S;
      }
    }
    var k = {};
    var R = 0;
    for (; R < f.length; R++) {
      var B = f[R];
      var F = B.dTheta;
      var z = B.r;
      var V = 0;
      for (; V < B.length; V++) {
        var Y = B[V];
        var G = e.startAngle + (t ? 1 : -1) * F * V;
        var X = {
          x: o.x + z * Math.cos(G),
          y: o.y + z * Math.sin(G)
        };
        k[Y.node.id()] = X;
      }
    }
    r.nodes().layoutPositions(this, e, function (e) {
      return k[e.id()];
    });
    return this;
  };
  var ol = {
    ready: function () {},
    stop: function () {},
    animate: true,
    animationEasing: undefined,
    animationDuration: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    animationThreshold: 250,
    refresh: 20,
    fit: true,
    padding: 30,
    boundingBox: undefined,
    nodeDimensionsIncludeLabels: false,
    randomize: false,
    componentSpacing: 40,
    nodeRepulsion: function (e) {
      return 2048;
    },
    nodeOverlap: 4,
    idealEdgeLength: function (e) {
      return 32;
    },
    edgeElasticity: function (e) {
      return 32;
    },
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1000,
    initialTemp: 1000,
    coolingFactor: 0.99,
    minTemp: 1
  };
  function ou(e) {
    this.options = Z({}, ol, e);
    this.options.layout = this;
    var t = this.options.eles.nodes();
    var n = this.options.eles.edges().filter(function (e) {
      var n = e.source().data("id");
      var r = e.target().data("id");
      var i = t.some(function (e) {
        return e.data("id") === n;
      });
      var a = t.some(function (e) {
        return e.data("id") === r;
      });
      return !i || !a;
    });
    this.options.eles = this.options.eles.not(n);
  }
  ou.prototype.run = function () {
    var e = this.options;
    var t = e.cy;
    var n = this;
    n.stopped = false;
    if (e.animate === true || e.animate === false) {
      n.emit({
        type: "layoutstart",
        layout: n
      });
    }
    o5 = e.debug === true;
    var r = oh(t, n, e);
    if (o5) {
      o3(r);
    }
    if (e.randomize) {
      op(r);
    }
    var i = eO();
    function a() {
      of(r, t, e);
      if (e.fit === true) {
        t.fit(e.padding);
      }
    }
    function o(t) {
      return !n.stopped && !(t >= e.numIter) && (ov(r, e), r.temperature = r.temperature * e.coolingFactor, !(r.temperature < e.minTemp));
    }
    function s() {
      if (e.animate === true || e.animate === false) {
        a();
        n.one("layoutstop", e.stop);
        n.emit({
          type: "layoutstop",
          layout: n
        });
      } else {
        var t = e.eles.nodes();
        var i = og(r, e, t);
        t.layoutPositions(n, e, i);
      }
    }
    var l = 0;
    var u = true;
    if (e.animate === true) {
      (function t() {
        for (var n = 0; u && n < e.refresh;) {
          u = o(l);
          l++;
          n++;
        }
        if (u) {
          if (eO() - i >= e.animationThreshold) {
            a();
          }
          eL(t);
        } else {
          oM(r, e);
          s();
        }
      })();
    } else {
      while (u) {
        u = o(l);
        l++;
      }
      oM(r, e);
      s();
    }
    return this;
  };
  ou.prototype.stop = function () {
    this.stopped = true;
    if (this.thread) {
      this.thread.stop();
    }
    this.emit("layoutstop");
    return this;
  };
  ou.prototype.destroy = function () {
    if (this.thread) {
      this.thread.stop();
    }
    return this;
  };
  function oh(e, t, n) {
    var r = n.eles.edges();
    var i = n.eles.nodes();
    var a = tO(n.boundingBox ? n.boundingBox : {
      x1: 0,
      y1: 0,
      w: e.width(),
      h: e.height()
    });
    var o = {
      isCompound: e.hasCompoundNodes(),
      layoutNodes: [],
      idToIndex: {},
      nodeSize: i.size(),
      graphSet: [],
      indexToGraph: [],
      layoutEdges: [],
      edgeSize: r.size(),
      temperature: n.initialTemp,
      clientWidth: a.w,
      clientHeight: a.h,
      boundingBox: a
    };
    var s = n.eles.components();
    var l = {};
    var u = 0;
    for (; u < s.length; u++) {
      var h = s[u];
      var c = 0;
      for (; c < h.length; c++) {
        var d = h[c];
        l[d.id()] = u;
      }
    }
    for (var u = 0; u < o.nodeSize; u++) {
      var p = i[u];
      var g = p.layoutDimensions(n);
      var f = {};
      f.isLocked = p.locked();
      f.id = p.data("id");
      f.parentId = p.data("parent");
      f.cmptId = l[p.id()];
      f.children = [];
      f.positionX = p.position("x");
      f.positionY = p.position("y");
      f.offsetX = 0;
      f.offsetY = 0;
      f.height = g.w;
      f.width = g.h;
      f.maxX = f.positionX + f.width / 2;
      f.minX = f.positionX - f.width / 2;
      f.maxY = f.positionY + f.height / 2;
      f.minY = f.positionY - f.height / 2;
      f.padLeft = parseFloat(p.style("padding"));
      f.padRight = parseFloat(p.style("padding"));
      f.padTop = parseFloat(p.style("padding"));
      f.padBottom = parseFloat(p.style("padding"));
      f.nodeRepulsion = D(n.nodeRepulsion) ? n.nodeRepulsion(p) : n.nodeRepulsion;
      o.layoutNodes.push(f);
      o.idToIndex[f.id] = u;
    }
    var v = [];
    var y = 0;
    var b = -1;
    var x = [];
    var u = 0;
    for (; u < o.nodeSize; u++) {
      var p = o.layoutNodes[u];
      var w = p.parentId;
      if (w != null) {
        o.layoutNodes[o.idToIndex[w]].children.push(p.id);
      } else {
        v[++b] = p.id;
        x.push(p.id);
      }
    }
    for (o.graphSet.push(x); y <= b;) {
      var E = v[y++];
      var T = o.idToIndex[E];
      var d = o.layoutNodes[T];
      var C = d.children;
      if (C.length > 0) {
        o.graphSet.push(C);
        for (var u = 0; u < C.length; u++) {
          v[++b] = C[u];
        }
      }
    }
    for (var u = 0; u < o.graphSet.length; u++) {
      var N = o.graphSet[u];
      var c = 0;
      for (; c < N.length; c++) {
        var _ = o.idToIndex[N[c]];
        o.indexToGraph[_] = u;
      }
    }
    for (var u = 0; u < o.edgeSize; u++) {
      var M = r[u];
      var A = {};
      A.id = M.data("id");
      A.sourceId = M.data("source");
      A.targetId = M.data("target");
      var S = D(n.idealEdgeLength) ? n.idealEdgeLength(M) : n.idealEdgeLength;
      var P = D(n.edgeElasticity) ? n.edgeElasticity(M) : n.edgeElasticity;
      var O = o.idToIndex[A.sourceId];
      var I = o.idToIndex[A.targetId];
      if (o.indexToGraph[O] != o.indexToGraph[I]) {
        var L = oc(A.sourceId, A.targetId, o);
        var k = o.graphSet[L];
        var R = 0;
        var f = o.layoutNodes[O];
        while (k.indexOf(f.id) === -1) {
          f = o.layoutNodes[o.idToIndex[f.parentId]];
          R++;
        }
        for (f = o.layoutNodes[I]; k.indexOf(f.id) === -1;) {
          f = o.layoutNodes[o.idToIndex[f.parentId]];
          R++;
        }
        S *= R * n.nestingFactor;
      }
      A.idealLength = S;
      A.elasticity = P;
      o.layoutEdges.push(A);
    }
    return o;
  }
  function oc(e, t, n) {
    var r = od(e, t, 0, n);
    if (r.count < 2) {
      return 0;
    } else {
      return r.graph;
    }
  }
  var od = function e(t, n, r, i) {
    var a = i.graphSet[r];
    if (a.indexOf(t) > -1 && a.indexOf(n) > -1) {
      return {
        count: 2,
        graph: r
      };
    }
    var o = 0;
    var s = 0;
    for (; s < a.length; s++) {
      var l = a[s];
      var u = i.idToIndex[l];
      var h = i.layoutNodes[u].children;
      if (h.length !== 0) {
        var c = e(t, n, i.indexToGraph[i.idToIndex[h[0]]], i);
        if (c.count !== 0) {
          if (c.count !== 1) {
            return c;
          } else if (++o == 2) {
            break;
          }
        }
      }
    }
    return {
      count: o,
      graph: r
    };
  };
  function op(e, t) {
    var n = e.clientWidth;
    var r = e.clientHeight;
    var i = 0;
    for (; i < e.nodeSize; i++) {
      var a = e.layoutNodes[i];
      if (a.children.length === 0 && !a.isLocked) {
        a.positionX = Math.random() * n;
        a.positionY = Math.random() * r;
      }
    }
  }
  function og(e, t, n) {
    var r = e.boundingBox;
    var i = {
      x1: Infinity,
      x2: -Infinity,
      y1: Infinity,
      y2: -Infinity
    };
    if (t.boundingBox) {
      n.forEach(function (t) {
        var n = e.layoutNodes[e.idToIndex[t.data("id")]];
        i.x1 = Math.min(i.x1, n.positionX);
        i.x2 = Math.max(i.x2, n.positionX);
        i.y1 = Math.min(i.y1, n.positionY);
        i.y2 = Math.max(i.y2, n.positionY);
      });
      i.w = i.x2 - i.x1;
      i.h = i.y2 - i.y1;
    }
    return function (n, a) {
      var o = e.layoutNodes[e.idToIndex[n.data("id")]];
      if (!t.boundingBox) {
        return {
          x: o.positionX,
          y: o.positionY
        };
      }
      var s = (o.positionX - i.x1) / i.w;
      var l = (o.positionY - i.y1) / i.h;
      return {
        x: r.x1 + s * r.w,
        y: r.y1 + l * r.h
      };
    };
  }
  function of(e, t, n) {
    var r = n.layout;
    var i = n.eles.nodes();
    var a = og(e, n, i);
    i.positions(a);
    if (e.ready !== true) {
      e.ready = true;
      r.one("layoutready", n.ready);
      r.emit({
        type: "layoutready",
        layout: this
      });
    }
  }
  function ov(e, t, n) {
    oy(e, t);
    oE(e);
    oT(e, t);
    oC(e);
    oN(e);
  }
  function oy(e, t) {
    for (var n = 0; n < e.graphSet.length; n++) {
      var r = e.graphSet[n];
      var i = r.length;
      var a = 0;
      for (; a < i; a++) {
        var o = e.layoutNodes[e.idToIndex[r[a]]];
        var s = a + 1;
        for (; s < i; s++) {
          ob(o, e.layoutNodes[e.idToIndex[r[s]]], e, t);
        }
      }
    }
  }
  function om(e) {
    return -e + e * 2 * Math.random();
  }
  function ob(e, t, n, r) {
    if (e.cmptId === t.cmptId || n.isCompound) {
      var i = t.positionX - e.positionX;
      var a = t.positionY - e.positionY;
      if (i === 0 && a === 0) {
        i = om(1);
        a = om(1);
      }
      var o = ox(e, t, i, a);
      if (o > 0) {
        var s = r.nodeOverlap * o;
        var l = Math.sqrt(i * i + a * a);
        var u = s * i / l;
        var h = s * a / l;
      } else {
        var c = ow(e, i, a);
        var d = ow(t, i * -1, a * -1);
        var p = d.x - c.x;
        var g = d.y - c.y;
        var f = p * p + g * g;
        var l = Math.sqrt(f);
        var s = (e.nodeRepulsion + t.nodeRepulsion) / f;
        var u = s * p / l;
        var h = s * g / l;
      }
      if (!e.isLocked) {
        e.offsetX -= u;
        e.offsetY -= h;
      }
      if (!t.isLocked) {
        t.offsetX += u;
        t.offsetY += h;
      }
    }
  }
  function ox(e, t, n, r) {
    if (n > 0) {
      var i = e.maxX - t.minX;
    } else {
      var i = t.maxX - e.minX;
    }
    if (r > 0) {
      var a = e.maxY - t.minY;
    } else {
      var a = t.maxY - e.minY;
    }
    if (i >= 0 && a >= 0) {
      return Math.sqrt(i * i + a * a);
    } else {
      return 0;
    }
  }
  function ow(e, t, n) {
    var r = e.positionX;
    var i = e.positionY;
    var a = e.height || 1;
    var o = e.width || 1;
    var s = n / t;
    var l = a / o;
    var u = {};
    if (t === 0 && n > 0 || t === 0 && n < 0) {
      u.x = r;
      u.y = i + a / 2;
    } else if (t > 0 && l * -1 <= s && s <= l) {
      u.x = r + o / 2;
      u.y = i + o * n / 2 / t;
    } else if (t < 0 && l * -1 <= s && s <= l) {
      u.x = r - o / 2;
      u.y = i - o * n / 2 / t;
    } else if (n > 0 && (s <= l * -1 || s >= l)) {
      u.x = r + a * t / 2 / n;
      u.y = i + a / 2;
    } else if (n < 0 && (s <= l * -1 || s >= l)) {
      u.x = r - a * t / 2 / n;
      u.y = i - a / 2;
    }
    return u;
  }
  function oE(e, t) {
    for (var n = 0; n < e.edgeSize; n++) {
      var r = e.layoutEdges[n];
      var i = e.idToIndex[r.sourceId];
      var a = e.layoutNodes[i];
      var o = e.idToIndex[r.targetId];
      var s = e.layoutNodes[o];
      var l = s.positionX - a.positionX;
      var u = s.positionY - a.positionY;
      if (l !== 0 || u !== 0) {
        var h = ow(a, l, u);
        var c = ow(s, l * -1, u * -1);
        var d = c.x - h.x;
        var p = c.y - h.y;
        var g = Math.sqrt(d * d + p * p);
        var f = Math.pow(r.idealLength - g, 2) / r.elasticity;
        if (g !== 0) {
          var v = f * d / g;
          var y = f * p / g;
        } else {
          var v = 0;
          var y = 0;
        }
        if (!a.isLocked) {
          a.offsetX += v;
          a.offsetY += y;
        }
        if (!s.isLocked) {
          s.offsetX -= v;
          s.offsetY -= y;
        }
      }
    }
  }
  function oT(e, t) {
    if (t.gravity !== 0) {
      for (var n = 0; n < e.graphSet.length; n++) {
        var r = e.graphSet[n];
        var i = r.length;
        if (n === 0) {
          var a = e.clientHeight / 2;
          var o = e.clientWidth / 2;
        } else {
          var s = e.layoutNodes[e.idToIndex[r[0]]];
          var l = e.layoutNodes[e.idToIndex[s.parentId]];
          var a = l.positionX;
          var o = l.positionY;
        }
        for (var u = 0; u < i; u++) {
          var h = e.layoutNodes[e.idToIndex[r[u]]];
          if (!h.isLocked) {
            var c = a - h.positionX;
            var d = o - h.positionY;
            var p = Math.sqrt(c * c + d * d);
            if (p > 1) {
              var g = t.gravity * c / p;
              var f = t.gravity * d / p;
              h.offsetX += g;
              h.offsetY += f;
            }
          }
        }
      }
    }
  }
  function oC(e, t) {
    var n = [];
    var r = 0;
    var i = -1;
    n.push.apply(n, e.graphSet[0]);
    i += e.graphSet[0].length;
    while (r <= i) {
      var a = n[r++];
      var o = e.idToIndex[a];
      var s = e.layoutNodes[o];
      var l = s.children;
      if (l.length > 0 && !s.isLocked) {
        var u = s.offsetX;
        var h = s.offsetY;
        var c = 0;
        for (; c < l.length; c++) {
          var d = e.layoutNodes[e.idToIndex[l[c]]];
          d.offsetX += u;
          d.offsetY += h;
          n[++i] = l[c];
        }
        s.offsetX = 0;
        s.offsetY = 0;
      }
    }
  }
  function oN(e, t) {
    for (var n = 0; n < e.nodeSize; n++) {
      var r = e.layoutNodes[n];
      if (r.children.length > 0) {
        r.maxX = undefined;
        r.minX = undefined;
        r.maxY = undefined;
        r.minY = undefined;
      }
    }
    for (var n = 0; n < e.nodeSize; n++) {
      var r = e.layoutNodes[n];
      if (!(r.children.length > 0) && !r.isLocked) {
        var i = o_(r.offsetX, r.offsetY, e.temperature);
        r.positionX += i.x;
        r.positionY += i.y;
        r.offsetX = 0;
        r.offsetY = 0;
        r.minX = r.positionX - r.width;
        r.maxX = r.positionX + r.width;
        r.minY = r.positionY - r.height;
        r.maxY = r.positionY + r.height;
        oD(r, e);
      }
    }
    for (var n = 0; n < e.nodeSize; n++) {
      var r = e.layoutNodes[n];
      if (r.children.length > 0 && !r.isLocked) {
        r.positionX = (r.maxX + r.minX) / 2;
        r.positionY = (r.maxY + r.minY) / 2;
        r.width = r.maxX - r.minX;
        r.height = r.maxY - r.minY;
      }
    }
  }
  function o_(e, t, n) {
    var r = Math.sqrt(e * e + t * t);
    if (r > n) {
      var i = {
        x: n * e / r,
        y: n * t / r
      };
    } else {
      var i = {
        x: e,
        y: t
      };
    }
    return i;
  }
  var oD = function e(t, n) {
    var r = t.parentId;
    if (r != null) {
      var i = n.layoutNodes[n.idToIndex[r]];
      var a = false;
      if (i.maxX == null || t.maxX + i.padRight > i.maxX) {
        i.maxX = t.maxX + i.padRight;
        a = true;
      }
      if (i.minX == null || t.minX - i.padLeft < i.minX) {
        i.minX = t.minX - i.padLeft;
        a = true;
      }
      if (i.maxY == null || t.maxY + i.padBottom > i.maxY) {
        i.maxY = t.maxY + i.padBottom;
        a = true;
      }
      if (i.minY == null || t.minY - i.padTop < i.minY) {
        i.minY = t.minY - i.padTop;
        a = true;
      }
      if (a) {
        return e(i, n);
      }
    }
  };
  function oM(e, t) {
    var n = e.layoutNodes;
    var r = [];
    var i = 0;
    for (; i < n.length; i++) {
      var a = n[i];
      var o = a.cmptId;
      (r[o] = r[o] || []).push(a);
    }
    var s = 0;
    var i = 0;
    for (; i < r.length; i++) {
      var l = r[i];
      if (l) {
        l.x1 = Infinity;
        l.x2 = -Infinity;
        l.y1 = Infinity;
        l.y2 = -Infinity;
        for (var u = 0; u < l.length; u++) {
          var h = l[u];
          l.x1 = Math.min(l.x1, h.positionX - h.width / 2);
          l.x2 = Math.max(l.x2, h.positionX + h.width / 2);
          l.y1 = Math.min(l.y1, h.positionY - h.height / 2);
          l.y2 = Math.max(l.y2, h.positionY + h.height / 2);
        }
        l.w = l.x2 - l.x1;
        l.h = l.y2 - l.y1;
        s += l.w * l.h;
      }
    }
    r.sort(function (e, t) {
      return t.w * t.h - e.w * e.h;
    });
    var c = 0;
    var d = 0;
    var p = 0;
    var g = 0;
    var f = Math.sqrt(s) * e.clientWidth / e.clientHeight;
    var i = 0;
    for (; i < r.length; i++) {
      var l = r[i];
      if (l) {
        for (var u = 0; u < l.length; u++) {
          var h = l[u];
          if (!h.isLocked) {
            h.positionX += c - l.x1;
            h.positionY += d - l.y1;
          }
        }
        c += l.w + t.componentSpacing;
        p += l.w + t.componentSpacing;
        g = Math.max(g, l.h);
        if (p > f) {
          d += g + t.componentSpacing;
          c = 0;
          p = 0;
          g = 0;
        }
      }
    }
  }
  var oA = {
    fit: true,
    padding: 30,
    boundingBox: undefined,
    avoidOverlap: true,
    avoidOverlapPadding: 10,
    nodeDimensionsIncludeLabels: false,
    spacingFactor: undefined,
    condense: false,
    rows: undefined,
    cols: undefined,
    position: function (e) {},
    sort: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    ready: undefined,
    stop: undefined,
    transform: function (e, t) {
      return t;
    }
  };
  function oS(e) {
    this.options = Z({}, oA, e);
  }
  oS.prototype.run = function () {
    var e = this.options;
    var t = e.cy;
    var n = e.eles;
    var r = n.nodes().not(":parent");
    if (e.sort) {
      r = r.sort(e.sort);
    }
    var i = tO(e.boundingBox ? e.boundingBox : {
      x1: 0,
      y1: 0,
      w: t.width(),
      h: t.height()
    });
    if (i.h === 0 || i.w === 0) {
      n.nodes().layoutPositions(this, e, function (e) {
        return {
          x: i.x1,
          y: i.y1
        };
      });
    } else {
      var a = r.size();
      var o = Math.sqrt(a * i.h / i.w);
      var s = Math.round(o);
      var l = Math.round(i.w / i.h * o);
      function u(e) {
        if (e == null) {
          return Math.min(s, l);
        }
        if (Math.min(s, l) == s) {
          s = e;
        } else {
          l = e;
        }
      }
      function h(e) {
        if (e == null) {
          return Math.max(s, l);
        }
        if (Math.max(s, l) == s) {
          s = e;
        } else {
          l = e;
        }
      }
      var c = e.rows;
      var d = e.cols ?? e.columns;
      if (c != null && d != null) {
        s = c;
        l = d;
      } else if (c != null && d == null) {
        l = Math.ceil(a / (s = c));
      } else if (c == null && d != null) {
        s = Math.ceil(a / (l = d));
      } else if (l * s > a) {
        var p = u();
        var g = h();
        if ((p - 1) * g >= a) {
          u(p - 1);
        } else if ((g - 1) * p >= a) {
          h(g - 1);
        }
      } else {
        while (l * s < a) {
          var f = u();
          var v = h();
          if ((v + 1) * f >= a) {
            h(v + 1);
          } else {
            u(f + 1);
          }
        }
      }
      var y = i.w / l;
      var b = i.h / s;
      if (e.condense) {
        y = 0;
        b = 0;
      }
      if (e.avoidOverlap) {
        for (var x = 0; x < r.length; x++) {
          var w = r[x];
          var E = w._private.position;
          if (E.x == null || E.y == null) {
            E.x = 0;
            E.y = 0;
          }
          var T = w.layoutDimensions(e);
          var C = e.avoidOverlapPadding;
          var N = T.w + C;
          var _ = T.h + C;
          y = Math.max(y, N);
          b = Math.max(b, _);
        }
      }
      var D = {};
      function M(e, t) {
        return !!D["c-" + e + "-" + t];
      }
      function A(e, t) {
        D["c-" + e + "-" + t] = true;
      }
      var S = 0;
      var P = 0;
      function O() {
        if (++P >= l) {
          P = 0;
          S++;
        }
      }
      var I = {};
      var L = 0;
      for (; L < r.length; L++) {
        var k = r[L];
        var R = e.position(k);
        if (R && (R.row !== undefined || R.col !== undefined)) {
          var B = {
            row: R.row,
            col: R.col
          };
          if (B.col === undefined) {
            for (B.col = 0; M(B.row, B.col);) {
              B.col++;
            }
          } else if (B.row === undefined) {
            for (B.row = 0; M(B.row, B.col);) {
              B.row++;
            }
          }
          I[k.id()] = B;
          A(B.row, B.col);
        }
      }
      r.layoutPositions(this, e, function (e, t) {
        if (e.locked() || e.isParent()) {
          return false;
        }
        var n;
        var r;
        var a = I[e.id()];
        if (a) {
          n = a.col * y + y / 2 + i.x1;
          r = a.row * b + b / 2 + i.y1;
        } else {
          while (M(S, P)) {
            O();
          }
          n = P * y + y / 2 + i.x1;
          r = S * b + b / 2 + i.y1;
          A(S, P);
          O();
        }
        return {
          x: n,
          y: r
        };
      });
    }
    return this;
  };
  var oP = {
    ready: function () {},
    stop: function () {}
  };
  function oO(e) {
    this.options = Z({}, oP, e);
  }
  oO.prototype.run = function () {
    var e = this.options;
    var t = e.eles;
    e.cy;
    this.emit("layoutstart");
    t.nodes().positions(function () {
      return {
        x: 0,
        y: 0
      };
    });
    this.one("layoutready", e.ready);
    this.emit("layoutready");
    this.one("layoutstop", e.stop);
    this.emit("layoutstop");
    return this;
  };
  oO.prototype.stop = function () {
    return this;
  };
  var oI = {
    positions: undefined,
    zoom: undefined,
    pan: undefined,
    fit: true,
    padding: 30,
    spacingFactor: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    ready: undefined,
    stop: undefined,
    transform: function (e, t) {
      return t;
    }
  };
  function oL(e) {
    this.options = Z({}, oI, e);
  }
  oL.prototype.run = function () {
    var e = this.options;
    var t = e.eles.nodes();
    var n = D(e.positions);
    t.layoutPositions(this, e, function (t, r) {
      var i = function (t) {
        if (e.positions == null) {
          var r;
          return {
            x: (r = t.position()).x,
            y: r.y
          };
        }
        if (n) {
          return e.positions(t);
        }
        var i = e.positions[t._private.data.id];
        if (i == null) {
          return null;
        } else {
          return i;
        }
      }(t);
      return !t.locked() && i != null && i;
    });
    return this;
  };
  var ok = {
    fit: true,
    padding: 30,
    boundingBox: undefined,
    animate: false,
    animationDuration: 500,
    animationEasing: undefined,
    animateFilter: function (e, t) {
      return true;
    },
    ready: undefined,
    stop: undefined,
    transform: function (e, t) {
      return t;
    }
  };
  function oR(e) {
    this.options = Z({}, ok, e);
  }
  oR.prototype.run = function () {
    var e = this.options;
    var t = e.cy;
    var n = e.eles;
    var r = tO(e.boundingBox ? e.boundingBox : {
      x1: 0,
      y1: 0,
      w: t.width(),
      h: t.height()
    });
    n.nodes().layoutPositions(this, e, function (e, t) {
      return {
        x: r.x1 + Math.round(Math.random() * r.w),
        y: r.y1 + Math.round(Math.random() * r.h)
      };
    });
    return this;
  };
  var oB = [{
    name: "breadthfirst",
    impl: or
  }, {
    name: "circle",
    impl: oa
  }, {
    name: "concentric",
    impl: os
  }, {
    name: "cose",
    impl: ou
  }, {
    name: "grid",
    impl: oS
  }, {
    name: "null",
    impl: oO
  }, {
    name: "preset",
    impl: oL
  }, {
    name: "random",
    impl: oR
  }];
  function oF(e) {
    this.options = e;
    this.notifications = 0;
  }
  function oz() {}
  function oV() {
    throw Error("A headless instance can not render images");
  }
  oF.prototype = {
    recalculateRenderedStyle: oz,
    notify: function () {
      this.notifications++;
    },
    init: oz,
    isHeadless: function () {
      return true;
    },
    png: oV,
    jpg: oV
  };
  var oY = {
    arrowShapeWidth: 0.3
  };
  oY.registerArrowShapes = function () {
    var e = this.arrowShapes = {};
    var t = this;
    function n(e, t, n, r, i, a, o) {
      var s = i.x - n / 2 - o;
      var l = i.x + n / 2 + o;
      var u = i.y - n / 2 - o;
      var h = i.y + n / 2 + o;
      return s <= e && e <= l && u <= t && t <= h;
    }
    function r(e, t, n, r, i) {
      var a = e * Math.cos(r) - t * Math.sin(r);
      var o = e * Math.sin(r) + t * Math.cos(r);
      return {
        x: a * n + i.x,
        y: o * n + i.y
      };
    }
    function i(e, t, n, i) {
      var a = [];
      var o = 0;
      for (; o < e.length; o += 2) {
        var s = e[o];
        var l = e[o + 1];
        a.push(r(s, l, t, n, i));
      }
      return a;
    }
    function a(e) {
      var t = [];
      var n = 0;
      for (; n < e.length; n++) {
        var r = e[n];
        t.push(r.x, r.y);
      }
      return t;
    }
    function o(e) {
      return e.pstyle("width").pfValue * e.pstyle("arrow-scale").pfValue * 2;
    }
    function s(r, s) {
      if (_(s)) {
        s = e[s];
      }
      e[r] = Z({
        name: r,
        points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
        collide: function (e, t, n, r, o, s) {
          return tK(e, t, a(i(this.points, n + s * 2, r, o)));
        },
        roughCollide: n,
        draw: function (e, n, r, a) {
          var o = i(this.points, n, r, a);
          t.arrowShapeImpl("polygon")(e, o);
        },
        spacing: function (e) {
          return 0;
        },
        gap: o
      }, s);
    }
    s("none", {
      collide: eq,
      roughCollide: eq,
      draw: eZ,
      spacing: eK,
      gap: eK
    });
    s("triangle", {
      points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
    });
    s("arrow", "triangle");
    s("triangle-backcurve", {
      points: e.triangle.points,
      controlPoint: [0, -0.15],
      roughCollide: n,
      draw: function (e, n, a, o, s) {
        var l = i(this.points, n, a, o);
        var u = this.controlPoint;
        var h = r(u[0], u[1], n, a, o);
        t.arrowShapeImpl(this.name)(e, l, h);
      },
      gap: function (e) {
        return o(e) * 0.8;
      }
    });
    s("triangle-tee", {
      points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
      pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
      collide: function (e, t, n, r, o, s, l) {
        var u = a(i(this.points, n + l * 2, r, o));
        var h = a(i(this.pointsTee, n + l * 2, r, o));
        return tK(e, t, u) || tK(e, t, h);
      },
      draw: function (e, n, r, a, o) {
        var s = i(this.points, n, r, a);
        var l = i(this.pointsTee, n, r, a);
        t.arrowShapeImpl(this.name)(e, s, l);
      }
    });
    s("circle-triangle", {
      radius: 0.15,
      pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
      collide: function (e, t, n, r, o, s, l) {
        var u = Math.pow(o.x - e, 2) + Math.pow(o.y - t, 2) <= Math.pow((n + l * 2) * this.radius, 2);
        return tK(e, t, a(i(this.points, n + l * 2, r, o))) || u;
      },
      draw: function (e, n, r, a, o) {
        var s = i(this.pointsTr, n, r, a);
        t.arrowShapeImpl(this.name)(e, s, a.x, a.y, this.radius * n);
      },
      spacing: function (e) {
        return t.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius;
      }
    });
    s("triangle-cross", {
      points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
      baseCrossLinePts: [-0.15, -0.4, -0.15, -0.4, 0.15, -0.4, 0.15, -0.4],
      crossLinePts: function (e, t) {
        var n = this.baseCrossLinePts.slice();
        var r = t / e;
        n[3] = n[3] - r;
        n[5] = n[5] - r;
        return n;
      },
      collide: function (e, t, n, r, o, s, l) {
        var u = a(i(this.points, n + l * 2, r, o));
        var h = a(i(this.crossLinePts(n, s), n + l * 2, r, o));
        return tK(e, t, u) || tK(e, t, h);
      },
      draw: function (e, n, r, a, o) {
        var s = i(this.points, n, r, a);
        var l = i(this.crossLinePts(n, o), n, r, a);
        t.arrowShapeImpl(this.name)(e, s, l);
      }
    });
    s("vee", {
      points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
      gap: function (e) {
        return o(e) * 0.525;
      }
    });
    s("circle", {
      radius: 0.15,
      collide: function (e, t, n, r, i, a, o) {
        return Math.pow(i.x - e, 2) + Math.pow(i.y - t, 2) <= Math.pow((n + o * 2) * this.radius, 2);
      },
      draw: function (e, n, r, i, a) {
        t.arrowShapeImpl(this.name)(e, i.x, i.y, this.radius * n);
      },
      spacing: function (e) {
        return t.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius;
      }
    });
    s("tee", {
      points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
      spacing: function (e) {
        return 1;
      },
      gap: function (e) {
        return 1;
      }
    });
    s("square", {
      points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
    });
    s("diamond", {
      points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
      gap: function (e) {
        return e.pstyle("width").pfValue * e.pstyle("arrow-scale").value;
      }
    });
    s("chevron", {
      points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
      gap: function (e) {
        return e.pstyle("width").pfValue * 0.95 * e.pstyle("arrow-scale").value;
      }
    });
  };
  var oG = {};
  oG.projectIntoViewport = function (e, t) {
    var n = this.cy;
    var r = this.findContainerClientCoords();
    var i = r[0];
    var a = r[1];
    var o = r[4];
    var s = n.pan();
    var l = n.zoom();
    return [((e - i) / o - s.x) / l, ((t - a) / o - s.y) / l];
  };
  oG.findContainerClientCoords = function () {
    if (this.containerBB) {
      return this.containerBB;
    }
    var e = this.container;
    var t = e.getBoundingClientRect();
    var n = this.cy.window().getComputedStyle(e);
    function r(e) {
      return parseFloat(n.getPropertyValue(e));
    }
    var i = {
      left: r("padding-left"),
      right: r("padding-right"),
      top: r("padding-top"),
      bottom: r("padding-bottom")
    };
    var a = {
      left: r("border-left-width"),
      right: r("border-right-width"),
      top: r("border-top-width"),
      bottom: r("border-bottom-width")
    };
    var o = e.clientWidth;
    var s = e.clientHeight;
    var l = i.left + i.right;
    var u = i.top + i.bottom;
    var h = a.left + a.right;
    var c = t.width / (o + h);
    var d = t.left + i.left + a.left;
    var p = t.top + i.top + a.top;
    return this.containerBB = [d, p, o - l, s - u, c];
  };
  oG.invalidateContainerClientCoordsCache = function () {
    this.containerBB = null;
  };
  oG.findNearestElement = function (e, t, n, r) {
    return this.findNearestElements(e, t, n, r)[0];
  };
  oG.findNearestElements = function (e, t, n, r) {
    var i;
    var a;
    var o = this;
    var s = this;
    var l = s.getCachedZSortedEles();
    var u = [];
    var h = s.cy.zoom();
    var c = s.cy.hasCompoundNodes();
    var d = (r ? 24 : 8) / h;
    var p = (r ? 8 : 2) / h;
    var g = (r ? 8 : 2) / h;
    var f = Infinity;
    function v(e, t) {
      if (e.isNode()) {
        if (a) {
          return;
        }
        a = e;
        u.push(e);
      }
      if (e.isEdge() && (t == null || t < f)) {
        if (i) {
          if (i.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value && i.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value) {
            for (var n = 0; n < u.length; n++) {
              if (u[n].isEdge()) {
                u[n] = e;
                i = e;
                f = t ?? f;
                break;
              }
            }
          }
        } else {
          u.push(e);
          i = e;
          f = t ?? f;
        }
      }
    }
    function y(n) {
      var r = n.outerWidth() + p * 2;
      var i = n.outerHeight() + p * 2;
      var a = r / 2;
      var l = i / 2;
      var u = n.position();
      var h = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue;
      var c = n._private.rscratch;
      if (u.x - a <= e && e <= u.x + a && u.y - l <= t && t <= u.y + l && s.nodeShapes[o.getNodeShape(n)].checkPoint(e, t, 0, r, i, u.x, u.y, h, c)) {
        v(n, 0);
        return true;
      }
    }
    if (n) {
      l = l.interactive;
    }
    function b(n, r) {
      var i;
      var a = n._private;
      i = r ? r + "-" : "";
      n.boundingBox();
      var o = a.labelBounds[r || "main"];
      var s = n.pstyle(i + "label").value;
      if (n.pstyle("text-events").strValue === "yes" && s) {
        var l = e8(a.rscratch, "labelX", r);
        var u = e8(a.rscratch, "labelY", r);
        var h = e8(a.rscratch, "labelAngle", r);
        var c = n.pstyle(i + "text-margin-x").pfValue;
        var d = n.pstyle(i + "text-margin-y").pfValue;
        var p = o.x1 - g - c;
        var f = o.x2 + g - c;
        var y = o.y1 - g - d;
        var b = o.y2 + g - d;
        if (h) {
          var x = Math.cos(h);
          var w = Math.sin(h);
          function E(e, t) {
            return {
              x: (e -= l) * x - (t -= u) * w + l,
              y: e * w + t * x + u
            };
          }
          var T = E(p, y);
          var C = E(p, b);
          var N = E(f, y);
          var _ = E(f, b);
          if (tK(e, t, [T.x + c, T.y + d, N.x + c, N.y + d, _.x + c, _.y + d, C.x + c, C.y + d])) {
            v(n);
            return true;
          }
        } else if (tV(o, e, t)) {
          v(n);
          return true;
        }
      }
    }
    for (var x = l.length - 1; x >= 0; x--) {
      var w = l[x];
      if (w.isNode()) {
        if (!y(w)) {
          b(w);
        }
      } else if (!function (n) {
        var r;
        var i = n._private;
        var a = i.rscratch;
        var l = n.pstyle("width").pfValue;
        var h = n.pstyle("arrow-scale").value;
        var p = l / 2 + d;
        var g = p * p;
        var f = p * 2;
        var b = i.source;
        var x = i.target;
        if (a.edgeType === "segments" || a.edgeType === "straight" || a.edgeType === "haystack") {
          var w = a.allpts;
          var E = 0;
          for (; E + 3 < w.length; E += 2) {
            if (tX(e, t, w[E], w[E + 1], w[E + 2], w[E + 3], f) && g > (r = tq(e, t, w[E], w[E + 1], w[E + 2], w[E + 3]))) {
              v(n, r);
              return true;
            }
          }
        } else if (a.edgeType === "bezier" || a.edgeType === "multibezier" || a.edgeType === "self" || a.edgeType === "compound") {
          var w = a.allpts;
          var E = 0;
          for (; E + 5 < a.allpts.length; E += 4) {
            if (tH(e, t, w[E], w[E + 1], w[E + 2], w[E + 3], w[E + 4], w[E + 5], f) && g > (r = tj(e, t, w[E], w[E + 1], w[E + 2], w[E + 3], w[E + 4], w[E + 5]))) {
              v(n, r);
              return true;
            }
          }
        }
        var b = b || i.source;
        var x = x || i.target;
        var T = o.getArrowWidth(l, h);
        var C = [{
          name: "source",
          x: a.arrowStartX,
          y: a.arrowStartY,
          angle: a.srcArrowAngle
        }, {
          name: "target",
          x: a.arrowEndX,
          y: a.arrowEndY,
          angle: a.tgtArrowAngle
        }, {
          name: "mid-source",
          x: a.midX,
          y: a.midY,
          angle: a.midsrcArrowAngle
        }, {
          name: "mid-target",
          x: a.midX,
          y: a.midY,
          angle: a.midtgtArrowAngle
        }];
        var E = 0;
        for (; E < C.length; E++) {
          var N = C[E];
          var _ = s.arrowShapes[n.pstyle(N.name + "-arrow-shape").value];
          var D = n.pstyle("width").pfValue;
          if (_.roughCollide(e, t, T, N.angle, {
            x: N.x,
            y: N.y
          }, D, d) && _.collide(e, t, T, N.angle, {
            x: N.x,
            y: N.y
          }, D, d)) {
            v(n);
            return true;
          }
        }
        if (c && u.length > 0) {
          y(b);
          y(x);
        }
      }(w) && !b(w) && !b(w, "source")) {
        b(w, "target");
      }
    }
    return u;
  };
  oG.getAllInBox = function (e, t, n, r) {
    var i = this.getCachedZSortedEles().interactive;
    var a = [];
    var o = Math.min(e, n);
    var s = Math.max(e, n);
    var l = Math.min(t, r);
    var u = Math.max(t, r);
    e = o;
    n = s;
    var h = tO({
      x1: e,
      y1: t = l,
      x2: n,
      y2: r = u
    });
    var c = 0;
    for (; c < i.length; c++) {
      var d = i[c];
      if (d.isNode()) {
        var p = d.boundingBox({
          includeNodes: true,
          includeEdges: false,
          includeLabels: false
        });
        if (tz(h, p) && !tY(p, h)) {
          a.push(d);
        }
      } else {
        var g = d._private;
        var f = g.rscratch;
        if (f.startX != null && f.startY != null && !tV(h, f.startX, f.startY) || f.endX != null && f.endY != null && !tV(h, f.endX, f.endY)) {
          continue;
        }
        if (f.edgeType === "bezier" || f.edgeType === "multibezier" || f.edgeType === "self" || f.edgeType === "compound" || f.edgeType === "segments" || f.edgeType === "haystack") {
          var v;
          var y = g.rstyle.bezierPts || g.rstyle.linePts || g.rstyle.haystackPts;
          var b = true;
          var x = 0;
          for (; x < y.length; x++) {
            if (!tV(h, (v = y[x]).x, v.y)) {
              b = false;
              break;
            }
          }
          if (b) {
            a.push(d);
          }
        } else if (f.edgeType === "haystack" || f.edgeType === "straight") {
          a.push(d);
        }
      }
    }
    return a;
  };
  var oX = {};
  oX.calculateArrowAngles = function (e) {
    var t = e._private.rscratch;
    var n = t.edgeType === "haystack";
    var r = t.edgeType === "bezier";
    var i = t.edgeType === "multibezier";
    var a = t.edgeType === "segments";
    var o = t.edgeType === "compound";
    var s = t.edgeType === "self";
    if (n) {
      y = t.haystackPts[0];
      b = t.haystackPts[1];
      x = t.haystackPts[2];
      w = t.haystackPts[3];
    } else {
      y = t.arrowStartX;
      b = t.arrowStartY;
      x = t.arrowEndX;
      w = t.arrowEndY;
    }
    c = t.midX;
    d = t.midY;
    if (a) {
      f = y - t.segpts[0];
      v = b - t.segpts[1];
    } else if (i || o || s || r) {
      var l = t.allpts;
      var u = tM(l[0], l[2], l[4], 0.1);
      var h = tM(l[1], l[3], l[5], 0.1);
      f = y - u;
      v = b - h;
    } else {
      f = y - c;
      v = b - d;
    }
    t.srcArrowAngle = tE(f, v);
    var c = t.midX;
    var d = t.midY;
    if (n) {
      c = (y + x) / 2;
      d = (b + w) / 2;
    }
    f = x - y;
    v = w - b;
    if (a) {
      var l = t.allpts;
      if (l.length / 2 % 2 == 0) {
        var p = l.length / 2;
        var g = p - 2;
        f = l[p] - l[g];
        v = l[p + 1] - l[g + 1];
      } else if (t.isRound) {
        f = t.midVector[1];
        v = -t.midVector[0];
      } else {
        var p = l.length / 2 - 1;
        var g = p - 2;
        f = l[p] - l[g];
        v = l[p + 1] - l[g + 1];
      }
    } else if (i || o || s) {
      var f;
      var v;
      var y;
      var b;
      var x;
      var w;
      var c;
      var d;
      var E;
      var T;
      var C;
      var N;
      var l = t.allpts;
      if (t.ctrlpts.length / 2 % 2 == 0) {
        var _ = l.length / 2 - 1;
        var D = _ + 2;
        var M = D + 2;
        E = tM(l[_], l[D], l[M], 0);
        T = tM(l[_ + 1], l[D + 1], l[M + 1], 0);
        C = tM(l[_], l[D], l[M], 0.0001);
        N = tM(l[_ + 1], l[D + 1], l[M + 1], 0.0001);
      } else {
        var D = l.length / 2 - 1;
        var _ = D - 2;
        var M = D + 2;
        E = tM(l[_], l[D], l[M], 0.4999);
        T = tM(l[_ + 1], l[D + 1], l[M + 1], 0.4999);
        C = tM(l[_], l[D], l[M], 0.5);
        N = tM(l[_ + 1], l[D + 1], l[M + 1], 0.5);
      }
      f = C - E;
      v = N - T;
    }
    t.midtgtArrowAngle = tE(f, v);
    t.midDispX = f;
    t.midDispY = v;
    f *= -1;
    v *= -1;
    if (a) {
      var l = t.allpts;
      if (l.length / 2 % 2 == 0) ;else if (!t.isRound) {
        var p = l.length / 2 - 1;
        var A = p + 2;
        f = -(l[A] - l[p]);
        v = -(l[A + 1] - l[p + 1]);
      }
    }
    t.midsrcArrowAngle = tE(f, v);
    if (a) {
      f = x - t.segpts[t.segpts.length - 2];
      v = w - t.segpts[t.segpts.length - 1];
    } else if (i || o || s || r) {
      var l = t.allpts;
      var S = l.length;
      var u = tM(l[S - 6], l[S - 4], l[S - 2], 0.9);
      var h = tM(l[S - 5], l[S - 3], l[S - 1], 0.9);
      f = x - u;
      v = w - h;
    } else {
      f = x - c;
      v = w - d;
    }
    t.tgtArrowAngle = tE(f, v);
  };
  oX.getArrowWidth = oX.getArrowHeight = function (e, t) {
    var n = this.arrowWidthCache = this.arrowWidthCache || {};
    var r = n[e + ", " + t];
    if (!r) {
      r = Math.max(Math.pow(e * 13.37, 0.9), 29) * t;
      n[e + ", " + t] = r;
    }
    return r;
  };
  var oH;
  var oU;
  var oW;
  var oj;
  var oq;
  var oK;
  var oZ;
  var o$;
  var oQ;
  var oJ;
  var o0;
  var o1;
  var o2;
  var o5;
  var o3;
  var o4;
  var o9;
  var o6;
  var o8;
  var o7;
  var se;
  var st;
  var sn;
  var sr;
  var si;
  var sa;
  var so;
  var ss = {};
  var sl = {};
  function su(e, t, n) {
    n.x = t.x - e.x;
    n.y = t.y - e.y;
    n.len = Math.sqrt(n.x * n.x + n.y * n.y);
    n.nx = n.x / n.len;
    n.ny = n.y / n.len;
    n.ang = Math.atan2(n.ny, n.nx);
  }
  function sh(e, t) {
    t.x = e.x * -1;
    t.y = e.y * -1;
    t.nx = e.nx * -1;
    t.ny = e.ny * -1;
    t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
  }
  function sc(e, t, n, r, i) {
    if (e !== v) {
      su(t, e, ss);
    } else {
      sh(sl, ss);
    }
    su(t, n, sl);
    o6 = ss.nx * sl.ny - ss.ny * sl.nx;
    o8 = ss.nx * sl.nx - -(ss.ny * sl.ny);
    if (Math.abs(st = Math.asin(Math.max(-1, Math.min(1, o6)))) < 0.000001) {
      o4 = t.x;
      o9 = t.y;
      sr = sa = 0;
      return;
    }
    o7 = 1;
    se = false;
    if (o8 < 0) {
      if (st < 0) {
        st = Math.PI + st;
      } else {
        st = Math.PI - st;
        o7 = -1;
        se = true;
      }
    } else if (st > 0) {
      o7 = -1;
      se = true;
    }
    sa = t.radius !== undefined ? t.radius : r;
    sn = st / 2;
    so = Math.min(ss.len / 2, sl.len / 2);
    sr = i ? (si = Math.abs(Math.cos(sn) * sa / Math.sin(sn))) > so ? Math.abs((si = so) * Math.sin(sn) / Math.cos(sn)) : sa : Math.abs((si = Math.min(so, sa)) * Math.sin(sn) / Math.cos(sn));
    g = t.x + sl.nx * si;
    f = t.y + sl.ny * si;
    o4 = g - sl.ny * sr * o7;
    o9 = f + sl.nx * sr * o7;
    d = t.x + ss.nx * si;
    p = t.y + ss.ny * si;
    v = t;
  }
  function sd(e, t) {
    if (t.radius === 0) {
      e.lineTo(t.cx, t.cy);
    } else {
      e.arc(t.cx, t.cy, t.radius, t.startAngle, t.endAngle, t.counterClockwise);
    }
  }
  function sp(e, t, n, r) {
    var i = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    if (r === 0 || t.radius === 0) {
      return {
        cx: t.x,
        cy: t.y,
        radius: 0,
        startX: t.x,
        startY: t.y,
        stopX: t.x,
        stopY: t.y,
        startAngle: undefined,
        endAngle: undefined,
        counterClockwise: undefined
      };
    } else {
      sc(e, t, n, r, i);
      return {
        cx: o4,
        cy: o9,
        radius: sr,
        startX: d,
        startY: p,
        stopX: g,
        stopY: f,
        startAngle: ss.ang + Math.PI / 2 * o7,
        endAngle: sl.ang - Math.PI / 2 * o7,
        counterClockwise: se
      };
    }
  }
  var sg = {};
  function sf(e) {
    var t = [];
    if (e != null) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n];
        var i = e[n + 1];
        t.push({
          x: r,
          y: i
        });
      }
      return t;
    }
  }
  sg.findMidptPtsEtc = function (e, t) {
    var n;
    var r = t.posPts;
    var i = t.intersectionPts;
    var a = t.vectorNormInverse;
    var o = e.pstyle("source-endpoint");
    var s = e.pstyle("target-endpoint");
    var u = o.units != null && s.units != null;
    switch (e.pstyle("edge-distances").value) {
      case "node-position":
        n = r;
        break;
      case "intersection":
        n = i;
        break;
      case "endpoints":
        if (u) {
          var h;
          var c;
          var d;
          var p = l(this.manualEndptToPx(e.source()[0], o), 2);
          var g = p[0];
          var f = p[1];
          var v = l(this.manualEndptToPx(e.target()[0], s), 2);
          var y = v[0];
          var b = v[1];
          h = b - f;
          d = Math.sqrt((c = y - g) * c + h * h);
          a = {
            x: -h / d,
            y: c / d
          };
          n = {
            x1: g,
            y1: f,
            x2: y,
            y2: b
          };
        } else {
          eJ(`Edge ${e.id()} has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).`);
          n = i;
        }
    }
    return {
      midptPts: n,
      vectorNormInverse: a
    };
  };
  sg.findHaystackPoints = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      var r = n._private;
      var i = r.rscratch;
      if (!i.haystack) {
        var a = Math.random() * 2 * Math.PI;
        i.source = {
          x: Math.cos(a),
          y: Math.sin(a)
        };
        a = Math.random() * 2 * Math.PI;
        i.target = {
          x: Math.cos(a),
          y: Math.sin(a)
        };
      }
      var o = r.source;
      var s = r.target;
      var l = o.position();
      var u = s.position();
      var h = o.width();
      var c = s.width();
      var d = o.height();
      var p = s.height();
      var g = n.pstyle("haystack-radius").value / 2;
      i.haystackPts = i.allpts = [i.source.x * h * g + l.x, i.source.y * d * g + l.y, i.target.x * c * g + u.x, i.target.y * p * g + u.y];
      i.midX = (i.allpts[0] + i.allpts[2]) / 2;
      i.midY = (i.allpts[1] + i.allpts[3]) / 2;
      i.edgeType = "haystack";
      i.haystack = true;
      this.storeEdgeProjections(n);
      this.calculateArrowAngles(n);
      this.recalculateEdgeLabelProjections(n);
      this.calculateLabelAngles(n);
    }
  };
  sg.findSegmentsPoints = function (e, t) {
    var n = e._private.rscratch;
    var r = e.pstyle("segment-weights");
    var i = e.pstyle("segment-distances");
    var a = e.pstyle("segment-radii");
    var o = e.pstyle("radius-type");
    var s = Math.min(r.pfValue.length, i.pfValue.length);
    var l = a.pfValue[a.pfValue.length - 1];
    var u = o.pfValue[o.pfValue.length - 1];
    n.edgeType = "segments";
    n.segpts = [];
    n.radii = [];
    n.isArcRadius = [];
    for (var h = 0; h < s; h++) {
      var c = r.pfValue[h];
      var d = i.pfValue[h];
      var p = 1 - c;
      var g = this.findMidptPtsEtc(e, t);
      var f = g.midptPts;
      var v = g.vectorNormInverse;
      var y = {
        x: f.x1 * p + f.x2 * c,
        y: f.y1 * p + f.y2 * c
      };
      n.segpts.push(y.x + v.x * d, y.y + v.y * d);
      n.radii.push(a.pfValue[h] !== undefined ? a.pfValue[h] : l);
      n.isArcRadius.push((o.pfValue[h] !== undefined ? o.pfValue[h] : u) === "arc-radius");
    }
  };
  sg.findLoopPoints = function (e, t, n, r) {
    var i = e._private.rscratch;
    var a = t.dirCounts;
    var o = t.srcPos;
    var s = e.pstyle("control-point-distances");
    var l = s ? s.pfValue[0] : undefined;
    var u = e.pstyle("loop-direction").pfValue;
    var h = e.pstyle("loop-sweep").pfValue;
    var c = e.pstyle("control-point-step-size").pfValue;
    i.edgeType = "self";
    var d = n;
    var p = c;
    if (r) {
      d = 0;
      p = l;
    }
    var g = u - Math.PI / 2;
    var f = g - h / 2;
    var v = g + h / 2;
    var y = String(u + "_" + h);
    d = a[y] === undefined ? a[y] = 0 : ++a[y];
    i.ctrlpts = [o.x + Math.cos(f) * 1.4 * p * (d / 3 + 1), o.y + Math.sin(f) * 1.4 * p * (d / 3 + 1), o.x + Math.cos(v) * 1.4 * p * (d / 3 + 1), o.y + Math.sin(v) * 1.4 * p * (d / 3 + 1)];
  };
  sg.findCompoundLoopPoints = function (e, t, n, r) {
    var i = e._private.rscratch;
    i.edgeType = "compound";
    var a = t.srcPos;
    var o = t.tgtPos;
    var s = t.srcW;
    var l = t.srcH;
    var u = t.tgtW;
    var h = t.tgtH;
    var c = e.pstyle("control-point-step-size").pfValue;
    var d = e.pstyle("control-point-distances");
    var p = d ? d.pfValue[0] : undefined;
    var g = n;
    var f = c;
    if (r) {
      g = 0;
      f = p;
    }
    var v = {
      x: a.x - s / 2,
      y: a.y - l / 2
    };
    var y = {
      x: o.x - u / 2,
      y: o.y - h / 2
    };
    var b = {
      x: Math.min(v.x, y.x),
      y: Math.min(v.y, y.y)
    };
    var x = Math.max(0.5, Math.log(s * 0.01));
    var w = Math.max(0.5, Math.log(u * 0.01));
    i.ctrlpts = [b.x, b.y - f * 1.7995514309304248 * (g / 3 + 1) * x, b.x - f * 1.7995514309304248 * (g / 3 + 1) * w, b.y];
  };
  sg.findStraightEdgePoints = function (e) {
    e._private.rscratch.edgeType = "straight";
  };
  sg.findBezierPoints = function (e, t, n, r, i) {
    var a = e._private.rscratch;
    var o = e.pstyle("control-point-step-size").pfValue;
    var s = e.pstyle("control-point-distances");
    var l = e.pstyle("control-point-weights");
    var u = s && l ? Math.min(s.value.length, l.value.length) : 1;
    var h = s ? s.pfValue[0] : undefined;
    var c = l.value[0];
    a.edgeType = r ? "multibezier" : "bezier";
    a.ctrlpts = [];
    for (var d = 0; d < u; d++) {
      var p = (0.5 - t.eles.length / 2 + n) * o * (i ? -1 : 1);
      var g = undefined;
      var f = tC(p);
      if (r) {
        h = s ? s.pfValue[d] : o;
        c = l.value[d];
      }
      var v = (g = r ? h : h !== undefined ? f * h : undefined) !== undefined ? g : p;
      var y = 1 - c;
      var b = c;
      var x = this.findMidptPtsEtc(e, t);
      var w = x.midptPts;
      var E = x.vectorNormInverse;
      var T = {
        x: w.x1 * y + w.x2 * b,
        y: w.y1 * y + w.y2 * b
      };
      a.ctrlpts.push(T.x + E.x * v, T.y + E.y * v);
    }
  };
  sg.findTaxiPoints = function (e, t) {
    var n;
    var r = e._private.rscratch;
    r.edgeType = "segments";
    var i = "vertical";
    var a = "horizontal";
    var o = "leftward";
    var s = "rightward";
    var l = "downward";
    var u = "upward";
    var h = t.posPts;
    var c = t.srcW;
    var d = t.srcH;
    var p = t.tgtW;
    var g = t.tgtH;
    var f = e.pstyle("edge-distances").value !== "node-position";
    var v = e.pstyle("taxi-direction").value;
    var y = v;
    var b = e.pstyle("taxi-turn");
    var x = b.units === "%";
    var w = b.pfValue;
    var E = e.pstyle("taxi-turn-min-distance").pfValue;
    var T = h.x2 - h.x1;
    var C = h.y2 - h.y1;
    function N(e, t) {
      if (e > 0) {
        return Math.max(e - t, 0);
      } else {
        return Math.min(e + t, 0);
      }
    }
    var _ = N(T, f ? (c + p) / 2 : 0);
    var D = N(C, f ? (d + g) / 2 : 0);
    var M = false;
    if (y === "auto") {
      v = Math.abs(_) > Math.abs(D) ? a : i;
    } else if (y === u || y === l) {
      v = i;
      M = true;
    } else if (y === o || y === s) {
      v = a;
      M = true;
    }
    var A = v === i;
    var S = A ? D : _;
    var P = A ? C : T;
    var O = tC(P);
    var I = false;
    if ((!M || !x && !(w < 0)) && (y === l && P < 0 || y === u && P > 0 || y === o && P > 0 || y === s && P < 0)) {
      O *= -1;
      S = O * Math.abs(S);
      I = true;
    }
    function L(e) {
      return Math.abs(e) < E || Math.abs(e) >= Math.abs(S);
    }
    var k = L(n = x ? (w < 0 ? 1 + w : w) * S : (w < 0 ? S : 0) + w * O);
    var R = L(Math.abs(S) - Math.abs(n));
    if ((k || R) && !I) {
      if (A) {
        var B = Math.abs(T) <= p / 2;
        if (Math.abs(P) <= d / 2) {
          var F = (h.x1 + h.x2) / 2;
          var z = h.y1;
          var V = h.y2;
          r.segpts = [F, z, F, V];
        } else if (B) {
          var Y = (h.y1 + h.y2) / 2;
          var G = h.x1;
          var X = h.x2;
          r.segpts = [G, Y, X, Y];
        } else {
          r.segpts = [h.x1, h.y2];
        }
      } else {
        var H = Math.abs(C) <= g / 2;
        if (Math.abs(P) <= c / 2) {
          var U = (h.y1 + h.y2) / 2;
          var W = h.x1;
          var j = h.x2;
          r.segpts = [W, U, j, U];
        } else if (H) {
          var q = (h.x1 + h.x2) / 2;
          var K = h.y1;
          var Z = h.y2;
          r.segpts = [q, K, q, Z];
        } else {
          r.segpts = [h.x2, h.y1];
        }
      }
    } else if (A) {
      var $ = h.y1 + n + (f ? d / 2 * O : 0);
      var Q = h.x1;
      var J = h.x2;
      r.segpts = [Q, $, J, $];
    } else {
      var ee = h.x1 + n + (f ? c / 2 * O : 0);
      var et = h.y1;
      var en = h.y2;
      r.segpts = [ee, et, ee, en];
    }
    if (r.isRound) {
      var er = e.pstyle("taxi-radius").value;
      var ei = e.pstyle("radius-type").value[0] === "arc-radius";
      r.radii = Array(r.segpts.length / 2).fill(er);
      r.isArcRadius = Array(r.segpts.length / 2).fill(ei);
    }
  };
  sg.tryToCorrectInvalidPoints = function (e, t) {
    var n = e._private.rscratch;
    if (n.edgeType === "bezier") {
      var r = t.srcPos;
      var i = t.tgtPos;
      var a = t.srcW;
      var o = t.srcH;
      var s = t.tgtW;
      var l = t.tgtH;
      var u = t.srcShape;
      var h = t.tgtShape;
      var c = t.srcCornerRadius;
      var d = t.tgtCornerRadius;
      var p = t.srcRs;
      var g = t.tgtRs;
      var f = !S(n.startX) || !S(n.startY);
      var v = !S(n.arrowStartX) || !S(n.arrowStartY);
      var y = !S(n.endX) || !S(n.endY);
      var b = !S(n.arrowEndX) || !S(n.arrowEndY);
      var x = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth * 3;
      var w = tN({
        x: n.ctrlpts[0],
        y: n.ctrlpts[1]
      }, {
        x: n.startX,
        y: n.startY
      });
      var E = w < x;
      var T = tN({
        x: n.ctrlpts[0],
        y: n.ctrlpts[1]
      }, {
        x: n.endX,
        y: n.endY
      });
      var C = T < x;
      var N = false;
      if (f || v || E) {
        N = true;
        var _ = {
          x: n.ctrlpts[0] - r.x,
          y: n.ctrlpts[1] - r.y
        };
        var D = Math.sqrt(_.x * _.x + _.y * _.y);
        var M = {
          x: _.x / D,
          y: _.y / D
        };
        var A = Math.max(a, o);
        var P = {
          x: n.ctrlpts[0] + M.x * 2 * A,
          y: n.ctrlpts[1] + M.y * 2 * A
        };
        var O = u.intersectLine(r.x, r.y, a, o, P.x, P.y, 0, c, p);
        if (E) {
          n.ctrlpts[0] = n.ctrlpts[0] + M.x * (x - w);
          n.ctrlpts[1] = n.ctrlpts[1] + M.y * (x - w);
        } else {
          n.ctrlpts[0] = O[0] + M.x * x;
          n.ctrlpts[1] = O[1] + M.y * x;
        }
      }
      if (y || b || C) {
        N = true;
        var I = {
          x: n.ctrlpts[0] - i.x,
          y: n.ctrlpts[1] - i.y
        };
        var L = Math.sqrt(I.x * I.x + I.y * I.y);
        var k = {
          x: I.x / L,
          y: I.y / L
        };
        var R = Math.max(a, o);
        var B = {
          x: n.ctrlpts[0] + k.x * 2 * R,
          y: n.ctrlpts[1] + k.y * 2 * R
        };
        var F = h.intersectLine(i.x, i.y, s, l, B.x, B.y, 0, d, g);
        if (C) {
          n.ctrlpts[0] = n.ctrlpts[0] + k.x * (x - T);
          n.ctrlpts[1] = n.ctrlpts[1] + k.y * (x - T);
        } else {
          n.ctrlpts[0] = F[0] + k.x * x;
          n.ctrlpts[1] = F[1] + k.y * x;
        }
      }
      if (N) {
        this.findEndpoints(e);
      }
    }
  };
  sg.storeAllpts = function (e) {
    var t = e._private.rscratch;
    if (t.edgeType === "multibezier" || t.edgeType === "bezier" || t.edgeType === "self" || t.edgeType === "compound") {
      t.allpts = [];
      t.allpts.push(t.startX, t.startY);
      var n;
      var r = 0;
      for (; r + 1 < t.ctrlpts.length; r += 2) {
        t.allpts.push(t.ctrlpts[r], t.ctrlpts[r + 1]);
        if (r + 3 < t.ctrlpts.length) {
          t.allpts.push((t.ctrlpts[r] + t.ctrlpts[r + 2]) / 2, (t.ctrlpts[r + 1] + t.ctrlpts[r + 3]) / 2);
        }
      }
      t.allpts.push(t.endX, t.endY);
      if (t.ctrlpts.length / 2 % 2 == 0) {
        n = t.allpts.length / 2 - 1;
        t.midX = t.allpts[n];
        t.midY = t.allpts[n + 1];
      } else {
        n = t.allpts.length / 2 - 3;
        t.midX = tM(t.allpts[n], t.allpts[n + 2], t.allpts[n + 4], 0.5);
        t.midY = tM(t.allpts[n + 1], t.allpts[n + 3], t.allpts[n + 5], 0.5);
      }
    } else if (t.edgeType === "straight") {
      t.allpts = [t.startX, t.startY, t.endX, t.endY];
      t.midX = (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4;
      t.midY = (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4;
    } else if (t.edgeType === "segments") {
      t.allpts = [];
      t.allpts.push(t.startX, t.startY);
      t.allpts.push.apply(t.allpts, t.segpts);
      t.allpts.push(t.endX, t.endY);
      if (t.isRound) {
        t.roundCorners = [];
        for (var i = 2; i + 3 < t.allpts.length; i += 2) {
          var a = t.radii[i / 2 - 1];
          var o = t.isArcRadius[i / 2 - 1];
          t.roundCorners.push(sp({
            x: t.allpts[i - 2],
            y: t.allpts[i - 1]
          }, {
            x: t.allpts[i],
            y: t.allpts[i + 1],
            radius: a
          }, {
            x: t.allpts[i + 2],
            y: t.allpts[i + 3]
          }, a, o));
        }
      }
      if (t.segpts.length % 4 == 0) {
        var s = t.segpts.length / 2;
        var l = s - 2;
        t.midX = (t.segpts[l] + t.segpts[s]) / 2;
        t.midY = (t.segpts[l + 1] + t.segpts[s + 1]) / 2;
      } else {
        var u = t.segpts.length / 2 - 1;
        if (t.isRound) {
          var h = {
            x: t.segpts[u],
            y: t.segpts[u + 1]
          };
          var c = t.roundCorners[u / 2];
          var d = [h.x - c.cx, h.y - c.cy];
          var p = c.radius / Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
          d = d.map(function (e) {
            return e * p;
          });
          t.midX = c.cx + d[0];
          t.midY = c.cy + d[1];
          t.midVector = d;
        } else {
          t.midX = t.segpts[u];
          t.midY = t.segpts[u + 1];
        }
      }
    }
  };
  sg.checkForInvalidEdgeWarning = function (e) {
    var t = e[0]._private.rscratch;
    if (t.nodesOverlap || S(t.startX) && S(t.startY) && S(t.endX) && S(t.endY)) {
      t.loggedErr = false;
    } else if (!t.loggedErr) {
      t.loggedErr = true;
      eJ("Edge `" + e.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap.");
    }
  };
  sg.findEdgeControlPoints = function (e) {
    var t = this;
    if (e && e.length !== 0) {
      var n = this;
      var r = n.cy.hasCompoundNodes();
      var i = {
        map: new tt(),
        get: function (e) {
          var t = this.map.get(e[0]);
          if (t != null) {
            return t.get(e[1]);
          } else {
            return null;
          }
        },
        set: function (e, t) {
          var n = this.map.get(e[0]);
          if (n == null) {
            n = new tt();
            this.map.set(e[0], n);
          }
          n.set(e[1], t);
        }
      };
      var a = [];
      var o = [];
      var s = 0;
      for (; s < e.length; s++) {
        var l = e[s];
        var u = l._private;
        var h = l.pstyle("curve-style").value;
        if (!l.removed() && l.takesUpSpace()) {
          if (h === "haystack") {
            o.push(l);
            continue;
          }
          var c = h === "unbundled-bezier" || h.endsWith("segments") || h === "straight" || h === "straight-triangle" || h.endsWith("taxi");
          var d = h === "unbundled-bezier" || h === "bezier";
          var p = u.source;
          var g = u.target;
          var f = [p.poolIndex(), g.poolIndex()].sort();
          var v = i.get(f);
          if (v == null) {
            v = {
              eles: []
            };
            i.set(f, v);
            a.push(f);
          }
          v.eles.push(l);
          if (c) {
            v.hasUnbundled = true;
          }
          if (d) {
            v.hasBezier = true;
          }
        }
      }
      for (var y = 0; y < a.length; y++) {
        (function (e) {
          var o = a[e];
          var s = i.get(o);
          var l = undefined;
          if (!s.hasUnbundled) {
            var u = s.eles[0].parallelEdges().filter(function (e) {
              return e.isBundledBezier();
            });
            e9(s.eles);
            u.forEach(function (e) {
              return s.eles.push(e);
            });
            s.eles.sort(function (e, t) {
              return e.poolIndex() - t.poolIndex();
            });
          }
          var h = s.eles[0];
          var c = h.source();
          var d = h.target();
          if (c.poolIndex() > d.poolIndex()) {
            var p = c;
            c = d;
            d = p;
          }
          var g = s.srcPos = c.position();
          var f = s.tgtPos = d.position();
          var v = s.srcW = c.outerWidth();
          var y = s.srcH = c.outerHeight();
          var b = s.tgtW = d.outerWidth();
          var x = s.tgtH = d.outerHeight();
          var w = s.srcShape = n.nodeShapes[t.getNodeShape(c)];
          var E = s.tgtShape = n.nodeShapes[t.getNodeShape(d)];
          var T = s.srcCornerRadius = c.pstyle("corner-radius").value === "auto" ? "auto" : c.pstyle("corner-radius").pfValue;
          var C = s.tgtCornerRadius = d.pstyle("corner-radius").value === "auto" ? "auto" : d.pstyle("corner-radius").pfValue;
          var N = s.tgtRs = d._private.rscratch;
          var _ = s.srcRs = c._private.rscratch;
          s.dirCounts = {
            north: 0,
            west: 0,
            south: 0,
            east: 0,
            northwest: 0,
            southwest: 0,
            northeast: 0,
            southeast: 0
          };
          for (var D = 0; D < s.eles.length; D++) {
            var M = s.eles[D];
            var A = M[0]._private.rscratch;
            var P = M.pstyle("curve-style").value;
            var O = P === "unbundled-bezier" || P.endsWith("segments") || P.endsWith("taxi");
            var I = !c.same(M.source());
            if (!s.calculatedIntersection && c !== d && (s.hasBezier || s.hasUnbundled)) {
              s.calculatedIntersection = true;
              var L = w.intersectLine(g.x, g.y, v, y, f.x, f.y, 0, T, _);
              var k = s.srcIntn = L;
              var R = E.intersectLine(f.x, f.y, b, x, g.x, g.y, 0, C, N);
              var B = s.tgtIntn = R;
              var F = s.intersectionPts = {
                x1: L[0],
                x2: R[0],
                y1: L[1],
                y2: R[1]
              };
              var z = s.posPts = {
                x1: g.x,
                x2: f.x,
                y1: g.y,
                y2: f.y
              };
              var V = R[1] - L[1];
              var Y = R[0] - L[0];
              var G = Math.sqrt(Y * Y + V * V);
              var X = s.vector = {
                x: Y,
                y: V
              };
              var H = s.vectorNorm = {
                x: X.x / G,
                y: X.y / G
              };
              var U = {
                x: -H.y,
                y: H.x
              };
              s.nodesOverlap = !S(G) || E.checkPoint(L[0], L[1], 0, b, x, f.x, f.y, C, N) || w.checkPoint(R[0], R[1], 0, v, y, g.x, g.y, T, _);
              s.vectorNormInverse = U;
              l = {
                nodesOverlap: s.nodesOverlap,
                dirCounts: s.dirCounts,
                calculatedIntersection: true,
                hasBezier: s.hasBezier,
                hasUnbundled: s.hasUnbundled,
                eles: s.eles,
                srcPos: f,
                srcRs: N,
                tgtPos: g,
                tgtRs: _,
                srcW: b,
                srcH: x,
                tgtW: v,
                tgtH: y,
                srcIntn: B,
                tgtIntn: k,
                srcShape: E,
                tgtShape: w,
                posPts: {
                  x1: z.x2,
                  y1: z.y2,
                  x2: z.x1,
                  y2: z.y1
                },
                intersectionPts: {
                  x1: F.x2,
                  y1: F.y2,
                  x2: F.x1,
                  y2: F.y1
                },
                vector: {
                  x: -X.x,
                  y: -X.y
                },
                vectorNorm: {
                  x: -H.x,
                  y: -H.y
                },
                vectorNormInverse: {
                  x: -U.x,
                  y: -U.y
                }
              };
            }
            var W = I ? l : s;
            A.nodesOverlap = W.nodesOverlap;
            A.srcIntn = W.srcIntn;
            A.tgtIntn = W.tgtIntn;
            A.isRound = P.startsWith("round");
            if (r && (c.isParent() || c.isChild() || d.isParent() || d.isChild()) && (c.parents().anySame(d) || d.parents().anySame(c) || c.same(d) && c.isParent())) {
              t.findCompoundLoopPoints(M, W, D, O);
            } else if (c === d) {
              t.findLoopPoints(M, W, D, O);
            } else if (P.endsWith("segments")) {
              t.findSegmentsPoints(M, W);
            } else if (P.endsWith("taxi")) {
              t.findTaxiPoints(M, W);
            } else if (P !== "straight" && (O || s.eles.length % 2 != 1 || D !== Math.floor(s.eles.length / 2))) {
              t.findBezierPoints(M, W, D, O, I);
            } else {
              t.findStraightEdgePoints(M);
            }
            t.findEndpoints(M);
            t.tryToCorrectInvalidPoints(M, W);
            t.checkForInvalidEdgeWarning(M);
            t.storeAllpts(M);
            t.storeEdgeProjections(M);
            t.calculateArrowAngles(M);
            t.recalculateEdgeLabelProjections(M);
            t.calculateLabelAngles(M);
          }
        })(y);
      }
      this.findHaystackPoints(o);
    }
  };
  sg.getSegmentPoints = function (e) {
    var t = e[0]._private.rscratch;
    this.recalculateRenderedStyle(e);
    if (t.edgeType === "segments") {
      return sf(t.segpts);
    }
  };
  sg.getControlPoints = function (e) {
    var t = e[0]._private.rscratch;
    this.recalculateRenderedStyle(e);
    var n = t.edgeType;
    if (n === "bezier" || n === "multibezier" || n === "self" || n === "compound") {
      return sf(t.ctrlpts);
    }
  };
  sg.getEdgeMidpoint = function (e) {
    var t = e[0]._private.rscratch;
    this.recalculateRenderedStyle(e);
    return {
      x: t.midX,
      y: t.midY
    };
  };
  var sv = {};
  sv.manualEndptToPx = function (e, t) {
    var n = e.position();
    var r = e.outerWidth();
    var i = e.outerHeight();
    var a = e._private.rscratch;
    if (t.value.length === 2) {
      var o = [t.pfValue[0], t.pfValue[1]];
      if (t.units[0] === "%") {
        o[0] = o[0] * r;
      }
      if (t.units[1] === "%") {
        o[1] = o[1] * i;
      }
      o[0] += n.x;
      o[1] += n.y;
      return o;
    }
    var s = t.pfValue[0];
    s = -Math.PI / 2 + s;
    var l = Math.max(r, i) * 2;
    var u = [n.x + Math.cos(s) * l, n.y + Math.sin(s) * l];
    return this.nodeShapes[this.getNodeShape(e)].intersectLine(n.x, n.y, r, i, u[0], u[1], 0, e.pstyle("corner-radius").value === "auto" ? "auto" : e.pstyle("corner-radius").pfValue, a);
  };
  sv.findEndpoints = function (e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o = e.source()[0];
    var s = e.target()[0];
    var l = o.position();
    var u = s.position();
    var h = e.pstyle("target-arrow-shape").value;
    var c = e.pstyle("source-arrow-shape").value;
    var d = e.pstyle("target-distance-from-node").pfValue;
    var p = e.pstyle("source-distance-from-node").pfValue;
    var g = o._private.rscratch;
    var f = s._private.rscratch;
    var v = e.pstyle("curve-style").value;
    var y = e._private.rscratch;
    var b = y.edgeType;
    var x = b === "self" || b === "compound";
    var w = b === "bezier" || b === "multibezier" || x;
    var E = b !== "bezier";
    var T = b === "straight" || b === "segments";
    var C = b === "segments";
    var N = x || v === "taxi";
    var _ = e.pstyle("source-endpoint");
    var D = N ? "outside-to-node" : _.value;
    var M = o.pstyle("corner-radius").value === "auto" ? "auto" : o.pstyle("corner-radius").pfValue;
    var A = e.pstyle("target-endpoint");
    var P = N ? "outside-to-node" : A.value;
    var O = s.pstyle("corner-radius").value === "auto" ? "auto" : s.pstyle("corner-radius").pfValue;
    y.srcManEndpt = _;
    y.tgtManEndpt = A;
    if (w) {
      var I = [y.ctrlpts[0], y.ctrlpts[1]];
      n = E ? [y.ctrlpts[y.ctrlpts.length - 2], y.ctrlpts[y.ctrlpts.length - 1]] : I;
      r = I;
    } else if (T) {
      var L = C ? y.segpts.slice(0, 2) : [u.x, u.y];
      n = C ? y.segpts.slice(y.segpts.length - 2) : [l.x, l.y];
      r = L;
    }
    if (P === "inside-to-node") {
      t = [u.x, u.y];
    } else if (A.units) {
      t = this.manualEndptToPx(s, A);
    } else if (P === "outside-to-line") {
      t = y.tgtIntn;
    } else {
      if (P === "outside-to-node" || P === "outside-to-node-or-label") {
        i = n;
      } else if (P === "outside-to-line" || P === "outside-to-line-or-label") {
        i = [l.x, l.y];
      }
      t = this.nodeShapes[this.getNodeShape(s)].intersectLine(u.x, u.y, s.outerWidth(), s.outerHeight(), i[0], i[1], 0, O, f);
      if (P === "outside-to-node-or-label" || P === "outside-to-line-or-label") {
        var k = s._private.rscratch;
        var R = k.labelWidth;
        var B = k.labelHeight;
        var F = k.labelX;
        var z = k.labelY;
        var V = R / 2;
        var Y = B / 2;
        var G = s.pstyle("text-valign").value;
        if (G === "top") {
          z -= Y;
        } else if (G === "bottom") {
          z += Y;
        }
        var X = s.pstyle("text-halign").value;
        if (X === "left") {
          F -= V;
        } else if (X === "right") {
          F += V;
        }
        var H = t4(i[0], i[1], [F - V, z - Y, F + V, z - Y, F + V, z + Y, F - V, z + Y], u.x, u.y);
        if (H.length > 0) {
          var U = t_(l, ty(t));
          var W = t_(l, ty(H));
          var j = U;
          if (W < U) {
            t = H;
            j = W;
          }
          if (H.length > 2 && t_(l, {
            x: H[2],
            y: H[3]
          }) < j) {
            t = [H[2], H[3]];
          }
        }
      }
    }
    var q = t6(t, n, this.arrowShapes[h].spacing(e) + d);
    var K = t6(t, n, this.arrowShapes[h].gap(e) + d);
    y.endX = K[0];
    y.endY = K[1];
    y.arrowEndX = q[0];
    y.arrowEndY = q[1];
    if (D === "inside-to-node") {
      t = [l.x, l.y];
    } else if (_.units) {
      t = this.manualEndptToPx(o, _);
    } else if (D === "outside-to-line") {
      t = y.srcIntn;
    } else {
      if (D === "outside-to-node" || D === "outside-to-node-or-label") {
        a = r;
      } else if (D === "outside-to-line" || D === "outside-to-line-or-label") {
        a = [u.x, u.y];
      }
      t = this.nodeShapes[this.getNodeShape(o)].intersectLine(l.x, l.y, o.outerWidth(), o.outerHeight(), a[0], a[1], 0, M, g);
      if (D === "outside-to-node-or-label" || D === "outside-to-line-or-label") {
        var Z = o._private.rscratch;
        var $ = Z.labelWidth;
        var Q = Z.labelHeight;
        var J = Z.labelX;
        var ee = Z.labelY;
        var et = $ / 2;
        var en = Q / 2;
        var er = o.pstyle("text-valign").value;
        if (er === "top") {
          ee -= en;
        } else if (er === "bottom") {
          ee += en;
        }
        var ei = o.pstyle("text-halign").value;
        if (ei === "left") {
          J -= et;
        } else if (ei === "right") {
          J += et;
        }
        var ea = t4(a[0], a[1], [J - et, ee - en, J + et, ee - en, J + et, ee + en, J - et, ee + en], l.x, l.y);
        if (ea.length > 0) {
          var eo = t_(u, ty(t));
          var es = t_(u, ty(ea));
          var el = eo;
          if (es < eo) {
            t = [ea[0], ea[1]];
            el = es;
          }
          if (ea.length > 2 && t_(u, {
            x: ea[2],
            y: ea[3]
          }) < el) {
            t = [ea[2], ea[3]];
          }
        }
      }
    }
    var eu = t6(t, r, this.arrowShapes[c].spacing(e) + p);
    var eh = t6(t, r, this.arrowShapes[c].gap(e) + p);
    y.startX = eh[0];
    y.startY = eh[1];
    y.arrowStartX = eu[0];
    y.arrowStartY = eu[1];
    if (w || E || T) {
      if (S(y.startX) && S(y.startY) && S(y.endX) && S(y.endY)) {
        y.badLine = false;
      } else {
        y.badLine = true;
      }
    }
  };
  sv.getSourceEndpoint = function (e) {
    var t = e[0]._private.rscratch;
    this.recalculateRenderedStyle(e);
    if (t.edgeType === "haystack") {
      return {
        x: t.haystackPts[0],
        y: t.haystackPts[1]
      };
    } else {
      return {
        x: t.arrowStartX,
        y: t.arrowStartY
      };
    }
  };
  sv.getTargetEndpoint = function (e) {
    var t = e[0]._private.rscratch;
    this.recalculateRenderedStyle(e);
    if (t.edgeType === "haystack") {
      return {
        x: t.haystackPts[2],
        y: t.haystackPts[3]
      };
    } else {
      return {
        x: t.arrowEndX,
        y: t.arrowEndY
      };
    }
  };
  var sy = {};
  sy.storeEdgeProjections = function (e) {
    var t = e._private;
    var n = t.rscratch;
    var r = n.edgeType;
    t.rstyle.bezierPts = null;
    t.rstyle.linePts = null;
    t.rstyle.haystackPts = null;
    if (r === "multibezier" || r === "bezier" || r === "self" || r === "compound") {
      t.rstyle.bezierPts = [];
      for (var i = 0; i + 5 < n.allpts.length; i += 4) {
        (function (e, t, n) {
          function r(e, t, n, r) {
            return tM(e, t, n, r);
          }
          var i = t._private.rstyle.bezierPts;
          var a = 0;
          for (; a < e.bezierProjPcts.length; a++) {
            var o = e.bezierProjPcts[a];
            i.push({
              x: r(n[0], n[2], n[4], o),
              y: r(n[1], n[3], n[5], o)
            });
          }
        })(this, e, n.allpts.slice(i, i + 6));
      }
    } else if (r === "segments") {
      var a = t.rstyle.linePts = [];
      var i = 0;
      for (; i + 1 < n.allpts.length; i += 2) {
        a.push({
          x: n.allpts[i],
          y: n.allpts[i + 1]
        });
      }
    } else if (r === "haystack") {
      var o = n.haystackPts;
      t.rstyle.haystackPts = [{
        x: o[0],
        y: o[1]
      }, {
        x: o[2],
        y: o[3]
      }];
    }
    t.rstyle.arrowWidth = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth;
  };
  sy.recalculateEdgeProjections = function (e) {
    this.findEdgeControlPoints(e);
  };
  var sm = {};
  sm.recalculateNodeLabelProjection = function (e) {
    if (!B(e.pstyle("label").strValue)) {
      var t;
      var n;
      var r = e._private;
      var i = e.width();
      var a = e.height();
      var o = e.padding();
      var s = e.position();
      var l = e.pstyle("text-halign").strValue;
      var u = e.pstyle("text-valign").strValue;
      var h = r.rscratch;
      var c = r.rstyle;
      switch (l) {
        case "left":
          t = s.x - i / 2 - o;
          break;
        case "right":
          t = s.x + i / 2 + o;
          break;
        default:
          t = s.x;
      }
      switch (u) {
        case "top":
          n = s.y - a / 2 - o;
          break;
        case "bottom":
          n = s.y + a / 2 + o;
          break;
        default:
          n = s.y;
      }
      h.labelX = t;
      h.labelY = n;
      c.labelX = t;
      c.labelY = n;
      this.calculateLabelAngles(e);
      this.applyLabelDimensions(e);
    }
  };
  function sb(e, t) {
    var n = Math.atan(t / e);
    if (e === 0 && n < 0) {
      n *= -1;
    }
    return n;
  }
  function sx(e, t) {
    return sb(t.x - e.x, t.y - e.y);
  }
  function sw(e, t, n, r) {
    var i = tP(0, r - 0.001, 1);
    var a = tP(0, r + 0.001, 1);
    return sx(tA(e, t, n, i), tA(e, t, n, a));
  }
  sm.recalculateEdgeLabelProjections = function (e) {
    var t;
    var n = e._private;
    var r = n.rscratch;
    var i = this;
    var a = {
      mid: e.pstyle("label").strValue,
      source: e.pstyle("source-label").strValue,
      target: e.pstyle("target-label").strValue
    };
    if (a.mid || a.source || a.target) {
      t = {
        x: r.midX,
        y: r.midY
      };
      function o(e, t, r) {
        e7(n.rscratch, e, t, r);
        e7(n.rstyle, e, t, r);
      }
      o("labelX", null, t.x);
      o("labelY", null, t.y);
      o("labelAutoAngle", null, sb(r.midDispX, r.midDispY));
      var s = function e() {
        if (e.cache) {
          return e.cache;
        }
        var t = [];
        var a = 0;
        for (; a + 5 < r.allpts.length; a += 4) {
          var o = {
            x: r.allpts[a],
            y: r.allpts[a + 1]
          };
          var s = {
            x: r.allpts[a + 2],
            y: r.allpts[a + 3]
          };
          var l = {
            x: r.allpts[a + 4],
            y: r.allpts[a + 5]
          };
          t.push({
            p0: o,
            p1: s,
            p2: l,
            startDist: 0,
            length: 0,
            segments: []
          });
        }
        var u = n.rstyle.bezierPts;
        var h = i.bezierProjPcts.length;
        function c(e, t, n, r, i) {
          var a = tN(t, n);
          var o = e.segments[e.segments.length - 1];
          var s = {
            p0: t,
            p1: n,
            t0: r,
            t1: i,
            startDist: o ? o.startDist + o.length : 0,
            length: a
          };
          e.segments.push(s);
          e.length += a;
        }
        for (var d = 0; d < t.length; d++) {
          var p = t[d];
          var g = t[d - 1];
          if (g) {
            p.startDist = g.startDist + g.length;
          }
          c(p, p.p0, u[d * h], 0, i.bezierProjPcts[0]);
          for (var f = 0; f < h - 1; f++) {
            c(p, u[d * h + f], u[d * h + f + 1], i.bezierProjPcts[f], i.bezierProjPcts[f + 1]);
          }
          c(p, u[d * h + h - 1], p.p2, i.bezierProjPcts[h - 1], 1);
        }
        return e.cache = t;
      };
      function l(n) {
        var i = n === "source";
        if (a[n]) {
          var l = e.pstyle(n + "-text-offset").pfValue;
          switch (r.edgeType) {
            case "self":
            case "compound":
            case "bezier":
            case "multibezier":
              var u;
              var h;
              var c = s();
              var d = 0;
              var p = 0;
              var g = 0;
              for (; g < c.length; g++) {
                var f = c[i ? g : c.length - 1 - g];
                var v = 0;
                for (; v < f.segments.length; v++) {
                  var y = f.segments[i ? v : f.segments.length - 1 - v];
                  var b = g === c.length - 1 && v === f.segments.length - 1;
                  d = p;
                  if ((p += y.length) >= l || b) {
                    h = {
                      cp: f,
                      segment: y
                    };
                    break;
                  }
                }
                if (h) {
                  break;
                }
              }
              var x = h.cp;
              var w = h.segment;
              var E = (l - d) / w.length;
              var T = w.t1 - w.t0;
              var C = i ? w.t0 + T * E : w.t1 - T * E;
              C = tP(0, C, 1);
              t = tA(x.p0, x.p1, x.p2, C);
              u = sw(x.p0, x.p1, x.p2, C);
              break;
            case "straight":
            case "segments":
            case "haystack":
              var N;
              var _;
              var D;
              var M;
              var A = 0;
              var S = r.allpts.length;
              var P = 0;
              for (; P + 3 < S && (i ? (N = {
                x: r.allpts[P],
                y: r.allpts[P + 1]
              }, _ = {
                x: r.allpts[P + 2],
                y: r.allpts[P + 3]
              }) : (N = {
                x: r.allpts[S - 2 - P],
                y: r.allpts[S - 1 - P]
              }, _ = {
                x: r.allpts[S - 4 - P],
                y: r.allpts[S - 3 - P]
              }), D = tN(N, _), M = A, !((A += D) >= l)); P += 2);
              var O = (l - M) / D;
              t = tS(N, _, O = tP(0, O, 1));
              u = sx(N, _);
          }
          o("labelX", n, t.x);
          o("labelY", n, t.y);
          o("labelAutoAngle", n, u);
        }
      }
      l("source");
      l("target");
      this.applyLabelDimensions(e);
    }
  };
  sm.applyLabelDimensions = function (e) {
    this.applyPrefixedLabelDimensions(e);
    if (e.isEdge()) {
      this.applyPrefixedLabelDimensions(e, "source");
      this.applyPrefixedLabelDimensions(e, "target");
    }
  };
  sm.applyPrefixedLabelDimensions = function (e, t) {
    var n = e._private;
    var r = this.getLabelText(e, t);
    var i = this.calculateLabelDimensions(e, r);
    var a = e.pstyle("line-height").pfValue;
    var o = e.pstyle("text-wrap").strValue;
    var s = e8(n.rscratch, "labelWrapCachedLines", t) || [];
    var l = o !== "wrap" ? 1 : Math.max(s.length, 1);
    var u = i.height / l;
    var h = i.width;
    var c = i.height + (l - 1) * (a - 1) * u;
    e7(n.rstyle, "labelWidth", t, h);
    e7(n.rscratch, "labelWidth", t, h);
    e7(n.rstyle, "labelHeight", t, c);
    e7(n.rscratch, "labelHeight", t, c);
    e7(n.rscratch, "labelLineHeight", t, u * a);
  };
  sm.getLabelText = function (e, t) {
    var n = e._private;
    var r = t ? t + "-" : "";
    var i = e.pstyle(r + "label").strValue;
    var a = e.pstyle("text-transform").value;
    function o(e, r) {
      if (r) {
        e7(n.rscratch, e, t, r);
        return r;
      } else {
        return e8(n.rscratch, e, t);
      }
    }
    if (!i) {
      return "";
    }
    if (a != "none") {
      if (a == "uppercase") {
        i = i.toUpperCase();
      } else if (a == "lowercase") {
        i = i.toLowerCase();
      }
    }
    var s = e.pstyle("text-wrap").value;
    if (s === "wrap") {
      var l = o("labelKey");
      if (l != null && o("labelWrapKey") === l) {
        return o("labelWrapCachedText");
      }
      var u = i.split("\n");
      var h = e.pstyle("text-max-width").pfValue;
      var d = e.pstyle("text-overflow-wrap").value === "anywhere";
      var p = [];
      var g = /[\s\u200b]+|$/g;
      var f = 0;
      for (; f < u.length; f++) {
        var v = u[f];
        var y = this.calculateLabelDimensions(e, v).width;
        if (d) {
          v = v.split("").join("​");
        }
        if (y > h) {
          var b;
          var x = v.matchAll(g);
          var w = "";
          var E = 0;
          var T = c(x);
          try {
            for (T.s(); !(b = T.n()).done;) {
              var C = b.value;
              var N = C[0];
              var _ = v.substring(E, C.index);
              E = C.index + N.length;
              var D = w.length === 0 ? _ : w + _ + N;
              if (this.calculateLabelDimensions(e, D).width <= h) {
                w += _ + N;
              } else {
                if (w) {
                  p.push(w);
                }
                w = _ + N;
              }
            }
          } catch (e) {
            T.e(e);
          } finally {
            T.f();
          }
          if (!w.match(/^[\s\u200b]+$/)) {
            p.push(w);
          }
        } else {
          p.push(v);
        }
      }
      o("labelWrapCachedLines", p);
      i = o("labelWrapCachedText", p.join("\n"));
      o("labelWrapKey", l);
    } else if (s === "ellipsis") {
      var M = e.pstyle("text-max-width").pfValue;
      var A = "";
      var S = false;
      if (this.calculateLabelDimensions(e, i).width < M) {
        return i;
      }
      for (var P = 0; P < i.length && !(this.calculateLabelDimensions(e, A + i[P] + "…").width > M); P++) {
        A += i[P];
        if (P === i.length - 1) {
          S = true;
        }
      }
      if (!S) {
        A += "…";
      }
      return A;
    }
    return i;
  };
  sm.getLabelJustification = function (e) {
    var t = e.pstyle("text-justification").strValue;
    var n = e.pstyle("text-halign").strValue;
    if (t !== "auto") {
      return t;
    }
    if (!e.isNode()) {
      return "center";
    }
    switch (n) {
      case "left":
        return "right";
      case "right":
        return "left";
      default:
        return "center";
    }
  };
  sm.calculateLabelDimensions = function (e, t) {
    var n = this.cy.window().document;
    var r = eY(t, e._private.labelDimsKey);
    var i = this.labelDimCache ||= [];
    var a = i[r];
    if (a != null) {
      return a;
    }
    var o = e.pstyle("font-style").strValue;
    var s = e.pstyle("font-size").pfValue;
    var l = e.pstyle("font-family").strValue;
    var u = e.pstyle("font-weight").strValue;
    var h = this.labelCalcCanvas;
    var c = this.labelCalcCanvasContext;
    if (!h) {
      h = this.labelCalcCanvas = n.createElement("canvas");
      c = this.labelCalcCanvasContext = h.getContext("2d");
      var d = h.style;
      d.position = "absolute";
      d.left = "-9999px";
      d.top = "-9999px";
      d.zIndex = "-1";
      d.visibility = "hidden";
      d.pointerEvents = "none";
    }
    c.font = `${o} ${u} ${s}px ${l}`;
    var p = 0;
    var g = 0;
    var f = t.split("\n");
    var v = 0;
    for (; v < f.length; v++) {
      var y;
      var b = f[v];
      p = Math.max(Math.ceil(c.measureText(b).width), p);
      g += s;
    }
    p += 0;
    g += 0;
    return i[r] = {
      width: p,
      height: g
    };
  };
  sm.calculateLabelAngle = function (e, t) {
    var n = e._private.rscratch;
    var r = e.isEdge();
    var i = e.pstyle((t ? t + "-" : "") + "text-rotation");
    var a = i.strValue;
    if (a === "none") {
      return 0;
    } else if (r && a === "autorotate") {
      return n.labelAutoAngle;
    } else if (a === "autorotate") {
      return 0;
    } else {
      return i.pfValue;
    }
  };
  sm.calculateLabelAngles = function (e) {
    var t = e.isEdge();
    var n = e._private.rscratch;
    n.labelAngle = this.calculateLabelAngle(e);
    if (t) {
      n.sourceLabelAngle = this.calculateLabelAngle(e, "source");
      n.targetLabelAngle = this.calculateLabelAngle(e, "target");
    }
  };
  var sE = {};
  var sT = false;
  sE.getNodeShape = function (e) {
    var t = e.pstyle("shape").value;
    if (t === "cutrectangle" && (e.width() < 28 || e.height() < 28)) {
      if (!sT) {
        eJ("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead");
        sT = true;
      }
      return "rectangle";
    }
    if (e.isParent()) {
      if (t === "rectangle" || t === "roundrectangle" || t === "round-rectangle" || t === "cutrectangle" || t === "cut-rectangle" || t === "barrel") {
        return t;
      } else {
        return "rectangle";
      }
    }
    if (t === "polygon") {
      var n = e.pstyle("shape-polygon-points").value;
      return this.nodeShapes.makePolygon(n).name;
    }
    return t;
  };
  var sC = {};
  sC.registerCalculationListeners = function () {
    var e = this.cy;
    var t = e.collection();
    var n = this;
    function r(e) {
      var n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      t.merge(e);
      if (n) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r]._private.rstyle;
          i.clean = false;
          i.cleanConnected = false;
        }
      }
    }
    n.binder(e).on("bounds.* dirty.*", function (e) {
      r(e.target);
    }).on("style.* background.*", function (e) {
      r(e.target, false);
    });
    function i(i) {
      if (i) {
        var a = n.onUpdateEleCalcsFns;
        t.cleanStyle();
        for (var o = 0; o < t.length; o++) {
          var s = t[o];
          var l = s._private.rstyle;
          if (s.isNode() && !l.cleanConnected) {
            r(s.connectedEdges());
            l.cleanConnected = true;
          }
        }
        if (a) {
          for (var u = 0; u < a.length; u++) {
            a[u](i, t);
          }
        }
        n.recalculateRenderedStyle(t);
        t = e.collection();
      }
    }
    n.flushRenderedStyleQueue = function () {
      i(true);
    };
    n.beforeRender(i, n.beforeRenderPriorities.eleCalcs);
  };
  sC.onUpdateEleCalcs = function (e) {
    (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e);
  };
  sC.recalculateRenderedStyle = function (e, t) {
    function n(e) {
      return e._private.rstyle.cleanConnected;
    }
    var r = [];
    var i = [];
    if (!this.destroyed) {
      if (t === undefined) {
        t = true;
      }
      for (var a = 0; a < e.length; a++) {
        var o = e[a];
        var s = o._private;
        var l = s.rstyle;
        if (!!o.isEdge() && (!n(o.source()) || !n(o.target()))) {
          l.clean = false;
        }
        if ((!t || !l.clean) && !o.removed() && o.pstyle("display").value !== "none") {
          if (s.group === "nodes") {
            i.push(o);
          } else {
            r.push(o);
          }
          l.clean = true;
        }
      }
      for (var u = 0; u < i.length; u++) {
        var h = i[u];
        var c = h._private.rstyle;
        var d = h.position();
        this.recalculateNodeLabelProjection(h);
        c.nodeX = d.x;
        c.nodeY = d.y;
        c.nodeW = h.pstyle("width").pfValue;
        c.nodeH = h.pstyle("height").pfValue;
      }
      this.recalculateEdgeProjections(r);
      for (var p = 0; p < r.length; p++) {
        var g = r[p]._private;
        var f = g.rstyle;
        var v = g.rscratch;
        f.srcX = v.arrowStartX;
        f.srcY = v.arrowStartY;
        f.tgtX = v.arrowEndX;
        f.tgtY = v.arrowEndY;
        f.midX = v.midX;
        f.midY = v.midY;
        f.labelAngle = v.labelAngle;
        f.sourceLabelAngle = v.sourceLabelAngle;
        f.targetLabelAngle = v.targetLabelAngle;
      }
    }
  };
  var sN = {};
  sN.updateCachedGrabbedEles = function () {
    var e = this.cachedZSortedEles;
    if (e) {
      e.drag = [];
      e.nondrag = [];
      var t = [];
      var n = 0;
      for (; n < e.length; n++) {
        var r = e[n];
        var i = r._private.rscratch;
        if (r.grabbed() && !r.isParent()) {
          t.push(r);
        } else if (i.inDragLayer) {
          e.drag.push(r);
        } else {
          e.nondrag.push(r);
        }
      }
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        e.drag.push(r);
      }
    }
  };
  sN.invalidateCachedZSortedEles = function () {
    this.cachedZSortedEles = null;
  };
  sN.getCachedZSortedEles = function (e) {
    if (e || !this.cachedZSortedEles) {
      var t = this.cy.mutableElements().toArray();
      t.sort(ao);
      t.interactive = t.filter(function (e) {
        return e.interactive();
      });
      this.cachedZSortedEles = t;
      this.updateCachedGrabbedEles();
    } else {
      t = this.cachedZSortedEles;
    }
    return t;
  };
  var s_ = {};
  [oG, oX, sg, sv, sy, sm, sE, sC, sN].forEach(function (e) {
    Z(s_, e);
  });
  var sD = {};
  sD.getCachedImage = function (e, t, n) {
    var r = this.imageCache = this.imageCache || {};
    var i = r[e];
    if (i) {
      if (!i.image.complete) {
        i.image.addEventListener("load", n);
      }
      return i.image;
    }
    var a = (i = r[e] = r[e] || {}).image = new Image();
    a.addEventListener("load", n);
    a.addEventListener("error", function () {
      a.error = true;
    });
    var o = "data:";
    if (e.substring(0, o.length).toLowerCase() !== o) {
      t = t === "null" ? null : t;
      a.crossOrigin = t;
    }
    a.src = e;
    return a;
  };
  var sM = {};
  sM.registerBinding = function (e, t, n, r) {
    var i = Array.prototype.slice.apply(arguments, [1]);
    if (Array.isArray(e)) {
      var a = [];
      var o = 0;
      for (; o < e.length; o++) {
        var s = e[o];
        if (s !== undefined) {
          var l = this.binder(s);
          a.push(l.on.apply(l, i));
        }
      }
      return a;
    }
    var l = this.binder(e);
    return l.on.apply(l, i);
  };
  sM.binder = function (e) {
    var t = this;
    var n = t.cy.window();
    var r = e === n || e === n.document || e === n.document.body || typeof HTMLElement != "undefined" && e instanceof HTMLElement;
    if (t.supportsPassiveEvents == null) {
      var i = false;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            i = true;
            return true;
          }
        });
        n.addEventListener("test", null, a);
      } catch (e) {}
      t.supportsPassiveEvents = i;
    }
    function o(n, i, a) {
      var o = Array.prototype.slice.call(arguments);
      if (r && t.supportsPassiveEvents) {
        o[2] = {
          capture: a != null && a,
          passive: false,
          once: false
        };
      }
      t.bindings.push({
        target: e,
        args: o
      });
      (e.addEventListener || e.on).apply(e, o);
      return this;
    }
    return {
      on: o,
      addEventListener: o,
      addListener: o,
      bind: o
    };
  };
  sM.nodeIsDraggable = function (e) {
    return e && e.isNode() && !e.locked() && e.grabbable();
  };
  sM.nodeIsGrabbable = function (e) {
    return this.nodeIsDraggable(e) && e.interactive();
  };
  sM.load = function () {
    var e;
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var u;
    var h;
    var c;
    var d;
    var p;
    var g;
    var f;
    var v;
    var y;
    var b;
    var x;
    var w;
    var E;
    var T;
    var C = this;
    var N = C.cy.window();
    function _(e) {
      return e.selected();
    }
    function D(e, t, n, r) {
      if (e == null) {
        e = C.cy;
      }
      for (var i = 0; i < t.length; i++) {
        var a = t[i];
        e.emit({
          originalEvent: n,
          type: a,
          position: r
        });
      }
    }
    function M(e) {
      return e.shiftKey || e.metaKey || e.ctrlKey;
    }
    function A(e, t) {
      var n = true;
      if (C.cy.hasCompoundNodes() && e && e.pannable()) {
        for (var r = 0; t && r < t.length; r++) {
          var e = t[r];
          if (e.isNode() && e.isParent() && !e.pannable()) {
            n = false;
            break;
          }
        }
      } else {
        n = true;
      }
      return n;
    }
    function P(e) {
      e[0]._private.grabbed = true;
    }
    function O(e) {
      e[0]._private.grabbed = false;
    }
    function I(e) {
      e[0]._private.rscratch.inDragLayer = true;
    }
    function L(e) {
      e[0]._private.rscratch.inDragLayer = false;
    }
    function k(e) {
      e[0]._private.rscratch.isGrabTarget = true;
    }
    function R(e) {
      e[0]._private.rscratch.isGrabTarget = false;
    }
    function B(e, t) {
      var n = t.addToList;
      if (!n.has(e) && e.grabbable() && !e.locked()) {
        n.merge(e);
        P(e);
      }
    }
    function F(e, t) {
      if (e.cy().hasCompoundNodes() && (t.inDragLayer != null || t.addToList != null)) {
        var n = e.descendants();
        if (t.inDragLayer) {
          n.forEach(I);
          n.connectedEdges().forEach(I);
        }
        if (t.addToList) {
          B(n, t);
        }
      }
    }
    function z(e, t) {
      t = t || {};
      var n = e.cy().hasCompoundNodes();
      if (t.inDragLayer) {
        e.forEach(I);
        e.neighborhood().stdFilter(function (e) {
          return !n || e.isEdge();
        }).forEach(I);
      }
      if (t.addToList) {
        e.forEach(function (e) {
          B(e, t);
        });
      }
      F(e, t);
      Y(e, {
        inDragLayer: t.inDragLayer
      });
      C.updateCachedGrabbedEles();
    }
    function V(e) {
      if (e) {
        C.getCachedZSortedEles().forEach(function (e) {
          O(e);
          L(e);
          R(e);
        });
        C.updateCachedGrabbedEles();
      }
    }
    function Y(e, t) {
      if ((t.inDragLayer != null || t.addToList != null) && e.cy().hasCompoundNodes()) {
        var n = e.ancestors().orphans();
        if (!n.same(e)) {
          var r = n.descendants().spawnSelf().merge(n).unmerge(e).unmerge(e.descendants());
          var i = r.connectedEdges();
          if (t.inDragLayer) {
            i.forEach(I);
            r.forEach(I);
          }
          if (t.addToList) {
            r.forEach(function (e) {
              B(e, t);
            });
          }
        }
      }
    }
    function G() {
      if (document.activeElement != null && document.activeElement.blur != null) {
        document.activeElement.blur();
      }
    }
    var X = typeof MutationObserver != "undefined";
    var H = typeof ResizeObserver != "undefined";
    if (X) {
      C.removeObserver = new MutationObserver(function (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t].removedNodes;
          if (n) {
            for (var r = 0; r < n.length; r++) {
              if (n[r] === C.container) {
                C.destroy();
                break;
              }
            }
          }
        }
      });
      if (C.container.parentNode) {
        C.removeObserver.observe(C.container.parentNode, {
          childList: true
        });
      }
    } else {
      C.registerBinding(C.container, "DOMNodeRemoved", function (e) {
        C.destroy();
      });
    }
    var U = eS(function () {
      C.cy.resize();
    }, 100);
    if (X) {
      C.styleObserver = new MutationObserver(U);
      C.styleObserver.observe(C.container, {
        attributes: true
      });
    }
    C.registerBinding(N, "resize", U);
    if (H) {
      C.resizeObserver = new ResizeObserver(U);
      C.resizeObserver.observe(C.container);
    }
    function W() {
      C.invalidateContainerClientCoordsCache();
    }
    (function (e, t) {
      while (e != null) {
        t(e);
        e = e.parentNode;
      }
    })(C.container, function (e) {
      C.registerBinding(e, "transitionend", W);
      C.registerBinding(e, "animationend", W);
      C.registerBinding(e, "scroll", W);
    });
    C.registerBinding(C.container, "contextmenu", function (e) {
      e.preventDefault();
    });
    function j(e) {
      var t = C.findContainerClientCoords();
      var n = t[0];
      var r = t[1];
      var i = t[2];
      var a = t[3];
      var o = e.touches ? e.touches : [e];
      var s = false;
      var l = 0;
      for (; l < o.length; l++) {
        var u = o[l];
        if (n <= u.clientX && u.clientX <= n + i && r <= u.clientY && u.clientY <= r + a) {
          s = true;
          break;
        }
      }
      if (!s) {
        return false;
      }
      var h = C.container;
      var c = e.target.parentNode;
      var d = false;
      while (c) {
        if (c === h) {
          d = true;
          break;
        }
        c = c.parentNode;
      }
      return !!d;
    }
    C.registerBinding(C.container, "mousedown", function (e) {
      if (j(e) && (C.hoverData.which !== 1 || e.which === 1)) {
        e.preventDefault();
        G();
        C.hoverData.capture = true;
        C.hoverData.which = e.which;
        var t = C.cy;
        var n = [e.clientX, e.clientY];
        var r = C.projectIntoViewport(n[0], n[1]);
        var i = C.selection;
        var a = C.findNearestElements(r[0], r[1], true, false);
        var o = a[0];
        var s = C.dragData.possibleDragElements;
        C.hoverData.mdownPos = r;
        C.hoverData.mdownGPos = n;
        if (e.which == 3) {
          C.hoverData.cxtStarted = true;
          var l = {
            originalEvent: e,
            type: "cxttapstart",
            position: {
              x: r[0],
              y: r[1]
            }
          };
          if (o) {
            o.activate();
            o.emit(l);
            C.hoverData.down = o;
          } else {
            t.emit(l);
          }
          C.hoverData.downTime = new Date().getTime();
          C.hoverData.cxtDragged = false;
        } else if (e.which == 1) {
          if (o) {
            o.activate();
          }
          if (o != null && C.nodeIsGrabbable(o)) {
            function u(t) {
              return {
                originalEvent: e,
                type: t,
                position: {
                  x: r[0],
                  y: r[1]
                }
              };
            }
            k(o);
            if (o.selected()) {
              s = C.dragData.possibleDragElements = t.collection();
              var h = t.$(function (e) {
                return e.isNode() && e.selected() && C.nodeIsGrabbable(e);
              });
              z(h, {
                addToList: s
              });
              o.emit(u("grabon"));
              h.forEach(function (e) {
                e.emit(u("grab"));
              });
            } else {
              z(o, {
                addToList: s = C.dragData.possibleDragElements = t.collection()
              });
              o.emit(u("grabon")).emit(u("grab"));
            }
            C.redrawHint("eles", true);
            C.redrawHint("drag", true);
          }
          C.hoverData.down = o;
          C.hoverData.downs = a;
          C.hoverData.downTime = new Date().getTime();
          D(o, ["mousedown", "tapstart", "vmousedown"], e, {
            x: r[0],
            y: r[1]
          });
          if (o == null) {
            i[4] = 1;
            C.data.bgActivePosistion = {
              x: r[0],
              y: r[1]
            };
            C.redrawHint("select", true);
            C.redraw();
          } else if (o.pannable()) {
            i[4] = 1;
          }
          C.hoverData.tapholdCancelled = false;
          clearTimeout(C.hoverData.tapholdTimeout);
          C.hoverData.tapholdTimeout = setTimeout(function () {
            if (!C.hoverData.tapholdCancelled) {
              var n = C.hoverData.down;
              if (n) {
                n.emit({
                  originalEvent: e,
                  type: "taphold",
                  position: {
                    x: r[0],
                    y: r[1]
                  }
                });
              } else {
                t.emit({
                  originalEvent: e,
                  type: "taphold",
                  position: {
                    x: r[0],
                    y: r[1]
                  }
                });
              }
            }
          }, C.tapholdDuration);
        }
        i[0] = i[2] = r[0];
        i[1] = i[3] = r[1];
      }
    }, false);
    var q = function (e) {
      var t = e.getRootNode();
      if (t && t.nodeType === 11 && t.host !== undefined) {
        return t;
      }
    }(C.container);
    C.registerBinding([N, q], "mousemove", function (e) {
      if (C.hoverData.capture || j(e)) {
        var t = false;
        var n = C.cy;
        var r = n.zoom();
        var i = [e.clientX, e.clientY];
        var a = C.projectIntoViewport(i[0], i[1]);
        var o = C.hoverData.mdownPos;
        var s = C.hoverData.mdownGPos;
        var l = C.selection;
        var u = null;
        if (!C.hoverData.draggingEles && !C.hoverData.dragging && !C.hoverData.selecting) {
          u = C.findNearestElement(a[0], a[1], true, false);
        }
        var h = C.hoverData.last;
        var c = C.hoverData.down;
        var d = [a[0] - l[2], a[1] - l[3]];
        var p = C.dragData.possibleDragElements;
        if (s) {
          var g = i[0] - s[0];
          var f = i[1] - s[1];
          C.hoverData.isOverThresholdDrag = w = g * g + f * f >= C.desktopTapThreshold2;
        }
        var v = M(e);
        if (w) {
          C.hoverData.tapholdCancelled = true;
        }
        t = true;
        D(u, ["mousemove", "vmousemove", "tapdrag"], e, {
          x: a[0],
          y: a[1]
        });
        function y() {
          C.data.bgActivePosistion = undefined;
          if (!C.hoverData.selecting) {
            n.emit({
              originalEvent: e,
              type: "boxstart",
              position: {
                x: a[0],
                y: a[1]
              }
            });
          }
          l[4] = 1;
          C.hoverData.selecting = true;
          C.redrawHint("select", true);
          C.redraw();
        }
        if (C.hoverData.which === 3) {
          if (w) {
            var b = {
              originalEvent: e,
              type: "cxtdrag",
              position: {
                x: a[0],
                y: a[1]
              }
            };
            if (c) {
              c.emit(b);
            } else {
              n.emit(b);
            }
            C.hoverData.cxtDragged = true;
            if (!C.hoverData.cxtOver || u !== C.hoverData.cxtOver) {
              if (C.hoverData.cxtOver) {
                C.hoverData.cxtOver.emit({
                  originalEvent: e,
                  type: "cxtdragout",
                  position: {
                    x: a[0],
                    y: a[1]
                  }
                });
              }
              C.hoverData.cxtOver = u;
              if (u) {
                u.emit({
                  originalEvent: e,
                  type: "cxtdragover",
                  position: {
                    x: a[0],
                    y: a[1]
                  }
                });
              }
            }
          }
        } else if (C.hoverData.dragging) {
          t = true;
          if (n.panningEnabled() && n.userPanningEnabled()) {
            if (C.hoverData.justStartedPan) {
              var x = C.hoverData.mdownPos;
              E = {
                x: (a[0] - x[0]) * r,
                y: (a[1] - x[1]) * r
              };
              C.hoverData.justStartedPan = false;
            } else {
              E = {
                x: d[0] * r,
                y: d[1] * r
              };
            }
            n.panBy(E);
            n.emit("dragpan");
            C.hoverData.dragged = true;
          }
          a = C.projectIntoViewport(e.clientX, e.clientY);
        } else if (l[4] == 1 && (c == null || c.pannable())) {
          if (w) {
            if (!C.hoverData.dragging && n.boxSelectionEnabled() && (v || !n.panningEnabled() || !n.userPanningEnabled())) {
              y();
            } else if (!C.hoverData.selecting && n.panningEnabled() && n.userPanningEnabled() && A(c, C.hoverData.downs)) {
              C.hoverData.dragging = true;
              C.hoverData.justStartedPan = true;
              l[4] = 0;
              C.data.bgActivePosistion = ty(o);
              C.redrawHint("select", true);
              C.redraw();
            }
            if (c && c.pannable() && c.active()) {
              c.unactivate();
            }
          }
        } else {
          if (c && c.pannable() && c.active()) {
            c.unactivate();
          }
          if ((!c || !c.grabbed()) && u != h) {
            if (h) {
              D(h, ["mouseout", "tapdragout"], e, {
                x: a[0],
                y: a[1]
              });
            }
            if (u) {
              D(u, ["mouseover", "tapdragover"], e, {
                x: a[0],
                y: a[1]
              });
            }
            C.hoverData.last = u;
          }
          if (c) {
            if (w) {
              if (n.boxSelectionEnabled() && v) {
                if (c && c.grabbed()) {
                  V(p);
                  c.emit("freeon");
                  p.emit("free");
                  if (C.dragData.didDrag) {
                    c.emit("dragfreeon");
                    p.emit("dragfree");
                  }
                }
                y();
              } else if (c && c.grabbed() && C.nodeIsDraggable(c)) {
                var w;
                var E;
                var T;
                var N = !C.dragData.didDrag;
                if (N) {
                  C.redrawHint("eles", true);
                }
                C.dragData.didDrag = true;
                if (!C.hoverData.draggingEles) {
                  z(p, {
                    inDragLayer: true
                  });
                }
                var _ = {
                  x: 0,
                  y: 0
                };
                if (S(d[0]) && S(d[1]) && (_.x += d[0], _.y += d[1], N)) {
                  var P = C.hoverData.dragDelta;
                  if (P && S(P[0]) && S(P[1])) {
                    _.x += P[0];
                    _.y += P[1];
                  }
                }
                C.hoverData.draggingEles = true;
                p.silentShift(_).emit("position drag");
                C.redrawHint("drag", true);
                C.redraw();
              }
            } else if ((T = C.hoverData.dragDelta = C.hoverData.dragDelta || []).length === 0) {
              T.push(d[0]);
              T.push(d[1]);
            } else {
              T[0] += d[0];
              T[1] += d[1];
            }
          }
          t = true;
        }
        l[2] = a[0];
        l[3] = a[1];
        if (t) {
          if (e.stopPropagation) {
            e.stopPropagation();
          }
          if (e.preventDefault) {
            e.preventDefault();
          }
          return false;
        }
      }
    }, false);
    C.registerBinding(N, "mouseup", function (r) {
      if ((C.hoverData.which !== 1 || r.which === 1 || !C.hoverData.capture) && C.hoverData.capture) {
        C.hoverData.capture = false;
        var i = C.cy;
        var a = C.projectIntoViewport(r.clientX, r.clientY);
        var o = C.selection;
        var s = C.findNearestElement(a[0], a[1], true, false);
        var l = C.dragData.possibleDragElements;
        var u = C.hoverData.down;
        var h = M(r);
        if (C.data.bgActivePosistion) {
          C.redrawHint("select", true);
          C.redraw();
        }
        C.hoverData.tapholdCancelled = true;
        C.data.bgActivePosistion = undefined;
        if (u) {
          u.unactivate();
        }
        if (C.hoverData.which === 3) {
          var c = {
            originalEvent: r,
            type: "cxttapend",
            position: {
              x: a[0],
              y: a[1]
            }
          };
          if (u) {
            u.emit(c);
          } else {
            i.emit(c);
          }
          if (!C.hoverData.cxtDragged) {
            var d = {
              originalEvent: r,
              type: "cxttap",
              position: {
                x: a[0],
                y: a[1]
              }
            };
            if (u) {
              u.emit(d);
            } else {
              i.emit(d);
            }
          }
          C.hoverData.cxtDragged = false;
          C.hoverData.which = null;
        } else if (C.hoverData.which === 1) {
          D(s, ["mouseup", "tapend", "vmouseup"], r, {
            x: a[0],
            y: a[1]
          });
          if (!C.dragData.didDrag && !C.hoverData.dragged && !C.hoverData.selecting && !C.hoverData.isOverThresholdDrag) {
            D(u, ["click", "tap", "vclick"], r, {
              x: a[0],
              y: a[1]
            });
            t = false;
            if (r.timeStamp - n <= i.multiClickDebounceTime()) {
              if (e) {
                clearTimeout(e);
              }
              t = true;
              n = null;
              D(u, ["dblclick", "dbltap", "vdblclick"], r, {
                x: a[0],
                y: a[1]
              });
            } else {
              e = setTimeout(function () {
                if (!t) {
                  D(u, ["oneclick", "onetap", "voneclick"], r, {
                    x: a[0],
                    y: a[1]
                  });
                }
              }, i.multiClickDebounceTime());
              n = r.timeStamp;
            }
          }
          if (u == null && !C.dragData.didDrag && !C.hoverData.selecting && !C.hoverData.dragged && !M(r)) {
            i.$(_).unselect(["tapunselect"]);
            if (l.length > 0) {
              C.redrawHint("eles", true);
            }
            C.dragData.possibleDragElements = l = i.collection();
          }
          if (s == u && !C.dragData.didDrag && !C.hoverData.selecting && s != null && !!s._private.selectable) {
            if (!C.hoverData.dragging) {
              if (i.selectionType() === "additive" || h) {
                if (s.selected()) {
                  s.unselect(["tapunselect"]);
                } else {
                  s.select(["tapselect"]);
                }
              } else if (!h) {
                i.$(_).unmerge(s).unselect(["tapunselect"]);
                s.select(["tapselect"]);
              }
            }
            C.redrawHint("eles", true);
          }
          if (C.hoverData.selecting) {
            var p = i.collection(C.getAllInBox(o[0], o[1], o[2], o[3]));
            C.redrawHint("select", true);
            if (p.length > 0) {
              C.redrawHint("eles", true);
            }
            i.emit({
              type: "boxend",
              originalEvent: r,
              position: {
                x: a[0],
                y: a[1]
              }
            });
            if (i.selectionType() !== "additive") {
              if (!h) {
                i.$(_).unmerge(p).unselect();
              }
            }
            p.emit("box").stdFilter(function (e) {
              return e.selectable() && !e.selected();
            }).select().emit("boxselect");
            C.redraw();
          }
          if (C.hoverData.dragging) {
            C.hoverData.dragging = false;
            C.redrawHint("select", true);
            C.redrawHint("eles", true);
            C.redraw();
          }
          if (!o[4]) {
            C.redrawHint("drag", true);
            C.redrawHint("eles", true);
            var g = u && u.grabbed();
            V(l);
            if (g) {
              u.emit("freeon");
              l.emit("free");
              if (C.dragData.didDrag) {
                u.emit("dragfreeon");
                l.emit("dragfree");
              }
            }
          }
        }
        o[4] = 0;
        C.hoverData.down = null;
        C.hoverData.cxtStarted = false;
        C.hoverData.draggingEles = false;
        C.hoverData.selecting = false;
        C.hoverData.isOverThresholdDrag = false;
        C.dragData.didDrag = false;
        C.hoverData.dragged = false;
        C.hoverData.dragDelta = [];
        C.hoverData.mdownPos = null;
        C.hoverData.mdownGPos = null;
        C.hoverData.which = null;
      }
    }, false);
    function K(e) {
      if (!C.scrollingPage) {
        var t = C.cy;
        var n = t.zoom();
        var r = t.pan();
        var i = C.projectIntoViewport(e.clientX, e.clientY);
        var a = [i[0] * n + r.x, i[1] * n + r.y];
        if (C.hoverData.draggingEles || C.hoverData.dragging || C.hoverData.cxtStarted || C.selection[4] !== 0) {
          e.preventDefault();
          return;
        }
        if (t.panningEnabled() && t.userPanningEnabled() && t.zoomingEnabled() && t.userZoomingEnabled()) {
          e.preventDefault();
          C.data.wheelZooming = true;
          clearTimeout(C.data.wheelTimeout);
          C.data.wheelTimeout = setTimeout(function () {
            C.data.wheelZooming = false;
            C.redrawHint("eles", true);
            C.redraw();
          }, 150);
          o = (e.deltaY != null ? -(e.deltaY / 250) : e.wheelDeltaY != null ? e.wheelDeltaY / 1000 : e.wheelDelta / 1000) * C.wheelSensitivity;
          if (e.deltaMode === 1) {
            o *= 33;
          }
          var o;
          var s = t.zoom() * Math.pow(10, o);
          if (e.type === "gesturechange") {
            s = C.gestureStartZoom * e.scale;
          }
          t.zoom({
            level: s,
            renderedPosition: {
              x: a[0],
              y: a[1]
            }
          });
          t.emit(e.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
        }
      }
    }
    C.registerBinding(C.container, "wheel", K, true);
    C.registerBinding(N, "scroll", function (e) {
      C.scrollingPage = true;
      clearTimeout(C.scrollingPageTimeout);
      C.scrollingPageTimeout = setTimeout(function () {
        C.scrollingPage = false;
      }, 250);
    }, true);
    C.registerBinding(C.container, "gesturestart", function (e) {
      C.gestureStartZoom = C.cy.zoom();
      if (!C.hasTouchStarted) {
        e.preventDefault();
      }
    }, true);
    C.registerBinding(C.container, "gesturechange", function (e) {
      if (!C.hasTouchStarted) {
        K(e);
      }
    }, true);
    C.registerBinding(C.container, "mouseout", function (e) {
      var t = C.projectIntoViewport(e.clientX, e.clientY);
      C.cy.emit({
        originalEvent: e,
        type: "mouseout",
        position: {
          x: t[0],
          y: t[1]
        }
      });
    }, false);
    C.registerBinding(C.container, "mouseover", function (e) {
      var t = C.projectIntoViewport(e.clientX, e.clientY);
      C.cy.emit({
        originalEvent: e,
        type: "mouseover",
        position: {
          x: t[0],
          y: t[1]
        }
      });
    }, false);
    function Z(e, t, n, r) {
      return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t));
    }
    function $(e, t, n, r) {
      return (n - e) * (n - e) + (r - t) * (r - t);
    }
    C.registerBinding(C.container, "touchstart", v = function (e) {
      C.hasTouchStarted = true;
      if (j(e)) {
        G();
        C.touchData.capture = true;
        C.data.bgActivePosistion = undefined;
        var t = C.cy;
        var n = C.touchData.now;
        var v = C.touchData.earlier;
        if (e.touches[0]) {
          var y = C.projectIntoViewport(e.touches[0].clientX, e.touches[0].clientY);
          n[0] = y[0];
          n[1] = y[1];
        }
        if (e.touches[1]) {
          var y = C.projectIntoViewport(e.touches[1].clientX, e.touches[1].clientY);
          n[2] = y[0];
          n[3] = y[1];
        }
        if (e.touches[2]) {
          var y = C.projectIntoViewport(e.touches[2].clientX, e.touches[2].clientY);
          n[4] = y[0];
          n[5] = y[1];
        }
        if (e.touches[1]) {
          C.touchData.singleTouchMoved = true;
          V(C.dragData.touchDragEles);
          var b = C.findContainerClientCoords();
          c = b[0];
          d = b[1];
          p = b[2];
          g = b[3];
          r = e.touches[0].clientX - c;
          i = e.touches[0].clientY - d;
          a = e.touches[1].clientX - c;
          o = e.touches[1].clientY - d;
          f = r >= 0 && r <= p && a >= 0 && a <= p && i >= 0 && i <= g && o >= 0 && o <= g;
          var x = t.pan();
          var w = t.zoom();
          s = Z(r, i, a, o);
          l = $(r, i, a, o);
          h = [((u = [(r + a) / 2, (i + o) / 2])[0] - x.x) / w, (u[1] - x.y) / w];
          if (l < 40000 && !e.touches[2]) {
            var E = C.findNearestElement(n[0], n[1], true, true);
            var T = C.findNearestElement(n[2], n[3], true, true);
            if (E && E.isNode()) {
              E.activate().emit({
                originalEvent: e,
                type: "cxttapstart",
                position: {
                  x: n[0],
                  y: n[1]
                }
              });
              C.touchData.start = E;
            } else if (T && T.isNode()) {
              T.activate().emit({
                originalEvent: e,
                type: "cxttapstart",
                position: {
                  x: n[0],
                  y: n[1]
                }
              });
              C.touchData.start = T;
            } else {
              t.emit({
                originalEvent: e,
                type: "cxttapstart",
                position: {
                  x: n[0],
                  y: n[1]
                }
              });
            }
            if (C.touchData.start) {
              C.touchData.start._private.grabbed = false;
            }
            C.touchData.cxt = true;
            C.touchData.cxtDragged = false;
            C.data.bgActivePosistion = undefined;
            C.redraw();
            return;
          }
        }
        if (e.touches[2]) {
          if (t.boxSelectionEnabled()) {
            e.preventDefault();
          }
        } else if (e.touches[1]) ;else if (e.touches[0]) {
          var N = C.findNearestElements(n[0], n[1], true, true);
          var _ = N[0];
          if (_ != null && (_.activate(), C.touchData.start = _, C.touchData.starts = N, C.nodeIsGrabbable(_))) {
            var M = C.dragData.touchDragEles = t.collection();
            var A = null;
            C.redrawHint("eles", true);
            C.redrawHint("drag", true);
            if (_.selected()) {
              z(A = t.$(function (e) {
                return e.selected() && C.nodeIsGrabbable(e);
              }), {
                addToList: M
              });
            } else {
              z(_, {
                addToList: M
              });
            }
            k(_);
            function S(t) {
              return {
                originalEvent: e,
                type: t,
                position: {
                  x: n[0],
                  y: n[1]
                }
              };
            }
            _.emit(S("grabon"));
            if (A) {
              A.forEach(function (e) {
                e.emit(S("grab"));
              });
            } else {
              _.emit(S("grab"));
            }
          }
          D(_, ["touchstart", "tapstart", "vmousedown"], e, {
            x: n[0],
            y: n[1]
          });
          if (_ == null) {
            C.data.bgActivePosistion = {
              x: y[0],
              y: y[1]
            };
            C.redrawHint("select", true);
            C.redraw();
          }
          C.touchData.singleTouchMoved = false;
          C.touchData.singleTouchStartTime = +new Date();
          clearTimeout(C.touchData.tapholdTimeout);
          C.touchData.tapholdTimeout = setTimeout(function () {
            if (C.touchData.singleTouchMoved === false && !C.pinching && !C.touchData.selecting) {
              D(C.touchData.start, ["taphold"], e, {
                x: n[0],
                y: n[1]
              });
            }
          }, C.tapholdDuration);
        }
        if (e.touches.length >= 1) {
          var P = C.touchData.startPosition = [null, null, null, null, null, null];
          var O = 0;
          for (; O < n.length; O++) {
            P[O] = v[O] = n[O];
          }
          var I = e.touches[0];
          C.touchData.startGPosition = [I.clientX, I.clientY];
        }
      }
    }, false);
    C.registerBinding(N, "touchmove", y = function (e) {
      var t = C.touchData.capture;
      if (t || j(e)) {
        var n = C.selection;
        var u = C.cy;
        var p = C.touchData.now;
        var g = C.touchData.earlier;
        var v = u.zoom();
        if (e.touches[0]) {
          var y = C.projectIntoViewport(e.touches[0].clientX, e.touches[0].clientY);
          p[0] = y[0];
          p[1] = y[1];
        }
        if (e.touches[1]) {
          var y = C.projectIntoViewport(e.touches[1].clientX, e.touches[1].clientY);
          p[2] = y[0];
          p[3] = y[1];
        }
        if (e.touches[2]) {
          var y = C.projectIntoViewport(e.touches[2].clientX, e.touches[2].clientY);
          p[4] = y[0];
          p[5] = y[1];
        }
        var b = C.touchData.startGPosition;
        if (t && e.touches[0] && b) {
          var x = [];
          var w = 0;
          for (; w < p.length; w++) {
            x[w] = p[w] - g[w];
          }
          var E = e.touches[0].clientX - b[0];
          var T = E * E;
          var N = e.touches[0].clientY - b[1];
          er = T + N * N >= C.touchTapThreshold2;
        }
        if (t && C.touchData.cxt) {
          e.preventDefault();
          var _ = e.touches[0].clientX - c;
          var M = e.touches[0].clientY - d;
          var P = e.touches[1].clientX - c;
          var O = e.touches[1].clientY - d;
          var I = $(_, M, P, O);
          if (I / l >= 2.25 || I >= 22500) {
            C.touchData.cxt = false;
            C.data.bgActivePosistion = undefined;
            C.redrawHint("select", true);
            var L = {
              originalEvent: e,
              type: "cxttapend",
              position: {
                x: p[0],
                y: p[1]
              }
            };
            if (C.touchData.start) {
              C.touchData.start.unactivate().emit(L);
              C.touchData.start = null;
            } else {
              u.emit(L);
            }
          }
        }
        if (t && C.touchData.cxt) {
          var L = {
            originalEvent: e,
            type: "cxtdrag",
            position: {
              x: p[0],
              y: p[1]
            }
          };
          C.data.bgActivePosistion = undefined;
          C.redrawHint("select", true);
          if (C.touchData.start) {
            C.touchData.start.emit(L);
          } else {
            u.emit(L);
          }
          if (C.touchData.start) {
            C.touchData.start._private.grabbed = false;
          }
          C.touchData.cxtDragged = true;
          var k = C.findNearestElement(p[0], p[1], true, true);
          if (!C.touchData.cxtOver || k !== C.touchData.cxtOver) {
            if (C.touchData.cxtOver) {
              C.touchData.cxtOver.emit({
                originalEvent: e,
                type: "cxtdragout",
                position: {
                  x: p[0],
                  y: p[1]
                }
              });
            }
            C.touchData.cxtOver = k;
            if (k) {
              k.emit({
                originalEvent: e,
                type: "cxtdragover",
                position: {
                  x: p[0],
                  y: p[1]
                }
              });
            }
          }
        } else if (t && e.touches[2] && u.boxSelectionEnabled()) {
          e.preventDefault();
          C.data.bgActivePosistion = undefined;
          this.lastThreeTouch = +new Date();
          if (!C.touchData.selecting) {
            u.emit({
              originalEvent: e,
              type: "boxstart",
              position: {
                x: p[0],
                y: p[1]
              }
            });
          }
          C.touchData.selecting = true;
          C.touchData.didSelect = true;
          n[4] = 1;
          if (n && n.length !== 0 && n[0] !== undefined) {
            n[2] = (p[0] + p[2] + p[4]) / 3;
            n[3] = (p[1] + p[3] + p[5]) / 3;
          } else {
            n[0] = (p[0] + p[2] + p[4]) / 3;
            n[1] = (p[1] + p[3] + p[5]) / 3;
            n[2] = (p[0] + p[2] + p[4]) / 3 + 1;
            n[3] = (p[1] + p[3] + p[5]) / 3 + 1;
          }
          C.redrawHint("select", true);
          C.redraw();
        } else if (t && e.touches[1] && !C.touchData.didSelect && u.zoomingEnabled() && u.panningEnabled() && u.userZoomingEnabled() && u.userPanningEnabled()) {
          e.preventDefault();
          C.data.bgActivePosistion = undefined;
          C.redrawHint("select", true);
          var R = C.dragData.touchDragEles;
          if (R) {
            C.redrawHint("drag", true);
            for (var B = 0; B < R.length; B++) {
              var F = R[B]._private;
              F.grabbed = false;
              F.rscratch.inDragLayer = false;
            }
          }
          var Y = C.touchData.start;
          var _ = e.touches[0].clientX - c;
          var M = e.touches[0].clientY - d;
          var P = e.touches[1].clientX - c;
          var O = e.touches[1].clientY - d;
          var G = Z(_, M, P, O);
          var X = G / s;
          if (f) {
            var H = _ - r;
            var U = M - i;
            var W = P - a;
            var q = O - o;
            var K = u.zoom();
            var Q = K * X;
            var J = u.pan();
            var ee = h[0] * K + J.x;
            var et = h[1] * K + J.y;
            var en = {
              x: -Q / K * (ee - J.x - (H + W) / 2) + ee,
              y: -Q / K * (et - J.y - (U + q) / 2) + et
            };
            if (Y && Y.active()) {
              var R = C.dragData.touchDragEles;
              V(R);
              C.redrawHint("drag", true);
              C.redrawHint("eles", true);
              Y.unactivate().emit("freeon");
              R.emit("free");
              if (C.dragData.didDrag) {
                Y.emit("dragfreeon");
                R.emit("dragfree");
              }
            }
            u.viewport({
              zoom: Q,
              pan: en,
              cancelOnFailedZoom: true
            });
            u.emit("pinchzoom");
            s = G;
            r = _;
            i = M;
            a = P;
            o = O;
            C.pinching = true;
          }
          if (e.touches[0]) {
            var y = C.projectIntoViewport(e.touches[0].clientX, e.touches[0].clientY);
            p[0] = y[0];
            p[1] = y[1];
          }
          if (e.touches[1]) {
            var y = C.projectIntoViewport(e.touches[1].clientX, e.touches[1].clientY);
            p[2] = y[0];
            p[3] = y[1];
          }
          if (e.touches[2]) {
            var y = C.projectIntoViewport(e.touches[2].clientX, e.touches[2].clientY);
            p[4] = y[0];
            p[5] = y[1];
          }
        } else if (e.touches[0] && !C.touchData.didSelect) {
          var er;
          var k;
          var ei = C.touchData.start;
          var ea = C.touchData.last;
          if (!C.hoverData.draggingEles && !C.swipePanning) {
            k = C.findNearestElement(p[0], p[1], true, true);
          }
          if (t && ei != null) {
            e.preventDefault();
          }
          if (t && ei != null && C.nodeIsDraggable(ei)) {
            if (er) {
              var R = C.dragData.touchDragEles;
              var eo = !C.dragData.didDrag;
              if (eo) {
                z(R, {
                  inDragLayer: true
                });
              }
              C.dragData.didDrag = true;
              var es = {
                x: 0,
                y: 0
              };
              if (S(x[0]) && S(x[1]) && (es.x += x[0], es.y += x[1], eo)) {
                C.redrawHint("eles", true);
                var el = C.touchData.dragDelta;
                if (el && S(el[0]) && S(el[1])) {
                  es.x += el[0];
                  es.y += el[1];
                }
              }
              C.hoverData.draggingEles = true;
              R.silentShift(es).emit("position drag");
              C.redrawHint("drag", true);
              if (C.touchData.startPosition[0] == g[0] && C.touchData.startPosition[1] == g[1]) {
                C.redrawHint("eles", true);
              }
              C.redraw();
            } else {
              var el = C.touchData.dragDelta = C.touchData.dragDelta || [];
              if (el.length === 0) {
                el.push(x[0]);
                el.push(x[1]);
              } else {
                el[0] += x[0];
                el[1] += x[1];
              }
            }
          }
          D(ei || k, ["touchmove", "tapdrag", "vmousemove"], e, {
            x: p[0],
            y: p[1]
          });
          if ((!ei || !ei.grabbed()) && k != ea) {
            if (ea) {
              ea.emit({
                originalEvent: e,
                type: "tapdragout",
                position: {
                  x: p[0],
                  y: p[1]
                }
              });
            }
            if (k) {
              k.emit({
                originalEvent: e,
                type: "tapdragover",
                position: {
                  x: p[0],
                  y: p[1]
                }
              });
            }
          }
          C.touchData.last = k;
          if (t) {
            for (var B = 0; B < p.length; B++) {
              if (p[B] && C.touchData.startPosition[B] && er) {
                C.touchData.singleTouchMoved = true;
              }
            }
          }
          if (t && (ei == null || ei.pannable()) && u.panningEnabled() && u.userPanningEnabled()) {
            if (A(ei, C.touchData.starts)) {
              e.preventDefault();
              C.data.bgActivePosistion ||= ty(C.touchData.startPosition);
              if (C.swipePanning) {
                u.panBy({
                  x: x[0] * v,
                  y: x[1] * v
                });
                u.emit("dragpan");
              } else if (er) {
                C.swipePanning = true;
                u.panBy({
                  x: E * v,
                  y: N * v
                });
                u.emit("dragpan");
                if (ei) {
                  ei.unactivate();
                  C.redrawHint("select", true);
                  C.touchData.start = null;
                }
              }
            }
            var y = C.projectIntoViewport(e.touches[0].clientX, e.touches[0].clientY);
            p[0] = y[0];
            p[1] = y[1];
          }
        }
        for (var w = 0; w < p.length; w++) {
          g[w] = p[w];
        }
        if (t && e.touches.length > 0 && !C.hoverData.draggingEles && !C.swipePanning && C.data.bgActivePosistion != null) {
          C.data.bgActivePosistion = undefined;
          C.redrawHint("select", true);
          C.redraw();
        }
      }
    }, false);
    C.registerBinding(N, "touchcancel", b = function (e) {
      var t = C.touchData.start;
      C.touchData.capture = false;
      if (t) {
        t.unactivate();
      }
    });
    C.registerBinding(N, "touchend", x = function (e) {
      var t;
      var n = C.touchData.start;
      if (C.touchData.capture) {
        if (e.touches.length === 0) {
          C.touchData.capture = false;
        }
        e.preventDefault();
        var r = C.selection;
        C.swipePanning = false;
        C.hoverData.draggingEles = false;
        var i = C.cy;
        var a = i.zoom();
        var o = C.touchData.now;
        var s = C.touchData.earlier;
        if (e.touches[0]) {
          var l = C.projectIntoViewport(e.touches[0].clientX, e.touches[0].clientY);
          o[0] = l[0];
          o[1] = l[1];
        }
        if (e.touches[1]) {
          var l = C.projectIntoViewport(e.touches[1].clientX, e.touches[1].clientY);
          o[2] = l[0];
          o[3] = l[1];
        }
        if (e.touches[2]) {
          var l = C.projectIntoViewport(e.touches[2].clientX, e.touches[2].clientY);
          o[4] = l[0];
          o[5] = l[1];
        }
        if (n) {
          n.unactivate();
        }
        if (C.touchData.cxt) {
          t = {
            originalEvent: e,
            type: "cxttapend",
            position: {
              x: o[0],
              y: o[1]
            }
          };
          if (n) {
            n.emit(t);
          } else {
            i.emit(t);
          }
          if (!C.touchData.cxtDragged) {
            var u = {
              originalEvent: e,
              type: "cxttap",
              position: {
                x: o[0],
                y: o[1]
              }
            };
            if (n) {
              n.emit(u);
            } else {
              i.emit(u);
            }
          }
          if (C.touchData.start) {
            C.touchData.start._private.grabbed = false;
          }
          C.touchData.cxt = false;
          C.touchData.start = null;
          C.redraw();
          return;
        }
        if (!e.touches[2] && i.boxSelectionEnabled() && C.touchData.selecting) {
          C.touchData.selecting = false;
          var h = i.collection(C.getAllInBox(r[0], r[1], r[2], r[3]));
          r[0] = undefined;
          r[1] = undefined;
          r[2] = undefined;
          r[3] = undefined;
          r[4] = 0;
          C.redrawHint("select", true);
          i.emit({
            type: "boxend",
            originalEvent: e,
            position: {
              x: o[0],
              y: o[1]
            }
          });
          h.emit("box").stdFilter(function (e) {
            return e.selectable() && !e.selected();
          }).select().emit("boxselect");
          if (h.nonempty()) {
            C.redrawHint("eles", true);
          }
          C.redraw();
        }
        if (n != null) {
          n.unactivate();
        }
        if (e.touches[2]) {
          C.data.bgActivePosistion = undefined;
          C.redrawHint("select", true);
        } else if (e.touches[1]) ;else if (e.touches[0]) ;else if (!e.touches[0]) {
          C.data.bgActivePosistion = undefined;
          C.redrawHint("select", true);
          var c = C.dragData.touchDragEles;
          if (n != null) {
            var d = n._private.grabbed;
            V(c);
            C.redrawHint("drag", true);
            C.redrawHint("eles", true);
            if (d) {
              n.emit("freeon");
              c.emit("free");
              if (C.dragData.didDrag) {
                n.emit("dragfreeon");
                c.emit("dragfree");
              }
            }
            D(n, ["touchend", "tapend", "vmouseup", "tapdragout"], e, {
              x: o[0],
              y: o[1]
            });
            n.unactivate();
            C.touchData.start = null;
          } else {
            D(C.findNearestElement(o[0], o[1], true, true), ["touchend", "tapend", "vmouseup", "tapdragout"], e, {
              x: o[0],
              y: o[1]
            });
          }
          var p = C.touchData.startPosition[0] - o[0];
          var g = C.touchData.startPosition[1] - o[1];
          if (!C.touchData.singleTouchMoved) {
            if (!n) {
              i.$(":selected").unselect(["tapunselect"]);
            }
            D(n, ["tap", "vclick"], e, {
              x: o[0],
              y: o[1]
            });
            w = false;
            if (e.timeStamp - T <= i.multiClickDebounceTime()) {
              if (E) {
                clearTimeout(E);
              }
              w = true;
              T = null;
              D(n, ["dbltap", "vdblclick"], e, {
                x: o[0],
                y: o[1]
              });
            } else {
              E = setTimeout(function () {
                if (!w) {
                  D(n, ["onetap", "voneclick"], e, {
                    x: o[0],
                    y: o[1]
                  });
                }
              }, i.multiClickDebounceTime());
              T = e.timeStamp;
            }
          }
          if (n != null && !C.dragData.didDrag && n._private.selectable && (p * p + g * g) * a * a < C.touchTapThreshold2 && !C.pinching) {
            if (i.selectionType() === "single") {
              i.$(_).unmerge(n).unselect(["tapunselect"]);
              n.select(["tapselect"]);
            } else if (n.selected()) {
              n.unselect(["tapunselect"]);
            } else {
              n.select(["tapselect"]);
            }
            C.redrawHint("eles", true);
          }
          C.touchData.singleTouchMoved = true;
        }
        for (var f = 0; f < o.length; f++) {
          s[f] = o[f];
        }
        C.dragData.didDrag = false;
        if (e.touches.length === 0) {
          C.touchData.dragDelta = [];
          C.touchData.startPosition = [null, null, null, null, null, null];
          C.touchData.startGPosition = null;
          C.touchData.didSelect = false;
        }
        if (e.touches.length < 2) {
          if (e.touches.length === 1) {
            C.touchData.startGPosition = [e.touches[0].clientX, e.touches[0].clientY];
          }
          C.pinching = false;
          C.redrawHint("eles", true);
          C.redraw();
        }
      }
    }, false);
    if (typeof TouchEvent == "undefined") {
      var Q = [];
      function J(e) {
        return {
          clientX: e.clientX,
          clientY: e.clientY,
          force: 1,
          identifier: e.pointerId,
          pageX: e.pageX,
          pageY: e.pageY,
          radiusX: e.width / 2,
          radiusY: e.height / 2,
          screenX: e.screenX,
          screenY: e.screenY,
          target: e.target
        };
      }
      function ee(e) {
        Q.push({
          event: e,
          touch: J(e)
        });
      }
      function et(e) {
        for (var t = 0; t < Q.length; t++) {
          if (Q[t].event.pointerId === e.pointerId) {
            Q.splice(t, 1);
            return;
          }
        }
      }
      function en(e) {
        var t = Q.filter(function (t) {
          return t.event.pointerId === e.pointerId;
        })[0];
        t.event = e;
        t.touch = J(e);
      }
      function er(e) {
        e.touches = Q.map(function (e) {
          return e.touch;
        });
      }
      function ei(e) {
        return e.pointerType === "mouse" || e.pointerType === 4;
      }
      C.registerBinding(C.container, "pointerdown", function (e) {
        if (!ei(e)) {
          e.preventDefault();
          ee(e);
          er(e);
          v(e);
        }
      });
      C.registerBinding(C.container, "pointerup", function (e) {
        if (!ei(e)) {
          et(e);
          er(e);
          x(e);
        }
      });
      C.registerBinding(C.container, "pointercancel", function (e) {
        if (!ei(e)) {
          et(e);
          er(e);
          b(e);
        }
      });
      C.registerBinding(C.container, "pointermove", function (e) {
        if (!ei(e)) {
          e.preventDefault();
          en(e);
          er(e);
          y(e);
        }
      });
    }
  };
  var sA = {};
  sA.generatePolygon = function (e, t) {
    return this.nodeShapes[e] = {
      renderer: this,
      name: e,
      points: t,
      draw: function (e, t, n, r, i, a) {
        this.renderer.nodeShapeImpl("polygon", e, t, n, r, i, this.points);
      },
      intersectLine: function (e, t, n, r, i, a, o, s) {
        return t4(i, a, this.points, e, t, n / 2, r / 2, o);
      },
      checkPoint: function (e, t, n, r, i, a, o, s) {
        return tZ(e, t, this.points, a, o, r, i, [0, -1], n);
      }
    };
  };
  sA.generateEllipse = function () {
    return this.nodeShapes.ellipse = {
      renderer: this,
      name: "ellipse",
      draw: function (e, t, n, r, i, a) {
        this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
      },
      intersectLine: function (e, t, n, r, i, a, o, s) {
        return t0(i, a, e, t, n / 2 + o, r / 2 + o);
      },
      checkPoint: function (e, t, n, r, i, a, o, s) {
        return t1(e, t, r, i, a, o, n);
      }
    };
  };
  sA.generateRoundPolygon = function (e, t) {
    return this.nodeShapes[e] = {
      renderer: this,
      name: e,
      points: t,
      getOrCreateCorners: function (e, n, r, i, a, o, s) {
        if (o[s] !== undefined && o[s + "-cx"] === e && o[s + "-cy"] === n) {
          return o[s];
        }
        o[s] = Array(t.length / 2);
        o[s + "-cx"] = e;
        o[s + "-cy"] = n;
        var l = r / 2;
        var u = i / 2;
        a = a === "auto" ? nn(r, i) : a;
        var h = Array(t.length / 2);
        var c = 0;
        for (; c < t.length / 2; c++) {
          h[c] = {
            x: e + l * t[c * 2],
            y: n + u * t[c * 2 + 1]
          };
        }
        var d;
        var p;
        var g;
        var f;
        var v = h.length;
        d = 0;
        p = h[v - 1];
        for (; d < v; d++) {
          g = h[d % v];
          f = h[(d + 1) % v];
          o[s][d] = sp(p, g, f, a);
          p = g;
          g = f;
        }
        return o[s];
      },
      draw: function (e, t, n, r, i, a, o) {
        this.renderer.nodeShapeImpl("round-polygon", e, t, n, r, i, this.points, this.getOrCreateCorners(t, n, r, i, a, o, "drawCorners"));
      },
      intersectLine: function (e, t, n, r, i, a, o, s, l) {
        return t9(i, a, this.points, e, t, n, r, o, this.getOrCreateCorners(e, t, n, r, s, l, "corners"));
      },
      checkPoint: function (e, t, n, r, i, a, o, s, l) {
        return t$(e, t, this.points, a, o, r, i, this.getOrCreateCorners(a, o, r, i, s, l, "corners"));
      }
    };
  };
  sA.generateRoundRectangle = function () {
    return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
      renderer: this,
      name: "round-rectangle",
      points: t8(4, 0),
      draw: function (e, t, n, r, i, a) {
        this.renderer.nodeShapeImpl(this.name, e, t, n, r, i, this.points, a);
      },
      intersectLine: function (e, t, n, r, i, a, o, s) {
        return tG(i, a, e, t, n, r, o, s);
      },
      checkPoint: function (e, t, n, r, i, a, o, s) {
        var l = r / 2;
        var u = i / 2;
        var h = (s = Math.min(l, u, s = s === "auto" ? nt(r, i) : s)) * 2;
        return !!tZ(e, t, this.points, a, o, r, i - h, [0, -1], n) || !!tZ(e, t, this.points, a, o, r - h, i, [0, -1], n) || !!t1(e, t, h, h, a - l + s, o - u + s, n) || !!t1(e, t, h, h, a + l - s, o - u + s, n) || !!t1(e, t, h, h, a + l - s, o + u - s, n) || !!t1(e, t, h, h, a - l + s, o + u - s, n);
      }
    };
  };
  sA.generateCutRectangle = function () {
    return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
      renderer: this,
      name: "cut-rectangle",
      cornerLength: nr(),
      points: t8(4, 0),
      draw: function (e, t, n, r, i, a) {
        this.renderer.nodeShapeImpl(this.name, e, t, n, r, i, null, a);
      },
      generateCutTrianglePts: function (e, t, n, r, i) {
        var a = i === "auto" ? this.cornerLength : i;
        var o = t / 2;
        var s = e / 2;
        var l = n - s;
        var u = n + s;
        var h = r - o;
        var c = r + o;
        return {
          topLeft: [l, h + a, l + a, h, l + a, h + a],
          topRight: [u - a, h, u, h + a, u - a, h + a],
          bottomRight: [u, c - a, u - a, c, u - a, c - a],
          bottomLeft: [l + a, c, l, c - a, l + a, c - a]
        };
      },
      intersectLine: function (e, t, n, r, i, a, o, s) {
        var l = this.generateCutTrianglePts(n + o * 2, r + o * 2, e, t, s);
        return t4(i, a, [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]), e, t);
      },
      checkPoint: function (e, t, n, r, i, a, o, s) {
        var l = s === "auto" ? this.cornerLength : s;
        if (tZ(e, t, this.points, a, o, r, i - l * 2, [0, -1], n) || tZ(e, t, this.points, a, o, r - l * 2, i, [0, -1], n)) {
          return true;
        }
        var u = this.generateCutTrianglePts(r, i, a, o);
        return tK(e, t, u.topLeft) || tK(e, t, u.topRight) || tK(e, t, u.bottomRight) || tK(e, t, u.bottomLeft);
      }
    };
  };
  sA.generateBarrel = function () {
    return this.nodeShapes.barrel = {
      renderer: this,
      name: "barrel",
      points: t8(4, 0),
      draw: function (e, t, n, r, i, a) {
        this.renderer.nodeShapeImpl(this.name, e, t, n, r, i);
      },
      intersectLine: function (e, t, n, r, i, a, o, s) {
        var l = this.generateBarrelBezierPts(n + o * 2, r + o * 2, e, t);
        function u(e) {
          var t = tA({
            x: e[0],
            y: e[1]
          }, {
            x: e[2],
            y: e[3]
          }, {
            x: e[4],
            y: e[5]
          }, 0.15);
          var n = tA({
            x: e[0],
            y: e[1]
          }, {
            x: e[2],
            y: e[3]
          }, {
            x: e[4],
            y: e[5]
          }, 0.5);
          var r = tA({
            x: e[0],
            y: e[1]
          }, {
            x: e[2],
            y: e[3]
          }, {
            x: e[4],
            y: e[5]
          }, 0.85);
          return [e[0], e[1], t.x, t.y, n.x, n.y, r.x, r.y, e[4], e[5]];
        }
        return t4(i, a, [].concat(u(l.topLeft), u(l.topRight), u(l.bottomRight), u(l.bottomLeft)), e, t);
      },
      generateBarrelBezierPts: function (e, t, n, r) {
        var i = t / 2;
        var a = e / 2;
        var o = n - a;
        var s = n + a;
        var l = r - i;
        var u = r + i;
        var h = ni(e, t);
        var c = h.heightOffset;
        var d = h.widthOffset;
        var p = h.ctrlPtOffsetPct * e;
        var g = {
          topLeft: [o, l + c, o + p, l, o + d, l],
          topRight: [s - d, l, s - p, l, s, l + c],
          bottomRight: [s, u - c, s - p, u, s - d, u],
          bottomLeft: [o + d, u, o + p, u, o, u - c]
        };
        g.topLeft.isTop = true;
        g.topRight.isTop = true;
        g.bottomLeft.isBottom = true;
        g.bottomRight.isBottom = true;
        return g;
      },
      checkPoint: function (e, t, n, r, i, a, o, s) {
        var l = ni(r, i);
        var u = l.heightOffset;
        var h = l.widthOffset;
        if (tZ(e, t, this.points, a, o, r, i - u * 2, [0, -1], n) || tZ(e, t, this.points, a, o, r - h * 2, i, [0, -1], n)) {
          return true;
        }
        var c = this.generateBarrelBezierPts(r, i, a, o);
        var d = Object.keys(c);
        var p = 0;
        for (; p < d.length; p++) {
          var g = c[d[p]];
          var f = function (e, t, n) {
            var r = n[4];
            var i = n[2];
            var a = n[0];
            var o = n[5];
            var s = n[1];
            var l = Math.min(r, a);
            var u = Math.max(r, a);
            var h = Math.min(o, s);
            var c = Math.max(o, s);
            if (l <= e && e <= u && h <= t && t <= c) {
              var d = [r - i * 2 + a, (i - r) * 2, r];
              var p = tU(d[0], d[1], d[2], e).filter(function (e) {
                return e >= 0 && e <= 1;
              });
              if (p.length > 0) {
                return p[0];
              }
            }
            return null;
          }(e, t, g);
          if (f != null) {
            var v = tM(g[5], g[3], g[1], f);
            if (g.isTop && v <= t || g.isBottom && t <= v) {
              return true;
            }
          }
        }
        return false;
      }
    };
  };
  sA.generateBottomRoundrectangle = function () {
    return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
      renderer: this,
      name: "bottom-round-rectangle",
      points: t8(4, 0),
      draw: function (e, t, n, r, i, a) {
        this.renderer.nodeShapeImpl(this.name, e, t, n, r, i, this.points, a);
      },
      intersectLine: function (e, t, n, r, i, a, o, s) {
        var l = e - (n / 2 + o);
        var u = t - (r / 2 + o);
        var h = e + (n / 2 + o);
        var c = t3(i, a, e, t, l, u, h, u, false);
        if (c.length > 0) {
          return c;
        } else {
          return tG(i, a, e, t, n, r, o, s);
        }
      },
      checkPoint: function (e, t, n, r, i, a, o, s) {
        var l = (s = s === "auto" ? nt(r, i) : s) * 2;
        if (tZ(e, t, this.points, a, o, r, i - l, [0, -1], n) || tZ(e, t, this.points, a, o, r - l, i, [0, -1], n)) {
          return true;
        }
        var u = r / 2 + n * 2;
        var h = i / 2 + n * 2;
        return !!tK(e, t, [a - u, o - h, a - u, o, a + u, o, a + u, o - h]) || !!t1(e, t, l, l, a + r / 2 - s, o + i / 2 - s, n) || !!t1(e, t, l, l, a - r / 2 + s, o + i / 2 - s, n);
      }
    };
  };
  sA.registerNodeShapes = function () {
    var e = this.nodeShapes = {};
    var t = this;
    this.generateEllipse();
    this.generatePolygon("triangle", t8(3, 0));
    this.generateRoundPolygon("round-triangle", t8(3, 0));
    this.generatePolygon("rectangle", t8(4, 0));
    e.square = e.rectangle;
    this.generateRoundRectangle();
    this.generateCutRectangle();
    this.generateBarrel();
    this.generateBottomRoundrectangle();
    var n = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", n);
    this.generateRoundPolygon("round-diamond", n);
    this.generatePolygon("pentagon", t8(5, 0));
    this.generateRoundPolygon("round-pentagon", t8(5, 0));
    this.generatePolygon("hexagon", t8(6, 0));
    this.generateRoundPolygon("round-hexagon", t8(6, 0));
    this.generatePolygon("heptagon", t8(7, 0));
    this.generateRoundPolygon("round-heptagon", t8(7, 0));
    this.generatePolygon("octagon", t8(8, 0));
    this.generateRoundPolygon("round-octagon", t8(8, 0));
    var r = Array(20);
    var i = ne(5, 0);
    var a = ne(5, Math.PI / 5);
    var o = (3 - Math.sqrt(5)) * 0.5;
    o *= 1.57;
    for (var s = 0; s < a.length / 2; s++) {
      a[s * 2] *= o;
      a[s * 2 + 1] *= o;
    }
    for (var s = 0; s < 5; s++) {
      r[s * 4] = i[s * 2];
      r[s * 4 + 1] = i[s * 2 + 1];
      r[s * 4 + 2] = a[s * 2];
      r[s * 4 + 3] = a[s * 2 + 1];
    }
    r = t7(r);
    this.generatePolygon("star", r);
    this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]);
    this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]);
    this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]);
    this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
    var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", l);
    this.generateRoundPolygon("round-tag", l);
    e.makePolygon = function (e) {
      var n;
      var r = "polygon-" + e.join("$");
      if (n = this[r]) {
        return n;
      } else {
        return t.generatePolygon(r, e);
      }
    };
  };
  var sS = {
    timeToRender: function () {
      return this.redrawTotalTime / this.redrawCount;
    }
  };
  sS.redraw = function (e) {
    e = e || e5();
    if (this.averageRedrawTime === undefined) {
      this.averageRedrawTime = 0;
    }
    if (this.lastRedrawTime === undefined) {
      this.lastRedrawTime = 0;
    }
    if (this.lastDrawTime === undefined) {
      this.lastDrawTime = 0;
    }
    this.requestedFrame = true;
    this.renderOptions = e;
  };
  sS.beforeRender = function (e, t) {
    if (!this.destroyed) {
      if (t == null) {
        e$("Priority is not optional for beforeRender");
      }
      var n = this.beforeRenderCallbacks;
      n.push({
        fn: e,
        priority: t
      });
      n.sort(function (e, t) {
        return t.priority - e.priority;
      });
    }
  };
  function sP(e, t, n) {
    var r = e.beforeRenderCallbacks;
    var i = 0;
    for (; i < r.length; i++) {
      r[i].fn(t, n);
    }
  }
  sS.startRenderLoop = function () {
    var e = this;
    var t = e.cy;
    if (!e.renderLoopStarted) {
      e.renderLoopStarted = true;
      eL(function n(r) {
        if (!e.destroyed) {
          if (t.batching()) ;else if (e.requestedFrame && !e.skipFrame) {
            sP(e, true, r);
            var i = eO();
            e.render(e.renderOptions);
            var a = e.lastDrawTime = eO();
            if (e.averageRedrawTime === undefined) {
              e.averageRedrawTime = a - i;
            }
            if (e.redrawCount === undefined) {
              e.redrawCount = 0;
            }
            e.redrawCount++;
            if (e.redrawTotalTime === undefined) {
              e.redrawTotalTime = 0;
            }
            var o = a - i;
            e.redrawTotalTime += o;
            e.lastRedrawTime = o;
            e.averageRedrawTime = e.averageRedrawTime / 2 + o / 2;
            e.requestedFrame = false;
          } else {
            sP(e, false, r);
          }
          e.skipFrame = false;
          eL(n);
        }
      });
    }
  };
  function sO(e) {
    this.init(e);
  }
  var sI = sO.prototype;
  sI.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
  sI.init = function (e) {
    this.options = e;
    this.cy = e.cy;
    var t = this.container = e.cy.container();
    var n = this.cy.window();
    if (n) {
      var r = n.document;
      var i = r.head;
      var a = "__________cytoscape_stylesheet";
      var o = "__________cytoscape_container";
      var s = r.getElementById(a) != null;
      if (t.className.indexOf(o) < 0) {
        t.className = (t.className || "") + " " + o;
      }
      if (!s) {
        var l = r.createElement("style");
        l.id = a;
        l.textContent = "." + o + " { position: relative; }";
        i.insertBefore(l, i.children[0]);
      }
      if (n.getComputedStyle(t).getPropertyValue("position") === "static") {
        eJ("A Cytoscape container has style position:static and so can not use UI extensions properly");
      }
    }
    this.selection = [undefined, undefined, undefined, undefined, 0];
    this.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95];
    this.hoverData = {
      down: null,
      last: null,
      downTime: null,
      triggerMode: null,
      dragging: false,
      initialPan: [null, null],
      capture: false
    };
    this.dragData = {
      possibleDragElements: []
    };
    this.touchData = {
      start: null,
      capture: false,
      startPosition: [null, null, null, null, null, null],
      singleTouchStartTime: null,
      singleTouchMoved: true,
      now: [null, null, null, null, null, null],
      earlier: [null, null, null, null, null, null]
    };
    this.redraws = 0;
    this.showFps = e.showFps;
    this.debug = e.debug;
    this.hideEdgesOnViewport = e.hideEdgesOnViewport;
    this.textureOnViewport = e.textureOnViewport;
    this.wheelSensitivity = e.wheelSensitivity;
    this.motionBlurEnabled = e.motionBlur;
    this.forcedPixelRatio = S(e.pixelRatio) ? e.pixelRatio : null;
    this.motionBlur = e.motionBlur;
    this.motionBlurOpacity = e.motionBlurOpacity;
    this.motionBlurTransparency = 1 - this.motionBlurOpacity;
    this.motionBlurPxRatio = 1;
    this.mbPxRBlurry = 1;
    this.minMbLowQualFrames = 4;
    this.fullQualityMb = false;
    this.clearedForMotionBlur = [];
    this.desktopTapThreshold = e.desktopTapThreshold;
    this.desktopTapThreshold2 = e.desktopTapThreshold * e.desktopTapThreshold;
    this.touchTapThreshold = e.touchTapThreshold;
    this.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold;
    this.tapholdDuration = 500;
    this.bindings = [];
    this.beforeRenderCallbacks = [];
    this.beforeRenderPriorities = {
      animations: 400,
      eleCalcs: 300,
      eleTxrDeq: 200,
      lyrTxrDeq: 150,
      lyrTxrSkip: 100
    };
    this.registerNodeShapes();
    this.registerArrowShapes();
    this.registerCalculationListeners();
  };
  sI.notify = function (e, t) {
    var n = this.cy;
    if (!this.destroyed) {
      if (e === "init") {
        this.load();
        return;
      }
      if (e === "destroy") {
        this.destroy();
        return;
      }
      if (e === "add" || e === "remove" || e === "move" && n.hasCompoundNodes() || e === "load" || e === "zorder" || e === "mount") {
        this.invalidateCachedZSortedEles();
      }
      if (e === "viewport") {
        this.redrawHint("select", true);
      }
      if (e === "load" || e === "resize" || e === "mount") {
        this.invalidateContainerClientCoordsCache();
        this.matchCanvasSize(this.container);
      }
      this.redrawHint("eles", true);
      this.redrawHint("drag", true);
      this.startRenderLoop();
      this.redraw();
    }
  };
  sI.destroy = function () {
    this.destroyed = true;
    this.cy.stopAnimationLoop();
    for (var e = 0; e < this.bindings.length; e++) {
      var t = this.bindings[e];
      var n = t.target;
      (n.off || n.removeEventListener).apply(n, t.args);
    }
    this.bindings = [];
    this.beforeRenderCallbacks = [];
    this.onUpdateEleCalcsFns = [];
    if (this.removeObserver) {
      this.removeObserver.disconnect();
    }
    if (this.styleObserver) {
      this.styleObserver.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.labelCalcDiv) {
      try {
        document.body.removeChild(this.labelCalcDiv);
      } catch (e) {}
    }
  };
  sI.isHeadless = function () {
    return false;
  };
  [oY, s_, sD, sM, sA, sS].forEach(function (e) {
    Z(sI, e);
  });
  var sL = 1000 / 60;
  function sk(e) {
    return function () {
      var t = this;
      var n = this.renderer;
      if (!t.dequeueingSetup) {
        t.dequeueingSetup = true;
        var r = eS(function () {
          n.redrawHint("eles", true);
          n.redrawHint("drag", true);
          n.redraw();
        }, e.deqRedrawThreshold);
        var i = e.priority || eZ;
        n.beforeRender(function (i, a) {
          var o = eO();
          var s = n.averageRedrawTime;
          var l = n.lastRedrawTime;
          var u = [];
          var h = n.cy.extent();
          var c = n.getPixelRatio();
          for (i || n.flushRenderedStyleQueue();;) {
            var d = eO();
            var p = d - o;
            var g = d - a;
            if (l < sL) {
              var f = sL - (i ? s : 0);
              if (g >= e.deqFastCost * f) {
                break;
              }
            } else if (i) {
              if (p >= e.deqCost * l || p >= e.deqAvgCost * s) {
                break;
              }
            } else if (g >= e.deqNoDrawCost * sL) {
              break;
            }
            var v = e.deq(t, c, h);
            if (v.length > 0) {
              for (var y = 0; y < v.length; y++) {
                u.push(v[y]);
              }
            } else {
              break;
            }
          }
          if (u.length > 0) {
            e.onDeqd(t, u);
            if (!i && e.shouldRedraw(t, u, c, h)) {
              r();
            }
          }
        }, i(t));
      }
    };
  }
  var sR = function () {
    function e(t, n = eq) {
      i(this, e);
      this.idsByKey = new tt();
      this.keyForId = new tt();
      this.cachesByLvl = new tt();
      this.lvls = [];
      this.getKey = t;
      this.doesEleInvalidateKey = n;
    }
    o(e, [{
      key: "getIdsFor",
      value: function (e) {
        if (e == null) {
          e$("Can not get id list for null key");
        }
        var t = this.idsByKey;
        var n = this.idsByKey.get(e);
        if (!n) {
          n = new tr();
          t.set(e, n);
        }
        return n;
      }
    }, {
      key: "addIdForKey",
      value: function (e, t) {
        if (e != null) {
          this.getIdsFor(e).add(t);
        }
      }
    }, {
      key: "deleteIdForKey",
      value: function (e, t) {
        if (e != null) {
          this.getIdsFor(e).delete(t);
        }
      }
    }, {
      key: "getNumberOfIdsForKey",
      value: function (e) {
        if (e == null) {
          return 0;
        } else {
          return this.getIdsFor(e).size;
        }
      }
    }, {
      key: "updateKeyMappingFor",
      value: function (e) {
        var t = e.id();
        var n = this.keyForId.get(t);
        var r = this.getKey(e);
        this.deleteIdForKey(n, t);
        this.addIdForKey(r, t);
        this.keyForId.set(t, r);
      }
    }, {
      key: "deleteKeyMappingFor",
      value: function (e) {
        var t = e.id();
        var n = this.keyForId.get(t);
        this.deleteIdForKey(n, t);
        this.keyForId.delete(t);
      }
    }, {
      key: "keyHasChangedFor",
      value: function (e) {
        var t = e.id();
        return this.keyForId.get(t) !== this.getKey(e);
      }
    }, {
      key: "isInvalid",
      value: function (e) {
        return this.keyHasChangedFor(e) || this.doesEleInvalidateKey(e);
      }
    }, {
      key: "getCachesAt",
      value: function (e) {
        var t = this.cachesByLvl;
        var n = this.lvls;
        var r = t.get(e);
        if (!r) {
          r = new tt();
          t.set(e, r);
          n.push(e);
        }
        return r;
      }
    }, {
      key: "getCache",
      value: function (e, t) {
        return this.getCachesAt(t).get(e);
      }
    }, {
      key: "get",
      value: function (e, t) {
        var n = this.getKey(e);
        var r = this.getCache(n, t);
        if (r != null) {
          this.updateKeyMappingFor(e);
        }
        return r;
      }
    }, {
      key: "getForCachedKey",
      value: function (e, t) {
        var n = this.keyForId.get(e.id());
        return this.getCache(n, t);
      }
    }, {
      key: "hasCache",
      value: function (e, t) {
        return this.getCachesAt(t).has(e);
      }
    }, {
      key: "has",
      value: function (e, t) {
        var n = this.getKey(e);
        return this.hasCache(n, t);
      }
    }, {
      key: "setCache",
      value: function (e, t, n) {
        n.key = e;
        this.getCachesAt(t).set(e, n);
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        var r = this.getKey(e);
        this.setCache(r, t, n);
        this.updateKeyMappingFor(e);
      }
    }, {
      key: "deleteCache",
      value: function (e, t) {
        this.getCachesAt(t).delete(e);
      }
    }, {
      key: "delete",
      value: function (e, t) {
        var n = this.getKey(e);
        this.deleteCache(n, t);
      }
    }, {
      key: "invalidateKey",
      value: function (e) {
        var t = this;
        this.lvls.forEach(function (n) {
          return t.deleteCache(e, n);
        });
      }
    }, {
      key: "invalidate",
      value: function (e) {
        var t = e.id();
        var n = this.keyForId.get(t);
        this.deleteKeyMappingFor(e);
        var r = this.doesEleInvalidateKey(e);
        if (r) {
          this.invalidateKey(n);
        }
        return r || this.getNumberOfIdsForKey(n) === 0;
      }
    }]);
    return e;
  }();
  var sB = {
    dequeue: "dequeue",
    downscale: "downscale",
    highQuality: "highQuality"
  };
  var sF = e3({
    getKey: null,
    doesEleInvalidateKey: eq,
    drawElement: null,
    getBoundingBox: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: ej,
    allowEdgeTxrCaching: true,
    allowParentTxrCaching: true
  });
  function sz(e, t) {
    this.renderer = e;
    this.onDequeues = [];
    var n = sF(t);
    Z(this, n);
    this.lookup = new sR(n.getKey, n.doesEleInvalidateKey);
    this.setupDequeueing();
  }
  var sV = sz.prototype;
  sV.reasons = sB;
  sV.getTextureQueue = function (e) {
    this.eleImgCaches = this.eleImgCaches || {};
    return this.eleImgCaches[e] = this.eleImgCaches[e] || [];
  };
  sV.getRetiredTextureQueue = function (e) {
    var t = this.eleImgCaches.retired = this.eleImgCaches.retired || {};
    return t[e] = t[e] || [];
  };
  sV.getElementQueue = function () {
    return this.eleCacheQueue = this.eleCacheQueue || new ts(function (e, t) {
      return t.reqs - e.reqs;
    });
  };
  sV.getElementKeyToQueue = function () {
    return this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {};
  };
  sV.getElement = function (e, t, n, r, i) {
    var a;
    var o;
    var s;
    var l = this;
    var u = this.renderer;
    var h = u.cy.zoom();
    var c = this.lookup;
    if (!t || t.w === 0 || t.h === 0 || isNaN(t.w) || isNaN(t.h) || !e.visible() || e.removed() || !l.allowEdgeTxrCaching && e.isEdge() || !l.allowParentTxrCaching && e.isParent()) {
      return null;
    }
    if (r == null) {
      r = Math.ceil(tT(h * n));
    }
    if (r < -4) {
      r = -4;
    } else if (h >= 7.99 || r > 3) {
      return null;
    }
    var d = Math.pow(2, r);
    var p = t.h * d;
    var g = t.w * d;
    var f = u.eleTextBiggerThanMin(e, d);
    if (!this.isVisible(e, f)) {
      return null;
    }
    var v = c.get(e, r);
    if (v && v.invalidated) {
      v.invalidated = false;
      v.texture.invalidatedWidth -= v.width;
    }
    if (v) {
      return v;
    }
    a = p <= 25 ? 25 : p <= 50 ? 50 : Math.ceil(p / 50) * 50;
    if (p > 1024 || g > 1024) {
      return null;
    }
    var y = l.getTextureQueue(a);
    var b = y[y.length - 2];
    function x() {
      return l.recycleTexture(a, g) || l.addTexture(a, g);
    }
    b ||= y[y.length - 1];
    b ||= x();
    if (b.width - b.usedWidth < g) {
      b = x();
    }
    function w(e) {
      return e && e.scaledLabelShown === f;
    }
    var E = i && i === sB.dequeue;
    var T = i && i === sB.highQuality;
    var C = i && i === sB.downscale;
    var N = r + 1;
    for (; N <= 3; N++) {
      var _ = c.get(e, N);
      if (_) {
        o = _;
        break;
      }
    }
    var D = o && o.level === r + 1 ? o : null;
    function M() {
      b.context.drawImage(D.texture.canvas, D.x, 0, D.width, D.height, b.usedWidth, 0, g, p);
    }
    b.context.setTransform(1, 0, 0, 1, 0, 0);
    b.context.clearRect(b.usedWidth, 0, g, a);
    if (w(D)) {
      M();
    } else if (w(o)) {
      if (!T) {
        l.queueElement(e, o.level - 1);
        return o;
      }
      for (var A = o.level; A > r; A--) {
        D = l.getElement(e, t, n, A, sB.downscale);
      }
      M();
    } else {
      if (!E && !T && !C) {
        for (var S = r - 1; S >= -4; S--) {
          var P = c.get(e, S);
          if (P) {
            s = P;
            break;
          }
        }
      }
      if (w(s)) {
        l.queueElement(e, r);
        return s;
      }
      b.context.translate(b.usedWidth, 0);
      b.context.scale(d, d);
      this.drawElement(b.context, e, t, f, false);
      b.context.scale(1 / d, 1 / d);
      b.context.translate(-b.usedWidth, 0);
    }
    v = {
      x: b.usedWidth,
      texture: b,
      level: r,
      scale: d,
      width: g,
      height: p,
      scaledLabelShown: f
    };
    b.usedWidth += Math.ceil(g + 8);
    b.eleCaches.push(v);
    c.set(e, r, v);
    l.checkTextureFullness(b);
    return v;
  };
  sV.invalidateElements = function (e) {
    for (var t = 0; t < e.length; t++) {
      this.invalidateElement(e[t]);
    }
  };
  sV.invalidateElement = function (e) {
    var t = this.lookup;
    var n = [];
    if (t.isInvalid(e)) {
      for (var r = -4; r <= 3; r++) {
        var i = t.getForCachedKey(e, r);
        if (i) {
          n.push(i);
        }
      }
      if (t.invalidate(e)) {
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          var s = o.texture;
          s.invalidatedWidth += o.width;
          o.invalidated = true;
          this.checkTextureUtility(s);
        }
      }
      this.removeFromQueue(e);
    }
  };
  sV.checkTextureUtility = function (e) {
    if (e.invalidatedWidth >= e.width * 0.2) {
      this.retireTexture(e);
    }
  };
  sV.checkTextureFullness = function (e) {
    var t = this.getTextureQueue(e.height);
    if (e.usedWidth / e.width > 0.8 && e.fullnessChecks >= 10) {
      e4(t, e);
    } else {
      e.fullnessChecks++;
    }
  };
  sV.retireTexture = function (e) {
    var t = e.height;
    var n = this.getTextureQueue(t);
    var r = this.lookup;
    e4(n, e);
    e.retired = true;
    var i = e.eleCaches;
    var a = 0;
    for (; a < i.length; a++) {
      var o = i[a];
      r.deleteCache(o.key, o.level);
    }
    e9(i);
    this.getRetiredTextureQueue(t).push(e);
  };
  sV.addTexture = function (e, t) {
    var n = this.getTextureQueue(e);
    var r = {};
    n.push(r);
    r.eleCaches = [];
    r.height = e;
    r.width = Math.max(1024, t);
    r.usedWidth = 0;
    r.invalidatedWidth = 0;
    r.fullnessChecks = 0;
    r.canvas = this.renderer.makeOffscreenCanvas(r.width, r.height);
    r.context = r.canvas.getContext("2d");
    return r;
  };
  sV.recycleTexture = function (e, t) {
    var n = this.getTextureQueue(e);
    var r = this.getRetiredTextureQueue(e);
    var i = 0;
    for (; i < r.length; i++) {
      var a = r[i];
      if (a.width >= t) {
        a.retired = false;
        a.usedWidth = 0;
        a.invalidatedWidth = 0;
        a.fullnessChecks = 0;
        e9(a.eleCaches);
        a.context.setTransform(1, 0, 0, 1, 0, 0);
        a.context.clearRect(0, 0, a.width, a.height);
        e4(r, a);
        n.push(a);
        return a;
      }
    }
  };
  sV.queueElement = function (e, t) {
    var n = this.getElementQueue();
    var r = this.getElementKeyToQueue();
    var i = this.getKey(e);
    var a = r[i];
    if (a) {
      a.level = Math.max(a.level, t);
      a.eles.merge(e);
      a.reqs++;
      n.updateItem(a);
    } else {
      var o = {
        eles: e.spawn().merge(e),
        level: t,
        reqs: 1,
        key: i
      };
      n.push(o);
      r[i] = o;
    }
  };
  sV.dequeue = function (e) {
    var t = this.getElementQueue();
    var n = this.getElementKeyToQueue();
    var r = [];
    var i = this.lookup;
    var a = 0;
    for (; a < 1; a++) {
      if (t.size() > 0) {
        var o = t.pop();
        var s = o.key;
        var l = o.eles[0];
        var u = i.hasCache(l, o.level);
        n[s] = null;
        if (u) {
          continue;
        }
        r.push(o);
        var h = this.getBoundingBox(l);
        this.getElement(l, h, e, o.level, sB.dequeue);
      } else {
        break;
      }
    }
    return r;
  };
  sV.removeFromQueue = function (e) {
    var t = this.getElementQueue();
    var n = this.getElementKeyToQueue();
    var r = this.getKey(e);
    var i = n[r];
    if (i != null) {
      if (i.eles.length === 1) {
        i.reqs = eW;
        t.updateItem(i);
        t.pop();
        n[r] = null;
      } else {
        i.eles.unmerge(e);
      }
    }
  };
  sV.onDequeue = function (e) {
    this.onDequeues.push(e);
  };
  sV.offDequeue = function (e) {
    e4(this.onDequeues, e);
  };
  sV.setupDequeueing = sk({
    deqRedrawThreshold: 100,
    deqCost: 0.15,
    deqAvgCost: 0.1,
    deqNoDrawCost: 0.9,
    deqFastCost: 0.9,
    deq: function (e, t, n) {
      return e.dequeue(t, n);
    },
    onDeqd: function (e, t) {
      for (var n = 0; n < e.onDequeues.length; n++) {
        e.onDequeues[n](t);
      }
    },
    shouldRedraw: function (e, t, n, r) {
      for (var i = 0; i < t.length; i++) {
        var a = t[i].eles;
        var o = 0;
        for (; o < a.length; o++) {
          if (tz(a[o].boundingBox(), r)) {
            return true;
          }
        }
      }
      return false;
    },
    priority: function (e) {
      return e.renderer.beforeRenderPriorities.eleTxrDeq;
    }
  });
  function sY(e) {
    var t = this;
    var n = t.renderer = e;
    var r = n.cy;
    t.layersByLevel = {};
    t.firstGet = true;
    t.lastInvalidationTime = eO() - 500;
    t.skipping = false;
    t.eleTxrDeqs = r.collection();
    t.scheduleElementRefinement = eS(function () {
      t.refineElementTextures(t.eleTxrDeqs);
      t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
    }, 50);
    n.beforeRender(function (e, n) {
      if (n - t.lastInvalidationTime <= 250) {
        t.skipping = true;
      } else {
        t.skipping = false;
      }
    }, n.beforeRenderPriorities.lyrTxrSkip);
    t.layersQueue = new ts(function (e, t) {
      return t.reqs - e.reqs;
    });
    t.setupDequeueing();
  }
  var sG = sY.prototype;
  var sX = 0;
  sG.makeLayer = function (e, t) {
    var n = Math.pow(2, t);
    var r = Math.ceil(e.w * n);
    var i = Math.ceil(e.h * n);
    var a = this.renderer.makeOffscreenCanvas(r, i);
    var o = {
      id: sX = ++sX % 9007199254740991,
      bb: e,
      level: t,
      width: r,
      height: i,
      canvas: a,
      context: a.getContext("2d"),
      eles: [],
      elesQueue: [],
      reqs: 0
    };
    var s = o.context;
    var l = -o.bb.x1;
    var u = -o.bb.y1;
    s.scale(n, n);
    s.translate(l, u);
    return o;
  };
  sG.getLayers = function (e, t, n) {
    var r;
    var i;
    var a = this;
    var o = a.renderer.cy.zoom();
    var s = a.firstGet;
    a.firstGet = false;
    if (n == null) {
      if ((n = Math.ceil(tT(o * t))) < -4) {
        n = -4;
      } else if (o >= 3.99 || n > 2) {
        return null;
      }
    }
    a.validateLayersElesOrdering(n, e);
    var l = a.layersByLevel;
    var u = Math.pow(2, n);
    var h = l[n] = l[n] || [];
    if (a.levelIsComplete(n, e)) {
      return h;
    }
    (function () {
      function t(t) {
        a.validateLayersElesOrdering(t, e);
        if (a.levelIsComplete(t, e)) {
          i = l[t];
          return true;
        }
      }
      function r(e) {
        if (!i) {
          for (var r = n + e; r >= -4 && r <= 2 && !t(r); r += e);
        }
      }
      r(1);
      r(-1);
      for (var o = h.length - 1; o >= 0; o--) {
        var s = h[o];
        if (s.invalid) {
          e4(h, s);
        }
      }
    })();
    function c() {
      if (!r) {
        r = tO();
        for (var t = 0; t < e.length; t++) {
          tL(r, e[t].boundingBox());
        }
      }
      return r;
    }
    if (a.skipping && !s) {
      return null;
    }
    var d = null;
    var p = e.length / 1;
    var g = !s;
    var f = 0;
    for (; f < e.length; f++) {
      var v = e[f];
      var y = v._private.rscratch;
      var b = y.imgLayerCaches = y.imgLayerCaches || {};
      var x = b[n];
      if (x) {
        d = x;
        continue;
      }
      if ((!d || d.eles.length >= p || !tY(d.bb, v.boundingBox())) && !(d = function (e) {
        var t = (e = e || {}).after;
        c();
        var i = Math.ceil(r.w * u);
        var o = Math.ceil(r.h * u);
        if (i > 32767 || o > 32767 || i * o > 16000000) {
          return null;
        }
        var s = a.makeLayer(r, n);
        if (t != null) {
          var l = h.indexOf(t) + 1;
          h.splice(l, 0, s);
        } else if (e.insert === undefined || e.insert) {
          h.unshift(s);
        }
        return s;
      }({
        insert: true,
        after: d
      }))) {
        return null;
      }
      if (i || g) {
        a.queueLayer(d, v);
      } else {
        a.drawEleInLayer(d, v, n, t);
      }
      d.eles.push(v);
      b[n] = d;
    }
    return i || (g ? null : h);
  };
  sG.getEleLevelForLayerLevel = function (e, t) {
    return e;
  };
  sG.drawEleInLayer = function (e, t, n, r) {
    var i = this.renderer;
    var a = e.context;
    var o = t.boundingBox();
    if (o.w !== 0 && o.h !== 0 && t.visible()) {
      n = this.getEleLevelForLayerLevel(n, r);
      i.setImgSmoothing(a, false);
      i.drawCachedElement(a, t, null, null, n, true);
      i.setImgSmoothing(a, true);
    }
  };
  sG.levelIsComplete = function (e, t) {
    var n = this.layersByLevel[e];
    if (!n || n.length === 0) {
      return false;
    }
    var r = 0;
    var i = 0;
    for (; i < n.length; i++) {
      var a = n[i];
      if (a.reqs > 0 || a.invalid) {
        return false;
      }
      r += a.eles.length;
    }
    return r === t.length;
  };
  sG.validateLayersElesOrdering = function (e, t) {
    var n = this.layersByLevel[e];
    if (n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        var a = -1;
        var o = 0;
        for (; o < t.length; o++) {
          if (i.eles[0] === t[o]) {
            a = o;
            break;
          }
        }
        if (a < 0) {
          this.invalidateLayer(i);
          continue;
        }
        var s = a;
        var o = 0;
        for (; o < i.eles.length; o++) {
          if (i.eles[o] !== t[s + o]) {
            this.invalidateLayer(i);
            break;
          }
        }
      }
    }
  };
  sG.updateElementsInLayers = function (e, t) {
    var n = I(e[0]);
    var r = 0;
    for (; r < e.length; r++) {
      var i = n ? null : e[r];
      var a = n ? e[r] : e[r].ele;
      var o = a._private.rscratch;
      var s = o.imgLayerCaches = o.imgLayerCaches || {};
      var l = -4;
      for (; l <= 2; l++) {
        var u = s[l];
        if (u && (!i || this.getEleLevelForLayerLevel(u.level) === i.level)) {
          t(u, a, i);
        }
      }
    }
  };
  sG.haveLayers = function () {
    var e = false;
    var t = -4;
    for (; t <= 2; t++) {
      var n = this.layersByLevel[t];
      if (n && n.length > 0) {
        e = true;
        break;
      }
    }
    return e;
  };
  sG.invalidateElements = function (e) {
    var t = this;
    if (e.length !== 0) {
      t.lastInvalidationTime = eO();
      if (e.length !== 0 && t.haveLayers()) {
        t.updateElementsInLayers(e, function (e, n, r) {
          t.invalidateLayer(e);
        });
      }
    }
  };
  sG.invalidateLayer = function (e) {
    this.lastInvalidationTime = eO();
    if (!e.invalid) {
      var t = e.level;
      var n = e.eles;
      e4(this.layersByLevel[t], e);
      e.elesQueue = [];
      e.invalid = true;
      if (e.replacement) {
        e.replacement.invalid = true;
      }
      for (var r = 0; r < n.length; r++) {
        var i = n[r]._private.rscratch.imgLayerCaches;
        if (i) {
          i[t] = null;
        }
      }
    }
  };
  sG.refineElementTextures = function (e) {
    var t = this;
    t.updateElementsInLayers(e, function (e, n, r) {
      var i = e.replacement;
      if (!i) {
        (i = e.replacement = t.makeLayer(e.bb, e.level)).replaces = e;
        i.eles = e.eles;
      }
      if (!i.reqs) {
        for (var a = 0; a < i.eles.length; a++) {
          t.queueLayer(i, i.eles[a]);
        }
      }
    });
  };
  sG.enqueueElementRefinement = function (e) {
    this.eleTxrDeqs.merge(e);
    this.scheduleElementRefinement();
  };
  sG.queueLayer = function (e, t) {
    var n = this.layersQueue;
    var r = e.elesQueue;
    var i = r.hasId = r.hasId || {};
    if (!e.replacement) {
      if (t) {
        if (i[t.id()]) {
          return;
        }
        r.push(t);
        i[t.id()] = true;
      }
      if (e.reqs) {
        e.reqs++;
        n.updateItem(e);
      } else {
        e.reqs = 1;
        n.push(e);
      }
    }
  };
  sG.dequeue = function (e) {
    var t = this.layersQueue;
    var n = [];
    var r = 0;
    while (r < 1 && t.size() !== 0) {
      var i = t.peek();
      if (i.replacement || i.replaces && i !== i.replaces.replacement || i.invalid) {
        t.pop();
        continue;
      }
      var a = i.elesQueue.shift();
      if (a) {
        this.drawEleInLayer(i, a, i.level, e);
        r++;
      }
      if (n.length === 0) {
        n.push(true);
      }
      if (i.elesQueue.length === 0) {
        t.pop();
        i.reqs = 0;
        if (i.replaces) {
          this.applyLayerReplacement(i);
        }
        this.requestRedraw();
      }
    }
    return n;
  };
  sG.applyLayerReplacement = function (e) {
    var t = this.layersByLevel[e.level];
    var n = e.replaces;
    var r = t.indexOf(n);
    if (!(r < 0) && !n.invalid) {
      t[r] = e;
      for (var i = 0; i < e.eles.length; i++) {
        var a = e.eles[i]._private;
        var o = a.imgLayerCaches = a.imgLayerCaches || {};
        if (o) {
          o[e.level] = e;
        }
      }
      this.requestRedraw();
    }
  };
  sG.requestRedraw = eS(function () {
    var e = this.renderer;
    e.redrawHint("eles", true);
    e.redrawHint("drag", true);
    e.redraw();
  }, 100);
  sG.setupDequeueing = sk({
    deqRedrawThreshold: 50,
    deqCost: 0.15,
    deqAvgCost: 0.1,
    deqNoDrawCost: 0.9,
    deqFastCost: 0.9,
    deq: function (e, t) {
      return e.dequeue(t);
    },
    onDeqd: eZ,
    shouldRedraw: ej,
    priority: function (e) {
      return e.renderer.beforeRenderPriorities.lyrTxrDeq;
    }
  });
  var sH = {};
  function sU(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      e.lineTo(r.x, r.y);
    }
  }
  function sW(e, t, n) {
    var r;
    var i = 0;
    for (; i < t.length; i++) {
      var a = t[i];
      if (i === 0) {
        r = a;
      }
      e.lineTo(a.x, a.y);
    }
    e.quadraticCurveTo(n.x, n.y, r.x, r.y);
  }
  function sj(e, t, n) {
    if (e.beginPath) {
      e.beginPath();
    }
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      e.lineTo(i.x, i.y);
    }
    var a = n[0];
    e.moveTo(a.x, a.y);
    for (var r = 1; r < n.length; r++) {
      var i = n[r];
      e.lineTo(i.x, i.y);
    }
    if (e.closePath) {
      e.closePath();
    }
  }
  function sq(e, t, n, r, i) {
    if (e.beginPath) {
      e.beginPath();
    }
    e.arc(n, r, i, 0, Math.PI * 2, false);
    var a = t[0];
    e.moveTo(a.x, a.y);
    for (var o = 0; o < t.length; o++) {
      var s = t[o];
      e.lineTo(s.x, s.y);
    }
    if (e.closePath) {
      e.closePath();
    }
  }
  function sK(e, t, n, r) {
    e.arc(t, n, r, 0, Math.PI * 2, false);
  }
  sH.arrowShapeImpl = function (e) {
    return (y ||= {
      polygon: sU,
      "triangle-backcurve": sW,
      "triangle-tee": sj,
      "circle-triangle": sq,
      "triangle-cross": sj,
      circle: sK
    })[e];
  };
  var sZ = {};
  sZ.drawElement = function (e, t, n, r, i, a) {
    if (t.isNode()) {
      this.drawNode(e, t, n, r, i, a);
    } else {
      this.drawEdge(e, t, n, r, i, a);
    }
  };
  sZ.drawElementOverlay = function (e, t) {
    if (t.isNode()) {
      this.drawNodeOverlay(e, t);
    } else {
      this.drawEdgeOverlay(e, t);
    }
  };
  sZ.drawElementUnderlay = function (e, t) {
    if (t.isNode()) {
      this.drawNodeUnderlay(e, t);
    } else {
      this.drawEdgeUnderlay(e, t);
    }
  };
  sZ.drawCachedElementPortion = function (e, t, n, r, i, a, o, s) {
    var l = n.getBoundingBox(t);
    if (l.w !== 0 && l.h !== 0) {
      var u = n.getElement(t, l, r, i, a);
      if (u != null) {
        var h;
        var c;
        var d;
        var p;
        var g;
        var f;
        var v = s(this, t);
        if (v === 0) {
          return;
        }
        var y = o(this, t);
        var b = l.x1;
        var x = l.y1;
        var w = l.w;
        var E = l.h;
        if (y !== 0) {
          var T = n.getRotationPoint(t);
          d = T.x;
          p = T.y;
          e.translate(d, p);
          e.rotate(y);
          if (!(g = this.getImgSmoothing(e))) {
            this.setImgSmoothing(e, true);
          }
          var C = n.getRotationOffset(t);
          h = C.x;
          c = C.y;
        } else {
          h = b;
          c = x;
        }
        if (v !== 1) {
          f = e.globalAlpha;
          e.globalAlpha = f * v;
        }
        e.drawImage(u.texture.canvas, u.x, 0, u.width, u.height, h, c, w, E);
        if (v !== 1) {
          e.globalAlpha = f;
        }
        if (y !== 0) {
          e.rotate(-y);
          e.translate(-d, -p);
          if (!g) {
            this.setImgSmoothing(e, false);
          }
        }
      } else {
        n.drawElement(e, t);
      }
    }
  };
  function s$() {
    return 0;
  }
  function sQ(e, t) {
    return e.getTextAngle(t, null);
  }
  function sJ(e, t) {
    return e.getTextAngle(t, "source");
  }
  function s0(e, t) {
    return e.getTextAngle(t, "target");
  }
  function s1(e, t) {
    return t.effectiveOpacity();
  }
  function s2(e, t) {
    return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
  }
  sZ.drawCachedElement = function (e, t, n, r, i, a) {
    var o = this.data;
    var s = o.eleTxrCache;
    var l = o.lblTxrCache;
    var u = o.slbTxrCache;
    var h = o.tlbTxrCache;
    var c = t.boundingBox();
    var d = a === true ? s.reasons.highQuality : null;
    if (c.w !== 0 && c.h !== 0 && t.visible() && (!r || tz(c, r))) {
      var p = t.isEdge();
      var g = t.element()._private.rscratch.badLine;
      this.drawElementUnderlay(e, t);
      this.drawCachedElementPortion(e, t, s, n, i, d, s$, s1);
      if (!p || !g) {
        this.drawCachedElementPortion(e, t, l, n, i, d, sQ, s2);
      }
      if (p && !g) {
        this.drawCachedElementPortion(e, t, u, n, i, d, sJ, s2);
        this.drawCachedElementPortion(e, t, h, n, i, d, s0, s2);
      }
      this.drawElementOverlay(e, t);
    }
  };
  sZ.drawElements = function (e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      this.drawElement(e, r);
    }
  };
  sZ.drawCachedElements = function (e, t, n, r) {
    for (var i = 0; i < t.length; i++) {
      var a = t[i];
      this.drawCachedElement(e, a, n, r);
    }
  };
  sZ.drawCachedNodes = function (e, t, n, r) {
    for (var i = 0; i < t.length; i++) {
      var a = t[i];
      if (a.isNode()) {
        this.drawCachedElement(e, a, n, r);
      }
    }
  };
  sZ.drawLayeredElements = function (e, t, n, r) {
    var i = this.data.lyrTxrCache.getLayers(t, n);
    if (i) {
      for (var a = 0; a < i.length; a++) {
        var o = i[a];
        var s = o.bb;
        if (s.w !== 0 && s.h !== 0) {
          e.drawImage(o.canvas, s.x1, s.y1, s.w, s.h);
        }
      }
    } else {
      this.drawCachedElements(e, t, n, r);
    }
  };
  var s5 = {};
  s5.drawEdge = function (e, t, n) {
    var r;
    var i = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    var a = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    var o = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
    var s = this;
    var l = t._private.rscratch;
    if ((!o || !!t.visible()) && !l.badLine && l.allpts != null && !isNaN(l.allpts[0])) {
      if (n) {
        r = n;
        e.translate(-r.x1, -r.y1);
      }
      var u = o ? t.pstyle("opacity").value : 1;
      var h = o ? t.pstyle("line-opacity").value : 1;
      var c = t.pstyle("curve-style").value;
      var d = t.pstyle("line-style").value;
      var p = t.pstyle("width").pfValue;
      var g = t.pstyle("line-cap").value;
      var f = t.pstyle("line-outline-width").value;
      var v = t.pstyle("line-outline-color").value;
      var y = u * h;
      var b = u * h;
      function x(n = y) {
        if (c === "straight-triangle") {
          s.eleStrokeStyle(e, t, n);
          s.drawEdgeTrianglePath(t, e, l.allpts);
        } else {
          e.lineWidth = p;
          e.lineCap = g;
          s.eleStrokeStyle(e, t, n);
          s.drawEdgePath(t, e, l.allpts, d);
          e.lineCap = "butt";
        }
      }
      function w(n = b) {
        s.drawArrowheads(e, t, n);
      }
      e.lineJoin = "round";
      if (t.pstyle("ghost").value === "yes") {
        var E = t.pstyle("ghost-offset-x").pfValue;
        var T = t.pstyle("ghost-offset-y").pfValue;
        var C = y * t.pstyle("ghost-opacity").value;
        e.translate(E, T);
        x(C);
        w(C);
        e.translate(-E, -T);
      } else {
        (function (n = y) {
          e.lineWidth = p + f;
          e.lineCap = g;
          if (f > 0) {
            s.colorStrokeStyle(e, v[0], v[1], v[2], n);
          } else {
            e.lineCap = "butt";
            return;
          }
          if (c === "straight-triangle") {
            s.drawEdgeTrianglePath(t, e, l.allpts);
          } else {
            s.drawEdgePath(t, e, l.allpts, d);
            e.lineCap = "butt";
          }
        })();
      }
      if (a) {
        s.drawEdgeUnderlay(e, t);
      }
      x();
      w();
      if (a) {
        s.drawEdgeOverlay(e, t);
      }
      s.drawElementText(e, t, null, i);
      if (n) {
        e.translate(r.x1, r.y1);
      }
    }
  };
  function s3(e) {
    if (!["overlay", "underlay"].includes(e)) {
      throw Error("Invalid state");
    }
    return function (t, n) {
      if (n.visible()) {
        var r = n.pstyle(`${e}-opacity`).value;
        if (r !== 0) {
          var i = this.usePaths();
          var a = n._private.rscratch;
          var o = n.pstyle(`${e}-padding`).pfValue;
          var s = n.pstyle(`${e}-color`).value;
          t.lineWidth = o * 2;
          if (a.edgeType !== "self" || i) {
            t.lineCap = "round";
          } else {
            t.lineCap = "butt";
          }
          this.colorStrokeStyle(t, s[0], s[1], s[2], r);
          this.drawEdgePath(n, t, a.allpts, "solid");
        }
      }
    };
  }
  s5.drawEdgeOverlay = s3("overlay");
  s5.drawEdgeUnderlay = s3("underlay");
  s5.drawEdgePath = function (e, t, n, r) {
    var i = e._private.rscratch;
    var a = t;
    var o = false;
    var s = this.usePaths();
    var l = e.pstyle("line-dash-pattern").pfValue;
    var u = e.pstyle("line-dash-offset").pfValue;
    if (s) {
      var h = n.join("$");
      if (i.pathCacheKey && i.pathCacheKey === h) {
        g = t = i.pathCache;
        o = true;
      } else {
        g = t = new Path2D();
        i.pathCacheKey = h;
        i.pathCache = g;
      }
    }
    if (a.setLineDash) {
      switch (r) {
        case "dotted":
          a.setLineDash([1, 1]);
          break;
        case "dashed":
          a.setLineDash(l);
          a.lineDashOffset = u;
          break;
        case "solid":
          a.setLineDash([]);
      }
    }
    if (!o && !i.badLine) {
      if (t.beginPath) {
        t.beginPath();
      }
      t.moveTo(n[0], n[1]);
      switch (i.edgeType) {
        case "bezier":
        case "self":
        case "compound":
        case "multibezier":
          for (var d = 2; d + 3 < n.length; d += 4) {
            t.quadraticCurveTo(n[d], n[d + 1], n[d + 2], n[d + 3]);
          }
          break;
        case "straight":
        case "haystack":
          for (var p = 2; p + 1 < n.length; p += 2) {
            t.lineTo(n[p], n[p + 1]);
          }
          break;
        case "segments":
          if (i.isRound) {
            var g;
            var f;
            var v = c(i.roundCorners);
            try {
              for (v.s(); !(f = v.n()).done;) {
                var y = f.value;
                sd(t, y);
              }
            } catch (e) {
              v.e(e);
            } finally {
              v.f();
            }
            t.lineTo(n[n.length - 2], n[n.length - 1]);
          } else {
            for (var b = 2; b + 1 < n.length; b += 2) {
              t.lineTo(n[b], n[b + 1]);
            }
          }
      }
    }
    t = a;
    if (s) {
      t.stroke(g);
    } else {
      t.stroke();
    }
    if (t.setLineDash) {
      t.setLineDash([]);
    }
  };
  s5.drawEdgeTrianglePath = function (e, t, n) {
    t.fillStyle = t.strokeStyle;
    var r = e.pstyle("width").pfValue;
    var i = 0;
    for (; i + 1 < n.length; i += 2) {
      var a = [n[i + 2] - n[i], n[i + 3] - n[i + 1]];
      var o = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
      var s = [a[1] / o, -a[0] / o];
      var l = [s[0] * r / 2, s[1] * r / 2];
      t.beginPath();
      t.moveTo(n[i] - l[0], n[i + 1] - l[1]);
      t.lineTo(n[i] + l[0], n[i + 1] + l[1]);
      t.lineTo(n[i + 2], n[i + 3]);
      t.closePath();
      t.fill();
    }
  };
  s5.drawArrowheads = function (e, t, n) {
    var r = t._private.rscratch;
    var i = r.edgeType === "haystack";
    if (!i) {
      this.drawArrowhead(e, t, "source", r.arrowStartX, r.arrowStartY, r.srcArrowAngle, n);
    }
    this.drawArrowhead(e, t, "mid-target", r.midX, r.midY, r.midtgtArrowAngle, n);
    this.drawArrowhead(e, t, "mid-source", r.midX, r.midY, r.midsrcArrowAngle, n);
    if (!i) {
      this.drawArrowhead(e, t, "target", r.arrowEndX, r.arrowEndY, r.tgtArrowAngle, n);
    }
  };
  s5.drawArrowhead = function (e, t, n, r, i, a, o) {
    if (!isNaN(r) && r != null && !isNaN(i) && i != null && !isNaN(a) && a != null) {
      var s = t.pstyle(n + "-arrow-shape").value;
      if (s !== "none") {
        var l = t.pstyle(n + "-arrow-fill").value === "hollow" ? "both" : "filled";
        var u = t.pstyle(n + "-arrow-fill").value;
        var h = t.pstyle("width").pfValue;
        var c = t.pstyle(n + "-arrow-width");
        var d = c.value === "match-line" ? h : c.pfValue;
        if (c.units === "%") {
          d *= h;
        }
        var p = t.pstyle("opacity").value;
        if (o === undefined) {
          o = p;
        }
        var g = e.globalCompositeOperation;
        if (o !== 1 || u === "hollow") {
          e.globalCompositeOperation = "destination-out";
          this.colorFillStyle(e, 255, 255, 255, 1);
          this.colorStrokeStyle(e, 255, 255, 255, 1);
          this.drawArrowShape(t, e, l, h, s, d, r, i, a);
          e.globalCompositeOperation = g;
        }
        var f = t.pstyle(n + "-arrow-color").value;
        this.colorFillStyle(e, f[0], f[1], f[2], o);
        this.colorStrokeStyle(e, f[0], f[1], f[2], o);
        this.drawArrowShape(t, e, u, h, s, d, r, i, a);
      }
    }
  };
  s5.drawArrowShape = function (e, t, n, r, i, a, o, s, l) {
    var u;
    var h = this.usePaths() && i !== "triangle-cross";
    var c = false;
    var d = t;
    var p = e.pstyle("arrow-scale").value;
    var g = this.getArrowWidth(r, p);
    var f = this.arrowShapes[i];
    if (h) {
      var v = this.arrowPathCache = this.arrowPathCache || [];
      var y = eY(i);
      var b = v[y];
      if (b != null) {
        u = t = b;
        c = true;
      } else {
        u = t = new Path2D();
        v[y] = u;
      }
    }
    if (!c) {
      if (t.beginPath) {
        t.beginPath();
      }
      if (h) {
        f.draw(t, 1, 0, {
          x: 0,
          y: 0
        }, 1);
      } else {
        f.draw(t, g, l, {
          x: o,
          y: s
        }, r);
      }
      if (t.closePath) {
        t.closePath();
      }
    }
    t = d;
    if (h) {
      t.translate(o, s);
      t.rotate(l);
      t.scale(g, g);
    }
    if (n === "filled" || n === "both") {
      if (h) {
        t.fill(u);
      } else {
        t.fill();
      }
    }
    if (n === "hollow" || n === "both") {
      t.lineWidth = a / (h ? g : 1);
      t.lineJoin = "miter";
      if (h) {
        t.stroke(u);
      } else {
        t.stroke();
      }
    }
    if (h) {
      t.scale(1 / g, 1 / g);
      t.rotate(-l);
      t.translate(-o, -s);
    }
  };
  var s4 = {};
  s4.safeDrawImage = function (e, t, n, r, i, a, o, s, l, u) {
    if (!(i <= 0) && !(a <= 0) && !(l <= 0) && !(u <= 0)) {
      try {
        e.drawImage(t, n, r, i, a, o, s, l, u);
      } catch (e) {
        eJ(e);
      }
    }
  };
  s4.drawInscribedImage = function (e, t, n, r, i) {
    var a = n.position();
    var o = a.x;
    var s = a.y;
    var l = n.cy().style();
    var u = l.getIndexedStyle.bind(l);
    var h = u(n, "background-fit", "value", r);
    var c = u(n, "background-repeat", "value", r);
    var d = n.width();
    var p = n.height();
    var g = n.padding() * 2;
    var f = d + (u(n, "background-width-relative-to", "value", r) === "inner" ? 0 : g);
    var v = p + (u(n, "background-height-relative-to", "value", r) === "inner" ? 0 : g);
    var y = n._private.rscratch;
    var b = u(n, "background-clip", "value", r) === "node";
    var x = u(n, "background-image-opacity", "value", r) * i;
    var w = u(n, "background-image-smoothing", "value", r);
    var E = n.pstyle("corner-radius").value;
    if (E !== "auto") {
      E = n.pstyle("corner-radius").pfValue;
    }
    var T = t.width || t.cachedW;
    var C = t.height || t.cachedH;
    if (T == null || C == null) {
      document.body.appendChild(t);
      T = t.cachedW = t.width || t.offsetWidth;
      C = t.cachedH = t.height || t.offsetHeight;
      document.body.removeChild(t);
    }
    var N = T;
    var _ = C;
    if (u(n, "background-width", "value", r) !== "auto") {
      N = u(n, "background-width", "units", r) === "%" ? u(n, "background-width", "pfValue", r) * f : u(n, "background-width", "pfValue", r);
    }
    if (u(n, "background-height", "value", r) !== "auto") {
      _ = u(n, "background-height", "units", r) === "%" ? u(n, "background-height", "pfValue", r) * v : u(n, "background-height", "pfValue", r);
    }
    if (N !== 0 && _ !== 0) {
      if (h === "contain") {
        var D = Math.min(f / N, v / _);
        N *= D;
        _ *= D;
      } else if (h === "cover") {
        var D = Math.max(f / N, v / _);
        N *= D;
        _ *= D;
      }
      var M = o - f / 2;
      var A = u(n, "background-position-x", "units", r);
      var S = u(n, "background-position-x", "pfValue", r);
      if (A === "%") {
        M += (f - N) * S;
      } else {
        M += S;
      }
      var P = u(n, "background-offset-x", "units", r);
      var O = u(n, "background-offset-x", "pfValue", r);
      if (P === "%") {
        M += (f - N) * O;
      } else {
        M += O;
      }
      var I = s - v / 2;
      var L = u(n, "background-position-y", "units", r);
      var k = u(n, "background-position-y", "pfValue", r);
      if (L === "%") {
        I += (v - _) * k;
      } else {
        I += k;
      }
      var R = u(n, "background-offset-y", "units", r);
      var B = u(n, "background-offset-y", "pfValue", r);
      if (R === "%") {
        I += (v - _) * B;
      } else {
        I += B;
      }
      if (y.pathCache) {
        M -= o;
        I -= s;
        o = 0;
        s = 0;
      }
      var F = e.globalAlpha;
      e.globalAlpha = x;
      var z = this.getImgSmoothing(e);
      var V = false;
      if (w === "no" && z) {
        this.setImgSmoothing(e, false);
        V = true;
      } else if (w === "yes" && !z) {
        this.setImgSmoothing(e, true);
        V = true;
      }
      if (c === "no-repeat") {
        if (b) {
          e.save();
          if (y.pathCache) {
            e.clip(y.pathCache);
          } else {
            this.nodeShapes[this.getNodeShape(n)].draw(e, o, s, f, v, E, y);
            e.clip();
          }
        }
        this.safeDrawImage(e, t, 0, 0, T, C, M, I, N, _);
        if (b) {
          e.restore();
        }
      } else {
        var Y = e.createPattern(t, c);
        e.fillStyle = Y;
        this.nodeShapes[this.getNodeShape(n)].draw(e, o, s, f, v, E, y);
        e.translate(M, I);
        e.fill();
        e.translate(-M, -I);
      }
      e.globalAlpha = F;
      if (V) {
        this.setImgSmoothing(e, z);
      }
    }
  };
  var s9 = {};
  function s6(e, t, n, r, i, a = 5, o) {
    e.beginPath();
    e.moveTo(t + a, n);
    e.lineTo(t + r - a, n);
    e.quadraticCurveTo(t + r, n, t + r, n + a);
    e.lineTo(t + r, n + i - a);
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i);
    e.lineTo(t + a, n + i);
    e.quadraticCurveTo(t, n + i, t, n + i - a);
    e.lineTo(t, n + a);
    e.quadraticCurveTo(t, n, t + a, n);
    e.closePath();
    if (o) {
      e.stroke();
    } else {
      e.fill();
    }
  }
  s9.eleTextBiggerThanMin = function (e, t) {
    t ||= Math.pow(2, Math.ceil(tT(e.cy().zoom() * this.getPixelRatio())));
    return !(e.pstyle("font-size").pfValue * t < e.pstyle("min-zoomed-font-size").pfValue);
  };
  s9.drawElementText = function (e, t, n, r, i) {
    var a;
    var o = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
    if (r == null) {
      if (o && !this.eleTextBiggerThanMin(t)) {
        return;
      }
    } else if (r === false) {
      return;
    }
    if (t.isNode()) {
      var s = t.pstyle("label");
      if (!s || !s.value) {
        return;
      }
      var l = this.getLabelJustification(t);
      e.textAlign = l;
      e.textBaseline = "bottom";
    } else {
      var u = t.element()._private.rscratch.badLine;
      var h = t.pstyle("label");
      var c = t.pstyle("source-label");
      var d = t.pstyle("target-label");
      if (u || (!h || !h.value) && (!c || !c.value) && (!d || !d.value)) {
        return;
      }
      e.textAlign = "center";
      e.textBaseline = "bottom";
    }
    var p = !n;
    if (n) {
      a = n;
      e.translate(-a.x1, -a.y1);
    }
    if (i == null) {
      this.drawText(e, t, null, p, o);
      if (t.isEdge()) {
        this.drawText(e, t, "source", p, o);
        this.drawText(e, t, "target", p, o);
      }
    } else {
      this.drawText(e, t, i, p, o);
    }
    if (n) {
      e.translate(a.x1, a.y1);
    }
  };
  s9.getFontCache = function (e) {
    var t;
    this.fontCaches = this.fontCaches || [];
    for (var n = 0; n < this.fontCaches.length; n++) {
      if ((t = this.fontCaches[n]).context === e) {
        return t;
      }
    }
    t = {
      context: e
    };
    this.fontCaches.push(t);
    return t;
  };
  s9.setupTextStyle = function (e, t) {
    var n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    var r = t.pstyle("font-style").strValue;
    var i = t.pstyle("font-size").pfValue + "px";
    var a = t.pstyle("font-family").strValue;
    var o = t.pstyle("font-weight").strValue;
    var s = n ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1;
    var l = t.pstyle("text-outline-opacity").value * s;
    var u = t.pstyle("color").value;
    var h = t.pstyle("text-outline-color").value;
    e.font = r + " " + o + " " + i + " " + a;
    e.lineJoin = "round";
    this.colorFillStyle(e, u[0], u[1], u[2], s);
    this.colorStrokeStyle(e, h[0], h[1], h[2], l);
  };
  s9.getTextAngle = function (e, t) {
    var n;
    var r = e._private.rscratch;
    var i = t ? t + "-" : "";
    var a = e.pstyle(i + "text-rotation");
    var o = e8(r, "labelAngle", t);
    if (a.strValue === "autorotate") {
      if (e.isEdge()) {
        return o;
      } else {
        return 0;
      }
    } else if (a.strValue === "none") {
      return 0;
    } else {
      return a.pfValue;
    }
  };
  s9.drawText = function (e, t, n) {
    var r = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    var i = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    var a = t._private.rscratch;
    var o = i ? t.effectiveOpacity() : 1;
    if (!i || o !== 0 && t.pstyle("text-opacity").value !== 0) {
      if (n === "main") {
        n = null;
      }
      var s = e8(a, "labelX", n);
      var l = e8(a, "labelY", n);
      var u = this.getLabelText(t, n);
      if (u != null && u !== "" && !isNaN(s) && !isNaN(l)) {
        this.setupTextStyle(e, t, i);
        var h;
        var c;
        var d;
        var p = n ? n + "-" : "";
        var g = e8(a, "labelWidth", n);
        var f = e8(a, "labelHeight", n);
        var v = t.pstyle(p + "text-margin-x").pfValue;
        var y = t.pstyle(p + "text-margin-y").pfValue;
        var b = t.isEdge();
        var x = t.pstyle("text-halign").value;
        var w = t.pstyle("text-valign").value;
        if (b) {
          x = "center";
          w = "center";
        }
        s += v;
        l += y;
        if ((d = r ? this.getTextAngle(t, n) : 0) !== 0) {
          h = s;
          c = l;
          e.translate(h, c);
          e.rotate(d);
          s = 0;
          l = 0;
        }
        switch (w) {
          case "top":
            break;
          case "center":
            l += f / 2;
            break;
          case "bottom":
            l += f;
        }
        var E = t.pstyle("text-background-opacity").value;
        var T = t.pstyle("text-border-opacity").value;
        var C = t.pstyle("text-border-width").pfValue;
        var N = t.pstyle("text-background-padding").pfValue;
        var _ = t.pstyle("text-background-shape").strValue.indexOf("round") === 0;
        if (E > 0 || C > 0 && T > 0) {
          var D = s - N;
          switch (x) {
            case "left":
              D -= g;
              break;
            case "center":
              D -= g / 2;
          }
          var M = l - f - N;
          var A = g + N * 2;
          var S = f + N * 2;
          if (E > 0) {
            var P = e.fillStyle;
            var O = t.pstyle("text-background-color").value;
            e.fillStyle = "rgba(" + O[0] + "," + O[1] + "," + O[2] + "," + E * o + ")";
            if (_) {
              s6(e, D, M, A, S, 2);
            } else {
              e.fillRect(D, M, A, S);
            }
            e.fillStyle = P;
          }
          if (C > 0 && T > 0) {
            var I = e.strokeStyle;
            var L = e.lineWidth;
            var k = t.pstyle("text-border-color").value;
            var R = t.pstyle("text-border-style").value;
            e.strokeStyle = "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + T * o + ")";
            e.lineWidth = C;
            if (e.setLineDash) {
              switch (R) {
                case "dotted":
                  e.setLineDash([1, 1]);
                  break;
                case "dashed":
                  e.setLineDash([4, 2]);
                  break;
                case "double":
                  e.lineWidth = C / 4;
                  e.setLineDash([]);
                  break;
                case "solid":
                  e.setLineDash([]);
              }
            }
            if (_) {
              s6(e, D, M, A, S, 2, "stroke");
            } else {
              e.strokeRect(D, M, A, S);
            }
            if (R === "double") {
              var B = C / 2;
              if (_) {
                s6(e, D + B, M + B, A - B * 2, S - B * 2, 2, "stroke");
              } else {
                e.strokeRect(D + B, M + B, A - B * 2, S - B * 2);
              }
            }
            if (e.setLineDash) {
              e.setLineDash([]);
            }
            e.lineWidth = L;
            e.strokeStyle = I;
          }
        }
        var F = t.pstyle("text-outline-width").pfValue * 2;
        if (F > 0) {
          e.lineWidth = F;
        }
        if (t.pstyle("text-wrap").value === "wrap") {
          var z = e8(a, "labelWrapCachedLines", n);
          var V = e8(a, "labelLineHeight", n);
          var Y = g / 2;
          var G = this.getLabelJustification(t);
          if (G !== "auto") {
            if (x === "left") {
              if (G === "left") {
                s += -g;
              } else if (G === "center") {
                s += -Y;
              }
            } else if (x === "center") {
              if (G === "left") {
                s += -Y;
              } else if (G === "right") {
                s += Y;
              }
            } else if (x === "right") {
              if (G === "center") {
                s += Y;
              } else if (G === "right") {
                s += g;
              }
            }
          }
          switch (w) {
            case "top":
            case "center":
            case "bottom":
              l -= (z.length - 1) * V;
          }
          for (var X = 0; X < z.length; X++) {
            if (F > 0) {
              e.strokeText(z[X], s, l);
            }
            e.fillText(z[X], s, l);
            l += V;
          }
        } else {
          if (F > 0) {
            e.strokeText(u, s, l);
          }
          e.fillText(u, s, l);
        }
        if (d !== 0) {
          e.rotate(-d);
          e.translate(-h, -c);
        }
      }
    }
  };
  var s8 = {};
  s8.drawNode = function (e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    var l = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    var u = !(arguments.length > 5) || arguments[5] === undefined || arguments[5];
    var h = this;
    var c = t._private;
    var d = c.rscratch;
    var p = t.position();
    if (S(p.x) && S(p.y) && (!u || t.visible())) {
      var g = u ? t.effectiveOpacity() : 1;
      var f = h.usePaths();
      var v = false;
      var y = t.padding();
      r = t.width() + y * 2;
      i = t.height() + y * 2;
      if (n) {
        o = n;
        e.translate(-o.x1, -o.y1);
      }
      var b = t.pstyle("background-image").value;
      var x = Array(b.length);
      var w = Array(b.length);
      var E = 0;
      var T = 0;
      for (; T < b.length; T++) {
        var C = b[T];
        if (x[T] = C != null && C !== "none") {
          var N = t.cy().style().getIndexedStyle(t, "background-image-crossorigin", "value", T);
          E++;
          w[T] = h.getCachedImage(C, N, function () {
            c.backgroundTimestamp = Date.now();
            t.emitAndNotify("background");
          });
        }
      }
      var _ = t.pstyle("background-blacken").value;
      var D = t.pstyle("border-width").pfValue;
      var M = t.pstyle("background-opacity").value * g;
      var A = t.pstyle("border-color").value;
      var P = t.pstyle("border-style").value;
      var O = t.pstyle("border-join").value;
      var I = t.pstyle("border-cap").value;
      var L = t.pstyle("border-position").value;
      var k = t.pstyle("border-dash-pattern").pfValue;
      var R = t.pstyle("border-dash-offset").pfValue;
      var B = t.pstyle("border-opacity").value * g;
      var F = t.pstyle("outline-width").pfValue;
      var z = t.pstyle("outline-color").value;
      var V = t.pstyle("outline-style").value;
      var Y = t.pstyle("outline-opacity").value * g;
      var G = t.pstyle("outline-offset").value;
      var X = t.pstyle("corner-radius").value;
      if (X !== "auto") {
        X = t.pstyle("corner-radius").pfValue;
      }
      function H(n = M) {
        h.eleFillStyle(e, t, n);
      }
      function U(t = B) {
        h.colorStrokeStyle(e, A[0], A[1], A[2], t);
      }
      function W(t = Y) {
        h.colorStrokeStyle(e, z[0], z[1], z[2], t);
      }
      function j(e, t, n, r) {
        var i;
        var a = h.nodePathCache = h.nodePathCache || [];
        var o = eG(n === "polygon" ? n + "," + r.join(",") : n, "" + t, "" + e, "" + X);
        var s = a[o];
        var l = false;
        if (s != null) {
          i = s;
          l = true;
          d.pathCache = i;
        } else {
          i = new Path2D();
          a[o] = d.pathCache = i;
        }
        return {
          path: i,
          cacheHit: l
        };
      }
      var q = t.pstyle("shape").strValue;
      var K = t.pstyle("shape-polygon-points").pfValue;
      if (f) {
        e.translate(p.x, p.y);
        var Z = j(r, i, q, K);
        a = Z.path;
        v = Z.cacheHit;
      }
      function $() {
        if (!v) {
          var n = p;
          if (f) {
            n = {
              x: 0,
              y: 0
            };
          }
          h.nodeShapes[h.getNodeShape(t)].draw(a || e, n.x, n.y, r, i, X, d);
        }
        if (f) {
          e.fill(a);
        } else {
          e.fill();
        }
      }
      function Q(n = g) {
        var r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        var i = c.backgrounding;
        var a = 0;
        var o = 0;
        for (; o < w.length; o++) {
          var s = t.cy().style().getIndexedStyle(t, "background-image-containment", "value", o);
          if (r && s === "over" || !r && s === "inside") {
            a++;
            continue;
          }
          if (x[o] && w[o].complete && !w[o].error) {
            a++;
            h.drawInscribedImage(e, w[o], t, o, n);
          }
        }
        c.backgrounding = a !== E;
        if (i !== c.backgrounding) {
          t.updateStyle(false);
        }
      }
      function J(n = false, a = g) {
        if (h.hasPie(t)) {
          h.drawPie(e, t, a);
          if (n && !f) {
            h.nodeShapes[h.getNodeShape(t)].draw(e, p.x, p.y, r, i, X, d);
          }
        }
      }
      function ee(t = g) {
        var n = _ > 0 ? 0 : 255;
        if (_ !== 0) {
          h.colorFillStyle(e, n, n, n, (_ > 0 ? _ : -_) * t);
          if (f) {
            e.fill(a);
          } else {
            e.fill();
          }
        }
      }
      function et() {
        if (D > 0) {
          e.lineWidth = D;
          e.lineCap = I;
          e.lineJoin = O;
          if (e.setLineDash) {
            switch (P) {
              case "dotted":
                e.setLineDash([1, 1]);
                break;
              case "dashed":
                e.setLineDash(k);
                e.lineDashOffset = R;
                break;
              case "solid":
              case "double":
                e.setLineDash([]);
            }
          }
          if (L !== "center") {
            e.save();
            e.lineWidth *= 2;
            if (L === "inside") {
              if (f) {
                e.clip(a);
              } else {
                e.clip();
              }
            } else {
              var t = new Path2D();
              t.rect(-r / 2 - D, -i / 2 - D, r + D * 2, i + D * 2);
              t.addPath(a);
              e.clip(t, "evenodd");
            }
            if (f) {
              e.stroke(a);
            } else {
              e.stroke();
            }
            e.restore();
          } else if (f) {
            e.stroke(a);
          } else {
            e.stroke();
          }
          if (P === "double") {
            e.lineWidth = D / 3;
            var n = e.globalCompositeOperation;
            e.globalCompositeOperation = "destination-out";
            if (f) {
              e.stroke(a);
            } else {
              e.stroke();
            }
            e.globalCompositeOperation = n;
          }
          if (e.setLineDash) {
            e.setLineDash([]);
          }
        }
      }
      function en() {
        if (F > 0) {
          e.lineWidth = F;
          e.lineCap = "butt";
          if (e.setLineDash) {
            switch (V) {
              case "dotted":
                e.setLineDash([1, 1]);
                break;
              case "dashed":
                e.setLineDash([4, 2]);
                break;
              case "solid":
              case "double":
                e.setLineDash([]);
            }
          }
          var n = p;
          if (f) {
            n = {
              x: 0,
              y: 0
            };
          }
          var a = h.getNodeShape(t);
          var o = D;
          if (L === "inside") {
            o = 0;
          }
          if (L === "outside") {
            o *= 2;
          }
          var s = (r + o + (F + G)) / r;
          var l = (i + o + (F + G)) / i;
          var u = r * s;
          var c = i * l;
          var d = h.nodeShapes[a].points;
          if (f) {
            N = j(u, c, a, d).path;
          }
          if (a === "ellipse") {
            h.drawEllipsePath(N || e, n.x, n.y, u, c);
          } else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(a)) {
            var g = 0;
            var v = 0;
            var y = 0;
            if (a === "round-diamond") {
              g = (o + G + F) * 1.4;
            } else if (a === "round-heptagon") {
              g = (o + G + F) * 1.075;
              y = -(o / 2 + G + F) / 35;
            } else if (a === "round-hexagon") {
              g = (o + G + F) * 1.12;
            } else if (a === "round-pentagon") {
              g = (o + G + F) * 1.13;
              y = -(o / 2 + G + F) / 15;
            } else if (a === "round-tag") {
              g = (o + G + F) * 1.12;
              v = (o / 2 + F + G) * 0.07;
            } else if (a === "round-triangle") {
              g = Math.PI / 2 * (o + G + F);
              y = -(o + G / 2 + F) / Math.PI;
            }
            if (g !== 0) {
              s = (r + g) / r;
              u = r * s;
              if (!["round-hexagon", "round-tag"].includes(a)) {
                l = (i + g) / i;
                c = i * l;
              }
            }
            X = X === "auto" ? nn(u, c) : X;
            var b = u / 2;
            var x = c / 2;
            var w = X + (o + F + G) / 2;
            var E = Array(d.length / 2);
            var T = Array(d.length / 2);
            var C = 0;
            for (; C < d.length / 2; C++) {
              E[C] = {
                x: n.x + v + b * d[C * 2],
                y: n.y + y + x * d[C * 2 + 1]
              };
            }
            var N;
            var _;
            var M;
            var A;
            var S;
            var P = E.length;
            _ = 0;
            M = E[P - 1];
            for (; _ < P; _++) {
              A = E[_ % P];
              S = E[(_ + 1) % P];
              T[_] = sp(M, A, S, w);
              M = A;
              A = S;
            }
            h.drawRoundPolygonPath(N || e, n.x + v, n.y + y, r * s, i * l, d, T);
          } else if (["roundrectangle", "round-rectangle"].includes(a)) {
            X = X === "auto" ? nt(u, c) : X;
            h.drawRoundRectanglePath(N || e, n.x, n.y, u, c, X + (o + F + G) / 2);
          } else if (["cutrectangle", "cut-rectangle"].includes(a)) {
            X = X === "auto" ? nr() : X;
            h.drawCutRectanglePath(N || e, n.x, n.y, u, c, null, X + (o + F + G) / 4);
          } else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(a)) {
            X = X === "auto" ? nt(u, c) : X;
            h.drawBottomRoundRectanglePath(N || e, n.x, n.y, u, c, X + (o + F + G) / 2);
          } else if (a === "barrel") {
            h.drawBarrelPath(N || e, n.x, n.y, u, c);
          } else {
            d = a.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(a) ? tQ(tJ(d, (o + F + G) / r)) : tQ(tJ(d, -((o + F + G) / r)));
            h.drawPolygonPath(N || e, n.x, n.y, r, i, d);
          }
          if (f) {
            e.stroke(N);
          } else {
            e.stroke();
          }
          if (V === "double") {
            e.lineWidth = o / 3;
            var O = e.globalCompositeOperation;
            e.globalCompositeOperation = "destination-out";
            if (f) {
              e.stroke(N);
            } else {
              e.stroke();
            }
            e.globalCompositeOperation = O;
          }
          if (e.setLineDash) {
            e.setLineDash([]);
          }
        }
      }
      if (t.pstyle("ghost").value === "yes") {
        var er = t.pstyle("ghost-offset-x").pfValue;
        var ei = t.pstyle("ghost-offset-y").pfValue;
        var ea = t.pstyle("ghost-opacity").value;
        var eo = ea * g;
        e.translate(er, ei);
        W();
        en();
        H(ea * M);
        $();
        Q(eo, true);
        U(ea * B);
        et();
        J(_ !== 0 || D !== 0);
        Q(eo, false);
        ee(eo);
        e.translate(-er, -ei);
      }
      if (f) {
        e.translate(-p.x, -p.y);
      }
      if (l) {
        h.drawNodeUnderlay(e, t, p, r, i);
      }
      if (f) {
        e.translate(p.x, p.y);
      }
      W();
      en();
      H();
      $();
      Q(g, true);
      U();
      et();
      J(_ !== 0 || D !== 0);
      Q(g, false);
      ee();
      if (f) {
        e.translate(-p.x, -p.y);
      }
      h.drawElementText(e, t, null, s);
      if (l) {
        h.drawNodeOverlay(e, t, p, r, i);
      }
      if (n) {
        e.translate(o.x1, o.y1);
      }
    }
  };
  function s7(e) {
    if (!["overlay", "underlay"].includes(e)) {
      throw Error("Invalid state");
    }
    return function (t, n, r, i, a) {
      if (n.visible()) {
        var o = n.pstyle(`${e}-padding`).pfValue;
        var s = n.pstyle(`${e}-opacity`).value;
        var l = n.pstyle(`${e}-color`).value;
        var u = n.pstyle(`${e}-shape`).value;
        var h = n.pstyle(`${e}-corner-radius`).value;
        if (s > 0) {
          r = r || n.position();
          if (i == null || a == null) {
            var c = n.padding();
            i = n.width() + c * 2;
            a = n.height() + c * 2;
          }
          this.colorFillStyle(t, l[0], l[1], l[2], s);
          this.nodeShapes[u].draw(t, r.x, r.y, i + o * 2, a + o * 2, h);
          t.fill();
        }
      }
    };
  }
  s8.drawNodeOverlay = s7("overlay");
  s8.drawNodeUnderlay = s7("underlay");
  s8.hasPie = function (e) {
    return (e = e[0])._private.hasPie;
  };
  s8.drawPie = function (e, t, n, r) {
    t = t[0];
    r = r || t.position();
    var i = t.cy().style();
    var a = t.pstyle("pie-size");
    var o = r.x;
    var s = r.y;
    var l = Math.min(t.width(), t.height()) / 2;
    var u = 0;
    if (this.usePaths()) {
      o = 0;
      s = 0;
    }
    if (a.units === "%") {
      l *= a.pfValue;
    } else if (a.pfValue !== undefined) {
      l = a.pfValue / 2;
    }
    for (var h = 1; h <= i.pieBackgroundN; h++) {
      var c = t.pstyle("pie-" + h + "-background-size").value;
      var d = t.pstyle("pie-" + h + "-background-color").value;
      var p = t.pstyle("pie-" + h + "-background-opacity").value * n;
      var g = c / 100;
      if (g + u > 1) {
        g = 1 - u;
      }
      var f = Math.PI * 1.5 + Math.PI * 2 * u;
      var v = f + Math.PI * 2 * g;
      if (c !== 0 && !(u >= 1) && !(u + g > 1)) {
        e.beginPath();
        e.moveTo(o, s);
        e.arc(o, s, l, f, v);
        e.closePath();
        this.colorFillStyle(e, d[0], d[1], d[2], p);
        e.fill();
        u += g;
      }
    }
  };
  var le = {};
  le.getPixelRatio = function () {
    var e = this.data.contexts[0];
    if (this.forcedPixelRatio != null) {
      return this.forcedPixelRatio;
    }
    var t = this.cy.window();
    var n = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return (t.devicePixelRatio || 1) / n;
  };
  le.paintCache = function (e) {
    var t;
    var n = this.paintCaches = this.paintCaches || [];
    var r = true;
    var i = 0;
    for (; i < n.length; i++) {
      if ((t = n[i]).context === e) {
        r = false;
        break;
      }
    }
    if (r) {
      t = {
        context: e
      };
      n.push(t);
    }
    return t;
  };
  le.createGradientStyleFor = function (e, t, n, r, i) {
    var a;
    var o = this.usePaths();
    var s = n.pstyle(t + "-gradient-stop-colors").value;
    var l = n.pstyle(t + "-gradient-stop-positions").pfValue;
    if (r === "radial-gradient") {
      if (n.isEdge()) {
        var u = n.sourceEndpoint();
        var h = n.targetEndpoint();
        var c = n.midpoint();
        var d = tN(u, c);
        var p = tN(h, c);
        a = e.createRadialGradient(c.x, c.y, 0, c.x, c.y, Math.max(d, p));
      } else {
        var g = o ? {
          x: 0,
          y: 0
        } : n.position();
        var f = n.paddedWidth();
        var v = n.paddedHeight();
        a = e.createRadialGradient(g.x, g.y, 0, g.x, g.y, Math.max(f, v));
      }
    } else if (n.isEdge()) {
      var y = n.sourceEndpoint();
      var b = n.targetEndpoint();
      a = e.createLinearGradient(y.x, y.y, b.x, b.y);
    } else {
      var x = o ? {
        x: 0,
        y: 0
      } : n.position();
      var w = n.paddedWidth();
      var E = n.paddedHeight();
      var T = w / 2;
      var C = E / 2;
      switch (n.pstyle("background-gradient-direction").value) {
        case "to-bottom":
          a = e.createLinearGradient(x.x, x.y - C, x.x, x.y + C);
          break;
        case "to-top":
          a = e.createLinearGradient(x.x, x.y + C, x.x, x.y - C);
          break;
        case "to-left":
          a = e.createLinearGradient(x.x + T, x.y, x.x - T, x.y);
          break;
        case "to-right":
          a = e.createLinearGradient(x.x - T, x.y, x.x + T, x.y);
          break;
        case "to-bottom-right":
        case "to-right-bottom":
          a = e.createLinearGradient(x.x - T, x.y - C, x.x + T, x.y + C);
          break;
        case "to-top-right":
        case "to-right-top":
          a = e.createLinearGradient(x.x - T, x.y + C, x.x + T, x.y - C);
          break;
        case "to-bottom-left":
        case "to-left-bottom":
          a = e.createLinearGradient(x.x + T, x.y - C, x.x - T, x.y + C);
          break;
        case "to-top-left":
        case "to-left-top":
          a = e.createLinearGradient(x.x + T, x.y + C, x.x - T, x.y - C);
      }
    }
    if (!a) {
      return null;
    }
    var N = l.length === s.length;
    var _ = s.length;
    var D = 0;
    for (; D < _; D++) {
      a.addColorStop(N ? l[D] : D / (_ - 1), "rgba(" + s[D][0] + "," + s[D][1] + "," + s[D][2] + "," + i + ")");
    }
    return a;
  };
  le.gradientFillStyle = function (e, t, n, r) {
    var i = this.createGradientStyleFor(e, "background", t, n, r);
    if (!i) {
      return null;
    }
    e.fillStyle = i;
  };
  le.colorFillStyle = function (e, t, n, r, i) {
    e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + i + ")";
  };
  le.eleFillStyle = function (e, t, n) {
    var r = t.pstyle("background-fill").value;
    if (r === "linear-gradient" || r === "radial-gradient") {
      this.gradientFillStyle(e, t, r, n);
    } else {
      var i = t.pstyle("background-color").value;
      this.colorFillStyle(e, i[0], i[1], i[2], n);
    }
  };
  le.gradientStrokeStyle = function (e, t, n, r) {
    var i = this.createGradientStyleFor(e, "line", t, n, r);
    if (!i) {
      return null;
    }
    e.strokeStyle = i;
  };
  le.colorStrokeStyle = function (e, t, n, r, i) {
    e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + i + ")";
  };
  le.eleStrokeStyle = function (e, t, n) {
    var r = t.pstyle("line-fill").value;
    if (r === "linear-gradient" || r === "radial-gradient") {
      this.gradientStrokeStyle(e, t, r, n);
    } else {
      var i = t.pstyle("line-color").value;
      this.colorStrokeStyle(e, i[0], i[1], i[2], n);
    }
  };
  le.matchCanvasSize = function (e) {
    var t;
    var n = this.data;
    var r = this.findContainerClientCoords();
    var i = r[2];
    var a = r[3];
    var o = this.getPixelRatio();
    var s = this.motionBlurPxRatio;
    if (e === this.data.bufferCanvases[this.MOTIONBLUR_BUFFER_NODE] || e === this.data.bufferCanvases[this.MOTIONBLUR_BUFFER_DRAG]) {
      o = s;
    }
    var l = i * o;
    var u = a * o;
    if (l !== this.canvasWidth || u !== this.canvasHeight) {
      this.fontCaches = null;
      var h = n.canvasContainer;
      h.style.width = i + "px";
      h.style.height = a + "px";
      for (var c = 0; c < this.CANVAS_LAYERS; c++) {
        (t = n.canvases[c]).width = l;
        t.height = u;
        t.style.width = i + "px";
        t.style.height = a + "px";
      }
      for (var c = 0; c < this.BUFFER_COUNT; c++) {
        (t = n.bufferCanvases[c]).width = l;
        t.height = u;
        t.style.width = i + "px";
        t.style.height = a + "px";
      }
      this.textureMult = 1;
      if (o <= 1) {
        t = n.bufferCanvases[this.TEXTURE_BUFFER];
        this.textureMult = 2;
        t.width = l * this.textureMult;
        t.height = u * this.textureMult;
      }
      this.canvasWidth = l;
      this.canvasHeight = u;
    }
  };
  le.renderTo = function (e, t, n, r) {
    this.render({
      forcedContext: e,
      forcedZoom: t,
      forcedPan: n,
      drawAllLayers: true,
      forcedPxRatio: r
    });
  };
  le.render = function (e) {
    var t = (e = e || e5()).forcedContext;
    var n = e.drawAllLayers;
    var r = e.drawOnlyNodeLayer;
    var i = e.forcedZoom;
    var a = e.forcedPan;
    var o = this;
    var s = e.forcedPxRatio === undefined ? this.getPixelRatio() : e.forcedPxRatio;
    var l = o.cy;
    var u = o.data;
    var h = u.canvasNeedsRedraw;
    var c = o.textureOnViewport && !t && (o.pinching || o.hoverData.dragging || o.swipePanning || o.data.wheelZooming);
    var d = e.motionBlur !== undefined ? e.motionBlur : o.motionBlur;
    var p = o.motionBlurPxRatio;
    var g = l.hasCompoundNodes();
    var f = o.hoverData.draggingEles;
    var v = !!o.hoverData.selecting || !!o.touchData.selecting;
    var y = d = d && !t && o.motionBlurEnabled && !v;
    if (!t) {
      if (o.prevPxRatio !== s) {
        o.invalidateContainerClientCoordsCache();
        o.matchCanvasSize(o.container);
        o.redrawHint("eles", true);
        o.redrawHint("drag", true);
      }
      o.prevPxRatio = s;
    }
    if (!t && o.motionBlurTimeout) {
      clearTimeout(o.motionBlurTimeout);
    }
    if (d) {
      if (o.mbFrames == null) {
        o.mbFrames = 0;
      }
      o.mbFrames++;
      if (o.mbFrames < 3) {
        y = false;
      }
      if (o.mbFrames > o.minMbLowQualFrames) {
        o.motionBlurPxRatio = o.mbPxRBlurry;
      }
    }
    if (o.clearingMotionBlur) {
      o.motionBlurPxRatio = 1;
    }
    if (o.textureDrawLastFrame && !c) {
      h[o.NODE] = true;
      h[o.SELECT_BOX] = true;
    }
    var b = l.style();
    var x = l.zoom();
    var w = i !== undefined ? i : x;
    var E = l.pan();
    var T = {
      x: E.x,
      y: E.y
    };
    var C = {
      zoom: x,
      pan: {
        x: E.x,
        y: E.y
      }
    };
    var N = o.prevViewport;
    if (N !== undefined && C.zoom === N.zoom && C.pan.x === N.pan.x && C.pan.y === N.pan.y && (!f || !!g)) {
      o.motionBlurPxRatio = 1;
    }
    if (a) {
      T = a;
    }
    w *= s;
    T.x *= s;
    T.y *= s;
    var _ = o.getCachedZSortedEles();
    function D(e, t, n, r, i) {
      var a = e.globalCompositeOperation;
      e.globalCompositeOperation = "destination-out";
      o.colorFillStyle(e, 255, 255, 255, o.motionBlurTransparency);
      e.fillRect(t, n, r, i);
      e.globalCompositeOperation = a;
    }
    function M(e, r) {
      var s;
      var l;
      var h;
      var c;
      if (o.clearingMotionBlur || e !== u.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] && e !== u.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG]) {
        s = T;
        l = w;
        h = o.canvasWidth;
        c = o.canvasHeight;
      } else {
        s = {
          x: E.x * p,
          y: E.y * p
        };
        l = x * p;
        h = o.canvasWidth * p;
        c = o.canvasHeight * p;
      }
      e.setTransform(1, 0, 0, 1, 0, 0);
      if (r === "motionBlur") {
        D(e, 0, 0, h, c);
      } else if (!t && (r === undefined || r)) {
        e.clearRect(0, 0, h, c);
      }
      if (!n) {
        e.translate(s.x, s.y);
        e.scale(l, l);
      }
      if (a) {
        e.translate(a.x, a.y);
      }
      if (i) {
        e.scale(i, i);
      }
    }
    if (!c) {
      o.textureDrawLastFrame = false;
    }
    if (c) {
      o.textureDrawLastFrame = true;
      if (!o.textureCache) {
        o.textureCache = {};
        o.textureCache.bb = l.mutableElements().boundingBox();
        o.textureCache.texture = o.data.bufferCanvases[o.TEXTURE_BUFFER];
        var A = o.data.bufferContexts[o.TEXTURE_BUFFER];
        A.setTransform(1, 0, 0, 1, 0, 0);
        A.clearRect(0, 0, o.canvasWidth * o.textureMult, o.canvasHeight * o.textureMult);
        o.render({
          forcedContext: A,
          drawOnlyNodeLayer: true,
          forcedPxRatio: s * o.textureMult
        });
        var C = o.textureCache.viewport = {
          zoom: l.zoom(),
          pan: l.pan(),
          width: o.canvasWidth,
          height: o.canvasHeight
        };
        C.mpan = {
          x: (0 - C.pan.x) / C.zoom,
          y: (0 - C.pan.y) / C.zoom
        };
      }
      h[o.DRAG] = false;
      h[o.NODE] = false;
      var S = u.contexts[o.NODE];
      var P = o.textureCache.texture;
      var C = o.textureCache.viewport;
      S.setTransform(1, 0, 0, 1, 0, 0);
      if (d) {
        D(S, 0, 0, C.width, C.height);
      } else {
        S.clearRect(0, 0, C.width, C.height);
      }
      var O = b.core("outside-texture-bg-color").value;
      var I = b.core("outside-texture-bg-opacity").value;
      o.colorFillStyle(S, O[0], O[1], O[2], I);
      S.fillRect(0, 0, C.width, C.height);
      var x = l.zoom();
      M(S, false);
      S.clearRect(C.mpan.x, C.mpan.y, C.width / C.zoom / s, C.height / C.zoom / s);
      S.drawImage(P, C.mpan.x, C.mpan.y, C.width / C.zoom / s, C.height / C.zoom / s);
    } else if (o.textureOnViewport && !t) {
      o.textureCache = null;
    }
    var L = l.extent();
    var k = o.pinching || o.hoverData.dragging || o.swipePanning || o.data.wheelZooming || o.hoverData.draggingEles || o.cy.animated();
    var R = o.hideEdgesOnViewport && k;
    var B = [];
    B[o.NODE] = !h[o.NODE] && d && !o.clearedForMotionBlur[o.NODE] || o.clearingMotionBlur;
    if (B[o.NODE]) {
      o.clearedForMotionBlur[o.NODE] = true;
    }
    B[o.DRAG] = !h[o.DRAG] && d && !o.clearedForMotionBlur[o.DRAG] || o.clearingMotionBlur;
    if (B[o.DRAG]) {
      o.clearedForMotionBlur[o.DRAG] = true;
    }
    if (h[o.NODE] || n || r || B[o.NODE]) {
      var F = d && !B[o.NODE] && p !== 1;
      var S = t || (F ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] : u.contexts[o.NODE]);
      M(S, d && !F ? "motionBlur" : undefined);
      if (R) {
        o.drawCachedNodes(S, _.nondrag, s, L);
      } else {
        o.drawLayeredElements(S, _.nondrag, s, L);
      }
      if (o.debug) {
        o.drawDebugPoints(S, _.nondrag);
      }
      if (!n && !d) {
        h[o.NODE] = false;
      }
    }
    if (!r && (h[o.DRAG] || n || B[o.DRAG])) {
      var F = d && !B[o.DRAG] && p !== 1;
      var S = t || (F ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG] : u.contexts[o.DRAG]);
      M(S, d && !F ? "motionBlur" : undefined);
      if (R) {
        o.drawCachedNodes(S, _.drag, s, L);
      } else {
        o.drawCachedElements(S, _.drag, s, L);
      }
      if (o.debug) {
        o.drawDebugPoints(S, _.drag);
      }
      if (!n && !d) {
        h[o.DRAG] = false;
      }
    }
    if (o.showFps || !r && h[o.SELECT_BOX] && !n) {
      var S = t || u.contexts[o.SELECT_BOX];
      M(S);
      if (o.selection[4] == 1 && (o.hoverData.selecting || o.touchData.selecting)) {
        var x = o.cy.zoom();
        var z = b.core("selection-box-border-width").value / x;
        S.lineWidth = z;
        S.fillStyle = "rgba(" + b.core("selection-box-color").value[0] + "," + b.core("selection-box-color").value[1] + "," + b.core("selection-box-color").value[2] + "," + b.core("selection-box-opacity").value + ")";
        S.fillRect(o.selection[0], o.selection[1], o.selection[2] - o.selection[0], o.selection[3] - o.selection[1]);
        if (z > 0) {
          S.strokeStyle = "rgba(" + b.core("selection-box-border-color").value[0] + "," + b.core("selection-box-border-color").value[1] + "," + b.core("selection-box-border-color").value[2] + "," + b.core("selection-box-opacity").value + ")";
          S.strokeRect(o.selection[0], o.selection[1], o.selection[2] - o.selection[0], o.selection[3] - o.selection[1]);
        }
      }
      if (u.bgActivePosistion && !o.hoverData.selecting) {
        var x = o.cy.zoom();
        var V = u.bgActivePosistion;
        S.fillStyle = "rgba(" + b.core("active-bg-color").value[0] + "," + b.core("active-bg-color").value[1] + "," + b.core("active-bg-color").value[2] + "," + b.core("active-bg-opacity").value + ")";
        S.beginPath();
        S.arc(V.x, V.y, b.core("active-bg-size").pfValue / x, 0, Math.PI * 2);
        S.fill();
      }
      var Y = o.lastRedrawTime;
      if (o.showFps && Y) {
        var G = Math.round(1000 / (Y = Math.round(Y)));
        S.setTransform(1, 0, 0, 1, 0, 0);
        S.fillStyle = "rgba(255, 0, 0, 0.75)";
        S.strokeStyle = "rgba(255, 0, 0, 0.75)";
        S.lineWidth = 1;
        S.fillText("1 frame = " + Y + " ms = " + G + " fps", 0, 20);
        S.strokeRect(0, 30, 250, 20);
        S.fillRect(0, 30, Math.min(G / 60, 1) * 250, 20);
      }
      if (!n) {
        h[o.SELECT_BOX] = false;
      }
    }
    if (d && p !== 1) {
      var X = u.contexts[o.NODE];
      var H = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_NODE];
      var U = u.contexts[o.DRAG];
      var W = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_DRAG];
      function j(e, t, n) {
        e.setTransform(1, 0, 0, 1, 0, 0);
        if (n || !y) {
          e.clearRect(0, 0, o.canvasWidth, o.canvasHeight);
        } else {
          D(e, 0, 0, o.canvasWidth, o.canvasHeight);
        }
        e.drawImage(t, 0, 0, o.canvasWidth * p, o.canvasHeight * p, 0, 0, o.canvasWidth, o.canvasHeight);
      }
      if (h[o.NODE] || B[o.NODE]) {
        j(X, H, B[o.NODE]);
        h[o.NODE] = false;
      }
      if (h[o.DRAG] || B[o.DRAG]) {
        j(U, W, B[o.DRAG]);
        h[o.DRAG] = false;
      }
    }
    o.prevViewport = C;
    if (o.clearingMotionBlur) {
      o.clearingMotionBlur = false;
      o.motionBlurCleared = true;
      o.motionBlur = true;
    }
    if (d) {
      o.motionBlurTimeout = setTimeout(function () {
        o.motionBlurTimeout = null;
        o.clearedForMotionBlur[o.NODE] = false;
        o.clearedForMotionBlur[o.DRAG] = false;
        o.motionBlur = false;
        o.clearingMotionBlur = !c;
        o.mbFrames = 0;
        h[o.NODE] = true;
        h[o.DRAG] = true;
        o.redraw();
      }, 100);
    }
    if (!t) {
      l.emit("render");
    }
  };
  var lt = {};
  lt.drawPolygonPath = function (e, t, n, r, i, a) {
    var o = r / 2;
    var s = i / 2;
    if (e.beginPath) {
      e.beginPath();
    }
    e.moveTo(t + o * a[0], n + s * a[1]);
    for (var l = 1; l < a.length / 2; l++) {
      e.lineTo(t + o * a[l * 2], n + s * a[l * 2 + 1]);
    }
    e.closePath();
  };
  lt.drawRoundPolygonPath = function (e, t, n, r, i, a, o) {
    o.forEach(function (t) {
      return sd(e, t);
    });
    e.closePath();
  };
  lt.drawRoundRectanglePath = function (e, t, n, r, i, a) {
    var o = r / 2;
    var s = i / 2;
    var l = a === "auto" ? nt(r, i) : Math.min(a, s, o);
    if (e.beginPath) {
      e.beginPath();
    }
    e.moveTo(t, n - s);
    e.arcTo(t + o, n - s, t + o, n, l);
    e.arcTo(t + o, n + s, t, n + s, l);
    e.arcTo(t - o, n + s, t - o, n, l);
    e.arcTo(t - o, n - s, t, n - s, l);
    e.lineTo(t, n - s);
    e.closePath();
  };
  lt.drawBottomRoundRectanglePath = function (e, t, n, r, i, a) {
    var o = r / 2;
    var s = i / 2;
    var l = a === "auto" ? nt(r, i) : a;
    if (e.beginPath) {
      e.beginPath();
    }
    e.moveTo(t, n - s);
    e.lineTo(t + o, n - s);
    e.lineTo(t + o, n);
    e.arcTo(t + o, n + s, t, n + s, l);
    e.arcTo(t - o, n + s, t - o, n, l);
    e.lineTo(t - o, n - s);
    e.lineTo(t, n - s);
    e.closePath();
  };
  lt.drawCutRectanglePath = function (e, t, n, r, i, a, o) {
    var s = r / 2;
    var l = i / 2;
    var u = o === "auto" ? nr() : o;
    if (e.beginPath) {
      e.beginPath();
    }
    e.moveTo(t - s + u, n - l);
    e.lineTo(t + s - u, n - l);
    e.lineTo(t + s, n - l + u);
    e.lineTo(t + s, n + l - u);
    e.lineTo(t + s - u, n + l);
    e.lineTo(t - s + u, n + l);
    e.lineTo(t - s, n + l - u);
    e.lineTo(t - s, n - l + u);
    e.closePath();
  };
  lt.drawBarrelPath = function (e, t, n, r, i) {
    var a = r / 2;
    var o = i / 2;
    var s = t - a;
    var l = t + a;
    var u = n - o;
    var h = n + o;
    var c = ni(r, i);
    var d = c.widthOffset;
    var p = c.heightOffset;
    var g = c.ctrlPtOffsetPct * d;
    if (e.beginPath) {
      e.beginPath();
    }
    e.moveTo(s, u + p);
    e.lineTo(s, h - p);
    e.quadraticCurveTo(s + g, h, s + d, h);
    e.lineTo(l - d, h);
    e.quadraticCurveTo(l - g, h, l, h - p);
    e.lineTo(l, u + p);
    e.quadraticCurveTo(l - g, u, l - d, u);
    e.lineTo(s + d, u);
    e.quadraticCurveTo(s + g, u, s, u + p);
    e.closePath();
  };
  var ln = {};
  var lr = {};
  var li = Math.PI / 40;
  var la = Math.PI * 0;
  for (; la < Math.PI * 2; la += li) {
    ln[la] = Math.sin(la);
    lr[la] = Math.cos(la);
  }
  lt.drawEllipsePath = function (e, t, n, r, i) {
    if (e.beginPath) {
      e.beginPath();
    }
    if (e.ellipse) {
      e.ellipse(t, n, r / 2, i / 2, 0, 0, Math.PI * 2);
    } else {
      var a;
      var o;
      var s = r / 2;
      var l = i / 2;
      var u = Math.PI * 0;
      for (; u < Math.PI * 2; u += li) {
        a = t - s * ln[u] * 0 + s * lr[u] * 1;
        o = n + l * lr[u] * 0 + l * ln[u] * 1;
        if (u === 0) {
          e.moveTo(a, o);
        } else {
          e.lineTo(a, o);
        }
      }
    }
    e.closePath();
  };
  var lo = {};
  function ls(e) {
    var t = e.indexOf(",");
    return e.substr(t + 1);
  }
  function ll(e, t, n) {
    function r() {
      return t.toDataURL(n, e.quality);
    }
    switch (e.output) {
      case "blob-promise":
        return new ru(function (r, i) {
          try {
            t.toBlob(function (e) {
              if (e != null) {
                r(e);
              } else {
                i(Error("`canvas.toBlob()` sent a null value in its callback"));
              }
            }, n, e.quality);
          } catch (e) {
            i(e);
          }
        });
      case "blob":
        return function (e, t) {
          var n = atob(e);
          var r = new ArrayBuffer(n.length);
          var i = new Uint8Array(r);
          var a = 0;
          for (; a < n.length; a++) {
            i[a] = n.charCodeAt(a);
          }
          return new Blob([r], {
            type: t
          });
        }(ls(r()), n);
      case "base64":
        return ls(r());
      default:
        return r();
    }
  }
  lo.createBuffer = function (e, t) {
    var n = document.createElement("canvas");
    n.width = e;
    n.height = t;
    return [n, n.getContext("2d")];
  };
  lo.bufferCanvasImage = function (e) {
    var t = this.cy;
    var n = t.mutableElements().boundingBox();
    var r = this.findContainerClientCoords();
    var i = e.full ? Math.ceil(n.w) : r[2];
    var a = e.full ? Math.ceil(n.h) : r[3];
    var o = S(e.maxWidth) || S(e.maxHeight);
    var s = this.getPixelRatio();
    var l = 1;
    if (e.scale !== undefined) {
      i *= e.scale;
      a *= e.scale;
      l = e.scale;
    } else if (o) {
      var u = Infinity;
      var h = Infinity;
      if (S(e.maxWidth)) {
        u = l * e.maxWidth / i;
      }
      if (S(e.maxHeight)) {
        h = l * e.maxHeight / a;
      }
      i *= l = Math.min(u, h);
      a *= l;
    }
    if (!o) {
      i *= s;
      a *= s;
      l *= s;
    }
    var c = document.createElement("canvas");
    c.width = i;
    c.height = a;
    c.style.width = i + "px";
    c.style.height = a + "px";
    var d = c.getContext("2d");
    if (i > 0 && a > 0) {
      d.clearRect(0, 0, i, a);
      d.globalCompositeOperation = "source-over";
      var p = this.getCachedZSortedEles();
      if (e.full) {
        d.translate(-n.x1 * l, -n.y1 * l);
        d.scale(l, l);
        this.drawElements(d, p);
        d.scale(1 / l, 1 / l);
        d.translate(n.x1 * l, n.y1 * l);
      } else {
        var g = t.pan();
        var f = {
          x: g.x * l,
          y: g.y * l
        };
        l *= t.zoom();
        d.translate(f.x, f.y);
        d.scale(l, l);
        this.drawElements(d, p);
        d.scale(1 / l, 1 / l);
        d.translate(-f.x, -f.y);
      }
      if (e.bg) {
        d.globalCompositeOperation = "destination-over";
        d.fillStyle = e.bg;
        d.rect(0, 0, i, a);
        d.fill();
      }
    }
    return c;
  };
  lo.png = function (e) {
    return ll(e, this.bufferCanvasImage(e), "image/png");
  };
  lo.jpg = function (e) {
    return ll(e, this.bufferCanvasImage(e), "image/jpeg");
  };
  var lu = {};
  lu.nodeShapeImpl = function (e, t, n, r, i, a, o, s) {
    switch (e) {
      case "ellipse":
        return this.drawEllipsePath(t, n, r, i, a);
      case "polygon":
        return this.drawPolygonPath(t, n, r, i, a, o);
      case "round-polygon":
        return this.drawRoundPolygonPath(t, n, r, i, a, o, s);
      case "roundrectangle":
      case "round-rectangle":
        return this.drawRoundRectanglePath(t, n, r, i, a, s);
      case "cutrectangle":
      case "cut-rectangle":
        return this.drawCutRectanglePath(t, n, r, i, a, o, s);
      case "bottomroundrectangle":
      case "bottom-round-rectangle":
        return this.drawBottomRoundRectanglePath(t, n, r, i, a, s);
      case "barrel":
        return this.drawBarrelPath(t, n, r, i, a);
    }
  };
  var lh = lc.prototype;
  function lc(e) {
    var t = this;
    var n = t.cy.window().document;
    t.data = {
      canvases: Array(lh.CANVAS_LAYERS),
      contexts: Array(lh.CANVAS_LAYERS),
      canvasNeedsRedraw: Array(lh.CANVAS_LAYERS),
      bufferCanvases: Array(lh.BUFFER_COUNT),
      bufferContexts: Array(lh.CANVAS_LAYERS)
    };
    var r = "-webkit-tap-highlight-color";
    var i = "rgba(0,0,0,0)";
    t.data.canvasContainer = n.createElement("div");
    var a = t.data.canvasContainer.style;
    t.data.canvasContainer.style[r] = i;
    a.position = "relative";
    a.zIndex = "0";
    a.overflow = "hidden";
    var o = e.cy.container();
    o.appendChild(t.data.canvasContainer);
    o.style[r] = i;
    var s = {
      "-webkit-user-select": "none",
      "-moz-user-select": "-moz-none",
      "user-select": "none",
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
      "outline-style": "none"
    };
    if (x && x.userAgent.match(/msie|trident|edge/i)) {
      s["-ms-touch-action"] = "none";
      s["touch-action"] = "none";
    }
    for (var l = 0; l < lh.CANVAS_LAYERS; l++) {
      var u = t.data.canvases[l] = n.createElement("canvas");
      t.data.contexts[l] = u.getContext("2d");
      Object.keys(s).forEach(function (e) {
        u.style[e] = s[e];
      });
      u.style.position = "absolute";
      u.setAttribute("data-id", "layer" + l);
      u.style.zIndex = String(lh.CANVAS_LAYERS - l);
      t.data.canvasContainer.appendChild(u);
      t.data.canvasNeedsRedraw[l] = false;
    }
    t.data.topCanvas = t.data.canvases[0];
    t.data.canvases[lh.NODE].setAttribute("data-id", "layer" + lh.NODE + "-node");
    t.data.canvases[lh.SELECT_BOX].setAttribute("data-id", "layer" + lh.SELECT_BOX + "-selectbox");
    t.data.canvases[lh.DRAG].setAttribute("data-id", "layer" + lh.DRAG + "-drag");
    for (var l = 0; l < lh.BUFFER_COUNT; l++) {
      t.data.bufferCanvases[l] = n.createElement("canvas");
      t.data.bufferContexts[l] = t.data.bufferCanvases[l].getContext("2d");
      t.data.bufferCanvases[l].style.position = "absolute";
      t.data.bufferCanvases[l].setAttribute("data-id", "buffer" + l);
      t.data.bufferCanvases[l].style.zIndex = String(-l - 1);
      t.data.bufferCanvases[l].style.visibility = "hidden";
    }
    t.pathsEnabled = true;
    var h = tO();
    function c(e) {
      return {
        x: -e.w / 2,
        y: -e.h / 2
      };
    }
    function d(e) {
      e.boundingBox();
      return e[0]._private.bodyBounds;
    }
    function p(e) {
      e.boundingBox();
      return e[0]._private.labelBounds.main || h;
    }
    function g(e) {
      e.boundingBox();
      return e[0]._private.labelBounds.source || h;
    }
    function f(e) {
      e.boundingBox();
      return e[0]._private.labelBounds.target || h;
    }
    function v(e, t) {
      return t;
    }
    function y(e, t, n) {
      var r = e ? e + "-" : "";
      return {
        x: t.x + n.pstyle(r + "text-margin-x").pfValue,
        y: t.y + n.pstyle(r + "text-margin-y").pfValue
      };
    }
    function b(e, t, n) {
      var r = e[0]._private.rscratch;
      return {
        x: r[t],
        y: r[n]
      };
    }
    var w = t.data.eleTxrCache = new sz(t, {
      getKey: function (e) {
        return e[0]._private.nodeKey;
      },
      doesEleInvalidateKey: function (e) {
        var t = e[0]._private;
        return t.oldBackgroundTimestamp !== t.backgroundTimestamp;
      },
      drawElement: function (e, n, r, i, a) {
        return t.drawElement(e, n, r, false, false, a);
      },
      getBoundingBox: d,
      getRotationPoint: function (e) {
        var t;
        return {
          x: ((t = d(e)).x1 + t.x2) / 2,
          y: (t.y1 + t.y2) / 2
        };
      },
      getRotationOffset: function (e) {
        return c(d(e));
      },
      allowEdgeTxrCaching: false,
      allowParentTxrCaching: false
    });
    var E = t.data.lblTxrCache = new sz(t, {
      getKey: function (e) {
        return e[0]._private.labelStyleKey;
      },
      drawElement: function (e, n, r, i, a) {
        return t.drawElementText(e, n, r, i, "main", a);
      },
      getBoundingBox: p,
      getRotationPoint: function (e) {
        return y("", b(e, "labelX", "labelY"), e);
      },
      getRotationOffset: function (e) {
        var t = p(e);
        var n = c(p(e));
        if (e.isNode()) {
          switch (e.pstyle("text-halign").value) {
            case "left":
              n.x = -t.w - (t.leftPad || 0);
              break;
            case "right":
              n.x = -(t.rightPad || 0);
          }
          switch (e.pstyle("text-valign").value) {
            case "top":
              n.y = -t.h - (t.topPad || 0);
              break;
            case "bottom":
              n.y = -(t.botPad || 0);
          }
        }
        return n;
      },
      isVisible: v
    });
    var T = t.data.slbTxrCache = new sz(t, {
      getKey: function (e) {
        return e[0]._private.sourceLabelStyleKey;
      },
      drawElement: function (e, n, r, i, a) {
        return t.drawElementText(e, n, r, i, "source", a);
      },
      getBoundingBox: g,
      getRotationPoint: function (e) {
        return y("source", b(e, "sourceLabelX", "sourceLabelY"), e);
      },
      getRotationOffset: function (e) {
        return c(g(e));
      },
      isVisible: v
    });
    var C = t.data.tlbTxrCache = new sz(t, {
      getKey: function (e) {
        return e[0]._private.targetLabelStyleKey;
      },
      drawElement: function (e, n, r, i, a) {
        return t.drawElementText(e, n, r, i, "target", a);
      },
      getBoundingBox: f,
      getRotationPoint: function (e) {
        return y("target", b(e, "targetLabelX", "targetLabelY"), e);
      },
      getRotationOffset: function (e) {
        return c(f(e));
      },
      isVisible: v
    });
    var N = t.data.lyrTxrCache = new sY(t);
    t.onUpdateEleCalcs(function (e, t) {
      w.invalidateElements(t);
      E.invalidateElements(t);
      T.invalidateElements(t);
      C.invalidateElements(t);
      N.invalidateElements(t);
      for (var n = 0; n < t.length; n++) {
        var r = t[n]._private;
        r.oldBackgroundTimestamp = r.backgroundTimestamp;
      }
    });
    function _(e) {
      for (var t = 0; t < e.length; t++) {
        N.enqueueElementRefinement(e[t].ele);
      }
    }
    w.onDequeue(_);
    E.onDequeue(_);
    T.onDequeue(_);
    C.onDequeue(_);
  }
  lh.CANVAS_LAYERS = 3;
  lh.SELECT_BOX = 0;
  lh.DRAG = 1;
  lh.NODE = 2;
  lh.BUFFER_COUNT = 3;
  lh.TEXTURE_BUFFER = 0;
  lh.MOTIONBLUR_BUFFER_NODE = 1;
  lh.MOTIONBLUR_BUFFER_DRAG = 2;
  lh.redrawHint = function (e, t) {
    switch (e) {
      case "eles":
        this.data.canvasNeedsRedraw[lh.NODE] = t;
        break;
      case "drag":
        this.data.canvasNeedsRedraw[lh.DRAG] = t;
        break;
      case "select":
        this.data.canvasNeedsRedraw[lh.SELECT_BOX] = t;
    }
  };
  var ld = typeof Path2D != "undefined";
  lh.path2dEnabled = function (e) {
    if (e === undefined) {
      return this.pathsEnabled;
    }
    this.pathsEnabled = !!e;
  };
  lh.usePaths = function () {
    return ld && this.pathsEnabled;
  };
  lh.setImgSmoothing = function (e, t) {
    if (e.imageSmoothingEnabled != null) {
      e.imageSmoothingEnabled = t;
    } else {
      e.webkitImageSmoothingEnabled = t;
      e.mozImageSmoothingEnabled = t;
      e.msImageSmoothingEnabled = t;
    }
  };
  lh.getImgSmoothing = function (e) {
    return e.imageSmoothingEnabled ?? (e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled);
  };
  lh.makeOffscreenCanvas = function (e, t) {
    var n;
    if ((typeof OffscreenCanvas == "undefined" ? "undefined" : r(OffscreenCanvas)) !== "undefined") {
      n = new OffscreenCanvas(e, t);
    } else {
      (n = this.cy.window().document.createElement("canvas")).width = e;
      n.height = t;
    }
    return n;
  };
  [sH, sZ, s5, s4, s9, s8, le, lt, lo, lu].forEach(function (e) {
    Z(lh, e);
  });
  var lp = [{
    name: "null",
    impl: oF
  }, {
    name: "base",
    impl: sO
  }, {
    name: "canvas",
    impl: lc
  }];
  var lg = {};
  var lf = {};
  function lv(e, t, n) {
    var r = n;
    function i(n) {
      eJ("Can not register `" + t + "` for `" + e + "` since `" + n + "` already exists in the prototype and can not be overridden");
    }
    if (e === "core") {
      if (a6.prototype[t]) {
        return i(t);
      }
      a6.prototype[t] = n;
    } else if (e === "collection") {
      if (aS.prototype[t]) {
        return i(t);
      }
      aS.prototype[t] = n;
    } else if (e === "layout") {
      function a(e) {
        this.options = e;
        n.call(this, e);
        if (!A(this._private)) {
          this._private = {};
        }
        this._private.cy = e.cy;
        this._private.listeners = [];
        this.createEmitter();
      }
      var o = a.prototype = Object.create(n.prototype);
      var s = [];
      var l = 0;
      for (; l < s.length; l++) {
        var u = s[l];
        o[u] = o[u] || function () {
          return this;
        };
      }
      if (o.start && !o.run) {
        o.run = function () {
          this.start();
          return this;
        };
      } else if (!o.start && o.run) {
        o.start = function () {
          this.run();
          return this;
        };
      }
      var h = n.prototype.stop;
      o.stop = function () {
        var e = this.options;
        if (e && e.animate) {
          var t = this.animations;
          if (t) {
            for (var n = 0; n < t.length; n++) {
              t[n].stop();
            }
          }
        }
        if (h) {
          h.call(this);
        } else {
          this.emit("layoutstop");
        }
        return this;
      };
      o.destroy ||= function () {
        return this;
      };
      o.cy = function () {
        return this._private.cy;
      };
      function c(e) {
        return e._private.cy;
      }
      var d = {
        addEventFields: function (e, t) {
          t.layout = e;
          t.cy = c(e);
          t.target = e;
        },
        bubble: function () {
          return true;
        },
        parent: function (e) {
          return c(e);
        }
      };
      Z(o, {
        createEmitter: function () {
          this._private.emitter = new i6(d, this);
          return this;
        },
        emitter: function () {
          return this._private.emitter;
        },
        on: function (e, t) {
          this.emitter().on(e, t);
          return this;
        },
        one: function (e, t) {
          this.emitter().one(e, t);
          return this;
        },
        once: function (e, t) {
          this.emitter().one(e, t);
          return this;
        },
        removeListener: function (e, t) {
          this.emitter().removeListener(e, t);
          return this;
        },
        removeAllListeners: function () {
          this.emitter().removeAllListeners();
          return this;
        },
        emit: function (e, t) {
          this.emitter().emit(e, t);
          return this;
        }
      });
      r7.eventAliasesOn(o);
      r = a;
    } else if (e === "renderer" && t !== "null" && t !== "base") {
      var p = ly("renderer", "base");
      var g = p.prototype;
      var f = n.prototype;
      function v() {
        p.apply(this, arguments);
        n.apply(this, arguments);
      }
      var y = v.prototype;
      for (var b in g) {
        var x = g[b];
        if (f[b] != null) {
          return i(b);
        }
        y[b] = x;
      }
      for (var w in f) {
        y[w] = f[w];
      }
      g.clientFunctions.forEach(function (e) {
        y[e] = y[e] || function () {
          e$("Renderer does not implement `renderer." + e + "()` on its prototype");
        };
      });
      r = v;
    } else if (e === "__proto__" || e === "constructor" || e === "prototype") {
      return e$(e + " is an illegal type to be registered, possibly lead to prototype pollutions");
    }
    return et({
      map: lg,
      keys: [e, t],
      value: r
    });
  }
  function ly(e, t) {
    return en({
      map: lg,
      keys: [e, t]
    });
  }
  function lm(e, t, n, r, i) {
    return et({
      map: lf,
      keys: [e, t, n, r],
      value: i
    });
  }
  function lb(e, t, n, r) {
    return en({
      map: lf,
      keys: [e, t, n, r]
    });
  }
  function lx() {
    if (arguments.length == 2) {
      return ly.apply(null, arguments);
    }
    if (arguments.length == 3) {
      return lv.apply(null, arguments);
    }
    if (arguments.length == 4) {
      return lb.apply(null, arguments);
    }
    if (arguments.length == 5) {
      return lm.apply(null, arguments);
    }
    e$("Invalid extension access syntax");
  }
  a6.prototype.extension = lx;
  [{
    type: "layout",
    extensions: oB
  }, {
    type: "renderer",
    extensions: lp
  }].forEach(function (e) {
    e.extensions.forEach(function (t) {
      lv(e.type, t.name, t.impl);
    });
  });
  var lw = function e() {
    if (!(this instanceof e)) {
      return new e();
    }
    this.length = 0;
  };
  var lE = lw.prototype;
  lE.instanceString = function () {
    return "stylesheet";
  };
  lE.selector = function (e) {
    this[this.length++] = {
      selector: e,
      properties: []
    };
    return this;
  };
  lE.css = function (e, t) {
    var n = this.length - 1;
    if (_(e)) {
      this[n].properties.push({
        name: e,
        value: t
      });
    } else if (A(e)) {
      var r = Object.keys(e);
      var i = 0;
      for (; i < r.length; i++) {
        var a = r[i];
        var o = e[a];
        if (o != null) {
          var s = a5.properties[a] || a5.properties[Y(a)];
          if (s != null) {
            var l = s.name;
            this[n].properties.push({
              name: l,
              value: o
            });
          }
        }
      }
    }
    return this;
  };
  lE.style = lE.css;
  lE.generateStyle = function (e) {
    var t = new a5(e);
    return this.appendToStyle(t);
  };
  lE.appendToStyle = function (e) {
    for (var t = 0; t < this.length; t++) {
      var n = this[t];
      var r = n.selector;
      var i = n.properties;
      e.selector(r);
      for (var a = 0; a < i.length; a++) {
        var o = i[a];
        e.css(o.name, o.value);
      }
    }
    return e;
  };
  function lT(e = {}) {
    if (A(e)) {
      return new a6(e);
    } else if (_(e)) {
      return lx.apply(lx, arguments);
    } else {
      return undefined;
    }
  }
  lT.use = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    t.unshift(lT);
    e.apply(null, t);
    return this;
  };
  lT.warnings = function (e) {
    return eQ(e);
  };
  lT.version = "3.30.4";
  lT.stylesheet = lT.Stylesheet = lw;
  require.d(exports, {
    Cytoscape: function () {
      return lT;
    }
  });
}