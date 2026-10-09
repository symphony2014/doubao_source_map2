// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 443453
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.CssStyles = undefined;
  var r = function () {
    function t(t = null) {
      this.styles = {};
      this.addStyles(t);
    }
    Object.defineProperty(t.prototype, "cssText", {
      get: function () {
        return this.getStyleString();
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.addStyles = function (t) {
      var e;
      var r;
      if (t) {
        try {
          var T = Q(Object.keys(t));
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var o = n.value;
            this.styles[o] ||= {};
            Object.assign(this.styles[o], t[o]);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (n && !n.done && (r = T.return)) {
              r.call(T);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    t.prototype.removeStyles = function () {
      var t;
      var e;
      var r = [];
      var T = 0;
      for (; T < arguments.length; T++) {
        r[T] = arguments[T];
      }
      try {
        var n = Q(r);
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var i = o.value;
          delete this.styles[i];
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (e = n.return)) {
            e.call(n);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.prototype.clear = function () {
      this.styles = {};
    };
    t.prototype.getStyleString = function () {
      return this.getStyleRules().join("\n\n");
    };
    t.prototype.getStyleRules = function () {
      var t;
      var e;
      var r = Object.keys(this.styles);
      var T = Array(r.length);
      var n = 0;
      try {
        var o = Q(r);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          T[n++] = a + " {\n" + this.getStyleDefString(this.styles[a]) + "\n}";
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (i && !i.done && (e = o.return)) {
            e.call(o);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return T;
    };
    t.prototype.getStyleDefString = function (t) {
      var e;
      var r;
      var T = Object.keys(t);
      var n = Array(T.length);
      var o = 0;
      try {
        var i = Q(T);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          n[o++] = "  " + u + ": " + t[u] + ";";
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return n.join("\n");
    };
    return t;
  }();
  exports.CssStyles = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}