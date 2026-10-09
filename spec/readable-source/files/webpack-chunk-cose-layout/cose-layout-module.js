// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(873861) to 'force-directed-graph-layout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32838.6babfad4.js
         * chunkId: 32838
         * moduleId: 855810
         */
module.exports = function (module, exports, require) {
  var r;
  r = function (e) {
    var t;
    var n;
    t = {
      45: (e, t, n) => {
        var r = {};
        r.layoutBase = n(551);
        r.CoSEConstants = n(806);
        r.CoSEEdge = n(767);
        r.CoSEGraph = n(880);
        r.CoSEGraphManager = n(578);
        r.CoSELayout = n(765);
        r.CoSENode = n(991);
        r.ConstraintHandler = n(902);
        e.exports = r;
      },
      806: (e, t, n) => {
        var r = n(551).FDLayoutConstants;
        function i() {}
        for (var a in r) {
          i[a] = r[a];
        }
        i.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
        i.DEFAULT_RADIAL_SEPARATION = r.DEFAULT_EDGE_LENGTH;
        i.DEFAULT_COMPONENT_SEPERATION = 60;
        i.TILE = true;
        i.TILING_PADDING_VERTICAL = 10;
        i.TILING_PADDING_HORIZONTAL = 10;
        i.TRANSFORM_ON_CONSTRAINT_HANDLING = true;
        i.ENFORCE_CONSTRAINTS = true;
        i.APPLY_LAYOUT = true;
        i.RELAX_MOVEMENT_ON_CONSTRAINTS = true;
        i.TREE_REDUCTION_ON_INCREMENTAL = true;
        i.PURE_INCREMENTAL = i.DEFAULT_INCREMENTAL;
        e.exports = i;
      },
      767: (e, t, n) => {
        var r = n(551).FDLayoutEdge;
        function i(e, t, n) {
          r.call(this, e, t, n);
        }
        i.prototype = Object.create(r.prototype);
        for (var a in r) {
          i[a] = r[a];
        }
        e.exports = i;
      },
      880: (e, t, n) => {
        var r = n(551).LGraph;
        function i(e, t, n) {
          r.call(this, e, t, n);
        }
        i.prototype = Object.create(r.prototype);
        for (var a in r) {
          i[a] = r[a];
        }
        e.exports = i;
      },
      578: (e, t, n) => {
        var r = n(551).LGraphManager;
        function i(e) {
          r.call(this, e);
        }
        i.prototype = Object.create(r.prototype);
        for (var a in r) {
          i[a] = r[a];
        }
        e.exports = i;
      },
      765: (e, t, n) => {
        var r = n(551).FDLayout;
        var i = n(578);
        var a = n(880);
        var o = n(991);
        var s = n(767);
        var l = n(806);
        var u = n(902);
        var h = n(551).FDLayoutConstants;
        var c = n(551).LayoutConstants;
        var d = n(551).Point;
        var p = n(551).PointD;
        var g = n(551).DimensionD;
        var f = n(551).Layout;
        var v = n(551).Integer;
        var y = n(551).IGeometry;
        var b = n(551).LGraph;
        var x = n(551).Transform;
        var w = n(551).LinkedList;
        function E() {
          r.call(this);
          this.toBeTiled = {};
          this.constraints = {};
        }
        E.prototype = Object.create(r.prototype);
        for (var T in r) {
          E[T] = r[T];
        }
        E.prototype.newGraphManager = function () {
          var e = new i(this);
          this.graphManager = e;
          return e;
        };
        E.prototype.newGraph = function (e) {
          return new a(null, this.graphManager, e);
        };
        E.prototype.newNode = function (e) {
          return new o(this.graphManager, e);
        };
        E.prototype.newEdge = function (e) {
          return new s(null, null, e);
        };
        E.prototype.initParameters = function () {
          r.prototype.initParameters.call(this, arguments);
          if (!this.isSubLayout) {
            if (l.DEFAULT_EDGE_LENGTH < 10) {
              this.idealEdgeLength = 10;
            } else {
              this.idealEdgeLength = l.DEFAULT_EDGE_LENGTH;
            }
            this.useSmartIdealEdgeLengthCalculation = l.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
            this.gravityConstant = h.DEFAULT_GRAVITY_STRENGTH;
            this.compoundGravityConstant = h.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
            this.gravityRangeFactor = h.DEFAULT_GRAVITY_RANGE_FACTOR;
            this.compoundGravityRangeFactor = h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
            this.prunedNodesAll = [];
            this.growTreeIterations = 0;
            this.afterGrowthIterations = 0;
            this.isTreeGrowing = false;
            this.isGrowthFinished = false;
          }
        };
        E.prototype.initSpringEmbedder = function () {
          r.prototype.initSpringEmbedder.call(this);
          this.coolingCycle = 0;
          this.maxCoolingCycle = this.maxIterations / h.CONVERGENCE_CHECK_PERIOD;
          this.finalTemperature = 0.04;
          this.coolingAdjuster = 1;
        };
        E.prototype.layout = function () {
          if (c.DEFAULT_CREATE_BENDS_AS_NEEDED) {
            this.createBendpoints();
            this.graphManager.resetAllEdges();
          }
          this.level = 0;
          return this.classicLayout();
        };
        E.prototype.classicLayout = function () {
          this.nodesWithGravity = this.calculateNodesToApplyGravitationTo();
          this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
          this.calcNoOfChildrenForAllNodes();
          this.graphManager.calcLowestCommonAncestors();
          this.graphManager.calcInclusionTreeDepths();
          this.graphManager.getRoot().calcEstimatedSize();
          this.calcIdealEdgeLengths();
          if (this.incremental) {
            if (l.TREE_REDUCTION_ON_INCREMENTAL) {
              this.reduceTrees();
              this.graphManager.resetAllNodesToApplyGravitation();
              var e = new Set(this.getAllNodes());
              var t = this.nodesWithGravity.filter(function (t) {
                return e.has(t);
              });
              this.graphManager.setAllNodesToApplyGravitation(t);
            }
          } else {
            var n = this.getFlatForest();
            if (n.length > 0) {
              this.positionNodesRadially(n);
            } else {
              this.reduceTrees();
              this.graphManager.resetAllNodesToApplyGravitation();
              var e = new Set(this.getAllNodes());
              var t = this.nodesWithGravity.filter(function (t) {
                return e.has(t);
              });
              this.graphManager.setAllNodesToApplyGravitation(t);
              this.positionNodesRandomly();
            }
          }
          if (Object.keys(this.constraints).length > 0) {
            u.handleConstraints(this);
            this.initConstraintVariables();
          }
          this.initSpringEmbedder();
          if (l.APPLY_LAYOUT) {
            this.runSpringEmbedder();
          }
          return true;
        };
        E.prototype.tick = function () {
          this.totalIterations++;
          if (this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) {
            if (!(this.prunedNodesAll.length > 0)) {
              return true;
            }
            this.isTreeGrowing = true;
          }
          if (this.totalIterations % h.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
            if (this.isConverged()) {
              if (!(this.prunedNodesAll.length > 0)) {
                return true;
              }
              this.isTreeGrowing = true;
            }
            this.coolingCycle++;
            if (this.layoutQuality == 0) {
              this.coolingAdjuster = this.coolingCycle;
            } else if (this.layoutQuality == 1) {
              this.coolingAdjuster = this.coolingCycle / 3;
            }
            this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log((this.initialCoolingFactor - this.finalTemperature) * 100) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature);
            this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
          }
          if (this.isTreeGrowing) {
            if (this.growTreeIterations % 10 == 0) {
              if (this.prunedNodesAll.length > 0) {
                this.graphManager.updateBounds();
                this.updateGrid();
                this.growTree(this.prunedNodesAll);
                this.graphManager.resetAllNodesToApplyGravitation();
                var e = new Set(this.getAllNodes());
                var t = this.nodesWithGravity.filter(function (t) {
                  return e.has(t);
                });
                this.graphManager.setAllNodesToApplyGravitation(t);
                this.graphManager.updateBounds();
                this.updateGrid();
                if (l.PURE_INCREMENTAL) {
                  this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2;
                } else {
                  this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                }
              } else {
                this.isTreeGrowing = false;
                this.isGrowthFinished = true;
              }
            }
            this.growTreeIterations++;
          }
          if (this.isGrowthFinished) {
            if (this.isConverged()) {
              return true;
            }
            if (this.afterGrowthIterations % 10 == 0) {
              this.graphManager.updateBounds();
              this.updateGrid();
            }
            if (l.PURE_INCREMENTAL) {
              this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100);
            } else {
              this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
            }
            this.afterGrowthIterations++;
          }
          var n = !this.isTreeGrowing && !this.isGrowthFinished;
          var r = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
          this.totalDisplacement = 0;
          this.graphManager.updateBounds();
          this.calcSpringForces();
          this.calcRepulsionForces(n, r);
          this.calcGravitationalForces();
          this.moveNodes();
          this.animate();
          return false;
        };
        E.prototype.getPositionsData = function () {
          var e = this.graphManager.getAllNodes();
          var t = {};
          var n = 0;
          for (; n < e.length; n++) {
            var r = e[n].rect;
            var i = e[n].id;
            t[i] = {
              id: i,
              x: r.getCenterX(),
              y: r.getCenterY(),
              w: r.width,
              h: r.height
            };
          }
          return t;
        };
        E.prototype.runSpringEmbedder = function () {
          this.initialAnimationPeriod = 25;
          this.animationPeriod = this.initialAnimationPeriod;
          var e = false;
          if (h.ANIMATE === "during") {
            this.emit("layoutstarted");
          } else {
            while (!e) {
              e = this.tick();
            }
            this.graphManager.updateBounds();
          }
        };
        E.prototype.moveNodes = function () {
          var e;
          var t = this.getAllNodes();
          var n = 0;
          for (; n < t.length; n++) {
            (0, t[n]).calculateDisplacement();
          }
          if (Object.keys(this.constraints).length > 0) {
            this.updateDisplacements();
          }
          for (var n = 0; n < t.length; n++) {
            (0, t[n]).move();
          }
        };
        E.prototype.initConstraintVariables = function () {
          var e = this;
          this.idToNodeMap = new Map();
          this.fixedNodeSet = new Set();
          var t = this.graphManager.getAllNodes();
          var n = 0;
          for (; n < t.length; n++) {
            var r = t[n];
            this.idToNodeMap.set(r.id, r);
          }
          if (this.constraints.fixedNodeConstraint) {
            this.constraints.fixedNodeConstraint.forEach(function (t) {
              e.fixedNodeSet.add(t.nodeId);
            });
            var r;
            var t = this.graphManager.getAllNodes();
            var n = 0;
            for (; n < t.length; n++) {
              if ((r = t[n]).getChild() != null) {
                var i = function t(n) {
                  var r;
                  var i = n.getChild().getNodes();
                  var a = 0;
                  var o = 0;
                  for (; o < i.length; o++) {
                    if ((r = i[o]).getChild() == null) {
                      if (e.fixedNodeSet.has(r.id)) {
                        a += 100;
                      }
                    } else {
                      a += t(r);
                    }
                  }
                  return a;
                }(r);
                if (i > 0) {
                  r.fixedNodeWeight = i;
                }
              }
            }
          }
          if (this.constraints.relativePlacementConstraint) {
            var a = new Map();
            var o = new Map();
            this.dummyToNodeForVerticalAlignment = new Map();
            this.dummyToNodeForHorizontalAlignment = new Map();
            this.fixedNodesOnHorizontal = new Set();
            this.fixedNodesOnVertical = new Set();
            this.fixedNodeSet.forEach(function (t) {
              e.fixedNodesOnHorizontal.add(t);
              e.fixedNodesOnVertical.add(t);
            });
            if (this.constraints.alignmentConstraint) {
              if (this.constraints.alignmentConstraint.vertical) {
                var s = this.constraints.alignmentConstraint.vertical;
                var n = 0;
                for (; n < s.length; n++) {
                  this.dummyToNodeForVerticalAlignment.set("dummy" + n, []);
                  s[n].forEach(function (t) {
                    a.set(t, "dummy" + n);
                    e.dummyToNodeForVerticalAlignment.get("dummy" + n).push(t);
                    if (e.fixedNodeSet.has(t)) {
                      e.fixedNodesOnHorizontal.add("dummy" + n);
                    }
                  });
                }
              }
              if (this.constraints.alignmentConstraint.horizontal) {
                var u = this.constraints.alignmentConstraint.horizontal;
                var n = 0;
                for (; n < u.length; n++) {
                  this.dummyToNodeForHorizontalAlignment.set("dummy" + n, []);
                  u[n].forEach(function (t) {
                    o.set(t, "dummy" + n);
                    e.dummyToNodeForHorizontalAlignment.get("dummy" + n).push(t);
                    if (e.fixedNodeSet.has(t)) {
                      e.fixedNodesOnVertical.add("dummy" + n);
                    }
                  });
                }
              }
            }
            if (l.RELAX_MOVEMENT_ON_CONSTRAINTS) {
              this.shuffle = function (e) {
                var t;
                var n;
                var r;
                for (r = e.length - 1; r >= e.length * 2 / 3; r--) {
                  t = Math.floor(Math.random() * (r + 1));
                  n = e[r];
                  e[r] = e[t];
                  e[t] = n;
                }
                return e;
              };
              this.nodesInRelativeHorizontal = [];
              this.nodesInRelativeVertical = [];
              this.nodeToRelativeConstraintMapHorizontal = new Map();
              this.nodeToRelativeConstraintMapVertical = new Map();
              this.nodeToTempPositionMapHorizontal = new Map();
              this.nodeToTempPositionMapVertical = new Map();
              this.constraints.relativePlacementConstraint.forEach(function (t) {
                if (t.left) {
                  var n = a.has(t.left) ? a.get(t.left) : t.left;
                  var r = a.has(t.right) ? a.get(t.right) : t.right;
                  if (!e.nodesInRelativeHorizontal.includes(n)) {
                    e.nodesInRelativeHorizontal.push(n);
                    e.nodeToRelativeConstraintMapHorizontal.set(n, []);
                    if (e.dummyToNodeForVerticalAlignment.has(n)) {
                      e.nodeToTempPositionMapHorizontal.set(n, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(n)[0]).getCenterX());
                    } else {
                      e.nodeToTempPositionMapHorizontal.set(n, e.idToNodeMap.get(n).getCenterX());
                    }
                  }
                  if (!e.nodesInRelativeHorizontal.includes(r)) {
                    e.nodesInRelativeHorizontal.push(r);
                    e.nodeToRelativeConstraintMapHorizontal.set(r, []);
                    if (e.dummyToNodeForVerticalAlignment.has(r)) {
                      e.nodeToTempPositionMapHorizontal.set(r, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(r)[0]).getCenterX());
                    } else {
                      e.nodeToTempPositionMapHorizontal.set(r, e.idToNodeMap.get(r).getCenterX());
                    }
                  }
                  e.nodeToRelativeConstraintMapHorizontal.get(n).push({
                    right: r,
                    gap: t.gap
                  });
                  e.nodeToRelativeConstraintMapHorizontal.get(r).push({
                    left: n,
                    gap: t.gap
                  });
                } else {
                  var i = o.has(t.top) ? o.get(t.top) : t.top;
                  var s = o.has(t.bottom) ? o.get(t.bottom) : t.bottom;
                  if (!e.nodesInRelativeVertical.includes(i)) {
                    e.nodesInRelativeVertical.push(i);
                    e.nodeToRelativeConstraintMapVertical.set(i, []);
                    if (e.dummyToNodeForHorizontalAlignment.has(i)) {
                      e.nodeToTempPositionMapVertical.set(i, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(i)[0]).getCenterY());
                    } else {
                      e.nodeToTempPositionMapVertical.set(i, e.idToNodeMap.get(i).getCenterY());
                    }
                  }
                  if (!e.nodesInRelativeVertical.includes(s)) {
                    e.nodesInRelativeVertical.push(s);
                    e.nodeToRelativeConstraintMapVertical.set(s, []);
                    if (e.dummyToNodeForHorizontalAlignment.has(s)) {
                      e.nodeToTempPositionMapVertical.set(s, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(s)[0]).getCenterY());
                    } else {
                      e.nodeToTempPositionMapVertical.set(s, e.idToNodeMap.get(s).getCenterY());
                    }
                  }
                  e.nodeToRelativeConstraintMapVertical.get(i).push({
                    bottom: s,
                    gap: t.gap
                  });
                  e.nodeToRelativeConstraintMapVertical.get(s).push({
                    top: i,
                    gap: t.gap
                  });
                }
              });
            } else {
              var h = new Map();
              var c = new Map();
              this.constraints.relativePlacementConstraint.forEach(function (e) {
                if (e.left) {
                  var t = a.has(e.left) ? a.get(e.left) : e.left;
                  var n = a.has(e.right) ? a.get(e.right) : e.right;
                  if (h.has(t)) {
                    h.get(t).push(n);
                  } else {
                    h.set(t, [n]);
                  }
                  if (h.has(n)) {
                    h.get(n).push(t);
                  } else {
                    h.set(n, [t]);
                  }
                } else {
                  var r = o.has(e.top) ? o.get(e.top) : e.top;
                  var i = o.has(e.bottom) ? o.get(e.bottom) : e.bottom;
                  if (c.has(r)) {
                    c.get(r).push(i);
                  } else {
                    c.set(r, [i]);
                  }
                  if (c.has(i)) {
                    c.get(i).push(r);
                  } else {
                    c.set(i, [r]);
                  }
                }
              });
              function d(e, t) {
                var n = [];
                var r = [];
                var i = new w();
                var a = new Set();
                var o = 0;
                e.forEach(function (s, l) {
                  if (!a.has(l)) {
                    n[o] = [];
                    r[o] = false;
                    var u = l;
                    i.push(u);
                    a.add(u);
                    n[o].push(u);
                    while (i.length != 0) {
                      u = i.shift();
                      if (t.has(u)) {
                        r[o] = true;
                      }
                      e.get(u).forEach(function (e) {
                        if (!a.has(e)) {
                          i.push(e);
                          a.add(e);
                          n[o].push(e);
                        }
                      });
                    }
                    o++;
                  }
                });
                return {
                  components: n,
                  isFixed: r
                };
              }
              var p = d(h, e.fixedNodesOnHorizontal);
              this.componentsOnHorizontal = p.components;
              this.fixedComponentsOnHorizontal = p.isFixed;
              var g = d(c, e.fixedNodesOnVertical);
              this.componentsOnVertical = g.components;
              this.fixedComponentsOnVertical = g.isFixed;
            }
          }
        };
        E.prototype.updateDisplacements = function () {
          var e = this;
          if (this.constraints.fixedNodeConstraint) {
            this.constraints.fixedNodeConstraint.forEach(function (t) {
              var n = e.idToNodeMap.get(t.nodeId);
              n.displacementX = 0;
              n.displacementY = 0;
            });
          }
          if (this.constraints.alignmentConstraint) {
            if (this.constraints.alignmentConstraint.vertical) {
              var t = this.constraints.alignmentConstraint.vertical;
              var n = 0;
              for (; n < t.length; n++) {
                var r = 0;
                var i = 0;
                for (; i < t[n].length; i++) {
                  if (this.fixedNodeSet.has(t[n][i])) {
                    r = 0;
                    break;
                  }
                  r += this.idToNodeMap.get(t[n][i]).displacementX;
                }
                var a = r / t[n].length;
                var i = 0;
                for (; i < t[n].length; i++) {
                  this.idToNodeMap.get(t[n][i]).displacementX = a;
                }
              }
            }
            if (this.constraints.alignmentConstraint.horizontal) {
              var o = this.constraints.alignmentConstraint.horizontal;
              var n = 0;
              for (; n < o.length; n++) {
                var s = 0;
                var i = 0;
                for (; i < o[n].length; i++) {
                  if (this.fixedNodeSet.has(o[n][i])) {
                    s = 0;
                    break;
                  }
                  s += this.idToNodeMap.get(o[n][i]).displacementY;
                }
                var u = s / o[n].length;
                var i = 0;
                for (; i < o[n].length; i++) {
                  this.idToNodeMap.get(o[n][i]).displacementY = u;
                }
              }
            }
          }
          if (this.constraints.relativePlacementConstraint) {
            if (l.RELAX_MOVEMENT_ON_CONSTRAINTS) {
              if (this.totalIterations % 10 == 0) {
                this.shuffle(this.nodesInRelativeHorizontal);
                this.shuffle(this.nodesInRelativeVertical);
              }
              this.nodesInRelativeHorizontal.forEach(function (t) {
                if (!e.fixedNodesOnHorizontal.has(t)) {
                  var n = 0;
                  n = e.dummyToNodeForVerticalAlignment.has(t) ? e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(t)[0]).displacementX : e.idToNodeMap.get(t).displacementX;
                  e.nodeToRelativeConstraintMapHorizontal.get(t).forEach(function (r) {
                    if (r.right) {
                      var i = e.nodeToTempPositionMapHorizontal.get(r.right) - e.nodeToTempPositionMapHorizontal.get(t) - n;
                      if (i < r.gap) {
                        n -= r.gap - i;
                      }
                    } else {
                      var i = e.nodeToTempPositionMapHorizontal.get(t) - e.nodeToTempPositionMapHorizontal.get(r.left) + n;
                      if (i < r.gap) {
                        n += r.gap - i;
                      }
                    }
                  });
                  e.nodeToTempPositionMapHorizontal.set(t, e.nodeToTempPositionMapHorizontal.get(t) + n);
                  if (e.dummyToNodeForVerticalAlignment.has(t)) {
                    e.dummyToNodeForVerticalAlignment.get(t).forEach(function (t) {
                      e.idToNodeMap.get(t).displacementX = n;
                    });
                  } else {
                    e.idToNodeMap.get(t).displacementX = n;
                  }
                }
              });
              this.nodesInRelativeVertical.forEach(function (t) {
                if (!e.fixedNodesOnHorizontal.has(t)) {
                  var n = 0;
                  n = e.dummyToNodeForHorizontalAlignment.has(t) ? e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(t)[0]).displacementY : e.idToNodeMap.get(t).displacementY;
                  e.nodeToRelativeConstraintMapVertical.get(t).forEach(function (r) {
                    if (r.bottom) {
                      var i = e.nodeToTempPositionMapVertical.get(r.bottom) - e.nodeToTempPositionMapVertical.get(t) - n;
                      if (i < r.gap) {
                        n -= r.gap - i;
                      }
                    } else {
                      var i = e.nodeToTempPositionMapVertical.get(t) - e.nodeToTempPositionMapVertical.get(r.top) + n;
                      if (i < r.gap) {
                        n += r.gap - i;
                      }
                    }
                  });
                  e.nodeToTempPositionMapVertical.set(t, e.nodeToTempPositionMapVertical.get(t) + n);
                  if (e.dummyToNodeForHorizontalAlignment.has(t)) {
                    e.dummyToNodeForHorizontalAlignment.get(t).forEach(function (t) {
                      e.idToNodeMap.get(t).displacementY = n;
                    });
                  } else {
                    e.idToNodeMap.get(t).displacementY = n;
                  }
                }
              });
            } else {
              for (var n = 0; n < this.componentsOnHorizontal.length; n++) {
                var h = this.componentsOnHorizontal[n];
                if (this.fixedComponentsOnHorizontal[n]) {
                  for (var i = 0; i < h.length; i++) {
                    if (this.dummyToNodeForVerticalAlignment.has(h[i])) {
                      this.dummyToNodeForVerticalAlignment.get(h[i]).forEach(function (t) {
                        e.idToNodeMap.get(t).displacementX = 0;
                      });
                    } else {
                      this.idToNodeMap.get(h[i]).displacementX = 0;
                    }
                  }
                } else {
                  var c = 0;
                  var d = 0;
                  var i = 0;
                  for (; i < h.length; i++) {
                    if (this.dummyToNodeForVerticalAlignment.has(h[i])) {
                      var p = this.dummyToNodeForVerticalAlignment.get(h[i]);
                      c += p.length * this.idToNodeMap.get(p[0]).displacementX;
                      d += p.length;
                    } else {
                      c += this.idToNodeMap.get(h[i]).displacementX;
                      d++;
                    }
                  }
                  var g = c / d;
                  var i = 0;
                  for (; i < h.length; i++) {
                    if (this.dummyToNodeForVerticalAlignment.has(h[i])) {
                      this.dummyToNodeForVerticalAlignment.get(h[i]).forEach(function (t) {
                        e.idToNodeMap.get(t).displacementX = g;
                      });
                    } else {
                      this.idToNodeMap.get(h[i]).displacementX = g;
                    }
                  }
                }
              }
              for (var n = 0; n < this.componentsOnVertical.length; n++) {
                var h = this.componentsOnVertical[n];
                if (this.fixedComponentsOnVertical[n]) {
                  for (var i = 0; i < h.length; i++) {
                    if (this.dummyToNodeForHorizontalAlignment.has(h[i])) {
                      this.dummyToNodeForHorizontalAlignment.get(h[i]).forEach(function (t) {
                        e.idToNodeMap.get(t).displacementY = 0;
                      });
                    } else {
                      this.idToNodeMap.get(h[i]).displacementY = 0;
                    }
                  }
                } else {
                  var c = 0;
                  var d = 0;
                  var i = 0;
                  for (; i < h.length; i++) {
                    if (this.dummyToNodeForHorizontalAlignment.has(h[i])) {
                      var p = this.dummyToNodeForHorizontalAlignment.get(h[i]);
                      c += p.length * this.idToNodeMap.get(p[0]).displacementY;
                      d += p.length;
                    } else {
                      c += this.idToNodeMap.get(h[i]).displacementY;
                      d++;
                    }
                  }
                  var g = c / d;
                  var i = 0;
                  for (; i < h.length; i++) {
                    if (this.dummyToNodeForHorizontalAlignment.has(h[i])) {
                      this.dummyToNodeForHorizontalAlignment.get(h[i]).forEach(function (t) {
                        e.idToNodeMap.get(t).displacementY = g;
                      });
                    } else {
                      this.idToNodeMap.get(h[i]).displacementY = g;
                    }
                  }
                }
              }
            }
          }
        };
        E.prototype.calculateNodesToApplyGravitationTo = function () {
          var e;
          var t;
          var n = [];
          var r = this.graphManager.getGraphs();
          var i = r.length;
          for (t = 0; t < i; t++) {
            (e = r[t]).updateConnected();
            if (!e.isConnected) {
              n = n.concat(e.getNodes());
            }
          }
          return n;
        };
        E.prototype.createBendpoints = function () {
          var e = [];
          e = e.concat(this.graphManager.getAllEdges());
          var t = new Set();
          for (a = 0; a < e.length; a++) {
            var n = e[a];
            if (!t.has(n)) {
              var r = n.getSource();
              var i = n.getTarget();
              if (r == i) {
                n.getBendpoints().push(new p());
                n.getBendpoints().push(new p());
                this.createDummyNodesForBendpoints(n);
                t.add(n);
              } else {
                var a;
                var o;
                var s = [];
                s = (s = s.concat(r.getEdgeListToNode(i))).concat(i.getEdgeListToNode(r));
                if (!t.has(s[0])) {
                  if (s.length > 1) {
                    for (o = 0; o < s.length; o++) {
                      var l = s[o];
                      l.getBendpoints().push(new p());
                      this.createDummyNodesForBendpoints(l);
                    }
                  }
                  s.forEach(function (e) {
                    t.add(e);
                  });
                }
              }
            }
            if (t.size == e.length) {
              break;
            }
          }
        };
        E.prototype.positionNodesRadially = function (e) {
          var t = new d(0, 0);
          var n = Math.ceil(Math.sqrt(e.length));
          var r = 0;
          var i = 0;
          var a = 0;
          var o = new p(0, 0);
          var s = 0;
          for (; s < e.length; s++) {
            if (s % n == 0) {
              a = 0;
              i = r;
              if (s != 0) {
                i += l.DEFAULT_COMPONENT_SEPERATION;
              }
              r = 0;
            }
            var u = e[s];
            var h = f.findCenterOfTree(u);
            t.x = a;
            t.y = i;
            if ((o = E.radialLayout(u, h, t)).y > r) {
              r = Math.floor(o.y);
            }
            a = Math.floor(o.x + l.DEFAULT_COMPONENT_SEPERATION);
          }
          this.transform(new p(c.WORLD_CENTER_X - o.x / 2, c.WORLD_CENTER_Y - o.y / 2));
        };
        E.radialLayout = function (e, t, n) {
          var r = Math.max(this.maxDiagonalInTree(e), l.DEFAULT_RADIAL_SEPARATION);
          E.branchRadialLayout(t, null, 0, 359, 0, r);
          var i = b.calculateBounds(e);
          var a = new x();
          a.setDeviceOrgX(i.getMinX());
          a.setDeviceOrgY(i.getMinY());
          a.setWorldOrgX(n.x);
          a.setWorldOrgY(n.y);
          for (var o = 0; o < e.length; o++) {
            e[o].transform(a);
          }
          var s = new p(i.getMaxX(), i.getMaxY());
          return a.inverseTransformPoint(s);
        };
        E.branchRadialLayout = function (e, t, n, r, i, a) {
          var o;
          var s = (r - n + 1) / 2;
          if (s < 0) {
            s += 180;
          }
          var l = (s + n) % 360 * y.TWO_PI / 360;
          var u = i * Math.cos(l);
          var h = i * Math.sin(l);
          e.setCenter(u, h);
          var c = [];
          var d = (c = c.concat(e.getEdges())).length;
          if (t != null) {
            d--;
          }
          var p = 0;
          var g = c.length;
          var f = e.getEdgesBetween(t);
          while (f.length > 1) {
            var v = f[0];
            f.splice(0, 1);
            var b = c.indexOf(v);
            if (b >= 0) {
              c.splice(b, 1);
            }
            g--;
            d--;
          }
          o = t != null ? (c.indexOf(f[0]) + 1) % g : 0;
          var x = Math.abs(r - n) / d;
          var w = o;
          for (; p != d; w = ++w % g) {
            var T = c[w].getOtherEnd(e);
            if (T != t) {
              var C = (n + p * x) % 360;
              var N = (C + x) % 360;
              E.branchRadialLayout(T, e, C, N, i + a, a);
              p++;
            }
          }
        };
        E.maxDiagonalInTree = function (e) {
          var t = v.MIN_VALUE;
          var n = 0;
          for (; n < e.length; n++) {
            var r = e[n].getDiagonal();
            if (r > t) {
              t = r;
            }
          }
          return t;
        };
        E.prototype.calcRepulsionRange = function () {
          return (this.level + 1) * 2 * this.idealEdgeLength;
        };
        E.prototype.groupZeroDegreeMembers = function () {
          var e = this;
          var t = {};
          this.memberGroups = {};
          this.idToDummyNode = {};
          var n = [];
          var r = this.graphManager.getAllNodes();
          var i = 0;
          for (; i < r.length; i++) {
            var a = r[i];
            var s = a.getParent();
            if (this.getNodeDegreeWithChildren(a) === 0 && (s.id == undefined || !this.getToBeTiled(s))) {
              n.push(a);
            }
          }
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            var l = a.getParent().id;
            if (t[l] === undefined) {
              t[l] = [];
            }
            t[l] = t[l].concat(a);
          }
          Object.keys(t).forEach(function (n) {
            if (t[n].length > 1) {
              var r = "DummyCompound_" + n;
              e.memberGroups[r] = t[n];
              var i = t[n][0].getParent();
              var a = new o(e.graphManager);
              a.id = r;
              a.paddingLeft = i.paddingLeft || 0;
              a.paddingRight = i.paddingRight || 0;
              a.paddingBottom = i.paddingBottom || 0;
              a.paddingTop = i.paddingTop || 0;
              e.idToDummyNode[r] = a;
              var s = e.getGraphManager().add(e.newGraph(), a);
              var l = i.getChild();
              l.add(a);
              for (var u = 0; u < t[n].length; u++) {
                var h = t[n][u];
                l.remove(h);
                s.add(h);
              }
            }
          });
        };
        E.prototype.clearCompounds = function () {
          var e = {};
          var t = {};
          this.performDFSOnCompounds();
          for (var n = 0; n < this.compoundOrder.length; n++) {
            t[this.compoundOrder[n].id] = this.compoundOrder[n];
            e[this.compoundOrder[n].id] = [].concat(this.compoundOrder[n].getChild().getNodes());
            this.graphManager.remove(this.compoundOrder[n].getChild());
            this.compoundOrder[n].child = null;
          }
          this.graphManager.resetAllNodes();
          this.tileCompoundMembers(e, t);
        };
        E.prototype.clearZeroDegreeMembers = function () {
          var e = this;
          var t = this.tiledZeroDegreePack = [];
          Object.keys(this.memberGroups).forEach(function (n) {
            var r = e.idToDummyNode[n];
            t[n] = e.tileNodes(e.memberGroups[n], r.paddingLeft + r.paddingRight);
            r.rect.width = t[n].width;
            r.rect.height = t[n].height;
            r.setCenter(t[n].centerX, t[n].centerY);
            r.labelMarginLeft = 0;
            r.labelMarginTop = 0;
            if (l.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var i = r.rect.width;
              var a = r.rect.height;
              if (r.labelWidth) {
                if (r.labelPosHorizontal == "left") {
                  r.rect.x -= r.labelWidth;
                  r.setWidth(i + r.labelWidth);
                  r.labelMarginLeft = r.labelWidth;
                } else if (r.labelPosHorizontal == "center" && r.labelWidth > i) {
                  r.rect.x -= (r.labelWidth - i) / 2;
                  r.setWidth(r.labelWidth);
                  r.labelMarginLeft = (r.labelWidth - i) / 2;
                } else if (r.labelPosHorizontal == "right") {
                  r.setWidth(i + r.labelWidth);
                }
              }
              if (r.labelHeight) {
                if (r.labelPosVertical == "top") {
                  r.rect.y -= r.labelHeight;
                  r.setHeight(a + r.labelHeight);
                  r.labelMarginTop = r.labelHeight;
                } else if (r.labelPosVertical == "center" && r.labelHeight > a) {
                  r.rect.y -= (r.labelHeight - a) / 2;
                  r.setHeight(r.labelHeight);
                  r.labelMarginTop = (r.labelHeight - a) / 2;
                } else if (r.labelPosVertical == "bottom") {
                  r.setHeight(a + r.labelHeight);
                }
              }
            }
          });
        };
        E.prototype.repopulateCompounds = function () {
          for (var e = this.compoundOrder.length - 1; e >= 0; e--) {
            var t = this.compoundOrder[e];
            var n = t.id;
            var r = t.paddingLeft;
            var i = t.paddingTop;
            var a = t.labelMarginLeft;
            var o = t.labelMarginTop;
            this.adjustLocations(this.tiledMemberPack[n], t.rect.x, t.rect.y, r, i, a, o);
          }
        };
        E.prototype.repopulateZeroDegreeMembers = function () {
          var e = this;
          var t = this.tiledZeroDegreePack;
          Object.keys(t).forEach(function (n) {
            var r = e.idToDummyNode[n];
            var i = r.paddingLeft;
            var a = r.paddingTop;
            var o = r.labelMarginLeft;
            var s = r.labelMarginTop;
            e.adjustLocations(t[n], r.rect.x, r.rect.y, i, a, o, s);
          });
        };
        E.prototype.getToBeTiled = function (e) {
          var t = e.id;
          if (this.toBeTiled[t] != null) {
            return this.toBeTiled[t];
          }
          var n = e.getChild();
          if (n == null) {
            this.toBeTiled[t] = false;
            return false;
          }
          var r = n.getNodes();
          var i = 0;
          for (; i < r.length; i++) {
            var a = r[i];
            if (this.getNodeDegree(a) > 0) {
              this.toBeTiled[t] = false;
              return false;
            }
            if (a.getChild() == null) {
              this.toBeTiled[a.id] = false;
              continue;
            }
            if (!this.getToBeTiled(a)) {
              this.toBeTiled[t] = false;
              return false;
            }
          }
          this.toBeTiled[t] = true;
          return true;
        };
        E.prototype.getNodeDegree = function (e) {
          e.id;
          var t = e.getEdges();
          var n = 0;
          var r = 0;
          for (; r < t.length; r++) {
            var i = t[r];
            if (i.getSource().id !== i.getTarget().id) {
              n += 1;
            }
          }
          return n;
        };
        E.prototype.getNodeDegreeWithChildren = function (e) {
          var t = this.getNodeDegree(e);
          if (e.getChild() == null) {
            return t;
          }
          var n = e.getChild().getNodes();
          var r = 0;
          for (; r < n.length; r++) {
            var i = n[r];
            t += this.getNodeDegreeWithChildren(i);
          }
          return t;
        };
        E.prototype.performDFSOnCompounds = function () {
          this.compoundOrder = [];
          this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
        };
        E.prototype.fillCompexOrderByDFS = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.getChild() != null) {
              this.fillCompexOrderByDFS(n.getChild().getNodes());
            }
            if (this.getToBeTiled(n)) {
              this.compoundOrder.push(n);
            }
          }
        };
        E.prototype.adjustLocations = function (e, t, n, r, i, a, o) {
          t += r + a;
          n += i + o;
          var s = t;
          var l = 0;
          for (; l < e.rows.length; l++) {
            var u = e.rows[l];
            t = s;
            var h = 0;
            var c = 0;
            for (; c < u.length; c++) {
              var d = u[c];
              d.rect.x = t;
              d.rect.y = n;
              t += d.rect.width + e.horizontalPadding;
              if (d.rect.height > h) {
                h = d.rect.height;
              }
            }
            n += h + e.verticalPadding;
          }
        };
        E.prototype.tileCompoundMembers = function (e, t) {
          var n = this;
          this.tiledMemberPack = [];
          Object.keys(e).forEach(function (r) {
            var i = t[r];
            n.tiledMemberPack[r] = n.tileNodes(e[r], i.paddingLeft + i.paddingRight);
            i.rect.width = n.tiledMemberPack[r].width;
            i.rect.height = n.tiledMemberPack[r].height;
            i.setCenter(n.tiledMemberPack[r].centerX, n.tiledMemberPack[r].centerY);
            i.labelMarginLeft = 0;
            i.labelMarginTop = 0;
            if (l.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var a = i.rect.width;
              var o = i.rect.height;
              if (i.labelWidth) {
                if (i.labelPosHorizontal == "left") {
                  i.rect.x -= i.labelWidth;
                  i.setWidth(a + i.labelWidth);
                  i.labelMarginLeft = i.labelWidth;
                } else if (i.labelPosHorizontal == "center" && i.labelWidth > a) {
                  i.rect.x -= (i.labelWidth - a) / 2;
                  i.setWidth(i.labelWidth);
                  i.labelMarginLeft = (i.labelWidth - a) / 2;
                } else if (i.labelPosHorizontal == "right") {
                  i.setWidth(a + i.labelWidth);
                }
              }
              if (i.labelHeight) {
                if (i.labelPosVertical == "top") {
                  i.rect.y -= i.labelHeight;
                  i.setHeight(o + i.labelHeight);
                  i.labelMarginTop = i.labelHeight;
                } else if (i.labelPosVertical == "center" && i.labelHeight > o) {
                  i.rect.y -= (i.labelHeight - o) / 2;
                  i.setHeight(i.labelHeight);
                  i.labelMarginTop = (i.labelHeight - o) / 2;
                } else if (i.labelPosVertical == "bottom") {
                  i.setHeight(o + i.labelHeight);
                }
              }
            }
          });
        };
        E.prototype.tileNodes = function (e, t) {
          var n;
          var r = this.tileNodesByFavoringDim(e, t, true);
          var i = this.tileNodesByFavoringDim(e, t, false);
          var a = this.getOrgRatio(r);
          if (this.getOrgRatio(i) < a) {
            return i;
          } else {
            return r;
          }
        };
        E.prototype.getOrgRatio = function (e) {
          var t = e.width / e.height;
          if (t < 1) {
            t = 1 / t;
          }
          return t;
        };
        E.prototype.calcIdealRowWidth = function (e, t) {
          var n;
          var r = l.TILING_PADDING_VERTICAL;
          var i = l.TILING_PADDING_HORIZONTAL;
          var a = e.length;
          var o = 0;
          var s = 0;
          var u = 0;
          e.forEach(function (e) {
            o += e.getWidth();
            s += e.getHeight();
            if (e.getWidth() > u) {
              u = e.getWidth();
            }
          });
          var h = o / a;
          var c = Math.pow(r - i, 2) + (h + i) * 4 * (s / a + r) * a;
          var d = (i - r + Math.sqrt(c)) / ((h + i) * 2);
          if (t) {
            if ((n = Math.ceil(d)) == d) {
              n++;
            }
          } else {
            n = Math.floor(d);
          }
          var p = n * (h + i) - i;
          if (u > p) {
            p = u;
          }
          return p += i * 2;
        };
        E.prototype.tileNodesByFavoringDim = function (e, t, n) {
          var r = l.TILING_PADDING_VERTICAL;
          var i = l.TILING_PADDING_HORIZONTAL;
          var a = l.TILING_COMPARE_BY;
          var o = {
            rows: [],
            rowWidth: [],
            rowHeight: [],
            width: 0,
            height: t,
            verticalPadding: r,
            horizontalPadding: i,
            centerX: 0,
            centerY: 0
          };
          if (a) {
            o.idealRowWidth = this.calcIdealRowWidth(e, n);
          }
          function s(e) {
            return e.rect.width * e.rect.height;
          }
          function u(e, t) {
            return s(t) - s(e);
          }
          e.sort(function (e, t) {
            var n = u;
            if (o.idealRowWidth) {
              return (n = a)(e.id, t.id);
            } else {
              return n(e, t);
            }
          });
          var h = 0;
          var c = 0;
          var d = 0;
          for (; d < e.length; d++) {
            var p = e[d];
            h += p.getCenterX();
            c += p.getCenterY();
          }
          o.centerX = h / e.length;
          o.centerY = c / e.length;
          for (var d = 0; d < e.length; d++) {
            var p = e[d];
            if (o.rows.length == 0) {
              this.insertNodeToRow(o, p, 0, t);
            } else if (this.canAddHorizontal(o, p.rect.width, p.rect.height)) {
              var g = o.rows.length - 1;
              if (!o.idealRowWidth) {
                g = this.getShortestRowIndex(o);
              }
              this.insertNodeToRow(o, p, g, t);
            } else {
              this.insertNodeToRow(o, p, o.rows.length, t);
            }
            this.shiftToLastRow(o);
          }
          return o;
        };
        E.prototype.insertNodeToRow = function (e, t, n, r) {
          if (n == e.rows.length) {
            e.rows.push([]);
            e.rowWidth.push(r);
            e.rowHeight.push(0);
          }
          var i = e.rowWidth[n] + t.rect.width;
          if (e.rows[n].length > 0) {
            i += e.horizontalPadding;
          }
          e.rowWidth[n] = i;
          if (e.width < i) {
            e.width = i;
          }
          var a = t.rect.height;
          if (n > 0) {
            a += e.verticalPadding;
          }
          var o = 0;
          if (a > e.rowHeight[n]) {
            o = e.rowHeight[n];
            e.rowHeight[n] = a;
            o = e.rowHeight[n] - o;
          }
          e.height += o;
          e.rows[n].push(t);
        };
        E.prototype.getShortestRowIndex = function (e) {
          var t = -1;
          var n = Number.MAX_VALUE;
          var r = 0;
          for (; r < e.rows.length; r++) {
            if (e.rowWidth[r] < n) {
              t = r;
              n = e.rowWidth[r];
            }
          }
          return t;
        };
        E.prototype.getLongestRowIndex = function (e) {
          var t = -1;
          var n = Number.MIN_VALUE;
          var r = 0;
          for (; r < e.rows.length; r++) {
            if (e.rowWidth[r] > n) {
              t = r;
              n = e.rowWidth[r];
            }
          }
          return t;
        };
        E.prototype.canAddHorizontal = function (e, t, n) {
          if (e.idealRowWidth) {
            var r;
            var i;
            var a = e.rows.length - 1;
            return e.rowWidth[a] + t + e.horizontalPadding <= e.idealRowWidth;
          }
          var o = this.getShortestRowIndex(e);
          if (o < 0) {
            return true;
          }
          var s = e.rowWidth[o];
          if (s + e.horizontalPadding + t <= e.width) {
            return true;
          }
          var l = 0;
          if (e.rowHeight[o] < n && o > 0) {
            l = n + e.verticalPadding - e.rowHeight[o];
          }
          r = e.width - s >= t + e.horizontalPadding ? (e.height + l) / (s + t + e.horizontalPadding) : (e.height + l) / e.width;
          l = n + e.verticalPadding;
          if ((i = e.width < t ? (e.height + l) / t : (e.height + l) / e.width) < 1) {
            i = 1 / i;
          }
          if (r < 1) {
            r = 1 / r;
          }
          return r < i;
        };
        E.prototype.shiftToLastRow = function (e) {
          var t = this.getLongestRowIndex(e);
          var n = e.rowWidth.length - 1;
          var r = e.rows[t];
          var i = r[r.length - 1];
          var a = i.width + e.horizontalPadding;
          if (e.width - e.rowWidth[n] > a && t != n) {
            r.splice(-1, 1);
            e.rows[n].push(i);
            e.rowWidth[t] = e.rowWidth[t] - a;
            e.rowWidth[n] = e.rowWidth[n] + a;
            e.width = e.rowWidth[instance.getLongestRowIndex(e)];
            var o = Number.MIN_VALUE;
            var s = 0;
            for (; s < r.length; s++) {
              if (r[s].height > o) {
                o = r[s].height;
              }
            }
            if (t > 0) {
              o += e.verticalPadding;
            }
            var l = e.rowHeight[t] + e.rowHeight[n];
            e.rowHeight[t] = o;
            if (e.rowHeight[n] < i.height + e.verticalPadding) {
              e.rowHeight[n] = i.height + e.verticalPadding;
            }
            var u = e.rowHeight[t] + e.rowHeight[n];
            e.height += u - l;
            this.shiftToLastRow(e);
          }
        };
        E.prototype.tilingPreLayout = function () {
          if (l.TILE) {
            this.groupZeroDegreeMembers();
            this.clearCompounds();
            this.clearZeroDegreeMembers();
          }
        };
        E.prototype.tilingPostLayout = function () {
          if (l.TILE) {
            this.repopulateZeroDegreeMembers();
            this.repopulateCompounds();
          }
        };
        E.prototype.reduceTrees = function () {
          var e;
          var t = [];
          var n = true;
          while (n) {
            var r = this.graphManager.getAllNodes();
            var i = [];
            n = false;
            for (var a = 0; a < r.length; a++) {
              if ((e = r[a]).getEdges().length == 1 && !e.getEdges()[0].isInterGraph && e.getChild() == null) {
                if (l.PURE_INCREMENTAL) {
                  var o = e.getEdges()[0].getOtherEnd(e);
                  var s = new g(e.getCenterX() - o.getCenterX(), e.getCenterY() - o.getCenterY());
                  i.push([e, e.getEdges()[0], e.getOwner(), s]);
                } else {
                  i.push([e, e.getEdges()[0], e.getOwner()]);
                }
                n = true;
              }
            }
            if (n == true) {
              var u = [];
              var h = 0;
              for (; h < i.length; h++) {
                if (i[h][0].getEdges().length == 1) {
                  u.push(i[h]);
                  i[h][0].getOwner().remove(i[h][0]);
                }
              }
              t.push(u);
              this.graphManager.resetAllNodes();
              this.graphManager.resetAllEdges();
            }
          }
          this.prunedNodesAll = t;
        };
        E.prototype.growTree = function (e) {
          var t;
          var n = e.length;
          var r = e[n - 1];
          var i = 0;
          for (; i < r.length; i++) {
            t = r[i];
            this.findPlaceforPrunedNode(t);
            t[2].add(t[0]);
            t[2].add(t[1], t[1].source, t[1].target);
          }
          e.splice(e.length - 1, 1);
          this.graphManager.resetAllNodes();
          this.graphManager.resetAllEdges();
        };
        E.prototype.findPlaceforPrunedNode = function (e) {
          var t = e[0];
          r = t == e[1].source ? e[1].target : e[1].source;
          if (l.PURE_INCREMENTAL) {
            t.setCenter(r.getCenterX() + e[3].getWidth(), r.getCenterY() + e[3].getHeight());
          } else {
            var n;
            var r;
            var i;
            var a;
            var o = r.startX;
            var s = r.finishX;
            var u = r.startY;
            var c = r.finishY;
            var d = [0, 0, 0, 0];
            if (u > 0) {
              for (var p = o; p <= s; p++) {
                d[0] += this.grid[p][u - 1].length + this.grid[p][u].length - 1;
              }
            }
            if (s < this.grid.length - 1) {
              for (var p = u; p <= c; p++) {
                d[1] += this.grid[s + 1][p].length + this.grid[s][p].length - 1;
              }
            }
            if (c < this.grid[0].length - 1) {
              for (var p = o; p <= s; p++) {
                d[2] += this.grid[p][c + 1].length + this.grid[p][c].length - 1;
              }
            }
            if (o > 0) {
              for (var p = u; p <= c; p++) {
                d[3] += this.grid[o - 1][p].length + this.grid[o][p].length - 1;
              }
            }
            var g = v.MAX_VALUE;
            var f = 0;
            for (; f < d.length; f++) {
              if (d[f] < g) {
                g = d[f];
                i = 1;
                a = f;
              } else if (d[f] == g) {
                i++;
              }
            }
            if (i == 3 && g == 0) {
              if (d[0] == 0 && d[1] == 0 && d[2] == 0) {
                n = 1;
              } else if (d[0] == 0 && d[1] == 0 && d[3] == 0) {
                n = 0;
              } else if (d[0] == 0 && d[2] == 0 && d[3] == 0) {
                n = 3;
              } else if (d[1] == 0 && d[2] == 0 && d[3] == 0) {
                n = 2;
              }
            } else if (i == 2 && g == 0) {
              var y = Math.floor(Math.random() * 2);
              n = d[0] == 0 && d[1] == 0 ? +(y != 0) : d[0] == 0 && d[2] == 0 ? (y != 0) * 2 : d[0] == 0 && d[3] == 0 ? (y != 0) * 3 : d[1] == 0 && d[2] == 0 ? y == 0 ? 1 : 2 : d[1] == 0 && d[3] == 0 ? y == 0 ? 1 : 3 : y == 0 ? 2 : 3;
            } else if (i == 4 && g == 0) {
              var y = Math.floor(Math.random() * 4);
              n = y;
            } else {
              n = a;
            }
            if (n == 0) {
              t.setCenter(r.getCenterX(), r.getCenterY() - r.getHeight() / 2 - h.DEFAULT_EDGE_LENGTH - t.getHeight() / 2);
            } else if (n == 1) {
              t.setCenter(r.getCenterX() + r.getWidth() / 2 + h.DEFAULT_EDGE_LENGTH + t.getWidth() / 2, r.getCenterY());
            } else if (n == 2) {
              t.setCenter(r.getCenterX(), r.getCenterY() + r.getHeight() / 2 + h.DEFAULT_EDGE_LENGTH + t.getHeight() / 2);
            } else {
              t.setCenter(r.getCenterX() - r.getWidth() / 2 - h.DEFAULT_EDGE_LENGTH - t.getWidth() / 2, r.getCenterY());
            }
          }
        };
        e.exports = E;
      },
      991: (e, t, n) => {
        var r = n(551).FDLayoutNode;
        var i = n(551).IMath;
        function a(e, t, n, i) {
          r.call(this, e, t, n, i);
        }
        a.prototype = Object.create(r.prototype);
        for (var o in r) {
          a[o] = r[o];
        }
        a.prototype.calculateDisplacement = function () {
          var e = this.graphManager.getLayout();
          if (this.getChild() != null && this.fixedNodeWeight) {
            this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight;
            this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight;
          } else {
            this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
            this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;
          }
          if (Math.abs(this.displacementX) > e.coolingFactor * e.maxNodeDisplacement) {
            this.displacementX = e.coolingFactor * e.maxNodeDisplacement * i.sign(this.displacementX);
          }
          if (Math.abs(this.displacementY) > e.coolingFactor * e.maxNodeDisplacement) {
            this.displacementY = e.coolingFactor * e.maxNodeDisplacement * i.sign(this.displacementY);
          }
          if (this.child && this.child.getNodes().length > 0) {
            this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
          }
        };
        a.prototype.propogateDisplacementToChildren = function (e, t) {
          var n;
          var r = this.getChild().getNodes();
          var i = 0;
          for (; i < r.length; i++) {
            if ((n = r[i]).getChild() == null) {
              n.displacementX += e;
              n.displacementY += t;
            } else {
              n.propogateDisplacementToChildren(e, t);
            }
          }
        };
        a.prototype.move = function () {
          var e = this.graphManager.getLayout();
          if (this.child == null || this.child.getNodes().length == 0) {
            this.moveBy(this.displacementX, this.displacementY);
            e.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);
          }
          this.springForceX = 0;
          this.springForceY = 0;
          this.repulsionForceX = 0;
          this.repulsionForceY = 0;
          this.gravitationForceX = 0;
          this.gravitationForceY = 0;
          this.displacementX = 0;
          this.displacementY = 0;
        };
        a.prototype.setPred1 = function (e) {
          this.pred1 = e;
        };
        a.prototype.getPred1 = function () {
          return pred1;
        };
        a.prototype.getPred2 = function () {
          return pred2;
        };
        a.prototype.setNext = function (e) {
          this.next = e;
        };
        a.prototype.getNext = function () {
          return next;
        };
        a.prototype.setProcessed = function (e) {
          this.processed = e;
        };
        a.prototype.isProcessed = function () {
          return processed;
        };
        e.exports = a;
      },
      902: (e, t, n) => {
        function r(e) {
          if (!Array.isArray(e)) {
            return Array.from(e);
          }
          var t = 0;
          var n = Array(e.length);
          for (; t < e.length; t++) {
            n[t] = e[t];
          }
          return n;
        }
        var i = n(806);
        var a = n(551).LinkedList;
        var o = n(551).Matrix;
        var s = n(551).SVD;
        function l() {}
        l.handleConstraints = function (e) {
          var t = {
            fixedNodeConstraint: e.constraints.fixedNodeConstraint,
            alignmentConstraint: e.constraints.alignmentConstraint,
            relativePlacementConstraint: e.constraints.relativePlacementConstraint
          };
          var n = new Map();
          var l = new Map();
          var u = [];
          var h = [];
          var c = e.getAllNodes();
          var d = 0;
          var p = 0;
          for (; p < c.length; p++) {
            var g = c[p];
            if (g.getChild() == null) {
              l.set(g.id, d++);
              u.push(g.getCenterX());
              h.push(g.getCenterY());
              n.set(g.id, g);
            }
          }
          if (t.relativePlacementConstraint) {
            t.relativePlacementConstraint.forEach(function (e) {
              if (!e.gap && e.gap != 0) {
                if (e.left) {
                  e.gap = i.DEFAULT_EDGE_LENGTH + n.get(e.left).getWidth() / 2 + n.get(e.right).getWidth() / 2;
                } else {
                  e.gap = i.DEFAULT_EDGE_LENGTH + n.get(e.top).getHeight() / 2 + n.get(e.bottom).getHeight() / 2;
                }
              }
            });
          }
          function f(e) {
            var t = 0;
            var n = 0;
            e.forEach(function (e) {
              t += u[l.get(e)];
              n += h[l.get(e)];
            });
            return {
              x: t / e.size,
              y: n / e.size
            };
          }
          function v(e, t, n, i, o) {
            var s = new Map();
            e.forEach(function (e, t) {
              s.set(t, 0);
            });
            e.forEach(function (e, t) {
              e.forEach(function (e) {
                s.set(e.id, s.get(e.id) + 1);
              });
            });
            var c = new Map();
            var d = new Map();
            var p = new a();
            s.forEach(function (e, r) {
              if (e == 0) {
                p.push(r);
                if (!n) {
                  if (t == "horizontal") {
                    c.set(r, l.has(r) ? u[l.get(r)] : i.get(r));
                  } else {
                    c.set(r, l.has(r) ? h[l.get(r)] : i.get(r));
                  }
                }
              } else {
                c.set(r, Number.NEGATIVE_INFINITY);
              }
              if (n) {
                d.set(r, new Set([r]));
              }
            });
            if (n) {
              o.forEach(function (e) {
                var r = [];
                e.forEach(function (e) {
                  if (n.has(e)) {
                    r.push(e);
                  }
                });
                if (r.length > 0) {
                  var a = 0;
                  r.forEach(function (e) {
                    if (t == "horizontal") {
                      c.set(e, l.has(e) ? u[l.get(e)] : i.get(e));
                    } else {
                      c.set(e, l.has(e) ? h[l.get(e)] : i.get(e));
                    }
                    a += c.get(e);
                  });
                  a /= r.length;
                  e.forEach(function (e) {
                    if (!n.has(e)) {
                      c.set(e, a);
                    }
                  });
                } else {
                  var o = 0;
                  e.forEach(function (e) {
                    if (t == "horizontal") {
                      o += l.has(e) ? u[l.get(e)] : i.get(e);
                    } else {
                      o += l.has(e) ? h[l.get(e)] : i.get(e);
                    }
                  });
                  o /= e.length;
                  e.forEach(function (e) {
                    c.set(e, o);
                  });
                }
              });
            }
            while (p.length != 0) {
              (function () {
                var r = p.shift();
                e.get(r).forEach(function (e) {
                  if (c.get(e.id) < c.get(r) + e.gap) {
                    if (n && n.has(e.id)) {
                      var a = undefined;
                      a = t == "horizontal" ? l.has(e.id) ? u[l.get(e.id)] : i.get(e.id) : l.has(e.id) ? h[l.get(e.id)] : i.get(e.id);
                      c.set(e.id, a);
                      if (a < c.get(r) + e.gap) {
                        var o = c.get(r) + e.gap - a;
                        d.get(r).forEach(function (e) {
                          c.set(e, c.get(e) - o);
                        });
                      }
                    } else {
                      c.set(e.id, c.get(r) + e.gap);
                    }
                  }
                  s.set(e.id, s.get(e.id) - 1);
                  if (s.get(e.id) == 0) {
                    p.push(e.id);
                  }
                  if (n) {
                    d.set(e.id, function (e, t) {
                      var n = new Set(e);
                      var r = true;
                      var i = false;
                      var a = undefined;
                      try {
                        var o;
                        var s = t[Symbol.iterator]();
                        for (; !(r = (o = s.next()).done); r = true) {
                          var l = o.value;
                          n.add(l);
                        }
                      } catch (e) {
                        i = true;
                        a = e;
                      } finally {
                        try {
                          if (!r && s.return) {
                            s.return();
                          }
                        } finally {
                          if (i) {
                            throw a;
                          }
                        }
                      }
                      return n;
                    }(d.get(r), d.get(e.id)));
                  }
                });
              })();
            }
            if (n) {
              var g = new Set();
              e.forEach(function (e, t) {
                if (e.length == 0) {
                  g.add(t);
                }
              });
              var f = [];
              d.forEach(function (e, t) {
                if (g.has(t)) {
                  var i = false;
                  var a = true;
                  var o = false;
                  var s = undefined;
                  try {
                    var l;
                    var u = e[Symbol.iterator]();
                    for (; !(a = (l = u.next()).done); a = true) {
                      var h = l.value;
                      if (n.has(h)) {
                        i = true;
                      }
                    }
                  } catch (e) {
                    o = true;
                    s = e;
                  } finally {
                    try {
                      if (!a && u.return) {
                        u.return();
                      }
                    } finally {
                      if (o) {
                        throw s;
                      }
                    }
                  }
                  if (!i) {
                    var c = false;
                    var d = undefined;
                    f.forEach(function (t, n) {
                      if (t.has([].concat(r(e))[0])) {
                        c = true;
                        d = n;
                      }
                    });
                    if (c) {
                      e.forEach(function (e) {
                        f[d].add(e);
                      });
                    } else {
                      f.push(new Set(e));
                    }
                  }
                }
              });
              f.forEach(function (e, n) {
                var r = Number.POSITIVE_INFINITY;
                var a = Number.POSITIVE_INFINITY;
                var o = Number.NEGATIVE_INFINITY;
                var s = Number.NEGATIVE_INFINITY;
                var d = true;
                var p = false;
                var g = undefined;
                try {
                  var f;
                  var v = e[Symbol.iterator]();
                  for (; !(d = (f = v.next()).done); d = true) {
                    var y = f.value;
                    var b = undefined;
                    b = t == "horizontal" ? l.has(y) ? u[l.get(y)] : i.get(y) : l.has(y) ? h[l.get(y)] : i.get(y);
                    var x = c.get(y);
                    if (b < r) {
                      r = b;
                    }
                    if (b > o) {
                      o = b;
                    }
                    if (x < a) {
                      a = x;
                    }
                    if (x > s) {
                      s = x;
                    }
                  }
                } catch (e) {
                  p = true;
                  g = e;
                } finally {
                  try {
                    if (!d && v.return) {
                      v.return();
                    }
                  } finally {
                    if (p) {
                      throw g;
                    }
                  }
                }
                var w = (r + o) / 2 - (a + s) / 2;
                var E = true;
                var T = false;
                var C = undefined;
                try {
                  var N;
                  var _ = e[Symbol.iterator]();
                  for (; !(E = (N = _.next()).done); E = true) {
                    var D = N.value;
                    c.set(D, c.get(D) + w);
                  }
                } catch (e) {
                  T = true;
                  C = e;
                } finally {
                  try {
                    if (!E && _.return) {
                      _.return();
                    }
                  } finally {
                    if (T) {
                      throw C;
                    }
                  }
                }
              });
            }
            return c;
          }
          function y(e) {
            var t = 0;
            var n = 0;
            var r = 0;
            var i = 0;
            e.forEach(function (e) {
              if (e.left) {
                if (u[l.get(e.left)] - u[l.get(e.right)] >= 0) {
                  t++;
                } else {
                  n++;
                }
              } else if (h[l.get(e.top)] - h[l.get(e.bottom)] >= 0) {
                r++;
              } else {
                i++;
              }
            });
            if (t > n && r > i) {
              for (var a = 0; a < l.size; a++) {
                u[a] = u[a] * -1;
                h[a] = h[a] * -1;
              }
            } else if (t > n) {
              for (var o = 0; o < l.size; o++) {
                u[o] = u[o] * -1;
              }
            } else if (r > i) {
              for (var s = 0; s < l.size; s++) {
                h[s] = h[s] * -1;
              }
            }
          }
          function b(e) {
            var t = [];
            var n = new a();
            var r = new Set();
            var i = 0;
            e.forEach(function (a, o) {
              if (!r.has(o)) {
                t[i] = [];
                var s = o;
                n.push(s);
                r.add(s);
                t[i].push(s);
                while (n.length != 0) {
                  s = n.shift();
                  e.get(s).forEach(function (e) {
                    if (!r.has(e.id)) {
                      n.push(e.id);
                      r.add(e.id);
                      t[i].push(e.id);
                    }
                  });
                }
                i++;
              }
            });
            return t;
          }
          function x(e) {
            var t = new Map();
            e.forEach(function (e, n) {
              t.set(n, []);
            });
            e.forEach(function (e, n) {
              e.forEach(function (e) {
                t.get(n).push(e);
                t.get(e.id).push({
                  id: n,
                  gap: e.gap,
                  direction: e.direction
                });
              });
            });
            return t;
          }
          function w(e) {
            var t = new Map();
            e.forEach(function (e, n) {
              t.set(n, []);
            });
            e.forEach(function (e, n) {
              e.forEach(function (e) {
                t.get(e.id).push({
                  id: n,
                  gap: e.gap,
                  direction: e.direction
                });
              });
            });
            return t;
          }
          var E = [];
          var T = [];
          var C = false;
          var N = false;
          var _ = new Set();
          var D = new Map();
          var M = new Map();
          var A = [];
          if (t.fixedNodeConstraint) {
            t.fixedNodeConstraint.forEach(function (e) {
              _.add(e.nodeId);
            });
          }
          if (t.relativePlacementConstraint) {
            t.relativePlacementConstraint.forEach(function (e) {
              if (e.left) {
                if (D.has(e.left)) {
                  D.get(e.left).push({
                    id: e.right,
                    gap: e.gap,
                    direction: "horizontal"
                  });
                } else {
                  D.set(e.left, [{
                    id: e.right,
                    gap: e.gap,
                    direction: "horizontal"
                  }]);
                }
                if (!D.has(e.right)) {
                  D.set(e.right, []);
                }
              } else {
                if (D.has(e.top)) {
                  D.get(e.top).push({
                    id: e.bottom,
                    gap: e.gap,
                    direction: "vertical"
                  });
                } else {
                  D.set(e.top, [{
                    id: e.bottom,
                    gap: e.gap,
                    direction: "vertical"
                  }]);
                }
                if (!D.has(e.bottom)) {
                  D.set(e.bottom, []);
                }
              }
            });
            A = b(M = x(D));
          }
          if (i.TRANSFORM_ON_CONSTRAINT_HANDLING) {
            if (t.fixedNodeConstraint && t.fixedNodeConstraint.length > 1) {
              t.fixedNodeConstraint.forEach(function (e, t) {
                E[t] = [e.position.x, e.position.y];
                T[t] = [u[l.get(e.nodeId)], h[l.get(e.nodeId)]];
              });
              C = true;
            } else if (t.alignmentConstraint) {
              (function () {
                var e = 0;
                if (t.alignmentConstraint.vertical) {
                  var n = t.alignmentConstraint.vertical;
                  var i = 0;
                  for (; i < n.length; i++) {
                    (function (t) {
                      var i = new Set();
                      n[t].forEach(function (e) {
                        i.add(e);
                      });
                      var a = new Set([].concat(r(i)).filter(function (e) {
                        return _.has(e);
                      }));
                      var o = undefined;
                      o = a.size > 0 ? u[l.get(a.values().next().value)] : f(i).x;
                      n[t].forEach(function (t) {
                        E[e] = [o, h[l.get(t)]];
                        T[e] = [u[l.get(t)], h[l.get(t)]];
                        e++;
                      });
                    })(i);
                  }
                  C = true;
                }
                if (t.alignmentConstraint.horizontal) {
                  var a = t.alignmentConstraint.horizontal;
                  var o = 0;
                  for (; o < a.length; o++) {
                    (function (t) {
                      var n = new Set();
                      a[t].forEach(function (e) {
                        n.add(e);
                      });
                      var i = new Set([].concat(r(n)).filter(function (e) {
                        return _.has(e);
                      }));
                      var o = undefined;
                      o = i.size > 0 ? u[l.get(i.values().next().value)] : f(n).y;
                      a[t].forEach(function (t) {
                        E[e] = [u[l.get(t)], o];
                        T[e] = [u[l.get(t)], h[l.get(t)]];
                        e++;
                      });
                    })(o);
                  }
                  C = true;
                }
                if (t.relativePlacementConstraint) {
                  N = true;
                }
              })();
            } else if (t.relativePlacementConstraint) {
              var S = 0;
              var P = 0;
              var O = 0;
              for (; O < A.length; O++) {
                if (A[O].length > S) {
                  S = A[O].length;
                  P = O;
                }
              }
              if (S < M.size / 2) {
                y(t.relativePlacementConstraint);
                C = false;
                N = false;
              } else {
                var I = new Map();
                var L = new Map();
                var k = [];
                A[P].forEach(function (e) {
                  D.get(e).forEach(function (t) {
                    if (t.direction == "horizontal") {
                      if (I.has(e)) {
                        I.get(e).push(t);
                      } else {
                        I.set(e, [t]);
                      }
                      if (!I.has(t.id)) {
                        I.set(t.id, []);
                      }
                      k.push({
                        left: e,
                        right: t.id
                      });
                    } else {
                      if (L.has(e)) {
                        L.get(e).push(t);
                      } else {
                        L.set(e, [t]);
                      }
                      if (!L.has(t.id)) {
                        L.set(t.id, []);
                      }
                      k.push({
                        top: e,
                        bottom: t.id
                      });
                    }
                  });
                });
                y(k);
                N = false;
                var R = v(I, "horizontal");
                var B = v(L, "vertical");
                A[P].forEach(function (e, t) {
                  T[t] = [u[l.get(e)], h[l.get(e)]];
                  E[t] = [];
                  if (R.has(e)) {
                    E[t][0] = R.get(e);
                  } else {
                    E[t][0] = u[l.get(e)];
                  }
                  if (B.has(e)) {
                    E[t][1] = B.get(e);
                  } else {
                    E[t][1] = h[l.get(e)];
                  }
                });
                C = true;
              }
            }
            if (C) {
              var F = undefined;
              var z = o.transpose(E);
              var V = o.transpose(T);
              var Y = 0;
              for (; Y < z.length; Y++) {
                z[Y] = o.multGamma(z[Y]);
                V[Y] = o.multGamma(V[Y]);
              }
              var G = o.multMat(z, o.transpose(V));
              var X = s.svd(G);
              F = o.multMat(X.V, o.transpose(X.U));
              for (var H = 0; H < l.size; H++) {
                var U = [u[H], h[H]];
                var W = [F[0][0], F[1][0]];
                var j = [F[0][1], F[1][1]];
                u[H] = o.dotProduct(U, W);
                h[H] = o.dotProduct(U, j);
              }
              if (N) {
                y(t.relativePlacementConstraint);
              }
            }
          }
          if (i.ENFORCE_CONSTRAINTS) {
            if (t.fixedNodeConstraint && t.fixedNodeConstraint.length > 0) {
              var q = {
                x: 0,
                y: 0
              };
              t.fixedNodeConstraint.forEach(function (e, t) {
                var n;
                var r = {
                  x: u[l.get(e.nodeId)],
                  y: h[l.get(e.nodeId)]
                };
                var i = {
                  x: (n = e.position).x - r.x,
                  y: n.y - r.y
                };
                q.x += i.x;
                q.y += i.y;
              });
              q.x /= t.fixedNodeConstraint.length;
              q.y /= t.fixedNodeConstraint.length;
              u.forEach(function (e, t) {
                u[t] += q.x;
              });
              h.forEach(function (e, t) {
                h[t] += q.y;
              });
              t.fixedNodeConstraint.forEach(function (e) {
                u[l.get(e.nodeId)] = e.position.x;
                h[l.get(e.nodeId)] = e.position.y;
              });
            }
            if (t.alignmentConstraint) {
              if (t.alignmentConstraint.vertical) {
                var K = t.alignmentConstraint.vertical;
                var Z = 0;
                for (; Z < K.length; Z++) {
                  (function (e) {
                    var t = new Set();
                    K[e].forEach(function (e) {
                      t.add(e);
                    });
                    var n = new Set([].concat(r(t)).filter(function (e) {
                      return _.has(e);
                    }));
                    var i = undefined;
                    i = n.size > 0 ? u[l.get(n.values().next().value)] : f(t).x;
                    t.forEach(function (e) {
                      if (!_.has(e)) {
                        u[l.get(e)] = i;
                      }
                    });
                  })(Z);
                }
              }
              if (t.alignmentConstraint.horizontal) {
                var $ = t.alignmentConstraint.horizontal;
                var Q = 0;
                for (; Q < $.length; Q++) {
                  (function (e) {
                    var t = new Set();
                    $[e].forEach(function (e) {
                      t.add(e);
                    });
                    var n = new Set([].concat(r(t)).filter(function (e) {
                      return _.has(e);
                    }));
                    var i = undefined;
                    i = n.size > 0 ? h[l.get(n.values().next().value)] : f(t).y;
                    t.forEach(function (e) {
                      if (!_.has(e)) {
                        h[l.get(e)] = i;
                      }
                    });
                  })(Q);
                }
              }
            }
            if (t.relativePlacementConstraint) {
              (function () {
                var e = new Map();
                var n = new Map();
                var r = new Map();
                var i = new Map();
                var a = new Map();
                var o = new Map();
                var s = new Set();
                var c = new Set();
                _.forEach(function (e) {
                  s.add(e);
                  c.add(e);
                });
                if (t.alignmentConstraint) {
                  if (t.alignmentConstraint.vertical) {
                    var d = t.alignmentConstraint.vertical;
                    function p(t) {
                      r.set("dummy" + t, []);
                      d[t].forEach(function (n) {
                        e.set(n, "dummy" + t);
                        r.get("dummy" + t).push(n);
                        if (_.has(n)) {
                          s.add("dummy" + t);
                        }
                      });
                      a.set("dummy" + t, u[l.get(d[t][0])]);
                    }
                    var g = 0;
                    for (; g < d.length; g++) {
                      p(g);
                    }
                  }
                  if (t.alignmentConstraint.horizontal) {
                    var f = t.alignmentConstraint.horizontal;
                    function y(e) {
                      i.set("dummy" + e, []);
                      f[e].forEach(function (t) {
                        n.set(t, "dummy" + e);
                        i.get("dummy" + e).push(t);
                        if (_.has(t)) {
                          c.add("dummy" + e);
                        }
                      });
                      o.set("dummy" + e, h[l.get(f[e][0])]);
                    }
                    var E = 0;
                    for (; E < f.length; E++) {
                      y(E);
                    }
                  }
                }
                var T = new Map();
                var C = new Map();
                function N(t) {
                  D.get(t).forEach(function (r) {
                    var i = undefined;
                    var a = undefined;
                    if (r.direction == "horizontal") {
                      i = e.get(t) ? e.get(t) : t;
                      a = e.get(r.id) ? {
                        id: e.get(r.id),
                        gap: r.gap,
                        direction: r.direction
                      } : r;
                      if (T.has(i)) {
                        T.get(i).push(a);
                      } else {
                        T.set(i, [a]);
                      }
                      if (!T.has(a.id)) {
                        T.set(a.id, []);
                      }
                    } else {
                      i = n.get(t) ? n.get(t) : t;
                      a = n.get(r.id) ? {
                        id: n.get(r.id),
                        gap: r.gap,
                        direction: r.direction
                      } : r;
                      if (C.has(i)) {
                        C.get(i).push(a);
                      } else {
                        C.set(i, [a]);
                      }
                      if (!C.has(a.id)) {
                        C.set(a.id, []);
                      }
                    }
                  });
                }
                var M = true;
                var A = false;
                var S = undefined;
                try {
                  var P;
                  var O = D.keys()[Symbol.iterator]();
                  for (; !(M = (P = O.next()).done); M = true) {
                    var I = P.value;
                    N(I);
                  }
                } catch (e) {
                  A = true;
                  S = e;
                } finally {
                  try {
                    if (!M && O.return) {
                      O.return();
                    }
                  } finally {
                    if (A) {
                      throw S;
                    }
                  }
                }
                var L = x(T);
                var k = x(C);
                var R = b(L);
                var B = b(k);
                var F = w(T);
                var z = w(C);
                var V = [];
                var Y = [];
                R.forEach(function (e, t) {
                  V[t] = [];
                  e.forEach(function (e) {
                    if (F.get(e).length == 0) {
                      V[t].push(e);
                    }
                  });
                });
                B.forEach(function (e, t) {
                  Y[t] = [];
                  e.forEach(function (e) {
                    if (z.get(e).length == 0) {
                      Y[t].push(e);
                    }
                  });
                });
                var G = v(T, "horizontal", s, a, V);
                var X = v(C, "vertical", c, o, Y);
                function H(e) {
                  if (r.get(e)) {
                    r.get(e).forEach(function (t) {
                      u[l.get(t)] = G.get(e);
                    });
                  } else {
                    u[l.get(e)] = G.get(e);
                  }
                }
                var U = true;
                var W = false;
                var j = undefined;
                try {
                  var q;
                  var K = G.keys()[Symbol.iterator]();
                  for (; !(U = (q = K.next()).done); U = true) {
                    var Z = q.value;
                    H(Z);
                  }
                } catch (e) {
                  W = true;
                  j = e;
                } finally {
                  try {
                    if (!U && K.return) {
                      K.return();
                    }
                  } finally {
                    if (W) {
                      throw j;
                    }
                  }
                }
                function $(e) {
                  if (i.get(e)) {
                    i.get(e).forEach(function (t) {
                      h[l.get(t)] = X.get(e);
                    });
                  } else {
                    h[l.get(e)] = X.get(e);
                  }
                }
                var Q = true;
                var J = false;
                var ee = undefined;
                try {
                  var et;
                  var en = X.keys()[Symbol.iterator]();
                  for (; !(Q = (et = en.next()).done); Q = true) {
                    var Z = et.value;
                    $(Z);
                  }
                } catch (e) {
                  J = true;
                  ee = e;
                } finally {
                  try {
                    if (!Q && en.return) {
                      en.return();
                    }
                  } finally {
                    if (J) {
                      throw ee;
                    }
                  }
                }
              })();
            }
          }
          for (var J = 0; J < c.length; J++) {
            var ee = c[J];
            if (ee.getChild() == null) {
              ee.setCenter(u[l.get(ee.id)], h[l.get(ee.id)]);
            }
          }
        };
        e.exports = l;
      },
      551: t => {
        t.exports = e;
      }
    };
    n = {};
    return function e(r) {
      var i = n[r];
      if (i !== undefined) {
        return i.exports;
      }
      var a = n[r] = {
        exports: {}
      };
      t[r](a, a.exports, e);
      return a.exports;
    }(45);
  };
  module.exports = r(require("force-directed-graph-layout") /*id: 873861*/);
}