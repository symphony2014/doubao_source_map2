// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bK' to 'layoutGraph'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60274.fb5f93f4.js
         * chunkId: 60274
         * moduleId: 855238
         */
module.exports = function (module, exports, require) {
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var incrementalCounterUtil = require("incremental-counter-util") /*id: 767112*/;
  var constantCreator = require("constant-creator") /*id: 851378*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var graphDataStructureExport = require("graph-data-structure-export") /*id: 736993*/;
  class h {
    constructor() {
      var e = {};
      e._next = e._prev = e;
      this._sentinel = e;
    }
    dequeue() {
      var e = this._sentinel;
      var n = e._prev;
      if (n !== e) {
        c(n);
        return n;
      }
    }
    enqueue(e) {
      var n = this._sentinel;
      if (e._prev && e._next) {
        c(e);
      }
      e._next = n._next;
      n._next._prev = e;
      n._next = e;
      e._prev = n;
    }
    toString() {
      var e = [];
      var n = this._sentinel;
      var t = n._prev;
      while (t !== n) {
        e.push(JSON.stringify(t, f));
        t = t._prev;
      }
      return "[" + e.join(", ") + "]";
    }
  }
  function c(e) {
    e._prev._next = e._next;
    e._next._prev = e._prev;
    delete e._next;
    delete e._prev;
  }
  function f(e, n) {
    if (e !== "_next" && e !== "_prev") {
      return n;
    }
  }
  var g = constantCreator.createConstant(1);
  function l(e, n, t, o, i) {
    var s = i ? [] : undefined;
    arrayObjectForeach.arrayObjectForeach(e.inEdges(o.v), function (r) {
      var o = e.edge(r);
      var d = e.node(r.v);
      if (i) {
        s.push({
          v: r.v,
          w: r.w
        });
      }
      d.out -= o;
      v(n, t, d);
    });
    arrayObjectForeach.arrayObjectForeach(e.outEdges(o.v), function (r) {
      var o = e.edge(r);
      var i = r.w;
      var s = e.node(i);
      s.in -= o;
      v(n, t, s);
    });
    e.removeNode(o.v);
    return s;
  }
  function v(e, n, t) {
    if (t.out) {
      if (t.in) {
        e[t.out - t.in + n].enqueue(t);
      } else {
        e[e.length - 1].enqueue(t);
      }
    } else {
      e[0].enqueue(t);
    }
  }
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var dateNowUtil = require("date-now-util") /*id: 258788*/;
  function N(e, n, t, r) {
    var i;
    do {
      i = incrementalCounterUtil.incrementalCounter(r);
    } while (e.hasNode(i));
    t.dummy = n;
    e.setNode(i, t);
    return i;
  }
  function O(e) {
    var n = new graphDataStructureExport.Graph({
      multigraph: e.isMultigraph()
    }).setGraph(e.graph());
    arrayObjectForeach.arrayObjectForeach(e.nodes(), function (t) {
      if (!e.children(t).length) {
        n.setNode(t, e.node(t));
      }
    });
    arrayObjectForeach.arrayObjectForeach(e.edges(), function (t) {
      n.setEdge(t, e.edge(t));
    });
    return n;
  }
  function P(e, n) {
    var t;
    var r;
    var o = e.x;
    var i = e.y;
    var s = n.x - o;
    var d = n.y - i;
    var a = e.width / 2;
    var u = e.height / 2;
    if (!s && !d) {
      throw Error("Not possible to find intersection inside of the rectangle");
    }
    if (Math.abs(d) * a > Math.abs(s) * u) {
      if (d < 0) {
        u = -u;
      }
      t = u * s / d;
      r = u;
    } else {
      if (s < 0) {
        a = -a;
      }
      t = a;
      r = a * d / s;
    }
    return {
      x: o + t,
      y: i + r
    };
  }
  function C(e) {
    var n = collectionMapMatcher.mapWithMatcher(numericRangeUtil.createRange(j(e) + 1), function () {
      return [];
    });
    arrayObjectForeach.arrayObjectForeach(e.nodes(), function (t) {
      var r = e.node(t);
      var o = r.rank;
      if (!isUndefinedCheck.isUndefined(o)) {
        n[o][r.order] = t;
      }
    });
    return n;
  }
  function L(e, n, t, r) {
    var o = {
      width: 0,
      height: 0
    };
    if (arguments.length >= 4) {
      o.rank = t;
      o.order = r;
    }
    return N(e, "border", o, n);
  }
  function j(e) {
    return arrayMaxByUtilWrapper.getMaxBy(collectionMapMatcher.mapWithMatcher(e.nodes(), function (n) {
      var t = e.node(n).rank;
      if (!isUndefinedCheck.isUndefined(t)) {
        return t;
      }
    }));
  }
  function I(e, n) {
    dateNowUtil.getDateNow();
    return n();
  }
  function M(e, n) {
    return n();
  }
  function R(e, n, t, r, o, i) {
    var s = o[n][i - 1];
    var d = N(e, "border", {
      width: 0,
      height: 0,
      rank: i,
      borderType: n
    }, t);
    o[n][i] = d;
    e.setParent(d, r);
    if (s) {
      e.setEdge(s, d, {
        weight: 1
      });
    }
  }
  function T(e) {
    arrayObjectForeach.arrayObjectForeach(e.nodes(), function (n) {
      D(e.node(n));
    });
    arrayObjectForeach.arrayObjectForeach(e.edges(), function (n) {
      D(e.edge(n));
    });
  }
  function D(e) {
    var n = e.width;
    e.width = e.height;
    e.height = n;
  }
  function F(e) {
    e.y = -e.y;
  }
  function S(e) {
    var n = e.x;
    e.x = e.y;
    e.y = n;
  }
  var arrayMinByMatcher = require("array-min-by-matcher") /*id: 65435*/;
  function B(e) {
    var n = {};
    arrayObjectForeach.arrayObjectForeach(e.sources(), function t(r) {
      var o = e.node(r);
      if (Object.prototype.hasOwnProperty.call(n, r)) {
        return o.rank;
      }
      n[r] = true;
      var i = findMaxByUtilValue.findMaxByUtilValue(collectionMapMatcher.mapWithMatcher(e.outEdges(r), function (n) {
        return t(n.w) - e.edge(n).minlen;
      }));
      if (i === Number.POSITIVE_INFINITY || i == null) {
        i = 0;
      }
      return o.rank = i;
    });
  }
  function V(e, n) {
    return e.node(n.w).rank - e.node(n.v).rank - e.edge(n).minlen;
  }
  function q(e) {
    var n;
    var t;
    var o;
    var i;
    var s = new graphDataStructureExport.Graph({
      directed: false
    });
    var d = e.nodes()[0];
    var a = e.nodeCount();
    for (s.setNode(d, {}); n = s, t = e, arrayObjectForeach.arrayObjectForeach(n.nodes(), function e(o) {
      arrayObjectForeach.arrayObjectForeach(t.nodeEdges(o), function (r) {
        var i = r.v;
        var s = o === i ? r.w : i;
        if (!n.hasNode(s) && !V(t, r)) {
          n.setNode(s, {});
          n.setEdge(o, s, {});
          e(s);
        }
      });
    }), n.nodeCount() < a;) {
      o = function (e, n) {
        return arrayMinByMatcher.findMinByMatcher(n.edges(), function (t) {
          if (e.hasNode(t.v) !== e.hasNode(t.w)) {
            return V(n, t);
          }
        });
      }(s, e);
      i = s.hasNode(o.v) ? V(e, o) : -V(e, o);
      (function (e, n, t) {
        arrayObjectForeach.arrayObjectForeach(e.nodes(), function (e) {
          n.node(e).rank += t;
        });
      })(s, e, i);
    }
    return s;
  }
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  constantCreator.createConstant(1);
  constantCreator.createConstant(1);
  var stringLengthUnicodeAware = require("string-length-unicode-aware") /*id: 605430*/;
  function K() {}
  K.prototype = Error();
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function U(e, n, t) {
    if (!arrayIsArrayUtil.isArray(n)) {
      n = [n];
    }
    var o = (e.isDirected() ? e.successors : e.neighbors).bind(e);
    var i = [];
    var s = {};
    arrayObjectForeach.arrayObjectForeach(n, function (n) {
      if (!e.hasNode(n)) {
        throw Error("Graph does not have node: " + n);
      }
      (function e(n, t, o, i, s, d) {
        if (!Object.prototype.hasOwnProperty.call(i, t)) {
          i[t] = true;
          if (!o) {
            d.push(t);
          }
          arrayObjectForeach.arrayObjectForeach(s(t), function (t) {
            e(n, t, o, i, s, d);
          });
          if (o) {
            d.push(t);
          }
        }
      })(e, n, t === "post", s, o, i);
    });
    return i;
  }
  function J(e) {
    n = e;
    t = new graphDataStructureExport.Graph().setGraph(n.graph());
    arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
      t.setNode(e, n.node(e));
    });
    arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
      var r = t.edge(e.v, e.w) || {
        weight: 0,
        minlen: 1
      };
      var o = n.edge(e);
      t.setEdge(e.v, e.w, {
        weight: r.weight + o.weight,
        minlen: Math.max(r.minlen, o.minlen)
      });
    });
    B(e = t);
    var n;
    var t;
    var o;
    var i;
    var s = q(e);
    X(s);
    Q(s, e);
    while (o = $(s)) {
      i = ee(s, e, o);
      en(s, e, o, i);
    }
  }
  function Q(e, n) {
    var t = U(e, e.nodes(), "post");
    t = t.slice(0, t.length - 1);
    arrayObjectForeach.arrayObjectForeach(t, function (t) {
      var r;
      var o;
      var i;
      var s;
      r = e;
      o = n;
      i = t;
      s = r.node(i).parent;
      r.edge(i, s).cutvalue = W(r, o, i);
    });
  }
  function W(e, n, t) {
    var o = e.node(t).parent;
    var i = true;
    var s = n.edge(t, o);
    var d = 0;
    if (!s) {
      i = false;
      s = n.edge(o, t);
    }
    d = s.weight;
    arrayObjectForeach.arrayObjectForeach(n.nodeEdges(t), function (r) {
      var s = r.v === t;
      var a = s ? r.w : r.v;
      if (a !== o) {
        var u;
        var h;
        var c;
        var f = s === i;
        var g = n.edge(r).weight;
        d += f ? g : -g;
        u = e;
        h = t;
        c = a;
        if (u.hasEdge(h, c)) {
          var l = e.edge(t, a).cutvalue;
          d += f ? -l : l;
        }
      }
    });
    return d;
  }
  function X(e, n) {
    if (arguments.length < 2) {
      n = e.nodes()[0];
    }
    (function e(n, t, o, i, s) {
      var d = o;
      var a = n.node(i);
      t[i] = true;
      arrayObjectForeach.arrayObjectForeach(n.neighbors(i), function (r) {
        if (!Object.prototype.hasOwnProperty.call(t, r)) {
          o = e(n, t, o, r, i);
        }
      });
      a.low = d;
      a.lim = o++;
      if (s) {
        a.parent = s;
      } else {
        delete a.parent;
      }
      return o;
    })(e, {}, 1, n);
  }
  function $(e) {
    return arrayValueFinder.valueFinder(e.edges(), function (n) {
      return e.edge(n).cutvalue < 0;
    });
  }
  function ee(e, n, t) {
    var r = t.v;
    var o = t.w;
    if (!n.hasEdge(r, o)) {
      r = t.w;
      o = t.v;
    }
    var i = e.node(r);
    var s = e.node(o);
    var d = i;
    var a = false;
    if (i.lim > s.lim) {
      d = s;
      a = true;
    }
    var u = genericFilterUtil.genericFilter(n.edges(), function (n) {
      return a === et(e, e.node(n.v), d) && a !== et(e, e.node(n.w), d);
    });
    return arrayMinByMatcher.findMinByMatcher(u, function (e) {
      return V(n, e);
    });
  }
  function en(e, n, t, o) {
    var i;
    var s;
    var d;
    var a;
    var u = t.v;
    var h = t.w;
    e.removeEdge(u, h);
    e.setEdge(o.v, o.w, {});
    X(e);
    Q(e, n);
    i = e;
    s = n;
    d = arrayValueFinder.valueFinder(i.nodes(), function (e) {
      return !s.node(e).parent;
    });
    a = (a = U(i, d, "pre")).slice(1);
    arrayObjectForeach.arrayObjectForeach(a, function (e) {
      var n = i.node(e).parent;
      var t = s.edge(e, n);
      var r = false;
      if (!t) {
        t = s.edge(n, e);
        r = true;
      }
      s.node(e).rank = s.node(n).rank + (r ? t.minlen : -t.minlen);
    });
  }
  function et(e, n, t) {
    return t.low <= n.lim && n.lim <= t.lim;
  }
  require("graph-data-structure") /*id: 232945*/;
  J.initLowLimValues = X;
  J.initCutValues = Q;
  J.calcCutValue = W;
  J.leaveEdge = $;
  J.enterEdge = ee;
  J.exchangeEdges = en;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var safePropertySetter = require("safe-property-setter") /*id: 859066*/;
  function ed(e, n, t) {
    var r = -1;
    var o = e.length;
    var i = n.length;
    var s = {};
    while (++r < o) {
      var d = r < i ? n[r] : undefined;
      t(s, e[r], d);
    }
    return s;
  }
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  function eu(e, n, t) {
    for (var r; n.length && (r = lastElementHelper.getLastElement(n)).i <= t;) {
      n.pop();
      e.push(r.vs);
      t++;
    }
    return t;
  }
  function eh(e, n, t) {
    return collectionMapMatcher.mapWithMatcher(n, function (n) {
      var i;
      var s;
      i = function (e) {
        for (var n; e.hasNode(n = incrementalCounterUtil.incrementalCounter("_root")););
        return n;
      }(e);
      s = new graphDataStructureExport.Graph({
        compound: true
      }).setGraph({
        root: i
      }).setDefaultNodeLabel(function (n) {
        return e.node(n);
      });
      arrayObjectForeach.arrayObjectForeach(e.nodes(), function (o) {
        var d = e.node(o);
        var a = e.parent(o);
        if (d.rank === n || d.minRank <= n && n <= d.maxRank) {
          s.setNode(o);
          s.setParent(o, a || i);
          arrayObjectForeach.arrayObjectForeach(e[t](o), function (n) {
            var t = n.v === o ? n.w : n.v;
            var r = s.edge(t, o);
            var i = isUndefinedCheck.isUndefined(r) ? 0 : r.weight;
            s.setEdge(t, o, {
              weight: e.edge(n).weight + i
            });
          });
          if (Object.prototype.hasOwnProperty.call(d, "minRank")) {
            s.setNode(o, {
              borderLeft: d.borderLeft[n],
              borderRight: d.borderRight[n]
            });
          }
        }
      });
      return s;
    });
  }
  function ec(e, n) {
    arrayObjectForeach.arrayObjectForeach(n, function (n) {
      arrayObjectForeach.arrayObjectForeach(n, function (n, t) {
        e.node(n).order = t;
      });
    });
  }
  var objectPropertyGetter = require("object-property-getter") /*id: 570114*/;
  var objectForeachUtil = require("object-foreach-util") /*id: 529626*/;
  function el(e, n, t) {
    if (n > t) {
      var r = n;
      n = t;
      t = r;
    }
    var o = e[n];
    if (!o) {
      e[n] = o = {};
    }
    o[t] = true;
  }
  function ev(e, n) {
    var t = n && n.debugTiming ? I : M;
    t("layout", () => {
      var n = t("  buildLayoutGraph", () => {
        var n;
        var t;
        var o;
        n = e;
        t = new graphDataStructureExport.Graph({
          multigraph: true,
          compound: true
        });
        o = ex(n.graph());
        t.setGraph(throttledDeepCloneUtil.throttledDeepClone({}, eZ, ek(o, ep), throttledPathFilterStringify.throttledPathStr(o, ew)));
        arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
          var r = ex(n.node(e));
          t.setNode(e, objectDefaultsUtil.defaults(ek(r, eb), em));
          t.setParent(e, n.parent(e));
        });
        arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
          var r = ex(n.edge(e));
          t.setEdge(e, throttledDeepCloneUtil.throttledDeepClone({}, ey, ek(r, e_), throttledPathFilterStringify.throttledPathStr(r, eE)));
        });
        return t;
      });
      t("  runLayout", () => {
        var e;
        var i;
        e = n;
        (i = t)("    makeSpaceForEdgeLabels", () => {
          var n;
          var t;
          t = (n = e).graph();
          t.ranksep /= 2;
          arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
            var r = n.edge(e);
            r.minlen *= 2;
            if (r.labelpos.toLowerCase() !== "c") {
              if (t.rankdir === "TB" || t.rankdir === "BT") {
                r.width += r.labeloffset;
              } else {
                r.height += r.labeloffset;
              }
            }
          });
          return;
        });
        i("    removeSelfEdges", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
            if (e.v === e.w) {
              var t = n.node(e.v);
              t.selfEdges ||= [];
              t.selfEdges.push({
                e: e,
                label: n.edge(e)
              });
              n.removeEdge(e);
            }
          });
          return;
        });
        i("    acyclic", () => {
          var n;
          var t;
          var i;
          var c;
          var f;
          var p;
          n = e.graph().acyclicer === "greedy" ? function (e, n) {
            if (e.nodeCount() <= 1) {
              return [];
            }
            var t;
            var o;
            var i;
            var c;
            var f;
            var p;
            var Z;
            t = e;
            o = n || g;
            i = new graphDataStructureExport.Graph();
            c = 0;
            f = 0;
            arrayObjectForeach.arrayObjectForeach(t.nodes(), function (e) {
              i.setNode(e, {
                v: e,
                in: 0,
                out: 0
              });
            });
            arrayObjectForeach.arrayObjectForeach(t.edges(), function (e) {
              var n = i.edge(e.v, e.w) || 0;
              var t = o(e);
              i.setEdge(e.v, e.w, n + t);
              f = Math.max(f, i.node(e.v).out += t);
              c = Math.max(c, i.node(e.w).in += t);
            });
            p = numericRangeUtil.createRange(f + c + 3).map(function () {
              return new h();
            });
            Z = c + 1;
            arrayObjectForeach.arrayObjectForeach(i.nodes(), function (e) {
              v(p, Z, i.node(e));
            });
            var w = {
              graph: i,
              buckets: p,
              zeroIdx: Z
            };
            var b = function (e, n, t) {
              var r;
              var o = [];
              var i = n[n.length - 1];
              var s = n[0];
              while (e.nodeCount()) {
                while (r = s.dequeue()) {
                  l(e, n, t, r);
                }
                while (r = i.dequeue()) {
                  l(e, n, t, r);
                }
                if (e.nodeCount()) {
                  for (var d = n.length - 2; d > 0; --d) {
                    if (r = n[d].dequeue()) {
                      o = o.concat(l(e, n, t, r, true));
                      break;
                    }
                  }
                }
              }
              return o;
            }(w.graph, w.buckets, w.zeroIdx);
            return safeArrayFlattenUtil.safeFlattenArray(collectionMapMatcher.mapWithMatcher(b, function (n) {
              return e.outEdges(n.v, n.w);
            }));
          }(e, (t = e, function (e) {
            return t.edge(e).weight;
          })) : (i = e, c = [], f = {}, p = {}, arrayObjectForeach.arrayObjectForeach(i.nodes(), function e(n) {
            if (!Object.prototype.hasOwnProperty.call(p, n)) {
              p[n] = true;
              f[n] = true;
              arrayObjectForeach.arrayObjectForeach(i.outEdges(n), function (n) {
                if (Object.prototype.hasOwnProperty.call(f, n.w)) {
                  c.push(n);
                } else {
                  e(n.w);
                }
              });
              delete f[n];
            }
          }), c);
          arrayObjectForeach.arrayObjectForeach(n, function (n) {
            var t = e.edge(n);
            e.removeEdge(n);
            t.forwardName = n.name;
            t.reversed = true;
            e.setEdge(n.w, n.v, t, incrementalCounterUtil.incrementalCounter("rev"));
          });
          return;
        });
        i("    nestingGraph.run", () => {
          var n;
          var t;
          var o;
          var i;
          var s;
          var d;
          var a;
          var u;
          n = N(e, "root", {}, "_root");
          d = e;
          a = {};
          arrayObjectForeach.arrayObjectForeach(d.children(), function (e) {
            (function e(n, t) {
              var o = d.children(n);
              if (o && o.length) {
                arrayObjectForeach.arrayObjectForeach(o, function (n) {
                  e(n, t + 1);
                });
              }
              a[n] = t;
            })(e, 1);
          });
          t = a;
          i = (o = arrayMaxByUtilWrapper.getMaxBy(objectValuesHelper.getObjectValues(t)) - 1) * 2 + 1;
          e.graph().nestingRoot = n;
          arrayObjectForeach.arrayObjectForeach(e.edges(), function (n) {
            e.edge(n).minlen *= i;
          });
          u = e;
          s = genericReduceUtil.genericReduce(u.edges(), function (e, n) {
            return e + u.edge(n).weight;
          }, 0) + 1;
          arrayObjectForeach.arrayObjectForeach(e.children(), function (d) {
            (function e(n, t, o, i, s, d, a) {
              var u = n.children(a);
              if (!u.length) {
                if (a !== t) {
                  n.setEdge(t, a, {
                    weight: 0,
                    minlen: o
                  });
                }
                return;
              }
              var h = L(n, "_bt");
              var c = L(n, "_bb");
              var f = n.node(a);
              n.setParent(h, a);
              f.borderTop = h;
              n.setParent(c, a);
              f.borderBottom = c;
              arrayObjectForeach.arrayObjectForeach(u, function (r) {
                e(n, t, o, i, s, d, r);
                var u = n.node(r);
                var f = u.borderTop ? u.borderTop : r;
                var g = u.borderBottom ? u.borderBottom : r;
                var l = u.borderTop ? i : i * 2;
                var v = f !== g ? 1 : s - d[a] + 1;
                n.setEdge(h, f, {
                  weight: l,
                  minlen: v,
                  nestingEdge: true
                });
                n.setEdge(g, c, {
                  weight: l,
                  minlen: v,
                  nestingEdge: true
                });
              });
              if (!n.parent(a)) {
                n.setEdge(t, h, {
                  weight: 0,
                  minlen: s + d[a]
                });
              }
            })(e, n, i, s, o, t, d);
          });
          e.graph().nodeRankFactor = i;
          return;
        });
        i("    rank", () => function (e) {
          switch (e.graph().ranker) {
            case "network-simplex":
            default:
              J(e);
              break;
            case "tight-tree":
              var n;
              B(n = e);
              q(n);
              break;
            case "longest-path":
              B(e);
          }
        }(O(e)));
        i("    injectEdgeLabelProxies", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
            var t = n.edge(e);
            if (t.width && t.height) {
              var r = n.node(e.v);
              var o = {
                rank: (n.node(e.w).rank - r.rank) / 2 + r.rank,
                e: e
              };
              N(n, "edge-proxy", o, "_ep");
            }
          });
          return;
        });
        i("    removeEmptyRanks", () => {
          var n;
          var t;
          var o;
          var i;
          n = findMaxByUtilValue.findMaxByUtilValue(collectionMapMatcher.mapWithMatcher(e.nodes(), function (n) {
            return e.node(n).rank;
          }));
          t = [];
          arrayObjectForeach.arrayObjectForeach(e.nodes(), function (r) {
            var o = e.node(r).rank - n;
            t[o] ||= [];
            t[o].push(r);
          });
          o = 0;
          i = e.graph().nodeRankFactor;
          arrayObjectForeach.arrayObjectForeach(t, function (n, t) {
            if (isUndefinedCheck.isUndefined(n) && t % i != 0) {
              --o;
            } else if (o) {
              arrayObjectForeach.arrayObjectForeach(n, function (n) {
                e.node(n).rank += o;
              });
            }
          });
          return;
        });
        i("    nestingGraph.cleanup", () => {
          var n;
          n = e.graph();
          e.removeNode(n.nestingRoot);
          delete n.nestingRoot;
          arrayObjectForeach.arrayObjectForeach(e.edges(), function (n) {
            if (e.edge(n).nestingEdge) {
              e.removeEdge(n);
            }
          });
          return;
        });
        i("    normalizeRanks", () => {
          var n;
          n = findMaxByUtilValue.findMaxByUtilValue(collectionMapMatcher.mapWithMatcher(e.nodes(), function (n) {
            return e.node(n).rank;
          }));
          arrayObjectForeach.arrayObjectForeach(e.nodes(), function (t) {
            var r = e.node(t);
            if (pathArrayValidation.validatePathArray(r, "rank")) {
              r.rank -= n;
            }
          });
          return;
        });
        i("    assignRankMinMax", () => {
          var n;
          var t;
          n = e;
          t = 0;
          arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
            var r = n.node(e);
            if (r.borderTop) {
              r.minRank = n.node(r.borderTop).rank;
              r.maxRank = n.node(r.borderBottom).rank;
              t = arrayMaxByUtilWrapper.getMaxBy(t, r.maxRank);
            }
          });
          n.graph().maxRank = t;
          return;
        });
        i("    removeEdgeLabelProxies", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
            var t = n.node(e);
            if (t.dummy === "edge-proxy") {
              n.edge(t.e).labelRank = t.rank;
              n.removeNode(e);
            }
          });
          return;
        });
        i("    normalize.run", () => {
          e.graph().dummyChains = [];
          arrayObjectForeach.arrayObjectForeach(e.edges(), function (n) {
            (function (e, n) {
              var t;
              var r;
              var o = n.v;
              var i = e.node(o).rank;
              var s = n.w;
              var d = e.node(s).rank;
              var a = n.name;
              var u = e.edge(n);
              var h = u.labelRank;
              if (d !== i + 1) {
                e.removeEdge(n);
                var c = undefined;
                r = 0;
                ++i;
                for (; i < d; ++r, ++i) {
                  u.points = [];
                  t = N(e, "edge", c = {
                    width: 0,
                    height: 0,
                    edgeLabel: u,
                    edgeObj: n,
                    rank: i
                  }, "_d");
                  if (i === h) {
                    c.width = u.width;
                    c.height = u.height;
                    c.dummy = "edge-label";
                    c.labelpos = u.labelpos;
                  }
                  e.setEdge(o, t, {
                    weight: u.weight
                  }, a);
                  if (r === 0) {
                    e.graph().dummyChains.push(t);
                  }
                  o = t;
                }
                e.setEdge(o, s, {
                  weight: u.weight
                }, a);
              }
            })(e, n);
          });
        });
        i("    parentDummyChains", () => {
          var n;
          var t;
          var o;
          var i;
          t = e;
          o = {};
          i = 0;
          arrayObjectForeach.arrayObjectForeach(t.children(), function e(n) {
            var s = i;
            arrayObjectForeach.arrayObjectForeach(t.children(n), e);
            o[n] = {
              low: s,
              lim: i++
            };
          });
          n = o;
          arrayObjectForeach.arrayObjectForeach(e.graph().dummyChains, function (t) {
            var r = e.node(t);
            var o = r.edgeObj;
            var i = function (e, n, t, r) {
              var o;
              var i;
              var s = [];
              var d = [];
              var a = Math.min(n[t].low, n[r].low);
              var u = Math.max(n[t].lim, n[r].lim);
              o = t;
              do {
                s.push(o = e.parent(o));
              } while (o && (n[o].low > a || u > n[o].lim));
              i = o;
              o = r;
              while ((o = e.parent(o)) !== i) {
                d.push(o);
              }
              return {
                path: s.concat(d.reverse()),
                lca: i
              };
            }(e, n, o.v, o.w);
            var s = i.path;
            var d = i.lca;
            var a = 0;
            var u = s[0];
            var h = true;
            while (t !== o.w) {
              r = e.node(t);
              if (h) {
                while ((u = s[a]) !== d && e.node(u).maxRank < r.rank) {
                  a++;
                }
                if (u === d) {
                  h = false;
                }
              }
              if (!h) {
                while (a < s.length - 1 && e.node(u = s[a + 1]).minRank <= r.rank) {
                  a++;
                }
                u = s[a];
              }
              e.setParent(t, u);
              t = e.successors(t)[0];
            }
          });
          return;
        });
        i("    addBorderSegments", () => {
          arrayObjectForeach.arrayObjectForeach(e.children(), function n(t) {
            var o = e.children(t);
            var i = e.node(t);
            if (o.length) {
              arrayObjectForeach.arrayObjectForeach(o, n);
            }
            if (Object.prototype.hasOwnProperty.call(i, "minRank")) {
              i.borderLeft = [];
              i.borderRight = [];
              var s = i.minRank;
              var d = i.maxRank + 1;
              for (; s < d; ++s) {
                R(e, "borderLeft", "_bl", t, i, s);
                R(e, "borderRight", "_br", t, i, s);
              }
            }
          });
        });
        i("    order", () => function (e) {
          var n = j(e);
          var t = eh(e, numericRangeUtil.createRange(1, n + 1), "inEdges");
          var o = eh(e, numericRangeUtil.createRange(n - 1, -1, -1), "outEdges");
          h = {};
          c = genericFilterUtil.genericFilter(e.nodes(), function (n) {
            return !e.children(n).length;
          });
          f = arrayMaxByUtilWrapper.getMaxBy(collectionMapMatcher.mapWithMatcher(c, function (n) {
            return e.node(n).rank;
          }));
          g = collectionMapMatcher.mapWithMatcher(numericRangeUtil.createRange(f + 1), function () {
            return [];
          });
          l = throttledOrderByUtil.throttledOrderBy(c, function (n) {
            return e.node(n).rank;
          });
          arrayObjectForeach.arrayObjectForeach(l, function n(t) {
            if (!pathArrayValidation.validatePathArray(h, t)) {
              h[t] = true;
              g[e.node(t).rank].push(t);
              arrayObjectForeach.arrayObjectForeach(e.successors(t), n);
            }
          });
          var i = g;
          ec(e, i);
          var h;
          var c;
          var f;
          var g;
          var l;
          var v;
          var p = Number.POSITIVE_INFINITY;
          var w = 0;
          var m = 0;
          for (; m < 4; ++w, ++m) {
            (function (e, n) {
              var t = new graphDataStructureExport.Graph();
              arrayObjectForeach.arrayObjectForeach(e, function (e) {
                var o;
                var i;
                var a;
                var u = e.graph().root;
                var h = function e(n, t, o, i) {
                  var a;
                  var u;
                  var h;
                  var c;
                  var f;
                  var g;
                  var l;
                  var v;
                  var p;
                  var w;
                  var b;
                  var m;
                  var _ = n.children(t);
                  var E = n.node(t);
                  var k = E ? E.borderLeft : undefined;
                  var x = E ? E.borderRight : undefined;
                  var N = {};
                  if (k) {
                    _ = genericFilterUtil.genericFilter(_, function (e) {
                      return e !== k && e !== x;
                    });
                  }
                  a = _;
                  var O = collectionMapMatcher.mapWithMatcher(a, function (e) {
                    var t = n.inEdges(e);
                    if (!t.length) {
                      return {
                        v: e
                      };
                    }
                    var r = genericReduceUtil.genericReduce(t, function (e, t) {
                      var r = n.edge(t);
                      var o = n.node(t.v);
                      return {
                        sum: e.sum + r.weight * o.order,
                        weight: e.weight + r.weight
                      };
                    }, {
                      sum: 0,
                      weight: 0
                    });
                    return {
                      v: e,
                      barycenter: r.sum / r.weight,
                      weight: r.weight
                    };
                  });
                  arrayObjectForeach.arrayObjectForeach(O, function (t) {
                    if (n.children(t.v).length) {
                      var r;
                      var s;
                      var d = e(n, t.v, o, i);
                      N[t.v] = d;
                      if (Object.prototype.hasOwnProperty.call(d, "barycenter")) {
                        r = t;
                        s = d;
                        if (isUndefinedCheck.isUndefined(r.barycenter)) {
                          r.barycenter = s.barycenter;
                          r.weight = s.weight;
                        } else {
                          r.barycenter = (r.barycenter * r.weight + s.barycenter * s.weight) / (r.weight + s.weight);
                          r.weight += s.weight;
                        }
                      }
                    }
                  });
                  u = {};
                  arrayObjectForeach.arrayObjectForeach(O, function (e, n) {
                    var t = u[e.v] = {
                      indegree: 0,
                      in: [],
                      out: [],
                      vs: [e.v],
                      i: n
                    };
                    if (!isUndefinedCheck.isUndefined(e.barycenter)) {
                      t.barycenter = e.barycenter;
                      t.weight = e.weight;
                    }
                  });
                  arrayObjectForeach.arrayObjectForeach(o.edges(), function (e) {
                    var n = u[e.v];
                    var t = u[e.w];
                    if (!isUndefinedCheck.isUndefined(n) && !isUndefinedCheck.isUndefined(t)) {
                      t.indegree++;
                      n.out.push(u[e.w]);
                    }
                  });
                  var P = function (e) {
                    var n = [];
                    while (e.length) {
                      var t = e.pop();
                      n.push(t);
                      arrayObjectForeach.arrayObjectForeach(t.in.reverse(), function (e) {
                        return function (n) {
                          if (!n.merged && (isUndefinedCheck.isUndefined(n.barycenter) || isUndefinedCheck.isUndefined(e.barycenter) || n.barycenter >= e.barycenter)) {
                            (function (e, n) {
                              var t = 0;
                              var r = 0;
                              if (e.weight) {
                                t += e.barycenter * e.weight;
                                r += e.weight;
                              }
                              if (n.weight) {
                                t += n.barycenter * n.weight;
                                r += n.weight;
                              }
                              e.vs = n.vs.concat(e.vs);
                              e.barycenter = t / r;
                              e.weight = r;
                              e.i = Math.min(n.i, e.i);
                              n.merged = true;
                            })(e, n);
                          }
                        };
                      }(t));
                      arrayObjectForeach.arrayObjectForeach(t.out, function (n) {
                        return function (t) {
                          t.in.push(n);
                          if (--t.indegree == 0) {
                            e.push(t);
                          }
                        };
                      }(t));
                    }
                    return collectionMapMatcher.mapWithMatcher(genericFilterUtil.genericFilter(n, function (e) {
                      return !e.merged;
                    }), function (e) {
                      return throttledPathFilterStringify.throttledPathStr(e, ["vs", "i", "barycenter", "weight"]);
                    });
                  }(genericFilterUtil.genericFilter(u, function (e) {
                    return !e.indegree;
                  }));
                  (function (e, n) {
                    arrayObjectForeach.arrayObjectForeach(e, function (e) {
                      e.vs = safeArrayFlattenUtil.safeFlattenArray(e.vs.map(function (e) {
                        if (n[e]) {
                          return n[e].vs;
                        } else {
                          return e;
                        }
                      }));
                    });
                  })(P, N);
                  g = (h = function (e) {
                    return Object.prototype.hasOwnProperty.call(e, "barycenter");
                  }, c = {
                    lhs: [],
                    rhs: []
                  }, arrayObjectForeach.arrayObjectForeach(P, function (e) {
                    if (h(e)) {
                      c.lhs.push(e);
                    } else {
                      c.rhs.push(e);
                    }
                  }), f = c).lhs;
                  l = throttledOrderByUtil.throttledOrderBy(f.rhs, function (e) {
                    return -e.i;
                  });
                  v = [];
                  p = 0;
                  w = 0;
                  b = 0;
                  g.sort(function (e) {
                    return function (n, t) {
                      if (n.barycenter < t.barycenter) {
                        return -1;
                      } else if (n.barycenter > t.barycenter) {
                        return 1;
                      } else if (e) {
                        return t.i - n.i;
                      } else {
                        return n.i - t.i;
                      }
                    };
                  }(!!i));
                  b = eu(v, l, b);
                  arrayObjectForeach.arrayObjectForeach(g, function (e) {
                    b += e.vs.length;
                    v.push(e.vs);
                    p += e.barycenter * e.weight;
                    w += e.weight;
                    b = eu(v, l, b);
                  });
                  m = {
                    vs: safeArrayFlattenUtil.safeFlattenArray(v)
                  };
                  if (w) {
                    m.barycenter = p / w;
                    m.weight = w;
                  }
                  var C = m;
                  if (k && (C.vs = safeArrayFlattenUtil.safeFlattenArray([k, C.vs, x]), n.predecessors(k).length)) {
                    var L = n.node(n.predecessors(k)[0]);
                    var j = n.node(n.predecessors(x)[0]);
                    if (!Object.prototype.hasOwnProperty.call(C, "barycenter")) {
                      C.barycenter = 0;
                      C.weight = 0;
                    }
                    C.barycenter = (C.barycenter * C.weight + L.order + j.order) / (C.weight + 2);
                    C.weight += 2;
                  }
                  return C;
                }(e, u, t, n);
                arrayObjectForeach.arrayObjectForeach(h.vs, function (n, t) {
                  e.node(n).order = t;
                });
                o = h.vs;
                a = {};
                arrayObjectForeach.arrayObjectForeach(o, function (n) {
                  var r;
                  var o;
                  var s = e.parent(n);
                  while (s) {
                    if (r = e.parent(s)) {
                      o = a[r];
                      a[r] = s;
                    } else {
                      o = i;
                      i = s;
                    }
                    if (o && o !== s) {
                      t.setEdge(o, s);
                      return;
                    }
                    s = r;
                  }
                });
              });
            })(w % 2 ? t : o, w % 4 >= 2);
            i = C(e);
            var _ = function (e, n) {
              var t = 0;
              var o = 1;
              for (; o < n.length; ++o) {
                t += function (e, n, t) {
                  var o = ed(t || [], collectionMapMatcher.mapWithMatcher(t, function (e, n) {
                    return n;
                  }) || [], safePropertySetter.setPropertyValue);
                  var i = safeArrayFlattenUtil.safeFlattenArray(collectionMapMatcher.mapWithMatcher(n, function (n) {
                    return throttledOrderByUtil.throttledOrderBy(collectionMapMatcher.mapWithMatcher(e.outEdges(n), function (n) {
                      return {
                        pos: o[n.w],
                        weight: e.edge(n).weight
                      };
                    }), "pos");
                  }));
                  var a = 1;
                  while (a < t.length) {
                    a <<= 1;
                  }
                  var u = a * 2 - 1;
                  a -= 1;
                  var h = collectionMapMatcher.mapWithMatcher(Array(u), function () {
                    return 0;
                  });
                  var c = 0;
                  arrayObjectForeach.arrayObjectForeach(i.forEach(function (e) {
                    var n = e.pos + a;
                    h[n] += e.weight;
                    var t = 0;
                    while (n > 0) {
                      if (n % 2) {
                        t += h[n + 1];
                      }
                      n = n - 1 >> 1;
                      h[n] += e.weight;
                    }
                    c += e.weight * t;
                  }));
                  return c;
                }(e, n[o - 1], n[o]);
              }
              return t;
            }(e, i);
            if (_ < p) {
              m = 0;
              v = deepCloneWrapper_1.deepClone(i);
              p = _;
            }
          }
          ec(e, v);
        }(e));
        i("    insertSelfEdges", () => {
          var n;
          var t;
          t = C(n = e);
          arrayObjectForeach.arrayObjectForeach(t, function (e) {
            var t = 0;
            arrayObjectForeach.arrayObjectForeach(e, function (e, o) {
              var i = n.node(e);
              i.order = o + t;
              arrayObjectForeach.arrayObjectForeach(i.selfEdges, function (e) {
                N(n, "selfedge", {
                  width: e.label.width,
                  height: e.label.height,
                  rank: i.rank,
                  order: o + ++t,
                  e: e.e,
                  label: e.label
                }, "_se");
              });
              delete i.selfEdges;
            });
          });
          return;
        });
        i("    adjustCoordinateSystem", () => {
          var n;
          if ((n = e.graph().rankdir.toLowerCase()) === "lr" || n === "rl") {
            T(e);
          }
        });
        i("    position", () => {
          var n;
          var t;
          var o;
          var i;
          var s;
          var h;
          var c;
          var f;
          var g;
          var l;
          var v;
          var Z;
          var w;
          var y;
          var k;
          var x;
          y = C(w = n = O(n = e));
          k = w.graph().ranksep;
          x = 0;
          arrayObjectForeach.arrayObjectForeach(y, function (e) {
            var n = arrayMaxByUtilWrapper.getMaxBy(collectionMapMatcher.mapWithMatcher(e, function (e) {
              return w.node(e).height;
            }));
            arrayObjectForeach.arrayObjectForeach(e, function (e) {
              w.node(e).y = x + n / 2;
            });
            x += n + k;
          });
          objectPropertyGetter.getProperty((i = C(t = n), h = throttledDeepCloneUtil.throttledDeepClone((s = {}, genericReduceUtil.genericReduce(i, function (e, n) {
            var o = 0;
            var i = 0;
            var d = e.length;
            var a = lastElementHelper.getLastElement(n);
            arrayObjectForeach.arrayObjectForeach(n, function (e, u) {
              var h = function (e, n) {
                if (e.node(n).dummy) {
                  return arrayValueFinder.valueFinder(e.predecessors(n), function (n) {
                    return e.node(n).dummy;
                  });
                }
              }(t, e);
              var c = h ? t.node(h).order : d;
              if (h || e === a) {
                arrayObjectForeach.arrayObjectForeach(n.slice(i, u + 1), function (e) {
                  arrayObjectForeach.arrayObjectForeach(t.predecessors(e), function (n) {
                    var r = t.node(n);
                    var i = r.order;
                    if ((i < o || c < i) && (!r.dummy || !t.node(e).dummy)) {
                      el(s, n, e);
                    }
                  });
                });
                i = u + 1;
                o = c;
              }
            });
            return n;
          }), s), function (e, n) {
            var t = {};
            function o(n, o, i, s, d) {
              var u;
              arrayObjectForeach.arrayObjectForeach(numericRangeUtil.createRange(o, i), function (o) {
                u = n[o];
                if (e.node(u).dummy) {
                  arrayObjectForeach.arrayObjectForeach(e.predecessors(u), function (n) {
                    var r = e.node(n);
                    if (r.dummy && (r.order < s || r.order > d)) {
                      el(t, n, u);
                    }
                  });
                }
              });
            }
            genericReduceUtil.genericReduce(n, function (n, t) {
              var i;
              var s = -1;
              var d = 0;
              arrayObjectForeach.arrayObjectForeach(t, function (r, a) {
                if (e.node(r).dummy === "border") {
                  var u = e.predecessors(r);
                  if (u.length) {
                    i = e.node(u[0]).order;
                    o(t, d, a, s, i);
                    d = a;
                    s = i;
                  }
                }
                o(t, d, t.length, i, n.length);
              });
              return t;
            });
            return t;
          }(t, i)), c = {}, arrayObjectForeach.arrayObjectForeach(["u", "d"], function (e) {
            o = e === "u" ? i : objectValuesHelper.getObjectValues(i).reverse();
            arrayObjectForeach.arrayObjectForeach(["l", "r"], function (n) {
              if (n === "r") {
                o = collectionMapMatcher.mapWithMatcher(o, function (e) {
                  return objectValuesHelper.getObjectValues(e).reverse();
                });
              }
              var i;
              var s;
              var a;
              var f;
              var g = (e === "u" ? t.predecessors : t.successors).bind(t);
              i = o;
              s = {};
              a = {};
              f = {};
              arrayObjectForeach.arrayObjectForeach(i, function (e) {
                arrayObjectForeach.arrayObjectForeach(e, function (e, n) {
                  s[e] = e;
                  a[e] = e;
                  f[e] = n;
                });
              });
              arrayObjectForeach.arrayObjectForeach(i, function (e) {
                var n = -1;
                arrayObjectForeach.arrayObjectForeach(e, function (e) {
                  var t = g(e);
                  if (t.length) {
                    var r = ((t = throttledOrderByUtil.throttledOrderBy(t, function (e) {
                      return f[e];
                    })).length - 1) / 2;
                    var o = Math.floor(r);
                    var i = Math.ceil(r);
                    for (; o <= i; ++o) {
                      var d = t[o];
                      if (a[e] === e && n < f[d] && !function (e, n, t) {
                        if (n > t) {
                          var r = n;
                          n = t;
                          t = r;
                        }
                        return !!e[n] && Object.prototype.hasOwnProperty.call(e[n], t);
                      }(h, e, d)) {
                        a[d] = e;
                        a[e] = s[e] = s[d];
                        n = f[d];
                      }
                    }
                  }
                });
              });
              var l = {
                root: s,
                align: a
              };
              var v = function (e, n, t, o, i) {
                var s;
                var d;
                var a;
                var h;
                var c;
                var f;
                var g;
                var l;
                var v;
                var p;
                var Z = {};
                s = e;
                d = n;
                a = t;
                h = i;
                l = new graphDataStructureExport.Graph();
                c = (v = s.graph()).nodesep;
                f = v.edgesep;
                g = h;
                p = function (e, n, t) {
                  var r;
                  var o;
                  var i = e.node(n);
                  var s = e.node(t);
                  r = 0 + i.width / 2;
                  if (Object.prototype.hasOwnProperty.call(i, "labelpos")) {
                    switch (i.labelpos.toLowerCase()) {
                      case "l":
                        o = -i.width / 2;
                        break;
                      case "r":
                        o = i.width / 2;
                    }
                  }
                  if (o) {
                    r += g ? o : -o;
                  }
                  o = 0;
                  r += (i.dummy ? f : c) / 2;
                  r += (s.dummy ? f : c) / 2;
                  r += s.width / 2;
                  if (Object.prototype.hasOwnProperty.call(s, "labelpos")) {
                    switch (s.labelpos.toLowerCase()) {
                      case "l":
                        o = s.width / 2;
                        break;
                      case "r":
                        o = -s.width / 2;
                    }
                  }
                  if (o) {
                    r += g ? o : -o;
                  }
                  o = 0;
                  return r;
                };
                arrayObjectForeach.arrayObjectForeach(d, function (e) {
                  var n;
                  arrayObjectForeach.arrayObjectForeach(e, function (e) {
                    var t = a[e];
                    l.setNode(t);
                    if (n) {
                      var r = a[n];
                      var o = l.edge(r, t);
                      l.setEdge(r, t, Math.max(p(s, e, n), o || 0));
                    }
                    n = e;
                  });
                });
                var w = l;
                var b = i ? "borderLeft" : "borderRight";
                function m(e, n) {
                  var t = w.nodes();
                  var r = t.pop();
                  var o = {};
                  while (r) {
                    if (o[r]) {
                      e(r);
                    } else {
                      o[r] = true;
                      t.push(r);
                      t = t.concat(n(r));
                    }
                    r = t.pop();
                  }
                }
                m(function (e) {
                  Z[e] = w.inEdges(e).reduce(function (e, n) {
                    return Math.max(e, Z[n.v] + w.edge(n));
                  }, 0);
                }, w.predecessors.bind(w));
                m(function (n) {
                  var t = w.outEdges(n).reduce(function (e, n) {
                    return Math.min(e, Z[n.w] - w.edge(n));
                  }, Number.POSITIVE_INFINITY);
                  var r = e.node(n);
                  if (t !== Number.POSITIVE_INFINITY && r.borderType !== b) {
                    Z[n] = Math.max(Z[n], t);
                  }
                }, w.successors.bind(w));
                arrayObjectForeach.arrayObjectForeach(o, function (e) {
                  Z[e] = Z[t[e]];
                });
                return Z;
              }(t, o, l.root, l.align, n === "r");
              if (n === "r") {
                v = safeObjectPropertyMap.safeObjectMap(v, function (e) {
                  return -e;
                });
              }
              c[e + n] = v;
            });
          }), f = arrayMinByMatcher.findMinByMatcher(objectValuesHelper.getObjectValues(c), function (e) {
            var n = Number.NEGATIVE_INFINITY;
            var r = Number.POSITIVE_INFINITY;
            objectForeachUtil.createForEach(e, function (e, o) {
              var i;
              var s;
              i = t;
              s = o;
              var d = i.node(s).width / 2;
              n = Math.max(e + d, n);
              r = Math.min(e - d, r);
            });
            return n - r;
          }), g = objectValuesHelper.getObjectValues(f), l = findMaxByUtilValue.findMaxByUtilValue(g), v = arrayMaxByUtilWrapper.getMaxBy(g), arrayObjectForeach.arrayObjectForeach(["u", "d"], function (e) {
            arrayObjectForeach.arrayObjectForeach(["l", "r"], function (n) {
              var t;
              var r = e + n;
              var o = c[r];
              if (o !== f) {
                var i = objectValuesHelper.getObjectValues(o);
                if (t = n === "l" ? l - findMaxByUtilValue.findMaxByUtilValue(i) : v - arrayMaxByUtilWrapper.getMaxBy(i)) {
                  c[r] = safeObjectPropertyMap.safeObjectMap(o, function (e) {
                    return e + t;
                  });
                }
              }
            });
          }), Z = t.graph().align, safeObjectPropertyMap.safeObjectMap(c.ul, function (e, n) {
            if (Z) {
              return c[Z.toLowerCase()][n];
            }
            var t = throttledOrderByUtil.throttledOrderBy(collectionMapMatcher.mapWithMatcher(c, n));
            return (t[1] + t[2]) / 2;
          })), function (e, t) {
            n.node(t).x = e;
          });
        });
        i("    positionSelfEdges", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
            var t = n.node(e);
            if (t.dummy === "selfedge") {
              var r = n.node(t.e.v);
              var o = r.x + r.width / 2;
              var i = r.y;
              var s = t.x - o;
              var d = r.height / 2;
              n.setEdge(t.e, t.label);
              n.removeNode(e);
              t.label.points = [{
                x: o + s * 2 / 3,
                y: i - d
              }, {
                x: o + s * 5 / 6,
                y: i - d
              }, {
                x: o + s,
                y: i
              }, {
                x: o + s * 5 / 6,
                y: i + d
              }, {
                x: o + s * 2 / 3,
                y: i + d
              }];
              t.label.x = t.x;
              t.label.y = t.y;
            }
          });
          return;
        });
        i("    removeBorderNodes", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
            if (n.children(e).length) {
              var t = n.node(e);
              var r = n.node(t.borderTop);
              var o = n.node(t.borderBottom);
              var i = n.node(lastElementHelper.getLastElement(t.borderLeft));
              var s = n.node(lastElementHelper.getLastElement(t.borderRight));
              t.width = Math.abs(s.x - i.x);
              t.height = Math.abs(o.y - r.y);
              t.x = i.x + t.width / 2;
              t.y = r.y + t.height / 2;
            }
          });
          arrayObjectForeach.arrayObjectForeach(n.nodes(), function (e) {
            if (n.node(e).dummy === "border") {
              n.removeNode(e);
            }
          });
          return;
        });
        i("    normalize.undo", () => {
          arrayObjectForeach.arrayObjectForeach(e.graph().dummyChains, function (n) {
            var t;
            var r = e.node(n);
            var o = r.edgeLabel;
            for (e.setEdge(r.edgeObj, o); r.dummy;) {
              t = e.successors(n)[0];
              e.removeNode(n);
              o.points.push({
                x: r.x,
                y: r.y
              });
              if (r.dummy === "edge-label") {
                o.x = r.x;
                o.y = r.y;
                o.width = r.width;
                o.height = r.height;
              }
              n = t;
              r = e.node(n);
            }
          });
        });
        i("    fixupEdgeLabelCoords", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
            var t = n.edge(e);
            if (Object.prototype.hasOwnProperty.call(t, "x")) {
              if (t.labelpos === "l" || t.labelpos === "r") {
                t.width -= t.labeloffset;
              }
              switch (t.labelpos) {
                case "l":
                  t.x -= t.width / 2 + t.labeloffset;
                  break;
                case "r":
                  t.x += t.width / 2 + t.labeloffset;
              }
            }
          });
          return;
        });
        i("    undoCoordinateSystem", () => {
          var n;
          var t;
          var o;
          if ((n = e.graph().rankdir.toLowerCase()) === "bt" || n === "rl") {
            t = e;
            arrayObjectForeach.arrayObjectForeach(t.nodes(), function (e) {
              F(t.node(e));
            });
            arrayObjectForeach.arrayObjectForeach(t.edges(), function (e) {
              var n = t.edge(e);
              arrayObjectForeach.arrayObjectForeach(n.points, F);
              if (Object.prototype.hasOwnProperty.call(n, "y")) {
                F(n);
              }
            });
          }
          if (n === "lr" || n === "rl") {
            o = e;
            arrayObjectForeach.arrayObjectForeach(o.nodes(), function (e) {
              S(o.node(e));
            });
            arrayObjectForeach.arrayObjectForeach(o.edges(), function (e) {
              var n = o.edge(e);
              arrayObjectForeach.arrayObjectForeach(n.points, S);
              if (Object.prototype.hasOwnProperty.call(n, "x")) {
                S(n);
              }
            });
            T(e);
          }
        });
        i("    translateGraph", () => function (e) {
          var n = Number.POSITIVE_INFINITY;
          var t = 0;
          var o = Number.POSITIVE_INFINITY;
          var i = 0;
          var s = e.graph();
          var d = s.marginx || 0;
          var a = s.marginy || 0;
          function u(e) {
            var r = e.x;
            var s = e.y;
            var d = e.width;
            var a = e.height;
            n = Math.min(n, r - d / 2);
            t = Math.max(t, r + d / 2);
            o = Math.min(o, s - a / 2);
            i = Math.max(i, s + a / 2);
          }
          arrayObjectForeach.arrayObjectForeach(e.nodes(), function (n) {
            u(e.node(n));
          });
          arrayObjectForeach.arrayObjectForeach(e.edges(), function (n) {
            var t = e.edge(n);
            if (Object.prototype.hasOwnProperty.call(t, "x")) {
              u(t);
            }
          });
          n -= d;
          o -= a;
          arrayObjectForeach.arrayObjectForeach(e.nodes(), function (t) {
            var r = e.node(t);
            r.x -= n;
            r.y -= o;
          });
          arrayObjectForeach.arrayObjectForeach(e.edges(), function (t) {
            var i = e.edge(t);
            arrayObjectForeach.arrayObjectForeach(i.points, function (e) {
              e.x -= n;
              e.y -= o;
            });
            if (Object.prototype.hasOwnProperty.call(i, "x")) {
              i.x -= n;
            }
            if (Object.prototype.hasOwnProperty.call(i, "y")) {
              i.y -= o;
            }
          });
          s.width = t - n + d;
          s.height = i - o + a;
        }(e));
        i("    assignNodeIntersects", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
            var t;
            var r;
            var o = n.edge(e);
            var i = n.node(e.v);
            var s = n.node(e.w);
            if (o.points) {
              t = o.points[0];
              r = o.points[o.points.length - 1];
            } else {
              o.points = [];
              t = s;
              r = i;
            }
            o.points.unshift(P(i, t));
            o.points.push(P(s, r));
          });
          return;
        });
        i("    reversePoints", () => {
          var n;
          n = e;
          arrayObjectForeach.arrayObjectForeach(n.edges(), function (e) {
            var t = n.edge(e);
            if (t.reversed) {
              t.points.reverse();
            }
          });
          return;
        });
        i("    acyclic.undo", () => {
          arrayObjectForeach.arrayObjectForeach(e.edges(), function (n) {
            var t = e.edge(n);
            if (t.reversed) {
              e.removeEdge(n);
              var r = t.forwardName;
              delete t.reversed;
              delete t.forwardName;
              e.setEdge(n.w, n.v, t, r);
            }
          });
        });
        return;
      });
      t("  updateInputGraph", () => {
        var t;
        var o;
        t = e;
        o = n;
        arrayObjectForeach.arrayObjectForeach(t.nodes(), function (e) {
          var n = t.node(e);
          var r = o.node(e);
          if (n) {
            n.x = r.x;
            n.y = r.y;
            if (o.children(e).length) {
              n.width = r.width;
              n.height = r.height;
            }
          }
        });
        arrayObjectForeach.arrayObjectForeach(t.edges(), function (e) {
          var n = t.edge(e);
          var r = o.edge(e);
          n.points = r.points;
          if (Object.prototype.hasOwnProperty.call(r, "x")) {
            n.x = r.x;
            n.y = r.y;
          }
        });
        t.graph().width = o.graph().width;
        t.graph().height = o.graph().height;
        return;
      });
    });
  }
  var ep = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
  var eZ = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
  };
  var ew = ["acyclicer", "ranker", "rankdir", "align"];
  var eb = ["width", "height"];
  var em = {
    width: 0,
    height: 0
  };
  var e_ = ["minlen", "weight", "width", "height", "labeloffset"];
  var ey = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  };
  var eE = ["labelpos"];
  function ek(e, n) {
    return safeObjectPropertyMap.safeObjectMap(throttledPathFilterStringify.throttledPathStr(e, n), Number);
  }
  function ex(e) {
    var n = {};
    arrayObjectForeach.arrayObjectForeach(e, function (e, t) {
      n[t.toLowerCase()] = e;
    });
    return n;
  }
  require.d(exports, {
    layoutGraph: function () {
      return ev;
    }
  });
}