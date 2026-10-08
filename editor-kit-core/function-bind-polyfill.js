// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 715444
         */
module.exports = function (module, exports, require) {
  var e = Object.prototype.toString;
  var r = Math.max;
  function n(t, e) {
    var r = [];
    var n = 0;
    for (; n < t.length; n += 1) {
      r[n] = t[n];
    }
    for (var o = 0; o < e.length; o += 1) {
      r[o + t.length] = e[o];
    }
    return r;
  }
  function o(t, e) {
    var r = [];
    var n = e || 0;
    var o = 0;
    for (; n < t.length; n += 1, o += 1) {
      r[o] = t[n];
    }
    return r;
  }
  function i(t, e) {
    var r = "";
    var n = 0;
    for (; n < t.length; n += 1) {
      r += t[n];
      if (n + 1 < t.length) {
        r += e;
      }
    }
    return r;
  }
  module.exports = function (t) {
    var u;
    var a = this;
    if (typeof a != "function" || e.apply(a) !== "[object Function]") {
      throw TypeError("Function.prototype.bind called on incompatible " + a);
    }
    var s = o(arguments, 1);
    var c = r(0, a.length - s.length);
    var f = [];
    var l = 0;
    for (; l < c; l++) {
      f[l] = "$" + l;
    }
    u = Function("binder", "return function (" + i(f, ",") + "){ return binder.apply(this,arguments); }")(function () {
      if (this instanceof u) {
        var e = a.apply(this, n(s, arguments));
        if (Object(e) === e) {
          return e;
        } else {
          return this;
        }
      }
      return a.apply(t, n(s, arguments));
    });
    if (a.prototype) {
      function p() {}
      p.prototype = a.prototype;
      u.prototype = new p();
      p.prototype = null;
    }
    return u;
  };
}