// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'axios'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 740865
         */
module.exports = function (module, exports, require) {
  let r;
  let i;
  let o;
  var a = {};
  function s(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  let {
    toString: u
  } = Object.prototype;
  let {
    getPrototypeOf: c
  } = Object;
  r = Object.create(null);
  let l = e => {
    let t = u.call(e);
    return r[t] ||= t.slice(8, -1).toLowerCase();
  };
  let f = e => {
    e = e.toLowerCase();
    return t => l(t) === e;
  };
  let h = e => t => typeof t === e;
  let {
    isArray: d
  } = Array;
  let p = h("undefined");
  let g = f("ArrayBuffer");
  let v = h("string");
  let m = h("function");
  let y = h("number");
  let b = e => e !== null && typeof e == "object";
  let _ = e => {
    if (l(e) !== "object") {
      return false;
    }
    let t = c(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  let w = f("Date");
  let E = f("File");
  let S = f("Blob");
  let x = f("FileList");
  let k = f("URLSearchParams");
  function O(e, t, {
    allOwnKeys: n = false
  } = {}) {
    let r;
    let i;
    if (e != null) {
      if (typeof e != "object") {
        e = [e];
      }
      if (d(e)) {
        r = 0;
        i = e.length;
        for (; r < i; r++) {
          t.call(null, e[r], r, e);
        }
      } else {
        let i;
        let o = n ? Object.getOwnPropertyNames(e) : Object.keys(e);
        let a = o.length;
        for (r = 0; r < a; r++) {
          i = o[r];
          t.call(null, e[i], i, e);
        }
      }
    }
  }
  function A(e, t) {
    let n;
    t = t.toLowerCase();
    let r = Object.keys(e);
    let i = r.length;
    while (i-- > 0) {
      if (t === (n = r[i]).toLowerCase()) {
        return n;
      }
    }
    return null;
  }
  let T = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global;
  let R = e => !p(e) && e !== T;
  i = typeof Uint8Array != "undefined" && c(Uint8Array);
  let C = e => i && e instanceof i;
  let M = f("HTMLFormElement");
  let P = (({
    hasOwnProperty: e
  }) => (t, n) => e.call(t, n))(Object.prototype);
  let D = f("RegExp");
  let j = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e);
    let r = {};
    O(n, (n, i) => {
      let o;
      if ((o = t(n, i, e)) !== false) {
        r[i] = o || n;
      }
    });
    Object.defineProperties(e, r);
  };
  let I = "abcdefghijklmnopqrstuvwxyz";
  let N = "0123456789";
  let L = {
    DIGIT: N,
    ALPHA: I,
    ALPHA_DIGIT: I + I.toUpperCase() + N
  };
  let B = f("AsyncFunction");
  var Z = {
    isArray: d,
    isArrayBuffer: g,
    isBuffer: function (e) {
      return e !== null && !p(e) && e.constructor !== null && !p(e.constructor) && m(e.constructor.isBuffer) && e.constructor.isBuffer(e);
    },
    isFormData: e => {
      let t;
      return e && (typeof FormData == "function" && e instanceof FormData || m(e.append) && ((t = l(e)) === "formdata" || t === "object" && m(e.toString) && e.toString() === "[object FormData]"));
    },
    isArrayBufferView: function (e) {
      let t;
      if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(e);
      } else {
        return e && e.buffer && g(e.buffer);
      }
    },
    isString: v,
    isNumber: y,
    isBoolean: e => e === true || e === false,
    isObject: b,
    isPlainObject: _,
    isUndefined: p,
    isDate: w,
    isFile: E,
    isBlob: S,
    isRegExp: D,
    isFunction: m,
    isStream: e => b(e) && m(e.pipe),
    isURLSearchParams: k,
    isTypedArray: C,
    isFileList: x,
    forEach: O,
    merge: function e() {
      let {
        caseless: t
      } = R(this) && this || {};
      let n = {};
      let r = (r, i) => {
        let o = t && A(n, i) || i;
        if (_(n[o]) && _(r)) {
          n[o] = e(n[o], r);
        } else if (_(r)) {
          n[o] = e({}, r);
        } else if (d(r)) {
          n[o] = r.slice();
        } else {
          n[o] = r;
        }
      };
      for (let e = 0, t = arguments.length; e < t; e++) {
        if (arguments[e]) {
          O(arguments[e], r);
        }
      }
      return n;
    },
    extend: (e, t, n, {
      allOwnKeys: r
    } = {}) => {
      O(t, (t, r) => {
        if (n && m(t)) {
          e[r] = s(t, n);
        } else {
          e[r] = t;
        }
      }, {
        allOwnKeys: r
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
    inherits: (e, t, n, r) => {
      e.prototype = Object.create(t.prototype, r);
      e.prototype.constructor = e;
      Object.defineProperty(e, "super", {
        value: t.prototype
      });
      if (n) {
        Object.assign(e.prototype, n);
      }
    },
    toFlatObject: (e, t, n, r) => {
      let i;
      let o;
      let a;
      let s = {};
      t = t || {};
      if (e == null) {
        return t;
      }
      do {
        for (o = (i = Object.getOwnPropertyNames(e)).length; o-- > 0;) {
          a = i[o];
          if ((!r || r(a, e, t)) && !s[a]) {
            t[a] = e[a];
            s[a] = true;
          }
        }
        e = n !== false && c(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: l,
    kindOfTest: f,
    endsWith: (e, t, n) => {
      e = String(e);
      if (n === undefined || n > e.length) {
        n = e.length;
      }
      n -= t.length;
      let r = e.indexOf(t, n);
      return r !== -1 && r === n;
    },
    toArray: e => {
      if (!e) {
        return null;
      }
      if (d(e)) {
        return e;
      }
      let t = e.length;
      if (!y(t)) {
        return null;
      }
      let n = Array(t);
      while (t-- > 0) {
        n[t] = e[t];
      }
      return n;
    },
    forEachEntry: (e, t) => {
      let n;
      let r = (e && e[Symbol.iterator]).call(e);
      while ((n = r.next()) && !n.done) {
        let r = n.value;
        t.call(e, r[0], r[1]);
      }
    },
    matchAll: (e, t) => {
      let n;
      let r = [];
      while ((n = e.exec(t)) !== null) {
        r.push(n);
      }
      return r;
    },
    isHTMLForm: M,
    hasOwnProperty: P,
    hasOwnProp: P,
    reduceDescriptors: j,
    freezeMethods: e => {
      j(e, (t, n) => {
        if (m(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) {
          return false;
        }
        if (m(e[n])) {
          t.enumerable = false;
          if ("writable" in t) {
            t.writable = false;
            return;
          }
          t.set ||= () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          };
        }
      });
    },
    toObjectSet: (e, t) => {
      let n = {};
      (e => {
        e.forEach(e => {
          n[e] = true;
        });
      })(d(e) ? e : String(e).split(t));
      return n;
    },
    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
    noop: () => {},
    toFiniteNumber: (e, t) => Number.isFinite(e *= 1) ? e : t,
    findKey: A,
    global: T,
    isContextDefined: R,
    ALPHABET: L,
    generateString: (e = 16, t = L.ALPHA_DIGIT) => {
      let n = "";
      let {
        length: r
      } = t;
      while (e--) {
        n += t[Math.random() * r | 0];
      }
      return n;
    },
    isSpecCompliantForm: function (e) {
      return !!e && !!m(e.append) && e[Symbol.toStringTag] === "FormData" && !!e[Symbol.iterator];
    },
    toJSONObject: e => {
      let t = Array(10);
      let n = (e, r) => {
        if (b(e)) {
          if (t.indexOf(e) >= 0) {
            return;
          }
          if (!("toJSON" in e)) {
            t[r] = e;
            let i = d(e) ? [] : {};
            O(e, (e, t) => {
              let o = n(e, r + 1);
              if (!p(o)) {
                i[t] = o;
              }
            });
            t[r] = undefined;
            return i;
          }
        }
        return e;
      };
      return n(e, 0);
    },
    isAsyncFn: B,
    isThenable: e => e && (b(e) || m(e)) && m(e.then) && m(e.catch)
  };
  function U(e, t, n, r, i) {
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
    if (n) {
      this.config = n;
    }
    if (r) {
      this.request = r;
    }
    if (i) {
      this.response = i;
    }
  }
  Z.inherits(U, Error, {
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
        config: Z.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  let z = U.prototype;
  let F = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    F[e] = {
      value: e
    };
  });
  Object.defineProperties(U, F);
  Object.defineProperty(z, "isAxiosError", {
    value: true
  });
  U.from = (e, t, n, r, i, o) => {
    let a = Object.create(z);
    Z.toFlatObject(e, a, function (e) {
      return e !== Error.prototype;
    }, e => e !== "isAxiosError");
    U.call(a, e.message, t, n, r, i);
    a.cause = e;
    a.name = e.name;
    if (o) {
      Object.assign(a, o);
    }
    return a;
  };
  var H = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  function G(e) {
    return Z.isPlainObject(e) || Z.isArray(e);
  }
  function V(e) {
    if (Z.endsWith(e, "[]")) {
      return e.slice(0, -2);
    } else {
      return e;
    }
  }
  function $(e, t, n) {
    if (e) {
      return e.concat(t).map(function (e, t) {
        e = V(e);
        if (!n && t) {
          return "[" + e + "]";
        } else {
          return e;
        }
      }).join(n ? "." : "");
    } else {
      return t;
    }
  }
  let W = Z.toFlatObject(Z, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function q(e, t, n) {
    if (!Z.isObject(e)) {
      throw TypeError("target must be an object");
    }
    t = t || new FormData();
    let r = (n = Z.toFlatObject(n, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function (e, t) {
      return !Z.isUndefined(t[e]);
    })).metaTokens;
    let i = n.visitor || c;
    let o = n.dots;
    let a = n.indexes;
    let s = (n.Blob || typeof Blob != "undefined" && Blob) && Z.isSpecCompliantForm(t);
    if (!Z.isFunction(i)) {
      throw TypeError("visitor must be a function");
    }
    function u(e) {
      if (e === null) {
        return "";
      }
      if (Z.isDate(e)) {
        return e.toISOString();
      }
      if (!s && Z.isBlob(e)) {
        throw new U("Blob is not supported. Use a Buffer instead.");
      }
      if (Z.isArrayBuffer(e) || Z.isTypedArray(e)) {
        if (s && typeof Blob == "function") {
          return new Blob([e]);
        } else {
          return H.from(e);
        }
      } else {
        return e;
      }
    }
    function c(e, n, i) {
      let s = e;
      if (e && !i && typeof e == "object") {
        if (Z.endsWith(n, "{}")) {
          n = r ? n : n.slice(0, -2);
          e = JSON.stringify(e);
        } else {
          var c;
          if (Z.isArray(e) && (c = e, Z.isArray(c) && !c.some(G)) || (Z.isFileList(e) || Z.endsWith(n, "[]")) && (s = Z.toArray(e))) {
            n = V(n);
            s.forEach(function (e, r) {
              if (!Z.isUndefined(e) && e !== null) {
                t.append(a === true ? $([n], r, o) : a === null ? n : n + "[]", u(e));
              }
            });
            return false;
          }
        }
      }
      return !!G(e) || (t.append($(i, n, o), u(e)), false);
    }
    let l = [];
    let f = Object.assign(W, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: G
    });
    if (!Z.isObject(e)) {
      throw TypeError("data must be an object");
    }
    (function e(n, r) {
      if (!Z.isUndefined(n)) {
        if (l.indexOf(n) !== -1) {
          throw Error("Circular reference detected in " + r.join("."));
        }
        l.push(n);
        Z.forEach(n, function (n, o) {
          if ((!Z.isUndefined(n) && n !== null && i.call(t, n, Z.isString(o) ? o.trim() : o, r, f)) === true) {
            e(n, r ? r.concat(o) : [o]);
          }
        });
        l.pop();
      }
    })(e);
    return t;
  }
  function K(e) {
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
  function J(e, t) {
    this._pairs = [];
    if (e) {
      q(e, this, t);
    }
  }
  let X = J.prototype;
  function Y(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function Q(e, t, n) {
    let r;
    if (!t) {
      return e;
    }
    let i = n && n.encode || Y;
    let o = n && n.serialize;
    if (r = o ? o(t, n) : Z.isURLSearchParams(t) ? t.toString() : new J(t, n).toString(i)) {
      let t = e.indexOf("#");
      if (t !== -1) {
        e = e.slice(0, t);
      }
      e += (e.indexOf("?") === -1 ? "?" : "&") + r;
    }
    return e;
  }
  X.append = function (e, t) {
    this._pairs.push([e, t]);
  };
  X.toString = function (e) {
    let t = e ? function (t) {
      return e.call(this, t, K);
    } : K;
    return this._pairs.map(function (e) {
      return t(e[0]) + "=" + t(e[1]);
    }, "").join("&");
  };
  var ee = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: !!n && n.synchronous,
        runWhen: n ? n.runWhen : null
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
      Z.forEach(this.handlers, function (t) {
        if (t !== null) {
          e(t);
        }
      });
    }
  };
  var et = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  var en = typeof URLSearchParams != "undefined" ? URLSearchParams : J;
  var er = typeof FormData != "undefined" ? FormData : null;
  var ei = typeof Blob != "undefined" ? Blob : null;
  let eo = typeof window != "undefined" && typeof document != "undefined";
  o = typeof navigator != "undefined" && navigator.product;
  let ea = eo && ["ReactNative", "NativeScript", "NS"].indexOf(o) < 0;
  let es = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
  var eu = {
    ...a,
    isBrowser: true,
    classes: {
      URLSearchParams: en,
      FormData: er,
      Blob: ei
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  function ec(e) {
    if (Z.isFormData(e) && Z.isFunction(e.entries)) {
      let t = {};
      Z.forEachEntry(e, (e, n) => {
        (function e(t, n, r, i) {
          let o = t[i++];
          if (o === "__proto__") {
            return true;
          }
          let a = Number.isFinite(+o);
          let s = i >= t.length;
          o = !o && Z.isArray(r) ? r.length : o;
          if (s) {
            if (Z.hasOwnProp(r, o)) {
              r[o] = [r[o], n];
            } else {
              r[o] = n;
            }
          } else {
            if (!r[o] || !Z.isObject(r[o])) {
              r[o] = [];
            }
            if (e(t, n, r[o], i) && Z.isArray(r[o])) {
              r[o] = function (e) {
                let t;
                let n;
                let r = {};
                let i = Object.keys(e);
                let o = i.length;
                for (t = 0; t < o; t++) {
                  r[n = i[t]] = e[n];
                }
                return r;
              }(r[o]);
            }
          }
          return !a;
        })(Z.matchAll(/\w+|\[(\w*)]/g, e).map(e => e[0] === "[]" ? "" : e[1] || e[0]), n, t, 0);
      });
      return t;
    }
    return null;
  }
  let el = {
    transitional: et,
    adapter: ["xhr", "http"],
    transformRequest: [function (e, t) {
      let n;
      let r = t.getContentType() || "";
      let i = r.indexOf("application/json") > -1;
      let o = Z.isObject(e);
      if (o && Z.isHTMLForm(e)) {
        e = new FormData(e);
      }
      if (Z.isFormData(e)) {
        if (i) {
          return JSON.stringify(ec(e));
        } else {
          return e;
        }
      }
      if (Z.isArrayBuffer(e) || Z.isBuffer(e) || Z.isStream(e) || Z.isFile(e) || Z.isBlob(e)) {
        return e;
      }
      if (Z.isArrayBufferView(e)) {
        return e.buffer;
      }
      if (Z.isURLSearchParams(e)) {
        t.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return e.toString();
      }
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1) {
          var a;
          var s;
          return (a = e, s = this.formSerializer, q(a, new eu.classes.URLSearchParams(), Object.assign({
            visitor: function (e, t, n, r) {
              if (eu.isNode && Z.isBuffer(e)) {
                this.append(t, e.toString("base64"));
                return false;
              } else {
                return r.defaultVisitor.apply(this, arguments);
              }
            }
          }, s))).toString();
        }
        if ((n = Z.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          let t = this.env && this.env.FormData;
          return q(n ? {
            "files[]": e
          } : e, t && new t(), this.formSerializer);
        }
      }
      if (o || i) {
        t.setContentType("application/json", false);
        return function (e, t, n) {
          if (Z.isString(e)) {
            try {
              JSON.parse(e);
              return Z.trim(e);
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
      let t = this.transitional || el.transitional;
      let n = t && t.forcedJSONParsing;
      let r = this.responseType === "json";
      if (e && Z.isString(e) && (n && !this.responseType || r)) {
        let n = t && t.silentJSONParsing;
        try {
          return JSON.parse(e);
        } catch (e) {
          if (!n && r) {
            if (e.name === "SyntaxError") {
              throw U.from(e, U.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
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
      FormData: eu.classes.FormData,
      Blob: eu.classes.Blob
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
  Z.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    el.headers[e] = {};
  });
  let ef = Z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
  var eh = e => {
    let t;
    let n;
    let r;
    let i = {};
    if (e) {
      e.split("\n").forEach(function (e) {
        r = e.indexOf(":");
        t = e.substring(0, r).trim().toLowerCase();
        n = e.substring(r + 1).trim();
        if (t && (!i[t] || !ef[t])) {
          if (t === "set-cookie") {
            if (i[t]) {
              i[t].push(n);
            } else {
              i[t] = [n];
            }
          } else {
            i[t] = i[t] ? i[t] + ", " + n : n;
          }
        }
      });
    }
    return i;
  };
  let ed = Symbol("internals");
  function ep(e) {
    return e && String(e).trim().toLowerCase();
  }
  function eg(e) {
    if (e === false || e == null) {
      return e;
    } else if (Z.isArray(e)) {
      return e.map(eg);
    } else {
      return String(e);
    }
  }
  let ev = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function em(e, t, n, r, i) {
    if (Z.isFunction(r)) {
      return r.call(this, t, n);
    }
    if (i) {
      t = n;
    }
    if (Z.isString(t)) {
      if (Z.isString(r)) {
        return t.indexOf(r) !== -1;
      }
      if (Z.isRegExp(r)) {
        return r.test(t);
      }
    }
  }
  class ey {
    constructor(e) {
      if (e) {
        this.set(e);
      }
    }
    set(e, t, n) {
      let r = this;
      function i(e, t, n) {
        let i = ep(t);
        if (!i) {
          throw Error("header name must be a non-empty string");
        }
        let o = Z.findKey(r, i);
        if (!o || r[o] === undefined || n === true || n === undefined && r[o] !== false) {
          r[o || t] = eg(e);
        }
      }
      let o = (e, t) => Z.forEach(e, (e, n) => i(e, n, t));
      if (Z.isPlainObject(e) || e instanceof this.constructor) {
        o(e, t);
      } else if (Z.isString(e) && (e = e.trim()) && !ev(e)) {
        o(eh(e), t);
      } else if (e != null) {
        i(t, e, n);
      }
      return this;
    }
    get(e, t) {
      if (e = ep(e)) {
        let n = Z.findKey(this, e);
        if (n) {
          let e = this[n];
          if (!t) {
            return e;
          }
          if (t === true) {
            return function (e) {
              let t;
              let n = Object.create(null);
              let r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              while (t = r.exec(e)) {
                n[t[1]] = t[2];
              }
              return n;
            }(e);
          }
          if (Z.isFunction(t)) {
            return t.call(this, e, n);
          }
          if (Z.isRegExp(t)) {
            return t.exec(e);
          }
          throw TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if (e = ep(e)) {
        let n = Z.findKey(this, e);
        return !!n && this[n] !== undefined && (!t || !!em(this, this[n], n, t));
      }
      return false;
    }
    delete(e, t) {
      let n = this;
      let r = false;
      function i(e) {
        if (e = ep(e)) {
          let i = Z.findKey(n, e);
          if (i && (!t || em(n, n[i], i, t))) {
            delete n[i];
            r = true;
          }
        }
      }
      if (Z.isArray(e)) {
        e.forEach(i);
      } else {
        i(e);
      }
      return r;
    }
    clear(e) {
      let t = Object.keys(this);
      let n = t.length;
      let r = false;
      while (n--) {
        let i = t[n];
        if (!e || em(this, this[i], i, e, true)) {
          delete this[i];
          r = true;
        }
      }
      return r;
    }
    normalize(e) {
      let t = this;
      let n = {};
      Z.forEach(this, (r, i) => {
        let o = Z.findKey(n, i);
        if (o) {
          t[o] = eg(r);
          delete t[i];
          return;
        }
        let a = e ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n) : String(i).trim();
        if (a !== i) {
          delete t[i];
        }
        t[a] = eg(r);
        n[a] = true;
      });
      return this;
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      let t = Object.create(null);
      Z.forEach(this, (n, r) => {
        if (n != null && n !== false) {
          t[r] = e && Z.isArray(n) ? n.join(", ") : n;
        }
      });
      return t;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
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
      let n = new this(e);
      t.forEach(e => n.set(e));
      return n;
    }
    static accessor(e) {
      let t = (this[ed] = this[ed] = {
        accessors: {}
      }).accessors;
      let n = this.prototype;
      function r(e) {
        let r = ep(e);
        if (!t[r]) {
          (function (e, t) {
            let n = Z.toCamelCase(" " + t);
            ["get", "set", "has"].forEach(r => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, i) {
                  return this[r].call(this, t, e, n, i);
                },
                configurable: true
              });
            });
          })(n, e);
          t[r] = true;
        }
      }
      if (Z.isArray(e)) {
        e.forEach(r);
      } else {
        r(e);
      }
      return this;
    }
  }
  function eb(e, t) {
    let n = this || el;
    let r = t || n;
    let i = ey.from(r.headers);
    let o = r.data;
    Z.forEach(e, function (e) {
      o = e.call(n, o, i.normalize(), t ? t.status : undefined);
    });
    i.normalize();
    return o;
  }
  function e_(e) {
    return !!e && !!e.__CANCEL__;
  }
  function ew(e, t, n) {
    U.call(this, e == null ? "canceled" : e, U.ERR_CANCELED, t, n);
    this.name = "CanceledError";
  }
  ey.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  Z.reduceDescriptors(ey.prototype, ({
    value: e
  }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      }
    };
  });
  Z.freezeMethods(ey);
  Z.inherits(ew, U, {
    __CANCEL__: true
  });
  var eE = eu.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
      let a = [e + "=" + encodeURIComponent(t)];
      if (Z.isNumber(n)) {
        a.push("expires=" + new Date(n).toGMTString());
      }
      if (Z.isString(r)) {
        a.push("path=" + r);
      }
      if (Z.isString(i)) {
        a.push("domain=" + i);
      }
      if (o === true) {
        a.push("secure");
      }
      document.cookie = a.join("; ");
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
  function eS(e, t) {
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
  var ex = eu.hasStandardBrowserEnv ? function () {
    let e;
    let t = /(msie|trident)/i.test(navigator.userAgent);
    let n = document.createElement("a");
    function r(e) {
      let r = e;
      if (t) {
        n.setAttribute("href", r);
        r = n.href;
      }
      n.setAttribute("href", r);
      return {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    e = r(window.location.href);
    return function (t) {
      let n = Z.isString(t) ? r(t) : t;
      return n.protocol === e.protocol && n.host === e.host;
    };
  }() : function () {
    return true;
  };
  function ek(e, t) {
    let n;
    let r = Array(e = e || 10);
    let i = Array(e);
    let o = 0;
    let a = 0;
    t = t !== undefined ? t : 1000;
    return function (s) {
      let u = Date.now();
      let c = i[a];
      n ||= u;
      r[o] = s;
      i[o] = u;
      let l = a;
      let f = 0;
      while (l !== o) {
        f += r[l++];
        l %= e;
      }
      if ((o = (o + 1) % e) === a) {
        a = (a + 1) % e;
      }
      if (u - n < t) {
        return;
      }
      let h = c && u - c;
      if (h) {
        return Math.round(f * 1000 / h);
      } else {
        return undefined;
      }
    };
  }
  function eO(e, t) {
    let n = 0;
    let r = ek(50, 250);
    return i => {
      let o = i.loaded;
      let a = i.lengthComputable ? i.total : undefined;
      let s = o - n;
      let u = r(s);
      n = o;
      let c = {
        loaded: o,
        total: a,
        progress: a ? o / a : undefined,
        bytes: s,
        rate: u || undefined,
        estimated: u && a && o <= a ? (a - o) / u : undefined,
        event: i
      };
      c[t ? "download" : "upload"] = true;
      e(c);
    };
  }
  let eA = {
    http: null,
    xhr: typeof XMLHttpRequest != "undefined" && function (e) {
      return new Promise(function (t, n) {
        let r;
        let i;
        let o = e.data;
        let a = ey.from(e.headers).normalize();
        let {
          responseType: s,
          withXSRFToken: u
        } = e;
        function c() {
          if (e.cancelToken) {
            e.cancelToken.unsubscribe(r);
          }
          if (e.signal) {
            e.signal.removeEventListener("abort", r);
          }
        }
        if (Z.isFormData(o)) {
          if (eu.hasStandardBrowserEnv || eu.hasStandardBrowserWebWorkerEnv) {
            a.setContentType(false);
          } else if ((i = a.getContentType()) !== false) {
            let [e, ...t] = i ? i.split(";").map(e => e.trim()).filter(Boolean) : [];
            a.setContentType([e || "multipart/form-data", ...t].join("; "));
          }
        }
        let l = new XMLHttpRequest();
        if (e.auth) {
          let t = e.auth.username || "";
          let n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          a.set("Authorization", "Basic " + btoa(t + ":" + n));
        }
        let f = eS(e.baseURL, e.url);
        function h() {
          if (!l) {
            return;
          }
          let r = ey.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
          (function (e, t, n) {
            let r = n.config.validateStatus;
            if (!n.status || !r || r(n.status)) {
              e(n);
            } else {
              t(new U("Request failed with status code " + n.status, [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n));
            }
          })(function (e) {
            t(e);
            c();
          }, function (e) {
            n(e);
            c();
          }, {
            data: s && s !== "text" && s !== "json" ? l.response : l.responseText,
            status: l.status,
            statusText: l.statusText,
            headers: r,
            config: e,
            request: l
          });
          l = null;
        }
        l.open(e.method.toUpperCase(), Q(f, e.params, e.paramsSerializer), true);
        l.timeout = e.timeout;
        if ("onloadend" in l) {
          l.onloadend = h;
        } else {
          l.onreadystatechange = function () {
            if (l && l.readyState === 4 && (l.status !== 0 || l.responseURL && l.responseURL.indexOf("file:") === 0)) {
              setTimeout(h);
            }
          };
        }
        l.onabort = function () {
          if (l) {
            n(new U("Request aborted", U.ECONNABORTED, e, l));
            l = null;
          }
        };
        l.onerror = function () {
          n(new U("Network Error", U.ERR_NETWORK, e, l));
          l = null;
        };
        l.ontimeout = function () {
          let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
          let r = e.transitional || et;
          if (e.timeoutErrorMessage) {
            t = e.timeoutErrorMessage;
          }
          n(new U(t, r.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED, e, l));
          l = null;
        };
        if (eu.hasStandardBrowserEnv && (u && Z.isFunction(u) && (u = u(e)), u || u !== false && ex(f))) {
          let t = e.xsrfHeaderName && e.xsrfCookieName && eE.read(e.xsrfCookieName);
          if (t) {
            a.set(e.xsrfHeaderName, t);
          }
        }
        if (o === undefined) {
          a.setContentType(null);
        }
        if ("setRequestHeader" in l) {
          Z.forEach(a.toJSON(), function (e, t) {
            l.setRequestHeader(t, e);
          });
        }
        if (!Z.isUndefined(e.withCredentials)) {
          l.withCredentials = !!e.withCredentials;
        }
        if (s && s !== "json") {
          l.responseType = e.responseType;
        }
        if (typeof e.onDownloadProgress == "function") {
          l.addEventListener("progress", eO(e.onDownloadProgress, true));
        }
        if (typeof e.onUploadProgress == "function" && l.upload) {
          l.upload.addEventListener("progress", eO(e.onUploadProgress));
        }
        if (e.cancelToken || e.signal) {
          r = t => {
            if (l) {
              n(!t || t.type ? new ew(null, e, l) : t);
              l.abort();
              l = null;
            }
          };
          if (e.cancelToken) {
            e.cancelToken.subscribe(r);
          }
          if (e.signal) {
            if (e.signal.aborted) {
              r();
            } else {
              e.signal.addEventListener("abort", r);
            }
          }
        }
        let d = function (e) {
          let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return t && t[1] || "";
        }(f);
        if (d && eu.protocols.indexOf(d) === -1) {
          n(new U("Unsupported protocol " + d + ":", U.ERR_BAD_REQUEST, e));
          return;
        }
        l.send(o || null);
      });
    }
  };
  Z.forEach(eA, (e, t) => {
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
  let eT = e => `- ${e}`;
  let eR = e => Z.isFunction(e) || e === null || e === false;
  var eC = e => {
    let t;
    let n;
    let {
      length: r
    } = e = Z.isArray(e) ? e : [e];
    let i = {};
    for (let o = 0; o < r; o++) {
      let r;
      n = t = e[o];
      if (!eR(t) && (n = eA[(r = String(t)).toLowerCase()]) === undefined) {
        throw new U(`Unknown adapter '${r}'`);
      }
      if (n) {
        break;
      }
      i[r || "#" + o] = n;
    }
    if (!n) {
      let e = Object.entries(i).map(([e, t]) => `adapter ${e} ${t === false ? "is not supported by the environment" : "is not available in the build"}`);
      throw new U("There is no suitable adapter to dispatch the request " + (r ? e.length > 1 ? "since :\n" + e.map(eT).join("\n") : " " + eT(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
    }
    return n;
  };
  function eM(e) {
    if (e.cancelToken) {
      e.cancelToken.throwIfRequested();
    }
    if (e.signal && e.signal.aborted) {
      throw new ew(null, e);
    }
  }
  function eP(e) {
    eM(e);
    e.headers = ey.from(e.headers);
    e.data = eb.call(e, e.transformRequest);
    if (["post", "put", "patch"].indexOf(e.method) !== -1) {
      e.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    return eC(e.adapter || el.adapter)(e).then(function (t) {
      eM(e);
      t.data = eb.call(e, e.transformResponse, t);
      t.headers = ey.from(t.headers);
      return t;
    }, function (t) {
      if (!e_(t)) {
        eM(e);
        if (t && t.response) {
          t.response.data = eb.call(e, e.transformResponse, t.response);
          t.response.headers = ey.from(t.response.headers);
        }
      }
      return Promise.reject(t);
    });
  }
  let eD = e => e instanceof ey ? e.toJSON() : e;
  function ej(e, t) {
    t = t || {};
    let n = {};
    function r(e, t, n) {
      if (Z.isPlainObject(e) && Z.isPlainObject(t)) {
        return Z.merge.call({
          caseless: n
        }, e, t);
      } else if (Z.isPlainObject(t)) {
        return Z.merge({}, t);
      } else if (Z.isArray(t)) {
        return t.slice();
      } else {
        return t;
      }
    }
    function i(e, t, n) {
      if (Z.isUndefined(t)) {
        if (Z.isUndefined(e)) {
          return undefined;
        } else {
          return r(undefined, e, n);
        }
      } else {
        return r(e, t, n);
      }
    }
    function o(e, t) {
      if (!Z.isUndefined(t)) {
        return r(undefined, t);
      }
    }
    function a(e, t) {
      if (Z.isUndefined(t)) {
        if (Z.isUndefined(e)) {
          return undefined;
        } else {
          return r(undefined, e);
        }
      } else {
        return r(undefined, t);
      }
    }
    function s(n, i, o) {
      if (o in t) {
        return r(n, i);
      } else if (o in e) {
        return r(undefined, n);
      } else {
        return undefined;
      }
    }
    let u = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: (e, t) => i(eD(e), eD(t), true)
    };
    Z.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
      let o = u[r] || i;
      let a = o(e[r], t[r], r);
      if (!Z.isUndefined(a) || o === s) {
        n[r] = a;
      }
    });
    return n;
  }
  let eI = "1.6.7";
  let eN = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    eN[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  let eL = {};
  eN.transitional = function (e, t, n) {
    return (r, i, o) => {
      if (e === false) {
        throw new U("[Axios v" + eI + "] Transitional option '" + i + "' has been removed" + (t ? " in " + t : "") + (n ? ". " + n : ""), U.ERR_DEPRECATED);
      }
      if (t && !eL[i]) {
        eL[i] = true;
      }
      return !e || e(r, i, o);
    };
  };
  var eB = {
    assertOptions: function (e, t, n) {
      if (typeof e != "object") {
        throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
      }
      let r = Object.keys(e);
      let i = r.length;
      while (i-- > 0) {
        let o = r[i];
        let a = t[o];
        if (a) {
          let t = e[o];
          let n = t === undefined || a(t, o, e);
          if (n !== true) {
            throw new U("option " + o + " must be " + n, U.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (n !== true) {
          throw new U("Unknown option " + o, U.ERR_BAD_OPTION);
        }
      }
    },
    validators: eN
  };
  let eZ = eB.validators;
  class eU {
    constructor(e) {
      this.defaults = e;
      this.interceptors = {
        request: new ee(),
        response: new ee()
      };
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t;
          if (Error.captureStackTrace) {
            Error.captureStackTrace(t = {});
          } else {
            t = Error();
          }
          let n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
          if (e.stack) {
            if (n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, ""))) {
              e.stack += "\n" + n;
            }
          } else {
            e.stack = n;
          }
        }
        throw e;
      }
    }
    _request(e, t) {
      let n;
      let r;
      if (typeof e == "string") {
        (t = t || {}).url = e;
      } else {
        t = e || {};
      }
      let {
        transitional: i,
        paramsSerializer: o,
        headers: a
      } = t = ej(this.defaults, t);
      if (i !== undefined) {
        eB.assertOptions(i, {
          silentJSONParsing: eZ.transitional(eZ.boolean),
          forcedJSONParsing: eZ.transitional(eZ.boolean),
          clarifyTimeoutError: eZ.transitional(eZ.boolean)
        }, false);
      }
      if (o != null) {
        if (Z.isFunction(o)) {
          t.paramsSerializer = {
            serialize: o
          };
        } else {
          eB.assertOptions(o, {
            encode: eZ.function,
            serialize: eZ.function
          }, true);
        }
      }
      t.method = (t.method || this.defaults.method || "get").toLowerCase();
      let s = a && Z.merge(a.common, a[t.method]);
      if (a) {
        Z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
          delete a[e];
        });
      }
      t.headers = ey.concat(s, a);
      let u = [];
      let c = true;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen != "function" || e.runWhen(t) !== false) {
          c = c && e.synchronous;
          u.unshift(e.fulfilled, e.rejected);
        }
      });
      let l = [];
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let f = 0;
      if (!c) {
        let e = [eP.bind(this), undefined];
        e.unshift.apply(e, u);
        e.push.apply(e, l);
        r = e.length;
        n = Promise.resolve(t);
        while (f < r) {
          n = n.then(e[f++], e[f++]);
        }
        return n;
      }
      r = u.length;
      let h = t;
      for (f = 0; f < r;) {
        let e = u[f++];
        let t = u[f++];
        try {
          h = e(h);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        n = eP.call(this, h);
      } catch (e) {
        return Promise.reject(e);
      }
      f = 0;
      r = l.length;
      while (f < r) {
        n = n.then(l[f++], l[f++]);
      }
      return n;
    }
    getUri(e) {
      return Q(eS((e = ej(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
  }
  Z.forEach(["delete", "get", "head", "options"], function (e) {
    eU.prototype[e] = function (t, n) {
      return this.request(ej(n || {}, {
        method: e,
        url: t,
        data: (n || {}).data
      }));
    };
  });
  Z.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (n, r, i) {
        return this.request(ej(i || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: n,
          data: r
        }));
      };
    }
    eU.prototype[e] = t();
    eU.prototype[e + "Form"] = t(true);
  });
  class ez {
    constructor(e) {
      let t;
      if (typeof e != "function") {
        throw TypeError("executor must be a function.");
      }
      this.promise = new Promise(function (e) {
        t = e;
      });
      let n = this;
      this.promise.then(e => {
        if (!n._listeners) {
          return;
        }
        let t = n._listeners.length;
        while (t-- > 0) {
          n._listeners[t](e);
        }
        n._listeners = null;
      });
      this.promise.then = e => {
        let t;
        let r = new Promise(e => {
          n.subscribe(e);
          t = e;
        }).then(e);
        r.cancel = function () {
          n.unsubscribe(t);
        };
        return r;
      };
      e(function (e, r, i) {
        if (!n.reason) {
          n.reason = new ew(e, r, i);
          t(n.reason);
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
    static source() {
      let e;
      return {
        token: new ez(function (t) {
          e = t;
        }),
        cancel: e
      };
    }
  }
  let eF = {
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
  Object.entries(eF).forEach(([e, t]) => {
    eF[t] = e;
  });
  let eH = function e(t) {
    let n = new eU(t);
    let r = s(eU.prototype.request, n);
    Z.extend(r, eU.prototype, n, {
      allOwnKeys: true
    });
    Z.extend(r, n, null, {
      allOwnKeys: true
    });
    r.create = function (n) {
      return e(ej(t, n));
    };
    return r;
  }(el);
  eH.Axios = eU;
  eH.CanceledError = ew;
  eH.CancelToken = ez;
  eH.isCancel = e_;
  eH.VERSION = eI;
  eH.toFormData = q;
  eH.AxiosError = U;
  eH.Cancel = eH.CanceledError;
  eH.all = function (e) {
    return Promise.all(e);
  };
  eH.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  };
  eH.isAxiosError = function (e) {
    return Z.isObject(e) && e.isAxiosError === true;
  };
  eH.mergeConfig = ej;
  eH.AxiosHeaders = ey;
  eH.formToJSON = e => ec(Z.isHTMLForm(e) ? new FormData(e) : e);
  eH.getAdapter = eC;
  eH.HttpStatusCode = eF;
  eH.default = eH;
  var eG = eH;
  require.d(exports, {
    axios: function () {
      return eG;
    }
  });
  require.r(a);
  require.d(a, {
    hasBrowserEnv: function () {
      return eo;
    },
    hasStandardBrowserEnv: function () {
      return ea;
    },
    hasStandardBrowserWebWorkerEnv: function () {
      return es;
    }
  });
}