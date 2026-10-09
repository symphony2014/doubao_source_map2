// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 65551
         */
module.exports = function (module, exports, require) {
  var t = Object.getOwnPropertySymbols;
  var n = Object.prototype.hasOwnProperty;
  var r = Object.prototype.propertyIsEnumerable;
  module.exports = !function () {
    try {
      if (!Object.assign) {
        return false;
      }
      var e = new String("abc");
      e[5] = "de";
      if (Object.getOwnPropertyNames(e)[0] === "5") {
        return false;
      }
      var t = {};
      var n = 0;
      for (; n < 10; n++) {
        t["_" + String.fromCharCode(n)] = n;
      }
      var r = Object.getOwnPropertyNames(t).map(function (e) {
        return t[e];
      });
      if (r.join("") !== "0123456789") {
        return false;
      }
      var i = {};
      "abcdefghijklmnopqrst".split("").forEach(function (e) {
        i[e] = e;
      });
      if (Object.keys(Object.assign({}, i)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }() ? function (e, i) {
    var o;
    var a;
    var s = function (e) {
      if (e == null) {
        throw TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(e);
    }(e);
    var u = 1;
    for (; u < arguments.length; u++) {
      for (var c in o = Object(arguments[u])) {
        if (n.call(o, c)) {
          s[c] = o[c];
        }
      }
      if (t) {
        a = t(o);
        for (var l = 0; l < a.length; l++) {
          if (r.call(o, a[l])) {
            s[a[l]] = o[a[l]];
          }
        }
      }
    }
    return s;
  } : Object.assign;
}