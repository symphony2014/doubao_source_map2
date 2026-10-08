// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 506008
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
  exports.MmlMfenced = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var a = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.texclass = mathmlAbstractNodeClasses.TEXCLASS.INNER;
      e.separators = [];
      e.open = null;
      e.close = null;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mfenced";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setTeXclass = function (t) {
      this.getPrevClass(t);
      if (this.open) {
        t = this.open.setTeXclass(t);
      }
      if (this.childNodes[0]) {
        t = this.childNodes[0].setTeXclass(t);
      }
      var e = 1;
      var Q = this.childNodes.length;
      for (; e < Q; e++) {
        if (this.separators[e - 1]) {
          t = this.separators[e - 1].setTeXclass(t);
        }
        if (this.childNodes[e]) {
          t = this.childNodes[e].setTeXclass(t);
        }
      }
      if (this.close) {
        t = this.close.setTeXclass(t);
      }
      this.updateTeXclass(this.open);
      return t;
    };
    e.prototype.setChildInheritedAttributes = function (e, Q, r, T) {
      var n;
      var i;
      this.addFakeNodes();
      try {
        var a = o([this.open, this.close].concat(this.separators));
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var s = u.value;
          if (s) {
            s.setInheritedAttributes(e, Q, r, T);
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (i = a.return)) {
            i.call(a);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      t.prototype.setChildInheritedAttributes.call(this, e, Q, r, T);
    };
    e.prototype.addFakeNodes = function () {
      var t;
      var e;
      var Q = this.attributes.getList("open", "close", "separators");
      var r = Q.open;
      var T = Q.close;
      var n = Q.separators;
      r = r.replace(/[ \t\n\r]/g, "");
      T = T.replace(/[ \t\n\r]/g, "");
      n = n.replace(/[ \t\n\r]/g, "");
      if (r) {
        this.open = this.fakeNode(r, {
          fence: true,
          form: "prefix"
        }, mathmlAbstractNodeClasses.TEXCLASS.OPEN);
      }
      if (n) {
        while (n.length < this.childNodes.length - 1) {
          n += n.charAt(n.length - 1);
        }
        var a = 0;
        try {
          var u = o(this.childNodes.slice(1));
          var s = u.next();
          for (; !s.done; s = u.next()) {
            if (s.value) {
              this.separators.push(this.fakeNode(n.charAt(a++)));
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (s && !s.done && (e = u.return)) {
              e.call(u);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
      if (T) {
        this.close = this.fakeNode(T, {
          fence: true,
          form: "postfix"
        }, mathmlAbstractNodeClasses.TEXCLASS.CLOSE);
      }
    };
    e.prototype.fakeNode = function (t, e = {}, Q = null) {
      var r = this.factory.create("text").setText(t);
      var T = this.factory.create("mo", e, [r]);
      T.texClass = Q;
      T.parent = this;
      return T;
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults), {
      open: "(",
      close: ")",
      separators: ","
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMfenced = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}