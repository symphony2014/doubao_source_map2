// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 103107
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n;
  var o;
  var i;
  var a;
  var u = this && this.__values || function (t) {
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
  var s = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var c = s(require("mathml-abstract-node-util") /*id: 352636*/);
  (r = a ||= {}).cleanStretchy = function (t) {
    var e;
    var Q;
    var r = t.data;
    try {
      var T = u(r.getList("fixStretchy"));
      var n = T.next();
      for (; !n.done; n = T.next()) {
        var o = n.value;
        if (c.default.getProperty(o, "fixStretchy")) {
          var i = c.default.getForm(o);
          if (i && i[3] && i[3].stretchy) {
            c.default.setAttribute(o, "stretchy", false);
          }
          var a = o.parent;
          if (!c.default.getTexClass(o) && (!i || !i[2])) {
            var s = r.nodeFactory.create("node", "TeXAtom", [o]);
            a.replaceChild(s, o);
            s.inheritAttributesFrom(o);
          }
          c.default.removeProperties(o, "fixStretchy");
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (Q = T.return)) {
          Q.call(T);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  };
  r.cleanAttributes = function (t) {
    t.data.root.walkTree(function (t, e) {
      var Q;
      var r;
      var T = t.attributes;
      if (T) {
        var n = new Set((T.get("mjx-keep-attrs") || "").split(/ /));
        delete T.getAllAttributes()["mjx-keep-attrs"];
        try {
          var o = u(T.getExplicitNames());
          var i = o.next();
          for (; !i.done; i = o.next()) {
            var a = i.value;
            if (!n.has(a) && T.attributes[a] === t.attributes.getInherited(a)) {
              delete T.attributes[a];
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (r = o.return)) {
              r.call(o);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
      }
    }, {});
  };
  r.combineRelations = function (t) {
    var e;
    var Q;
    var r;
    var o;
    var i = [];
    try {
      var a = u(t.data.getList("mo"));
      var s = a.next();
      for (; !s.done; s = a.next()) {
        var p = s.value;
        if (!p.getProperty("relationsCombined") && p.parent && (!p.parent || c.default.isType(p.parent, "mrow")) && c.default.getTexClass(p) === mathmlAbstractNodeClasses.TEXCLASS.REL) {
          var h = p.parent;
          var f = undefined;
          var d = h.childNodes;
          var D = d.indexOf(p) + 1;
          var L = c.default.getProperty(p, "variantForm");
          while (D < d.length && (f = d[D]) && c.default.isType(f, "mo") && c.default.getTexClass(f) === mathmlAbstractNodeClasses.TEXCLASS.REL) {
            if (L === c.default.getProperty(f, "variantForm") && n(p, f)) {
              c.default.appendChildren(p, c.default.getChildren(f));
              T(["stretchy", "rspace"], p, f);
              try {
                r = undefined;
                var m = u(f.getPropertyNames());
                var y = m.next();
                for (; !y.done; y = m.next()) {
                  var H = y.value;
                  p.setProperty(H, f.getProperty(H));
                }
              } catch (t) {
                r = {
                  error: t
                };
              } finally {
                try {
                  if (y && !y.done && (o = m.return)) {
                    o.call(m);
                  }
                } finally {
                  if (r) {
                    throw r.error;
                  }
                }
              }
              d.splice(D, 1);
              i.push(f);
              f.parent = null;
              f.setProperty("relationsCombined", true);
            } else {
              if (p.attributes.getExplicit("rspace") == null) {
                c.default.setAttribute(p, "rspace", "0pt");
              }
              if (f.attributes.getExplicit("lspace") == null) {
                c.default.setAttribute(f, "lspace", "0pt");
              }
              break;
            }
          }
          p.attributes.setInherited("form", p.getForms()[0]);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (s && !s.done && (Q = a.return)) {
          Q.call(a);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    t.data.removeFromList("mo", i);
  };
  T = function (t, e, Q) {
    var r = e.attributes;
    var T = Q.attributes;
    t.forEach(function (t) {
      var e = T.getExplicit(t);
      if (e != null) {
        r.set(t, e);
      }
    });
  };
  n = function (t, e) {
    var Q;
    var r;
    function T(t, e) {
      return t.getExplicitNames().filter(function (Q) {
        return Q !== e && (Q !== "stretchy" || t.getExplicit("stretchy"));
      });
    }
    var n = t.attributes;
    var o = e.attributes;
    var i = T(n, "lspace");
    var a = T(o, "rspace");
    if (i.length !== a.length) {
      return false;
    }
    try {
      var s = u(i);
      var l = s.next();
      for (; !l.done; l = s.next()) {
        var c = l.value;
        if (n.getExplicit(c) !== o.getExplicit(c)) {
          return false;
        }
      }
    } catch (t) {
      Q = {
        error: t
      };
    } finally {
      try {
        if (l && !l.done && (r = s.return)) {
          r.call(s);
        }
      } finally {
        if (Q) {
          throw Q.error;
        }
      }
    }
    return true;
  };
  o = function (t, e, Q) {
    var r;
    var T;
    var n = [];
    try {
      var o = u(t.getList("m" + e + Q));
      var i = o.next();
      for (; !i.done; i = o.next()) {
        var a = i.value;
        var s = a.childNodes;
        if (!s[a[e]] || !s[a[Q]]) {
          var l = a.parent;
          var p = s[a[e]] ? t.nodeFactory.create("node", "m" + e, [s[a.base], s[a[e]]]) : t.nodeFactory.create("node", "m" + Q, [s[a.base], s[a[Q]]]);
          c.default.copyAttributes(a, p);
          if (l) {
            l.replaceChild(p, a);
          } else {
            t.root = p;
          }
          n.push(a);
        }
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
    t.removeFromList("m" + e + Q, n);
  };
  r.cleanSubSup = function (t) {
    var e = t.data;
    if (!e.error) {
      o(e, "sub", "sup");
      o(e, "under", "over");
    }
  };
  i = function (t, e, Q) {
    var r;
    var T;
    var n = [];
    try {
      var o = u(t.getList(e));
      var i = o.next();
      for (; !i.done; i = o.next()) {
        var a = i.value;
        if (!a.attributes.get("displaystyle")) {
          var s = a.childNodes[a.base];
          var l = s.coreMO();
          if (s.getProperty("movablelimits") && !l.attributes.getExplicit("movablelimits")) {
            var p = t.nodeFactory.create("node", Q, a.childNodes);
            c.default.copyAttributes(a, p);
            if (a.parent) {
              a.parent.replaceChild(p, a);
            } else {
              t.root = p;
            }
            n.push(a);
          }
        }
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
    t.removeFromList(e, n);
  };
  r.moveLimits = function (t) {
    var e = t.data;
    i(e, "munderover", "msubsup");
    i(e, "munder", "msub");
    i(e, "mover", "msup");
  };
  r.setInherited = function (t) {
    t.data.root.setInheritedAttributes({}, t.math.display, 0, false);
  };
  exports.default = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}