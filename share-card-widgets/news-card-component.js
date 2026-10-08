// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'f' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Resolved require(989572) to 'buffer-polyfill-impl'
// - Renamed variable '$' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 330834
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  let a;
  let o;
  let s;
  let l;
  let c;
  var d;
  var u;
  var h;
  var p;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  var m = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  var g = Object.defineProperty;
  var v = Object.defineProperties;
  var _ = Object.getOwnPropertyDescriptors;
  var y = Object.getOwnPropertySymbols;
  var b = Object.prototype.hasOwnProperty;
  var w = Object.prototype.propertyIsEnumerable;
  var x = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e);
  var k = e => {
    throw TypeError(e);
  };
  var C = (e, t, r) => t in e ? g(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var j = (e, t) => {
    for (var r in t ||= {}) {
      if (b.call(t, r)) {
        C(e, r, t[r]);
      }
    }
    if (y) {
      for (var r of y(t)) {
        if (w.call(t, r)) {
          C(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var S = (e, t) => v(e, _(t));
  var E = (e, t) => {
    var r = {};
    for (var n in e) {
      if (b.call(e, n) && t.indexOf(n) < 0) {
        r[n] = e[n];
      }
    }
    if (e != null && y) {
      for (var n of y(e)) {
        if (t.indexOf(n) < 0 && w.call(e, n)) {
          r[n] = e[n];
        }
      }
    }
    return r;
  };
  var R = (e, t, r) => new Promise((n, i) => {
    var a = e => {
      try {
        s(r.next(e));
      } catch (e) {
        i(e);
      }
    };
    var o = e => {
      try {
        s(r.throw(e));
      } catch (e) {
        i(e);
      }
    };
    var s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
    s((r = r.apply(e, t)).next());
  });
  function N(e, t) {
    this[0] = e;
    this[1] = t;
  }
  var T = (e, t, r) => {
    var n = (e, t, i, a) => {
      try {
        var o = r[e](t);
        var s = (t = o.value) instanceof N;
        var l = o.done;
        Promise.resolve(s ? t[0] : t).then(r => s ? n(e === "return" ? e : "next", t[1] ? {
          done: r.done,
          value: r.value
        } : r, i, a) : i({
          value: r,
          done: l
        })).catch(e => n("throw", e, i, a));
      } catch (e) {
        a(e);
      }
    };
    var i = e => a[e] = t => new Promise((r, i) => n(e, t, r, i));
    var a = {};
    r = r.apply(e, t);
    a[x("asyncIterator")] = () => a;
    i("next");
    i("throw");
    i("return");
    return a;
  };
  var P = e => {
    var t;
    var r = e[x("asyncIterator")];
    var n = false;
    var i = {};
    if (r == null) {
      r = e[x("iterator")]();
      t = e => i[e] = t => r[e](t);
    } else {
      r = r.call(e);
      t = e => i[e] = t => {
        if (n) {
          n = false;
          if (e === "throw") {
            throw t;
          }
          return t;
        }
        n = true;
        return {
          done: false,
          value: new N(new Promise(n => {
            var i = r[e](t);
            if (!(i instanceof Object)) {
              k("Object expected");
            }
            n(i);
          }), 1)
        };
      };
    }
    i[x("iterator")] = () => i;
    t("next");
    if ("throw" in r) {
      t("throw");
    } else {
      i.throw = e => {
        throw e;
      };
    }
    if ("return" in r) {
      t("return");
    }
    return i;
  };
  var I = (e, t, r) => (t = e[x("asyncIterator")]) ? t.call(e) : (e = e[x("iterator")](), t = {}, (r = (r, n) => (n = e[r]) && (t[r] = t => new Promise((r, i, a) => {
    a = (t = n.call(e, t)).done;
    return Promise.resolve(t.value).then(e => r({
      value: e,
      done: a
    }), i);
  })))("next"), r("return"), t);
  let reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let A = function (e) {
    let t = Object.create(null, {
      [Symbol.toStringTag]: {
        value: "Module"
      }
    });
    if (e) {
      for (let r in e) {
        if (r !== "default") {
          let n = Object.getOwnPropertyDescriptor(e, r);
          Object.defineProperty(t, r, n.get ? n : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    t.default = e;
    return Object.freeze(t);
  }(reactCoreLibraryReexport);
  var O = {
    exports: {}
  };
  var F = {};
  O.exports = function () {
    if (p) {
      return F;
    }
    p = 1;
    var e = Symbol.for("react.element");
    var t = Symbol.for("react.fragment");
    var r = Object.prototype.hasOwnProperty;
    var n = reactCoreLibraryReexport.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var i = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function a(t, a, o) {
      var s;
      var l = {};
      var c = null;
      var d = null;
      if (o !== undefined) {
        c = "" + o;
      }
      if (a.key !== undefined) {
        c = "" + a.key;
      }
      if (a.ref !== undefined) {
        d = a.ref;
      }
      for (s in a) {
        if (r.call(a, s) && !i.hasOwnProperty(s)) {
          l[s] = a[s];
        }
      }
      if (t && t.defaultProps) {
        for (s in a = t.defaultProps) {
          if (l[s] === undefined) {
            l[s] = a[s];
          }
        }
      }
      return {
        $$typeof: e,
        type: t,
        key: c,
        ref: d,
        props: l,
        _owner: n.current
      };
    }
    F.Fragment = t;
    F.jsx = a;
    F.jsxs = a;
    return F;
  }();
  var M = O.exports;
  let D = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = E(e, ["title", "titleId"]);
    return A.createElement("svg", j({
      xmlns: "http://www.w3.org/2000/svg",
      width: 13,
      height: 14,
      viewBox: "0 0 13 14",
      fill: "none",
      ref: t,
      "aria-labelledby": n
    }, i), r ? A.createElement("title", {
      id: n
    }, r) : null, A.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.8265 6.02365C11.5578 6.47945 11.5578 7.5199 10.8265 7.9757L3.99801 12.2317C3.20599 12.7253 2.16667 12.1714 2.16667 11.2556V2.7437C2.16667 1.82795 3.20599 1.27404 3.99801 1.76767L10.8265 6.02365Z",
      fill: "white"
    }));
  });
  function B(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  let {
    toString: L
  } = Object.prototype;
  let {
    getPrototypeOf: Z
  } = Object;
  n = Object.create(null);
  let W = e => {
    let t = L.call(e);
    return n[t] ||= t.slice(8, -1).toLowerCase();
  };
  let U = e => {
    e = e.toLowerCase();
    return t => W(t) === e;
  };
  let H = e => t => typeof t === e;
  let {
    isArray: z
  } = Array;
  let V = H("undefined");
  let J = U("ArrayBuffer");
  let X = H("string");
  let q = H("function");
  let G = H("number");
  let Q = e => e !== null && typeof e == "object";
  let K = e => {
    if (W(e) !== "object") {
      return false;
    }
    let t = Z(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  let Y = U("Date");
  let ee = U("File");
  let et = U("Blob");
  let er = U("FileList");
  let en = U("URLSearchParams");
  let [ei, ea, eo, es] = ["ReadableStream", "Request", "Response", "Headers"].map(U);
  function el(e, t, {
    allOwnKeys: r = false
  } = {}) {
    let n;
    let i;
    if (e != null) {
      if (typeof e != "object") {
        e = [e];
      }
      if (z(e)) {
        n = 0;
        i = e.length;
        for (; n < i; n++) {
          t.call(null, e[n], n, e);
        }
      } else {
        let i;
        let a = r ? Object.getOwnPropertyNames(e) : Object.keys(e);
        let o = a.length;
        for (n = 0; n < o; n++) {
          i = a[n];
          t.call(null, e[i], i, e);
        }
      }
    }
  }
  function ec(e, t) {
    t = t.toLowerCase();
    let r = Object.keys(e);
    let n = r.length;
    let i;
    while (n-- > 0) {
      if (t === (i = r[n]).toLowerCase()) {
        return i;
      }
    }
    return null;
  }
  let ed = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : require.g;
  let eu = e => !V(e) && e !== ed;
  i = typeof Uint8Array != "undefined" && Z(Uint8Array);
  let eh = e => i && e instanceof i;
  let ep = U("HTMLFormElement");
  let ef = (({
    hasOwnProperty: e
  }) => (t, r) => e.call(t, r))(Object.prototype);
  let em = U("RegExp");
  let eg = (e, t) => {
    let r = Object.getOwnPropertyDescriptors(e);
    let n = {};
    el(r, (r, i) => {
      let a;
      if ((a = t(r, i, e)) !== false) {
        n[i] = a || r;
      }
    });
    Object.defineProperties(e, n);
  };
  let ev = "abcdefghijklmnopqrstuvwxyz";
  let e_ = "0123456789";
  let ey = {
    DIGIT: e_,
    ALPHA: ev,
    ALPHA_DIGIT: ev + ev.toUpperCase() + e_
  };
  let eb = U("AsyncFunction");
  d = typeof setImmediate == "function";
  u = q(ed.postMessage);
  let ew = d ? setImmediate : u ? (a = `axios@${Math.random()}`, o = [], ed.addEventListener("message", ({
    source: e,
    data: t
  }) => {
    if (e === ed && t === a && o.length) {
      o.shift()();
    }
  }, false), e => {
    o.push(e);
    ed.postMessage(a, "*");
  }) : e => setTimeout(e);
  let ex = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(ed) : processBrowserShim !== undefined && processBrowserShim.nextTick || ew;
  let ek = {
    isArray: z,
    isArrayBuffer: J,
    isBuffer: function (e) {
      return e !== null && !V(e) && e.constructor !== null && !V(e.constructor) && q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
    },
    isFormData: e => {
      let t;
      return e && (typeof FormData == "function" && e instanceof FormData || q(e.append) && ((t = W(e)) === "formdata" || t === "object" && q(e.toString) && e.toString() === "[object FormData]"));
    },
    isArrayBufferView: function (e) {
      if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(e);
      } else {
        return e && e.buffer && J(e.buffer);
      }
    },
    isString: X,
    isNumber: G,
    isBoolean: e => e === true || e === false,
    isObject: Q,
    isPlainObject: K,
    isReadableStream: ei,
    isRequest: ea,
    isResponse: eo,
    isHeaders: es,
    isUndefined: V,
    isDate: Y,
    isFile: ee,
    isBlob: et,
    isRegExp: em,
    isFunction: q,
    isStream: e => Q(e) && q(e.pipe),
    isURLSearchParams: en,
    isTypedArray: eh,
    isFileList: er,
    forEach: el,
    merge: function e() {
      let {
        caseless: t
      } = eu(this) && this || {};
      let r = {};
      let n = (n, i) => {
        let a = t && ec(r, i) || i;
        if (K(r[a]) && K(n)) {
          r[a] = e(r[a], n);
        } else if (K(n)) {
          r[a] = e({}, n);
        } else if (z(n)) {
          r[a] = n.slice();
        } else {
          r[a] = n;
        }
      };
      for (let e = 0, t = arguments.length; e < t; e++) {
        if (arguments[e]) {
          el(arguments[e], n);
        }
      }
      return r;
    },
    extend: (e, t, r, {
      allOwnKeys: n
    } = {}) => {
      el(t, (t, n) => {
        if (r && q(t)) {
          e[n] = B(t, r);
        } else {
          e[n] = t;
        }
      }, {
        allOwnKeys: n
      });
      return e;
    },
    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: e => {
      if (e.charCodeAt(0) === 65279) {
        e = e.slice(1);
      }
      return e;
    },
    inherits: (e, t, r, n) => {
      e.prototype = Object.create(t.prototype, n);
      e.prototype.constructor = e;
      Object.defineProperty(e, "super", {
        value: t.prototype
      });
      if (r) {
        Object.assign(e.prototype, r);
      }
    },
    toFlatObject: (e, t, r, n) => {
      let i;
      let a;
      let o;
      let s = {};
      t = t || {};
      if (e == null) {
        return t;
      }
      do {
        for (a = (i = Object.getOwnPropertyNames(e)).length; a-- > 0;) {
          o = i[a];
          if ((!n || n(o, e, t)) && !s[o]) {
            t[o] = e[o];
            s[o] = true;
          }
        }
        e = r !== false && Z(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: W,
    kindOfTest: U,
    endsWith: (e, t, r) => {
      e = String(e);
      if (r === undefined || r > e.length) {
        r = e.length;
      }
      r -= t.length;
      let n = e.indexOf(t, r);
      return n !== -1 && n === r;
    },
    toArray: e => {
      if (!e) {
        return null;
      }
      if (z(e)) {
        return e;
      }
      let t = e.length;
      if (!G(t)) {
        return null;
      }
      let r = Array(t);
      while (t-- > 0) {
        r[t] = e[t];
      }
      return r;
    },
    forEachEntry: (e, t) => {
      let r;
      let n = (e && e[Symbol.iterator]).call(e);
      while ((r = n.next()) && !r.done) {
        let n = r.value;
        t.call(e, n[0], n[1]);
      }
    },
    matchAll: (e, t) => {
      let r;
      let n = [];
      while ((r = e.exec(t)) !== null) {
        n.push(r);
      }
      return n;
    },
    isHTMLForm: ep,
    hasOwnProperty: ef,
    hasOwnProp: ef,
    reduceDescriptors: eg,
    freezeMethods: e => {
      eg(e, (t, r) => {
        if (q(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) {
          return false;
        }
        if (q(e[r])) {
          t.enumerable = false;
          if ("writable" in t) {
            t.writable = false;
            return;
          }
          t.set ||= () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          };
        }
      });
    },
    toObjectSet: (e, t) => {
      let r = {};
      (e => {
        e.forEach(e => {
          r[e] = true;
        });
      })(z(e) ? e : String(e).split(t));
      return r;
    },
    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
      return t.toUpperCase() + r;
    }),
    noop: () => {},
    toFiniteNumber: (e, t) => e != null && Number.isFinite(e *= 1) ? e : t,
    findKey: ec,
    global: ed,
    isContextDefined: eu,
    ALPHABET: ey,
    generateString: (e = 16, t = ey.ALPHA_DIGIT) => {
      let r = "";
      let {
        length: n
      } = t;
      while (e--) {
        r += t[Math.random() * n | 0];
      }
      return r;
    },
    isSpecCompliantForm: function (e) {
      return !!e && !!q(e.append) && e[Symbol.toStringTag] === "FormData" && !!e[Symbol.iterator];
    },
    toJSONObject: e => {
      let t = Array(10);
      let r = (e, n) => {
        if (Q(e)) {
          if (t.indexOf(e) >= 0) {
            return;
          }
          if (!("toJSON" in e)) {
            t[n] = e;
            let i = z(e) ? [] : {};
            el(e, (e, t) => {
              let a = r(e, n + 1);
              if (!V(a)) {
                i[t] = a;
              }
            });
            t[n] = undefined;
            return i;
          }
        }
        return e;
      };
      return r(e, 0);
    },
    isAsyncFn: eb,
    isThenable: e => e && (Q(e) || q(e)) && q(e.then) && q(e.catch),
    setImmediate: ew,
    asap: ex
  };
  function eC(e, t, r, n, i) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = Error().stack;
    }
    this.message = e;
    this.name = "AxiosError";
    if (t) {
      this.code = t;
    }
    if (r) {
      this.config = r;
    }
    if (n) {
      this.request = n;
    }
    if (i) {
      this.response = i;
      this.status = i.status ? i.status : null;
    }
  }
  ek.inherits(eC, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: ek.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  let ej = eC.prototype;
  let eS = {};
  function eE(e) {
    return ek.isPlainObject(e) || ek.isArray(e);
  }
  function eR(e) {
    if (ek.endsWith(e, "[]")) {
      return e.slice(0, -2);
    } else {
      return e;
    }
  }
  function eN(e, t, r) {
    if (e) {
      return e.concat(t).map(function (e, t) {
        e = eR(e);
        if (!r && t) {
          return "[" + e + "]";
        } else {
          return e;
        }
      }).join(r ? "." : "");
    } else {
      return t;
    }
  }
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    eS[e] = {
      value: e
    };
  });
  Object.defineProperties(eC, eS);
  Object.defineProperty(ej, "isAxiosError", {
    value: true
  });
  eC.from = (e, t, r, n, i, a) => {
    let o = Object.create(ej);
    ek.toFlatObject(e, o, function (e) {
      return e !== Error.prototype;
    }, e => e !== "isAxiosError");
    eC.call(o, e.message, t, r, n, i);
    o.cause = e;
    o.name = e.name;
    if (a) {
      Object.assign(o, a);
    }
    return o;
  };
  let eT = ek.toFlatObject(ek, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function eP(e, t, r) {
    if (!ek.isObject(e)) {
      throw TypeError("target must be an object");
    }
    t = t || new FormData();
    let n = (r = ek.toFlatObject(r, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function (e, t) {
      return !ek.isUndefined(t[e]);
    })).metaTokens;
    let i = r.visitor || c;
    let a = r.dots;
    let o = r.indexes;
    let s = (r.Blob || typeof Blob != "undefined" && Blob) && ek.isSpecCompliantForm(t);
    if (!ek.isFunction(i)) {
      throw TypeError("visitor must be a function");
    }
    function l(e) {
      if (e === null) {
        return "";
      }
      if (ek.isDate(e)) {
        return e.toISOString();
      }
      if (!s && ek.isBlob(e)) {
        throw new eC("Blob is not supported. Use a Buffer instead.");
      }
      if (ek.isArrayBuffer(e) || ek.isTypedArray(e)) {
        if (s && typeof Blob == "function") {
          return new Blob([e]);
        } else {
          return m.from(e);
        }
      } else {
        return e;
      }
    }
    function c(e, r, i) {
      let s = e;
      if (e && !i && typeof e == "object") {
        if (ek.endsWith(r, "{}")) {
          r = n ? r : r.slice(0, -2);
          e = JSON.stringify(e);
        } else {
          var c;
          if (ek.isArray(e) && (c = e, ek.isArray(c) && !c.some(eE)) || (ek.isFileList(e) || ek.endsWith(r, "[]")) && (s = ek.toArray(e))) {
            r = eR(r);
            s.forEach(function (e, n) {
              if (!ek.isUndefined(e) && e !== null) {
                t.append(o === true ? eN([r], n, a) : o === null ? r : r + "[]", l(e));
              }
            });
            return false;
          }
        }
      }
      return !!eE(e) || (t.append(eN(i, r, a), l(e)), false);
    }
    let d = [];
    let u = Object.assign(eT, {
      defaultVisitor: c,
      convertValue: l,
      isVisitable: eE
    });
    if (!ek.isObject(e)) {
      throw TypeError("data must be an object");
    }
    (function e(r, n) {
      if (!ek.isUndefined(r)) {
        if (d.indexOf(r) !== -1) {
          throw Error("Circular reference detected in " + n.join("."));
        }
        d.push(r);
        ek.forEach(r, function (r, a) {
          if ((!ek.isUndefined(r) && r !== null && i.call(t, r, ek.isString(a) ? a.trim() : a, n, u)) === true) {
            e(r, n ? n.concat(a) : [a]);
          }
        });
        d.pop();
      }
    })(e);
    return t;
  }
  function eI(e) {
    let t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function e$(e, t) {
    this._pairs = [];
    if (e) {
      eP(e, this, t);
    }
  }
  let eA = e$.prototype;
  function eO(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function eF(e, t, r) {
    let n;
    if (!t) {
      return e;
    }
    let i = r && r.encode || eO;
    if (ek.isFunction(r)) {
      r = {
        serialize: r
      };
    }
    let a = r && r.serialize;
    if (n = a ? a(t, r) : ek.isURLSearchParams(t) ? t.toString() : new e$(t, r).toString(i)) {
      let t = e.indexOf("#");
      if (t !== -1) {
        e = e.slice(0, t);
      }
      e += (e.indexOf("?") === -1 ? "?" : "&") + n;
    }
    return e;
  }
  eA.append = function (e, t) {
    this._pairs.push([e, t]);
  };
  eA.toString = function (e) {
    let t = e ? function (t) {
      return e.call(this, t, eI);
    } : eI;
    return this._pairs.map(function (e) {
      return t(e[0]) + "=" + t(e[1]);
    }, "").join("&");
  };
  class eM {
    constructor() {
      this.handlers = [];
    }
    use(e, t, r) {
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: !!r && r.synchronous,
        runWhen: r ? r.runWhen : null
      });
      return this.handlers.length - 1;
    }
    eject(e) {
      this.handlers[e] &&= null;
    }
    clear() {
      this.handlers &&= [];
    }
    forEach(e) {
      ek.forEach(this.handlers, function (t) {
        if (t !== null) {
          e(t);
        }
      });
    }
  }
  let eD = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  let eB = typeof URLSearchParams != "undefined" ? URLSearchParams : e$;
  let eL = typeof FormData != "undefined" ? FormData : null;
  let eZ = typeof Blob != "undefined" ? Blob : null;
  let eW = typeof window != "undefined" && typeof document != "undefined";
  let eU = typeof navigator == "object" && navigator || undefined;
  let eH = eW && (!eU || ["ReactNative", "NativeScript", "NS"].indexOf(eU.product) < 0);
  let ez = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
  let eV = eW && window.location.href || "http://localhost";
  let eJ = j(j({}, Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: eW,
    hasStandardBrowserEnv: eH,
    hasStandardBrowserWebWorkerEnv: ez,
    navigator: eU,
    origin: eV
  }, Symbol.toStringTag, {
    value: "Module"
  }))), {
    isBrowser: true,
    classes: {
      URLSearchParams: eB,
      FormData: eL,
      Blob: eZ
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  });
  function eX(e) {
    if (ek.isFormData(e) && ek.isFunction(e.entries)) {
      let t = {};
      ek.forEachEntry(e, (e, r) => {
        (function e(t, r, n, i) {
          let a = t[i++];
          if (a === "__proto__") {
            return true;
          }
          let o = Number.isFinite(+a);
          let s = i >= t.length;
          a = !a && ek.isArray(n) ? n.length : a;
          if (s) {
            if (ek.hasOwnProp(n, a)) {
              n[a] = [n[a], r];
            } else {
              n[a] = r;
            }
          } else {
            if (!n[a] || !ek.isObject(n[a])) {
              n[a] = [];
            }
            if (e(t, r, n[a], i) && ek.isArray(n[a])) {
              n[a] = function (e) {
                let t;
                let r;
                let n = {};
                let i = Object.keys(e);
                let a = i.length;
                for (t = 0; t < a; t++) {
                  n[r = i[t]] = e[r];
                }
                return n;
              }(n[a]);
            }
          }
          return !o;
        })(ek.matchAll(/\w+|\[(\w*)]/g, e).map(e => e[0] === "[]" ? "" : e[1] || e[0]), r, t, 0);
      });
      return t;
    }
    return null;
  }
  let eq = {
    transitional: eD,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (e, t) {
      let r;
      let n = t.getContentType() || "";
      let i = n.indexOf("application/json") > -1;
      let a = ek.isObject(e);
      if (a && ek.isHTMLForm(e)) {
        e = new FormData(e);
      }
      if (ek.isFormData(e)) {
        if (i) {
          return JSON.stringify(eX(e));
        } else {
          return e;
        }
      }
      if (ek.isArrayBuffer(e) || ek.isBuffer(e) || ek.isStream(e) || ek.isFile(e) || ek.isBlob(e) || ek.isReadableStream(e)) {
        return e;
      }
      if (ek.isArrayBufferView(e)) {
        return e.buffer;
      }
      if (ek.isURLSearchParams(e)) {
        t.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return e.toString();
      }
      if (a) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) {
          var o;
          var s;
          return (o = e, s = this.formSerializer, eP(o, new eJ.classes.URLSearchParams(), Object.assign({
            visitor: function (e, t, r, n) {
              if (eJ.isNode && ek.isBuffer(e)) {
                this.append(t, e.toString("base64"));
                return false;
              } else {
                return n.defaultVisitor.apply(this, arguments);
              }
            }
          }, s))).toString();
        }
        if ((r = ek.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
          let t = this.env && this.env.FormData;
          return eP(r ? {
            "files[]": e
          } : e, t && new t(), this.formSerializer);
        }
      }
      if (a || i) {
        t.setContentType("application/json", false);
        return function (e, t, r) {
          if (ek.isString(e)) {
            try {
              JSON.parse(e);
              return ek.trim(e);
            } catch (e) {
              if (e.name !== "SyntaxError") {
                throw e;
              }
            }
          }
          return JSON.stringify(e);
        }(e);
      } else {
        return e;
      }
    }],
    transformResponse: [function (e) {
      let t = this.transitional || eq.transitional;
      let r = t && t.forcedJSONParsing;
      let n = this.responseType === "json";
      if (ek.isResponse(e) || ek.isReadableStream(e)) {
        return e;
      }
      if (e && ek.isString(e) && (r && !this.responseType || n)) {
        let r = (!t || !t.silentJSONParsing) && n;
        try {
          return JSON.parse(e);
        } catch (e) {
          if (r) {
            throw e.name === "SyntaxError" ? eC.from(e, eC.ERR_BAD_RESPONSE, this, null, this.response) : e;
          }
        }
      }
      return e;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: eJ.classes.FormData,
      Blob: eJ.classes.Blob
    },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": undefined
      }
    }
  };
  ek.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    eq.headers[e] = {};
  });
  let eG = ek.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
  let eQ = e => {
    let t;
    let r;
    let n;
    let i = {};
    if (e) {
      e.split(`
`).forEach(function (e) {
        n = e.indexOf(":");
        t = e.substring(0, n).trim().toLowerCase();
        r = e.substring(n + 1).trim();
        if (!!t && (!i[t] || !eG[t])) {
          if (t === "set-cookie") {
            if (i[t]) {
              i[t].push(r);
            } else {
              i[t] = [r];
            }
          } else {
            i[t] = i[t] ? i[t] + ", " + r : r;
          }
        }
      });
    }
    return i;
  };
  let eK = Symbol("internals");
  function eY(e) {
    return e && String(e).trim().toLowerCase();
  }
  function e0(e) {
    if (e === false || e == null) {
      return e;
    } else if (ek.isArray(e)) {
      return e.map(e0);
    } else {
      return String(e);
    }
  }
  let e1 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function e2(e, t, r, n, i) {
    if (ek.isFunction(n)) {
      return n.call(this, t, r);
    }
    if (i) {
      t = r;
    }
    if (ek.isString(t)) {
      if (ek.isString(n)) {
        return t.indexOf(n) !== -1;
      }
      if (ek.isRegExp(n)) {
        return n.test(t);
      }
    }
  }
  let e3 = class {
    constructor(e) {
      if (e) {
        this.set(e);
      }
    }
    set(e, t, r) {
      let n = this;
      function i(e, t, r) {
        let i = eY(t);
        if (!i) {
          throw Error("header name must be a non-empty string");
        }
        let a = ek.findKey(n, i);
        if (!a || n[a] === undefined || r === true || r === undefined && n[a] !== false) {
          n[a || t] = e0(e);
        }
      }
      let a = (e, t) => ek.forEach(e, (e, r) => i(e, r, t));
      if (ek.isPlainObject(e) || e instanceof this.constructor) {
        a(e, t);
      } else if (ek.isString(e) && (e = e.trim()) && !e1(e)) {
        a(eQ(e), t);
      } else if (ek.isHeaders(e)) {
        for (let [t, n] of e.entries()) {
          i(n, t, r);
        }
      } else if (e != null) {
        i(t, e, r);
      }
      return this;
    }
    get(e, t) {
      if (e = eY(e)) {
        let r = ek.findKey(this, e);
        if (r) {
          let e = this[r];
          if (!t) {
            return e;
          }
          if (t === true) {
            return function (e) {
              let t;
              let r = Object.create(null);
              let n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              while (t = n.exec(e)) {
                r[t[1]] = t[2];
              }
              return r;
            }(e);
          }
          if (ek.isFunction(t)) {
            return t.call(this, e, r);
          }
          if (ek.isRegExp(t)) {
            return t.exec(e);
          }
          throw TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if (e = eY(e)) {
        let r = ek.findKey(this, e);
        return !!r && this[r] !== undefined && (!t || !!e2(this, this[r], r, t));
      }
      return false;
    }
    delete(e, t) {
      let r = this;
      let n = false;
      function i(e) {
        if (e = eY(e)) {
          let i = ek.findKey(r, e);
          if (i && (!t || e2(r, r[i], i, t))) {
            delete r[i];
            n = true;
          }
        }
      }
      if (ek.isArray(e)) {
        e.forEach(i);
      } else {
        i(e);
      }
      return n;
    }
    clear(e) {
      let t = Object.keys(this);
      let r = t.length;
      let n = false;
      while (r--) {
        let i = t[r];
        if (!e || e2(this, this[i], i, e, true)) {
          delete this[i];
          n = true;
        }
      }
      return n;
    }
    normalize(e) {
      let t = this;
      let r = {};
      ek.forEach(this, (n, i) => {
        let a = ek.findKey(r, i);
        if (a) {
          t[a] = e0(n);
          delete t[i];
          return;
        }
        let o = e ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(i).trim();
        if (o !== i) {
          delete t[i];
        }
        t[o] = e0(n);
        r[o] = true;
      });
      return this;
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      let t = Object.create(null);
      ek.forEach(this, (r, n) => {
        if (r != null && r !== false) {
          t[n] = e && ek.isArray(r) ? r.join(", ") : r;
        }
      });
      return t;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      if (e instanceof this) {
        return e;
      } else {
        return new this(e);
      }
    }
    static concat(e, ...t) {
      let r = new this(e);
      t.forEach(e => r.set(e));
      return r;
    }
    static accessor(e) {
      let t = (this[eK] = this[eK] = {
        accessors: {}
      }).accessors;
      let r = this.prototype;
      function n(e) {
        let n = eY(e);
        if (!t[n]) {
          (function (e, t) {
            let r = ek.toCamelCase(" " + t);
            ["get", "set", "has"].forEach(n => {
              Object.defineProperty(e, n + r, {
                value: function (e, r, i) {
                  return this[n].call(this, t, e, r, i);
                },
                configurable: true
              });
            });
          })(r, e);
          t[n] = true;
        }
      }
      if (ek.isArray(e)) {
        e.forEach(n);
      } else {
        n(e);
      }
      return this;
    }
  };
  function e4(e, t) {
    let r = this || eq;
    let n = t || r;
    let i = e3.from(n.headers);
    let a = n.data;
    ek.forEach(e, function (e) {
      a = e.call(r, a, i.normalize(), t ? t.status : undefined);
    });
    i.normalize();
    return a;
  }
  function e6(e) {
    return !!e && !!e.__CANCEL__;
  }
  function e5(e, t, r) {
    eC.call(this, e == null ? "canceled" : e, eC.ERR_CANCELED, t, r);
    this.name = "CanceledError";
  }
  function e9(e, t, r) {
    let n = r.config.validateStatus;
    if (!r.status || !n || n(r.status)) {
      e(r);
    } else {
      t(new eC("Request failed with status code " + r.status, [eC.ERR_BAD_REQUEST, eC.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
    }
  }
  e3.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  ek.reduceDescriptors(e3.prototype, ({
    value: e
  }, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[r] = e;
      }
    };
  });
  ek.freezeMethods(e3);
  ek.inherits(e5, eC, {
    __CANCEL__: true
  });
  let e7 = (e, t, r = 3) => {
    let n = 0;
    let i = function (e, t) {
      let r = Array(e = e || 10);
      let n = Array(e);
      let i = 0;
      let a = 0;
      let o;
      t = t !== undefined ? t : 1000;
      return function (s) {
        let l = Date.now();
        let c = n[a];
        o ||= l;
        r[i] = s;
        n[i] = l;
        let d = a;
        let u = 0;
        while (d !== i) {
          u += r[d++];
          d %= e;
        }
        if ((i = (i + 1) % e) === a) {
          a = (a + 1) % e;
        }
        if (l - o < t) {
          return;
        }
        let h = c && l - c;
        if (h) {
          return Math.round(u * 1000 / h);
        } else {
          return undefined;
        }
      };
    }(50, 250);
    return function (e, t) {
      let r = 0;
      let n = 1000 / t;
      let i;
      let a;
      let o = (t, n = Date.now()) => {
        r = n;
        i = null;
        if (a) {
          clearTimeout(a);
          a = null;
        }
        e.apply(null, t);
      };
      return [(...e) => {
        let t = Date.now();
        let s = t - r;
        if (s >= n) {
          o(e, t);
        } else {
          i = e;
          a ||= setTimeout(() => {
            a = null;
            o(i);
          }, n - s);
        }
      }, () => i && o(i)];
    }(r => {
      let a = r.loaded;
      let o = r.lengthComputable ? r.total : undefined;
      let s = a - n;
      let l = i(s);
      n = a;
      e({
        loaded: a,
        total: o,
        progress: o ? a / o : undefined,
        bytes: s,
        rate: l || undefined,
        estimated: l && o && a <= o ? (o - a) / l : undefined,
        event: r,
        lengthComputable: o != null,
        [t ? "download" : "upload"]: true
      });
    }, r);
  };
  let e8 = (e, t) => {
    let r = e != null;
    return [n => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }), t[1]];
  };
  let te = e => (...t) => ek.asap(() => e(...t));
  let tt = eJ.hasStandardBrowserEnv ? (s = new URL(eJ.origin), l = eJ.navigator && /(msie|trident)/i.test(eJ.navigator.userAgent), e => {
    e = new URL(e, eJ.origin);
    return s.protocol === e.protocol && s.host === e.host && (l || s.port === e.port);
  }) : () => true;
  let tr = eJ.hasStandardBrowserEnv ? {
    write(e, t, r, n, i, a) {
      let o = [e + "=" + encodeURIComponent(t)];
      if (ek.isNumber(r)) {
        o.push("expires=" + new Date(r).toGMTString());
      }
      if (ek.isString(n)) {
        o.push("path=" + n);
      }
      if (ek.isString(i)) {
        o.push("domain=" + i);
      }
      if (a === true) {
        o.push("secure");
      }
      document.cookie = o.join("; ");
    },
    read(e) {
      let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      if (t) {
        return decodeURIComponent(t[3]);
      } else {
        return null;
      }
    },
    remove(e) {
      this.write(e, "", Date.now() - 86400000);
    }
  } : {
    write() {},
    read: () => null,
    remove() {}
  };
  function tn(e, t) {
    if (e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)) {
      if (t) {
        return e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "");
      } else {
        return e;
      }
    } else {
      return t;
    }
  }
  let ti = e => e instanceof e3 ? j({}, e) : e;
  function ta(e, t) {
    t = t || {};
    let r = {};
    function n(e, t, r, n) {
      if (ek.isPlainObject(e) && ek.isPlainObject(t)) {
        return ek.merge.call({
          caseless: n
        }, e, t);
      } else if (ek.isPlainObject(t)) {
        return ek.merge({}, t);
      } else if (ek.isArray(t)) {
        return t.slice();
      } else {
        return t;
      }
    }
    function i(e, t, r, i) {
      if (ek.isUndefined(t)) {
        if (ek.isUndefined(e)) {
          return undefined;
        } else {
          return n(undefined, e, r, i);
        }
      } else {
        return n(e, t, r, i);
      }
    }
    function a(e, t) {
      if (!ek.isUndefined(t)) {
        return n(undefined, t);
      }
    }
    function o(e, t) {
      if (ek.isUndefined(t)) {
        if (ek.isUndefined(e)) {
          return undefined;
        } else {
          return n(undefined, e);
        }
      } else {
        return n(undefined, t);
      }
    }
    function s(r, i, a) {
      if (a in t) {
        return n(r, i);
      } else if (a in e) {
        return n(undefined, r);
      } else {
        return undefined;
      }
    }
    let l = {
      url: a,
      method: a,
      data: a,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: s,
      headers: (e, t, r) => i(ti(e), ti(t), r, true)
    };
    ek.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
      let a = l[n] || i;
      let o = a(e[n], t[n], n);
      if (!ek.isUndefined(o) || a === s) {
        r[n] = o;
      }
    });
    return r;
  }
  let to = e => {
    let t;
    let r = ta({}, e);
    let {
      data: n,
      withXSRFToken: i,
      xsrfHeaderName: a,
      xsrfCookieName: o,
      headers: s,
      auth: l
    } = r;
    r.headers = s = e3.from(s);
    r.url = eF(tn(r.baseURL, r.url), e.params, e.paramsSerializer);
    if (l) {
      s.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    }
    if (ek.isFormData(n)) {
      if (eJ.hasStandardBrowserEnv || eJ.hasStandardBrowserWebWorkerEnv) {
        s.setContentType(undefined);
      } else if ((t = s.getContentType()) !== false) {
        let [e, ...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
        s.setContentType([e || "multipart/form-data", ...r].join("; "));
      }
    }
    if (eJ.hasStandardBrowserEnv && (i && ek.isFunction(i) && (i = i(r)), i || i !== false && tt(r.url))) {
      let e = a && o && tr.read(o);
      if (e) {
        s.set(a, e);
      }
    }
    return r;
  };
  let ts = typeof XMLHttpRequest != "undefined" && function (e) {
    return new Promise(function (t, r) {
      let n = to(e);
      let i = n.data;
      let a = e3.from(n.headers).normalize();
      let {
        responseType: o,
        onUploadProgress: s,
        onDownloadProgress: l
      } = n;
      let c;
      let d;
      let u;
      let h;
      let p;
      function f() {
        if (h) {
          h();
        }
        if (p) {
          p();
        }
        if (n.cancelToken) {
          n.cancelToken.unsubscribe(c);
        }
        if (n.signal) {
          n.signal.removeEventListener("abort", c);
        }
      }
      let m = new XMLHttpRequest();
      function g() {
        if (!m) {
          return;
        }
        let n = e3.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
        e9(function (e) {
          t(e);
          f();
        }, function (e) {
          r(e);
          f();
        }, {
          data: o && o !== "text" && o !== "json" ? m.response : m.responseText,
          status: m.status,
          statusText: m.statusText,
          headers: n,
          config: e,
          request: m
        });
        m = null;
      }
      m.open(n.method.toUpperCase(), n.url, true);
      m.timeout = n.timeout;
      if ("onloadend" in m) {
        m.onloadend = g;
      } else {
        m.onreadystatechange = function () {
          if (m && m.readyState === 4 && (m.status !== 0 || m.responseURL && m.responseURL.indexOf("file:") === 0)) {
            setTimeout(g);
          }
        };
      }
      m.onabort = function () {
        if (m) {
          r(new eC("Request aborted", eC.ECONNABORTED, e, m));
          m = null;
        }
      };
      m.onerror = function () {
        r(new eC("Network Error", eC.ERR_NETWORK, e, m));
        m = null;
      };
      m.ontimeout = function () {
        let t = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
        let i = n.transitional || eD;
        if (n.timeoutErrorMessage) {
          t = n.timeoutErrorMessage;
        }
        r(new eC(t, i.clarifyTimeoutError ? eC.ETIMEDOUT : eC.ECONNABORTED, e, m));
        m = null;
      };
      if (i === undefined) {
        a.setContentType(null);
      }
      if ("setRequestHeader" in m) {
        ek.forEach(a.toJSON(), function (e, t) {
          m.setRequestHeader(t, e);
        });
      }
      if (!ek.isUndefined(n.withCredentials)) {
        m.withCredentials = !!n.withCredentials;
      }
      if (o && o !== "json") {
        m.responseType = n.responseType;
      }
      if (l) {
        [u, p] = e7(l, true);
        m.addEventListener("progress", u);
      }
      if (s && m.upload) {
        [d, h] = e7(s);
        m.upload.addEventListener("progress", d);
        m.upload.addEventListener("loadend", h);
      }
      if (n.cancelToken || n.signal) {
        c = t => {
          if (m) {
            r(!t || t.type ? new e5(null, e, m) : t);
            m.abort();
            m = null;
          }
        };
        if (n.cancelToken) {
          n.cancelToken.subscribe(c);
        }
        if (n.signal) {
          if (n.signal.aborted) {
            c();
          } else {
            n.signal.addEventListener("abort", c);
          }
        }
      }
      let v = function (e) {
        let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || "";
      }(n.url);
      if (v && eJ.protocols.indexOf(v) === -1) {
        r(new eC("Unsupported protocol " + v + ":", eC.ERR_BAD_REQUEST, e));
        return;
      }
      m.send(i || null);
    });
  };
  let tl = (e, t) => {
    let {
      length: r
    } = e = e ? e.filter(Boolean) : [];
    if (t || r) {
      let r = new AbortController();
      let n;
      let i = function (e) {
        if (!n) {
          n = true;
          o();
          let t = e instanceof Error ? e : this.reason;
          r.abort(t instanceof eC ? t : new e5(t instanceof Error ? t.message : t));
        }
      };
      let a = t && setTimeout(() => {
        a = null;
        i(new eC(`timeout ${t} of ms exceeded`, eC.ETIMEDOUT));
      }, t);
      let o = () => {
        if (e) {
          if (a) {
            clearTimeout(a);
          }
          a = null;
          e.forEach(e => {
            if (e.unsubscribe) {
              e.unsubscribe(i);
            } else {
              e.removeEventListener("abort", i);
            }
          });
          e = null;
        }
      };
      e.forEach(e => e.addEventListener("abort", i));
      let {
        signal: s
      } = r;
      s.unsubscribe = () => ek.asap(o);
      return s;
    }
  };
  let tc = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let n = 0;
    let i;
    while (n < r) {
      i = n + t;
      yield e.slice(n, i);
      n = i;
    }
  };
  let td = (e, t, r, n) => {
    let i = function (e, t) {
      return T(this, null, function* () {
        try {
          var r;
          var n;
          var i;
          var a = I(function (e) {
            return T(this, null, function* () {
              if (e[Symbol.asyncIterator]) {
                yield* P(e);
                return;
              }
              let t = e.getReader();
              try {
                while (true) {
                  let {
                    done: e,
                    value: r
                  } = yield new N(t.read());
                  if (e) {
                    break;
                  }
                  yield r;
                }
              } finally {
                yield new N(t.cancel());
              }
            });
          }(e));
          for (; r = !(n = yield new N(a.next())).done; r = false) {
            let e = n.value;
            yield* P(tc(e, t));
          }
        } catch (e) {
          i = [e];
        } finally {
          try {
            if (r && (n = a.return)) {
              yield new N(n.call(a));
            }
          } finally {
            if (i) {
              throw i[0];
            }
          }
        }
      });
    }(e, t);
    let a = 0;
    let o;
    let s = e => {
      if (!o) {
        o = true;
        if (n) {
          n(e);
        }
      }
    };
    return new ReadableStream({
      pull(e) {
        return R(this, null, function* () {
          try {
            let {
              done: t,
              value: n
            } = yield i.next();
            if (t) {
              s();
              e.close();
              return;
            }
            let o = n.byteLength;
            if (r) {
              let e = a += o;
              r(e);
            }
            e.enqueue(new Uint8Array(n));
          } catch (e) {
            s(e);
            throw e;
          }
        });
      },
      cancel: e => {
        s(e);
        return i.return();
      }
    }, {
      highWaterMark: 2
    });
  };
  let tu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function";
  let th = tu && typeof ReadableStream == "function";
  let tp = tu && (typeof TextEncoder == "function" ? (c = new TextEncoder(), e => c.encode(e)) : e => R(exports, null, function* () {
    return new Uint8Array(yield new Response(e).arrayBuffer());
  }));
  let tf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (e) {
      return false;
    }
  };
  let tm = th && tf(() => {
    let e = false;
    let t = new Request(eJ.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        e = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return e && !t;
  });
  let tg = th && tf(() => ek.isReadableStream(new Response("").body));
  let tv = {
    stream: tg && (e => e.body)
  };
  if (tu) {
    h = new Response();
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
      tv[e] ||= ek.isFunction(h[e]) ? t => t[e]() : (t, r) => {
        throw new eC(`Response type '${e}' is not supported`, eC.ERR_NOT_SUPPORT, r);
      };
    });
  }
  let t_ = e => R(exports, null, function* () {
    if (e == null) {
      return 0;
    } else if (ek.isBlob(e)) {
      return e.size;
    } else if (ek.isSpecCompliantForm(e)) {
      return (yield new Request(eJ.origin, {
        method: "POST",
        body: e
      }).arrayBuffer()).byteLength;
    } else if (ek.isArrayBufferView(e) || ek.isArrayBuffer(e)) {
      return e.byteLength;
    } else {
      if (ek.isURLSearchParams(e)) {
        e += "";
      }
      if (ek.isString(e)) {
        return (yield tp(e)).byteLength;
      } else {
        return undefined;
      }
    }
  });
  let ty = (e, r) => R(exports, null, function* () {
    let t = ek.toFiniteNumber(e.getContentLength());
    if (t == null) {
      return t_(r);
    } else {
      return t;
    }
  });
  let tb = tu && (e => R(exports, null, function* () {
    let t;
    let {
      url: r,
      method: n,
      data: i,
      signal: a,
      cancelToken: o,
      timeout: s,
      onDownloadProgress: l,
      onUploadProgress: c,
      responseType: d,
      headers: u,
      withCredentials: h = "same-origin",
      fetchOptions: p
    } = to(e);
    d = d ? (d + "").toLowerCase() : "text";
    let f = tl([a, o && o.toAbortSignal()], s);
    let m;
    let g = f && f.unsubscribe && (() => {
      f.unsubscribe();
    });
    try {
      if (c && tm && n !== "get" && n !== "head" && (t = yield ty(u, i)) !== 0) {
        let e = new Request(r, {
          method: "POST",
          body: i,
          duplex: "half"
        });
        let n;
        if (ek.isFormData(i) && (n = e.headers.get("content-type"))) {
          u.setContentType(n);
        }
        if (e.body) {
          let [r, n] = e8(t, e7(te(c)));
          i = td(e.body, 65536, r, n);
        }
      }
      if (!ek.isString(h)) {
        h = h ? "include" : "omit";
      }
      let a = "credentials" in Request.prototype;
      m = new Request(r, S(j({}, p), {
        signal: f,
        method: n.toUpperCase(),
        headers: u.normalize().toJSON(),
        body: i,
        duplex: "half",
        credentials: a ? h : undefined
      }));
      let o = yield fetch(m);
      let s = tg && (d === "stream" || d === "response");
      if (tg && (l || s && g)) {
        let e = {};
        ["status", "statusText", "headers"].forEach(t => {
          e[t] = o[t];
        });
        let t = ek.toFiniteNumber(o.headers.get("content-length"));
        let [r, n] = l && e8(t, e7(te(l), true)) || [];
        o = new Response(td(o.body, 65536, r, () => {
          if (n) {
            n();
          }
          if (g) {
            g();
          }
        }), e);
      }
      d = d || "text";
      let v = yield tv[ek.findKey(tv, d) || "text"](o, e);
      if (!s && g) {
        g();
      }
      return yield new Promise((t, r) => {
        e9(t, r, {
          data: v,
          headers: e3.from(o.headers),
          status: o.status,
          statusText: o.statusText,
          config: e,
          request: m
        });
      });
    } catch (t) {
      if (g) {
        g();
      }
      throw t && t.name === "TypeError" && /fetch/i.test(t.message) ? Object.assign(new eC("Network Error", eC.ERR_NETWORK, e, m), {
        cause: t.cause || t
      }) : eC.from(t, t && t.code, e, m);
    }
  }));
  let tw = {
    http: null,
    xhr: ts,
    fetch: tb
  };
  ek.forEach(tw, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t
        });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", {
        value: t
      });
    }
  });
  let tx = e => `- ${e}`;
  let tk = e => ek.isFunction(e) || e === null || e === false;
  let tC = e => {
    let t;
    let r;
    let {
      length: n
    } = e = ek.isArray(e) ? e : [e];
    let i = {};
    for (let a = 0; a < n; a++) {
      let n;
      r = t = e[a];
      if (!tk(t) && (r = tw[(n = String(t)).toLowerCase()]) === undefined) {
        throw new eC(`Unknown adapter '${n}'`);
      }
      if (r) {
        break;
      }
      i[n || "#" + a] = r;
    }
    if (!r) {
      let e = Object.entries(i).map(([e, t]) => `adapter ${e} ${t === false ? "is not supported by the environment" : "is not available in the build"}`);
      throw new eC("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? `since :
${e.map(tx).join(`
`)}` : " " + tx(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
    }
    return r;
  };
  function tj(e) {
    if (e.cancelToken) {
      e.cancelToken.throwIfRequested();
    }
    if (e.signal && e.signal.aborted) {
      throw new e5(null, e);
    }
  }
  function tS(e) {
    tj(e);
    e.headers = e3.from(e.headers);
    e.data = e4.call(e, e.transformRequest);
    if (["post", "put", "patch"].indexOf(e.method) !== -1) {
      e.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    return tC(e.adapter || eq.adapter)(e).then(function (t) {
      tj(e);
      t.data = e4.call(e, e.transformResponse, t);
      t.headers = e3.from(t.headers);
      return t;
    }, function (t) {
      if (!e6(t)) {
        tj(e);
        if (t && t.response) {
          t.response.data = e4.call(e, e.transformResponse, t.response);
          t.response.headers = e3.from(t.response.headers);
        }
      }
      return Promise.reject(t);
    });
  }
  let tE = "1.7.9";
  let tR = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    tR[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  let tN = {};
  tR.transitional = function (e, t, r) {
    return (n, i, a) => {
      if (e === false) {
        throw new eC("[Axios v" + tE + "] Transitional option '" + i + "' has been removed" + (t ? " in " + t : "") + (r ? ". " + r : ""), eC.ERR_DEPRECATED);
      }
      if (t && !tN[i]) {
        tN[i] = true;
      }
      return !e || e(n, i, a);
    };
  };
  tR.spelling = function (e) {
    return (e, t) => true;
  };
  let tT = {
    assertOptions: function (e, t, r) {
      if (typeof e != "object") {
        throw new eC("options must be an object", eC.ERR_BAD_OPTION_VALUE);
      }
      let n = Object.keys(e);
      let i = n.length;
      while (i-- > 0) {
        let a = n[i];
        let o = t[a];
        if (o) {
          let t = e[a];
          let r = t === undefined || o(t, a, e);
          if (r !== true) {
            throw new eC("option " + a + " must be " + r, eC.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (r !== true) {
          throw new eC("Unknown option " + a, eC.ERR_BAD_OPTION);
        }
      }
    },
    validators: tR
  };
  let tP = tT.validators;
  let tI = class {
    constructor(e) {
      this.defaults = e;
      this.interceptors = {
        request: new eM(),
        response: new eM()
      };
    }
    request(e, t) {
      return R(this, null, function* () {
        try {
          return yield this._request(e, t);
        } catch (e) {
          if (e instanceof Error) {
            let t = {};
            if (Error.captureStackTrace) {
              Error.captureStackTrace(t);
            } else {
              t = Error();
            }
            let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
            try {
              if (e.stack) {
                if (r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, ""))) {
                  e.stack += `
${r}`;
                }
              } else {
                e.stack = r;
              }
            } catch (e) {}
          }
          throw e;
        }
      });
    }
    _request(e, t) {
      if (typeof e == "string") {
        (t = t || {}).url = e;
      } else {
        t = e || {};
      }
      let {
        transitional: r,
        paramsSerializer: n,
        headers: i
      } = t = ta(this.defaults, t);
      if (r !== undefined) {
        tT.assertOptions(r, {
          silentJSONParsing: tP.transitional(tP.boolean),
          forcedJSONParsing: tP.transitional(tP.boolean),
          clarifyTimeoutError: tP.transitional(tP.boolean)
        }, false);
      }
      if (n != null) {
        if (ek.isFunction(n)) {
          t.paramsSerializer = {
            serialize: n
          };
        } else {
          tT.assertOptions(n, {
            encode: tP.function,
            serialize: tP.function
          }, true);
        }
      }
      tT.assertOptions(t, {
        baseUrl: tP.spelling("baseURL"),
        withXsrfToken: tP.spelling("withXSRFToken")
      }, true);
      t.method = (t.method || this.defaults.method || "get").toLowerCase();
      let a = i && ek.merge(i.common, i[t.method]);
      if (i) {
        ek.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
          delete i[e];
        });
      }
      t.headers = e3.concat(a, i);
      let o = [];
      let s = true;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen != "function" || e.runWhen(t) !== false) {
          s = s && e.synchronous;
          o.unshift(e.fulfilled, e.rejected);
        }
      });
      let l = [];
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let c;
      let d = 0;
      let u;
      if (!s) {
        let e = [tS.bind(this), undefined];
        e.unshift.apply(e, o);
        e.push.apply(e, l);
        u = e.length;
        c = Promise.resolve(t);
        while (d < u) {
          c = c.then(e[d++], e[d++]);
        }
        return c;
      }
      u = o.length;
      let h = t;
      for (d = 0; d < u;) {
        let e = o[d++];
        let t = o[d++];
        try {
          h = e(h);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        c = tS.call(this, h);
      } catch (e) {
        return Promise.reject(e);
      }
      d = 0;
      u = l.length;
      while (d < u) {
        c = c.then(l[d++], l[d++]);
      }
      return c;
    }
    getUri(e) {
      return eF(tn((e = ta(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
  };
  ek.forEach(["delete", "get", "head", "options"], function (e) {
    tI.prototype[e] = function (t, r) {
      return this.request(ta(r || {}, {
        method: e,
        url: t,
        data: (r || {}).data
      }));
    };
  });
  ek.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (r, n, i) {
        return this.request(ta(i || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: r,
          data: n
        }));
      };
    }
    tI.prototype[e] = t();
    tI.prototype[e + "Form"] = t(true);
  });
  let t$ = class e {
    constructor(e) {
      let t;
      if (typeof e != "function") {
        throw TypeError("executor must be a function.");
      }
      this.promise = new Promise(function (e) {
        t = e;
      });
      let r = this;
      this.promise.then(e => {
        if (!r._listeners) {
          return;
        }
        let t = r._listeners.length;
        while (t-- > 0) {
          r._listeners[t](e);
        }
        r._listeners = null;
      });
      this.promise.then = e => {
        let t;
        let n = new Promise(e => {
          r.subscribe(e);
          t = e;
        }).then(e);
        n.cancel = function () {
          r.unsubscribe(t);
        };
        return n;
      };
      e(function (e, n, i) {
        if (!r.reason) {
          r.reason = new e5(e, n, i);
          t(r.reason);
        }
      });
    }
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    subscribe(e) {
      if (this.reason) {
        e(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(e);
      } else {
        this._listeners = [e];
      }
    }
    unsubscribe(e) {
      if (!this._listeners) {
        return;
      }
      let t = this._listeners.indexOf(e);
      if (t !== -1) {
        this._listeners.splice(t, 1);
      }
    }
    toAbortSignal() {
      let e = new AbortController();
      let t = t => {
        e.abort(t);
      };
      this.subscribe(t);
      e.signal.unsubscribe = () => this.unsubscribe(t);
      return e.signal;
    }
    static source() {
      let t;
      return {
        token: new e(function (e) {
          t = e;
        }),
        cancel: t
      };
    }
  };
  let tA = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(tA).forEach(([e, t]) => {
    tA[t] = e;
  });
  let tO = function e(t) {
    let r = new tI(t);
    let n = B(tI.prototype.request, r);
    ek.extend(n, tI.prototype, r, {
      allOwnKeys: true
    });
    ek.extend(n, r, null, {
      allOwnKeys: true
    });
    n.create = function (r) {
      return e(ta(t, r));
    };
    return n;
  }(eq);
  tO.Axios = tI;
  tO.CanceledError = e5;
  tO.CancelToken = t$;
  tO.isCancel = e6;
  tO.VERSION = tE;
  tO.toFormData = eP;
  tO.AxiosError = eC;
  tO.Cancel = tO.CanceledError;
  tO.all = function (e) {
    return Promise.all(e);
  };
  tO.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  };
  tO.isAxiosError = function (e) {
    return ek.isObject(e) && e.isAxiosError === true;
  };
  tO.mergeConfig = ta;
  tO.AxiosHeaders = e3;
  tO.formToJSON = e => eX(ek.isHTMLForm(e) ? new FormData(e) : e);
  tO.getAdapter = tC;
  tO.HttpStatusCode = tA;
  tO.default = tO;
  let {
    Axios: tF,
    AxiosError: tM,
    CanceledError: tD,
    isCancel: tB,
    CancelToken: tL,
    VERSION: tZ,
    all: tW,
    Cancel: tU,
    isAxiosError: tH,
    spread: tz,
    toFormData: tV,
    AxiosHeaders: tJ,
    HttpStatusCode: tX,
    formToJSON: tq,
    getAdapter: tG,
    mergeConfig: tQ
  } = tO;
  let tK = tO.create({
    timeout: 10000
  });
  tK.interceptors.response.use(e => e.data, e => Promise.reject(e));
  let tY = tK.request;
  let t0 = (e, ...r) => R(exports, [e, ...r], function* (e, t = tY) {
    return (yield t({
      url: "https://flow-first-party-applet.zijieapi.com/flow/app/fpa_news/news/images",
      method: "POST",
      data: {
        ImageURIs: [e]
      }
    })).data;
  });
  let t1 = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = E(e, ["title", "titleId"]);
    return A.createElement("svg", j({
      width: 57,
      height: 57,
      viewBox: "0 0 57 57",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? A.createElement("title", {
      id: n
    }, r) : null, A.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2353 22.0569C14.5382 19.6015 17.8867 19.1908 19.7443 21.2587L31.2802 34.1003C32.6064 35.5766 34.8145 35.8573 36.4679 34.7598L39.3692 32.8341C41.0068 31.7471 43.1915 32.011 44.5232 33.4566L50.8183 40.2898C53.1796 42.853 51.3615 47 47.8764 47H6.65071C3.63475 47 1.70369 43.7893 3.11733 41.1251L13.2353 22.0569Z",
      fill: "white"
    }), A.createElement("rect", {
      x: 36,
      y: 10,
      width: 14,
      height: 14,
      rx: 7,
      fill: "white"
    }));
  });
  let t2 = e => {
    let {
      style: t,
      className: r,
      token: n,
      request: i
    } = e;
    let [a, o] = reactCoreLibraryReexport.useState();
    let [s, l] = reactCoreLibraryReexport.useState("loading");
    let [c, d] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      t0(n, i).then(e => {
        l("finnish");
        o(e.images[0].Payload);
      }).catch(e => {
        l("error");
      });
    }, [c, i, n]);
    let u = null;
    switch (s) {
      case "loading":
        u = M.jsx("div", {});
        break;
      case "error":
        u = M.jsx("div", {
          onClick: () => {
            d(e => e + 1);
          },
          children: M.jsx(t1, {
            width: 27,
            height: 27
          })
        });
        break;
      case "finnish":
        u = M.jsx("img", {
          src: a,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        });
    }
    return M.jsx("div", {
      className: r,
      style: t,
      children: u
    });
  };
  let t3 = e => {
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  };
  exports.NewsCard = e => {
    let {
      events: t,
      pushMilliTime: r,
      openDoubao: n,
      request: i,
      reportClick: a
    } = e;
    let o = t.reduce((e, t) => {
      var r;
      if (((r = t.voice) == null ? undefined : r.voiceDuration) !== undefined) {
        return e + t.voice.voiceDuration;
      } else {
        return e;
      }
    }, 0);
    let s = "";
    let l = 0;
    if (o >= 1 && o < 60) {
      l = Math.floor(o);
      s = `${l} \u{79D2}`;
    } else if (o >= 60) {
      l = Math.floor(o / 60);
      s = `${l} \u{5206}\u{949F}`;
    }
    let c = new Date(r);
    let d = "";
    let u = (c.getMonth() + 1).toString();
    let h = c.getDate().toString();
    if (u.length === 1) {
      u = `0${u}`;
    }
    if (h.length === 1) {
      h = `0${h}`;
    }
    d = `${u}/${h}`;
    return M.jsxs("div", {
      className: "news-card",
      children: [M.jsxs("div", {
        className: "header",
        children: [M.jsx("div", {
          className: "header__left",
          children: M.jsxs("div", {
            className: "header__left__content",
            children: [M.jsx("div", {
              className: "header__left__content__title",
              children: "豆包日报"
            }), M.jsxs("div", {
              className: "header__left__content__tip",
              children: [d, s ? ` \xb7 \u{542C}\u{5B8C}\u{9700}\u{8981} ${s}` : ""]
            })]
          })
        }), M.jsx("div", {
          className: "header__right",
          children: M.jsxs("div", {
            className: "header__right__audio",
            onClick: () => {
              if (n != null) {
                n();
              }
              a("play_button");
            },
            children: [M.jsx("div", {
              className: "header__right__audio__icon",
              children: M.jsx(D, {})
            }), M.jsx("div", {
              className: "header__right__audio__text",
              children: "听一听"
            })]
          })
        })]
      }), M.jsx("div", {
        className: "content",
        children: M.jsx("div", {
          className: "news-list",
          children: t.map((e, t) => {
            var r;
            var o;
            if ((r = t3(e.attrs)) != null) {
              r.category;
            }
            return M.jsxs("div", {
              className: "news-list__item",
              children: [M.jsx("div", {
                className: "news-list__item__info",
                style: {
                  borderTop: t !== 0 ? "0.5px solid rgba(0, 0, 0, 0.08)" : ""
                },
                children: M.jsx("div", {
                  className: "news-list__item__info__title",
                  onClick: () => {
                    if (n != null) {
                      n();
                    }
                    a("event-title");
                  },
                  children: e.title
                })
              }), ((o = e.smallImages) == null ? undefined : o[0]) && M.jsx(t2, {
                className: "news-list__item__img",
                request: i,
                token: e.smallImages[0].token
              })]
            });
          })
        })
      }), M.jsx("div", {
        className: "footer",
        children: M.jsx("div", {
          className: "footer__button",
          onClick: () => {
            if (n != null) {
              n();
            }
            a("more_news");
          },
          children: "更多资讯"
        })
      })]
    });
  };
  exports.httpClient = tY;
  exports.jsxRuntimeExports = M;
  exports.parseJson = t3;
}