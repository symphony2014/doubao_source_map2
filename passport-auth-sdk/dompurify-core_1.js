// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 882291
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var a;
  var s;
  var u;
  var c;
  var f;
  var d;
  var l;
  var p;
  var v;
  var h;
  var m;
  var _;
  var y;
  var g;
  var b;
  var w;
  var E;
  var O;
  var S;
  var T;
  var C;
  var x;
  var I;
  function P() {
    return (P = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var o in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            e[o] = t[o];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  if (typeof Object.assign != "function") {
    Object.defineProperty(Object, "assign", {
      value: function (e, t) {
        if (e == null) {
          throw TypeError("Cannot convert undefined or null to object");
        }
        var r = Object(e);
        var n = 1;
        for (; n < arguments.length; n++) {
          var o = arguments[n];
          if (o != null) {
            for (var i in o) {
              if (Object.prototype.hasOwnProperty.call(o, i)) {
                r[i] = o[i];
              }
            }
          }
        }
        return r;
      },
      writable: true,
      configurable: true
    });
  }
  var R = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : require.g !== undefined ? require.g : typeof self != "undefined" ? self : {};
  function j(e, t, r) {
    e(r = {
      path: t,
      exports: {},
      require: function (e, t) {
        return function () {
          throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(e, t == null ? r.path : t);
      }
    }, r.exports);
    return r.exports;
  }
  function L(e) {
    return e && e.Math == Math && e;
  }
  var A = L(typeof globalThis == "object" && globalThis) || L(typeof window == "object" && window) || L(typeof self == "object" && self) || L(typeof R == "object" && R) || function () {
    return this;
  }() || Function("return this")();
  var k = Function.prototype;
  var D = k.apply;
  var N = k.bind;
  var M = k.call;
  var q = typeof Reflect == "object" && Reflect.apply || (N ? M.bind(D) : function () {
    return M.apply(D, arguments);
  });
  var U = Function.prototype;
  var B = U.bind;
  var H = U.call;
  var G = B && B.bind(H);
  var F = B ? function (e) {
    return e && G(H, e);
  } : function (e) {
    return e && function () {
      return H.apply(e, arguments);
    };
  };
  function V(e) {
    return typeof e == "function";
  }
  function W(e) {
    try {
      return !!e();
    } catch (e) {
      return true;
    }
  }
  var z = !W(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
  var Y = Function.prototype.call;
  var J = Y.bind ? Y.bind(Y) : function () {
    return Y.apply(Y, arguments);
  };
  var K = {}.propertyIsEnumerable;
  var Q = Object.getOwnPropertyDescriptor;
  var X = {
    f: Q && !K.call({
      1: 2
    }, 1) ? function (e) {
      var t = Q(this, e);
      return !!t && t.enumerable;
    } : K
  };
  function Z(e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  }
  var $ = F({}.toString);
  var ee = F("".slice);
  function et(e) {
    return ee($(e), 8, -1);
  }
  var er = A.Object;
  var en = F("".split);
  var eo = W(function () {
    return !er("z").propertyIsEnumerable(0);
  }) ? function (e) {
    if (et(e) == "String") {
      return en(e, "");
    } else {
      return er(e);
    }
  } : er;
  var ei = A.TypeError;
  function ea(e) {
    if (e == undefined) {
      throw ei("Can't call method on " + e);
    }
    return e;
  }
  function es(e) {
    return eo(ea(e));
  }
  function eu(e) {
    if (typeof e == "object") {
      return e !== null;
    } else {
      return V(e);
    }
  }
  var ec = {};
  function ef(e) {
    if (V(e)) {
      return e;
    } else {
      return undefined;
    }
  }
  function ed(e, t) {
    if (arguments.length < 2) {
      return ef(ec[e]) || ef(A[e]);
    } else {
      return ec[e] && ec[e][t] || A[e] && A[e][t];
    }
  }
  var el = F({}.isPrototypeOf);
  var ep = ed("navigator", "userAgent") || "";
  var ev = A.process;
  var eh = A.Deno;
  var em = ev && ev.versions || eh && eh.version;
  var e_ = em && em.v8;
  if (e_) {
    a = (i = e_.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1]);
  }
  if (!a && ep && (!(i = ep.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = ep.match(/Chrome\/(\d+)/))) {
    a = +i[1];
  }
  var ey = a;
  var eg = !!Object.getOwnPropertySymbols && !W(function () {
    var e = Symbol();
    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && ey && ey < 41;
  });
  var eb = eg && !Symbol.sham && typeof Symbol.iterator == "symbol";
  var ew = A.Object;
  var eE = eb ? function (e) {
    return typeof e == "symbol";
  } : function (e) {
    var t = ed("Symbol");
    return V(t) && el(t.prototype, ew(e));
  };
  var eO = A.String;
  function eS(e) {
    try {
      return eO(e);
    } catch (e) {
      return "Object";
    }
  }
  var eT = A.TypeError;
  function eC(e) {
    if (V(e)) {
      return e;
    }
    throw eT(eS(e) + " is not a function");
  }
  function ex(e, t) {
    var r = e[t];
    if (r == null) {
      return undefined;
    } else {
      return eC(r);
    }
  }
  var eI = A.TypeError;
  function eP(e, t) {
    var r;
    var n;
    if (t === "string" && V(r = e.toString) && !eu(n = J(r, e)) || V(r = e.valueOf) && !eu(n = J(r, e)) || t !== "string" && V(r = e.toString) && !eu(n = J(r, e))) {
      return n;
    }
    throw eI("Can't convert object to primitive value");
  }
  var eR = Object.defineProperty;
  var ej = "__core-js_shared__";
  var eL = A[ej] || function (e, t) {
    try {
      eR(A, e, {
        value: t,
        configurable: true,
        writable: true
      });
    } catch (r) {
      A[e] = t;
    }
    return t;
  }(ej, {});
  var eA = j(function (e) {
    (e.exports = function (e, t) {
      return eL[e] ||= t !== undefined ? t : {};
    })("versions", []).push({
      version: "3.20.1",
      mode: "pure",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  });
  var ek = A.Object;
  function eD(e) {
    return ek(ea(e));
  }
  var eN = F({}.hasOwnProperty);
  var eM = Object.hasOwn || function (e, t) {
    return eN(eD(e), t);
  };
  var eq = 0;
  var eU = Math.random();
  var eB = F(1 .toString);
  function eH(e) {
    return "Symbol(" + (e === undefined ? "" : e) + ")_" + eB(++eq + eU, 36);
  }
  var eG = eA("wks");
  var eF = A.Symbol;
  var eV = eF && eF.for;
  var eW = eb ? eF : eF && eF.withoutSetter || eH;
  function ez(e) {
    if (!eM(eG, e) || !eg && typeof eG[e] != "string") {
      var t = "Symbol." + e;
      if (eg && eM(eF, e)) {
        eG[e] = eF[e];
      } else if (eb && eV) {
        eG[e] = eV(t);
      } else {
        eG[e] = eW(t);
      }
    }
    return eG[e];
  }
  var eY = A.TypeError;
  var eJ = ez("toPrimitive");
  function eK(e, t) {
    if (!eu(e) || eE(e)) {
      return e;
    }
    var r;
    var n = ex(e, eJ);
    if (n) {
      if (t === undefined) {
        t = "default";
      }
      if (!eu(r = J(n, e, t)) || eE(r)) {
        return r;
      }
      throw eY("Can't convert object to primitive value");
    }
    if (t === undefined) {
      t = "number";
    }
    return eP(e, t);
  }
  function eQ(e) {
    var t = eK(e, "string");
    if (eE(t)) {
      return t;
    } else {
      return t + "";
    }
  }
  var eX = A.document;
  var eZ = eu(eX) && eu(eX.createElement);
  function e$(e) {
    if (eZ) {
      return eX.createElement(e);
    } else {
      return {};
    }
  }
  var e0 = !z && !W(function () {
    return Object.defineProperty(e$("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var e1 = Object.getOwnPropertyDescriptor;
  var e2 = z ? e1 : function (e, t) {
    e = es(e);
    t = eQ(t);
    if (e0) {
      try {
        return e1(e, t);
      } catch (e) {}
    }
    if (eM(e, t)) {
      return Z(!J(X.f, e, t), e[t]);
    }
  };
  var e6 = /#|\.prototype\./;
  function e3(e, t) {
    var r = e8[e5(e)];
    return r == e9 || r != e4 && (V(t) ? W(t) : !!t);
  }
  var e5 = e3.normalize = function (e) {
    return String(e).replace(e6, ".").toLowerCase();
  };
  var e8 = e3.data = {};
  var e4 = e3.NATIVE = "N";
  var e9 = e3.POLYFILL = "P";
  var e7 = F(F.bind);
  function te(e, t) {
    eC(e);
    if (t === undefined) {
      return e;
    } else if (e7) {
      return e7(e, t);
    } else {
      return function () {
        return e.apply(t, arguments);
      };
    }
  }
  var tt = A.String;
  var tr = A.TypeError;
  function tn(e) {
    if (eu(e)) {
      return e;
    }
    throw tr(tt(e) + " is not an object");
  }
  var to = A.TypeError;
  var ti = Object.defineProperty;
  var ta = {
    f: z ? ti : function (e, t, r) {
      tn(e);
      t = eQ(t);
      tn(r);
      if (e0) {
        try {
          return ti(e, t, r);
        } catch (e) {}
      }
      if ("get" in r || "set" in r) {
        throw to("Accessors not supported");
      }
      if ("value" in r) {
        e[t] = r.value;
      }
      return e;
    }
  };
  var ts = z ? function (e, t, r) {
    return ta.f(e, t, Z(1, r));
  } : function (e, t, r) {
    e[t] = r;
    return e;
  };
  function tu(e) {
    function t(r, n, o) {
      if (this instanceof t) {
        switch (arguments.length) {
          case 0:
            return new e();
          case 1:
            return new e(r);
          case 2:
            return new e(r, n);
        }
        return new e(r, n, o);
      }
      return q(e, this, arguments);
    }
    t.prototype = e.prototype;
    return t;
  }
  function tc(e, t) {
    var r;
    var n;
    var o;
    var i;
    var a;
    var s;
    var u;
    var c;
    var f = e.target;
    var d = e.global;
    var l = e.stat;
    var p = e.proto;
    var v = d ? A : l ? A[f] : (A[f] || {}).prototype;
    var h = d ? ec : ec[f] || ts(ec, f, {})[f];
    var m = h.prototype;
    for (o in t) {
      r = !e3(d ? o : f + (l ? "." : "#") + o, e.forced) && v && eM(v, o);
      a = h[o];
      if (r) {
        s = e.noTargetGet ? (c = e2(v, o)) && c.value : v[o];
      }
      i = r && s ? s : t[o];
      if (!r || typeof a != typeof i) {
        u = e.bind && r ? te(i, A) : e.wrap && r ? tu(i) : p && V(i) ? F(i) : i;
        if (e.sham || i && i.sham || a && a.sham) {
          ts(u, "sham", true);
        }
        ts(h, o, u);
        if (p) {
          if (!eM(ec, n = f + "Prototype")) {
            ts(ec, n, {});
          }
          ts(ec[n], o, i);
          if (e.real && m && !m[o]) {
            ts(m, o, i);
          }
        }
      }
    }
  }
  var tf = eA("keys");
  function td(e) {
    return tf[e] ||= eH(e);
  }
  var tl = !W(function () {
    function e() {}
    e.prototype.constructor = null;
    return Object.getPrototypeOf(new e()) !== e.prototype;
  });
  var tp = td("IE_PROTO");
  var tv = A.Object;
  var th = tv.prototype;
  var tm = tl ? tv.getPrototypeOf : function (e) {
    var t = eD(e);
    if (eM(t, tp)) {
      return t[tp];
    }
    var r = t.constructor;
    if (V(r) && t instanceof r) {
      return r.prototype;
    } else if (t instanceof tv) {
      return th;
    } else {
      return null;
    }
  };
  var t_ = A.String;
  var ty = A.TypeError;
  function tg(e) {
    if (typeof e == "object" || V(e)) {
      return e;
    }
    throw ty("Can't set " + t_(e) + " as a prototype");
  }
  var tb = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e;
    var t = false;
    var r = {};
    try {
      (e = F(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []);
      t = r instanceof Array;
    } catch (e) {}
    return function (r, n) {
      tn(r);
      tg(n);
      if (t) {
        e(r, n);
      } else {
        r.__proto__ = n;
      }
      return r;
    };
  }() : undefined);
  var tw = Math.ceil;
  var tE = Math.floor;
  function tO(e) {
    var t = +e;
    if (t != t || t === 0) {
      return 0;
    } else {
      return (t > 0 ? tE : tw)(t);
    }
  }
  var tS = Math.max;
  var tT = Math.min;
  function tC(e, t) {
    var r = tO(e);
    if (r < 0) {
      return tS(r + t, 0);
    } else {
      return tT(r, t);
    }
  }
  var tx = Math.min;
  function tI(e) {
    var t;
    if ((t = e.length) > 0) {
      return tx(tO(t), 9007199254740991);
    } else {
      return 0;
    }
  }
  function tP(e) {
    return function (t, r, n) {
      var o;
      var i = es(t);
      var a = tI(i);
      var s = tC(n, a);
      if (e && r != r) {
        while (a > s) {
          if ((o = i[s++]) != o) {
            return true;
          }
        }
      } else {
        for (; a > s; s++) {
          if ((e || s in i) && i[s] === r) {
            return e || s || 0;
          }
        }
      }
      return !e && -1;
    };
  }
  var tR = {
    includes: tP(true),
    indexOf: tP(false)
  };
  var tj = {};
  var tL = tR.indexOf;
  var tA = F([].push);
  function tk(e, t) {
    var r;
    var n = es(e);
    var o = 0;
    var i = [];
    for (r in n) {
      if (!eM(tj, r) && eM(n, r)) {
        tA(i, r);
      }
    }
    while (t.length > o) {
      if (eM(n, r = t[o++])) {
        if (!~tL(i, r)) {
          tA(i, r);
        }
      }
    }
    return i;
  }
  var tD = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  var tN = tD.concat("length", "prototype");
  var tM = {
    f: Object.getOwnPropertyNames || function (e) {
      return tk(e, tN);
    }
  };
  var tq = {
    f: Object.getOwnPropertySymbols
  };
  var tU = F([].concat);
  var tB = ed("Reflect", "ownKeys") || function (e) {
    var t = tM.f(tn(e));
    var r = tq.f;
    if (r) {
      return tU(t, r(e));
    } else {
      return t;
    }
  };
  var tH = Object.keys || function (e) {
    return tk(e, tD);
  };
  var tG = z ? Object.defineProperties : function (e, t) {
    tn(e);
    var r;
    var n = es(t);
    var o = tH(t);
    var i = o.length;
    var a = 0;
    while (i > a) {
      ta.f(e, r = o[a++], n[r]);
    }
    return e;
  };
  var tF = ed("document", "documentElement");
  var tV = "prototype";
  var tW = "script";
  var tz = td("IE_PROTO");
  function tY() {}
  function tJ(e) {
    return "<" + tW + ">" + e + "</" + tW + ">";
  }
  function tK(e) {
    e.write(tJ(""));
    e.close();
    var t = e.parentWindow.Object;
    e = null;
    return t;
  }
  function tQ() {
    var e;
    var t = e$("iframe");
    t.style.display = "none";
    tF.appendChild(t);
    t.src = String("java" + tW + ":");
    (e = t.contentWindow.document).open();
    e.write(tJ("document.F=Object"));
    e.close();
    return e.F;
  }
  function tX() {
    try {
      s = new ActiveXObject("htmlfile");
    } catch (e) {}
    tX = typeof document != "undefined" ? document.domain && s ? tK(s) : tQ() : tK(s);
    for (var e = tD.length; e--;) {
      delete tX[tV][tD[e]];
    }
    return tX();
  }
  tj[tz] = true;
  var tZ = Object.create || function (e, t) {
    var r;
    if (e !== null) {
      tY[tV] = tn(e);
      r = new tY();
      tY[tV] = null;
      r[tz] = e;
    } else {
      r = tX();
    }
    if (t === undefined) {
      return r;
    } else {
      return tG(r, t);
    }
  };
  var t$ = F("".replace);
  var t0 = String(Error("zxcasd").stack);
  var t1 = /\n\s*at [^:]*:[^\n]*/;
  var t2 = t1.test(t0);
  function t6(e, t) {
    if (t2 && typeof e == "string") {
      while (t--) {
        e = t$(e, t1, "");
      }
    }
    return e;
  }
  function t3(e, t) {
    if (eu(t) && "cause" in t) {
      ts(e, "cause", t.cause);
    }
  }
  var t5 = {};
  var t8 = ez("iterator");
  var t4 = Array.prototype;
  var t9 = ez("toStringTag");
  var t7 = {
    [t9]: "z"
  };
  var re = String(t7) === "[object z]";
  var rt = ez("toStringTag");
  var rr = A.Object;
  var rn = et(function () {
    return arguments;
  }()) == "Arguments";
  function ro(e, t) {
    try {
      return e[t];
    } catch (e) {}
  }
  var ri = re ? et : function (e) {
    var t;
    var r;
    var n;
    if (e === undefined) {
      return "Undefined";
    } else if (e === null) {
      return "Null";
    } else if (typeof (r = ro(t = rr(e), rt)) == "string") {
      return r;
    } else if (rn) {
      return et(t);
    } else if ((n = et(t)) == "Object" && V(t.callee)) {
      return "Arguments";
    } else {
      return n;
    }
  };
  var ra = ez("iterator");
  function rs(e) {
    if (e != undefined) {
      return ex(e, ra) || ex(e, "@@iterator") || t5[ri(e)];
    }
  }
  var ru = A.TypeError;
  function rc(e, t) {
    var r = arguments.length < 2 ? rs(e) : t;
    if (eC(r)) {
      return tn(J(r, e));
    }
    throw ru(eS(e) + " is not iterable");
  }
  function rf(e, t, r) {
    var n;
    var o;
    tn(e);
    try {
      if (!(n = ex(e, "return"))) {
        if (t === "throw") {
          throw r;
        }
        return r;
      }
      n = J(n, e);
    } catch (e) {
      o = true;
      n = e;
    }
    if (t === "throw") {
      throw r;
    }
    if (o) {
      throw n;
    }
    tn(n);
    return r;
  }
  var rd = A.TypeError;
  function rl(e, t) {
    this.stopped = e;
    this.result = t;
  }
  var rp = rl.prototype;
  function rv(e, t, r) {
    var n;
    var o;
    var i;
    var a;
    var s;
    var u;
    var c;
    var f = r && r.that;
    var d = !!r && !!r.AS_ENTRIES;
    var l = !!r && !!r.IS_ITERATOR;
    var p = !!r && !!r.INTERRUPTED;
    var v = te(t, f);
    function h(e) {
      if (n) {
        rf(n, "normal", e);
      }
      return new rl(true, e);
    }
    function m(e) {
      if (d) {
        tn(e);
        if (p) {
          return v(e[0], e[1], h);
        } else {
          return v(e[0], e[1]);
        }
      } else if (p) {
        return v(e, h);
      } else {
        return v(e);
      }
    }
    if (l) {
      n = e;
    } else {
      if (!(o = rs(e))) {
        throw rd(eS(e) + " is not iterable");
      }
      if (o !== undefined && (t5.Array === o || t4[t8] === o)) {
        i = 0;
        a = tI(e);
        for (; a > i; i++) {
          if ((s = m(e[i])) && el(rp, s)) {
            return s;
          }
        }
        return new rl(false);
      }
      n = rc(e, o);
    }
    for (u = n.next; !(c = J(u, n)).done;) {
      try {
        s = m(c.value);
      } catch (e) {
        rf(n, "throw", e);
      }
      if (typeof s == "object" && s && el(rp, s)) {
        return s;
      }
    }
    return new rl(false);
  }
  var rh = A.String;
  function rm(e) {
    if (ri(e) === "Symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return rh(e);
  }
  var r_ = !W(function () {
    var e = Error("a");
    return !("stack" in e) || (Object.defineProperty(e, "stack", Z(1, 7)), e.stack !== 7);
  });
  var ry = ez("toStringTag");
  var rg = A.Error;
  var rb = [].push;
  function rw(e, t) {
    var r;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var o = el(rE, this);
    if (tb) {
      r = tb(new rg(), o ? tm(this) : rE);
    } else {
      ts(r = o ? this : tZ(rE), ry, "Error");
    }
    if (t !== undefined) {
      ts(r, "message", function (e, t) {
        if (e === undefined) {
          if (arguments.length < 2) {
            return "";
          } else {
            return t;
          }
        } else {
          return rm(e);
        }
      }(t));
    }
    if (r_) {
      ts(r, "stack", t6(r.stack, 1));
    }
    t3(r, n);
    var i = [];
    rv(e, rb, {
      that: i
    });
    ts(r, "errors", i);
    return r;
  }
  if (tb) {
    tb(rw, rg);
  } else {
    (function (e, t, r) {
      var n = tB(t);
      var o = ta.f;
      var i = 0;
      for (; i < n.length; i++) {
        var a = n[i];
        if (!eM(e, a) && (!r || !eM(r, a))) {
          o(e, a, e2(t, a));
        }
      }
    })(rw, rg, {
      name: true
    });
  }
  var rE = rw.prototype = tZ(rg.prototype, {
    constructor: Z(1, rw),
    message: Z(1, ""),
    name: Z(1, "AggregateError")
  });
  tc({
    global: true
  }, {
    AggregateError: rw
  });
  var rO = F(Function.toString);
  if (!V(eL.inspectSource)) {
    eL.inspectSource = function (e) {
      return rO(e);
    };
  }
  var rS = eL.inspectSource;
  var rT = A.WeakMap;
  var rC = V(rT) && /native code/.test(rS(rT));
  var rx = "Object already initialized";
  var rI = A.TypeError;
  var rP = A.WeakMap;
  if (rC || eL.state) {
    var rR = eL.state ||= new rP();
    var rj = F(rR.get);
    var rL = F(rR.has);
    var rA = F(rR.set);
    u = function (e, t) {
      if (rL(rR, e)) {
        throw new rI(rx);
      }
      t.facade = e;
      rA(rR, e, t);
      return t;
    };
    c = function (e) {
      return rj(rR, e) || {};
    };
  } else {
    var rk = td("state");
    tj[rk] = true;
    u = function (e, t) {
      if (eM(e, rk)) {
        throw new rI(rx);
      }
      t.facade = e;
      ts(e, rk, t);
      return t;
    };
    c = function (e) {
      if (eM(e, rk)) {
        return e[rk];
      } else {
        return {};
      }
    };
  }
  var rD = u;
  function rN(e) {
    return function (t) {
      var r;
      if (!eu(t) || (r = c(t)).type !== e) {
        throw rI("Incompatible receiver, " + e + " required");
      }
      return r;
    };
  }
  var rM = Function.prototype;
  var rq = z && Object.getOwnPropertyDescriptor;
  var rU = eM(rM, "name");
  if (rU) {
    if (z) {
      if (z) {
        rq(rM, "name").configurable;
      }
    }
  }
  function rB(e, t, r, n) {
    if (n && n.enumerable) {
      e[t] = r;
    } else {
      ts(e, t, r);
    }
  }
  var rH = ez("iterator");
  var rG = false;
  if ([].keys) {
    if ("next" in (p = [].keys())) {
      if ((l = tm(tm(p))) !== Object.prototype) {
        d = l;
      }
    } else {
      rG = true;
    }
  }
  if (!V((d = d == undefined || W(function () {
    var e = {};
    return d[rH].call(e) !== e;
  }) ? {} : tZ(d))[rH])) {
    rB(d, rH, function () {
      return this;
    });
  }
  var rF = d;
  var rV = rG;
  var rW = re ? {}.toString : function () {
    return "[object " + ri(this) + "]";
  };
  var rz = ta.f;
  var rY = ez("toStringTag");
  function rJ(e, t, r, n) {
    if (e) {
      var o = r ? e : e.prototype;
      if (!eM(o, rY)) {
        rz(o, rY, {
          configurable: true,
          value: t
        });
      }
      if (n && !re) {
        ts(o, "toString", rW);
      }
    }
  }
  function rK() {
    return this;
  }
  function rQ(e, t, r, n) {
    var o = t + " Iterator";
    e.prototype = tZ(rF, {
      next: Z(+!n, r)
    });
    rJ(e, o, false, true);
    t5[o] = rK;
    return e;
  }
  var rX = rU && function () {}.name === "something";
  var rZ = ez("iterator");
  var r$ = "keys";
  var r0 = "values";
  var r1 = "entries";
  function r2() {
    return this;
  }
  function r6(e, t, r, n, o, i, a) {
    rQ(r, t, n);
    var s;
    var u;
    var c;
    function f(e) {
      if (e === o && h) {
        return h;
      }
      if (!rV && e in p) {
        return p[e];
      }
      switch (e) {
        case r$:
        case r0:
        case r1:
          return function () {
            return new r(this, e);
          };
      }
      return function () {
        return new r(this);
      };
    }
    var d = t + " Iterator";
    var l = false;
    var p = e.prototype;
    var v = p[rZ] || p["@@iterator"] || o && p[o];
    var h = !rV && v || f(o);
    var m = t == "Array" && p.entries || v;
    if (m && (s = tm(m.call(new e()))) !== Object.prototype && s.next) {
      rJ(s, d, true, true);
      t5[d] = r2;
    }
    if (rX && o == r0 && v && v.name !== r0) {
      l = true;
      h = function () {
        return J(v, this);
      };
    }
    if (o) {
      u = {
        values: f(r0),
        keys: i ? h : f(r$),
        entries: f(r1)
      };
      if (a) {
        for (c in u) {
          if (!!rV || !!l || !(c in p)) {
            rB(p, c, u[c]);
          }
        }
      } else {
        tc({
          target: t,
          proto: true,
          forced: rV || l
        }, u);
      }
    }
    if (a && p[rZ] !== h) {
      rB(p, rZ, h, {
        name: o
      });
    }
    t5[t] = h;
    return u;
  }
  ta.f;
  var r3 = "Array Iterator";
  var r5 = rN(r3);
  r6(Array, "Array", function (e, t) {
    rD(this, {
      type: r3,
      target: es(e),
      index: 0,
      kind: t
    });
  }, function () {
    var e = r5(this);
    var t = e.target;
    var r = e.kind;
    var n = e.index++;
    if (!t || n >= t.length) {
      e.target = undefined;
      return {
        value: undefined,
        done: true
      };
    } else if (r == "keys") {
      return {
        value: n,
        done: false
      };
    } else if (r == "values") {
      return {
        value: t[n],
        done: false
      };
    } else {
      return {
        value: [n, t[n]],
        done: false
      };
    }
  }, "values");
  t5.Arguments = t5.Array;
  var r8 = A.Promise;
  var r4 = ez("species");
  var r9 = A.TypeError;
  function r7(e, t) {
    if (el(t, e)) {
      return e;
    }
    throw r9("Incorrect invocation");
  }
  var ne = ez("iterator");
  var nt = false;
  try {
    var nr = 0;
    var nn = {
      next: function () {
        return {
          done: !!nr++
        };
      },
      return: function () {
        nt = true;
      }
    };
    nn[ne] = function () {
      return this;
    };
    Array.from(nn, function () {
      throw 2;
    });
  } catch (e) {}
  function no() {}
  var ni = [];
  var na = ed("Reflect", "construct");
  var ns = /^\s*(?:class|function)\b/;
  var nu = F(ns.exec);
  var nc = !ns.exec(no);
  function nf(e) {
    if (!V(e)) {
      return false;
    }
    try {
      na(no, ni, e);
      return true;
    } catch (e) {
      return false;
    }
  }
  function nd(e) {
    if (!V(e)) {
      return false;
    }
    switch (ri(e)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return nc || !!nu(ns, rS(e));
    } catch (e) {
      return true;
    }
  }
  nd.sham = true;
  var nl = !na || W(function () {
    var e;
    return nf(nf.call) || !nf(Object) || !nf(function () {
      e = true;
    }) || e;
  }) ? nd : nf;
  var np = A.TypeError;
  function nv(e) {
    if (nl(e)) {
      return e;
    }
    throw np(eS(e) + " is not a constructor");
  }
  var nh = ez("species");
  function nm(e, t) {
    var r;
    var n = tn(e).constructor;
    if (n === undefined || (r = tn(n)[nh]) == undefined) {
      return t;
    } else {
      return nv(r);
    }
  }
  var n_ = F([].slice);
  var ny = /(?:ipad|iphone|ipod).*applewebkit/i.test(ep);
  var ng = et(A.process) == "process";
  var nb = A.setImmediate;
  var nw = A.clearImmediate;
  var nE = A.process;
  var nO = A.Dispatch;
  var nS = A.Function;
  var nT = A.MessageChannel;
  var nC = A.String;
  var nx = 0;
  var nI = {};
  var nP = "onreadystatechange";
  try {
    v = A.location;
  } catch (e) {}
  function nR(e) {
    if (eM(nI, e)) {
      var t = nI[e];
      delete nI[e];
      t();
    }
  }
  function nj(e) {
    return function () {
      nR(e);
    };
  }
  function nL(e) {
    nR(e.data);
  }
  function nA(e) {
    A.postMessage(nC(e), v.protocol + "//" + v.host);
  }
  if (!nb || !nw) {
    nb = function (e) {
      var t = n_(arguments, 1);
      nI[++nx] = function () {
        q(V(e) ? e : nS(e), undefined, t);
      };
      h(nx);
      return nx;
    };
    nw = function (e) {
      delete nI[e];
    };
    if (ng) {
      h = function (e) {
        nE.nextTick(nj(e));
      };
    } else if (nO && nO.now) {
      h = function (e) {
        nO.now(nj(e));
      };
    } else if (nT && !ny) {
      _ = (m = new nT()).port2;
      m.port1.onmessage = nL;
      h = te(_.postMessage, _);
    } else if (A.addEventListener && V(A.postMessage) && !A.importScripts && v && v.protocol !== "file:" && !W(nA)) {
      h = nA;
      A.addEventListener("message", nL, false);
    } else {
      h = nP in e$("script") ? function (e) {
        tF.appendChild(e$("script"))[nP] = function () {
          tF.removeChild(this);
          nR(e);
        };
      } : function (e) {
        setTimeout(nj(e), 0);
      };
    }
  }
  var nk = nb;
  var nD = /ipad|iphone|ipod/i.test(ep) && A.Pebble !== undefined;
  var nN = /web0s(?!.*chrome)/i.test(ep);
  var nM = nk;
  var nq = A.MutationObserver || A.WebKitMutationObserver;
  var nU = A.document;
  var nB = A.process;
  var nH = A.Promise;
  var nG = e2(A, "queueMicrotask");
  var nF = nG && nG.value;
  if (!nF) {
    y = function () {
      var e;
      var t;
      for (ng && (e = nB.domain) && e.exit(); g;) {
        t = g.fn;
        g = g.next;
        try {
          t();
        } catch (e) {
          if (g) {
            w();
          } else {
            b = undefined;
          }
          throw e;
        }
      }
      b = undefined;
      if (e) {
        e.enter();
      }
    };
    if (ny || ng || nN || !nq || !nU) {
      if (!nD && nH && nH.resolve) {
        (S = nH.resolve(undefined)).constructor = nH;
        T = te(S.then, S);
        w = function () {
          T(y);
        };
      } else if (ng) {
        w = function () {
          nB.nextTick(y);
        };
      } else {
        nM = te(nM, A);
        w = function () {
          nM(y);
        };
      }
    } else {
      E = true;
      O = nU.createTextNode("");
      new nq(y).observe(O, {
        characterData: true
      });
      w = function () {
        O.data = E = !E;
      };
    }
  }
  var nV = nF || function (e) {
    var t = {
      fn: e,
      next: undefined
    };
    if (b) {
      b.next = t;
    }
    if (!g) {
      g = t;
      w();
    }
    b = t;
  };
  function nW(e) {
    var t;
    var r;
    this.promise = new e(function (e, n) {
      if (t !== undefined || r !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      t = e;
      r = n;
    });
    this.resolve = eC(t);
    this.reject = eC(r);
  }
  var nz = {
    f: function (e) {
      return new nW(e);
    }
  };
  function nY(e, t) {
    tn(e);
    if (eu(t) && t.constructor === e) {
      return t;
    }
    var r = nz.f(e);
    r.resolve(t);
    return r.promise;
  }
  function nJ(e, t) {
    var r = A.console;
    if (r) {
      r.error;
    }
  }
  function nK(e) {
    try {
      return {
        error: false,
        value: e()
      };
    } catch (e) {
      return {
        error: true,
        value: e
      };
    }
  }
  function nQ() {
    this.head = null;
    this.tail = null;
  }
  nQ.prototype = {
    add: function (e) {
      var t = {
        item: e,
        next: null
      };
      if (this.head) {
        this.tail.next = t;
      } else {
        this.head = t;
      }
      this.tail = t;
    },
    get: function () {
      var e = this.head;
      if (e) {
        this.head = e.next;
        if (this.tail === e) {
          this.tail = null;
        }
        return e.item;
      }
    }
  };
  var nX = typeof window == "object";
  var nZ = ez("species");
  var n$ = "Promise";
  var n0 = rN(n$);
  var n1 = rN(n$);
  var n2 = r8 && r8.prototype;
  var n6 = r8;
  var n3 = n2;
  var n5 = A.TypeError;
  var n8 = A.document;
  var n4 = A.process;
  var n9 = nz.f;
  var n7 = n9;
  var oe = !!n8 && !!n8.createEvent && !!A.dispatchEvent;
  var ot = V(A.PromiseRejectionEvent);
  var or = "unhandledrejection";
  var on = false;
  var oo = e3(n$, function () {
    var e = rS(n6);
    var t = e !== String(n6);
    if (!t && ey === 66 || !n3.finally) {
      return true;
    }
    if (ey >= 51 && /native code/.test(e)) {
      return false;
    }
    var r = new n6(function (e) {
      e(1);
    });
    function n(e) {
      e(function () {}, function () {});
    }
    (r.constructor = {})[nZ] = n;
    return !(r.then(function () {}) instanceof n) || !t && nX && !ot;
  });
  var oi = oo || !function (e, t) {
    if (!nt) {
      return false;
    }
    var r = false;
    try {
      var n = {
        [ne]: function () {
          return {
            next: function () {
              return {
                done: r = true
              };
            }
          };
        }
      };
      e(n);
    } catch (e) {}
    return r;
  }(function (e) {
    n6.all(e).catch(function () {});
  });
  function oa(e) {
    var t;
    return !!eu(e) && !!V(t = e.then) && t;
  }
  function os(e, t) {
    var r;
    var n;
    var o;
    var i = t.value;
    var a = t.state == 1;
    var s = a ? e.ok : e.fail;
    var u = e.resolve;
    var c = e.reject;
    var f = e.domain;
    try {
      if (s) {
        if (!a) {
          if (t.rejection === 2) {
            ol(t);
          }
          t.rejection = 1;
        }
        if (s === true) {
          r = i;
        } else {
          if (f) {
            f.enter();
          }
          r = s(i);
          if (f) {
            f.exit();
            o = true;
          }
        }
        if (r === e.promise) {
          c(n5("Promise-chain cycle"));
        } else if (n = oa(r)) {
          J(n, r, u, c);
        } else {
          u(r);
        }
      } else {
        c(i);
      }
    } catch (e) {
      if (f && !o) {
        f.exit();
      }
      c(e);
    }
  }
  function ou(e, t) {
    if (!e.notified) {
      e.notified = true;
      nV(function () {
        var r;
        var n = e.reactions;
        while (r = n.get()) {
          os(r, e);
        }
        e.notified = false;
        if (t && !e.rejection) {
          of(e);
        }
      });
    }
  }
  function oc(e, t, r) {
    var n;
    var o;
    if (oe) {
      (n = n8.createEvent("Event")).promise = t;
      n.reason = r;
      n.initEvent(e, false, true);
      A.dispatchEvent(n);
    } else {
      n = {
        promise: t,
        reason: r
      };
    }
    if (!ot && (o = A["on" + e])) {
      o(n);
    } else if (e === or) {
      nJ("Unhandled promise rejection", r);
    }
  }
  function of(e) {
    J(nk, A, function () {
      var t;
      var r = e.facade;
      var n = e.value;
      if (od(e) && (t = nK(function () {
        if (ng) {
          n4.emit("unhandledRejection", n, r);
        } else {
          oc(or, r, n);
        }
      }), e.rejection = ng || od(e) ? 2 : 1, t.error)) {
        throw t.value;
      }
    });
  }
  function od(e) {
    return e.rejection !== 1 && !e.parent;
  }
  function ol(e) {
    J(nk, A, function () {
      var t = e.facade;
      if (ng) {
        n4.emit("rejectionHandled", t);
      } else {
        oc("rejectionhandled", t, e.value);
      }
    });
  }
  function op(e, t, r) {
    return function (n) {
      e(t, n, r);
    };
  }
  function ov(e, t, r) {
    if (!e.done) {
      e.done = true;
      if (r) {
        e = r;
      }
      e.value = t;
      e.state = 2;
      ou(e, true);
    }
  }
  function oh(e, t, r) {
    if (!e.done) {
      e.done = true;
      if (r) {
        e = r;
      }
      try {
        if (e.facade === t) {
          throw n5("Promise can't be resolved itself");
        }
        var n = oa(t);
        if (n) {
          nV(function () {
            var r = {
              done: false
            };
            try {
              J(n, t, op(oh, r, e), op(ov, r, e));
            } catch (t) {
              ov(r, t, e);
            }
          });
        } else {
          e.value = t;
          e.state = 1;
          ou(e, false);
        }
      } catch (t) {
        ov({
          done: false
        }, t, e);
      }
    }
  }
  if (oo) {
    n3 = (n6 = function (e) {
      r7(this, n3);
      eC(e);
      J(C, this);
      var t = n0(this);
      try {
        e(op(oh, t), op(ov, t));
      } catch (e) {
        ov(t, e);
      }
    }).prototype;
    (C = function (e) {
      rD(this, {
        type: n$,
        done: false,
        notified: false,
        parent: false,
        reactions: new nQ(),
        rejection: false,
        state: 0,
        value: undefined
      });
    }).prototype = function (e, t, r) {
      for (var n in t) {
        rB(e, n, t[n], undefined);
      }
      return e;
    }(n3, {
      then: function (e, t) {
        var r = n1(this);
        var n = n9(nm(this, n6));
        r.parent = true;
        n.ok = !V(e) || e;
        n.fail = V(t) && t;
        n.domain = ng ? n4.domain : undefined;
        if (r.state == 0) {
          r.reactions.add(n);
        } else {
          nV(function () {
            os(n, r);
          });
        }
        return n.promise;
      },
      catch: function (e) {
        return this.then(undefined, e);
      }
    });
    x = function () {
      var e = new C();
      var t = n0(e);
      this.promise = e;
      this.resolve = op(oh, t);
      this.reject = op(ov, t);
    };
    nz.f = n9 = function (e) {
      if (e === n6 || e === I) {
        return new x(e);
      } else {
        return n7(e);
      }
    };
  }
  tc({
    global: true,
    wrap: true,
    forced: oo
  }, {
    Promise: n6
  });
  rJ(n6, n$, false, true);
  n = ed(n$);
  o = ta.f;
  if (z && n && !n[r4]) {
    o(n, r4, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
  I = ed(n$);
  tc({
    target: n$,
    stat: true,
    forced: oo
  }, {
    reject: function (e) {
      var t = n9(this);
      J(t.reject, undefined, e);
      return t.promise;
    }
  });
  tc({
    target: n$,
    stat: true,
    forced: true
  }, {
    resolve: function (e) {
      return nY(this === I ? n6 : this, e);
    }
  });
  tc({
    target: n$,
    stat: true,
    forced: oi
  }, {
    all: function (e) {
      var t = this;
      var r = n9(t);
      var n = r.resolve;
      var o = r.reject;
      var i = nK(function () {
        var r = eC(t.resolve);
        var i = [];
        var a = 0;
        var s = 1;
        rv(e, function (e) {
          var u = a++;
          var c = false;
          s++;
          J(r, t, e).then(function (e) {
            if (!c) {
              c = true;
              i[u] = e;
              if (! --s) {
                n(i);
              }
            }
          }, o);
        });
        if (! --s) {
          n(i);
        }
      });
      if (i.error) {
        o(i.value);
      }
      return r.promise;
    },
    race: function (e) {
      var t = this;
      var r = n9(t);
      var n = r.reject;
      var o = nK(function () {
        var o = eC(t.resolve);
        rv(e, function (e) {
          J(o, t, e).then(r.resolve, n);
        });
      });
      if (o.error) {
        n(o.value);
      }
      return r.promise;
    }
  });
  tc({
    target: "Promise",
    stat: true
  }, {
    allSettled: function (e) {
      var t = this;
      var r = nz.f(t);
      var n = r.resolve;
      var o = r.reject;
      var i = nK(function () {
        var r = eC(t.resolve);
        var o = [];
        var i = 0;
        var a = 1;
        rv(e, function (e) {
          var s = i++;
          var u = false;
          a++;
          J(r, t, e).then(function (e) {
            if (!u) {
              u = true;
              o[s] = {
                status: "fulfilled",
                value: e
              };
              if (! --a) {
                n(o);
              }
            }
          }, function (e) {
            if (!u) {
              u = true;
              o[s] = {
                status: "rejected",
                reason: e
              };
              if (! --a) {
                n(o);
              }
            }
          });
        });
        if (! --a) {
          n(o);
        }
      });
      if (i.error) {
        o(i.value);
      }
      return r.promise;
    }
  });
  var om = "No one promise resolved";
  tc({
    target: "Promise",
    stat: true
  }, {
    any: function (e) {
      var t = this;
      var r = ed("AggregateError");
      var n = nz.f(t);
      var o = n.resolve;
      var i = n.reject;
      var a = nK(function () {
        var n = eC(t.resolve);
        var a = [];
        var s = 0;
        var u = 1;
        var c = false;
        rv(e, function (e) {
          var f = s++;
          var d = false;
          u++;
          J(n, t, e).then(function (e) {
            if (!d && !c) {
              c = true;
              o(e);
            }
          }, function (e) {
            if (!d && !c) {
              d = true;
              a[f] = e;
              if (! --u) {
                i(new r(a, om));
              }
            }
          });
        });
        if (! --u) {
          i(new r(a, om));
        }
      });
      if (a.error) {
        i(a.value);
      }
      return n.promise;
    }
  });
  tc({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!r8 && W(function () {
      r8.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (e) {
      var t = nm(this, ed("Promise"));
      var r = V(e);
      return this.then(r ? function (r) {
        return nY(t, e()).then(function () {
          return r;
        });
      } : e, r ? function (r) {
        return nY(t, e()).then(function () {
          throw r;
        });
      } : e);
    }
  });
  var o_ = F("".charAt);
  var oy = F("".charCodeAt);
  var og = F("".slice);
  function ob(e) {
    return function (t, r) {
      var n;
      var o;
      var i = rm(ea(t));
      var a = tO(r);
      var s = i.length;
      if (a < 0 || a >= s) {
        if (e) {
          return "";
        } else {
          return undefined;
        }
      } else if ((n = oy(i, a)) < 55296 || n > 56319 || a + 1 === s || (o = oy(i, a + 1)) < 56320 || o > 57343) {
        if (e) {
          return o_(i, a);
        } else {
          return n;
        }
      } else if (e) {
        return og(i, a, a + 2);
      } else {
        return (n - 55296 << 10) + (o - 56320) + 65536;
      }
    };
  }
  var ow = {
    codeAt: ob(false),
    charAt: ob(true)
  }.charAt;
  var oE = "String Iterator";
  var oO = rN(oE);
  r6(String, "String", function (e) {
    rD(this, {
      type: oE,
      string: rm(e),
      index: 0
    });
  }, function () {
    var e;
    var t = oO(this);
    var r = t.string;
    var n = t.index;
    if (n >= r.length) {
      return {
        value: undefined,
        done: true
      };
    } else {
      e = ow(r, n);
      t.index += e.length;
      return {
        value: e,
        done: false
      };
    }
  });
  var oS = ec.Promise;
  var oT = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  var oC = ez("toStringTag");
  for (var ox in oT) {
    var oI = A[ox];
    var oP = oI && oI.prototype;
    if (oP && ri(oP) !== oC) {
      ts(oP, oC, ox);
    }
    t5[ox] = t5.Array;
  }
  function oR() {
    return (oR = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var o in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            e[o] = t[o];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function oj(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) {
      return e;
    }
    var n;
    var o;
    var i = r.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(n = i.next()).done) {
        a.push(n.value);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        if (n && !n.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return a;
  }
  function oL(e, t, r) {
    if (r || arguments.length == 2) {
      var n;
      var o = 0;
      var i = t.length;
      for (; o < i; o++) {
        if (!!n || !(o in t)) {
          n ||= Array.prototype.slice.call(t, 0, o);
          n[o] = t[o];
        }
      }
    }
    return e.concat(n || Array.prototype.slice.call(t));
  }
  var oA = ["init", "start", "config", "beforeDestroy", "provide", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
  function ok() {}
  function oD(e) {
    return e;
  }
  function oN(e) {
    return typeof e == "object" && e !== null;
  }
  var oM = Object.prototype;
  function oq(e) {
    return oM.toString.call(e) === "[object Array]";
  }
  function oU(e) {
    return typeof e == "number";
  }
  function oB(e) {
    return typeof e == "string";
  }
  function oH(e, t) {
    if (!oq(e) || e.length === 0) {
      return false;
    }
    for (var r = 0; r < e.length;) {
      if (e[r] === t) {
        return true;
      }
      r++;
    }
    return false;
  }
  function oG(e, t) {
    if (!oq(e)) {
      return e;
    }
    var r = e.indexOf(t);
    if (r >= 0) {
      var n = e.slice();
      n.splice(r, 1);
      return n;
    }
    return e;
  }
  function oF(e, t, r) {
    var n;
    var o = oj(t.split("."));
    var i = o[0];
    var a = o.slice(1);
    while (e && a.length > 0) {
      e = e[i];
      i = (n = oj(a))[0];
      a = n.slice(1);
    }
    if (e) {
      return r(e, i);
    }
  }
  function oV(e) {
    try {
      if (oB(e)) {
        return e;
      } else {
        return JSON.stringify(e);
      }
    } catch (e) {
      return "[FAILED_TO_STRINGIFY]:" + String(e);
    }
  }
  function oW() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }
  function oz() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }
  function oY(e) {
    return Math.random() < Number(e);
  }
  function oJ(e, t) {
    return e < Number(t);
  }
  function oK(e) {
    return function (t) {
      var r = t;
      var n = 0;
      for (; n < e.length; n++) {
        if (r) {
          try {
            r = e[n](r);
          } catch (e) {
            oW(e);
          }
        } else {
          break;
        }
      }
      return r;
    };
  }
  function oQ() {
    var e = function () {
      var e = Array(16);
      var t = 0;
      var r = 0;
      for (; r < 16; r++) {
        if ((r & 3) == 0) {
          t = Math.random() * 4294967296;
        }
        e[r] = t >>> ((r & 3) << 3) & 255;
      }
      return e;
    }();
    e[6] = e[6] & 15 | 64;
    e[8] = e[8] & 63 | 128;
    return function (e) {
      var t = [];
      var r = 0;
      for (; r < 256; ++r) {
        t[r] = (r + 256).toString(16).substr(1);
      }
      var n = 0;
      return [t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]]].join("");
    }(e);
  }
  function oX(e) {
    var t;
    var r;
    var n;
    t = {};
    r = {};
    var o = n = {
      set: function (e, o) {
        t[e] = o;
        r[e] = oV(o);
        return n;
      },
      merge: function (e) {
        t = oR(oR({}, t), e);
        Object.keys(e).forEach(function (t) {
          r[t] = oV(e[t]);
        });
        return n;
      },
      delete: function (e) {
        delete t[e];
        delete r[e];
        return n;
      },
      clear: function () {
        t = {};
        r = {};
        return n;
      },
      get: function (e) {
        return r[e];
      },
      toString: function () {
        return oR({}, r);
      }
    };
    e.provide("context", o);
    e.on("report", function (e) {
      e.extra ||= {};
      e.extra.context = o.toString();
      return e;
    });
  }
  function oZ(e) {
    if (e) {
      e.__SLARDAR_REGISTRY__ ||= {
        Slardar: {
          plugins: [],
          errors: []
        }
      };
      return e.__SLARDAR_REGISTRY__.Slardar;
    }
  }
  function o$() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var r = oZ(function () {
      if (typeof window == "object" && oN(window)) {
        return window;
      }
    }());
    if (r) {
      r.errors ||= [];
      r.errors.push(e);
    }
  }
  var o0 = "custom";
  function o1(e) {
    if (e && oN(e) && e.name && oB(e.name)) {
      var t = {
        name: e.name,
        type: "event"
      };
      if ("metrics" in e && oN(e.metrics)) {
        var r = e.metrics;
        var n = {};
        for (var o in r) {
          if (oU(r[o])) {
            n[o] = r[o];
          }
        }
        t.metrics = n;
      }
      if ("categories" in e && oN(e.categories)) {
        var i = e.categories;
        var a = {};
        for (var o in i) {
          a[o] = oV(i[o]);
        }
        t.categories = a;
      }
      return t;
    }
  }
  function o2(e) {
    if (e && oN(e) && e.content && oB(e.content)) {
      var t = {
        content: oV(e.content),
        type: "log",
        level: "info"
      };
      if ("level" in e) {
        t.level = e.level;
      }
      if ("extra" in e && oN(e.extra)) {
        var r = e.extra;
        var n = {};
        var o = {};
        for (var i in r) {
          if (oU(r[i])) {
            n[i] = r[i];
          } else {
            o[i] = oV(r[i]);
          }
        }
        t.metrics = n;
        t.categories = o;
      }
      return t;
    }
  }
  function o6(e) {
    e.provide("sendEvent", function (t) {
      var r = o1(t);
      if (r) {
        e.report({
          ev_type: o0,
          payload: r,
          extra: {
            timestamp: Date.now()
          }
        });
      }
    });
    e.provide("sendLog", function (t) {
      var r = o2(t);
      if (r) {
        e.report({
          ev_type: o0,
          payload: r,
          extra: {
            timestamp: Date.now()
          }
        });
      }
    });
  }
  function o3(e, t) {
    var r = e.common || {};
    r.sample_rate = t;
    e.common = r;
    return e;
  }
  function o5(e, t, r, n, o) {
    var i;
    if (e) {
      i = o(n, t);
      return function () {
        return i;
      };
    } else {
      return function () {
        return r(t);
      };
    }
  }
  function o8(e, t, r) {
    switch (r) {
      case "eq":
        return oH(t, e);
      case "neq":
        return !oH(t, e);
      case "gt":
        return e > t[0];
      case "gte":
        return e >= t[0];
      case "lt":
        return e < t[0];
      case "lte":
        return e <= t[0];
      case "regex":
        return !!e.match(new RegExp(t.join("|")));
      case "not_regex":
        return !e.match(new RegExp(t.join("|")));
      default:
        return false;
    }
  }
  function o4(e, t, r, n) {
    var o = oF(e, t, function (e, t) {
      return e[t];
    });
    if (o === undefined) {
      return false;
    }
    var i = typeof o == "boolean" ? "bool" : oU(o) ? "number" : "string";
    return o8(o, n.map(function (e) {
      switch (i) {
        case "number":
          return Number(e);
        case "boolean":
          return e === "1";
        default:
          return String(e);
      }
    }), r);
  }
  function o9(e, t) {
    try {
      if (t.type === "rule") {
        return o4(e, t.field, t.op, t.values);
      } else if (t.type === "and") {
        return t.children.every(function (t) {
          return o9(e, t);
        });
      } else {
        return t.children.some(function (t) {
          return o9(e, t);
        });
      }
    } catch (e) {
      o$(e);
      return false;
    }
  }
  function o7(e, t, r, n, o, i) {
    var a = {};
    Object.keys(e).forEach(function (s) {
      var u = e[s];
      var c = u.enable;
      var f = u.sample_rate;
      var d = u.conditional_sample_rules;
      if (c) {
        a[s] = {
          enable: c,
          sample_rate: f,
          effectiveSampleRate: f * r,
          hit: o5(t, f, n, o, i)
        };
        if (d) {
          a[s].conditional_hit_rules = d.map(function (e) {
            var a = e.sample_rate;
            var s = e.filter;
            return {
              sample_rate: a,
              hit: o5(t, a, n, o, i),
              effectiveSampleRate: a * r,
              filter: s
            };
          });
        }
      } else {
        a[s] = {
          enable: c,
          hit: function () {
            return false;
          },
          sample_rate: 0,
          effectiveSampleRate: 0
        };
      }
    });
    return a;
  }
  function ie(e, t, r, n) {
    if (!t) {
      return oD;
    }
    var o = t.sample_rate;
    var i = t.include_users;
    var a = t.sample_granularity;
    var s = t.rules;
    var u = t.r;
    var c = u === undefined ? Math.random() : u;
    if (oH(i, e)) {
      return function (e) {
        return o3(e, 1);
      };
    }
    var f = a === "session";
    var d = o5(f, o, r, c, n);
    var l = o7(s, f, o, r, c, n);
    return function (e) {
      if (!d()) {
        return false;
      }
      if (!(e.ev_type in l)) {
        return o3(e, o);
      }
      if (!l[e.ev_type].enable) {
        return false;
      }
      if (e.common?.sample_rate) {
        return e;
      }
      var r = l[e.ev_type];
      var n = r.conditional_hit_rules;
      if (n) {
        for (var i = 0; i < n.length; i++) {
          if (o9(e, n[i].filter)) {
            if (n[i].hit()) {
              return o3(e, n[i].effectiveSampleRate);
            }
            return false;
          }
        }
      }
      return !!r.hit() && o3(e, r.effectiveSampleRate);
    };
  }
  function it(e) {
    e.on("start", function () {
      var t = e.config();
      var r = ie(t.userId, t.sample, oY, oJ);
      e.on("build", r);
    });
  }
  var ir = {
    build: function (e) {
      return {
        ev_type: e.ev_type,
        payload: e.payload,
        common: oR(oR({}, e.extra || {}), e.overrides || {})
      };
    }
  };
  function io(e) {
    var t;
    var r = e;
    var n = {};
    var o = ok;
    var i = ok;
    return {
      getConfig: function () {
        return r;
      },
      setConfig: function (a) {
        var s;
        n = oR(oR({}, n), a || {});
        (s = oR(oR({}, e), n)).sample = function (e, t) {
          if (!e || !t) {
            return e || t;
          }
          var r = oR(oR({}, e), t);
          r.include_users = oL(oL([], oj(e.include_users || []), false), oj(t.include_users || []), false);
          r.rules = oL(oL([], oj(Object.keys(e.rules || {})), false), oj(Object.keys(t.rules || {})), false).reduce(function (r, n) {
            if (!(n in r)) {
              if (n in (e.rules || {}) && n in (t.rules || {})) {
                r[n] = oR(oR({}, e.rules[n]), t.rules[n]);
                r[n].conditional_sample_rules = oL(oL([], oj(e.rules[n].conditional_sample_rules || []), false), oj(t.rules[n].conditional_sample_rules || []), false);
              } else {
                r[n] = e.rules?.[n] || t.rules?.[n];
              }
            }
            return r;
          }, {});
          return r;
        }(e.sample, n.sample);
        r = s;
        i();
        if (!t) {
          t = a;
          o();
        }
        return r;
      },
      onChange: function (e) {
        i = e;
      },
      onReady: function (e) {
        o = e;
        if (t) {
          o();
        }
      }
    };
  }
  var ii = {
    sample_rate: 1,
    include_users: [],
    sample_granularity: "session",
    rules: {}
  };
  function ia(e) {
    return oR({}, e);
  }
  function is(e) {
    return oN(e) && "bid" in e && "transport" in e;
  }
  function iu(e) {
    return oR({}, e);
  }
  function ic(e, t) {
    var r = {
      url: "",
      protocol: "",
      domain: "",
      path: "",
      query: "",
      timestamp: Date.now(),
      sdk_version: t.version || "1.0.2",
      sdk_name: t.name || "SDK_BASE"
    };
    return oR(oR({}, e), {
      extra: oR(oR({}, r), e.extra || {})
    });
  }
  function id(e) {
    e.on("report", function (t) {
      return ic(t, e.config());
    });
  }
  function il(e, t) {
    var r = {
      bid: t.bid,
      pid: t.pid,
      view_id: t.viewId,
      user_id: t.userId,
      device_id: t.deviceId,
      session_id: t.sessionId,
      release: t.release,
      env: t.env
    };
    return oR(oR({}, e), {
      extra: oR(oR({}, r), e.extra || {})
    });
  }
  function ip(e) {
    e.on("beforeBuild", function (t) {
      return il(t, e.config());
    });
  }
  function iv(e) {
    return {
      bid: "",
      pid: "",
      viewId: "__" + Date.now(),
      userId: oQ(),
      deviceId: oQ(),
      sessionId: oQ(),
      domain: "mon-va.byteoversea.com",
      release: "",
      env: "production",
      sample: ii,
      plugins: {},
      transport: {
        get: ok,
        post: ok
      }
    };
  }
  function ih(e) {
    var t = e === undefined ? {} : e;
    var r = t.createSender;
    var n = r === undefined ? function (e) {
      var t;
      var r;
      return function (e) {
        var t = e.transport;
        var r = e.endpoint;
        var n = e.size;
        var o = n === undefined ? 10 : n;
        var i = e.wait;
        var a = i === undefined ? 1000 : i;
        var s = [];
        var u = 0;
        function c() {
          if (s.length) {
            t.post({
              url: r,
              data: this.getBatchData()
            });
            s = [];
          }
        }
        return {
          getSize: function () {
            return o;
          },
          getWait: function () {
            return a;
          },
          setSize: function (e) {
            o = e;
          },
          setWait: function (e) {
            a = e;
          },
          getEndpoint: function () {
            return r;
          },
          setEndpoint: function (e) {
            r = e;
          },
          send: function (e) {
            s.push(e);
            if (s.length >= o) {
              c.call(this);
            }
            clearTimeout(u);
            u = setTimeout(c.bind(this), a);
          },
          flush: function () {
            clearTimeout(u);
            c.call(this);
          },
          getBatchData: function () {
            if (s.length) {
              return JSON.stringify({
                ev_type: "batch",
                list: s
              });
            } else {
              return "";
            }
          },
          clear: function () {
            clearTimeout(u);
            s = [];
          }
        };
      }({
        size: 20,
        endpoint: (t = e.domain, r === undefined && (r = "/monitor_browser/collect/batch/"), (t && t.indexOf("//") >= 0 ? "" : "https://") + t + r),
        transport: e.transport
      });
    } : r;
    var o = t.builder;
    var i = t.createDefaultConfig;
    var a = function (e) {
      var t;
      var r;
      var n = e.builder;
      var o = e.createSender;
      var i = e.createDefaultConfig;
      var a = e.createConfigManager;
      var s = e.userConfigNormalizer;
      var u = e.initConfigNormalizer;
      var c = e.validateInitConfig;
      var f = {};
      oA.forEach(function (e) {
        return f[e] = [];
      });
      var d = false;
      var l = false;
      var p = [];
      var v = [];
      var h = {
        getBuilder: function () {
          return n;
        },
        getSender: function () {
          return t;
        },
        getPreStartQueue: function () {
          return p;
        },
        init: function (e) {
          if (d) {
            oz("already inited");
            return;
          }
          if (e && oN(e) && c(e)) {
            var n = i(e);
            if (!n) {
              throw Error("defaultConfig missing");
            }
            var s = u(e);
            (r = a(n)).setConfig(s);
            r.onChange(function () {
              m("config");
            });
            if (!(t = o(r.getConfig()))) {
              throw Error("sender missing");
            }
            d = true;
            m("init", true);
          } else {
            throw Error("invalid InitConfig, init failed");
          }
        },
        set: function (e) {
          if (d && e && oN(e)) {
            m("beforeConfig", false, e);
            if (r != null) {
              r.setConfig(e);
            }
          }
        },
        config: function (e) {
          if (d) {
            if (e && oN(e)) {
              m("beforeConfig", false, e);
              if (r != null) {
                r.setConfig(s(e));
              }
            }
            if (r == null) {
              return undefined;
            } else {
              return r.getConfig();
            }
          }
        },
        provide: function (e, t) {
          if (oH(v, e)) {
            oz("cannot provide " + e + ", reserved");
            return;
          }
          h[e] = t;
          m("provide", false, e);
        },
        start: function () {
          var e = this;
          if (d && !l) {
            if (r != null) {
              r.onReady(function () {
                l = true;
                m("start", true);
                p.forEach(function (t) {
                  return e.build(t);
                });
                p = [];
              });
            }
          }
        },
        report: function (e) {
          if (e) {
            var t = oK(f.report)(e);
            if (t) {
              if (l) {
                this.build(t);
              } else {
                p.push(t);
              }
            }
          }
        },
        build: function (e) {
          if (!l) {
            return;
          }
          var t = oK(f.beforeBuild)(e);
          if (t) {
            var r = n.build(t);
            if (r) {
              var o = oK(f.build)(r);
              if (o) {
                this.send(o);
              }
            }
          }
        },
        send: function (e) {
          if (l) {
            var r = oK(f.beforeSend)(e);
            if (r) {
              t.send(r);
              m("send", false, r);
            }
          }
        },
        destroy: function () {
          m("beforeDestroy", true);
        },
        on: function (e, t) {
          if (e === "init" && d) {
            t();
          } else if (e === "start" && l) {
            t();
          } else if (f[e]) {
            f[e].push(t);
          }
        },
        off: function (e, t) {
          f[e] &&= oG(f[e], t);
        }
      };
      v = Object.keys(h);
      return h;
      function m(e, t = false) {
        var r = [];
        var n = 2;
        for (; n < arguments.length; n++) {
          r[n - 2] = arguments[n];
        }
        f[e].forEach(function (e) {
          try {
            e.apply(undefined, oL([], oj(r), false));
          } catch (e) {}
        });
        if (t) {
          f[e].length = 0;
        }
      }
    }({
      validateInitConfig: is,
      initConfigNormalizer: ia,
      userConfigNormalizer: iu,
      createSender: n,
      builder: o === undefined ? ir : o,
      createDefaultConfig: i === undefined ? iv : i,
      createConfigManager: io
    });
    oX(a);
    ip(a);
    id(a);
    (function (e) {
      e.on("init", function () {
        var t = [];
        var r = e.config();
        if (r && r.integrations) {
          r.integrations.forEach(function (r) {
            if (!oH(t, r.name)) {
              t.push(r.name);
              r.setup(e);
              if (r.tearDown) {
                e.on("beforeDestroy", r.tearDown);
              }
            }
          });
        }
      });
    })(a);
    return a;
  }
  function im(e = {}) {
    var t = ih(e);
    it(t);
    o6(t);
    return t;
  }
  im();
  var i_ = {
    in: "https://sgali-mcs.byteoversea.com",
    sg: "https://sgali-mcs.byteoversea.com",
    va: "https://maliva-mcs.byteoversea.com",
    tcpy: "https://mcs-sg.tiktok.com",
    ttp: "https://mcs.us.tiktok.com"
  };
  var iy = "s_v_web_id";
  var ig = "/vc/setting";
  function ib(e) {
    var t = Object.keys(e);
    var r = "";
    var n = 0;
    for (; n < t.length; n++) {
      var o = t[n];
      var i = e[o];
      var a = encodeURIComponent(o) + "=" + encodeURIComponent(i);
      r = n >= 1 ? r + "&" + a : a;
    }
    return r;
  }
  function iw(e) {
    return {
      aid: e.commonOptions.aid
    };
  }
  var iE = new (function () {
    function e() {
      this.isInit = false;
      this.pid = "0";
      this.filename = "";
    }
    e.prototype.init = function (e, t) {
      if (!this.isInit) {
        this.isInit = true;
        this.pid = String(e.aid);
        this.browserSlardar = im();
        var r = {
          transport: {
            get: function () {},
            post: function (e) {
              t(e.url, JSON.parse(e.data));
            }
          },
          bid: "verify_center_va",
          pid: this.pid,
          release: "3.8.6",
          env: "va",
          sample: {
            sample_rate: 1,
            include_users: [],
            sample_granularity: "session",
            rules: {
              pageview: {
                enable: true,
                sample_rate: 0.01
              },
              js_error: {
                enable: true,
                sample_rate: 1
              },
              resource_error: {
                enable: true,
                sample_rate: 0.01
              },
              http: {
                enable: true,
                sample_rate: 0.01
              },
              resource: {
                enable: true,
                sample_rate: 0.01
              }
            }
          }
        };
        this.browserSlardar.init(r);
        this.browserSlardar.context.merge({
          belong: "hotsdk"
        });
      }
    };
    e.prototype.start = function () {
      var e = this;
      this.browserSlardar.start();
      this.reportPageview();
      window.addEventListener("error", function (t) {
        if (Object.prototype.toString.call(t).slice(8, -1) === "ErrorEvent" && e.filename && t.filename === e.filename) {
          e.reportJsError({
            message: t == null ? undefined : t.message,
            stack: (t == null ? undefined : t.error)?.stack,
            filename: t == null ? undefined : t.filename
          });
        }
      }, true);
    };
    e.prototype.destroy = function () {
      this.browserSlardar.destroy();
    };
    e.prototype.reportPageview = function () {
      this.browserSlardar.report({
        ev_type: "pageview",
        payload: {
          pid: this.pid,
          source: "init"
        }
      });
    };
    e.prototype.reportJsError = function (e) {
      this.browserSlardar.report({
        ev_type: "js_error",
        payload: {
          error: {
            name: "JS ERROR",
            message: e.message,
            stack: e.stack,
            filename: e.filename || this.filename
          },
          breadcrumbs: []
        }
      });
    };
    e.prototype.reportHttp = function (e) {
      this.browserSlardar.report({
        ev_type: "http",
        payload: {
          api: "xhr",
          request: {
            method: e.method,
            url: e.url
          },
          response: {
            status: e.status,
            is_custom_error: false,
            timestamp: Date.now()
          },
          duration: e.duration
        }
      });
    };
    e.prototype.reportResourceError = function (e) {
      this.browserSlardar.report({
        ev_type: "resource_error",
        payload: {
          type: "script",
          url: e
        }
      });
    };
    e.prototype.reportResource = function (e) {
      this.browserSlardar.report({
        ev_type: "resource",
        payload: {
          entryType: "resource",
          name: e.url,
          duration: e.duration,
          startTime: e.startTime
        }
      });
    };
    e.prototype.setFileName = function (e) {
      this.filename = e;
    };
    return e;
  }())();
  function iO(e) {
    var t = e.url;
    var r = e.method;
    var n = e.data;
    var o = e.config;
    return new oS(function (i, a) {
      var s = new XMLHttpRequest();
      var u = Date.now();
      function c() {
        if (e.url.indexOf(ig) !== -1) {
          iE.reportHttp({
            url: t,
            method: r,
            duration: Date.now() - u,
            status: s.status
          });
        }
      }
      s.onreadystatechange = function () {
        if (s.readyState === s.DONE) {
          if (s.status >= 200 && s.status < 300) {
            var e = {};
            var t = s.response || s.responseText;
            var r = s.getResponseHeader("Content-Type") || s.getResponseHeader("content-type");
            if (r && r.indexOf("application/json") !== -1) {
              try {
                e = JSON.parse(t);
              } catch (e) {}
            } else {
              e = t;
            }
            setTimeout(function () {
              i(e);
            }, 0);
          } else {
            a(TypeError("Network request failed, status: " + s.status));
          }
          c();
        }
      };
      s.onerror = function () {
        setTimeout(function () {
          a(TypeError("Network request failed, occur error"));
        }, 0);
        c();
      };
      s.ontimeout = function () {
        setTimeout(function () {
          a(TypeError("Network request failed, timeout"));
        }, 0);
        c();
      };
      s.onabort = function () {
        setTimeout(function () {
          a(new DOMException("Aborted", "AbortError"));
        }, 0);
        c();
      };
      var f = t;
      if (o == null ? undefined : o.params) {
        f = f + "?" + ib(o.params);
      }
      s.open(r, f, true);
      if ((o == null ? undefined : o.timeout) && typeof o.timeout == "number") {
        s.timeout = o.timeout;
      } else {
        s.timeout = 5000;
      }
      if (o == null ? undefined : o.headers) {
        var d = o.headers;
        var l = 0;
        var p = Object.keys(d);
        for (; l < p.length; l++) {
          var v = p[l];
          s.setRequestHeader(v, d[v]);
        }
      }
      if (o == null ? undefined : o.withCredentials) {
        s.withCredentials = o.withCredentials;
      }
      if (r.toUpperCase() === "POST" && n) {
        s.send(JSON.stringify(n));
      } else {
        s.send(null);
      }
    });
  }
  function iS(e, t, r = {}) {
    var n = r.headers ? P({
      "Content-Type": "application/json"
    }, r.headers) : {
      "Content-Type": "application/json"
    };
    return iO({
      url: e,
      method: "POST",
      data: t,
      config: P(P({}, r), {
        headers: n
      })
    });
  }
  function iT(e) {
    var t = {
      exports: {}
    };
    var r = Function("exports", "module", e);
    try {
      r(t.exports, t);
    } catch (e) {
      iE.reportJsError({
        message: e == null ? undefined : e.message,
        stack: e == null ? undefined : e.stack,
        filename: e == null ? undefined : e.filename
      });
    }
    return t;
  }
  var iC = j(function (e, t) {
    var r;
    r = function () {
      function e() {
        var e = 0;
        var t = {};
        for (; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) {
            t[n] = r[n];
          }
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function r(n) {
        function o() {}
        function i(t, r, i) {
          if (typeof document != "undefined") {
            if (typeof (i = e({
              path: "/"
            }, o.defaults, i)).expires == "number") {
              i.expires = new Date(new Date() * 1 + i.expires * 86400000);
            }
            i.expires = i.expires ? i.expires.toUTCString() : "";
            try {
              var a = JSON.stringify(r);
              if (/^[\{\[]/.test(a)) {
                r = a;
              }
            } catch (e) {}
            r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var s = "";
            for (var u in i) {
              if (i[u]) {
                s += "; " + u;
                if (i[u] !== true) {
                  s += "=" + i[u].split(";")[0];
                }
              }
            }
            return document.cookie = t + "=" + r + s;
          }
        }
        function a(e, r) {
          if (typeof document != "undefined") {
            var o = {};
            var i = document.cookie ? document.cookie.split("; ") : [];
            var a = 0;
            for (; a < i.length; a++) {
              var s = i[a].split("=");
              var u = s.slice(1).join("=");
              if (!r && u.charAt(0) === "\"") {
                u = u.slice(1, -1);
              }
              try {
                var c = t(s[0]);
                u = (n.read || n)(u, c) || t(u);
                if (r) {
                  try {
                    u = JSON.parse(u);
                  } catch (e) {}
                }
                o[c] = u;
                if (e === c) {
                  break;
                }
              } catch (e) {}
            }
            if (e) {
              return o[e];
            } else {
              return o;
            }
          }
        }
        o.set = i;
        o.get = function (e) {
          return a(e, false);
        };
        o.getJSON = function (e) {
          return a(e, true);
        };
        o.remove = function (t, r) {
          i(t, "", e(r, {
            expires: -1
          }));
        };
        o.defaults = {};
        o.withConverter = r;
        return o;
      }(function () {});
    };
    e.exports = r();
  });
  function ix(e = {}) {
    var t;
    var r;
    var n;
    var o = iC.get(iy);
    if (!o || o.indexOf("verify_") !== 0) {
      t = typeof (t = e) == "object" ? t : {};
      r = function () {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var t = e.length;
        var r = Date.now().toString(36);
        var n = [];
        n[8] = n[13] = n[18] = n[23] = "_";
        n[14] = "4";
        var o = 0;
        var i = undefined;
        for (; o < 36; o++) {
          if (!n[o]) {
            i = Math.random() * t | 0;
            n[o] = e[o == 19 ? i & 3 | 8 : i];
          }
        }
        return "verify_" + r + "_" + n.join("");
      }();
      n = {
        path: "/"
      };
      if (t.domain && /^([a-z0-9-]+)?(\.[a-z0-9-]+)+$/.test(t.domain)) {
        n.domain = t.domain;
      }
      iC.set(iy, r, n);
      o = r;
    }
    return o;
  }
  function iI(e) {
    return iS("" + (e || "https://vcs-va.byteoversea.com") + ig, {}, {
      headers: {
        "X-Setting-Flag": 1
      }
    });
  }
  var iP = new (function () {
    function e() {
      this.fetchWebId = null;
      this.channelType = "";
      this.isInit = false;
      this.conf = {
        app_id: 0,
        evtParams: {}
      };
    }
    e.prototype.init = function (e, t = {}) {
      if (!this.isInit) {
        this.isInit = true;
        this.conf.app_id = e.region === "cn" ? 2018 : 2740;
        this.conf.evtParams = P(P({}, t), {
          webdriver: "undefined",
          isScheduling: "false",
          product_host: window.location.host,
          product_path: window.location.hostname,
          type: 2,
          aid: e.aid
        });
        if (e.aid === 1180 || e.aid === 1233) {
          this.channelType = "tcpy";
        } else {
          this.channelType = "va";
        }
      }
    };
    e.prototype.getTeaWebId = function () {
      if (!this.fetchWebId) {
        var e;
        var t;
        this.fetchWebId = (e = this.conf.app_id, iS("" + i_[t = this.channelType] + (["ttp", "tcpy"].indexOf(t) !== -1 ? "/v1/user/webid" : "/webid"), {
          app_id: e,
          referer: document.referrer,
          url: window.location.href,
          user_agent: window.navigator.userAgent,
          user_unique_id: ""
        }).then(function (e) {
          return e.web_id;
        }));
      }
      return this.fetchWebId;
    };
    e.prototype.trackEvent = function (e, t) {
      var r = this;
      if (t === undefined) {
        t = {};
      }
      this.getTeaWebId().then(function (n) {
        var o = [{
          events: [{
            event: "turing_verify_sdk",
            is_bav: 0,
            local_time_ms: Date.now(),
            params: JSON.stringify(P(P(P({}, r.conf.evtParams), t), {
              key: "h5_" + e,
              time: Date.now()
            }))
          }],
          local_time: Math.floor(Date.now() / 1000),
          header: {
            app_id: r.conf.app_id,
            referrer: document.referrer,
            platform: "web",
            sdk_lib: "js",
            sdk_version: "0.0.0"
          },
          user: {
            user_unique_id: n,
            web_id: n
          }
        }];
        r.sendEvents(o);
      }).catch(function (e) {});
    };
    e.prototype.sendEvents = function (e) {
      var t;
      iS("" + i_[t = this.channelType] + (["ttp", "tcpy"].indexOf(t) !== -1 ? "/v1/list" : "/list"), e).catch(function (e) {});
    };
    return e;
  }())();
  var iR = {
    verify: {
      back_up_js_v2: {
        va: ["https://lf-rc2.yhgfb-static.com/obj/rc-client-security-us/secsdk-captcha/@latest/captcha.js", "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/secsdk-captcha/@latest/captcha.js"]
      },
      js_v2: {
        va: "https://lf-rc1.yhgfb-static.com/obj/rc-client-security-us/secsdk-captcha/@latest/captcha.js"
      }
    }
  };
  var ij = {};
  var iL = {
    executor: "Function",
    static_domain: "",
    settingHost: ""
  };
  function iA() {
    var e = Date.now();
    return iI(iL.settingHost).catch(function () {
      return iI(iL.settingHost);
    }).then(function (t) {
      iP.trackEvent("hotsdk_getsetting", {
        is_success: 1,
        duration: Date.now() - e,
        message: ""
      });
      if ((t == null ? undefined : t.verify)?.js_v2?.va) {
        return t.verify;
      } else {
        return iR.verify;
      }
    }).catch(function (t) {
      iP.trackEvent("hotsdk_getsetting", {
        is_success: 0,
        duration: Date.now() - e,
        message: t == null ? undefined : t.message
      });
      return iR.verify;
    });
  }
  function ik(e, t, r, n) {
    iE.setFileName(e);
    var o = Date.now();
    var i = oS.resolve({});
    return (i = t === "script" ? new oS(function (t, r) {
      var n = document.getElementsByTagName("head")[0];
      var o = document.createElement("script");
      o.setAttribute("crossorigin", "anonymous");
      o.setAttribute("src", e);
      n.appendChild(o);
      var i = setTimeout(function () {
        r(Error("LoadJSSDKMoreTan4000ms"));
      }, 4000);
      o.onload = function () {
        clearTimeout(i);
        t(0);
      };
      o.onerror = function () {
        clearTimeout(i);
        r(Error("Failed to load SDK!"));
      };
    }).then(function () {
      return window.verifySDK;
    }) : iO({
      url: e,
      method: "GET",
      config: {
        timeout: 20000
      }
    }).then(function (e) {
      if (r && n && r !== n) {
        var t = RegExp(r, "g");
        e = e.replace(t, n);
      }
      return iT(e).exports;
    })).then(function (t) {
      iE.reportResource({
        url: e,
        startTime: Date.now(),
        duration: Date.now() - o
      });
      return t;
    }).catch(function (t) {
      iE.reportResourceError(e);
      return oS.reject(t);
    });
  }
  var iD = function () {
    function e() {}
    e.get = function () {
      if (e.status === 0 || e.status === 3) {
        e.status = 1;
        e.core = iA().then(function (t) {
          var i = t.js_v2?.va;
          var a = t.back_up_js_v2?.va || [];
          var s = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)?.[1];
          if (iL.static_domain && s) {
            i = i.replace(s, iL.static_domain);
          }
          var u = [i].concat(a);
          return new oS(function (t, r) {
            function n() {
              var i = u.shift();
              var a = i.match(/\/\/([\w-]+(\.[\w-]+)+)/)?.[1];
              ik(i, iL.executor, s, a).then(function (r) {
                t(r);
                e.status = 2;
                iP.trackEvent("hotsdk_loadscript", {
                  is_success: 1
                });
              }).catch(function (t) {
                if (u.length) {
                  n();
                } else {
                  r(t);
                  e.status = 3;
                  iP.trackEvent("hotsdk_loadscript", {
                    is_success: 0
                  });
                }
              });
            }
            n();
          });
        }).catch(function (e) {
          return oS.reject(e);
        });
      }
      return e.core;
    };
    e.status = 0;
    return e;
  }();
  function iN(e) {
    if (e.static_domain) {
      iL.static_domain = e.static_domain;
    }
    if (e.settingHost) {
      iL.settingHost = e.settingHost;
    }
    if (e.executor) {
      iL.executor = e.executor;
    }
  }
  var iM = function () {
    function e() {}
    e.config = function (e) {
      iN(e);
    };
    e.init = function (e, t, r) {
      var n = iw(e);
      iP.init(P(P({}, n), {
        region: "va"
      }));
      iE.init(n, iS);
      iE.start();
      return iD.get().then(function (r) {
        Object.assign(ij, P(P({}, e), {
          captchaOptions: P(P({}, e.captchaOptions), {
            h5_check_version: e.captchaOptions?.closeDecisionCheck ? "0.0.0" : "3.8.6"
          })
        }));
        var o = r.initVerifyCenter(ij);
        if (!t) {
          return o;
        }
        t(o);
      }).catch(function (e) {
        if (!r) {
          return oS.reject(e);
        }
        r(e);
      });
    };
    return e;
  }();
  exports.TTVerifyCenter = iM;
  exports.close = function () {
    iD.get().then(function (e) {
      if (e != null) {
        e.closeCaptcha();
      }
    });
  };
  exports.config = iN;
  exports.getFp = function () {
    var e;
    var n = (ij == null ? undefined : ij.captchaOptions)?.fp || iC.get(iy) || ((e = (ij == null ? undefined : ij.captchaOptions)?.fpCookieOption) === undefined && (e = {}), ix(e));
    return oS.resolve(n);
  };
  exports.init = function (e, t = function () {}, r = function () {}) {
    var n = iw(e);
    iP.init(P(P({}, n), {
      region: "va"
    }));
    iE.init(n, iS);
    iE.start();
    iD.get().then(function (r) {
      Object.assign(ij, P(P({}, e), {
        captchaOptions: P(P({}, e.captchaOptions), {
          h5_check_version: e.captchaOptions?.closeDecisionCheck ? "0.0.0" : "3.8.6"
        })
      }));
      if (r != null) {
        r.initVerifyOptions(ij);
      }
      t(r);
    }).catch(function (e) {
      r({
        type: "loadJSSDK",
        msg: (e == null ? undefined : e.message) ?? ""
      });
    });
  };
  exports.render = function (e) {
    iD.get().then(function (t) {
      if (t != null) {
        t.autoRender(e);
      }
    }).catch(function (e) {});
  };
  exports.transform = function (e) {
    var t = {
      code: "10000",
      from: "",
      type: "verify",
      version: "1",
      region: "va",
      subtype: "",
      verify_event: "",
      fp: "",
      detail: ""
    };
    if (e === 3059) {
      t.subtype = "text";
    } else if (e === 3060) {
      t.subtype = "3d";
    } else if (e === 99996) {
      t.subtype = "whirl";
    } else {
      t.subtype = "slide";
    }
    return JSON.stringify(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}