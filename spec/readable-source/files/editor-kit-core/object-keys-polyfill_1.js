// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'isArgumentsCheck'
// - Resolved require(944999) to 'is-arguments-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 180097
         */
module.exports = function (module, exports, require) {
  var n;
  if (!Object.keys) {
    var o = Object.prototype.hasOwnProperty;
    var i = Object.prototype.toString;
    var isArgumentsCheck = require("is-arguments-check") /*id: 944999*/;
    var a = Object.prototype.propertyIsEnumerable;
    var s = !a.call({
      toString: null
    }, "toString");
    var c = a.call(function () {}, "prototype");
    var f = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
    function l(t) {
      var e = t.constructor;
      return e && e.prototype === t;
    }
    var p = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    var d = function () {
      if (typeof window == "undefined") {
        return false;
      }
      for (var t in window) {
        try {
          if (!p["$" + t] && o.call(window, t) && window[t] !== null && typeof window[t] == "object") {
            try {
              l(window[t]);
            } catch (t) {
              return true;
            }
          }
        } catch (t) {
          return true;
        }
      }
      return false;
    }();
    function h(t) {
      if (typeof window == "undefined" || !d) {
        return l(t);
      }
      try {
        return l(t);
      } catch (t) {
        return false;
      }
    }
    n = function (t) {
      var e = t !== null && typeof t == "object";
      var r = i.call(t) === "[object Function]";
      var n = isArgumentsCheck(t);
      var a = e && i.call(t) === "[object String]";
      var l = [];
      if (!e && !r && !n) {
        throw TypeError("Object.keys called on a non-object");
      }
      var p = c && r;
      if (a && t.length > 0 && !o.call(t, 0)) {
        for (var d = 0; d < t.length; ++d) {
          l.push(String(d));
        }
      }
      if (n && t.length > 0) {
        for (var y = 0; y < t.length; ++y) {
          l.push(String(y));
        }
      } else {
        for (var b in t) {
          if ((!p || b !== "prototype") && o.call(t, b)) {
            l.push(String(b));
          }
        }
      }
      if (s) {
        var g = h(t);
        var v = 0;
        for (; v < f.length; ++v) {
          if ((!g || f[v] !== "constructor") && o.call(t, f[v])) {
            l.push(f[v]);
          }
        }
      }
      return l;
    };
  }
  module.exports = n;
}