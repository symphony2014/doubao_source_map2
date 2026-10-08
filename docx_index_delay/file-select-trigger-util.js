// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'triggerFileSelect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 625286
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var s;
  var t;
  var c;
  var r;
  var p;
  var l;
  var u;
  var m;
  var d;
  var x;
  var v;
  var f;
  var b;
  var h;
  var g;
  var y;
  var w;
  var k;
  var j;
  var T;
  var A = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : require.g !== undefined ? require.g : typeof self != "undefined" ? self : {};
  function S(e, a) {
    e(a = {
      exports: {}
    }, a.exports);
    return a.exports;
  }
  var _ = "object";
  function E(e) {
    return e && e.Math == Math && e;
  }
  var O = E(typeof globalThis == _ && globalThis) || E(typeof window == _ && window) || E(typeof self == _ && self) || E(typeof A == _ && A) || Function("return this")();
  function L(e) {
    try {
      return !!e();
    } catch (e) {
      return true;
    }
  }
  var z = !L(function () {
    return Object.defineProperty({}, "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var C = {}.propertyIsEnumerable;
  var N = Object.getOwnPropertyDescriptor;
  var M = {
    f: N && !C.call({
      1: 2
    }, 1) ? function (e) {
      var a = N(this, e);
      return !!a && a.enumerable;
    } : C
  };
  function R(e, a) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: a
    };
  }
  var D = {}.toString;
  function P(e) {
    return D.call(e).slice(8, -1);
  }
  var I = "".split;
  var F = L(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (e) {
    if (P(e) == "String") {
      return I.call(e, "");
    } else {
      return Object(e);
    }
  } : Object;
  function q(e) {
    if (e == undefined) {
      throw TypeError("Can't call method on " + e);
    }
    return e;
  }
  function U(e) {
    return F(q(e));
  }
  function B(e) {
    if (typeof e == "object") {
      return e !== null;
    } else {
      return typeof e == "function";
    }
  }
  function H(e, a) {
    var i;
    var n;
    if (!B(e)) {
      return e;
    }
    if (a && typeof (i = e.toString) == "function" && !B(n = i.call(e)) || typeof (i = e.valueOf) == "function" && !B(n = i.call(e)) || !a && typeof (i = e.toString) == "function" && !B(n = i.call(e))) {
      return n;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  var G = {}.hasOwnProperty;
  function Z(e, a) {
    return G.call(e, a);
  }
  var J = O.document;
  var W = B(J) && B(J.createElement);
  function Y(e) {
    if (W) {
      return J.createElement(e);
    } else {
      return {};
    }
  }
  var V = !z && !L(function () {
    return Object.defineProperty(Y("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var X = Object.getOwnPropertyDescriptor;
  var K = z ? X : function (e, a) {
    e = U(e);
    a = H(a, true);
    if (V) {
      try {
        return X(e, a);
      } catch (e) {}
    }
    if (Z(e, a)) {
      return R(!M.f.call(e, a), e[a]);
    }
  };
  var $ = /#|\.prototype\./;
  function Q(e, a) {
    var i = ea[ee(e)];
    return i == en || i != ei && (typeof a == "function" ? L(a) : !!a);
  }
  var ee = Q.normalize = function (e) {
    return String(e).replace($, ".").toLowerCase();
  };
  var ea = Q.data = {};
  var ei = Q.NATIVE = "N";
  var en = Q.POLYFILL = "P";
  var eo = {};
  function es(e) {
    if (typeof e != "function") {
      throw TypeError(String(e) + " is not a function");
    }
    return e;
  }
  function et(e, a, i) {
    es(e);
    if (a === undefined) {
      return e;
    }
    switch (i) {
      case 0:
        return function () {
          return e.call(a);
        };
      case 1:
        return function (i) {
          return e.call(a, i);
        };
      case 2:
        return function (i, n) {
          return e.call(a, i, n);
        };
      case 3:
        return function (i, n, o) {
          return e.call(a, i, n, o);
        };
    }
    return function () {
      return e.apply(a, arguments);
    };
  }
  function ec(e) {
    if (!B(e)) {
      throw TypeError(String(e) + " is not an object");
    }
    return e;
  }
  var er = Object.defineProperty;
  var ep = {
    f: z ? er : function (e, a, i) {
      ec(e);
      a = H(a, true);
      ec(i);
      if (V) {
        try {
          return er(e, a, i);
        } catch (e) {}
      }
      if ("get" in i || "set" in i) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in i) {
        e[a] = i.value;
      }
      return e;
    }
  };
  var el = z ? function (e, a, i) {
    return ep.f(e, a, R(1, i));
  } : function (e, a, i) {
    e[a] = i;
    return e;
  };
  function eu(e) {
    function a(a, i, n) {
      if (this instanceof e) {
        switch (arguments.length) {
          case 0:
            return new e();
          case 1:
            return new e(a);
          case 2:
            return new e(a, i);
        }
        return new e(a, i, n);
      }
      return e.apply(this, arguments);
    }
    a.prototype = e.prototype;
    return a;
  }
  function em(e, a) {
    var i;
    var n;
    var o;
    var s;
    var t;
    var c;
    var r;
    var p;
    var l = e.target;
    var u = e.global;
    var m = e.stat;
    var d = e.proto;
    var x = u ? O : m ? O[l] : (O[l] || {}).prototype;
    var v = u ? eo : eo[l] ||= {};
    var f = v.prototype;
    for (o in a) {
      i = !Q(u ? o : l + (m ? "." : "#") + o, e.forced) && x && Z(x, o);
      t = v[o];
      if (i) {
        c = e.noTargetGet ? (p = K(x, o)) && p.value : x[o];
      }
      s = i && c ? c : a[o];
      if (!i || typeof t != typeof s) {
        r = e.bind && i ? et(s, O) : e.wrap && i ? eu(s) : d && typeof s == "function" ? et(Function.call, s) : s;
        if (e.sham || s && s.sham || t && t.sham) {
          el(r, "sham", true);
        }
        v[o] = r;
        if (d) {
          if (!Z(eo, n = l + "Prototype")) {
            el(eo, n, {});
          }
          eo[n][o] = s;
          if (e.real && f && !f[o]) {
            el(f, o, s);
          }
        }
      }
    }
  }
  var ed = Array.isArray || function (e) {
    return P(e) == "Array";
  };
  var ex = Math.ceil;
  var ev = Math.floor;
  function ef(e) {
    if (isNaN(e *= 1)) {
      return 0;
    } else {
      return (e > 0 ? ev : ex)(e);
    }
  }
  var eb = Math.max;
  var eh = Math.min;
  function eg(e, a) {
    var i = ef(e);
    if (i < 0) {
      return eb(i + a, 0);
    } else {
      return eh(i, a);
    }
  }
  var ey = Math.min;
  function ew(e) {
    if (e > 0) {
      return ey(ef(e), 9007199254740991);
    } else {
      return 0;
    }
  }
  function ek(e, a) {
    try {
      el(O, e, a);
    } catch (i) {
      O[e] = a;
    }
    return a;
  }
  var ej = S(function (e) {
    var a = "__core-js_shared__";
    var i = O[a] || ek(a, {});
    (e.exports = function (e, a) {
      return i[e] ||= a !== undefined ? a : {};
    })("versions", []).push({
      version: "3.1.3",
      mode: "pure",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  });
  var eT = 0;
  var eA = Math.random();
  function eS(e) {
    return "Symbol(" + String(e === undefined ? "" : e) + ")_" + (++eT + eA).toString(36);
  }
  var e_ = !!Object.getOwnPropertySymbols && !L(function () {
    return !String(Symbol());
  });
  var eE = O.Symbol;
  var eO = ej("wks");
  function eL(e) {
    return eO[e] ||= e_ && eE[e] || (e_ ? eE : eS)("Symbol." + e);
  }
  var ez = eL("species");
  function eC(e) {
    return function (a, i) {
      var n;
      var o;
      var s = String(q(a));
      var t = ef(i);
      var c = s.length;
      if (t < 0 || t >= c) {
        if (e) {
          return "";
        } else {
          return undefined;
        }
      } else if ((n = s.charCodeAt(t)) < 55296 || n > 56319 || t + 1 === c || (o = s.charCodeAt(t + 1)) < 56320 || o > 57343) {
        if (e) {
          return s.charAt(t);
        } else {
          return n;
        }
      } else if (e) {
        return s.slice(t, t + 2);
      } else {
        return (n - 55296 << 10) + (o - 56320) + 65536;
      }
    };
  }
  var eN = {
    codeAt: eC(false),
    charAt: eC(true)
  };
  var eM = ej("native-function-to-string", Function.toString);
  var eR = O.WeakMap;
  var eD = typeof eR == "function" && /native code/.test(eM.call(eR));
  var eP = ej("keys");
  function eI(e) {
    return eP[e] ||= eS(e);
  }
  var eF = {};
  var eq = O.WeakMap;
  if (eD) {
    var eU = new eq();
    var eB = eU.get;
    var eH = eU.has;
    var eG = eU.set;
    s = function (e, a) {
      eG.call(eU, e, a);
      return a;
    };
    t = function (e) {
      return eB.call(eU, e) || {};
    };
  } else {
    var eZ = eI("state");
    eF[eZ] = true;
    s = function (e, a) {
      el(e, eZ, a);
      return a;
    };
    t = function (e) {
      if (Z(e, eZ)) {
        return e[eZ];
      } else {
        return {};
      }
    };
  }
  var eJ = s;
  var eW = t;
  function eY(e) {
    return function (a) {
      var i;
      if (!B(a) || (i = t(a)).type !== e) {
        throw TypeError("Incompatible receiver, " + e + " required");
      }
      return i;
    };
  }
  function eV(e) {
    return Object(q(e));
  }
  var eX = !L(function () {
    function e() {}
    e.prototype.constructor = null;
    return Object.getPrototypeOf(new e()) !== e.prototype;
  });
  var eK = eI("IE_PROTO");
  var e$ = Object.prototype;
  var eQ = eX ? Object.getPrototypeOf : function (e) {
    if (Z(e = eV(e), eK)) {
      return e[eK];
    } else if (typeof e.constructor == "function" && e instanceof e.constructor) {
      return e.constructor.prototype;
    } else if (e instanceof Object) {
      return e$;
    } else {
      return null;
    }
  };
  eL("iterator");
  var e0 = false;
  if ([].keys) {
    if ("next" in (l = [].keys())) {
      if ((p = eQ(eQ(l))) !== Object.prototype) {
        r = p;
      }
    } else {
      e0 = true;
    }
  }
  if (r == undefined) {
    r = {};
  }
  var e1 = r;
  var e2 = e0;
  function e3(e) {
    return function (a, i, n) {
      var o;
      var s = U(a);
      var t = ew(s.length);
      var c = eg(n, t);
      if (e && i != i) {
        while (t > c) {
          if ((o = s[c++]) != o) {
            return true;
          }
        }
      } else {
        for (; t > c; c++) {
          if ((e || c in s) && s[c] === i) {
            return e || c || 0;
          }
        }
      }
      return !e && -1;
    };
  }
  var e4 = {
    includes: e3(true),
    indexOf: e3(false)
  }.indexOf;
  function e5(e, a) {
    var i;
    var n = U(e);
    var o = 0;
    var s = [];
    for (i in n) {
      if (!Z(eF, i) && Z(n, i)) {
        s.push(i);
      }
    }
    while (a.length > o) {
      if (Z(n, i = a[o++])) {
        if (!~e4(s, i)) {
          s.push(i);
        }
      }
    }
    return s;
  }
  var e8 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  var e7 = Object.keys || function (e) {
    return e5(e, e8);
  };
  var e6 = z ? Object.defineProperties : function (e, a) {
    ec(e);
    var i;
    var n = e7(a);
    var o = n.length;
    var s = 0;
    while (o > s) {
      ep.f(e, i = n[s++], a[i]);
    }
    return e;
  };
  function e9(e) {
    if (typeof e == "function") {
      return e;
    } else {
      return undefined;
    }
  }
  function ae(e, a) {
    if (arguments.length < 2) {
      return e9(eo[e]) || e9(O[e]);
    } else {
      return eo[e] && eo[e][a] || O[e] && O[e][a];
    }
  }
  var aa = ae("document", "documentElement");
  var ai = eI("IE_PROTO");
  var an = "prototype";
  function ao() {}
  function as() {
    var e;
    var a = Y("iframe");
    var i = e8.length;
    var n = "script";
    a.style.display = "none";
    aa.appendChild(a);
    a.src = String("java" + n + ":");
    (e = a.contentWindow.document).open();
    e.write("<" + n + ">document.F=Object</" + n + ">");
    e.close();
    as = e.F;
    while (i--) {
      delete as[an][e8[i]];
    }
    return as();
  }
  var at = Object.create || function (e, a) {
    var i;
    if (e !== null) {
      ao[an] = ec(e);
      i = new ao();
      ao[an] = null;
      i[ai] = e;
    } else {
      i = as();
    }
    if (a === undefined) {
      return i;
    } else {
      return e6(i, a);
    }
  };
  eF[ai] = true;
  var ac = eL("toStringTag");
  var ar = P(function () {
    return arguments;
  }()) == "Arguments";
  function ap(e, a) {
    try {
      return e[a];
    } catch (e) {}
  }
  function al(e) {
    var a;
    var i;
    var n;
    if (e === undefined) {
      return "Undefined";
    } else if (e === null) {
      return "Null";
    } else if (typeof (i = ap(a = Object(e), ac)) == "string") {
      return i;
    } else if (ar) {
      return P(a);
    } else if ((n = P(a)) == "Object" && typeof a.callee == "function") {
      return "Arguments";
    } else {
      return n;
    }
  }
  var au = eL("toStringTag");
  var am = {
    [au]: "z"
  };
  var ad = String(am) !== "[object z]" ? function () {
    return "[object " + al(this) + "]";
  } : am.toString;
  var ax = ep.f;
  var av = eL("toStringTag");
  var af = ad !== {}.toString;
  function ab(e, a, i, n) {
    if (e) {
      var o = i ? e : e.prototype;
      if (!Z(o, av)) {
        ax(o, av, {
          configurable: true,
          value: a
        });
      }
      if (n && af) {
        el(o, "toString", ad);
      }
    }
  }
  var ah = {};
  function ag() {
    return this;
  }
  function ay(e, a, i) {
    var n = a + " Iterator";
    e.prototype = at(e1, {
      next: R(1, i)
    });
    ab(e, n, false, true);
    ah[n] = ag;
    return e;
  }
  if (!Object.setPrototypeOf) {
    if ("__proto__" in {}) {
      (function () {
        var e;
        var a = false;
        var i = {};
        try {
          (0, Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []);
        } catch (e) {}
      })();
    }
  }
  function aw(e, a, i, n) {
    if (n && n.enumerable) {
      e[a] = i;
    } else {
      el(e, a, i);
    }
  }
  var ak = eL("iterator");
  var aj = "keys";
  var aT = "values";
  var aA = "entries";
  function aS() {
    return this;
  }
  function a_(e, a, i, n, o, s, t) {
    ay(i, a, n);
    var c;
    var r;
    var p;
    function l(e) {
      if (e === o && v) {
        return v;
      }
      if (!e2 && e in d) {
        return d[e];
      }
      switch (e) {
        case aj:
        case aT:
        case aA:
          return function () {
            return new i(this, e);
          };
      }
      return function () {
        return new i(this);
      };
    }
    var u = a + " Iterator";
    var m = false;
    var d = e.prototype;
    var x = d[ak] || d["@@iterator"] || o && d[o];
    var v = !e2 && x || l(o);
    var f = a == "Array" && d.entries || x;
    if (f) {
      c = eQ(f.call(new e()));
      if (e1 !== Object.prototype && c.next) {
        ab(c, u, true, true);
        ah[u] = aS;
      }
    }
    if (o == aT && x && x.name !== aT) {
      m = true;
      v = function () {
        return x.call(this);
      };
    }
    if (t && d[ak] !== v) {
      el(d, ak, v);
    }
    ah[a] = v;
    if (o) {
      r = {
        values: l(aT),
        keys: s ? v : l(aj),
        entries: l(aA)
      };
      if (t) {
        for (p in r) {
          if (!!e2 || !!m || !(p in d)) {
            aw(d, p, r[p]);
          }
        }
      } else {
        em({
          target: a,
          proto: true,
          forced: e2 || m
        }, r);
      }
    }
    return r;
  }
  var aE = eN.charAt;
  var aO = "String Iterator";
  var aL = eY(aO);
  a_(String, "String", function (e) {
    eJ(this, {
      type: aO,
      string: String(e),
      index: 0
    });
  }, function () {
    var e;
    var a = aL(this);
    var i = a.string;
    var n = a.index;
    if (n >= i.length) {
      return {
        value: undefined,
        done: true
      };
    } else {
      e = aE(i, n);
      a.index += e.length;
      return {
        value: e,
        done: false
      };
    }
  });
  var az = "Array Iterator";
  var aC = eY(az);
  a_(Array, "Array", function (e, a) {
    eJ(this, {
      type: az,
      target: U(e),
      index: 0,
      kind: a
    });
  }, function () {
    var e = aC(this);
    var a = e.target;
    var i = e.kind;
    var n = e.index++;
    if (!a || n >= a.length) {
      e.target = undefined;
      return {
        value: undefined,
        done: true
      };
    } else if (i == "keys") {
      return {
        value: n,
        done: false
      };
    } else if (i == "values") {
      return {
        value: a[n],
        done: false
      };
    } else {
      return {
        value: [n, a[n]],
        done: false
      };
    }
  }, "values");
  ah.Arguments = ah.Array;
  var aN = {
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
  var aM = eL("toStringTag");
  for (var aR in aN) {
    var aD = O[aR];
    var aP = aD && aD.prototype;
    if (aP && !aP[aM]) {
      el(aP, aM, aR);
    }
    ah[aR] = ah.Array;
  }
  var aI = eL("species");
  function aF(e, a, i) {
    if (!(e instanceof a)) {
      throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
    }
    return e;
  }
  var aq = eL("iterator");
  var aU = Array.prototype;
  var aB = eL("iterator");
  function aH(e) {
    if (e != undefined) {
      return e[aB] || e["@@iterator"] || ah[al(e)];
    }
  }
  function aG(e, a, i, n) {
    try {
      if (n) {
        return a(ec(i)[0], i[1]);
      } else {
        return a(i);
      }
    } catch (a) {
      var o = e.return;
      if (o !== undefined) {
        ec(o.call(e));
      }
      throw a;
    }
  }
  var aZ = S(function (e) {
    function a(e, a) {
      this.stopped = e;
      this.result = a;
    }
    (e.exports = function (e, i, n, o, s) {
      var t;
      var c;
      var r;
      var p;
      var l;
      var u;
      var m = et(i, n, o ? 2 : 1);
      if (s) {
        t = e;
      } else {
        if (typeof (c = aH(e)) != "function") {
          throw TypeError("Target is not iterable");
        }
        if (c !== undefined && (ah.Array === c || aU[aq] === c)) {
          r = 0;
          p = ew(e.length);
          for (; p > r; r++) {
            if ((l = o ? m(ec(u = e[r])[0], u[1]) : m(e[r])) && l instanceof a) {
              return l;
            }
          }
          return new a(false);
        }
        t = c.call(e);
      }
      while (!(u = t.next()).done) {
        if ((l = aG(t, m, u.value, o)) && l instanceof a) {
          return l;
        }
      }
      return new a(false);
    }).stop = function (e) {
      return new a(true, e);
    };
  });
  var aJ = eL("iterator");
  var aW = false;
  try {
    var aY = 0;
    var aV = {
      next: function () {
        return {
          done: !!aY++
        };
      },
      return: function () {
        aW = true;
      }
    };
    aV[aJ] = function () {
      return this;
    };
    Array.from(aV, function () {
      throw 2;
    });
  } catch (e) {}
  var aX = eL("species");
  function aK(e, a) {
    var i;
    var n = ec(e).constructor;
    if (n === undefined || (i = ec(n)[aX]) == undefined) {
      return a;
    } else {
      return es(i);
    }
  }
  var a$ = O.location;
  var aQ = O.setImmediate;
  var a0 = O.clearImmediate;
  var a1 = O.process;
  var a2 = O.MessageChannel;
  var a3 = O.Dispatch;
  var a4 = 0;
  var a5 = {};
  var a8 = "onreadystatechange";
  function a7(e) {
    if (a5.hasOwnProperty(e)) {
      var a = a5[e];
      delete a5[e];
      a();
    }
  }
  function a6(e) {
    return function () {
      a7(e);
    };
  }
  function a9(e) {
    a7(e.data);
  }
  function ie(e) {
    O.postMessage(e + "", a$.protocol + "//" + a$.host);
  }
  if (!aQ || !a0) {
    aQ = function (e) {
      var a = [];
      var i = 1;
      while (arguments.length > i) {
        a.push(arguments[i++]);
      }
      a5[++a4] = function () {
        (typeof e == "function" ? e : Function(e)).apply(undefined, a);
      };
      u(a4);
      return a4;
    };
    a0 = function (e) {
      delete a5[e];
    };
    if (P(a1) == "process") {
      u = function (e) {
        a1.nextTick(a6(e));
      };
    } else if (a3 && a3.now) {
      u = function (e) {
        a3.now(a6(e));
      };
    } else if (a2) {
      d = (m = new a2()).port2;
      m.port1.onmessage = a9;
      u = et(d.postMessage, d, 1);
    } else if (!O.addEventListener || typeof postMessage != "function" || O.importScripts || L(ie)) {
      u = a8 in Y("script") ? function (e) {
        aa.appendChild(Y("script"))[a8] = function () {
          aa.removeChild(this);
          a7(e);
        };
      } : function (e) {
        setTimeout(a6(e), 0);
      };
    } else {
      u = ie;
      O.addEventListener("message", a9, false);
    }
  }
  var ia = aQ;
  var ii = ae("navigator", "userAgent") || "";
  var io = O.MutationObserver || O.WebKitMutationObserver;
  var is = O.process;
  var it = O.Promise;
  var ic = P(is) == "process";
  var ir = K(O, "queueMicrotask");
  var ip = ir && ir.value;
  if (!ip) {
    x = function () {
      var e;
      var a;
      for (ic && (e = is.domain) && e.exit(); v;) {
        a = v.fn;
        v = v.next;
        try {
          a();
        } catch (e) {
          if (v) {
            b();
          } else {
            f = undefined;
          }
          throw e;
        }
      }
      f = undefined;
      if (e) {
        e.enter();
      }
    };
    if (ic) {
      b = function () {
        is.nextTick(x);
      };
    } else if (io && !/(iphone|ipod|ipad).*applewebkit/i.test(ii)) {
      h = true;
      g = document.createTextNode("");
      new io(x).observe(g, {
        characterData: true
      });
      b = function () {
        g.data = h = !h;
      };
    } else if (it && it.resolve) {
      y = it.resolve(undefined);
      b = function () {
        y.then(x);
      };
    } else {
      b = function () {
        ia.call(O, x);
      };
    }
  }
  var il = ip || function (e) {
    var a = {
      fn: e,
      next: undefined
    };
    if (f) {
      f.next = a;
    }
    if (!v) {
      v = a;
      b();
    }
    f = a;
  };
  function iu(e) {
    var a;
    var i;
    this.promise = new e(function (e, n) {
      if (a !== undefined || i !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      a = e;
      i = n;
    });
    this.resolve = es(a);
    this.reject = es(i);
  }
  var im = {
    f: function (e) {
      return new iu(e);
    }
  };
  function id(e, a) {
    ec(e);
    if (B(a) && a.constructor === e) {
      return a;
    }
    var i = im.f(e);
    i.resolve(a);
    return i.promise;
  }
  function ix(e, a) {
    var i = O.console;
    if (i) {
      i.error;
    }
  }
  function iv(e) {
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
  var ib = eL("species");
  var ih = "Promise";
  var ig = eY(ih);
  var iy = O[ih];
  var iw = O.TypeError;
  var ik = O.document;
  var ij = O.process;
  O.fetch;
  var iT = ij && ij.versions;
  var iA = iT && iT.v8 || "";
  var iS = im.f;
  var i_ = iS;
  var iE = P(ij) == "process";
  var iO = !!ik && !!ik.createEvent && !!O.dispatchEvent;
  var iL = "unhandledrejection";
  var iz = Q(ih, function () {
    var e = iy.resolve(1);
    function a() {}
    var i = (e.constructor = {})[ib] = function (e) {
      e(a, a);
    };
    return !iE && typeof PromiseRejectionEvent != "function" || !e.finally || !(e.then(a) instanceof i) || iA.indexOf("6.6") === 0 || ii.indexOf("Chrome/66") !== -1;
  });
  var iC = iz || !function (e, a) {
    if (!aW) {
      return false;
    }
    var i = false;
    try {
      var n = {
        [aJ]: function () {
          return {
            next: function () {
              return {
                done: i = true
              };
            }
          };
        }
      };
      e(n);
    } catch (e) {}
    return i;
  }(function (e) {
    iy.all(e).catch(function () {});
  });
  function iN(e) {
    var a;
    return !!B(e) && typeof (a = e.then) == "function" && a;
  }
  function iM(e, a, i) {
    if (!a.notified) {
      a.notified = true;
      var n = a.reactions;
      il(function () {
        var o = a.value;
        var s = a.state == 1;
        var t = 0;
        while (n.length > t) {
          var c;
          var r;
          var p;
          var l = n[t++];
          var u = s ? l.ok : l.fail;
          var m = l.resolve;
          var d = l.reject;
          var x = l.domain;
          try {
            if (u) {
              if (!s) {
                if (a.rejection === 2) {
                  iI(e, a);
                }
                a.rejection = 1;
              }
              if (u === true) {
                c = o;
              } else {
                if (x) {
                  x.enter();
                }
                c = u(o);
                if (x) {
                  x.exit();
                  p = true;
                }
              }
              if (c === l.promise) {
                d(iw("Promise-chain cycle"));
              } else if (r = iN(c)) {
                r.call(c, m, d);
              } else {
                m(c);
              }
            } else {
              d(o);
            }
          } catch (e) {
            if (x && !p) {
              x.exit();
            }
            d(e);
          }
        }
        a.reactions = [];
        a.notified = false;
        if (i && !a.rejection) {
          iD(e, a);
        }
      });
    }
  }
  function iR(e, a, i) {
    var n;
    var o;
    if (iO) {
      (n = ik.createEvent("Event")).promise = a;
      n.reason = i;
      n.initEvent(e, false, true);
      O.dispatchEvent(n);
    } else {
      n = {
        promise: a,
        reason: i
      };
    }
    if (o = O["on" + e]) {
      o(n);
    } else if (e === iL) {
      ix("Unhandled promise rejection", i);
    }
  }
  function iD(e, a) {
    ia.call(O, function () {
      var i;
      var n = a.value;
      if (iP(a) && (i = iv(function () {
        if (iE) {
          ij.emit("unhandledRejection", n, e);
        } else {
          iR(iL, e, n);
        }
      }), a.rejection = iE || iP(a) ? 2 : 1, i.error)) {
        throw i.value;
      }
    });
  }
  function iP(e) {
    return e.rejection !== 1 && !e.parent;
  }
  function iI(e, a) {
    ia.call(O, function () {
      if (iE) {
        ij.emit("rejectionHandled", e);
      } else {
        iR("rejectionhandled", e, a.value);
      }
    });
  }
  function iF(e, a, i, n) {
    return function (o) {
      e(a, i, o, n);
    };
  }
  function iq(e, a, i, n) {
    if (!a.done) {
      a.done = true;
      if (n) {
        a = n;
      }
      a.value = i;
      a.state = 2;
      iM(e, a, true);
    }
  }
  function iU(e, a, i, n) {
    if (!a.done) {
      a.done = true;
      if (n) {
        a = n;
      }
      try {
        if (e === i) {
          throw iw("Promise can't be resolved itself");
        }
        var o = iN(i);
        if (o) {
          il(function () {
            var n = {
              done: false
            };
            try {
              o.call(i, iF(iU, e, n, a), iF(iq, e, n, a));
            } catch (i) {
              iq(e, n, i, a);
            }
          });
        } else {
          a.value = i;
          a.state = 1;
          iM(e, a, false);
        }
      } catch (i) {
        iq(e, {
          done: false
        }, i, a);
      }
    }
  }
  if (iz) {
    iy = function (e) {
      aF(this, iy, ih);
      es(e);
      w.call(this);
      var a = eW(this);
      try {
        e(iF(iU, this, a), iF(iq, this, a));
      } catch (e) {
        iq(this, a, e);
      }
    };
    (w = function (e) {
      eJ(this, {
        type: ih,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: 0,
        value: undefined
      });
    }).prototype = function (e, a, i) {
      for (var n in a) {
        aw(e, n, a[n], undefined);
      }
      return e;
    }(iy.prototype, {
      then: function (e, a) {
        var i = ig(this);
        var n = iS(aK(this, iy));
        n.ok = typeof e != "function" || e;
        n.fail = typeof a == "function" && a;
        n.domain = iE ? ij.domain : undefined;
        i.parent = true;
        i.reactions.push(n);
        if (i.state != 0) {
          iM(this, i, false);
        }
        return n.promise;
      },
      catch: function (e) {
        return this.then(undefined, e);
      }
    });
    k = function () {
      var e = new w();
      var a = eW(e);
      this.promise = e;
      this.resolve = iF(iU, e, a);
      this.reject = iF(iq, e, a);
    };
    im.f = iS = function (e) {
      if (e === iy || e === j) {
        return new k(e);
      } else {
        return i_(e);
      }
    };
  }
  em({
    global: true,
    wrap: true,
    forced: iz
  }, {
    Promise: iy
  });
  ab(iy, ih, false, true);
  n = ae(ih);
  o = ep.f;
  if (z && n && !n[aI]) {
    o(n, aI, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
  j = eo[ih];
  em({
    target: ih,
    stat: true,
    forced: iz
  }, {
    reject: function (e) {
      var a = iS(this);
      a.reject.call(undefined, e);
      return a.promise;
    }
  });
  em({
    target: ih,
    stat: true,
    forced: true
  }, {
    resolve: function (e) {
      return id(this === j ? iy : this, e);
    }
  });
  em({
    target: ih,
    stat: true,
    forced: iC
  }, {
    all: function (e) {
      var a = this;
      var i = iS(a);
      var n = i.resolve;
      var o = i.reject;
      var s = iv(function () {
        var i = es(a.resolve);
        var s = [];
        var t = 0;
        var c = 1;
        aZ(e, function (e) {
          var r = t++;
          var p = false;
          s.push(undefined);
          c++;
          i.call(a, e).then(function (e) {
            if (!p) {
              p = true;
              s[r] = e;
              if (! --c) {
                n(s);
              }
            }
          }, o);
        });
        if (! --c) {
          n(s);
        }
      });
      if (s.error) {
        o(s.value);
      }
      return i.promise;
    },
    race: function (e) {
      var a = this;
      var i = iS(a);
      var n = i.reject;
      var o = iv(function () {
        var o = es(a.resolve);
        aZ(e, function (e) {
          o.call(a, e).then(i.resolve, n);
        });
      });
      if (o.error) {
        n(o.value);
      }
      return i.promise;
    }
  });
  em({
    target: "Promise",
    proto: true,
    real: true
  }, {
    finally: function (e) {
      var a = aK(this, ae("Promise"));
      var i = typeof e == "function";
      return this.then(i ? function (i) {
        return id(a, e()).then(function () {
          return i;
        });
      } : e, i ? function (i) {
        return id(a, e()).then(function () {
          throw i;
        });
      } : e);
    }
  });
  var iB = eo.Promise;
  var iH = eL("species");
  function iG(e, a) {
    var i;
    if (ed(e)) {
      if (typeof (i = e.constructor) == "function" && (i === Array || ed(i.prototype))) {
        i = undefined;
      } else if (B(i) && (i = i[iH]) === null) {
        i = undefined;
      }
    }
    return new (i === undefined ? Array : i)(a === 0 ? 0 : a);
  }
  var iZ = [].push;
  function iJ(e) {
    var a = e == 1;
    var i = e == 2;
    var n = e == 3;
    var o = e == 4;
    var s = e == 6;
    var t = e == 5 || s;
    return function (c, r, p, l) {
      var u;
      var m;
      var d = eV(c);
      var x = F(d);
      var v = et(r, p, 3);
      var f = ew(x.length);
      var b = 0;
      var h = l || iG;
      var g = a ? h(c, f) : i ? h(c, 0) : undefined;
      for (; f > b; b++) {
        if ((t || b in x) && (m = v(u = x[b], b, d), e)) {
          if (a) {
            g[b] = m;
          } else if (m) {
            switch (e) {
              case 3:
                return true;
              case 5:
                return u;
              case 6:
                return b;
              case 2:
                iZ.call(g, u);
            }
          } else if (o) {
            return false;
          }
        }
      }
      if (s) {
        return -1;
      } else if (n || o) {
        return o;
      } else {
        return g;
      }
    };
  }
  var iW = {
    forEach: iJ(0),
    map: iJ(1),
    filter: iJ(2),
    some: iJ(3),
    every: iJ(4),
    find: iJ(5),
    findIndex: iJ(6)
  };
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var iV = iW.map;
  em({
    target: "Array",
    proto: true,
    forced: !!L(function () {
      var e = [];
      (e.constructor = {})[ez] = function () {
        return {
          foo: 1
        };
      };
      return e.map(Boolean).foo !== 1;
    })
  }, {
    map: function (e) {
      return iV(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var iX = eo.ArrayPrototype.map;
  var iK = Array.prototype;
  function i$(e) {
    var a = e.map;
    if (e === iK || e instanceof Array && a === iK.map) {
      return iX;
    } else {
      return a;
    }
  }
  function iQ(e) {
    return new iB(function (a, i) {
      (function (e, a) {
        if (T) {
          T.remove();
          T = undefined;
        }
        var i = document.createElement("input");
        i.setAttribute("type", "file");
        i.setAttribute("style", "display: block; position: fixed; width: 1px; height: 1px; left: -1px; top: -1px; opacity: 0; overflow: hidden;");
        if (a && a.allowMultiple) {
          i.setAttribute("multiple", "multiple");
        }
        if (a && a.isDirectory) {
          i.setAttribute("webkitdirectory", "webkitdirectory");
        }
        if (a && a.fileTypes && a.fileTypes.length) {
          var n = a.fileTypes;
          i.setAttribute("accept", isStringTypeCheck.isString(n) ? n : i$(n).call(n, function (e) {
            var a = e.replace(/\s/g, "").toLowerCase();
            if (a.match(/^[^.][^/]+$/)) {
              a = `.${a}`;
            }
            return a;
          }).join(","));
        }
        i.addEventListener("change", function (a) {
          e(a);
          i.remove();
          T = undefined;
        });
        document.body.appendChild(i);
        T = i;
        i.focus();
        i.click();
      })(function (e) {
        var n = e.target;
        var o = n && n.files;
        if (o) {
          a({
            event: e,
            files: o
          });
        } else {
          i();
        }
      }, e);
    });
  }
  require.d(exports, {
    triggerFileSelect: function () {
      return iQ;
    }
  });
}