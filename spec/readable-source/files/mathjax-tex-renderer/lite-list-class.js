// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 295727
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
  exports.LiteList = undefined;
  var T = function () {
    function t(t) {
      this.nodes = [];
      this.nodes = r([], Q(t), false);
    }
    t.prototype.append = function (t) {
      this.nodes.push(t);
    };
    t.prototype[Symbol.iterator] = function () {
      var t = 0;
      return {
        next: function () {
          if (t === this.nodes.length) {
            return {
              value: null,
              done: true
            };
          } else {
            return {
              value: this.nodes[t++],
              done: false
            };
          }
        }
      };
    };
    return t;
  }();
  exports.LiteList = T;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}