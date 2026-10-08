// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 197211
         */
module.exports = function (module, exports, require) {
  var e = Object.prototype.hasOwnProperty;
  var i = Object.prototype.toString;
  var n = Object.defineProperty;
  var r = Object.getOwnPropertyDescriptor;
  function s(t) {
    if (typeof Array.isArray == "function") {
      return Array.isArray(t);
    } else {
      return i.call(t) === "[object Array]";
    }
  }
  function o(t) {
    if (!t || i.call(t) !== "[object Object]") {
      return false;
    }
    var n;
    var r = e.call(t, "constructor");
    var s = t.constructor && t.constructor.prototype && e.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !r && !s) {
      return false;
    }
    for (n in t);
    return n === undefined || e.call(t, n);
  }
  function a(t, e) {
    if (n && e.name === "__proto__") {
      n(t, e.name, {
        enumerable: true,
        configurable: true,
        value: e.newValue,
        writable: true
      });
    } else {
      t[e.name] = e.newValue;
    }
  }
  function l(t, i) {
    if (i === "__proto__") {
      if (!e.call(t, i)) {
        return;
      }
      if (r) {
        return r(t, i).value;
      }
    }
    return t[i];
  }
  module.exports = function t() {
    var e;
    var i;
    var n;
    var r;
    var u;
    var h;
    var c = arguments[0];
    var d = 1;
    var p = arguments.length;
    var f = false;
    if (typeof c == "boolean") {
      f = c;
      c = arguments[1] || {};
      d = 2;
    }
    if (c == null || typeof c != "object" && typeof c != "function") {
      c = {};
    }
    for (; d < p; ++d) {
      e = arguments[d];
      if (e != null) {
        for (i in e) {
          n = l(c, i);
          if (c !== (r = l(e, i))) {
            if (f && r && (o(r) || (u = s(r)))) {
              if (u) {
                u = false;
                h = n && s(n) ? n : [];
              } else {
                h = n && o(n) ? n : {};
              }
              a(c, {
                name: i,
                newValue: t(f, h, r)
              });
            } else if (r !== undefined) {
              a(c, {
                name: i,
                newValue: r
              });
            }
          }
        }
      }
    }
    return c;
  };
}