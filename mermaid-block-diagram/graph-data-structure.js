// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'Graph'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55285.683cc4b4.js
         * chunkId: 55285
         * moduleId: 232945
         */
module.exports = function (module, exports, require) {
  var constantCreator = require("constant-creator") /*id: 851378*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var throttledArgStringifyUtil = require("throttled-arg-stringify-util") /*id: 15104*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  class g {
    constructor(t = {}) {
      this._isDirected = !Object.prototype.hasOwnProperty.call(t, "directed") || t.directed;
      this._isMultigraph = !!Object.prototype.hasOwnProperty.call(t, "multigraph") && t.multigraph;
      this._isCompound = !!Object.prototype.hasOwnProperty.call(t, "compound") && t.compound;
      this._label = undefined;
      this._defaultNodeLabelFn = constantCreator.createConstant(undefined);
      this._defaultEdgeLabelFn = constantCreator.createConstant(undefined);
      this._nodes = {};
      if (this._isCompound) {
        this._parent = {};
        this._children = {};
        this._children["\0"] = {};
      }
      this._in = {};
      this._preds = {};
      this._out = {};
      this._sucs = {};
      this._edgeObjs = {};
      this._edgeLabels = {};
    }
    isDirected() {
      return this._isDirected;
    }
    isMultigraph() {
      return this._isMultigraph;
    }
    isCompound() {
      return this._isCompound;
    }
    setGraph(t) {
      this._label = t;
      return this;
    }
    graph() {
      return this._label;
    }
    setDefaultNodeLabel(t) {
      if (!isFunctionUtil_1.isFunction(t)) {
        t = constantCreator.createConstant(t);
      }
      this._defaultNodeLabelFn = t;
      return this;
    }
    nodeCount() {
      return this._nodeCount;
    }
    nodes() {
      return getOwnKeys.getOwnKeys(this._nodes);
    }
    sources() {
      var t = this;
      return genericFilterUtil.genericFilter(this.nodes(), function (e) {
        return isEmptyUtil.isEmpty(t._in[e]);
      });
    }
    sinks() {
      var t = this;
      return genericFilterUtil.genericFilter(this.nodes(), function (e) {
        return isEmptyUtil.isEmpty(t._out[e]);
      });
    }
    setNodes(t, e) {
      var r = arguments;
      var i = this;
      arrayObjectForeach.arrayObjectForeach(t, function (t) {
        if (r.length > 1) {
          i.setNode(t, e);
        } else {
          i.setNode(t);
        }
      });
      return this;
    }
    setNode(t, e) {
      if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
        if (arguments.length > 1) {
          this._nodes[t] = e;
        }
      } else {
        this._nodes[t] = arguments.length > 1 ? e : this._defaultNodeLabelFn(t);
        if (this._isCompound) {
          this._parent[t] = "\0";
          this._children[t] = {};
          this._children["\0"][t] = true;
        }
        this._in[t] = {};
        this._preds[t] = {};
        this._out[t] = {};
        this._sucs[t] = {};
        ++this._nodeCount;
      }
      return this;
    }
    node(t) {
      return this._nodes[t];
    }
    hasNode(t) {
      return Object.prototype.hasOwnProperty.call(this._nodes, t);
    }
    removeNode(t) {
      if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
        var e = t => this.removeEdge(this._edgeObjs[t]);
        delete this._nodes[t];
        if (this._isCompound) {
          this._removeFromParentsChildList(t);
          delete this._parent[t];
          arrayObjectForeach.arrayObjectForeach(this.children(t), t => {
            this.setParent(t);
          });
          delete this._children[t];
        }
        arrayObjectForeach.arrayObjectForeach(getOwnKeys.getOwnKeys(this._in[t]), e);
        delete this._in[t];
        delete this._preds[t];
        arrayObjectForeach.arrayObjectForeach(getOwnKeys.getOwnKeys(this._out[t]), e);
        delete this._out[t];
        delete this._sucs[t];
        --this._nodeCount;
      }
      return this;
    }
    setParent(t, e) {
      if (!this._isCompound) {
        throw Error("Cannot set parent in a non-compound graph");
      }
      if (isUndefinedCheck.isUndefined(e)) {
        e = "\0";
      } else {
        e += "";
        for (var r = e; !isUndefinedCheck.isUndefined(r); r = this.parent(r)) {
          if (r === t) {
            throw Error("Setting " + e + " as parent of " + t + " would create a cycle");
          }
        }
        this.setNode(e);
      }
      this.setNode(t);
      this._removeFromParentsChildList(t);
      this._parent[t] = e;
      this._children[e][t] = true;
      return this;
    }
    _removeFromParentsChildList(t) {
      delete this._children[this._parent[t]][t];
    }
    parent(t) {
      if (this._isCompound) {
        var e = this._parent[t];
        if (e !== "\0") {
          return e;
        }
      }
    }
    children(t) {
      if (isUndefinedCheck.isUndefined(t)) {
        t = "\0";
      }
      if (this._isCompound) {
        var e = this._children[t];
        if (e) {
          return getOwnKeys.getOwnKeys(e);
        }
      } else if (t === "\0") {
        return this.nodes();
      } else if (this.hasNode(t)) {
        return [];
      }
    }
    predecessors(t) {
      var e = this._preds[t];
      if (e) {
        return getOwnKeys.getOwnKeys(e);
      }
    }
    successors(t) {
      var e = this._sucs[t];
      if (e) {
        return getOwnKeys.getOwnKeys(e);
      }
    }
    neighbors(t) {
      var e = this.predecessors(t);
      if (e) {
        return throttledArgStringifyUtil.throttledStringify(e, this.successors(t));
      }
    }
    isLeaf(t) {
      var e;
      return (this.isDirected() ? this.successors(t) : this.neighbors(t)).length === 0;
    }
    filterNodes(t) {
      var e = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound
      });
      e.setGraph(this.graph());
      var r = this;
      arrayObjectForeach.arrayObjectForeach(this._nodes, function (r, i) {
        if (t(i)) {
          e.setNode(i, r);
        }
      });
      arrayObjectForeach.arrayObjectForeach(this._edgeObjs, function (t) {
        if (e.hasNode(t.v) && e.hasNode(t.w)) {
          e.setEdge(t, r.edge(t));
        }
      });
      var i = {};
      if (this._isCompound) {
        arrayObjectForeach.arrayObjectForeach(e.nodes(), function (t) {
          e.setParent(t, function t(a) {
            var s = r.parent(a);
            if (s === undefined || e.hasNode(s)) {
              i[a] = s;
              return s;
            } else if (s in i) {
              return i[s];
            } else {
              return t(s);
            }
          }(t));
        });
      }
      return e;
    }
    setDefaultEdgeLabel(t) {
      if (!isFunctionUtil_1.isFunction(t)) {
        t = constantCreator.createConstant(t);
      }
      this._defaultEdgeLabelFn = t;
      return this;
    }
    edgeCount() {
      return this._edgeCount;
    }
    edges() {
      return objectValuesHelper.getObjectValues(this._edgeObjs);
    }
    setPath(t, e) {
      var r = this;
      var i = arguments;
      genericReduceUtil.genericReduce(t, function (t, a) {
        if (i.length > 1) {
          r.setEdge(t, a, e);
        } else {
          r.setEdge(t, a);
        }
        return a;
      });
      return this;
    }
    setEdge() {
      var t;
      var e;
      var r;
      var i;
      var a = false;
      var s = arguments[0];
      if (typeof s == "object" && s !== null && "v" in s) {
        t = s.v;
        e = s.w;
        r = s.name;
        if (arguments.length == 2) {
          i = arguments[1];
          a = true;
        }
      } else {
        t = s;
        e = arguments[1];
        r = arguments[3];
        if (arguments.length > 2) {
          i = arguments[2];
          a = true;
        }
      }
      t = "" + t;
      e = "" + e;
      if (!isUndefinedCheck.isUndefined(r)) {
        r = "" + r;
      }
      var n = f(this._isDirected, t, e, r);
      if (Object.prototype.hasOwnProperty.call(this._edgeLabels, n)) {
        if (a) {
          this._edgeLabels[n] = i;
        }
        return this;
      }
      if (!isUndefinedCheck.isUndefined(r) && !this._isMultigraph) {
        throw Error("Cannot set a named edge when isMultigraph = false");
      }
      this.setNode(t);
      this.setNode(e);
      this._edgeLabels[n] = a ? i : this._defaultEdgeLabelFn(t, e, r);
      var l = function (t, e, r, i) {
        var a = "" + e;
        var s = "" + r;
        if (!t && a > s) {
          var n = a;
          a = s;
          s = n;
        }
        var l = {
          v: a,
          w: s
        };
        if (i) {
          l.name = i;
        }
        return l;
      }(this._isDirected, t, e, r);
      t = l.v;
      e = l.w;
      Object.freeze(l);
      this._edgeObjs[n] = l;
      y(this._preds[e], t);
      y(this._sucs[t], e);
      this._in[e][n] = l;
      this._out[t][n] = l;
      this._edgeCount++;
      return this;
    }
    edge(t, e, r) {
      var i = arguments.length == 1 ? b(this._isDirected, arguments[0]) : f(this._isDirected, t, e, r);
      return this._edgeLabels[i];
    }
    hasEdge(t, e, r) {
      var i = arguments.length == 1 ? b(this._isDirected, arguments[0]) : f(this._isDirected, t, e, r);
      return Object.prototype.hasOwnProperty.call(this._edgeLabels, i);
    }
    removeEdge(t, e, r) {
      var i = arguments.length == 1 ? b(this._isDirected, arguments[0]) : f(this._isDirected, t, e, r);
      var a = this._edgeObjs[i];
      if (a) {
        t = a.v;
        e = a.w;
        delete this._edgeLabels[i];
        delete this._edgeObjs[i];
        p(this._preds[e], t);
        p(this._sucs[t], e);
        delete this._in[e][i];
        delete this._out[t][i];
        this._edgeCount--;
      }
      return this;
    }
    inEdges(t, e) {
      var r = this._in[t];
      if (r) {
        var i = objectValuesHelper.getObjectValues(r);
        if (e) {
          return genericFilterUtil.genericFilter(i, function (t) {
            return t.v === e;
          });
        } else {
          return i;
        }
      }
    }
    outEdges(t, e) {
      var r = this._out[t];
      if (r) {
        var i = objectValuesHelper.getObjectValues(r);
        if (e) {
          return genericFilterUtil.genericFilter(i, function (t) {
            return t.w === e;
          });
        } else {
          return i;
        }
      }
    }
    nodeEdges(t, e) {
      var r = this.inEdges(t, e);
      if (r) {
        return r.concat(this.outEdges(t, e));
      }
    }
  }
  function y(t, e) {
    if (t[e]) {
      t[e]++;
    } else {
      t[e] = 1;
    }
  }
  function p(t, e) {
    if (! --t[e]) {
      delete t[e];
    }
  }
  function f(t, e, r, i) {
    var a = "" + e;
    var s = "" + r;
    if (!t && a > s) {
      var n = a;
      a = s;
      s = n;
    }
    return a + "" + s + "" + (isUndefinedCheck.isUndefined(i) ? "\0" : i);
  }
  function b(t, e) {
    return f(t, e.v, e.w, e.name);
  }
  g.prototype._nodeCount = 0;
  g.prototype._edgeCount = 0;
  require.d(exports, {
    Graph: function () {
      return g;
    }
  });
}