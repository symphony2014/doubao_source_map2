// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 833830
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
  var n = this && this.__values || function (t) {
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
  exports.AbstractEmptyNode = exports.AbstractNode = undefined;
  var o = function () {
    function t(t, e, Q) {
      var r;
      var T;
      if (e === undefined) {
        e = {};
      }
      if (Q === undefined) {
        Q = [];
      }
      this.factory = t;
      this.parent = null;
      this.properties = {};
      this.childNodes = [];
      try {
        var o = n(Object.keys(e));
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          this.setProperty(a, e[a]);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (T = o.return)) {
            T.call(o);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      if (Q.length) {
        this.setChildren(Q);
      }
    }
    Object.defineProperty(t.prototype, "kind", {
      get: function () {
        return "unknown";
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.setProperty = function (t, e) {
      this.properties[t] = e;
    };
    t.prototype.getProperty = function (t) {
      return this.properties[t];
    };
    t.prototype.getPropertyNames = function () {
      return Object.keys(this.properties);
    };
    t.prototype.getAllProperties = function () {
      return this.properties;
    };
    t.prototype.removeProperty = function () {
      var t;
      var e;
      var Q = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        Q[r] = arguments[r];
      }
      try {
        var T = n(Q);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          delete this.properties[i];
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (e = T.return)) {
            e.call(T);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.prototype.isKind = function (t) {
      return this.factory.nodeIsKind(this, t);
    };
    t.prototype.setChildren = function (t) {
      var e;
      var Q;
      this.childNodes = [];
      try {
        var r = n(t);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var o = T.value;
          this.appendChild(o);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.prototype.appendChild = function (t) {
      this.childNodes.push(t);
      t.parent = this;
      return t;
    };
    t.prototype.replaceChild = function (t, e) {
      var Q = this.childIndex(e);
      if (Q !== null) {
        this.childNodes[Q] = t;
        t.parent = this;
        e.parent = null;
      }
      return t;
    };
    t.prototype.removeChild = function (t) {
      var e = this.childIndex(t);
      if (e !== null) {
        this.childNodes.splice(e, 1);
        t.parent = null;
      }
      return t;
    };
    t.prototype.childIndex = function (t) {
      var e = this.childNodes.indexOf(t);
      if (e === -1) {
        return null;
      } else {
        return e;
      }
    };
    t.prototype.copy = function () {
      var t;
      var e;
      var Q = this.factory.create(this.kind);
      Q.properties = T({}, this.properties);
      try {
        var r = n(this.childNodes || []);
        var o = r.next();
        for (; !o.done; o = r.next()) {
          var i = o.value;
          if (i) {
            Q.appendChild(i.copy());
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (e = r.return)) {
            e.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return Q;
    };
    t.prototype.findNodes = function (t) {
      var e = [];
      this.walkTree(function (Q) {
        if (Q.isKind(t)) {
          e.push(Q);
        }
      });
      return e;
    };
    t.prototype.walkTree = function (t, e) {
      var Q;
      var r;
      t(this, e);
      try {
        var T = n(this.childNodes);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          if (i) {
            i.walkTree(t, e);
          }
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      return e;
    };
    t.prototype.toString = function () {
      return this.kind + "(" + this.childNodes.join(",") + ")";
    };
    return t;
  }();
  exports.AbstractNode = o;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    r(e, t);
    e.prototype.setChildren = function (t) {};
    e.prototype.appendChild = function (t) {
      return t;
    };
    e.prototype.replaceChild = function (t, e) {
      return e;
    };
    e.prototype.childIndex = function (t) {
      return null;
    };
    e.prototype.walkTree = function (t, e) {
      t(this, e);
      return e;
    };
    e.prototype.toString = function () {
      return this.kind;
    };
    return e;
  }(o);
  exports.AbstractEmptyNode = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}