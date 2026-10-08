// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(855810) to 'cose-layout-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51836.77840dba.js
         * chunkId: 51836
         * moduleId: 168116
         */
module.exports = function (module, exports, require) {
  var i;
  i = function (t) {
    return function (t) {
      var e = {};
      function n(i) {
        if (e[i]) {
          return e[i].exports;
        }
        var s = e[i] = {
          i: i,
          l: false,
          exports: {}
        };
        t[i].call(s.exports, s, s.exports, n);
        s.l = true;
        return s.exports;
      }
      n.m = t;
      n.c = e;
      n.i = function (t) {
        return t;
      };
      n.d = function (t, e, i) {
        if (!n.o(t, e)) {
          Object.defineProperty(t, e, {
            configurable: false,
            enumerable: true,
            get: i
          });
        }
      };
      n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        n.d(e, "a", e);
        return e;
      };
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
      n.p = "";
      return n(n.s = 1);
    }([function (e, n) {
      e.exports = t;
    }, function (t, e, n) {
      "use strict";

      var i = n(0).layoutBase.LayoutConstants;
      var s = n(0).layoutBase.FDLayoutConstants;
      var o = n(0).CoSEConstants;
      var r = n(0).CoSELayout;
      var a = n(0).CoSENode;
      var l = n(0).layoutBase.PointD;
      var c = n(0).layoutBase.DimensionD;
      var d = {
        ready: function () {},
        stop: function () {},
        quality: "default",
        nodeDimensionsIncludeLabels: false,
        refresh: 30,
        fit: true,
        padding: 10,
        randomize: true,
        nodeRepulsion: 4500,
        idealEdgeLength: 50,
        edgeElasticity: 0.45,
        nestingFactor: 0.1,
        gravity: 0.25,
        numIter: 2500,
        tile: true,
        animate: "end",
        animationDuration: 500,
        tilingPaddingVertical: 10,
        tilingPaddingHorizontal: 10,
        gravityRangeCompound: 1.5,
        gravityCompound: 1,
        gravityRange: 3.8,
        initialEnergyOnIncremental: 0.5
      };
      function h(t) {
        this.options = function (t, e) {
          var n = {};
          for (var i in t) {
            n[i] = t[i];
          }
          for (var i in e) {
            n[i] = e[i];
          }
          return n;
        }(d, t);
        u(this.options);
      }
      function u(t) {
        if (t.nodeRepulsion != null) {
          o.DEFAULT_REPULSION_STRENGTH = s.DEFAULT_REPULSION_STRENGTH = t.nodeRepulsion;
        }
        if (t.idealEdgeLength != null) {
          o.DEFAULT_EDGE_LENGTH = s.DEFAULT_EDGE_LENGTH = t.idealEdgeLength;
        }
        if (t.edgeElasticity != null) {
          o.DEFAULT_SPRING_STRENGTH = s.DEFAULT_SPRING_STRENGTH = t.edgeElasticity;
        }
        if (t.nestingFactor != null) {
          o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.nestingFactor;
        }
        if (t.gravity != null) {
          o.DEFAULT_GRAVITY_STRENGTH = s.DEFAULT_GRAVITY_STRENGTH = t.gravity;
        }
        if (t.numIter != null) {
          o.MAX_ITERATIONS = s.MAX_ITERATIONS = t.numIter;
        }
        if (t.gravityRange != null) {
          o.DEFAULT_GRAVITY_RANGE_FACTOR = s.DEFAULT_GRAVITY_RANGE_FACTOR = t.gravityRange;
        }
        if (t.gravityCompound != null) {
          o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.gravityCompound;
        }
        if (t.gravityRangeCompound != null) {
          o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.gravityRangeCompound;
        }
        if (t.initialEnergyOnIncremental != null) {
          o.DEFAULT_COOLING_FACTOR_INCREMENTAL = s.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.initialEnergyOnIncremental;
        }
        if (t.quality == "draft") {
          i.QUALITY = 0;
        } else if (t.quality == "proof") {
          i.QUALITY = 2;
        } else {
          i.QUALITY = 1;
        }
        o.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = i.NODE_DIMENSIONS_INCLUDE_LABELS = t.nodeDimensionsIncludeLabels;
        o.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = i.DEFAULT_INCREMENTAL = !t.randomize;
        o.ANIMATE = s.ANIMATE = i.ANIMATE = t.animate;
        o.TILE = t.tile;
        o.TILING_PADDING_VERTICAL = typeof t.tilingPaddingVertical == "function" ? t.tilingPaddingVertical.call() : t.tilingPaddingVertical;
        o.TILING_PADDING_HORIZONTAL = typeof t.tilingPaddingHorizontal == "function" ? t.tilingPaddingHorizontal.call() : t.tilingPaddingHorizontal;
      }
      h.prototype.run = function () {
        var t;
        var e;
        var n = this.options;
        this.idToLNode = {};
        var i = this.layout = new r();
        var s = this;
        s.stopped = false;
        this.cy = this.options.cy;
        this.cy.trigger({
          type: "layoutstart",
          layout: this
        });
        var o = i.newGraphManager();
        this.gm = o;
        var a = this.options.eles.nodes();
        var l = this.options.eles.edges();
        this.root = o.addRoot();
        this.processChildrenList(this.root, this.getTopMostNodes(a), i);
        for (var c = 0; c < l.length; c++) {
          var d = l[c];
          var h = this.idToLNode[d.data("source")];
          var u = this.idToLNode[d.data("target")];
          if (h !== u && h.getEdgesBetween(u).length == 0) {
            o.add(i.newEdge(), h, u).id = d.id();
          }
        }
        function g(t, e) {
          if (typeof t == "number") {
            t = e;
          }
          var n = t.data("id");
          var i = s.idToLNode[n];
          return {
            x: i.getRect().getCenterX(),
            y: i.getRect().getCenterY()
          };
        }
        var p = function o() {
          var r;
          function a() {
            if (n.fit) {
              n.cy.fit(n.eles, n.padding);
            }
            if (!t) {
              t = true;
              s.cy.one("layoutready", n.ready);
              s.cy.trigger({
                type: "layoutready",
                layout: s
              });
            }
          }
          var l = s.options.refresh;
          var c = 0;
          for (; c < l && !r; c++) {
            r = s.stopped || s.layout.tick();
          }
          if (r) {
            if (i.checkLayoutSuccess() && !i.isSubLayout) {
              i.doPostLayout();
            }
            if (i.tilingPostLayout) {
              i.tilingPostLayout();
            }
            i.isLayoutFinished = true;
            s.options.eles.nodes().positions(g);
            a();
            s.cy.one("layoutstop", s.options.stop);
            s.cy.trigger({
              type: "layoutstop",
              layout: s
            });
            if (e) {
              cancelAnimationFrame(e);
            }
            t = false;
            return;
          }
          var d = s.layout.getPositionsData();
          n.eles.nodes().positions(function (t, e) {
            if (typeof t == "number") {
              t = e;
            }
            if (!t.isParent()) {
              var n = t.id();
              var i = d[n];
              var s = t;
              while (i == null && (i = d[s.data("parent")] || d["DummyCompound_" + s.data("parent")], d[n] = i, (s = s.parent()[0]) != undefined));
              if (i != null) {
                return {
                  x: i.x,
                  y: i.y
                };
              } else {
                return {
                  x: t.position("x"),
                  y: t.position("y")
                };
              }
            }
          });
          a();
          e = requestAnimationFrame(o);
        };
        i.addListener("layoutstarted", function () {
          if (s.options.animate === "during") {
            e = requestAnimationFrame(p);
          }
        });
        i.runLayout();
        if (this.options.animate !== "during") {
          s.options.eles.nodes().not(":parent").layoutPositions(s, s.options, g);
          t = false;
        }
        return this;
      };
      h.prototype.getTopMostNodes = function (t) {
        var e = {};
        var n = 0;
        for (; n < t.length; n++) {
          e[t[n].id()] = true;
        }
        return t.filter(function (t, n) {
          if (typeof t == "number") {
            t = n;
          }
          for (var i = t.parent()[0]; i != null;) {
            if (e[i.id()]) {
              return false;
            }
            i = i.parent()[0];
          }
          return true;
        });
      };
      h.prototype.processChildrenList = function (t, e, n) {
        var i = e.length;
        var s = 0;
        for (; s < i; s++) {
          var o;
          var r;
          var d = e[s];
          var h = d.children();
          var u = d.layoutDimensions({
            nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
          });
          (o = d.outerWidth() != null && d.outerHeight() != null ? t.add(new a(n.graphManager, new l(d.position("x") - u.w / 2, d.position("y") - u.h / 2), new c(parseFloat(u.w), parseFloat(u.h)))) : t.add(new a(this.graphManager))).id = d.data("id");
          o.paddingLeft = parseInt(d.css("padding"));
          o.paddingTop = parseInt(d.css("padding"));
          o.paddingRight = parseInt(d.css("padding"));
          o.paddingBottom = parseInt(d.css("padding"));
          if (this.options.nodeDimensionsIncludeLabels && d.isParent()) {
            var g = d.boundingBox({
              includeLabels: true,
              includeNodes: false
            }).w;
            var p = d.boundingBox({
              includeLabels: true,
              includeNodes: false
            }).h;
            var y = d.css("text-halign");
            o.labelWidth = g;
            o.labelHeight = p;
            o.labelPos = y;
          }
          this.idToLNode[d.data("id")] = o;
          if (isNaN(o.rect.x)) {
            o.rect.x = 0;
          }
          if (isNaN(o.rect.y)) {
            o.rect.y = 0;
          }
          if (h != null && h.length > 0) {
            r = n.getGraphManager().add(n.newGraph(), o);
            this.processChildrenList(r, h, n);
          }
        }
      };
      h.prototype.stop = function () {
        this.stopped = true;
        return this;
      };
      function g(t) {
        t("layout", "cose-bilkent", h);
      }
      if (typeof cytoscape != "undefined") {
        g(cytoscape);
      }
      t.exports = g;
    }]);
  };
  module.exports = i(require("cose-layout-module") /*id: 855810*/);
}