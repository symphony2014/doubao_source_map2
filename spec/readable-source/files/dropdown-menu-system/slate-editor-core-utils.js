// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ML' to 'editorHelpers'
// - Renamed export 'OX' to 'operationUtils'
// - Renamed export 'NB' to 'nodeUtils'
// - Renamed export 'y$' to 'pathUtils'
// - Renamed export 'E9' to 'pointUtils'
// - Renamed export 'e6' to 'rangeUtils'
// - Renamed export 'YR' to 'editorTransforms'
// - Renamed export 'Jh' to 'createEditor'
// - Renamed export 'W_' to 'elementUtils'
// - Renamed export 'o4' to 'debugUtils'
// - Renamed export 'xv' to 'textUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 927219
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function u(e) {
    var t;
    var r;
    return n(e) !== false && ((t = e.constructor) === undefined || n(r = t.prototype) !== false && r.hasOwnProperty("isPrototypeOf") !== false);
  }
  var o;
  var a;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var s = {
    transform(e, t) {
      var {
        current: r,
        affinity: n
      } = e;
      if (r != null) {
        var u = C.transform(r, t, {
          affinity: n
        });
        e.current = u;
        if (u == null) {
          e.unref();
        }
      }
    }
  };
  var l = {
    transform(e, t) {
      var {
        current: r,
        affinity: n
      } = e;
      if (r != null) {
        var u = Z.transform(r, t, {
          affinity: n
        });
        e.current = u;
        if (u == null) {
          e.unref();
        }
      }
    }
  };
  var c = {
    transform(e, t) {
      var {
        current: r,
        affinity: n
      } = e;
      if (r != null) {
        var u = O.transform(r, t, {
          affinity: n
        });
        e.current = u;
        if (u == null) {
          e.unref();
        }
      }
    }
  };
  var d = new WeakMap();
  var f = new WeakMap();
  var p = new WeakMap();
  var h = new WeakMap();
  var v = new WeakMap();
  var D = new WeakMap();
  var g = new WeakMap();
  var C = {
    ancestors(e, t = {}) {
      var {
        reverse: r = false
      } = t;
      var n = C.levels(e, t);
      if (r) {
        return n.slice(1);
      } else {
        return n.slice(0, -1);
      }
    },
    common(e, t) {
      var r = [];
      var n = 0;
      for (; n < e.length && n < t.length; n++) {
        var u = e[n];
        if (u !== t[n]) {
          break;
        }
        r.push(u);
      }
      return r;
    },
    compare(e, t) {
      var r = Math.min(e.length, t.length);
      var n = 0;
      for (; n < r; n++) {
        if (e[n] < t[n]) {
          return -1;
        }
        if (e[n] > t[n]) {
          return 1;
        }
      }
      return 0;
    },
    endsAfter(e, t) {
      var r = e.length - 1;
      var n = e.slice(0, r);
      var u = t.slice(0, r);
      var o = e[r];
      var a = t[r];
      return C.equals(n, u) && o > a;
    },
    endsAt(e, t) {
      var r = e.length;
      var n = e.slice(0, r);
      var u = t.slice(0, r);
      return C.equals(n, u);
    },
    endsBefore(e, t) {
      var r = e.length - 1;
      var n = e.slice(0, r);
      var u = t.slice(0, r);
      var o = e[r];
      var a = t[r];
      return C.equals(n, u) && o < a;
    },
    equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
    hasPrevious: e => e[e.length - 1] > 0,
    isAfter: (e, t) => C.compare(e, t) === 1,
    isAncestor: (e, t) => e.length < t.length && C.compare(e, t) === 0,
    isBefore: (e, t) => C.compare(e, t) === -1,
    isChild: (e, t) => e.length === t.length + 1 && C.compare(e, t) === 0,
    isCommon: (e, t) => e.length <= t.length && C.compare(e, t) === 0,
    isDescendant: (e, t) => e.length > t.length && C.compare(e, t) === 0,
    isParent: (e, t) => e.length + 1 === t.length && C.compare(e, t) === 0,
    isPath: e => Array.isArray(e) && (e.length === 0 || typeof e[0] == "number"),
    isSibling(e, t) {
      if (e.length !== t.length) {
        return false;
      }
      var r = e.slice(0, -1);
      var n = t.slice(0, -1);
      return e[e.length - 1] !== t[t.length - 1] && C.equals(r, n);
    },
    levels(e, t = {}) {
      var {
        reverse: r = false
      } = t;
      var n = [];
      var u = 0;
      for (; u <= e.length; u++) {
        n.push(e.slice(0, u));
      }
      if (r) {
        n.reverse();
      }
      return n;
    },
    next(e) {
      if (e.length === 0) {
        throw Error(`Cannot get the next path of a root path [${e}], because it has no next index.`);
      }
      var t = e[e.length - 1];
      return e.slice(0, -1).concat(t + 1);
    },
    operationCanTransformPath(e) {
      switch (e.type) {
        case "insert_node":
        case "remove_node":
        case "merge_node":
        case "split_node":
        case "move_node":
          return true;
        default:
          return false;
      }
    },
    parent(e) {
      if (e.length === 0) {
        throw Error(`Cannot get the parent path of the root path [${e}].`);
      }
      return e.slice(0, -1);
    },
    previous(e) {
      if (e.length === 0) {
        throw Error(`Cannot get the previous path of a root path [${e}], because it has no previous index.`);
      }
      var t = e[e.length - 1];
      if (t <= 0) {
        throw Error(`Cannot get the previous path of a first child path [${e}] because it would result in a negative index.`);
      }
      return e.slice(0, -1).concat(t - 1);
    },
    relative(e, t) {
      if (!C.isAncestor(t, e) && !C.equals(e, t)) {
        throw Error(`Cannot get the relative path of [${e}] inside ancestor [${t}], because it is not above or equal to the path.`);
      }
      return e.slice(t.length);
    },
    transform(e, t, r = {}) {
      if (!e) {
        return null;
      }
      var n = [...e];
      var {
        affinity: u = "forward"
      } = r;
      if (e.length === 0) {
        return n;
      }
      switch (t.type) {
        case "insert_node":
          var {
            path: o
          } = t;
          if (C.equals(o, n) || C.endsBefore(o, n) || C.isAncestor(o, n)) {
            n[o.length - 1] += 1;
          }
          break;
        case "remove_node":
          var {
            path: a
          } = t;
          if (C.equals(a, n) || C.isAncestor(a, n)) {
            return null;
          }
          if (C.endsBefore(a, n)) {
            n[a.length - 1] -= 1;
          }
          break;
        case "merge_node":
          var {
            path: i,
            position: s
          } = t;
          if (C.equals(i, n) || C.endsBefore(i, n)) {
            n[i.length - 1] -= 1;
          } else if (C.isAncestor(i, n)) {
            n[i.length - 1] -= 1;
            n[i.length] += s;
          }
          break;
        case "split_node":
          var {
            path: l,
            position: c
          } = t;
          if (C.equals(l, n)) {
            if (u === "forward") {
              n[n.length - 1] += 1;
            } else if (u !== "backward") {
              return null;
            }
          } else if (C.endsBefore(l, n)) {
            n[l.length - 1] += 1;
          } else if (C.isAncestor(l, n) && e[l.length] >= c) {
            n[l.length - 1] += 1;
            n[l.length] -= c;
          }
          break;
        case "move_node":
          var {
            path: d,
            newPath: f
          } = t;
          if (C.equals(d, f)) {
            break;
          }
          if (C.isAncestor(d, n) || C.equals(d, n)) {
            var p = f.slice();
            if (C.endsBefore(d, f) && d.length < f.length) {
              p[d.length - 1] -= 1;
            }
            return p.concat(n.slice(d.length));
          }
          if (C.isSibling(d, f) && (C.isAncestor(f, n) || C.equals(f, n))) {
            if (C.endsBefore(d, n)) {
              n[d.length - 1] -= 1;
            } else {
              n[d.length - 1] += 1;
            }
          } else if (C.endsBefore(f, n) || C.equals(f, n) || C.isAncestor(f, n)) {
            if (C.endsBefore(d, n)) {
              n[d.length - 1] -= 1;
            }
            n[f.length - 1] += 1;
          } else if (C.endsBefore(d, n)) {
            if (C.equals(f, n)) {
              n[f.length - 1] += 1;
            }
            n[d.length - 1] -= 1;
          }
      }
      return n;
    }
  };
  function m(e) {
    return (m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function B(e, t, r) {
    var n;
    n = function (e, t) {
      if (m(e) !== "object" || e === null) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (m(n) !== "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string");
    if ((t = m(n) === "symbol" ? n : String(n)) in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  function E(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        E(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        E(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var b = (e, t, r) => {
    switch (r.type) {
      case "insert_node":
        var {
          path: n,
          node: u
        } = r;
        var o = j.parent(e, n);
        var a = n[n.length - 1];
        if (a > o.children.length) {
          throw Error(`Cannot apply an "insert_node" operation at path [${n}] because the destination is past the end of the node.`);
        }
        o.children.splice(a, 0, u);
        if (t) {
          for (var [i, s] of O.points(t)) {
            t[s] = Z.transform(i, r);
          }
        }
        break;
      case "insert_text":
        var {
          path: l,
          offset: c,
          text: d
        } = r;
        if (d.length === 0) {
          break;
        }
        var f = j.leaf(e, l);
        var p = f.text.slice(0, c);
        var h = f.text.slice(c);
        f.text = p + d + h;
        if (t) {
          for (var [v, D] of O.points(t)) {
            t[D] = Z.transform(v, r);
          }
        }
        break;
      case "merge_node":
        var {
          path: g
        } = r;
        var m = j.get(e, g);
        var B = C.previous(g);
        var E = j.get(e, B);
        var b = j.parent(e, g);
        var A = g[g.length - 1];
        if (G.isText(m) && G.isText(E)) {
          E.text += m.text;
        } else if (G.isText(m) || G.isText(E)) {
          throw Error(`Cannot apply a "merge_node" operation at path [${g}] to nodes of different interfaces: ${U.stringify(m)} ${U.stringify(E)}`);
        } else {
          E.children.push(...m.children);
        }
        b.children.splice(A, 1);
        if (t) {
          for (var [F, w] of O.points(t)) {
            t[w] = Z.transform(F, r);
          }
        }
        break;
      case "move_node":
        var {
          path: x,
          newPath: k
        } = r;
        if (C.isAncestor(x, k)) {
          throw Error(`Cannot move a path [${x}] to new path [${k}] because the destination is inside itself.`);
        }
        var M = j.get(e, x);
        var P = j.parent(e, x);
        var S = x[x.length - 1];
        P.children.splice(S, 1);
        var R = C.transform(x, r);
        var T = j.get(e, C.parent(R));
        var N = R[R.length - 1];
        T.children.splice(N, 0, M);
        if (t) {
          for (var [L, _] of O.points(t)) {
            t[_] = Z.transform(L, r);
          }
        }
        break;
      case "remove_node":
        var {
          path: I
        } = r;
        var W = I[I.length - 1];
        j.parent(e, I).children.splice(W, 1);
        if (t) {
          for (var [z, V] of O.points(t)) {
            var q = Z.transform(z, r);
            if (t != null && q != null) {
              t[V] = q;
            } else {
              var K = undefined;
              var $ = undefined;
              for (var [Y, X] of j.texts(e)) {
                if (C.compare(X, I) === -1) {
                  K = [Y, X];
                } else {
                  $ = [Y, X];
                  break;
                }
              }
              var H = false;
              if (K && $) {
                H = C.equals($[1], I) ? !C.hasPrevious($[1]) : C.common(K[1], I).length < C.common($[1], I).length;
              }
              if (K && !H) {
                z.path = K[1];
                z.offset = K[0].text.length;
              } else if ($) {
                z.path = $[1];
                z.offset = 0;
              } else {
                t = null;
              }
            }
          }
        }
        break;
      case "remove_text":
        var {
          path: J,
          offset: Q,
          text: ee
        } = r;
        if (ee.length === 0) {
          break;
        }
        var et = j.leaf(e, J);
        var er = et.text.slice(0, Q);
        var en = et.text.slice(Q + ee.length);
        et.text = er + en;
        if (t) {
          for (var [eu, eo] of O.points(t)) {
            t[eo] = Z.transform(eu, r);
          }
        }
        break;
      case "set_node":
        var {
          path: ea,
          properties: ei,
          newProperties: es
        } = r;
        if (ea.length === 0) {
          throw Error("Cannot set properties on the root node!");
        }
        var el = j.get(e, ea);
        for (var ec in es) {
          if (ec === "children" || ec === "text") {
            throw Error(`Cannot set the "${ec}" property of nodes!`);
          }
          var ed = es[ec];
          if (ed == null) {
            delete el[ec];
          } else {
            el[ec] = ed;
          }
        }
        for (var ef in ei) {
          if (!es.hasOwnProperty(ef)) {
            delete el[ef];
          }
        }
        break;
      case "set_selection":
        var {
          newProperties: ep
        } = r;
        if (ep == null) {
          t = ep;
        } else {
          if (t == null) {
            if (!O.isRange(ep)) {
              throw Error(`Cannot apply an incomplete "set_selection" operation properties ${U.stringify(ep)} when there is no current selection.`);
            }
            t = y({}, ep);
          }
          for (var eh in ep) {
            var ev = ep[eh];
            if (ev == null) {
              if (eh === "anchor" || eh === "focus") {
                throw Error(`Cannot remove the "${eh}" selection property`);
              }
              delete t[eh];
            } else {
              t[eh] = ev;
            }
          }
        }
        break;
      case "split_node":
        var eD;
        var {
          path: eg,
          position: eC,
          properties: em
        } = r;
        if (eg.length === 0) {
          throw Error(`Cannot apply a "split_node" operation at path [${eg}] because the root node cannot be split.`);
        }
        var eB = j.get(e, eg);
        var eE = j.parent(e, eg);
        var ey = eg[eg.length - 1];
        if (G.isText(eB)) {
          var eb = eB.text.slice(0, eC);
          var eA = eB.text.slice(eC);
          eB.text = eb;
          eD = y(y({}, em), {}, {
            text: eA
          });
        } else {
          var eF = eB.children.slice(0, eC);
          var ew = eB.children.slice(eC);
          eB.children = eF;
          eD = y(y({}, em), {}, {
            children: ew
          });
        }
        eE.children.splice(ey + 1, 0, eD);
        if (t) {
          for (var [ex, eO] of O.points(t)) {
            t[eO] = Z.transform(ex, r);
          }
        }
    }
    return t;
  };
  var A = (e, t) => {
    for (var r in e) {
      var n = e[r];
      var o = t[r];
      if (u(n) && u(o)) {
        if (!A(n, o)) {
          return false;
        }
      } else if (Array.isArray(n) && Array.isArray(o)) {
        if (n.length !== o.length) {
          return false;
        }
        for (var a = 0; a < n.length; a++) {
          if (n[a] !== o[a]) {
            return false;
          }
        }
      } else if (n !== o) {
        return false;
      }
    }
    for (var i in t) {
      if (e[i] === undefined && t[i] !== undefined) {
        return false;
      }
    }
    return true;
  };
  function F(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var u = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var u = {};
      var o = Object.keys(e);
      for (n = 0; n < o.length; n++) {
        r = o[n];
        if (!(t.indexOf(r) >= 0)) {
          u[r] = e[r];
        }
      }
      return u;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) {
        r = o[n];
        if (!(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r)) {
          u[r] = e[r];
        }
      }
    }
    return u;
  }
  var w = ["anchor", "focus"];
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var O = {
    edges(e, t = {}) {
      var {
        reverse: r = false
      } = t;
      var {
        anchor: n,
        focus: u
      } = e;
      if (O.isBackward(e) === r) {
        return [n, u];
      } else {
        return [u, n];
      }
    },
    end(e) {
      var [, t] = O.edges(e);
      return t;
    },
    equals: (e, t) => Z.equals(e.anchor, t.anchor) && Z.equals(e.focus, t.focus),
    includes(e, t) {
      if (O.isRange(t)) {
        if (O.includes(e, t.anchor) || O.includes(e, t.focus)) {
          return true;
        }
        var [r, n] = O.edges(e);
        var [u, o] = O.edges(t);
        return Z.isBefore(r, u) && Z.isAfter(n, o);
      }
      var [a, i] = O.edges(e);
      var s = false;
      var l = false;
      if (Z.isPoint(t)) {
        s = Z.compare(t, a) >= 0;
        l = Z.compare(t, i) <= 0;
      } else {
        s = C.compare(t, a.path) >= 0;
        l = C.compare(t, i.path) <= 0;
      }
      return s && l;
    },
    intersection(e, t) {
      var r = F(e, w);
      var [n, u] = O.edges(e);
      var [o, a] = O.edges(t);
      var i = Z.isBefore(n, o) ? o : n;
      var s = Z.isBefore(u, a) ? u : a;
      if (Z.isBefore(s, i)) {
        return null;
      } else {
        return function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] ?? {};
            if (t % 2) {
              x(Object(r), true).forEach(function (t) {
                B(e, t, r[t]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
            } else {
              x(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }
          }
          return e;
        }({
          anchor: i,
          focus: s
        }, r);
      }
    },
    isBackward(e) {
      var {
        anchor: t,
        focus: r
      } = e;
      return Z.isAfter(t, r);
    },
    isCollapsed(e) {
      var {
        anchor: t,
        focus: r
      } = e;
      return Z.equals(t, r);
    },
    isExpanded: e => !O.isCollapsed(e),
    isForward: e => !O.isBackward(e),
    isRange: e => u(e) && Z.isPoint(e.anchor) && Z.isPoint(e.focus),
    *points(e) {
      yield [e.anchor, "anchor"];
      yield [e.focus, "focus"];
    },
    start(e) {
      var [t] = O.edges(e);
      return t;
    },
    transform(e, t, r = {}) {
      return immerCoreImplementation.produce(e, e => {
        if (e === null) {
          return null;
        }
        var n;
        var u;
        var {
          affinity: o = "inward"
        } = r;
        if (o === "inward") {
          var a = O.isCollapsed(e);
          if (O.isForward(e)) {
            n = "forward";
            u = a ? n : "backward";
          } else {
            n = "backward";
            u = a ? n : "forward";
          }
        } else if (o === "outward") {
          if (O.isForward(e)) {
            n = "backward";
            u = "forward";
          } else {
            n = "forward";
            u = "backward";
          }
        } else {
          n = o;
          u = o;
        }
        var i = Z.transform(e.anchor, t, {
          affinity: n
        });
        var s = Z.transform(e.focus, t, {
          affinity: u
        });
        if (!i || !s) {
          return null;
        }
        e.anchor = i;
        e.focus = s;
      });
    }
  };
  var k = e => u(e) && j.isNodeList(e.children) && !W.isEditor(e);
  var M = {
    isAncestor: e => u(e) && j.isNodeList(e.children),
    isElement: k,
    isElementList: e => Array.isArray(e) && e.every(e => M.isElement(e)),
    isElementProps: e => e.children !== undefined,
    isElementType: function (e, t, r = "type") {
      return k(e) && e[r] === t;
    },
    matches(e, t) {
      for (var r in t) {
        if (r !== "children" && e[r] !== t[r]) {
          return false;
        }
      }
      return true;
    }
  };
  var P = ["children"];
  var S = ["text"];
  var R = new WeakMap();
  var j = {
    ancestor(e, t) {
      var r = j.get(e, t);
      if (G.isText(r)) {
        throw Error(`Cannot get the ancestor node at path [${t}] because it refers to a text node instead: ${U.stringify(r)}`);
      }
      return r;
    },
    ancestors(e, t, r = {}) {
      return function* () {
        for (var n of C.ancestors(t, r)) {
          var u = [j.ancestor(e, n), n];
          yield u;
        }
      }();
    },
    child(e, t) {
      if (G.isText(e)) {
        throw Error(`Cannot get the child of a text node: ${U.stringify(e)}`);
      }
      var r = e.children[t];
      if (r == null) {
        throw Error(`Cannot get child at index \`${t}\` in node: ${U.stringify(e)}`);
      }
      return r;
    },
    children(e, t, r = {}) {
      return function* () {
        var {
          reverse: n = false
        } = r;
        var u = j.ancestor(e, t);
        var {
          children: o
        } = u;
        var a = n ? o.length - 1 : 0;
        while (n ? a >= 0 : a < o.length) {
          var i = j.child(u, a);
          var s = t.concat(a);
          yield [i, s];
          a = n ? a - 1 : a + 1;
        }
      }();
    },
    common(e, t, r) {
      var n = C.common(t, r);
      return [j.get(e, n), n];
    },
    descendant(e, t) {
      var r = j.get(e, t);
      if (W.isEditor(r)) {
        throw Error(`Cannot get the descendant node at path [${t}] because it refers to the root editor node instead: ${U.stringify(r)}`);
      }
      return r;
    },
    descendants(e, t = {}) {
      return function* () {
        for (var [r, n] of j.nodes(e, t)) {
          if (n.length !== 0) {
            yield [r, n];
          }
        }
      }();
    },
    elements(e, t = {}) {
      return function* () {
        for (var [r, n] of j.nodes(e, t)) {
          if (M.isElement(r)) {
            yield [r, n];
          }
        }
      }();
    },
    extractProps(e) {
      if (M.isAncestor(e)) {
        var t = F(e, P);
        return t;
      }
      var t = F(e, S);
      return t;
    },
    first(e, t) {
      var r = t.slice();
      var n = j.get(e, r);
      while (n && !G.isText(n) && n.children.length !== 0) {
        n = n.children[0];
        r.push(0);
      }
      return [n, r];
    },
    fragment(e, t) {
      if (G.isText(e)) {
        throw Error(`Cannot get a fragment starting from a root text node: ${U.stringify(e)}`);
      }
      return immerCoreImplementation.produce({
        children: e.children
      }, e => {
        var [r, n] = O.edges(t);
        for (var [, u] of j.nodes(e, {
          reverse: true,
          pass: e => {
            var [, r] = e;
            return !O.includes(t, r);
          }
        })) {
          if (!O.includes(t, u)) {
            var o = j.parent(e, u);
            var a = u[u.length - 1];
            o.children.splice(a, 1);
          }
          if (C.equals(u, n.path)) {
            var i = j.leaf(e, u);
            i.text = i.text.slice(0, n.offset);
          }
          if (C.equals(u, r.path)) {
            var s = j.leaf(e, u);
            s.text = s.text.slice(r.offset);
          }
        }
        if (W.isEditor(e)) {
          e.selection = null;
        }
      }).children;
    },
    get(e, t) {
      var r = e;
      var n = 0;
      for (; n < t.length; n++) {
        var u = t[n];
        if (G.isText(r) || !r.children[u]) {
          throw Error(`Cannot find a descendant at path [${t}] in node: ${U.stringify(e)}`);
        }
        r = r.children[u];
      }
      return r;
    },
    has(e, t) {
      var r = e;
      var n = 0;
      for (; n < t.length; n++) {
        var u = t[n];
        if (G.isText(r) || !r.children[u]) {
          return false;
        }
        r = r.children[u];
      }
      return true;
    },
    isNode: e => G.isText(e) || M.isElement(e) || W.isEditor(e),
    isNodeList(e) {
      if (!Array.isArray(e)) {
        return false;
      }
      var t = R.get(e);
      if (t !== undefined) {
        return t;
      }
      var r = e.every(e => j.isNode(e));
      R.set(e, r);
      return r;
    },
    last(e, t) {
      var r = t.slice();
      var n = j.get(e, r);
      while (n && !G.isText(n) && n.children.length !== 0) {
        var u = n.children.length - 1;
        n = n.children[u];
        r.push(u);
      }
      return [n, r];
    },
    leaf(e, t) {
      var r = j.get(e, t);
      if (!G.isText(r)) {
        throw Error(`Cannot get the leaf node at path [${t}] because it refers to a non-leaf node: ${U.stringify(r)}`);
      }
      return r;
    },
    levels(e, t, r = {}) {
      return function* () {
        for (var n of C.levels(t, r)) {
          var u = j.get(e, n);
          yield [u, n];
        }
      }();
    },
    matches: (e, t) => M.isElement(e) && M.isElementProps(t) && M.matches(e, t) || G.isText(e) && G.isTextProps(t) && G.matches(e, t),
    nodes(e, t = {}) {
      return function* () {
        var {
          pass: r,
          reverse: n = false
        } = t;
        var {
          from: u = [],
          to: o
        } = t;
        var a = new Set();
        var i = [];
        var s = e;
        while (!o || !(n ? C.isBefore(i, o) : C.isAfter(i, o))) {
          if (!a.has(s)) {
            yield [s, i];
          }
          if (!a.has(s) && !G.isText(s) && s.children.length !== 0 && (r == null || r([s, i]) === false)) {
            a.add(s);
            var l = n ? s.children.length - 1 : 0;
            if (C.isAncestor(i, u)) {
              l = u[i.length];
            }
            i = i.concat(l);
            s = j.get(e, i);
            continue;
          }
          if (i.length === 0) {
            break;
          }
          if (!n) {
            var c = C.next(i);
            if (j.has(e, c)) {
              i = c;
              s = j.get(e, i);
              continue;
            }
          }
          if (n && i[i.length - 1] !== 0) {
            i = C.previous(i);
            s = j.get(e, i);
            continue;
          }
          i = C.parent(i);
          s = j.get(e, i);
          a.add(s);
        }
      }();
    },
    parent(e, t) {
      var r = C.parent(t);
      var n = j.get(e, r);
      if (G.isText(n)) {
        throw Error(`Cannot get the parent of path [${t}] because it does not exist in the root.`);
      }
      return n;
    },
    string: e => G.isText(e) ? e.text : e.children.map(j.string).join(""),
    texts(e, t = {}) {
      return function* () {
        for (var [r, n] of j.nodes(e, t)) {
          if (G.isText(r)) {
            yield [r, n];
          }
        }
      }();
    }
  };
  function T(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        T(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        T(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var L = {
    isNodeOperation: e => L.isOperation(e) && e.type.endsWith("_node"),
    isOperation(e) {
      if (!u(e)) {
        return false;
      }
      switch (e.type) {
        case "insert_node":
        case "remove_node":
          return C.isPath(e.path) && j.isNode(e.node);
        case "insert_text":
        case "remove_text":
          return typeof e.offset == "number" && typeof e.text == "string" && C.isPath(e.path);
        case "merge_node":
          return typeof e.position == "number" && C.isPath(e.path) && u(e.properties);
        case "move_node":
          return C.isPath(e.path) && C.isPath(e.newPath);
        case "set_node":
          return C.isPath(e.path) && u(e.properties) && u(e.newProperties);
        case "set_selection":
          return e.properties === null && O.isRange(e.newProperties) || e.newProperties === null && O.isRange(e.properties) || u(e.properties) && u(e.newProperties);
        case "split_node":
          return C.isPath(e.path) && typeof e.position == "number" && u(e.properties);
        default:
          return false;
      }
    },
    isOperationList: e => Array.isArray(e) && e.every(e => L.isOperation(e)),
    isSelectionOperation: e => L.isOperation(e) && e.type.endsWith("_selection"),
    isTextOperation: e => L.isOperation(e) && e.type.endsWith("_text"),
    inverse(e) {
      switch (e.type) {
        case "insert_node":
          return N(N({}, e), {}, {
            type: "remove_node"
          });
        case "insert_text":
          return N(N({}, e), {}, {
            type: "remove_text"
          });
        case "merge_node":
          return N(N({}, e), {}, {
            type: "split_node",
            path: C.previous(e.path)
          });
        case "move_node":
          var {
            newPath: t,
            path: r
          } = e;
          if (C.equals(t, r)) {
            return e;
          }
          if (C.isSibling(r, t)) {
            return N(N({}, e), {}, {
              path: t,
              newPath: r
            });
          }
          var n = C.transform(r, e);
          var u = C.transform(C.next(r), e);
          return N(N({}, e), {}, {
            path: n,
            newPath: u
          });
        case "remove_node":
          return N(N({}, e), {}, {
            type: "insert_node"
          });
        case "remove_text":
          return N(N({}, e), {}, {
            type: "insert_text"
          });
        case "set_node":
          var {
            properties: o,
            newProperties: a
          } = e;
          return N(N({}, e), {}, {
            properties: a,
            newProperties: o
          });
        case "set_selection":
          var {
            properties: i,
            newProperties: s
          } = e;
          if (i == null) {
            return N(N({}, e), {}, {
              properties: s,
              newProperties: null
            });
          }
          if (s == null) {
            return N(N({}, e), {}, {
              properties: null,
              newProperties: i
            });
          }
          return N(N({}, e), {}, {
            properties: s,
            newProperties: i
          });
        case "split_node":
          return N(N({}, e), {}, {
            type: "merge_node",
            path: C.next(e.path)
          });
      }
    }
  };
  var _ = new WeakMap();
  var I = e => {
    var t = _.get(e);
    if (t !== undefined) {
      return t;
    }
    if (!u(e)) {
      return false;
    }
    var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || u(e.marks)) && (e.selection === null || O.isRange(e.selection)) && j.isNodeList(e.children) && L.isOperationList(e.operations);
    _.set(e, r);
    return r;
  };
  var W = {
    above: (e, t) => e.above(t),
    addMark(e, t, r) {
      e.addMark(t, r);
    },
    after: (e, t, r) => e.after(t, r),
    before: (e, t, r) => e.before(t, r),
    deleteBackward(e, t = {}) {
      var {
        unit: r = "character"
      } = t;
      e.deleteBackward(r);
    },
    deleteForward(e, t = {}) {
      var {
        unit: r = "character"
      } = t;
      e.deleteForward(r);
    },
    deleteFragment(e, t) {
      e.deleteFragment(t);
    },
    edges: (e, t) => e.edges(t),
    elementReadOnly(e, t = {}) {
      return e.elementReadOnly(t);
    },
    end: (e, t) => e.end(t),
    first: (e, t) => e.first(t),
    fragment: (e, t) => e.fragment(t),
    hasBlocks: (e, t) => e.hasBlocks(t),
    hasInlines: (e, t) => e.hasInlines(t),
    hasPath: (e, t) => e.hasPath(t),
    hasTexts: (e, t) => e.hasTexts(t),
    insertBreak(e) {
      e.insertBreak();
    },
    insertFragment(e, t, r) {
      e.insertFragment(t, r);
    },
    insertNode(e, t) {
      e.insertNode(t);
    },
    insertSoftBreak(e) {
      e.insertSoftBreak();
    },
    insertText(e, t) {
      e.insertText(t);
    },
    isBlock: (e, t) => e.isBlock(t),
    isEdge: (e, t, r) => e.isEdge(t, r),
    isEditor: e => I(e),
    isElementReadOnly: (e, t) => e.isElementReadOnly(t),
    isEmpty: (e, t) => e.isEmpty(t),
    isEnd: (e, t, r) => e.isEnd(t, r),
    isInline: (e, t) => e.isInline(t),
    isNormalizing: e => e.isNormalizing(),
    isSelectable: (e, t) => e.isSelectable(t),
    isStart: (e, t, r) => e.isStart(t, r),
    isVoid: (e, t) => e.isVoid(t),
    last: (e, t) => e.last(t),
    leaf: (e, t, r) => e.leaf(t, r),
    levels: (e, t) => e.levels(t),
    marks: e => e.getMarks(),
    next: (e, t) => e.next(t),
    node: (e, t, r) => e.node(t, r),
    nodes: (e, t) => e.nodes(t),
    normalize(e, t) {
      e.normalize(t);
    },
    parent: (e, t, r) => e.parent(t, r),
    path: (e, t, r) => e.path(t, r),
    pathRef: (e, t, r) => e.pathRef(t, r),
    pathRefs: e => e.pathRefs(),
    point: (e, t, r) => e.point(t, r),
    pointRef: (e, t, r) => e.pointRef(t, r),
    pointRefs: e => e.pointRefs(),
    positions: (e, t) => e.positions(t),
    previous: (e, t) => e.previous(t),
    range: (e, t, r) => e.range(t, r),
    rangeRef: (e, t, r) => e.rangeRef(t, r),
    rangeRefs: e => e.rangeRefs(),
    removeMark(e, t) {
      e.removeMark(t);
    },
    setNormalizing(e, t) {
      e.setNormalizing(t);
    },
    start: (e, t) => e.start(t),
    string: (e, t, r) => e.string(t, r),
    unhangRange: (e, t, r) => e.unhangRange(t, r),
    void: (e, t) => e.void(t),
    withoutNormalizing(e, t) {
      e.withoutNormalizing(t);
    }
  };
  var z = e => Array.isArray(e) && e.length === 2 && e.every(C.isPath);
  function V(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        V(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        V(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var Z = {
    compare(e, t) {
      var r = C.compare(e.path, t.path);
      if (r === 0) {
        if (e.offset < t.offset) {
          return -1;
        } else {
          return +(e.offset > t.offset);
        }
      } else {
        return r;
      }
    },
    isAfter: (e, t) => Z.compare(e, t) === 1,
    isBefore: (e, t) => Z.compare(e, t) === -1,
    equals: (e, t) => e.offset === t.offset && C.equals(e.path, t.path),
    isPoint: e => u(e) && typeof e.offset == "number" && C.isPath(e.path),
    transform(e, t, r = {}) {
      return immerCoreImplementation.produce(e, e => {
        if (e === null) {
          return null;
        }
        var {
          affinity: n = "forward"
        } = r;
        var {
          path: u,
          offset: o
        } = e;
        switch (t.type) {
          case "insert_node":
          case "move_node":
            e.path = C.transform(u, t, r);
            break;
          case "insert_text":
            if (C.equals(t.path, u) && (t.offset < o || t.offset === o && n === "forward")) {
              e.offset += t.text.length;
            }
            break;
          case "merge_node":
            if (C.equals(t.path, u)) {
              e.offset += t.position;
            }
            e.path = C.transform(u, t, r);
            break;
          case "remove_text":
            if (C.equals(t.path, u) && t.offset <= o) {
              e.offset -= Math.min(o - t.offset, t.text.length);
            }
            break;
          case "remove_node":
            if (C.equals(t.path, u) || C.isAncestor(t.path, u)) {
              return null;
            }
            e.path = C.transform(u, t, r);
            break;
          case "split_node":
            if (C.equals(t.path, u)) {
              if (t.position === o && n == null) {
                return null;
              }
              if (t.position < o || t.position === o && n === "forward") {
                e.offset -= t.position;
                e.path = C.transform(u, t, q(q({}, r), {}, {
                  affinity: "forward"
                }));
              }
            } else {
              e.path = C.transform(u, t, r);
            }
        }
      });
    }
  };
  var K = undefined;
  var U = {
    setScrubber(e) {
      K = e;
    },
    stringify: e => JSON.stringify(e, K)
  };
  var $ = ["text"];
  var Y = ["anchor", "focus"];
  function X(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function H(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        X(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        X(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var G = {
    equals(e, t, r = {}) {
      var {
        loose: n = false
      } = r;
      return A(n ? F(e, $) : e, n ? F(t, $) : t);
    },
    isText: e => u(e) && typeof e.text == "string",
    isTextList: e => Array.isArray(e) && e.every(e => G.isText(e)),
    isTextProps: e => e.text !== undefined,
    matches(e, t) {
      for (var r in t) {
        if (r !== "text" && (!e.hasOwnProperty(r) || e[r] !== t[r])) {
          return false;
        }
      }
      return true;
    },
    decorations(e, t) {
      var r = [H({}, e)];
      for (var n of t) {
        var u = F(n, Y);
        var [o, a] = O.edges(n);
        var i = [];
        var s = 0;
        var l = o.offset;
        var c = a.offset;
        for (var d of r) {
          var {
            length: f
          } = d.text;
          var p = s;
          s += f;
          if (l <= p && s <= c) {
            Object.assign(d, u);
            i.push(d);
            continue;
          }
          if (l !== c && (l === s || c === p) || l > s || c < p || c === p && p !== 0) {
            i.push(d);
            continue;
          }
          var h = d;
          var v = undefined;
          var D = undefined;
          if (c < s) {
            var g = c - p;
            D = H(H({}, h), {}, {
              text: h.text.slice(g)
            });
            h = H(H({}, h), {}, {
              text: h.text.slice(0, g)
            });
          }
          if (l > p) {
            var C = l - p;
            v = H(H({}, h), {}, {
              text: h.text.slice(0, C)
            });
            h = H(H({}, h), {}, {
              text: h.text.slice(C)
            });
          }
          Object.assign(h, u);
          if (v) {
            i.push(v);
          }
          i.push(h);
          if (D) {
            i.push(D);
          }
        }
        r = i;
      }
      return r;
    }
  };
  var J = e => e.selection ? e.selection : e.children.length > 0 ? W.end(e, []) : [0];
  var Q = (e, t) => {
    var [r] = W.node(e, t);
    return e => e === r;
  };
  function ee(e, t = false) {
    var r = !t;
    var n = t ? ei(e) : e;
    var u = a.None;
    var o = a.None;
    var i = 0;
    var s = null;
    var l = null;
    for (var c of n) {
      var d = c.codePointAt(0);
      if (!d) {
        break;
      }
      var f = em(c, d);
      [u, o] = r ? [o, f] : [f, u];
      if ((u & a.ZWJ) != 0 && (o & a.ExtPict) != 0 && !(r ? ey(e.substring(0, i)) : ey(e.substring(0, e.length - i))) || (u & a.RI) != 0 && (o & a.RI) != 0 && !(l = l !== null ? !l : !!r || eA(e.substring(0, e.length - i))) || u !== a.None && o !== a.None && function (e, t) {
        return eB.findIndex(r => (e & r[0]) != 0 && (t & r[1]) != 0) === -1;
      }(u, o)) {
        break;
      }
      i += c.length;
    }
    return i || 1;
  }
  var et = /\s/;
  var er = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  var en = /['\u2018\u2019]/;
  function eu(e, t = false) {
    var r = 0;
    var n = false;
    while (e.length > 0) {
      var u = ee(e, t);
      var [o, a] = eo(e, u, t);
      if (ea(o, a, t)) {
        n = true;
        r += u;
      } else if (n) {
        break;
      } else {
        r += u;
      }
      e = a;
    }
    return r;
  }
  var eo = (e, t, r) => {
    if (r) {
      var n = e.length - t;
      return [e.slice(n, e.length), e.slice(0, n)];
    }
    return [e.slice(0, t), e.slice(t)];
  };
  var ea = function e(t, r, n = false) {
    if (et.test(t)) {
      return false;
    }
    if (en.test(t)) {
      var u = ee(r, n);
      var [o, a] = eo(r, u, n);
      if (e(o, a, n)) {
        return true;
      }
    }
    return !er.test(t);
  };
  function* ei(e) {
    var t = e.length - 1;
    var r = 0;
    for (; r < e.length; r++) {
      var n = e.charAt(t - r);
      if (el(n.charCodeAt(0))) {
        var u = e.charAt(t - r - 1);
        if (es(u.charCodeAt(0))) {
          yield u + n;
          r++;
          continue;
        }
      }
      yield n;
    }
  }
  var es = e => e >= 55296 && e <= 56319;
  var el = e => e >= 56320 && e <= 57343;
  (o = a ||= {})[o.None = 0] = "None";
  o[o.Extend = 1] = "Extend";
  o[o.ZWJ = 2] = "ZWJ";
  o[o.RI = 4] = "RI";
  o[o.Prepend = 8] = "Prepend";
  o[o.SpacingMark = 16] = "SpacingMark";
  o[o.L = 32] = "L";
  o[o.V = 64] = "V";
  o[o.T = 128] = "T";
  o[o.LV = 256] = "LV";
  o[o.LVT = 512] = "LVT";
  o[o.ExtPict = 1024] = "ExtPict";
  o[o.Any = 2048] = "Any";
  var ec = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
  var ed = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
  var ef = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
  var ep = /^[\u1100-\u115F\uA960-\uA97C]$/;
  var eh = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
  var ev = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
  var eD = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
  var eg = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
  var eC = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
  var em = (e, t) => {
    var r = a.Any;
    if (e.search(ec) !== -1) {
      r |= a.Extend;
    }
    if (t === 8205) {
      r |= a.ZWJ;
    }
    if (t >= 127462 && t <= 127487) {
      r |= a.RI;
    }
    if (e.search(ed) !== -1) {
      r |= a.Prepend;
    }
    if (e.search(ef) !== -1) {
      r |= a.SpacingMark;
    }
    if (e.search(ep) !== -1) {
      r |= a.L;
    }
    if (e.search(eh) !== -1) {
      r |= a.V;
    }
    if (e.search(ev) !== -1) {
      r |= a.T;
    }
    if (e.search(eD) !== -1) {
      r |= a.LV;
    }
    if (e.search(eg) !== -1) {
      r |= a.LVT;
    }
    if (e.search(eC) !== -1) {
      r |= a.ExtPict;
    }
    return r;
  };
  var eB = [[a.L, a.L | a.V | a.LV | a.LVT], [a.LV | a.V, a.V | a.T], [a.LVT | a.T, a.T], [a.Any, a.Extend | a.ZWJ], [a.Any, a.SpacingMark], [a.Prepend, a.Any], [a.ZWJ, a.ExtPict], [a.RI, a.RI]];
  var eE = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
  var ey = e => e.search(eE) !== -1;
  var eb = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
  var eA = e => {
    var t = e.match(eb);
    return t !== null && t[0].length / 2 % 2 == 1;
  };
  function eF(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eF(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eF(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var ex = ew(ew(ew(ew({}, {
    transform(e, t) {
      e.children = immerCoreImplementation.createDraft(e.children);
      var r = e.selection && immerCoreImplementation.createDraft(e.selection);
      try {
        r = b(e, r, t);
      } finally {
        e.children = immerCoreImplementation.finishDraft(e.children);
        if (r) {
          e.selection = immerCoreImplementation.isDraft(r) ? immerCoreImplementation.finishDraft(r) : r;
        } else {
          e.selection = null;
        }
      }
    }
  }), {
    insertNodes(e, t, r) {
      e.insertNodes(t, r);
    },
    liftNodes(e, t) {
      e.liftNodes(t);
    },
    mergeNodes(e, t) {
      e.mergeNodes(t);
    },
    moveNodes(e, t) {
      e.moveNodes(t);
    },
    removeNodes(e, t) {
      e.removeNodes(t);
    },
    setNodes(e, t, r) {
      e.setNodes(t, r);
    },
    splitNodes(e, t) {
      e.splitNodes(t);
    },
    unsetNodes(e, t, r) {
      e.unsetNodes(t, r);
    },
    unwrapNodes(e, t) {
      e.unwrapNodes(t);
    },
    wrapNodes(e, t, r) {
      e.wrapNodes(t, r);
    }
  }), {
    collapse(e, t) {
      e.collapse(t);
    },
    deselect(e) {
      e.deselect();
    },
    move(e, t) {
      e.move(t);
    },
    select(e, t) {
      e.select(t);
    },
    setPoint(e, t, r) {
      e.setPoint(t, r);
    },
    setSelection(e, t) {
      e.setSelection(t);
    }
  }), {
    delete(e, t) {
      e.delete(t);
    },
    insertFragment(e, t, r) {
      e.insertFragment(t, r);
    },
    insertText(e, t, r = {}) {
      W.withoutNormalizing(e, () => {
        var {
          voids: n = false
        } = r;
        var {
          at: u = J(e)
        } = r;
        if (C.isPath(u)) {
          u = W.range(e, u);
        }
        if (O.isRange(u)) {
          if (O.isCollapsed(u)) {
            u = u.anchor;
          } else {
            var o = O.end(u);
            if (!n && W.void(e, {
              at: o
            })) {
              return;
            }
            var a = O.start(u);
            var i = W.pointRef(e, a);
            var s = W.pointRef(e, o);
            ex.delete(e, {
              at: u,
              voids: n
            });
            var l = i.unref();
            var c = s.unref();
            u = l || c;
            ex.setSelection(e, {
              anchor: u,
              focus: u
            });
          }
        }
        if ((!!n || !W.void(e, {
          at: u
        })) && !W.elementReadOnly(e, {
          at: u
        })) {
          var {
            path: d,
            offset: f
          } = u;
          if (t.length > 0) {
            e.apply({
              type: "insert_text",
              path: d,
              offset: f,
              text: t
            });
          }
        }
      });
    }
  });
  var eO = new WeakMap();
  var ek = e => eO.get(e) || false;
  var eM = (e, t, r) => {
    var n = eO.get(e) || false;
    eO.set(e, true);
    try {
      t();
      r();
    } finally {
      eO.set(e, n);
    }
  };
  function eP(e, t, r) {
    var n;
    var u;
    var o = d.get(e) || [];
    var a = f.get(e) || new Set();
    var i = e => {
      if (e) {
        var t = e.join(",");
        if (!u.has(t)) {
          u.add(t);
          n.push(e);
        }
      }
    };
    if (r) {
      n = [];
      u = new Set();
      for (var s of o) {
        i(r(s));
      }
    } else {
      n = o;
      u = a;
    }
    for (var l of t) {
      i(l);
    }
    d.set(e, n);
    f.set(e, u);
  }
  var eS = (e, t) => {
    for (var r of W.pathRefs(e)) {
      s.transform(r, t);
    }
    for (var n of W.pointRefs(e)) {
      l.transform(n, t);
    }
    for (var u of W.rangeRefs(e)) {
      c.transform(u, t);
    }
    if (!ek(e)) {
      var o = C.operationCanTransformPath(t) ? e => C.transform(e, t) : undefined;
      eP(e, e.getDirtyPaths(t), o);
    }
    ex.transform(e, t);
    e.operations.push(t);
    W.normalize(e, {
      operation: t
    });
    if (t.type === "set_selection") {
      e.marks = null;
    }
    if (!p.get(e)) {
      p.set(e, true);
      Promise.resolve().then(() => {
        p.set(e, false);
        e.onChange({
          operation: t
        });
        e.operations = [];
      });
    }
  };
  var eR = (e, t) => {
    switch (t.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
        var {
          path: r
        } = t;
        return C.levels(r);
      case "insert_node":
        var {
          node: n,
          path: u
        } = t;
        return [...C.levels(u), ...(G.isText(n) ? [] : Array.from(j.nodes(n), e => {
          var [, t] = e;
          return u.concat(t);
        }))];
      case "merge_node":
        var {
          path: o
        } = t;
        return [...C.ancestors(o), C.previous(o)];
      case "move_node":
        var {
          path: a,
          newPath: i
        } = t;
        if (C.equals(a, i)) {
          return [];
        }
        var s = [];
        var l = [];
        for (var c of C.ancestors(a)) {
          var d = C.transform(c, t);
          s.push(d);
        }
        for (var f of C.ancestors(i)) {
          var p = C.transform(f, t);
          l.push(p);
        }
        var h = l[l.length - 1];
        var v = i[i.length - 1];
        return [...s, ...l, h.concat(v)];
      case "remove_node":
        var {
          path: D
        } = t;
        return [...C.ancestors(D)];
      case "split_node":
        var {
          path: g
        } = t;
        return [...C.levels(g), C.next(g)];
      default:
        return [];
    }
  };
  var ej = e => {
    var {
      selection: t
    } = e;
    if (t) {
      return j.fragment(e, t);
    } else {
      return [];
    }
  };
  var eT = (e, t) => {
    var [r, n] = t;
    if (!G.isText(r)) {
      if (M.isElement(r) && r.children.length === 0) {
        ex.insertNodes(e, {
          text: ""
        }, {
          at: n.concat(0),
          voids: true
        });
        return;
      }
      var u = !W.isEditor(r) && M.isElement(r) && (e.isInline(r) || r.children.length === 0 || G.isText(r.children[0]) || e.isInline(r.children[0]));
      var o = 0;
      var a = 0;
      for (; a < r.children.length; a++, o++) {
        var i = j.get(e, n);
        if (!G.isText(i)) {
          var s = i.children[o];
          var l = i.children[o - 1];
          var c = a === r.children.length - 1;
          if ((G.isText(s) || M.isElement(s) && e.isInline(s)) !== u) {
            ex.removeNodes(e, {
              at: n.concat(o),
              voids: true
            });
            o--;
          } else if (M.isElement(s)) {
            if (e.isInline(s)) {
              if (l != null && G.isText(l)) {
                if (c) {
                  var d = {
                    text: ""
                  };
                  ex.insertNodes(e, d, {
                    at: n.concat(o + 1),
                    voids: true
                  });
                  o++;
                }
              } else {
                var f = {
                  text: ""
                };
                ex.insertNodes(e, f, {
                  at: n.concat(o),
                  voids: true
                });
                o++;
              }
            }
          } else if (l != null && G.isText(l)) {
            if (G.equals(s, l, {
              loose: true
            })) {
              ex.mergeNodes(e, {
                at: n.concat(o),
                voids: true
              });
              o--;
            } else if (l.text === "") {
              ex.removeNodes(e, {
                at: n.concat(o - 1),
                voids: true
              });
              o--;
            } else if (s.text === "") {
              ex.removeNodes(e, {
                at: n.concat(o),
                voids: true
              });
              o--;
            }
          }
        }
      }
    }
  };
  var eN = (e, t) => {
    var {
      iteration: r,
      initialDirtyPathsLength: n
    } = t;
    var u = n * 42;
    if (r > u) {
      throw Error(`Could not completely normalize the editor after ${u} iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.`);
    }
    return true;
  };
  function eL(e, t = {}) {
    var {
      voids: r = false,
      mode: n = "lowest",
      at: u = e.selection,
      match: o
    } = t;
    if (u) {
      var a = W.path(e, u);
      for (var [i, s] of W.levels(e, {
        at: a,
        voids: r,
        match: o,
        reverse: n === "lowest"
      })) {
        if (!G.isText(i)) {
          if (O.isRange(u)) {
            if (C.isAncestor(s, u.anchor.path) && C.isAncestor(s, u.focus.path)) {
              return [i, s];
            }
          } else if (!C.equals(a, s)) {
            return [i, s];
          }
        }
      }
    }
  }
  function e_(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eI(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e_(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e_(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var eW = (e, t, r) => {
    var {
      selection: n
    } = e;
    if (n) {
      var u = (t, r) => {
        if (!G.isText(t)) {
          return false;
        }
        var [n, u] = W.parent(e, r);
        return !e.isVoid(n) || e.markableVoid(n);
      };
      var o = O.isExpanded(n);
      var a = false;
      if (!o) {
        var [i, s] = W.node(e, n);
        if (i && u(i, s)) {
          var [l] = W.parent(e, s);
          a = l && e.markableVoid(l);
        }
      }
      if (o || a) {
        ex.setNodes(e, {
          [t]: r
        }, {
          match: u,
          split: true,
          voids: true
        });
      } else {
        var c = eI(eI({}, W.marks(e) || {}), {}, {
          [t]: r
        });
        e.marks = c;
        if (!p.get(e)) {
          e.onChange();
        }
      }
    }
  };
  function ez(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eV(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        ez(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        ez(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function eq(e, t) {
    var r;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var u = W.point(e, t, {
      edge: "end"
    });
    var o = W.end(e, []);
    var {
      distance: a = 1
    } = n;
    var i = 0;
    for (var s of W.positions(e, eV(eV({}, n), {}, {
      at: {
        anchor: u,
        focus: o
      }
    }))) {
      if (i > a) {
        break;
      }
      if (i !== 0) {
        r = s;
      }
      i++;
    }
    return r;
  }
  function eZ(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eK(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eZ(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eZ(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function eU(e, t) {
    var r;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var u = W.start(e, []);
    var o = W.point(e, t, {
      edge: "start"
    });
    var {
      distance: a = 1
    } = n;
    var i = 0;
    for (var s of W.positions(e, eK(eK({}, n), {}, {
      at: {
        anchor: u,
        focus: o
      },
      reverse: true
    }))) {
      if (i > a) {
        break;
      }
      if (i !== 0) {
        r = s;
      }
      i++;
    }
    return r;
  }
  var e$ = (e, t) => {
    var {
      selection: r
    } = e;
    if (r && O.isCollapsed(r)) {
      ex.delete(e, {
        unit: t,
        reverse: true
      });
    }
  };
  var eY = (e, t) => {
    var {
      selection: r
    } = e;
    if (r && O.isCollapsed(r)) {
      ex.delete(e, {
        unit: t
      });
    }
  };
  function eX(e, {
    direction: t = "forward"
  } = {}) {
    var {
      selection: r
    } = e;
    if (r && O.isExpanded(r)) {
      ex.delete(e, {
        reverse: t === "backward"
      });
    }
  }
  var eH = (e, t) => [W.start(e, t), W.end(e, t)];
  function eG(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eJ(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eG(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eG(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function eQ(e, t = {}) {
    return W.above(e, eJ(eJ({}, t), {}, {
      match: t => M.isElement(t) && W.isElementReadOnly(e, t)
    }));
  }
  var e0 = (e, t) => W.point(e, t, {
    edge: "end"
  });
  var e1 = (e, t) => {
    var r = W.path(e, t, {
      edge: "start"
    });
    return W.node(e, r);
  };
  var e2 = (e, t) => {
    var r = W.range(e, t);
    return j.fragment(e, r);
  };
  function e3(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e4(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e3(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e3(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function e7(e, t = {}) {
    return W.above(e, e4(e4({}, t), {}, {
      match: t => M.isElement(t) && W.isVoid(e, t)
    }));
  }
  var e8 = (e, t) => t.children.some(t => M.isElement(t) && W.isBlock(e, t));
  var e6 = (e, t) => t.children.some(t => G.isText(t) || W.isInline(e, t));
  var e9 = (e, t) => j.has(e, t);
  var e5 = (e, t) => t.children.every(e => G.isText(e));
  var te = e => {
    ex.splitNodes(e, {
      always: true
    });
  };
  var tt = (e, t, r) => {
    ex.insertNodes(e, t, r);
  };
  var tr = e => {
    ex.splitNodes(e, {
      always: true
    });
  };
  function tn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tu(e, t, r = {}) {
    var {
      selection: n,
      marks: u
    } = e;
    if (n) {
      if (u) {
        var o = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] ?? {};
            if (t % 2) {
              tn(Object(r), true).forEach(function (t) {
                B(e, t, r[t]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
            } else {
              tn(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }
          }
          return e;
        }({
          text: t
        }, u);
        ex.insertNodes(e, o, {
          at: r.at,
          voids: r.voids
        });
      } else {
        ex.insertText(e, t, r);
      }
      e.marks = null;
    }
  }
  var to = (e, t) => !e.isInline(t);
  var ta = (e, t, r) => W.isStart(e, t, r) || W.isEnd(e, t, r);
  var ti = (e, t) => {
    var {
      children: r
    } = t;
    var [n] = r;
    return r.length === 0 || r.length === 1 && G.isText(n) && n.text === "" && !e.isVoid(t);
  };
  var ts = (e, t, r) => {
    var n = W.end(e, r);
    return Z.equals(t, n);
  };
  var tl = e => {
    var t = h.get(e);
    return t === undefined || t;
  };
  var tc = (e, t, r) => {
    if (t.offset !== 0) {
      return false;
    }
    var n = W.start(e, r);
    return Z.equals(t, n);
  };
  var td = (e, t) => {
    var r = W.path(e, t, {
      edge: "end"
    });
    return W.node(e, r);
  };
  function tf(e, t, r = {}) {
    var n = W.path(e, t, r);
    return [j.leaf(e, n), n];
  }
  var tp = ["text"];
  var th = ["text"];
  function tv(e) {
    var {
      marks: t,
      selection: r
    } = e;
    if (!r) {
      return null;
    }
    var {
      anchor: n,
      focus: u
    } = r;
    if (t) {
      return t;
    }
    if (O.isExpanded(r)) {
      if (W.isEnd(e, n, n.path)) {
        var o = W.after(e, n);
        if (o) {
          n = o;
        }
      }
      var [a] = W.nodes(e, {
        match: G.isText,
        at: {
          anchor: n,
          focus: u
        }
      });
      if (!a) {
        return {};
      }
      var [i] = a;
      return F(i, tp);
    }
    var {
      path: s
    } = n;
    var [l] = W.leaf(e, s);
    if (n.offset === 0) {
      var c = W.previous(e, {
        at: s,
        match: G.isText
      });
      if (!W.above(e, {
        match: t => M.isElement(t) && W.isVoid(e, t) && e.markableVoid(t)
      })) {
        var d = W.above(e, {
          match: t => M.isElement(t) && W.isBlock(e, t)
        });
        if (c && d) {
          var [f, p] = c;
          var [, h] = d;
          if (C.isAncestor(h, p)) {
            l = f;
          }
        }
      }
    }
    return F(l, th);
  }
  function tD(e, t = {}) {
    var {
      mode: r = "lowest",
      voids: n = false
    } = t;
    var {
      match: u,
      at: o = e.selection
    } = t;
    if (o) {
      var a = W.after(e, o, {
        voids: n
      });
      if (a) {
        var [, i] = W.last(e, []);
        var s = [a.path, i];
        if (C.isPath(o) && o.length === 0) {
          throw Error("Cannot get the next node from the root node!");
        }
        if (u == null) {
          if (C.isPath(o)) {
            var [l] = W.parent(e, o);
            u = e => l.children.includes(e);
          } else {
            u = () => true;
          }
        }
        var [c] = W.nodes(e, {
          at: s,
          match: u,
          mode: r,
          voids: n
        });
        return c;
      }
    }
  }
  function tg(e, t, r = {}) {
    var n = W.path(e, t, r);
    return [j.get(e, n), n];
  }
  function tC(e, t = {}) {
    var {
      force: r = false,
      operation: n
    } = t;
    var u = e => d.get(e) || [];
    var o = e => f.get(e) || new Set();
    var a = e => {
      var t = u(e).pop();
      var r = t.join(",");
      o(e).delete(r);
      return t;
    };
    if (W.isNormalizing(e)) {
      if (r) {
        var i = Array.from(j.nodes(e), e => {
          var [, t] = e;
          return t;
        });
        var s = new Set(i.map(e => e.join(",")));
        d.set(e, i);
        f.set(e, s);
      }
      if (u(e).length !== 0) {
        W.withoutNormalizing(e, () => {
          for (var t of u(e)) {
            if (j.has(e, t)) {
              var r = W.node(e, t);
              var [o, i] = r;
              if (M.isElement(o) && o.children.length === 0) {
                e.normalizeNode(r, {
                  operation: n
                });
              }
            }
          }
          var s = u(e);
          var l = s.length;
          var c = 0;
          while (s.length !== 0) {
            if (!e.shouldNormalize({
              dirtyPaths: s,
              iteration: c,
              initialDirtyPathsLength: l,
              operation: n
            })) {
              return;
            }
            var d = a(e);
            if (j.has(e, d)) {
              var f = W.node(e, d);
              e.normalizeNode(f, {
                operation: n
              });
            }
            c++;
            s = u(e);
          }
        });
      }
    }
  }
  function tm(e, t, r = {}) {
    var n = W.path(e, t, r);
    var u = C.parent(n);
    return W.node(e, u);
  }
  function tB(e, t, r = {}) {
    var {
      affinity: n = "forward"
    } = r;
    var u = {
      current: t,
      affinity: n,
      unref() {
        var {
          current: t
        } = u;
        W.pathRefs(e).delete(u);
        u.current = null;
        return t;
      }
    };
    W.pathRefs(e).add(u);
    return u;
  }
  var tE = e => {
    var t = v.get(e);
    if (!t) {
      t = new Set();
      v.set(e, t);
    }
    return t;
  };
  function ty(e, t, r = {}) {
    var {
      depth: n,
      edge: u
    } = r;
    if (C.isPath(t)) {
      if (u === "start") {
        var [, o] = j.first(e, t);
        t = o;
      } else if (u === "end") {
        var [, a] = j.last(e, t);
        t = a;
      }
    }
    if (O.isRange(t)) {
      t = u === "start" ? O.start(t) : u === "end" ? O.end(t) : C.common(t.anchor.path, t.focus.path);
    }
    if (Z.isPoint(t)) {
      t = t.path;
    }
    if (n != null) {
      t = t.slice(0, n);
    }
    return t;
  }
  function tb(e, t, r = {}) {
    var {
      affinity: n = "forward"
    } = r;
    var u = {
      current: t,
      affinity: n,
      unref() {
        var {
          current: t
        } = u;
        W.pointRefs(e).delete(u);
        u.current = null;
        return t;
      }
    };
    W.pointRefs(e).add(u);
    return u;
  }
  var tA = e => {
    var t = D.get(e);
    if (!t) {
      t = new Set();
      D.set(e, t);
    }
    return t;
  };
  function tF(e, t, r = {}) {
    var {
      edge: n = "start"
    } = r;
    if (C.isPath(t)) {
      if (n === "end") {
        var u;
        var [, o] = j.last(e, t);
        u = o;
      } else {
        var [, a] = j.first(e, t);
        u = a;
      }
      var i = j.get(e, u);
      if (!G.isText(i)) {
        throw Error(`Cannot get the ${n} point in the node at path [${t}] because it has no ${n} text node.`);
      }
      return {
        path: u,
        offset: n === "end" ? i.text.length : 0
      };
    }
    if (O.isRange(t)) {
      var [s, l] = O.edges(t);
      if (n === "start") {
        return s;
      } else {
        return l;
      }
    }
    return t;
  }
  function tw(e, t = {}) {
    var {
      mode: r = "lowest",
      voids: n = false
    } = t;
    var {
      match: u,
      at: o = e.selection
    } = t;
    if (o) {
      var a = W.before(e, o, {
        voids: n
      });
      if (a) {
        var [, i] = W.first(e, []);
        var s = [a.path, i];
        if (C.isPath(o) && o.length === 0) {
          throw Error("Cannot get the previous node from the root node!");
        }
        if (u == null) {
          if (C.isPath(o)) {
            var [l] = W.parent(e, o);
            u = e => l.children.includes(e);
          } else {
            u = () => true;
          }
        }
        var [c] = W.nodes(e, {
          reverse: true,
          at: s,
          match: u,
          mode: r,
          voids: n
        });
        return c;
      }
    }
  }
  function tx(e, t, r = {}) {
    var {
      affinity: n = "forward"
    } = r;
    var u = {
      current: t,
      affinity: n,
      unref() {
        var {
          current: t
        } = u;
        W.rangeRefs(e).delete(u);
        u.current = null;
        return t;
      }
    };
    W.rangeRefs(e).add(u);
    return u;
  }
  var tO = e => {
    var t = g.get(e);
    if (!t) {
      t = new Set();
      g.set(e, t);
    }
    return t;
  };
  var tk = (e, t, r) => O.isRange(t) && !r ? t : {
    anchor: W.start(e, t),
    focus: W.end(e, r || t)
  };
  function tM(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var tP = (e, t) => {
    var {
      selection: r
    } = e;
    if (r) {
      var n = (t, r) => {
        if (!G.isText(t)) {
          return false;
        }
        var [n, u] = W.parent(e, r);
        return !e.isVoid(n) || e.markableVoid(n);
      };
      var u = O.isExpanded(r);
      var o = false;
      if (!u) {
        var [a, i] = W.node(e, r);
        if (a && n(a, i)) {
          var [s] = W.parent(e, i);
          o = s && e.markableVoid(s);
        }
      }
      if (u || o) {
        ex.unsetNodes(e, t, {
          match: n,
          split: true,
          voids: true
        });
      } else {
        var l = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] ?? {};
            if (t % 2) {
              tM(Object(r), true).forEach(function (t) {
                B(e, t, r[t]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
            } else {
              tM(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }
          }
          return e;
        }({}, W.marks(e) || {});
        delete l[t];
        e.marks = l;
        if (!p.get(e)) {
          e.onChange();
        }
      }
    }
  };
  var tS = (e, t) => {
    h.set(e, t);
  };
  var tR = (e, t) => W.point(e, t, {
    edge: "start"
  });
  function tj(e, t, r = {}) {
    var {
      voids: n = false
    } = r;
    var u = W.range(e, t);
    var [o, a] = O.edges(u);
    var i = "";
    for (var [s, l] of W.nodes(e, {
      at: u,
      match: G.isText,
      voids: n
    })) {
      var c = s.text;
      if (C.equals(l, a.path)) {
        c = c.slice(0, a.offset);
      }
      if (C.equals(l, o.path)) {
        c = c.slice(o.offset);
      }
      i += c;
    }
    return i;
  }
  function tT(e, t, r = {}) {
    var {
      voids: n = false
    } = r;
    var [u, o] = O.edges(t);
    if (u.offset !== 0 || o.offset !== 0 || O.isCollapsed(t) || C.hasPrevious(o.path)) {
      return t;
    }
    var a = W.above(e, {
      at: o,
      match: t => M.isElement(t) && W.isBlock(e, t),
      voids: n
    });
    var i = a ? a[1] : [];
    var s = {
      anchor: W.start(e, u),
      focus: o
    };
    var l = true;
    for (var [c, d] of W.nodes(e, {
      at: s,
      match: G.isText,
      reverse: true,
      voids: n
    })) {
      if (l) {
        l = false;
        continue;
      }
      if (c.text !== "" || C.isBefore(d, i)) {
        o = {
          path: d,
          offset: c.text.length
        };
        break;
      }
    }
    return {
      anchor: u,
      focus: o
    };
  }
  var tN = (e, t) => {
    var r = W.isNormalizing(e);
    W.setNormalizing(e, false);
    try {
      t();
    } finally {
      W.setNormalizing(e, r);
    }
    W.normalize(e);
  };
  function tL(e, t = {}) {
    W.withoutNormalizing(e, () => {
      var u;
      var {
        reverse: o = false,
        unit: a = "character",
        distance: i = 1,
        voids: s = false
      } = t;
      var {
        at: l = e.selection,
        hanging: c = false
      } = t;
      if (l) {
        var d = false;
        if (O.isRange(l) && O.isCollapsed(l)) {
          d = true;
          l = l.anchor;
        }
        if (Z.isPoint(l)) {
          var f = W.void(e, {
            at: l,
            mode: "highest"
          });
          if (!s && f) {
            var [, p] = f;
            l = p;
          } else {
            var h = {
              unit: a,
              distance: i
            };
            var v = o ? W.before(e, l, h) || W.start(e, []) : W.after(e, l, h) || W.end(e, []);
            l = {
              anchor: l,
              focus: v
            };
            c = true;
          }
        }
        if (C.isPath(l)) {
          ex.removeNodes(e, {
            at: l,
            voids: s
          });
          return;
        }
        if (!O.isCollapsed(l)) {
          if (!c) {
            var [, D] = O.edges(l);
            var g = W.end(e, []);
            if (!Z.equals(D, g)) {
              l = W.unhangRange(e, l, {
                voids: s
              });
            }
          }
          var [m, B] = O.edges(l);
          var E = W.above(e, {
            match: t => M.isElement(t) && W.isBlock(e, t),
            at: m,
            voids: s
          });
          var y = W.above(e, {
            match: t => M.isElement(t) && W.isBlock(e, t),
            at: B,
            voids: s
          });
          var b = E && y && !C.equals(E[1], y[1]);
          var A = C.equals(m.path, B.path);
          var F = s ? null : W.void(e, {
            at: m,
            mode: "highest"
          }) ?? W.elementReadOnly(e, {
            at: m,
            mode: "highest"
          });
          var w = s ? null : W.void(e, {
            at: B,
            mode: "highest"
          }) ?? W.elementReadOnly(e, {
            at: B,
            mode: "highest"
          });
          if (F) {
            var x = W.before(e, m);
            if (x && E && C.isAncestor(E[1], x.path)) {
              m = x;
            }
          }
          if (w) {
            var k = W.after(e, B);
            if (k && y && C.isAncestor(y[1], k.path)) {
              B = k;
            }
          }
          var P = [];
          for (var S of W.nodes(e, {
            at: l,
            voids: s
          })) {
            var [R, j] = S;
            if ((!u || C.compare(j, u) !== 0) && (!s && M.isElement(R) && (W.isVoid(e, R) || W.isElementReadOnly(e, R)) || !C.isCommon(j, m.path) && !C.isCommon(j, B.path))) {
              P.push(S);
              u = j;
            }
          }
          var T = Array.from(P, t => {
            var [, r] = t;
            return W.pathRef(e, r);
          });
          var N = W.pointRef(e, m);
          var L = W.pointRef(e, B);
          var _ = "";
          if (!A && !F) {
            var I = N.current;
            var [z] = W.leaf(e, I);
            var {
              path: V
            } = I;
            var {
              offset: q
            } = m;
            var K = z.text.slice(q);
            if (K.length > 0) {
              e.apply({
                type: "remove_text",
                path: V,
                offset: q,
                text: K
              });
              _ = K;
            }
          }
          T.reverse().map(e => e.unref()).filter(e => e !== null).forEach(t => ex.removeNodes(e, {
            at: t,
            voids: s
          }));
          if (!w) {
            var U = L.current;
            var [$] = W.leaf(e, U);
            var {
              path: Y
            } = U;
            var X = A ? m.offset : 0;
            var H = $.text.slice(X, B.offset);
            if (H.length > 0) {
              e.apply({
                type: "remove_text",
                path: Y,
                offset: X,
                text: H
              });
              _ = H;
            }
          }
          if (!A && b && L.current && N.current) {
            ex.mergeNodes(e, {
              at: L.current,
              hanging: true,
              voids: s
            });
          }
          if (d && o && a === "character" && _.length > 1 && _.match(/[\u0E00-\u0E7F]+/)) {
            ex.insertText(e, _.slice(0, _.length - i));
          }
          var G = N.unref();
          var J = L.unref();
          var Q = o ? G || J : J || G;
          if (t.at == null && Q) {
            ex.select(e, Q);
          }
        }
      }
    });
  }
  function t_(e, t, r = {}) {
    W.withoutNormalizing(e, () => {
      var n;
      var {
        hanging: u = false,
        voids: o = false
      } = r;
      var {
        at: a = J(e),
        batchDirty: i = true
      } = r;
      if (t.length) {
        if (O.isRange(a)) {
          if (!u) {
            a = W.unhangRange(e, a, {
              voids: o
            });
          }
          if (O.isCollapsed(a)) {
            a = a.anchor;
          } else {
            var [, s] = O.edges(a);
            if (!o && W.void(e, {
              at: s
            })) {
              return;
            }
            var l = W.pointRef(e, s);
            ex.delete(e, {
              at: a
            });
            a = l.unref();
          }
        } else if (C.isPath(a)) {
          a = W.start(e, a);
        }
        if (!!o || !W.void(e, {
          at: a
        })) {
          var c = W.above(e, {
            at: a,
            match: t => M.isElement(t) && W.isInline(e, t),
            mode: "highest",
            voids: o
          });
          if (c) {
            var [, d] = c;
            if (W.isEnd(e, a, d)) {
              a = W.after(e, d);
            } else if (W.isStart(e, a, d)) {
              a = W.before(e, d);
            }
          }
          var [, f] = W.above(e, {
            match: t => M.isElement(t) && W.isBlock(e, t),
            at: a,
            voids: o
          });
          var p = W.isStart(e, a, f);
          var h = W.isEnd(e, a, f);
          var v = p && h;
          var D = !p || p && h;
          var g = !h;
          var [, m] = j.first({
            children: t
          }, []);
          var [, B] = j.last({
            children: t
          }, []);
          var E = [];
          var y = t => {
            var [r, n] = t;
            return n.length !== 0 && (!!v || (!D || !C.isAncestor(n, m) || !M.isElement(r) || !!e.isVoid(r) || !!e.isInline(r)) && (!g || !C.isAncestor(n, B) || !M.isElement(r) || !!e.isVoid(r) || !!e.isInline(r)));
          };
          for (var b of j.nodes({
            children: t
          }, {
            pass: y
          })) {
            if (y(b)) {
              E.push(b);
            }
          }
          var A = [];
          var F = [];
          var w = [];
          var x = true;
          var k = false;
          for (var [P] of E) {
            if (M.isElement(P) && !e.isInline(P)) {
              x = false;
              k = true;
              F.push(P);
            } else if (x) {
              A.push(P);
            } else {
              w.push(P);
            }
          }
          var [S] = W.nodes(e, {
            at: a,
            match: t => G.isText(t) || W.isInline(e, t),
            mode: "highest",
            voids: o
          });
          var [, R] = S;
          var T = W.isStart(e, a, R);
          var N = W.isEnd(e, a, R);
          var L = W.pathRef(e, h && !w.length ? C.next(f) : f);
          var _ = W.pathRef(e, N ? C.next(R) : R);
          ex.splitNodes(e, {
            at: a,
            match: t => k ? M.isElement(t) && W.isBlock(e, t) : G.isText(t) || W.isInline(e, t),
            mode: k ? "lowest" : "highest",
            always: k && (!p || A.length > 0) && (!h || w.length > 0),
            voids: o
          });
          var I = W.pathRef(e, !T || T && N ? C.next(R) : R);
          ex.insertNodes(e, A, {
            at: I.current,
            match: t => G.isText(t) || W.isInline(e, t),
            mode: "highest",
            voids: o,
            batchDirty: i
          });
          if (v && !A.length && F.length && !w.length) {
            ex.delete(e, {
              at: f,
              voids: o
            });
          }
          ex.insertNodes(e, F, {
            at: L.current,
            match: t => M.isElement(t) && W.isBlock(e, t),
            mode: "lowest",
            voids: o,
            batchDirty: i
          });
          ex.insertNodes(e, w, {
            at: _.current,
            match: t => G.isText(t) || W.isInline(e, t),
            mode: "highest",
            voids: o,
            batchDirty: i
          });
          if (!r.at && (w.length > 0 && _.current ? n = C.previous(_.current) : F.length > 0 && L.current ? n = C.previous(L.current) : I.current && (n = C.previous(I.current)), n)) {
            var z = W.end(e, n);
            ex.select(e, z);
          }
          I.unref();
          L.unref();
          _.unref();
        }
      }
    });
  }
  function tI(e, t = {}) {
    var {
      edge: r = "anchor"
    } = t;
    var {
      selection: n
    } = e;
    if (n) {
      if (r === "anchor") {
        ex.select(e, n.anchor);
      } else if (r === "focus") {
        ex.select(e, n.focus);
      } else if (r === "start") {
        var [u] = O.edges(n);
        ex.select(e, u);
      } else if (r === "end") {
        var [, o] = O.edges(n);
        ex.select(e, o);
      }
    }
  }
  var tW = e => {
    var {
      selection: t
    } = e;
    if (t) {
      e.apply({
        type: "set_selection",
        properties: t,
        newProperties: null
      });
    }
  };
  function tz(e, t = {}) {
    var {
      selection: r
    } = e;
    var {
      distance: n = 1,
      unit: u = "character",
      reverse: o = false
    } = t;
    var {
      edge: a = null
    } = t;
    if (r) {
      if (a === "start") {
        a = O.isBackward(r) ? "focus" : "anchor";
      }
      if (a === "end") {
        a = O.isBackward(r) ? "anchor" : "focus";
      }
      var {
        anchor: i,
        focus: s
      } = r;
      var l = {
        distance: n,
        unit: u,
        ignoreNonSelectable: true
      };
      var c = {};
      if (a == null || a === "anchor") {
        var d = o ? W.before(e, i, l) : W.after(e, i, l);
        if (d) {
          c.anchor = d;
        }
      }
      if (a == null || a === "focus") {
        var f = o ? W.before(e, s, l) : W.after(e, s, l);
        if (f) {
          c.focus = f;
        }
      }
      ex.setSelection(e, c);
    }
  }
  var tV = (e, t) => {
    var {
      selection: r
    } = e;
    t = W.range(e, t);
    if (r) {
      ex.setSelection(e, t);
      return;
    }
    if (!O.isRange(t)) {
      throw Error(`When setting the selection and the current selection is \`null\` you must provide at least an \`anchor\` and \`focus\`, but you passed: ${U.stringify(t)}`);
    }
    e.apply({
      type: "set_selection",
      properties: r,
      newProperties: t
    });
  };
  function tq(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tZ(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        tq(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        tq(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function tK(e, t, r = {}) {
    var {
      selection: n
    } = e;
    var {
      edge: u = "both"
    } = r;
    if (n) {
      if (u === "start") {
        u = O.isBackward(n) ? "focus" : "anchor";
      }
      if (u === "end") {
        u = O.isBackward(n) ? "anchor" : "focus";
      }
      var {
        anchor: o,
        focus: a
      } = n;
      var i = u === "anchor" ? o : a;
      ex.setSelection(e, {
        [u === "anchor" ? "anchor" : "focus"]: tZ(tZ({}, i), t)
      });
    }
  }
  var tU = (e, t) => {
    var {
      selection: r
    } = e;
    var n = {};
    var u = {};
    if (r) {
      for (var o in t) {
        if (o === "anchor" && t.anchor != null && !Z.equals(t.anchor, r.anchor) || o === "focus" && t.focus != null && !Z.equals(t.focus, r.focus) || o !== "anchor" && o !== "focus" && t[o] !== r[o]) {
          n[o] = r[o];
          u[o] = t[o];
        }
      }
      if (Object.keys(n).length > 0) {
        e.apply({
          type: "set_selection",
          properties: n,
          newProperties: u
        });
      }
    }
  };
  function t$(e, t, r = {}) {
    W.withoutNormalizing(e, () => {
      var {
        hanging: n = false,
        voids: u = false,
        mode: o = "lowest",
        batchDirty: a = true
      } = r;
      var {
        at: i,
        match: s,
        select: l
      } = r;
      if (j.isNode(t)) {
        t = [t];
      }
      if (t.length !== 0) {
        var [c] = t;
        if (!i) {
          i = J(e);
          if (l !== false) {
            l = true;
          }
        }
        if (l == null) {
          l = false;
        }
        if (O.isRange(i)) {
          if (!n) {
            i = W.unhangRange(e, i, {
              voids: u
            });
          }
          if (O.isCollapsed(i)) {
            i = i.anchor;
          } else {
            var [, d] = O.edges(i);
            var f = W.pointRef(e, d);
            ex.delete(e, {
              at: i
            });
            i = f.unref();
          }
        }
        if (Z.isPoint(i)) {
          if (s == null) {
            s = G.isText(c) ? e => G.isText(e) : e.isInline(c) ? t => G.isText(t) || W.isInline(e, t) : t => M.isElement(t) && W.isBlock(e, t);
          }
          var [p] = W.nodes(e, {
            at: i.path,
            match: s,
            mode: o,
            voids: u
          });
          if (!p) {
            return;
          }
          var [, h] = p;
          var v = W.pathRef(e, h);
          var D = W.isEnd(e, i, h);
          ex.splitNodes(e, {
            at: i,
            match: s,
            mode: o,
            voids: u
          });
          var g = v.unref();
          i = D ? C.next(g) : g;
        }
        var m = C.parent(i);
        var B = i[i.length - 1];
        if (!!u || !W.void(e, {
          at: m
        })) {
          if (a) {
            var E = [];
            var y = C.levels(m);
            eM(e, () => {
              for (var r of t) {
                (function () {
                  var t = m.concat(B);
                  B++;
                  var n = {
                    type: "insert_node",
                    path: t,
                    node: r
                  };
                  e.apply(n);
                  i = C.next(i);
                  E.push(n);
                  if (G.isText) {
                    y.push(...Array.from(j.nodes(r), e => {
                      var [, r] = e;
                      return t.concat(r);
                    }));
                  } else {
                    y.push(t);
                  }
                })();
              }
            }, () => {
              eP(e, y, e => {
                var t = e;
                for (var r of E) {
                  if (C.operationCanTransformPath(r) && !(t = C.transform(t, r))) {
                    return null;
                  }
                }
                return t;
              });
            });
          } else {
            for (var b of t) {
              var A = m.concat(B);
              B++;
              e.apply({
                type: "insert_node",
                path: A,
                node: b
              });
              i = C.next(i);
            }
          }
          i = C.previous(i);
          if (l) {
            var F = W.end(e, i);
            if (F) {
              ex.select(e, F);
            }
          }
        }
      }
    });
  }
  function tY(e, t = {}) {
    W.withoutNormalizing(e, () => {
      var {
        at: r = e.selection,
        mode: n = "lowest",
        voids: u = false
      } = t;
      var {
        match: o
      } = t;
      if (o == null) {
        o = C.isPath(r) ? Q(e, r) : t => M.isElement(t) && W.isBlock(e, t);
      }
      if (r) {
        for (var a of Array.from(W.nodes(e, {
          at: r,
          match: o,
          mode: n,
          voids: u
        }), t => {
          var [, r] = t;
          return W.pathRef(e, r);
        })) {
          var i = a.unref();
          if (i.length < 2) {
            throw Error(`Cannot lift node at a path [${i}] because it has a depth of less than \`2\`.`);
          }
          var [s, l] = W.node(e, C.parent(i));
          var c = i[i.length - 1];
          var {
            length: d
          } = s.children;
          if (d === 1) {
            var f = C.next(l);
            ex.moveNodes(e, {
              at: i,
              to: f,
              voids: u
            });
            ex.removeNodes(e, {
              at: l,
              voids: u
            });
          } else if (c === 0) {
            ex.moveNodes(e, {
              at: i,
              to: l,
              voids: u
            });
          } else if (c === d - 1) {
            var p = C.next(l);
            ex.moveNodes(e, {
              at: i,
              to: p,
              voids: u
            });
          } else {
            var h = C.next(i);
            var v = C.next(l);
            ex.splitNodes(e, {
              at: h,
              voids: u
            });
            ex.moveNodes(e, {
              at: i,
              to: v,
              voids: u
            });
          }
        }
      }
    });
  }
  var tX = ["text"];
  var tH = ["children"];
  var tG = (e, t) => M.isElement(t) ? !!W.isVoid(e, t) || t.children.length === 1 && tG(e, t.children[0]) : !W.isEditor(t);
  function tJ(e, t = {}) {
    W.withoutNormalizing(e, () => {
      var r;
      var n;
      var {
        match: u,
        at: o = e.selection
      } = t;
      var {
        hanging: a = false,
        voids: i = false,
        mode: s = "lowest"
      } = t;
      if (o) {
        if (u == null) {
          if (C.isPath(o)) {
            var [l] = W.parent(e, o);
            u = e => l.children.includes(e);
          } else {
            u = t => M.isElement(t) && W.isBlock(e, t);
          }
        }
        if (!a && O.isRange(o)) {
          o = W.unhangRange(e, o, {
            voids: i
          });
        }
        if (O.isRange(o)) {
          if (O.isCollapsed(o)) {
            o = o.anchor;
          } else {
            var [, c] = O.edges(o);
            var d = W.pointRef(e, c);
            ex.delete(e, {
              at: o
            });
            o = d.unref();
            if (t.at == null) {
              ex.select(e, o);
            }
          }
        }
        var [f] = W.nodes(e, {
          at: o,
          match: u,
          voids: i,
          mode: s
        });
        var p = W.previous(e, {
          at: o,
          match: u,
          voids: i,
          mode: s
        });
        if (f && p) {
          var [h, v] = f;
          var [D, g] = p;
          if (v.length !== 0 && g.length !== 0) {
            var m = C.next(g);
            var B = C.common(v, g);
            var E = C.isSibling(v, g);
            var y = Array.from(W.levels(e, {
              at: v
            }), e => {
              var [t] = e;
              return t;
            }).slice(B.length).slice(0, -1);
            var b = W.above(e, {
              at: v,
              mode: "highest",
              match: t => y.includes(t) && tG(e, t)
            });
            var A = b && W.pathRef(e, b[1]);
            if (G.isText(h) && G.isText(D)) {
              var w = F(h, tX);
              n = D.text.length;
              r = w;
            } else if (M.isElement(h) && M.isElement(D)) {
              var w = F(h, tH);
              n = D.children.length;
              r = w;
            } else {
              throw Error(`Cannot merge the node at path [${v}] with the previous sibling because it is not the same kind: ${U.stringify(h)} ${U.stringify(D)}`);
            }
            if (!E) {
              ex.moveNodes(e, {
                at: v,
                to: m,
                voids: i
              });
            }
            if (A) {
              ex.removeNodes(e, {
                at: A.current,
                voids: i
              });
            }
            if (M.isElement(D) && W.isEmpty(e, D) || G.isText(D) && D.text === "" && g[g.length - 1] !== 0) {
              ex.removeNodes(e, {
                at: g,
                voids: i
              });
            } else {
              e.apply({
                type: "merge_node",
                path: m,
                position: n,
                properties: r
              });
            }
            if (A) {
              A.unref();
            }
          }
        }
      }
    });
  }
  var tQ = (e, t) => {
    W.withoutNormalizing(e, () => {
      var {
        to: r,
        at: n = e.selection,
        mode: u = "lowest",
        voids: o = false
      } = t;
      var {
        match: a
      } = t;
      if (n) {
        if (a == null) {
          a = C.isPath(n) ? Q(e, n) : t => M.isElement(t) && W.isBlock(e, t);
        }
        var i = W.pathRef(e, r);
        for (var s of Array.from(W.nodes(e, {
          at: n,
          match: a,
          mode: u,
          voids: o
        }), t => {
          var [, r] = t;
          return W.pathRef(e, r);
        })) {
          var l = s.unref();
          var c = i.current;
          if (l.length !== 0) {
            e.apply({
              type: "move_node",
              path: l,
              newPath: c
            });
          }
          if (i.current && C.isSibling(c, l) && C.isAfter(c, l)) {
            i.current = C.next(i.current);
          }
        }
        i.unref();
      }
    });
  };
  function t0(e, t = {}) {
    W.withoutNormalizing(e, () => {
      var {
        hanging: r = false,
        voids: n = false,
        mode: u = "lowest"
      } = t;
      var {
        at: o = e.selection,
        match: a
      } = t;
      if (o) {
        if (a == null) {
          a = C.isPath(o) ? Q(e, o) : t => M.isElement(t) && W.isBlock(e, t);
        }
        if (!r && O.isRange(o)) {
          o = W.unhangRange(e, o, {
            voids: n
          });
        }
        for (var i of Array.from(W.nodes(e, {
          at: o,
          match: a,
          mode: u,
          voids: n
        }), t => {
          var [, r] = t;
          return W.pathRef(e, r);
        })) {
          var s = i.unref();
          if (s) {
            var [l] = W.node(e, s);
            e.apply({
              type: "remove_node",
              path: s,
              node: l
            });
          }
        }
      }
    });
  }
  function t1(e, t, r = {}) {
    W.withoutNormalizing(e, () => {
      var {
        match: n,
        at: u = e.selection,
        compare: o,
        merge: a
      } = r;
      var {
        hanging: i = false,
        mode: s = "lowest",
        split: l = false,
        voids: c = false
      } = r;
      if (u) {
        if (n == null) {
          n = C.isPath(u) ? Q(e, u) : t => M.isElement(t) && W.isBlock(e, t);
        }
        if (!i && O.isRange(u)) {
          u = W.unhangRange(e, u, {
            voids: c
          });
        }
        if (l && O.isRange(u)) {
          if (O.isCollapsed(u) && W.leaf(e, u.anchor)[0].text.length > 0) {
            return;
          }
          var d = W.rangeRef(e, u, {
            affinity: "inward"
          });
          var [f, p] = O.edges(u);
          var h = s === "lowest" ? "lowest" : "highest";
          var v = W.isEnd(e, p, p.path);
          ex.splitNodes(e, {
            at: p,
            match: n,
            mode: h,
            voids: c,
            always: !v
          });
          var D = W.isStart(e, f, f.path);
          ex.splitNodes(e, {
            at: f,
            match: n,
            mode: h,
            voids: c,
            always: !D
          });
          u = d.unref();
          if (r.at == null) {
            ex.select(e, u);
          }
        }
        o ||= (e, t) => e !== t;
        for (var [g, m] of W.nodes(e, {
          at: u,
          match: n,
          mode: s,
          voids: c
        })) {
          var B = {};
          var E = {};
          if (m.length !== 0) {
            var y = false;
            for (var b in t) {
              if (b !== "children" && b !== "text" && o(t[b], g[b])) {
                y = true;
                if (g.hasOwnProperty(b)) {
                  B[b] = g[b];
                }
                if (a) {
                  if (t[b] != null) {
                    E[b] = a(g[b], t[b]);
                  }
                } else if (t[b] != null) {
                  E[b] = t[b];
                }
              }
            }
            if (y) {
              e.apply({
                type: "set_node",
                path: m,
                properties: B,
                newProperties: E
              });
            }
          }
        }
      }
    });
  }
  var t2 = (e, t) => {
    if (O.isCollapsed(t)) {
      return t.anchor;
    }
    var [, r] = O.edges(t);
    var n = W.pointRef(e, r);
    ex.delete(e, {
      at: t
    });
    return n.unref();
  };
  function t3(e, t = {}) {
    W.withoutNormalizing(e, () => {
      var r;
      var n;
      var {
        mode: u = "lowest",
        voids: o = false
      } = t;
      var {
        match: a,
        at: i = e.selection,
        height: s = 0,
        always: l = false
      } = t;
      if (a == null) {
        a = t => M.isElement(t) && W.isBlock(e, t);
      }
      if (O.isRange(i)) {
        i = t2(e, i);
      }
      if (C.isPath(i)) {
        var c = i;
        var d = W.point(e, c);
        var [f] = W.parent(e, c);
        a = e => e === f;
        s = d.path.length - c.length + 1;
        i = d;
        l = true;
      }
      if (i) {
        var p = W.pointRef(e, i, {
          affinity: "backward"
        });
        try {
          var [h] = W.nodes(e, {
            at: i,
            match: a,
            mode: u,
            voids: o
          });
          if (!h) {
            return;
          }
          var v = W.void(e, {
            at: i,
            mode: "highest"
          });
          if (!o && v) {
            var [D, g] = v;
            if (M.isElement(D) && e.isInline(D)) {
              var m = W.after(e, g);
              if (!m) {
                var B = C.next(g);
                ex.insertNodes(e, {
                  text: ""
                }, {
                  at: B,
                  voids: o
                });
                m = W.point(e, B);
              }
              i = m;
              l = true;
            }
            s = i.path.length - g.length + 1;
            l = true;
          }
          r = W.pointRef(e, i);
          var E = i.path.length - s;
          var [, y] = h;
          var b = i.path.slice(0, E);
          var A = s === 0 ? i.offset : i.path[E] + 0;
          for (var [F, w] of W.levels(e, {
            at: b,
            reverse: true,
            voids: o
          })) {
            var x = false;
            if (w.length < y.length || w.length === 0 || !o && M.isElement(F) && W.isVoid(e, F)) {
              break;
            }
            var k = p.current;
            var P = W.isEnd(e, k, w);
            if (l || !p || !W.isEdge(e, k, w)) {
              x = true;
              var S = j.extractProps(F);
              e.apply({
                type: "split_node",
                path: w,
                position: A,
                properties: S
              });
            }
            A = w[w.length - 1] + (x || P ? 1 : 0);
          }
          if (t.at == null) {
            var R = r.current || W.end(e, []);
            ex.select(e, R);
          }
        } finally {
          p.unref();
          if ((n = r) !== null && n !== undefined) {
            n.unref();
          }
        }
      }
    });
  }
  function t4(e, t, r = {}) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    var n = {};
    for (var u of t) {
      n[u] = null;
    }
    ex.setNodes(e, n, r);
  }
  function t7(e, t = {}) {
    W.withoutNormalizing(e, () => {
      var {
        mode: r = "lowest",
        split: n = false,
        voids: u = false
      } = t;
      var {
        at: o = e.selection,
        match: a
      } = t;
      if (o) {
        if (a == null) {
          a = C.isPath(o) ? Q(e, o) : t => M.isElement(t) && W.isBlock(e, t);
        }
        if (C.isPath(o)) {
          o = W.range(e, o);
        }
        var i = O.isRange(o) ? W.rangeRef(e, o) : null;
        for (var s of Array.from(W.nodes(e, {
          at: o,
          match: a,
          mode: r,
          voids: u
        }), t => {
          var [, r] = t;
          return W.pathRef(e, r);
        }).reverse()) {
          (function () {
            var t = s.unref();
            var [r] = W.node(e, t);
            var o = W.range(e, t);
            if (n && i) {
              o = O.intersection(i.current, o);
            }
            ex.liftNodes(e, {
              at: o,
              match: e => M.isAncestor(r) && r.children.includes(e),
              voids: u
            });
          })();
        }
        if (i) {
          i.unref();
        }
      }
    });
  }
  function t8(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function t6(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        t8(Object(r), true).forEach(function (t) {
          B(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        t8(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function t9(e, t, r = {}) {
    W.withoutNormalizing(e, () => {
      var {
        mode: n = "lowest",
        split: u = false,
        voids: o = false
      } = r;
      var {
        match: a,
        at: i = e.selection
      } = r;
      if (i) {
        if (a == null) {
          a = C.isPath(i) ? Q(e, i) : e.isInline(t) ? t => M.isElement(t) && W.isInline(e, t) || G.isText(t) : t => M.isElement(t) && W.isBlock(e, t);
        }
        if (u && O.isRange(i)) {
          var [s, l] = O.edges(i);
          var c = W.rangeRef(e, i, {
            affinity: "inward"
          });
          ex.splitNodes(e, {
            at: l,
            match: a,
            voids: o
          });
          ex.splitNodes(e, {
            at: s,
            match: a,
            voids: o
          });
          i = c.unref();
          if (r.at == null) {
            ex.select(e, i);
          }
        }
        for (var [, d] of Array.from(W.nodes(e, {
          at: i,
          match: e.isInline(t) ? t => M.isElement(t) && W.isBlock(e, t) : e => W.isEditor(e),
          mode: "lowest",
          voids: o
        }))) {
          if (function () {
            var r = O.isRange(i) ? O.intersection(i, W.range(e, d)) : i;
            if (!r) {
              return 0;
            }
            var u = Array.from(W.nodes(e, {
              at: r,
              match: a,
              mode: n,
              voids: o
            }));
            if (u.length > 0) {
              var [s] = u;
              var l = u[u.length - 1];
              var [, c] = s;
              var [, f] = l;
              if (c.length === 0 && f.length === 0) {
                return 0;
              }
              var p = C.equals(c, f) ? C.parent(c) : C.common(c, f);
              var h = W.range(e, c, f);
              var [v] = W.node(e, p);
              var D = p.length + 1;
              var g = C.next(f.slice(0, D));
              var m = t6(t6({}, t), {}, {
                children: []
              });
              ex.insertNodes(e, m, {
                at: g,
                voids: o
              });
              ex.moveNodes(e, {
                at: h,
                match: e => M.isAncestor(v) && v.children.includes(e),
                to: g.concat(0),
                voids: o
              });
            }
          }() === 0) {
            continue;
          }
        }
      }
    });
  }
  var t5 = () => {
    var e = {
      children: [],
      operations: [],
      selection: null,
      marks: null,
      isElementReadOnly: () => false,
      isInline: () => false,
      isSelectable: () => true,
      isVoid: () => false,
      markableVoid: () => false,
      onChange: () => {},
      apply: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eS(e, ...r);
      },
      addMark: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eW(e, ...r);
      },
      deleteBackward: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e$(e, ...r);
      },
      deleteForward: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eY(e, ...r);
      },
      deleteFragment: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eX(e, ...r);
      },
      getFragment: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return ej(e, ...r);
      },
      insertBreak: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return te(e, ...r);
      },
      insertSoftBreak: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tr(e, ...r);
      },
      insertFragment: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t_(e, ...r);
      },
      insertNode: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tt(e, ...r);
      },
      insertText: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tu(e, ...r);
      },
      normalizeNode: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eT(e, ...r);
      },
      removeMark: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tP(e, ...r);
      },
      getDirtyPaths: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eR(e, ...r);
      },
      shouldNormalize: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eN(e, ...r);
      },
      above: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eL(e, ...r);
      },
      after: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eq(e, ...r);
      },
      before: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eU(e, ...r);
      },
      collapse: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tI(e, ...r);
      },
      delete: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tL(e, ...r);
      },
      deselect: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tW(e, ...r);
      },
      edges: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eH(e, ...r);
      },
      elementReadOnly: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return eQ(e, ...r);
      },
      end: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e0(e, ...r);
      },
      first: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e1(e, ...r);
      },
      fragment: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e2(e, ...r);
      },
      getMarks: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tv(e, ...r);
      },
      hasBlocks: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e8(e, ...r);
      },
      hasInlines: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e6(e, ...r);
      },
      hasPath: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e9(e, ...r);
      },
      hasTexts: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e5(e, ...r);
      },
      insertNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t$(e, ...r);
      },
      isBlock: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return to(e, ...r);
      },
      isEdge: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return ta(e, ...r);
      },
      isEmpty: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return ti(e, ...r);
      },
      isEnd: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return ts(e, ...r);
      },
      isNormalizing: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tl(e, ...r);
      },
      isStart: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tc(e, ...r);
      },
      last: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return td(e, ...r);
      },
      leaf: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tf(e, ...r);
      },
      levels: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return function (e, t = {}) {
          return function* () {
            var {
              at: r = e.selection,
              reverse: n = false,
              voids: u = false
            } = t;
            var {
              match: o
            } = t;
            if (o == null) {
              o = () => true;
            }
            if (r) {
              var a = [];
              var i = W.path(e, r);
              for (var [s, l] of j.levels(e, i)) {
                if (o(s, l) && (a.push([s, l]), !u && M.isElement(s) && W.isVoid(e, s))) {
                  break;
                }
              }
              if (n) {
                a.reverse();
              }
              yield* a;
            }
          }();
        }(e, ...r);
      },
      liftNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tY(e, ...r);
      },
      mergeNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tJ(e, ...r);
      },
      move: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tz(e, ...r);
      },
      moveNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tQ(e, ...r);
      },
      next: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tD(e, ...r);
      },
      node: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tg(e, ...r);
      },
      nodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return function (e, t = {}) {
          return function* () {
            var r;
            var n;
            var u;
            var {
              at: o = e.selection,
              mode: a = "all",
              universal: i = false,
              reverse: s = false,
              voids: l = false,
              ignoreNonSelectable: c = false
            } = t;
            var {
              match: d
            } = t;
            d ||= () => true;
            if (o) {
              if (z(o)) {
                r = o[0];
                n = o[1];
              } else {
                var f = W.path(e, o, {
                  edge: "start"
                });
                var p = W.path(e, o, {
                  edge: "end"
                });
                r = s ? p : f;
                n = s ? f : p;
              }
              var h = j.nodes(e, {
                reverse: s,
                from: r,
                to: n,
                pass: t => {
                  var [r] = t;
                  return !!M.isElement(r) && (!l && (!!W.isVoid(e, r) || !!W.isElementReadOnly(e, r)) || !!c && !W.isSelectable(e, r));
                }
              });
              var v = [];
              for (var [D, g] of h) {
                if (!c || !M.isElement(D) || W.isSelectable(e, D)) {
                  var m = u && C.compare(g, u[1]) === 0;
                  if (a !== "highest" || !m) {
                    if (!d(D, g)) {
                      if (i && !m && G.isText(D)) {
                        return;
                      }
                      continue;
                    }
                    if (a === "lowest" && m) {
                      u = [D, g];
                      continue;
                    }
                    var B = a === "lowest" ? u : [D, g];
                    if (B) {
                      if (i) {
                        v.push(B);
                      } else {
                        yield B;
                      }
                    }
                    u = [D, g];
                  }
                }
              }
              if (a === "lowest" && u) {
                if (i) {
                  v.push(u);
                } else {
                  yield u;
                }
              }
              if (i) {
                yield* v;
              }
            }
          }();
        }(e, ...r);
      },
      normalize: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tC(e, ...r);
      },
      parent: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tm(e, ...r);
      },
      path: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return ty(e, ...r);
      },
      pathRef: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tB(e, ...r);
      },
      pathRefs: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tE(e, ...r);
      },
      point: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tF(e, ...r);
      },
      pointRef: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tb(e, ...r);
      },
      pointRefs: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tA(e, ...r);
      },
      positions: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return function (e, t = {}) {
          return function* () {
            var {
              at: r = e.selection,
              unit: n = "offset",
              reverse: u = false,
              voids: o = false,
              ignoreNonSelectable: a = false
            } = t;
            if (r) {
              var i = W.range(e, r);
              var [s, l] = O.edges(i);
              var c = u ? l : s;
              var d = false;
              var f = "";
              var p = 0;
              var h = 0;
              var v = 0;
              for (var [D, g] of W.nodes(e, {
                at: r,
                reverse: u,
                voids: o,
                ignoreNonSelectable: a
              })) {
                if (M.isElement(D)) {
                  if (!o && (e.isVoid(D) || e.isElementReadOnly(D))) {
                    yield W.start(e, g);
                    continue;
                  }
                  if (e.isInline(D)) {
                    continue;
                  }
                  if (W.hasInlines(e, D)) {
                    var m = C.isAncestor(g, l.path) ? l : W.end(e, g);
                    var B = C.isAncestor(g, s.path) ? s : W.start(e, g);
                    f = W.string(e, {
                      anchor: B,
                      focus: m
                    }, {
                      voids: o
                    });
                    d = true;
                  }
                }
                if (G.isText(D)) {
                  var E;
                  var y;
                  var b;
                  var A = C.equals(g, c.path);
                  if (A) {
                    h = u ? c.offset : D.text.length - c.offset;
                    v = c.offset;
                  } else {
                    h = D.text.length;
                    v = u ? h : 0;
                  }
                  if (A || d || n === "offset") {
                    yield {
                      path: g,
                      offset: v
                    };
                    d = false;
                  }
                  while (true) {
                    if (p === 0) {
                      if (f === "") {
                        break;
                      }
                      E = f;
                      y = n;
                      b = u;
                      f = eo(f, p = y === "character" ? ee(E, b) : y === "word" ? eu(E, b) : y === "line" || y === "block" ? E.length : 1, u)[1];
                    }
                    v = u ? v - p : v + p;
                    if ((h -= p) < 0) {
                      p = -h;
                      break;
                    }
                    p = 0;
                    yield {
                      path: g,
                      offset: v
                    };
                  }
                }
              }
            }
          }();
        }(e, ...r);
      },
      previous: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tw(e, ...r);
      },
      range: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tk(e, ...r);
      },
      rangeRef: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tx(e, ...r);
      },
      rangeRefs: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tO(e, ...r);
      },
      removeNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t0(e, ...r);
      },
      select: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tV(e, ...r);
      },
      setNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t1(e, ...r);
      },
      setNormalizing: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tS(e, ...r);
      },
      setPoint: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tK(e, ...r);
      },
      setSelection: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tU(e, ...r);
      },
      splitNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t3(e, ...r);
      },
      start: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tR(e, ...r);
      },
      string: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tj(e, ...r);
      },
      unhangRange: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tT(e, ...r);
      },
      unsetNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t4(e, ...r);
      },
      unwrapNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t7(e, ...r);
      },
      void: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return e7(e, ...r);
      },
      withoutNormalizing: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return tN(e, ...r);
      },
      wrapNodes: function () {
        var t = arguments.length;
        var r = Array(t);
        var n = 0;
        for (; n < t; n++) {
          r[n] = arguments[n];
        }
        return t9(e, ...r);
      }
    };
    return e;
  };
  require.d(exports, {
    editorHelpers: function () {
      return W;
    },
    operationUtils: function () {
      return L;
    },
    nodeUtils: function () {
      return j;
    },
    pathUtils: function () {
      return C;
    },
    pointUtils: function () {
      return Z;
    },
    rangeUtils: function () {
      return O;
    },
    editorTransforms: function () {
      return ex;
    },
    createEditor: function () {
      return t5;
    },
    elementUtils: function () {
      return M;
    },
    debugUtils: function () {
      return U;
    },
    textUtils: function () {
      return G;
    }
  });
}