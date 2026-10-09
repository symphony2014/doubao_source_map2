// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 187217
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  }
  function n(e, t) {
    if (e != null) {
      if (typeof e != "object") {
        e = [e];
      }
      if (r(e)) {
        var n = 0;
        var i = e.length;
        for (; n < i; n++) {
          t.call(null, e[n], n, e);
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
  function i(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") {
      return false;
    }
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
  exports.isCaptchaUrl = exports.merge = exports.isPlainObject = exports.isUndefined = exports.forEach = exports.isObject = exports.isArray = undefined;
  exports.isArray = r;
  exports.isObject = function (e) {
    return e !== null && typeof e == "object";
  };
  exports.forEach = n;
  exports.isUndefined = function (e) {
    return e === undefined;
  };
  exports.isPlainObject = i;
  exports.merge = function e() {
    var t = {};
    function o(n, o) {
      if (i(t[o]) && i(n)) {
        t[o] = e(t[o], n);
      } else if (i(n)) {
        t[o] = e({}, n);
      } else if (r(n)) {
        t[o] = n.slice();
      } else {
        t[o] = n;
      }
    }
    var a = 0;
    var s = arguments.length;
    for (; a < s; a++) {
      n(arguments[a], o);
    }
    return t;
  };
  var o = ["/accounts/auth/", "/accounts/idp/auth_url", "/accounts/lite/", "/accounts/retrieve/"];
  exports.isCaptchaUrl = function (e) {
    return o.findIndex(function (t) {
      return e.includes(t);
    }) > -1;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}