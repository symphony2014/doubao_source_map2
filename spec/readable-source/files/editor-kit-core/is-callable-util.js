// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 103686
         */
module.exports = function (module, exports, require) {
  var e;
  var r;
  var n = Function.prototype.toString;
  var o = typeof Reflect == "object" && Reflect !== null && Reflect.apply;
  if (typeof o == "function" && typeof Object.defineProperty == "function") {
    try {
      e = Object.defineProperty({}, "length", {
        get: function () {
          throw r;
        }
      });
      r = {};
      o(function () {
        throw 42;
      }, null, e);
    } catch (t) {
      if (t !== r) {
        o = null;
      }
    }
  } else {
    o = null;
  }
  var i = /^\s*class\b/;
  function u(t) {
    try {
      var e = n.call(t);
      return i.test(e);
    } catch (t) {
      return false;
    }
  }
  function a(t) {
    try {
      if (u(t)) {
        return false;
      }
      n.call(t);
      return true;
    } catch (t) {
      return false;
    }
  }
  var s = Object.prototype.toString;
  var c = typeof Symbol == "function" && !!Symbol.toStringTag;
  var f = !(0 in [,]);
  function l() {
    return false;
  }
  if (typeof document == "object") {
    var p = document.all;
    if (s.call(p) === s.call(document.all)) {
      l = function (t) {
        if ((f || !t) && (t === undefined || typeof t == "object")) {
          try {
            var e = s.call(t);
            return (e === "[object HTMLAllCollection]" || e === "[object HTML document.all class]" || e === "[object HTMLCollection]" || e === "[object Object]") && t("") == null;
          } catch (t) {}
        }
        return false;
      };
    }
  }
  module.exports = o ? function (t) {
    if (l(t)) {
      return true;
    }
    if (!t || typeof t != "function" && typeof t != "object") {
      return false;
    }
    try {
      o(t, null, e);
    } catch (t) {
      if (t !== r) {
        return false;
      }
    }
    return !u(t) && a(t);
  } : function (t) {
    if (l(t)) {
      return true;
    }
    if (!t || typeof t != "function" && typeof t != "object") {
      return false;
    }
    if (c) {
      return a(t);
    }
    if (u(t)) {
      return false;
    }
    var e = s.call(t);
    return (e === "[object Function]" || e === "[object GeneratorFunction]" || !!/^\[object HTML/.test(e)) && a(t);
  };
}