// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'attributeInheritanceManager'
// - Resolved require(497692) to 'attribute-inheritance-manager'
// - Renamed variable 'u' to 'abstractNodeClasses'
// - Resolved require(833830) to 'abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 135533
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
  var i = this && this.__read || function (t, e) {
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
  exports.XMLNode = exports.TextNode = exports.AbstractMmlEmptyNode = exports.AbstractMmlBaseNode = exports.AbstractMmlLayoutNode = exports.AbstractMmlTokenNode = exports.AbstractMmlNode = exports.indentAttributes = exports.TEXCLASSNAMES = exports.TEXCLASS = undefined;
  var attributeInheritanceManager = require("attribute-inheritance-manager") /*id: 497692*/;
  var abstractNodeClasses = require("abstract-node-classes") /*id: 833830*/;
  exports.TEXCLASS = {
    ORD: 0,
    OP: 1,
    BIN: 2,
    REL: 3,
    OPEN: 4,
    CLOSE: 5,
    PUNCT: 6,
    INNER: 7,
    VCENTER: 8,
    NONE: -1
  };
  exports.TEXCLASSNAMES = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"];
  var s = ["", "thinmathspace", "mediummathspace", "thickmathspace"];
  var l = [[0, -1, 2, 3, 0, 0, 0, 1], [-1, -1, 0, 3, 0, 0, 0, 1], [2, 2, 0, 0, 2, 0, 0, 2], [3, 3, 0, 0, 3, 0, 0, 3], [0, 0, 0, 0, 0, 0, 0, 0], [0, -1, 2, 3, 0, 0, 0, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, -1, 2, 3, 1, 0, 1, 1]];
  exports.indentAttributes = ["indentalign", "indentalignfirst", "indentshift", "indentshiftfirst"];
  var c = function (t) {
    function Q(e, Q = {}, r = []) {
      var T = t.call(this, e) || this;
      T.prevClass = null;
      T.prevLevel = null;
      T.texclass = null;
      if (T.arity < 0) {
        T.childNodes = [e.create("inferredMrow")];
        T.childNodes[0].parent = T;
      }
      T.setChildren(r);
      T.attributes = new attributeInheritanceManager.Attributes(e.getNodeClass(T.kind).defaults, e.getNodeClass("math").defaults);
      T.attributes.setList(Q);
      return T;
    }
    T(Q, t);
    Q.prototype.copy = function (t = false) {
      var e;
      var Q;
      var r;
      var T;
      var i = this.factory.create(this.kind);
      i.properties = n({}, this.properties);
      if (this.attributes) {
        var a = this.attributes.getAllAttributes();
        try {
          var u = o(Object.keys(a));
          var s = u.next();
          for (; !s.done; s = u.next()) {
            var l = s.value;
            if (l !== "id" || t) {
              i.attributes.set(l, a[l]);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (Q = u.return)) {
              Q.call(u);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
      if (this.childNodes && this.childNodes.length) {
        var c = this.childNodes;
        if (c.length === 1 && c[0].isInferred) {
          c = c[0].childNodes;
        }
        try {
          var p = o(c);
          var h = p.next();
          for (; !h.done; h = p.next()) {
            var f = h.value;
            if (f) {
              i.appendChild(f.copy());
            } else {
              i.childNodes.push(null);
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (h && !h.done && (T = p.return)) {
              T.call(p);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
      return i;
    };
    Object.defineProperty(Q.prototype, "texClass", {
      get: function () {
        return this.texclass;
      },
      set: function (t) {
        this.texclass = t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isToken", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isEmbellished", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isSpacelike", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "linebreakContainer", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "hasNewLine", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "arity", {
      get: function () {
        return Infinity;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isInferred", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "Parent", {
      get: function () {
        for (var t = this.parent; t && t.notParent;) {
          t = t.Parent;
        }
        return t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "notParent", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Q.prototype.setChildren = function (e) {
      if (this.arity < 0) {
        return this.childNodes[0].setChildren(e);
      } else {
        return t.prototype.setChildren.call(this, e);
      }
    };
    Q.prototype.appendChild = function (e) {
      var Q;
      var r;
      var T = this;
      if (this.arity < 0) {
        this.childNodes[0].appendChild(e);
        return e;
      }
      if (e.isInferred) {
        if (this.arity === Infinity) {
          e.childNodes.forEach(function (e) {
            return t.prototype.appendChild.call(T, e);
          });
          return e;
        }
        var n = e;
        (e = this.factory.create("mrow")).setChildren(n.childNodes);
        e.attributes = n.attributes;
        try {
          var i = o(n.getPropertyNames());
          var a = i.next();
          for (; !a.done; a = i.next()) {
            var u = a.value;
            e.setProperty(u, n.getProperty(u));
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (r = i.return)) {
              r.call(i);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
      }
      return t.prototype.appendChild.call(this, e);
    };
    Q.prototype.replaceChild = function (e, Q) {
      if (this.arity < 0) {
        this.childNodes[0].replaceChild(e, Q);
        return e;
      } else {
        return t.prototype.replaceChild.call(this, e, Q);
      }
    };
    Q.prototype.core = function () {
      return this;
    };
    Q.prototype.coreMO = function () {
      return this;
    };
    Q.prototype.coreIndex = function () {
      return 0;
    };
    Q.prototype.childPosition = function () {
      var t;
      var e;
      var Q = this;
      var r = Q.parent;
      while (r && r.notParent) {
        Q = r;
        r = r.parent;
      }
      if (r) {
        var T = 0;
        try {
          var n = o(r.childNodes);
          var i = n.next();
          for (; !i.done; i = n.next()) {
            if (i.value === Q) {
              return T;
            }
            T++;
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (i && !i.done && (e = n.return)) {
              e.call(n);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
      return null;
    };
    Q.prototype.setTeXclass = function (t) {
      this.getPrevClass(t);
      if (this.texClass != null) {
        return this;
      } else {
        return t;
      }
    };
    Q.prototype.updateTeXclass = function (t) {
      if (t) {
        this.prevClass = t.prevClass;
        this.prevLevel = t.prevLevel;
        t.prevClass = t.prevLevel = null;
        this.texClass = t.texClass;
      }
    };
    Q.prototype.getPrevClass = function (t) {
      if (t) {
        this.prevClass = t.texClass;
        this.prevLevel = t.attributes.get("scriptlevel");
      }
    };
    Q.prototype.texSpacing = function () {
      var t = this.prevClass ?? exports.TEXCLASS.NONE;
      var Q = this.texClass || exports.TEXCLASS.ORD;
      if (t === exports.TEXCLASS.NONE || Q === exports.TEXCLASS.NONE) {
        return "";
      }
      if (t === exports.TEXCLASS.VCENTER) {
        t = exports.TEXCLASS.ORD;
      }
      if (Q === exports.TEXCLASS.VCENTER) {
        Q = exports.TEXCLASS.ORD;
      }
      var r = l[t][Q];
      if ((this.prevLevel > 0 || this.attributes.get("scriptlevel") > 0) && r >= 0) {
        return "";
      } else {
        return s[Math.abs(r)];
      }
    };
    Q.prototype.hasSpacingAttributes = function () {
      return this.isEmbellished && this.coreMO().hasSpacingAttributes();
    };
    Q.prototype.setInheritedAttributes = function (t = {}, e = false, r = 0, T = false) {
      var n;
      var a;
      var u = this.attributes.getAllDefaults();
      try {
        var s = o(Object.keys(t));
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var c = l.value;
          if (u.hasOwnProperty(c) || Q.alwaysInherit.hasOwnProperty(c)) {
            var p = i(t[c], 2);
            var h = p[0];
            var f = p[1];
            if (!((Q.noInherit[h] || {})[this.kind] || {})[c]) {
              this.attributes.setInherited(c, f);
            }
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (a = s.return)) {
            a.call(s);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      if (this.attributes.getExplicit("displaystyle") === undefined) {
        this.attributes.setInherited("displaystyle", e);
      }
      if (this.attributes.getExplicit("scriptlevel") === undefined) {
        this.attributes.setInherited("scriptlevel", r);
      }
      if (T) {
        this.setProperty("texprimestyle", T);
      }
      var d = this.arity;
      if (d >= 0 && d !== Infinity && (d === 1 && this.childNodes.length === 0 || d !== 1 && this.childNodes.length !== d)) {
        if (d < this.childNodes.length) {
          this.childNodes = this.childNodes.slice(0, d);
        } else {
          while (this.childNodes.length < d) {
            this.appendChild(this.factory.create("mrow"));
          }
        }
      }
      this.setChildInheritedAttributes(t, e, r, T);
    };
    Q.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      var T;
      var n;
      try {
        var i = o(this.childNodes);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          a.value.setInheritedAttributes(t, e, Q, r);
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (n = i.return)) {
            n.call(i);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
    };
    Q.prototype.addInheritedAttributes = function (t, e) {
      var Q;
      var r;
      var T = n({}, t);
      try {
        var i = o(Object.keys(e));
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          if (u !== "displaystyle" && u !== "scriptlevel" && u !== "style") {
            T[u] = [this.kind, e[u]];
          }
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      return T;
    };
    Q.prototype.inheritAttributesFrom = function (t) {
      var e = t.attributes;
      var Q = e.get("displaystyle");
      var r = e.get("scriptlevel");
      var T = e.isSet("mathsize") ? {
        mathsize: ["math", e.get("mathsize")]
      } : {};
      var n = t.getProperty("texprimestyle") || false;
      this.setInheritedAttributes(T, Q, r, n);
    };
    Q.prototype.verifyTree = function (t = null) {
      if (t !== null) {
        this.verifyAttributes(t);
        var e = this.arity;
        if (t.checkArity && e >= 0 && e !== Infinity && (e === 1 && this.childNodes.length === 0 || e !== 1 && this.childNodes.length !== e)) {
          this.mError("Wrong number of children for \"" + this.kind + "\" node", t, true);
        }
        this.verifyChildren(t);
      }
    };
    Q.prototype.verifyAttributes = function (t) {
      var e;
      var Q;
      if (t.checkAttributes) {
        var r = this.attributes;
        var T = [];
        try {
          var n = o(r.getExplicitNames());
          var i = n.next();
          for (; !i.done; i = n.next()) {
            var a = i.value;
            if (a.substr(0, 5) !== "data-" && r.getDefault(a) === undefined && !a.match(/^(?:class|style|id|(?:xlink:)?href)$/)) {
              T.push(a);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (Q = n.return)) {
              Q.call(n);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        if (T.length) {
          this.mError("Unknown attributes for " + this.kind + " node: " + T.join(", "), t);
        }
      }
    };
    Q.prototype.verifyChildren = function (t) {
      var e;
      var Q;
      try {
        var r = o(this.childNodes);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          T.value.verifyTree(t);
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
    Q.prototype.mError = function (t, e, Q = false) {
      if (this.parent && this.parent.isKind("merror")) {
        return null;
      }
      var r = this.factory.create("merror");
      r.attributes.set("data-mjx-message", t);
      if (e.fullErrors || Q) {
        var T = this.factory.create("mtext");
        var n = this.factory.create("text");
        n.setText(e.fullErrors ? t : this.kind);
        T.appendChild(n);
        r.appendChild(T);
        this.parent.replaceChild(r, this);
      } else {
        this.parent.replaceChild(r, this);
        r.appendChild(this);
      }
      return r;
    };
    Q.defaults = {
      mathbackground: attributeInheritanceManager.INHERIT,
      mathcolor: attributeInheritanceManager.INHERIT,
      mathsize: attributeInheritanceManager.INHERIT,
      dir: attributeInheritanceManager.INHERIT
    };
    Q.noInherit = {
      mstyle: {
        mpadded: {
          width: true,
          height: true,
          depth: true,
          lspace: true,
          voffset: true
        },
        mtable: {
          width: true,
          height: true,
          depth: true,
          align: true
        }
      },
      maligngroup: {
        mrow: {
          groupalign: true
        },
        mtable: {
          groupalign: true
        }
      }
    };
    Q.alwaysInherit = {
      scriptminsize: true,
      scriptsizemultiplier: true
    };
    Q.verifyDefaults = {
      checkArity: true,
      checkAttributes: false,
      fullErrors: false,
      fixMmultiscripts: true,
      fixMtables: true
    };
    return Q;
  }(abstractNodeClasses.AbstractNode);
  exports.AbstractMmlNode = c;
  var p = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "isToken", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getText = function () {
      var t;
      var e;
      var Q = "";
      try {
        var r = o(this.childNodes);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value;
          if (n instanceof D) {
            Q += n.getText();
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (T && !T.done && (e = r.return)) {
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
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      var T;
      var n;
      try {
        var i = o(this.childNodes);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          if (u instanceof c) {
            u.setInheritedAttributes(t, e, Q, r);
          }
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (n = i.return)) {
            n.call(i);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
    };
    e.prototype.walkTree = function (t, e) {
      var Q;
      var r;
      t(this, e);
      try {
        var T = o(this.childNodes);
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var i = n.value;
          if (i instanceof c) {
            i.walkTree(t, e);
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
      return e;
    };
    e.defaults = n(n({}, c.defaults), {
      mathvariant: "normal",
      mathsize: attributeInheritanceManager.INHERIT
    });
    return e;
  }(c);
  exports.AbstractMmlTokenNode = p;
  var h = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "isSpacelike", {
      get: function () {
        return this.childNodes[0].isSpacelike;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isEmbellished", {
      get: function () {
        return this.childNodes[0].isEmbellished;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return -1;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.core = function () {
      return this.childNodes[0];
    };
    e.prototype.coreMO = function () {
      return this.childNodes[0].coreMO();
    };
    e.prototype.setTeXclass = function (t) {
      t = this.childNodes[0].setTeXclass(t);
      this.updateTeXclass(this.childNodes[0]);
      return t;
    };
    e.defaults = c.defaults;
    return e;
  }(c);
  exports.AbstractMmlLayoutNode = h;
  var f = function (t) {
    function Q() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(Q, t);
    Object.defineProperty(Q.prototype, "isEmbellished", {
      get: function () {
        return this.childNodes[0].isEmbellished;
      },
      enumerable: false,
      configurable: true
    });
    Q.prototype.core = function () {
      return this.childNodes[0];
    };
    Q.prototype.coreMO = function () {
      return this.childNodes[0].coreMO();
    };
    Q.prototype.setTeXclass = function (t) {
      this.getPrevClass(t);
      this.texClass = exports.TEXCLASS.ORD;
      var Q;
      var r;
      var T = this.childNodes[0];
      if (T) {
        if (this.isEmbellished || T.isKind("mi")) {
          t = T.setTeXclass(t);
          this.updateTeXclass(this.core());
        } else {
          T.setTeXclass(null);
          t = this;
        }
      } else {
        t = this;
      }
      try {
        var n = o(this.childNodes.slice(1));
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var a = i.value;
          if (a) {
            a.setTeXclass(null);
          }
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (r = n.return)) {
            r.call(n);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      return t;
    };
    Q.defaults = c.defaults;
    return Q;
  }(c);
  exports.AbstractMmlBaseNode = f;
  var d = function (t) {
    function Q() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(Q, t);
    Object.defineProperty(Q.prototype, "isToken", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isEmbellished", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isSpacelike", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "linebreakContainer", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "hasNewLine", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "arity", {
      get: function () {
        return 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "isInferred", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "notParent", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "Parent", {
      get: function () {
        return this.parent;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "texClass", {
      get: function () {
        return exports.TEXCLASS.NONE;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "prevClass", {
      get: function () {
        return exports.TEXCLASS.NONE;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Q.prototype, "prevLevel", {
      get: function () {
        return 0;
      },
      enumerable: false,
      configurable: true
    });
    Q.prototype.hasSpacingAttributes = function () {
      return false;
    };
    Object.defineProperty(Q.prototype, "attributes", {
      get: function () {
        return null;
      },
      enumerable: false,
      configurable: true
    });
    Q.prototype.core = function () {
      return this;
    };
    Q.prototype.coreMO = function () {
      return this;
    };
    Q.prototype.coreIndex = function () {
      return 0;
    };
    Q.prototype.childPosition = function () {
      return 0;
    };
    Q.prototype.setTeXclass = function (t) {
      return t;
    };
    Q.prototype.texSpacing = function () {
      return "";
    };
    Q.prototype.setInheritedAttributes = function (t, e, Q, r) {};
    Q.prototype.inheritAttributesFrom = function (t) {};
    Q.prototype.verifyTree = function (t) {};
    Q.prototype.mError = function (t, e, Q = false) {
      return null;
    };
    return Q;
  }(abstractNodeClasses.AbstractEmptyNode);
  exports.AbstractMmlEmptyNode = d;
  var D = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.text = "";
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "text";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getText = function () {
      return this.text;
    };
    e.prototype.setText = function (t) {
      this.text = t;
      return this;
    };
    e.prototype.copy = function () {
      return this.factory.create(this.kind).setText(this.getText());
    };
    e.prototype.toString = function () {
      return this.text;
    };
    return e;
  }(d);
  exports.TextNode = D;
  var L = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.xml = null;
      e.adaptor = null;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "XML";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getXML = function () {
      return this.xml;
    };
    e.prototype.setXML = function (t, e = null) {
      this.xml = t;
      this.adaptor = e;
      return this;
    };
    e.prototype.getSerializedXML = function () {
      return this.adaptor.serializeXML(this.xml);
    };
    e.prototype.copy = function () {
      return this.factory.create(this.kind).setXML(this.adaptor.clone(this.xml));
    };
    e.prototype.toString = function () {
      return "XML data";
    };
    return e;
  }(d);
  exports.XMLNode = L;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}