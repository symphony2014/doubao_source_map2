// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32838.6babfad4.js
         * chunkId: 32838
         * moduleId: 873861
         */
module.exports = function (module, exports, require) {
  var t;
  t = function () {
    return function (e) {
      var t = {};
      function n(r) {
        if (t[r]) {
          return t[r].exports;
        }
        var i = t[r] = {
          i: r,
          l: false,
          exports: {}
        };
        e[r].call(i.exports, i, i.exports, n);
        i.l = true;
        return i.exports;
      }
      n.m = e;
      n.c = t;
      n.i = function (e) {
        return e;
      };
      n.d = function (e, t, r) {
        if (!n.o(e, t)) {
          Object.defineProperty(e, t, {
            configurable: false,
            enumerable: true,
            get: r
          });
        }
      };
      n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        n.d(t, "a", t);
        return t;
      };
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      n.p = "";
      return n(n.s = 28);
    }([function (e, t, n) {
      "use strict";

      function r() {}
      r.QUALITY = 1;
      r.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
      r.DEFAULT_INCREMENTAL = false;
      r.DEFAULT_ANIMATION_ON_LAYOUT = true;
      r.DEFAULT_ANIMATION_DURING_LAYOUT = false;
      r.DEFAULT_ANIMATION_PERIOD = 50;
      r.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;
      r.DEFAULT_GRAPH_MARGIN = 15;
      r.NODE_DIMENSIONS_INCLUDE_LABELS = false;
      r.SIMPLE_NODE_SIZE = 40;
      r.SIMPLE_NODE_HALF_SIZE = r.SIMPLE_NODE_SIZE / 2;
      r.EMPTY_COMPOUND_NODE_SIZE = 40;
      r.MIN_EDGE_LENGTH = 1;
      r.WORLD_BOUNDARY = 1000000;
      r.INITIAL_WORLD_BOUNDARY = r.WORLD_BOUNDARY / 1000;
      r.WORLD_CENTER_X = 1200;
      r.WORLD_CENTER_Y = 900;
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = n(2);
      var i = n(8);
      var a = n(9);
      function o(e, t, n) {
        r.call(this, n);
        this.isOverlapingSourceAndTarget = false;
        this.vGraphObject = n;
        this.bendpoints = [];
        this.source = e;
        this.target = t;
      }
      o.prototype = Object.create(r.prototype);
      for (var s in r) {
        o[s] = r[s];
      }
      o.prototype.getSource = function () {
        return this.source;
      };
      o.prototype.getTarget = function () {
        return this.target;
      };
      o.prototype.isInterGraph = function () {
        return this.isInterGraph;
      };
      o.prototype.getLength = function () {
        return this.length;
      };
      o.prototype.isOverlapingSourceAndTarget = function () {
        return this.isOverlapingSourceAndTarget;
      };
      o.prototype.getBendpoints = function () {
        return this.bendpoints;
      };
      o.prototype.getLca = function () {
        return this.lca;
      };
      o.prototype.getSourceInLca = function () {
        return this.sourceInLca;
      };
      o.prototype.getTargetInLca = function () {
        return this.targetInLca;
      };
      o.prototype.getOtherEnd = function (e) {
        if (this.source === e) {
          return this.target;
        }
        if (this.target === e) {
          return this.source;
        }
        throw "Node is not incident with this edge";
      };
      o.prototype.getOtherEndInGraph = function (e, t) {
        var n = this.getOtherEnd(e);
        var r = t.getGraphManager().getRoot();
        while (true) {
          if (n.getOwner() == t) {
            return n;
          }
          if (n.getOwner() == r) {
            break;
          }
          n = n.getOwner().getParent();
        }
        return null;
      };
      o.prototype.updateLength = function () {
        var e = [,,,,];
        this.isOverlapingSourceAndTarget = i.getIntersection(this.target.getRect(), this.source.getRect(), e);
        if (!this.isOverlapingSourceAndTarget) {
          this.lengthX = e[0] - e[2];
          this.lengthY = e[1] - e[3];
          if (Math.abs(this.lengthX) < 1) {
            this.lengthX = a.sign(this.lengthX);
          }
          if (Math.abs(this.lengthY) < 1) {
            this.lengthY = a.sign(this.lengthY);
          }
          this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
        }
      };
      o.prototype.updateLengthSimple = function () {
        this.lengthX = this.target.getCenterX() - this.source.getCenterX();
        this.lengthY = this.target.getCenterY() - this.source.getCenterY();
        if (Math.abs(this.lengthX) < 1) {
          this.lengthX = a.sign(this.lengthX);
        }
        if (Math.abs(this.lengthY) < 1) {
          this.lengthY = a.sign(this.lengthY);
        }
        this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
      };
      e.exports = o;
    }, function (e, t, n) {
      "use strict";

      e.exports = function (e) {
        this.vGraphObject = e;
      };
    }, function (e, t, n) {
      "use strict";

      var r = n(2);
      var i = n(10);
      var a = n(13);
      var o = n(0);
      var s = n(16);
      var l = n(5);
      function u(e, t, n, o) {
        if (n == null && o == null) {
          o = t;
        }
        r.call(this, o);
        if (e.graphManager != null) {
          e = e.graphManager;
        }
        this.estimatedSize = i.MIN_VALUE;
        this.inclusionTreeDepth = i.MAX_VALUE;
        this.vGraphObject = o;
        this.edges = [];
        this.graphManager = e;
        if (n != null && t != null) {
          this.rect = new a(t.x, t.y, n.width, n.height);
        } else {
          this.rect = new a();
        }
      }
      u.prototype = Object.create(r.prototype);
      for (var h in r) {
        u[h] = r[h];
      }
      u.prototype.getEdges = function () {
        return this.edges;
      };
      u.prototype.getChild = function () {
        return this.child;
      };
      u.prototype.getOwner = function () {
        return this.owner;
      };
      u.prototype.getWidth = function () {
        return this.rect.width;
      };
      u.prototype.setWidth = function (e) {
        this.rect.width = e;
      };
      u.prototype.getHeight = function () {
        return this.rect.height;
      };
      u.prototype.setHeight = function (e) {
        this.rect.height = e;
      };
      u.prototype.getCenterX = function () {
        return this.rect.x + this.rect.width / 2;
      };
      u.prototype.getCenterY = function () {
        return this.rect.y + this.rect.height / 2;
      };
      u.prototype.getCenter = function () {
        return new l(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
      };
      u.prototype.getLocation = function () {
        return new l(this.rect.x, this.rect.y);
      };
      u.prototype.getRect = function () {
        return this.rect;
      };
      u.prototype.getDiagonal = function () {
        return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
      };
      u.prototype.getHalfTheDiagonal = function () {
        return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
      };
      u.prototype.setRect = function (e, t) {
        this.rect.x = e.x;
        this.rect.y = e.y;
        this.rect.width = t.width;
        this.rect.height = t.height;
      };
      u.prototype.setCenter = function (e, t) {
        this.rect.x = e - this.rect.width / 2;
        this.rect.y = t - this.rect.height / 2;
      };
      u.prototype.setLocation = function (e, t) {
        this.rect.x = e;
        this.rect.y = t;
      };
      u.prototype.moveBy = function (e, t) {
        this.rect.x += e;
        this.rect.y += t;
      };
      u.prototype.getEdgeListToNode = function (e) {
        var t = [];
        var n = this;
        n.edges.forEach(function (r) {
          if (r.target == e) {
            if (r.source != n) {
              throw "Incorrect edge source!";
            }
            t.push(r);
          }
        });
        return t;
      };
      u.prototype.getEdgesBetween = function (e) {
        var t = [];
        var n = this;
        n.edges.forEach(function (r) {
          if (r.source != n && r.target != n) {
            throw "Incorrect edge source and/or target";
          }
          if (r.target == e || r.source == e) {
            t.push(r);
          }
        });
        return t;
      };
      u.prototype.getNeighborsList = function () {
        var e = new Set();
        var t = this;
        t.edges.forEach(function (n) {
          if (n.source == t) {
            e.add(n.target);
          } else {
            if (n.target != t) {
              throw "Incorrect incidency!";
            }
            e.add(n.source);
          }
        });
        return e;
      };
      u.prototype.withChildren = function () {
        var e = new Set();
        e.add(this);
        if (this.child != null) {
          var t = this.child.getNodes();
          var n = 0;
          for (; n < t.length; n++) {
            t[n].withChildren().forEach(function (t) {
              e.add(t);
            });
          }
        }
        return e;
      };
      u.prototype.getNoOfChildren = function () {
        var e = 0;
        if (this.child == null) {
          e = 1;
        } else {
          var t = this.child.getNodes();
          var n = 0;
          for (; n < t.length; n++) {
            e += t[n].getNoOfChildren();
          }
        }
        if (e == 0) {
          e = 1;
        }
        return e;
      };
      u.prototype.getEstimatedSize = function () {
        if (this.estimatedSize == i.MIN_VALUE) {
          throw "assert failed";
        }
        return this.estimatedSize;
      };
      u.prototype.calcEstimatedSize = function () {
        if (this.child == null) {
          return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
        } else {
          this.estimatedSize = this.child.calcEstimatedSize();
          this.rect.width = this.estimatedSize;
          this.rect.height = this.estimatedSize;
          return this.estimatedSize;
        }
      };
      u.prototype.scatter = function () {
        var e;
        var t;
        var n = -o.INITIAL_WORLD_BOUNDARY;
        var r = o.INITIAL_WORLD_BOUNDARY;
        e = o.WORLD_CENTER_X + s.nextDouble() * (r - n) + n;
        var i = -o.INITIAL_WORLD_BOUNDARY;
        var a = o.INITIAL_WORLD_BOUNDARY;
        t = o.WORLD_CENTER_Y + s.nextDouble() * (a - i) + i;
        this.rect.x = e;
        this.rect.y = t;
      };
      u.prototype.updateBounds = function () {
        if (this.getChild() == null) {
          throw "assert failed";
        }
        if (this.getChild().getNodes().length != 0) {
          var e = this.getChild();
          e.updateBounds(true);
          this.rect.x = e.getLeft();
          this.rect.y = e.getTop();
          this.setWidth(e.getRight() - e.getLeft());
          this.setHeight(e.getBottom() - e.getTop());
          if (o.NODE_DIMENSIONS_INCLUDE_LABELS) {
            var t = e.getRight() - e.getLeft();
            var n = e.getBottom() - e.getTop();
            if (this.labelWidth) {
              if (this.labelPosHorizontal == "left") {
                this.rect.x -= this.labelWidth;
                this.setWidth(t + this.labelWidth);
              } else if (this.labelPosHorizontal == "center" && this.labelWidth > t) {
                this.rect.x -= (this.labelWidth - t) / 2;
                this.setWidth(this.labelWidth);
              } else if (this.labelPosHorizontal == "right") {
                this.setWidth(t + this.labelWidth);
              }
            }
            if (this.labelHeight) {
              if (this.labelPosVertical == "top") {
                this.rect.y -= this.labelHeight;
                this.setHeight(n + this.labelHeight);
              } else if (this.labelPosVertical == "center" && this.labelHeight > n) {
                this.rect.y -= (this.labelHeight - n) / 2;
                this.setHeight(this.labelHeight);
              } else if (this.labelPosVertical == "bottom") {
                this.setHeight(n + this.labelHeight);
              }
            }
          }
        }
      };
      u.prototype.getInclusionTreeDepth = function () {
        if (this.inclusionTreeDepth == i.MAX_VALUE) {
          throw "assert failed";
        }
        return this.inclusionTreeDepth;
      };
      u.prototype.transform = function (e) {
        var t = this.rect.x;
        if (t > o.WORLD_BOUNDARY) {
          t = o.WORLD_BOUNDARY;
        } else if (t < -o.WORLD_BOUNDARY) {
          t = -o.WORLD_BOUNDARY;
        }
        var n = this.rect.y;
        if (n > o.WORLD_BOUNDARY) {
          n = o.WORLD_BOUNDARY;
        } else if (n < -o.WORLD_BOUNDARY) {
          n = -o.WORLD_BOUNDARY;
        }
        var r = new l(t, n);
        var i = e.inverseTransformPoint(r);
        this.setLocation(i.x, i.y);
      };
      u.prototype.getLeft = function () {
        return this.rect.x;
      };
      u.prototype.getRight = function () {
        return this.rect.x + this.rect.width;
      };
      u.prototype.getTop = function () {
        return this.rect.y;
      };
      u.prototype.getBottom = function () {
        return this.rect.y + this.rect.height;
      };
      u.prototype.getParent = function () {
        if (this.owner == null) {
          return null;
        } else {
          return this.owner.getParent();
        }
      };
      e.exports = u;
    }, function (e, t, n) {
      "use strict";

      var r = n(0);
      function i() {}
      for (var a in r) {
        i[a] = r[a];
      }
      i.MAX_ITERATIONS = 2500;
      i.DEFAULT_EDGE_LENGTH = 50;
      i.DEFAULT_SPRING_STRENGTH = 0.45;
      i.DEFAULT_REPULSION_STRENGTH = 4500;
      i.DEFAULT_GRAVITY_STRENGTH = 0.4;
      i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1;
      i.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
      i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
      i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
      i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
      i.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3;
      i.COOLING_ADAPTATION_FACTOR = 0.33;
      i.ADAPTATION_LOWER_NODE_LIMIT = 1000;
      i.ADAPTATION_UPPER_NODE_LIMIT = 5000;
      i.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100;
      i.MAX_NODE_DISPLACEMENT = i.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
      i.MIN_REPULSION_DIST = i.DEFAULT_EDGE_LENGTH / 10;
      i.CONVERGENCE_CHECK_PERIOD = 100;
      i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
      i.MIN_EDGE_LENGTH = 1;
      i.GRID_CALCULATION_CHECK_PERIOD = 10;
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

      function r(e, t) {
        if (e == null && t == null) {
          this.x = 0;
          this.y = 0;
        } else {
          this.x = e;
          this.y = t;
        }
      }
      r.prototype.getX = function () {
        return this.x;
      };
      r.prototype.getY = function () {
        return this.y;
      };
      r.prototype.setX = function (e) {
        this.x = e;
      };
      r.prototype.setY = function (e) {
        this.y = e;
      };
      r.prototype.getDifference = function (e) {
        return new DimensionD(this.x - e.x, this.y - e.y);
      };
      r.prototype.getCopy = function () {
        return new r(this.x, this.y);
      };
      r.prototype.translate = function (e) {
        this.x += e.width;
        this.y += e.height;
        return this;
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = n(2);
      var i = n(10);
      var a = n(0);
      var o = n(7);
      var s = n(3);
      var l = n(1);
      var u = n(13);
      var h = n(12);
      var c = n(11);
      function d(e, t, n) {
        r.call(this, n);
        this.estimatedSize = i.MIN_VALUE;
        this.margin = a.DEFAULT_GRAPH_MARGIN;
        this.edges = [];
        this.nodes = [];
        this.isConnected = false;
        this.parent = e;
        if (t != null && t instanceof o) {
          this.graphManager = t;
        } else if (t != null && t instanceof Layout) {
          this.graphManager = t.graphManager;
        }
      }
      d.prototype = Object.create(r.prototype);
      for (var p in r) {
        d[p] = r[p];
      }
      d.prototype.getNodes = function () {
        return this.nodes;
      };
      d.prototype.getEdges = function () {
        return this.edges;
      };
      d.prototype.getGraphManager = function () {
        return this.graphManager;
      };
      d.prototype.getParent = function () {
        return this.parent;
      };
      d.prototype.getLeft = function () {
        return this.left;
      };
      d.prototype.getRight = function () {
        return this.right;
      };
      d.prototype.getTop = function () {
        return this.top;
      };
      d.prototype.getBottom = function () {
        return this.bottom;
      };
      d.prototype.isConnected = function () {
        return this.isConnected;
      };
      d.prototype.add = function (e, t, n) {
        if (t == null && n == null) {
          if (this.graphManager == null) {
            throw "Graph has no graph mgr!";
          }
          if (this.getNodes().indexOf(e) > -1) {
            throw "Node already in graph!";
          }
          e.owner = this;
          this.getNodes().push(e);
          return e;
        }
        if (!(this.getNodes().indexOf(t) > -1) || !(this.getNodes().indexOf(n) > -1)) {
          throw "Source or target not in graph!";
        }
        if (t.owner != n.owner || t.owner != this) {
          throw "Both owners must be this graph!";
        }
        if (t.owner != n.owner) {
          return null;
        } else {
          e.source = t;
          e.target = n;
          e.isInterGraph = false;
          this.getEdges().push(e);
          t.edges.push(e);
          if (n != t) {
            n.edges.push(e);
          }
          return e;
        }
      };
      d.prototype.remove = function (e) {
        if (e instanceof s) {
          if (e == null) {
            throw "Node is null!";
          }
          if (e.owner == null || e.owner != this) {
            throw "Owner graph is invalid!";
          }
          if (this.graphManager == null) {
            throw "Owner graph manager is invalid!";
          }
          var t;
          var n = e.edges.slice();
          var r = n.length;
          var i = 0;
          for (; i < r; i++) {
            if ((t = n[i]).isInterGraph) {
              this.graphManager.remove(t);
            } else {
              t.source.owner.remove(t);
            }
          }
          var a = this.nodes.indexOf(e);
          if (a == -1) {
            throw "Node not in owner node list!";
          }
          this.nodes.splice(a, 1);
        } else if (e instanceof l) {
          var t = e;
          if (t == null) {
            throw "Edge is null!";
          }
          if (t.source == null || t.target == null) {
            throw "Source and/or target is null!";
          }
          if (t.source.owner == null || t.target.owner == null || t.source.owner != this || t.target.owner != this) {
            throw "Source and/or target owner is invalid!";
          }
          var o = t.source.edges.indexOf(t);
          var u = t.target.edges.indexOf(t);
          if (!(o > -1) || !(u > -1)) {
            throw "Source and/or target doesn't know this edge!";
          }
          t.source.edges.splice(o, 1);
          if (t.target != t.source) {
            t.target.edges.splice(u, 1);
          }
          var a = t.source.owner.getEdges().indexOf(t);
          if (a == -1) {
            throw "Not in owner's edge list!";
          }
          t.source.owner.getEdges().splice(a, 1);
        }
      };
      d.prototype.updateLeftTop = function () {
        var e;
        var t;
        var n;
        var r = i.MAX_VALUE;
        var a = i.MAX_VALUE;
        var o = this.getNodes();
        var s = o.length;
        var l = 0;
        for (; l < s; l++) {
          var u = o[l];
          e = u.getTop();
          t = u.getLeft();
          if (r > e) {
            r = e;
          }
          if (a > t) {
            a = t;
          }
        }
        if (r == i.MAX_VALUE) {
          return null;
        } else {
          n = o[0].getParent().paddingLeft != undefined ? o[0].getParent().paddingLeft : this.margin;
          this.left = a - n;
          this.top = r - n;
          return new h(this.left, this.top);
        }
      };
      d.prototype.updateBounds = function (e) {
        var t;
        var n;
        var r;
        var a;
        var o;
        var s = i.MAX_VALUE;
        var l = -i.MAX_VALUE;
        var h = i.MAX_VALUE;
        var c = -i.MAX_VALUE;
        var d = this.nodes;
        var p = d.length;
        var g = 0;
        for (; g < p; g++) {
          var f = d[g];
          if (e && f.child != null) {
            f.updateBounds();
          }
          t = f.getLeft();
          n = f.getRight();
          r = f.getTop();
          a = f.getBottom();
          if (s > t) {
            s = t;
          }
          if (l < n) {
            l = n;
          }
          if (h > r) {
            h = r;
          }
          if (c < a) {
            c = a;
          }
        }
        var v = new u(s, h, l - s, c - h);
        if (s == i.MAX_VALUE) {
          this.left = this.parent.getLeft();
          this.right = this.parent.getRight();
          this.top = this.parent.getTop();
          this.bottom = this.parent.getBottom();
        }
        o = d[0].getParent().paddingLeft != undefined ? d[0].getParent().paddingLeft : this.margin;
        this.left = v.x - o;
        this.right = v.x + v.width + o;
        this.top = v.y - o;
        this.bottom = v.y + v.height + o;
      };
      d.calculateBounds = function (e) {
        var t;
        var n;
        var r;
        var a;
        var o = i.MAX_VALUE;
        var s = -i.MAX_VALUE;
        var l = i.MAX_VALUE;
        var h = -i.MAX_VALUE;
        var c = e.length;
        var d = 0;
        for (; d < c; d++) {
          var p = e[d];
          t = p.getLeft();
          n = p.getRight();
          r = p.getTop();
          a = p.getBottom();
          if (o > t) {
            o = t;
          }
          if (s < n) {
            s = n;
          }
          if (l > r) {
            l = r;
          }
          if (h < a) {
            h = a;
          }
        }
        return new u(o, l, s - o, h - l);
      };
      d.prototype.getInclusionTreeDepth = function () {
        if (this == this.graphManager.getRoot()) {
          return 1;
        } else {
          return this.parent.getInclusionTreeDepth();
        }
      };
      d.prototype.getEstimatedSize = function () {
        if (this.estimatedSize == i.MIN_VALUE) {
          throw "assert failed";
        }
        return this.estimatedSize;
      };
      d.prototype.calcEstimatedSize = function () {
        var e = 0;
        var t = this.nodes;
        var n = t.length;
        var r = 0;
        for (; r < n; r++) {
          e += t[r].calcEstimatedSize();
        }
        if (e == 0) {
          this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE;
        } else {
          this.estimatedSize = e / Math.sqrt(this.nodes.length);
        }
        return this.estimatedSize;
      };
      d.prototype.updateConnected = function () {
        var e;
        var t;
        var n = this;
        if (this.nodes.length == 0) {
          this.isConnected = true;
          return;
        }
        var r = new c();
        var i = new Set();
        var a = this.nodes[0];
        for (a.withChildren().forEach(function (e) {
          r.push(e);
          i.add(e);
        }); r.length !== 0;) {
          var o = (e = (a = r.shift()).getEdges()).length;
          var s = 0;
          for (; s < o; s++) {
            if ((t = e[s].getOtherEndInGraph(a, this)) != null && !i.has(t)) {
              t.withChildren().forEach(function (e) {
                r.push(e);
                i.add(e);
              });
            }
          }
        }
        this.isConnected = false;
        if (i.size >= this.nodes.length) {
          var l = 0;
          i.forEach(function (e) {
            if (e.owner == n) {
              l++;
            }
          });
          if (l == this.nodes.length) {
            this.isConnected = true;
          }
        }
      };
      e.exports = d;
    }, function (e, t, n) {
      "use strict";

      var r;
      var i = n(1);
      function a(e) {
        r = n(6);
        this.layout = e;
        this.graphs = [];
        this.edges = [];
      }
      a.prototype.addRoot = function () {
        var e = this.layout.newGraph();
        var t = this.layout.newNode(null);
        var n = this.add(e, t);
        this.setRootGraph(n);
        return this.rootGraph;
      };
      a.prototype.add = function (e, t, n, r, i) {
        if (n == null && r == null && i == null) {
          if (e == null) {
            throw "Graph is null!";
          }
          if (t == null) {
            throw "Parent node is null!";
          }
          if (this.graphs.indexOf(e) > -1) {
            throw "Graph already in this graph mgr!";
          }
          this.graphs.push(e);
          if (e.parent != null) {
            throw "Already has a parent!";
          }
          if (t.child != null) {
            throw "Already has a child!";
          }
          e.parent = t;
          t.child = e;
          return e;
        }
        i = n;
        r = t;
        n = e;
        var a = r.getOwner();
        var o = i.getOwner();
        if (a == null || a.getGraphManager() != this) {
          throw "Source not in this graph mgr!";
        }
        if (o == null || o.getGraphManager() != this) {
          throw "Target not in this graph mgr!";
        }
        if (a == o) {
          n.isInterGraph = false;
          return a.add(n, r, i);
        }
        n.isInterGraph = true;
        n.source = r;
        n.target = i;
        if (this.edges.indexOf(n) > -1) {
          throw "Edge already in inter-graph edge list!";
        }
        this.edges.push(n);
        if (n.source == null || n.target == null) {
          throw "Edge source and/or target is null!";
        }
        if (n.source.edges.indexOf(n) != -1 || n.target.edges.indexOf(n) != -1) {
          throw "Edge already in source and/or target incidency list!";
        }
        n.source.edges.push(n);
        n.target.edges.push(n);
        return n;
      };
      a.prototype.remove = function (e) {
        if (e instanceof r) {
          if (e.getGraphManager() != this) {
            throw "Graph not in this graph mgr";
          }
          if (e != this.rootGraph && (e.parent == null || e.parent.graphManager != this)) {
            throw "Invalid parent node!";
          }
          var t;
          var n;
          var a = [];
          var o = (a = a.concat(e.getEdges())).length;
          var s = 0;
          for (; s < o; s++) {
            t = a[s];
            e.remove(t);
          }
          var l = [];
          o = (l = l.concat(e.getNodes())).length;
          for (var s = 0; s < o; s++) {
            n = l[s];
            e.remove(n);
          }
          if (e == this.rootGraph) {
            this.setRootGraph(null);
          }
          var u = this.graphs.indexOf(e);
          this.graphs.splice(u, 1);
          e.parent = null;
        } else if (e instanceof i) {
          if ((t = e) == null) {
            throw "Edge is null!";
          }
          if (!t.isInterGraph) {
            throw "Not an inter-graph edge!";
          }
          if (t.source == null || t.target == null) {
            throw "Source and/or target is null!";
          }
          if (t.source.edges.indexOf(t) == -1 || t.target.edges.indexOf(t) == -1) {
            throw "Source and/or target doesn't know this edge!";
          }
          var u = t.source.edges.indexOf(t);
          t.source.edges.splice(u, 1);
          u = t.target.edges.indexOf(t);
          t.target.edges.splice(u, 1);
          if (t.source.owner == null || t.source.owner.getGraphManager() == null) {
            throw "Edge owner graph or owner graph manager is null!";
          }
          if (t.source.owner.getGraphManager().edges.indexOf(t) == -1) {
            throw "Not in owner graph manager's edge list!";
          }
          var u = t.source.owner.getGraphManager().edges.indexOf(t);
          t.source.owner.getGraphManager().edges.splice(u, 1);
        }
      };
      a.prototype.updateBounds = function () {
        this.rootGraph.updateBounds(true);
      };
      a.prototype.getGraphs = function () {
        return this.graphs;
      };
      a.prototype.getAllNodes = function () {
        if (this.allNodes == null) {
          var e = [];
          var t = this.getGraphs();
          var n = t.length;
          var r = 0;
          for (; r < n; r++) {
            e = e.concat(t[r].getNodes());
          }
          this.allNodes = e;
        }
        return this.allNodes;
      };
      a.prototype.resetAllNodes = function () {
        this.allNodes = null;
      };
      a.prototype.resetAllEdges = function () {
        this.allEdges = null;
      };
      a.prototype.resetAllNodesToApplyGravitation = function () {
        this.allNodesToApplyGravitation = null;
      };
      a.prototype.getAllEdges = function () {
        if (this.allEdges == null) {
          var e = [];
          var t = this.getGraphs();
          t.length;
          for (var n = 0; n < t.length; n++) {
            e = e.concat(t[n].getEdges());
          }
          e = e.concat(this.edges);
          this.allEdges = e;
        }
        return this.allEdges;
      };
      a.prototype.getAllNodesToApplyGravitation = function () {
        return this.allNodesToApplyGravitation;
      };
      a.prototype.setAllNodesToApplyGravitation = function (e) {
        if (this.allNodesToApplyGravitation != null) {
          throw "assert failed";
        }
        this.allNodesToApplyGravitation = e;
      };
      a.prototype.getRoot = function () {
        return this.rootGraph;
      };
      a.prototype.setRootGraph = function (e) {
        if (e.getGraphManager() != this) {
          throw "Root not in this graph mgr!";
        }
        this.rootGraph = e;
        if (e.parent == null) {
          e.parent = this.layout.newNode("Root node");
        }
      };
      a.prototype.getLayout = function () {
        return this.layout;
      };
      a.prototype.isOneAncestorOfOther = function (e, t) {
        if (e == null || t == null) {
          throw "assert failed";
        }
        if (e == t) {
          return true;
        }
        var n;
        var r = e.getOwner();
        while ((n = r.getParent()) != null) {
          if (n == t) {
            return true;
          }
          if ((r = n.getOwner()) == null) {
            break;
          }
        }
        for (r = t.getOwner(); (n = r.getParent()) != null;) {
          if (n == e) {
            return true;
          }
          if ((r = n.getOwner()) == null) {
            break;
          }
        }
        return false;
      };
      a.prototype.calcLowestCommonAncestors = function () {
        var e;
        var t;
        var n;
        var r;
        var i;
        var a = this.getAllEdges();
        var o = a.length;
        var s = 0;
        for (; s < o; s++) {
          t = (e = a[s]).source;
          n = e.target;
          e.lca = null;
          e.sourceInLca = t;
          e.targetInLca = n;
          if (t == n) {
            e.lca = t.getOwner();
            continue;
          }
          for (r = t.getOwner(); e.lca == null;) {
            e.targetInLca = n;
            i = n.getOwner();
            while (e.lca == null) {
              if (i == r) {
                e.lca = i;
                break;
              }
              if (i == this.rootGraph) {
                break;
              }
              if (e.lca != null) {
                throw "assert failed";
              }
              e.targetInLca = i.getParent();
              i = e.targetInLca.getOwner();
            }
            if (r == this.rootGraph) {
              break;
            }
            if (e.lca == null) {
              e.sourceInLca = r.getParent();
              r = e.sourceInLca.getOwner();
            }
          }
          if (e.lca == null) {
            throw "assert failed";
          }
        }
      };
      a.prototype.calcLowestCommonAncestor = function (e, t) {
        if (e == t) {
          return e.getOwner();
        }
        for (var n = e.getOwner(); n != null;) {
          for (var r = t.getOwner(); r != null;) {
            if (r == n) {
              return r;
            }
            r = r.getParent().getOwner();
          }
          n = n.getParent().getOwner();
        }
        return n;
      };
      a.prototype.calcInclusionTreeDepths = function (e, t) {
        if (e == null && t == null) {
          e = this.rootGraph;
          t = 1;
        }
        var n;
        var r = e.getNodes();
        var i = r.length;
        var a = 0;
        for (; a < i; a++) {
          (n = r[a]).inclusionTreeDepth = t;
          if (n.child != null) {
            this.calcInclusionTreeDepths(n.child, t + 1);
          }
        }
      };
      a.prototype.includesInvalidEdge = function () {
        var e;
        var t = [];
        var n = this.edges.length;
        var r = 0;
        for (; r < n; r++) {
          e = this.edges[r];
          if (this.isOneAncestorOfOther(e.source, e.target)) {
            t.push(e);
          }
        }
        for (var r = 0; r < t.length; r++) {
          this.remove(t[r]);
        }
        return false;
      };
      e.exports = a;
    }, function (e, t, n) {
      "use strict";

      var r = n(12);
      function i() {}
      i.calcSeparationAmount = function (e, t, n, r) {
        if (!e.intersects(t)) {
          throw "assert failed";
        }
        var i = [,,];
        this.decideDirectionsForOverlappingNodes(e, t, i);
        n[0] = Math.min(e.getRight(), t.getRight()) - Math.max(e.x, t.x);
        n[1] = Math.min(e.getBottom(), t.getBottom()) - Math.max(e.y, t.y);
        if (e.getX() <= t.getX() && e.getRight() >= t.getRight()) {
          n[0] += Math.min(t.getX() - e.getX(), e.getRight() - t.getRight());
        } else if (t.getX() <= e.getX() && t.getRight() >= e.getRight()) {
          n[0] += Math.min(e.getX() - t.getX(), t.getRight() - e.getRight());
        }
        if (e.getY() <= t.getY() && e.getBottom() >= t.getBottom()) {
          n[1] += Math.min(t.getY() - e.getY(), e.getBottom() - t.getBottom());
        } else if (t.getY() <= e.getY() && t.getBottom() >= e.getBottom()) {
          n[1] += Math.min(e.getY() - t.getY(), t.getBottom() - e.getBottom());
        }
        var a = Math.abs((t.getCenterY() - e.getCenterY()) / (t.getCenterX() - e.getCenterX()));
        if (t.getCenterY() === e.getCenterY() && t.getCenterX() === e.getCenterX()) {
          a = 1;
        }
        var o = a * n[0];
        var s = n[1] / a;
        if (n[0] < s) {
          s = n[0];
        } else {
          o = n[1];
        }
        n[0] = i[0] * -1 * (s / 2 + r);
        n[1] = i[1] * -1 * (o / 2 + r);
      };
      i.decideDirectionsForOverlappingNodes = function (e, t, n) {
        if (e.getCenterX() < t.getCenterX()) {
          n[0] = -1;
        } else {
          n[0] = 1;
        }
        if (e.getCenterY() < t.getCenterY()) {
          n[1] = -1;
        } else {
          n[1] = 1;
        }
      };
      i.getIntersection2 = function (e, t, n) {
        var r = e.getCenterX();
        var i = e.getCenterY();
        var a = t.getCenterX();
        var o = t.getCenterY();
        if (e.intersects(t)) {
          n[0] = r;
          n[1] = i;
          n[2] = a;
          n[3] = o;
          return true;
        }
        var s = e.getX();
        var l = e.getY();
        var u = e.getRight();
        var h = e.getX();
        var c = e.getBottom();
        var d = e.getRight();
        var p = e.getWidthHalf();
        var g = e.getHeightHalf();
        var f = t.getX();
        var v = t.getY();
        var y = t.getRight();
        var b = t.getX();
        var x = t.getBottom();
        var w = t.getRight();
        var E = t.getWidthHalf();
        var T = t.getHeightHalf();
        var C = false;
        var N = false;
        if (r === a) {
          if (i > o) {
            n[0] = r;
            n[1] = l;
            n[2] = a;
            n[3] = x;
          } else if (i < o) {
            n[0] = r;
            n[1] = c;
            n[2] = a;
            n[3] = v;
          }
        } else if (i === o) {
          if (r > a) {
            n[0] = s;
            n[1] = i;
            n[2] = y;
            n[3] = o;
          } else if (r < a) {
            n[0] = u;
            n[1] = i;
            n[2] = f;
            n[3] = o;
          }
        } else {
          var _ = e.height / e.width;
          var D = t.height / t.width;
          var M = (o - i) / (a - r);
          var A = undefined;
          var S = undefined;
          var P = undefined;
          var O = undefined;
          var I = undefined;
          var L = undefined;
          if (-_ === M) {
            if (r > a) {
              n[0] = h;
              n[1] = c;
            } else {
              n[0] = u;
              n[1] = l;
            }
            C = true;
          } else if (_ === M) {
            if (r > a) {
              n[0] = s;
              n[1] = l;
            } else {
              n[0] = d;
              n[1] = c;
            }
            C = true;
          }
          if (-D === M) {
            if (a > r) {
              n[2] = b;
              n[3] = x;
            } else {
              n[2] = y;
              n[3] = v;
            }
            N = true;
          } else if (D === M) {
            if (a > r) {
              n[2] = f;
              n[3] = v;
            } else {
              n[2] = w;
              n[3] = x;
            }
            N = true;
          }
          if (C && N) {
            return false;
          }
          if (r > a) {
            if (i > o) {
              A = this.getCardinalDirection(_, M, 4);
              S = this.getCardinalDirection(D, M, 2);
            } else {
              A = this.getCardinalDirection(-_, M, 3);
              S = this.getCardinalDirection(-D, M, 1);
            }
          } else if (i > o) {
            A = this.getCardinalDirection(-_, M, 1);
            S = this.getCardinalDirection(-D, M, 3);
          } else {
            A = this.getCardinalDirection(_, M, 2);
            S = this.getCardinalDirection(D, M, 4);
          }
          if (!C) {
            switch (A) {
              case 1:
                O = l;
                P = r + -g / M;
                n[0] = P;
                n[1] = O;
                break;
              case 2:
                P = d;
                O = i + p * M;
                n[0] = P;
                n[1] = O;
                break;
              case 3:
                O = c;
                P = r + g / M;
                n[0] = P;
                n[1] = O;
                break;
              case 4:
                P = h;
                O = i + -p * M;
                n[0] = P;
                n[1] = O;
            }
          }
          if (!N) {
            switch (S) {
              case 1:
                L = v;
                I = a + -T / M;
                n[2] = I;
                n[3] = L;
                break;
              case 2:
                I = w;
                L = o + E * M;
                n[2] = I;
                n[3] = L;
                break;
              case 3:
                L = x;
                I = a + T / M;
                n[2] = I;
                n[3] = L;
                break;
              case 4:
                I = b;
                L = o + -E * M;
                n[2] = I;
                n[3] = L;
            }
          }
        }
        return false;
      };
      i.getCardinalDirection = function (e, t, n) {
        if (e > t) {
          return n;
        } else {
          return 1 + n % 4;
        }
      };
      i.getIntersection = function (e, t, n, i) {
        if (i == null) {
          return this.getIntersection2(e, t, n);
        }
        var a = e.x;
        var o = e.y;
        var s = t.x;
        var l = t.y;
        var u = n.x;
        var h = n.y;
        var c = i.x;
        var d = i.y;
        var p = undefined;
        var g = undefined;
        var f = undefined;
        var v = undefined;
        var y = undefined;
        var b = undefined;
        var x = undefined;
        var w = undefined;
        var E = undefined;
        f = l - o;
        y = a - s;
        x = s * o - a * l;
        v = d - h;
        b = u - c;
        w = c * h - u * d;
        if ((E = f * b - v * y) == 0) {
          return null;
        } else {
          return new r((y * w - b * x) / E, (v * x - f * w) / E);
        }
      };
      i.angleOfVector = function (e, t, n, r) {
        var i = undefined;
        if (e !== n) {
          i = Math.atan((r - t) / (n - e));
          if (n < e) {
            i += Math.PI;
          } else if (r < t) {
            i += this.TWO_PI;
          }
        } else {
          i = r < t ? this.ONE_AND_HALF_PI : this.HALF_PI;
        }
        return i;
      };
      i.doIntersect = function (e, t, n, r) {
        var i = e.x;
        var a = e.y;
        var o = t.x;
        var s = t.y;
        var l = n.x;
        var u = n.y;
        var h = r.x;
        var c = r.y;
        var d = (o - i) * (c - u) - (h - l) * (s - a);
        if (d === 0) {
          return false;
        }
        var p = ((c - u) * (h - i) + (l - h) * (c - a)) / d;
        var g = ((a - s) * (h - i) + (o - i) * (c - a)) / d;
        return p > 0 && p < 1 && g > 0 && g < 1;
      };
      i.findCircleLineIntersections = function (e, t, n, r, i, a, o) {
        var s = (n - e) * (n - e) + (r - t) * (r - t);
        var l = ((e - i) * (n - e) + (t - a) * (r - t)) * 2;
        var u = (e - i) * (e - i) + (t - a) * (t - a) - o * o;
        if (!(l * l - s * 4 * u >= 0)) {
          return null;
        }
        var h = (-l + Math.sqrt(l * l - s * 4 * u)) / (s * 2);
        var c = (-l - Math.sqrt(l * l - s * 4 * u)) / (s * 2);
        if (h >= 0 && h <= 1) {
          return [h];
        } else if (c >= 0 && c <= 1) {
          return [c];
        } else {
          return null;
        }
      };
      i.HALF_PI = Math.PI * 0.5;
      i.ONE_AND_HALF_PI = Math.PI * 1.5;
      i.TWO_PI = Math.PI * 2;
      i.THREE_PI = Math.PI * 3;
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

      function r() {}
      r.sign = function (e) {
        if (e > 0) {
          return 1;
        } else if (e < 0) {
          return -1;
        } else {
          return 0;
        }
      };
      r.floor = function (e) {
        if (e < 0) {
          return Math.ceil(e);
        } else {
          return Math.floor(e);
        }
      };
      r.ceil = function (e) {
        if (e < 0) {
          return Math.floor(e);
        } else {
          return Math.ceil(e);
        }
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      function r() {}
      r.MAX_VALUE = 2147483647;
      r.MIN_VALUE = -2147483648;
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
              r.writable = true;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      function i(e) {
        return {
          value: e,
          next: null,
          prev: null
        };
      }
      function a(e, t, n, r) {
        if (e !== null) {
          e.next = t;
        } else {
          r.head = t;
        }
        if (n !== null) {
          n.prev = t;
        } else {
          r.tail = t;
        }
        t.prev = e;
        t.next = n;
        r.length++;
        return t;
      }
      function o(e, t) {
        var n = e.prev;
        var r = e.next;
        if (n !== null) {
          n.next = r;
        } else {
          t.head = r;
        }
        if (r !== null) {
          r.prev = n;
        } else {
          t.tail = n;
        }
        e.prev = e.next = null;
        t.length--;
        return e;
      }
      var s = function () {
        function e(t) {
          var n = this;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          this.length = 0;
          this.head = null;
          this.tail = null;
          if (t != null) {
            t.forEach(function (e) {
              return n.push(e);
            });
          }
        }
        r(e, [{
          key: "size",
          value: function () {
            return this.length;
          }
        }, {
          key: "insertBefore",
          value: function (e, t) {
            return a(t.prev, i(e), t, this);
          }
        }, {
          key: "insertAfter",
          value: function (e, t) {
            return a(t, i(e), t.next, this);
          }
        }, {
          key: "insertNodeBefore",
          value: function (e, t) {
            return a(t.prev, e, t, this);
          }
        }, {
          key: "insertNodeAfter",
          value: function (e, t) {
            return a(t, e, t.next, this);
          }
        }, {
          key: "push",
          value: function (e) {
            return a(this.tail, i(e), null, this);
          }
        }, {
          key: "unshift",
          value: function (e) {
            return a(null, i(e), this.head, this);
          }
        }, {
          key: "remove",
          value: function (e) {
            return o(e, this);
          }
        }, {
          key: "pop",
          value: function () {
            return o(this.tail, this).value;
          }
        }, {
          key: "popNode",
          value: function () {
            return o(this.tail, this);
          }
        }, {
          key: "shift",
          value: function () {
            return o(this.head, this).value;
          }
        }, {
          key: "shiftNode",
          value: function () {
            return o(this.head, this);
          }
        }, {
          key: "get_object_at",
          value: function (e) {
            if (e <= this.length()) {
              var t = 1;
              var n = this.head;
              while (t < e) {
                n = n.next;
                t++;
              }
              return n.value;
            }
          }
        }, {
          key: "set_object_at",
          value: function (e, t) {
            if (e <= this.length()) {
              var n = 1;
              var r = this.head;
              while (n < e) {
                r = r.next;
                n++;
              }
              r.value = t;
            }
          }
        }]);
        return e;
      }();
      e.exports = s;
    }, function (e, t, n) {
      "use strict";

      function r(e, t, n) {
        this.x = null;
        this.y = null;
        if (e == null && t == null && n == null) {
          this.x = 0;
          this.y = 0;
        } else if (typeof e == "number" && typeof t == "number" && n == null) {
          this.x = e;
          this.y = t;
        } else if (e.constructor.name == "Point" && t == null && n == null) {
          n = e;
          this.x = n.x;
          this.y = n.y;
        }
      }
      r.prototype.getX = function () {
        return this.x;
      };
      r.prototype.getY = function () {
        return this.y;
      };
      r.prototype.getLocation = function () {
        return new r(this.x, this.y);
      };
      r.prototype.setLocation = function (e, t, n) {
        if (e.constructor.name == "Point" && t == null && n == null) {
          n = e;
          this.setLocation(n.x, n.y);
        } else if (typeof e == "number" && typeof t == "number" && n == null) {
          if (parseInt(e) == e && parseInt(t) == t) {
            this.move(e, t);
          } else {
            this.x = Math.floor(e + 0.5);
            this.y = Math.floor(t + 0.5);
          }
        }
      };
      r.prototype.move = function (e, t) {
        this.x = e;
        this.y = t;
      };
      r.prototype.translate = function (e, t) {
        this.x += e;
        this.y += t;
      };
      r.prototype.equals = function (e) {
        if (e.constructor.name == "Point") {
          return this.x == e.x && this.y == e.y;
        } else {
          return this == e;
        }
      };
      r.prototype.toString = function () {
        return new r().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      function r(e, t, n, r) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        if (e != null && t != null && n != null && r != null) {
          this.x = e;
          this.y = t;
          this.width = n;
          this.height = r;
        }
      }
      r.prototype.getX = function () {
        return this.x;
      };
      r.prototype.setX = function (e) {
        this.x = e;
      };
      r.prototype.getY = function () {
        return this.y;
      };
      r.prototype.setY = function (e) {
        this.y = e;
      };
      r.prototype.getWidth = function () {
        return this.width;
      };
      r.prototype.setWidth = function (e) {
        this.width = e;
      };
      r.prototype.getHeight = function () {
        return this.height;
      };
      r.prototype.setHeight = function (e) {
        this.height = e;
      };
      r.prototype.getRight = function () {
        return this.x + this.width;
      };
      r.prototype.getBottom = function () {
        return this.y + this.height;
      };
      r.prototype.intersects = function (e) {
        return !(this.getRight() < e.x) && !(this.getBottom() < e.y) && !(e.getRight() < this.x) && !(e.getBottom() < this.y);
      };
      r.prototype.getCenterX = function () {
        return this.x + this.width / 2;
      };
      r.prototype.getMinX = function () {
        return this.getX();
      };
      r.prototype.getMaxX = function () {
        return this.getX() + this.width;
      };
      r.prototype.getCenterY = function () {
        return this.y + this.height / 2;
      };
      r.prototype.getMinY = function () {
        return this.getY();
      };
      r.prototype.getMaxY = function () {
        return this.getY() + this.height;
      };
      r.prototype.getWidthHalf = function () {
        return this.width / 2;
      };
      r.prototype.getHeightHalf = function () {
        return this.height / 2;
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      };
      function i() {}
      i.lastID = 0;
      i.createID = function (e) {
        if (i.isPrimitive(e)) {
          return e;
        } else {
          if (e.uniqueID == null) {
            e.uniqueID = i.getString();
            i.lastID++;
          }
          return e.uniqueID;
        }
      };
      i.getString = function (e) {
        if (e == null) {
          e = i.lastID;
        }
        return "Object#" + e;
      };
      i.isPrimitive = function (e) {
        var t = e === undefined ? "undefined" : r(e);
        return e == null || t != "object" && t != "function";
      };
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

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
      var i = n(0);
      var a = n(7);
      var o = n(3);
      var s = n(1);
      var l = n(6);
      var u = n(5);
      var h = n(17);
      var c = n(29);
      function d(e) {
        c.call(this);
        this.layoutQuality = i.QUALITY;
        this.createBendsAsNeeded = i.DEFAULT_CREATE_BENDS_AS_NEEDED;
        this.incremental = i.DEFAULT_INCREMENTAL;
        this.animationOnLayout = i.DEFAULT_ANIMATION_ON_LAYOUT;
        this.animationDuringLayout = i.DEFAULT_ANIMATION_DURING_LAYOUT;
        this.animationPeriod = i.DEFAULT_ANIMATION_PERIOD;
        this.uniformLeafNodeSizes = i.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
        this.edgeToDummyNodes = new Map();
        this.graphManager = new a(this);
        this.isLayoutFinished = false;
        this.isSubLayout = false;
        this.isRemoteUse = false;
        if (e != null) {
          this.isRemoteUse = e;
        }
      }
      d.RANDOM_SEED = 1;
      d.prototype = Object.create(c.prototype);
      d.prototype.getGraphManager = function () {
        return this.graphManager;
      };
      d.prototype.getAllNodes = function () {
        return this.graphManager.getAllNodes();
      };
      d.prototype.getAllEdges = function () {
        return this.graphManager.getAllEdges();
      };
      d.prototype.getAllNodesToApplyGravitation = function () {
        return this.graphManager.getAllNodesToApplyGravitation();
      };
      d.prototype.newGraphManager = function () {
        var e = new a(this);
        this.graphManager = e;
        return e;
      };
      d.prototype.newGraph = function (e) {
        return new l(null, this.graphManager, e);
      };
      d.prototype.newNode = function (e) {
        return new o(this.graphManager, e);
      };
      d.prototype.newEdge = function (e) {
        return new s(null, null, e);
      };
      d.prototype.checkLayoutSuccess = function () {
        return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
      };
      d.prototype.runLayout = function () {
        var e;
        this.isLayoutFinished = false;
        if (this.tilingPreLayout) {
          this.tilingPreLayout();
        }
        this.initParameters();
        e = !this.checkLayoutSuccess() && this.layout();
        return i.ANIMATE !== "during" && (e && !this.isSubLayout && this.doPostLayout(), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, e);
      };
      d.prototype.doPostLayout = function () {
        if (!this.incremental) {
          this.transform();
        }
        this.update();
      };
      d.prototype.update2 = function () {
        if (this.createBendsAsNeeded) {
          this.createBendpointsFromDummyNodes();
          this.graphManager.resetAllEdges();
        }
        if (!this.isRemoteUse) {
          var e = this.graphManager.getAllEdges();
          var t = 0;
          for (; t < e.length; t++) {
            e[t];
          }
          var n = this.graphManager.getRoot().getNodes();
          var t = 0;
          for (; t < n.length; t++) {
            n[t];
          }
          this.update(this.graphManager.getRoot());
        }
      };
      d.prototype.update = function (e) {
        if (e == null) {
          this.update2();
        } else if (e instanceof o) {
          if (e.getChild() != null) {
            var t = e.getChild().getNodes();
            var n = 0;
            for (; n < t.length; n++) {
              update(t[n]);
            }
          }
          if (e.vGraphObject != null) {
            e.vGraphObject.update(e);
          }
        } else if (e instanceof s) {
          if (e.vGraphObject != null) {
            e.vGraphObject.update(e);
          }
        } else if (e instanceof l && e.vGraphObject != null) {
          e.vGraphObject.update(e);
        }
      };
      d.prototype.initParameters = function () {
        if (!this.isSubLayout) {
          this.layoutQuality = i.QUALITY;
          this.animationDuringLayout = i.DEFAULT_ANIMATION_DURING_LAYOUT;
          this.animationPeriod = i.DEFAULT_ANIMATION_PERIOD;
          this.animationOnLayout = i.DEFAULT_ANIMATION_ON_LAYOUT;
          this.incremental = i.DEFAULT_INCREMENTAL;
          this.createBendsAsNeeded = i.DEFAULT_CREATE_BENDS_AS_NEEDED;
          this.uniformLeafNodeSizes = i.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
        }
        if (this.animationDuringLayout) {
          this.animationOnLayout = false;
        }
      };
      d.prototype.transform = function (e) {
        if (e == undefined) {
          this.transform(new u(0, 0));
        } else {
          var t = new h();
          var n = this.graphManager.getRoot().updateLeftTop();
          if (n != null) {
            t.setWorldOrgX(e.x);
            t.setWorldOrgY(e.y);
            t.setDeviceOrgX(n.x);
            t.setDeviceOrgY(n.y);
            var r = this.getAllNodes();
            var i = 0;
            for (; i < r.length; i++) {
              r[i].transform(t);
            }
          }
        }
      };
      d.prototype.positionNodesRandomly = function (e) {
        if (e == undefined) {
          this.positionNodesRandomly(this.getGraphManager().getRoot());
          this.getGraphManager().getRoot().updateBounds(true);
        } else {
          var t;
          var n;
          var r = e.getNodes();
          var i = 0;
          for (; i < r.length; i++) {
            if ((n = (t = r[i]).getChild()) == null) {
              t.scatter();
            } else if (n.getNodes().length == 0) {
              t.scatter();
            } else {
              this.positionNodesRandomly(n);
              t.updateBounds();
            }
          }
        }
      };
      d.prototype.getFlatForest = function () {
        var e = [];
        var t = true;
        var n = this.graphManager.getRoot().getNodes();
        var i = true;
        var a = 0;
        for (; a < n.length; a++) {
          if (n[a].getChild() != null) {
            i = false;
          }
        }
        if (!i) {
          return e;
        }
        var o = new Set();
        var s = [];
        var l = new Map();
        var u = [];
        for (u = u.concat(n); u.length > 0 && t;) {
          for (s.push(u[0]); s.length > 0 && t;) {
            var h = s[0];
            s.splice(0, 1);
            o.add(h);
            var c = h.getEdges();
            var a = 0;
            for (; a < c.length; a++) {
              var d = c[a].getOtherEnd(h);
              if (l.get(h) != d) {
                if (o.has(d)) {
                  t = false;
                  break;
                }
                s.push(d);
                l.set(d, h);
              }
            }
          }
          if (t) {
            var p = [].concat(r(o));
            e.push(p);
            for (var a = 0; a < p.length; a++) {
              var g = p[a];
              var f = u.indexOf(g);
              if (f > -1) {
                u.splice(f, 1);
              }
            }
            o = new Set();
            l = new Map();
          } else {
            e = [];
          }
        }
        return e;
      };
      d.prototype.createDummyNodesForBendpoints = function (e) {
        var t = [];
        var n = e.source;
        var r = this.graphManager.calcLowestCommonAncestor(e.source, e.target);
        var i = 0;
        for (; i < e.bendpoints.length; i++) {
          var a = this.newNode(null);
          a.setRect(new Point(0, 0), new Dimension(1, 1));
          r.add(a);
          var o = this.newEdge(null);
          this.graphManager.add(o, n, a);
          t.add(a);
          n = a;
        }
        var o = this.newEdge(null);
        this.graphManager.add(o, n, e.target);
        this.edgeToDummyNodes.set(e, t);
        if (e.isInterGraph()) {
          this.graphManager.remove(e);
        } else {
          r.remove(e);
        }
        return t;
      };
      d.prototype.createBendpointsFromDummyNodes = function () {
        var e = [];
        e = e.concat(this.graphManager.getAllEdges());
        e = [].concat(r(this.edgeToDummyNodes.keys())).concat(e);
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (n.bendpoints.length > 0) {
            var i = this.edgeToDummyNodes.get(n);
            var a = 0;
            for (; a < i.length; a++) {
              var o = i[a];
              var s = new u(o.getCenterX(), o.getCenterY());
              var l = n.bendpoints.get(a);
              l.x = s.x;
              l.y = s.y;
              o.getOwner().remove(o);
            }
            this.graphManager.add(n, n.source, n.target);
          }
        }
      };
      d.transform = function (e, t, n, r) {
        if (n == undefined || r == undefined) {
          if (e <= 50) {
            i = t * 9 / 500;
            a = t / 10;
          } else {
            i = t * 9 / 50;
            a = t * -8;
          }
          return i * e + a;
        }
        var i;
        var a;
        var o = t;
        if (e <= 50) {
          o -= (t - t / n) / 50 * (50 - e);
        } else {
          o += (t * r - t) / 50 * (e - 50);
        }
        return o;
      };
      d.findCenterOfTree = function (e) {
        var t = [];
        t = t.concat(e);
        var n = [];
        var r = new Map();
        var i = false;
        var a = null;
        if (t.length == 1 || t.length == 2) {
          i = true;
          a = t[0];
        }
        for (var o = 0; o < t.length; o++) {
          var s = t[o];
          var l = s.getNeighborsList().size;
          r.set(s, s.getNeighborsList().size);
          if (l == 1) {
            n.push(s);
          }
        }
        var u = [];
        for (u = u.concat(n); !i;) {
          var h = [];
          h = h.concat(u);
          u = [];
          for (var o = 0; o < t.length; o++) {
            var s = t[o];
            var c = t.indexOf(s);
            if (c >= 0) {
              t.splice(c, 1);
            }
            s.getNeighborsList().forEach(function (e) {
              if (n.indexOf(e) < 0) {
                var t = r.get(e) - 1;
                if (t == 1) {
                  u.push(e);
                }
                r.set(e, t);
              }
            });
          }
          n = n.concat(u);
          if (t.length == 1 || t.length == 2) {
            i = true;
            a = t[0];
          }
        }
        return a;
      };
      d.prototype.setGraphManager = function (e) {
        this.graphManager = e;
      };
      e.exports = d;
    }, function (e, t, n) {
      "use strict";

      function r() {}
      r.seed = 1;
      r.x = 0;
      r.nextDouble = function () {
        r.x = Math.sin(r.seed++) * 10000;
        return r.x - Math.floor(r.x);
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = n(5);
      function i(e, t) {
        this.lworldOrgX = 0;
        this.lworldOrgY = 0;
        this.ldeviceOrgX = 0;
        this.ldeviceOrgY = 0;
        this.lworldExtX = 1;
        this.lworldExtY = 1;
        this.ldeviceExtX = 1;
        this.ldeviceExtY = 1;
      }
      i.prototype.getWorldOrgX = function () {
        return this.lworldOrgX;
      };
      i.prototype.setWorldOrgX = function (e) {
        this.lworldOrgX = e;
      };
      i.prototype.getWorldOrgY = function () {
        return this.lworldOrgY;
      };
      i.prototype.setWorldOrgY = function (e) {
        this.lworldOrgY = e;
      };
      i.prototype.getWorldExtX = function () {
        return this.lworldExtX;
      };
      i.prototype.setWorldExtX = function (e) {
        this.lworldExtX = e;
      };
      i.prototype.getWorldExtY = function () {
        return this.lworldExtY;
      };
      i.prototype.setWorldExtY = function (e) {
        this.lworldExtY = e;
      };
      i.prototype.getDeviceOrgX = function () {
        return this.ldeviceOrgX;
      };
      i.prototype.setDeviceOrgX = function (e) {
        this.ldeviceOrgX = e;
      };
      i.prototype.getDeviceOrgY = function () {
        return this.ldeviceOrgY;
      };
      i.prototype.setDeviceOrgY = function (e) {
        this.ldeviceOrgY = e;
      };
      i.prototype.getDeviceExtX = function () {
        return this.ldeviceExtX;
      };
      i.prototype.setDeviceExtX = function (e) {
        this.ldeviceExtX = e;
      };
      i.prototype.getDeviceExtY = function () {
        return this.ldeviceExtY;
      };
      i.prototype.setDeviceExtY = function (e) {
        this.ldeviceExtY = e;
      };
      i.prototype.transformX = function (e) {
        var t = 0;
        var n = this.lworldExtX;
        if (n != 0) {
          t = this.ldeviceOrgX + (e - this.lworldOrgX) * this.ldeviceExtX / n;
        }
        return t;
      };
      i.prototype.transformY = function (e) {
        var t = 0;
        var n = this.lworldExtY;
        if (n != 0) {
          t = this.ldeviceOrgY + (e - this.lworldOrgY) * this.ldeviceExtY / n;
        }
        return t;
      };
      i.prototype.inverseTransformX = function (e) {
        var t = 0;
        var n = this.ldeviceExtX;
        if (n != 0) {
          t = this.lworldOrgX + (e - this.ldeviceOrgX) * this.lworldExtX / n;
        }
        return t;
      };
      i.prototype.inverseTransformY = function (e) {
        var t = 0;
        var n = this.ldeviceExtY;
        if (n != 0) {
          t = this.lworldOrgY + (e - this.ldeviceOrgY) * this.lworldExtY / n;
        }
        return t;
      };
      i.prototype.inverseTransformPoint = function (e) {
        return new r(this.inverseTransformX(e.x), this.inverseTransformY(e.y));
      };
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

      var r = n(15);
      var i = n(4);
      var a = n(0);
      var o = n(8);
      var s = n(9);
      function l() {
        r.call(this);
        this.useSmartIdealEdgeLengthCalculation = i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
        this.gravityConstant = i.DEFAULT_GRAVITY_STRENGTH;
        this.compoundGravityConstant = i.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
        this.gravityRangeFactor = i.DEFAULT_GRAVITY_RANGE_FACTOR;
        this.compoundGravityRangeFactor = i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
        this.displacementThresholdPerNode = i.DEFAULT_EDGE_LENGTH * 3 / 100;
        this.coolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL;
        this.initialCoolingFactor = i.DEFAULT_COOLING_FACTOR_INCREMENTAL;
        this.totalDisplacement = 0;
        this.oldTotalDisplacement = 0;
        this.maxIterations = i.MAX_ITERATIONS;
      }
      l.prototype = Object.create(r.prototype);
      for (var u in r) {
        l[u] = r[u];
      }
      l.prototype.initParameters = function () {
        r.prototype.initParameters.call(this, arguments);
        this.totalIterations = 0;
        this.notAnimatedIterations = 0;
        this.useFRGridVariant = i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
        this.grid = [];
      };
      l.prototype.calcIdealEdgeLengths = function () {
        var e;
        var t;
        var n;
        var r;
        var o;
        var s;
        var l;
        var u = this.getGraphManager().getAllEdges();
        var h = 0;
        for (; h < u.length; h++) {
          t = (e = u[h]).idealLength;
          if (e.isInterGraph) {
            r = e.getSource();
            o = e.getTarget();
            s = e.getSourceInLca().getEstimatedSize();
            l = e.getTargetInLca().getEstimatedSize();
            if (this.useSmartIdealEdgeLengthCalculation) {
              e.idealLength += s + l - a.SIMPLE_NODE_SIZE * 2;
            }
            n = e.getLca().getInclusionTreeDepth();
            e.idealLength += t * i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (r.getInclusionTreeDepth() + o.getInclusionTreeDepth() - n * 2);
          }
        }
      };
      l.prototype.initSpringEmbedder = function () {
        var e = this.getAllNodes().length;
        if (this.incremental) {
          if (e > i.ADAPTATION_LOWER_NODE_LIMIT) {
            this.coolingFactor = Math.max(this.coolingFactor * i.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (e - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - i.COOLING_ADAPTATION_FACTOR));
          }
          this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT_INCREMENTAL;
        } else {
          if (e > i.ADAPTATION_LOWER_NODE_LIMIT) {
            this.coolingFactor = Math.max(i.COOLING_ADAPTATION_FACTOR, 1 - (e - i.ADAPTATION_LOWER_NODE_LIMIT) / (i.ADAPTATION_UPPER_NODE_LIMIT - i.ADAPTATION_LOWER_NODE_LIMIT) * (1 - i.COOLING_ADAPTATION_FACTOR));
          } else {
            this.coolingFactor = 1;
          }
          this.initialCoolingFactor = this.coolingFactor;
          this.maxNodeDisplacement = i.MAX_NODE_DISPLACEMENT;
        }
        this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);
        this.displacementThresholdPerNode = i.DEFAULT_EDGE_LENGTH * 3 / 100;
        this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;
        this.repulsionRange = this.calcRepulsionRange();
      };
      l.prototype.calcSpringForces = function () {
        var e;
        var t = this.getAllEdges();
        var n = 0;
        for (; n < t.length; n++) {
          e = t[n];
          this.calcSpringForce(e, e.idealLength);
        }
      };
      l.prototype.calcRepulsionForces = function () {
        var e;
        var t;
        var n;
        var r;
        var a;
        var o = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        var s = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        var l = this.getAllNodes();
        if (this.useFRGridVariant) {
          if (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && o) {
            this.updateGrid();
          }
          a = new Set();
          e = 0;
          for (; e < l.length; e++) {
            n = l[e];
            this.calculateRepulsionForceOfANode(n, a, o, s);
            a.add(n);
          }
        } else {
          for (e = 0; e < l.length; e++) {
            n = l[e];
            t = e + 1;
            for (; t < l.length; t++) {
              r = l[t];
              if (n.getOwner() == r.getOwner()) {
                this.calcRepulsionForce(n, r);
              }
            }
          }
        }
      };
      l.prototype.calcGravitationalForces = function () {
        var e;
        var t = this.getAllNodesToApplyGravitation();
        var n = 0;
        for (; n < t.length; n++) {
          e = t[n];
          this.calcGravitationalForce(e);
        }
      };
      l.prototype.moveNodes = function () {
        var e = this.getAllNodes();
        var t = 0;
        for (; t < e.length; t++) {
          e[t].move();
        }
      };
      l.prototype.calcSpringForce = function (e, t) {
        var n;
        var r;
        var i;
        var a;
        var o = e.getSource();
        var s = e.getTarget();
        if (this.uniformLeafNodeSizes && o.getChild() == null && s.getChild() == null) {
          e.updateLengthSimple();
        } else {
          e.updateLength();
          if (e.isOverlapingSourceAndTarget) {
            return;
          }
        }
        if ((n = e.getLength()) != 0) {
          i = (r = e.edgeElasticity * (n - t)) * (e.lengthX / n);
          a = r * (e.lengthY / n);
          o.springForceX += i;
          o.springForceY += a;
          s.springForceX -= i;
          s.springForceY -= a;
        }
      };
      l.prototype.calcRepulsionForce = function (e, t) {
        var n;
        var r;
        var a;
        var l;
        var u;
        var h;
        var c;
        var d = e.getRect();
        var p = t.getRect();
        var g = [,,];
        var f = [,,,,];
        if (d.intersects(p)) {
          o.calcSeparationAmount(d, p, g, i.DEFAULT_EDGE_LENGTH / 2);
          h = g[0] * 2;
          c = g[1] * 2;
          var v = e.noOfChildren * t.noOfChildren / (e.noOfChildren + t.noOfChildren);
          e.repulsionForceX -= v * h;
          e.repulsionForceY -= v * c;
          t.repulsionForceX += v * h;
          t.repulsionForceY += v * c;
        } else {
          if (this.uniformLeafNodeSizes && e.getChild() == null && t.getChild() == null) {
            n = p.getCenterX() - d.getCenterX();
            r = p.getCenterY() - d.getCenterY();
          } else {
            o.getIntersection(d, p, f);
            n = f[2] - f[0];
            r = f[3] - f[1];
          }
          if (Math.abs(n) < i.MIN_REPULSION_DIST) {
            n = s.sign(n) * i.MIN_REPULSION_DIST;
          }
          if (Math.abs(r) < i.MIN_REPULSION_DIST) {
            r = s.sign(r) * i.MIN_REPULSION_DIST;
          }
          l = Math.sqrt(a = n * n + r * r);
          h = (u = (e.nodeRepulsion / 2 + t.nodeRepulsion / 2) * e.noOfChildren * t.noOfChildren / a) * n / l;
          c = u * r / l;
          e.repulsionForceX -= h;
          e.repulsionForceY -= c;
          t.repulsionForceX += h;
          t.repulsionForceY += c;
        }
      };
      l.prototype.calcGravitationalForce = function (e) {
        var t;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var l;
        n = ((t = e.getOwner()).getRight() + t.getLeft()) / 2;
        r = (t.getTop() + t.getBottom()) / 2;
        i = e.getCenterX() - n;
        a = e.getCenterY() - r;
        o = Math.abs(i) + e.getWidth() / 2;
        s = Math.abs(a) + e.getHeight() / 2;
        if (e.getOwner() == this.graphManager.getRoot()) {
          if (o > (l = t.getEstimatedSize() * this.gravityRangeFactor) || s > l) {
            e.gravitationForceX = -this.gravityConstant * i;
            e.gravitationForceY = -this.gravityConstant * a;
          }
        } else if (o > (l = t.getEstimatedSize() * this.compoundGravityRangeFactor) || s > l) {
          e.gravitationForceX = -this.gravityConstant * i * this.compoundGravityConstant;
          e.gravitationForceY = -this.gravityConstant * a * this.compoundGravityConstant;
        }
      };
      l.prototype.isConverged = function () {
        var e;
        var t = false;
        if (this.totalIterations > this.maxIterations / 3) {
          t = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
        }
        e = this.totalDisplacement < this.totalDisplacementThreshold;
        this.oldTotalDisplacement = this.totalDisplacement;
        return e || t;
      };
      l.prototype.animate = function () {
        if (this.animationDuringLayout && !this.isSubLayout) {
          if (this.notAnimatedIterations == this.animationPeriod) {
            this.update();
            this.notAnimatedIterations = 0;
          } else {
            this.notAnimatedIterations++;
          }
        }
      };
      l.prototype.calcNoOfChildrenForAllNodes = function () {
        var e;
        var t = this.graphManager.getAllNodes();
        var n = 0;
        for (; n < t.length; n++) {
          (e = t[n]).noOfChildren = e.getNoOfChildren();
        }
      };
      l.prototype.calcGrid = function (e) {
        var t = 0;
        var n = 0;
        t = parseInt(Math.ceil((e.getRight() - e.getLeft()) / this.repulsionRange));
        n = parseInt(Math.ceil((e.getBottom() - e.getTop()) / this.repulsionRange));
        var r = Array(t);
        var i = 0;
        for (; i < t; i++) {
          r[i] = Array(n);
        }
        for (var i = 0; i < t; i++) {
          for (var a = 0; a < n; a++) {
            r[i][a] = [];
          }
        }
        return r;
      };
      l.prototype.addNodeToGrid = function (e, t, n) {
        var r = 0;
        var i = 0;
        var a = 0;
        var o = 0;
        r = parseInt(Math.floor((e.getRect().x - t) / this.repulsionRange));
        i = parseInt(Math.floor((e.getRect().width + e.getRect().x - t) / this.repulsionRange));
        a = parseInt(Math.floor((e.getRect().y - n) / this.repulsionRange));
        o = parseInt(Math.floor((e.getRect().height + e.getRect().y - n) / this.repulsionRange));
        for (var s = r; s <= i; s++) {
          for (var l = a; l <= o; l++) {
            this.grid[s][l].push(e);
            e.setGridCoordinates(r, i, a, o);
          }
        }
      };
      l.prototype.updateGrid = function () {
        var e;
        var t;
        var n = this.getAllNodes();
        e = 0;
        this.grid = this.calcGrid(this.graphManager.getRoot());
        for (; e < n.length; e++) {
          t = n[e];
          this.addNodeToGrid(t, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
        }
      };
      l.prototype.calculateRepulsionForceOfANode = function (e, t, n, r) {
        if (this.totalIterations % i.GRID_CALCULATION_CHECK_PERIOD == 1 && n || r) {
          var a;
          var o = new Set();
          e.surrounding = [];
          var s = this.grid;
          var l = e.startX - 1;
          for (; l < e.finishX + 2; l++) {
            for (var u = e.startY - 1; u < e.finishY + 2; u++) {
              if (!(l < 0) && !(u < 0) && !(l >= s.length) && !(u >= s[0].length)) {
                for (var h = 0; h < s[l][u].length; h++) {
                  a = s[l][u][h];
                  if (e.getOwner() == a.getOwner() && e != a && !t.has(a) && !o.has(a)) {
                    var c = Math.abs(e.getCenterX() - a.getCenterX()) - (e.getWidth() / 2 + a.getWidth() / 2);
                    var d = Math.abs(e.getCenterY() - a.getCenterY()) - (e.getHeight() / 2 + a.getHeight() / 2);
                    if (c <= this.repulsionRange && d <= this.repulsionRange) {
                      o.add(a);
                    }
                  }
                }
              }
            }
          }
          e.surrounding = [].concat(function (e) {
            if (!Array.isArray(e)) {
              return Array.from(e);
            }
            var t = 0;
            var n = Array(e.length);
            for (; t < e.length; t++) {
              n[t] = e[t];
            }
            return n;
          }(o));
        }
        for (l = 0; l < e.surrounding.length; l++) {
          this.calcRepulsionForce(e, e.surrounding[l]);
        }
      };
      l.prototype.calcRepulsionRange = function () {
        return 0;
      };
      e.exports = l;
    }, function (e, t, n) {
      "use strict";

      var r = n(1);
      var i = n(4);
      function a(e, t, n) {
        r.call(this, e, t, n);
        this.idealLength = i.DEFAULT_EDGE_LENGTH;
        this.edgeElasticity = i.DEFAULT_SPRING_STRENGTH;
      }
      a.prototype = Object.create(r.prototype);
      for (var o in r) {
        a[o] = r[o];
      }
      e.exports = a;
    }, function (e, t, n) {
      "use strict";

      var r = n(3);
      var i = n(4);
      function a(e, t, n, a) {
        r.call(this, e, t, n, a);
        this.nodeRepulsion = i.DEFAULT_REPULSION_STRENGTH;
        this.springForceX = 0;
        this.springForceY = 0;
        this.repulsionForceX = 0;
        this.repulsionForceY = 0;
        this.gravitationForceX = 0;
        this.gravitationForceY = 0;
        this.displacementX = 0;
        this.displacementY = 0;
        this.startX = 0;
        this.finishX = 0;
        this.startY = 0;
        this.finishY = 0;
        this.surrounding = [];
      }
      a.prototype = Object.create(r.prototype);
      for (var o in r) {
        a[o] = r[o];
      }
      a.prototype.setGridCoordinates = function (e, t, n, r) {
        this.startX = e;
        this.finishX = t;
        this.startY = n;
        this.finishY = r;
      };
      e.exports = a;
    }, function (e, t, n) {
      "use strict";

      function r(e, t) {
        this.width = 0;
        this.height = 0;
        if (e !== null && t !== null) {
          this.height = t;
          this.width = e;
        }
      }
      r.prototype.getWidth = function () {
        return this.width;
      };
      r.prototype.setWidth = function (e) {
        this.width = e;
      };
      r.prototype.getHeight = function () {
        return this.height;
      };
      r.prototype.setHeight = function (e) {
        this.height = e;
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = n(14);
      function i() {
        this.map = {};
        this.keys = [];
      }
      i.prototype.put = function (e, t) {
        var n = r.createID(e);
        if (!this.contains(n)) {
          this.map[n] = t;
          this.keys.push(e);
        }
      };
      i.prototype.contains = function (e) {
        r.createID(e);
        return this.map[e] != null;
      };
      i.prototype.get = function (e) {
        var t = r.createID(e);
        return this.map[t];
      };
      i.prototype.keySet = function () {
        return this.keys;
      };
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

      var r = n(14);
      function i() {
        this.set = {};
      }
      i.prototype.add = function (e) {
        var t = r.createID(e);
        if (!this.contains(t)) {
          this.set[t] = e;
        }
      };
      i.prototype.remove = function (e) {
        delete this.set[r.createID(e)];
      };
      i.prototype.clear = function () {
        this.set = {};
      };
      i.prototype.contains = function (e) {
        return this.set[r.createID(e)] == e;
      };
      i.prototype.isEmpty = function () {
        return this.size() === 0;
      };
      i.prototype.size = function () {
        return Object.keys(this.set).length;
      };
      i.prototype.addAllTo = function (e) {
        var t = Object.keys(this.set);
        var n = t.length;
        var r = 0;
        for (; r < n; r++) {
          e.push(this.set[t[r]]);
        }
      };
      i.prototype.size = function () {
        return Object.keys(this.set).length;
      };
      i.prototype.addAll = function (e) {
        var t = e.length;
        var n = 0;
        for (; n < t; n++) {
          var r = e[n];
          this.add(r);
        }
      };
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

      function r() {}
      r.multMat = function (e, t) {
        var n = [];
        var r = 0;
        for (; r < e.length; r++) {
          n[r] = [];
          for (var i = 0; i < t[0].length; i++) {
            n[r][i] = 0;
            for (var a = 0; a < e[0].length; a++) {
              n[r][i] += e[r][a] * t[a][i];
            }
          }
        }
        return n;
      };
      r.transpose = function (e) {
        var t = [];
        var n = 0;
        for (; n < e[0].length; n++) {
          t[n] = [];
          for (var r = 0; r < e.length; r++) {
            t[n][r] = e[r][n];
          }
        }
        return t;
      };
      r.multCons = function (e, t) {
        var n = [];
        var r = 0;
        for (; r < e.length; r++) {
          n[r] = e[r] * t;
        }
        return n;
      };
      r.minusOp = function (e, t) {
        var n = [];
        var r = 0;
        for (; r < e.length; r++) {
          n[r] = e[r] - t[r];
        }
        return n;
      };
      r.dotProduct = function (e, t) {
        var n = 0;
        var r = 0;
        for (; r < e.length; r++) {
          n += e[r] * t[r];
        }
        return n;
      };
      r.mag = function (e) {
        return Math.sqrt(this.dotProduct(e, e));
      };
      r.normalize = function (e) {
        var t = [];
        var n = this.mag(e);
        var r = 0;
        for (; r < e.length; r++) {
          t[r] = e[r] / n;
        }
        return t;
      };
      r.multGamma = function (e) {
        var t = [];
        var n = 0;
        var r = 0;
        for (; r < e.length; r++) {
          n += e[r];
        }
        n *= -1 / e.length;
        for (var i = 0; i < e.length; i++) {
          t[i] = n + e[i];
        }
        return t;
      };
      r.multL = function (e, t, n) {
        var r = [];
        var i = [];
        var a = [];
        var o = 0;
        for (; o < t[0].length; o++) {
          var s = 0;
          var l = 0;
          for (; l < t.length; l++) {
            s += t[l][o] * -0.5 * e[l];
          }
          i[o] = s;
        }
        for (var u = 0; u < n.length; u++) {
          var h = 0;
          var c = 0;
          for (; c < n.length; c++) {
            h += n[u][c] * i[c];
          }
          a[u] = h;
        }
        for (var d = 0; d < t.length; d++) {
          var p = 0;
          var g = 0;
          for (; g < t[0].length; g++) {
            p += t[d][g] * a[g];
          }
          r[d] = p;
        }
        return r;
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
              r.writable = true;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = n(11);
      var a = function () {
        function e(t, n) {
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          if (n !== null || n !== undefined) {
            this.compareFunction = this._defaultCompareFunction;
          }
          var r = undefined;
          r = t instanceof i ? t.size() : t.length;
          this._quicksort(t, 0, r - 1);
        }
        r(e, [{
          key: "_quicksort",
          value: function (e, t, n) {
            if (t < n) {
              var r = this._partition(e, t, n);
              this._quicksort(e, t, r);
              this._quicksort(e, r + 1, n);
            }
          }
        }, {
          key: "_partition",
          value: function (e, t, n) {
            var r = this._get(e, t);
            var i = t;
            var a = n;
            while (true) {
              while (this.compareFunction(r, this._get(e, a))) {
                a--;
              }
              while (this.compareFunction(this._get(e, i), r)) {
                i++;
              }
              if (!(i < a)) {
                return a;
              }
              this._swap(e, i, a);
              i++;
              a--;
            }
          }
        }, {
          key: "_get",
          value: function (e, t) {
            if (e instanceof i) {
              return e.get_object_at(t);
            } else {
              return e[t];
            }
          }
        }, {
          key: "_set",
          value: function (e, t, n) {
            if (e instanceof i) {
              e.set_object_at(t, n);
            } else {
              e[t] = n;
            }
          }
        }, {
          key: "_swap",
          value: function (e, t, n) {
            var r = this._get(e, t);
            this._set(e, t, this._get(e, n));
            this._set(e, n, r);
          }
        }, {
          key: "_defaultCompareFunction",
          value: function (e, t) {
            return t > e;
          }
        }]);
        return e;
      }();
      e.exports = a;
    }, function (e, t, n) {
      "use strict";

      function r() {}
      r.svd = function (e) {
        this.U = null;
        this.V = null;
        this.s = null;
        this.m = 0;
        this.n = 0;
        this.m = e.length;
        this.n = e[0].length;
        var t = Math.min(this.m, this.n);
        this.s = function (e) {
          var t = [];
          for (; e-- > 0;) {
            t.push(0);
          }
          return t;
        }(Math.min(this.m + 1, this.n));
        this.U = function e(t) {
          if (t.length == 0) {
            return 0;
          }
          var n = [];
          var r = 0;
          for (; r < t[0]; r++) {
            n.push(e(t.slice(1)));
          }
          return n;
        }([this.m, t]);
        this.V = function e(t) {
          if (t.length == 0) {
            return 0;
          }
          var n = [];
          var r = 0;
          for (; r < t[0]; r++) {
            n.push(e(t.slice(1)));
          }
          return n;
        }([this.n, this.n]);
        var n = function (e) {
          var t = [];
          for (; e-- > 0;) {
            t.push(0);
          }
          return t;
        }(this.n);
        var i = function (e) {
          var t = [];
          for (; e-- > 0;) {
            t.push(0);
          }
          return t;
        }(this.m);
        var a = Math.min(this.m - 1, this.n);
        var o = Math.max(0, Math.min(this.n - 2, this.m));
        var s = 0;
        for (; s < Math.max(a, o); s++) {
          if (s < a) {
            this.s[s] = 0;
            for (var l = s; l < this.m; l++) {
              this.s[s] = r.hypot(this.s[s], e[l][s]);
            }
            if (this.s[s] !== 0) {
              if (e[s][s] < 0) {
                this.s[s] = -this.s[s];
              }
              for (var u = s; u < this.m; u++) {
                e[u][s] /= this.s[s];
              }
              e[s][s] += 1;
            }
            this.s[s] = -this.s[s];
          }
          for (var h = s + 1; h < this.n; h++) {
            f = s < a;
            v = this.s[s] !== 0;
            if (f && v) {
              var c = 0;
              var d = s;
              for (; d < this.m; d++) {
                c += e[d][s] * e[d][h];
              }
              c = -c / e[s][s];
              for (var p = s; p < this.m; p++) {
                e[p][h] += c * e[p][s];
              }
            }
            n[h] = e[s][h];
          }
          y = s < a;
          if (y) {
            for (var g = s; g < this.m; g++) {
              this.U[g][s] = e[g][s];
            }
          }
          if (s < o) {
            n[s] = 0;
            var f;
            var v;
            var y;
            var b;
            var x;
            var w = s + 1;
            for (; w < this.n; w++) {
              n[s] = r.hypot(n[s], n[w]);
            }
            if (n[s] !== 0) {
              if (n[s + 1] < 0) {
                n[s] = -n[s];
              }
              for (var E = s + 1; E < this.n; E++) {
                n[E] /= n[s];
              }
              n[s + 1] += 1;
            }
            n[s] = -n[s];
            b = s + 1 < this.m;
            x = n[s] !== 0;
            if (b && x) {
              for (var T = s + 1; T < this.m; T++) {
                i[T] = 0;
              }
              for (var C = s + 1; C < this.n; C++) {
                for (var N = s + 1; N < this.m; N++) {
                  i[N] += n[C] * e[N][C];
                }
              }
              for (var _ = s + 1; _ < this.n; _++) {
                var D = -n[_] / n[s + 1];
                var M = s + 1;
                for (; M < this.m; M++) {
                  e[M][_] += D * i[M];
                }
              }
            }
            for (var A = s + 1; A < this.n; A++) {
              this.V[A][s] = n[A];
            }
          }
        }
        var S = Math.min(this.n, this.m + 1);
        if (a < this.n) {
          this.s[a] = e[a][a];
        }
        if (this.m < S) {
          this.s[S - 1] = 0;
        }
        if (o + 1 < S) {
          n[o] = e[o][S - 1];
        }
        n[S - 1] = 0;
        for (var P = a; P < t; P++) {
          for (var O = 0; O < this.m; O++) {
            this.U[O][P] = 0;
          }
          this.U[P][P] = 1;
        }
        for (var I = a - 1; I >= 0; I--) {
          if (this.s[I] !== 0) {
            for (var L = I + 1; L < t; L++) {
              var k = 0;
              var R = I;
              for (; R < this.m; R++) {
                k += this.U[R][I] * this.U[R][L];
              }
              k = -k / this.U[I][I];
              for (var B = I; B < this.m; B++) {
                this.U[B][L] += k * this.U[B][I];
              }
            }
            for (var F = I; F < this.m; F++) {
              this.U[F][I] = -this.U[F][I];
            }
            this.U[I][I] = 1 + this.U[I][I];
            for (var z = 0; z < I - 1; z++) {
              this.U[z][I] = 0;
            }
          } else {
            for (var V = 0; V < this.m; V++) {
              this.U[V][I] = 0;
            }
            this.U[I][I] = 1;
          }
        }
        for (var Y = this.n - 1; Y >= 0; Y--) {
          ec = Y < o;
          ed = n[Y] !== 0;
          if (ec && ed) {
            for (var G = Y + 1; G < t; G++) {
              var X = 0;
              var H = Y + 1;
              for (; H < this.n; H++) {
                X += this.V[H][Y] * this.V[H][G];
              }
              X = -X / this.V[Y + 1][Y];
              for (var U = Y + 1; U < this.n; U++) {
                this.V[U][G] += X * this.V[U][Y];
              }
            }
          }
          for (var W = 0; W < this.n; W++) {
            this.V[W][Y] = 0;
          }
          this.V[Y][Y] = 1;
        }
        var j = S - 1;
        var q = 0;
        while (S > 0) {
          var K = undefined;
          var Z = undefined;
          for (K = S - 2; K >= -1 && K !== -1; K--) {
            if (Math.abs(n[K]) <= 1.6033346880071782e-291 + (Math.abs(this.s[K]) + Math.abs(this.s[K + 1])) * 2.220446049250313e-16) {
              n[K] = 0;
              break;
            }
          }
          if (K === S - 2) {
            Z = 4;
          } else {
            var $ = undefined;
            for ($ = S - 1; $ >= K && $ !== K; $--) {
              var Q = ($ !== S ? Math.abs(n[$]) : 0) + ($ !== K + 1 ? Math.abs(n[$ - 1]) : 0);
              if (Math.abs(this.s[$]) <= 1.6033346880071782e-291 + Q * 2.220446049250313e-16) {
                this.s[$] = 0;
                break;
              }
            }
            if ($ === K) {
              Z = 3;
            } else if ($ === S - 1) {
              Z = 1;
            } else {
              Z = 2;
              K = $;
            }
          }
          K++;
          switch (Z) {
            case 1:
              var J = n[S - 2];
              n[S - 2] = 0;
              for (var ee = S - 2; ee >= K; ee--) {
                var et = r.hypot(this.s[ee], J);
                var en = this.s[ee] / et;
                var er = J / et;
                this.s[ee] = et;
                if (ee !== K) {
                  J = -er * n[ee - 1];
                  n[ee - 1] = en * n[ee - 1];
                }
                for (var ei = 0; ei < this.n; ei++) {
                  et = en * this.V[ei][ee] + er * this.V[ei][S - 1];
                  this.V[ei][S - 1] = -er * this.V[ei][ee] + en * this.V[ei][S - 1];
                  this.V[ei][ee] = et;
                }
              }
              break;
            case 2:
              var ea = n[K - 1];
              n[K - 1] = 0;
              for (var eo = K; eo < S; eo++) {
                var es = r.hypot(this.s[eo], ea);
                var el = this.s[eo] / es;
                var eu = ea / es;
                this.s[eo] = es;
                ea = -eu * n[eo];
                n[eo] = el * n[eo];
                for (var eh = 0; eh < this.m; eh++) {
                  es = el * this.U[eh][eo] + eu * this.U[eh][K - 1];
                  this.U[eh][K - 1] = -eu * this.U[eh][eo] + el * this.U[eh][K - 1];
                  this.U[eh][eo] = es;
                }
              }
              break;
            case 3:
              var ec;
              var ed;
              var ep;
              var eg;
              var ef = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[S - 1]), Math.abs(this.s[S - 2])), Math.abs(n[S - 2])), Math.abs(this.s[K])), Math.abs(n[K]));
              var ev = this.s[S - 1] / ef;
              var ey = this.s[S - 2] / ef;
              var em = n[S - 2] / ef;
              var eb = this.s[K] / ef;
              var ex = n[K] / ef;
              var ew = ((ey + ev) * (ey - ev) + em * em) / 2;
              var eE = ev * em * (ev * em);
              var eT = 0;
              ep = ew !== 0;
              eg = eE !== 0;
              if (ep || eg) {
                eT = Math.sqrt(ew * ew + eE);
                if (ew < 0) {
                  eT = -eT;
                }
                eT = eE / (ew + eT);
              }
              var eC = (eb + ev) * (eb - ev) + eT;
              var eN = eb * ex;
              var e_ = K;
              for (; e_ < S - 1; e_++) {
                var eD = r.hypot(eC, eN);
                var eM = eC / eD;
                var eA = eN / eD;
                if (e_ !== K) {
                  n[e_ - 1] = eD;
                }
                eC = eM * this.s[e_] + eA * n[e_];
                n[e_] = eM * n[e_] - eA * this.s[e_];
                eN = eA * this.s[e_ + 1];
                this.s[e_ + 1] = eM * this.s[e_ + 1];
                for (var eS = 0; eS < this.n; eS++) {
                  eD = eM * this.V[eS][e_] + eA * this.V[eS][e_ + 1];
                  this.V[eS][e_ + 1] = -eA * this.V[eS][e_] + eM * this.V[eS][e_ + 1];
                  this.V[eS][e_] = eD;
                }
                eD = r.hypot(eC, eN);
                eM = eC / eD;
                eA = eN / eD;
                this.s[e_] = eD;
                eC = eM * n[e_] + eA * this.s[e_ + 1];
                this.s[e_ + 1] = -eA * n[e_] + eM * this.s[e_ + 1];
                eN = eA * n[e_ + 1];
                n[e_ + 1] = eM * n[e_ + 1];
                if (e_ < this.m - 1) {
                  for (var eP = 0; eP < this.m; eP++) {
                    eD = eM * this.U[eP][e_] + eA * this.U[eP][e_ + 1];
                    this.U[eP][e_ + 1] = -eA * this.U[eP][e_] + eM * this.U[eP][e_ + 1];
                    this.U[eP][e_] = eD;
                  }
                }
              }
              n[S - 2] = eC;
              break;
            case 4:
              if (this.s[K] <= 0 && (this.s[K] = this.s[K] < 0 ? -this.s[K] : 0, 1)) {
                for (var eO = 0; eO <= j; eO++) {
                  this.V[eO][K] = -this.V[eO][K];
                }
              }
              while (K < j && !(this.s[K] >= this.s[K + 1])) {
                var eI = this.s[K];
                this.s[K] = this.s[K + 1];
                this.s[K + 1] = eI;
                if (K < this.n - 1) {
                  for (var eL = 0; eL < this.n; eL++) {
                    eI = this.V[eL][K + 1];
                    this.V[eL][K + 1] = this.V[eL][K];
                    this.V[eL][K] = eI;
                  }
                }
                if (K < this.m - 1) {
                  for (var ek = 0; ek < this.m; ek++) {
                    eI = this.U[ek][K + 1];
                    this.U[ek][K + 1] = this.U[ek][K];
                    this.U[ek][K] = eI;
                  }
                }
                K++;
              }
              S--;
          }
        }
        return {
          U: this.U,
          V: this.V,
          S: this.s
        };
      };
      r.hypot = function (e, t) {
        var n = undefined;
        if (Math.abs(e) > Math.abs(t)) {
          n = t / e;
          n = Math.abs(e) * Math.sqrt(1 + n * n);
        } else if (t != 0) {
          n = e / t;
          n = Math.abs(t) * Math.sqrt(1 + n * n);
        } else {
          n = 0;
        }
        return n;
      };
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
              r.writable = true;
            }
            Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          if (n) {
            e(t.prototype, n);
          }
          if (r) {
            e(t, r);
          }
          return t;
        };
      }();
      var i = function () {
        function e(t, n, r = 1, i = -1, a = -1) {
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          this.sequence1 = t;
          this.sequence2 = n;
          this.match_score = r;
          this.mismatch_penalty = i;
          this.gap_penalty = a;
          this.iMax = t.length + 1;
          this.jMax = n.length + 1;
          this.grid = Array(this.iMax);
          for (var o = 0; o < this.iMax; o++) {
            this.grid[o] = Array(this.jMax);
            for (var s = 0; s < this.jMax; s++) {
              this.grid[o][s] = 0;
            }
          }
          this.tracebackGrid = Array(this.iMax);
          for (var l = 0; l < this.iMax; l++) {
            this.tracebackGrid[l] = Array(this.jMax);
            for (var u = 0; u < this.jMax; u++) {
              this.tracebackGrid[l][u] = [null, null, null];
            }
          }
          this.alignments = [];
          this.score = -1;
          this.computeGrids();
        }
        r(e, [{
          key: "getScore",
          value: function () {
            return this.score;
          }
        }, {
          key: "getAlignments",
          value: function () {
            return this.alignments;
          }
        }, {
          key: "computeGrids",
          value: function () {
            for (var e = 1; e < this.jMax; e++) {
              this.grid[0][e] = this.grid[0][e - 1] + this.gap_penalty;
              this.tracebackGrid[0][e] = [false, false, true];
            }
            for (var t = 1; t < this.iMax; t++) {
              this.grid[t][0] = this.grid[t - 1][0] + this.gap_penalty;
              this.tracebackGrid[t][0] = [false, true, false];
            }
            for (var n = 1; n < this.iMax; n++) {
              for (var r = 1; r < this.jMax; r++) {
                var i = undefined;
                var a = [this.sequence1[n - 1] === this.sequence2[r - 1] ? this.grid[n - 1][r - 1] + this.match_score : this.grid[n - 1][r - 1] + this.mismatch_penalty, this.grid[n - 1][r] + this.gap_penalty, this.grid[n][r - 1] + this.gap_penalty];
                var o = this.arrayAllMaxIndexes(a);
                this.grid[n][r] = a[o[0]];
                this.tracebackGrid[n][r] = [o.includes(0), o.includes(1), o.includes(2)];
              }
            }
            this.score = this.grid[this.iMax - 1][this.jMax - 1];
          }
        }, {
          key: "alignmentTraceback",
          value: function () {
            var e = [];
            for (e.push({
              pos: [this.sequence1.length, this.sequence2.length],
              seq1: "",
              seq2: ""
            }); e[0];) {
              var t = e[0];
              var n = this.tracebackGrid[t.pos[0]][t.pos[1]];
              if (n[0]) {
                e.push({
                  pos: [t.pos[0] - 1, t.pos[1] - 1],
                  seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
                  seq2: this.sequence2[t.pos[1] - 1] + t.seq2
                });
              }
              if (n[1]) {
                e.push({
                  pos: [t.pos[0] - 1, t.pos[1]],
                  seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
                  seq2: "-" + t.seq2
                });
              }
              if (n[2]) {
                e.push({
                  pos: [t.pos[0], t.pos[1] - 1],
                  seq1: "-" + t.seq1,
                  seq2: this.sequence2[t.pos[1] - 1] + t.seq2
                });
              }
              if (t.pos[0] === 0 && t.pos[1] === 0) {
                this.alignments.push({
                  sequence1: t.seq1,
                  sequence2: t.seq2
                });
              }
              e.shift();
            }
            return this.alignments;
          }
        }, {
          key: "getAllIndexes",
          value: function (e, t) {
            var n = [];
            var r = -1;
            while ((r = e.indexOf(t, r + 1)) !== -1) {
              n.push(r);
            }
            return n;
          }
        }, {
          key: "arrayAllMaxIndexes",
          value: function (e) {
            return this.getAllIndexes(e, Math.max.apply(null, e));
          }
        }]);
        return e;
      }();
      e.exports = i;
    }, function (e, t, n) {
      "use strict";

      function r() {}
      r.FDLayout = n(18);
      r.FDLayoutConstants = n(4);
      r.FDLayoutEdge = n(19);
      r.FDLayoutNode = n(20);
      r.DimensionD = n(21);
      r.HashMap = n(22);
      r.HashSet = n(23);
      r.IGeometry = n(8);
      r.IMath = n(9);
      r.Integer = n(10);
      r.Point = n(12);
      r.PointD = n(5);
      r.RandomSeed = n(16);
      r.RectangleD = n(13);
      r.Transform = n(17);
      r.UniqueIDGeneretor = n(14);
      r.Quicksort = n(25);
      r.LinkedList = n(11);
      r.LGraphObject = n(2);
      r.LGraph = n(6);
      r.LEdge = n(1);
      r.LGraphManager = n(7);
      r.LNode = n(3);
      r.Layout = n(15);
      r.LayoutConstants = n(0);
      r.NeedlemanWunsch = n(27);
      r.Matrix = n(24);
      r.SVD = n(26);
      e.exports = r;
    }, function (e, t, n) {
      "use strict";

      function r() {
        this.listeners = [];
      }
      var i = r.prototype;
      i.addListener = function (e, t) {
        this.listeners.push({
          event: e,
          callback: t
        });
      };
      i.removeListener = function (e, t) {
        for (var n = this.listeners.length; n >= 0; n--) {
          var r = this.listeners[n];
          if (r.event === e && r.callback === t) {
            this.listeners.splice(n, 1);
          }
        }
      };
      i.emit = function (e, t) {
        for (var n = 0; n < this.listeners.length; n++) {
          var r = this.listeners[n];
          if (e === r.event) {
            r.callback(t);
          }
        }
      };
      e.exports = r;
    }]);
  };
  module.exports = t();
}