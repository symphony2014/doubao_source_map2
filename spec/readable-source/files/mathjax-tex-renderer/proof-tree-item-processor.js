// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 's' to 'mmlStackItemClasses'
// - Resolved require(174186) to 'mml-stack-item-classes'
// - Resolved require(384745) to 'mathml-node-stack-processor'
// - Resolved require(526347) to 'bussproofs-mathml-layout-balancer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 969412
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var o = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var i = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          n(e, t, Q);
        }
      }
    }
    o(e, t);
    return e;
  };
  var a = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.ProofTreeItem = undefined;
  var u = a(require("message-format-util") /*id: 342117*/);
  var mmlStackItemClasses = require("mml-stack-item-classes") /*id: 174186*/;
  var l = a(require("mathml-node-stack-processor") /*id: 384745*/);
  var c = i(require("bussproofs-mathml-layout-balancer") /*id: 526347*/);
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.leftLabel = null;
      e.rigthLabel = null;
      e.innerStack = new l.default(e.factory, {}, true);
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "proofTree";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (t) {
      if (t.isKind("end") && t.getName() === "prooftree") {
        var e = this.toMml();
        c.setProperty(e, "proof", true);
        return [[this.factory.create("mml", e), t], true];
      }
      if (t.isKind("stop")) {
        throw new u.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
      }
      this.innerStack.Push(t);
      return mmlStackItemClasses.BaseItem.fail;
    };
    e.prototype.toMml = function () {
      var e = t.prototype.toMml.call(this);
      var Q = this.innerStack.Top();
      if (Q.isKind("start") && !Q.Size()) {
        return e;
      }
      this.innerStack.Push(this.factory.create("stop"));
      var r = this.innerStack.Top().toMml();
      return this.create("node", "mrow", [r, e], {});
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.ProofTreeItem = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}