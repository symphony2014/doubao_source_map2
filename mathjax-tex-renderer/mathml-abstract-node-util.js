// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'a' to 'mathmlOperatorNode'
// - Resolved require(903546) to 'mathml-operator-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 352636
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__values || function (t) {
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
  var n = this && this.__read || function (t, e) {
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
  var o = this && this.__spreadArray || function (t, e, Q) {
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
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var mathmlOperatorNode = require("mathml-operator-node") /*id: 903546*/;
  (function (t) {
    var e = new Map([["autoOP", true], ["fnOP", true], ["movesupsub", true], ["subsupOK", true], ["texprimestyle", true], ["useHeight", true], ["variantForm", true], ["withDelims", true], ["mathaccent", true], ["open", true], ["close", true]]);
    function Q(t, Q) {
      var r;
      var n;
      try {
        var o = T(Object.keys(Q));
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          var u = Q[a];
          if (a === "texClass") {
            t.texClass = u;
            t.setProperty(a, u);
          } else if (a === "movablelimits") {
            t.setProperty("movablelimits", u);
            if (t.isKind("mo") || t.isKind("mstyle")) {
              t.attributes.set("movablelimits", u);
            }
          } else if (a !== "inferred") {
            if (e.has(a)) {
              t.setProperty(a, u);
            } else {
              t.attributes.set(a, u);
            }
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    }
    function r(t, e, Q) {
      t.childNodes[e] = Q;
      if (Q) {
        Q.parent = t;
      }
    }
    function u(t, e) {
      return t.isKind(e);
    }
    t.createEntity = function (t) {
      return String.fromCodePoint(parseInt(t, 16));
    };
    t.getChildren = function (t) {
      return t.childNodes;
    };
    t.getText = function (t) {
      return t.getText();
    };
    t.appendChildren = function (t, e) {
      var Q;
      var r;
      try {
        var n = T(e);
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var i = o.value;
          t.appendChild(i);
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (r = n.return)) {
            r.call(n);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
    };
    t.setAttribute = function (t, e, Q) {
      t.attributes.set(e, Q);
    };
    t.setProperty = function (t, e, Q) {
      t.setProperty(e, Q);
    };
    t.setProperties = Q;
    t.getProperty = function (t, e) {
      return t.getProperty(e);
    };
    t.getAttribute = function (t, e) {
      return t.attributes.get(e);
    };
    t.removeProperties = function (t) {
      var e = [];
      var Q = 1;
      for (; Q < arguments.length; Q++) {
        e[Q - 1] = arguments[Q];
      }
      t.removeProperty.apply(t, o([], n(e), false));
    };
    t.getChildAt = function (t, e) {
      return t.childNodes[e];
    };
    t.setChild = r;
    t.copyChildren = function (t, e) {
      var Q = t.childNodes;
      var T = 0;
      for (; T < Q.length; T++) {
        r(e, T, Q[T]);
      }
    };
    t.copyAttributes = function (t, e) {
      e.attributes = t.attributes;
      Q(e, t.getAllProperties());
    };
    t.isType = u;
    t.isEmbellished = function (t) {
      return t.isEmbellished;
    };
    t.getTexClass = function (t) {
      return t.texClass;
    };
    t.getCoreMO = function (t) {
      return t.coreMO();
    };
    t.isNode = function (t) {
      return t instanceof mathmlAbstractNodeClasses.AbstractMmlNode || t instanceof mathmlAbstractNodeClasses.AbstractMmlEmptyNode;
    };
    t.isInferred = function (t) {
      return t.isInferred;
    };
    t.getForm = function (t) {
      if (!u(t, "mo")) {
        return null;
      }
      var e;
      var Q;
      var r = t.getForms();
      try {
        var n = T(r);
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var i = o.value;
          var s = mathmlOperatorNode.MmlMo.OPTABLE[i][t.getText()];
          if (s) {
            return s;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (Q = n.return)) {
            Q.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return null;
    };
  })(r ||= {});
  exports.default = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}