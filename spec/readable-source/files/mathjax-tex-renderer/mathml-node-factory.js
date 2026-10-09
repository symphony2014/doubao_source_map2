// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(352636) to 'mathml-abstract-node-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 88273
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
  var n = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.NodeFactory = undefined;
  var o = n(require("mathml-abstract-node-util") /*id: 352636*/);
  var i = function () {
    function t() {
      this.mmlFactory = null;
      this.factory = {
        node: t.createNode,
        token: t.createToken,
        text: t.createText,
        error: t.createError
      };
    }
    t.createNode = function (t, e, Q = [], r = {}, T) {
      var n = t.mmlFactory.create(e);
      n.setChildren(Q);
      if (T) {
        n.appendChild(T);
      }
      o.default.setProperties(n, r);
      return n;
    };
    t.createToken = function (t, e, Q = {}, r = "") {
      var T = t.create("text", r);
      return t.create("node", e, [], Q, T);
    };
    t.createText = function (t, e) {
      if (e == null) {
        return null;
      } else {
        return t.mmlFactory.create("text").setText(e);
      }
    };
    t.createError = function (t, e) {
      var Q = t.create("text", e);
      var r = t.create("node", "mtext", [], {}, Q);
      return t.create("node", "merror", [r], {
        "data-mjx-error": e
      });
    };
    t.prototype.setMmlFactory = function (t) {
      this.mmlFactory = t;
    };
    t.prototype.set = function (t, e) {
      this.factory[t] = e;
    };
    t.prototype.setCreators = function (t) {
      for (var e in t) {
        this.set(e, t[e]);
      }
    };
    t.prototype.create = function (t) {
      var e = [];
      var Q = 1;
      for (; Q < arguments.length; Q++) {
        e[Q - 1] = arguments[Q];
      }
      var n = (this.factory[t] || this.factory.node).apply(undefined, T([this, e[0]], r(e.slice(1)), false));
      if (t === "node") {
        this.configuration.addNode(e[0], n);
      }
      return n;
    };
    t.prototype.get = function (t) {
      return this.factory[t];
    };
    return t;
  }();
  exports.NodeFactory = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}