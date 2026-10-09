// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(855810) to 'cose-layout-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17826.af03783e.js
         * chunkId: 17826
         * moduleId: 754977
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var i;
    t = {
      658: e => {
        e.exports = Object.assign != null ? Object.assign.bind(Object) : function (e) {
          var t = arguments.length;
          var i = Array(t > 1 ? t - 1 : 0);
          var n = 1;
          for (; n < t; n++) {
            i[n - 1] = arguments[n];
          }
          i.forEach(function (t) {
            Object.keys(t).forEach(function (i) {
              return e[i] = t[i];
            });
          });
          return e;
        };
      },
      548: (e, t, i) => {
        function n(e, t) {
          if (Array.isArray(e)) {
            return e;
          }
          if (Symbol.iterator in Object(e)) {
            return function (e, t) {
              var i = [];
              var n = true;
              var r = false;
              var o = undefined;
              try {
                var a;
                var s = e[Symbol.iterator]();
                for (; !(n = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); n = true);
              } catch (e) {
                r = true;
                o = e;
              } finally {
                try {
                  if (!n && s.return) {
                    s.return();
                  }
                } finally {
                  if (r) {
                    throw o;
                  }
                }
              }
              return i;
            }(e, t);
          }
          throw TypeError("Invalid attempt to destructure non-iterable instance");
        }
        var r = i(140).layoutBase.LinkedList;
        var o = {};
        o.getTopMostNodes = function (e) {
          var t = {};
          var i = 0;
          for (; i < e.length; i++) {
            t[e[i].id()] = true;
          }
          return e.filter(function (e, i) {
            if (typeof e == "number") {
              e = i;
            }
            for (var n = e.parent()[0]; n != null;) {
              if (t[n.id()]) {
                return false;
              }
              n = n.parent()[0];
            }
            return true;
          });
        };
        o.connectComponents = function (e, t, i, n) {
          var o = new r();
          var a = new Set();
          var s = [];
          var l = undefined;
          var d = undefined;
          var c = undefined;
          var f = false;
          var u = 1;
          var h = [];
          var g = [];
          do {
            (function () {
              var n = e.collection();
              g.push(n);
              var r = i[0];
              var p = e.collection();
              p.merge(r).merge(r.descendants().intersection(t));
              s.push(r);
              p.forEach(function (e) {
                o.push(e);
                a.add(e);
                n.merge(e);
              });
              while (o.length != 0) {
                (function () {
                  r = o.shift();
                  var d = e.collection();
                  r.neighborhood().nodes().forEach(function (e) {
                    if (t.intersection(r.edgesWith(e)).length > 0) {
                      d.merge(e);
                    }
                  });
                  for (var c = 0; c < d.length; c++) {
                    var f = d[c];
                    if ((l = i.intersection(f.union(f.ancestors()))) != null && !a.has(l[0])) {
                      l.union(l.descendants()).forEach(function (e) {
                        o.push(e);
                        a.add(e);
                        n.merge(e);
                        if (i.has(e)) {
                          s.push(e);
                        }
                      });
                    }
                  }
                })();
              }
              n.forEach(function (e) {
                t.intersection(e.connectedEdges()).forEach(function (e) {
                  if (n.has(e.source()) && n.has(e.target())) {
                    n.merge(e);
                  }
                });
              });
              if (s.length == i.length) {
                f = true;
              }
              if (!f || f && u > 1) {
                c = (d = s[0]).connectedEdges().length;
                s.forEach(function (e) {
                  if (e.connectedEdges().length < c) {
                    c = e.connectedEdges().length;
                    d = e;
                  }
                });
                h.push(d.id());
                var y = e.collection();
                y.merge(s[0]);
                s.forEach(function (e) {
                  y.merge(e);
                });
                s = [];
                i = i.difference(y);
                u++;
              }
            })();
          } while (!f);
          if (n && h.length > 0) {
            n.set("dummy" + (n.size + 1), h);
          }
          return g;
        };
        o.relocateComponent = function (e, t, i) {
          if (!i.fixedNodeConstraint) {
            var r = Number.POSITIVE_INFINITY;
            var o = Number.NEGATIVE_INFINITY;
            var a = Number.POSITIVE_INFINITY;
            var s = Number.NEGATIVE_INFINITY;
            if (i.quality == "draft") {
              var l = true;
              var d = false;
              var c = undefined;
              try {
                var f;
                var u = t.nodeIndexes[Symbol.iterator]();
                for (; !(l = (f = u.next()).done); l = true) {
                  var h = f.value;
                  var g = n(h, 2);
                  var p = g[0];
                  var y = g[1];
                  var m = i.cy.getElementById(p);
                  if (m) {
                    var v = m.boundingBox();
                    var E = t.xCoords[y] - v.w / 2;
                    var x = t.xCoords[y] + v.w / 2;
                    var C = t.yCoords[y] - v.h / 2;
                    var T = t.yCoords[y] + v.h / 2;
                    if (E < r) {
                      r = E;
                    }
                    if (x > o) {
                      o = x;
                    }
                    if (C < a) {
                      a = C;
                    }
                    if (T > s) {
                      s = T;
                    }
                  }
                }
              } catch (e) {
                d = true;
                c = e;
              } finally {
                try {
                  if (!l && u.return) {
                    u.return();
                  }
                } finally {
                  if (d) {
                    throw c;
                  }
                }
              }
              var N = e.x - (o + r) / 2;
              var w = e.y - (s + a) / 2;
              t.xCoords = t.xCoords.map(function (e) {
                return e + N;
              });
              t.yCoords = t.yCoords.map(function (e) {
                return e + w;
              });
            } else {
              Object.keys(t).forEach(function (e) {
                var i = t[e];
                var n = i.getRect().x;
                var l = i.getRect().x + i.getRect().width;
                var d = i.getRect().y;
                var c = i.getRect().y + i.getRect().height;
                if (n < r) {
                  r = n;
                }
                if (l > o) {
                  o = l;
                }
                if (d < a) {
                  a = d;
                }
                if (c > s) {
                  s = c;
                }
              });
              var b = e.x - (o + r) / 2;
              var L = e.y - (s + a) / 2;
              Object.keys(t).forEach(function (e) {
                var i = t[e];
                i.setCenter(i.getCenterX() + b, i.getCenterY() + L);
              });
            }
          }
        };
        o.calcBoundingBox = function (e, t, i, n) {
          var r = Number.MAX_SAFE_INTEGER;
          var o = Number.MIN_SAFE_INTEGER;
          var a = Number.MAX_SAFE_INTEGER;
          var s = Number.MIN_SAFE_INTEGER;
          var l = undefined;
          var d = undefined;
          var c = undefined;
          var f = undefined;
          var u = e.descendants().not(":parent");
          var h = u.length;
          var g = 0;
          for (; g < h; g++) {
            var p = u[g];
            l = t[n.get(p.id())] - p.width() / 2;
            d = t[n.get(p.id())] + p.width() / 2;
            c = i[n.get(p.id())] - p.height() / 2;
            f = i[n.get(p.id())] + p.height() / 2;
            if (r > l) {
              r = l;
            }
            if (o < d) {
              o = d;
            }
            if (a > c) {
              a = c;
            }
            if (s < f) {
              s = f;
            }
          }
          var y = {
            topLeftX: r,
            topLeftY: a,
            width: o - r,
            height: s - a
          };
          return y;
        };
        o.calcParentsWithoutChildren = function (e, t) {
          var i = e.collection();
          t.nodes(":parent").forEach(function (e) {
            var t = false;
            e.children().forEach(function (e) {
              if (e.css("display") != "none") {
                t = true;
              }
            });
            if (!t) {
              i.merge(e);
            }
          });
          return i;
        };
        e.exports = o;
      },
      816: (e, t, i) => {
        var n = i(548);
        var r = i(140).CoSELayout;
        var o = i(140).CoSENode;
        var a = i(140).layoutBase.PointD;
        var s = i(140).layoutBase.DimensionD;
        var l = i(140).layoutBase.LayoutConstants;
        var d = i(140).layoutBase.FDLayoutConstants;
        var c = i(140).CoSEConstants;
        e.exports = {
          coseLayout: function (e, t) {
            var i = e.cy;
            var f = e.eles;
            var u = f.nodes();
            var h = f.edges();
            var g = undefined;
            var p = undefined;
            var y = undefined;
            var m = {};
            if (e.randomize) {
              g = t.nodeIndexes;
              p = t.xCoords;
              y = t.yCoords;
            }
            function v(e) {
              return typeof e == "function";
            }
            function E(e, t) {
              if (v(e)) {
                return e(t);
              } else {
                return e;
              }
            }
            var x = n.calcParentsWithoutChildren(i, f);
            if (e.nestingFactor != null) {
              c.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = d.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e.nestingFactor;
            }
            if (e.gravity != null) {
              c.DEFAULT_GRAVITY_STRENGTH = d.DEFAULT_GRAVITY_STRENGTH = e.gravity;
            }
            if (e.numIter != null) {
              c.MAX_ITERATIONS = d.MAX_ITERATIONS = e.numIter;
            }
            if (e.gravityRange != null) {
              c.DEFAULT_GRAVITY_RANGE_FACTOR = d.DEFAULT_GRAVITY_RANGE_FACTOR = e.gravityRange;
            }
            if (e.gravityCompound != null) {
              c.DEFAULT_COMPOUND_GRAVITY_STRENGTH = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e.gravityCompound;
            }
            if (e.gravityRangeCompound != null) {
              c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e.gravityRangeCompound;
            }
            if (e.initialEnergyOnIncremental != null) {
              c.DEFAULT_COOLING_FACTOR_INCREMENTAL = d.DEFAULT_COOLING_FACTOR_INCREMENTAL = e.initialEnergyOnIncremental;
            }
            if (e.tilingCompareBy != null) {
              c.TILING_COMPARE_BY = e.tilingCompareBy;
            }
            if (e.quality == "proof") {
              l.QUALITY = 2;
            } else {
              l.QUALITY = 0;
            }
            c.NODE_DIMENSIONS_INCLUDE_LABELS = d.NODE_DIMENSIONS_INCLUDE_LABELS = l.NODE_DIMENSIONS_INCLUDE_LABELS = e.nodeDimensionsIncludeLabels;
            c.DEFAULT_INCREMENTAL = d.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = !e.randomize;
            c.ANIMATE = d.ANIMATE = l.ANIMATE = e.animate;
            c.TILE = e.tile;
            c.TILING_PADDING_VERTICAL = typeof e.tilingPaddingVertical == "function" ? e.tilingPaddingVertical.call() : e.tilingPaddingVertical;
            c.TILING_PADDING_HORIZONTAL = typeof e.tilingPaddingHorizontal == "function" ? e.tilingPaddingHorizontal.call() : e.tilingPaddingHorizontal;
            c.DEFAULT_INCREMENTAL = d.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = true;
            c.PURE_INCREMENTAL = !e.randomize;
            l.DEFAULT_UNIFORM_LEAF_NODE_SIZES = e.uniformNodeDimensions;
            if (e.step == "transformed") {
              c.TRANSFORM_ON_CONSTRAINT_HANDLING = true;
              c.ENFORCE_CONSTRAINTS = false;
              c.APPLY_LAYOUT = false;
            }
            if (e.step == "enforced") {
              c.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
              c.ENFORCE_CONSTRAINTS = true;
              c.APPLY_LAYOUT = false;
            }
            if (e.step == "cose") {
              c.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
              c.ENFORCE_CONSTRAINTS = false;
              c.APPLY_LAYOUT = true;
            }
            if (e.step == "all") {
              if (e.randomize) {
                c.TRANSFORM_ON_CONSTRAINT_HANDLING = true;
              } else {
                c.TRANSFORM_ON_CONSTRAINT_HANDLING = false;
              }
              c.ENFORCE_CONSTRAINTS = true;
              c.APPLY_LAYOUT = true;
            }
            if (e.fixedNodeConstraint || e.alignmentConstraint || e.relativePlacementConstraint) {
              c.TREE_REDUCTION_ON_INCREMENTAL = false;
            } else {
              c.TREE_REDUCTION_ON_INCREMENTAL = true;
            }
            var C = new r();
            var T = C.newGraphManager();
            (function e(t, i, r, l) {
              var d = i.length;
              var c = 0;
              for (; c < d; c++) {
                var f = i[c];
                var u = null;
                if (f.intersection(x).length == 0) {
                  u = f.children();
                }
                var h = undefined;
                var v = f.layoutDimensions({
                  nodeDimensionsIncludeLabels: l.nodeDimensionsIncludeLabels
                });
                if (f.outerWidth() != null && f.outerHeight() != null) {
                  if (l.randomize) {
                    if (f.isParent()) {
                      var C = n.calcBoundingBox(f, p, y, g);
                      h = f.intersection(x).length == 0 ? t.add(new o(r.graphManager, new a(C.topLeftX, C.topLeftY), new s(C.width, C.height))) : t.add(new o(r.graphManager, new a(C.topLeftX, C.topLeftY), new s(parseFloat(v.w), parseFloat(v.h))));
                    } else {
                      h = t.add(new o(r.graphManager, new a(p[g.get(f.id())] - v.w / 2, y[g.get(f.id())] - v.h / 2), new s(parseFloat(v.w), parseFloat(v.h))));
                    }
                  } else {
                    h = t.add(new o(r.graphManager, new a(f.position("x") - v.w / 2, f.position("y") - v.h / 2), new s(parseFloat(v.w), parseFloat(v.h))));
                  }
                } else {
                  h = t.add(new o(this.graphManager));
                }
                h.id = f.data("id");
                h.nodeRepulsion = E(l.nodeRepulsion, f);
                h.paddingLeft = parseInt(f.css("padding"));
                h.paddingTop = parseInt(f.css("padding"));
                h.paddingRight = parseInt(f.css("padding"));
                h.paddingBottom = parseInt(f.css("padding"));
                if (l.nodeDimensionsIncludeLabels) {
                  h.labelWidth = f.boundingBox({
                    includeLabels: true,
                    includeNodes: false,
                    includeOverlays: false
                  }).w;
                  h.labelHeight = f.boundingBox({
                    includeLabels: true,
                    includeNodes: false,
                    includeOverlays: false
                  }).h;
                  h.labelPosVertical = f.css("text-valign");
                  h.labelPosHorizontal = f.css("text-halign");
                }
                m[f.data("id")] = h;
                if (isNaN(h.rect.x)) {
                  h.rect.x = 0;
                }
                if (isNaN(h.rect.y)) {
                  h.rect.y = 0;
                }
                if (u != null && u.length > 0) {
                  var T = undefined;
                  e(r.getGraphManager().add(r.newGraph(), h), u, r, l);
                }
              }
            })(T.addRoot(), n.getTopMostNodes(u), C, e);
            (function (t, i, n) {
              var r = 0;
              var o = 0;
              var a = 0;
              for (; a < n.length; a++) {
                var s = n[a];
                var l = m[s.data("source")];
                var f = m[s.data("target")];
                if (l && f && l !== f && l.getEdgesBetween(f).length == 0) {
                  var u = i.add(t.newEdge(), l, f);
                  u.id = s.id();
                  u.idealLength = E(e.idealEdgeLength, s);
                  u.edgeElasticity = E(e.edgeElasticity, s);
                  r += u.idealLength;
                  o++;
                }
              }
              if (e.idealEdgeLength != null) {
                if (o > 0) {
                  c.DEFAULT_EDGE_LENGTH = d.DEFAULT_EDGE_LENGTH = r / o;
                } else if (v(e.idealEdgeLength)) {
                  c.DEFAULT_EDGE_LENGTH = d.DEFAULT_EDGE_LENGTH = 50;
                } else {
                  c.DEFAULT_EDGE_LENGTH = d.DEFAULT_EDGE_LENGTH = e.idealEdgeLength;
                }
                c.MIN_REPULSION_DIST = d.MIN_REPULSION_DIST = d.DEFAULT_EDGE_LENGTH / 10;
                c.DEFAULT_RADIAL_SEPARATION = d.DEFAULT_EDGE_LENGTH;
              }
            })(C, T, h);
            if (e.fixedNodeConstraint) {
              C.constraints.fixedNodeConstraint = e.fixedNodeConstraint;
            }
            if (e.alignmentConstraint) {
              C.constraints.alignmentConstraint = e.alignmentConstraint;
            }
            if (e.relativePlacementConstraint) {
              C.constraints.relativePlacementConstraint = e.relativePlacementConstraint;
            }
            C.runLayout();
            return m;
          }
        };
      },
      212: (e, t, i) => {
        var n = function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || false;
              n.configurable = true;
              if ("value" in n) {
                n.writable = true;
              }
              Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            if (i) {
              e(t.prototype, i);
            }
            if (n) {
              e(t, n);
            }
            return t;
          };
        }();
        var r = i(658);
        var o = i(548);
        var a = i(657).spectralLayout;
        var s = i(816).coseLayout;
        var l = Object.freeze({
          quality: "default",
          randomize: true,
          animate: true,
          animationDuration: 1000,
          animationEasing: undefined,
          fit: true,
          padding: 30,
          nodeDimensionsIncludeLabels: false,
          uniformNodeDimensions: false,
          packComponents: true,
          step: "all",
          samplingType: true,
          sampleSize: 25,
          nodeSeparation: 75,
          piTol: 1e-7,
          nodeRepulsion: function (e) {
            return 4500;
          },
          idealEdgeLength: function (e) {
            return 50;
          },
          edgeElasticity: function (e) {
            return 0.45;
          },
          nestingFactor: 0.1,
          gravity: 0.25,
          numIter: 2500,
          tile: true,
          tilingCompareBy: undefined,
          tilingPaddingVertical: 10,
          tilingPaddingHorizontal: 10,
          gravityRangeCompound: 1.5,
          gravityCompound: 1,
          gravityRange: 3.8,
          initialEnergyOnIncremental: 0.3,
          fixedNodeConstraint: undefined,
          alignmentConstraint: undefined,
          relativePlacementConstraint: undefined,
          ready: function () {},
          stop: function () {}
        });
        var d = function () {
          function e(t) {
            (function (e, t) {
              if (!(e instanceof t)) {
                throw TypeError("Cannot call a class as a function");
              }
            })(this, e);
            this.options = r({}, l, t);
          }
          n(e, [{
            key: "run",
            value: function () {
              var e = this.options;
              var t = e.cy;
              var i = e.eles;
              var n = [];
              var r = [];
              var l = undefined;
              var d = [];
              if (e.fixedNodeConstraint && (!Array.isArray(e.fixedNodeConstraint) || e.fixedNodeConstraint.length == 0)) {
                e.fixedNodeConstraint = undefined;
              }
              if (e.alignmentConstraint) {
                if (e.alignmentConstraint.vertical && (!Array.isArray(e.alignmentConstraint.vertical) || e.alignmentConstraint.vertical.length == 0)) {
                  e.alignmentConstraint.vertical = undefined;
                }
                if (e.alignmentConstraint.horizontal && (!Array.isArray(e.alignmentConstraint.horizontal) || e.alignmentConstraint.horizontal.length == 0)) {
                  e.alignmentConstraint.horizontal = undefined;
                }
              }
              if (e.relativePlacementConstraint && (!Array.isArray(e.relativePlacementConstraint) || e.relativePlacementConstraint.length == 0)) {
                e.relativePlacementConstraint = undefined;
              }
              if (e.fixedNodeConstraint || e.alignmentConstraint || e.relativePlacementConstraint) {
                e.tile = false;
                e.packComponents = false;
              }
              var c = undefined;
              var f = false;
              if (t.layoutUtilities && e.packComponents) {
                if (!(c = t.layoutUtilities("get"))) {
                  c = t.layoutUtilities();
                }
                f = true;
              }
              if (i.nodes().length > 0) {
                if (f) {
                  var u = o.getTopMostNodes(e.eles.nodes());
                  (l = o.connectComponents(t, e.eles, u)).forEach(function (e) {
                    var t = e.boundingBox();
                    d.push({
                      x: t.x1 + t.w / 2,
                      y: t.y1 + t.h / 2
                    });
                  });
                  if (e.randomize) {
                    l.forEach(function (t) {
                      e.eles = t;
                      n.push(a(e));
                    });
                  }
                  if (e.quality == "default" || e.quality == "proof") {
                    var h = t.collection();
                    if (e.tile) {
                      var g = new Map();
                      var p = 0;
                      var y = {
                        nodeIndexes: g,
                        xCoords: [],
                        yCoords: []
                      };
                      var m = [];
                      l.forEach(function (e, t) {
                        if (e.edges().length == 0) {
                          e.nodes().forEach(function (t, i) {
                            h.merge(e.nodes()[i]);
                            if (!t.isParent()) {
                              y.nodeIndexes.set(e.nodes()[i].id(), p++);
                              y.xCoords.push(e.nodes()[0].position().x);
                              y.yCoords.push(e.nodes()[0].position().y);
                            }
                          });
                          m.push(t);
                        }
                      });
                      if (h.length > 1) {
                        var v = h.boundingBox();
                        d.push({
                          x: v.x1 + v.w / 2,
                          y: v.y1 + v.h / 2
                        });
                        l.push(h);
                        n.push(y);
                        for (var E = m.length - 1; E >= 0; E--) {
                          l.splice(m[E], 1);
                          n.splice(m[E], 1);
                          d.splice(m[E], 1);
                        }
                      }
                    }
                    l.forEach(function (t, i) {
                      e.eles = t;
                      r.push(s(e, n[i]));
                      o.relocateComponent(d[i], r[i], e);
                    });
                  } else {
                    l.forEach(function (t, i) {
                      o.relocateComponent(d[i], n[i], e);
                    });
                  }
                  var x = new Set();
                  if (l.length > 1) {
                    var C = [];
                    var T = i.filter(function (e) {
                      return e.css("display") == "none";
                    });
                    l.forEach(function (t, i) {
                      var a = undefined;
                      if (e.quality == "draft") {
                        a = n[i].nodeIndexes;
                      }
                      if (t.nodes().not(T).length > 0) {
                        var s = {
                          edges: [],
                          nodes: []
                        };
                        var l = undefined;
                        t.nodes().not(T).forEach(function (t) {
                          if (e.quality == "draft") {
                            if (t.isParent()) {
                              var d = o.calcBoundingBox(t, n[i].xCoords, n[i].yCoords, a);
                              s.nodes.push({
                                x: d.topLeftX,
                                y: d.topLeftY,
                                width: d.width,
                                height: d.height
                              });
                            } else {
                              l = a.get(t.id());
                              s.nodes.push({
                                x: n[i].xCoords[l] - t.boundingbox().w / 2,
                                y: n[i].yCoords[l] - t.boundingbox().h / 2,
                                width: t.boundingbox().w,
                                height: t.boundingbox().h
                              });
                            }
                          } else if (r[i][t.id()]) {
                            s.nodes.push({
                              x: r[i][t.id()].getLeft(),
                              y: r[i][t.id()].getTop(),
                              width: r[i][t.id()].getWidth(),
                              height: r[i][t.id()].getHeight()
                            });
                          }
                        });
                        t.edges().forEach(function (t) {
                          var l = t.source();
                          var d = t.target();
                          if (l.css("display") != "none" && d.css("display") != "none") {
                            if (e.quality == "draft") {
                              var c = a.get(l.id());
                              var f = a.get(d.id());
                              var u = [];
                              var h = [];
                              if (l.isParent()) {
                                var g = o.calcBoundingBox(l, n[i].xCoords, n[i].yCoords, a);
                                u.push(g.topLeftX + g.width / 2);
                                u.push(g.topLeftY + g.height / 2);
                              } else {
                                u.push(n[i].xCoords[c]);
                                u.push(n[i].yCoords[c]);
                              }
                              if (d.isParent()) {
                                var p = o.calcBoundingBox(d, n[i].xCoords, n[i].yCoords, a);
                                h.push(p.topLeftX + p.width / 2);
                                h.push(p.topLeftY + p.height / 2);
                              } else {
                                h.push(n[i].xCoords[f]);
                                h.push(n[i].yCoords[f]);
                              }
                              s.edges.push({
                                startX: u[0],
                                startY: u[1],
                                endX: h[0],
                                endY: h[1]
                              });
                            } else if (r[i][l.id()] && r[i][d.id()]) {
                              s.edges.push({
                                startX: r[i][l.id()].getCenterX(),
                                startY: r[i][l.id()].getCenterY(),
                                endX: r[i][d.id()].getCenterX(),
                                endY: r[i][d.id()].getCenterY()
                              });
                            }
                          }
                        });
                        if (s.nodes.length > 0) {
                          C.push(s);
                          x.add(i);
                        }
                      }
                    });
                    var N = c.packComponents(C, e.randomize).shifts;
                    if (e.quality == "draft") {
                      n.forEach(function (e, t) {
                        var i = e.xCoords.map(function (e) {
                          return e + N[t].dx;
                        });
                        var n = e.yCoords.map(function (e) {
                          return e + N[t].dy;
                        });
                        e.xCoords = i;
                        e.yCoords = n;
                      });
                    } else {
                      var w = 0;
                      x.forEach(function (e) {
                        Object.keys(r[e]).forEach(function (t) {
                          var i = r[e][t];
                          i.setCenter(i.getCenterX() + N[w].dx, i.getCenterY() + N[w].dy);
                        });
                        w++;
                      });
                    }
                  }
                } else {
                  var b = e.eles.boundingBox();
                  d.push({
                    x: b.x1 + b.w / 2,
                    y: b.y1 + b.h / 2
                  });
                  if (e.randomize) {
                    var L = a(e);
                    n.push(L);
                  }
                  if (e.quality == "default" || e.quality == "proof") {
                    r.push(s(e, n[0]));
                    o.relocateComponent(d[0], r[0], e);
                  } else {
                    o.relocateComponent(d[0], n[0], e);
                  }
                }
              }
              function A(t, i) {
                if (e.quality == "default" || e.quality == "proof") {
                  if (typeof t == "number") {
                    t = i;
                  }
                  var o = undefined;
                  var a = undefined;
                  var s = t.data("id");
                  r.forEach(function (e) {
                    if (s in e) {
                      o = {
                        x: e[s].getRect().getCenterX(),
                        y: e[s].getRect().getCenterY()
                      };
                      a = e[s];
                    }
                  });
                  if (e.nodeDimensionsIncludeLabels) {
                    if (a.labelWidth) {
                      if (a.labelPosHorizontal == "left") {
                        o.x += a.labelWidth / 2;
                      } else if (a.labelPosHorizontal == "right") {
                        o.x -= a.labelWidth / 2;
                      }
                    }
                    if (a.labelHeight) {
                      if (a.labelPosVertical == "top") {
                        o.y += a.labelHeight / 2;
                      } else if (a.labelPosVertical == "bottom") {
                        o.y -= a.labelHeight / 2;
                      }
                    }
                  }
                  if (o == undefined) {
                    o = {
                      x: t.position("x"),
                      y: t.position("y")
                    };
                  }
                  return {
                    x: o.x,
                    y: o.y
                  };
                }
                var l = undefined;
                n.forEach(function (e) {
                  var i = e.nodeIndexes.get(t.id());
                  if (i != undefined) {
                    l = {
                      x: e.xCoords[i],
                      y: e.yCoords[i]
                    };
                  }
                });
                if (l == undefined) {
                  l = {
                    x: t.position("x"),
                    y: t.position("y")
                  };
                }
                return {
                  x: l.x,
                  y: l.y
                };
              }
              if (e.quality == "default" || e.quality == "proof" || e.randomize) {
                var I = o.calcParentsWithoutChildren(t, i);
                var _ = i.filter(function (e) {
                  return e.css("display") == "none";
                });
                e.eles = i.not(_);
                i.nodes().not(":parent").not(_).layoutPositions(this, e, A);
                if (I.length > 0) {
                  I.forEach(function (e) {
                    e.position(A(e));
                  });
                }
              }
            }
          }]);
          return e;
        }();
        e.exports = d;
      },
      657: (e, t, i) => {
        var n = i(548);
        var r = i(140).layoutBase.Matrix;
        var o = i(140).layoutBase.SVD;
        e.exports = {
          spectralLayout: function (e) {
            var t = e.cy;
            var i = e.eles;
            var a = i.nodes();
            var s = i.nodes(":parent");
            var l = new Map();
            var d = new Map();
            var c = new Map();
            var f = [];
            var u = [];
            var h = [];
            var g = [];
            var p = [];
            var y = [];
            var m = [];
            var v = [];
            var E = undefined;
            var x = e.piTol;
            var C = e.samplingType;
            var T = e.nodeSeparation;
            var N = undefined;
            function w() {
              var e = 0;
              var t = 0;
              var i = false;
              while (t < N) {
                e = Math.floor(Math.random() * E);
                i = false;
                for (var n = 0; n < t; n++) {
                  if (g[n] == e) {
                    i = true;
                    break;
                  }
                }
                if (!i) {
                  g[t] = e;
                  t++;
                }
              }
            }
            function b(e, t, i) {
              var n = [];
              var r = 0;
              var o = 0;
              var a = 0;
              var s = undefined;
              var l = [];
              var c = 0;
              var u = 1;
              var h = 0;
              for (; h < E; h++) {
                l[h] = 100000000;
              }
              n[o] = e;
              l[e] = 0;
              while (o >= r) {
                var g = f[a = n[r++]];
                var m = 0;
                for (; m < g.length; m++) {
                  if (l[s = d.get(g[m])] == 100000000) {
                    l[s] = l[a] + 1;
                    n[++o] = s;
                  }
                }
                y[a][t] = l[a] * T;
              }
              if (i) {
                for (var v = 0; v < E; v++) {
                  if (y[v][t] < p[v]) {
                    p[v] = y[v][t];
                  }
                }
                for (var x = 0; x < E; x++) {
                  if (p[x] > c) {
                    c = p[x];
                    u = x;
                  }
                }
              }
              return u;
            }
            n.connectComponents(t, i, n.getTopMostNodes(a), l);
            s.forEach(function (e) {
              n.connectComponents(t, i, n.getTopMostNodes(e.descendants().intersection(i)), l);
            });
            var L = 0;
            var A = 0;
            for (; A < a.length; A++) {
              if (!a[A].isParent()) {
                d.set(a[A].id(), L++);
              }
            }
            var I = true;
            var _ = false;
            var k = undefined;
            try {
              var D;
              var R = l.keys()[Symbol.iterator]();
              for (; !(I = (D = R.next()).done); I = true) {
                var O = D.value;
                d.set(O, L++);
              }
            } catch (e) {
              _ = true;
              k = e;
            } finally {
              try {
                if (!I && R.return) {
                  R.return();
                }
              } finally {
                if (_) {
                  throw k;
                }
              }
            }
            for (var S = 0; S < d.size; S++) {
              f[S] = [];
            }
            s.forEach(function (e) {
              for (var t = e.children().intersection(i); t.nodes(":childless").length == 0;) {
                t = t.nodes()[0].children().intersection(i);
              }
              var n = 0;
              var r = t.nodes(":childless")[0].connectedEdges().length;
              t.nodes(":childless").forEach(function (e, t) {
                if (e.connectedEdges().length < r) {
                  r = e.connectedEdges().length;
                  n = t;
                }
              });
              c.set(e.id(), t.nodes(":childless")[n].id());
            });
            a.forEach(function (e) {
              var t = undefined;
              t = e.isParent() ? d.get(c.get(e.id())) : d.get(e.id());
              e.neighborhood().nodes().forEach(function (n) {
                if (i.intersection(e.edgesWith(n)).length > 0) {
                  if (n.isParent()) {
                    f[t].push(c.get(n.id()));
                  } else {
                    f[t].push(n.id());
                  }
                }
              });
            });
            function F(e) {
              var i = d.get(e);
              var n = undefined;
              l.get(e).forEach(function (r) {
                n = t.getElementById(r).isParent() ? c.get(r) : r;
                f[i].push(n);
                f[d.get(n)].push(e);
              });
            }
            var M = true;
            var P = false;
            var $ = undefined;
            try {
              var B;
              var G = l.keys()[Symbol.iterator]();
              for (; !(M = (B = G.next()).done); M = true) {
                var W = B.value;
                F(W);
              }
            } catch (e) {
              P = true;
              $ = e;
            } finally {
              try {
                if (!M && G.return) {
                  G.return();
                }
              } finally {
                if (P) {
                  throw $;
                }
              }
            }
            E = d.size;
            var U = undefined;
            if (E > 2) {
              N = E < e.sampleSize ? E : e.sampleSize;
              for (var z = 0; z < E; z++) {
                y[z] = [];
              }
              for (var Y = 0; Y < N; Y++) {
                v[Y] = [];
              }
              if (e.quality == "draft" || e.step == "all") {
                (function (e) {
                  var t = undefined;
                  if (e) {
                    t = Math.floor(Math.random() * E);
                    for (var i = 0; i < E; i++) {
                      p[i] = 100000000;
                    }
                    for (var n = 0; n < N; n++) {
                      g[n] = t;
                      t = b(t, n, e);
                    }
                  } else {
                    w();
                    for (var r = 0; r < N; r++) {
                      b(g[r], r, e, false);
                    }
                  }
                  for (var o = 0; o < E; o++) {
                    for (var a = 0; a < N; a++) {
                      y[o][a] *= y[o][a];
                    }
                  }
                  for (var s = 0; s < N; s++) {
                    m[s] = [];
                  }
                  for (var l = 0; l < N; l++) {
                    for (var d = 0; d < N; d++) {
                      m[l][d] = y[g[d]][l];
                    }
                  }
                })(C);
                (function () {
                  var e = o.svd(m);
                  var t = e.S;
                  var i = e.U;
                  var n = e.V;
                  var a = t[0] * t[0] * t[0];
                  var s = [];
                  var l = 0;
                  for (; l < N; l++) {
                    s[l] = [];
                    for (var d = 0; d < N; d++) {
                      s[l][d] = 0;
                      if (l == d) {
                        s[l][d] = t[l] / (t[l] * t[l] + a / (t[l] * t[l]));
                      }
                    }
                  }
                  v = r.multMat(r.multMat(n, s), r.transpose(i));
                })();
                (function () {
                  var e = undefined;
                  var t = undefined;
                  var i = [];
                  var n = [];
                  var o = [];
                  var a = [];
                  var s = 0;
                  for (; s < E; s++) {
                    i[s] = Math.random();
                    n[s] = Math.random();
                  }
                  i = r.normalize(i);
                  n = r.normalize(n);
                  var l = 0;
                  var d = 1e-9;
                  var c = 1e-9;
                  var f = undefined;
                  while (true) {
                    l++;
                    for (var g = 0; g < E; g++) {
                      o[g] = i[g];
                    }
                    i = r.multGamma(r.multL(r.multGamma(o), y, v));
                    e = r.dotProduct(o, i);
                    i = r.normalize(i);
                    if ((f = Math.abs((d = r.dotProduct(o, i)) / c)) <= 1 + x && f >= 1) {
                      break;
                    }
                    c = d;
                  }
                  for (var p = 0; p < E; p++) {
                    o[p] = i[p];
                  }
                  l = 0;
                  c = 1e-9;
                  while (true) {
                    l++;
                    for (var m = 0; m < E; m++) {
                      a[m] = n[m];
                    }
                    a = r.minusOp(a, r.multCons(o, r.dotProduct(o, a)));
                    n = r.multGamma(r.multL(r.multGamma(a), y, v));
                    t = r.dotProduct(a, n);
                    n = r.normalize(n);
                    if ((f = Math.abs((d = r.dotProduct(a, n)) / c)) <= 1 + x && f >= 1) {
                      break;
                    }
                    c = d;
                  }
                  for (var C = 0; C < E; C++) {
                    a[C] = n[C];
                  }
                  u = r.multCons(o, Math.sqrt(Math.abs(e)));
                  h = r.multCons(a, Math.sqrt(Math.abs(t)));
                })();
              } else {
                d.forEach(function (e, i) {
                  u.push(t.getElementById(i).position("x"));
                  h.push(t.getElementById(i).position("y"));
                });
              }
              return {
                nodeIndexes: d,
                xCoords: u,
                yCoords: h
              };
            }
            var j = d.keys();
            var H = t.getElementById(j.next().value);
            var Z = H.position();
            var V = H.outerWidth();
            u.push(Z.x);
            h.push(Z.y);
            if (E == 2) {
              var X = t.getElementById(j.next().value).outerWidth();
              u.push(Z.x + V / 2 + X / 2 + e.idealEdgeLength);
              h.push(Z.y);
            }
            return {
              nodeIndexes: d,
              xCoords: u,
              yCoords: h
            };
          }
        };
      },
      579: (e, t, i) => {
        var n = i(212);
        function r(e) {
          if (e) {
            e("layout", "fcose", n);
          }
        }
        if (typeof cytoscape != "undefined") {
          r(cytoscape);
        }
        e.exports = r;
      },
      140: t => {
        t.exports = e;
      }
    };
    i = {};
    return function e(n) {
      var r = i[n];
      if (r !== undefined) {
        return r.exports;
      }
      var o = i[n] = {
        exports: {}
      };
      t[n](o, o.exports, e);
      return o.exports;
    }(579);
  };
  module.exports = n(require("cose-layout-module") /*id: 855810*/);
}