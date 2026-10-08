// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sec_sdk_build.f7aeb6d4.js
         * chunkId: 48606
         * moduleId: 932273
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var s;
  var u;
  var c;
  var f;
  var l;
  var h;
  var p;
  var d;
  var v;
  var g;
  var m;
  var y;
  var b;
  var w;
  var _;
  var S;
  var O;
  var E;
  var j;
  var R;
  var x;
  var L;
  var P;
  var C;
  var k;
  function T() {
    return (T = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function A(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  if (typeof SuppressedError == "function") {
    SuppressedError;
  }
  var I = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : require.g !== undefined ? require.g : typeof self != "undefined" ? self : {};
  function D(t, e, n) {
    t(n = {
      path: e,
      exports: {},
      require: function (t, e) {
        return function () {
          throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t, e == null ? n.path : e);
      }
    }, n.exports);
    return n.exports;
  }
  function U(t) {
    return t && t.Math == Math && t;
  }
  var N = U(typeof globalThis == "object" && globalThis) || U(typeof window == "object" && window) || U(typeof self == "object" && self) || U(typeof I == "object" && I) || function () {
    return this;
  }() || Function("return this")();
  var H = Function.prototype;
  var M = H.apply;
  var q = H.bind;
  var B = H.call;
  var F = typeof Reflect == "object" && Reflect.apply || (q ? B.bind(M) : function () {
    return B.apply(M, arguments);
  });
  var z = Function.prototype;
  var G = z.bind;
  var K = z.call;
  var J = G && G.bind(K);
  var V = G ? function (t) {
    return t && J(K, t);
  } : function (t) {
    return t && function () {
      return K.apply(t, arguments);
    };
  };
  function W(t) {
    return typeof t == "function";
  }
  function X(t) {
    try {
      return !!t();
    } catch (t) {
      return true;
    }
  }
  var Y = !X(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
  var Q = Function.prototype.call;
  var $ = Q.bind ? Q.bind(Q) : function () {
    return Q.apply(Q, arguments);
  };
  var Z = {}.propertyIsEnumerable;
  var tt = Object.getOwnPropertyDescriptor;
  var te = {
    f: tt && !Z.call({
      1: 2
    }, 1) ? function (t) {
      var e = tt(this, t);
      return !!e && e.enumerable;
    } : Z
  };
  function tn(t, e) {
    return {
      enumerable: !(t & 1),
      configurable: !(t & 2),
      writable: !(t & 4),
      value: e
    };
  }
  var tr = V({}.toString);
  var ti = V("".slice);
  function to(t) {
    return ti(tr(t), 8, -1);
  }
  var ta = N.Object;
  var ts = V("".split);
  var tu = X(function () {
    return !ta("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (to(t) == "String") {
      return ts(t, "");
    } else {
      return ta(t);
    }
  } : ta;
  var tc = N.TypeError;
  function tf(t) {
    if (t == undefined) {
      throw tc("Can't call method on " + t);
    }
    return t;
  }
  function tl(t) {
    return tu(tf(t));
  }
  function th(t) {
    if (typeof t == "object") {
      return t !== null;
    } else {
      return W(t);
    }
  }
  var tp = {};
  function td(t) {
    if (W(t)) {
      return t;
    } else {
      return undefined;
    }
  }
  function tv(t, e) {
    if (arguments.length < 2) {
      return td(tp[t]) || td(N[t]);
    } else {
      return tp[t] && tp[t][e] || N[t] && N[t][e];
    }
  }
  var tg = V({}.isPrototypeOf);
  var tm = tv("navigator", "userAgent") || "";
  var ty = N.process;
  var tb = N.Deno;
  var tw = ty && ty.versions || tb && tb.version;
  var t_ = tw && tw.v8;
  if (t_) {
    a = (o = t_.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1]);
  }
  if (!a && tm && (!(o = tm.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = tm.match(/Chrome\/(\d+)/))) {
    a = +o[1];
  }
  var tS = a;
  var tO = !!Object.getOwnPropertySymbols && !X(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && tS && tS < 41;
  });
  var tE = tO && !Symbol.sham && typeof Symbol.iterator == "symbol";
  var tj = N.Object;
  var tR = tE ? function (t) {
    return typeof t == "symbol";
  } : function (t) {
    var e = tv("Symbol");
    return W(e) && tg(e.prototype, tj(t));
  };
  var tx = N.String;
  function tL(t) {
    try {
      return tx(t);
    } catch (t) {
      return "Object";
    }
  }
  var tP = N.TypeError;
  function tC(t) {
    if (W(t)) {
      return t;
    }
    throw tP(tL(t) + " is not a function");
  }
  function tk(t, e) {
    var n = t[e];
    if (n == null) {
      return undefined;
    } else {
      return tC(n);
    }
  }
  var tT = N.TypeError;
  function tA(t, e) {
    var n;
    var r;
    if (e === "string" && W(n = t.toString) && !th(r = $(n, t)) || W(n = t.valueOf) && !th(r = $(n, t)) || e !== "string" && W(n = t.toString) && !th(r = $(n, t))) {
      return r;
    }
    throw tT("Can't convert object to primitive value");
  }
  var tI = Object.defineProperty;
  var tD = "__core-js_shared__";
  var tU = N[tD] || function (t, e) {
    try {
      tI(N, t, {
        value: e,
        configurable: true,
        writable: true
      });
    } catch (n) {
      N[t] = e;
    }
    return e;
  }(tD, {});
  var tN = D(function (t) {
    (t.exports = function (t, e) {
      return tU[t] ||= e !== undefined ? e : {};
    })("versions", []).push({
      version: "3.20.1",
      mode: "pure",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  });
  var tH = N.Object;
  function tM(t) {
    return tH(tf(t));
  }
  var tq = V({}.hasOwnProperty);
  var tB = Object.hasOwn || function (t, e) {
    return tq(tM(t), e);
  };
  var tF = 0;
  var tz = Math.random();
  var tG = V(1 .toString);
  function tK(t) {
    return "Symbol(" + (t === undefined ? "" : t) + ")_" + tG(++tF + tz, 36);
  }
  var tJ = tN("wks");
  var tV = N.Symbol;
  var tW = tV && tV.for;
  var tX = tE ? tV : tV && tV.withoutSetter || tK;
  function tY(t) {
    if (!tB(tJ, t) || !tO && typeof tJ[t] != "string") {
      var e = "Symbol." + t;
      if (tO && tB(tV, t)) {
        tJ[t] = tV[t];
      } else if (tE && tW) {
        tJ[t] = tW(e);
      } else {
        tJ[t] = tX(e);
      }
    }
    return tJ[t];
  }
  var tQ = N.TypeError;
  var t$ = tY("toPrimitive");
  function tZ(t, e) {
    if (!th(t) || tR(t)) {
      return t;
    }
    var n;
    var r = tk(t, t$);
    if (r) {
      if (e === undefined) {
        e = "default";
      }
      if (!th(n = $(r, t, e)) || tR(n)) {
        return n;
      }
      throw tQ("Can't convert object to primitive value");
    }
    if (e === undefined) {
      e = "number";
    }
    return tA(t, e);
  }
  function t0(t) {
    var e = tZ(t, "string");
    if (tR(e)) {
      return e;
    } else {
      return e + "";
    }
  }
  var t1 = N.document;
  var t2 = th(t1) && th(t1.createElement);
  function t3(t) {
    if (t2) {
      return t1.createElement(t);
    } else {
      return {};
    }
  }
  var t6 = !Y && !X(function () {
    return Object.defineProperty(t3("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var t5 = Object.getOwnPropertyDescriptor;
  var t4 = Y ? t5 : function (t, e) {
    t = tl(t);
    e = t0(e);
    if (t6) {
      try {
        return t5(t, e);
      } catch (t) {}
    }
    if (tB(t, e)) {
      return tn(!$(te.f, t, e), t[e]);
    }
  };
  var t7 = /#|\.prototype\./;
  function t8(t, e) {
    var n = et[t9(t)];
    return n == en || n != ee && (W(e) ? X(e) : !!e);
  }
  var t9 = t8.normalize = function (t) {
    return String(t).replace(t7, ".").toLowerCase();
  };
  var et = t8.data = {};
  var ee = t8.NATIVE = "N";
  var en = t8.POLYFILL = "P";
  var er = V(V.bind);
  function ei(t, e) {
    tC(t);
    if (e === undefined) {
      return t;
    } else if (er) {
      return er(t, e);
    } else {
      return function () {
        return t.apply(e, arguments);
      };
    }
  }
  var eo = N.String;
  var ea = N.TypeError;
  function es(t) {
    if (th(t)) {
      return t;
    }
    throw ea(eo(t) + " is not an object");
  }
  var eu = N.TypeError;
  var ec = Object.defineProperty;
  var ef = {
    f: Y ? ec : function (t, e, n) {
      es(t);
      e = t0(e);
      es(n);
      if (t6) {
        try {
          return ec(t, e, n);
        } catch (t) {}
      }
      if ("get" in n || "set" in n) {
        throw eu("Accessors not supported");
      }
      if ("value" in n) {
        t[e] = n.value;
      }
      return t;
    }
  };
  var el = Y ? function (t, e, n) {
    return ef.f(t, e, tn(1, n));
  } : function (t, e, n) {
    t[e] = n;
    return t;
  };
  function eh(t) {
    function e(n, r, i) {
      if (this instanceof e) {
        switch (arguments.length) {
          case 0:
            return new t();
          case 1:
            return new t(n);
          case 2:
            return new t(n, r);
        }
        return new t(n, r, i);
      }
      return F(t, this, arguments);
    }
    e.prototype = t.prototype;
    return e;
  }
  function ep(t, e) {
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u;
    var c;
    var f = t.target;
    var l = t.global;
    var h = t.stat;
    var p = t.proto;
    var d = l ? N : h ? N[f] : (N[f] || {}).prototype;
    var v = l ? tp : tp[f] || el(tp, f, {})[f];
    var g = v.prototype;
    for (i in e) {
      n = !t8(l ? i : f + (h ? "." : "#") + i, t.forced) && d && tB(d, i);
      a = v[i];
      if (n) {
        s = t.noTargetGet ? (c = t4(d, i)) && c.value : d[i];
      }
      o = n && s ? s : e[i];
      if (!n || typeof a != typeof o) {
        u = t.bind && n ? ei(o, N) : t.wrap && n ? eh(o) : p && W(o) ? V(o) : o;
        if (t.sham || o && o.sham || a && a.sham) {
          el(u, "sham", true);
        }
        el(v, i, u);
        if (p) {
          if (!tB(tp, r = f + "Prototype")) {
            el(tp, r, {});
          }
          el(tp[r], i, o);
          if (t.real && g && !g[i]) {
            el(g, i, o);
          }
        }
      }
    }
  }
  var ed = tN("keys");
  function ev(t) {
    return ed[t] ||= tK(t);
  }
  var eg = !X(function () {
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t()) !== t.prototype;
  });
  var em = ev("IE_PROTO");
  var ey = N.Object;
  var eb = ey.prototype;
  var ew = eg ? ey.getPrototypeOf : function (t) {
    var e = tM(t);
    if (tB(e, em)) {
      return e[em];
    }
    var n = e.constructor;
    if (W(n) && e instanceof n) {
      return n.prototype;
    } else if (e instanceof ey) {
      return eb;
    } else {
      return null;
    }
  };
  var e_ = N.String;
  var eS = N.TypeError;
  function eO(t) {
    if (typeof t == "object" || W(t)) {
      return t;
    }
    throw eS("Can't set " + e_(t) + " as a prototype");
  }
  var eE = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var e = false;
    var n = {};
    try {
      (t = V(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []);
      e = n instanceof Array;
    } catch (t) {}
    return function (n, r) {
      es(n);
      eO(r);
      if (e) {
        t(n, r);
      } else {
        n.__proto__ = r;
      }
      return n;
    };
  }() : undefined);
  var ej = Math.ceil;
  var eR = Math.floor;
  function ex(t) {
    var e = +t;
    if (e != e || e === 0) {
      return 0;
    } else {
      return (e > 0 ? eR : ej)(e);
    }
  }
  var eL = Math.max;
  var eP = Math.min;
  function eC(t, e) {
    var n = ex(t);
    if (n < 0) {
      return eL(n + e, 0);
    } else {
      return eP(n, e);
    }
  }
  var ek = Math.min;
  function eT(t) {
    var e;
    if ((e = t.length) > 0) {
      return ek(ex(e), 9007199254740991);
    } else {
      return 0;
    }
  }
  function eA(t) {
    return function (e, n, r) {
      var i;
      var o = tl(e);
      var a = eT(o);
      var s = eC(r, a);
      if (t && n != n) {
        while (a > s) {
          if ((i = o[s++]) != i) {
            return true;
          }
        }
      } else {
        for (; a > s; s++) {
          if ((t || s in o) && o[s] === n) {
            return t || s || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  var eI = {
    includes: eA(true),
    indexOf: eA(false)
  };
  var eD = {};
  var eU = eI.indexOf;
  var eN = V([].push);
  function eH(t, e) {
    var n;
    var r = tl(t);
    var i = 0;
    var o = [];
    for (n in r) {
      if (!tB(eD, n) && tB(r, n)) {
        eN(o, n);
      }
    }
    while (e.length > i) {
      if (tB(r, n = e[i++])) {
        if (!~eU(o, n)) {
          eN(o, n);
        }
      }
    }
    return o;
  }
  var eM = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  var eq = eM.concat("length", "prototype");
  var eB = {
    f: Object.getOwnPropertyNames || function (t) {
      return eH(t, eq);
    }
  };
  var eF = {
    f: Object.getOwnPropertySymbols
  };
  var ez = V([].concat);
  var eG = tv("Reflect", "ownKeys") || function (t) {
    var e = eB.f(es(t));
    var n = eF.f;
    if (n) {
      return ez(e, n(t));
    } else {
      return e;
    }
  };
  var eK = Object.keys || function (t) {
    return eH(t, eM);
  };
  var eJ = Y ? Object.defineProperties : function (t, e) {
    es(t);
    var n;
    var r = tl(e);
    var i = eK(e);
    var o = i.length;
    var a = 0;
    while (o > a) {
      ef.f(t, n = i[a++], r[n]);
    }
    return t;
  };
  var eV = tv("document", "documentElement");
  var eW = "prototype";
  var eX = "script";
  var eY = ev("IE_PROTO");
  function eQ() {}
  function e$(t) {
    return "<" + eX + ">" + t + "</" + eX + ">";
  }
  function eZ(t) {
    t.write(e$(""));
    t.close();
    var e = t.parentWindow.Object;
    t = null;
    return e;
  }
  function e0() {
    var t;
    var e = t3("iframe");
    e.style.display = "none";
    eV.appendChild(e);
    e.src = String("java" + eX + ":");
    (t = e.contentWindow.document).open();
    t.write(e$("document.F=Object"));
    t.close();
    return t.F;
  }
  function e1() {
    try {
      s = new ActiveXObject("htmlfile");
    } catch (t) {}
    e1 = typeof document != "undefined" ? document.domain && s ? eZ(s) : e0() : eZ(s);
    for (var t = eM.length; t--;) {
      delete e1[eW][eM[t]];
    }
    return e1();
  }
  eD[eY] = true;
  var e2 = Object.create || function (t, e) {
    var n;
    if (t !== null) {
      eQ[eW] = es(t);
      n = new eQ();
      eQ[eW] = null;
      n[eY] = t;
    } else {
      n = e1();
    }
    if (e === undefined) {
      return n;
    } else {
      return eJ(n, e);
    }
  };
  var e3 = V("".replace);
  var e6 = String(Error("zxcasd").stack);
  var e5 = /\n\s*at [^:]*:[^\n]*/;
  var e4 = e5.test(e6);
  function e7(t, e) {
    if (e4 && typeof t == "string") {
      while (e--) {
        t = e3(t, e5, "");
      }
    }
    return t;
  }
  function e8(t, e) {
    if (th(e) && "cause" in e) {
      el(t, "cause", e.cause);
    }
  }
  var e9 = {};
  var nt = tY("iterator");
  var ne = Array.prototype;
  function nn(t) {
    return t !== undefined && (e9.Array === t || ne[nt] === t);
  }
  var nr = tY("toStringTag");
  var ni = {
    [nr]: "z"
  };
  var no = String(ni) === "[object z]";
  var na = tY("toStringTag");
  var ns = N.Object;
  var nu = to(function () {
    return arguments;
  }()) == "Arguments";
  function nc(t, e) {
    try {
      return t[e];
    } catch (t) {}
  }
  var nf = no ? to : function (t) {
    var e;
    var n;
    var r;
    if (t === undefined) {
      return "Undefined";
    } else if (t === null) {
      return "Null";
    } else if (typeof (n = nc(e = ns(t), na)) == "string") {
      return n;
    } else if (nu) {
      return to(e);
    } else if ((r = to(e)) == "Object" && W(e.callee)) {
      return "Arguments";
    } else {
      return r;
    }
  };
  var nl = tY("iterator");
  function nh(t) {
    if (t != undefined) {
      return tk(t, nl) || tk(t, "@@iterator") || e9[nf(t)];
    }
  }
  var np = N.TypeError;
  function nd(t, e) {
    var n = arguments.length < 2 ? nh(t) : e;
    if (tC(n)) {
      return es($(n, t));
    }
    throw np(tL(t) + " is not iterable");
  }
  function nv(t, e, n) {
    var r;
    var i;
    es(t);
    try {
      if (!(r = tk(t, "return"))) {
        if (e === "throw") {
          throw n;
        }
        return n;
      }
      r = $(r, t);
    } catch (t) {
      i = true;
      r = t;
    }
    if (e === "throw") {
      throw n;
    }
    if (i) {
      throw r;
    }
    es(r);
    return n;
  }
  var ng = N.TypeError;
  function nm(t, e) {
    this.stopped = t;
    this.result = e;
  }
  var ny = nm.prototype;
  function nb(t, e, n) {
    var r;
    var i;
    var o;
    var a;
    var s;
    var u;
    var c;
    var f = n && n.that;
    var l = !!n && !!n.AS_ENTRIES;
    var h = !!n && !!n.IS_ITERATOR;
    var p = !!n && !!n.INTERRUPTED;
    var d = ei(e, f);
    function v(t) {
      if (r) {
        nv(r, "normal", t);
      }
      return new nm(true, t);
    }
    function g(t) {
      if (l) {
        es(t);
        if (p) {
          return d(t[0], t[1], v);
        } else {
          return d(t[0], t[1]);
        }
      } else if (p) {
        return d(t, v);
      } else {
        return d(t);
      }
    }
    if (h) {
      r = t;
    } else {
      if (!(i = nh(t))) {
        throw ng(tL(t) + " is not iterable");
      }
      if (nn(i)) {
        o = 0;
        a = eT(t);
        for (; a > o; o++) {
          if ((s = g(t[o])) && tg(ny, s)) {
            return s;
          }
        }
        return new nm(false);
      }
      r = nd(t, i);
    }
    for (u = r.next; !(c = $(u, r)).done;) {
      try {
        s = g(c.value);
      } catch (t) {
        nv(r, "throw", t);
      }
      if (typeof s == "object" && s && tg(ny, s)) {
        return s;
      }
    }
    return new nm(false);
  }
  var nw = N.String;
  function n_(t) {
    if (nf(t) === "Symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return nw(t);
  }
  var nS = !X(function () {
    var t = Error("a");
    return !("stack" in t) || (Object.defineProperty(t, "stack", tn(1, 7)), t.stack !== 7);
  });
  var nO = tY("toStringTag");
  var nE = N.Error;
  var nj = [].push;
  function nR(t, e) {
    var n;
    var r = arguments.length > 2 ? arguments[2] : undefined;
    var i = tg(nx, this);
    if (eE) {
      n = eE(new nE(), i ? ew(this) : nx);
    } else {
      el(n = i ? this : e2(nx), nO, "Error");
    }
    if (e !== undefined) {
      el(n, "message", function (t, e) {
        if (t === undefined) {
          if (arguments.length < 2) {
            return "";
          } else {
            return e;
          }
        } else {
          return n_(t);
        }
      }(e));
    }
    if (nS) {
      el(n, "stack", e7(n.stack, 1));
    }
    e8(n, r);
    var o = [];
    nb(t, nj, {
      that: o
    });
    el(n, "errors", o);
    return n;
  }
  if (eE) {
    eE(nR, nE);
  } else {
    (function (t, e, n) {
      var r = eG(e);
      var i = ef.f;
      var o = 0;
      for (; o < r.length; o++) {
        var a = r[o];
        if (!tB(t, a) && (!n || !tB(n, a))) {
          i(t, a, t4(e, a));
        }
      }
    })(nR, nE, {
      name: true
    });
  }
  var nx = nR.prototype = e2(nE.prototype, {
    constructor: tn(1, nR),
    message: tn(1, ""),
    name: tn(1, "AggregateError")
  });
  ep({
    global: true
  }, {
    AggregateError: nR
  });
  var nL = V(Function.toString);
  if (!W(tU.inspectSource)) {
    tU.inspectSource = function (t) {
      return nL(t);
    };
  }
  var nP = tU.inspectSource;
  var nC = N.WeakMap;
  var nk = W(nC) && /native code/.test(nP(nC));
  var nT = "Object already initialized";
  var nA = N.TypeError;
  var nI = N.WeakMap;
  if (nk || tU.state) {
    var nD = tU.state ||= new nI();
    var nU = V(nD.get);
    var nN = V(nD.has);
    var nH = V(nD.set);
    u = function (t, e) {
      if (nN(nD, t)) {
        throw new nA(nT);
      }
      e.facade = t;
      nH(nD, t, e);
      return e;
    };
    c = function (t) {
      return nU(nD, t) || {};
    };
  } else {
    var nM = ev("state");
    eD[nM] = true;
    u = function (t, e) {
      if (tB(t, nM)) {
        throw new nA(nT);
      }
      e.facade = t;
      el(t, nM, e);
      return e;
    };
    c = function (t) {
      if (tB(t, nM)) {
        return t[nM];
      } else {
        return {};
      }
    };
  }
  var nq = u;
  function nB(t) {
    return function (e) {
      var n;
      if (!th(e) || (n = c(e)).type !== t) {
        throw nA("Incompatible receiver, " + t + " required");
      }
      return n;
    };
  }
  var nF = Function.prototype;
  var nz = Y && Object.getOwnPropertyDescriptor;
  var nG = tB(nF, "name");
  if (nG) {
    if (Y) {
      if (Y) {
        nz(nF, "name").configurable;
      }
    }
  }
  function nK(t, e, n, r) {
    if (r && r.enumerable) {
      t[e] = n;
    } else {
      el(t, e, n);
    }
  }
  var nJ = tY("iterator");
  var nV = false;
  if ([].keys) {
    if ("next" in (p = [].keys())) {
      if ((h = ew(ew(p))) !== Object.prototype) {
        l = h;
      }
    } else {
      nV = true;
    }
  }
  if (!W((l = l == undefined || X(function () {
    var t = {};
    return l[nJ].call(t) !== t;
  }) ? {} : e2(l))[nJ])) {
    nK(l, nJ, function () {
      return this;
    });
  }
  var nW = l;
  var nX = nV;
  var nY = no ? {}.toString : function () {
    return "[object " + nf(this) + "]";
  };
  var nQ = ef.f;
  var n$ = tY("toStringTag");
  function nZ(t, e, n, r) {
    if (t) {
      var i = n ? t : t.prototype;
      if (!tB(i, n$)) {
        nQ(i, n$, {
          configurable: true,
          value: e
        });
      }
      if (r && !no) {
        el(i, "toString", nY);
      }
    }
  }
  function n0() {
    return this;
  }
  function n1(t, e, n, r) {
    var i = e + " Iterator";
    t.prototype = e2(nW, {
      next: tn(+!r, n)
    });
    nZ(t, i, false, true);
    e9[i] = n0;
    return t;
  }
  var n2 = nG && function () {}.name === "something";
  var n3 = tY("iterator");
  var n6 = "keys";
  var n5 = "values";
  var n4 = "entries";
  function n7() {
    return this;
  }
  function n8(t, e, n, r, i, o, a) {
    n1(n, e, r);
    var s;
    var u;
    var c;
    function f(t) {
      if (t === i && v) {
        return v;
      }
      if (!nX && t in p) {
        return p[t];
      }
      switch (t) {
        case n6:
        case n5:
        case n4:
          return function () {
            return new n(this, t);
          };
      }
      return function () {
        return new n(this);
      };
    }
    var l = e + " Iterator";
    var h = false;
    var p = t.prototype;
    var d = p[n3] || p["@@iterator"] || i && p[i];
    var v = !nX && d || f(i);
    var g = e == "Array" && p.entries || d;
    if (g && (s = ew(g.call(new t()))) !== Object.prototype && s.next) {
      nZ(s, l, true, true);
      e9[l] = n7;
    }
    if (n2 && i == n5 && d && d.name !== n5) {
      h = true;
      v = function () {
        return $(d, this);
      };
    }
    if (i) {
      u = {
        values: f(n5),
        keys: o ? v : f(n6),
        entries: f(n4)
      };
      if (a) {
        for (c in u) {
          if (!!nX || !!h || !(c in p)) {
            nK(p, c, u[c]);
          }
        }
      } else {
        ep({
          target: e,
          proto: true,
          forced: nX || h
        }, u);
      }
    }
    if (a && p[n3] !== v) {
      nK(p, n3, v, {
        name: i
      });
    }
    e9[e] = v;
    return u;
  }
  ef.f;
  var n9 = "Array Iterator";
  var rt = nB(n9);
  n8(Array, "Array", function (t, e) {
    nq(this, {
      type: n9,
      target: tl(t),
      index: 0,
      kind: e
    });
  }, function () {
    var t = rt(this);
    var e = t.target;
    var n = t.kind;
    var r = t.index++;
    if (!e || r >= e.length) {
      t.target = undefined;
      return {
        value: undefined,
        done: true
      };
    } else if (n == "keys") {
      return {
        value: r,
        done: false
      };
    } else if (n == "values") {
      return {
        value: e[r],
        done: false
      };
    } else {
      return {
        value: [r, e[r]],
        done: false
      };
    }
  }, "values");
  e9.Arguments = e9.Array;
  var re = N.Promise;
  function rn(t, e, n) {
    for (var r in e) {
      if (n && n.unsafe && t[r]) {
        t[r] = e[r];
      } else {
        nK(t, r, e[r], n);
      }
    }
    return t;
  }
  var rr = tY("species");
  var ri = N.TypeError;
  function ro(t, e) {
    if (tg(e, t)) {
      return t;
    }
    throw ri("Incorrect invocation");
  }
  var ra = tY("iterator");
  var rs = false;
  try {
    var ru = 0;
    var rc = {
      next: function () {
        return {
          done: !!ru++
        };
      },
      return: function () {
        rs = true;
      }
    };
    rc[ra] = function () {
      return this;
    };
    Array.from(rc, function () {
      throw 2;
    });
  } catch (t) {}
  function rf() {}
  var rl = [];
  var rh = tv("Reflect", "construct");
  var rp = /^\s*(?:class|function)\b/;
  var rd = V(rp.exec);
  var rv = !rp.exec(rf);
  function rg(t) {
    if (!W(t)) {
      return false;
    }
    try {
      rh(rf, rl, t);
      return true;
    } catch (t) {
      return false;
    }
  }
  function rm(t) {
    if (!W(t)) {
      return false;
    }
    switch (nf(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return rv || !!rd(rp, nP(t));
    } catch (t) {
      return true;
    }
  }
  rm.sham = true;
  var ry = !rh || X(function () {
    var t;
    return rg(rg.call) || !rg(Object) || !rg(function () {
      t = true;
    }) || t;
  }) ? rm : rg;
  var rb = N.TypeError;
  function rw(t) {
    if (ry(t)) {
      return t;
    }
    throw rb(tL(t) + " is not a constructor");
  }
  var r_ = tY("species");
  function rS(t, e) {
    var n;
    var r = es(t).constructor;
    if (r === undefined || (n = es(r)[r_]) == undefined) {
      return e;
    } else {
      return rw(n);
    }
  }
  var rO = V([].slice);
  var rE = /(?:ipad|iphone|ipod).*applewebkit/i.test(tm);
  var rj = to(N.process) == "process";
  var rR = N.setImmediate;
  var rx = N.clearImmediate;
  var rL = N.process;
  var rP = N.Dispatch;
  var rC = N.Function;
  var rk = N.MessageChannel;
  var rT = N.String;
  var rA = 0;
  var rI = {};
  var rD = "onreadystatechange";
  try {
    d = N.location;
  } catch (t) {}
  function rU(t) {
    if (tB(rI, t)) {
      var e = rI[t];
      delete rI[t];
      e();
    }
  }
  function rN(t) {
    return function () {
      rU(t);
    };
  }
  function rH(t) {
    rU(t.data);
  }
  function rM(t) {
    N.postMessage(rT(t), d.protocol + "//" + d.host);
  }
  if (!rR || !rx) {
    rR = function (t) {
      var e = rO(arguments, 1);
      rI[++rA] = function () {
        F(W(t) ? t : rC(t), undefined, e);
      };
      v(rA);
      return rA;
    };
    rx = function (t) {
      delete rI[t];
    };
    if (rj) {
      v = function (t) {
        rL.nextTick(rN(t));
      };
    } else if (rP && rP.now) {
      v = function (t) {
        rP.now(rN(t));
      };
    } else if (rk && !rE) {
      m = (g = new rk()).port2;
      g.port1.onmessage = rH;
      v = ei(m.postMessage, m);
    } else if (N.addEventListener && W(N.postMessage) && !N.importScripts && d && d.protocol !== "file:" && !X(rM)) {
      v = rM;
      N.addEventListener("message", rH, false);
    } else {
      v = rD in t3("script") ? function (t) {
        eV.appendChild(t3("script"))[rD] = function () {
          eV.removeChild(this);
          rU(t);
        };
      } : function (t) {
        setTimeout(rN(t), 0);
      };
    }
  }
  var rq = rR;
  var rB = /ipad|iphone|ipod/i.test(tm) && N.Pebble !== undefined;
  var rF = /web0s(?!.*chrome)/i.test(tm);
  var rz = rq;
  var rG = N.MutationObserver || N.WebKitMutationObserver;
  var rK = N.document;
  var rJ = N.process;
  var rV = N.Promise;
  var rW = t4(N, "queueMicrotask");
  var rX = rW && rW.value;
  if (!rX) {
    y = function () {
      var t;
      var e;
      for (rj && (t = rJ.domain) && t.exit(); b;) {
        e = b.fn;
        b = b.next;
        try {
          e();
        } catch (t) {
          if (b) {
            _();
          } else {
            w = undefined;
          }
          throw t;
        }
      }
      w = undefined;
      if (t) {
        t.enter();
      }
    };
    if (rE || rj || rF || !rG || !rK) {
      if (!rB && rV && rV.resolve) {
        (E = rV.resolve(undefined)).constructor = rV;
        j = ei(E.then, E);
        _ = function () {
          j(y);
        };
      } else if (rj) {
        _ = function () {
          rJ.nextTick(y);
        };
      } else {
        rz = ei(rz, N);
        _ = function () {
          rz(y);
        };
      }
    } else {
      S = true;
      O = rK.createTextNode("");
      new rG(y).observe(O, {
        characterData: true
      });
      _ = function () {
        O.data = S = !S;
      };
    }
  }
  var rY = rX || function (t) {
    var e = {
      fn: t,
      next: undefined
    };
    if (w) {
      w.next = e;
    }
    if (!b) {
      b = e;
      _();
    }
    w = e;
  };
  function rQ(t) {
    var e;
    var n;
    this.promise = new t(function (t, r) {
      if (e !== undefined || n !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      e = t;
      n = r;
    });
    this.resolve = tC(e);
    this.reject = tC(n);
  }
  var r$ = {
    f: function (t) {
      return new rQ(t);
    }
  };
  function rZ(t, e) {
    es(t);
    if (th(e) && e.constructor === t) {
      return e;
    }
    var n = r$.f(t);
    n.resolve(e);
    return n.promise;
  }
  function r0(t, e) {
    var n = N.console;
    if (n) {
      n.error;
    }
  }
  function r1(t) {
    try {
      return {
        error: false,
        value: t()
      };
    } catch (t) {
      return {
        error: true,
        value: t
      };
    }
  }
  function r2() {
    this.head = null;
    this.tail = null;
  }
  r2.prototype = {
    add: function (t) {
      var e = {
        item: t,
        next: null
      };
      if (this.head) {
        this.tail.next = e;
      } else {
        this.head = e;
      }
      this.tail = e;
    },
    get: function () {
      var t = this.head;
      if (t) {
        this.head = t.next;
        if (this.tail === t) {
          this.tail = null;
        }
        return t.item;
      }
    }
  };
  var r3 = typeof window == "object";
  var r6 = tY("species");
  var r5 = "Promise";
  var r4 = nB(r5);
  var r7 = nB(r5);
  var r8 = re && re.prototype;
  var r9 = re;
  var it = r8;
  var ie = N.TypeError;
  var ir = N.document;
  var ii = N.process;
  var io = r$.f;
  var ia = io;
  var is = !!ir && !!ir.createEvent && !!N.dispatchEvent;
  var iu = W(N.PromiseRejectionEvent);
  var ic = "unhandledrejection";
  var il = false;
  var ih = t8(r5, function () {
    var t = nP(r9);
    var e = t !== String(r9);
    if (!e && tS === 66 || !it.finally) {
      return true;
    }
    if (tS >= 51 && /native code/.test(t)) {
      return false;
    }
    var n = new r9(function (t) {
      t(1);
    });
    function r(t) {
      t(function () {}, function () {});
    }
    (n.constructor = {})[r6] = r;
    return !(n.then(function () {}) instanceof r) || !e && r3 && !iu;
  });
  var ip = ih || !function (t, e) {
    if (!rs) {
      return false;
    }
    var n = false;
    try {
      var r = {
        [ra]: function () {
          return {
            next: function () {
              return {
                done: n = true
              };
            }
          };
        }
      };
      t(r);
    } catch (t) {}
    return n;
  }(function (t) {
    r9.all(t).catch(function () {});
  });
  function id(t) {
    var e;
    return !!th(t) && !!W(e = t.then) && e;
  }
  function iv(t, e) {
    var n;
    var r;
    var i;
    var o = e.value;
    var a = e.state == 1;
    var s = a ? t.ok : t.fail;
    var u = t.resolve;
    var c = t.reject;
    var f = t.domain;
    try {
      if (s) {
        if (!a) {
          if (e.rejection === 2) {
            iw(e);
          }
          e.rejection = 1;
        }
        if (s === true) {
          n = o;
        } else {
          if (f) {
            f.enter();
          }
          n = s(o);
          if (f) {
            f.exit();
            i = true;
          }
        }
        if (n === t.promise) {
          c(ie("Promise-chain cycle"));
        } else if (r = id(n)) {
          $(r, n, u, c);
        } else {
          u(n);
        }
      } else {
        c(o);
      }
    } catch (t) {
      if (f && !i) {
        f.exit();
      }
      c(t);
    }
  }
  function ig(t, e) {
    if (!t.notified) {
      t.notified = true;
      rY(function () {
        var n;
        var r = t.reactions;
        while (n = r.get()) {
          iv(n, t);
        }
        t.notified = false;
        if (e && !t.rejection) {
          iy(t);
        }
      });
    }
  }
  function im(t, e, n) {
    var r;
    var i;
    if (is) {
      (r = ir.createEvent("Event")).promise = e;
      r.reason = n;
      r.initEvent(t, false, true);
      N.dispatchEvent(r);
    } else {
      r = {
        promise: e,
        reason: n
      };
    }
    if (!iu && (i = N["on" + t])) {
      i(r);
    } else if (t === ic) {
      r0("Unhandled promise rejection", n);
    }
  }
  function iy(t) {
    $(rq, N, function () {
      var e;
      var n = t.facade;
      var r = t.value;
      if (ib(t) && (e = r1(function () {
        if (rj) {
          ii.emit("unhandledRejection", r, n);
        } else {
          im(ic, n, r);
        }
      }), t.rejection = rj || ib(t) ? 2 : 1, e.error)) {
        throw e.value;
      }
    });
  }
  function ib(t) {
    return t.rejection !== 1 && !t.parent;
  }
  function iw(t) {
    $(rq, N, function () {
      var e = t.facade;
      if (rj) {
        ii.emit("rejectionHandled", e);
      } else {
        im("rejectionhandled", e, t.value);
      }
    });
  }
  function i_(t, e, n) {
    return function (r) {
      t(e, r, n);
    };
  }
  function iS(t, e, n) {
    if (!t.done) {
      t.done = true;
      if (n) {
        t = n;
      }
      t.value = e;
      t.state = 2;
      ig(t, true);
    }
  }
  function iO(t, e, n) {
    if (!t.done) {
      t.done = true;
      if (n) {
        t = n;
      }
      try {
        if (t.facade === e) {
          throw ie("Promise can't be resolved itself");
        }
        var r = id(e);
        if (r) {
          rY(function () {
            var n = {
              done: false
            };
            try {
              $(r, e, i_(iO, n, t), i_(iS, n, t));
            } catch (e) {
              iS(n, e, t);
            }
          });
        } else {
          t.value = e;
          t.state = 1;
          ig(t, false);
        }
      } catch (e) {
        iS({
          done: false
        }, e, t);
      }
    }
  }
  if (ih) {
    it = (r9 = function (t) {
      ro(this, it);
      tC(t);
      $(R, this);
      var e = r4(this);
      try {
        t(i_(iO, e), i_(iS, e));
      } catch (t) {
        iS(e, t);
      }
    }).prototype;
    (R = function (t) {
      nq(this, {
        type: r5,
        done: false,
        notified: false,
        parent: false,
        reactions: new r2(),
        rejection: false,
        state: 0,
        value: undefined
      });
    }).prototype = rn(it, {
      then: function (t, e) {
        var n = r7(this);
        var r = io(rS(this, r9));
        n.parent = true;
        r.ok = !W(t) || t;
        r.fail = W(e) && e;
        r.domain = rj ? ii.domain : undefined;
        if (n.state == 0) {
          n.reactions.add(r);
        } else {
          rY(function () {
            iv(r, n);
          });
        }
        return r.promise;
      },
      catch: function (t) {
        return this.then(undefined, t);
      }
    });
    x = function () {
      var t = new R();
      var e = r4(t);
      this.promise = t;
      this.resolve = i_(iO, e);
      this.reject = i_(iS, e);
    };
    r$.f = io = function (t) {
      if (t === r9 || t === L) {
        return new x(t);
      } else {
        return ia(t);
      }
    };
  }
  ep({
    global: true,
    wrap: true,
    forced: ih
  }, {
    Promise: r9
  });
  nZ(r9, r5, false, true);
  r = tv(r5);
  i = ef.f;
  if (Y && r && !r[rr]) {
    i(r, rr, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
  L = tv(r5);
  ep({
    target: r5,
    stat: true,
    forced: ih
  }, {
    reject: function (t) {
      var e = io(this);
      $(e.reject, undefined, t);
      return e.promise;
    }
  });
  ep({
    target: r5,
    stat: true,
    forced: true
  }, {
    resolve: function (t) {
      return rZ(this === L ? r9 : this, t);
    }
  });
  ep({
    target: r5,
    stat: true,
    forced: ip
  }, {
    all: function (t) {
      var e = this;
      var n = io(e);
      var r = n.resolve;
      var i = n.reject;
      var o = r1(function () {
        var n = tC(e.resolve);
        var o = [];
        var a = 0;
        var s = 1;
        nb(t, function (t) {
          var u = a++;
          var c = false;
          s++;
          $(n, e, t).then(function (t) {
            if (!c) {
              c = true;
              o[u] = t;
              if (! --s) {
                r(o);
              }
            }
          }, i);
        });
        if (! --s) {
          r(o);
        }
      });
      if (o.error) {
        i(o.value);
      }
      return n.promise;
    },
    race: function (t) {
      var e = this;
      var n = io(e);
      var r = n.reject;
      var i = r1(function () {
        var i = tC(e.resolve);
        nb(t, function (t) {
          $(i, e, t).then(n.resolve, r);
        });
      });
      if (i.error) {
        r(i.value);
      }
      return n.promise;
    }
  });
  ep({
    target: "Promise",
    stat: true
  }, {
    allSettled: function (t) {
      var e = this;
      var n = r$.f(e);
      var r = n.resolve;
      var i = n.reject;
      var o = r1(function () {
        var n = tC(e.resolve);
        var i = [];
        var o = 0;
        var a = 1;
        nb(t, function (t) {
          var s = o++;
          var u = false;
          a++;
          $(n, e, t).then(function (t) {
            if (!u) {
              u = true;
              i[s] = {
                status: "fulfilled",
                value: t
              };
              if (! --a) {
                r(i);
              }
            }
          }, function (t) {
            if (!u) {
              u = true;
              i[s] = {
                status: "rejected",
                reason: t
              };
              if (! --a) {
                r(i);
              }
            }
          });
        });
        if (! --a) {
          r(i);
        }
      });
      if (o.error) {
        i(o.value);
      }
      return n.promise;
    }
  });
  var iE = "No one promise resolved";
  ep({
    target: "Promise",
    stat: true
  }, {
    any: function (t) {
      var e = this;
      var n = tv("AggregateError");
      var r = r$.f(e);
      var i = r.resolve;
      var o = r.reject;
      var a = r1(function () {
        var r = tC(e.resolve);
        var a = [];
        var s = 0;
        var u = 1;
        var c = false;
        nb(t, function (t) {
          var f = s++;
          var l = false;
          u++;
          $(r, e, t).then(function (t) {
            if (!l && !c) {
              c = true;
              i(t);
            }
          }, function (t) {
            if (!l && !c) {
              l = true;
              a[f] = t;
              if (! --u) {
                o(new n(a, iE));
              }
            }
          });
        });
        if (! --u) {
          o(new n(a, iE));
        }
      });
      if (a.error) {
        o(a.value);
      }
      return r.promise;
    }
  });
  ep({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!re && X(function () {
      re.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (t) {
      var e = rS(this, tv("Promise"));
      var n = W(t);
      return this.then(n ? function (n) {
        return rZ(e, t()).then(function () {
          return n;
        });
      } : t, n ? function (n) {
        return rZ(e, t()).then(function () {
          throw n;
        });
      } : t);
    }
  });
  var ij = V("".charAt);
  var iR = V("".charCodeAt);
  var ix = V("".slice);
  function iL(t) {
    return function (e, n) {
      var r;
      var i;
      var o = n_(tf(e));
      var a = ex(n);
      var s = o.length;
      if (a < 0 || a >= s) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((r = iR(o, a)) < 55296 || r > 56319 || a + 1 === s || (i = iR(o, a + 1)) < 56320 || i > 57343) {
        if (t) {
          return ij(o, a);
        } else {
          return r;
        }
      } else if (t) {
        return ix(o, a, a + 2);
      } else {
        return (r - 55296 << 10) + (i - 56320) + 65536;
      }
    };
  }
  var iP = {
    codeAt: iL(false),
    charAt: iL(true)
  };
  var iC = iP.charAt;
  var ik = "String Iterator";
  var iT = nB(ik);
  n8(String, "String", function (t) {
    nq(this, {
      type: ik,
      string: n_(t),
      index: 0
    });
  }, function () {
    var t;
    var e = iT(this);
    var n = e.string;
    var r = e.index;
    if (r >= n.length) {
      return {
        value: undefined,
        done: true
      };
    } else {
      t = iC(n, r);
      e.index += t.length;
      return {
        value: t,
        done: false
      };
    }
  });
  var iA = tp.Promise;
  var iI = {
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
  var iD = tY("toStringTag");
  for (var iU in iI) {
    var iN = N[iU];
    var iH = iN && iN.prototype;
    if (iH && nf(iH) !== iD) {
      el(iH, iD, iU);
    }
    e9[iU] = e9.Array;
  }
  var iM = "s_v_web_id";
  var iq = {
    setting: "/vc/setting"
  };
  function iB(t) {
    var e = Object.keys(t);
    var n = "";
    var r = 0;
    for (; r < e.length; r++) {
      var i = e[r];
      var o = t[i];
      var a = `${encodeURIComponent(i)}=${encodeURIComponent(o)}`;
      n = r >= 1 ? `${n}&${a}` : a;
    }
    return n;
  }
  function iF(t) {
    var e = t.url;
    var n = t.method;
    var r = t.data;
    var i = t.config;
    var o = i == null ? undefined : i.slardar;
    return new iA(function (a, s) {
      var u = new XMLHttpRequest();
      var c = Date.now();
      function f() {
        if (o && t.url.indexOf(iq.setting) !== -1) {
          o.reportHttp({
            url: e,
            method: n,
            duration: Date.now() - c,
            status: u.status
          });
        }
      }
      u.onreadystatechange = function () {
        if (u.readyState === u.DONE) {
          if (u.status >= 200 && u.status < 300) {
            var t = {};
            var e = u.response || u.responseText;
            var n = u.getResponseHeader("Content-Type") || u.getResponseHeader("content-type");
            if (n && n.indexOf("application/json") !== -1) {
              try {
                t = JSON.parse(e);
              } catch (t) {}
            } else {
              t = e;
            }
            setTimeout(function () {
              a(t);
            }, 0);
          } else {
            s(TypeError(`Network request failed, status: ${u.status}`));
          }
          f();
        }
      };
      u.onerror = function () {
        setTimeout(function () {
          s(TypeError("Network request failed, occur error"));
        }, 0);
        f();
      };
      u.ontimeout = function () {
        setTimeout(function () {
          s(TypeError("Network request failed, timeout"));
        }, 0);
        f();
      };
      u.onabort = function () {
        setTimeout(function () {
          s(new DOMException("Aborted", "AbortError"));
        }, 0);
        f();
      };
      var l = e;
      if (i == null ? undefined : i.params) {
        l = `${l}?${iB(i.params)}`;
      }
      u.open(n, l, true);
      if ((i == null ? undefined : i.timeout) && typeof i.timeout == "number") {
        u.timeout = i.timeout;
      } else {
        u.timeout = 5000;
      }
      if (i == null ? undefined : i.headers) {
        var h = i.headers;
        var p = 0;
        var d = Object.keys(h);
        for (; p < d.length; p++) {
          var v = d[p];
          u.setRequestHeader(v, h[v]);
        }
      }
      if (i == null ? undefined : i.withCredentials) {
        u.withCredentials = i.withCredentials;
      }
      if (n.toUpperCase() === "POST" && r) {
        u.send(JSON.stringify(r));
      } else {
        u.send(null);
      }
    });
  }
  function iz(t, e = {}) {
    return iF({
      url: t,
      method: "GET",
      config: e
    });
  }
  function iG(t, e, n = {}) {
    var r = n.headers ? T({
      "Content-Type": "application/json"
    }, n.headers) : {
      "Content-Type": "application/json"
    };
    return iF({
      url: t,
      method: "POST",
      data: e,
      config: T(T({}, n), {
        headers: r
      })
    });
  }
  var iK = D(function (t, e) {
    var n;
    n = function () {
      function t() {
        var t = 0;
        var e = {};
        for (; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) {
            e[r] = n[r];
          }
        }
        return e;
      }
      function e(t) {
        return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function n(r) {
        function i() {}
        function o(e, n, o) {
          if (typeof document != "undefined") {
            if (typeof (o = t({
              path: "/"
            }, i.defaults, o)).expires == "number") {
              o.expires = new Date(new Date() * 1 + o.expires * 86400000);
            }
            o.expires = o.expires ? o.expires.toUTCString() : "";
            try {
              var a = JSON.stringify(n);
              if (/^[\{\[]/.test(a)) {
                n = a;
              }
            } catch (t) {}
            n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var s = "";
            for (var u in o) {
              if (o[u]) {
                s += "; " + u;
                if (o[u] !== true) {
                  s += "=" + o[u].split(";")[0];
                }
              }
            }
            return document.cookie = e + "=" + n + s;
          }
        }
        function a(t, n) {
          if (typeof document != "undefined") {
            var i = {};
            var o = document.cookie ? document.cookie.split("; ") : [];
            var a = 0;
            for (; a < o.length; a++) {
              var s = o[a].split("=");
              var u = s.slice(1).join("=");
              if (!n && u.charAt(0) === "\"") {
                u = u.slice(1, -1);
              }
              try {
                var c = e(s[0]);
                u = (r.read || r)(u, c) || e(u);
                if (n) {
                  try {
                    u = JSON.parse(u);
                  } catch (t) {}
                }
                i[c] = u;
                if (t === c) {
                  break;
                }
              } catch (t) {}
            }
            if (t) {
              return i[t];
            } else {
              return i;
            }
          }
        }
        i.set = o;
        i.get = function (t) {
          return a(t, false);
        };
        i.getJSON = function (t) {
          return a(t, true);
        };
        i.remove = function (e, n) {
          o(e, "", t(n, {
            expires: -1
          }));
        };
        i.defaults = {};
        i.withConverter = n;
        return i;
      }(function () {});
    };
    t.exports = n();
  });
  var iJ = "";
  function iV() {
    if (iJ) {
      return iJ;
    }
    try {
      iJ = iK.get(iM) || (localStorage == null ? undefined : localStorage.getItem(iM)) || "";
    } catch (t) {}
    iJ ||= function () {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      var e = t.length;
      var n = Date.now().toString(36);
      var r = [];
      r[8] = r[13] = r[18] = r[23] = "_";
      r[14] = "4";
      var i = 0;
      var o = undefined;
      for (; i < 36; i++) {
        if (!r[i]) {
          o = Math.random() * e | 0;
          r[i] = t[i == 19 ? o & 3 | 8 : o];
        }
      }
      return "verify_" + n + "_" + r.join("");
    }();
    return iJ;
  }
  var iW = D(function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    });
    function n() {
      return (n = Object.assign || function (t) {
        var e;
        var n = 1;
        var r = arguments.length;
        for (; n < r; n++) {
          for (var i in e = arguments[n]) {
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              t[i] = e[i];
            }
          }
        }
        return t;
      }).apply(this, arguments);
    }
    function r(t, e) {
      var n = typeof Symbol == "function" && t[Symbol.iterator];
      if (!n) {
        return t;
      }
      var r;
      var i;
      var o = n.call(t);
      var a = [];
      try {
        while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
          a.push(r.value);
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          if (r && !r.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      return a;
    }
    function i(t, e, n) {
      if (n || arguments.length == 2) {
        var r;
        var i = 0;
        var o = e.length;
        for (; i < o; i++) {
          if (!!r || !(i in e)) {
            r ||= Array.prototype.slice.call(e, 0, i);
            r[i] = e[i];
          }
        }
      }
      return t.concat(r || Array.prototype.slice.call(e));
    }
    var o = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
    function a() {
      return {};
    }
    function s(t) {
      return t;
    }
    function u(t) {
      return typeof t == "object" && t !== null;
    }
    var c = Object.prototype;
    function f(t) {
      return c.toString.call(t) === "[object Array]";
    }
    function l(t) {
      return typeof t == "number";
    }
    function h(t) {
      return typeof t == "string";
    }
    function p(t, e) {
      if (!f(t) || t.length === 0) {
        return false;
      }
      for (var n = 0; n < t.length;) {
        if (t[n] === e) {
          return true;
        }
        n++;
      }
      return false;
    }
    function d(t, e) {
      if (!f(t)) {
        return t;
      }
      var n = t.indexOf(e);
      if (n >= 0) {
        var r = t.slice();
        r.splice(n, 1);
        return r;
      }
      return t;
    }
    function v(t, e, n) {
      var i;
      var o = r(e.split("."));
      var a = o[0];
      var s = o.slice(1);
      while (t && s.length > 0) {
        t = t[a];
        a = (i = r(s))[0];
        s = i.slice(1);
      }
      if (t) {
        return n(t, a);
      }
    }
    function g(t) {
      try {
        if (h(t)) {
          return t;
        } else {
          return JSON.stringify(t);
        }
      } catch (t) {
        return "[FAILED_TO_STRINGIFY]:" + String(t);
      }
    }
    "".padStart;
    function m() {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
    }
    function y() {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
    }
    function b(t) {
      return Math.random() < Number(t);
    }
    function w(t, e) {
      return t < Number(e);
    }
    function _(t) {
      return function (e) {
        var n = e;
        var r = 0;
        for (; r < t.length; r++) {
          if (n) {
            try {
              n = t[r](n);
            } catch (t) {
              m(t);
            }
          } else {
            break;
          }
        }
        return n;
      };
    }
    function S() {
      var t = function () {
        var t = Array(16);
        var e = 0;
        var n = 0;
        for (; n < 16; n++) {
          if ((n & 3) == 0) {
            e = Math.random() * 4294967296;
          }
          t[n] = e >>> ((n & 3) << 3) & 255;
        }
        return t;
      }();
      t[6] = t[6] & 15 | 64;
      t[8] = t[8] & 63 | 128;
      return function (t) {
        var e = [];
        var n = 0;
        for (; n < 256; ++n) {
          e[n] = (n + 256).toString(16).substr(1);
        }
        var r = 0;
        return [e[t[r++]], e[t[r++]], e[t[r++]], e[t[r++]], "-", e[t[r++]], e[t[r++]], "-", e[t[r++]], e[t[r++]], "-", e[t[r++]], e[t[r++]], "-", e[t[r++]], e[t[r++]], e[t[r++]], e[t[r++]], e[t[r++]], e[t[r++]]].join("");
      }(t);
    }
    function O(t) {
      var e;
      var r;
      var i;
      e = {};
      r = {};
      var o = i = {
        set: function (t, n) {
          e[t] = n;
          r[t] = g(n);
          return i;
        },
        merge: function (t) {
          e = n(n({}, e), t);
          Object.keys(t).forEach(function (e) {
            r[e] = g(t[e]);
          });
          return i;
        },
        delete: function (t) {
          delete e[t];
          delete r[t];
          return i;
        },
        clear: function () {
          e = {};
          r = {};
          return i;
        },
        get: function (t) {
          return r[t];
        },
        toString: function () {
          return n({}, r);
        }
      };
      t.provide("context", o);
      t.on("report", function (t) {
        t.extra ||= {};
        t.extra.context = o.toString();
        return t;
      });
    }
    function E() {
      return Date.now();
    }
    function j(t) {
      if (t) {
        t.__SLARDAR_REGISTRY__ ||= {
          Slardar: {
            plugins: [],
            errors: [],
            subject: {}
          }
        };
        return t.__SLARDAR_REGISTRY__.Slardar;
      }
    }
    function R() {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var n = j(function () {
        if (typeof window == "object" && u(window)) {
          return window;
        }
      }());
      if (n) {
        n.errors ||= [];
        n.errors.push(t);
      }
    }
    var x = "custom";
    function L(t) {
      if (t && u(t) && t.name && h(t.name)) {
        var e = {
          name: t.name,
          type: "event"
        };
        if ("metrics" in t && u(t.metrics)) {
          var n = t.metrics;
          var r = {};
          for (var i in n) {
            if (l(n[i])) {
              r[i] = n[i];
            }
          }
          e.metrics = r;
        }
        if ("categories" in t && u(t.categories)) {
          var o = t.categories;
          var a = {};
          for (var i in o) {
            a[i] = g(o[i]);
          }
          e.categories = a;
        }
        return e;
      }
    }
    function P(t) {
      if (t && u(t) && t.content && h(t.content)) {
        var e = {
          content: g(t.content),
          type: "log",
          level: "info"
        };
        if ("level" in t) {
          e.level = t.level;
        }
        if ("extra" in t && u(t.extra)) {
          var n = t.extra;
          var r = {};
          var i = {};
          for (var o in n) {
            if (l(n[o])) {
              r[o] = n[o];
            } else {
              i[o] = g(n[o]);
            }
          }
          e.metrics = r;
          e.categories = i;
        }
        return e;
      }
    }
    function C(t) {
      t.provide("sendEvent", function (e) {
        var n = L(e);
        if (n) {
          t.report({
            ev_type: x,
            payload: n,
            extra: {
              timestamp: E()
            }
          });
        }
      });
      t.provide("sendLog", function (e) {
        var n = P(e);
        if (n) {
          t.report({
            ev_type: x,
            payload: n,
            extra: {
              timestamp: E()
            }
          });
        }
      });
    }
    function k(t, e) {
      var n = t.common || {};
      n.sample_rate = e;
      t.common = n;
      return t;
    }
    function T(t, e, n, r, i) {
      var o;
      if (t) {
        o = i(r, e);
        return function () {
          return o;
        };
      } else {
        return function () {
          return n(e);
        };
      }
    }
    function A(t, e, n) {
      switch (n) {
        case "eq":
          return p(e, t);
        case "neq":
          return !p(e, t);
        case "gt":
          return t > e[0];
        case "gte":
          return t >= e[0];
        case "lt":
          return t < e[0];
        case "lte":
          return t <= e[0];
        case "regex":
          return !!t.match(new RegExp(e.join("|")));
        case "not_regex":
          return !t.match(new RegExp(e.join("|")));
        default:
          return false;
      }
    }
    function I(t, e, n, r) {
      var i = v(t, e, function (t, e) {
        return t[e];
      });
      if (i === undefined) {
        return false;
      }
      var o = typeof i == "boolean" ? "bool" : l(i) ? "number" : "string";
      return A(i, r.map(function (t) {
        switch (o) {
          case "number":
            return Number(t);
          case "boolean":
            return t === "1";
          default:
            return String(t);
        }
      }), n);
    }
    function D(t, e) {
      try {
        if (e.type === "rule") {
          return I(t, e.field, e.op, e.values);
        } else if (e.type === "and") {
          return e.children.every(function (e) {
            return D(t, e);
          });
        } else {
          return e.children.some(function (e) {
            return D(t, e);
          });
        }
      } catch (t) {
        R(t);
        return false;
      }
    }
    function U(t, e, n, r, i, o) {
      var a = {};
      Object.keys(t).forEach(function (s) {
        var u = t[s];
        var c = u.enable;
        var f = u.sample_rate;
        var l = u.conditional_sample_rules;
        if (c) {
          a[s] = {
            enable: c,
            sample_rate: f,
            effectiveSampleRate: f * n,
            hit: T(e, f, r, i, o)
          };
          if (l) {
            a[s].conditional_hit_rules = l.map(function (t) {
              var a = t.sample_rate;
              var s = t.filter;
              return {
                sample_rate: a,
                hit: T(e, a, r, i, o),
                effectiveSampleRate: a * n,
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
    function N(t, e, n, r, i) {
      if (!e) {
        return s;
      }
      var o = e.sample_rate;
      var a = e.include_users;
      var u = e.sample_granularity;
      var c = e.rules;
      var f = e.r;
      var l = f === undefined ? Math.random() : f;
      if (p(a, t)) {
        return function (t) {
          return k(t, 1);
        };
      }
      var h = u === "session";
      var d = T(h, o, n, l, r);
      var v = U(c, h, o, n, l, r);
      return function (t) {
        if (!d()) {
          if (h) {
            i[0]();
          }
          return false;
        }
        if (!(t.ev_type in v)) {
          return k(t, o);
        }
        if (!v[t.ev_type].enable) {
          if (h) {
            i[1](t.ev_type);
          }
          return false;
        }
        if (t.common?.sample_rate) {
          return t;
        }
        var n = v[t.ev_type];
        var r = n.conditional_hit_rules;
        if (r) {
          for (var a = 0; a < r.length; a++) {
            if (D(t, r[a].filter)) {
              if (r[a].hit()) {
                return k(t, r[a].effectiveSampleRate);
              }
              return false;
            }
          }
        }
        if (n.hit()) {
          return k(t, n.effectiveSampleRate);
        } else {
          if ((!r || !r.length) && h) {
            i[1](t.ev_type);
          }
          return false;
        }
      };
    }
    function H(t) {
      t.on("start", function () {
        var e = t.config();
        var n = N(e.userId, e.sample, b, w, [function () {
          t.destroy();
        }, function (e) {
          t.destroyAgent.removeByEvType(e);
        }]);
        t.on("build", n);
      });
    }
    var M = {
      build: function (t) {
        return {
          ev_type: t.ev_type,
          payload: t.payload,
          common: n(n({}, t.extra || {}), t.overrides || {})
        };
      }
    };
    var q = "mon.zijieapi.com";
    var B = "1.5.1";
    var F = "SDK_BASE";
    var z = "/monitor_web/settings/browser-settings";
    var G = "/monitor_browser/collect/batch/";
    var K = {
      sample_rate: 1,
      include_users: [],
      sample_granularity: "session",
      rules: {}
    };
    var J = "session";
    function V(t) {
      return n({}, t);
    }
    function W(t) {
      return u(t) && "bid" in t && "transport" in t;
    }
    function X(t) {
      return n({}, t);
    }
    function Y(t) {
      if (!t) {
        return {};
      }
      var e = t.sample;
      var n = t.timestamp;
      var r = t.quota_rate;
      if (!e) {
        return {};
      }
      var i = e.sample_rate;
      var o = e.sample_granularity;
      var a = o === undefined ? J : o;
      var s = e.include_users;
      var u = e.rules;
      return {
        sample: {
          include_users: s,
          sample_rate: i * (r === undefined ? 1 : r),
          sample_granularity: a,
          rules: (u === undefined ? [] : u).reduce(function (t, e) {
            var n = e.name;
            var r = e.enable;
            var i = e.sample_rate;
            var o = e.conditional_sample_rules;
            t[n] = {
              enable: r,
              sample_rate: i,
              conditional_sample_rules: o
            };
            return t;
          }, {})
        },
        serverTimestamp: n
      };
    }
    function Q(t, e = G) {
      return (t && t.indexOf("//") >= 0 ? "" : "https://") + t + e;
    }
    function $(t, e = z) {
      return (t && t.indexOf("//") >= 0 ? "" : "https://") + t + e;
    }
    function Z() {
      return S();
    }
    function tt() {
      return S();
    }
    function te(t) {
      return t + "_" + Date.now();
    }
    function tn() {
      return S();
    }
    function tr(t) {
      var e;
      var r;
      var i = t;
      var o = {};
      var s = a;
      var u = a;
      return {
        getConfig: function () {
          return i;
        },
        setConfig: function (t) {
          o = n(n({}, o), t || {});
          c();
          if (!e) {
            e = t;
            if (i.useLocalConfig || !i.bid) {
              r = {};
              s();
            } else {
              ti(i.transport, i.domain, i.bid, function (t) {
                r = Y(t);
                c();
                s();
              });
            }
          }
          return i;
        },
        onChange: function (t) {
          u = t;
        },
        onReady: function (t) {
          s = t;
          if (r) {
            s();
          }
        }
      };
      function c() {
        var e = n(n(n({}, t), r || {}), o);
        e.sample = to(to(t.sample, r == null ? undefined : r.sample), o.sample);
        i = e;
        u();
      }
    }
    function ti(t, e, n, r) {
      if (!t.get) {
        return r({});
      }
      t.get({
        withCredentials: true,
        url: $(e) + "?bid=" + n + "&store=1",
        success: function (t) {
          r(t.data || {});
        },
        fail: function () {
          r({
            sample: {
              sample_rate: 0.001
            }
          });
        }
      });
    }
    function to(t, e) {
      if (!t || !e) {
        return t || e;
      }
      var o = n(n({}, t), e);
      o.include_users = i(i([], r(t.include_users || []), false), r(e.include_users || []), false);
      o.rules = i(i([], r(Object.keys(t.rules || {})), false), r(Object.keys(e.rules || {})), false).reduce(function (o, a) {
        if (!(a in o)) {
          if (a in (t.rules || {}) && a in (e.rules || {})) {
            o[a] = n(n({}, t.rules[a]), e.rules[a]);
            o[a].conditional_sample_rules = i(i([], r(t.rules[a].conditional_sample_rules || []), false), r(e.rules[a].conditional_sample_rules || []), false);
          } else {
            o[a] = t.rules?.[a] || e.rules?.[a];
          }
        }
        return o;
      }, {});
      return o;
    }
    function ta(t, e) {
      var r = {
        url: "",
        protocol: "",
        domain: "",
        path: "",
        query: "",
        timestamp: Date.now(),
        sdk_version: e.version || B,
        sdk_name: e.name || F
      };
      return n(n({}, t), {
        extra: n(n({}, r), t.extra || {})
      });
    }
    function ts(t) {
      t.on("report", function (e) {
        return ta(e, t.config());
      });
    }
    function tu(t, e) {
      var r = {
        bid: e.bid,
        pid: e.pid,
        view_id: e.viewId,
        user_id: e.userId,
        device_id: e.deviceId,
        session_id: e.sessionId,
        release: e.release,
        env: e.env
      };
      return n(n({}, t), {
        extra: n(n({}, r), t.extra || {})
      });
    }
    function tc(t) {
      t.on("beforeBuild", function (e) {
        return tu(e, t.config());
      });
    }
    function tf(t) {
      return {
        bid: "",
        pid: "",
        viewId: te("_"),
        userId: Z(),
        deviceId: tt(),
        sessionId: tn(),
        domain: q,
        release: "",
        env: "production",
        sample: K,
        plugins: {},
        transport: {
          get: a,
          post: a
        },
        useLocalConfig: true
      };
    }
    function tl(t) {
      var e = t === undefined ? {} : t;
      var n = e.createSender;
      var a = n === undefined ? function (t) {
        return function (t) {
          var e;
          var n = t.transport;
          var r = t.endpoint;
          var i = t.size;
          var o = i === undefined ? 10 : i;
          var a = t.wait;
          var s = a === undefined ? 1000 : a;
          var u = [];
          var c = 0;
          function f() {
            if (u.length) {
              var t = this.getBatchData();
              n.post({
                url: r,
                data: t,
                fail: function (n) {
                  if (e) {
                    e(n, t);
                  }
                }
              });
              u = [];
            }
          }
          return {
            getSize: function () {
              return o;
            },
            getWait: function () {
              return s;
            },
            setSize: function (t) {
              o = t;
            },
            setWait: function (t) {
              s = t;
            },
            getEndpoint: function () {
              return r;
            },
            setEndpoint: function (t) {
              r = t;
            },
            send: function (t) {
              u.push(t);
              if (u.length >= o) {
                f.call(this);
              }
              clearTimeout(c);
              c = setTimeout(f.bind(this), s);
            },
            flush: function () {
              clearTimeout(c);
              f.call(this);
            },
            getBatchData: function () {
              if (u.length) {
                return JSON.stringify({
                  ev_type: "batch",
                  list: u
                });
              } else {
                return "";
              }
            },
            clear: function () {
              clearTimeout(c);
              u = [];
            },
            fail: function (t) {
              e = t;
            }
          };
        }({
          size: 20,
          endpoint: Q(t.domain),
          transport: t.transport
        });
      } : n;
      var s = e.builder;
      var c = s === undefined ? M : s;
      var f = e.createDefaultConfig;
      var l = function (t) {
        var e;
        var n;
        var a;
        var s;
        var c;
        var f;
        var l = t.builder;
        var h = t.createSender;
        var v = t.createDefaultConfig;
        var g = t.createConfigManager;
        var m = t.userConfigNormalizer;
        var b = t.initConfigNormalizer;
        var w = t.validateInitConfig;
        var S = {};
        o.forEach(function (t) {
          return S[t] = [];
        });
        var O = false;
        var E = false;
        var j = false;
        var R = [];
        var x = [];
        e = false;
        n = {};
        a = function (t) {
          if (t.length) {
            t.forEach(function (t) {
              try {
                t();
              } catch (t) {}
            });
          }
          t.length = 0;
        };
        var L = {
          set: function (t, r, i) {
            if (n[t]) {
              n[t].push([r, i]);
            } else {
              n[t] = [[r, i]];
            }
            if (e) {
              a(i);
            }
          },
          has: function (t) {
            return !!n[t];
          },
          remove: s = function (t) {
            if (n[t]) {
              n[t].forEach(function (t) {
                a(t[1]);
              });
            }
            n[t] = undefined;
          },
          removeByEvType: function (t) {
            Object.keys(n).forEach(function (e) {
              if (n[e]) {
                n[e].forEach(function (e) {
                  if (e[0] === t) {
                    a(e[1]);
                  }
                });
              }
            });
          },
          clear: function () {
            e = true;
            Object.keys(n).forEach(function (t) {
              s(t);
            });
          }
        };
        var P = {
          getBuilder: function () {
            return l;
          },
          getSender: function () {
            return c;
          },
          getPreStartQueue: function () {
            return R;
          },
          init: function (t) {
            if (O) {
              y("already inited");
              return;
            }
            if (t && u(t) && w(t)) {
              var e = v(t);
              if (!e) {
                throw Error("defaultConfig missing");
              }
              var n = b(t);
              (f = g(e)).setConfig(n);
              f.onChange(function () {
                C("config");
              });
              if (!(c = h(f.getConfig()))) {
                throw Error("sender missing");
              }
              O = true;
              C("init", true);
            } else {
              throw Error("invalid InitConfig, init failed");
            }
          },
          set: function (t) {
            if (O && t && u(t)) {
              C("beforeConfig", false, t);
              if (f != null) {
                f.setConfig(t);
              }
            }
          },
          config: function (t) {
            if (O) {
              if (t && u(t)) {
                C("beforeConfig", false, t);
                if (f != null) {
                  f.setConfig(m(t));
                }
              }
              if (f == null) {
                return undefined;
              } else {
                return f.getConfig();
              }
            }
          },
          provide: function (t, e) {
            if (p(x, t)) {
              y("cannot provide " + t + ", reserved");
              return;
            }
            P[t] = e;
            C("provide", false, t);
          },
          start: function () {
            var t = this;
            if (O && !E) {
              if (f != null) {
                f.onReady(function () {
                  E = true;
                  C("start", true);
                  R.forEach(function (e) {
                    return t.build(e);
                  });
                  R.length = 0;
                });
              }
            }
          },
          report: function (t) {
            if (t) {
              var e = _(S.beforeReport)(t);
              if (e) {
                var n = _(S.report)(e);
                if (n) {
                  if (E) {
                    this.build(n);
                  } else {
                    R.push(n);
                  }
                }
              }
            }
          },
          build: function (t) {
            if (!E) {
              return;
            }
            var e = _(S.beforeBuild)(t);
            if (e) {
              var n = l.build(e);
              if (n) {
                var r = _(S.build)(n);
                if (r) {
                  this.send(r);
                }
              }
            }
          },
          send: function (t) {
            if (E) {
              var e = _(S.beforeSend)(t);
              if (e) {
                c.send(e);
                C("send", false, e);
              }
            }
          },
          destroy: function () {
            L.clear();
            j = true;
            R.length = 0;
            C("beforeDestroy", true);
          },
          on: function (t, e) {
            if (t === "init" && O || t === "start" && E || t === "beforeDestroy" && j) {
              try {
                e();
              } catch (t) {}
            } else if (S[t]) {
              S[t].push(e);
            }
          },
          off: function (t, e) {
            S[t] &&= d(S[t], e);
          },
          destroyAgent: L
        };
        x = Object.keys(P);
        return P;
        function C(t, e = false) {
          var n = [];
          var o = 2;
          for (; o < arguments.length; o++) {
            n[o - 2] = arguments[o];
          }
          S[t].forEach(function (t) {
            try {
              t.apply(undefined, i([], r(n), false));
            } catch (t) {}
          });
          if (e) {
            S[t].length = 0;
          }
        }
      }({
        validateInitConfig: W,
        initConfigNormalizer: V,
        userConfigNormalizer: X,
        createSender: a,
        builder: c,
        createDefaultConfig: f === undefined ? tf : f,
        createConfigManager: tr
      });
      O(l);
      tc(l);
      ts(l);
      (function (t, e) {
        t.on("init", function () {
          var e = [];
          function n(n) {
            n.forEach(function (n) {
              var r = n.name;
              if (!p(e, r)) {
                e.push(r);
                n.setup(t);
                t.destroyAgent.set(r, r, [function () {
                  e = d(e, r);
                  if (n.tearDown) {
                    n.tearDown();
                  }
                }]);
              }
            });
          }
          t.provide("applyIntegrations", n);
          var r = t.config();
          if (r && r.integrations) {
            n(r.integrations);
          }
        });
      })(l);
      return l;
    }
    function th(t = {}) {
      var e = tl(t);
      H(e);
      C(e);
      return e;
    }
    var tp = th();
    e.BATCH_REPORT_PATH = G;
    e.CustomPlugin = C;
    e.DEFAULT_SAMPLE_CONFIG = K;
    e.DEFAULT_SAMPLE_GRANULARITY = J;
    e.DEFAULT_SENDER_SIZE = 20;
    e.InjectConfigPlugin = tc;
    e.InjectEnvPlugin = ts;
    e.REPORT_DOMAIN = q;
    e.SDK_NAME = F;
    e.SDK_VERSION = B;
    e.SETTINGS_DOMAIN = q;
    e.SETTINGS_PATH = z;
    e.addConfigToReportEvent = tu;
    e.addEnvToSendEvent = ta;
    e.builder = M;
    e.createBaseClient = th;
    e.createConfigManager = tr;
    e.createMinimalClient = tl;
    e.default = tp;
    e.getDefaultConfig = tf;
    e.getDefaultDeviceId = tt;
    e.getDefaultSessionId = tn;
    e.getDefaultUserId = Z;
    e.getReportUrl = Q;
    e.getServerConfig = ti;
    e.getSettingsUrl = $;
    e.getViewId = te;
    e.mergeSampleConfig = to;
    e.normalizeInitConfig = V;
    e.normalizeUserConfig = X;
    e.parseServerConfig = Y;
    e.validateInitConfig = W;
  });
  var iX = function () {
    function t() {
      this.isInit = false;
      this.pid = "0";
      this.filename = "";
    }
    t.prototype.init = function (t, e, n) {
      if (!this.isInit) {
        var u = (n == null ? undefined : n.commonOptions)?.aid;
        var c = (n == null ? undefined : n.commonOptions)?.repoId || (n == null ? undefined : n.commonOptions)?.pageId;
        var f = (n == null ? undefined : n.captchaOptions)?.logConfig || {};
        var l = f.domain;
        var h = f.uid;
        this.isInit = true;
        this.pid = "2385";
        this.browserSlardar = iW.createBaseClient();
        var p = {
          transport: {
            get: function (t) {
              var n = t.url;
              var r = t.success;
              var i = t.fail;
              e(n, {
                withCredentials: t.withCredentials
              }).then(function (t) {
                if (t) {
                  r(t);
                } else {
                  r({});
                }
              }).catch(function (t) {
                i(t);
              });
            },
            post: function (e) {
              t(e.url, JSON.parse(e.data)).catch(function (t) {});
            }
          },
          bid: "verify_center_cn",
          pid: this.pid,
          release: "4.0.16",
          useLocalConfig: false
        };
        if (l) {
          p.domain = l;
        }
        var d = (n == null ? undefined : n.commonOptions)?.did;
        if (d && d !== "0") {
          p.deviceId = d;
          p.userId = d;
        }
        if (h) {
          p.userId = h;
        }
        this.browserSlardar.init(p);
        this.browserSlardar.context.merge({
          belong: "hotsdk",
          appId: u ? String(u) : "unknown",
          itemId: c ? String(c) : "0",
          host: window.location.host,
          path: decodeURIComponent(window.location.pathname)
        });
      }
    };
    t.prototype.report = function (t, e) {
      var n = this.browserSlardar.context;
      if (e) {
        n.set("mark", e);
      }
      this.browserSlardar.report(t);
      if (e) {
        n.delete("mark");
      }
    };
    t.prototype.start = function (t) {
      var e = this;
      this.browserSlardar.start();
      if (!t) {
        this.reportPageview();
        window.__VC_LOG__REPORT__ = this;
        window.addEventListener("error", function (t) {
          if (t && Object.prototype.toString.call(t).slice(8, -1) === "ErrorEvent" && e.filename && t.filename === e.filename) {
            e.reportJsError({
              message: t.message,
              stack: t.error?.stack,
              filename: t.filename
            }, "global-error");
          }
        }, true);
      }
    };
    t.prototype.destroy = function () {
      this.browserSlardar.destroy();
    };
    t.prototype.reportPageview = function () {
      this.report({
        ev_type: "pageview",
        payload: {
          pid: this.pid,
          source: "init"
        }
      }, "slardar-init");
    };
    t.prototype.reportJsError = function (t, e) {
      this.report({
        ev_type: "js_error",
        payload: {
          error: {
            name: "JS ERROR",
            message: t.message,
            stack: t.stack,
            filename: t.filename || this.filename
          },
          breadcrumbs: []
        }
      }, e);
    };
    t.prototype.reportHttp = function (t, e) {
      this.report({
        ev_type: "http",
        payload: {
          api: "xhr",
          request: {
            method: t.method,
            url: t.url,
            timestamp: Date.now() - t.duration
          },
          response: {
            status: t.status,
            is_custom_error: false,
            timestamp: Date.now(),
            timing: {
              duration: t.duration
            }
          },
          duration: t.duration
        }
      }, e);
    };
    t.prototype.reportResourceError = function (t, e) {
      this.report({
        ev_type: "resource_error",
        payload: {
          type: "script",
          url: t
        }
      }, e);
    };
    t.prototype.reportResource = function (t, e) {
      var n = {
        entryType: "resource",
        name: t.url,
        duration: t.duration,
        startTime: t.startTime
      };
      try {
        var r = performance.getEntriesByType("resource");
        var i = 0;
        for (; i < r.length; i++) {
          if (r[i].name === t.url) {
            n = r[i];
            break;
          }
        }
      } catch (t) {}
      this.report({
        ev_type: "resource",
        payload: n
      }, e);
    };
    t.prototype.setFileName = function (t) {
      this.filename = t;
    };
    t.prototype.setContext = function (t, e) {
      var n;
      this.browserSlardar.context.merge(((n = {})[t] = e, n));
    };
    return t;
  }();
  var iY = new iX();
  var iQ = {
    verify: {
      back_up_js_v2: {
        cn: ["https://lf-rc2.yhgfb-cn-static.com/obj/rc-verifycenter/verifycenter/@latest/index.js", "https://lf-cdn-tos.bytescm.com/obj/rc-verifycenter/verifycenter/@latest/index.js"]
      },
      js_v2: {
        cn: "https://lf-rc1.yhgfb-cn-static.com/obj/rc-verifycenter/verifycenter/@latest/index.js"
      }
    }
  };
  function i$(t, e) {
    var n = {
      exports: {}
    };
    var r = Function("exports", "module", t);
    try {
      r(n.exports, n);
    } catch (t) {
      e.reportJsError({
        message: t == null ? undefined : t.message,
        stack: t == null ? undefined : t.stack,
        filename: t == null ? undefined : t.filename
      });
    }
    return n;
  }
  function iZ(t) {
    var e = this;
    this.config = {
      setting_host: "",
      static_domain: "",
      executor: "script"
    };
    this.domain = "";
    this.scene_level = "";
    this.set = function (t) {
      if (t == null ? undefined : t.setting_host) {
        e.config.setting_host = t.setting_host;
      }
      if (t == null ? undefined : t.static_domain) {
        e.config.static_domain = t.static_domain;
      }
      if (t == null ? undefined : t.executor) {
        e.config.executor = t.executor;
      }
    };
    this.load = function (t) {
      return e.loadSetting(t).then(function (n) {
        return e.loadSDK(n, t);
      });
    };
    this.loadSetting = function (t) {
      var n;
      var r;
      var i = e.config;
      var o = t.setting_host;
      var a = t.commonOptions;
      return (n = o || i.setting_host, r = e.slardar, iG(`${n || "https://vcs.zijieapi.com"}${iq.setting}`, {}, {
        slardar: r,
        params: a,
        headers: {
          "X-Setting-Flag": 1
        }
      })).then(function (t) {
        if ((r = (t == null ? undefined : t.verify)?.js_v2) === null || r === undefined || !r.cn) {
          return iQ.verify;
        }
        e.scene_level = t.verify.scene_level || "p2";
        var r;
        var i = (t.h5_resources || []).filter(function (t) {
          return t.name === "captcha.zip";
        });
        if (i.length === 1) {
          var o = i[0].url.match(/\/([\d.]+)\//);
          if (o) {
            e.captcha_version = o[1];
          }
        }
        return t.verify;
      }).catch(function () {
        return iQ.verify;
      });
    };
    this.loadSDK = function (t, n) {
      var i = e.config;
      var o = t.js_v2.cn;
      var a = t.back_up_js_v2?.cn || [];
      var s = o.match(/\/\/([\w-]+(\.[\w-]+)+)/)[1];
      e.domain = s;
      var u = i.static_domain || n.static_domain;
      if (u && s) {
        o = o.replace(s, u);
      }
      if (n.rmc_version) {
        o = o.replace(/\/[\d.]+\//, `/${n.rmc_version}/`);
      }
      var c = [o].concat(a);
      var f = "";
      function l(r) {
        if (!(r.length > 0)) {
          return iA.reject(n.isPrefetch ? f : "failed to load sdk");
        }
        var i = r.shift();
        f = i;
        return e.loadScript(i, n.isPrefetch, t).catch(function () {
          return l(r);
        });
      }
      return l(c);
    };
    this.prefetchCaptchaCdn = function () {
      var t = "";
      function n(r) {
        if (r.length === 0) {
          return iA.reject(t);
        }
        var i = r.pop();
        t = `https://${i}/obj/rc-verifycenter/rmc-captcha/${e.captcha_version || "@latest"}/captcha.js`;
        return e.loadScript(t, true).catch(function () {
          return n(r);
        });
      }
      return n(["lf-rc2.yhgfb-cn-static.com", "lf-rc1.yhgfb-cn-static.com", "lf-cdn-tos.bytescm.com"]);
    };
    this.loadScript = function (t, n, r) {
      if (n) {
        return iz(t);
      }
      e.slardar.setFileName(t);
      var i;
      var o = e.config;
      var a = o.static_domain;
      var s = o.executor;
      var u = e.domain;
      var c = Date.now();
      return (i = s !== "script" || a ? iz(t, {
        timeout: 20000
      }).then(function (t) {
        if (a && a !== u) {
          var n = RegExp(u, "g");
          t = t.replace(n, a);
        }
        return i$(t, e.slardar).exports;
      }) : new iA(function (e, n) {
        var r = document.getElementsByTagName("head")[0];
        var i = document.createElement("script");
        i.setAttribute("crossorigin", "anonymous");
        i.setAttribute("src", t);
        r.appendChild(i);
        var o = setTimeout(function () {
          n(Error("LoadJSSDKMoreTan4000ms"));
        }, 4000);
        i.onload = function () {
          clearTimeout(o);
          e(0);
        };
        i.onerror = function () {
          clearTimeout(o);
          n(Error("Failed to load SDK!"));
        };
      }).then(function () {
        return window.verifySDK;
      })).then(function (n) {
        e.slardar.reportResource({
          url: t,
          startTime: Date.now(),
          duration: Date.now() - c
        }, "verifycenter-load");
        if (window.verifySDK && r) {
          window.verifySDK.setting = r;
          window.verifySDK.captcha_version = e.captcha_version;
        }
        return n;
      }).catch(function (n) {
        e.slardar.reportResourceError(t, "verifycenter-load");
        return iA.reject(n);
      });
    };
    this.slardar = t.slardar;
  }
  var i0 = new iZ({
    slardar: iY
  });
  function i1(t) {
    var e = this;
    this.getFp = function () {
      if (e.options.captchaOptions) {
        return e.options.captchaOptions.fp;
      }
    };
    this.get = function () {
      return e.options;
    };
    var n = t.captchaOptions;
    if (n) {
      var r = T(T({}, n), {
        h5_check_version: "4.0.16"
      });
      t = T(T({}, t), {
        captchaOptions: r
      });
    }
    this.options = t;
  }
  var i2 = tY("iterator");
  var i3 = !X(function () {
    var t = new URL("b?a=1&b=2&c=3", "http://a");
    var e = t.searchParams;
    var n = "";
    t.pathname = "c%20d";
    e.forEach(function (t, r) {
      e.delete("b");
      n += r + t;
    });
    return !t.toJSON || !e.sort || t.href !== "http://a/c%20d?a=1&c=3" || e.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !e[i2] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("http://x", undefined).host !== "x";
  });
  var i6 = Object.assign;
  var i5 = Object.defineProperty;
  var i4 = V([].concat);
  var i7 = !i6 || X(function () {
    if (Y && i6({
      b: 1
    }, i6(i5({}, "a", {
      enumerable: true,
      get: function () {
        i5(this, "b", {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) {
      return true;
    }
    var t = {};
    var e = {};
    var n = Symbol();
    var r = "abcdefghijklmnopqrst";
    t[n] = 7;
    r.split("").forEach(function (t) {
      e[t] = t;
    });
    return i6({}, t)[n] != 7 || eK(i6({}, e)).join("") != r;
  }) ? function (t, e) {
    var n = tM(t);
    var r = arguments.length;
    var i = 1;
    var o = eF.f;
    var a = te.f;
    while (r > i) {
      var s;
      var u = tu(arguments[i++]);
      var c = o ? i4(eK(u), o(u)) : eK(u);
      var f = c.length;
      var l = 0;
      while (f > l) {
        s = c[l++];
        if (!Y || $(a, u, s)) {
          n[s] = u[s];
        }
      }
    }
    return n;
  } : i6;
  function i8(t, e, n, r) {
    try {
      if (r) {
        return e(es(n)[0], n[1]);
      } else {
        return e(n);
      }
    } catch (e) {
      nv(t, "throw", e);
    }
  }
  function i9(t, e, n) {
    var r = t0(e);
    if (r in t) {
      ef.f(t, r, tn(0, n));
    } else {
      t[r] = n;
    }
  }
  var ot = N.Array;
  function oe(t) {
    var e;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s = tM(t);
    var u = ry(this);
    var c = arguments.length;
    var f = c > 1 ? arguments[1] : undefined;
    var l = f !== undefined;
    if (l) {
      f = ei(f, c > 2 ? arguments[2] : undefined);
    }
    var h = nh(s);
    var p = 0;
    if (h && (this != ot || !nn(h))) {
      o = (i = nd(s, h)).next;
      n = u ? new this() : [];
      for (; !(r = $(o, i)).done; p++) {
        a = l ? i8(i, f, [r.value, p], true) : r.value;
        i9(n, p, a);
      }
    } else {
      e = eT(s);
      n = u ? new this(e) : ot(e);
      for (; e > p; p++) {
        a = l ? f(s[p], p) : s[p];
        i9(n, p, a);
      }
    }
    n.length = p;
    return n;
  }
  var on = N.Array;
  var or = Math.max;
  function oi(t, e, n) {
    var r = eT(t);
    var i = eC(e, r);
    var o = eC(n === undefined ? r : n, r);
    var a = on(or(o - i, 0));
    var s = 0;
    for (; i < o; i++, s++) {
      i9(a, s, t[i]);
    }
    a.length = s;
    return a;
  }
  var oo = /[^\0-\u007E]/;
  var oa = /[.\u3002\uFF0E\uFF61]/g;
  var os = "Overflow: input needs wider integers to process";
  var ou = N.RangeError;
  var oc = V(oa.exec);
  var of = Math.floor;
  var ol = String.fromCharCode;
  var oh = V("".charCodeAt);
  var op = V([].join);
  var od = V([].push);
  var ov = V("".replace);
  var og = V("".split);
  var om = V("".toLowerCase);
  function oy(t) {
    var e = [];
    var n = 0;
    var r = t.length;
    while (n < r) {
      var i = oh(t, n++);
      if (i >= 55296 && i <= 56319 && n < r) {
        var o = oh(t, n++);
        if ((o & 64512) == 56320) {
          od(e, ((i & 1023) << 10) + (o & 1023) + 65536);
        } else {
          od(e, i);
          n--;
        }
      } else {
        od(e, i);
      }
    }
    return e;
  }
  function ob(t) {
    return t + 22 + (t < 26) * 75;
  }
  function ow(t, e, n) {
    var r = 0;
    t = n ? of(t / 700) : t >> 1;
    t += of(t / e);
    while (t > 455) {
      t = of(t / 35);
      r += 36;
    }
    return of(r + t * 36 / (t + 38));
  }
  function o_(t) {
    var e;
    var n;
    var r = [];
    var i = (t = oy(t)).length;
    var o = 128;
    var a = 0;
    var s = 72;
    for (e = 0; e < t.length; e++) {
      if ((n = t[e]) < 128) {
        od(r, ol(n));
      }
    }
    var u = r.length;
    var c = u;
    for (u && od(r, "-"); c < i;) {
      var f = 2147483647;
      for (e = 0; e < t.length; e++) {
        if ((n = t[e]) >= o && n < f) {
          f = n;
        }
      }
      var l = c + 1;
      if (f - o > of((2147483647 - a) / l)) {
        throw ou(os);
      }
      a += (f - o) * l;
      o = f;
      e = 0;
      for (; e < t.length; e++) {
        if ((n = t[e]) < o && ++a > 2147483647) {
          throw ou(os);
        }
        if (n == o) {
          var h = a;
          var p = 36;
          while (true) {
            var d = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
            if (h < d) {
              break;
            }
            var v = h - d;
            var g = 36 - d;
            od(r, ol(ob(d + v % g)));
            h = of(v / g);
            p += 36;
          }
          od(r, ol(ob(h)));
          s = ow(a, l, c == u);
          a = 0;
          c++;
        }
      }
      a++;
      o++;
    }
    return op(r, "");
  }
  function oS(t) {
    var e;
    var n;
    var r = [];
    var i = og(ov(om(t), oa, "."), ".");
    for (e = 0; e < i.length; e++) {
      od(r, oc(oo, n = i[e]) ? "xn--" + o_(n) : n);
    }
    return op(r, ".");
  }
  var oO = Math.floor;
  function oE(t, e) {
    var n = t.length;
    var r = oO(n / 2);
    if (n < 8) {
      return oj(t, e);
    } else {
      return oR(t, oE(oi(t, 0, r), e), oE(oi(t, r), e), e);
    }
  }
  function oj(t, e) {
    var n;
    var r;
    var i = t.length;
    var o = 1;
    while (o < i) {
      r = o;
      n = t[o];
      while (r && e(t[r - 1], n) > 0) {
        t[r] = t[--r];
      }
      if (r !== o++) {
        t[r] = n;
      }
    }
    return t;
  }
  function oR(t, e, n, r) {
    var i = e.length;
    var o = n.length;
    var a = 0;
    var s = 0;
    while (a < i || s < o) {
      t[a + s] = a < i && s < o ? r(e[a], n[s]) <= 0 ? e[a++] : n[s++] : a < i ? e[a++] : n[s++];
    }
    return t;
  }
  var ox = tY("iterator");
  var oL = "URLSearchParams";
  var oP = oL + "Iterator";
  var oC = nB(oL);
  var ok = nB(oP);
  var oT = tv("fetch");
  var oA = tv("Request");
  var oI = tv("Headers");
  var oD = oA && oA.prototype;
  var oU = oI && oI.prototype;
  var oN = N.RegExp;
  var oH = N.TypeError;
  var oM = N.decodeURIComponent;
  var oq = N.encodeURIComponent;
  var oB = V("".charAt);
  var oF = V([].join);
  var oz = V([].push);
  var oG = V("".replace);
  var oK = V([].shift);
  var oJ = V([].splice);
  var oV = V("".split);
  var oW = V("".slice);
  var oX = /\+/g;
  var oY = [,,,,];
  function oQ(t) {
    try {
      return oM(t);
    } catch (e) {
      return t;
    }
  }
  function o$(t) {
    var e;
    var n = oG(t, oX, " ");
    var r = 4;
    try {
      return oM(n);
    } catch (t) {
      while (r) {
        n = oG(n, oY[(e = r--) - 1] || (oY[e - 1] = oN("((?:%[\\da-f]{2}){" + e + "})", "gi")), oQ);
      }
      return n;
    }
  }
  var oZ = /[!'()~]|%20/g;
  var o0 = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  function o1(t) {
    return o0[t];
  }
  function o2(t) {
    return oG(oq(t), oZ, o1);
  }
  function o3(t, e) {
    if (t < e) {
      throw oH("Not enough arguments");
    }
  }
  var o6 = n1(function (t, e) {
    nq(this, {
      type: oP,
      iterator: nd(oC(t).entries),
      kind: e
    });
  }, "Iterator", function () {
    var t = ok(this);
    var e = t.kind;
    var n = t.iterator.next();
    var r = n.value;
    if (!n.done) {
      n.value = e === "keys" ? r.key : e === "values" ? r.value : [r.key, r.value];
    }
    return n;
  }, true);
  function o5(t) {
    this.entries = [];
    this.url = null;
    if (t !== undefined) {
      if (th(t)) {
        this.parseObject(t);
      } else {
        this.parseQuery(typeof t == "string" ? oB(t, 0) === "?" ? oW(t, 1) : t : n_(t));
      }
    }
  }
  o5.prototype = {
    type: oL,
    bindURL: function (t) {
      this.url = t;
      this.update();
    },
    parseObject: function (t) {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u = nh(t);
      if (u) {
        for (n = (e = nd(t, u)).next; !(r = $(n, e)).done;) {
          if ((a = $(o = (i = nd(es(r.value))).next, i)).done || (s = $(o, i)).done || !$(o, i).done) {
            throw oH("Expected sequence with length 2");
          }
          oz(this.entries, {
            key: n_(a.value),
            value: n_(s.value)
          });
        }
      } else {
        for (var c in t) {
          if (tB(t, c)) {
            oz(this.entries, {
              key: c,
              value: n_(t[c])
            });
          }
        }
      }
    },
    parseQuery: function (t) {
      if (t) {
        var e;
        var n;
        var r = oV(t, "&");
        var i = 0;
        while (i < r.length) {
          if ((e = r[i++]).length) {
            n = oV(e, "=");
            oz(this.entries, {
              key: o$(oK(n)),
              value: o$(oF(n, "="))
            });
          }
        }
      }
    },
    serialize: function () {
      var t;
      var e = this.entries;
      var n = [];
      var r = 0;
      while (r < e.length) {
        oz(n, o2((t = e[r++]).key) + "=" + o2(t.value));
      }
      return oF(n, "&");
    },
    update: function () {
      this.entries.length = 0;
      this.parseQuery(this.url.query);
    },
    updateURL: function () {
      if (this.url) {
        this.url.update();
      }
    }
  };
  function o4() {
    ro(this, o7);
    var t = arguments.length > 0 ? arguments[0] : undefined;
    nq(this, new o5(t));
  }
  var o7 = o4.prototype;
  rn(o7, {
    append: function (t, e) {
      o3(arguments.length, 2);
      var n = oC(this);
      oz(n.entries, {
        key: n_(t),
        value: n_(e)
      });
      n.updateURL();
    },
    delete: function (t) {
      o3(arguments.length, 1);
      var e = oC(this);
      var n = e.entries;
      var r = n_(t);
      var i = 0;
      while (i < n.length) {
        if (n[i].key === r) {
          oJ(n, i, 1);
        } else {
          i++;
        }
      }
      e.updateURL();
    },
    get: function (t) {
      o3(arguments.length, 1);
      var e = oC(this).entries;
      var n = n_(t);
      var r = 0;
      for (; r < e.length; r++) {
        if (e[r].key === n) {
          return e[r].value;
        }
      }
      return null;
    },
    getAll: function (t) {
      o3(arguments.length, 1);
      var e = oC(this).entries;
      var n = n_(t);
      var r = [];
      var i = 0;
      for (; i < e.length; i++) {
        if (e[i].key === n) {
          oz(r, e[i].value);
        }
      }
      return r;
    },
    has: function (t) {
      o3(arguments.length, 1);
      var e = oC(this).entries;
      var n = n_(t);
      var r = 0;
      while (r < e.length) {
        if (e[r++].key === n) {
          return true;
        }
      }
      return false;
    },
    set: function (t, e) {
      o3(arguments.length, 1);
      var n;
      var r = oC(this);
      var i = r.entries;
      var o = false;
      var a = n_(t);
      var s = n_(e);
      var u = 0;
      for (; u < i.length; u++) {
        if ((n = i[u]).key === a) {
          if (o) {
            oJ(i, u--, 1);
          } else {
            o = true;
            n.value = s;
          }
        }
      }
      if (!o) {
        oz(i, {
          key: a,
          value: s
        });
      }
      r.updateURL();
    },
    sort: function () {
      var t = oC(this);
      oE(t.entries, function (t, e) {
        if (t.key > e.key) {
          return 1;
        } else {
          return -1;
        }
      });
      t.updateURL();
    },
    forEach: function (t) {
      var e;
      var n = oC(this).entries;
      var r = ei(t, arguments.length > 1 ? arguments[1] : undefined);
      var i = 0;
      while (i < n.length) {
        r((e = n[i++]).value, e.key, this);
      }
    },
    keys: function () {
      return new o6(this, "keys");
    },
    values: function () {
      return new o6(this, "values");
    },
    entries: function () {
      return new o6(this, "entries");
    }
  }, {
    enumerable: true
  });
  nK(o7, ox, o7.entries, {
    name: "entries"
  });
  nK(o7, "toString", function () {
    return oC(this).serialize();
  }, {
    enumerable: true
  });
  nZ(o4, oL);
  ep({
    global: true,
    forced: !i3
  }, {
    URLSearchParams: o4
  });
  if (!i3 && W(oI)) {
    var o8 = V(oU.has);
    var o9 = V(oU.set);
    function at(t) {
      if (th(t)) {
        var e;
        var n = t.body;
        if (nf(n) === oL) {
          if (!o8(e = t.headers ? new oI(t.headers) : new oI(), "content-type")) {
            o9(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
          }
          return e2(t, {
            body: tn(0, n_(n)),
            headers: tn(0, e)
          });
        }
      }
      return t;
    }
    if (W(oT)) {
      ep({
        global: true,
        enumerable: true,
        forced: true
      }, {
        fetch: function (t) {
          return oT(t, arguments.length > 1 ? at(arguments[1]) : {});
        }
      });
    }
    if (W(oA)) {
      function ae(t) {
        ro(this, oD);
        return new oA(t, arguments.length > 1 ? at(arguments[1]) : {});
      }
      oD.constructor = ae;
      ae.prototype = oD;
      ep({
        global: true,
        forced: true
      }, {
        Request: ae
      });
    }
  }
  var an = iP.codeAt;
  var ar = nB("URL");
  var ai = N.URL;
  var ao = N.TypeError;
  var aa = N.parseInt;
  var as = Math.floor;
  var au = Math.pow;
  var ac = V("".charAt);
  var af = V(/./.exec);
  var al = V([].join);
  var ah = V(1 .toString);
  var ap = V([].pop);
  var ad = V([].push);
  var av = V("".replace);
  var ag = V([].shift);
  var am = V("".split);
  var ay = V("".slice);
  var ab = V("".toLowerCase);
  var aw = V([].unshift);
  var a_ = "Invalid scheme";
  var aS = "Invalid host";
  var aO = "Invalid port";
  var aE = /[a-z]/i;
  var aj = /[\d+-.a-z]/i;
  var aR = /\d/;
  var ax = /^0x/i;
  var aL = /^[0-7]+$/;
  var aP = /^\d+$/;
  var aC = /^[\da-f]+$/i;
  var ak = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var aT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var aA = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
  var aI = /[\t\n\r]/g;
  function aD(t) {
    var e;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u = am(t, ".");
    if (u.length && u[u.length - 1] == "") {
      u.length--;
    }
    if ((e = u.length) > 4) {
      return t;
    }
    r = 0;
    n = [];
    for (; r < e; r++) {
      if ((i = u[r]) == "") {
        return t;
      }
      o = 10;
      if (i.length > 1 && ac(i, 0) == "0") {
        o = af(ax, i) ? 16 : 8;
        i = ay(i, o == 8 ? 1 : 2);
      }
      if (i === "") {
        a = 0;
      } else {
        if (!af(o == 10 ? aP : o == 8 ? aL : aC, i)) {
          return t;
        }
        a = aa(i, o);
      }
      ad(n, a);
    }
    for (r = 0; r < e; r++) {
      a = n[r];
      if (r == e - 1) {
        if (a >= au(256, 5 - e)) {
          return null;
        }
      } else if (a > 255) {
        return null;
      }
    }
    r = 0;
    s = ap(n);
    for (; r < n.length; r++) {
      s += n[r] * au(256, 3 - r);
    }
    return s;
  }
  function aU(t) {
    var e;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u = [0, 0, 0, 0, 0, 0, 0, 0];
    var c = 0;
    var f = null;
    var l = 0;
    function h() {
      return ac(t, l);
    }
    if (h() == ":") {
      if (ac(t, 1) != ":") {
        return;
      }
      l += 2;
      f = ++c;
    }
    while (h()) {
      if (c == 8) {
        return;
      }
      if (h() == ":") {
        if (f !== null) {
          return;
        }
        l++;
        f = ++c;
        continue;
      }
      for (e = n = 0; n < 4 && af(aC, h());) {
        e = e * 16 + aa(h(), 16);
        l++;
        n++;
      }
      if (h() == ".") {
        if (n == 0 || (l -= n, c > 6)) {
          return;
        }
        for (r = 0; h();) {
          i = null;
          if (r > 0) {
            if (h() != "." || !(r < 4)) {
              return;
            }
            l++;
          }
          if (!af(aR, h())) {
            return;
          }
          while (af(aR, h())) {
            o = aa(h(), 10);
            if (i === null) {
              i = o;
            } else {
              if (i == 0) {
                return;
              }
              i = i * 10 + o;
            }
            if (i > 255) {
              return;
            }
            l++;
          }
          u[c] = u[c] * 256 + i;
          if (++r == 2 || r == 4) {
            c++;
          }
        }
        if (r != 4) {
          return;
        }
        break;
      }
      if (h() == ":") {
        l++;
        if (!h()) {
          return;
        }
      } else if (h()) {
        return;
      }
      u[c++] = e;
    }
    if (f !== null) {
      a = c - f;
      c = 7;
      while (c != 0 && a > 0) {
        s = u[c];
        u[c--] = u[f + a - 1];
        u[f + --a] = s;
      }
    } else if (c != 8) {
      return;
    }
    return u;
  }
  function aN(t) {
    var e = null;
    var n = 1;
    var r = null;
    var i = 0;
    var o = 0;
    for (; o < 8; o++) {
      if (t[o] !== 0) {
        if (i > n) {
          e = r;
          n = i;
        }
        r = null;
        i = 0;
      } else {
        if (r === null) {
          r = o;
        }
        ++i;
      }
    }
    if (i > n) {
      e = r;
      n = i;
    }
    return e;
  }
  function aH(t) {
    var e;
    var n;
    var r;
    var i;
    if (typeof t == "number") {
      n = 0;
      e = [];
      for (; n < 4; n++) {
        aw(e, t % 256);
        t = as(t / 256);
      }
      return al(e, ".");
    }
    if (typeof t == "object") {
      n = 0;
      e = "";
      r = aN(t);
      for (; n < 8; n++) {
        if (!i || t[n] !== 0) {
          i &&= false;
          if (r === n) {
            e += n ? ":" : "::";
            i = true;
          } else {
            e += ah(t[n], 16);
            if (n < 7) {
              e += ":";
            }
          }
        }
      }
      return "[" + e + "]";
    }
    return t;
  }
  var aM = {};
  var aq = i7({}, aM, {
    " ": 1,
    "\"": 1,
    "<": 1,
    ">": 1,
    "`": 1
  });
  var aB = i7({}, aq, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  });
  var aF = i7({}, aB, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  });
  function az(t, e) {
    var n = an(t, 0);
    if (n > 32 && n < 127 && !tB(e, t)) {
      return t;
    } else {
      return encodeURIComponent(t);
    }
  }
  var aG = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };
  function aK(t, e) {
    var n;
    return t.length == 2 && af(aE, ac(t, 0)) && ((n = ac(t, 1)) == ":" || !e && n == "|");
  }
  function aJ(t) {
    var e;
    return t.length > 1 && aK(ay(t, 0, 2)) && (t.length == 2 || (e = ac(t, 2)) === "/" || e === "\\" || e === "?" || e === "#");
  }
  var aV = {};
  var aW = {};
  var aX = {};
  var aY = {};
  var aQ = {};
  var a$ = {};
  var aZ = {};
  var a0 = {};
  var a1 = {};
  var a2 = {};
  var a3 = {};
  var a6 = {};
  var a5 = {};
  var a4 = {};
  var a7 = {};
  var a8 = {};
  var a9 = {};
  var st = {};
  var se = {};
  var sn = {};
  var sr = {};
  function si(t, e, n) {
    var r;
    var i;
    var o;
    var a = n_(t);
    if (e) {
      if (i = this.parse(a)) {
        throw ao(i);
      }
      this.searchParams = null;
    } else {
      if (n !== undefined) {
        r = new si(n, true);
      }
      if (i = this.parse(a, null, r)) {
        throw ao(i);
      }
      (o = oC(new o4())).bindURL(this);
      this.searchParams = o;
    }
  }
  si.prototype = {
    type: "URL",
    parse: function (t, e, n) {
      var r = e || aV;
      var i = 0;
      var o = "";
      var a = false;
      var s = false;
      var u = false;
      t = n_(t);
      if (!e) {
        this.scheme = "";
        this.username = "";
        this.password = "";
        this.host = null;
        this.port = null;
        this.path = [];
        this.query = null;
        this.fragment = null;
        this.cannotBeABaseURL = false;
        t = av(t, aA, "");
      }
      c = oe(t = av(t, aI, ""));
      while (i <= c.length) {
        f = c[i];
        switch (r) {
          case aV:
            if (f && af(aE, f)) {
              o += ab(f);
              r = aW;
            } else {
              if (e) {
                return a_;
              }
              r = aX;
              continue;
            }
            break;
          case aW:
            if (f && (af(aj, f) || f == "+" || f == "-" || f == ".")) {
              o += ab(f);
            } else if (f == ":") {
              if (e && (this.isSpecial() != tB(aG, o) || o == "file" && (this.includesCredentials() || this.port !== null) || this.scheme == "file" && !this.host)) {
                return;
              }
              this.scheme = o;
              if (e) {
                if (this.isSpecial() && aG[this.scheme] == this.port) {
                  this.port = null;
                }
                return;
              }
              o = "";
              if (this.scheme == "file") {
                r = a4;
              } else if (this.isSpecial() && n && n.scheme == this.scheme) {
                r = aY;
              } else if (this.isSpecial()) {
                r = a0;
              } else if (c[i + 1] == "/") {
                r = aQ;
                i++;
              } else {
                this.cannotBeABaseURL = true;
                ad(this.path, "");
                r = se;
              }
            } else {
              if (e) {
                return a_;
              }
              o = "";
              r = aX;
              i = 0;
              continue;
            }
            break;
          case aX:
            if (!n || n.cannotBeABaseURL && f != "#") {
              return a_;
            }
            if (n.cannotBeABaseURL && f == "#") {
              this.scheme = n.scheme;
              this.path = oi(n.path);
              this.query = n.query;
              this.fragment = "";
              this.cannotBeABaseURL = true;
              r = sr;
              break;
            }
            r = n.scheme == "file" ? a4 : a$;
            continue;
          case aY:
            if (f == "/" && c[i + 1] == "/") {
              r = a1;
              i++;
            } else {
              r = a$;
              continue;
            }
            break;
          case aQ:
            if (f == "/") {
              r = a2;
              break;
            }
            r = st;
            continue;
          case a$:
            this.scheme = n.scheme;
            if (f == P) {
              this.username = n.username;
              this.password = n.password;
              this.host = n.host;
              this.port = n.port;
              this.path = oi(n.path);
              this.query = n.query;
            } else if (f == "/" || f == "\\" && this.isSpecial()) {
              r = aZ;
            } else if (f == "?") {
              this.username = n.username;
              this.password = n.password;
              this.host = n.host;
              this.port = n.port;
              this.path = oi(n.path);
              this.query = "";
              r = sn;
            } else if (f == "#") {
              this.username = n.username;
              this.password = n.password;
              this.host = n.host;
              this.port = n.port;
              this.path = oi(n.path);
              this.query = n.query;
              this.fragment = "";
              r = sr;
            } else {
              this.username = n.username;
              this.password = n.password;
              this.host = n.host;
              this.port = n.port;
              this.path = oi(n.path);
              this.path.length--;
              r = st;
              continue;
            }
            break;
          case aZ:
            if (this.isSpecial() && (f == "/" || f == "\\")) {
              r = a1;
            } else if (f == "/") {
              r = a2;
            } else {
              this.username = n.username;
              this.password = n.password;
              this.host = n.host;
              this.port = n.port;
              r = st;
              continue;
            }
            break;
          case a0:
            r = a1;
            if (f != "/" || ac(o, i + 1) != "/") {
              continue;
            }
            i++;
            break;
          case a1:
            if (f != "/" && f != "\\") {
              r = a2;
              continue;
            }
            break;
          case a2:
            if (f == "@") {
              if (a) {
                o = "%40" + o;
              }
              a = true;
              l = oe(o);
              var c;
              var f;
              var l;
              var h;
              var p;
              var d;
              var v = 0;
              for (; v < l.length; v++) {
                var g = l[v];
                if (g == ":" && !u) {
                  u = true;
                  continue;
                }
                var m = az(g, aF);
                if (u) {
                  this.password += m;
                } else {
                  this.username += m;
                }
              }
              o = "";
            } else if (f == P || f == "/" || f == "?" || f == "#" || f == "\\" && this.isSpecial()) {
              if (a && o == "") {
                return "Invalid authority";
              }
              i -= oe(o).length + 1;
              o = "";
              r = a3;
            } else {
              o += f;
            }
            break;
          case a3:
          case a6:
            if (e && this.scheme == "file") {
              r = a8;
              continue;
            }
            if (f != ":" || s) {
              if (f == P || f == "/" || f == "?" || f == "#" || f == "\\" && this.isSpecial()) {
                if (this.isSpecial() && o == "") {
                  return aS;
                }
                if (e && o == "" && (this.includesCredentials() || this.port !== null)) {
                  return;
                }
                if (h = this.parseHost(o)) {
                  return h;
                }
                o = "";
                r = a9;
                if (e) {
                  return;
                }
                continue;
              }
              if (f == "[") {
                s = true;
              } else if (f == "]") {
                s = false;
              }
              o += f;
            } else {
              if (o == "") {
                return aS;
              }
              if (h = this.parseHost(o)) {
                return h;
              }
              o = "";
              r = a5;
              if (e == a6) {
                return;
              }
            }
            break;
          case a5:
            if (af(aR, f)) {
              o += f;
            } else {
              if (f != P && f != "/" && f != "?" && f != "#" && (f != "\\" || !this.isSpecial()) && !e) {
                return aO;
              }
              if (o != "") {
                var y = aa(o, 10);
                if (y > 65535) {
                  return aO;
                }
                this.port = this.isSpecial() && y === aG[this.scheme] ? null : y;
                o = "";
              }
              if (e) {
                return;
              }
              r = a9;
              continue;
            }
            break;
          case a4:
            this.scheme = "file";
            if (f == "/" || f == "\\") {
              r = a7;
            } else if (n && n.scheme == "file") {
              if (f == P) {
                this.host = n.host;
                this.path = oi(n.path);
                this.query = n.query;
              } else if (f == "?") {
                this.host = n.host;
                this.path = oi(n.path);
                this.query = "";
                r = sn;
              } else if (f == "#") {
                this.host = n.host;
                this.path = oi(n.path);
                this.query = n.query;
                this.fragment = "";
                r = sr;
              } else {
                if (!aJ(al(oi(c, i), ""))) {
                  this.host = n.host;
                  this.path = oi(n.path);
                  this.shortenPath();
                }
                r = st;
                continue;
              }
            } else {
              r = st;
              continue;
            }
            break;
          case a7:
            if (f == "/" || f == "\\") {
              r = a8;
              break;
            }
            if (n && n.scheme == "file" && !aJ(al(oi(c, i), ""))) {
              if (aK(n.path[0], true)) {
                ad(this.path, n.path[0]);
              } else {
                this.host = n.host;
              }
            }
            r = st;
            continue;
          case a8:
            if (f == P || f == "/" || f == "\\" || f == "?" || f == "#") {
              if (!e && aK(o)) {
                r = st;
              } else if (o == "") {
                this.host = "";
                if (e) {
                  return;
                }
                r = a9;
              } else {
                if (h = this.parseHost(o)) {
                  return h;
                }
                if (this.host == "localhost") {
                  this.host = "";
                }
                if (e) {
                  return;
                }
                o = "";
                r = a9;
              }
              continue;
            }
            o += f;
            break;
          case a9:
            if (this.isSpecial()) {
              r = st;
              if (f != "/" && f != "\\") {
                continue;
              }
            } else if (e || f != "?") {
              if (e || f != "#") {
                if (f != P && (r = st, f != "/")) {
                  continue;
                }
              } else {
                this.fragment = "";
                r = sr;
              }
            } else {
              this.query = "";
              r = sn;
            }
            break;
          case st:
            if (f == P || f == "/" || f == "\\" && this.isSpecial() || !e && (f == "?" || f == "#")) {
              if ((p = ab(p = o)) === ".." || p === "%2e." || p === ".%2e" || p === "%2e%2e") {
                this.shortenPath();
                if (f != "/" && (f != "\\" || !this.isSpecial())) {
                  ad(this.path, "");
                }
              } else if ((d = o) === "." || ab(d) === "%2e") {
                if (f != "/" && (f != "\\" || !this.isSpecial())) {
                  ad(this.path, "");
                }
              } else {
                if (this.scheme == "file" && !this.path.length && aK(o)) {
                  this.host &&= "";
                  o = ac(o, 0) + ":";
                }
                ad(this.path, o);
              }
              o = "";
              if (this.scheme == "file" && (f == P || f == "?" || f == "#")) {
                while (this.path.length > 1 && this.path[0] === "") {
                  ag(this.path);
                }
              }
              if (f == "?") {
                this.query = "";
                r = sn;
              } else if (f == "#") {
                this.fragment = "";
                r = sr;
              }
            } else {
              o += az(f, aB);
            }
            break;
          case se:
            if (f == "?") {
              this.query = "";
              r = sn;
            } else if (f == "#") {
              this.fragment = "";
              r = sr;
            } else if (f != P) {
              this.path[0] += az(f, aM);
            }
            break;
          case sn:
            if (e || f != "#") {
              if (f != P) {
                if (f == "'" && this.isSpecial()) {
                  this.query += "%27";
                } else if (f == "#") {
                  this.query += "%23";
                } else {
                  this.query += az(f, aM);
                }
              }
            } else {
              this.fragment = "";
              r = sr;
            }
            break;
          case sr:
            if (f != P) {
              this.fragment += az(f, aq);
            }
        }
        i++;
      }
    },
    parseHost: function (t) {
      var e;
      var n;
      var r;
      if (ac(t, 0) == "[") {
        if (ac(t, t.length - 1) != "]" || !(e = aU(ay(t, 1, -1)))) {
          return aS;
        }
        this.host = e;
      } else if (this.isSpecial()) {
        if (af(ak, t = oS(t)) || (e = aD(t)) === null) {
          return aS;
        }
        this.host = e;
      } else {
        if (af(aT, t)) {
          return aS;
        }
        r = 0;
        e = "";
        n = oe(t);
        for (; r < n.length; r++) {
          e += az(n[r], aM);
        }
        this.host = e;
      }
    },
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || this.scheme == "file";
    },
    includesCredentials: function () {
      return this.username != "" || this.password != "";
    },
    isSpecial: function () {
      return tB(aG, this.scheme);
    },
    shortenPath: function () {
      var t = this.path;
      var e = t.length;
      if (e && (this.scheme != "file" || e != 1 || !aK(t[0], true))) {
        t.length--;
      }
    },
    serialize: function () {
      var t = this.scheme;
      var e = this.username;
      var n = this.password;
      var r = this.host;
      var i = this.port;
      var o = this.path;
      var a = this.query;
      var s = this.fragment;
      var u = t + ":";
      if (r !== null) {
        u += "//";
        if (this.includesCredentials()) {
          u += e + (n ? ":" + n : "") + "@";
        }
        u += aH(r);
        if (i !== null) {
          u += ":" + i;
        }
      } else if (t == "file") {
        u += "//";
      }
      u += this.cannotBeABaseURL ? o[0] : o.length ? "/" + al(o, "/") : "";
      if (a !== null) {
        u += "?" + a;
      }
      if (s !== null) {
        u += "#" + s;
      }
      return u;
    },
    setHref: function (t) {
      var e = this.parse(t);
      if (e) {
        throw ao(e);
      }
      this.searchParams.update();
    },
    getOrigin: function () {
      var t = this.scheme;
      var e = this.port;
      if (t == "blob") {
        try {
          return new so(t.path[0]).origin;
        } catch (t) {
          return "null";
        }
      }
      if (t != "file" && this.isSpecial()) {
        return t + "://" + aH(this.host) + (e !== null ? ":" + e : "");
      } else {
        return "null";
      }
    },
    getProtocol: function () {
      return this.scheme + ":";
    },
    setProtocol: function (t) {
      this.parse(n_(t) + ":", aV);
    },
    getUsername: function () {
      return this.username;
    },
    setUsername: function (t) {
      var e = oe(n_(t));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var n = 0; n < e.length; n++) {
          this.username += az(e[n], aF);
        }
      }
    },
    getPassword: function () {
      return this.password;
    },
    setPassword: function (t) {
      var e = oe(n_(t));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var n = 0; n < e.length; n++) {
          this.password += az(e[n], aF);
        }
      }
    },
    getHost: function () {
      var t = this.host;
      var e = this.port;
      if (t === null) {
        return "";
      } else if (e === null) {
        return aH(t);
      } else {
        return aH(t) + ":" + e;
      }
    },
    setHost: function (t) {
      if (!this.cannotBeABaseURL) {
        this.parse(t, a3);
      }
    },
    getHostname: function () {
      var t = this.host;
      if (t === null) {
        return "";
      } else {
        return aH(t);
      }
    },
    setHostname: function (t) {
      if (!this.cannotBeABaseURL) {
        this.parse(t, a6);
      }
    },
    getPort: function () {
      var t = this.port;
      if (t === null) {
        return "";
      } else {
        return n_(t);
      }
    },
    setPort: function (t) {
      if (!this.cannotHaveUsernamePasswordPort()) {
        if ((t = n_(t)) == "") {
          this.port = null;
        } else {
          this.parse(t, a5);
        }
      }
    },
    getPathname: function () {
      var t = this.path;
      if (this.cannotBeABaseURL) {
        return t[0];
      } else if (t.length) {
        return "/" + al(t, "/");
      } else {
        return "";
      }
    },
    setPathname: function (t) {
      if (!this.cannotBeABaseURL) {
        this.path = [];
        this.parse(t, a9);
      }
    },
    getSearch: function () {
      var t = this.query;
      if (t) {
        return "?" + t;
      } else {
        return "";
      }
    },
    setSearch: function (t) {
      if ((t = n_(t)) == "") {
        this.query = null;
      } else {
        if (ac(t, 0) == "?") {
          t = ay(t, 1);
        }
        this.query = "";
        this.parse(t, sn);
      }
      this.searchParams.update();
    },
    getSearchParams: function () {
      return this.searchParams.facade;
    },
    getHash: function () {
      var t = this.fragment;
      if (t) {
        return "#" + t;
      } else {
        return "";
      }
    },
    setHash: function (t) {
      if ((t = n_(t)) == "") {
        this.fragment = null;
        return;
      }
      if (ac(t, 0) == "#") {
        t = ay(t, 1);
      }
      this.fragment = "";
      this.parse(t, sr);
    },
    update: function () {
      this.query = this.searchParams.serialize() || null;
    }
  };
  function so(t) {
    var e = ro(this, sa);
    var n = arguments.length > 1 ? arguments[1] : undefined;
    var r = nq(e, new si(t, false, n));
    if (!Y) {
      e.href = r.serialize();
      e.origin = r.getOrigin();
      e.protocol = r.getProtocol();
      e.username = r.getUsername();
      e.password = r.getPassword();
      e.host = r.getHost();
      e.hostname = r.getHostname();
      e.port = r.getPort();
      e.pathname = r.getPathname();
      e.search = r.getSearch();
      e.searchParams = r.getSearchParams();
      e.hash = r.getHash();
    }
  }
  var sa = so.prototype;
  function ss(t, e) {
    return {
      get: function () {
        return ar(this)[t]();
      },
      set: e && function (t) {
        return ar(this)[e](t);
      },
      configurable: true,
      enumerable: true
    };
  }
  if (Y) {
    eJ(sa, {
      href: ss("serialize", "setHref"),
      origin: ss("getOrigin"),
      protocol: ss("getProtocol", "setProtocol"),
      username: ss("getUsername", "setUsername"),
      password: ss("getPassword", "setPassword"),
      host: ss("getHost", "setHost"),
      hostname: ss("getHostname", "setHostname"),
      port: ss("getPort", "setPort"),
      pathname: ss("getPathname", "setPathname"),
      search: ss("getSearch", "setSearch"),
      searchParams: ss("getSearchParams"),
      hash: ss("getHash", "setHash")
    });
  }
  nK(sa, "toJSON", function () {
    return ar(this).serialize();
  }, {
    enumerable: true
  });
  nK(sa, "toString", function () {
    return ar(this).serialize();
  }, {
    enumerable: true
  });
  if (ai) {
    var su = ai.createObjectURL;
    var sc = ai.revokeObjectURL;
    if (su) {
      nK(so, "createObjectURL", ei(su, ai));
    }
    if (sc) {
      nK(so, "revokeObjectURL", ei(sc, ai));
    }
  }
  nZ(so, "URL");
  ep({
    global: true,
    forced: !i3,
    sham: !Y
  }, {
    URL: so
  });
  var sf = tp.URL;
  function sl(t) {
    if (!t || !t.trim()) {
      return false;
    }
    try {
      return btoa(atob(t)) === t;
    } catch (t) {
      return false;
    }
  }
  function sh(t) {
    return t.map(function (t) {
      return new RegExp(t);
    });
  }
  function sp(t) {
    if (Array.isArray(t)) {
      t = {
        include: t,
        exclude: []
      };
    } else {
      var e = t.include;
      var n = t.exclude;
      t = {
        include: e || [],
        exclude: n || []
      };
    }
    if (window._vc_intercepted_pathList) {
      var r = window._vc_intercepted_pathList;
      var e = r.include;
      var n = r.exclude;
      t = {
        include: A(A([], e, true), t.include, true),
        exclude: A(A([], n, true), t.exclude, true)
      };
    }
    window._vc_intercepted_pathList = t;
  }
  function sd(t) {
    var e = t;
    try {
      e = new sf(t, window.location.href).pathname;
    } catch (t) {}
    var n = window._vc_intercepted_pathList;
    var r = n.include;
    var i = n.exclude;
    var o = sh(r);
    return !sh(i).some(function (t) {
      return t.test(e);
    }) && o.some(function (t) {
      return t.test(e);
    });
  }
  function sv(t, e, n, r) {
    t.render({
      verify_data: e,
      captchaOptions: {
        successCb: function () {
          n();
        },
        closeCb: function () {
          r();
        }
      },
      secondVerifyWebOptions: {
        callBack: function () {
          n();
        },
        closeCallBack: function () {
          r();
        }
      }
    });
  }
  function sg(t, e, n) {
    var r = n.getFp();
    function i(e) {
      t.getResponseHeader = function () {
        return e.getResponseHeader.apply(e, arguments);
      };
      t.getAllResponseHeaders = function () {
        return e.getAllResponseHeaders.apply(e, arguments);
      };
      function n(n) {
        Object.defineProperty(t, n, {
          get: function () {
            return e[n];
          },
          enumerable: true
        });
      }
      var r = 0;
      var i = ["readyState", "status", "statusText", "response", "responseText", "responseType", "responseURL", "responseXML"];
      for (; r < i.length; r++) {
        n(i[r]);
      }
    }
    var o = [];
    var a = false;
    function s() {
      a = true;
      o.forEach(function (t) {
        return t();
      });
    }
    function u() {
      var n = new XMLHttpRequest();
      if (t.withCredentials) {
        n.withCredentials = t.withCredentials;
      }
      if (t.timeout) {
        n.timeout = t.timeout;
      }
      n.onload = function () {
        i(n);
        s();
      };
      n.ontimeout = function () {
        s();
      };
      n.onabort = function () {
        s();
      };
      n.onerror = function (e) {
        var r;
        i(n);
        if ((r = t.onerror) !== null && r !== undefined) {
          r.call(t, e);
        }
      };
      e.forEach(function (t) {
        var e = [].slice.call(t.arguments);
        if (t.fnName !== "addEventListener" && t.fnName !== "removeEventListener") {
          n[t.fnName].apply(n, e);
        }
      });
    }
    function c() {
      var e = null;
      try {
        var r = t.getAllResponseHeaders();
        if (r.indexOf("bdturing-verify:") >= 0) {
          e = t.getResponseHeader("bdturing-verify");
        } else if (r.indexOf("x-vc-bdturing-parameters:") >= 0) {
          var i = t.getResponseHeader("x-vc-bdturing-parameters");
          e = i && sl(i) ? atob(i) : i;
        }
      } catch (t) {}
      if (e) {
        sv(n, e, u, s);
      } else {
        s();
      }
    }
    var f = {
      error: []
    };
    function l() {
      var e = t.onreadystatechange;
      var n = t.onload;
      var r = t.onloadend;
      var i = t.onerror;
      if (e) {
        t.onreadystatechange = function () {
          var n = arguments;
          function r() {
            e.apply(t, n);
          }
          if (!a && t.readyState === XMLHttpRequest.DONE && t.status >= 200 && t.status < 300) {
            o.push(r);
          } else {
            r();
          }
        };
      }
      t.onload = function () {
        var e = arguments;
        function r() {
          if (n) {
            n.apply(t, e);
          }
        }
        if (t.status >= 200 && t.status < 300) {
          if (!a) {
            o.push(r);
          }
          c();
        } else {
          r();
        }
      };
      t.onerror = function (e) {
        if (i) {
          i.call(t, e);
        }
        f.error.forEach(function (n) {
          n.call(t, e);
        });
      };
      if (r) {
        t.onloadend = function () {
          var e = arguments;
          function n() {
            r.apply(t, e);
          }
          if (!a && t.status >= 200 && t.status < 300) {
            o.push(n);
          } else {
            n();
          }
        };
      }
    }
    var h = {};
    e.forEach(function (e) {
      var n;
      var i;
      var s = [].slice.call(e.arguments);
      switch (e.fnName) {
        case "addEventListener":
        case "removeEventListener":
          var u = s[0];
          if (["readystatechange", "load", "loadend"].indexOf(u) >= 0) {
            if (e.fnName === "addEventListener") {
              h[u] ||= [];
              if ((n = h[u]) !== null && n !== undefined) {
                n.push({
                  origin: e.origin,
                  args: s
                });
              }
            } else {
              h[u] &&= (i = h[u]) === null || i === undefined ? undefined : i.filter(function (t) {
                return t.args[1] !== s[1];
              });
            }
          } else if (f[u]) {
            f[u].push(s[1]);
          } else {
            e.origin.apply(t, s);
          }
          break;
        case "open":
          var c = s[1];
          var p = c.indexOf("?") >= 0;
          var d = `verifyFp=${r}&fp=${r}`;
          if (p) {
            s[1] = `${c}&${d}`;
          } else {
            s[1] = `${c}?${d}`;
          }
          e.origin.apply(t, s);
          break;
        case "send":
          Object.keys(h).forEach(function (e) {
            var n;
            if ((n = h[e]) !== null && n !== undefined) {
              n.forEach(function (n) {
                var r = n.origin;
                var i = n.args;
                var s = i[1];
                i[1] = function () {
                  var n = arguments;
                  switch (e) {
                    case "readystatechange":
                      if (!a && t.readyState === XMLHttpRequest.DONE && t.status >= 200 && t.status < 300) {
                        o.push(function () {
                          s.apply(t, n);
                        });
                      } else {
                        s.apply(t, arguments);
                      }
                      break;
                    case "load":
                    case "loadend":
                      if (!a && t.status >= 200 && t.status < 300) {
                        o.push(function () {
                          s.apply(t, n);
                        });
                      } else {
                        s.apply(t, arguments);
                      }
                  }
                };
                r.apply(t, i);
              });
            }
          });
          l();
          delete t._vc_status;
          delete t._vc_actionList;
          e.origin.apply(t, s);
          break;
        default:
          e.origin.apply(t, s);
      }
    });
  }
  function sm(t, e) {
    var n = window.XMLHttpRequest.prototype;
    var r = n.open;
    var i = n.setRequestHeader;
    var o = n.overrideMimeType;
    var a = n.send;
    var s = n.addEventListener;
    var u = n.removeEventListener;
    if (!n._vc_intercepted) {
      n._vc_intercepted = true;
      n.open = function (e, n) {
        try {
          var i = typeof n == "string" ? n : n.toString();
          if (!t(i)) {
            return r.apply(this, arguments);
          }
          this._vc_status = 1;
          this._vc_actionList = [];
          this._vc_actionList.push({
            origin: r,
            fnName: "open",
            arguments: arguments
          });
        } catch (t) {
          return r.apply(this, arguments);
        }
      };
      n.overrideMimeType = function () {
        if (this._vc_status !== 1) {
          return o.apply(this, arguments);
        }
        this._vc_actionList.push({
          origin: o,
          fnName: "overrideMimeType",
          arguments: arguments
        });
      };
      n.setRequestHeader = function () {
        if (this._vc_status !== 1) {
          return i.apply(this, arguments);
        }
        this._vc_actionList.push({
          origin: i,
          fnName: "setRequestHeader",
          arguments: arguments
        });
      };
      n.addEventListener = function () {
        if (this._vc_status !== 1) {
          return s.apply(this, arguments);
        }
        this._vc_actionList.push({
          origin: s,
          fnName: "addEventListener",
          arguments: arguments
        });
      };
      n.removeEventListener = function () {
        if (this._vc_status !== 1) {
          return u.apply(this, arguments);
        }
        this._vc_actionList.push({
          origin: u,
          fnName: "removeEventListener",
          arguments: arguments
        });
      };
      n.send = function () {
        var t = this;
        if (this._vc_status !== 1) {
          return a.apply(this, arguments);
        }
        this._vc_actionList.push({
          origin: a,
          fnName: "send",
          arguments: arguments
        });
        function n() {
          sg(t, t._vc_actionList, e);
        }
        if (e.xhrAsyncSend) {
          Promise.resolve().then(n).catch(function () {
            return null;
          });
        } else {
          n();
        }
      };
    }
  }
  function sy(t, e) {
    if (!window._vc_intercepted_fetch) {
      window._vc_intercepted_fetch = true;
      var n = window.fetch;
      window.fetch = function () {
        var r;
        var i = [];
        var o = 0;
        for (; o < arguments.length; o++) {
          i[o] = arguments[o];
        }
        var a = i[0];
        if (t(r = a instanceof sf ? a.toString() : a instanceof Request ? a.url : a)) {
          return new Promise(function (t, o) {
            var a = e.getFp();
            var s = r.indexOf("?") >= 0;
            var u = `verifyFp=${a}&fp=${a}`;
            r = s ? `${r}&${u}` : `${r}?${u}`;
            var c = A([], i, true);
            if (c[0] instanceof sf) {
              c[0].search = new sf(r).search;
            } else if (!(c[0] instanceof Request)) {
              c[0] = r;
            }
            n.apply(undefined, c).then(function (n) {
              function r() {
                t(n);
              }
              if (n.ok) {
                try {
                  var o = null;
                  n.headers.forEach(function (t, e) {
                    if (e === "bdturing-verify") {
                      o = t;
                    } else if (e === "x-vc-bdturing-parameters") {
                      o = t && sl(t) ? atob(t) : t;
                    }
                  });
                  if (o) {
                    sv(e, o, function () {
                      t(window.fetch.apply(window, i));
                    }, r);
                  } else {
                    r();
                  }
                } catch (t) {
                  r();
                }
              } else {
                r();
              }
            }).catch(o);
          });
        } else {
          return n.apply(undefined, i);
        }
      };
    }
  }
  function sb(t, e) {
    sp(t);
    sm(sd, e);
    sy(sd, e);
  }
  function sw(t, e) {
    (e || i0).set({
      executor: t.executor,
      static_domain: t.static_domain,
      setting_host: t.settingHost
    });
  }
  function s_(t, e, n, r) {
    var a = (r == null ? undefined : r.slardar) || iY;
    var s = (r == null ? undefined : r.loader) || i0;
    var u = r == null ? undefined : r.options;
    a.init(iG, iz, t);
    a.start(t.isPrefetch);
    var c = t.captchaOptions?.hostConfig || {};
    var f = c.setting;
    var l = c.static_domain;
    var h = c.rmc_version;
    var p = window.verifySDK?.initVerifyOptions && !t.isPrefetch ? iA.resolve(window.verifySDK) : s.load({
      commonOptions: t.commonOptions || {},
      setting_host: f,
      static_domain: l,
      rmc_version: h,
      isPrefetch: t.isPrefetch,
      slardar: a
    });
    if (t.isPrefetch) {
      return p.then(function () {
        return {};
      });
    }
    k = p;
    if (!u) {
      C = new i1(t);
    }
    var d = t.interceptPathList;
    var v = t.xhrAsyncSend;
    if (d) {
      sb(d, {
        getFp: sE,
        render: sS,
        xhrAsyncSend: v
      });
    }
    return k.then(function (t) {
      var n = (u || C).get();
      if (n.commonOptions && s.scene_level) {
        if (!n.commonOptions.pageId) {
          n.commonOptions.repoId;
        }
        n.commonOptions.scene_level = s.scene_level;
        a.setContext("scene_level", s.scene_level);
      }
      if (n.captchaOptions && !n.captchaOptions.fp) {
        n.captchaOptions.fp = iV();
      }
      if (u) {
        if (e) {
          e(t);
        }
        return t.init(n);
      } else {
        if (r == null ? undefined : r.isInstance) {
          t = t.initVerifyCenter(n);
        } else {
          t.initVerifyOptions(n);
        }
        if (e) {
          e(t);
          return;
        } else {
          return t;
        }
      }
    }).catch(function (t) {
      if (n) {
        if (n != null) {
          n(t);
        }
      }
      return iA.reject(t);
    });
  }
  function sS(t) {
    k.then(function (e) {
      e.autoRender(t);
    }).catch(function () {});
  }
  function sO() {
    var t = sE();
    return iA.resolve(t);
  }
  function sE() {
    return (C == null ? undefined : C.getFp()) || iV();
  }
  var sj = function () {
    function t() {
      this.slardar = new iX();
      this.loader = new iZ({
        slardar: this.slardar
      });
    }
    t.prototype.config = function (t) {
      sw(t, this.loader);
      return this;
    };
    t.prototype.init = function (t, e) {
      var n = e === undefined ? {} : e;
      var r = n.errorCb;
      var i = n.successCb;
      this.options = new i1(t);
      this.instancePromise = s_(t, i, r, {
        slardar: this.slardar,
        loader: this.loader,
        options: this.options
      }).catch(function (t) {
        return iA.reject(t);
      });
      return this;
    };
    t.prototype.getFp = function () {
      var t = sE();
      return iA.resolve(t);
    };
    t.prototype.getFpSync = function () {
      var t;
      return ((t = this.options) === null || t === undefined ? undefined : t.getFp()) || iV();
    };
    t.prototype.render = function (t) {
      if (!this.instancePromise) {
        throw Error("[sec_sdk_build] 请先执行init初始化操作");
      }
      return this.instancePromise.then(function (e) {
        e.autoRender(t);
      }).catch(function (t) {
        return iA.reject(t);
      });
    };
    t.prototype.prefetch = function (t, e) {
      sR(t, e, {
        loader: this.loader,
        slardar: this.slardar
      });
    };
    t.config = function (t) {
      sw(t);
    };
    t.init = function (t, e, n) {
      return s_(t, e, n, {
        isInstance: true
      });
    };
    return t;
  }();
  function sR(t, e, n) {
    var r = (n == null ? undefined : n.loader) || i0;
    var i = (n == null ? undefined : n.slardar) || iY;
    function o(t) {
      i.reportJsError({
        filename: t.filename,
        message: t.message,
        stack: ""
      }, "prefetch-error");
      if (typeof (e == null ? undefined : e.errorCb) == "function") {
        e.errorCb(t);
      }
    }
    s_(T(T({}, t), {
      isPrefetch: true
    }), undefined, undefined, n).then(function () {
      r.prefetchCaptchaCdn().then(function () {
        if (typeof (e == null ? undefined : e.successCb) == "function") {
          e.successCb();
        }
      }).catch(function (t) {
        o({
          filename: t,
          name: "render_prefetch_err",
          message: "预加载验证码资源失败"
        });
      });
      return null;
    }).catch(function (t) {
      o({
        filename: t,
        name: "init_prefetch_err",
        message: "预加载初始化资源失败"
      });
    });
  }
  require.r(exports);
  require.d(exports, {
    TTVerifyCenter: function () {
      return sj;
    },
    config: function () {
      return sw;
    },
    getFp: function () {
      return sO;
    },
    getFpSync: function () {
      return sE;
    },
    init: function () {
      return s_;
    },
    prefetch: function () {
      return sR;
    },
    render: function () {
      return sS;
    }
  });
}