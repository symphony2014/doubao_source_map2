// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'axios'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 936615
         */
module.exports = function (module, exports, require) {
  let n;
  let o;
  let a;
  var i = {};
  function c(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  let {
    toString: s
  } = Object.prototype;
  let {
    getPrototypeOf: l
  } = Object;
  n = Object.create(null);
  let u = e => {
    let t = s.call(e);
    return n[t] ||= t.slice(8, -1).toLowerCase();
  };
  let d = e => {
    e = e.toLowerCase();
    return t => u(t) === e;
  };
  let f = e => t => typeof t === e;
  let {
    isArray: g
  } = Array;
  let b = f("undefined");
  let p = d("ArrayBuffer");
  let h = f("string");
  let m = f("function");
  let w = f("number");
  let E = e => e !== null && typeof e == "object";
  let k = e => {
    if (u(e) !== "object") {
      return false;
    }
    let t = l(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  let v = d("Date");
  let x = d("File");
  let y = d("Blob");
  let _ = d("FileList");
  let T = d("URLSearchParams");
  function A(e, t, {
    allOwnKeys: r = false
  } = {}) {
    let n;
    let o;
    if (e != null) {
      if (typeof e != "object") {
        e = [e];
      }
      if (g(e)) {
        n = 0;
        o = e.length;
        for (; n < o; n++) {
          t.call(null, e[n], n, e);
        }
      } else {
        let o;
        let a = r ? Object.getOwnPropertyNames(e) : Object.keys(e);
        let i = a.length;
        for (n = 0; n < i; n++) {
          o = a[n];
          t.call(null, e[o], o, e);
        }
      }
    }
  }
  function O(e, t) {
    let r;
    t = t.toLowerCase();
    let n = Object.keys(e);
    let o = n.length;
    while (o-- > 0) {
      if (t === (r = n[o]).toLowerCase()) {
        return r;
      }
    }
    return null;
  }
  let B = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global;
  let N = e => !b(e) && e !== B;
  o = typeof Uint8Array != "undefined" && l(Uint8Array);
  let R = e => o && e instanceof o;
  let C = d("HTMLFormElement");
  let S = (({
    hasOwnProperty: e
  }) => (t, r) => e.call(t, r))(Object.prototype);
  let G = d("RegExp");
  let I = (e, t) => {
    let r = Object.getOwnPropertyDescriptors(e);
    let n = {};
    A(r, (r, o) => {
      let a;
      if ((a = t(r, o, e)) !== false) {
        n[o] = a || r;
      }
    });
    Object.defineProperties(e, n);
  };
  let F = "abcdefghijklmnopqrstuvwxyz";
  let D = "0123456789";
  let L = {
    DIGIT: D,
    ALPHA: F,
    ALPHA_DIGIT: F + F.toUpperCase() + D
  };
  let P = d("AsyncFunction");
  var H = {
    isArray: g,
    isArrayBuffer: p,
    isBuffer: function (e) {
      return e !== null && !b(e) && e.constructor !== null && !b(e.constructor) && m(e.constructor.isBuffer) && e.constructor.isBuffer(e);
    },
    isFormData: e => {
      let t;
      return e && (typeof FormData == "function" && e instanceof FormData || m(e.append) && ((t = u(e)) === "formdata" || t === "object" && m(e.toString) && e.toString() === "[object FormData]"));
    },
    isArrayBufferView: function (e) {
      let t;
      if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(e);
      } else {
        return e && e.buffer && p(e.buffer);
      }
    },
    isString: h,
    isNumber: w,
    isBoolean: e => e === true || e === false,
    isObject: E,
    isPlainObject: k,
    isUndefined: b,
    isDate: v,
    isFile: x,
    isBlob: y,
    isRegExp: G,
    isFunction: m,
    isStream: e => E(e) && m(e.pipe),
    isURLSearchParams: T,
    isTypedArray: R,
    isFileList: _,
    forEach: A,
    merge: function e() {
      let {
        caseless: t
      } = N(this) && this || {};
      let r = {};
      let n = (n, o) => {
        let a = t && O(r, o) || o;
        if (k(r[a]) && k(n)) {
          r[a] = e(r[a], n);
        } else if (k(n)) {
          r[a] = e({}, n);
        } else if (g(n)) {
          r[a] = n.slice();
        } else {
          r[a] = n;
        }
      };
      for (let e = 0, t = arguments.length; e < t; e++) {
        if (arguments[e]) {
          A(arguments[e], n);
        }
      }
      return r;
    },
    extend: (e, t, r, {
      allOwnKeys: n
    } = {}) => {
      A(t, (t, n) => {
        if (r && m(t)) {
          e[n] = c(t, r);
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
      let o;
      let a;
      let i;
      let c = {};
      t = t || {};
      if (e == null) {
        return t;
      }
      do {
        for (a = (o = Object.getOwnPropertyNames(e)).length; a-- > 0;) {
          i = o[a];
          if ((!n || n(i, e, t)) && !c[i]) {
            t[i] = e[i];
            c[i] = true;
          }
        }
        e = r !== false && l(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: u,
    kindOfTest: d,
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
      if (g(e)) {
        return e;
      }
      let t = e.length;
      if (!w(t)) {
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
    isHTMLForm: C,
    hasOwnProperty: S,
    hasOwnProp: S,
    reduceDescriptors: I,
    freezeMethods: e => {
      I(e, (t, r) => {
        if (m(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) {
          return false;
        }
        if (m(e[r])) {
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
      })(g(e) ? e : String(e).split(t));
      return r;
    },
    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
      return t.toUpperCase() + r;
    }),
    noop: () => {},
    toFiniteNumber: (e, t) => Number.isFinite(e *= 1) ? e : t,
    findKey: O,
    global: B,
    isContextDefined: N,
    ALPHABET: L,
    generateString: (e = 16, t = L.ALPHA_DIGIT) => {
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
      return !!e && !!m(e.append) && e[Symbol.toStringTag] === "FormData" && !!e[Symbol.iterator];
    },
    toJSONObject: e => {
      let t = Array(10);
      let r = (e, n) => {
        if (E(e)) {
          if (t.indexOf(e) >= 0) {
            return;
          }
          if (!("toJSON" in e)) {
            t[n] = e;
            let o = g(e) ? [] : {};
            A(e, (e, t) => {
              let a = r(e, n + 1);
              if (!b(a)) {
                o[t] = a;
              }
            });
            t[n] = undefined;
            return o;
          }
        }
        return e;
      };
      return r(e, 0);
    },
    isAsyncFn: P,
    isThenable: e => e && (E(e) || m(e)) && m(e.then) && m(e.catch)
  };
  function M(e, t, r, n, o) {
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
    if (o) {
      this.response = o;
    }
  }
  H.inherits(M, Error, {
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
        config: H.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  let j = M.prototype;
  let W = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    W[e] = {
      value: e
    };
  });
  Object.defineProperties(M, W);
  Object.defineProperty(j, "isAxiosError", {
    value: true
  });
  M.from = (e, t, r, n, o, a) => {
    let i = Object.create(j);
    H.toFlatObject(e, i, function (e) {
      return e !== Error.prototype;
    }, e => e !== "isAxiosError");
    M.call(i, e.message, t, r, n, o);
    i.cause = e;
    i.name = e.name;
    if (a) {
      Object.assign(i, a);
    }
    return i;
  };
  var U = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  function Z(e) {
    return H.isPlainObject(e) || H.isArray(e);
  }
  function X(e) {
    if (H.endsWith(e, "[]")) {
      return e.slice(0, -2);
    } else {
      return e;
    }
  }
  function K(e, t, r) {
    if (e) {
      return e.concat(t).map(function (e, t) {
        e = X(e);
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
  let z = H.toFlatObject(H, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function Y(e, t, r) {
    if (!H.isObject(e)) {
      throw TypeError("target must be an object");
    }
    t = t || new FormData();
    let n = (r = H.toFlatObject(r, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function (e, t) {
      return !H.isUndefined(t[e]);
    })).metaTokens;
    let o = r.visitor || l;
    let a = r.dots;
    let i = r.indexes;
    let c = (r.Blob || typeof Blob != "undefined" && Blob) && H.isSpecCompliantForm(t);
    if (!H.isFunction(o)) {
      throw TypeError("visitor must be a function");
    }
    function s(e) {
      if (e === null) {
        return "";
      }
      if (H.isDate(e)) {
        return e.toISOString();
      }
      if (!c && H.isBlob(e)) {
        throw new M("Blob is not supported. Use a Buffer instead.");
      }
      if (H.isArrayBuffer(e) || H.isTypedArray(e)) {
        if (c && typeof Blob == "function") {
          return new Blob([e]);
        } else {
          return U.from(e);
        }
      } else {
        return e;
      }
    }
    function l(e, r, o) {
      let c = e;
      if (e && !o && typeof e == "object") {
        if (H.endsWith(r, "{}")) {
          r = n ? r : r.slice(0, -2);
          e = JSON.stringify(e);
        } else {
          var l;
          if (H.isArray(e) && (l = e, H.isArray(l) && !l.some(Z)) || (H.isFileList(e) || H.endsWith(r, "[]")) && (c = H.toArray(e))) {
            r = X(r);
            c.forEach(function (e, n) {
              if (!H.isUndefined(e) && e !== null) {
                t.append(i === true ? K([r], n, a) : i === null ? r : r + "[]", s(e));
              }
            });
            return false;
          }
        }
      }
      return !!Z(e) || (t.append(K(o, r, a), s(e)), false);
    }
    let u = [];
    let d = Object.assign(z, {
      defaultVisitor: l,
      convertValue: s,
      isVisitable: Z
    });
    if (!H.isObject(e)) {
      throw TypeError("data must be an object");
    }
    (function e(r, n) {
      if (!H.isUndefined(r)) {
        if (u.indexOf(r) !== -1) {
          throw Error("Circular reference detected in " + n.join("."));
        }
        u.push(r);
        H.forEach(r, function (r, a) {
          if ((!H.isUndefined(r) && r !== null && o.call(t, r, H.isString(a) ? a.trim() : a, n, d)) === true) {
            e(r, n ? n.concat(a) : [a]);
          }
        });
        u.pop();
      }
    })(e);
    return t;
  }
  function V(e) {
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
  function q(e, t) {
    this._pairs = [];
    if (e) {
      Y(e, this, t);
    }
  }
  let $ = q.prototype;
  function J(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function Q(e, t, r) {
    let n;
    if (!t) {
      return e;
    }
    let o = r && r.encode || J;
    let a = r && r.serialize;
    if (n = a ? a(t, r) : H.isURLSearchParams(t) ? t.toString() : new q(t, r).toString(o)) {
      let t = e.indexOf("#");
      if (t !== -1) {
        e = e.slice(0, t);
      }
      e += (e.indexOf("?") === -1 ? "?" : "&") + n;
    }
    return e;
  }
  $.append = function (e, t) {
    this._pairs.push([e, t]);
  };
  $.toString = function (e) {
    let t = e ? function (t) {
      return e.call(this, t, V);
    } : V;
    return this._pairs.map(function (e) {
      return t(e[0]) + "=" + t(e[1]);
    }, "").join("&");
  };
  var ee = class {
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
      H.forEach(this.handlers, function (t) {
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
  var er = typeof URLSearchParams != "undefined" ? URLSearchParams : q;
  var en = typeof FormData != "undefined" ? FormData : null;
  var eo = typeof Blob != "undefined" ? Blob : null;
  let ea = typeof window != "undefined" && typeof document != "undefined";
  a = typeof navigator != "undefined" && navigator.product;
  let ei = ea && ["ReactNative", "NativeScript", "NS"].indexOf(a) < 0;
  let ec = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
  var es = {
    ...i,
    isBrowser: true,
    classes: {
      URLSearchParams: er,
      FormData: en,
      Blob: eo
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  function el(e) {
    if (H.isFormData(e) && H.isFunction(e.entries)) {
      let t = {};
      H.forEachEntry(e, (e, r) => {
        (function e(t, r, n, o) {
          let a = t[o++];
          if (a === "__proto__") {
            return true;
          }
          let i = Number.isFinite(+a);
          let c = o >= t.length;
          a = !a && H.isArray(n) ? n.length : a;
          if (c) {
            if (H.hasOwnProp(n, a)) {
              n[a] = [n[a], r];
            } else {
              n[a] = r;
            }
          } else {
            if (!n[a] || !H.isObject(n[a])) {
              n[a] = [];
            }
            if (e(t, r, n[a], o) && H.isArray(n[a])) {
              n[a] = function (e) {
                let t;
                let r;
                let n = {};
                let o = Object.keys(e);
                let a = o.length;
                for (t = 0; t < a; t++) {
                  n[r = o[t]] = e[r];
                }
                return n;
              }(n[a]);
            }
          }
          return !i;
        })(H.matchAll(/\w+|\[(\w*)]/g, e).map(e => e[0] === "[]" ? "" : e[1] || e[0]), r, t, 0);
      });
      return t;
    }
    return null;
  }
  let eu = {
    transitional: et,
    adapter: ["xhr", "http"],
    transformRequest: [function (e, t) {
      let r;
      let n = t.getContentType() || "";
      let o = n.indexOf("application/json") > -1;
      let a = H.isObject(e);
      if (a && H.isHTMLForm(e)) {
        e = new FormData(e);
      }
      if (H.isFormData(e)) {
        if (o) {
          return JSON.stringify(el(e));
        } else {
          return e;
        }
      }
      if (H.isArrayBuffer(e) || H.isBuffer(e) || H.isStream(e) || H.isFile(e) || H.isBlob(e)) {
        return e;
      }
      if (H.isArrayBufferView(e)) {
        return e.buffer;
      }
      if (H.isURLSearchParams(e)) {
        t.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return e.toString();
      }
      if (a) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) {
          var i;
          var c;
          return (i = e, c = this.formSerializer, Y(i, new es.classes.URLSearchParams(), Object.assign({
            visitor: function (e, t, r, n) {
              if (es.isNode && H.isBuffer(e)) {
                this.append(t, e.toString("base64"));
                return false;
              } else {
                return n.defaultVisitor.apply(this, arguments);
              }
            }
          }, c))).toString();
        }
        if ((r = H.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
          let t = this.env && this.env.FormData;
          return Y(r ? {
            "files[]": e
          } : e, t && new t(), this.formSerializer);
        }
      }
      if (a || o) {
        t.setContentType("application/json", false);
        return function (e, t, r) {
          if (H.isString(e)) {
            try {
              JSON.parse(e);
              return H.trim(e);
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
      let t = this.transitional || eu.transitional;
      let r = t && t.forcedJSONParsing;
      let n = this.responseType === "json";
      if (e && H.isString(e) && (r && !this.responseType || n)) {
        let r = t && t.silentJSONParsing;
        try {
          return JSON.parse(e);
        } catch (e) {
          if (!r && n) {
            if (e.name === "SyntaxError") {
              throw M.from(e, M.ERR_BAD_RESPONSE, this, null, this.response);
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
      FormData: es.classes.FormData,
      Blob: es.classes.Blob
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
  H.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    eu.headers[e] = {};
  });
  let ed = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
  var ef = e => {
    let t;
    let r;
    let n;
    let o = {};
    if (e) {
      e.split("\n").forEach(function (e) {
        n = e.indexOf(":");
        t = e.substring(0, n).trim().toLowerCase();
        r = e.substring(n + 1).trim();
        if (t && (!o[t] || !ed[t])) {
          if (t === "set-cookie") {
            if (o[t]) {
              o[t].push(r);
            } else {
              o[t] = [r];
            }
          } else {
            o[t] = o[t] ? o[t] + ", " + r : r;
          }
        }
      });
    }
    return o;
  };
  let eg = Symbol("internals");
  function eb(e) {
    return e && String(e).trim().toLowerCase();
  }
  function ep(e) {
    if (e === false || e == null) {
      return e;
    } else if (H.isArray(e)) {
      return e.map(ep);
    } else {
      return String(e);
    }
  }
  let eh = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function em(e, t, r, n, o) {
    if (H.isFunction(n)) {
      return n.call(this, t, r);
    }
    if (o) {
      t = r;
    }
    if (H.isString(t)) {
      if (H.isString(n)) {
        return t.indexOf(n) !== -1;
      }
      if (H.isRegExp(n)) {
        return n.test(t);
      }
    }
  }
  class ew {
    constructor(e) {
      if (e) {
        this.set(e);
      }
    }
    set(e, t, r) {
      let n = this;
      function o(e, t, r) {
        let o = eb(t);
        if (!o) {
          throw Error("header name must be a non-empty string");
        }
        let a = H.findKey(n, o);
        if (!a || n[a] === undefined || r === true || r === undefined && n[a] !== false) {
          n[a || t] = ep(e);
        }
      }
      let a = (e, t) => H.forEach(e, (e, r) => o(e, r, t));
      if (H.isPlainObject(e) || e instanceof this.constructor) {
        a(e, t);
      } else if (H.isString(e) && (e = e.trim()) && !eh(e)) {
        a(ef(e), t);
      } else if (e != null) {
        o(t, e, r);
      }
      return this;
    }
    get(e, t) {
      if (e = eb(e)) {
        let r = H.findKey(this, e);
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
          if (H.isFunction(t)) {
            return t.call(this, e, r);
          }
          if (H.isRegExp(t)) {
            return t.exec(e);
          }
          throw TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if (e = eb(e)) {
        let r = H.findKey(this, e);
        return !!r && this[r] !== undefined && (!t || !!em(this, this[r], r, t));
      }
      return false;
    }
    delete(e, t) {
      let r = this;
      let n = false;
      function o(e) {
        if (e = eb(e)) {
          let o = H.findKey(r, e);
          if (o && (!t || em(r, r[o], o, t))) {
            delete r[o];
            n = true;
          }
        }
      }
      if (H.isArray(e)) {
        e.forEach(o);
      } else {
        o(e);
      }
      return n;
    }
    clear(e) {
      let t = Object.keys(this);
      let r = t.length;
      let n = false;
      while (r--) {
        let o = t[r];
        if (!e || em(this, this[o], o, e, true)) {
          delete this[o];
          n = true;
        }
      }
      return n;
    }
    normalize(e) {
      let t = this;
      let r = {};
      H.forEach(this, (n, o) => {
        let a = H.findKey(r, o);
        if (a) {
          t[a] = ep(n);
          delete t[o];
          return;
        }
        let i = e ? o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(o).trim();
        if (i !== o) {
          delete t[o];
        }
        t[i] = ep(n);
        r[i] = true;
      });
      return this;
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      let t = Object.create(null);
      H.forEach(this, (r, n) => {
        if (r != null && r !== false) {
          t[n] = e && H.isArray(r) ? r.join(", ") : r;
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
      let r = new this(e);
      t.forEach(e => r.set(e));
      return r;
    }
    static accessor(e) {
      let t = (this[eg] = this[eg] = {
        accessors: {}
      }).accessors;
      let r = this.prototype;
      function n(e) {
        let n = eb(e);
        if (!t[n]) {
          (function (e, t) {
            let r = H.toCamelCase(" " + t);
            ["get", "set", "has"].forEach(n => {
              Object.defineProperty(e, n + r, {
                value: function (e, r, o) {
                  return this[n].call(this, t, e, r, o);
                },
                configurable: true
              });
            });
          })(r, e);
          t[n] = true;
        }
      }
      if (H.isArray(e)) {
        e.forEach(n);
      } else {
        n(e);
      }
      return this;
    }
  }
  function eE(e, t) {
    let r = this || eu;
    let n = t || r;
    let o = ew.from(n.headers);
    let a = n.data;
    H.forEach(e, function (e) {
      a = e.call(r, a, o.normalize(), t ? t.status : undefined);
    });
    o.normalize();
    return a;
  }
  function ek(e) {
    return !!e && !!e.__CANCEL__;
  }
  function ev(e, t, r) {
    M.call(this, e == null ? "canceled" : e, M.ERR_CANCELED, t, r);
    this.name = "CanceledError";
  }
  ew.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  H.reduceDescriptors(ew.prototype, ({
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
  H.freezeMethods(ew);
  H.inherits(ev, M, {
    __CANCEL__: true
  });
  var ex = es.hasStandardBrowserEnv ? {
    write(e, t, r, n, o, a) {
      let i = [e + "=" + encodeURIComponent(t)];
      if (H.isNumber(r)) {
        i.push("expires=" + new Date(r).toGMTString());
      }
      if (H.isString(n)) {
        i.push("path=" + n);
      }
      if (H.isString(o)) {
        i.push("domain=" + o);
      }
      if (a === true) {
        i.push("secure");
      }
      document.cookie = i.join("; ");
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
  function ey(e, t) {
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
  var e_ = es.hasStandardBrowserEnv ? function () {
    let e;
    let t = /(msie|trident)/i.test(navigator.userAgent);
    let r = document.createElement("a");
    function n(e) {
      let n = e;
      if (t) {
        r.setAttribute("href", n);
        n = r.href;
      }
      r.setAttribute("href", n);
      return {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    e = n(window.location.href);
    return function (t) {
      let r = H.isString(t) ? n(t) : t;
      return r.protocol === e.protocol && r.host === e.host;
    };
  }() : function () {
    return true;
  };
  function eT(e, t) {
    let r;
    let n = Array(e = e || 10);
    let o = Array(e);
    let a = 0;
    let i = 0;
    t = t !== undefined ? t : 1000;
    return function (c) {
      let s = Date.now();
      let l = o[i];
      r ||= s;
      n[a] = c;
      o[a] = s;
      let u = i;
      let d = 0;
      while (u !== a) {
        d += n[u++];
        u %= e;
      }
      if ((a = (a + 1) % e) === i) {
        i = (i + 1) % e;
      }
      if (s - r < t) {
        return;
      }
      let f = l && s - l;
      if (f) {
        return Math.round(d * 1000 / f);
      } else {
        return undefined;
      }
    };
  }
  function eA(e, t) {
    let r = 0;
    let n = eT(50, 250);
    return o => {
      let a = o.loaded;
      let i = o.lengthComputable ? o.total : undefined;
      let c = a - r;
      let s = n(c);
      r = a;
      let l = {
        loaded: a,
        total: i,
        progress: i ? a / i : undefined,
        bytes: c,
        rate: s || undefined,
        estimated: s && i && a <= i ? (i - a) / s : undefined,
        event: o
      };
      l[t ? "download" : "upload"] = true;
      e(l);
    };
  }
  let eO = {
    http: null,
    xhr: typeof XMLHttpRequest != "undefined" && function (e) {
      return new Promise(function (t, r) {
        let n;
        let o;
        let a = e.data;
        let i = ew.from(e.headers).normalize();
        let {
          responseType: c,
          withXSRFToken: s
        } = e;
        function l() {
          if (e.cancelToken) {
            e.cancelToken.unsubscribe(n);
          }
          if (e.signal) {
            e.signal.removeEventListener("abort", n);
          }
        }
        if (H.isFormData(a)) {
          if (es.hasStandardBrowserEnv || es.hasStandardBrowserWebWorkerEnv) {
            i.setContentType(false);
          } else if ((o = i.getContentType()) !== false) {
            let [e, ...t] = o ? o.split(";").map(e => e.trim()).filter(Boolean) : [];
            i.setContentType([e || "multipart/form-data", ...t].join("; "));
          }
        }
        let u = new XMLHttpRequest();
        if (e.auth) {
          let t = e.auth.username || "";
          let r = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          i.set("Authorization", "Basic " + btoa(t + ":" + r));
        }
        let d = ey(e.baseURL, e.url);
        function f() {
          if (!u) {
            return;
          }
          let n = ew.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
          (function (e, t, r) {
            let n = r.config.validateStatus;
            if (!r.status || !n || n(r.status)) {
              e(r);
            } else {
              t(new M("Request failed with status code " + r.status, [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
            }
          })(function (e) {
            t(e);
            l();
          }, function (e) {
            r(e);
            l();
          }, {
            data: c && c !== "text" && c !== "json" ? u.response : u.responseText,
            status: u.status,
            statusText: u.statusText,
            headers: n,
            config: e,
            request: u
          });
          u = null;
        }
        u.open(e.method.toUpperCase(), Q(d, e.params, e.paramsSerializer), true);
        u.timeout = e.timeout;
        if ("onloadend" in u) {
          u.onloadend = f;
        } else {
          u.onreadystatechange = function () {
            if (u && u.readyState === 4 && (u.status !== 0 || u.responseURL && u.responseURL.indexOf("file:") === 0)) {
              setTimeout(f);
            }
          };
        }
        u.onabort = function () {
          if (u) {
            r(new M("Request aborted", M.ECONNABORTED, e, u));
            u = null;
          }
        };
        u.onerror = function () {
          r(new M("Network Error", M.ERR_NETWORK, e, u));
          u = null;
        };
        u.ontimeout = function () {
          let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
          let n = e.transitional || et;
          if (e.timeoutErrorMessage) {
            t = e.timeoutErrorMessage;
          }
          r(new M(t, n.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e, u));
          u = null;
        };
        if (es.hasStandardBrowserEnv && (s && H.isFunction(s) && (s = s(e)), s || s !== false && e_(d))) {
          let t = e.xsrfHeaderName && e.xsrfCookieName && ex.read(e.xsrfCookieName);
          if (t) {
            i.set(e.xsrfHeaderName, t);
          }
        }
        if (a === undefined) {
          i.setContentType(null);
        }
        if ("setRequestHeader" in u) {
          H.forEach(i.toJSON(), function (e, t) {
            u.setRequestHeader(t, e);
          });
        }
        if (!H.isUndefined(e.withCredentials)) {
          u.withCredentials = !!e.withCredentials;
        }
        if (c && c !== "json") {
          u.responseType = e.responseType;
        }
        if (typeof e.onDownloadProgress == "function") {
          u.addEventListener("progress", eA(e.onDownloadProgress, true));
        }
        if (typeof e.onUploadProgress == "function" && u.upload) {
          u.upload.addEventListener("progress", eA(e.onUploadProgress));
        }
        if (e.cancelToken || e.signal) {
          n = t => {
            if (u) {
              r(!t || t.type ? new ev(null, e, u) : t);
              u.abort();
              u = null;
            }
          };
          if (e.cancelToken) {
            e.cancelToken.subscribe(n);
          }
          if (e.signal) {
            if (e.signal.aborted) {
              n();
            } else {
              e.signal.addEventListener("abort", n);
            }
          }
        }
        let g = function (e) {
          let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return t && t[1] || "";
        }(d);
        if (g && es.protocols.indexOf(g) === -1) {
          r(new M("Unsupported protocol " + g + ":", M.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(a || null);
      });
    }
  };
  H.forEach(eO, (e, t) => {
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
  let eB = e => `- ${e}`;
  let eN = e => H.isFunction(e) || e === null || e === false;
  var eR = e => {
    let t;
    let r;
    let {
      length: n
    } = e = H.isArray(e) ? e : [e];
    let o = {};
    for (let a = 0; a < n; a++) {
      let n;
      r = t = e[a];
      if (!eN(t) && (r = eO[(n = String(t)).toLowerCase()]) === undefined) {
        throw new M(`Unknown adapter '${n}'`);
      }
      if (r) {
        break;
      }
      o[n || "#" + a] = r;
    }
    if (!r) {
      let e = Object.entries(o).map(([e, t]) => `adapter ${e} ${t === false ? "is not supported by the environment" : "is not available in the build"}`);
      throw new M("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(eB).join("\n") : " " + eB(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
    }
    return r;
  };
  function eC(e) {
    if (e.cancelToken) {
      e.cancelToken.throwIfRequested();
    }
    if (e.signal && e.signal.aborted) {
      throw new ev(null, e);
    }
  }
  function eS(e) {
    eC(e);
    e.headers = ew.from(e.headers);
    e.data = eE.call(e, e.transformRequest);
    if (["post", "put", "patch"].indexOf(e.method) !== -1) {
      e.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    return eR(e.adapter || eu.adapter)(e).then(function (t) {
      eC(e);
      t.data = eE.call(e, e.transformResponse, t);
      t.headers = ew.from(t.headers);
      return t;
    }, function (t) {
      if (!ek(t)) {
        eC(e);
        if (t && t.response) {
          t.response.data = eE.call(e, e.transformResponse, t.response);
          t.response.headers = ew.from(t.response.headers);
        }
      }
      return Promise.reject(t);
    });
  }
  let eG = e => e instanceof ew ? e.toJSON() : e;
  function eI(e, t) {
    t = t || {};
    let r = {};
    function n(e, t, r) {
      if (H.isPlainObject(e) && H.isPlainObject(t)) {
        return H.merge.call({
          caseless: r
        }, e, t);
      } else if (H.isPlainObject(t)) {
        return H.merge({}, t);
      } else if (H.isArray(t)) {
        return t.slice();
      } else {
        return t;
      }
    }
    function o(e, t, r) {
      if (H.isUndefined(t)) {
        if (H.isUndefined(e)) {
          return undefined;
        } else {
          return n(undefined, e, r);
        }
      } else {
        return n(e, t, r);
      }
    }
    function a(e, t) {
      if (!H.isUndefined(t)) {
        return n(undefined, t);
      }
    }
    function i(e, t) {
      if (H.isUndefined(t)) {
        if (H.isUndefined(e)) {
          return undefined;
        } else {
          return n(undefined, e);
        }
      } else {
        return n(undefined, t);
      }
    }
    function c(r, o, a) {
      if (a in t) {
        return n(r, o);
      } else if (a in e) {
        return n(undefined, r);
      } else {
        return undefined;
      }
    }
    let s = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: c,
      headers: (e, t) => o(eG(e), eG(t), true)
    };
    H.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
      let a = s[n] || o;
      let i = a(e[n], t[n], n);
      if (!H.isUndefined(i) || a === c) {
        r[n] = i;
      }
    });
    return r;
  }
  let eF = "1.6.7";
  let eD = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    eD[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  let eL = {};
  eD.transitional = function (e, t, r) {
    return (n, o, a) => {
      if (e === false) {
        throw new M("[Axios v" + eF + "] Transitional option '" + o + "' has been removed" + (t ? " in " + t : "") + (r ? ". " + r : ""), M.ERR_DEPRECATED);
      }
      if (t && !eL[o]) {
        eL[o] = true;
      }
      return !e || e(n, o, a);
    };
  };
  var eP = {
    assertOptions: function (e, t, r) {
      if (typeof e != "object") {
        throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
      }
      let n = Object.keys(e);
      let o = n.length;
      while (o-- > 0) {
        let a = n[o];
        let i = t[a];
        if (i) {
          let t = e[a];
          let r = t === undefined || i(t, a, e);
          if (r !== true) {
            throw new M("option " + a + " must be " + r, M.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (r !== true) {
          throw new M("Unknown option " + a, M.ERR_BAD_OPTION);
        }
      }
    },
    validators: eD
  };
  let eH = eP.validators;
  class eM {
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
          let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
          if (e.stack) {
            if (r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, ""))) {
              e.stack += "\n" + r;
            }
          } else {
            e.stack = r;
          }
        }
        throw e;
      }
    }
    _request(e, t) {
      let r;
      let n;
      if (typeof e == "string") {
        (t = t || {}).url = e;
      } else {
        t = e || {};
      }
      let {
        transitional: o,
        paramsSerializer: a,
        headers: i
      } = t = eI(this.defaults, t);
      if (o !== undefined) {
        eP.assertOptions(o, {
          silentJSONParsing: eH.transitional(eH.boolean),
          forcedJSONParsing: eH.transitional(eH.boolean),
          clarifyTimeoutError: eH.transitional(eH.boolean)
        }, false);
      }
      if (a != null) {
        if (H.isFunction(a)) {
          t.paramsSerializer = {
            serialize: a
          };
        } else {
          eP.assertOptions(a, {
            encode: eH.function,
            serialize: eH.function
          }, true);
        }
      }
      t.method = (t.method || this.defaults.method || "get").toLowerCase();
      let c = i && H.merge(i.common, i[t.method]);
      if (i) {
        H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
          delete i[e];
        });
      }
      t.headers = ew.concat(c, i);
      let s = [];
      let l = true;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen != "function" || e.runWhen(t) !== false) {
          l = l && e.synchronous;
          s.unshift(e.fulfilled, e.rejected);
        }
      });
      let u = [];
      this.interceptors.response.forEach(function (e) {
        u.push(e.fulfilled, e.rejected);
      });
      let d = 0;
      if (!l) {
        let e = [eS.bind(this), undefined];
        e.unshift.apply(e, s);
        e.push.apply(e, u);
        n = e.length;
        r = Promise.resolve(t);
        while (d < n) {
          r = r.then(e[d++], e[d++]);
        }
        return r;
      }
      n = s.length;
      let f = t;
      for (d = 0; d < n;) {
        let e = s[d++];
        let t = s[d++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        r = eS.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      d = 0;
      n = u.length;
      while (d < n) {
        r = r.then(u[d++], u[d++]);
      }
      return r;
    }
    getUri(e) {
      return Q(ey((e = eI(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
  }
  H.forEach(["delete", "get", "head", "options"], function (e) {
    eM.prototype[e] = function (t, r) {
      return this.request(eI(r || {}, {
        method: e,
        url: t,
        data: (r || {}).data
      }));
    };
  });
  H.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (r, n, o) {
        return this.request(eI(o || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: r,
          data: n
        }));
      };
    }
    eM.prototype[e] = t();
    eM.prototype[e + "Form"] = t(true);
  });
  class ej {
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
      e(function (e, n, o) {
        if (!r.reason) {
          r.reason = new ev(e, n, o);
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
    static source() {
      let e;
      return {
        token: new ej(function (t) {
          e = t;
        }),
        cancel: e
      };
    }
  }
  let eW = {
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
  Object.entries(eW).forEach(([e, t]) => {
    eW[t] = e;
  });
  let eU = function e(t) {
    let r = new eM(t);
    let n = c(eM.prototype.request, r);
    H.extend(n, eM.prototype, r, {
      allOwnKeys: true
    });
    H.extend(n, r, null, {
      allOwnKeys: true
    });
    n.create = function (r) {
      return e(eI(t, r));
    };
    return n;
  }(eu);
  eU.Axios = eM;
  eU.CanceledError = ev;
  eU.CancelToken = ej;
  eU.isCancel = ek;
  eU.VERSION = eF;
  eU.toFormData = Y;
  eU.AxiosError = M;
  eU.Cancel = eU.CanceledError;
  eU.all = function (e) {
    return Promise.all(e);
  };
  eU.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  };
  eU.isAxiosError = function (e) {
    return H.isObject(e) && e.isAxiosError === true;
  };
  eU.mergeConfig = eI;
  eU.AxiosHeaders = ew;
  eU.formToJSON = e => el(H.isHTMLForm(e) ? new FormData(e) : e);
  eU.getAdapter = eR;
  eU.HttpStatusCode = eW;
  eU.default = eU;
  var eZ = eU;
  require.d(exports, {
    axios: function () {
      return eZ;
    }
  });
  require.r(i);
  require.d(i, {
    hasBrowserEnv: function () {
      return ea;
    },
    hasStandardBrowserEnv: function () {
      return ei;
    },
    hasStandardBrowserWebWorkerEnv: function () {
      return ec;
    }
  });
}