// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(872683) to 'mml-dummy-stack-item-factory'
// - Renamed variable 'a' to 'mathmlNodeFactory'
// - Resolved require(88273) to 'mathml-node-factory'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 's' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 751670
         */
module.exports = function (module, exports, require) {
  var r = this && this.__read || function (t, e) {
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
  var T = this && this.__spreadArray || function (t, e, Q) {
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
  var n = this && this.__values || function (t) {
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
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var i = o(require("mml-dummy-stack-item-factory") /*id: 872683*/);
  var mathmlNodeFactory = require("mathml-node-factory") /*id: 88273*/;
  var u = o(require("mathml-abstract-node-util") /*id: 352636*/);
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var l = function () {
    function t(t, e = []) {
      this.options = {};
      this.packageData = new Map();
      this.parsers = [];
      this.root = null;
      this.nodeLists = {};
      this.error = false;
      this.handlers = t.handlers;
      this.nodeFactory = new mathmlNodeFactory.NodeFactory();
      this.nodeFactory.configuration = this;
      this.nodeFactory.setCreators(t.nodes);
      this.itemFactory = new i.default(t.items);
      this.itemFactory.configuration = this;
      optionsMergeUtils.defaultOptions.apply(undefined, T([this.options], r(e), false));
      optionsMergeUtils.defaultOptions(this.options, t.options);
    }
    t.prototype.pushParser = function (t) {
      this.parsers.unshift(t);
    };
    t.prototype.popParser = function () {
      this.parsers.shift();
    };
    Object.defineProperty(t.prototype, "parser", {
      get: function () {
        return this.parsers[0];
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.clear = function () {
      this.parsers = [];
      this.root = null;
      this.nodeLists = {};
      this.error = false;
      this.tags.resetTag();
    };
    t.prototype.addNode = function (t, e) {
      var Q = this.nodeLists[t];
      Q ||= this.nodeLists[t] = [];
      Q.push(e);
      if (e.kind !== t) {
        var r = u.default.getProperty(e, "in-lists") || "";
        var T = (r ? r.split(/,/) : []).concat(t).join(",");
        u.default.setProperty(e, "in-lists", T);
      }
    };
    t.prototype.getList = function (t) {
      var e;
      var Q;
      var r = this.nodeLists[t] || [];
      var T = [];
      try {
        var o = n(r);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          if (this.inTree(a)) {
            T.push(a);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (Q = o.return)) {
            Q.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      this.nodeLists[t] = T;
      return T;
    };
    t.prototype.removeFromList = function (t, e) {
      var Q;
      var r;
      var T = this.nodeLists[t] || [];
      try {
        var o = n(e);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          var u = T.indexOf(a);
          if (u >= 0) {
            T.splice(u, 1);
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
    };
    t.prototype.inTree = function (t) {
      while (t && t !== this.root) {
        t = t.parent;
      }
      return !!t;
    };
    return t;
  }();
  exports.default = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}