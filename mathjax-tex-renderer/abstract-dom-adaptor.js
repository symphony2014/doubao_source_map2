// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 704595
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
  exports.AbstractDOMAdaptor = undefined;
  var r = function () {
    function t(t = null) {
      this.document = t;
    }
    t.prototype.node = function (t, e = {}, r = [], T) {
      var n;
      var o;
      var i = this.create(t, T);
      this.setAttributes(i, e);
      try {
        var a = Q(r);
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var s = u.value;
          this.append(i, s);
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (o = a.return)) {
            o.call(a);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return i;
    };
    t.prototype.setAttributes = function (t, e) {
      var r;
      var T;
      var n;
      var o;
      var i;
      var a;
      if (e.style && typeof e.style != "string") {
        try {
          var u = Q(Object.keys(e.style));
          var s = u.next();
          for (; !s.done; s = u.next()) {
            var l = s.value;
            this.setStyle(t, l.replace(/-([a-z])/g, function (t, e) {
              return e.toUpperCase();
            }), e.style[l]);
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (T = u.return)) {
              T.call(u);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
      if (e.properties) {
        try {
          var c = Q(Object.keys(e.properties));
          var p = c.next();
          for (; !p.done; p = c.next()) {
            var l = p.value;
            t[l] = e.properties[l];
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (p && !p.done && (o = c.return)) {
              o.call(c);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
      try {
        var h = Q(Object.keys(e));
        var f = h.next();
        for (; !f.done; f = h.next()) {
          var l = f.value;
          if ((l !== "style" || typeof e.style == "string") && l !== "properties") {
            this.setAttribute(t, l, e[l]);
          }
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          if (f && !f.done && (a = h.return)) {
            a.call(h);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
    };
    t.prototype.replace = function (t, e) {
      this.insert(t, e);
      this.remove(e);
      return e;
    };
    t.prototype.childNode = function (t, e) {
      return this.childNodes(t)[e];
    };
    t.prototype.allClasses = function (t) {
      var e = this.getAttribute(t, "class");
      if (e) {
        return e.replace(/  +/g, " ").replace(/^ /, "").replace(/ $/, "").split(/ /);
      } else {
        return [];
      }
    };
    return t;
  }();
  exports.AbstractDOMAdaptor = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}