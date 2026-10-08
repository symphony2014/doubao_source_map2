// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'functionBindHelper'
// - Resolved require(662641) to 'function-bind-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 998785
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var functionBindHelper = require("function-bind-helper") /*id: 662641*/;
  var s = Object.prototype.toString;
  n = Object.create(null);
  function u(e) {
    var t = s.call(e);
    return n[t] ||= t.slice(8, -1).toLowerCase();
  }
  function c(e) {
    e = e.toLowerCase();
    return function (t) {
      return u(t) === e;
    };
  }
  function f(e) {
    return Array.isArray(e);
  }
  function d(e) {
    return e === undefined;
  }
  var l = c("ArrayBuffer");
  function p(e) {
    return typeof e == "number";
  }
  function v(e) {
    return e !== null && typeof e == "object";
  }
  function h(e) {
    if (u(e) !== "object") {
      return false;
    }
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
  var m = c("Date");
  var _ = c("File");
  var y = c("Blob");
  var g = c("FileList");
  function b(e) {
    return s.call(e) === "[object Function]";
  }
  var w = c("URLSearchParams");
  function E(e, t) {
    if (e != null) {
      if (typeof e != "object") {
        e = [e];
      }
      if (f(e)) {
        var r = 0;
        var n = e.length;
        for (; r < n; r++) {
          t.call(null, e[r], r, e);
        }
      } else {
        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t.call(null, e[o], o, e);
          }
        }
      }
    }
  }
  o = typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array);
  function O(e) {
    return o && e instanceof o;
  }
  var S = c("HTMLFormElement");
  i = Object.prototype.hasOwnProperty;
  function T(e, t) {
    return i.call(e, t);
  }
  module.exports = {
    isArray: f,
    isArrayBuffer: l,
    isBuffer: function (e) {
      return e !== null && !d(e) && e.constructor !== null && !d(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
    },
    isFormData: function (e) {
      var t = "[object FormData]";
      return e && (typeof FormData == "function" && e instanceof FormData || s.call(e) === t || b(e.toString) && e.toString() === t);
    },
    isArrayBufferView: function (e) {
      var t;
      if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(e);
      } else {
        return e && e.buffer && l(e.buffer);
      }
    },
    isString: function (e) {
      return typeof e == "string";
    },
    isNumber: p,
    isObject: v,
    isPlainObject: h,
    isEmptyObject: function (e) {
      return e && Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
    },
    isUndefined: d,
    isDate: m,
    isFile: _,
    isBlob: y,
    isFunction: b,
    isStream: function (e) {
      return v(e) && b(e.pipe);
    },
    isURLSearchParams: w,
    isStandardBrowserEnv: function () {
      var e;
      return (typeof navigator == "undefined" || (e = navigator.product) !== "ReactNative" && e !== "NativeScript" && e !== "NS") && typeof window != "undefined" && typeof document != "undefined";
    },
    forEach: E,
    merge: function e() {
      var t = {};
      function r(r, n) {
        if (h(t[n]) && h(r)) {
          t[n] = e(t[n], r);
        } else if (h(r)) {
          t[n] = e({}, r);
        } else if (f(r)) {
          t[n] = r.slice();
        } else {
          t[n] = r;
        }
      }
      var n = 0;
      var o = arguments.length;
      for (; n < o; n++) {
        E(arguments[n], r);
      }
      return t;
    },
    extend: function (e, t, r) {
      E(t, function (t, n) {
        if (r && typeof t == "function") {
          e[n] = functionBindHelper(t, r);
        } else {
          e[n] = t;
        }
      });
      return e;
    },
    trim: function (e) {
      if (e.trim) {
        return e.trim();
      } else {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    },
    stripBOM: function (e) {
      if (e.charCodeAt(0) === 65279) {
        e = e.slice(1);
      }
      return e;
    },
    inherits: function (e, t, r, n) {
      e.prototype = Object.create(t.prototype, n);
      e.prototype.constructor = e;
      if (r) {
        Object.assign(e.prototype, r);
      }
    },
    toFlatObject: function (e, t, r, n) {
      var o;
      var i;
      var a;
      var s = {};
      t = t || {};
      if (e == null) {
        return t;
      }
      do {
        for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;) {
          a = o[i];
          if ((!n || n(a, e, t)) && !s[a]) {
            t[a] = e[a];
            s[a] = true;
          }
        }
        e = r !== false && Object.getPrototypeOf(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: u,
    kindOfTest: c,
    endsWith: function (e, t, r) {
      e = String(e);
      if (r === undefined || r > e.length) {
        r = e.length;
      }
      r -= t.length;
      var n = e.indexOf(t, r);
      return n !== -1 && n === r;
    },
    toArray: function (e) {
      if (!e) {
        return null;
      }
      if (f(e)) {
        return e;
      }
      var t = e.length;
      if (!p(t)) {
        return null;
      }
      var r = Array(t);
      for (; t-- > 0;) {
        r[t] = e[t];
      }
      return r;
    },
    isTypedArray: O,
    isFileList: g,
    forEachEntry: function (e, t) {
      var r;
      var n = (e && e[Symbol.iterator]).call(e);
      while ((r = n.next()) && !r.done) {
        var o = r.value;
        t.call(e, o[0], o[1]);
      }
    },
    matchAll: function (e, t) {
      var r;
      var n = [];
      while ((r = e.exec(t)) !== null) {
        n.push(r);
      }
      return n;
    },
    isHTMLForm: S,
    hasOwnProperty: T
  };
}