// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 966760
         */
module.exports = function (module, exports, require) {
  var Q;
  var r = this && this.__extends || (Q = function (t, e) {
    return (Q = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function r() {
      this.constructor = t;
    }
    Q(t, e);
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  });
  var T = this && this.__assign || function () {
    return (T = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var o = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.CommonTeXFontMixin = undefined;
  exports.CommonTeXFontMixin = function (t) {
    var e;
    (e = function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      e.prototype.getDelimiterData = function (t) {
        return this.getChar("-smallop", t) || this.getChar("-size4", t);
      };
      return e;
    }(t)).NAME = "TeX";
    e.defaultVariants = o(o([], n(t.defaultVariants), false), [["-smallop", "normal"], ["-largeop", "normal"], ["-size3", "normal"], ["-size4", "normal"], ["-tex-calligraphic", "italic"], ["-tex-bold-calligraphic", "bold-italic"], ["-tex-oldstyle", "normal"], ["-tex-bold-oldstyle", "bold"], ["-tex-mathit", "italic"], ["-tex-variant", "normal"]], false);
    e.defaultCssFonts = T(T({}, t.defaultCssFonts), {
      "-smallop": ["serif", false, false],
      "-largeop": ["serif", false, false],
      "-size3": ["serif", false, false],
      "-size4": ["serif", false, false],
      "-tex-calligraphic": ["cursive", true, false],
      "-tex-bold-calligraphic": ["cursive", true, true],
      "-tex-oldstyle": ["serif", false, false],
      "-tex-bold-oldstyle": ["serif", false, true],
      "-tex-mathit": ["serif", true, false]
    });
    e.defaultSizeVariants = ["normal", "-smallop", "-largeop", "-size3", "-size4", "-tex-variant"];
    e.defaultStretchVariants = ["-size4"];
    return e;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}