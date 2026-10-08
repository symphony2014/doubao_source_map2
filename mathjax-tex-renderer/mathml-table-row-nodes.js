// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'a' to 'attributeInheritanceManager'
// - Resolved require(497692) to 'attribute-inheritance-manager'
// - Renamed variable 'u' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 425
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
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
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
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
  var o = this && this.__values || function (t) {
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
  exports.MmlMlabeledtr = exports.MmlMtr = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var attributeInheritanceManager = require("attribute-inheritance-manager") /*id: 497692*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mtr";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "linebreakContainer", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      try {
        var T;
        var n;
        var i;
        var a;
        var s = o(this.childNodes);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var c = l.value;
          if (!c.isKind("mtd")) {
            this.replaceChild(this.factory.create("mtd"), c).appendChild(c);
          }
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (n = s.return)) {
            n.call(s);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
      var p = stringUtils_1.split(this.attributes.get("columnalign"));
      if (this.arity === 1) {
        p.unshift(this.parent.attributes.get("side"));
      }
      t = this.addInheritedAttributes(t, {
        rowalign: this.attributes.get("rowalign"),
        columnalign: "center"
      });
      try {
        var h = o(this.childNodes);
        var f = h.next();
        for (; !f.done; f = h.next()) {
          var c = f.value;
          t.columnalign[1] = p.shift() || t.columnalign[1];
          c.setInheritedAttributes(t, e, Q, r);
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
    e.prototype.verifyChildren = function (e) {
      var Q;
      var r;
      if (this.parent && !this.parent.isKind("mtable")) {
        this.mError(this.kind + " can only be a child of an mtable", e, true);
        return;
      }
      try {
        var T = o(this.childNodes);
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var i = n.value;
          if (!i.isKind("mtd")) {
            this.replaceChild(this.factory.create("mtd"), i).appendChild(i);
            if (!e.fixMtables) {
              i.mError("Children of " + this.kind + " must be mtd", e);
            }
          }
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (n && !n.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      t.prototype.verifyChildren.call(this, e);
    };
    e.prototype.setTeXclass = function (t) {
      var e;
      var Q;
      this.getPrevClass(t);
      try {
        var r = o(this.childNodes);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          T.value.setTeXclass(null);
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
      return this;
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults), {
      rowalign: attributeInheritanceManager.INHERIT,
      columnalign: attributeInheritanceManager.INHERIT,
      groupalign: attributeInheritanceManager.INHERIT
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMtr = s;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mlabeledtr";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(s);
  exports.MmlMlabeledtr = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}