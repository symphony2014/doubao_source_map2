// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 769565
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__read || function (t, e) {
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
  var r = this && this.__spreadArray || function (t, e, Q) {
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
  exports.split = exports.isPercent = exports.unicodeString = exports.unicodeChars = exports.quotePattern = exports.sortLength = undefined;
  exports.sortLength = function (t, e) {
    if (t.length !== e.length) {
      return e.length - t.length;
    } else if (t === e) {
      return 0;
    } else if (t < e) {
      return -1;
    } else {
      return 1;
    }
  };
  exports.quotePattern = function (t) {
    return t.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
  };
  exports.unicodeChars = function (t) {
    return Array.from(t).map(function (t) {
      return t.codePointAt(0);
    });
  };
  exports.unicodeString = function (t) {
    return String.fromCodePoint.apply(String, r([], Q(t), false));
  };
  exports.isPercent = function (t) {
    return !!t.match(/%\s*$/);
  };
  exports.split = function (t) {
    return t.trim().split(/\s+/);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}