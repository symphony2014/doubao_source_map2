// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'a' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 179776
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
  exports.MmlMtable = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var u = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.properties = {
        useHeight: true
      };
      e.texclass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mtable";
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
    e.prototype.setInheritedAttributes = function (e, Q, r, T) {
      var n;
      var a;
      try {
        var u = o(mathmlAbstractNodeClasses.indentAttributes);
        var s = u.next();
        for (; !s.done; s = u.next()) {
          var l = s.value;
          if (e[l]) {
            this.attributes.setInherited(l, e[l][1]);
          }
          if (this.attributes.getExplicit(l) !== undefined) {
            delete this.attributes.getAllAttributes()[l];
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (a = u.return)) {
            a.call(u);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      t.prototype.setInheritedAttributes.call(this, e, Q, r, T);
    };
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      try {
        var T;
        var n;
        var i;
        var u;
        var s = o(this.childNodes);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var c = l.value;
          if (!c.isKind("mtr")) {
            this.replaceChild(this.factory.create("mtr"), c).appendChild(c);
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
      Q = this.getProperty("scriptlevel") || Q;
      e = !!this.attributes.getExplicit("displaystyle") || !!this.attributes.getDefault("displaystyle");
      t = this.addInheritedAttributes(t, {
        columnalign: this.attributes.get("columnalign"),
        rowalign: "center"
      });
      var p = this.attributes.getExplicit("data-cramped");
      var h = stringUtils_1.split(this.attributes.get("rowalign"));
      try {
        var f = o(this.childNodes);
        var d = f.next();
        for (; !d.done; d = f.next()) {
          var c = d.value;
          t.rowalign[1] = h.shift() || t.rowalign[1];
          c.setInheritedAttributes(t, e, Q, !!p);
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          if (d && !d.done && (u = f.return)) {
            u.call(f);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
    };
    e.prototype.verifyChildren = function (e) {
      var Q = null;
      var r = this.factory;
      var T = 0;
      for (; T < this.childNodes.length; T++) {
        var n = this.childNodes[T];
        if (n.isKind("mtr")) {
          Q = null;
        } else {
          var o = n.isKind("mtd");
          if (Q) {
            this.removeChild(n);
            T--;
          } else {
            Q = this.replaceChild(r.create("mtr"), n);
          }
          Q.appendChild(o ? n : r.create("mtd", {}, [n]));
          if (!e.fixMtables) {
            n.parent.removeChild(n);
            n.parent = this;
            if (o) {
              Q.appendChild(r.create("mtd"));
            }
            var i = n.mError("Children of " + this.kind + " must be mtr or mlabeledtr", e, o);
            Q.childNodes[Q.childNodes.length - 1].appendChild(i);
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
      align: "axis",
      rowalign: "baseline",
      columnalign: "center",
      groupalign: "{left}",
      alignmentscope: true,
      columnwidth: "auto",
      width: "auto",
      rowspacing: "1ex",
      columnspacing: ".8em",
      rowlines: "none",
      columnlines: "none",
      frame: "none",
      framespacing: "0.4em 0.5ex",
      equalrows: false,
      equalcolumns: false,
      displaystyle: false,
      side: "right",
      minlabelspacing: "0.8em"
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMtable = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}