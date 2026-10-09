// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'createIterator'
// - Renamed export 'a' to 'iterableToArray'
// - Renamed export 'b' to 'concatIterables'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 369701
         */
module.exports = function (module, exports, require) {
  function n(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var r = e && t[e];
    var n = 0;
    if (r) {
      return r.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && n >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[n++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function o(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) {
      return t;
    }
    var n;
    var o;
    var i = r.call(t);
    var u = [];
    try {
      while ((e === undefined || e-- > 0) && !(n = i.next()).done) {
        u.push(n.value);
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return u;
  }
  function i() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t = t.concat(o(arguments[e]));
    }
    return t;
  }
  require.d(exports, {
    createIterator: function () {
      return n;
    },
    iterableToArray: function () {
      return o;
    },
    concatIterables: function () {
      return i;
    }
  });
}