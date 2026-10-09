// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 228436
         */
module.exports = function (module, exports, require) {
  function n(t, e) {
    return t === e;
  }
  function r(t, e = n) {
    var r = null;
    var i = null;
    return function () {
      if (!function (t, e, n) {
        if (e === null || n === null || e.length !== n.length) {
          return false;
        }
        var r = e.length;
        var i = 0;
        for (; i < r; i++) {
          if (!t(e[i], n[i])) {
            return false;
          }
        }
        return true;
      }(e, r, arguments)) {
        i = t.apply(null, arguments);
      }
      r = arguments;
      return i;
    };
  }
  exports.createSelector = function (t) {
    var e = arguments.length;
    var n = Array(e > 1 ? e - 1 : 0);
    var i = 1;
    for (; i < e; i++) {
      n[i - 1] = arguments[i];
    }
    return function () {
      var e = arguments.length;
      var i = Array(e);
      var o = 0;
      for (; o < e; o++) {
        i[o] = arguments[o];
      }
      var s = 0;
      var a = i.pop();
      var u = function (t) {
        var e = Array.isArray(t[0]) ? t[0] : t;
        if (!e.every(function (t) {
          return typeof t == "function";
        })) {
          throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + e.map(function (t) {
            return typeof t;
          }).join(", ") + "]");
        }
        return e;
      }(i);
      var c = t.apply(undefined, [function () {
        s++;
        return a.apply(null, arguments);
      }].concat(n));
      var l = r(function () {
        var t = [];
        var e = u.length;
        var n = 0;
        for (; n < e; n++) {
          t.push(u[n].apply(null, arguments));
        }
        return c.apply(null, t);
      });
      l.resultFunc = a;
      l.recomputations = function () {
        return s;
      };
      l.resetRecomputations = function () {
        return s = 0;
      };
      return l;
    };
  }(r);
}